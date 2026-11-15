/**
 * FLARE-X Standalone Chart Renderer
 * Zero-dependency, lightweight, high-precision SVG chart engine.
 * Generates interactive time-series plots, comparative bar charts, and heatmaps.
 */

class ChartRenderer {
  constructor() {
    this.colors = [
      '#00F0FF', // Cyan
      '#FF7700', // Orange
      '#10B981', // Emerald
      '#A855F7', // Purple
      '#F59E0B', // Amber
      '#3B82F6', // Blue
      '#EC4899', // Pink
      '#64748B'  // Slate
    ];
  }

  /**
   * Renders a comparative time-series chart
   * @param {string} containerId - Target element ID
   * @param {Array} seriesList - [{ name, expId, data: [{x, y}], xUnit, yUnit }]
   * @param {Object} options - { title, xLabel, yLabel }
   */
  renderTimeSeries(containerId, seriesList, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!seriesList || seriesList.length === 0) {
      container.innerHTML = `<div class="callout-box info"><div class="callout-text">No time-series telemetry available for selected experiments.</div></div>`;
      return;
    }

    const width = container.clientWidth || 640;
    const height = 320;
    const padding = { top: 30, right: 30, bottom: 50, left: 65 };

    // Find min and max
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    seriesList.forEach(series => {
      series.data.forEach(pt => {
        if (pt.x < minX) minX = pt.x;
        if (pt.x > maxX) maxX = pt.x;
        if (pt.y < minY) minY = pt.y;
        if (pt.y > maxY) maxY = pt.y;
      });
    });

    if (minX === Infinity) { minX = 0; maxX = 10; }
    if (minY === Infinity) { minY = 0; maxY = 10; }
    if (minY === maxY) { maxY += 1; minY = Math.max(0, minY - 1); }
    if (minX === maxX) { maxX += 10; minX = 0; }
    if (minY > 0) minY = 0; // Standard combustion plots ground to 0

    const plotW = width - padding.left - padding.right;
    const plotH = height - padding.top - padding.bottom;

    const scaleX = x => padding.left + ((x - minX) / (maxX - minX)) * plotW;
    const scaleY = y => padding.top + plotH - ((y - minY) / (maxY - minY)) * plotH;

    // Build SVG
    let svg = `<svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background: #090e1a; border-radius: 8px;">`;

