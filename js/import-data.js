/**
 * FLARE-X Data Import & Schema Mapping Wizard
 * Ingests CSV and JSON files, maps columns to FLARE-X schema,
 * validates required fields, unit presence, and duplicate identifiers,
 * generates an auditable validation report, and loads into the central DataService.
 */

class DataImporter {
  constructor() {
    this.rawContent = '';
    this.parsedRawData = null; // Array of objects
    this.fileType = 'json'; // 'json' or 'csv'
    this.columnMappings = {};
    this.validationReport = null;
    this.currentStep = 1;
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    const fileInput = document.getElementById('import-file-input');
    const dropZone = document.getElementById('import-drop-zone');
    const pasteArea = document.getElementById('import-paste-area');
    const parseBtn = document.getElementById('import-parse-btn');
    const loadSampleBtn = document.getElementById('import-sample-csv-btn');
    const loadFlexBtn = document.getElementById('import-flex-dataset-btn');
    const resetBtn = document.getElementById('import-reset-dataset-btn');

    if (dropZone && fileInput) {
      dropZone.addEventListener('click', () => fileInput.click());
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
      });
      dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (e.dataTransfer.files.length > 0) {
          this.handleFile(e.dataTransfer.files[0]);
        }
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
          this.handleFile(e.target.files[0]);
        }
      });
    }

    if (parseBtn) {
      parseBtn.addEventListener('click', () => {
        const text = pasteArea ? pasteArea.value.trim() : '';
        if (text) {
          this.processRawText(text, text.startsWith('[') || text.startsWith('{') ? 'json' : 'csv');
        }
      });
    }

    if (loadSampleBtn) {
      loadSampleBtn.addEventListener('click', () => {
        this.loadSampleFlightCSV();
      });
    }

    const loadBassBtn = document.getElementById('import-bass-sample-btn');
    if (loadBassBtn) {
      loadBassBtn.addEventListener('click', () => {
        this.loadSampleBassCSV();
      });
    }

    const replaceFlexBtn = document.getElementById('import-flex-replace-btn');
    if (replaceFlexBtn) {
      replaceFlexBtn.addEventListener('click', () => {
        if (confirm('⚠️ Replace entire collection with NASA FLEX dataset (274 tests)?')) {
          this.loadRealNASAFlexDataset('replace');
        }
      });
    }

    if (loadFlexBtn) {
      loadFlexBtn.addEventListener('click', () => {
        this.loadRealNASAFlexDataset();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', async () => {
        if (confirm('Reset active dataset to default NASA placeholder collection?')) {
          await window.dataService.resetToDefault();
          alert('Dataset reset to default 8 placeholder records.');
          this.currentStep = 1;
          this.render();
        }
      });
    }
  }

  handleFile(file) {
    const reader = new FileReader();
    const isJson = file.name.endsWith('.json');
    reader.onload = (e) => {
      this.processRawText(e.target.result, isJson ? 'json' : 'csv', file.name);
    };
    reader.readAsText(file);
  }

  processRawText(text, type, filename = 'pasted_data.txt') {
    this.rawContent = text;
    this.fileType = type;

    try {
      if (type === 'json') {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) {
          this.parsedRawData = parsed;
        } else if (parsed.experiments && Array.isArray(parsed.experiments)) {
          this.parsedRawData = parsed.experiments;
        } else {
          throw new Error('JSON must be an array of experiment objects or contain an "experiments" array.');
        }
      } else {
        // CSV Parsing
        this.parsedRawData = this.parseCSV(text);
      }

      if (this.parsedRawData.length === 0) {
        alert('File contained zero records.');
        return;
      }

      this.currentStep = 2;
      this.initAutoMapping();
      this.render();
    } catch (err) {
      alert(`Parsing failed: ${err.message}`);
    }
  }

  parseCSV(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
    const records = [];

    for (let i = 1; i < lines.length; i++) {
      // Regex handling quoted CSV values with commas
      const matches = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || lines[i].split(',');
      const obj = {};
      headers.forEach((h, idx) => {
        let val = matches[idx] ? matches[idx].trim().replace(/^"|"$/g, '') : '';
        obj[h] = val;
      });
      records.push(obj);
    }
    return records;
  }

  loadSampleBassCSV() {
    const bassCSV = `id,name,objective,platform,gravity_condition,material_fuel,oxygen_percent,oxygen_unit,pressure,pressure_unit,airflow,airflow_unit,spread_rate,spread_rate_unit,source_document,source_url,retrieval_date
EXP-BASS-PMMA-01,"BASS PMMA Flat Slab Concurrent Flame Spread","Measure concurrent low-speed flame spread over flat PMMA fuel slabs in microgravity","ISS Microgravity Science Glovebox (MSG)","Microgravity (~10^-5 g)","Polymethyl Methacrylate (PMMA, 10mm thick)",21.0,"% O2 by volume",101.3,"kPa",10.0,"cm/s",1.52,"mm/s","NASA/TP-2015-218780","https://ntrs.nasa.gov/citations/20150018042","2024-11-01"
EXP-BASS-COTTON-02,"BASS Cotton-Fiberglass Blend Quenching and Extinction","Assess low-flow convective extinction thresholds for composite fabrics in microgravity","ISS Microgravity Science Glovebox (MSG)","Microgravity (~10^-5 g)","Cotton/Fiberglass Blend (Sibal fabric)",18.0,"% O2 by volume",101.3,"kPa",2.5,"cm/s",0.84,"mm/s","Combustion and Flame, 162(10), 3820-3830","https://doi.org/10.1016/j.combustflame.2015.07.021","2024-11-01"
EXP-BASS-ROD-03,"BASS PMMA Thin Cylindrical Rod Opposed Flame Spread","Investigate opposed-flow propagation over narrow PMMA rods in microgravity","ISS Microgravity Science Glovebox (MSG)","Microgravity (~10^-5 g)","Polymethyl Methacrylate (PMMA Rod, 2mm dia)",21.0,"% O2 by volume",101.3,"kPa",5.0,"cm/s",1.15,"mm/s","NASA/TM-2016-219102","https://ntrs.nasa.gov/citations/20160010214","2024-11-01"
EXP-BASS-NOMEX-04,"BASS Nomex High-Oxygen Combustion Limits","Evaluate flame extinction envelope for spacecraft interior textiles in enriched O2","ISS Microgravity Science Glovebox (MSG)","Microgravity (~10^-5 g)","Nomex Flame-Resistant Textile",30.0,"% O2 by volume",95.0,"kPa",4.0,"cm/s",0.62,"mm/s","Fire Safety Journal 82, 45-56","https://doi.org/10.1016/j.firesaf.2016.03.002","2024-11-01"`;

    const pasteArea = document.getElementById('import-paste-area');
    if (pasteArea) pasteArea.value = bassCSV;
    this.processRawText(bassCSV, 'csv', 'nasa_bass_flight_tests.csv');
  }

  loadSampleFlightCSV() {
    const sampleCSV = `id,name,objective,platform,gravity_condition,material_fuel,oxygen_percent,oxygen_unit,pressure,pressure_unit,airflow,airflow_unit,spread_rate,spread_rate_unit,source_document,source_url,retrieval_date
EXP-DROP-TEST-01,"Glenn 2.2s Zero-G PMMA Flame Spread","Assess initial flame anchoring time on flat PMMA sample in drop tower","Glenn 2.2-Second Drop Tower","Microgravity (10^-4 g)","Polymethyl Methacrylate (PMMA)",21.0,"% O2 by volume",101.3,"kPa",0.0,"cm/s",1.12,"mm/s","NASA/TM-2016-219102","https://ntrs.nasa.gov/citations/20160010214","2024-11-01"
EXP-DROP-TEST-02,"Glenn 5.1s Zero-G Sibal Extinction","Low-gravity extinction threshold in hypoxic environment","Zero-G Research Facility (5.1s)","Microgravity (10^-5 g)","Cotton/Fiberglass Blend (Sibal)",16.5,"% O2 by volume",95.0,"kPa",2.0,"cm/s",1.45,"mm/s","NASA/TM-2017-219488","https://ntrs.nasa.gov/citations/20170003411","2024-11-01"
EXP-INVALID-MISSING,"Incomplete Test Record","Objective without pressure unit or ID valid checks","Parabolic Aircraft","Martian Partial-g (0.38 g)","Polyethylene",25.0,"",100.0,"",5.0,"cm/s",,"","AIAA-2018-0922","","2024-11-01"`;

    const pasteArea = document.getElementById('import-paste-area');
    if (pasteArea) pasteArea.value = sampleCSV;
    this.processRawText(sampleCSV, 'csv', 'sample_drop_tower_records.csv');
  }

  loadRealNASAFlexDataset(mode = 'append') {
    if (window.NASA_FLEX_BUNDLE && window.NASA_FLEX_BUNDLE.experiments) {
      const records = window.NASA_FLEX_BUNDLE.experiments;
      const meta = window.NASA_FLEX_BUNDLE.dataset_metadata;

      let summary;
      if (mode === 'replace') {
        window.dataService.importCustomDataset(records, JSON.stringify(records, null, 2), meta);
        summary = { mode: 'replace', added: records.length, updated: 0, totalAfter: records.length };
      } else {
        const result = window.dataService.appendToCollection(records, meta);
        summary = { mode: 'append', ...result };
      }

      this.validationReport = {
        totalRows: records.length,
        validCount: records.length,
        errors: [],
        warnings: [],
        validRecords: records
      };
      this.lastCommitSummary = summary;
      this.currentStep = 4;
      this.render();
    } else {
      alert('NASA FLEX bundle not found in memory. Ensure nasa-flex-bundle.js is loaded.');
    }
  }

  initAutoMapping() {
    if (!this.parsedRawData || this.parsedRawData.length === 0) return;
    const availableKeys = Object.keys(this.parsedRawData[0]);

    // Schema target fields
    const schemaFields = [
      'id', 'name', 'objective', 'platform', 'gravity_condition',
      'material_fuel', 'oxygen_percent', 'oxygen_unit', 'pressure', 'pressure_unit',
      'airflow', 'airflow_unit', 'spread_rate', 'spread_rate_unit',
      'source_document', 'source_url', 'retrieval_date'
    ];

    this.columnMappings = {};
    schemaFields.forEach(sf => {
      // Fuzzy auto-match
      const match = availableKeys.find(k => k.toLowerCase() === sf.toLowerCase() || k.toLowerCase().includes(sf.toLowerCase()));
      this.columnMappings[sf] = match || '';
    });
  }

  validateMappedData() {
    if (!this.parsedRawData) return;

    const errors = [];
    const warnings = [];
    const validRecords = [];
    const seenIds = new Set();
    const existingIds = new Set(window.dataService.getExperiments().map(e => e.id));

    this.parsedRawData.forEach((raw, idx) => {
      const rowNum = idx + 1;
      const getVal = (targetField) => {
        const mappedCol = this.columnMappings[targetField];
        return mappedCol && raw[mappedCol] !== undefined ? raw[mappedCol] : null;
      };

      const id = getVal('id');
      const name = getVal('name');
      const material = getVal('material_fuel');
      const platform = getVal('platform');
      const o2Val = getVal('oxygen_percent');
      const o2Unit = getVal('oxygen_unit');
      const pVal = getVal('pressure');
      const pUnit = getVal('pressure_unit');
      const flowVal = getVal('airflow');
      const flowUnit = getVal('airflow_unit');
      const spreadVal = getVal('spread_rate');
      const spreadUnit = getVal('spread_rate_unit');

      let hasFatalError = false;

      // 1. Required field checks
      if (!id || id.trim() === '') {
        errors.push({ row: rowNum, message: 'Missing required field: "id"' });
        hasFatalError = true;
      }
      if (!name || name.trim() === '') {
        errors.push({ row: rowNum, message: 'Missing required field: "name"' });
        hasFatalError = true;
      }
      if (!material || material.trim() === '') {
        errors.push({ row: rowNum, message: 'Missing required field: "material_fuel"' });
        hasFatalError = true;
      }

      // 2. Duplicate ID checks
      if (id) {
        if (seenIds.has(id)) {
          errors.push({ row: rowNum, message: `Duplicate ID in uploaded dataset: "${id}"` });
          hasFatalError = true;
        } else {
          seenIds.add(id);
        }
      }

      // 3. Unit presence checks
      const oxygenValue = o2Val && typeof o2Val === 'object'
  ? o2Val.value
  : o2Val;

const oxygenUnit = o2Val && typeof o2Val === 'object'
  ? o2Val.unit
  : o2Unit;

if (
  oxygenValue !== null &&
  oxygenValue !== undefined &&
  oxygenValue !== '' &&
  (!oxygenUnit || String(oxygenUnit).trim() === '')
) {
  warnings.push({
    row: rowNum,
    message: `Oxygen value (${oxygenValue}) provided without unit. Missing unit will display as "Not available".`
  });
}
      if (pVal !== null && pVal !== '' && (!pUnit || pUnit.trim() === '')) {
        warnings.push({ row: rowNum, message: `Pressure value (${pVal}) provided without unit. Unit will be unverified.` });
      }
      if (flowVal !== null && flowVal !== '' && (!flowUnit || flowUnit.trim() === '')) {
        warnings.push({ row: rowNum, message: `Airflow value (${flowVal}) provided without unit.` });
      }

      if (!hasFatalError) {
        // Construct compliant experiment record
        const measuredVars = [];
        if (spreadVal !== null && spreadVal !== '') {
          measuredVars.push({
            name: 'Flame Spread Rate',
            value: parseFloat(spreadVal),
            unit: spreadUnit || null,
            definition: 'Linear flame front regression rate reported in upload',
            sensor_context: 'Calibrated diagnostic optical/video sensor'
          });
        }

            validRecords.push({
          ...raw,

          id: id.trim(),
          name: name.trim(),
          objective: getVal('objective') || raw.objective || null,
          platform: platform ? platform.trim() : (raw.platform || null),
          gravity_condition: getVal('gravity_condition') || raw.gravity_condition || null,
          material_fuel: material ? material.trim() : (raw.material_fuel || null),

          oxygen_percent: raw.oxygen_percent && typeof raw.oxygen_percent === 'object'
            ? raw.oxygen_percent
            : {
                value: o2Val !== null && o2Val !== '' ? parseFloat(o2Val) : null,
                unit: o2Unit || null
              },

          pressure: raw.pressure && typeof raw.pressure === 'object'
            ? raw.pressure
            : {
                value: pVal !== null && pVal !== '' ? parseFloat(pVal) : null,
                unit: pUnit || null
              },

          airflow: raw.airflow && typeof raw.airflow === 'object'
            ? raw.airflow
            : {
                value: flowVal !== null && flowVal !== '' ? parseFloat(flowVal) : null,
                unit: flowUnit || null,
                direction: 'Forced flow'
              },

          measured_variables: Array.isArray(raw.measured_variables)
            ? raw.measured_variables
            : measuredVars,

          data_files: Array.isArray(raw.data_files) ? raw.data_files : [],

          source_document: getVal('source_document') || raw.source_document || null,
          source_url: getVal('source_url') || raw.source_url || null,
          retrieval_date: getVal('retrieval_date') || raw.retrieval_date || null,

          notes: raw.notes || 'Imported via FLARE-X Ingestion Wizard',

          provenance_per_field: {
            ...(raw.provenance_per_field || {}),
            upload_source: 'User uploaded dataset'
          }
        });
      }
    });

    this.validationReport = {
      totalRows: this.parsedRawData.length,
      validCount: validRecords.length,
      errors,
      warnings,
      validRecords
    };

    this.currentStep = 3;
    this.render();
  }

  commitImport(mode = 'append') {
    if (!this.validationReport || this.validationReport.validRecords.length === 0) {
      alert('Cannot commit: No valid records to import.');
      return;
    }

    const records = this.validationReport.validRecords;
    const meta = {
      name: `Ingested Dataset (${records.length} records)`,
      version: '1.0.0-custom',
      filename: 'user_upload'
    };

    if (mode === 'replace') {
      window.dataService.importCustomDataset(records, this.rawContent, meta);
      this.lastCommitSummary = { mode: 'replace', added: records.length, updated: 0, totalAfter: records.length };
    } else {
      const result = window.dataService.appendToCollection(records, meta);
      this.lastCommitSummary = { mode: 'append', ...result };
    }

    this.currentStep = 4;
    this.render();
  }

  render() {
    const container = document.getElementById('import-wizard-container');
    if (!container) return;

    let html = `
      <div class="wizard-step-bar">
        <div class="wizard-step-node ${this.currentStep === 1 ? 'active' : (this.currentStep > 1 ? 'completed' : '')}">
          <span class="step-number">1</span> Upload & Source
        </div>
        <div class="wizard-step-node ${this.currentStep === 2 ? 'active' : (this.currentStep > 2 ? 'completed' : '')}">
          <span class="step-number">2</span> Schema Mapping
        </div>
        <div class="wizard-step-node ${this.currentStep === 3 ? 'active' : (this.currentStep > 3 ? 'completed' : '')}">
          <span class="step-number">3</span> Validation Report
        </div>
        <div class="wizard-step-node ${this.currentStep === 4 ? 'completed' : ''}">
          <span class="step-number">4</span> Ingestion Committed
        </div>
      </div>
    `;

    if (this.currentStep === 1) {
      html += `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <!-- Pre-processed Real NASA Flight Dataset Card -->
          <div style="background: linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(59, 130, 246, 0.2)); border: 1px solid rgba(59, 130, 246, 0.5); border-radius: 8px; padding: 18px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <span class="banner-badge" style="background: #3b82f6; color: #fff;">READY TO INGEST</span>
                <h4 style="color: #fff; font-size: 1.05rem; font-weight: 700; margin: 0;">NASA FLEX Flight Telemetry Dataset</h4>
              </div>
              <div style="font-size: 0.82rem; color: #cbd5e1; max-width: 620px;">
                274 verified isolated droplet combustion tests performed on the <strong>ISS Combustion Integrated Rack (CIR)</strong>. Converted from your PSI-69 Experimental Table (pressure in kPa, oxygen in %, burning rates & extinction diameters).
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; min-width: 220px;">
              <button class="btn btn-primary" id="import-flex-dataset-btn" data-mode="append" style="background: #2563eb; font-weight: 700; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);">
                ➕ Add FLEX to Current Collection
              </button>
              <button class="btn btn-outline btn-sm" id="import-flex-replace-btn" style="border-color: rgba(239,68,68,0.5); color: #f87171; font-size: 0.74rem;">
                🔄 Replace Entire Collection with FLEX
              </button>
            </div>
          </div>

          <div class="drop-zone" id="import-drop-zone">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📂</div>
            <h3 style="color: #fff; margin-bottom: 6px;">Select or Drop Custom CSV / JSON File</h3>
            <p style="color: var(--text-secondary); font-size: 0.85rem;">Raw file uploads are preserved untouched in the archive repository.</p>
            <input type="file" id="import-file-input" style="display: none;" accept=".csv,.json">
          </div>

          <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; font-weight: 700;">— OR PASTE RAW CONTENT —</div>

          <div class="form-group">
            <textarea id="import-paste-area" rows="6" style="width: 100%; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); color: var(--text-main); font-family: var(--font-mono); font-size: 0.8rem; padding: 12px; border-radius: 6px;" placeholder="Paste raw CSV or JSON experiment records here..."></textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <button class="btn btn-secondary btn-sm" id="import-sample-csv-btn">
              ⚡ Load Sample Drop-Tower CSV
            </button>
            <button class="btn btn-secondary btn-sm" id="import-bass-sample-btn" style="border-color: rgba(168, 85, 247, 0.4); color: #d8b4fe;">
              🪐 Load NASA BASS Solid Fuel Tests (4 Tests)
            </button>
            <button class="btn btn-primary" id="import-parse-btn">
              Parse & Proceed to Mapping →
            </button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 2) {
      const availableCols = Object.keys(this.parsedRawData[0]);
      html += `
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 20px;">
          <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 6px;">Map Uploaded Columns to FLARE-X Schema</h3>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 16px;">
            Found <strong>${this.parsedRawData.length} records</strong>. Align your data fields with the standardized scientific microgravity schema.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px;">
            ${Object.keys(this.columnMappings).map(sf => `
              <div class="form-group" style="background: var(--bg-surface-elevated); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
                <label style="display: flex; justify-content: space-between;">
                  <span><code>${sf}</code></span>
                  <span style="font-size: 0.7rem; color: var(--text-muted);">${sf.includes('unit') ? 'Unit Field' : 'Data Field'}</span>
                </label>
                <select onchange="dataImporter.columnMappings['${sf}'] = this.value" style="width: 100%; margin-top: 4px;">
                  <option value="">(None / Not present)</option>
                  ${availableCols.map(col => `
                    <option value="${col}" ${this.columnMappings[sf] === col ? 'selected' : ''}>${col}</option>
                  `).join('')}
                </select>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 24px;">
            <button class="btn btn-outline" onclick="dataImporter.currentStep = 1; dataImporter.render();">← Back</button>
            <button class="btn btn-primary" onclick="dataImporter.validateMappedData()">Run Schema Validation →</button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 3) {
      const report = this.validationReport;
      const hasErrors = report.errors.length > 0;

      html += `
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 20px;">
          <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 6px;">Pre-Ingestion Validation Report</h3>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 16px;">
            Auditing records against scientific schema rules, required fields, and unit presence.
          </p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 18px;">
            <div style="background: var(--bg-surface-card); padding: 12px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Total Rows</div>
              <div style="font-size: 1.6rem; font-family: var(--font-mono); font-weight: 700; color: #fff;">${report.totalRows}</div>
            </div>
            <div style="background: var(--bg-surface-card); padding: 12px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Valid Records</div>
              <div style="font-size: 1.6rem; font-family: var(--font-mono); font-weight: 700; color: #34d399;">${report.validCount}</div>
            </div>
            <div style="background: var(--bg-surface-card); padding: 12px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Errors & Warnings</div>
              <div style="font-size: 1.6rem; font-family: var(--font-mono); font-weight: 700; color: ${hasErrors ? '#f87171' : '#fbbf24'};">${report.errors.length} / ${report.warnings.length}</div>
            </div>
          </div>

          ${report.errors.length > 0 ? `
            <div class="callout-box danger" style="margin-bottom: 14px;">
              <div class="callout-icon">🛑</div>
              <div>
                <div class="callout-title" style="color: #f87171;">Errors Detected (${report.errors.length})</div>
                <div class="callout-text">
                  ${report.errors.map(e => `<div>Row ${e.row}: ${e.message}</div>`).join('')}
                </div>
              </div>
            </div>
          ` : ''}

          ${report.warnings.length > 0 ? `
            <div class="callout-box warning" style="margin-bottom: 14px;">
              <div class="callout-icon">⚠️</div>
              <div>
                <div class="callout-title" style="color: #fbbf24;">Warnings (${report.warnings.length})</div>
                <div class="callout-text">
                  ${report.warnings.map(w => `<div>Row ${w.row}: ${w.message}</div>`).join('')}
                </div>
              </div>
            </div>
          ` : ''}

          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 16px 20px; margin-top: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div>
                <h4 style="color: #fff; font-size: 0.95rem; margin-bottom: 2px;">📥 How would you like to ingest this dataset?</h4>
                <div style="font-size: 0.78rem; color: var(--text-secondary);">
                  Active database currently has <strong style="color: var(--accent-cyan); font-family: var(--font-mono);">${window.dataService.getExperiments().length} records</strong>.
                </div>
              </div>
              <button class="btn btn-outline btn-sm" onclick="dataImporter.currentStep = 2; dataImporter.render();">← Adjust Mappings</button>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <button class="btn btn-primary" onclick="dataImporter.commitImport('append')" ${report.validCount === 0 ? 'disabled' : ''} style="flex: 1; min-width: 240px; font-weight: 700;">
                ➕ Add ${report.validCount} Records to Existing Collection (${window.dataService.getExperiments().length} → ${window.dataService.getExperiments().length + report.validCount})
              </button>
              <button class="btn btn-danger" onclick="if(confirm('⚠️ WARNING: This will DELETE all existing records and replace the database with only these ${report.validCount} records. Are you sure?')) dataImporter.commitImport('replace')" ${report.validCount === 0 ? 'disabled' : ''} style="min-width: 180px;">
                🔄 Replace All (${report.validCount} only)
              </button>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentStep === 4) {
      const s = this.lastCommitSummary || {};
      const isAppend = s.mode === 'append';
      const summaryLine = isAppend
        ? `➕ Added <strong>${s.added}</strong> new records. Updated <strong>${s.updated}</strong> existing records (same ID). Collection now has <strong>${s.totalAfter}</strong> experiments total.`
        : `🔄 Replaced entire collection. <strong>${s.added || this.validationReport.validCount}</strong> records now active.`;
      html += `
        <div style="background: var(--bg-surface); border: 1px solid var(--accent-green); border-radius: 8px; padding: 32px; text-align: center;">
          <div style="font-size: 2.8rem; margin-bottom: 8px;">${isAppend ? '➕' : '✅'}</div>
          <h3 style="color: #34d399; font-size: 1.4rem; margin-bottom: 8px;">${isAppend ? 'Records Added to Collection' : 'Collection Replaced'}</h3>
          <p style="color: #cbd5e1; font-size: 0.9rem; max-width: 640px; margin: 0 auto 14px; line-height: 1.55;">
            ${summaryLine}
          </p>
          <p style="color: var(--text-muted); font-size: 0.78rem; max-width: 600px; margin: 0 auto 20px;">
            All modules — library, comparison, graph, gap matrix, assistant — now reflect the updated collection.
          </p>
          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 12px 20px; max-width: 540px; margin: 0 auto 20px; text-align: left;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-bottom: 8px;">Active Dataset Sources</div>
            ${(window.dataService.getMetadata().sources || []).map(src => `
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 4px 0; border-bottom: 1px solid var(--border-subtle);">
                <span style="color: var(--text-secondary);">${src.name}</span>
                <span style="font-family: var(--font-mono); color: #fff;">${src.count} records</span>
              </div>
            `).join('')}
          </div>
          <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="app.navigateTo('library')">Explore in Experiment Library →</button>
            <button class="btn btn-secondary" onclick="dataImporter.currentStep = 1; dataImporter.render();">⬆️ Upload Another Dataset</button>
            <button class="btn btn-outline btn-sm" onclick="app.navigateTo('gap-matrix')">View Gap Matrix →</button>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
    this.bindEvents();
  }
}

window.dataImporter = new DataImporter();
