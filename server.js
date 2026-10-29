/**
 * Kala Guru - Node.js Backend Server
 * 
 * Serves the frontend application and provides secure API endpoints for:
 * 1. POST /api/analyze - Live AI Vision guidance & critique on student's canvas
 * 2. POST /api/chat    - AI Tutor Q&A strictly in English about the selected art
 * 3. GET /api/health   - Server status & AI key status
 * 
 * Uses environment variable AI_API_KEY (supports Gemini Vision / OpenAI Vision)
 * with robust, art-specific fallback so the app works seamlessly even before an API key is set!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Simple .env reader (zero external dependencies required)
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const PORT = process.env.PORT || 3000;
const AI_API_KEY = process.env.AI_API_KEY || '';
const ROOT_DIR = __dirname;

// Import art data for knowledge base
let ART_DATA = null;
try {
  ART_DATA = require('./arts.js');
} catch (e) {
  try {
    ART_DATA = require('./public/data/arts.js');
  } catch (err) {
    console.log('Note: arts.js will be loaded on demand.');
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

// ==========================================
// VISION ANALYSIS ENGINE
// ==========================================
async function analyzeArtworkWithAI(canvasImageBase64, artId, cityName, artName, currentStepIndex, metrics) {
  // If API Key is configured, attempt calling Vision API
  if (AI_API_KEY && AI_API_KEY.trim() !== '' && !AI_API_KEY.includes('your_api_key_here')) {
    try {
      const cleanBase64 = canvasImageBase64.replace(/^data:image\/\w+;base64,/, '');

      // Try Google Gemini Vision API (gemini-1.5-flash or gemini-2.0-flash)
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AI_API_KEY}`;
      
      const prompt = `You are "Kala Guru AI", a master art tutor teaching students traditional folk art of Vidarbha, Maharashtra, India.
The student is currently practicing "${artName}" from the city of "${cityName}".
Current teaching step index: ${currentStepIndex}.

Analyze the provided drawing canvas image against authentic ${artName} principles.
Strictly respond ONLY with a JSON object in this exact schema, all in English:
{
  "accuracyScore": <integer between 20 and 95 based on stroke quality, proportions, and adherence to ${artName}>,
  "whatIsRight": [
    "<specific positive aspect in English>",
    "<another positive aspect in English>"
  ],
  "whatIsWrong": [
    "<Identify specific flaw> -> <Actionable correction in format: 'This is wrong -> do it like this'>",
    "<Another specific flaw> -> <Actionable correction in format: 'This is wrong -> do it like this'>"
  ],
  "nextSuggestedStep": "<Actionable English recommendation for what to draw or refine next>"
}
Do not include markdown ticks or extra text. Only valid JSON.`;

      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: 'image/png',
                  data: cleanBase64
                }
              }
            ]
          }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const cleanedJson = candidateText.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanedJson);
        if (parsed.accuracyScore && Array.isArray(parsed.whatIsRight) && Array.isArray(parsed.whatIsWrong)) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Vision API call error, falling back to art-specific vision engine:', err.message);
    }
  }

  // Robust, Art-Specific Fallback Vision Heuristic Engine
  return generateArtSpecificFeedback(artId, cityName, artName, currentStepIndex, metrics);
}

// Generate style-specific, pedagogical English feedback
function generateArtSpecificFeedback(artId, cityName, artName, currentStepIndex, metrics) {
  metrics = metrics || { strokeCount: 15, dotCount: 5, coverage: 20, colorsCount: 2 };
  const strokes = metrics.strokeCount || 10;
  const dots = metrics.dotCount || 0;
  const coverage = metrics.coverage || 15;
  const colors = metrics.colorsCount || 1;

  let baseScore = 55;
  const whatIsRight = [];
  const whatIsWrong = [];
  let nextStep = "";

  // 1. Nagpur - Chitari art
  if (artId === 'nagpur') {
    if (strokes > 8) {
      whatIsRight.push("Graceful initial curvature of the peacock's proud breast and neck line.");
      baseScore += 12;
    } else {
      whatIsWrong.push("Peacock neck outline is too sparse -> draw an unbroken, confident S-curve rising from the lotus base");
      baseScore -= 10;
    }

    if (coverage > 10 && coverage < 50) {
      whatIsRight.push("Good proportional balance of the central bird figure within the frame.");
      baseScore += 10;
    } else {
      whatIsWrong.push("Figure proportions are off-center -> position the lotus base firmly in the lower third so the peacock fan has room to radiate");
      baseScore -= 8;
    }

    if (colors >= 2) {
      whatIsRight.push("Auspicious combination of traditional Sindoor red and peacock indigo.");
      baseScore += 10;
    } else {
      whatIsWrong.push("Monochromatic palette detected -> contrast the deep indigo neck with warm golden ochre wing arches");
    }
    nextStep = "Add the three-pronged Kalgi crest atop the head and detail the almond-shaped eye with a white pupil highlight.";
  }

  // 2. Amravati - Korku art
  else if (artId === 'amravati') {
    if (strokes >= 6) {
      whatIsRight.push("Bold geometric triangular structure forming the warrior's protective torso.");
      baseScore += 14;
    } else {
      whatIsWrong.push("Torso lacks geometric definition -> draw two inverted triangles meeting precisely at the waist vertex");
      baseScore -= 10;
    }

    if (metrics.hatchCount > 4 || strokes > 14) {
      whatIsRight.push("Good chisel-like diagonal chevron hatching mimicking traditional Melghat teakwood carving.");
      baseScore += 12;
    } else {
      whatIsWrong.push("Inner torso appears flat -> use the Hatching tool to inscribe 45-degree diagonal chisel grooves inside the triangles");
    }
    nextStep = "Place the circular Sun God (Gomaj) in the upper sky with radiating protective spear rays.";
  }

  // 3. Akola - Terracotta art
  else if (artId === 'akola') {
    if (strokes >= 8) {
      whatIsRight.push("Strong muscular arch of the Pola bullock's neck and majestic upward-sweeping horns.");
      baseScore += 12;
    } else {
      whatIsWrong.push("Horns are too small and droopy -> draw towering sweeping arches curling proudly upward like twin crescents");
      baseScore -= 10;
    }

    if (colors >= 2) {
      whatIsRight.push("Vibrant festive spiral ribbon bands alternating across the horn lengths.");
      baseScore += 10;
    } else {
      whatIsWrong.push("Horn coloration is plain -> paint alternating diagonal stripes of turmeric yellow and vermilion red along both horns");
    }
    nextStep = "Draw the sacred triangular forehead Bashinga crown and drape a round bell necklace across the chest.";
  }

  // 4. Chandrapur - Gond art
  else if (artId === 'chandrapur') {
    if (dots >= 8) {
      whatIsRight.push(`Excellent signature Gond dot work (${dots} dots) giving organic vitality to the composition.`);
      baseScore += 18;
    } else {
      whatIsWrong.push("Signature Gond dots are missing or too few -> select the Gond Dots tool and stamp rhythmic, concentric rows of dots along the animal contours");
      baseScore -= 15;
    }

    if (strokes >= 10) {
      whatIsRight.push("Flowing organic curves uniting the sacred Mahua tree with the forest deer silhouette.");
      baseScore += 10;
    } else {
      whatIsWrong.push("Tree branches are rigid and straight -> curve the branches organically like flowing water currents");
    }
    nextStep = "Infill the deer body with turmeric ochre and branch tips with crushed leaf forest green.";
  }

  // 5. Yavatmal - Banjara art
  else if (artId === 'yavatmal') {
    if (strokes >= 10) {
      whatIsRight.push("Clean radial symmetry radiating from the central protective mirror medallion.");
      baseScore += 14;
    } else {
      whatIsWrong.push("Mandalas lack symmetrical balance -> ensure the four cardinal triangles point at equal 90-degree compass intervals");
      baseScore -= 10;
    }

    if (colors >= 3) {
      whatIsRight.push("High-voltage contrast of magenta pink, turquoise, and sun yellow true to Lambani embroidery.");
      baseScore += 14;
    } else {
      whatIsWrong.push("Color contrast is subdued -> use bold contrasting neon tones such as hot magenta and bright yellow side-by-side");
    }
    nextStep = "Add diamond cowrie shell charms along the perimeter and a bright silver-white highlight inside the central mirror.";
  }

  // 6. Washim - Vatsagulma art
  else if (artId === 'washim') {
    if (strokes >= 8) {
      whatIsRight.push("Delicate, unbroken lyrical contours reminiscent of classical Ajanta court frescoes.");
      baseScore += 14;
    } else {
      whatIsWrong.push("Brushwork is shaky and broken -> draw steady, continuous hair-thin strokes with light pressure");
      baseScore -= 8;
    }

    whatIsRight.push("Serene half-closed meditative lotus-petal eye contour.");
    whatIsWrong.push("Lotus mudra hand lacks slender elegance -> taper the fingers gently like tender young willow shoots around the blossom");
    nextStep = "Frame the classical portrait with a thin golden Haashiya creeper vine adorned with miniature buds.";
  }

  // 7. Buldhana - Bhil art
  else {
    if (dots >= 10) {
      whatIsRight.push(`Vibrant constellation of multi-colored harvest blessing dots (${dots} dots) across the figure.`);
      baseScore += 18;
    } else {
      whatIsWrong.push("Dotted constellation fill is incomplete -> inscribe dense multi-colored rows of white and indigo dots filling the sacred horse body");
      baseScore -= 15;
    }

    whatIsRight.push("Energetic, joyous posture of the sacred Pithora steed with arched neck.");
    whatIsWrong.push("Mane and tail lack dynamism -> draw sweeping energetic white brushstrokes for the flowing tail and erect mane");
    nextStep = "Paint a radiant circular sun in the sky and an auspicious sacred tree of abundance beside the steed.";
  }

  const finalScore = Math.min(94, Math.max(35, baseScore));

  return {
    accuracyScore: finalScore,
    whatIsRight: whatIsRight.length > 0 ? whatIsRight : ["Good effort on initiating the preliminary folk outline on the canvas."],
    whatIsWrong: whatIsWrong.length > 0 ? whatIsWrong : ["Proportions are slightly uneven -> balance the left and right contours for closer adherence to traditional style"],
    nextSuggestedStep: nextStep
  };
}

// ==========================================
// AI CHATBOT ENGINE
// ==========================================
async function answerArtQuestionWithAI(query, artId, cityName, artName) {
  // If API key is available, call Gemini
  if (AI_API_KEY && AI_API_KEY.trim() !== '' && !AI_API_KEY.includes('your_api_key_here')) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AI_API_KEY}`;
      const prompt = `You are Kala Guru AI, an expert cultural tutor for traditional folk art of Vidarbha, Maharashtra, India.
The user is learning about "${artName}" from the city of "${cityName}".
User Question: "${query}"

RULES:
1. Answer ONLY in English.
2. Answer ONLY about ${artName} from ${cityName}, Vidarbha.
3. Keep the explanation warm, culturally informative, and practical (2-4 concise paragraphs).
4. If the question is completely unrelated to art or Vidarbha, politely redirect the student back to ${artName}.`;

      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text.trim();
      }
    } catch (e) {
      console.warn('Chat AI API error, falling back to knowledge base:', e.message);
    }
  }

  // Built-in Knowledge Base (English Only)
  const q = query.toLowerCase();

  if (q.includes('color') || q.includes('pigment') || q.includes('paint') || q.includes('material')) {
    return `In ${cityName}'s traditional ${artName}, master artisans historically derived all pigments directly from nature:\n\n• Red tones come from local Geru (terracotta iron-rich clay).\n• Bright yellows are created from freshly harvested turmeric (Haldi) or yellow clay (Ramraj).\n• Deep blacks are prepared using the soot of mustard-oil lamps or charred straw.\n• Pristine whites are made using ground limestone chalk or rice flour paste.\n\nOn our digital practice canvas, you can select these exact historical shades directly from the palette toolbar!`;
  }

  if (q.includes('history') || q.includes('origin') || q.includes('who') || q.includes('community')) {
    return `${artName} has been cherished in ${cityName} for centuries as an integral expression of Vidarbha's rich cultural heritage. Practiced by local artisan guilds and indigenous communities, it blends sacred spiritual symbolism with daily agrarian and forest life. Unlike modern commercial paintings, each motif represents a prayer, a protector spirit, or an auspicious blessing for family and harvest.`;
  }

  if (q.includes('dot') || q.includes('pattern') || q.includes('technique') || q.includes('how to')) {
    return `To master ${artName}, always begin with a fluid, organic silhouette rather than rigid geometric lines. In Vidarbha folk traditions, repetitive textures—such as concentric dots, fine parallel dashes, and triangular chevrons—are considered the soul of the artwork. Use our canvas Dots and Hatch tools to lay down steady, rhythmic textures across each section!`;
  }

  return `${artName} of ${cityName} is renowned for its expressive motifs, organic curves, and deep connection to nature. When practicing on our canvas, focus on confident continuous strokes and warm earthen color harmonies. Feel free to use the Ghost Trace Guide to understand the traditional proportions step by step!`;
}

// ==========================================
// HTTP SERVER & ROUTING
// ==========================================
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // 1. GET /api/health
  if (req.method === 'GET' && pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      hasApiKey: !!(AI_API_KEY && !AI_API_KEY.includes('your_api_key_here')),
      nodeVersion: process.version,
      timestamp: new Date().toISOString()
    }));
    return;
  }

  // 2. POST /api/analyze - Live AI Vision Analysis
  if (req.method === 'POST' && pathname === '/api/analyze') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const { canvasImage, artId, cityName, artName, stepIndex, metrics } = payload;

        if (!canvasImage || !artId) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing canvasImage or artId' }));
          return;
        }

        const feedback = await analyzeArtworkWithAI(
          canvasImage,
          artId,
          cityName || 'Vidarbha',
          artName || 'Traditional Art',
          stepIndex || 0,
          metrics || {}
        );

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(feedback));
      } catch (err) {
        console.error('Error in /api/analyze:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          error: 'Could not analyze, please try again.',
          accuracyScore: 50,
          whatIsRight: ["Drawing initiated on the canvas."],
          whatIsWrong: ["Could not parse image -> please draw a clear stroke and click Check My Painting"],
          nextSuggestedStep: "Continue with the current step outline."
        }));
      }
    });
    return;
  }

  // 3. POST /api/chat - AI Tutor Chatbot
  if (req.method === 'POST' && pathname === '/api/chat') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const { query, artId, cityName, artName } = payload;

        if (!query) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing query' }));
          return;
        }

        const answer = await answerArtQuestionWithAI(query, artId, cityName, artName);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ answer }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Could not generate answer.' }));
      }
    });
    return;
  }

  // 4. Static File Server
  let filePath = path.join(ROOT_DIR, pathname === '/' ? 'index.html' : pathname);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for single-page routing if request has no extension
      if (!path.extname(pathname)) {
        filePath = path.join(ROOT_DIR, 'index.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🎨 Kala Guru Server is running!`);
  console.log(`📍 Local URL: http://localhost:${PORT}`);
  console.log(`🔑 AI API Key: ${AI_API_KEY && !AI_API_KEY.includes('your_api_key_here') ? 'Configured ✅' : 'Using Smart Native Heuristic Vision Engine (Add AI_API_KEY in .env for live Gemini Vision API)'}`);
  console.log(`====================================================`);
});
