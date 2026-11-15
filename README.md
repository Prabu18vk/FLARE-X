# FLARE-X
### Intelligent Microgravity Fire Intelligence Platform

FLARE-X is an open research and software project for organizing spacecraft-fire experimental data, exploring combustion behaviour across gravity environments, and developing transparent analytical tools for fire-safety research.

> **Research prototype.** This repository is not a certified spacecraft fire-detection, suppression, or crew-safety system. Do not use its outputs as operational flight rules or safety-critical decisions.

## Project goals
- Organize traceable experimental datasets from NASA and other clearly attributed sources.
- Explore extinction behaviour, soot, radiant heat flux, cool-flame dynamics, peak surface temperature, and flame-spread rate.
- Compare microgravity, lunar, Martian, and Earth-gravity evidence without fabricating missing conditions.
- Make provenance, units, uncertainty, and missing values visible.
- Build reproducible analytics and future simulation workflows.

## Current status
This is the initial repository foundation. It includes a FastAPI backend, a lightweight browser dashboard, a JSON dataset catalog, validation scripts, tests, and project documentation.

The seven imported JSON files are marked `pending_source_verification` in `data/data_catalog.json`. Their presence does **not** mean every measurement, DOI, table reference, or transcription has been independently validated. Review each record against its primary source before using it in analysis.

## Technology stack
- **Backend:** Python 3.11+, FastAPI, Pydantic
- **Frontend:** HTML5, CSS3, vanilla JavaScript (no build step required)
- **Data:** JSON with explicit provenance and units
- **Testing:** pytest
- **API server:** Uvicorn

This stack is intentionally simple and maintainable for a research prototype. A React/TypeScript frontend or database can be introduced when the dashboard requirements justify them.

## Quick start

### 1. Create an environment
```bash
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Start the API
```bash
uvicorn backend.app.main:app --reload
```

Open:
- Dashboard: `frontend/index.html` (open directly in a browser)
- API health: http://127.0.0.1:8000/api/health
- Dataset catalog: http://127.0.0.1:8000/api/datasets
- Interactive API docs: http://127.0.0.1:8000/docs

For the browser dashboard to load live data, run the API and serve the repository root with a local static server, for example:
```bash
python -m http.server 5500
```
Then visit http://127.0.0.1:5500/frontend/.

## Repository layout
```text
FLARE-X/
├── backend/app/          # API routes and data access
├── data/
│   ├── datasets/         # Imported research JSON files
│   ├── raw/              # Original source files (not committed by default)
│   ├── processed/        # Reproducible transformed data
│   └── data_catalog.json # Dataset inventory and review status
├── docs/                 # Architecture, methods, provenance, roadmap
├── frontend/             # Browser dashboard
├── models/               # Future validated scientific models
├── scripts/              # Dataset validation and maintenance scripts
├── tests/                # Automated tests
└── visualizations/       # Exported plots and figures
```

## Core parameter schema
The project tracks these common research parameters:
1. Gravity condition: microgravity, lunar, Martian, Earth
2. Extinction velocity / extinction limit
3. Soot volume fraction
4. Radiant heat flux
5. Cool-flame dynamics
6. Peak surface temperature
7. Flame-spread rate

Not every experiment measures every parameter. Missing values must remain `null` or be explicitly labelled `not_reported`, `not_applicable`, or `not_measured`. Never replace missing data with zero.

## Data contribution rules
- Preserve the original source file and cite its DOI or stable URL.
- Record units for every numeric quantity.
- Include page/table/figure or dataset record identifiers.
- Distinguish measured, derived, simulated, and literature-reported values.
- Record uncertainty and instrument/method details when available.
- Do not infer lunar/Martian/Earth values from microgravity tests.
- Keep a `review_status` and document any corrections.

See [Data provenance](docs/data_provenance.md) and [Methodology](docs/methodology.md).

## Roadmap
- [x] Initial repository structure
- [x] JSON dataset catalog and validation script
- [x] Read-only dataset API
- [x] Starter dashboard
- [ ] Primary-source verification of imported datasets
- [ ] Unified schema migration and unit normalization
- [ ] Gravity-condition comparison visualizations
- [ ] Extinction and flame-spread analytical modules
- [ ] Thermal-risk and uncertainty analysis
- [ ] Reproducible model validation and benchmark suite

## License
The software code is offered under the MIT License (see `LICENSE`). Dataset files and third-party source materials may have separate terms; consult their original sources. NASA attribution and source links are retained where available.
