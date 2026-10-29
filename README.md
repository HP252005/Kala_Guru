# Kala Guru (कला गुरु)

> **A Complete Web Platform Preserving & Teaching the Traditional Folk Art of Vidarbha with an AI Vision Tutor, External Webcam Scanner & Drawing Canvas**

The entire website is **100% in English** with optional audio voice narrations in **English, Hindi, and Marathi** for the friendly Kala Guru companion.

---

## 🚀 How to Run on Localhost

You have **two convenient ways** to run Kala Guru on `localhost`:

### Method 1: One-Click Localhost Launcher (Zero-Install, Works on Any Windows PC)
Double-click:
👉 **`start-localhost.bat`** (or `start.bat`) inside:
```
C:\Users\ASUS\.gemini\antigravity\scratch\kala-guru\start-localhost.bat
```
* **What it does:** It automatically detects your environment. If Node.js or Python is installed, it uses them; otherwise, it uses Windows's built-in PowerShell server (`server.ps1`) with **zero installation required**.
* It launches the server at:
  ```
  http://localhost:8000/
  ```
  and automatically opens it in your default web browser (Chrome, Edge, Firefox)!
* To stop the server, simply close the black command window or press `Ctrl + C`.

---

### Method 2: Command Line (PowerShell, Node.js, or Python)

Open PowerShell or Command Prompt in the project directory:
```powershell
cd C:\Users\ASUS\.gemini\antigravity\scratch\kala-guru
```

#### Option A: Native Windows PowerShell (No installation required)
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Opens: `http://localhost:8000/`

#### Option B: If you have Node.js installed
```bash
npm start
# OR
node server.js
```
Opens: `http://localhost:3000/`

#### Option C: If you have Python installed
```bash
python -m http.server 8000
```
Opens: `http://localhost:8000/`

#### Option D: VS Code Live Server
If you use Visual Studio Code, right-click `index.html` and choose **"Open with Live Server"**.

---

### Method 3: Direct File Mode
You can also directly double-click `index.html` to open it as `file:///.../index.html` without running any server at all! *(Note: Running on `http://localhost` is recommended for optimal external USB webcam and audio permissions).*

---

## 🌟 What's New in This Version

### 1. 📷 External Webcam & Real Paper Mode
- **Draw on Physical Paper**: Instead of drawing on screen, you can draw on real paper with real pencils, pens, or brush paints.
- **Webcam Paper Scanner**: Your external or laptop webcam captures the paper within on-screen alignment brackets.
- **AI Paper Vision Critique**: The AI vision engine scans the paper drawing, calculates accuracy (0-100%), identifies strengths, points out mistakes with actionable corrections (`"This is wrong -> do it like this"`), and suggests the next stroke!
- **Laser Scan Beam & Auto-Scan**: Includes an animated laser scanner and an optional 5-second auto-scanner.
- **Quick Mode Switch**: Seamless toggle between `[🎨 Digital Canvas Mode]` and `[📷 Real Paper & Webcam Mode]`.

### 2. 🎬 Step-by-Step Drawing Progression Studio (Replaces YouTube Video)
- **Interactive Stage Viewer**: 5 progressive vector stages showing exactly how each traditional artwork is constructed from raw foundation to finishing details.
- **Timelapse Player**: `[⏮ Prev Stage]` `[▶ Play Timelapse]` `[Next Stage ⏭]` automatically loops through the construction sequence.
- **Dual Reading Levels**: 
  - **🐣 Junior Explorer**: Simple words and encouragement for children and beginners.
  - **🎓 Senior Scholar**: Deep tribal symbolism, guild history, and master technique notes.
- **Step Audio Narrator**: Listen to spoken instructions for any stage.

### 3. 🖌️ Buttery Smooth Canvas Cursor & Spline Curves
- **Smooth Cursor Ring**: Custom floating cursor indicator overlay displaying brush radius and active traditional color.
- **Midpoint Bézier Interpolation**: Silky smooth curve rendering with zero lag or jagged lines.
- **Folk Tools**: Fluid Brush, Fine Pen, Gond/Bhil Dots, Tribal Hatching, Eraser, Undo/Redo, and Ghost Tracing Guide.
- **Heritage Certificate PNG Export**: Exports your artwork with an ornate traditional Vidarbha border and date seal.

