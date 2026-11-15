/**
 * FLARE-X Data Service
 * Central data layer managing experiments, documents, relationships, and categories.
 * Strictly enforces:
 * - Scientific traceability: field provenance, source URLs, retrieval dates
 * - No data invention: missing fields return "Not available"
 * - Dynamic data replacement: whole app updates when new data is imported or reset
 */

class DataService {
  constructor() {
    this.experiments = [];
    this.documents = [];
    this.relationships = { nodes: [], edges: [] };
    this.coverageCategories = null;
    this.datasetMetadata = {
      is_placeholder: true,
      status: "PLACEHOLDER SAMPLE DATA, replace with real NASA records",
      version: "1.0.0-placeholder",
      total_records: 0
    };
    this.listeners = [];
    this.STORAGE_KEY = 'flare_x_active_dataset_v1';
    this.RAW_STORAGE_KEY = 'flare_x_raw_upload_archive_v1';
  }


async init() {
  // Always load the versioned GitHub dataset first.
  // Do not allow old browser sample data to override it.
  await this.loadDefaultData();

  // If the combined dataset loaded successfully, use it.
  if (
    this.experiments.length > 0 &&
    this.datasetMetadata.version === '2.0.0-combined'
  ) {
    console.log(
      '[DataService] Active GitHub research dataset:',
      this.experiments.length,
      'records'
    );
    return;
  }

  // If GitHub loading failed, retain the old saved dataset as fallback.
  const saved = localStorage.getItem(this.STORAGE_KEY);

  if (saved) {
    try {
      const parsed = JSON.parse(saved);

      this.experiments = parsed.experiments || [];
      this.documents = parsed.documents || [];
      this.relationships = parsed.relationships || {
        nodes: [],
        edges: []
      };
      this.coverageCategories = parsed.coverageCategories || null;
      this.datasetMetadata = parsed.datasetMetadata || {
        is_placeholder: false,
        status: 'Previously saved dataset',
        version: 'custom',
        total_records: this.experiments.length
      };

      console.log(
        '[DataService] Restored saved fallback dataset:',
        this.experiments.length,
        'records'
      );

      this.notify();
    } catch (err) {
      console.warn(
        '[DataService] Could not restore saved dataset:',
        err
      );
    }
  }
}

async loadDefaultData() {
  // Use a preloaded bundle if one exists
  // Skip the old bundled sample data.
// Load the combined research dataset instead.
if (window.DEFAULT_FLARE_X_BUNDLE) {
    console.log('[DataService] Skipping legacy default bundle.');
}

  // First, try loading the complete combined research dataset
  try {
    const response = await fetch(
      'data/raw/flarex_everything_combined.json',
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error(`Combined dataset request failed: ${response.status}`);
    }

    const records = await response.json();

    if (!Array.isArray(records) || records.length === 0) {
      throw new Error('Combined dataset is not a valid non-empty JSON array.');
    }

    this.experiments = records;

    this.datasetMetadata = {
      is_placeholder: false,
      status: 'Combined research dataset — source verification pending',
      version: '2.0.0-combined',
      total_records: records.length,
      source_file: 'data/raw/flarex_everything_combined.json',
      scientific_status: 'Preserved source records; not independently validated'
    };

    // Load supporting dashboard files where available
    const [docRes, relRes, covRes] = await Promise.allSettled([
      fetch('data/documents.json').then(r => {
        if (!r.ok) throw new Error('Documents unavailable');
        return r.json();
      }),
      fetch('data/relationships.json').then(r => {
        if (!r.ok) throw new Error('Relationships unavailable');
        return r.json();
      }),
      fetch('data/coverage_categories.json').then(r => {
        if (!r.ok) throw new Error('Coverage categories unavailable');
        return r.json();
      })
    ]);

    this.documents = docRes.status === 'fulfilled'
      ? (docRes.value.documents || [])
      : [];

    this.relationships = relRes.status === 'fulfilled'
      ? relRes.value
      : { nodes: [], edges: [] };

    this.coverageCategories = covRes.status === 'fulfilled'
      ? (covRes.value.coverage_axes || null)
      : null;

    console.log(
      `[DataService] Loaded combined dataset: ${records.length} records`
    );

    this.notify();
    return;

  } catch (err) {
    console.warn(
      '[DataService] Combined dataset unavailable; trying legacy files.',
      err
    );
  }

  // Legacy fallback
  try {
    const [expRes, docRes, relRes, covRes] = await Promise.all([
      fetch('data/experiments.json').then(r => r.json()),
      fetch('data/documents.json').then(r => r.json()),
      fetch('data/relationships.json').then(r => r.json()),
      fetch('data/coverage_categories.json').then(r => r.json())
    ]);

    this.experiments = expRes.experiments || [];

    this.datasetMetadata = expRes.dataset_metadata || {
      is_placeholder: true,
      status: 'Legacy fallback dataset',
      version: '1.0.0-placeholder'
    };

    this.datasetMetadata.total_records = this.experiments.length;
    this.documents = docRes.documents || [];
    this.relationships = relRes || { nodes: [], edges: [] };
    this.coverageCategories = covRes.coverage_axes || null;

    console.log(
      `[DataService] Loaded legacy dataset: ${this.experiments.length} records`
    );

    this.notify();

  } catch (err) {
    console.error('[DataService] Could not load any dataset:', err);
  }
}


