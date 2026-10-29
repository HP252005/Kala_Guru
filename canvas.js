/**
 * Kala Guru - HTML5 Canvas Engine
 * High-performance, touch & stylus supported drawing canvas with
 * pixel-perfect coordinate alignment, crosshair precision,
 * custom brush preview indicator, smooth Bézier curves, and PNG export.
 */

class DrawingCanvas {
  constructor(canvasElement, guideOverlayElement, onStrokeChange) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.guideOverlay = guideOverlayElement;
    this.onStrokeChange = onStrokeChange; // Callback for debounced AI check

    // Tool states
    this.currentTool = 'brush'; // 'brush', 'pen', 'dots', 'hatch', 'eraser'
    this.currentColor = '#B83A24';
    this.brushSize = 6;
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.points = [];

    // History for Undo / Redo
    this.history = [];
    this.historyStep = -1;
    this.maxHistory = 30;

    // Metrics for AI guidance
    this.strokeCount = 0;
    this.dotCount = 0;
    this.hatchCount = 0;
    this.usedColors = new Set([this.currentColor]);

    // Tracing guide state
    this.showGuide = true;
    this.guideOpacity = 0.35;

    // Smooth Cursor Overlay Element
    this.cursorEl = null;

    this.initCanvasSize();
    this.createCursorElement();
    this.bindEvents();
    this.saveState();
  }

  initCanvasSize() {
    const container = this.canvas.parentElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Compute pixel-exact dimensions
    const width = Math.max(320, Math.floor(rect.width) || 650);
    const height = Math.max(380, Math.min(Math.floor(window.innerHeight * 0.58), 520));

    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    // Reset transform matrix and apply DPR scale
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.clearBackground();
  }

  createCursorElement() {
    const container = this.canvas.parentElement;
    if (!container) return;

    let cursor = container.querySelector('#canvas-brush-cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.id = 'canvas-brush-cursor';
      cursor.className = 'brush-cursor-indicator';
      container.appendChild(cursor);
    }
    this.cursorEl = cursor;
    this.updateCursorVisual();
  }

  updateCursorVisual() {
    if (!this.cursorEl) return;
    const size = Math.max(6, this.brushSize);
    this.cursorEl.style.width = `${size}px`;
    this.cursorEl.style.height = `${size}px`;

    if (this.currentTool === 'eraser') {
      this.cursorEl.style.borderColor = '#8F2714';
      this.cursorEl.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      this.cursorEl.style.borderStyle = 'dashed';
    } else if (this.currentTool === 'pen') {
      this.cursorEl.style.borderColor = this.currentColor;
      this.cursorEl.style.backgroundColor = this.currentColor;
      this.cursorEl.style.borderStyle = 'solid';
      this.cursorEl.style.width = '6px';
      this.cursorEl.style.height = '6px';
    } else if (this.currentTool === 'dots') {
      this.cursorEl.style.borderColor = '#1C1917';
      this.cursorEl.style.backgroundColor = this.currentColor;
      this.cursorEl.style.borderStyle = 'dotted';
    } else {
      this.cursorEl.style.borderColor = this.currentColor;
      this.cursorEl.style.backgroundColor = `${this.currentColor}33`; // semi-transparent
      this.cursorEl.style.borderStyle = 'solid';
    }
  }

  clearBackground() {
    const dpr = window.devicePixelRatio || 1;
    const w = this.canvas.width / dpr;
    const h = this.canvas.height / dpr;

    this.ctx.fillStyle = '#FAF7F2'; // Warm handmade parchment tone
    this.ctx.fillRect(0, 0, w, h);
  }

  bindEvents() {
    // Window Resize with state preservation
    window.addEventListener('resize', () => {
      const snapshot = this.canvas.toDataURL();
      this.initCanvasSize();
      const img = new Image();
      img.onload = () => {
        const dpr = window.devicePixelRatio || 1;
        this.ctx.drawImage(img, 0, 0, this.canvas.width / dpr, this.canvas.height / dpr);
      };
      img.src = snapshot;
    });

    // Pointer events (Mouse, Touch, Stylus)
    this.canvas.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
    this.canvas.addEventListener('pointermove', (e) => this.handlePointerMove(e));
    this.canvas.addEventListener('pointerup', (e) => this.handlePointerUp(e));
    this.canvas.addEventListener('pointerleave', (e) => this.handlePointerLeave(e));
    this.canvas.addEventListener('pointerenter', (e) => this.handlePointerEnter(e));
    this.canvas.addEventListener('pointercancel', (e) => this.handlePointerUp(e));
  }

  // 100% Mathematically Exact Coordinates
  getCoords(e) {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const scaleX = (this.canvas.width / dpr) / rect.width;
    const scaleY = (this.canvas.height / dpr) / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  updateCursorPosition(e) {
    if (!this.cursorEl) return;
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Exact pixel-perfect alignment matching the drawing point
    this.cursorEl.style.left = `${x}px`;
    this.cursorEl.style.top = `${y}px`;
    this.cursorEl.style.transform = `translate(-50%, -50%)`;
  }

  handlePointerEnter(e) {
    if (this.cursorEl) {
      this.cursorEl.style.opacity = '1';
    }
  }

  handlePointerLeave(e) {
    if (this.cursorEl) {
      this.cursorEl.style.opacity = '0';
    }
    this.handlePointerUp(e);
  }

  handlePointerDown(e) {
    this.isDrawing = true;
    this.updateCursorPosition(e);
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch (_) {}

    const { x, y } = this.getCoords(e);
    this.lastX = x;
    this.lastY = y;
    this.points = [{ x, y }];
    this.usedColors.add(this.currentColor);
    this.strokeCount++;

    if (this.currentTool === 'dots') {
      this.drawDot(x, y);
    } else if (this.currentTool === 'hatch') {
      this.drawHatch(x, y);
    } else {
      this.drawSinglePoint(x, y);
    }
  }

  handlePointerMove(e) {
    this.updateCursorPosition(e);
    if (!this.isDrawing) return;

    const { x, y } = this.getCoords(e);

    if (this.currentTool === 'dots') {
      const dist = Math.hypot(x - this.lastX, y - this.lastY);
      const spacing = Math.max(this.brushSize * 1.8, 14);
      if (dist >= spacing) {
        this.drawDot(x, y);
        this.lastX = x;
        this.lastY = y;
      }
    } else if (this.currentTool === 'hatch') {
      const dist = Math.hypot(x - this.lastX, y - this.lastY);
      if (dist >= 18) {
        this.drawHatch(x, y);
        this.lastX = x;
        this.lastY = y;
      }
    } else {
      this.points.push({ x, y });
      this.drawSmoothCurve();
      this.lastX = x;
      this.lastY = y;
    }
  }

  handlePointerUp(e) {
    if (!this.isDrawing) return;
    this.isDrawing = false;
    try {
      this.canvas.releasePointerCapture(e.pointerId);
    } catch (_) {}
    this.points = [];
    this.saveState();

    // Trigger debounced AI vision callback
    if (typeof this.onStrokeChange === 'function') {
      this.onStrokeChange();
    }
  }

  drawSinglePoint(x, y) {
    this.ctx.save();
    if (this.currentTool === 'eraser') {
      this.ctx.fillStyle = '#FAF7F2';
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.brushSize * 2, 0, Math.PI * 2);
      this.ctx.fill();
    } else {
      this.ctx.fillStyle = this.currentColor;
      this.ctx.beginPath();
      const r = this.currentTool === 'pen' ? Math.max(1.5, this.brushSize * 0.4) : this.brushSize / 2;
      this.ctx.arc(x, y, r, 0, Math.PI * 2);
      this.ctx.fill();
    }
    this.ctx.restore();
  }

  // Ultra-Smooth Quadratic Midpoint Bézier Spline
  drawSmoothCurve() {
    if (this.points.length < 2) return;
    this.ctx.save();
    this.ctx.beginPath();

    if (this.currentTool === 'eraser') {
      this.ctx.strokeStyle = '#FAF7F2';
      this.ctx.lineWidth = this.brushSize * 4;
    } else if (this.currentTool === 'pen') {
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.lineWidth = Math.max(1.5, this.brushSize * 0.4);
    } else {
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.lineWidth = this.brushSize;
    }

    const len = this.points.length;
    const p1 = this.points[len - 2];
    const p2 = this.points[len - 1];

    this.ctx.moveTo(p1.x, p1.y);
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    this.ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawDot(x, y) {
    this.dotCount++;
    this.ctx.save();
    this.ctx.fillStyle = this.currentColor;
    this.ctx.beginPath();
    const radius = Math.max(2.5, this.brushSize * 0.7);
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawHatch(x, y) {
    this.hatchCount++;
    this.ctx.save();
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = Math.max(2, this.brushSize * 0.4);
    this.ctx.beginPath();
    const len = this.brushSize * 2.5;
    const angle = Math.PI / 4;
    const dx = Math.cos(angle) * len;
    const dy = Math.sin(angle) * len;
    this.ctx.moveTo(x - dx / 2, y - dy / 2);
    this.ctx.lineTo(x + dx / 2, y + dy / 2);
    this.ctx.stroke();
    this.ctx.restore();
  }

  // History Stack
  saveState() {
    this.historyStep++;
    if (this.historyStep < this.history.length) {
      this.history.length = this.historyStep;
    }
    this.history.push(this.canvas.toDataURL());
    if (this.history.length > this.maxHistory) {
      this.history.shift();
      this.historyStep--;
    }
    this.updateUndoRedoUI();
  }

  undo() {
    if (this.historyStep > 0) {
      this.historyStep--;
      this.restoreState(this.history[this.historyStep]);
    }
    this.updateUndoRedoUI();
  }

  redo() {
    if (this.historyStep < this.history.length - 1) {
      this.historyStep++;
      this.restoreState(this.history[this.historyStep]);
    }
    this.updateUndoRedoUI();
  }

  restoreState(dataUrl) {
    const img = new Image();
    img.onload = () => {
      const dpr = window.devicePixelRatio || 1;
      this.ctx.clearRect(0, 0, this.canvas.width / dpr, this.canvas.height / dpr);
      this.ctx.drawImage(img, 0, 0, this.canvas.width / dpr, this.canvas.height / dpr);
    };
    img.src = dataUrl;
  }

  updateUndoRedoUI() {
    const undoBtn = document.getElementById('btn-undo');
    const redoBtn = document.getElementById('btn-redo');
    if (undoBtn) undoBtn.disabled = this.historyStep <= 0;
    if (redoBtn) redoBtn.disabled = this.historyStep >= this.history.length - 1;
  }

  clear() {
    this.clearBackground();
    this.strokeCount = 0;
    this.dotCount = 0;
    this.hatchCount = 0;
    this.usedColors = new Set([this.currentColor]);
    this.saveState();
  }

  // Tools & Colors
  setTool(tool) {
    this.currentTool = tool;
    this.updateCursorVisual();
  }

  setColor(hex) {
    this.currentColor = hex;
    this.usedColors.add(hex);
    this.updateCursorVisual();
  }

  setBrushSize(size) {
    this.brushSize = parseInt(size, 10);
    this.updateCursorVisual();
  }

  // Tracing Guide Overlay
  setGuideSvgPath(pathData) {
    if (!this.guideOverlay) return;
    this.guideOverlay.innerHTML = `
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" class="w-full h-full pointer-events-none transition-opacity duration-300">
        <path d="${pathData}" fill="none" stroke="#B83A24" stroke-width="2.5" stroke-dasharray="6,4" stroke-linecap="round"/>
      </svg>
    `;
    this.updateGuideVisibility();
  }

  toggleGuide(show) {
    this.showGuide = show;
    this.updateGuideVisibility();
  }

  setGuideOpacity(opacity) {
    this.guideOpacity = opacity;
    this.updateGuideVisibility();
  }

  updateGuideVisibility() {
    if (!this.guideOverlay) return;
    this.guideOverlay.style.opacity = this.showGuide ? this.guideOpacity : 0;
  }

  // Metrics for AI Vision
  getDrawingMetrics() {
    const dpr = window.devicePixelRatio || 1;
    const w = Math.floor(this.canvas.width / dpr);
    const h = Math.floor(this.canvas.height / dpr);
    const imgData = this.ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    let drawnPixels = 0;
    for (let i = 0; i < data.length; i += 16) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const diff = Math.abs(r - 250) + Math.abs(g - 247) + Math.abs(b - 242);
      if (diff > 30) drawnPixels++;
    }

    const totalSampled = data.length / 16;
    const coverage = Math.round((drawnPixels / totalSampled) * 100);

    return {
      hasDrawing: drawnPixels > 30,
      coverage,
      strokeCount: this.strokeCount,
      dotCount: this.dotCount,
      hatchCount: this.hatchCount,
      colorsCount: this.usedColors.size
    };
  }

  // Download Drawing as PNG with Heritage Certificate Border
  downloadPNG(artName, cityName) {
    const exportCanvas = document.createElement('canvas');
    const width = 1200;
    const height = 900;
    exportCanvas.width = width;
    exportCanvas.height = height;
    const exCtx = exportCanvas.getContext('2d');

    // Parchment base
    exCtx.fillStyle = '#F5EFE6';
    exCtx.fillRect(0, 0, width, height);

    // Ornate traditional border
    exCtx.strokeStyle = '#B83A24';
    exCtx.lineWidth = 14;
    exCtx.strokeRect(20, 20, width - 40, height - 40);

    exCtx.strokeStyle = '#E5A93B';
    exCtx.lineWidth = 4;
    exCtx.strokeRect(32, 32, width - 64, height - 64);

    // Title & Seal
    exCtx.fillStyle = '#B83A24';
    exCtx.font = 'bold 36px "Cinzel Decorative", Georgia, serif';
    exCtx.textAlign = 'center';
    exCtx.fillText('KALA GURU • VIDARBHA HERITAGE', width / 2, 80);

    exCtx.fillStyle = '#4A3E3D';
    exCtx.font = '500 18px "Poppins", sans-serif';
    exCtx.fillText(`${cityName} • ${artName} Practice Certificate`, width / 2, 112);

    // Student Artwork Frame
    const pad = 120;
    const artW = width - (pad * 2);
    const artH = height - pad - 160;

    exCtx.fillStyle = '#FAF7F2';
    exCtx.fillRect(pad, 130, artW, artH);
    exCtx.strokeStyle = '#D7CCB9';
    exCtx.lineWidth = 2;
    exCtx.strokeRect(pad, 130, artW, artH);

    // Scale student drawing onto frame
    exCtx.drawImage(
      this.canvas,
      0, 0, this.canvas.width, this.canvas.height,
      pad + 10, 140, artW - 20, artH - 20
    );

    // Footer
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    exCtx.fillStyle = '#78350F';
    exCtx.font = 'italic 16px "Poppins", sans-serif';
    exCtx.textAlign = 'left';
    exCtx.fillText(`Student: Kala Guru Disciple | Date: ${today}`, pad, height - 45);

    exCtx.textAlign = 'right';
    exCtx.fillStyle = '#B83A24';
    exCtx.font = 'bold 16px "Poppins", sans-serif';
    exCtx.fillText('★ Certified Vidarbha Folk Art Practice ★', width - pad, height - 45);

    const dataUrl = exportCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `KalaGuru-${cityName}-${artName.replace(/\s+/g, '_')}.png`;
    link.href = dataUrl;
    link.click();

    return dataUrl;
  }
}
