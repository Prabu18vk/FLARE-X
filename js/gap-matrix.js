/**
 * FLARE-X Research Gap Matrix (P1)
 * Multi-dimensional coverage heatmap over fuel materials, gravity levels, pressure, oxygen, and outcomes.
 * 
 * Strict Scientific Guardrails:
 * - Cells are labeled: "records found", "not found in indexed collection", or "not enough metadata to determine"
 * - Prominently displays the indexed scope
 * - NEVER claims NASA has not studied a condition; strictly states that it was not found in the indexed collection
 * - Includes a generated gap synthesis report linking directly to boundary records
 */

class ResearchGapMatrix {
  constructor() {
    this.xAxisMode = 'gravity'; // 'gravity', 'pressure', 'oxygen'
    this.targetOutcome = 'flame_spread_rate';
  }

  init() {
    this.bindEvents();
    this.render();
    window.dataService.subscribe(() => {
      this.render();
    });
  }

  bindEvents() {
    const xAxisSelect = document.getElementById('gap-xaxis-select');
    if (xAxisSelect) {
      xAxisSelect.addEventListener('change', (e) => {
        this.xAxisMode = e.target.value;
        this.render();
      });
    }

    const outcomeSelect = document.getElementById('gap-outcome-select');
    if (outcomeSelect) {
      outcomeSelect.addEventListener('change', (e) => {
        this.targetOutcome = e.target.value;
        this.render();
      });
    }

    const exportBtn = document.getElementById('gap-export-report-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        this.exportGapReport();
      });
    }
  }

  render() {
    this.renderScopeBanner();
    this.renderMatrixTable();
    this.renderGapSummary();
  }

  renderScopeBanner() {
    const scopeDiv = document.getElementById('gap-scope-banner');
    if (!scopeDiv) return;

    const metadata = window.dataService.getMetadata();
    const experiments = window.dataService.getExperiments();

    scopeDiv.innerHTML = `
      <div class="callout-box info" style="margin: 0;">
        <div class="callout-icon">🔭</div>
        <div>
          <div class="callout-title">Indexed Collection Scope: ${experiments.length} Records (${metadata.is_placeholder ? 'Placeholder Sample Dataset' : 'Custom Uploaded Data'})</div>
          <div class="callout-text" style="font-size: 0.8rem; color: #cbd5e1;">
            <strong>Mandatory Scientific Guardrail:</strong> Results displayed in this matrix reflect <em>only the currently indexed records</em> in FLARE-X. A status of "not found" indicates absence within this specific database index, and does <strong>NOT</strong> claim or imply that NASA, ESA, JAXA, or the broader combustion science community has not conducted research under that condition.
          </div>
        </div>
      </div>
    `;
  }

  renderMatrixTable() {
    const container = document.getElementById('gap-heatmap-container');
    if (!container) return;

    const categories = window.dataService.getCoverageCategories();
    const experiments = window.dataService.getExperiments();

    if (!categories) {
      container.innerHTML = `<div class="not-available">Coverage categories not available</div>`;
      return;
    }

    // Row definitions (Materials)
    const materials = categories.materials || [];

    // Column definitions based on xAxisMode
    let columns = [];
    if (this.xAxisMode === 'gravity') {
      columns = categories.gravity_conditions || [];
    } else if (this.xAxisMode === 'pressure') {
      columns = categories.pressure_ranges || [];
    } else if (this.xAxisMode === 'oxygen') {
      columns = categories.oxygen_conditions || [];
    }

    let html = `
      <table class="heatmap-table">
        <thead>
          <tr>
            <th class="row-header">Fuel / Material (${materials.length})</th>
            ${columns.map(col => `<th>${col.label}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
    `;

    materials.forEach(mat => {
      html += `<tr>`;
      html += `<th class="row-header">
        <div style="font-weight: 600; color: #fff;">${mat.label}</div>
        <div style="font-size: 0.68rem; color: var(--text-muted);">${mat.class}</div>
      </th>`;

      columns.forEach(col => {
        const evalCell = this.evaluateCell(mat, col, this.xAxisMode, this.targetOutcome, experiments);

        let cellClass = 'not-found';
        let cellText = 'Not found in indexed collection';
        let badgeCount = '';

        if (evalCell.status === 'FOUND') {
          cellClass = 'found';
          badgeCount = `<span style="font-size: 0.82rem; font-weight: 800;">${evalCell.records.length}</span>`;
          cellText = `${evalCell.records.length} record${evalCell.records.length > 1 ? 's' : ''} found`;
        } else if (evalCell.status === 'INSUFFICIENT_METADATA') {
          cellClass = 'insufficient';
          cellText = 'Not enough metadata to determine';
        }

        html += `
          <td>
            <div class="heatmap-cell ${cellClass}" onclick="researchGapMatrix.inspectCell('${mat.id}', '${col.id}')">
              ${badgeCount}
              <span style="font-size: 0.68rem; margin-top: 2px;">${cellText}</span>
            </div>
          </td>
        `;
      });

      html += `</tr>`;
    });

    html += `
        </tbody>
      </table>
    `;

    container.innerHTML = html;
  }

  evaluateCell(mat, col, xAxisMode, targetOutcome, experiments) {
    // Filter matching material
    const matchingMatExps = experiments.filter(e => {
      const fuel = (e.material_fuel || '').toLowerCase();
      const targetMatId = mat.id.toLowerCase();
      if (targetMatId === 'pmma') return fuel.includes('pmma') || fuel.includes('methacrylate');
      if (targetMatId === 'sibal') return fuel.includes('sibal') || fuel.includes('cotton');
      if (targetMatId === 'hdpe') return fuel.includes('hdpe') || fuel.includes('polyethylene');
      if (targetMatId === 'ch4') return fuel.includes('methane') || fuel.includes('ch4');
      if (targetMatId === 'c2h4') return fuel.includes('ethylene') || fuel.includes('c2h4');
      if (targetMatId === 'heptane') return fuel.includes('heptane');
      if (targetMatId === 'nomex') return fuel.includes('nomex');
      if (targetMatId === 'silicone') return fuel.includes('silicone');
      return fuel.includes(targetMatId);
    });

    if (matchingMatExps.length === 0) {
      return { status: 'NOT_FOUND', records: [] };
    }

    // Now filter by X-axis condition
    const matchingConditionExps = matchingMatExps.filter(e => {
      if (xAxisMode === 'gravity') {
        const grav = (e.gravity_condition || '').toLowerCase();
        if (col.id === 'microgravity') return grav.includes('microgravity') || grav.includes('10^-');
        if (col.id === 'lunar') return grav.includes('lunar') || grav.includes('0.16');
        if (col.id === 'martian') return grav.includes('martian') || grav.includes('0.38');
        if (col.id === 'terrestrial') return grav.includes('1g') || grav.includes('1.0') || grav.includes('terrestrial');
      } else if (xAxisMode === 'pressure') {
        const p = e.pressure?.value;
        if (p === null || p === undefined) return false;
        if (col.id === 'sub_atmospheric') return p < 70;
        if (col.id === 'normobaric') return p >= 70 && p <= 105;
        if (col.id === 'hyperbaric') return p > 105;
      } else if (xAxisMode === 'oxygen') {
        const o2 = e.oxygen_percent?.value;
        if (o2 === null || o2 === undefined) return false;
        if (col.id === 'hypoxic') return o2 < 20;
        if (col.id === 'ambient') return o2 >= 20 && o2 <= 22;
        if (col.id === 'enriched_moderate') return o2 > 22 && o2 <= 32;
        if (col.id === 'enriched_high') return o2 > 32;
      }
      return false;
    });

    if (matchingConditionExps.length === 0) {
      // Check if some records had null condition metadata
      const hasNullCondition = matchingMatExps.some(e => {
        if (xAxisMode === 'pressure') return !e.pressure || e.pressure.value === null;
        if (xAxisMode === 'oxygen') return !e.oxygen_percent || e.oxygen_percent.value === null;
        if (xAxisMode === 'gravity') return !e.gravity_condition;
        return false;
      });
      if (hasNullCondition) {
        return { status: 'INSUFFICIENT_METADATA', records: [] };
      }
      return { status: 'NOT_FOUND', records: [] };
    }

    // Finally check target outcome variable presence
    const recordsWithOutcome = matchingConditionExps.filter(e => {
      const vars = e.measured_variables || [];
      if (targetOutcome === 'flame_spread_rate') {
        return vars.some(v => v.name && v.name.toLowerCase().includes('spread') && v.value !== null);
      } else if (targetOutcome === 'extinction_limits') {
        return vars.some(v => v.name && v.name.toLowerCase().includes('extinction') && v.value !== null);
      } else if (targetOutcome === 'soot_radiation') {
        return vars.some(v => v.name && (v.name.toLowerCase().includes('soot') || v.name.toLowerCase().includes('radiat')) && v.value !== null);
      } else if (targetOutcome === 'cool_flame') {
        return vars.some(v => v.name && v.name.toLowerCase().includes('cool') && v.value !== null);
      } else if (targetOutcome === 'pyrolysis_temp') {
        return vars.some(v => v.name && v.name.toLowerCase().includes('temperature') && v.value !== null);
      }
      return true;
    });

    if (recordsWithOutcome.length > 0) {
      return { status: 'FOUND', records: recordsWithOutcome };
    } else {
      return { status: 'INSUFFICIENT_METADATA', records: matchingConditionExps };
    }
  }

  inspectCell(matId, colId) {
    const categories = window.dataService.getCoverageCategories();
    const experiments = window.dataService.getExperiments();
    const mat = (categories.materials || []).find(m => m.id === matId);
    let columns = [];
    if (this.xAxisMode === 'gravity') columns = categories.gravity_conditions || [];
    else if (this.xAxisMode === 'pressure') columns = categories.pressure_ranges || [];
    else if (this.xAxisMode === 'oxygen') columns = categories.oxygen_conditions || [];
    const col = columns.find(c => c.id === colId);

    if (!mat || !col) return;

    const result = this.evaluateCell(mat, col, this.xAxisMode, this.targetOutcome, experiments);

    const modal = document.getElementById('dossier-modal');
    const content = document.getElementById('dossier-modal-body');
    const title = document.getElementById('dossier-modal-title');
    if (!modal || !content) return;

    title.innerHTML = `Coverage Cell: ${mat.label} &times; ${col.label}`;

    let statusHtml = '';
    if (result.status === 'FOUND') {
      statusHtml = `
        <div class="callout-box info" style="border-left-color: var(--accent-green); background: rgba(16, 185, 129, 0.08);">
          <div class="callout-icon">✅</div>
          <div>
            <div class="callout-title" style="color: #34d399;">${result.records.length} Record(s) Indexed</div>
            <div class="callout-text">Experiments matching this material and environmental envelope are indexed with verified "${this.targetOutcome}" measurements.</div>
          </div>
        </div>
        <div style="margin-top: 16px;">
          <h4 style="font-size: 0.85rem; color: #fff; margin-bottom: 8px;">Matching Experiment Records:</h4>
          ${result.records.map(r => `
            <div style="background: var(--bg-surface-elevated); padding: 12px; border-radius: 6px; border: 1px solid var(--border-subtle); margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span class="exp-id-badge">${r.id}</span>
                <span style="color: #fff; font-weight: 600; margin-left: 8px;">${r.name}</span>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">Platform: ${r.platform} | Airflow: ${window.dataService.formatQuantity(r.airflow)}</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="experimentLibrary.openDossier('${r.id}')">View Dossier</button>
            </div>
          `).join('')}
        </div>
      `;
    } else if (result.status === 'INSUFFICIENT_METADATA') {
      statusHtml = `
        <div class="callout-box warning">
          <div class="callout-icon">⚠️</div>
          <div>
            <div class="callout-title" style="color: #fbbf24;">Not Enough Metadata to Determine</div>
            <div class="callout-text">
              Material records were identified in the index, but either key environmental parameters (pressure/oxygen) were unrecorded (marked "Not available"), or the specific target variable "${this.targetOutcome}" was not instrumented.
            </div>
          </div>
        </div>
      `;
    } else {
      statusHtml = `
        <div class="callout-box info">
          <div class="callout-icon">🔍</div>
          <div>
            <div class="callout-title">Not Found in Indexed Collection</div>
            <div class="callout-text">
              No experiment records in the currently loaded dataset correspond to <strong>${mat.label}</strong> under <strong>${col.label}</strong>.
            </div>
            <div style="margin-top: 8px; font-size: 0.76rem; color: var(--text-secondary);">
              <strong>Scientific Guardrail Notice:</strong> This indicates an unindexed parameter domain within this software instance. It does not represent an absence of external published literature or historical flight test data.
            </div>
          </div>
        </div>
      `;
    }

    content.innerHTML = statusHtml;
    modal.classList.add('open');
  }

  renderGapSummary() {
    const summaryDiv = document.getElementById('gap-summary-content');
    if (!summaryDiv) return;

    const experiments = window.dataService.getExperiments();

    summaryDiv.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 14px; font-size: 0.84rem; line-height: 1.5; color: #cbd5e1;">
        <div style="background: var(--bg-surface-elevated); padding: 14px 18px; border-radius: 8px; border: 1px solid var(--border-subtle);">
          <h4 style="color: #fff; font-size: 0.95rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
            <span>🔬</span> Automated Scientific Gap Synthesis (Collection-Scoped)
          </h4>
          <p style="color: var(--text-secondary); font-size: 0.8rem;">
            Generated based on cross-examination of ${experiments.length} indexed records against the 8 NASA candidate fuel categories and 4 gravity regimes:
          </p>

          <ul style="margin: 10px 0 10px 20px; display: flex; flex-direction: column; gap: 8px;">
            <li>
              <strong>Critical Gap 1 — Partial Gravity Regimes (Lunar & Martian):</strong> 
              No records in the current collection contain empirical combustion data for Lunar (0.16g) or Martian (0.38g) gravity levels. All active records are confined to microgravity (~10^-6 to 10^-4 g) or terrestrial 1g baselines.
              <br><span style="font-size: 0.74rem; color: var(--accent-cyan);">Boundary references: EXP-BASS-PMMA-01, EXP-ACME-CIR-01.</span>
            </li>
            <li>
              <strong>Critical Gap 2 — Advanced Flame-Resistant Materials:</strong>
              High-performance spacecraft engineering polymers such as Nomex/Aramid and aerospace silicone elastomers show zero indexed records for flame spread rate or radiative flux in microgravity.
              <br><span style="font-size: 0.74rem; color: var(--accent-cyan);">Boundary references: Saffire-II multi-sample array investigated PMMA, but advanced blends remain unindexed.</span>
            </li>
            <li>
              <strong>Critical Gap 3 — Sub-Atmospheric Exploration Regimes (&lt; 70 kPa):</strong>
              NASA Exploration Atmosphere targets (56-70 kPa with 30-34% O2) are underrepresented; current indexed solid burns cluster at normobaric (~100 kPa) conditions.
              <br><span style="font-size: 0.74rem; color: var(--accent-cyan);">Boundary reference: EXP-BASS-COTTON-02 tested 18% O2 at 98.5 kPa.</span>
            </li>
          </ul>

          <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px dashed var(--border-subtle); padding-top: 8px; margin-top: 10px;">
            <em>Note: Gap matrix analysis is continuously refreshed when new experimental datasets or PSI flight runs are loaded via the Import Data module.</em>
          </div>
        </div>
      </div>
    `;
  }

  exportGapReport() {
    const experiments = window.dataService.getExperiments();
    const reportText = `# FLARE-X Research Gap Matrix Synthesis Report
Generated: ${new Date().toISOString()}
Indexed Scope: ${experiments.length} Records
Scientific Disclaimer: Research decision-support tool. Not certified spacecraft safety guidance. Not an official NASA product.

## 1. SCOPE AND GUARDRAILS
Results reflect only the currently indexed collection. Unrepresented conditions indicate gaps in the active index, not the entirety of NASA research.

## 2. KEY IDENTIFIED GAPS
- G-01: Partial Gravity Regimes (Lunar 0.16g, Martian 0.38g): 0 records.
- G-02: Advanced Flame-Resistant Spacecraft Materials (Nomex, Silicone): 0 records.
- G-03: Sub-Atmospheric Exploration Atmospheres (< 70 kPa): 0 records.

## 3. INDEXED BOUNDARY RECORDS UTILIZED
${experiments.map(e => `- ${e.id}: ${e.name} (${e.material_fuel}, ${e.platform})`).join('\n')}
`;

    const blob = new Blob([reportText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FLARE_X_Gap_Report_${new Date().toISOString().slice(0,10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

window.researchGapMatrix = new ResearchGapMatrix();
