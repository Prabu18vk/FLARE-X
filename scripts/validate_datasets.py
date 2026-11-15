import json
from pathlib import Path
import sys

DATA_DIR = Path(__file__).resolve().parents[1] / "data" / "datasets"
errors = []
files = sorted(DATA_DIR.glob("*.json"))

for path in files:
    try:
        obj = json.loads(path.read_text(encoding="utf-8"))
        if not isinstance(obj, dict):
            errors.append(f"{path.name}: root must be a JSON object")
            continue
        if "records" in obj and not isinstance(obj["records"], list):
            errors.append(f"{path.name}: 'records' must be a list")
    except Exception as exc:
        errors.append(f"{path.name}: {exc}")

print(f"Checked {len(files)} JSON files.")
if errors:
    print("\\n".join(errors))
    sys.exit(1)
print("JSON syntax and basic structure checks passed.")