  applyBundle(bundle) {
    this.experiments = bundle.experiments || [];
    this.datasetMetadata = bundle.dataset_metadata || {
      is_placeholder: true,
      status: "PLACEHOLDER SAMPLE DATA, replace with real NASA records",
      version: "1.0.0-placeholder"
    };
    this.datasetMetadata.total_records = this.experiments.length;
    this.documents = bundle.documents || [];
    this.relationships = bundle.relationships || { nodes: [], edges: [] };
    this.coverageCategories = bundle.coverage_categories || null;

    console.log(`[DataService] Initialized from bundle: ${this.experiments.length} experiments, ${this.documents.length} docs`);
    this.notify();
  }

  // Subscribe to data changes
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify() {
    for (const cb of this.listeners) {
      try {
        cb(this);
      } catch (e) {
        console.error('[DataService] Error in listener callback:', e);
      }
    }
  }

  // Safe accessor helper: Displays "Not available" for missing or undefined fields
  formatValue(val, fallback = "Not available") {
    if (val === null || val === undefined || val === "" || (Array.isArray(val) && val.length === 0)) {
      return fallback;
    }
    return val;
  }

  // Returns formatted quantity with unit and uncertainty
  formatQuantity(fieldObj) {
    if (!fieldObj || fieldObj.value === null || fieldObj.value === undefined || fieldObj.value === "") {
      return '<span class="not-available">Not available</span>';
    }
    let str = `${fieldObj.value}`;
    if (fieldObj.unit) str += ` ${fieldObj.unit}`;
    if (fieldObj.uncertainty) str += ` (${fieldObj.uncertainty})`;
    return str;
  }

  getExperiments() {
    return this.experiments;
  }

  getExperimentById(id) {
    return this.experiments.find(e => e.id === id) || null;
  }

  getDocuments() {
    return this.documents;
  }

  getRelationships() {
    return this.relationships;
  }

  getCoverageCategories() {
    return this.coverageCategories;
  }

  getMetadata() {
    return this.datasetMetadata;
  }

  isPlaceholder() {
    return !!this.datasetMetadata.is_placeholder;
  }

  // Search and filter experiments
  searchExperiments({ query = '', material = '', platform = '', gravity = '', measurement = '' } = {}) {
    const q = query.toLowerCase().trim();
    return this.experiments.filter(exp => {
      // Query search in name, id, objective, notes, material, platform
      if (q) {
        const matchName = exp.name && exp.name.toLowerCase().includes(q);
        const matchId = exp.id && exp.id.toLowerCase().includes(q);
        const matchObj = exp.objective && exp.objective.toLowerCase().includes(q);
        const matchNotes = exp.notes && exp.notes.toLowerCase().includes(q);
        const matchMat = exp.material_fuel && exp.material_fuel.toLowerCase().includes(q);
        const matchPlat = exp.platform && exp.platform.toLowerCase().includes(q);
        if (!matchName && !matchId && !matchObj && !matchNotes && !matchMat && !matchPlat) {
          return false;
        }
      }

      // Material filter
      if (material && material !== 'all') {
        if (!exp.material_fuel || !exp.material_fuel.toLowerCase().includes(material.toLowerCase())) {
          return false;
        }
      }

      // Platform filter
      if (platform && platform !== 'all') {
        if (!exp.platform || !exp.platform.toLowerCase().includes(platform.toLowerCase())) {
          return false;
        }
      }

      // Gravity filter
      if (gravity && gravity !== 'all') {
        if (!exp.gravity_condition || !exp.gravity_condition.toLowerCase().includes(gravity.toLowerCase())) {
          return false;
        }
      }

      // Measurement variable filter
      if (measurement && measurement !== 'all') {
        const hasMeas = (exp.measured_variables || []).some(m => 
          m.name && m.name.toLowerCase().includes(measurement.toLowerCase()) && m.value !== null && m.value !== undefined
        );
        if (!hasMeas) return false;
      }

      return true;
    });
  }

