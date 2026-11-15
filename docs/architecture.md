# FLARE-X Architecture

## Initial design
The initial prototype uses a small, layered architecture:

1. **Data layer** — source JSON files and a catalog in `data/`.
2. **Service layer** — `backend/app/data_service.py` loads catalog and dataset files.
3. **API layer** — FastAPI exposes read-only endpoints.
4. **Presentation layer** — static HTML/CSS/JavaScript dashboard calls the API.
5. **Scientific model layer** — `models/` is reserved for independently validated algorithms.

## API endpoints
- `GET /api/health`
- `GET /api/catalog`
- `GET /api/datasets`
- `GET /api/datasets/{filename}`

The current API is read-only. Before deployment, replace permissive CORS with the exact dashboard origin, add request limits and deployment configuration, and consider authentication if write endpoints are introduced.

## Why this stack
Python is a natural fit for scientific data processing and model validation. FastAPI provides typed HTTP endpoints with generated API documentation. A vanilla JavaScript frontend keeps the first version easy to run and avoids a frontend build tool. Move to React/TypeScript only when interactive complexity warrants it.
