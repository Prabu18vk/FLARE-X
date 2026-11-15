/**
 * FLARE-X Experiment Library (P0)
 * Search, faceted filters, telemetry cards, and detailed scientific dossier modals.
 * Strictly presents "Not available" for unrecorded or missing fields with complete provenance.
 */

class ExperimentLibrary {
  constructor() {
    this.currentFilters = {
      query: '',
      material: 'all',
      platform: 'all',
      gravity: 'all',
      measurement: 'all'
    };
    this.selectedForCompare = new Set();
  }

  init() {
    this.bindEvents();
    this.render();
    window.dataService.subscribe(() => {
      this.populateFilterDropdowns();
      this.render();
    });
    this.populateFilterDropdowns();
  }

  bindEvents() {
    const searchInput = document.getElementById('lib-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentFilters.query = e.target.value;
        this.render();
      });
    }

    const matFilter = document.getElementById('lib-filter-material');
    if (matFilter) {
      matFilter.addEventListener('change', (e) => {
        this.currentFilters.material = e.target.value;
        this.render();
      });
    }

    const platFilter = document.getElementById('lib-filter-platform');
    if (platFilter) {
      platFilter.addEventListener('change', (e) => {
        this.currentFilters.platform = e.target.value;
        this.render();
      });
    }

    const gravFilter = document.getElementById('lib-filter-gravity');
    if (gravFilter) {
      gravFilter.addEventListener('change', (e) => {
        this.currentFilters.gravity = e.target.value;
        this.render();
      });
    }

    const measFilter = document.getElementById('lib-filter-measurement');
    if (measFilter) {
      measFilter.addEventListener('change', (e) => {
        this.currentFilters.measurement = e.target.value;
        this.render();
      });
    }

    const resetBtn = document.getElementById('lib-reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.currentFilters = {
          query: '',
          material: 'all',
          platform: 'all',
          gravity: 'all',
          measurement: 'all'
        };
        if (searchInput) searchInput.value = '';
        if (matFilter) matFilter.value = 'all';
        if (platFilter) platFilter.value = 'all';
        if (gravFilter) gravFilter.value = 'all';
        if (measFilter) measFilter.value = 'all';
        this.render();
      });
    }
  }

  populateFilterDropdowns() {
    const experiments = window.dataService.getExperiments();

    // Materials
    const materials = new Set();
    const platforms = new Set();
    const gravities = new Set();
    const measurements = new Set();

    experiments.forEach(exp => {
      if (exp.material_fuel) materials.add(exp.material_fuel.split('(')[0].trim());
      if (exp.platform) platforms.add(exp.platform);
      if (exp.gravity_condition) gravities.add(exp.gravity_condition);
      (exp.measured_variables || []).forEach(v => {
        if (v.name) measurements.add(v.name);
      });
    });

    this.populateSelect('lib-filter-material', Array.from(materials));
    this.populateSelect('lib-filter-platform', Array.from(platforms));
    this.populateSelect('lib-filter-gravity', Array.from(gravities));
    this.populateSelect('lib-filter-measurement', Array.from(measurements));
  }

  populateSelect(elementId, items) {
    const select = document.getElementById(elementId);
    if (!select) return;
    const currentVal = select.value;
    const firstOption = select.options[0]?.text || 'All';
    select.innerHTML = `<option value="all">${firstOption}</option>`;
    items.sort().forEach(item => {
      const opt = document.createElement('option');
      opt.value = item;
      opt.textContent = item;
      select.appendChild(opt);
    });
    if (items.includes(currentVal)) {
      select.value = currentVal;
    }
  }

  render() {
    const results = window.dataService.searchExperiments(this.currentFilters);
    const container = document.getElementById('lib-experiments-grid');
    const countBadge = document.getElementById('lib-results-count');

    if (countBadge) {
      countBadge.textContent = `${results.length} record${results.length === 1 ? '' : 's'} displayed`;
    }

    if (!container) return;

    if (results.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: 8px;">
          <div style="font-size: 1.8rem; margin-bottom: 8px; color: var(--text-muted);">🔬</div>
          <h3 style="color: #fff; margin-bottom: 6px;">No experiments match active filters</h3>
          <p style="color: var(--text-secondary); font-size: 0.85rem;">Try broadening your query, clearing filters, or importing additional NASA PSI records.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = results.map(exp => this.renderCard(exp)).join('');
  }

  renderCard(exp) {
    const o2Display = window.dataService.formatQuantity(exp.oxygen_percent);
    const pDisplay = window.dataService.formatQuantity(exp.pressure);
    const flowDisplay = window.dataService.formatQuantity(exp.airflow);
    const isSelected = this.selectedForCompare.has(exp.id);

    const primaryVars = (exp.measured_variables || []).filter(v => v.value !== null && v.value !== undefined).slice(0, 3);

    return `
      <div class="experiment-card ${isSelected ? 'selected' : ''}" id="card-${exp.id}">
        <div>
          <div class="card-top">
            <span class="exp-id-badge">${exp.id}</span>
            <span class="tag-badge gravity">${exp.gravity_condition || 'Not available'}</span>
          </div>

          <h3 class="card-title">${exp.name || '<span class="not-available">Not available</span>'}</h3>
          <p class="card-objective">${exp.objective || '<span class="not-available">Not available</span>'}</p>

          <div class="card-tags">
            <span class="tag-badge platform">🛰️ ${exp.platform || 'Not available'}</span>
            <span class="tag-badge material">🧪 ${exp.material_fuel || 'Not available'}</span>
          </div>

          <div class="telemetry-mini-grid">
            <div class="telemetry-item">
              <span class="telemetry-label">O2 Level</span>
              <span class="telemetry-val">${o2Display}</span>
            </div>
            <div class="telemetry-item">
              <span class="telemetry-label">Pressure</span>
              <span class="telemetry-val">${pDisplay}</span>
            </div>
            <div class="telemetry-item">
              <span class="telemetry-label">Airflow</span>
              <span class="telemetry-val">${flowDisplay}</span>
            </div>
          </div>

          ${primaryVars.length > 0 ? `
            <div style="margin-bottom: 14px; font-size: 0.76rem; background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px;">
              <span style="color: var(--text-muted); text-transform: uppercase; font-size: 0.65rem; font-weight: 700; display: block; margin-bottom: 4px;">Key Measurements</span>
              ${primaryVars.map(v => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                  <span style="color: var(--text-secondary);">${v.name}:</span>
                  <span style="font-family: var(--font-mono); font-weight: 600; color: #fff;">${v.value} ${v.unit || ''}</span>
                </div>
              `).join('')}
            </div>
          ` : `
            <div style="margin-bottom: 14px; font-size: 0.74rem;">
              <span class="not-available">No measured variables on record</span>
            </div>
          `}
        </div>

        <div class="card-footer">
          <span class="card-source-citation" title="${exp.source_document || 'Source unlisted'}">
            📄 ${exp.source_document ? exp.source_document.split(',')[0] : '<span class="not-available">Not available</span>'}
          </span>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="experimentLibrary.openDossier('${exp.id}')">
              Dossier
            </button>
            <button class="btn ${isSelected ? 'btn-danger' : 'btn-outline'} btn-sm" onclick="experimentLibrary.toggleCompare('${exp.id}')">
              ${isSelected ? 'Remove' : '+ Compare'}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  toggleCompare(expId) {
    if (this.selectedForCompare.has(expId)) {
      this.selectedForCompare.delete(expId);
    } else {
      this.selectedForCompare.add(expId);
    }
    this.render();
    if (window.comparisonLab) {
      window.comparisonLab.syncFromLibrary(Array.from(this.selectedForCompare));
    }
  }

  openDossier(expId) {
    const exp = window.dataService.getExperimentById(expId);
    if (!exp) return;

    const modal = document.getElementById('dossier-modal');
    const content = document.getElementById('dossier-modal-body');
    const title = document.getElementById('dossier-modal-title');

    if (!modal || !content) return;

    title.innerHTML = `<span class="exp-id-badge">${exp.id}</span> ${exp.name}`;

    const o2Display = window.dataService.formatQuantity(exp.oxygen_percent);
    const pDisplay = window.dataService.formatQuantity(exp.pressure);
    const flowDisplay = window.dataService.formatQuantity(exp.airflow);

    const provenanceMap = exp.provenance_per_field || {};

    content.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Overview Banner -->
        <div style="background: var(--bg-surface-elevated); padding: 16px; border-radius: 8px; border: 1px solid var(--border-subtle);">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px;">Scientific Objective</h4>
          <p style="color: #fff; font-size: 0.92rem; line-height: 1.45;">${exp.objective || '<span class="not-available">Not available</span>'}</p>
        </div>

        <!-- Environmental Setup Matrix -->
        <div>
          <h4 style="font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 10px;">Chamber & Boundary Conditions</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
            <div style="background: var(--bg-surface-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted);">Platform / Rig</div>
              <div style="font-size: 0.88rem; font-weight: 600; color: #fff; margin-top: 3px;">${exp.platform || '<span class="not-available">Not available</span>'}</div>
            </div>
            <div style="background: var(--bg-surface-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted);">Gravity Field</div>
              <div style="font-size: 0.88rem; font-weight: 600; color: #fff; margin-top: 3px;">${exp.gravity_condition || '<span class="not-available">Not available</span>'}</div>
            </div>
            <div style="background: var(--bg-surface-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted);">Fuel Material & Form</div>
              <div style="font-size: 0.88rem; font-weight: 600; color: #fff; margin-top: 3px;">${exp.material_fuel || '<span class="not-available">Not available</span>'}</div>
            </div>
            <div style="background: var(--bg-surface-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted);">Oxygen Concentration</div>
              <div style="font-size: 0.88rem; font-weight: 600; color: #fff; margin-top: 3px;">${o2Display}</div>
            </div>
            <div style="background: var(--bg-surface-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted);">Chamber Pressure</div>
              <div style="font-size: 0.88rem; font-weight: 600; color: #fff; margin-top: 3px;">${pDisplay}</div>
            </div>
            <div style="background: var(--bg-surface-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted);">Forced Airflow</div>
              <div style="font-size: 0.88rem; font-weight: 600; color: #fff; margin-top: 3px;">${flowDisplay}</div>
            </div>
          </div>
        </div>

        <!-- Measured Variables Detailed Table -->
        <div>
          <h4 style="font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 10px;">Measured Variables & Sensor Context</h4>
          <div class="scientific-table-wrapper">
            <table class="scientific-table">
              <thead>
                <tr>
                  <th>Variable Name</th>
                  <th>Value</th>
                  <th>Unit</th>
                  <th>Scientific Definition</th>
                  <th>Sensor Context & Optics</th>
                </tr>
              </thead>
              <tbody>
                ${(exp.measured_variables || []).length > 0 ? exp.measured_variables.map(v => `
                  <tr>
                    <td style="font-weight: 600; color: #fff;">${v.name || '<span class="not-available">Not available</span>'}</td>
                    <td style="font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 700;">
                      ${v.value !== null && v.value !== undefined ? v.value : '<span class="not-available">Not available</span>'}
                    </td>
                    <td style="font-family: var(--font-mono);">${v.unit || '<span class="not-available">Not available</span>'}</td>
                    <td style="font-size: 0.78rem; color: var(--text-secondary);">${v.definition || '<span class="not-available">Not available</span>'}</td>
                    <td style="font-size: 0.78rem; color: var(--text-muted);">${v.sensor_context || '<span class="not-available">Not available</span>'}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="5" style="text-align:center;"><span class="not-available">No measured variables cataloged for this record</span></td></tr>
                `}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Provenance Traceability Table -->
        <div>
          <h4 style="font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 10px;">Scientific Traceability & Field-Level Provenance</h4>
          <div class="scientific-table-wrapper">
            <table class="scientific-table">
              <thead>
                <tr>
                  <th>Schema Field</th>
                  <th>Reported Value</th>
                  <th>Specific Ground-Truth Provenance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>airflow</code></td>
                  <td>${flowDisplay}</td>
                  <td>${provenanceMap['airflow'] || '<span class="not-available">Not available</span>'}</td>
                </tr>
                <tr>
                  <td><code>oxygen_percent</code></td>
                  <td>${o2Display}</td>
                  <td>${provenanceMap['oxygen_percent'] || '<span class="not-available">Not available</span>'}</td>
                </tr>
                <tr>
                  <td><code>pressure</code></td>
                  <td>${pDisplay}</td>
                  <td>${provenanceMap['pressure'] || '<span class="not-available">Not available</span>'}</td>
                </tr>
                ${(exp.measured_variables || []).map(v => `
                  <tr>
                    <td><code>measured_variables.${v.name}</code></td>
                    <td>${v.value !== null && v.value !== undefined ? `${v.value} ${v.unit || ''}` : '<span class="not-available">Not available</span>'}</td>
                    <td>${provenanceMap[`measured_variables.${v.name}`] || '<span class="not-available">Not available</span>'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Archival Source & Data Files -->
        <div style="background: var(--bg-surface-elevated); padding: 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 12px;">
          <div>
            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Source Document & Publication Citation</div>
            <div style="font-size: 0.85rem; color: #cbd5e1; margin-top: 2px;">${exp.source_document || '<span class="not-available">Not available</span>'}</div>
          </div>
          <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; font-size: 0.78rem;">
            <div>
              <span style="color: var(--text-muted);">Source DOI / URL: </span>
              ${exp.source_url ? `<a href="${exp.source_url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">${exp.source_url}</a>` : '<span class="not-available">Not available</span>'}
            </div>
            <div>
              <span style="color: var(--text-muted);">Indexed Retrieval Date: </span>
              <span style="font-family: var(--font-mono); color: #fff;">${exp.retrieval_date || '<span class="not-available">Not available</span>'}</span>
            </div>
          </div>

          <div>
            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px;">Archival Data Files (${(exp.data_files || []).length})</div>
            ${(exp.data_files || []).length > 0 ? (exp.data_files || []).map(f => `
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface-card); padding: 6px 10px; border-radius: 4px; margin-bottom: 4px; font-size: 0.78rem;">
                <span style="font-family: var(--font-mono); color: #fff;">📁 ${f.filename} (${f.type}, ${f.size})</span>
                <span style="color: var(--text-secondary); font-size: 0.72rem;">${f.description}</span>
              </div>
            `).join('') : '<span class="not-available">No raw data files attached to this index record</span>'}
          </div>

          ${exp.notes ? `
            <div>
              <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Researcher Operational Notes</div>
              <div style="font-size: 0.82rem; color: #94a3b8; margin-top: 2px; font-style: italic;">"${exp.notes}"</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    modal.classList.add('open');
  }
}

window.experimentLibrary = new ExperimentLibrary();