    // Grid lines & Y ticks
    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
      const val = minY + (i / yTicks) * (maxY - minY);
      const yPos = scaleY(val);
      svg += `
        <line x1="${padding.left}" y1="${yPos}" x2="${width - padding.right}" y2="${yPos}" stroke="#1e2946" stroke-dasharray="3,3" />
        <text x="${padding.left - 8}" y="${yPos + 4}" fill="#64748b" font-size="11" font-family="monospace" text-anchor="end">${val.toFixed(1)}</text>
      `;
    }

    // X ticks
    const xTicks = 6;
    for (let i = 0; i <= xTicks; i++) {
      const val = minX + (i / xTicks) * (maxX - minX);
      const xPos = scaleX(val);
      svg += `
        <line x1="${xPos}" y1="${padding.top}" x2="${xPos}" y2="${padding.top + plotH}" stroke="#1e2946" stroke-dasharray="3,3" />
        <text x="${xPos}" y="${padding.top + plotH + 20}" fill="#64748b" font-size="11" font-family="monospace" text-anchor="middle">${val.toFixed(0)}</text>
      `;
    }

    // Axes
    svg += `
      <line x1="${padding.left}" y1="${padding.top + plotH}" x2="${width - padding.right}" y2="${padding.top + plotH}" stroke="#334155" stroke-width="1.5" />
      <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${padding.top + plotH}" stroke="#334155" stroke-width="1.5" />
    `;

    // Axis labels
    svg += `
      <text x="${padding.left + plotW / 2}" y="${height - 12}" fill="#94a3b8" font-size="12" text-anchor="middle" font-weight="600">${options.xLabel || 'Time (s)'}</text>
      <text x="18" y="${padding.top + plotH / 2}" fill="#94a3b8" font-size="12" text-anchor="middle" font-weight="600" transform="rotate(-90 18 ${padding.top + plotH / 2})">${options.yLabel || 'Measured Value'}</text>
    `;

    // Render Series Lines & Dots
    seriesList.forEach((series, idx) => {
      const color = this.colors[idx % this.colors.length];
      const pts = series.data.map(p => `${scaleX(p.x)},${scaleY(p.y)}`).join(' ');

      // Polyline
      svg += `<polyline fill="none" stroke="${color}" stroke-width="2.5" points="${pts}" stroke-linejoin="round" stroke-linecap="round" />`;

      // Data dots
      series.data.forEach(p => {
        const cx = scaleX(p.x);
        const cy = scaleY(p.y);
        svg += `
          <circle cx="${cx}" cy="${cy}" r="4" fill="${color}" stroke="#090e1a" stroke-width="1.5">
            <title>${series.name} (${series.expId}): (${p.x}s, ${p.y} ${options.yLabel || ''})</title>
          </circle>
        `;
      });
    });

    // Legend
    let legendX = padding.left;
    svg += `<g transform="translate(${padding.left}, 15)">`;
    seriesList.forEach((series, idx) => {
      const color = this.colors[idx % this.colors.length];
      svg += `
        <circle cx="${legendX}" cy="0" r="4" fill="${color}" />
        <text x="${legendX + 8}" y="4" fill="#e2e8f0" font-size="11" font-family="monospace">${series.expId}: ${series.name}</text>
      `;
      legendX += (series.expId.length + series.name.length) * 7.5 + 24;
    });
    svg += `</g>`;

    svg += `</svg>`;
    container.innerHTML = svg;
  }

  /**
   * Renders comparative bar chart with error bounds
   * @param {string} containerId - Target element ID
   * @param {Array} items - [{ label, value, unit, expId, origValue, origUnit }]
   * @param {Object} options - { title, yLabel }
   */
  renderComparativeBarChart(containerId, items, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!items || items.length === 0) {
      container.innerHTML = `<div class="callout-box warning"><div class="callout-text">No comparable variable data available.</div></div>`;
      return;
    }

    const width = container.clientWidth || 640;
    const height = 280;
    const padding = { top: 30, right: 30, bottom: 50, left: 65 };

    const maxVal = Math.max(...items.map(d => d.value)) * 1.25 || 10;
    const plotW = width - padding.left - padding.right;
    const plotH = height - padding.top - padding.bottom;

    const barWidth = Math.min(60, (plotW / items.length) * 0.6);
    const step = plotW / items.length;

    let svg = `<svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background: #090e1a; border-radius: 8px;">`;

    // Horizontal Y Grid
    for (let i = 0; i <= 4; i++) {
      const val = (i / 4) * maxVal;
      const yPos = padding.top + plotH - (val / maxVal) * plotH;
      svg += `
        <line x1="${padding.left}" y1="${yPos}" x2="${width - padding.right}" y2="${yPos}" stroke="#1e2946" stroke-dasharray="3,3" />
        <text x="${padding.left - 8}" y="${yPos + 4}" fill="#64748b" font-size="11" font-family="monospace" text-anchor="end">${val.toFixed(2)}</text>
      `;
    }

    // Base axis
    svg += `<line x1="${padding.left}" y1="${padding.top + plotH}" x2="${width - padding.right}" y2="${padding.top + plotH}" stroke="#334155" stroke-width="1.5" />`;

    // Bars
    items.forEach((item, idx) => {
      const color = this.colors[idx % this.colors.length];
      const barH = (item.value / maxVal) * plotH;
      const xPos = padding.left + idx * step + (step - barWidth) / 2;
      const yPos = padding.top + plotH - barH;

      svg += `
        <rect x="${xPos}" y="${yPos}" width="${barWidth}" height="${barH}" fill="${color}" rx="3" opacity="0.85">
          <title>${item.expId}: ${item.value} ${options.yLabel || ''} (Orig: ${item.origValue || item.value} ${item.origUnit || ''})</title>
        </rect>
        <text x="${xPos + barWidth / 2}" y="${yPos - 6}" fill="#fff" font-size="11" font-weight="700" font-family="monospace" text-anchor="middle">${item.value}</text>
        <text x="${xPos + barWidth / 2}" y="${padding.top + plotH + 18}" fill="#94a3b8" font-size="11" font-family="monospace" text-anchor="middle">${item.expId}</text>
        <text x="${xPos + barWidth / 2}" y="${padding.top + plotH + 32}" fill="#64748b" font-size="9" text-anchor="middle">${item.label || ''}</text>
      `;
    });

    // Y Axis label
    svg += `<text x="18" y="${padding.top + plotH / 2}" fill="#94a3b8" font-size="12" text-anchor="middle" font-weight="600" transform="rotate(-90 18 ${padding.top + plotH / 2})">${options.yLabel || 'Harmonized Value'}</text>`;

    svg += `</svg>`;
    container.innerHTML = svg;
  }

  /**
   * Renders an interactive SVG Donut Chart
   * @param {string} containerId - Target container ID
   * @param {Array} data - [{ label, value, color, sub }]
   * @param {Object} options - { title, centerLabel, centerValue }
   */
  renderDonutChart(containerId, data, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const width = container.clientWidth || 340;
    const height = 260;
    const cx = 110;
    const cy = height / 2;
    const outerRadius = 85;
    const innerRadius = 55;

    const total = data.reduce((sum, d) => sum + d.value, 0) || 1;

    let svg = `<svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background: transparent;">`;

    let startAngle = -Math.PI / 2;

    data.forEach((d, idx) => {
      const sliceAngle = (d.value / total) * (Math.PI * 2);
      const endAngle = startAngle + sliceAngle;
      const color = d.color || this.colors[idx % this.colors.length];

      // Arc coordinates
      const x1 = cx + outerRadius * Math.cos(startAngle);
      const y1 = cy + outerRadius * Math.sin(startAngle);
      const x2 = cx + outerRadius * Math.cos(endAngle);
      const y2 = cy + outerRadius * Math.sin(endAngle);

      const ix1 = cx + innerRadius * Math.cos(endAngle);
      const iy1 = cy + innerRadius * Math.sin(endAngle);
      const ix2 = cx + innerRadius * Math.cos(startAngle);
      const iy2 = cy + innerRadius * Math.sin(startAngle);

      const largeArc = sliceAngle > Math.PI ? 1 : 0;

      const pathData = `
        M ${x1} ${y1}
        A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}
        L ${ix1} ${iy1}
        A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix2} ${iy2}
        Z
      `;

      svg += `
        <path d="${pathData}" fill="${color}" opacity="0.9" stroke="#0d1222" stroke-width="2.5">
          <title>${d.label}: ${d.value} (${Math.round((d.value/total)*100)}%)</title>
        </path>
      `;

      startAngle = endAngle;
    });

    // Center display
    svg += `
      <text x="${cx}" y="${cy - 4}" fill="#fff" font-size="20" font-weight="800" font-family="monospace" text-anchor="middle">${options.centerValue !== undefined ? options.centerValue : total}</text>
      <text x="${cx}" y="${cy + 14}" fill="#64748b" font-size="10" font-weight="600" text-anchor="middle" text-transform="uppercase">${options.centerLabel || 'Total'}</text>
    `;

    // Legend on the right side
    const legendX = 210;
    let legendY = 35;
    data.forEach((d, idx) => {
      const color = d.color || this.colors[idx % this.colors.length];
      const pct = Math.round((d.value / total) * 100);
      svg += `
        <g transform="translate(${legendX}, ${legendY})">
          <rect x="0" y="-8" width="10" height="10" rx="2" fill="${color}" />
          <text x="16" y="0" fill="#e2e8f0" font-size="11" font-weight="600">${d.label}</text>
          <text x="16" y="14" fill="#64748b" font-size="10" font-family="monospace">${d.value} record${d.value > 1 ? 's' : ''} (${pct}%)</text>
        </g>
      `;
      legendY += 36;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
  }

  /**
   * Renders an interactive 2D Environmental Parameter Space Scatter / Bubble Plot
   * e.g. Oxygen % (X) vs Concurrent Airflow (Y) with fuel category color
   * @param {string} containerId - Target container ID
   * @param {Array} points - [{ x, y, size, label, expId, material, platform, color }]
   * @param {Object} options - { title, xLabel, yLabel, xMin, xMax, yMin, yMax }
   */
  renderScatterPlot(containerId, points, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = 300;
    const padding = { top: 30, right: 30, bottom: 50, left: 60 };

    const minX = options.xMin !== undefined ? options.xMin : 15;
    const maxX = options.xMax !== undefined ? options.xMax : 45;
    const minY = options.yMin !== undefined ? options.yMin : 0;
    const maxY = options.yMax !== undefined ? options.yMax : 25;

    const plotW = width - padding.left - padding.right;
    const plotH = height - padding.top - padding.bottom;

    const scaleX = x => padding.left + ((x - minX) / (maxX - minX)) * plotW;
    const scaleY = y => padding.top + plotH - ((y - minY) / (maxY - minY)) * plotH;

    let svg = `<svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background: #090e1a; border-radius: 8px;">`;

    // Horizontal Y Grid (Airflow)
    for (let flow = minY; flow <= maxY; flow += 5) {
      const yPos = scaleY(flow);
      svg += `
        <line x1="${padding.left}" y1="${yPos}" x2="${width - padding.right}" y2="${yPos}" stroke="#1e2946" stroke-dasharray="3,3" />
        <text x="${padding.left - 8}" y="${yPos + 4}" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">${flow}</text>
      `;
    }

    // Vertical X Grid (O2 %)
    for (let o2 = minX; o2 <= maxX; o2 += 5) {
      const xPos = scaleX(o2);
      svg += `
        <line x1="${xPos}" y1="${padding.top}" x2="${xPos}" y2="${padding.top + plotH}" stroke="#1e2946" stroke-dasharray="3,3" />
        <text x="${xPos}" y="${padding.top + plotH + 18}" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">${o2}%</text>
      `;
    }

    // Axes
    svg += `
      <line x1="${padding.left}" y1="${padding.top + plotH}" x2="${width - padding.right}" y2="${padding.top + plotH}" stroke="#334155" stroke-width="1.5" />
      <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${padding.top + plotH}" stroke="#334155" stroke-width="1.5" />
    `;

    // Axis Labels
    svg += `
      <text x="${padding.left + plotW / 2}" y="${height - 12}" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="middle">${options.xLabel || 'Chamber Oxygen Concentration (% O2)'}</text>
      <text x="18" y="${padding.top + plotH / 2}" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 18 ${padding.top + plotH / 2})">${options.yLabel || 'Concurrent Airflow (cm/s)'}</text>
    `;

    // Normoxic reference band (21% O2)
    const normX = scaleX(21.0);
    svg += `
      <line x1="${normX}" y1="${padding.top}" x2="${normX}" y2="${padding.top + plotH}" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1" stroke-dasharray="4,2" />
      <text x="${normX + 4}" y="${padding.top + 14}" fill="#00f0ff" font-size="9" font-family="monospace">Normoxic (21%)</text>
    `;

    // Quiescent reference line (0 cm/s)
    const quiesY = scaleY(0);
    svg += `
      <text x="${width - padding.right - 4}" y="${quiesY - 6}" fill="#a855f7" font-size="9" font-family="monospace" text-anchor="end">Quiescent (0 cm/s)</text>
    `;

    // Render Bubbles
    points.forEach((pt, idx) => {
      const cx = scaleX(pt.x);
      const cy = scaleY(pt.y);
      const radius = pt.size || 8;
      const color = pt.color || this.colors[idx % this.colors.length];

      svg += `
        <g style="cursor: pointer;" onclick="experimentLibrary.openDossier('${pt.expId}')">
          <circle cx="${cx}" cy="${cy}" r="${radius + 4}" fill="${color}" opacity="0.2" />
          <circle cx="${cx}" cy="${cy}" r="${radius}" fill="${color}" stroke="#090e1a" stroke-width="1.8" opacity="0.95">
            <title>${pt.expId}: ${pt.label}&#10;Material: ${pt.material}&#10;Platform: ${pt.platform}&#10;Oxygen: ${pt.x}% | Flow: ${pt.y} cm/s</title>
          </circle>
          <text x="${cx}" y="${cy - radius - 4}" fill="#e2e8f0" font-size="10" font-weight="700" font-family="monospace" text-anchor="middle">${pt.expId.replace('EXP-', '')}</text>
        </g>
      `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
  }

  /**
   * Renders horizontal ranking bar chart of key measured rates across all experiments
   * @param {string} containerId - Target container ID
   * @param {Array} items - [{ expId, name, value, unit, material, color }]
   * @param {Object} options - { title }
   */
  renderHorizontalBarChart(containerId, items, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!items || items.length === 0) return;

    const width = container.clientWidth || 640;
    const rowHeight = 36;
    const padding = { top: 20, right: 90, bottom: 20, left: 160 };
    const height = padding.top + padding.bottom + items.length * rowHeight;

    const maxVal = Math.max(...items.map(d => d.value)) * 1.15 || 5;
    const plotW = width - padding.left - padding.right;

    let svg = `<svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background: #090e1a; border-radius: 8px;">`;

    items.forEach((item, idx) => {
      const y = padding.top + idx * rowHeight;
      const barW = Math.max(4, (item.value / maxVal) * plotW);
      const color = item.color || this.colors[idx % this.colors.length];

      svg += `
        <g style="cursor: pointer;" onclick="experimentLibrary.openDossier('${item.expId}')">
          <!-- Row label -->
          <text x="${padding.left - 10}" y="${y + 14}" fill="#cbd5e1" font-size="11" font-weight="600" text-anchor="end">${item.expId}</text>
          <text x="${padding.left - 10}" y="${y + 26}" fill="#64748b" font-size="9" text-anchor="end">${item.material || ''}</text>

          <!-- Background track -->
          <rect x="${padding.left}" y="${y + 4}" width="${plotW}" height="18" fill="#131b30" rx="3" />

          <!-- Filled value bar -->
          <rect x="${padding.left}" y="${y + 4}" width="${barW}" height="18" fill="${color}" opacity="0.85" rx="3">
            <title>${item.expId}: ${item.name}&#10;${item.value} ${item.unit}</title>
          </rect>

          <!-- Metric Value text -->
          <text x="${padding.left + barW + 8}" y="${y + 17}" fill="#fff" font-size="11" font-weight="700" font-family="monospace">${item.value} <tspan fill="#94a3b8" font-size="9">${item.unit}</tspan></text>
        </g>
      `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
  }
}

window.chartRenderer = new ChartRenderer();
