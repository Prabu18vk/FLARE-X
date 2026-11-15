/**
 * FLARE-X Knowledge Graph (P1)
 * High-performance interactive graph visualization on HTML5 Canvas.
 * Connects investigations, publications, materials, conditions, measurements, and scientific findings.
 * Includes edge-level source traceability, topic filtering, and experiment cross-linking.
 */

class KnowledgeGraph {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.nodes = [];
    this.edges = [];
    this.selectedNode = null;
    this.hoveredNode = null;
    this.selectedEdge = null;
    this.activeFilter = 'all';

    // Viewport transform
    this.scale = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.draggedNode = null;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // Simulation
    this.animId = null;
    this.alpha = 1.0;

    this.groupColors = {
      investigation: '#00F0FF', // Cyan
      material: '#FF7700',      // Orange
      condition: '#A855F7',     // Purple
      measurement: '#10B981',   // Emerald
      finding: '#EF4444',       // Red
      publication: '#3B82F6'    // Blue
    };
  }

  init() {
    this.canvas = document.getElementById('knowledge-graph-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.bindEvents();
    this.loadData();

    window.dataService.subscribe(() => {
      this.loadData();
    });
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = rect.height * (window.devicePixelRatio || 1);
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
    this.panX = (this.canvas.width / (window.devicePixelRatio || 1)) / 2;
    this.panY = (this.canvas.height / (window.devicePixelRatio || 1)) / 2;
    this.draw();
  }

  loadData() {
    const graphData = window.dataService.getRelationships();
    if (!graphData || !graphData.nodes) return;

    // Clone and assign initial random positions
    const width = 600;
    const height = 450;

    this.nodes = graphData.nodes.map((n, i) => {
      const angle = (i / graphData.nodes.length) * Math.PI * 2;
      const radius = 120 + (i % 3) * 60;
      return {
        ...n,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: n.type === 'investigation' ? 22 : (n.type === 'finding' ? 18 : 14)
      };
    });

    this.edges = (graphData.edges || []).map(e => ({
      ...e,
      sourceNode: this.nodes.find(n => n.id === e.source),
      targetNode: this.nodes.find(n => n.id === e.target)
    })).filter(e => e.sourceNode && e.targetNode);

    this.alpha = 1.0;
    this.runSimulation();
  }

  bindEvents() {
    if (!this.canvas) return;

    this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mouseup', () => this.onMouseUp());
    this.canvas.addEventListener('wheel', (e) => this.onWheel(e));

    // Graph UI buttons
    const zoomIn = document.getElementById('graph-zoom-in');
    const zoomOut = document.getElementById('graph-zoom-out');
    const reset = document.getElementById('graph-reset-view');

    if (zoomIn) zoomIn.addEventListener('click', () => { this.scale *= 1.25; this.draw(); });
    if (zoomOut) zoomOut.addEventListener('click', () => { this.scale /= 1.25; this.draw(); });
    if (reset) reset.addEventListener('click', () => {
      this.scale = 1.0;
      const rect = this.canvas.getBoundingClientRect();
      this.panX = rect.width / 2;
      this.panY = rect.height / 2;
      this.draw();
    });

    const filterSelect = document.getElementById('graph-filter-type');
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        this.activeFilter = e.target.value;
        this.draw();
      });
    }

    const searchInput = document.getElementById('graph-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        if (val) {
          const match = this.nodes.find(n => n.label.toLowerCase().includes(val) || n.id.toLowerCase().includes(val));
          if (match) {
            this.selectNode(match);
            this.panX = (this.canvas.clientWidth / 2) - match.x * this.scale;
            this.panY = (this.canvas.clientHeight / 2) - match.y * this.scale;
          }
        }
        this.draw();
      });
    }
  }

  getCanvasMousePos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    const worldX = (clientX - this.panX) / this.scale;
    const worldY = (clientY - this.panY) / this.scale;
    return { clientX, clientY, worldX, worldY };
  }

  onMouseDown(e) {
    const pos = this.getCanvasMousePos(e);
    // Check if clicked a node
    const clicked = this.nodes.find(n => {
      const dx = n.x - pos.worldX;
      const dy = n.y - pos.worldY;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius;
    });

    if (clicked) {
      this.draggedNode = clicked;
      this.selectNode(clicked);
    } else {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    }
  }

  onMouseMove(e) {
    const pos = this.getCanvasMousePos(e);

    if (this.draggedNode) {
      this.draggedNode.x = pos.worldX;
      this.draggedNode.y = pos.worldY;
      this.draggedNode.vx = 0;
      this.draggedNode.vy = 0;
      this.draw();
      return;
    }

    if (this.isDragging) {
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      this.panX += dx;
      this.panY += dy;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
      this.draw();
      return;
    }

    // Hover detection
    const hovered = this.nodes.find(n => {
      const dx = n.x - pos.worldX;
      const dy = n.y - pos.worldY;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius;
    });

    if (hovered !== this.hoveredNode) {
      this.hoveredNode = hovered;
      this.canvas.style.cursor = hovered ? 'pointer' : 'grab';
      this.draw();
    }
  }

  onMouseUp() {
    this.isDragging = false;
    this.draggedNode = null;
  }

  onWheel(e) {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.12 : 0.89;
    const pos = this.getCanvasMousePos(e);

    this.scale *= zoomFactor;
    this.scale = Math.max(0.3, Math.min(3.5, this.scale));
    this.draw();
  }

  selectNode(node) {
    this.selectedNode = node;
    this.renderInspector(node);
    this.draw();
  }

  // Physics simulation tick
  runSimulation() {
    if (this.alpha <= 0.01) return;

    // Repulsion between nodes
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const n1 = this.nodes[i];
        const n2 = this.nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (3000 / (dist * dist)) * this.alpha;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        n1.vx -= fx;
        n1.vy -= fy;
        n2.vx += fx;
        n2.vy += fy;
      }
    }

    // Spring attraction along edges
    this.edges.forEach(e => {
      const dx = e.targetNode.x - e.sourceNode.x;
      const dy = e.targetNode.y - e.sourceNode.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const targetDist = 130;
      const force = (dist - targetDist) * 0.04 * this.alpha;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      e.sourceNode.vx += fx;
      e.sourceNode.vy += fy;
      e.targetNode.vx -= fx;
      e.targetNode.vy -= fy;
    });

    // Center gravity
    this.nodes.forEach(n => {
      n.vx -= n.x * 0.01 * this.alpha;
      n.vy -= n.y * 0.01 * this.alpha;
      n.vx *= 0.85;
      n.vy *= 0.85;
      n.x += n.vx;
      n.y += n.vy;
    });

    this.alpha *= 0.96;
    this.draw();

    if (this.alpha > 0.01) {
      requestAnimationFrame(() => this.runSimulation());
    }
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.width / dpr;
    const height = this.canvas.height / dpr;

    this.ctx.save();
    this.ctx.scale(dpr, dpr);
    this.ctx.clearRect(0, 0, width, height);

    // Apply pan & zoom
    this.ctx.translate(this.panX, this.panY);
    this.ctx.scale(this.scale, this.scale);

    // Filter check
    const isVisible = (node) => {
      if (this.activeFilter === 'all') return true;
      return node.type === this.activeFilter;
    };

    // Draw Edges
    this.edges.forEach(e => {
      const isConnectedToSelected = this.selectedNode && (e.source === this.selectedNode.id || e.target === this.selectedNode.id);
      const isDimmed = this.selectedNode && !isConnectedToSelected;

      this.ctx.beginPath();
      this.ctx.moveTo(e.sourceNode.x, e.sourceNode.y);
      this.ctx.lineTo(e.targetNode.x, e.targetNode.y);

      if (isConnectedToSelected) {
        this.ctx.strokeStyle = '#00F0FF';
        this.ctx.lineWidth = 2.5;
        this.ctx.globalAlpha = 0.95;
      } else {
        this.ctx.strokeStyle = '#1e2946';
        this.ctx.lineWidth = 1.2;
        this.ctx.globalAlpha = isDimmed ? 0.15 : 0.6;
      }
      this.ctx.stroke();

      // Draw relationship label on edge midpoint if selected or hovered
      if (isConnectedToSelected) {
        const midX = (e.sourceNode.x + e.targetNode.x) / 2;
        const midY = (e.sourceNode.y + e.targetNode.y) / 2;
        this.ctx.fillStyle = '#94a3b8';
        this.ctx.font = '10px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(e.relationship, midX, midY - 4);
      }
    });

    // Draw Nodes
    this.nodes.forEach(n => {
      if (!isVisible(n)) return;

      const isSelected = this.selectedNode && this.selectedNode.id === n.id;
      const isNeighbor = this.selectedNode && this.edges.some(e => 
        (e.source === this.selectedNode.id && e.target === n.id) ||
        (e.target === this.selectedNode.id && e.source === n.id)
      );
      const isDimmed = this.selectedNode && !isSelected && !isNeighbor;

      const color = this.groupColors[n.type] || '#fff';

      this.ctx.globalAlpha = isDimmed ? 0.2 : 1.0;

      // Glow effect if selected
      if (isSelected) {
        this.ctx.beginPath();
        this.ctx.arc(n.x, n.y, n.radius + 8, 0, Math.PI * 2);
        this.ctx.fillStyle = `${color}33`;
        this.ctx.fill();
      }

      // Main Circle
      this.ctx.beginPath();
      this.ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = '#0d1222';
      this.ctx.fill();
      this.ctx.lineWidth = isSelected ? 3 : 2;
      this.ctx.strokeStyle = color;
      this.ctx.stroke();

      // Node Label
      this.ctx.fillStyle = isSelected ? '#fff' : '#cbd5e1';
      this.ctx.font = `${isSelected ? 'bold ' : ''}11px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(n.label, n.x, n.y + n.radius + 14);
    });

    this.ctx.restore();
  }

  renderInspector(node) {
    const container = document.getElementById('graph-inspector-body');
    if (!container) return;

    if (!node) {
      container.innerHTML = `<div style="font-size: 0.82rem; color: var(--text-muted); text-align: center; padding: 20px;">Click any node to inspect scientific relationships, source citations, and linked experiments.</div>`;
      return;
    }

    const connectedEdges = this.edges.filter(e => e.source === node.id || e.target === node.id);
    const relatedExperiments = window.dataService.getExperiments().filter(exp => {
      const matchObj = exp.objective && exp.objective.toLowerCase().includes(node.label.toLowerCase());
      const matchMat = exp.material_fuel && exp.material_fuel.toLowerCase().includes(node.label.toLowerCase());
      const matchPlat = exp.platform && exp.platform.toLowerCase().includes(node.label.toLowerCase());
      const matchVar = (exp.measured_variables || []).some(v => v.name && v.name.toLowerCase().includes(node.label.toLowerCase()));
      return matchObj || matchMat || matchPlat || matchVar;
    });

    const color = this.groupColors[node.type] || '#fff';

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
          <div style="font-size: 0.7rem; font-family: var(--font-mono); color: ${color}; text-transform: uppercase;">Node Type: ${node.type}</div>
          <h4 style="font-size: 1.15rem; color: #fff; margin-top: 2px;">${node.label}</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">${node.description || 'Microgravity combustion entity'}</p>
        </div>

        <div>
          <h5 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
            Scientific Relationships (${connectedEdges.length})
          </h5>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${connectedEdges.map(e => {
              const other = e.source === node.id ? e.targetNode : e.sourceNode;
              const isOutgoing = e.source === node.id;
              return `
                <div style="background: var(--bg-surface-card); padding: 10px; border-radius: 6px; border: 1px solid var(--border-subtle); font-size: 0.78rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
                    <span style="font-family: var(--font-mono); color: var(--accent-cyan);">${isOutgoing ? '→' : '←'} ${e.relationship}</span>
                    <span style="color: #fff; font-weight: 600;">${other.label}</span>
                  </div>
                  <div style="font-size: 0.7rem; color: var(--text-muted); border-top: 1px dashed var(--border-subtle); padding-top: 4px; margin-top: 4px;">
                    <strong>Source Citation:</strong> ${e.source_citation || 'NASA PSI Database Record'}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div>
          <h5 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
            Linked Experiments in Collection (${relatedExperiments.length})
          </h5>
          ${relatedExperiments.length > 0 ? relatedExperiments.map(exp => `
            <div style="background: var(--bg-surface-card); padding: 8px 10px; border-radius: 6px; margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between; font-size: 0.76rem;">
              <div>
                <span class="exp-id-badge" style="font-size: 0.68rem;">${exp.id}</span>
                <span style="color: #fff; margin-left: 6px;">${exp.name}</span>
              </div>
              <button class="btn btn-secondary btn-sm" style="padding: 2px 6px; font-size: 0.7rem;" onclick="experimentLibrary.openDossier('${exp.id}')">View</button>
            </div>
          `).join('') : '<span class="not-available">No directly linked experiments indexed</span>'}
        </div>
      </div>
    `;
  }
}

window.knowledgeGraph = new KnowledgeGraph();
