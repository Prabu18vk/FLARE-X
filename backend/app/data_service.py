import json
import os
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[2]
DATA_DIR = Path(os.getenv("FLAREX_DATA_DIR", ROOT / "data" / "datasets"))
CATALOG_PATH = Path(os.getenv("FLAREX_CATALOG_PATH", ROOT / "data" / "data_catalog.json"))

def load_catalog() -> dict[str, Any]:
    if not CATALOG_PATH.exists():
        return {"project": "FLARE-X", "datasets": []}
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))

def load_dataset(filename: str) -> dict[str, Any]:
    # Only allow a plain filename to prevent path traversal.
    if Path(filename).name != filename or not filename.endswith(".json"):
        raise ValueError("Invalid dataset filename")
    path = DATA_DIR / filename
    if not path.exists():
        raise FileNotFoundError(filename)
    return json.loads(path.read_text(encoding="utf-8"))

def dataset_summary() -> dict[str, Any]:
    catalog = load_catalog()
    entries = catalog.get("datasets", [])
    return {
        "dataset_count": len(entries),
        "pending_source_verification": sum(
            1 for item in entries if item.get("review_status") == "pending_source_verification"
        ),
        "gravity_conditions": sorted({
            str(item.get("gravity_condition", "not specified"))
            if not isinstance(item.get("gravity_condition"), (dict, list))
            else "mixed or structured"
            for item in entries
        }),
        "datasets": entries,
    }
