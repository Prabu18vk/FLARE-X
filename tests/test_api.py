from fastapi.testclient import TestClient
from backend.app.main import app

client = TestClient(app)

def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["project"] == "FLARE-X"

def test_dataset_catalog():
    response = client.get("/api/datasets")
    assert response.status_code == 200
    assert "datasets" in response.json()
    assert response.json()["dataset_count"] >= 0

def test_reject_path_traversal():
    response = client.get("/api/datasets/..%2F..%2Fsecret.json")
    assert response.status_code in (400, 404)
