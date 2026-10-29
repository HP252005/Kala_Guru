/**
 * Kala Guru - Single Page Router & Application Controller
 * 
 * Features:
 * 1. Single Page Navigation: Home, City Showcase, Step Progression Learning, Practice Mode
 * 2. External Webcam & Physical Paper Mode:
 *    - Auto-detection & switching to external USB webcams
 *    - Live continuous AI check (every 3s) + instant scan button
 *    - Paper alignment guide overlay & laser scanning beam
 * 3. Step-by-Step Drawing Progression Studio:
 *    - Full 5-stage vector progression for every painting
 *    - Interactive timeline scrubber with auto-play timelapse
 *    - Dual reading levels (Junior Explorer vs Senior Scholar)
 * 4. "Meet Your Kala Guru" Companion ("Guru Mitra") with speech in English, Hindi, Marathi
 * 5. Kala Passport with LocalStorage: Regional Stamps, Badges, and Artwork Gallery
 * 6. Cultural Storyteller Modal with folklore in English, Hindi, Marathi
 */

let canvasInstance = null;
let aiClientInstance = null;
let currentCityData = null;

// Webcam State
let webcamStream = null;
let webcamAutoScanTimer = null;
let isWebcamLiveCheckActive = false;
let isWebcamMirrored = false;
let currentPracticeMode = 'canvas'; // 'canvas' or 'webcam'

// Progression Player State
let progressionCurrentStage = 0;
let progressionAutoPlayTimer = null;
let isProgressionPlaying = false;

// -------------------------------------------------------------
// Kala Passport System (LocalStorage Persistence)
// -------------------------------------------------------------
class KalaPassportSystem {
  constructor() {
    this.storageKey = 'kala_guru_passport_v1';
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not load passport from localStorage:', e);
    }
    return {
      stamps: ['nagpur'], // Default welcome stamp
      badges: ['first_stroke'],
      gallery: [],
      storiesRead: []
    };
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save passport to localStorage:', e);
    }
    this.updateHeaderBadge();
  }

  unlockStamp(cityId) {
    if (!cityId) return;
    if (!this.state.stamps.includes(cityId)) {
      this.state.stamps.push(cityId);
      this.saveState();

      const city = KALA_GURU_DATA.activeCities.find(c => c.id === cityId);
      const name = city ? `${city.cityName} Stamp` : 'Cultural Stamp';
      this.showToast(`🛂 New Stamp Collected!`, `You earned the ${name} for your Kala Passport.`);
      this.playChime();

      if (this.state.stamps.length >= 7) {
        this.unlockBadge('avid_explorer');
      }
    }
  }

  unlockBadge(badgeId) {
    if (!badgeId) return;
    if (!this.state.badges.includes(badgeId)) {
      this.state.badges.push(badgeId);
      this.saveState();

      const badge = (KALA_GURU_DATA.badges || []).find(b => b.id === badgeId);
      const title = badge ? badge.title : 'Technique Badge';
      this.showToast(`🏅 Badge Unlocked!`, `Earned "${title}"!`);
      this.playChime();
    }
  }

  recordArtworkPractice(city, score, source) {
    if (!city) return;
    this.unlockStamp(city.id);
    this.unlockBadge('folk_apprentice');

    if (source === 'paper') {
      this.unlockBadge('paper_pioneer');
    }

    if (score >= 80) {
      this.unlockBadge('master_artist');
    }

    if (city.id === 'chandrapur' || city.id === 'buldhana') {
      this.unlockBadge('master_of_dots');
    }

    if (city.id === 'amravati') {
      this.unlockBadge('warrior_hatch');
    }
  }

  recordStoryExplored(cityId) {
    if (!this.state.storiesRead) this.state.storiesRead = [];
    if (!this.state.storiesRead.includes(cityId)) {
      this.state.storiesRead.push(cityId);
      this.saveState();
      this.unlockBadge('story_explorer');
    }
  }

  saveArtworkToGallery(cityData, score, dataUrl) {
    const entry = {
      id: Date.now(),
      cityId: cityData.id,
      cityName: cityData.cityName,
      artName: cityData.artName,
      score: score || 75,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      dataUrl: dataUrl
    };
    this.state.gallery.unshift(entry);
    if (this.state.gallery.length > 20) this.state.gallery.pop();
    this.saveState();
    this.showToast(`🖼️ Saved to Passport Gallery!`, `Your ${cityData.artName} has been cataloged.`);
  }

  updateHeaderBadge() {
    const badgeCount = document.getElementById('header-passport-count');
    const totalPossible = (KALA_GURU_DATA.activeCities.length) + (KALA_GURU_DATA.badges?.length || 8);
    const currentTotal = (this.state.stamps?.length || 0) + (this.state.badges?.length || 0);

    if (badgeCount) {
      badgeCount.textContent = `${currentTotal}/${totalPossible}`;
    }
  }

  showToast(title, msg) {
    const toast = document.getElementById('passport-toast');
    if (!toast) return;

    toast.innerHTML = `
      <div class="bg-stone-900 border-2 border-amber-400 text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 max-w-sm">
        <div class="text-2xl">✨</div>
        <div class="flex-1">
          <div class="text-xs font-bold text-amber-300 uppercase tracking-wider">${title}</div>
          <div class="text-[11px] text-stone-200">${msg}</div>
        </div>
      </div>
    `;
    toast.classList.remove('hidden');

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 4500);
  }

  playChime() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (_) {}
  }
}

window.KalaPassport = new KalaPassportSystem();

// -------------------------------------------------------------
// Application Lifecycle
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initDropdownMenu();
  initHomeCards();
  initCanvasAndAI();
  initWebcamManager();
  initProgressionStudio();
  initCompanion();
  initPassportModal();
  initStoryModal();
  bindGlobalEvents();
  handleRouting();

  window.addEventListener('hashchange', handleRouting);
});

