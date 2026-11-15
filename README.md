# FLARE-X: Intelligent Microgravity Fire Intelligence Platform
**Research Decision-Support Dashboard for NASA Microgravity Combustion Research**

> **Scientific Disclaimer:**  
> *Research decision-support tool. Not certified spacecraft safety guidance. Not an official NASA product. This platform is NOT a certified fire detector, emergency response system, or source of operational fire suppression commands.*

---

## 🛰️ Project Overview
**FLARE-X** provides rigorous, evidence-grounded scientific decision-support for combustion researchers, spacecraft fire-safety engineers, mission planners, educators, and students. It integrates empirical flight telemetry, peer-reviewed literature excerpts, dynamic comparability checks, and topological knowledge networks across NASA microgravity investigations (including BASS, ACME, CIR, Saffire, FLEX, and SLICES).

---

## 🛡️ Core Scientific Guardrails & Principles

1. **Scientific Traceability:**  
   Every measurement, comparison, topological relationship, and AI-synthesized answer directly references its source DOI/URL, publication page, section, and retrieval date.
2. **Zero Data Invention:**  
   Missing or uninstrumented telemetry fields are never fabricated. Missing values explicitly display as `Not available`.
3. **Epistemological Categorization:**  
   Statements in the Research Assistant and Knowledge Graph are strictly labeled by statement type:
   - `[MEASURED FACT]`: Direct sensor or photogrammetric observation
   - `[PAPER CONCLUSION]`: Verified author finding from peer-reviewed publication
   - `[CROSS-STUDY INTERPRETATION]`: Multi-study synthesis across flight configurations
   - `[MODEL ESTIMATE]`: Computational or empirical scaling projection
4. **No Quantitative Fire-Risk Scores:**  
   FLARE-X intentionally avoids reductionist 1-100 "fire-risk scores". Combustion in microgravity is governed by complex coupled transport phenomena (straining, radiation, flow speed, and hypoxia).
5. **Physical Guardrails:**
   - *Microgravity is reduced buoyancy ($\mathrm{Gr} \to 0$), not the absence of gravitation.*
   - *Spacecraft environmental control systems create forced airflow ($1-20\text{ cm/s}$), sustaining flame spread.*
   - *Microgravity models cannot automatically predict Lunar ($0.16g$) or Martian ($0.38g$) combustion without re-introducing mixed-convection scaling.*
   - *High flame temperature alone does not define hazard (e.g., FLEX cool flames burn invisibly below 800 K).*
   - *Research Gap Matrix findings strictly reflect the indexed collection, not the totality of worldwide aerospace research.*

---

## 🔬 System Modules

### 1. Experiment Library (P0)
- Keyword search across experiment name, objective, material, platform, and notes.
- Faceted multi-filtering by Topic, Material, Platform, Gravity Condition, and Measured Variable.
- Telemetry cards with sensor metrics and unit tags.
- Detailed Scientific Dossier modal with field-level ground truth provenance.

### 2. Comparison Lab (P0)
- Multi-experiment side-by-side comparative matrix with automated difference highlighting.
- **Unit Harmonization Engine**: Converts compatible units (e.g. `cm/s` $\leftrightarrow$ `mm/s`, `kPa` $\leftrightarrow$ `atm`) with documented formulas while preserving raw reported values.
- **Comparability Safety Validator**: When variables differ in dimension or definition, blocks unified plotting and renders independent diagnostic plots with a **Scientific Comparability Warning**.
- Interactive comparative bar charts and time-series propagation curves.

### 3. Evidence-Grounded Research Assistant (P0)
- Grounded query engine indexing publication passages and flight reports.
- Statement type tagging on every factual sentence.
- Interactive **"Show Evidence"** drawer exposing raw excerpts, page numbers, and DOIs.
- Strict guardrail: If evidence is insufficient, responds that the indexed collection does not establish the answer. Never answers from general knowledge.

### 4. Knowledge Graph (P1)
- Interactive HTML5 Canvas graph mapping Investigations, Materials, Conditions, Measurements, Findings, and Publications.
- Edge inspection revealing the specific source citation for every scientific relationship.
- Topic and entity neighborhood filtering.