### 4. 🦚 Meet Your Kala Guru Companion ("Guru Mitra")
- **Friendly Art Guide Character**: Welcomes younger learners and beginners with cheerful encouragement:
  - *“Let's try this shape together!”*
  - *“You finished your first pattern—ready for the next challenge?”*
  - *“Would you like to hear the story behind this artwork?”*
- **Multilingual Web Speech Voice**: Real-time spoken guidance in **English**, **Hindi (हिंदी)**, and **Marathi (मराठी)** using the browser's native speech synthesis.
- **Cultural Storyteller**: Click *"Hear the Folk Story"* to explore authentic folklore behind each art form in English, Hindi, and Marathi.

### 5. 🛂 Kala Passport — Build a Personal Cultural-Art Collection
- **Personal Digital Passport**: Saved in browser `localStorage`.
- **Collectible Regional Stamps**: Collect ink stamps for all 7 Vidarbha cities (Nagpur, Amravati, Akola, Chandrapur, Yavatmal, Washim, Buldhana).
- **Technique Badges**: Earn badges for discovering arts, trying paper webcam mode, mastering dots, tribal hatching, and exploring stories.
- **Personal Artwork Gallery**: Automatically archives your finished practice drawings with scores and certificates.

---

## 🔑 How to Add Your AI API Key (Optional)

To enable live Google Gemini Vision analysis directly in your browser:

1. Open **`config.js`** in Notepad or any text editor:
   ```javascript
   const CONFIG = {
     // Paste your Gemini API key inside the quotes below:
     AI_API_KEY: "YOUR_GEMINI_API_KEY_HERE",

     MODEL: "gemini-1.5-flash"
   };
   ```
2. Paste your API key (get a free key from [Google AI Studio](https://aistudio.google.com/)).
3. Save the file (`Ctrl + S`) and refresh `index.html` in your browser.

> **Offline Mode:** If `AI_API_KEY` is left blank, Kala Guru automatically uses its built-in art-specific style evaluator so you can practice on canvas or webcam paper and receive realistic feedback and scores right away without internet!

---

## 📂 Project Structure

Everything is neatly organized in **one folder**:
```
kala-guru/
├── index.html       <-- DOUBLE-CLICK THIS FILE TO OPEN!
├── config.js        <-- Paste your AI API key here
├── arts.js          <-- Central data file: 7 cities, progression stages, folklore, stamps
├── canvas.js        <-- Smooth HTML5 canvas engine & floating brush cursor
├── ai.js            <-- Vision analysis (Canvas + Webcam Paper), companion speech, chatbot
├── app.js           <-- Multi-page router, webcam manager, progression player, Kala Passport
├── styles.css       <-- Cultural earthy theme, webcam brackets, passport styling, laser beam
├── images/          <-- High-quality SVG and JPG images for all 7 Vidarbha cities
└── README.md        <-- Setup & user guide
```

---

## 🏛️ The 7 Mandatory Vidarbha Cities & Art Forms

1. **Nagpur** — *Chitari art* (Royal Maratha floral scrolls, auspicious peacocks, and temple banners)
2. **Amravati** — *Korku art* (Melghat tribal geometric chevrons, wooden carvings, and warrior totems)
3. **Akola** — *Terracotta art* (Sacred Pola bullocks, earthen vessels, and festive clay relief)
4. **Chandrapur** — *Gond art* (Concentric dots, sacred Mahua trees, and forest deer spirits)
5. **Yavatmal** — *Banjara art* (Lambani radial geometric mandalas and mirror medallions)
6. **Washim** — *Vatsagulma art* (Classical Vakataka royal fresco contours and lotus petal eyes)
7. **Buldhana** — *Bhil art* (Pithora sacred dotted steeds, harvest constellations, and earth deities)

*Coming soon in the dropdown: Wardha, Bhandara, Gondia, and Gadchiroli.*