// 1. Navigation Dropdown
function initDropdownMenu() {
  const dropdownContainer = document.getElementById('vidarbha-dropdown-menu');
  if (!dropdownContainer) return;

  dropdownContainer.innerHTML = '';

  // Active 7 Mandatory Cities
  const activeSection = document.createElement('div');
  activeSection.className = 'py-1';
  KALA_GURU_DATA.activeCities.forEach(city => {
    const item = document.createElement('a');
    item.href = `#city/${city.id}`;
    item.className = 'flex items-center justify-between px-4 py-2.5 text-xs text-stone-700 hover:bg-amber-50 hover:text-terracotta transition-colors group';
    item.innerHTML = `
      <div>
        <span class="font-bold block text-stone-900 group-hover:text-terracotta">${city.cityName}</span>
        <span class="text-[11px] text-stone-500">${city.artName}</span>
      </div>
      <span class="text-terracotta opacity-0 group-hover:opacity-100 transition-opacity font-bold">&rarr;</span>
    `;
    activeSection.appendChild(item);
  });
  dropdownContainer.appendChild(activeSection);

  // Divider
  const divider = document.createElement('div');
  divider.className = 'border-t border-stone-200 my-1 px-4 py-1.5 bg-stone-50 text-[10px] font-bold uppercase tracking-wider text-stone-400';
  divider.textContent = 'Other Vidarbha Cities';
  dropdownContainer.appendChild(divider);

  // Coming Soon Cities (Non-clickable)
  const comingSection = document.createElement('div');
  comingSection.className = 'py-1';
  KALA_GURU_DATA.comingSoonCities.forEach(cs => {
    const disabledItem = document.createElement('div');
    disabledItem.className = 'flex items-center justify-between px-4 py-2 text-xs text-stone-400 cursor-not-allowed bg-stone-50/50';
    disabledItem.innerHTML = `
      <div>
        <span class="font-medium text-stone-500">${cs.cityName}</span>
        <span class="text-[10px] block text-stone-400">${cs.artName}</span>
      </div>
      <span class="px-2 py-0.5 rounded text-[10px] bg-stone-200 text-stone-600 font-semibold">Coming soon</span>
    `;
    comingSection.appendChild(disabledItem);
  });
  dropdownContainer.appendChild(comingSection);

  // Dropdown toggle button click & outside click
  const dropdownBtn = document.getElementById('vidarbha-dropdown-btn');
  if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownContainer.classList.toggle('hidden');
    });
  }

  document.addEventListener('click', () => {
    if (dropdownContainer && !dropdownContainer.classList.contains('hidden')) {
      dropdownContainer.classList.add('hidden');
    }
  });
}

