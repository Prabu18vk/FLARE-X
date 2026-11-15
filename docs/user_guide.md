# User guide

1. Install Python 3.11 or newer.
2. Install dependencies with `pip install -r requirements.txt`.
3. Start the API with `uvicorn backend.app.main:app --reload`.
4. In a second terminal, serve the repository with `python -m http.server 5500`.
5. Open `http://127.0.0.1:5500/frontend/`.
6. Use the dataset search and open a JSON record to inspect its original fields.

The dashboard currently provides a catalog view. Scientific charts and simulations are roadmap items, not implemented capabilities yet.
