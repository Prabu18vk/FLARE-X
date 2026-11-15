/**
 * FLARE-X Comparison Lab (P0)
 * Multi-experiment side-by-side comparative analysis.
 * Features:
 * - Difference highlighting across material, pressure, oxygen, airflow, gravity, sensor, and methodology
 * - Unit harmonization with documented conversion formulas
 * - Strict comparability validation: emits warnings and splits plots when definitions/units diverge
 */

class ComparisonLab {
  constructor() {
    this.selectedExpIds = ['EXP-BASS-PMMA-01', 'EXP-SAFFIRE-II-02'];
    this.activeVariable = 'Flame Spread Rate';
  }

  init() {
    this.bindEvents();
    this.render();
    window.dataService.subscribe(() => {
      this.populateSelectorDropdown();
      this.render();
    });
    this.populateSelectorDropdown();
  }

  bindEvents() {
    const addSelect = document.getElementById('comp-add-experiment-select');
    if (addSelect) {
      addSelect.addEventListener('change', (e) => {
        const id = e.target.value;
        if (id && !this.selectedExpIds.includes(id)) {
          this.selectedExpIds.push(id);
          this.render();
        }
        e.target.value = '';
      });
    }

    const varSelect = document.getElementById('comp-variable-select');
    if (varSelect) {
      varSelect.addEventListener('change', (e) => {
        this.activeVariable = e.target.value;
        this.renderPlots();
      });
    }
  }

  syncFromLibrary(idList) {
    if (idList && idList.length > 0) {
      this.selectedExpIds = Array.from(new Set([...this.selectedExpIds, ...idList]));
      this.render();
    }
  }

  populateSelectorDropdown() {
    const select = document.getElementById('comp-add-experiment-select');
    if (!select) return;

    const exps = window.dataService.getExperiments();
    select.innerHTML = `<option value="">+ Add an experiment to comparison...</option>`;
    exps.forEach(exp => {
      const opt = document.createElement('option');
      opt.value = exp.id;
      opt.textContent = `${exp.id}: ${exp.name} (${exp.material_fuel})`;
      select.appendChild(opt);
    });

    // Populate common variables
    const varSelect = document.getElementById('comp-variable-select');
    if (varSelect) {
      const varNames = new Set();
      exps.forEach(exp => {
        (exp.measured_variables || []).forEach(v => {
          if (v.name) varNames.add(v.name);
        });
      });
      varSelect.innerHTML = Array.from(varNames).sort().map(v => 
        `<option value="${v}" ${v === this.activeVariable ? 'selected' : ''}>${v}</option>`
      ).join('');
    }
  }

  loadPreset(presetType) {
    if (presetType === 'pmma_scale') {
      this.selectedExpIds = ['EXP-BASS-PMMA-01', 'EXP-SAFFIRE-II-02'];
      this.activeVariable = 'Flame Spread Rate';
    } else if (presetType === 'gas_diffusion') {
      this.selectedExpIds = ['EXP-ACME-CIR-01', 'EXP-ACME-CIR-02'];
      this.activeVariable = 'Soot Volume Fraction';
    } else if (presetType === 'incompatible_demo') {
      // Intentionally select incompatible records to demonstrate guardrail
      this.selectedExpIds = ['EXP-BASS-PMMA-01', 'EXP-FLEX-CIR-01', 'EXP-SLICES-MSG-01'];
      this.activeVariable = 'Flame Spread Rate';
    }
    this.render();
  }

  removeExperiment(expId) {
    this.selectedExpIds = this.selectedExpIds.filter(id => id !== expId);
    this.render();
  }

  render() {
    this.renderSelectedChips();
    this.renderComparisonTable();
    this.renderPlots();
  }

