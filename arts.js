/**
 * Kala Guru - Central Art & City Database
 * 
 * Features all 7 Vidarbha cities with complete data:
 * 1. Nagpur - Chitari art
 * 2. Amravati - Korku art
 * 3. Akola - Terracotta art
 * 4. Chandrapur - Gond art
 * 5. Yavatmal - Banjara art
 * 6. Washim - Vatsagulma art
 * 7. Buldhana - Bhil art
 * 
 * Each city includes:
 * - 5 Interactive Vector Progression Stages (with stageName, description, techniqueTips, juniorHint, and full svgVisual)
 * - 8 Step-by-Step Curriculum Teaching Steps (with title, instruction, hint, juniorHint)
 * - Authentic Cultural Folklore Stories (English, Hindi, Marathi)
 * - Kala Passport collectible stamp metadata
 */

const KALA_GURU_DATA = {
  activeCities: [
    // -------------------------------------------------------------
    // 1. NAGPUR - CHITARI ART
    // -------------------------------------------------------------
    {
      id: "nagpur",
      cityName: "Nagpur",
      artName: "Chitari art",
      tagline: "The 250-Year-Old Royal Maratha Folk Painting Guild",
      imagePath: "images/nagpur.svg",
      placeholderJpgPath: "images/nagpur.jpg",
      passportStamp: {
        title: "Royal Chitari Seal",
        motif: "Crown Peacock & Lotus",
        icon: "🦚",
        rarity: "Royal Heritage"
      },
      story: {
        title: "The Legend of the Golden Peacock of Chitaroli",
        en: "Long ago during the Bhonsle Maratha era in Nagpur, royal painters lived in a lane called Chitaroli. Legend says a young painter named Anand saw a peacock dancing in the palace gardens just before the monsoon. The peacock danced with such celestial grace that Indra, the god of rain, showered the garden with golden rain. Anand rushed to his wooden board and painted the dancing peacock on a blossoming lotus so the city would never forget the blessing of rain. From that day, the Chitari peacock is drawn in homes to invite joy, abundance, and auspicious beginnings.",
        hi: "नागपुर के भोंसले मराठा काल में 'चितारोळी' मोहल्ले में शाही चित्रकार रहते थे। कहा जाता है कि आनंद नाम के एक युवा चित्रकार ने राजमहल के बगीचे में एक मोर को नृत्य करते देखा। मोर के नृत्य से प्रसन्न होकर देवराज इंद्र ने स्वर्ण वर्षा की। आनंद ने उसी समय पवित्र कमल पर नृत्य करते मोर का चित्र बनाया ताकि समृद्धि हमेशा बनी रहे। तब से यह मोर घरों में शुभता का प्रतीक माना जाता है।",
        mr: "नागपूरच्या भोसले राजवटीत 'चितारोळी' भागातील चित्रकारांची मोठी ख्याती होती. अशी आख्यायिका आहे की आनंद नावाच्या एका कलाकाराने राजवाड्यात नाचणारा देखणा मोर पाहिला. त्या मोराच्या नृत्याने प्रसन्न होऊन वरुणदेवाने समृद्धीची बरसात केली. आनंदने कमळावर आरूढ झालेल्या मोराचे देखणे चित्र साकारले. तेव्हापासून चितारोळीचा मोर घरात सुख, समृद्धी आणि मांगल्याचे प्रतीक मानला जातो."
      },
      shortDescription: "Chitari art originated over 250 years ago in Nagpur's historic Chitaroli quarter under the royal patronage of the Bhonsle Maratha rulers. Practiced by the hereditary Chitari artisan community, this folk tradition is celebrated for its bold hand-painted murals, wooden shrines, and festive temple banners. The art revolves around royal peacocks, blooming lotuses, divine vahanas, and auspicious floral borders. Artists traditionally grind mineral vermilion, lapis blue, turmeric yellow, and lamp soot mixed with natural gum arabic. What makes Chitari art truly special is its striking graphic black outlines, dynamic almond-shaped eyes, and rhythmic curvilinear grace.",
      palette: [
        { name: "Sindoor Red", hex: "#C5221F", role: "Lotus petals & royal accents" },
        { name: "Peacock Indigo", hex: "#0E7490", role: "Peacock neck & ripples" },
        { name: "Surya Gold", hex: "#F59E0B", role: "Feather fan & ornaments" },
        { name: "Paan Leaf Green", hex: "#15803D", role: "Foliage & floral stems" },
        { name: "Kajal Black", hex: "#111827", role: "Primary bold outlines" },
        { name: "Chuna White", hex: "#FFFFFF", role: "Eye pupils & highlights" }
      ],
      traditionalPalette: ["#C5221F", "#0E7490", "#F59E0B", "#15803D", "#111827", "#FFFFFF"],
      progressionStages: [
        {
          stageNumber: 1,
          stageName: "Foundation Axis & Lotus Base",
          name: "Foundation Axis & Lotus Base",
          estimatedTime: "2-3 mins",
          description: "Establish the center vertical guideline and curve two upward-arching lotus brackets at the bottom.",
          techniqueTips: "Keep hand relaxed; let the lower lotus petals balance the whole bird.",
          juniorHint: "Draw two smiling bowl curves at the bottom like friendly cupped hands!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><line x1="200" y1="60" x2="200" y2="350" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="6,4"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340" fill="none" stroke="#D97706" stroke-width="3" stroke-dasharray="6,4"/><circle cx="200" cy="90" r="16" fill="none" stroke="#D97706" stroke-width="2" stroke-dasharray="4,4"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 1: Center Axis &amp; Lotus Base</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><line x1="200" y1="60" x2="200" y2="350" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="6,4"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340" fill="none" stroke="#D97706" stroke-width="3" stroke-dasharray="6,4"/><circle cx="200" cy="90" r="16" fill="none" stroke="#D97706" stroke-width="2" stroke-dasharray="4,4"/></svg>`
        },
        {
          stageNumber: 2,
          stageName: "The Regal S-Curve Silhouette",
          name: "The Regal S-Curve Silhouette",
          estimatedTime: "3 mins",
          description: "Draw the unbroken flowing S-curve defining the proud puffed chest, slender neck, and lotus throne.",
          techniqueTips: "Use a continuous, fluid stroke without lifting your brush to capture the Maratha court elegance.",
          juniorHint: "Draw a tall proud 'S' shape puffing its chest out with happiness!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="none" stroke="#C5221F" stroke-width="3.5"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="none" stroke="#0E7490" stroke-width="4"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 2: Proud S-Curve Neck &amp; Body</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="none" stroke="#C5221F" stroke-width="3.5"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="none" stroke="#0E7490" stroke-width="4"/></svg>`
        },
        {
          stageNumber: 3,
          stageName: "Radiating Fan Tail & Royal Crest",
          name: "Radiating Fan Tail & Royal Crest",
          estimatedTime: "3-4 mins",
          description: "Sweep arched ceremonial feathers spreading outward behind the back and crown the head with the 3-point Kalgi.",
          techniqueTips: "Angle the fan feathers uniformly so they frame the peacock like a ceremonial sunburst.",
          juniorHint: "Open a giant party fan behind the bird and add a 3-star royal birthday crown!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="none" stroke="#C5221F" stroke-width="3"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="none" stroke="#0E7490" stroke-width="3"/><path d="M210,190 C260,160 330,170 340,240 C350,290 280,320 220,300" fill="none" stroke="#F59E0B" stroke-width="3.5"/><path d="M190,75 L180,45 M197,70 L197,40 M205,73 L215,45" stroke="#111827" stroke-width="3" stroke-linecap="round"/><circle cx="180" cy="45" r="4" fill="#F59E0B"/><circle cx="197" cy="40" r="4" fill="#C5221F"/><circle cx="215" cy="45" r="4" fill="#F59E0B"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 3: Radiating Fan Tail &amp; Kalgi Crest</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="none" stroke="#C5221F" stroke-width="3"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="none" stroke="#0E7490" stroke-width="3"/><path d="M210,190 C260,160 330,170 340,240 C350,290 280,320 220,300" fill="none" stroke="#F59E0B" stroke-width="3.5"/><path d="M190,75 L180,45 M197,70 L197,40 M205,73 L215,45" stroke="#111827" stroke-width="3" stroke-linecap="round"/><circle cx="180" cy="45" r="4" fill="#F59E0B"/><circle cx="197" cy="40" r="4" fill="#C5221F"/><circle cx="215" cy="45" r="4" fill="#F59E0B"/></svg>`
        },
        {
          stageNumber: 4,
          stageName: "Almond Eye & Feather Medallions",
          name: "Almond Eye & Feather Medallions",
          estimatedTime: "3 mins",
          description: "Add the awake almond-shaped eye, pointed beak, and concentric circular eye medallions across the fan feathers.",
          techniqueTips: "The almond eye must gaze alertly forward with a sharp white pupil highlight.",
          juniorHint: "Draw a friendly almond eye and put circular jewels on every feather!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="none" stroke="#C5221F" stroke-width="3"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="none" stroke="#0E7490" stroke-width="3"/><path d="M210,190 C260,160 330,170 340,240 C350,290 280,320 220,300" fill="none" stroke="#F59E0B" stroke-width="3.5"/><circle cx="280" cy="220" r="14" fill="none" stroke="#0E7490" stroke-width="2.5"/><circle cx="315" cy="265" r="14" fill="none" stroke="#0E7490" stroke-width="2.5"/><ellipse cx="192" cy="88" rx="6" ry="4" fill="#111827"/><circle cx="193" cy="87" r="1.5" fill="#FFFFFF"/><path d="M178,90 L166,94 L178,98 Z" fill="#F59E0B" stroke="#111827"/><path d="M190,75 L180,45 M197,70 L197,40 M205,73 L215,45" stroke="#111827" stroke-width="3" stroke-linecap="round"/><circle cx="180" cy="45" r="4" fill="#F59E0B"/><circle cx="197" cy="40" r="4" fill="#C5221F"/><circle cx="215" cy="45" r="4" fill="#F59E0B"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 4: Almond Eye &amp; Feather Ornaments</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="none" stroke="#C5221F" stroke-width="3"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="none" stroke="#0E7490" stroke-width="3"/><path d="M210,190 C260,160 330,170 340,240 C350,290 280,320 220,300" fill="none" stroke="#F59E0B" stroke-width="3.5"/><circle cx="280" cy="220" r="14" fill="none" stroke="#0E7490" stroke-width="2.5"/><circle cx="315" cy="265" r="14" fill="none" stroke="#0E7490" stroke-width="2.5"/><ellipse cx="192" cy="88" rx="6" ry="4" fill="#111827"/><circle cx="193" cy="87" r="1.5" fill="#FFFFFF"/><path d="M178,90 L166,94 L178,98 Z" fill="#F59E0B" stroke="#111827"/><path d="M190,75 L180,45 M197,70 L197,40 M205,73 L215,45" stroke="#111827" stroke-width="3" stroke-linecap="round"/><circle cx="180" cy="45" r="4" fill="#F59E0B"/><circle cx="197" cy="40" r="4" fill="#C5221F"/><circle cx="215" cy="45" r="4" fill="#F59E0B"/></svg>`
        },
        {
          stageNumber: 5,
          stageName: "Royal Pigmentation & Bold Contours",
          name: "Royal Pigmentation & Bold Contours",
          estimatedTime: "4 mins",
          description: "Fill the body with deep peacock indigo, lotus petals with sindoor red, and reinforce all outer boundaries with crisp black ink.",
          techniqueTips: "Retrace all primary edges with strong, confident black lines for that iconic Chitaroli pop.",
          juniorHint: "Splash festival colors: royal blue, shiny gold, and candy red, then outline with black ink!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="#C5221F" stroke="#111827" stroke-width="3.5"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="#0E7490" stroke="#111827" stroke-width="3.5"/><path d="M210,190 C260,160 330,170 340,240 C350,290 280,320 220,300" fill="#F59E0B" stroke="#111827" stroke-width="3.5"/><circle cx="280" cy="220" r="14" fill="#0E7490" stroke="#111827" stroke-width="2"/><circle cx="280" cy="220" r="7" fill="#F59E0B"/><circle cx="315" cy="265" r="14" fill="#0E7490" stroke="#111827" stroke-width="2"/><circle cx="315" cy="265" r="7" fill="#F59E0B"/><ellipse cx="192" cy="88" rx="6" ry="4" fill="#111827"/><circle cx="193" cy="87" r="1.5" fill="#FFFFFF"/><path d="M178,90 L166,94 L178,98 Z" fill="#F59E0B" stroke="#111827" stroke-width="1.5"/><path d="M190,75 L180,45 M197,70 L197,40 M205,73 L215,45" stroke="#111827" stroke-width="3" stroke-linecap="round"/><circle cx="180" cy="45" r="4" fill="#F59E0B"/><circle cx="197" cy="40" r="4" fill="#C5221F"/><circle cx="215" cy="45" r="4" fill="#F59E0B"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 5: Full Pigments &amp; Masterpiece Finish</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 Z" fill="#C5221F" stroke="#111827" stroke-width="3.5"/><path d="M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 Z" fill="#0E7490" stroke="#111827" stroke-width="3.5"/><path d="M210,190 C260,160 330,170 340,240 C350,290 280,320 220,300" fill="#F59E0B" stroke="#111827" stroke-width="3.5"/><circle cx="280" cy="220" r="14" fill="#0E7490" stroke="#111827" stroke-width="2"/><circle cx="280" cy="220" r="7" fill="#F59E0B"/><circle cx="315" cy="265" r="14" fill="#0E7490" stroke="#111827" stroke-width="2"/><circle cx="315" cy="265" r="7" fill="#F59E0B"/><ellipse cx="192" cy="88" rx="6" ry="4" fill="#111827"/><circle cx="193" cy="87" r="1.5" fill="#FFFFFF"/><path d="M178,90 L166,94 L178,98 Z" fill="#F59E0B" stroke="#111827" stroke-width="1.5"/><path d="M190,75 L180,45 M197,70 L197,40 M205,73 L215,45" stroke="#111827" stroke-width="3" stroke-linecap="round"/><circle cx="180" cy="45" r="4" fill="#F59E0B"/><circle cx="197" cy="40" r="4" fill="#C5221F"/><circle cx="215" cy="45" r="4" fill="#F59E0B"/></svg>`
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: "Prepare the Base Tone",
          instruction: "Select a soft warm parchment background representing handmade cotton paper or seasoned teakwood board.",
          detail: "Select a soft warm parchment background representing handmade cotton paper or seasoned teakwood board.",
          hint: "Folk art begins on a warm earthen foundation rather than stark white.",
          juniorHint: "Let's give our paper a cozy warm sun-kissed paper glow!"
        },
        {
          stepNumber: 2,
          title: "Draw the Lotus Throne (Kamal Base)",
          instruction: "Sketch two curved symmetrical petal brackets at the lower center to form the sacred lotus pedestal.",
          detail: "Sketch two curved symmetrical petal brackets at the lower center to form the sacred lotus pedestal.",
          hint: "Ensure the left and right lotus petals curve gently upwards like cupped hands.",
          juniorHint: "Make two smiling bowl curves touching in the middle like friendly hands holding flowers!"
        },
        {
          stepNumber: 3,
          title: "Form the Regal S-Curve Neck",
          instruction: "Draw an elegant vertical 'S' shape rising proudly from the lotus to outline the chest and neck of the royal peacock.",
          detail: "Draw an elegant vertical 'S' shape rising proudly from the lotus to outline the chest and neck of the royal peacock.",
          hint: "Keep the chest swelling outward to capture the majestic stance typical of Maratha court art.",
          juniorHint: "Draw a tall, proud 'S' shape that puffs its chest out happily!"
        },
        {
          stepNumber: 4,
          title: "Crown with the Three-Point Crest (Kalgi)",
          instruction: "Add the royal three-pronged coronet atop the head, tipped with ornamental pearls.",
          detail: "Add the royal three-pronged coronet atop the head, tipped with ornamental pearls.",
          hint: "Keep the three tips equidistant and top each with a fine circular dot.",
          juniorHint: "Give our peacock a 3-star royal birthday crown!"
        },
        {
          stepNumber: 5,
          title: "Draw the Radiating Fan Tail",
          instruction: "Sweep arched curved feathers spreading outward like an imperial ceremonial fan behind the body.",
          detail: "Sweep arched curved feathers spreading outward like an imperial ceremonial fan behind the body.",
          hint: "Make the arched feathers expand outward uniformly from the back.",
          juniorHint: "Open up a giant party fan spreading across the sky behind him!"
        },
        {
          stepNumber: 6,
          title: "Detail the Expressive Eye and Beak",
          instruction: "Carefully draw an almond-shaped eye with a sharp pointed pupil and a small curved beak.",
          detail: "Carefully draw an almond-shaped eye with a sharp pointed pupil and a small curved beak.",
          hint: "Chitari faces are renowned for their wide, wakeful, compassionate gaze.",
          juniorHint: "Draw a little almond shaped eye with a friendly smile in its gaze!"
        },
        {
          stepNumber: 7,
          title: "Apply Traditional Royal Colors",
          instruction: "Fill the neck with deep peacock indigo, the wing arches with warm golden ochre, and the lotus base with sindoor red.",
          detail: "Fill the neck with deep peacock indigo, the wing arches with warm golden ochre, and the lotus base with sindoor red.",
          hint: "Use solid, flat color fills first before adding final details.",
          juniorHint: "Time for festival colors: brilliant peacock blue, sunny yellow, and sweet strawberry red!"
        },
        {
          stepNumber: 8,
          title: "Reinforce Graphic Black Contours",
          instruction: "Retrace all primary boundaries with crisp, confident black brushwork to give the piece its iconic Chitaroli pop.",
          detail: "Retrace all primary boundaries with crisp, confident black brushwork to give the piece its iconic Chitaroli pop.",
          hint: "Continuous, steady strokes create the sharp folk definition.",
          juniorHint: "Trace black outlines like a coloring book to make your painting pop with superpower clarity!"
        }
      ],
      referenceGuideSvgPath: "M140,340 C170,300 200,300 200,340 C200,300 230,300 260,340 M200,310 C170,290 160,240 180,180 C190,140 170,120 180,90 C190,70 210,70 215,85 C220,110 200,140 215,180 C230,220 220,280 200,310 M190,75 L180,45 M197,70 L197,40 M205,73 L215,45 M210,190 C260,160 330,170 340,240 C350,290 280,320 220,300"
    },

    // -------------------------------------------------------------
    // 2. AMRAVATI - KORKU ART
    // -------------------------------------------------------------
    {
      id: "amravati",
      cityName: "Amravati",
      artName: "Korku art",
      tagline: "Sacred Melghat Memorial Totems & Celestial Icons",
      imagePath: "images/amravati.svg",
      placeholderJpgPath: "images/amravati.jpg",
      passportStamp: {
        title: "Melghat Sun Totem",
        motif: "Gomaj Sun & Tribal Warrior",
        icon: "☀️",
        rarity: "Forest Guardian"
      },
      story: {
        title: "Gomaj the Sun God & the Satpura Forest Spirits",
        en: "Deep in the misty teak forests of Melghat, the Korku people revere Gomaj, the Sun God who wakes the tigers and ripens the forest berries. When an ancestor journeyed to the stars, the village elder carved a tall teak post called a 'Munda'. On this sacred pillar, they chiseled Gomaj with sharp triangular rays, a crescent moon, and an hourglass warrior figure standing firm with a protective spear. The Korku believe this carving keeps the spirit safe and wraps the entire forest in warm sunlight and peace.",
        hi: "मेळघाट के घने जंगलों में कोरकू जनजाति सूर्य देवता 'गोमाज' की पूजा करती है जो बाघों को जगाते हैं और महुआ के फलों को पकाते हैं। जब कोई पूर्वज तारों की दुनिया में जाता है, तो सागौन की लकड़ी पर 'मुंडा' स्तंभ बनाया जाता है। इस पर त्रिकोणीय किरणों वाले सूर्य और भाला लिए योद्धा की नक्काशी की जाती है जो जंगल की रक्षा करते हैं।",
        mr: "मेळघाटच्या घनदाट जंगलात कोरकू समाज सूर्यदेव 'गोमाज' ची मनापासून भक्ती करतो. पूर्वजांच्या स्मरणार्थ सागवानाच्या लाकडावर 'मुंडा' नावाचा सुंदर खांब कोरला जातो. त्यावर सूर्य, चंद्र आणि भालाधारी रक्षकाची भौमितिक नक्षी कोरली जाते. ही कला संपूर्ण जंगलाला आणि गावाला सुरक्षित ठेवते."
      },
      shortDescription: "Korku art belongs to the indigenous Korku community residing in the dense Melghat tiger forests of Amravati district. Centered around ancestral memorial pillars called 'Munda', this art pays homage to departed souls, nature spirits, and cosmic guardians. Its signature motifs include the radiant Sun God (Gomaj), the crescent moon, guardian horse riders, and geometric human warriors. Historically carved onto seasoned teakwood with simple chisels and painted with forest soot, river clay, and lime. What makes Korku art distinct is its powerful Austroasiatic geometric abstraction, featuring inverted triangular torsos and rhythmic chisel-like diagonal chevron patterns.",
      palette: [
        { name: "Teak Brown", hex: "#78350F", role: "Wood base & figures" },
        { name: "Melghat Ochre", hex: "#D97706", role: "Sun rays & celestial body" },
        { name: "Forest Ash White", hex: "#FAFAF9", role: "High-contrast markings" },
        { name: "Charcoal Black", hex: "#18181B", role: "Outlines & weapon spears" }
      ],
      traditionalPalette: ["#78350F", "#D97706", "#FAFAF9", "#18181B"],
      progressionStages: [
        {
          stageNumber: 1,
          stageName: "Solar Center & Torso Axis",
          name: "Solar Center & Torso Axis",
          estimatedTime: "2 mins",
          description: "Establish the upper celestial disc for the Sun God (Gomaj) and a vertical guide line for the warrior totem.",
          techniqueTips: "Center the sun disc neatly in the top third.",
          juniorHint: "Draw a big friendly circle at the top like a shining gold coin!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="none" stroke="#D97706" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="200" y1="160" x2="200" y2="350" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 1: Sun Center &amp; Vertical Axis</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="none" stroke="#D97706" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="200" y1="160" x2="200" y2="350" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4"/></svg>`
        },
        {
          stageNumber: 2,
          stageName: "Hourglass Inverted Triangles",
          name: "Hourglass Inverted Triangles",
          estimatedTime: "3 mins",
          description: "Construct the two opposing triangles meeting at the waist vertex—the hallmark Austroasiatic tribal form.",
          techniqueTips: "Ensure the two triangular tips touch cleanly at the waist center.",
          juniorHint: "Draw two triangles touching at the tips like an hourglass!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="2.5"/><polygon points="200,190 160,250 240,250" fill="none" stroke="#78350F" stroke-width="3.5"/><polygon points="200,250 150,330 250,330" fill="none" stroke="#78350F" stroke-width="3.5"/><circle cx="200" cy="175" r="14" fill="none" stroke="#18181B" stroke-width="2"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 2: Tribal Hourglass Torso</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="2.5"/><polygon points="200,190 160,250 240,250" fill="none" stroke="#78350F" stroke-width="3.5"/><polygon points="200,250 150,330 250,330" fill="none" stroke="#78350F" stroke-width="3.5"/><circle cx="200" cy="175" r="14" fill="none" stroke="#18181B" stroke-width="2"/></svg>`
        },
        {
          stageNumber: 3,
          stageName: "Solar Spear Rays & Ancestral Lance",
          name: "Solar Spear Rays & Ancestral Lance",
          estimatedTime: "3 mins",
          description: "Radiate sharp triangular rays around the sun and position the guardian's protective lance staff.",
          techniqueTips: "Draw the spear straight and anchored firmly into the ground.",
          juniorHint: "Add pointing sun rays and a tall warrior spear standing tall beside him!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="2.5"/><path d="M200,60 L200,45 M200,160 L200,175 M150,110 L135,110 M250,110 L265,110 M165,75 L155,65 M235,145 L245,155 M165,145 L155,155 M235,75 L245,65" stroke="#18181B" stroke-width="3" stroke-linecap="round"/><polygon points="200,190 160,250 240,250" fill="#78350F" stroke="#18181B" stroke-width="3"/><polygon points="200,250 150,330 250,330" fill="#78350F" stroke="#18181B" stroke-width="3"/><circle cx="200" cy="175" r="14" fill="#FAFAF9" stroke="#18181B" stroke-width="2"/><line x1="140" y1="180" x2="140" y2="350" stroke="#18181B" stroke-width="3"/><polygon points="140,165 130,185 150,185" fill="#18181B"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 3: Solar Rays &amp; Warrior Spear</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="2.5"/><path d="M200,60 L200,45 M200,160 L200,175 M150,110 L135,110 M250,110 L265,110 M165,75 L155,65 M235,145 L245,155 M165,145 L155,155 M235,75 L245,65" stroke="#18181B" stroke-width="3" stroke-linecap="round"/><polygon points="200,190 160,250 240,250" fill="#78350F" stroke="#18181B" stroke-width="3"/><polygon points="200,250 150,330 250,330" fill="#78350F" stroke="#18181B" stroke-width="3"/><circle cx="200" cy="175" r="14" fill="#FAFAF9" stroke="#18181B" stroke-width="2"/><line x1="140" y1="180" x2="140" y2="350" stroke="#18181B" stroke-width="3"/><polygon points="140,165 130,185 150,185" fill="#18181B"/></svg>`
        },
        {
          stageNumber: 4,
          stageName: "Chisel Hatches & Tribal Chevrons",
          name: "Chisel Hatches & Tribal Chevrons",
          estimatedTime: "3 mins",
          description: "Etch crisp parallel diagonal notches across the warrior's torso resembling wood adze carvings.",
          techniqueTips: "Use 45-degree diagonal lines to imitate teakwood carvings.",
          juniorHint: "Use the Hatch tool to carve wooden scratch marks inside his body!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="2.5"/><path d="M200,60 L200,45 M200,160 L200,175 M150,110 L135,110 M250,110 L265,110 M165,75 L155,65 M235,145 L245,155" stroke="#18181B" stroke-width="3"/><polygon points="200,190 160,250 240,250" fill="#78350F" stroke="#18181B" stroke-width="3"/><polygon points="200,250 150,330 250,330" fill="#78350F" stroke="#18181B" stroke-width="3"/><line x1="175" y1="230" x2="225" y2="230" stroke="#FAFAF9" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="170" y1="290" x2="230" y2="290" stroke="#FAFAF9" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="140" y1="180" x2="140" y2="350" stroke="#18181B" stroke-width="3"/><polygon points="140,165 130,185 150,185" fill="#18181B"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 4: Chisel Hatching &amp; Wood Grooves</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="2.5"/><path d="M200,60 L200,45 M200,160 L200,175 M150,110 L135,110 M250,110 L265,110 M165,75 L155,65 M235,145 L245,155" stroke="#18181B" stroke-width="3"/><polygon points="200,190 160,250 240,250" fill="#78350F" stroke="#18181B" stroke-width="3"/><polygon points="200,250 150,330 250,330" fill="#78350F" stroke="#18181B" stroke-width="3"/><line x1="175" y1="230" x2="225" y2="230" stroke="#FAFAF9" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="170" y1="290" x2="230" y2="290" stroke="#FAFAF9" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="140" y1="180" x2="140" y2="350" stroke="#18181B" stroke-width="3"/><polygon points="140,165 130,185 150,185" fill="#18181B"/></svg>`
        },
        {
          stageNumber: 5,
          stageName: "Whitewash Contrast & Finished Totem",
          name: "Whitewash Contrast & Finished Totem",
          estimatedTime: "3 mins",
          description: "Finalize with bright white highlights against dark charred teakwood for a bold, striking totemic presence.",
          techniqueTips: "High contrast between chalk white and teak brown gives the totem its sacred power.",
          juniorHint: "Dab chalk white dots to make your guardian glow like stars in the Melghat night!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="3"/><path d="M200,60 L200,45 M200,160 L200,175 M150,110 L135,110 M250,110 L265,110 M165,75 L155,65 M235,145 L245,155 M165,145 L155,155 M235,75 L245,65" stroke="#18181B" stroke-width="3" stroke-linecap="round"/><polygon points="200,190 160,250 240,250" fill="#78350F" stroke="#18181B" stroke-width="3"/><polygon points="200,250 150,330 250,330" fill="#78350F" stroke="#18181B" stroke-width="3"/><circle cx="200" cy="175" r="14" fill="#FAFAF9" stroke="#18181B" stroke-width="2"/><line x1="140" y1="180" x2="140" y2="350" stroke="#18181B" stroke-width="3"/><polygon points="140,165 130,185 150,185" fill="#18181B"/><circle cx="200" cy="175" r="3" fill="#18181B"/><line x1="175" y1="230" x2="225" y2="230" stroke="#FAFAF9" stroke-width="2.5"/><line x1="170" y1="290" x2="230" y2="290" stroke="#FAFAF9" stroke-width="2.5"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 5: Master Melghat Totem</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="110" r="35" fill="#D97706" stroke="#18181B" stroke-width="3"/><path d="M200,60 L200,45 M200,160 L200,175 M150,110 L135,110 M250,110 L265,110 M165,75 L155,65 M235,145 L245,155 M165,145 L155,155 M235,75 L245,65" stroke="#18181B" stroke-width="3" stroke-linecap="round"/><polygon points="200,190 160,250 240,250" fill="#78350F" stroke="#18181B" stroke-width="3"/><polygon points="200,250 150,330 250,330" fill="#78350F" stroke="#18181B" stroke-width="3"/><circle cx="200" cy="175" r="14" fill="#FAFAF9" stroke="#18181B" stroke-width="2"/><line x1="140" y1="180" x2="140" y2="350" stroke="#18181B" stroke-width="3"/><polygon points="140,165 130,185 150,185" fill="#18181B"/><circle cx="200" cy="175" r="3" fill="#18181B"/><line x1="175" y1="230" x2="225" y2="230" stroke="#FAFAF9" stroke-width="2.5"/><line x1="170" y1="290" x2="230" y2="290" stroke="#FAFAF9" stroke-width="2.5"/></svg>`
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: "Select Wood Tone Ground",
          instruction: "Establish an earthy weathered wood background representing sacred Satpura forest teak.",
          detail: "Establish an earthy weathered wood background representing sacred Satpura forest teak.",
          hint: "A deep warm brown base mimics the aged teakwood grain of traditional Munda totems.",
          juniorHint: "Paint a warm chocolate brown background like a giant tree trunk!"
        },
        {
          stepNumber: 2,
          title: "Construct the Sacred Sun God (Gomaj)",
          instruction: "Draw a prominent circular disc in the upper sky portion of the canvas.",
          detail: "Draw a prominent circular disc in the upper sky portion of the canvas.",
          hint: "Ensure the circle is well centered near the top third.",
          juniorHint: "Draw a nice bright round sun right at the top!"
        },
        {
          stepNumber: 3,
          title: "Radiate Solar Spear Rays",
          instruction: "Draw triangular and straight radiating rays extending outward from the sun disk in balanced compass directions.",
          detail: "Draw triangular and straight radiating rays extending outward from the sun disk in balanced compass directions.",
          hint: "In Korku cosmology, the sun's rays protect the spirit from all directions.",
          juniorHint: "Add pointing sun rays shooting out in all 8 directions like a star!"
        },
        {
          stepNumber: 4,
          title: "Build the Upper Inverted Triangle",
          instruction: "Below the sun, draw an upside-down triangle that represents the broad chest and shoulders of the warrior guardian.",
          detail: "Below the sun, draw an upside-down triangle that represents the broad chest and shoulders of the warrior guardian.",
          hint: "Keep the bottom vertex tapering sharply toward the waist.",
          juniorHint: "Draw an upside-down triangle like a slice of pizza pointing down!"
        },
        {
          stepNumber: 5,
          title: "Connect the Lower Base Triangle",
          instruction: "Attach an upright triangle meeting at the waist vertex, completing the iconic hourglass tribal torso.",
          detail: "Attach an upright triangle meeting at the waist vertex, completing the iconic hourglass tribal torso.",
          hint: "The two opposing triangles must touch cleanly at the center point.",
          juniorHint: "Connect an upright triangle right underneath to make an hourglass shape!"
        },
        {
          stepNumber: 6,
          title: "Add Guardian Head and Ancestral Spear",
          instruction: "Place a round head above the shoulders and draw a vertical straight staff or spear held firmly along the side.",
          detail: "Place a round head above the shoulders and draw a vertical straight staff or spear held firmly along the side.",
          hint: "The warrior holds a long protective lance anchored into the ground.",
          juniorHint: "Add a brave round head and a tall walking spear along his side!"
        },
        {
          stepNumber: 7,
          title: "Etch Chisel Chevron Hatches",
          instruction: "Use the hatching tool to inscribe parallel diagonal grooves inside the triangular bodies.",
          detail: "Use the hatching tool to inscribe parallel diagonal grooves inside the triangular bodies.",
          hint: "These diagonal lines replicate traditional adze chisel notches on wood.",
          juniorHint: "Use the Hatch tool to carve wooden scratch marks inside the body!"
        },
        {
          stepNumber: 8,
          title: "Finalize High-Contrast Whitewash Highlights",
          instruction: "Highlight the eyes, sun perimeter, and warrior belt with chalk white against the dark charcoal contours.",
          detail: "Highlight the eyes, sun perimeter, and warrior belt with chalk white against the dark charcoal contours.",
          hint: "High contrast between chalk white and dark wood makes the totem visually striking.",
          juniorHint: "Dab chalk white dots to make the totem glow in the forest moonlight!"
        }
      ],
      referenceGuideSvgPath: "M200,110 m-35,0 a35,35 0 1,0 70,0 a35,35 0 1,0 -70,0 M200,60 L200,45 M200,160 L200,175 M150,110 L135,110 M250,110 L265,110 M200,190 L160,250 L240,250 Z M200,250 L150,330 L250,330 Z M200,175 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0 M140,165 L140,350"
    },

    // -------------------------------------------------------------
    // 3. AKOLA - TERRACOTTA ART
    // -------------------------------------------------------------
    {
      id: "akola",
      cityName: "Akola",
      artName: "Terracotta art",
      tagline: "Varhad Agrarian Clay Votives & Bail Pola Horn Murals",
      imagePath: "images/akola.svg",
      placeholderJpgPath: "images/akola.jpg",
      passportStamp: {
        title: "Pola Sacred Bull Seal",
        motif: "Sarja-Raja Curved Horns",
        icon: "🐂",
        rarity: "Agrarian Honor"
      },
      story: {
        title: "Sarja and Raja: The Honored Bullocks of Bail Pola",
        en: "In the black-soil farming heartland of Akola, farmers celebrate 'Bail Pola' with boundless gratitude. For a whole year, the faithful bullocks plow fields and carry harvests. On this festive day, the bullocks do no work! They are bathed in the river, massaged with warm turmeric, and their majestic horns are painted with spiraling candy ribbons of crimson and gold. Women tie a glittering wedding crown ('Bashinga') on their foreheads and hang ringing brass bells around their necks. Terracotta clay masks of Sarja and Raja are kept in courtyards as symbols of friendship between humans and animals.",
        hi: "अकोला की उपजाऊ भूमि में किसान 'बैल पोळा' का पावन पर्व मनाते हैं। साल भर मेहनत करने वाले बैलों 'सर्जा और राजा' को इस दिन काम से छुट्टी मिलती है। उन्हें नदी में नहलाकर हल्दी लगाई जाती है और उनके भव्य सींगों पर लाल-पीले रंग की सर्पिलाकार पट्टियां बनाई जाती हैं। माथे पर बाशिंग बांधकर उनका सम्मान किया जाता है।",
        mr: "अकोल्याच्या काळ्या मातीतला पोळा हा सण शेतकरी आणि बैलांच्या अतूट नात्याचा उत्सव आहे. वर्षभर शेतात राबणाऱ्या सर्जा-राजाला या दिवशी मानाने सजवले जाते. त्यांच्या लांब शिंगांवर रंगीबेरंगी पट्टे काढले जातात, कपाळावर बाशिंग आणि गळ्यात घुंगरांच्या माळा बांधल्या जातात."
      },
      shortDescription: "Akola lies in the fertile agrarian heartland of the Varhad region, famed for its ancient terracotta votives and festive agricultural art. Rooted in the Kumbhar pottery tradition, local artisans shape rich river silt into sacred masks, village guardian deities, and ornate Bail Pola bull figurines. The art prominently celebrates 'Sarja-Raja'—the farmer's revered pair of bullocks decorated with spiraling horn paintings, bell garlands, and threshold Mandana floor graphics. Pigments are harvested directly from nature: red geru clay, limestone paste, powdered turmeric, and soot. What makes Akola terracotta unique is its bold muscular silhouettes, spiraling festive horn ribbons, and deep connection to agrarian thanksgiving.",
      palette: [
        { name: "Fired Terracotta", hex: "#9A3412", role: "Core earthenware body" },
        { name: "Haldi Ochre", hex: "#F59E0B", role: "Horn ribbons & festive crown" },
        { name: "Geru Red", hex: "#B91C1C", role: "Spiraling horn stripes" },
        { name: "Chuna Chalk", hex: "#FFFFFF", role: "Sacred white body & bells" },
        { name: "Indigo Blue", hex: "#1D4ED8", role: "Decorative contrast bands" }
      ],
      traditionalPalette: ["#9A3412", "#F59E0B", "#B91C1C", "#FFFFFF", "#1D4ED8"],
      progressionStages: [
        {
          stageNumber: 1,
          stageName: "Oval Muzzle & Horn Arches",
          name: "Oval Muzzle & Horn Arches",
          estimatedTime: "2-3 mins",
          description: "Establish the centered facial oval and the high crescent arches of the twin horns.",
          techniqueTips: "Keep the horns towering tall—Akola Pola horns sweep proudly into the sky.",
          juniorHint: "Draw a tall egg oval and two big banana curves reaching up!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4"/><path d="M170,180 C140,110 110,60 90,30 M230,180 C260,110 290,60 310,30" stroke="#F59E0B" stroke-width="3" fill="none" stroke-dasharray="6,4"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 1: Face Oval &amp; Sweeping Horn Arches</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4,4"/><path d="M170,180 C140,110 110,60 90,30 M230,180 C260,110 290,60 310,30" stroke="#F59E0B" stroke-width="3" fill="none" stroke-dasharray="6,4"/></svg>`
        },
        {
          stageNumber: 2,
          stageName: "Muscular Shoulder Hump (Khandha)",
          name: "Muscular Shoulder Hump (Khandha)",
          estimatedTime: "3 mins",
          description: "Outline the muscular neck arch and broad forehead shape.",
          techniqueTips: "Draw the shoulder hump with a rounded muscular arch.",
          juniorHint: "Add a soft strong bump over his shoulder like a friendly hill!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="2.5"/><path d="M150,290 C120,260 110,210 130,180" fill="none" stroke="#9A3412" stroke-width="3"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="none" stroke="#B91C1C" stroke-width="3"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="none" stroke="#1D4ED8" stroke-width="3"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 2: Muscular Hump &amp; Horn Shapes</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="2.5"/><path d="M150,290 C120,260 110,210 130,180" fill="none" stroke="#9A3412" stroke-width="3"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="none" stroke="#B91C1C" stroke-width="3"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="none" stroke="#1D4ED8" stroke-width="3"/></svg>`
        },
        {
          stageNumber: 3,
          stageName: "Spiral Festive Ribbons",
          name: "Spiral Festive Ribbons",
          estimatedTime: "3 mins",
          description: "Paint alternating diagonal bands along the horns in festive red, yellow, and blue.",
          techniqueTips: "Angle the diagonal stripes uniformly down each horn.",
          juniorHint: "Paint candy-cane stripes all over his horns with bright festive colors!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="2.5"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="#B91C1C" stroke="#111827" stroke-width="2.5"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="#1D4ED8" stroke="#111827" stroke-width="2.5"/><path d="M140,95 L160,105 M120,65 L140,75" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/><path d="M260,95 L240,105 M280,65 L260,75" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/><polygon points="200,165 175,200 225,200" fill="#F59E0B" stroke="#B91C1C" stroke-width="2"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 3: Spiral Horn Ribbons</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="2.5"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="#B91C1C" stroke="#111827" stroke-width="2.5"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="#1D4ED8" stroke="#111827" stroke-width="2.5"/><path d="M140,95 L160,105 M120,65 L140,75" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/><path d="M260,95 L240,105 M280,65 L260,75" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/><polygon points="200,165 175,200 225,200" fill="#F59E0B" stroke="#B91C1C" stroke-width="2"/></svg>`
        },
        {
          stageNumber: 4,
          stageName: "Bashinga Crown & Bell Garlands",
          name: "Bashinga Crown & Bell Garlands",
          estimatedTime: "3-4 mins",
          description: "Drape ringing brass bells around the throat and complete the decorative forehead crown.",
          techniqueTips: "Add round brass bell circles hanging loosely around the neck.",
          juniorHint: "Draw gentle smiling eyes and a jingle-bell necklace!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="3"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="#B91C1C" stroke="#111827" stroke-width="3"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="#1D4ED8" stroke="#111827" stroke-width="3"/><polygon points="200,165 175,200 225,200" fill="#F59E0B" stroke="#B91C1C" stroke-width="2"/><ellipse cx="200" cy="285" rx="25" ry="18" fill="#FEE2E2" stroke="#111827" stroke-width="2"/><circle cx="180" cy="225" r="5" fill="#111827"/><circle cx="220" cy="225" r="5" fill="#111827"/><path d="M160,300 C180,325 220,325 240,300" stroke="#F59E0B" stroke-width="4" fill="none"/><circle cx="180" cy="315" r="4" fill="#F59E0B"/><circle cx="200" cy="320" r="4" fill="#F59E0B"/><circle cx="220" cy="315" r="4" fill="#F59E0B"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 4: Crown &amp; Jingle Bells</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="3"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="#B91C1C" stroke="#111827" stroke-width="3"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="#1D4ED8" stroke="#111827" stroke-width="3"/><polygon points="200,165 175,200 225,200" fill="#F59E0B" stroke="#B91C1C" stroke-width="2"/><ellipse cx="200" cy="285" rx="25" ry="18" fill="#FEE2E2" stroke="#111827" stroke-width="2"/><circle cx="180" cy="225" r="5" fill="#111827"/><circle cx="220" cy="225" r="5" fill="#111827"/><path d="M160,300 C180,325 220,325 240,300" stroke="#F59E0B" stroke-width="4" fill="none"/><circle cx="180" cy="315" r="4" fill="#F59E0B"/><circle cx="200" cy="320" r="4" fill="#F59E0B"/><circle cx="220" cy="315" r="4" fill="#F59E0B"/></svg>`
        },
        {
          stageNumber: 5,
          stageName: "Terracotta Clay Wash & Final Masterpiece",
          name: "Terracotta Clay Wash & Final Masterpiece",
          estimatedTime: "3 mins",
          description: "Contrast the baked red terracotta soil with gleaming white and festive golden horns.",
          techniqueTips: "Retrace all outlines in clean charcoal black to complete the ceramic relief look.",
          juniorHint: "Trace everything clean so Sarja-Raja is ready to celebrate Pola!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M150,290 C120,260 110,210 130,180 C140,210 155,250 160,280" fill="#F59E0B" stroke="#111827" stroke-width="3"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="#B91C1C" stroke="#111827" stroke-width="3"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="#1D4ED8" stroke="#111827" stroke-width="3"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="3"/><polygon points="200,165 175,200 225,200" fill="#F59E0B" stroke="#B91C1C" stroke-width="2"/><ellipse cx="200" cy="285" rx="25" ry="18" fill="#FEE2E2" stroke="#111827" stroke-width="2"/><circle cx="180" cy="225" r="6" fill="#111827"/><circle cx="220" cy="225" r="6" fill="#111827"/><circle cx="190" cy="285" r="3" fill="#111827"/><circle cx="210" cy="285" r="3" fill="#111827"/><path d="M160,300 C180,325 220,325 240,300" stroke="#F59E0B" stroke-width="4" fill="none"/><circle cx="180" cy="315" r="4" fill="#F59E0B"/><circle cx="200" cy="320" r="4" fill="#F59E0B"/><circle cx="220" cy="315" r="4" fill="#F59E0B"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 5: Master Terracotta Bull</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M150,290 C120,260 110,210 130,180 C140,210 155,250 160,280" fill="#F59E0B" stroke="#111827" stroke-width="3"/><path d="M170,180 C140,110 110,60 90,30 C120,40 160,110 180,170" fill="#B91C1C" stroke="#111827" stroke-width="3"/><path d="M230,180 C260,110 290,60 310,30 C280,40 240,110 220,170" fill="#1D4ED8" stroke="#111827" stroke-width="3"/><ellipse cx="200" cy="240" rx="45" ry="65" fill="#FFFFFF" stroke="#111827" stroke-width="3"/><polygon points="200,165 175,200 225,200" fill="#F59E0B" stroke="#B91C1C" stroke-width="2"/><ellipse cx="200" cy="285" rx="25" ry="18" fill="#FEE2E2" stroke="#111827" stroke-width="2"/><circle cx="180" cy="225" r="6" fill="#111827"/><circle cx="220" cy="225" r="6" fill="#111827"/><circle cx="190" cy="285" r="3" fill="#111827"/><circle cx="210" cy="285" r="3" fill="#111827"/><path d="M160,300 C180,325 220,325 240,300" stroke="#F59E0B" stroke-width="4" fill="none"/><circle cx="180" cy="315" r="4" fill="#F59E0B"/><circle cx="200" cy="320" r="4" fill="#F59E0B"/><circle cx="220" cy="315" r="4" fill="#F59E0B"/></svg>`
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: "Prepare Terracotta Silt Base",
          instruction: "Begin with a rich burnt-orange terracotta background representing the sun-baked clay of Akola pottery kilns.",
          detail: "Begin with a rich burnt-orange terracotta background representing the sun-baked clay of Akola pottery kilns.",
          hint: "The warm earthen foundation gives depth to all subsequent chalk and pigment lines.",
          juniorHint: "Start with warm baked red cookie-dough color for our base!"
        },
        {
          stepNumber: 2,
          title: "Shape the Regal Bullock Face",
          instruction: "Draw an upright oval in the center canvas for the head, with a gentle tapering curve toward the muzzle.",
          detail: "Draw an upright oval in the center canvas for the head, with a gentle tapering curve toward the muzzle.",
          hint: "Keep the facial proportion tall and stately.",
          juniorHint: "Draw a big friendly egg shape standing tall in the center!"
        },
        {
          stepNumber: 3,
          title: "Draw Sweeping Horn Curves",
          instruction: "Extend two magnificent, towering horn arches curling gracefully upward and outward like twin crescents.",
          detail: "Extend two magnificent, towering horn arches curling gracefully upward and outward like twin crescents.",
          hint: "In Vidarbha Pola tradition, tall sweeping horns symbolize strength and dignity.",
          juniorHint: "Draw two giant banana curves reaching for the sky!"
        },
        {
          stepNumber: 4,
          title: "Add the Powerful Shoulder Hump (Khandha)",
          instruction: "Sketch the muscular rounded hump along the neck line, showing the bullock's agrarian vitality.",
          detail: "Sketch the muscular rounded hump along the neck line, showing the bullock's agrarian vitality.",
          hint: "A smooth rounded curve over the shoulder establishes authentic anatomy.",
          juniorHint: "Add a soft strong bump over the shoulder like a friendly hill!"
        },
        {
          stepNumber: 5,
          title: "Draw Forehead Bashinga (Crown)",
          instruction: "Sketch a triangular ornamental forehead crown between the horn bases, adorned with geometric mirrors.",
          detail: "Sketch a triangular ornamental forehead crown between the horn bases, adorned with geometric mirrors.",
          hint: "Bashinga is the sacred wedding-style diadem tied on bullocks during the Pola festival.",
          juniorHint: "Draw a sparkling party crown right between his horns!"
        },
        {
          stepNumber: 6,
          title: "Paint Spiral Horn Ribbons",
          instruction: "Draw alternating diagonal ribbons across both horns in festive yellow, red, and blue stripes.",
          detail: "Paint alternating diagonal ribbons across both horns in festive yellow, red, and blue stripes.",
          hint: "Vary the colors along the spiral to make the horns pop vibrantly.",
          juniorHint: "Paint candy-cane stripes all over his horns with bright yellow, red, and blue!"
        },
        {
          stepNumber: 7,
          title: "Add Bell Garlands and Eyes",
          instruction: "Draw a curved necklace around the throat dotted with round brass bells, and detail the serene expressive eyes.",
          detail: "Draw a curved necklace around the throat dotted with round brass bells, and detail the serene expressive eyes.",
          hint: "Drape the garland loosely so it follows the curve of the chest.",
          juniorHint: "Draw gentle smiling eyes and a jingle-bell necklace!"
        },
        {
          stepNumber: 8,
          title: "Outline with Bold Terracotta Accents",
          instruction: "Finalize all boundaries with deep terracotta and dark charcoal lines to complete the festive votive look.",
          detail: "Finalize all boundaries with deep terracotta and dark charcoal lines to complete the festive votive look.",
          hint: "Clean outline separation enhances the handcrafted ceramic look.",
          juniorHint: "Trace everything with dark lines so our terracotta hero is ready to celebrate Pola!"
        }
      ],
      referenceGuideSvgPath: "M170,180 C140,110 110,60 90,30 M230,180 C260,110 290,60 310,30 M200,240 m-45,0 a45,65 0 1,0 90,0 a45,65 0 1,0 -90,0 M200,165 L175,200 L225,200 Z M150,290 C120,260 110,210 130,180 M200,285 m-25,0 a25,18 0 1,0 50,0 a25,18 0 1,0 -50,0"
    },

    // -------------------------------------------------------------
    // 4. CHANDRAPUR - GOND ART
    // -------------------------------------------------------------
    {
      id: "chandrapur",
      cityName: "Chandrapur",
      artName: "Gond art",
      tagline: "Sacred Forest Tree of Life & Rhythmic Dot Textures",
      imagePath: "images/chandrapur.svg",
      placeholderJpgPath: "images/chandrapur.jpg",
      passportStamp: {
        title: "Tree of Life Seal",
        motif: "Sacred Mahua & Forest Deer",
        icon: "🌳",
        rarity: "Sacred Earth"
      },
      story: {
        title: "The Singing Trees and Sacred Deer of Tadoba",
        en: "The Pardhan Gond people of Chandrapur believe that everything in nature has a living soul. In their folklore, the great Mahua tree sings lullabies to the deer when night falls. Every Gond painting begins with a single dot called the 'Bindu'—the seed of the universe. When artists paint dots and concentric dashes across trees and animals, they are weaving the song of the forest onto paper. They believe seeing an auspicious animal brings good luck to everyone in the home.",
        hi: "चंद्रपुर के परधान गोंड समुदाय का मानना है कि प्रकृति के हर कण में एक प्राण है। महुआ का विशाल वृक्ष रात को हिरणों के लिए लोरी गाता है। गोंड कला में हर चित्र एक 'बिंदु' से शुरू होता है। जब कलाकार रेखाओं और बिंदियों का ताना-बाना बुनते हैं, तो वे असल में प्रकृति के संगीत को चित्र में ढाल रहे होते हैं।",
        mr: "चंद्रपूरच्या गोंड परंपरेत निसर्गाला साक्षात देव मानले जाते. जंगलातील महुआचे झाड आणि हरीण यांच्यातील स्नेह गोंड चित्रांमध्ये अमर आहे. एका लहान 'बिंदू' मधून संपूर्ण विश्वाची निर्मिती होते, असा गोंड चित्रकारांचा विश्वास आहे. म्हणूनच बिंदू आणि रेषांनी नटलेली गोंड कला घरामध्ये सुख-शांती आणते."
      },
      shortDescription: "Chandrapur, blessed with the ancient forests of Tadoba and the Wainganga river, is a world-celebrated cradle of Gond art. Created by the Pardhan Gond tribal community, this style is founded on the spiritual belief that viewing beautiful sacred motifs brings good fortune. Paintings depict the cosmic Tree of Life, graceful dancing deer, flying peacock spirits, and forest tigers. Historically painted on mud and cow dung hut walls using red soil (geru), yellow clay (ramraj), crushed leaves, and soot. What makes Gond art unmistakable is its hypnotic signature texture: repetitive equidistant dots, fine dashed scales, and undulating contour lines that give life to every creature.",
      palette: [
        { name: "Geru Red", hex: "#B83A24", role: "Sacred tree trunk & deer" },
        { name: "Haldi Ochre", hex: "#E5A93B", role: "Main animal silhouette & foliage" },
        { name: "Forest Green", hex: "#2E5D34", role: "Mahua leaves & sprouts" },
        { name: "Kajal Black", hex: "#1C1917", role: "Signature dots & outlines" },
        { name: "Khadiya White", hex: "#F3ECE1", role: "Background & highlight dots" },
        { name: "Deep Indigo", hex: "#1E3A8A", role: "Spirit bird feathers" }
      ],
      traditionalPalette: ["#B83A24", "#E5A93B", "#2E5D34", "#1C1917", "#F3ECE1", "#1E3A8A"],
      progressionStages: [
        {
          stageNumber: 1,
          stageName: "Organic Trunk & Deer Stance",
          name: "Organic Trunk & Deer Stance",
          estimatedTime: "2-3 mins",
          description: "Establish the undulating tree trunk curve and the fluid arched neck of the deer.",
          techniqueTips: "Avoid stiff straight lines; let the trunk curve like flowing river water.",
          juniorHint: "Draw a dancing tree trunk that curves like a gentle river!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/><path d="M220,360 C230,280 280,240 310,210" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 1: Fluid Tree &amp; Deer Flow</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/><path d="M220,360 C230,280 280,240 310,210" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/></svg>`
        },
        {
          stageNumber: 2,
          stageName: "Branching Foliage & Fluid Silhouettes",
          name: "Branching Foliage & Fluid Silhouettes",
          estimatedTime: "3 mins",
          description: "Branch the sacred Mahua tree outward and connect the graceful deer torso with branching antlers.",
          techniqueTips: "In Gond art, deer antlers and tree branches organically mimic each other.",
          juniorHint: "Give the deer branching antlers that look just like happy tree twigs!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30 C200,60 170,90 150,80 C130,70 140,30 110,40 C100,70 80,100 50,110 C80,130 90,160 80,190 C120,180 140,210 140,370 Z" fill="none" stroke="#E5A93B" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180 C240,210 210,250 200,360 Z" fill="none" stroke="#B83A24" stroke-width="3"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 2: Tree Branches &amp; Deer Antlers</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30 C200,60 170,90 150,80 C130,70 140,30 110,40 C100,70 80,100 50,110 C80,130 90,160 80,190 C120,180 140,210 140,370 Z" fill="none" stroke="#E5A93B" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180 C240,210 210,250 200,360 Z" fill="none" stroke="#B83A24" stroke-width="3"/></svg>`
        },
        {
          stageNumber: 3,
          stageName: "Internal Contour Channels",
          name: "Internal Contour Channels",
          estimatedTime: "3 mins",
          description: "Subdivide the deer flanks and tree limbs into smooth channels where texture will be placed.",
          techniqueTips: "Draw gentle internal waves that guide your dot placement.",
          juniorHint: "Draw gentle paths inside his body like garden pathways!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30" fill="none" stroke="#E5A93B" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180" fill="none" stroke="#B83A24" stroke-width="3"/><path d="M250,220 C270,250 260,280 230,310" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/><path d="M280,210 C300,240 290,270 250,300" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 3: Internal Flow Channels</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30" fill="none" stroke="#E5A93B" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180" fill="none" stroke="#B83A24" stroke-width="3"/><path d="M250,220 C270,250 260,280 230,310" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/><path d="M280,210 C300,240 290,270 250,300" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/></svg>`
        },
        {
          stageNumber: 4,
          stageName: "Signature Gond Dots (Bindus)",
          name: "Signature Gond Dots (Bindus)",
          estimatedTime: "4 mins",
          description: "Stamp rhythmic, concentric rows of dots along the internal channels—the soul of Gond art.",
          techniqueTips: "Keep dots equidistant and follow the contours rhythmically.",
          juniorHint: "Tap tap tap! Stamp little dot footprints along every path!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30" fill="none" stroke="#E5A93B" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180" fill="none" stroke="#B83A24" stroke-width="3"/><circle cx="170" cy="180" r="4" fill="#1C1917"/><circle cx="185" cy="180" r="4" fill="#1C1917"/><circle cx="178" cy="195" r="4" fill="#1C1917"/><circle cx="165" cy="210" r="4" fill="#1C1917"/><circle cx="180" cy="210" r="4" fill="#1C1917"/><circle cx="270" cy="230" r="3.5" fill="#1C1917"/><circle cx="285" cy="230" r="3.5" fill="#1C1917"/><circle cx="260" cy="250" r="3.5" fill="#1C1917"/><circle cx="275" cy="250" r="3.5" fill="#1C1917"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 4: Signature Gond Dots</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30" fill="none" stroke="#E5A93B" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180" fill="none" stroke="#B83A24" stroke-width="3"/><circle cx="170" cy="180" r="4" fill="#1C1917"/><circle cx="185" cy="180" r="4" fill="#1C1917"/><circle cx="178" cy="195" r="4" fill="#1C1917"/><circle cx="165" cy="210" r="4" fill="#1C1917"/><circle cx="180" cy="210" r="4" fill="#1C1917"/><circle cx="270" cy="230" r="3.5" fill="#1C1917"/><circle cx="285" cy="230" r="3.5" fill="#1C1917"/><circle cx="260" cy="250" r="3.5" fill="#1C1917"/><circle cx="275" cy="250" r="3.5" fill="#1C1917"/></svg>`
        },
        {
          stageNumber: 5,
          stageName: "Earthen Tone Infill & Masterpiece",
          name: "Earthen Tone Infill & Masterpiece",
          estimatedTime: "4 mins",
          description: "Infuse with warm ochre yellow, deep terracotta red, and crisp black ink outlines.",
          techniqueTips: "Sharp outer black boundaries make the inner dot tapestry sing.",
          juniorHint: "Fill with bright forest yellow and red, then outline with clean ink!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30 C200,60 170,90 150,80 C130,70 140,30 110,40 C100,70 80,100 50,110 C80,130 90,160 80,190 C120,180 140,210 140,370 Z" fill="#E5A93B" stroke="#1C1917" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180 C240,210 210,250 200,360 Z" fill="#B83A24" stroke="#1C1917" stroke-width="3"/><circle cx="170" cy="180" r="4" fill="#1C1917"/><circle cx="185" cy="180" r="4" fill="#1C1917"/><circle cx="178" cy="195" r="4" fill="#1C1917"/><circle cx="165" cy="210" r="4" fill="#1C1917"/><circle cx="180" cy="210" r="4" fill="#1C1917"/><circle cx="270" cy="230" r="3.5" fill="#FAF7F2"/><circle cx="285" cy="230" r="3.5" fill="#FAF7F2"/><circle cx="260" cy="250" r="3.5" fill="#FAF7F2"/><circle cx="275" cy="250" r="3.5" fill="#FAF7F2"/><path d="M310,135 C320,100 350,90 360,70 M335,95 C350,90 370,110 380,100" stroke="#1C1917" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="328" cy="140" r="3" fill="#FAF7F2"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 5: Master Gond Tree &amp; Deer</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30 C200,60 170,90 150,80 C130,70 140,30 110,40 C100,70 80,100 50,110 C80,130 90,160 80,190 C120,180 140,210 140,370 Z" fill="#E5A93B" stroke="#1C1917" stroke-width="3"/><path d="M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 C300,120 280,150 260,180 C240,210 210,250 200,360 Z" fill="#B83A24" stroke="#1C1917" stroke-width="3"/><circle cx="170" cy="180" r="4" fill="#1C1917"/><circle cx="185" cy="180" r="4" fill="#1C1917"/><circle cx="178" cy="195" r="4" fill="#1C1917"/><circle cx="165" cy="210" r="4" fill="#1C1917"/><circle cx="180" cy="210" r="4" fill="#1C1917"/><circle cx="270" cy="230" r="3.5" fill="#FAF7F2"/><circle cx="285" cy="230" r="3.5" fill="#FAF7F2"/><circle cx="260" cy="250" r="3.5" fill="#FAF7F2"/><circle cx="275" cy="250" r="3.5" fill="#FAF7F2"/><path d="M310,135 C320,100 350,90 360,70 M335,95 C350,90 370,110 380,100" stroke="#1C1917" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="328" cy="140" r="3" fill="#FAF7F2"/></svg>`
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: "Set Natural Handmade Clay Ground",
          instruction: "Select a soft warm parchment hue imitating traditional cow-dung and clay washed village walls.",
          detail: "Select a soft warm parchment hue imitating traditional cow-dung and clay washed village walls.",
          hint: "The warm background gives natural warmth to Gond earth pigments.",
          juniorHint: "Let's choose a cozy warm clay color like a village forest hut wall!"
        },
        {
          stepNumber: 2,
          title: "Draw the Curved Tree of Life Trunk",
          instruction: "Sketch a wide, gently curving tree trunk flowing upward from the lower center, branching into organic arms.",
          detail: "Sketch a wide, gently curving tree trunk flowing upward from the lower center, branching into organic arms.",
          hint: "Gond trees are never rigid; let the branches curl like water currents.",
          juniorHint: "Draw a dancing tree trunk that curves like a gentle river!"
        },
        {
          stepNumber: 3,
          title: "Outline the Graceful Forest Deer",
          instruction: "Beside the tree, draw the fluid silhouette of the deer with an elongated arched neck and curving back.",
          detail: "Beside the tree, draw the fluid silhouette of the deer with an elongated arched neck and curving back.",
          hint: "Avoid straight lines; capture the rhythmic, organic flow of the animal's movement.",
          juniorHint: "Draw a friendly deer reaching for sweet forest leaves!"
        },
        {
          stepNumber: 4,
          title: "Draw Branching Antlers and Tail",
          instruction: "Add delicate branching antlers like tree twigs above the deer's head, and a soft curving tail.",
          detail: "Add delicate branching antlers like tree twigs above the deer's head, and a soft curving tail.",
          hint: "Gond art poetically blends animal features with plants and branches.",
          juniorHint: "Give the deer branching antlers that look just like happy tree twigs!"
        },
        {
          stepNumber: 5,
          title: "Divide the Body into Flowing Contour Channels",
          instruction: "Draw light internal flowing contour lines inside the deer's body and tree trunk to create texture zones.",
          detail: "Draw light internal flowing contour lines inside the deer's body and tree trunk to create texture zones.",
          hint: "These internal sections will hold your signature Gond dot patterns.",
          juniorHint: "Draw gentle paths inside his body like garden pathways!"
        },
        {
          stepNumber: 6,
          title: "Stamp Signature Gond Dots (Bindus)",
          instruction: "Select the Gond Dots tool and place evenly spaced, rhythmic rows of dots along the internal contour lines.",
          detail: "Select the Gond Dots tool and place evenly spaced, rhythmic rows of dots along the internal contour lines.",
          hint: "Keep the dots neatly spaced and concentric—this is the true heartbeat of Gond art.",
          juniorHint: "Tap tap tap! Use the Dots tool to stamp rhythmic little footprints along the paths!"
        },
        {
          stepNumber: 7,
          title: "Infill with Traditional Earthen Tones",
          instruction: "Apply bold contrasts: turmeric yellow on the deer body, terracotta red on the trunk, and forest green on leaves.",
          detail: "Apply bold contrasts: turmeric yellow on the deer body, terracotta red on the trunk, and forest green on leaves.",
          hint: "Gond colors are vibrant and symbolic rather than strictly realistic.",
          juniorHint: "Color with sunshine yellow, red clay, and juicy leaf green!"
        },
        {
          stepNumber: 8,
          title: "Finalize Expressive Eyes and Outlines",
          instruction: "Draw a peaceful almond eye on the deer and sharpen the main borders with clean black ink.",
          detail: "Draw a peaceful almond eye on the deer and sharpen the main borders with clean black ink.",
          hint: "A clean outer boundary accentuates the rich inner dot tapestry.",
          juniorHint: "Draw a gentle peaceful eye and trace the outer edges clean!"
        }
      ],
      referenceGuideSvgPath: "M160,370 C160,260 140,210 200,160 C250,120 230,60 210,30 M220,360 C230,280 280,240 310,210 C340,180 340,140 320,130 M310,135 C320,100 350,90 360,70 M335,95 C350,90 370,110 380,100"
    },

    // -------------------------------------------------------------
    // 5. YAVATMAL - BANJARA ART
    // -------------------------------------------------------------
    {
      id: "yavatmal",
      cityName: "Yavatmal",
      artName: "Banjara art",
      tagline: "Nomadic Lambani Geometric Mandalas & Shimmering Mirrors",
      imagePath: "images/yavatmal.svg",
      placeholderJpgPath: "images/yavatmal.jpg",
      passportStamp: {
        title: "Lambani Mirror Mandala",
        motif: "Aina Mirror & Radiating Star",
        icon: "🪞",
        rarity: "Nomadic Light"
      },
      story: {
        title: "The Shimmering Mirror That Catches the Sun",
        en: "The Lambani women of Yavatmal's Banjara tandas are master weavers and embroiderers of light. Traveling under open desert and hill skies, they stitched small polished glass mirrors ('Aina') directly into coarse cotton robes. Tradition says that when negative spirits or wild beasts approach, they see their own fierce reflection in the shining mirrors and run away in shock! The radiating triangles in magenta, sun yellow, and teal turquoise represent the blazing sunbeams that guide nomads on their journeys.",
        hi: "यवतमाळ के बंजारा टांडों में लंबाणी महिलाएं प्रकाश और रंगों की जादूगर मानी जाती हैं। वे अपने वस्त्रों में छोटे-छोटे कांच (आईना) और कौड़ियां सिलती हैं। मान्यता है कि जब बुरी नजर या जंगली जीव आते हैं, तो वे दर्पण में अपनी छाया देखकर भाग जाते हैं। यह कला सुरक्षा और आनंद का प्रतीक है।",
        mr: "यवतमाळच्या बंजारा तांड्यांमधील लमाणी स्त्रियांची भरतकाम आणि आरशांची कला जगप्रसिद्ध आहे. कपड्यांवर लहान लहान गोल आरसे (आईना) आणि कवड्या लावून त्या सुंदर नक्षी तयार करतात. हे चमकणारे आरसे वाईट शक्तींपासून रक्षण करतात आणि सूर्यप्रकाशाप्रमाणे जीवन उजळून टाकतात."
      },
      shortDescription: "Yavatmal is home to historic Banjara tandas where Lambani women have nurtured one of India's most vibrant nomadic art traditions for centuries. Characterized by high-voltage geometric precision, the art incorporates sacred central mirror medallions (Aina), radiating triangles, cross-stitch borders, and cowrie shell amulets designed to ward off negative spirits. Traditional artisans weave with homespun coarse cotton, dyed wool yarns, and polished metal discs. What makes Banjara art unmistakable is its fearless use of saturated neon contrasts—hot magenta, turmeric sun-yellow, deep turquoise, and desert orange—arranged in dazzling radial symmetry.",
      palette: [
        { name: "Gulabi Magenta", hex: "#DB2777", role: "Primary festive triangle infill" },
        { name: "Haldi Yellow", hex: "#FACC15", role: "Sunbeam chevron points" },
        { name: "Teal Turquoise", hex: "#0D9488", role: "Contrasting cool geometry" },
        { name: "Mirror Silver", hex: "#E2E8F0", role: "Central reflective eye" },
        { name: "Sindoor Orange", hex: "#EA580C", role: "Diagonal diamond borders" },
        { name: "Deep Charcoal", hex: "#111827", role: "Defining grid outlines" }
      ],
      traditionalPalette: ["#DB2777", "#FACC15", "#0D9488", "#E2E8F0", "#EA580C", "#111827"],
      progressionStages: [
        {
          stageNumber: 1,
          stageName: "Central Mirror Circle",
          name: "Central Mirror Circle",
          estimatedTime: "2 mins",
          description: "Establish the exact geometric center and double concentric rings of the protective mirror medallion.",
          techniqueTips: "Maintain radial symmetry radiating outward from the central circle.",
          juniorHint: "Draw a silver coin with a ring around it right in the middle!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="none" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="200" y1="50" x2="200" y2="350" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="50" y1="200" x2="350" y2="200" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3,3"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 1: Central Mirror &amp; Center Axis</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="none" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="200" y1="50" x2="200" y2="350" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="50" y1="200" x2="350" y2="200" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3,3"/></svg>`
        },
        {
          stageNumber: 2,
          stageName: "Cardinal Compass Triangles",
          name: "Cardinal Compass Triangles",
          estimatedTime: "3 mins",
          description: "Inscribe four sharp outward-pointing isosceles triangles at north, south, east, and west.",
          techniqueTips: "Keep all 4 cardinal triangles equal in height and width.",
          juniorHint: "Draw four sharp triangle points like a compass star pointing up, down, left, right!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="3"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="2.5"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="2.5"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="2.5"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="2.5"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 2: 4 Cardinal Triangles</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="3"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="2.5"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="2.5"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="2.5"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="2.5"/></svg>`
        },
        {
          stageNumber: 3,
          stageName: "Interlocking Diagonal Chevrons",
          name: "Interlocking Diagonal Chevrons",
          estimatedTime: "3 mins",
          description: "Add four diagonal chevron triangles to form an eight-pointed radiating sun mandala.",
          techniqueTips: "Alternate hot pink and orange in the corners to create high-voltage contrast.",
          juniorHint: "Fill the empty corners with four more triangles to make an 8-pointed star!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="3"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="140,140 160,175 185,150" fill="#EA580C" stroke="#111827" stroke-width="2"/><polygon points="260,140 240,175 215,150" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="140,260 160,225 185,250" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="260,260 240,225 215,250" fill="#EA580C" stroke="#111827" stroke-width="2"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 3: 8-Pointed Star Mandala</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="3"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="140,140 160,175 185,150" fill="#EA580C" stroke="#111827" stroke-width="2"/><polygon points="260,140 240,175 215,150" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="140,260 160,225 185,250" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="260,260 240,225 215,250" fill="#EA580C" stroke="#111827" stroke-width="2"/></svg>`
        },
        {
          stageNumber: 4,
          stageName: "Cowrie Shell & Cross-Stitch Rim",
          name: "Cowrie Shell & Cross-Stitch Rim",
          estimatedTime: "3-4 mins",
          description: "Add diamond amulets along the rim mimicking stitched cowrie shells and cross-stitch borders.",
          techniqueTips: "Use white dots inside the outer perimeter to simulate reflective cowrie shells.",
          juniorHint: "Draw little diamond shells around the edge like a necklace of seashells!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="3"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="140,140 160,175 185,150" fill="#EA580C" stroke="#111827" stroke-width="2"/><polygon points="260,140 240,175 215,150" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="140,260 160,225 185,250" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="260,260 240,225 215,250" fill="#EA580C" stroke="#111827" stroke-width="2"/><circle cx="200" cy="90" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="200" cy="310" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="90" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="310" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 4: Cowrie Shells &amp; Border Charms</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="3"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="2"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="2"/><polygon points="140,140 160,175 185,150" fill="#EA580C" stroke="#111827" stroke-width="2"/><polygon points="260,140 240,175 215,150" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="140,260 160,225 185,250" fill="#DB2777" stroke="#111827" stroke-width="2"/><polygon points="260,260 240,225 215,250" fill="#EA580C" stroke="#111827" stroke-width="2"/><circle cx="200" cy="90" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="200" cy="310" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="90" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="310" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/></svg>`
        },
        {
          stageNumber: 5,
          stageName: "High-Voltage Shimmer & Finished Mandala",
          name: "High-Voltage Shimmer & Finished Mandala",
          estimatedTime: "4 mins",
          description: "Infuse hot magenta, electric yellow, and mirror silver reflection for an eye-catching nomadic charm.",
          techniqueTips: "Add a bright white gleam dot inside the central mirror so it appears to catch the real sun.",
          juniorHint: "Dab a bright white shine dot in the middle so the mirror glitters in the desert sun!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="4"/><circle cx="200" cy="200" r="35" fill="#F8FAFC" stroke="#DB2777" stroke-width="2.5"/><circle cx="188" cy="188" r="8" fill="#FFFFFF"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="3"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="3"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="3"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="3"/><polygon points="140,140 160,175 185,150" fill="#EA580C" stroke="#111827" stroke-width="3"/><polygon points="260,140 240,175 215,150" fill="#DB2777" stroke="#111827" stroke-width="3"/><polygon points="140,260 160,225 185,250" fill="#DB2777" stroke="#111827" stroke-width="3"/><polygon points="260,260 240,225 215,250" fill="#EA580C" stroke="#111827" stroke-width="3"/><circle cx="200" cy="90" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="200" cy="310" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="90" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="310" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 5: Master Lambani Mirror Mandala</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><circle cx="200" cy="200" r="45" fill="#E2E8F0" stroke="#111827" stroke-width="4"/><circle cx="200" cy="200" r="35" fill="#F8FAFC" stroke="#DB2777" stroke-width="2.5"/><circle cx="188" cy="188" r="8" fill="#FFFFFF"/><polygon points="200,120 180,155 220,155" fill="#FACC15" stroke="#111827" stroke-width="3"/><polygon points="200,280 180,245 220,245" fill="#FACC15" stroke="#111827" stroke-width="3"/><polygon points="120,200 155,180 155,220" fill="#0D9488" stroke="#111827" stroke-width="3"/><polygon points="280,200 245,180 245,220" fill="#0D9488" stroke="#111827" stroke-width="3"/><polygon points="140,140 160,175 185,150" fill="#EA580C" stroke="#111827" stroke-width="3"/><polygon points="260,140 240,175 215,150" fill="#DB2777" stroke="#111827" stroke-width="3"/><polygon points="140,260 160,225 185,250" fill="#DB2777" stroke="#111827" stroke-width="3"/><polygon points="260,260 240,225 215,250" fill="#EA580C" stroke="#111827" stroke-width="3"/><circle cx="200" cy="90" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="200" cy="310" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="90" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/><circle cx="310" cy="200" r="7" fill="#F8FAFC" stroke="#111827"/></svg>`
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: "Establish Geometric Center Grid",
          instruction: "Locate the precise center of your canvas and prepare a warm neutral canvas representing woven khadi cotton.",
          detail: "Locate the precise center of your canvas and prepare a warm neutral canvas representing woven khadi cotton.",
          hint: "Banjara art relies on balanced radial symmetry radiating out from the center.",
          juniorHint: "Find the exact middle of your page like the bullseye of a dartboard!"
        },
        {
          stepNumber: 2,
          title: "Draw Central Mirror Medallion (Aina)",
          instruction: "Draw two concentric circles at the exact center to form the protective mirror glass medallion.",
          detail: "Draw two concentric circles at the exact center to form the protective mirror glass medallion.",
          hint: "The central round mirror acts as the anchor for the entire composition.",
          juniorHint: "Draw a silver coin with a ring around it in the middle!"
        },
        {
          stepNumber: 3,
          title: "Construct Cardinal Compass Triangles",
          instruction: "Draw four sharp isosceles triangles pointing outward at the top, bottom, left, and right of the circle.",
          detail: "Draw four sharp isosceles triangles pointing outward at the top, bottom, left, and right of the circle.",
          hint: "Keep the triangular tips sharp and equidistant like a four-point star.",
          juniorHint: "Draw four sharp triangle points like a compass star pointing top, bottom, left, and right!"
        },
        {
          stepNumber: 4,
          title: "Add Interlocking Diagonal Triangles",
          instruction: "Inscribe four alternating diagonal triangles between the cardinal points to create an eight-pointed mandala.",
          detail: "Inscribe four alternating diagonal triangles between the cardinal points to create an eight-pointed mandala.",
          hint: "Maintain uniform sizing for all eight radiating triangles.",
          juniorHint: "Fill the empty corners with four more triangles to make an 8-pointed star!"
        },
        {
          stepNumber: 5,
          title: "Draw the Cowrie Shell (Kavdi) Border",
          instruction: "Draw repeating diamond and oval shapes along the outer rim representing protective cowrie shells.",
          detail: "Draw repeating diamond and oval shapes along the outer rim representing protective cowrie shells.",
          hint: "Cowrie shells are iconic nomadic talismans of wealth and well-being.",
          juniorHint: "Draw little diamond shells around the edge like a necklace of seashells!"
        },
        {
          stepNumber: 6,
          title: "Inscribe Cross-Stitch Hatch Lines",
          instruction: "Add small repeating 'X' stitches and parallel zigzag chevrons inside the outer perimeter border.",
          detail: "Add small repeating 'X' stitches and parallel zigzag chevrons inside the outer perimeter border.",
          hint: "This captures the texture of Lambani needlecraft and embroidered yarn.",
          juniorHint: "Use our Hatch tool to make tiny 'X' stitches like needle and thread!"
        },
        {
          stepNumber: 7,
          title: "Apply High-Voltage Saturated Colors",
          instruction: "Fill alternating triangles with hot magenta pink, electric sun yellow, deep turquoise, and bright orange.",
          detail: "Fill alternating triangles with hot magenta pink, electric sun yellow, deep turquoise, and bright orange.",
          hint: "High-contrast juxtaposition of warm and cool tones gives Banjara art its electric energy.",
          juniorHint: "Pick the brightest hot pink, sunny yellow, and turquoise from your palette!"
        },
        {
          stepNumber: 8,
          title: "Add Silver Mirror Shimmer",
          instruction: "Fill the central circle with silver-white and add a delicate white dot highlight to simulate reflective glass.",
          detail: "Fill the central circle with silver-white and add a delicate white dot highlight to simulate reflective glass.",
          hint: "The central white reflection creates the optical illusion of real glass.",
          juniorHint: "Dab a bright white shine dot in the middle so the mirror glitters in the sun!"
        }
      ],
      referenceGuideSvgPath: "M200,200 m-45,0 a45,45 0 1,0 90,0 a45,45 0 1,0 -90,0 M200,120 L180,155 L220,155 Z M200,280 L180,245 L220,245 Z M120,200 L155,180 L155,220 Z M280,200 L245,180 L245,220 Z M140,140 L160,175 L185,150 Z M260,140 L240,175 L215,150 Z"
    },

    // -------------------------------------------------------------
    // 6. WASHIM - VATSAGULMA ART
    // -------------------------------------------------------------
    {
      id: "washim",
      cityName: "Washim",
      artName: "Vatsagulma art",
      tagline: "Ancient Classical Murals & Serene Meditative Lotus Motifs",
      imagePath: "images/washim.svg",
      placeholderJpgPath: "images/washim.jpg",
      passportStamp: {
        title: "Vatsagulma Lotus Seal",
        motif: "Serene Padmapani Lotus",
        icon: "🪷",
        rarity: "Classical Royalty"
      },
      story: {
        title: "The Royal Lotus of Ancient Vatsagulma",
        en: "Washim was once called Vatsagulma, the magnificent royal capital of the Vakataka kings who built the world-renowned Ajanta cave murals. Royal artists ground rare lapis lazuli stones imported from Afghan mountains to create divine celestial blues. They painted compassionate celestial figures holding blooming lotuses in their slender fingers. The lotus in Indian philosophy blooms untouched above muddy water, teaching learners that kindness and creativity can blossom everywhere.",
        hi: "वाशीम को प्राचीन काल में वत्सगुल्म कहा जाता था, जो अजंता की गुफाएं बनवाने वाले वाकाटक राजाओं की राजधानी थी। राजदरबार के चित्रकार लाजवर्त पत्थर से दिव्य नीला रंग बनाते थे। वे शांत मुखमुद्रा और कमल पुष्प धारण किए हुए देवी-देवताओं का चित्रण करते थे जो शांति और प्रेम का संदेश देते हैं।",
        mr: "वाशीमचे प्राचीन नाव वत्सगुल्म होते. जगप्रसिद्ध अजिंठा लेण्यांची निर्मिती करणाऱ्या वाकाटक सम्राटांची ही राजधानी होती. येथील राजदरबारी कलाकारांनी हातामध्ये उमललेले कमळ घेतलेल्या शांत, ध्यानस्थ मूर्तींचे रेखाटन केले. ही अभिजात कला आजही महाराष्ट्राचा गौरव मानली जाते."
      },
      shortDescription: "Washim, historically known as Vatsagulma, was the illustrious royal capital of the Vakataka dynasty—the same royal patrons who created the world-famous Ajanta cave murals. Vatsagulma art embodies the sublime elegance of classical Indian court painting. Characterized by hair-thin, lyrical fluid brush contours, the art features serene profiles with elongated half-closed lotus-petal eyes (Padmapani style), graceful hand mudras, and ornate floral creepers (Haashiya). Master artists ground precious lapis lazuli for deep celestial blue, saffron pollen, sandalwood cream, and real gold leaf (Varq). What makes Vatsagulma art peerless is its gentle spiritual serenity, flowing calligraphic lines, and courtly grace.",
      palette: [
        { name: "Lapis Lazuli Blue", hex: "#1E40AF", role: "Royal drapery & divine sky" },
        { name: "Saffron Kesari", hex: "#F97316", role: "Lotus blossom & halos" },
        { name: "Sandalwood Cream", hex: "#FEF08A", role: "Skin tones & highlights" },
        { name: "Gold Leaf Shimmer", hex: "#CA8A04", role: "Jewellery & floral vines" },
        { name: "Ajanta Charcoal", hex: "#111827", role: "Fine lyrical contour lines" }
      ],
      traditionalPalette: ["#1E40AF", "#F97316", "#FEF08A", "#CA8A04", "#111827"],
      progressionStages: [
        {
          stageNumber: 1,
          stageName: "Meditative Profile Guide",
          name: "Meditative Profile Guide",
          estimatedTime: "2-3 mins",
          description: "Lightly sketch the serene sloping forehead, aquiline nose, and compassionate lips.",
          techniqueTips: "Draw steady continuous hair-thin strokes with light pressure.",
          juniorHint: "Draw a calm peaceful side-view profile with a gentle smile!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185" fill="none" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4"/><circle cx="215" cy="115" r="35" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 1: Serene Facial Profile</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185" fill="none" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4"/><circle cx="215" cy="115" r="35" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4"/></svg>`
        },
        {
          stageNumber: 2,
          stageName: "Lotus-Petal Eye & Royal Bun",
          name: "Lotus-Petal Eye & Royal Bun",
          estimatedTime: "3 mins",
          description: "Draw the half-closed elongated eye resembling a curved lotus leaf and the rounded royal topknot.",
          techniqueTips: "The upper eyelid curves gently downward in peaceful contemplation.",
          juniorHint: "Draw a sleepy peaceful eye shaped just like a curving flower petal!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185" fill="none" stroke="#111827" stroke-width="2.5"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M180,135 C190,132 205,138 210,145" stroke="#111827" stroke-width="2" fill="none"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 2: Lotus Petal Eye &amp; Jata-Mukuta</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185" fill="none" stroke="#111827" stroke-width="2.5"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M180,135 C190,132 205,138 210,145" stroke="#111827" stroke-width="2" fill="none"/></svg>`
        },
        {
          stageNumber: 3,
          stageName: "Slender Mudra Hand & Lotus",
          name: "Slender Mudra Hand & Lotus",
          estimatedTime: "3-4 mins",
          description: "Sketch long tender fingers cradling an opening multi-tiered lotus blossom.",
          techniqueTips: "Taper the fingers gently like tender willow shoots around the blossom.",
          juniorHint: "Draw long gentle fingers holding a flower like holding a delicate butterfly!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185 C175,200 185,220 180,250" fill="none" stroke="#111827" stroke-width="2.5"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M170,250 C180,240 210,230 220,210 C225,200 230,215 220,230 L190,270" stroke="#111827" stroke-width="2.5" fill="none"/><circle cx="235" cy="200" r="16" fill="none" stroke="#F97316" stroke-width="2"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 3: Lotus Mudra Hand</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185 C175,200 185,220 180,250" fill="none" stroke="#111827" stroke-width="2.5"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M170,250 C180,240 210,230 220,210 C225,200 230,215 220,230 L190,270" stroke="#111827" stroke-width="2.5" fill="none"/><circle cx="235" cy="200" r="16" fill="none" stroke="#F97316" stroke-width="2"/></svg>`
        },
        {
          stageNumber: 4,
          stageName: "Golden Vine Border & Drapery",
          name: "Golden Vine Border & Drapery",
          estimatedTime: "3 mins",
          description: "Encircle with flowing lapis blue silk and delicate golden ivy creepers.",
          techniqueTips: "Use flowing curves for the silk scarf drape.",
          juniorHint: "Add a delicate golden creeper vine all around like a picture frame!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185 C175,200 185,220 180,250" fill="none" stroke="#111827" stroke-width="2.5"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M225,95 C235,90 245,100 240,115" stroke="#CA8A04" stroke-width="3" fill="none"/><path d="M170,250 C180,240 210,230 220,210 C225,200 230,215 220,230 L190,270" stroke="#111827" stroke-width="2.5" fill="none"/><circle cx="235" cy="200" r="16" fill="#F97316" stroke="#111827" stroke-width="2"/><path d="M150,280 C180,290 220,280 250,320" stroke="#1E40AF" stroke-width="6" fill="none" stroke-linecap="round"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 4: Lapis Silk &amp; Golden Haashiya</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185 C175,200 185,220 180,250" fill="none" stroke="#111827" stroke-width="2.5"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M225,95 C235,90 245,100 240,115" stroke="#CA8A04" stroke-width="3" fill="none"/><path d="M170,250 C180,240 210,230 220,210 C225,200 230,215 220,230 L190,270" stroke="#111827" stroke-width="2.5" fill="none"/><circle cx="235" cy="200" r="16" fill="#F97316" stroke="#111827" stroke-width="2"/><path d="M150,280 C180,290 220,280 250,320" stroke="#1E40AF" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`
        },
        {
          stageNumber: 5,
          stageName: "Lapis Lazuli Glow & Finished Miniature",
          name: "Lapis Lazuli Glow & Finished Miniature",
          estimatedTime: "4 mins",
          description: "Infuse with royal lapis blue, warm sandalwood skin, and glistening gold leaf ornaments.",
          techniqueTips: "Delicate washes maintain the spiritual serenity of classical Ajanta frescos.",
          juniorHint: "Paint with royal lapis blue and warm sandalwood cream!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185 C175,200 185,220 180,250" fill="#FEF08A" stroke="#111827" stroke-width="2.5"/><path d="M180,135 C190,132 205,138 210,145 C200,145 190,142 180,135 Z" fill="#111827"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M225,95 C235,90 245,100 240,115" stroke="#CA8A04" stroke-width="3" fill="none"/><path d="M170,250 C180,240 210,230 220,210 C225,200 230,215 220,230 L190,270" stroke="#111827" stroke-width="2.5" fill="#FEF08A"/><circle cx="235" cy="200" r="16" fill="#F97316" stroke="#111827" stroke-width="2"/><path d="M150,280 C180,290 220,280 250,320" stroke="#1E40AF" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="235" cy="200" r="8" fill="#FEF08A"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 5: Master Vatsagulma Lotus</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185 C175,200 185,220 180,250" fill="#FEF08A" stroke="#111827" stroke-width="2.5"/><path d="M180,135 C190,132 205,138 210,145 C200,145 190,142 180,135 Z" fill="#111827"/><circle cx="215" cy="115" r="35" fill="#111827"/><path d="M225,95 C235,90 245,100 240,115" stroke="#CA8A04" stroke-width="3" fill="none"/><path d="M170,250 C180,240 210,230 220,210 C225,200 230,215 220,230 L190,270" stroke="#111827" stroke-width="2.5" fill="#FEF08A"/><circle cx="235" cy="200" r="16" fill="#F97316" stroke="#111827" stroke-width="2"/><path d="M150,280 C180,290 220,280 250,320" stroke="#1E40AF" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="235" cy="200" r="8" fill="#FEF08A"/></svg>`
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: "Prepare Wasli Parchment Ground",
          instruction: "Select a soft warm ivory ground resembling multi-layered handmade Wasli paper prepared with rice starch.",
          detail: "Select a soft warm ivory ground resembling multi-layered handmade Wasli paper prepared with rice starch.",
          hint: "Classical miniature painting requires a smooth, luminous parchment base.",
          juniorHint: "Choose a smooth royal ivory paper like in an ancient king's palace!"
        },
        {
          stepNumber: 2,
          title: "Draw Serene Facial Profile",
          instruction: "With a fine line, sketch the gentle curving profile: high forehead, gentle aquiline nose, and compassionate lips.",
          detail: "With a fine line, sketch the gentle curving profile: high forehead, gentle aquiline nose, and compassionate lips.",
          hint: "Maintain an unbroken, flowing stroke with subtle pressure variations.",
          juniorHint: "Draw a calm peaceful side-view profile with a gentle smile!"
        },
        {
          stepNumber: 3,
          title: "Shape Meditative Lotus Petal Eye",
          instruction: "Draw an elongated almond eye that resembles a curving lotus leaf, slightly downcast in peaceful contemplation.",
          detail: "Draw an elongated almond eye that resembles a curving lotus leaf, slightly downcast in peaceful contemplation.",
          hint: "The upper eyelid curves gently downward, capturing the inward meditative state.",
          juniorHint: "Draw a sleepy, peaceful eye shaped just like a curving flower petal!"
        },
        {
          stepNumber: 4,
          title: "Form Royal Topknot and Ornaments",
          instruction: "Draw the rounded royal hair bun (Jata-mukuta) crowned with delicate strings of pearls and golden combs.",
          detail: "Draw the rounded royal hair bun (Jata-mukuta) crowned with delicate strings of pearls and golden combs.",
          hint: "Vakataka royal hairstyles feature voluminous braided buns with cascading curls.",
          juniorHint: "Draw a grand royal hair bun topped with sparkling pearl combs!"
        },
        {
          stepNumber: 5,
          title: "Draw Delicate Hand in Lotus Mudra",
          instruction: "Sketch long slender fingers gently cradling an open lotus flower in the classical Katakavardhana mudra.",
          detail: "Sketch long slender fingers gently cradling an open lotus flower in the classical Katakavardhana mudra.",
          hint: "The fingers curve like tender young shoots around the blossom.",
          juniorHint: "Draw long gentle fingers holding a flower like holding a delicate butterfly!"
        },
        {
          stepNumber: 6,
          title: "Outline the Multi-Layered Lotus Blossom",
          instruction: "Draw overlapping curved petals opening outwards from the central pod.",
          detail: "Draw overlapping curved petals opening outwards from the central pod.",
          hint: "Layer outer petals behind the central cup to give depth to the sacred flower.",
          juniorHint: "Draw blooming petals opening up like little hugs around the center!"
        },
        {
          stepNumber: 7,
          title: "Apply Lapis Lazuli and Sandalwood Tints",
          instruction: "Wash the lotus in soft saffron and pink, skin in warm sandalwood cream, and drapery in rich lapis blue.",
          detail: "Wash the lotus in soft saffron and pink, skin in warm sandalwood cream, and drapery in rich lapis blue.",
          hint: "Use smooth translucent washes to maintain the delicate outlines.",
          juniorHint: "Paint heavenly lapis blue, warm sandalwood, and sunset saffron!"
        },
        {
          stepNumber: 8,
          title: "Inscribe Fine Golden Vine Border (Haashiya)",
          instruction: "Frame the painting with a thin golden creeper vine with tiny buds and leaves.",
          detail: "Frame the painting with a thin golden creeper vine with tiny buds and leaves.",
          hint: "A fine border frames the classical portrait like an ancient illuminated royal manuscript.",
          juniorHint: "Add a delicate golden creeper vine all around like a picture frame!"
        }
      ],
      referenceGuideSvgPath: "M180,90 C185,110 180,130 170,140 C175,145 180,145 178,155 C170,165 175,175 165,185 M180,135 C190,132 205,138 210,145 M215,115 m-35,0 a35,35 0 1,0 70,0 a35,35 0 1,0 -70,0 M170,250 C180,240 210,230 220,210 C225,200 230,215 220,230 L190,270 M235,200 m-16,0 a16,16 0 1,0 32,0 a16,16 0 1,0 -32,0"
    },

    // -------------------------------------------------------------
    // 7. BULDHANA - BHIL ART
    // -------------------------------------------------------------
    {
      id: "buldhana",
      cityName: "Buldhana",
      artName: "Bhil art",
      tagline: "Sacred Pithora Ritual Lore & Cascading Dot Constellations",
      imagePath: "images/buldhana.svg",
      placeholderJpgPath: "images/buldhana.jpg",
      passportStamp: {
        title: "Pithora Steed Seal",
        motif: "Divine Dotted Horse",
        icon: "🐎",
        rarity: "Festive Spirit"
      },
      story: {
        title: "Baba Pithora and the Dancing Horse of Harvest",
        en: "In the Satpura valleys of Buldhana, the Bhil tribe celebrates Baba Pithora, the benevolent protector of village fields and granaries. On wedding and harvest eves, families invite the village shaman and painters to cover their cottage walls with joyous scenes. The star of the mural is Baba Pithora's white and golden sacred horse. Every dot painted on the horse is counted as a grain of golden wheat or rice. When the entire horse is covered in sparkling dots, the family rejoices knowing their granaries will stay full of food all year round!",
        hi: "बुलढाणा के सतपुड़ा अंचल में भील समुदाय बाबा पिथोरा की पूजा करता है। फसल कटाई और विवाह के अवसरों पर घरों की दीवारों पर पिथोरा भित्तिचित्र बनाए जाते हैं। इसमें सबसे महत्वपूर्ण है बाबा पिथोरा का दिव्य घोड़ा। घोड़े के शरीर पर लगाया गया हर बिंदु अन्न के दाने का प्रतीक है जो पूरे वर्ष घर में खुशहाली लाता है।",
        mr: "बुलढाण्याच्या डोंगररांगांमध्ये वसलेले भिल्ल बांधव 'पिठोरा देव' ची मनोभावे पूजा करतात. घराच्या भिंतींवर पांढऱ्या आणि पिवळ्या रंगाने पिठोरा देवाचा देखणा घोडा रंगवला जातो. घोड्याच्या अंगावर काढलेला प्रत्येक ठिपका हा धनधान्याचा आशीर्वाद मानला जातो."
      },
      shortDescription: "In the Satpura foothills and rural settlements of Buldhana district, the indigenous Bhil tribe preserves one of central India's oldest pictorial languages: Bhil art. Deeply tied to Pithora ritual thanksgiving, this art depicts the sacred divine horse of Baba Pithora, dancing village groups, birds, and agricultural plenty. Paintings are traditionally created on freshly prepared mud walls using chewed neem twigs as brushes, with natural dyes derived from turmeric, red clay, ground rice flour, and forest bark. What makes Bhil art truly magical is its method of storytelling: entire figures and silhouettes are filled completely with vibrant, multi-colored dots like cosmic constellations, where each dot represents a grain of harvest and a prayer for prosperity.",
      palette: [
        { name: "Pithora Horse Ochre", hex: "#D97706", role: "Sacred horse body & sun" },
        { name: "Chalk White Dot", hex: "#FFFFFF", role: "Harvest grain dot clusters" },
        { name: "Geru Terracotta", hex: "#B91C1C", role: "Earth background & saddles" },
        { name: "Forest Leaf Green", hex: "#15803D", role: "Nature sprigs & village trees" },
        { name: "Neel Indigo", hex: "#1D4ED8", role: "Contrasting constellation dots" },
        { name: "Charcoal Black", hex: "#111827", role: "Silhouette boundary lines" }
      ],
      traditionalPalette: ["#D97706", "#FFFFFF", "#B91C1C", "#15803D", "#1D4ED8", "#111827"],
      progressionStages: [
        {
          stageNumber: 1,
          stageName: "Horse Back & Sturdy Legs",
          name: "Horse Back & Sturdy Legs",
          estimatedTime: "2-3 mins",
          description: "Establish the strong arched neck, back curve, and four sturdy upright legs.",
          techniqueTips: "Keep the horse chest broad and forward-leaning.",
          juniorHint: "Draw a happy, trotting horse with four sturdy legs!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 L280,230 L330,280" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/><line x1="160" y1="280" x2="160" y2="340" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4"/><line x1="310" y1="280" x2="310" y2="340" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 1: Horse Backbone &amp; Legs</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 L280,230 L330,280" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/><line x1="160" y1="280" x2="160" y2="340" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4"/><line x1="310" y1="280" x2="310" y2="340" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4,4"/></svg>`
        },
        {
          stageNumber: 2,
          stageName: "Joyful Silhouette & Flying Mane",
          name: "Joyful Silhouette & Flying Mane",
          estimatedTime: "3 mins",
          description: "Complete the horse body outline, add perky upright ears, and a flowing festive tail.",
          techniqueTips: "Give the horse an energetic, joyful stance with an erect mane.",
          juniorHint: "Draw perky upright ears and a bushy flowing tail!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340 L310,340 L300,290 L260,290 L250,340 L230,340 L220,290 L170,290 L160,340 L140,340 Z" fill="#D97706" stroke="#111827" stroke-width="2.5"/><path d="M330,240 C350,220 370,240 370,270" stroke="#FFFFFF" stroke-width="4" fill="none"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 2: Horse Silhouette &amp; Tail</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340 L310,340 L300,290 L260,290 L250,340 L230,340 L220,290 L170,290 L160,340 L140,340 Z" fill="#D97706" stroke="#111827" stroke-width="2.5"/><path d="M330,240 C350,220 370,240 370,270" stroke="#FFFFFF" stroke-width="4" fill="none"/></svg>`
        },
        {
          stageNumber: 3,
          stageName: "Tree of Abundance & Sky Sun",
          name: "Tree of Abundance & Sky Sun",
          estimatedTime: "3 mins",
          description: "Paint a radiating harvest sun and a rounded branching tree with ripe green leaves.",
          techniqueTips: "The sun brings harvest blessing to the village.",
          juniorHint: "Draw a bright happy sun in the sky and a green tree beside the horse!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340" fill="#D97706" stroke="#111827" stroke-width="2.5"/><circle cx="320" cy="80" r="22" fill="#D97706" stroke="#FFFFFF" stroke-width="2"/><circle cx="70" cy="220" r="14" fill="#15803D"/><line x1="70" y1="220" x2="70" y2="340" stroke="#111827" stroke-width="3"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 3: Sun &amp; Sacred Tree</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340" fill="#D97706" stroke="#111827" stroke-width="2.5"/><circle cx="320" cy="80" r="22" fill="#D97706" stroke="#FFFFFF" stroke-width="2"/><circle cx="70" cy="220" r="14" fill="#15803D"/><line x1="70" y1="220" x2="70" y2="340" stroke="#111827" stroke-width="3"/></svg>`
        },
        {
          stageNumber: 4,
          stageName: "Cascading Dot Constellations",
          name: "Cascading Dot Constellations",
          estimatedTime: "4 mins",
          description: "Stamp multi-colored rows of white, blue, and emerald dots densely packing the horse body.",
          techniqueTips: "Fill the entire horse body with rhythmic dots representing grains of wheat.",
          juniorHint: "Every dot is a magical golden grain of corn or wheat! Fill the horse body with dots!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340" fill="#D97706" stroke="#111827" stroke-width="2.5"/><circle cx="170" cy="180" r="3.5" fill="#FFFFFF"/><circle cx="190" cy="180" r="3.5" fill="#1D4ED8"/><circle cx="210" cy="180" r="3.5" fill="#FFFFFF"/><circle cx="180" cy="200" r="3.5" fill="#15803D"/><circle cx="200" cy="200" r="3.5" fill="#FFFFFF"/><circle cx="220" cy="200" r="3.5" fill="#1D4ED8"/><circle cx="240" cy="240" r="3.5" fill="#FFFFFF"/><circle cx="260" cy="240" r="3.5" fill="#15803D"/><circle cx="280" cy="240" r="3.5" fill="#FFFFFF"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 4: Harvest Dot Constellations</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340" fill="#D97706" stroke="#111827" stroke-width="2.5"/><circle cx="170" cy="180" r="3.5" fill="#FFFFFF"/><circle cx="190" cy="180" r="3.5" fill="#1D4ED8"/><circle cx="210" cy="180" r="3.5" fill="#FFFFFF"/><circle cx="180" cy="200" r="3.5" fill="#15803D"/><circle cx="200" cy="200" r="3.5" fill="#FFFFFF"/><circle cx="220" cy="200" r="3.5" fill="#1D4ED8"/><circle cx="240" cy="240" r="3.5" fill="#FFFFFF"/><circle cx="260" cy="240" r="3.5" fill="#15803D"/><circle cx="280" cy="240" r="3.5" fill="#FFFFFF"/></svg>`
        },
        {
          stageNumber: 5,
          stageName: "Saddle Chevrons & Finished Pithora Steed",
          name: "Saddle Chevrons & Finished Pithora Steed",
          estimatedTime: "4 mins",
          description: "Adorn with ornamental zigzag saddlecloth and high-contrast charcoal boundary outlines.",
          techniqueTips: "Retrace all legs and neck borders with confident dark lines.",
          juniorHint: "Put on a royal festive saddlecloth and make his legs stand strong!",
          svgVisual: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340 M170,260 L170,350 M210,260 L210,350 M300,280 L300,350 M320,280 L320,350" stroke="#111827" stroke-width="3" fill="#D97706"/><circle cx="170" cy="180" r="4" fill="#FFFFFF"/><circle cx="190" cy="180" r="4" fill="#1D4ED8"/><circle cx="210" cy="180" r="4" fill="#FFFFFF"/><circle cx="180" cy="200" r="4" fill="#15803D"/><circle cx="200" cy="200" r="4" fill="#FFFFFF"/><polygon points="230,230 250,250 270,230" fill="#B91C1C" stroke="#FFFFFF" stroke-width="1.5"/><circle cx="320" cy="80" r="22" fill="#D97706" stroke="#FFFFFF" stroke-width="2"/><text x="200" y="380" font-size="12" fill="#78716C" text-anchor="middle" font-family="sans-serif">Step 5: Master Pithora Sacred Horse</text></svg>`,
          svgSnippet: `<svg viewBox="0 0 400 400" class="w-full h-full"><rect width="400" height="400" fill="#FAF7F2"/><path d="M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 C245,120 250,140 240,150 C220,170 210,190 200,230 L280,230 C310,230 330,250 330,280 L330,340 M170,260 L170,350 M210,260 L210,350 M300,280 L300,350 M320,280 L320,350" stroke="#111827" stroke-width="3" fill="#D97706"/><circle cx="170" cy="180" r="4" fill="#FFFFFF"/><circle cx="190" cy="180" r="4" fill="#1D4ED8"/><circle cx="210" cy="180" r="4" fill="#FFFFFF"/><circle cx="180" cy="200" r="4" fill="#15803D"/><circle cx="200" cy="200" r="4" fill="#FFFFFF"/><polygon points="230,230 250,250 270,230" fill="#B91C1C" stroke="#FFFFFF" stroke-width="1.5"/></svg>`
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: "Prepare Terracotta Hut Ground",
          instruction: "Select a warm terracotta red background representing a fresh clay-and-straw smeared tribal cottage wall.",
          detail: "Select a warm terracotta red background representing a fresh clay-and-straw smeared tribal cottage wall.",
          hint: "The red clay foundation makes white and colored dots stand out brilliantly.",
          juniorHint: "Paint a warm friendly red wall like a happy village cottage!"
        },
        {
          stepNumber: 2,
          title: "Draw the Sacred Pithora Horse Silhouette",
          instruction: "Sketch the proud arched neck, broad chest, and four sturdy legs of the sacred horse.",
          detail: "Sketch the proud arched neck, broad chest, and four sturdy legs of the sacred horse.",
          hint: "Bhil horses have simplified, joyful silhouettes with high arched necks and perky ears.",
          juniorHint: "Draw a happy, trotting horse with perky ears!"
        },
        {
          stepNumber: 3,
          title: "Sketch the Tree of Abundance and Sun",
          instruction: "Draw an auspicious tree beside the horse and a radiant circular harvest sun in the upper sky.",
          detail: "Draw an auspicious tree beside the horse and a radiant circular harvest sun in the upper sky.",
          hint: "The tree represents granaries overflowing with grain, while the sun brings life.",
          juniorHint: "Draw a big smiling sun in the sky and a leafy tree beside him!"
        },
        {
          stepNumber: 4,
          title: "Add Flying Mane and Saddlecloth",
          instruction: "Draw an erect spiky mane along the crest of the neck and a triangular ceremonial saddlecloth on the back.",
          detail: "Draw an erect spiky mane along the crest of the neck and a triangular ceremonial saddlecloth on the back.",
          hint: "Use bright white strokes for the flowing tail and mane.",
          juniorHint: "Add a festive party saddle on his back and a swishy white tail!"
        },
        {
          stepNumber: 5,
          title: "Apply Base Ochre Infill",
          instruction: "Fill the entire horse body with warm yellow-orange ochre derived from forest clay.",
          detail: "Fill the entire horse body with warm yellow-orange ochre derived from forest clay.",
          hint: "Keep the body fill uniform so the dots stamped on top have maximum contrast.",
          juniorHint: "Color the whole horse with rich sunny orange like ripe turmeric!"
        },
        {
          stepNumber: 6,
          title: "Inscribe Harvest Dot Constellations",
          instruction: "Select the Dots tool and pack the horse body with dense, multi-colored rows of white, blue, and green dots.",
          detail: "Select the Dots tool and pack the horse body with dense, multi-colored rows of white, blue, and green dots.",
          hint: "Every dot represents a grain of wheat or rice in Bhil ritual belief.",
          juniorHint: "Tap tap tap! Fill the horse with glittering dots like stars in the night sky!"
        },
        {
          stepNumber: 7,
          title: "Decorate the Saddle with Zigzag Chevrons",
          instruction: "Inscribe festive red and white zigzag patterns on the ceremonial saddlecloth.",
          detail: "Inscribe festive red and white zigzag patterns on the ceremonial saddlecloth.",
          hint: "Geometric zigzags protect the rider and signify lightning and rain.",
          juniorHint: "Paint zigzags on his saddle like a colorful mountain trail!"
        },
        {
          stepNumber: 8,
          title: "Finalize Charcoal Contours and Eyes",
          instruction: "Draw an alert round eye on the horse and sharpen all leg and body edges with crisp black strokes.",
          detail: "Draw an alert round eye on the horse and sharpen all leg and body edges with crisp black strokes.",
          hint: "A clean outline locks the dot constellation together cleanly.",
          juniorHint: "Trace around your horse with dark lines so he is ready to gallop into the festival!"
        }
      ],
      referenceGuideSvgPath: "M140,260 C130,220 140,170 170,140 C190,120 220,110 240,110 L280,230 L330,280 M330,280 L330,340 M140,260 L140,340"
    }
  ],

  // -------------------------------------------------------------
  // Coming Soon Cities (Non-clickable in dropdown)
  // -------------------------------------------------------------
  comingSoonCities: [
    { id: "wardha", cityName: "Wardha", artName: "Sevagram Khadi & Earthen Charkha Art" },
    { id: "bhandara", cityName: "Bhandara", artName: "Kansa Bell-Metal Relief Art" },
    { id: "gondia", cityName: "Gondia", artName: "Pangoli Bamboo & Rice Stalk Mosaic Art" },
    { id: "gadchiroli", cityName: "Gadchiroli", artName: "Maria Madia Bell-Metal & Iron Votive Art" }
  ],

  // -------------------------------------------------------------
  // Kala Passport Badges
  // -------------------------------------------------------------
  badges: [
    {
      id: "first_stroke",
      title: "First Folk Stroke",
      desc: "Initiated your journey into Vidarbha traditional folk art.",
      icon: "🌟"
    },
    {
      id: "folk_apprentice",
      title: "Folk Apprentice",
      desc: "Explored all 5 stages of the step-by-step drawing player.",
      icon: "🎨"
    },
    {
      id: "master_of_dots",
      title: "Master of Dots (Bindu)",
      desc: "Practiced signature rhythmic dots of Gond or Bhil art.",
      icon: "⁖"
    },
    {
      id: "warrior_hatch",
      title: "Warrior's Hatch",
      desc: "Mastered Melghat Korku diagonal chisel chevrons.",
      icon: "⚔️"
    },
    {
      id: "paper_pioneer",
      title: "Paper Pioneer",
      desc: "Drew on physical paper and scanned with an external webcam.",
      icon: "📷"
    },
    {
      id: "story_explorer",
      title: "Folklore Keeper",
      desc: "Listened to the authentic cultural story behind an artwork.",
      icon: "📜"
    },
    {
      id: "master_artist",
      title: "Master Folk Disciple",
      desc: "Achieved an accuracy score of 80% or higher.",
      icon: "🏆"
    },
    {
      id: "avid_explorer",
      title: "Vidarbha Laureate",
      desc: "Discovered and practiced all 7 sacred regional art traditions.",
      icon: "👑"
    }
  ]
};
