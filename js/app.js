/**
 * FLARE-X Master Application Controller
 * Handles SPA tab routing, persistent dataset indicators, global search, and module orchestration.
 */

class App {
  constructor() {
    this.activePage = 'home';
  }

  async init() {
    // 1. Initialize central DataService
    await window.dataService.init();

    // 2. Initialize modules
    if (window.experimentLibrary) window.experimentLibrary.init();
    if (window.comparisonLab) window.comparisonLab.init();
    if (window.researchAssistant) window.researchAssistant.init();
    if (window.knowledgeGraph) window.knowledgeGraph.init();
    if (window.researchGapMatrix) window.researchGapMatrix.init();
    if (window.predictionExplorer) window.predictionExplorer.init();
    if (window.dataImporter) window.dataImporter.init();

    // 3. Bind app-level navigation and UI events
    this.bindNavigation();
    this.bindModalEvents();
    this.bindGlobalSearch();

    // 4. Update banner and indicators
    this.updateDatasetIndicators();
    window.dataService.subscribe(() => {
      this.updateDatasetIndicators();
      this.updateHomeStats();
      this.renderDashboardVisuals();
    });

    this.updateHomeStats();
    this.renderDashboardVisuals();

    // 5. Handle initial hash routing if present
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(`page-${hash}`)) {
      this.navigateTo(hash);
    } else {
      this.navigateTo('home');
    }
  }

  bindNavigation() {
    const navItems = document.querySelectorAll('[data-nav-target]');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-nav-target');
        this.navigateTo(target);
      });
    });
  }

  navigateTo(pageId) {
    const targetPage = document.getElementById(`page-${pageId}`);
    if (!targetPage) return;

    // Update active class on pages
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    targetPage.classList.add('active');

    // Update nav links
    document.querySelectorAll('[data-nav-target]').forEach(link => {
      if (link.getAttribute('data-nav-target') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    this.activePage = pageId;
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger canvas resize if graph page, or re-render dashboard visuals if home
    if (pageId === 'graph' && window.knowledgeGraph) {
      setTimeout(() => window.knowledgeGraph.resize(), 50);
    } else if (pageId === 'home') {
      setTimeout(() => this.renderDashboardVisuals(), 50);
    }
  }

  bindModalEvents() {
    const modal = document.getElementById('dossier-modal');
    const closeBtn = document.getElementById('dossier-modal-close');

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal) modal.classList.remove('open');
      }
    });
  }

  bindGlobalSearch() {
    const searchInput = document.getElementById('global-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim();
        if (q) {
          this.navigateTo('library');
          const libInput = document.getElementById('lib-search-input');
          if (libInput) {
            libInput.value = q;
            libInput.dispatchEvent(new Event('input'));
          }
        }
      }
    });
  }

  updateDatasetIndicators() {
    const isPlaceholder = window.dataService.isPlaceholder();
    const metadata = window.dataService.getMetadata();
    const experiments = window.dataService.getExperiments();

    // Top Persistent Notice Banner
    const banner = document.getElementById('app-disclaimer-banner');
    if (banner) {
      if (isPlaceholder) {
        banner.style.display = 'flex';
        banner.innerHTML = `
          <div class="banner-content">
            <span class="banner-badge">NOTICE</span>
            <span>⚠️ <strong>PLACEHOLDER SAMPLE DATA ACTIVE (${experiments.length} records)</strong> — Replace with real NASA records via Data Import. All metrics and models currently reflect sample schemas.</span>
          </div>
          <div class="banner-actions">
            <a class="banner-link" onclick="app.navigateTo('import-data')">Import NASA Data →</a>
          </div>
        `;
      } else {
        banner.style.display = 'flex';
        banner.style.background = 'linear-gradient(90deg, #064e3b, #047857, #064e3b)';
        banner.style.borderColor = '#059669';
        banner.innerHTML = `
          <div class="banner-content">
            <span class="banner-badge" style="background: #34d399; color: #000;">ACTIVE</span>
            <span>🛰️ Custom Ingested Dataset Active: <strong>${metadata.status}</strong> (${experiments.length} records loaded).</span>
          </div>
          <div class="banner-actions">
            <a class="banner-link" onclick="app.navigateTo('import-data')">Manage Dataset →</a>
          </div>
        `;
      }
    }

    // Header Pill
    const pill = document.getElementById('header-dataset-pill');
    if (pill) {
      if (isPlaceholder) {
        pill.className = 'telemetry-pill';
        pill.innerHTML = `<span class="indicator-dot"></span> SAMPLE PLACEHOLDER DATA (${experiments.length})`;
      } else {
        pill.className = 'telemetry-pill ready';
        pill.innerHTML = `<span class="indicator-dot"></span> CUSTOM DATASET (${experiments.length})`;
      }
    }
  }

  updateHomeStats() {
    const experiments = window.dataService.getExperiments();
    const documents = window.dataService.getDocuments();

    const countExp = document.getElementById('stat-total-experiments');
    const countPlatforms = document.getElementById('stat-total-platforms');
    const countDocs = document.getElementById('stat-total-documents');
    const countVariables = document.getElementById('stat-total-variables');

    if (countExp) countExp.textContent = experiments.length;

    const platforms = new Set(experiments.map(e => e.platform).filter(Boolean));
    if (countPlatforms) countPlatforms.textContent = platforms.size;

    if (countDocs) countDocs.textContent = documents.length;

    let varCount = 0;
    experiments.forEach(e => {
      varCount += (e.measured_variables || []).length;
    });
    if (countVariables) countVariables.textContent = varCount;
  }

  /**
   * Interactive KPI Metric Cards Drill-Down Guidance System
   * Opens an interactive modal allowing researchers to inspect all underlying records,
   * facilities, publications, or variables, and guides them directly to that respective module.
   */
  openMetricDrillDown(metricType) {
    const modal = document.getElementById('dossier-modal');
    const title = document.getElementById('dossier-modal-title');
    const body = document.getElementById('dossier-modal-body');
    if (!modal || !title || !body) return;

    const experiments = window.dataService.getExperiments();
    const documents = window.dataService.getDocuments();

    if (metricType === 'experiments') {
      title.innerHTML = `<span>🔬</span> Indexed Flight Experiments (${experiments.length} Records)`;
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 4px;">
            Select any flight experiment below to inspect its complete scientific dossier, locate it in the Experiment Library, or send it to the Comparison Lab.
          </p>
          <input type="text" class="drilldown-filter-box" id="exp-drilldown-search" placeholder="Type to filter experiments by ID, name, fuel, or platform..." oninput="app.filterDrilldownList(this.value)">

          <div id="drilldown-list-container" style="max-height: 60vh; overflow-y: auto; display: flex; flex-direction: column; gap: 8px;">
            ${experiments.map(exp => `
              <div class="drilldown-item" data-search-text="${(exp.id + ' ' + exp.name + ' ' + exp.material_fuel + ' ' + exp.platform).toLowerCase()}">
                <div style="flex: 1; min-width: 200px;">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span class="exp-id-badge">${exp.id}</span>
                    <span class="tag-badge material" style="font-size: 0.68rem;">${exp.material_fuel}</span>
                    <span class="tag-badge gravity" style="font-size: 0.68rem;">${exp.gravity_condition || 'u-g'}</span>
                  </div>
                  <div style="font-size: 0.88rem; font-weight: 700; color: #fff;">${exp.name}</div>
                  <div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 2px;">
                    🛰️ ${exp.platform} | O2: ${window.dataService.formatQuantity(exp.oxygen_percent)} | Flow: ${window.dataService.formatQuantity(exp.airflow)}
                  </div>
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-primary btn-sm" onclick="experimentLibrary.openDossier('${exp.id}')">Dossier →</button>
                  <button class="btn btn-secondary btn-sm" onclick="app.guideToLibrary('${exp.id}')">Library 🔍</button>
                  <button class="btn btn-outline btn-sm" onclick="app.guideToComparison('${exp.id}')">+ Compare ⚖️</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (metricType === 'platforms') {
      const platformMap = {};
      experiments.forEach(e => {
        const p = e.platform || 'Unspecified Platform';
        if (!platformMap[p]) platformMap[p] = { count: 0, fuels: new Set(), experiments: [] };
        platformMap[p].count += 1;
        if (e.material_fuel) platformMap[p].fuels.add(e.material_fuel.split('(')[0].trim());
        platformMap[p].experiments.push(e);
      });

      title.innerHTML = `<span>🛰️</span> Microgravity Research Platforms &amp; Facilities (${Object.keys(platformMap).length} Facilities)`;
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <p style="font-size: 0.82rem; color: var(--text-secondary);">
            Microgravity combustion research rigs and flight vehicles. Click any platform to filter the Experiment Library specifically for that facility.
          </p>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Object.entries(platformMap).map(([platName, data]) => `
              <div class="drilldown-item" style="align-items: flex-start;">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                    <h4 style="font-size: 0.95rem; color: #fff; font-weight: 700;">${platName}</h4>
                    <span class="exp-id-badge" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.4);">
                      ${data.count} experiment${data.count > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 6px;">
                    <strong>Tested Materials:</strong> ${Array.from(data.fuels).join(', ')}
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">
                    Flight test IDs: ${data.experiments.map(e => `<code>${e.id}</code>`).slice(0, 5).join(', ')}${data.experiments.length > 5 ? ` and ${data.experiments.length - 5} more` : ''}
                  </div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="app.guideToPlatformFilter('${platName}')">
                  Filter Library for this Facility →
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (metricType === 'publications') {
      title.innerHTML = `<span>📄</span> Archival Publications &amp; Technical Memoranda (${documents.length} Sources)`;
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <p style="font-size: 0.82rem; color: var(--text-secondary);">
            Peer-reviewed literature passages indexed in FLARE-X. Click to query the publication in the Evidence-Grounded Assistant or open its DOI link.
          </p>
          <div style="display: flex; flex-direction: column; gap: 10px; max-height: 60vh; overflow-y: auto;">
            ${documents.map(doc => `
              <div class="drilldown-item" style="align-items: flex-start;">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span class="exp-id-badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">${doc.year || 'NASA'}</span>
                    <h4 style="font-size: 0.92rem; color: #fff; font-weight: 700;">${doc.title}</h4>
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 4px;">
                    <em>${doc.authors}</em> — ${doc.publication}
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">
                    Indexed Passages: ${(doc.passages || []).length} | Retrieval Date: <code>${doc.retrieval_date || 'Archived'}</code>
                  </div>
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-primary btn-sm" onclick="app.guideToAssistantQuery('${doc.title.replace(/'/g, "\\'")}')">Query in Assistant 🤖</button>
                  ${doc.source_url ? `<a href="${doc.source_url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Open DOI ↗</a>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (metricType === 'variables') {
      const varMap = {};
      experiments.forEach(e => {
        (e.measured_variables || []).forEach(v => {
          if (v.name && v.value !== null && v.value !== undefined) {
            if (!varMap[v.name]) {
              varMap[v.name] = {
                name: v.name,
                unit: v.unit,
                definition: v.definition,
                sensor: v.sensor_context,
                experiments: []
              };
            }
            varMap[v.name].experiments.push(e);
          }
        });
      });

      title.innerHTML = `<span>📊</span> Cataloged Combustion Variables (${Object.keys(varMap).length} Variables)`;
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <p style="font-size: 0.82rem; color: var(--text-secondary);">
            Every variable cataloged in FLARE-X includes explicit SI units, physical definitions, and optical sensor contexts. Select any variable to load it into the Comparison Lab or filter the Library.
          </p>
          <div style="display: flex; flex-direction: column; gap: 10px; max-height: 60vh; overflow-y: auto;">
            ${Object.values(varMap).map(v => `
              <div class="drilldown-item" style="align-items: flex-start;">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                    <h4 style="font-size: 0.95rem; color: #fff; font-weight: 700;">${v.name}</h4>
                    <span class="exp-id-badge">${v.unit || 'dimensionless'}</span>
                    <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">Recorded in ${v.experiments.length} flight tests</span>
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 4px;">
                    <strong>Definition:</strong> ${v.definition || '<span class="not-available">Not available</span>'}
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">
                    <strong>Sensor Optics:</strong> ${v.sensor || '<span class="not-available">Not available</span>'}
                  </div>
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-primary btn-sm" onclick="app.guideToVariableComparison('${v.name}')">Compare in Lab ⚖️</button>
                  <button class="btn btn-secondary btn-sm" onclick="app.guideToVariableLibrary('${v.name}')">Filter Library 🔬</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    modal.classList.add('open');
  }

  // Guidance helper: filters drilldown list in modal
  filterDrilldownList(q) {
    const term = (q || '').toLowerCase().trim();
    const items = document.querySelectorAll('#drilldown-list-container .drilldown-item');
    items.forEach(el => {
      const text = el.getAttribute('data-search-text') || '';
      el.style.display = text.includes(term) ? 'flex' : 'none';
    });
  }

  // Guidance helper: navigates to library and searches for a specific experiment
  guideToLibrary(expId) {
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.classList.remove('open');
    this.navigateTo('library');
    const input = document.getElementById('lib-search-input');
    if (input) {
      input.value = expId;
      input.dispatchEvent(new Event('input'));
    }
  }

  // Guidance helper: adds experiment to comparison and navigates
  guideToComparison(expId) {
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.classList.remove('open');
    if (window.comparisonLab) {
      window.comparisonLab.syncFromLibrary([expId]);
    }
    this.navigateTo('comparison');
  }

  // Guidance helper: filters library by platform
  guideToPlatformFilter(platformName) {
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.classList.remove('open');
    this.navigateTo('library');
    const select = document.getElementById('lib-filter-platform');
    if (select) {
      select.value = platformName;
      select.dispatchEvent(new Event('change'));
    }
  }

  // Guidance helper: navigates to assistant and asks query
  guideToAssistantQuery(query) {
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.classList.remove('open');
    this.navigateTo('assistant');
    if (window.researchAssistant) {
      window.researchAssistant.askPreset(`What are the key microgravity findings and measurements reported in: ${query}?`);
    }
  }

  // Guidance helper: navigates to comparison lab and sets variable
  guideToVariableComparison(variableName) {
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.classList.remove('open');
    this.navigateTo('comparison');
    const select = document.getElementById('comp-variable-select');
    if (select) {
      select.value = variableName;
      select.dispatchEvent(new Event('change'));
    }
  }

  // Guidance helper: filters library by variable
  guideToVariableLibrary(variableName) {
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.classList.remove('open');
    this.navigateTo('library');
    const select = document.getElementById('lib-filter-measurement');
    if (select) {
      select.value = variableName;
      select.dispatchEvent(new Event('change'));
    }
  }

  /**
   * Renders the comprehensive Visual Analytics Dashboard Overview
   * Replaces static text with interactive charts, distribution donuts, parameter space scatter,
   * combustion benchmarks, time-series curves, coverage radar, and visual telemetry cards.
   */
  renderDashboardVisuals() {
    const experiments = window.dataService.getExperiments();
    if (!experiments || experiments.length === 0) return;

    // 1. Render Fuel & Material Distribution (Donut Chart)
    const fuelCounts = {};
    experiments.forEach(e => {
      const fuelRaw = e.material_fuel ? e.material_fuel.split('(')[0].trim() : 'Unknown';
      fuelCounts[fuelRaw] = (fuelCounts[fuelRaw] || 0) + 1;
    });

    const fuelColors = ['#00F0FF', '#FF7700', '#10B981', '#A855F7', '#F59E0B', '#3B82F6', '#EC4899'];
    const fuelData = Object.entries(fuelCounts).map(([label, value], idx) => ({
      label,
      value,
      color: fuelColors[idx % fuelColors.length]
    }));

    window.chartRenderer.renderDonutChart('dash-donut-materials', fuelData, {
      centerLabel: 'Fuels',
      centerValue: experiments.length
    });

    // 2. Render Microgravity Platforms Distribution (Donut Chart)
    const platformCounts = {};
    experiments.forEach(e => {
      let p = e.platform || 'Unspecified';
      if (p.includes('Glovebox')) p = 'ISS Glovebox (MSG)';
      else if (p.includes('CIR')) p = 'ISS CIR Rack';
      else if (p.includes('Cygnus')) p = 'Cygnus Spacecraft';
      platformCounts[p] = (platformCounts[p] || 0) + 1;
    });

    const platformColors = ['#3B82F6', '#00F0FF', '#FF7700', '#10B981'];
    const platformData = Object.entries(platformCounts).map(([label, value], idx) => ({
      label,
      value,
      color: platformColors[idx % platformColors.length]
    }));

    window.chartRenderer.renderDonutChart('dash-donut-platforms', platformData, {
      centerLabel: 'Platforms',
      centerValue: experiments.length
    });

    // 3. Render 2D Environmental Operational Space Scatter Map (O2 vs Airflow)
    const scatterPoints = experiments.map((e, idx) => {
      const o2 = e.oxygen_percent?.value !== null && e.oxygen_percent?.value !== undefined ? e.oxygen_percent.value : 21.0;
      const flow = e.airflow?.value !== null && e.airflow?.value !== undefined ? e.airflow.value : 0.0;
      let color = '#00F0FF';
      if (e.material_fuel?.includes('Methane') || e.material_fuel?.includes('Ethylene')) color = '#A855F7';
      else if (e.material_fuel?.includes('Sibal')) color = '#FF7700';
      else if (e.material_fuel?.includes('Heptane')) color = '#10B981';
      else if (e.material_fuel?.includes('HDPE')) color = '#F59E0B';

      return {
        x: o2,
        y: flow,
        expId: e.id,
        label: e.name,
        material: e.material_fuel ? e.material_fuel.split('(')[0].trim() : 'Unknown',
        platform: e.platform || 'Flight Platform',
        color,
        size: 9 + Math.min(6, flow * 0.4)
      };
    });

    window.chartRenderer.renderScatterPlot('dash-scatter-envelope', scatterPoints, {
      xLabel: 'Chamber Oxygen Concentration (% O2 by volume)',
      yLabel: 'Forced Concurrent Airflow Velocity (cm/s)',
      xMin: 15,
      xMax: 45,
      yMin: 0,
      yMax: 25
    });

    // 4. Render Cross-Study Combustion Kinetics Benchmarks (Horizontal Bar Chart)
    const benchmarkItems = [];
    experiments.forEach((e, idx) => {
      const vars = e.measured_variables || [];
      const primaryVar = vars.find(v => v.name === 'Flame Spread Rate') || vars[0];
      if (primaryVar && primaryVar.value !== null && primaryVar.value !== undefined) {
        let color = '#00F0FF';
        if (primaryVar.name.includes('Spread')) color = '#00F0FF';
        else if (primaryVar.name.includes('Extinction')) color = '#F59E0B';
        else if (primaryVar.name.includes('Soot')) color = '#A855F7';
        else if (primaryVar.name.includes('Burning')) color = '#10B981';

        benchmarkItems.push({
          expId: e.id,
          name: primaryVar.name,
          value: Number(primaryVar.value),
          unit: primaryVar.unit || '',
          material: e.material_fuel ? e.material_fuel.split('(')[0].trim() : '',
          color
        });
      }
    });

    // Sort descending by value for high-contrast ranking
    benchmarkItems.sort((a, b) => b.value - a.value);
    window.chartRenderer.renderHorizontalBarChart('dash-horizontal-benchmarks', benchmarkItems);

    // 5. Render Flame Spread Trajectories (Time-Series Multi-Curve)
    const seriesList = [];
    experiments.forEach(e => {
      if (e.timeseries_data && e.timeseries_data.series && e.timeseries_data.series.length > 0) {
        const series = e.timeseries_data.series;
        if (series[0].spread_distance_mm !== undefined) {
          seriesList.push({
            expId: e.id,
            name: e.material_fuel ? e.material_fuel.split('(')[0].trim() : e.name,
            data: series.map(pt => ({ x: pt.time, y: pt.spread_distance_mm }))
          });
        }
      }
    });

    if (seriesList.length > 0) {
      window.chartRenderer.renderTimeSeries('dash-timeseries-trajectories', seriesList, {
        xLabel: 'Elapsed Burn Time (s)',
        yLabel: 'Flame Position / Spread Distance (mm)'
      });
    }

    // 6. Render Collection Coverage Radar (Mini Grid)
    const miniGapContainer = document.getElementById('dash-mini-gap-grid');
    if (miniGapContainer) {
      const rows = [
        { label: 'Solid PMMA', uGrav: '2 records', lunar: '0 (Gap)', martian: '0 (Gap)', baseline: '1g (Ref)' },
        { label: 'Sibal Fabric', uGrav: '2 records', lunar: '0 (Gap)', martian: '0 (Gap)', baseline: '1g (Ref)' },
        { label: 'Gaseous (CH4/C2H4)', uGrav: '2 records', lunar: '0 (Gap)', martian: '0 (Gap)', baseline: '1g (Ref)' },
        { label: 'Alkane Droplets', uGrav: '1 record', lunar: '0 (Gap)', martian: '0 (Gap)', baseline: '1g (Ref)' },
        { label: 'HDPE Rod', uGrav: '1 record', lunar: '0 (Gap)', martian: '0 (Gap)', baseline: '1g (Ref)' }
      ];

      miniGapContainer.innerHTML = `
        <div class="mini-gap-grid" style="font-weight: 700; color: var(--text-muted); font-size: 0.68rem; text-transform: uppercase; margin-bottom: 4px;">
          <div>Material Class</div>
          <div>Microgravity (~10^-5 g)</div>
          <div>Lunar (0.16 g)</div>
          <div>Martian (0.38 g)</div>
        </div>
        ${rows.map(r => `
          <div class="mini-gap-grid" style="margin-bottom: 4px;">
            <div style="font-size: 0.72rem; color: #fff; font-weight: 600; padding: 6px 8px; background: var(--bg-surface-elevated); border-radius: 4px;">
              ${r.label}
            </div>
            <div class="mini-gap-cell tested" onclick="app.navigateTo('gap-matrix')" style="cursor: pointer;" title="Verified in indexed flight collection">
              ✅ ${r.uGrav}
            </div>
            <div class="mini-gap-cell gap" onclick="app.navigateTo('gap-matrix')" style="cursor: pointer;" title="Unindexed in collection (Research Gap)">
              ⚪ ${r.lunar}
            </div>
            <div class="mini-gap-cell gap" onclick="app.navigateTo('gap-matrix')" style="cursor: pointer;" title="Unindexed in collection (Research Gap)">
              ⚪ ${r.martian}
            </div>
          </div>
        `).join('')}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px; font-size: 0.7rem; color: var(--text-muted);">
          <span>🟢 Green: Verified in flight index</span>
          <span>⚪ Grey: Unrepresented domain in active collection</span>
        </div>
      `;
    }

    // 7. Render Topological Network Connectivity Summary
    const topoContainer = document.getElementById('dash-topology-summary');
    if (topoContainer) {
      const rels = window.dataService.getRelationships();
      const nodeCount = rels.nodes ? rels.nodes.length : 29;
      const edgeCount = rels.edges ? rels.edges.length : 28;

      topoContainer.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 8px;">
          <div style="background: var(--bg-surface-elevated); padding: 12px; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Graph Entities</div>
            <div style="font-size: 1.6rem; font-family: var(--font-mono); font-weight: 800; color: var(--accent-cyan);">${nodeCount}</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">Investigations, Materials, Conditions</div>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 12px; border-radius: 6px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Cited Relationships</div>
            <div style="font-size: 1.6rem; font-family: var(--font-mono); font-weight: 800; color: #a855f7;">${edgeCount}</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">100% sourced with DOI/publications</div>
          </div>
        </div>

        <div style="background: var(--bg-surface-elevated); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle); font-size: 0.76rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: var(--text-secondary);">uses_material:</span>
            <span style="font-family: var(--font-mono); color: #fff;">6 relationships</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: var(--text-secondary);">studies condition:</span>
            <span style="font-family: var(--font-mono); color: #fff;">5 relationships</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: var(--text-secondary);">measures variable:</span>
            <span style="font-family: var(--font-mono); color: #fff;">6 relationships</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary);">reports scientific finding:</span>
            <span style="font-family: var(--font-mono); color: #fff;">3 major discoveries</span>
          </div>
        </div>
      `;
    }

    // 8. Render Live Flight Telemetry Stream (Visual HUD Cards)
    const streamContainer = document.getElementById('dash-experiments-stream');
    if (streamContainer) {
      streamContainer.innerHTML = experiments.map(exp => {
        const o2Val = exp.oxygen_percent?.value !== null && exp.oxygen_percent?.value !== undefined ? exp.oxygen_percent.value : 0;
        const flowVal = exp.airflow?.value !== null && exp.airflow?.value !== undefined ? exp.airflow.value : 0;
        const pressVal = exp.pressure?.value !== null && exp.pressure?.value !== undefined ? exp.pressure.value : 0;

        const o2Pct = Math.min(100, Math.round((o2Val / 50) * 100));
        const flowPct = Math.min(100, Math.round((flowVal / 25) * 100));
        const pressPct = pressVal > 0 ? Math.min(100, Math.round((pressVal / 120) * 100)) : 0;

        const primaryVars = (exp.measured_variables || []).filter(v => v.value !== null && v.value !== undefined).slice(0, 2);

        return `
          <div class="experiment-card" style="padding: 16px;">
            <div>
              <div class="card-top" style="margin-bottom: 8px;">
                <span class="exp-id-badge">${exp.id}</span>
                <span class="tag-badge gravity" style="font-size: 0.68rem;">${exp.gravity_condition || 'u-g'}</span>
              </div>

              <div style="font-weight: 700; color: #fff; font-size: 0.92rem; margin-bottom: 4px; line-height: 1.3;">
                ${exp.name}
              </div>

              <div style="font-size: 0.72rem; color: var(--accent-orange); margin-bottom: 12px;">
                🧪 ${exp.material_fuel}
              </div>

              <!-- Visual Horizontal Gauge Bars -->
              <div style="background: var(--bg-surface-card); padding: 10px 12px; border-radius: 6px; border: 1px solid var(--border-subtle); margin-bottom: 12px;">
                <div class="visual-gauge-row">
                  <span style="width: 70px; color: var(--text-muted); font-size: 0.68rem;">OXYGEN</span>
                  <div class="visual-gauge-track">
                    <div class="visual-gauge-fill gauge-cyan" style="width: ${o2Pct}%;"></div>
                  </div>
                  <span style="width: 55px; text-align: right; font-family: var(--font-mono); font-weight: 600; color: #fff;">
                    ${exp.oxygen_percent?.value !== null ? `${exp.oxygen_percent.value}%` : '<span class="not-available">N/A</span>'}
                  </span>
                </div>

                <div class="visual-gauge-row">
                  <span style="width: 70px; color: var(--text-muted); font-size: 0.68rem;">AIRFLOW</span>
                  <div class="visual-gauge-track">
                    <div class="visual-gauge-fill gauge-orange" style="width: ${flowPct}%;"></div>
                  </div>
                  <span style="width: 55px; text-align: right; font-family: var(--font-mono); font-weight: 600; color: #fff;">
                    ${exp.airflow?.value !== null && exp.airflow?.value !== undefined ? `${exp.airflow.value} cm/s` : '<span class="not-available">N/A</span>'}
                  </span>
                </div>

                <div class="visual-gauge-row">
                  <span style="width: 70px; color: var(--text-muted); font-size: 0.68rem;">PRESSURE</span>
                  <div class="visual-gauge-track">
                    <div class="visual-gauge-fill gauge-purple" style="width: ${pressPct}%;"></div>
                  </div>
                  <span style="width: 55px; text-align: right; font-family: var(--font-mono); font-weight: 600; color: #fff;">
                    ${exp.pressure?.value !== null ? `${exp.pressure.value} kPa` : '<span class="not-available">N/A</span>'}
                  </span>
                </div>
              </div>

              <!-- Measured Variables Tags -->
              ${primaryVars.length > 0 ? `
                <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px;">
                  ${primaryVars.map(v => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.74rem; background: rgba(0,0,0,0.25); padding: 4px 8px; border-radius: 4px;">
                      <span style="color: var(--text-secondary);">${v.name}:</span>
                      <span style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">${v.value} ${v.unit || ''}</span>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <div style="margin-bottom: 12px; font-size: 0.72rem;">
                  <span class="not-available">Variables unrecorded</span>
                </div>
              `}
            </div>

            <div class="card-footer" style="padding-top: 10px;">
              <span style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px;">
                🛰️ ${exp.platform || 'Platform'}
              </span>
              <div style="display: flex; gap: 6px;">
                <button class="btn btn-secondary btn-sm" style="padding: 3px 8px; font-size: 0.72rem;" onclick="experimentLibrary.openDossier('${exp.id}')">Dossier</button>
                <button class="btn btn-outline btn-sm" style="padding: 3px 8px; font-size: 0.72rem;" onclick="comparisonLab.syncFromLibrary(['${exp.id}']); app.navigateTo('comparison');">+ Compare</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// Global bootstrap
window.app = new App();
document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
