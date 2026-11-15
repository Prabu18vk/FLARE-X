from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from backend.app.data_service import load_catalog, load_dataset, dataset_summary

app = FastAPI(
    title="FLARE-X API",
    description="Research data catalog and exploration API for spacecraft fire science.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict this before public deployment.
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health():
    return {"status": "ok", "project": "FLARE-X", "version": "0.1.0"}

@app.get("/api/datasets")
def list_datasets():
    return dataset_summary()

@app.get("/api/datasets/{filename}")
def get_dataset(filename: str):
    try:
        return load_dataset(filename)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Dataset not found")
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))

@app.get("/api/catalog")
def catalog():
    return load_catalog()