// 2. Home Page City Cards
function initHomeCards() {
  const container = document.getElementById('home-city-cards');
  if (!container) return;

  container.innerHTML = '';
  KALA_GURU_DATA.activeCities.forEach(city => {
    const card = document.createElement('a');
    card.href = `#city/${city.id}`;
    card.className = 'group bg-white rounded-2xl overflow-hidden border-2 border-stone-200 shadow-sm hover:shadow-xl hover:border-terracotta transition-all duration-300 transform hover:-translate-y-1 flex flex-col';
    card.innerHTML = `
      <div class="aspect-video bg-amber-50/60 overflow-hidden relative border-b border-stone-200 p-3 flex items-center justify-center">
        <img src="${city.imagePath}" alt="${city.cityName} ${city.artName}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300">
        <span class="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-stone-900/80 text-white text-[10px] font-semibold backdrop-blur-sm">
          ${city.cityName}
        </span>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 class="font-bold text-lg text-stone-900 group-hover:text-terracotta transition-colors font-serif">
            ${city.artName}
          </h3>
          <p class="text-xs text-stone-500 font-medium">${city.cityName}, Vidarbha</p>
          <p class="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
            ${city.shortDescription}
          </p>
        </div>
        <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-terracotta">
          <span>Explore Art &amp; Practice</span>
          <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 3. Canvas & AI Initialization
function initCanvasAndAI() {
  const canvasEl = document.getElementById('practice-canvas');
  const guideOverlay = document.getElementById('canvas-guide-overlay');

  if (canvasEl) {
    canvasInstance = new DrawingCanvas(canvasEl, guideOverlay, () => {
      if (aiClientInstance) {
        aiClientInstance.scheduleAutoCheck();
      }
    });

    aiClientInstance = new KalaGuruAIClient(canvasInstance);
  }

  // Canvas Tools click handlers
  const toolButtons = document.querySelectorAll('[data-canvas-tool]');
  toolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      toolButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tool = btn.getAttribute('data-canvas-tool');
      if (canvasInstance) canvasInstance.setTool(tool);
    });
  });

  // Brush size slider
  const sizeSlider = document.getElementById('slider-brush-size');
  const sizeVal = document.getElementById('brush-size-val');
  if (sizeSlider) {
    sizeSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      if (sizeVal) sizeVal.textContent = `${val}px`;
      if (canvasInstance) canvasInstance.setBrushSize(val);
    });
  }

  // Custom color input
  const colorInput = document.getElementById('input-custom-color');
  if (colorInput) {
    colorInput.addEventListener('input', (e) => {
      const color = e.target.value;
      if (canvasInstance) canvasInstance.setColor(color);
      document.querySelectorAll('.swatch-btn').forEach(s => s.classList.remove('selected'));
      const colName = document.getElementById('selected-color-name');
      if (colName) colName.textContent = 'Custom';
    });
  }

  // Undo / Redo / Clear
  const undoBtn = document.getElementById('btn-undo');
  if (undoBtn) undoBtn.addEventListener('click', () => canvasInstance && canvasInstance.undo());

  const redoBtn = document.getElementById('btn-redo');
  if (redoBtn) redoBtn.addEventListener('click', () => canvasInstance && canvasInstance.redo());

  const clearBtn = document.getElementById('btn-clear-canvas');
  if (clearBtn) clearBtn.addEventListener('click', () => canvasInstance && canvasInstance.clear());

  // Tracing Guide Checkbox & Opacity
  const guideCheck = document.getElementById('check-tracing-guide');
  if (guideCheck) {
    guideCheck.addEventListener('change', (e) => {
      if (canvasInstance) canvasInstance.toggleGuide(e.target.checked);
    });
  }

  const guideOpacity = document.getElementById('slider-guide-opacity');
  if (guideOpacity) {
    guideOpacity.addEventListener('input', (e) => {
      if (canvasInstance) canvasInstance.setGuideOpacity(parseFloat(e.target.value));
    });
  }

  // Check Painting Button (Manual trigger)
  const checkBtn = document.getElementById('btn-check-painting');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      if (aiClientInstance) aiClientInstance.checkPainting(true);
    });
  }

  // Download Drawing as PNG
  const downloadBtn = document.getElementById('btn-download-png');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (canvasInstance && currentCityData) {
        const dataUrl = canvasInstance.downloadPNG(currentCityData.artName, currentCityData.cityName);
        if (window.KalaPassport) {
          window.KalaPassport.saveArtworkToGallery(currentCityData, 85, dataUrl);
        }
      }
    });
  }

  // Final Result Modal Close & Actions
  const modalClose = document.getElementById('btn-modal-close');
  if (modalClose) modalClose.addEventListener('click', () => aiClientInstance && aiClientInstance.hideFinalResultModal());

  const modalTryAgain = document.getElementById('btn-modal-try-again');
  if (modalTryAgain) {
    modalTryAgain.addEventListener('click', () => {
      aiClientInstance && aiClientInstance.hideFinalResultModal();
      canvasInstance && canvasInstance.clear();
    });
  }

  const modalDownload = document.getElementById('btn-modal-download');
  if (modalDownload) {
    modalDownload.addEventListener('click', () => {
      if (canvasInstance && currentCityData) {
        const dataUrl = canvasInstance.downloadPNG(currentCityData.artName, currentCityData.cityName);
        if (window.KalaPassport) {
          window.KalaPassport.saveArtworkToGallery(currentCityData, 85, dataUrl);
        }
      }
    });
  }

  const modalChooseAnother = document.getElementById('btn-modal-choose-another');
  if (modalChooseAnother) {
    modalChooseAnother.addEventListener('click', () => {
      aiClientInstance && aiClientInstance.hideFinalResultModal();
      window.location.hash = '#home';
    });
  }
}

// -------------------------------------------------------------
// 4. External Webcam & Real Paper Mode Manager
// -------------------------------------------------------------
function initWebcamManager() {
  const modeCanvasBtn = document.getElementById('btn-mode-canvas');
  const modeWebcamBtn = document.getElementById('btn-mode-webcam');
  const canvasArea = document.getElementById('practice-canvas-container');
  const webcamArea = document.getElementById('practice-webcam-container');
  const cameraSelect = document.getElementById('webcam-camera-select');
  const switchExternalBtn = document.getElementById('btn-switch-external-cam');
  const scanPaperBtn = document.getElementById('btn-scan-paper');
  const liveCheckBtn = document.getElementById('btn-live-check-toggle');
  const mirrorToggleBtn = document.getElementById('btn-webcam-mirror');

  if (!modeCanvasBtn || !modeWebcamBtn) return;

  modeCanvasBtn.addEventListener('click', () => {
    currentPracticeMode = 'canvas';
    modeCanvasBtn.classList.add('bg-terracotta', 'text-white');
    modeCanvasBtn.classList.remove('bg-stone-100', 'text-stone-700');
    modeWebcamBtn.classList.remove('bg-terracotta', 'text-white');
    modeWebcamBtn.classList.add('bg-stone-100', 'text-stone-700');

    canvasArea.classList.remove('hidden');
    webcamArea.classList.add('hidden');
    stopWebcam();

    // Re-init canvas size when returning to canvas
    setTimeout(() => {
      if (canvasInstance) canvasInstance.initCanvasSize();
    }, 100);
  });

  modeWebcamBtn.addEventListener('click', () => {
    currentPracticeMode = 'webcam';
    modeWebcamBtn.classList.add('bg-terracotta', 'text-white');
    modeWebcamBtn.classList.remove('bg-stone-100', 'text-stone-700');
    modeCanvasBtn.classList.remove('bg-terracotta', 'text-white');
    modeCanvasBtn.classList.add('bg-stone-100', 'text-stone-700');

    canvasArea.classList.add('hidden');
    webcamArea.classList.remove('hidden');
    startWebcam(null, true); // Prefer external webcam
  });

  // Switch / Reconnect External Camera Button
  if (switchExternalBtn) {
    switchExternalBtn.addEventListener('click', () => {
      startWebcam(null, true);
    });
  }

  // Camera Selector change
  if (cameraSelect) {
    cameraSelect.addEventListener('change', () => {
      startWebcam(cameraSelect.value, false);
    });
  }

  // Scan Paper Button (Instant Check)
  if (scanPaperBtn) {
    scanPaperBtn.addEventListener('click', () => {
      captureAndAnalyzePaper(true);
    });
  }

  // Live Continuous Check Toggle (Checks every 3 seconds)
  if (liveCheckBtn) {
    liveCheckBtn.addEventListener('click', () => {
      toggleWebcamLiveCheck();
    });
  }

  // Mirror toggle
  if (mirrorToggleBtn) {
    mirrorToggleBtn.addEventListener('click', () => {
      isWebcamMirrored = !isWebcamMirrored;
      const videoEl = document.getElementById('webcam-video');
      if (videoEl) {
        videoEl.style.transform = isWebcamMirrored ? 'scaleX(-1)' : 'none';
      }
      mirrorToggleBtn.textContent = isWebcamMirrored ? '🪞 Mirrored: ON' : '🪞 Mirrored: OFF';
    });
  }
}

async function startWebcam(preferredDeviceId = null, forceExternal = false) {
  const videoEl = document.getElementById('webcam-video');
  const cameraSelect = document.getElementById('webcam-camera-select');
  const statusMsg = document.getElementById('webcam-status-msg');

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (statusMsg) {
      statusMsg.innerHTML = '<span class="text-rose-600 font-bold">⚠️ Camera API not supported in this browser.</span>';
    }
    return;
  }

  try {
    stopWebcam();

    // 1. Initial stream to get camera permissions and device labels
    let stream = null;
    if (preferredDeviceId) {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: { exact: preferredDeviceId }, width: { ideal: 1280 }, height: { ideal: 720 } }
      });
    } else {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } }
      });
    }

    webcamStream = stream;
    if (videoEl) {
      videoEl.srcObject = webcamStream;
      await videoEl.play();
    }

    // 2. Enumerate connected video devices with labels
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(d => d.kind === 'videoinput');

    if (cameraSelect) {
      cameraSelect.innerHTML = '';
      let externalCamId = null;

      videoDevices.forEach((dev, idx) => {
        const opt = document.createElement('option');
        opt.value = dev.deviceId;
        const label = dev.label || `Camera ${idx + 1}`;
        const isExternal = label.toLowerCase().includes('usb') || 
                           label.toLowerCase().includes('external') || 
                           label.toLowerCase().includes('webcam') ||
                           (!label.toLowerCase().includes('integrated') && !label.toLowerCase().includes('internal') && idx > 0);

        if (isExternal && !externalCamId) {
          externalCamId = dev.deviceId;
        }

        opt.textContent = isExternal ? `📷 ${label} (External Webcam)` : `💻 ${label}`;
        cameraSelect.appendChild(opt);
      });

      // If user requested external or an external webcam was found and not currently active
      if (forceExternal && externalCamId && externalCamId !== preferredDeviceId) {
        cameraSelect.value = externalCamId;
        stopWebcam();
        webcamStream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: externalCamId }, width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        if (videoEl) {
          videoEl.srcObject = webcamStream;
          await videoEl.play();
        }
      } else if (preferredDeviceId) {
        cameraSelect.value = preferredDeviceId;
      }
    }

    const currentTrack = webcamStream.getVideoTracks()[0];
    const trackLabel = currentTrack ? currentTrack.label : 'Active Camera';
    if (statusMsg) {
      statusMsg.innerHTML = `<span class="text-emerald-700 font-bold">🟢 Connected:</span> ${trackLabel}`;
    }

  } catch (err) {
    console.warn('Webcam connection error:', err);
    if (statusMsg) {
      statusMsg.innerHTML = `<span class="text-rose-700 font-bold">⚠️ Camera Permission Needed:</span> Please allow webcam permission in your browser URL bar.`;
    }
  }
}

function stopWebcam() {
  stopWebcamLiveCheck();
  if (webcamStream) {
    webcamStream.getTracks().forEach(t => t.stop());
    webcamStream = null;
  }
}

function toggleWebcamLiveCheck() {
  const liveCheckBtn = document.getElementById('btn-live-check-toggle');
  const liveIndicator = document.getElementById('webcam-live-indicator');

  if (isWebcamLiveCheckActive) {
    stopWebcamLiveCheck();
  } else {
    isWebcamLiveCheckActive = true;
    if (liveCheckBtn) {
      liveCheckBtn.classList.remove('bg-stone-900', 'hover:bg-stone-800');
      liveCheckBtn.classList.add('bg-rose-600', 'hover:bg-rose-700', 'animate-pulse');
      liveCheckBtn.innerHTML = `<span>⏹ Stop Live Check</span>`;
    }
    if (liveIndicator) {
      liveIndicator.classList.remove('hidden');
    }

    // Run first scan immediately
    captureAndAnalyzePaper(false);

    // Schedule continuous check every 3.5 seconds
    webcamAutoScanTimer = setInterval(() => {
      if (currentPracticeMode === 'webcam') {
        captureAndAnalyzePaper(false);
      }
    }, 3500);
  }
}

function stopWebcamLiveCheck() {
  isWebcamLiveCheckActive = false;
  if (webcamAutoScanTimer) {
    clearInterval(webcamAutoScanTimer);
    webcamAutoScanTimer = null;
  }
  const liveCheckBtn = document.getElementById('btn-live-check-toggle');
  const liveIndicator = document.getElementById('webcam-live-indicator');
  if (liveCheckBtn) {
    liveCheckBtn.classList.add('bg-stone-900', 'hover:bg-stone-800');
    liveCheckBtn.classList.remove('bg-rose-600', 'hover:bg-rose-700', 'animate-pulse');
    liveCheckBtn.innerHTML = `<span>🔴 Live Continuous Check (Every 3s)</span>`;
  }
  if (liveIndicator) {
    liveIndicator.classList.add('hidden');
  }
}

function captureAndAnalyzePaper(isManual = true) {
  const videoEl = document.getElementById('webcam-video');
  if (!videoEl || !webcamStream || videoEl.videoWidth === 0) return;

  const captureCanvas = document.createElement('canvas');
  captureCanvas.width = videoEl.videoWidth;
  captureCanvas.height = videoEl.videoHeight;
  const ctx = captureCanvas.getContext('2d');

  // Draw current camera frame
  ctx.drawImage(videoEl, 0, 0, captureCanvas.width, captureCanvas.height);
  const dataUrl = captureCanvas.toDataURL('image/jpeg', 0.88);

  // Update paper snapshot preview thumbnail
  const thumb = document.getElementById('webcam-snapshot-thumbnail');
  if (thumb) {
    thumb.src = dataUrl;
    thumb.classList.remove('hidden');
  }

  if (aiClientInstance) {
    aiClientInstance.checkWebcamPaperFrame(dataUrl, isManual);
  }
}

// -------------------------------------------------------------
// 5. Step-by-Step Drawing Progression Studio (Replaces Video)
// -------------------------------------------------------------
function initProgressionStudio() {
  const prevBtn = document.getElementById('btn-progression-prev');
  const nextBtn = document.getElementById('btn-progression-next');
  const playBtn = document.getElementById('btn-progression-play');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      pauseProgressionAutoPlay();
      if (progressionCurrentStage > 0) {
        showProgressionStage(progressionCurrentStage - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      pauseProgressionAutoPlay();
      const maxStages = (currentCityData?.progressionStages?.length || 5) - 1;
      if (progressionCurrentStage < maxStages) {
        showProgressionStage(progressionCurrentStage + 1);
      }
    });
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isProgressionPlaying) {
        pauseProgressionAutoPlay();
      } else {
        startProgressionAutoPlay();
      }
    });
  }
}

function loadProgressionForArt(cityData) {
  if (!cityData) return;
  progressionCurrentStage = 0;
  pauseProgressionAutoPlay();

  const stages = cityData.progressionStages || [];
  const stagesList = document.getElementById('progression-stages-thumbnails');
  if (stagesList) {
    stagesList.innerHTML = '';
    stages.forEach((st, idx) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `progression-stage-card p-2 rounded-xl text-left flex items-center gap-2.5 bg-stone-50 border border-stone-200 ${idx === 0 ? 'active' : ''}`;
      
      const stageName = st.stageName || st.name || `Stage ${idx + 1}`;
      const timeEst = st.estimatedTime || '2-3 mins';

      card.innerHTML = `
        <span class="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center shrink-0">
          ${st.stageNumber || (idx + 1)}
        </span>
        <div class="overflow-hidden">
          <div class="text-xs font-bold text-stone-900 truncate">${stageName}</div>
          <div class="text-[10px] text-stone-500 truncate">Est: ${timeEst}</div>
        </div>
      `;
      card.addEventListener('click', () => {
        pauseProgressionAutoPlay();
        showProgressionStage(idx);
      });
      stagesList.appendChild(card);
    });
  }

  showProgressionStage(0);
}

function showProgressionStage(stageIndex) {
  if (!currentCityData || !currentCityData.progressionStages) return;
  const stages = currentCityData.progressionStages;
  if (stageIndex < 0 || stageIndex >= stages.length) return;

  progressionCurrentStage = stageIndex;
  const stage = stages[stageIndex];

  const stageTitle = stage.stageName || stage.name || `Stage ${stageIndex + 1}`;
  const stageDesc = stage.description || '';
  const stageSvg = stage.svgVisual || stage.svgSnippet || '';
  const stageTime = stage.estimatedTime || '2-3 mins';
  const stageTips = stage.techniqueTips || (currentCityData.steps && currentCityData.steps[stageIndex]?.hint) || stage.description;
  const stageJunior = stage.juniorHint || (currentCityData.steps && currentCityData.steps[stageIndex]?.juniorHint) || stage.description;

  // Update SVG Visual Display
  const visualContainer = document.getElementById('progression-visual-viewer');
  if (visualContainer) {
    visualContainer.innerHTML = stageSvg;
  }

  // Update Stage Meta
  const numBadge = document.getElementById('progression-stage-number');
  const titleEl = document.getElementById('progression-stage-title');
  const descEl = document.getElementById('progression-stage-desc');
  const tipsEl = document.getElementById('progression-stage-tips');
  const juniorEl = document.getElementById('progression-stage-junior');
  const timeEl = document.getElementById('progression-stage-time');

  if (numBadge) numBadge.textContent = `Stage ${stage.stageNumber || (stageIndex + 1)} of 5`;
  if (titleEl) titleEl.textContent = stageTitle;
  if (descEl) descEl.textContent = stageDesc;
  if (timeEl) timeEl.textContent = `Est: ${stageTime}`;
  if (tipsEl) tipsEl.textContent = stageTips;
  if (juniorEl) juniorEl.textContent = `🐣 Junior Guide: "${stageJunior}"`;

  // Update Thumbnail Active states
  const cards = document.querySelectorAll('.progression-stage-card');
  cards.forEach((c, idx) => {
    c.classList.toggle('active', idx === stageIndex);
  });

  // Update Prev / Next button states
  const prevBtn = document.getElementById('btn-progression-prev');
  const nextBtn = document.getElementById('btn-progression-next');
  if (prevBtn) prevBtn.disabled = stageIndex === 0;
  if (nextBtn) nextBtn.disabled = stageIndex === stages.length - 1;

  // Speak step aloud if enabled
  const speakStepBtn = document.getElementById('btn-progression-audio');
  if (speakStepBtn) {
    speakStepBtn.onclick = () => {
      if (aiClientInstance) {
        const text = `${stageTitle}. ${stageDesc}. Technique tip: ${stageTips}`;
        aiClientInstance.speakCompanion(text);
      }
    };
  }

  // Check if reached final stage to unlock badge
  if (stageIndex === stages.length - 1 && window.KalaPassport) {
    window.KalaPassport.unlockBadge('folk_apprentice');
  }
}

function startProgressionAutoPlay() {
  isProgressionPlaying = true;
  const playBtn = document.getElementById('btn-progression-play');
  if (playBtn) playBtn.innerHTML = `<span>⏸ Pause</span>`;

  progressionAutoPlayTimer = setInterval(() => {
    const maxStages = (currentCityData?.progressionStages?.length || 5) - 1;
    if (progressionCurrentStage < maxStages) {
      showProgressionStage(progressionCurrentStage + 1);
    } else {
      showProgressionStage(0); // Loop back
    }
  }, 2600);
}

function pauseProgressionAutoPlay() {
  isProgressionPlaying = false;
  if (progressionAutoPlayTimer) {
    clearInterval(progressionAutoPlayTimer);
    progressionAutoPlayTimer = null;
  }
  const playBtn = document.getElementById('btn-progression-play');
  if (playBtn) playBtn.innerHTML = `<span>▶ Play Timelapse</span>`;
}

// -------------------------------------------------------------
// 6. Meet Your Kala Guru Companion ("Guru Mitra")
// -------------------------------------------------------------
function initCompanion() {
  const companionVoiceToggle = document.getElementById('companion-voice-toggle');
  const companionLangSelect = document.getElementById('companion-lang-select');
  const companionLevelToggle = document.getElementById('companion-level-toggle');
  const companionStoryBtn = document.getElementById('btn-companion-story');

  if (companionVoiceToggle) {
    companionVoiceToggle.addEventListener('change', (e) => {
      if (aiClientInstance) aiClientInstance.setVoiceEnabled(e.target.checked);
    });
  }

  if (companionLangSelect) {
    companionLangSelect.addEventListener('change', (e) => {
      const lang = e.target.value;
      if (aiClientInstance) aiClientInstance.setVoiceLanguage(lang);
      const greetings = {
        en: "Hello! I am Guru Mitra, your folk art companion. Let's create beautiful art together!",
        hi: "नमस्ते! मैं गुरु मित्र हूँ। आइए मिलकर विदर्भ की लोककला सीखें!",
        mr: "नमस्कार! मी गुरु मित्र आहे. चला आपण विदर्भाची सुंदर लोककला शिकूया!"
      };
      if (aiClientInstance) aiClientInstance.speakCompanion(greetings[lang] || greetings.en, lang);
    });
  }

  if (companionLevelToggle) {
    companionLevelToggle.addEventListener('click', () => {
      const current = companionLevelToggle.getAttribute('data-level') || 'junior';
      const nextLevel = current === 'junior' ? 'scholar' : 'junior';
      companionLevelToggle.setAttribute('data-level', nextLevel);

      if (nextLevel === 'scholar') {
        companionLevelToggle.innerHTML = `<span>🎓 Senior Scholar</span>`;
        if (aiClientInstance) aiClientInstance.setReadingLevel('scholar');
      } else {
        companionLevelToggle.innerHTML = `<span>🐣 Junior Explorer</span>`;
        if (aiClientInstance) aiClientInstance.setReadingLevel('junior');
      }

      if (aiClientInstance) aiClientInstance.updateMilestoneBanner();
      if (currentCityData) showProgressionStage(progressionCurrentStage);
    });
  }

  if (companionStoryBtn) {
    companionStoryBtn.addEventListener('click', () => {
      openStoryModal();
    });
  }
}

// -------------------------------------------------------------
// 7. Kala Passport Modal
// -------------------------------------------------------------
function initPassportModal() {
  const passportBtn = document.getElementById('btn-header-passport');
  const modal = document.getElementById('passport-modal');
  const closeBtn = document.getElementById('btn-passport-close');

  if (passportBtn && modal) {
    passportBtn.addEventListener('click', () => {
      renderPassportContents();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  // Tabs
  const tabs = document.querySelectorAll('[data-passport-tab]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active', 'border-terracotta', 'text-terracotta'));
      tab.classList.add('active', 'border-terracotta', 'text-terracotta');

      const target = tab.getAttribute('data-passport-tab');
      document.querySelectorAll('.passport-tab-content').forEach(c => c.classList.add('hidden'));
      const activeContent = document.getElementById(`passport-tab-${target}`);
      if (activeContent) activeContent.classList.remove('hidden');
    });
  });
}

function renderPassportContents() {
  const p = window.KalaPassport;
  if (!p) return;

  // 1. Stamps Grid
  const stampsGrid = document.getElementById('passport-stamps-grid');
  if (stampsGrid) {
    stampsGrid.innerHTML = '';
    KALA_GURU_DATA.activeCities.forEach(city => {
      const isUnlocked = p.state.stamps.includes(city.id);
      const stampMeta = city.passportStamp || { icon: '🏛️', title: city.artName, rarity: 'Heritage' };

      const card = document.createElement('div');
      card.className = `p-4 rounded-2xl border-2 flex flex-col items-center text-center space-y-2 transition-all ${
        isUnlocked
          ? 'bg-amber-50/70 border-amber-300 shadow-sm'
          : 'bg-stone-100 border-dashed border-stone-300 opacity-60'
      }`;

      card.innerHTML = `
        <div class="text-3xl ${isUnlocked ? 'rubber-stamp' : 'grayscale'}">
          ${stampMeta.icon}
        </div>
        <div class="font-serif font-bold text-xs text-stone-900">${city.cityName}</div>
        <div class="text-[10px] font-semibold text-terracotta">${stampMeta.title || city.artName}</div>
        <span class="px-2 py-0.5 rounded-full text-[9px] font-bold ${
          isUnlocked ? 'bg-amber-200 text-amber-900' : 'bg-stone-200 text-stone-500'
        }">
          ${isUnlocked ? '★ Collected' : 'Locked'}
        </span>
      `;
      stampsGrid.appendChild(card);
    });
  }

  // 2. Badges Grid
  const badgesGrid = document.getElementById('passport-badges-grid');
  if (badgesGrid) {
    badgesGrid.innerHTML = '';
    (KALA_GURU_DATA.badges || []).forEach(badge => {
      const isUnlocked = p.state.badges.includes(badge.id);

      const card = document.createElement('div');
      card.className = `badge-medal-card p-3 rounded-2xl border flex items-center gap-3 ${
        isUnlocked
          ? 'bg-white border-amber-300 shadow-sm'
          : 'bg-stone-50 border-stone-200 opacity-50'
      }`;

      card.innerHTML = `
        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xl shrink-0 ${
          isUnlocked ? 'bg-gradient-to-tr from-amber-500 to-amber-200 text-stone-900 shadow' : 'bg-stone-200'
        }">
          ${badge.icon}
        </div>
        <div class="overflow-hidden">
          <div class="text-xs font-bold text-stone-900 truncate">${badge.title}</div>
          <div class="text-[10px] text-stone-500 leading-tight">${badge.desc}</div>
        </div>
      `;
      badgesGrid.appendChild(card);
    });
  }

  // 3. User Artwork Gallery
  const galleryGrid = document.getElementById('passport-gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = '';
    const items = p.state.gallery || [];
    if (items.length === 0) {
      galleryGrid.innerHTML = `
        <div class="col-span-full py-10 text-center text-stone-400 text-xs">
          <div class="text-3xl mb-2">🎨</div>
          <p>No saved artworks yet. Download your practice drawing to add it to your gallery!</p>
        </div>
      `;
    } else {
      items.forEach(art => {
        const item = document.createElement('div');
        item.className = 'bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col';
        item.innerHTML = `
          <div class="aspect-video bg-amber-50/50 p-1 flex items-center justify-center overflow-hidden">
            <img src="${art.dataUrl}" alt="${art.artName}" class="w-full h-full object-contain">
          </div>
          <div class="p-2.5 space-y-1">
            <div class="font-bold text-xs text-stone-900 truncate">${art.artName}</div>
            <div class="flex items-center justify-between text-[10px] text-stone-500">
              <span>${art.cityName}</span>
              <span class="font-semibold text-emerald-700">${art.score}% Score</span>
            </div>
          </div>
        `;
        galleryGrid.appendChild(item);
      });
    }
  }
}

// -------------------------------------------------------------
// 8. Cultural Storyteller Modal
// -------------------------------------------------------------
function initStoryModal() {
  const modal = document.getElementById('story-modal');
  const closeBtn = document.getElementById('btn-story-close');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }
}

function openStoryModal() {
  if (!currentCityData) return;
  const modal = document.getElementById('story-modal');
  if (!modal) return;

  const storyData = currentCityData.story || {};
  document.getElementById('story-modal-title').textContent = `${currentCityData.artName} • Folklore & Heritage`;
  document.getElementById('story-modal-city').textContent = `${currentCityData.cityName}, Vidarbha`;

  const textEn = document.getElementById('story-text-en');
  const textHi = document.getElementById('story-text-hi');
  const textMr = document.getElementById('story-text-mr');

  if (textEn) textEn.textContent = storyData.en || currentCityData.shortDescription;
  if (textHi) textHi.textContent = storyData.hi || '';
  if (textMr) textMr.textContent = storyData.mr || '';

  // Listen buttons
  const listenEn = document.getElementById('btn-story-listen-en');
  const listenHi = document.getElementById('btn-story-listen-hi');
  const listenMr = document.getElementById('btn-story-listen-mr');

  if (listenEn) listenEn.onclick = () => aiClientInstance && aiClientInstance.speakCompanion(storyData.en, 'en');
  if (listenHi) listenHi.onclick = () => aiClientInstance && aiClientInstance.speakCompanion(storyData.hi, 'hi');
  if (listenMr) listenMr.onclick = () => aiClientInstance && aiClientInstance.speakCompanion(storyData.mr, 'mr');

  if (window.KalaPassport) {
    window.KalaPassport.recordStoryExplored(currentCityData.id);
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// -------------------------------------------------------------
// 9. Routing Engine
// -------------------------------------------------------------
function handleRouting() {
  const hash = window.location.hash || '#home';
  const parts = hash.replace(/^#/, '').split('/');
  const route = parts[0] || 'home';
  const param = parts[1] || 'nagpur';

  // Breadcrumb visibility
  const breadcrumb = document.getElementById('flow-breadcrumb');
  if (breadcrumb) {
    breadcrumb.classList.toggle('hidden', route === 'home');
  }

  // Update Breadcrumb steps
  const stepCity = document.getElementById('flow-step-city');
  const stepLearn = document.getElementById('flow-step-learn');
  const stepPractice = document.getElementById('flow-step-practice');
  if (stepCity && stepLearn && stepPractice) {
    stepCity.classList.toggle('active', route === 'city');
    stepLearn.classList.toggle('active', route === 'learn');
    stepPractice.classList.toggle('active', route === 'practice');
  }

  // Hide all pages
  document.querySelectorAll('.app-page').forEach(page => page.classList.add('hidden'));

  // Route Dispatcher
  if (route === 'city') {
    showCityPage(param);
  } else if (route === 'learn') {
    showLearnPage(param);
  } else if (route === 'practice') {
    showPracticePage(param);
  } else {
    showHomePage();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHomePage() {
  const page = document.getElementById('page-home');
  if (page) page.classList.remove('hidden');
  stopWebcam();
}

function showCityPage(cityId) {
  const city = KALA_GURU_DATA.activeCities.find(c => c.id === cityId) || KALA_GURU_DATA.activeCities[0];
  currentCityData = city;
  stopWebcam();

  if (window.KalaPassport) {
    window.KalaPassport.unlockStamp(city.id);
  }

  const page = document.getElementById('page-city');
  if (!page) return;

  document.getElementById('city-page-name').textContent = city.cityName;
  document.getElementById('city-page-art-name').textContent = city.artName;
  document.getElementById('city-page-tagline').textContent = city.tagline || `${city.artName} Tradition`;
  document.getElementById('city-page-image').src = city.imagePath;
  document.getElementById('city-page-desc').textContent = city.shortDescription;

  document.getElementById('btn-learn-yes').href = `#learn/${city.id}`;
  document.getElementById('btn-learn-not-now').href = '#home';

  page.classList.remove('hidden');
}

function showLearnPage(cityId) {
  const city = KALA_GURU_DATA.activeCities.find(c => c.id === cityId) || KALA_GURU_DATA.activeCities[0];
  currentCityData = city;
  stopWebcam();

  const page = document.getElementById('page-learn');
  if (!page) return;

  document.getElementById('learn-city-title').textContent = `${city.cityName} • ${city.artName}`;
  document.getElementById('learn-reference-img').src = city.imagePath;
  document.getElementById('btn-go-to-practice').href = `#practice/${city.id}`;

  // Populate 6 to 8 Teaching Steps
  const stepsContainer = document.getElementById('learn-steps-list');
  if (stepsContainer) {
    stepsContainer.innerHTML = '';
    const stepsList = city.steps || city.teachingSteps || [];
    stepsList.forEach((st, idx) => {
      const stepCard = document.createElement('div');
      stepCard.className = 'p-4 rounded-xl border border-stone-200 bg-white hover:border-amber-400 transition-colors shadow-sm flex items-start gap-3.5';
      const stepTitle = st.title || st.name || `Step ${idx + 1}`;
      const stepDetail = st.instruction || st.detail || st.hint || '';
      const stepHint = st.hint ? `<div class="text-[11px] text-amber-800 font-medium mt-1">💡 Tip: ${st.hint}</div>` : '';
      stepCard.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center shrink-0">
          ${st.stepNumber || (idx + 1)}
        </div>
        <div class="space-y-0.5">
          <h4 class="text-xs font-bold text-stone-900">${stepTitle}</h4>
          <p class="text-xs text-stone-600 leading-relaxed">${stepDetail}</p>
          ${stepHint}
        </div>
      `;
      stepsContainer.appendChild(stepCard);
    });
  }

  // Load Step Progression Player
  loadProgressionForArt(city);

  // Initialize Chat context
  if (aiClientInstance) {
    aiClientInstance.setContext(city, city);
  }

  // Reset Chat Messages
  const chatMessages = document.getElementById('learn-chat-messages');
  if (chatMessages) {
    chatMessages.innerHTML = `
      <div class="bg-amber-50 border border-amber-200 text-stone-800 text-xs p-3 rounded-2xl rounded-tl-none leading-relaxed shadow-sm">
        👋 Welcome! I am your Kala Guru AI tutor for <strong>${city.artName}</strong> of <strong>${city.cityName}</strong>.
        Ask me anything about traditional pigments, sacred motifs, or brush techniques!
      </div>
    `;
  }

  page.classList.remove('hidden');
}

function showPracticePage(cityId) {
  const city = KALA_GURU_DATA.activeCities.find(c => c.id === cityId) || KALA_GURU_DATA.activeCities[0];
  currentCityData = city;

  const page = document.getElementById('page-practice');
  if (!page) return;

  document.getElementById('practice-art-heading').textContent = `${city.cityName} • ${city.artName}`;
  document.getElementById('practice-reference-img').src = city.imagePath;

  // Populate Step Hints in Practice Mode
  const hintsContainer = document.getElementById('practice-steps-hint-box');
  if (hintsContainer) {
    hintsContainer.innerHTML = '';
    const stepsList = city.steps || city.teachingSteps || [];
    stepsList.slice(0, 4).forEach((st, idx) => {
      const hint = document.createElement('div');
      hint.className = 'text-[11px] text-stone-700 flex items-start gap-1.5';
      const title = st.title || st.name || `Step ${idx + 1}`;
      hint.innerHTML = `<span class="text-terracotta font-bold">${idx + 1}.</span> <span>${title}</span>`;
      hintsContainer.appendChild(hint);
    });
  }

  // Populate Palette Swatches
  const swatchesBox = document.getElementById('practice-palette-swatches');
  if (swatchesBox) {
    swatchesBox.innerHTML = '';
    const palette = city.traditionalPalette || (city.palette || []).map(p => p.hex);
    palette.forEach((hex, idx) => {
      const swBtn = document.createElement('button');
      swBtn.type = 'button';
      swBtn.className = `swatch-btn w-6 h-6 rounded-full border border-stone-300 shadow-sm ${idx === 0 ? 'selected' : ''}`;
      swBtn.style.backgroundColor = hex;
      swBtn.title = `Traditional shade ${idx + 1}: ${hex}`;
      swBtn.addEventListener('click', () => {
        document.querySelectorAll('.swatch-btn').forEach(s => s.classList.remove('selected'));
        swBtn.classList.add('selected');
        if (canvasInstance) canvasInstance.setColor(hex);
        const colName = document.getElementById('selected-color-name');
        if (colName) colName.textContent = `Tone ${idx + 1}`;
      });
      swatchesBox.appendChild(swBtn);
    });
  }

  // Set AI context
  if (aiClientInstance) {
    aiClientInstance.setContext(city, city);
  }

  page.classList.remove('hidden');

  // Trigger pixel-perfect canvas resize
  setTimeout(() => {
    if (canvasInstance) {
      canvasInstance.initCanvasSize();
    }
  }, 120);
}

// -------------------------------------------------------------
// Global Event Listeners
// -------------------------------------------------------------
function bindGlobalEvents() {
  // Chat form submit
  const chatForm = document.getElementById('learn-chat-form');
  const chatInput = document.getElementById('learn-chat-input');
  const chatMessages = document.getElementById('learn-chat-messages');

  if (chatForm && chatInput && chatMessages) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const question = chatInput.value.trim();
      if (!question) return;

      chatInput.value = '';
      if (aiClientInstance) {
        aiClientInstance.askChatbot(question, chatMessages);
      }
    });
  }

  // Suggestion chips
  document.querySelectorAll('.chat-suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      if (query && aiClientInstance && chatMessages) {
        aiClientInstance.askChatbot(query, chatMessages);
      }
    });
  });
}
