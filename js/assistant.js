/**
 * FLARE-X Evidence-Grounded Research Assistant (P0)
 * Grounded query retrieval engine over indexed NASA publications and experiment records.
 * 
 * Strict Scientific Guardrails:
 * - Every factual statement includes citations and statement type tags:
 *   [MEASURED FACT], [PAPER CONCLUSION], [CROSS-STUDY INTERPRETATION], [MODEL ESTIMATE]
 * - Interactive "Show evidence" view exposes raw excerpts, page numbers, and retrieval timestamps
 * - If evidence is insufficient, responds that the indexed sources do not establish the answer
 * - Never answers from general knowledge without an indexed source
 */

class ResearchAssistant {
  constructor() {
    this.messages = [];
    this.isQuerying = false;
  }

  init() {
    this.bindEvents();
    // Welcome message with scientific disclaimer
    if (this.messages.length === 0) {
      this.messages.push({
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString(),
        content: `
          <div class="answer-section">
            <p><strong>FLARE-X Evidence-Grounded Research Assistant initialized.</strong></p>
            <p style="margin-top: 6px; color: var(--text-secondary); font-size: 0.84rem;">
              I provide decision-support strictly derived from the currently indexed microgravity combustion dataset and published literature. Every answer will be tagged by statement type (<em>Measured Fact</em>, <em>Paper Conclusion</em>, <em>Cross-Study Interpretation</em>, or <em>Model Estimate</em>) and supported by auditable excerpts.
            </p>
            <div class="callout-box info" style="margin-top: 10px; padding: 10px 14px;">
              <div class="callout-text" style="font-size: 0.76rem;">
                <strong>Scientific Guardrail Active:</strong> If a query cannot be verified from the indexed records, I will state that the indexed collection does not establish the answer rather than improvising from general knowledge.
              </div>
            </div>
          </div>
        `,
        evidence: null
      });
      this.renderMessages();
    }
  }