  // Replace entire dataset with new records
  importCustomDataset(importedExperiments, rawString, meta = {}) {
    try {
      localStorage.setItem(this.RAW_STORAGE_KEY, rawString);
    } catch (e) {
      console.warn('Could not archive raw upload to localStorage', e);
    }

    this.experiments = importedExperiments;
    this.datasetMetadata = {
      is_placeholder: false,
      status: meta.name || "Custom Uploaded Dataset",
      version: meta.version || "1.0.0-custom",
      total_records: importedExperiments.length,
      imported_date: new Date().toISOString(),
      raw_filename: meta.filename || "upload.json",
      sources: [{ name: meta.name || "Dataset", count: importedExperiments.length, date: new Date().toISOString() }]
    };

    this._persistBundle();
    this.notify();
  }

  /**
   * Append new experiments to the existing collection without replacing.
   * Deduplicates by experiment ID — existing IDs are updated, new IDs are added.
   * If currently on placeholder dummy data, cleanly replaces placeholder records with real data.
   * Returns a summary: { added, updated, prevTotal, totalAfter }
   */
  appendToCollection(newExperiments, meta = {}) {
    const isPlaceholder = this.isPlaceholder();
    const prevTotal = isPlaceholder ? 0 : this.experiments.length;

    // If currently on placeholder sample data, initialize fresh with the first real dataset
    if (isPlaceholder) {
      this.experiments = [];
    }

    const existingIds = new Map(this.experiments.map(e => [e.id, e]));
    let added = 0, updated = 0;

    newExperiments.forEach(exp => {
      if (existingIds.has(exp.id)) {
        // Update in-place: update the existing record
        const idx = this.experiments.findIndex(e => e.id === exp.id);
        if (idx !== -1) this.experiments[idx] = exp;
        updated++;
      } else {
        this.experiments.push(exp);
        added++;
      }
    });

    // Update metadata: track all sources
    const prevSources = (!isPlaceholder && this.datasetMetadata && this.datasetMetadata.sources)
      ? this.datasetMetadata.sources
      : (!isPlaceholder && this.datasetMetadata && this.datasetMetadata.status)
        ? [{ name: this.datasetMetadata.status, count: prevTotal, date: this.datasetMetadata.imported_date || 'Earlier' }]
        : [];

    const newSource = {
      name: meta.name || 'Imported Dataset',
      count: newExperiments.length,
      added,
      updated,
      date: new Date().toISOString()
    };

    const allSources = [...prevSources, newSource];
    const sourceLabel = allSources.map(s => `${s.name} (${s.count})`).join(' + ');

    this.datasetMetadata = {
      ...this.datasetMetadata,
      is_placeholder: false,
      status: sourceLabel,
      total_records: this.experiments.length,
      last_appended_date: new Date().toISOString(),
      sources: allSources
    };

    this._persistBundle();
    this.notify();

    return { added, updated, prevTotal, totalAfter: this.experiments.length };
  }

  _persistBundle() {
    try {
      const bundle = {
        experiments: this.experiments,
        documents: this.documents,
        relationships: this.relationships,
        coverageCategories: this.coverageCategories,
        datasetMetadata: this.datasetMetadata
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bundle));
    } catch (e) {
      console.warn('Could not persist full dataset to localStorage (storage limit may be exceeded). In-memory state remains fully active and consistent:', e);
    }
  }

  // Reset to default sample placeholder dataset
  async resetToDefault() {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.RAW_STORAGE_KEY);
    await this.loadDefaultData();
  }
}

// Global Singleton
window.dataService = new DataService();