  renderSelectedChips() {
    const tray = document.getElementById('comp-selected-chips-tray');
    if (!tray) return;

    if (this.selectedExpIds.length === 0) {
      tray.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">No experiments selected. Choose from dropdown or select from Experiment Library.</span>`;
      return;
    }

    tray.innerHTML = this.selectedExpIds.map(id => {
      const exp = window.dataService.getExperimentById(id);
      return `
        <div class="selected-exp-chip">
          <span><strong>${id}</strong>: ${exp ? exp.name : 'Unknown'}</span>
          <button class="remove-chip-btn" onclick="comparisonLab.removeExperiment('${id}')" title="Remove from comparison">&times;</button>
        </div>
      `;
    }).join('');
  }

  renderComparisonTable() {
    const container = document.getElementById('comp-table-container');
    if (!container) return;

    if (this.selectedExpIds.length < 2) {
      container.innerHTML = `
        <div class="callout-box info">
          <div class="callout-icon">ℹ️</div>
          <div>
            <div class="callout-title">Minimum 2 Experiments Required</div>
            <div class="callout-text">Select at least 2 microgravity experiment records to view side-by-side parameter alignment and automated difference highlighting.</div>
          </div>
        </div>
      `;
      return;
    }

    const experiments = this.selectedExpIds.map(id => window.dataService.getExperimentById(id)).filter(Boolean);

    // Helper to evaluate if row values match or differ across experiments
    const checkDiff = (getter) => {
      const values = experiments.map(getter);
      const first = values[0];
      const hasDiff = values.some(v => v !== first);
      return { values, hasDiff };
    };

    const matDiff = checkDiff(e => e.material_fuel);
    const platDiff = checkDiff(e => e.platform);
    const gravDiff = checkDiff(e => e.gravity_condition);
    const o2Diff = checkDiff(e => e.oxygen_percent?.value ? `${e.oxygen_percent.value} ${e.oxygen_percent.unit}` : 'Not available');
    const pressDiff = checkDiff(e => e.pressure?.value ? `${e.pressure.value} ${e.pressure.unit}` : 'Not available');
    const flowDiff = checkDiff(e => e.airflow?.value !== null && e.airflow?.value !== undefined ? `${e.airflow.value} ${e.airflow.unit} (${e.airflow.direction || 'flow'})` : 'Not available');

    container.innerHTML = `
      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th class="feature-col">Parameter / Condition</th>
              ${experiments.map(e => `
                <th>
                  <div style="font-family: var(--font-mono); color: var(--accent-cyan); font-size: 0.75rem;">${e.id}</div>
                  <div style="font-weight: 700; color: #fff; margin-top: 2px;">${e.name}</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">Retrieved: ${e.retrieval_date || '<span class="not-available">Not available</span>'}</div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="feature-col">Platform & Facility</td>
              ${platDiff.values.map(val => `
                <td>
                  <span class="${platDiff.hasDiff ? 'diff-highlight' : 'match-highlight'}">
                    ${val || '<span class="not-available">Not available</span>'}
                  </span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="feature-col">Gravity Condition</td>
              ${gravDiff.values.map(val => `
                <td>
                  <span class="${gravDiff.hasDiff ? 'diff-highlight' : 'match-highlight'}">
                    ${val || '<span class="not-available">Not available</span>'}
                  </span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="feature-col">Fuel / Material</td>
              ${matDiff.values.map(val => `
                <td>
                  <span class="${matDiff.hasDiff ? 'diff-highlight' : 'match-highlight'}">
                    ${val || '<span class="not-available">Not available</span>'}
                  </span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="feature-col">Oxygen Level</td>
              ${o2Diff.values.map(val => `
                <td>
                  <span class="${o2Diff.hasDiff ? 'diff-highlight' : 'match-highlight'}">
                    ${val}
                  </span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="feature-col">Chamber Pressure</td>
              ${pressDiff.values.map(val => `
                <td>
                  <span class="${pressDiff.hasDiff ? 'diff-highlight' : 'match-highlight'}">
                    ${val}
                  </span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="feature-col">Forced Airflow</td>
              ${flowDiff.values.map(val => `
                <td>
                  <span class="${flowDiff.hasDiff ? 'diff-highlight' : 'match-highlight'}">
                    ${val}
                  </span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="feature-col">Scientific Objective</td>
              ${experiments.map(e => `
                <td style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">
                  ${e.objective || '<span class="not-available">Not available</span>'}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="feature-col">Sensor Context & Diagnostics</td>
              ${experiments.map(e => {
                const varObj = (e.measured_variables || []).find(v => v.name === this.activeVariable);
                return `
                  <td style="font-size: 0.78rem; color: var(--text-secondary);">
                    ${varObj ? `<strong>${varObj.name}:</strong> ${varObj.sensor_context || '<span class="not-available">Not available</span>'}` : '<span class="not-available">Variable not recorded</span>'}
                  </td>
                `;
              }).join('')}
            </tr>
            <tr>
              <td class="feature-col">Source Publication</td>
              ${experiments.map(e => `
                <td style="font-size: 0.74rem;">
                  <div style="color: #cbd5e1; margin-bottom: 4px;">${e.source_document || '<span class="not-available">Not available</span>'}</div>
                  ${e.source_url ? `<a href="${e.source_url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">Link DOI</a>` : ''}
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
      <div style="display: flex; gap: 16px; margin-top: 10px; font-size: 0.75rem;">
        <span class="match-highlight">Green badge: Matching condition across records</span>
        <span class="diff-highlight">Orange badge: Distinct parameter variation (diff)</span>
      </div>
    `;
  }

  renderPlots() {
    const warningContainer = document.getElementById('comp-warning-container');
    const plotContainer = document.getElementById('comp-primary-plot-container');
    const separateContainer = document.getElementById('comp-separate-plots-container');

    if (!warningContainer || !plotContainer || !separateContainer) return;

    if (this.selectedExpIds.length < 2) {
      warningContainer.innerHTML = '';
      plotContainer.innerHTML = '';
      separateContainer.innerHTML = '';
      return;
    }

    const experiments = this.selectedExpIds.map(id => window.dataService.getExperimentById(id)).filter(Boolean);

    // Evaluate compatibility for activeVariable
    const evalResult = window.unitConverter.evaluateComparability(experiments, this.activeVariable);

    if (evalResult.isCompatible) {
      // Compatible! Show unified comparative plot and conversion details
      warningContainer.innerHTML = `
        <div class="callout-box info" style="border-left-color: var(--accent-green); background: rgba(16, 185, 129, 0.08);">
          <div class="callout-icon">✅</div>
          <div>
            <div class="callout-title" style="color: #34d399;">Compatible Scientific Definitions & Units Harmonized</div>
            <div class="callout-text">
              Target variable "<strong>${this.activeVariable}</strong>" is physically compatible across all selected records. 
              ${evalResult.note} Converted values and original reported units are displayed side-by-side.
            </div>
            <div class="conversion-legend-box" style="margin-top: 8px;">
              ${evalResult.harmonizedRecords.map(r => `
                <div><strong>${r.expId}</strong> (${r.expName}): Reported <code>${r.rawVar.value} ${r.rawVar.unit}</code> &rarr; Harmonized: <code>${r.convertedValue} ${evalResult.targetUnit}</code> [${r.formula}]</div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      separateContainer.style.display = 'none';
      plotContainer.style.display = 'block';

      // Render comparative bar chart of harmonized values
      const barItems = evalResult.harmonizedRecords.map(r => ({
        expId: r.expId,
        label: r.expName.split(' ')[0],
        value: r.convertedValue,
        unit: evalResult.targetUnit,
        origValue: r.rawVar.value,
        origUnit: r.rawVar.unit
      }));

      window.chartRenderer.renderComparativeBarChart('comp-primary-plot-container', barItems, {
        title: `Harmonized ${this.activeVariable} (${evalResult.targetUnit})`,
        yLabel: `${this.activeVariable} (${evalResult.targetUnit})`
      });

      // Also render comparative time-series if time-series data exists
      this.renderTimeSeriesComparison(experiments);

    } else {
      // INCOMPATIBLE or MISSING METADATA: Strictly show Scientific Comparability Warning & Split Plots!
      const isMissing = evalResult.warningType === 'MISSING_METADATA';
      warningContainer.innerHTML = `
        <div class="callout-box ${isMissing ? 'warning' : 'danger'}">
          <div class="callout-icon">${isMissing ? '⚠️' : '🛑'}</div>
          <div>
            <div class="callout-title" style="color: ${isMissing ? '#fbbf24' : '#f87171'};">
              Scientific Comparability Warning: ${evalResult.warningType}
            </div>
            <div class="callout-text" style="color: #e2e8f0; font-weight: 500;">
              ${evalResult.reason}
            </div>
            <div style="margin-top: 8px; font-size: 0.78rem; color: var(--text-secondary);">
              <strong>Scientific Guardrail:</strong> A unified axis has been withheld to prevent misleading or invalid comparisons. Each experiment is displayed below in its own independent diagnostic plot.
            </div>
          </div>
        </div>
      `;

      plotContainer.style.display = 'none';
      separateContainer.style.display = 'grid';

      // Render separate plots for each individual experiment
      separateContainer.innerHTML = experiments.map(exp => `
        <div class="chart-card">
          <div class="chart-header">
            <span class="chart-title">
              <span class="exp-id-badge">${exp.id}</span> ${exp.name}
            </span>
            <span class="tag-badge material">${exp.material_fuel}</span>
          </div>
          <div id="comp-sep-plot-${exp.id}" class="chart-container-svg"></div>
        </div>
      `).join('');

      // Render data for each separate card
      experiments.forEach(exp => {
        const v = (exp.measured_variables || []).find(m => m.name === this.activeVariable);
        const plotId = `comp-sep-plot-${exp.id}`;
        const targetDiv = document.getElementById(plotId);
        if (!targetDiv) return;

        if (!v || v.value === null || v.value === undefined) {
          targetDiv.innerHTML = `
            <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #090e1a; border-radius: 8px; padding: 20px; text-align: center;">
              <span class="not-available" style="font-size: 0.95rem; padding: 6px 14px;">Variable Not Available</span>
              <p style="font-size: 0.76rem; color: var(--text-muted); margin-top: 8px;">No records for "${this.activeVariable}" in ${exp.id}.</p>
            </div>
          `;
        } else {
          window.chartRenderer.renderComparativeBarChart(plotId, [{
            expId: exp.id,
            label: exp.name,
            value: Number(v.value),
            unit: v.unit,
            origValue: v.value,
            origUnit: v.unit
          }], {
            title: `${exp.id} - ${v.name}`,
            yLabel: `${v.name} (${v.unit || 'unit'})`
          });
        }
      });
    }
  }

  renderTimeSeriesComparison(experiments) {
    const tsDiv = document.getElementById('comp-timeseries-container');
    if (!tsDiv) return;

    const seriesWithData = [];
    experiments.forEach(exp => {
      if (exp.timeseries_data && exp.timeseries_data.series && exp.timeseries_data.series.length > 0) {
        // Find spread_distance or main metric
        const series = exp.timeseries_data.series;
        if (series[0].spread_distance_mm !== undefined) {
          seriesWithData.push({
            expId: exp.id,
            name: `${exp.material_fuel.split(' ')[0]} Flame Spread`,
            data: series.map(pt => ({ x: pt.time, y: pt.spread_distance_mm }))
          });
        }
      }
    });

    if (seriesWithData.length > 0) {
      tsDiv.style.display = 'block';
      window.chartRenderer.renderTimeSeries('comp-timeseries-plot', seriesWithData, {
        xLabel: 'Elapsed Burn Time (s)',
        yLabel: 'Flame Position / Spread Distance (mm)'
      });
    } else {
      tsDiv.style.display = 'none';
    }
  }
}

window.comparisonLab = new ComparisonLab();