  bindEvents() {
    const input = document.getElementById('assistant-chat-input');
    const sendBtn = document.getElementById('assistant-send-btn');

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleUserSubmit();
        }
      });
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', () => {
        this.handleUserSubmit();
      });
    }
  }

  handleUserSubmit() {
    const input = document.getElementById('assistant-chat-input');
    if (!input) return;
    const query = input.value.trim();
    if (!query || this.isQuerying) return;

    input.value = '';
    this.ask(query);
  }

  ask(query) {
    // Add user message
    this.messages.push({
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
      content: `<p>${this.escapeHtml(query)}</p>`,
      evidence: null
    });
    this.renderMessages();

    // Process query against indexed documents & experiments
    this.isQuerying = true;
    setTimeout(() => {
      const response = this.retrieveAndSynthesize(query);
      this.messages.push({
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString(),
        content: response.html,
        evidence: response.evidence
      });
      this.isQuerying = false;
      this.renderMessages();
    }, 300);
  }

  escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  retrieveAndSynthesize(query) {
    const documents = window.dataService.getDocuments();
    const experiments = window.dataService.getExperiments();

    const q = query.toLowerCase();
    const tokens = q.split(/\W+/).filter(t => t.length > 2 && !['the', 'and', 'for', 'with', 'what', 'how', 'does', 'are', 'was', 'were', 'from', 'this', 'that'].includes(t));

    // Match passages across documents
    const scoredPassages = [];

    documents.forEach(doc => {
      (doc.passages || []).forEach(p => {
        let score = 0;
        const textLower = p.text.toLowerCase();
        const sectionLower = (p.section || '').toLowerCase();
        const topics = (p.topics || []).map(t => t.toLowerCase());

        tokens.forEach(token => {
          if (textLower.includes(token)) score += 3;
          if (sectionLower.includes(token)) score += 4;
          if (topics.some(t => t.includes(token))) score += 5;
        });

        // Exact multi-word phrases bonus
        if (q.includes('pmma') && textLower.includes('pmma')) score += 5;
        if (q.includes('sibal') && (textLower.includes('sibal') || textLower.includes('cotton'))) score += 5;
        if (q.includes('methane') && textLower.includes('methane')) score += 5;
        if (q.includes('ethylene') && textLower.includes('ethylene')) score += 5;
        if (q.includes('cool flame') && (textLower.includes('cool flame') || textLower.includes('second-stage'))) score += 8;
        if (q.includes('extinction') && textLower.includes('extinction')) score += 4;
        if (q.includes('airflow') && (textLower.includes('airflow') || textLower.includes('flow'))) score += 4;
        if (q.includes('soot') && textLower.includes('soot')) score += 5;

        if (score > 4) {
          scoredPassages.push({
            passage: p,
            docTitle: doc.title,
            authors: doc.authors,
            pub: doc.publication,
            year: doc.year,
            url: doc.source_url,
            retrieval_date: doc.retrieval_date,
            score
          });
        }
      });
    });

    // Sort passages by score
    scoredPassages.sort((a, b) => b.score - a.score);

    // Guardrail: Check if evidence is sufficient
    if (scoredPassages.length === 0) {
      return {
        html: `
          <div class="answer-section">
            <div class="callout-box warning">
              <div class="callout-icon">⚠️</div>
              <div>
                <div class="callout-title" style="color: #fbbf24;">Evidence Insufficient in Indexed Collection</div>
                <div class="callout-text">
                  The currently indexed sources do not establish an answer to this query. FLARE-X is strictly grounded in the indexed NASA microgravity collection and will not extrapolate, fabricate, or answer from ungrounded general knowledge.
                </div>
              </div>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 10px;">
              <strong>Supported topics in current index:</strong> PMMA solid flame spread, Sibal cotton/fiberglass extinction limits, Saffire large-scale duct fires, ACME methane/ethylene soot and radiation, and FLEX heptane cool flames.
            </p>
          </div>
        `,
        evidence: null
      };
    }

    // Evidence exists! Synthesize structured answer with citations and badges
    const topMatches = scoredPassages.slice(0, 3);
    const evidenceList = topMatches.map(m => ({
      passageId: m.passage.passage_id,
      docTitle: m.docTitle,
      authors: m.authors,
      year: m.year,
      page: m.passage.page,
      section: m.passage.section,
      statementType: m.passage.statement_type,
      text: m.passage.text,
      url: m.url,
      retrievalDate: m.retrieval_date
    }));

    // Build synthesized answer
    let answerHtml = `<div class="answer-section">`;
    answerHtml += `<p style="margin-bottom: 12px; font-weight: 600; color: #fff;">Synthesized from ${topMatches.length} indexed scientific passage${topMatches.length > 1 ? 's' : ''}:</p>`;

    topMatches.forEach((m, idx) => {
      const p = m.passage;
      let badgeClass = 'measured-fact';
      if (p.statement_type === 'PAPER CONCLUSION') badgeClass = 'paper-conclusion';
      else if (p.statement_type === 'CROSS-STUDY INTERPRETATION') badgeClass = 'cross-study';
      else if (p.statement_type === 'MODEL ESTIMATE') badgeClass = 'model-estimate';

      const shortCitation = `${m.authors.split(',')[0]} et al. (${m.year}), p. ${p.page}`;

      answerHtml += `
        <div class="answer-statement" style="background: rgba(13, 18, 34, 0.6); padding: 10px 14px; border-radius: 6px; border-left: 3px solid var(--border-active); margin-bottom: 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span class="statement-badge ${badgeClass}">${p.statement_type}</span>
            <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">[${shortCitation}]</span>
          </div>
          <div style="font-size: 0.88rem; color: #e2e8f0; line-height: 1.45;">
            ${p.text}
          </div>
        </div>
      `;
    });

    answerHtml += `</div>`;

    return {
      html: answerHtml,
      evidence: evidenceList
    };
  }

  renderMessages() {
    const scrollContainer = document.getElementById('assistant-messages-scroll');
    if (!scrollContainer) return;

    scrollContainer.innerHTML = this.messages.map((msg, idx) => {
      const hasEvidence = msg.evidence && msg.evidence.length > 0;
      return `
        <div class="chat-message ${msg.sender}">
          <div class="message-meta">
            <span>${msg.sender === 'user' ? '👤 Researcher' : '🛰️ FLARE-X Decision Support'}</span>
            <span>•</span>
            <span>${msg.timestamp}</span>
          </div>
          <div class="message-bubble">
            ${msg.content}

            ${hasEvidence ? `
              <div class="evidence-drawer">
                <button class="evidence-toggle-btn" onclick="researchAssistant.toggleEvidence(${idx})">
                  🔍 Show Auditable Ground-Truth Evidence (${msg.evidence.length} sources)
                </button>
                <div class="evidence-details-content" id="evidence-box-${idx}" style="display: none;">
                  ${msg.evidence.map(ev => `
                    <div class="evidence-item">
                      <div class="evidence-citation-line">
                        <span><strong>${ev.authors} (${ev.year})</strong> — ${ev.docTitle}</span>
                        <span class="statement-badge ${ev.statementType.toLowerCase().replace(/[\s_]+/g, '-')}">${ev.statementType}</span>
                      </div>
                      <div style="font-size: 0.7rem; color: var(--text-muted); margin: 3px 0 6px;">
                        Section: <em>${ev.section}</em> | Page: <code>${ev.page}</code> | Retrieved: <code>${ev.retrievalDate}</code>
                      </div>
                      <div class="evidence-excerpt">
                        "${ev.text}"
                      </div>
                      ${ev.url ? `
                        <div style="margin-top: 4px;">
                          <a href="${ev.url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline; font-size: 0.72rem;">DOI: ${ev.url}</a>
                        </div>
                      ` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }

  toggleEvidence(msgIndex) {
    const box = document.getElementById(`evidence-box-${msgIndex}`);
    if (box) {
      const isHidden = box.style.display === 'none';
      box.style.display = isHidden ? 'block' : 'none';
    }
  }

  askPreset(presetQuery) {
    const input = document.getElementById('assistant-chat-input');
    if (input) input.value = presetQuery;
    this.ask(presetQuery);
  }
}

window.researchAssistant = new ResearchAssistant();
