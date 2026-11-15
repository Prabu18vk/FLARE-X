const API = "http://127.0.0.1:8000";
let allDatasets = [];
const el = (id) => document.getElementById(id);

async function loadCatalog() {
  try {
    const health = await fetch(`${API}/api/health`);
    if (!health.ok) throw new Error("API unavailable");
    el("api-status").textContent = "Online";
    const response = await fetch(`${API}/api/datasets`);
    const data = await response.json();
    allDatasets = data.datasets || [];
    el("dataset-count").textContent = data.dataset_count ?? "0";
    el("review-count").textContent = data.pending_source_verification ?? "0";
    el("gravity-count").textContent = (data.gravity_conditions || []).length;
    renderDatasets(allDatasets);
  } catch (error) {
    el("api-status").textContent = "Offline";
    el("dataset-list").innerHTML = '<div class="empty">API not running. Start it with <code>uvicorn backend.app.main:app --reload</code>.</div>';
  }
}
function renderDatasets(items) {
  const container = el("dataset-list");
  if (!items.length) { container.innerHTML = '<div class="empty">No datasets match this search.</div>'; return; }
  container.innerHTML = items.map(item => `
    <article class="dataset-card">
      <span class="tag">${escapeHtml(item.gravity_condition || "gravity not specified")}</span>
      <h3>${escapeHtml(item.title || item.dataset_id)}</h3>
      <p>${Number.isInteger(item.record_count) ? item.record_count + " records · " : ""}${escapeHtml(item.file)}</p>
      <small class="note">${escapeHtml(item.review_status || "status not specified")}</small><br>
      <a href="${API}/api/datasets/${encodeURIComponent(item.file)}" target="_blank" rel="noopener">View JSON →</a>
    </article>`).join("");
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
el("search").addEventListener("input", event => {
  const q = event.target.value.toLowerCase();
  renderDatasets(allDatasets.filter(x => `${x.title} ${x.dataset_id} ${x.file}`.toLowerCase().includes(q)));
});
loadCatalog();