### 5. Research Gap Matrix (P1)
- Multi-dimensional heatmap across Materials $\times$ Gravity / Pressure / Oxygen $\times$ Measured Outcomes.
- Cell statuses: `Records found`, `Not found in indexed collection`, and `Not enough metadata to determine`.
- Prominently displays collection scope.
- Automated Gap Synthesis Report with direct boundary record links and Markdown export.

### 6. Prediction & Scenario Explorer (P2, Conditional)
- Feature-flagged OFF by default; requires explicit safety acknowledgment.
- Single physical target: `Flame Spread Rate (mm/s)` on solid fuels.
- Enforces experimental envelope ($16-30\%\ \mathrm{O}_2$, $1-20\text{ cm/s}$ airflow, $90-105\text{ kPa}$).
- Displays Leave-One-Out Cross-Validation (LOOCV) metrics (MAE: 0.22 mm/s, RMSE: 0.29 mm/s), 95% Confidence Interval, de Ris baseline comparison, and nearest training anchors.

### 7. Data Ingestion & Import Wizard
- Ingests user CSV/JSON datasets.
- Interactive schema column mapping wizard.
- Pre-ingestion validation audit checking required fields, unit presence, and duplicate identifiers.
- Preserves raw upload files unchanged in the archive while updating the active application data layer.

### 8. About & Scientific Guardrails Page
- Comprehensive documentation of the 5 microgravity combustion guardrails, schema definitions, and disclaimers.

---

## 🚀 How to Open and Run

The application is completely self-contained with zero external dependencies or internet CDN requirements.

### Option A: Direct Browser File Access
Simply open the `index.html` file in Google Chrome, Microsoft Edge, or Mozilla Firefox:
```
file:///C:/Users/aksha/.gemini/antigravity/scratch/flare-x/index.html
```

### Option B: Local Web Server
Run Python's built-in static server from PowerShell:
```powershell
cd C:\Users\aksha\.gemini\antigravity\scratch\flare-x
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

---

## 📁 File Structure
```
flare-x/
├── index.html                   # Master single-page application shell
├── README.md                    # Project documentation & scientific manual
├── css/
│   ├── main.css                # Dark mission-control theme, layout & typography
│   ├── components.css          # Cards, buttons, tables, badges & diff highlights
│   └── visualizations.css      # Knowledge graph, heatmap & chart styling
├── js/
│   ├── app.js                  # Master controller & tab router
│   ├── data-service.js         # Central data layer with event bus & persistence
│   ├── unit-converter.js       # Mathematical unit conversion & comparability validator
│   ├── chart-renderer.js       # Standalone SVG chart and time-series engine
│   ├── library.js              # Experiment Library module (P0)
│   ├── comparison.js           # Comparison Lab module (P0)
│   ├── assistant.js            # Grounded Research Assistant module (P0)
│   ├── graph.js                # Interactive Knowledge Graph module (P1)
│   ├── gap-matrix.js           # Research Gap Matrix module (P1)
│   ├── prediction.js           # Scenario Prediction Explorer (P2)
│   └── import-data.js          # CSV/JSON Schema Mapping & Validation Wizard
└── data/
    ├── experiments.json        # 8 placeholder flight experiment records
    ├── documents.json          # Archival publication passages & metadata
    ├── relationships.json      # Knowledge graph nodes & cited edges
    ├── coverage_categories.json# Matrix dimensions and outcome definitions
    └── default-bundle.js       # Standalone offline JS bundle for seamless file:// execution
```

---

## Supplemental datasets carried with the updated package

Seven JSON research collections from the earlier FLARE-X starter project are included under `data/research_archive/`. They are preserved as a separate archive and are **not** automatically loaded into the active dashboard database. Their current status is `pending_source_verification`; consult `data/research_archive/manifest.json` and `docs/SUPPLEMENTAL_DATASETS.md` before using any values scientifically.

The original Windows dashboard files, active database files, scripts, styles, and bundled data files are retained from the supplied Windows package. The supplemental archive does not overwrite the existing 274-record FLEX JSON/CSV dataset or the dashboard's active experiment collection.
