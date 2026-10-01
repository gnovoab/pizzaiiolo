import type { PizzaRecipe, PizzaRecipeCategory, RecipeComparisonTable } from "./types";

/** Shared spec-comparison matrix for the Bufalina trilogy (Classica / a Freddo / de la Casa). */
const BUFALINA_TRILOGY_TABLE: RecipeComparisonTable = {
  headers: ["Spec", "Bufalina Classica", "Bufalina a Freddo", "Bufalina de la Casa"],
  rows: [
    { label: "Tomato Base", values: ["80–90g San Marzano DOP", "80–90g San Marzano DOP", "100–110g Fresh Datterini Fillets"] },
    { label: "Umami Layer", values: ["None", "None", "8–10g 36M Parmigiano Reggiano"] },
    { label: "Buffalo Mozzarella", values: ["80–90g (Baked)", "90–100g (Post-Bake)", "85–90g (Baked)"] },
    { label: "Pre-Bake Oil", values: ["None", "None", "2–3g Elizondo Nº3 Picual"] },
    { label: "Finishing Oil", values: ["Frantoio Muraglia Coratina", "Frantoio Muraglia Coratina", "Barbera Lorenzo N°5"] },
    { label: "Core Character", values: ["Integrated classic", "Thermal & textural contrast", "Sweet, rich & complex house special"] },
  ],
};

export const RECIPE_CATEGORIES: { id: PizzaRecipeCategory; label: string; blurb: string }[] = [
  { id: "classic", label: "Classic", blurb: "Margherita, Bufalina Classica, Bufalina a Freddo, Bufalina de la Casa, Cosacca, Marinara, Napolitan, Diavola, Prosciutto e Rucola, Ibérica Bianca, Prosciutto e Funghi, Capricciosa, Quattro Formaggi, Ortolana, Ripieno (Calzone)." },
  { id: "calzone-focaccia", label: "Calzone & Focaccia", blurb: "Folded and stuffed specialties." },
  { id: "innovative", label: "Innovative", blurb: "Modern and rustic twists on Italian tradition — Double Pepperoni & Hot Honey, Chorizo and Gorgonzola, Burratina, Bufala e Ibérico, Tettoia — Four Cheese & Truffle, Calabrese, Quattro Latte e 'Nduja, 'Nduja & Hot Honey, Cetarese, Cacio e Pepe, Carbonara, Amatriciana, Gricia, Pesto & Burrata, Salsiccia al Pesto, Boscaiola, Mortadella and Pistachio, La Oro Verde." },
  { id: "pumpkin", label: "Pumpkin Base", blurb: "Replace tomato with smooth roasted pumpkin cream — Sfiziosa, Sfiziosa Signature, Mantovana, Norcina, Zucca Salsiccia e Provola, Zucca e 'Nduja, Zucca Guanciale e Rosmarino, Zucca, Gorgonzola & Noci." },
];

export const RECIPES: PizzaRecipe[] = [
  {
    id: "margherita",
    number: 1,
    name: "Margherita",
    style: "Traditional Base — San Marzano DOP, Fior di Latte & Dual-Oil Protocol",
    category: "classic",
    image: "https://data.thefeedfeed.com/static/2021/04/13/16183401006075e904223ae.jpg",
    toppings: "70g–80g hand-crushed raw San Marzano DOP tomatoes, fine sea salt, 80g–90g well-drained Fior di Latte mozzarella, 4–5 fresh basil leaves, Elizondo Nº3 Picual EVOO (pre-bake), Frantoio Muraglia Coratina EVOO (post-bake finish).",
    menuIngredients: "Tomato, mozzarella, basil, olive oil",
    build: "The benchmark Neapolitan pie — clean San Marzano DOP, well-drained Fior di Latte, split basil staging, and dual-tier EVOO integration. Character: bright, clean and classically balanced.",
    postBake: "Rest 30 seconds on a wooden board (not a wire rack), scatter 1–2 fresh basil leaves, finish with a 3–4g swirl of Frantoio Muraglia Coratina EVOO, then slice and serve immediately.",
    flavorProgression: "Bright San Marzano → creamy melted Fior di Latte → warm basil & fruity Picual → fresh basil → peppery Coratina finish",
    videoGuide: "Classic San Marzano Tomato Sauce & Assembly",
    steps: [
      { title: "1. Dough Prep", sections: [
        { bullets: ["Stretch the 280g dough ball to 30–33cm on Caputo Semolina Rimacinata", "Flatten gently from the centre outward, pushing dough toward the perimeter to preserve gas in the cornicione"] },
        { intro: "Never:", bullets: ["Do not press out edge gas — preserve an airy, uncompressed 1.5–2cm cornicione"] },
      ] },
      { title: "2. Sauce Layer", sections: [
        { bullets: ["Apply 70g–80g hand-crushed San Marzano DOP tomatoes", "Spread outward in a spiral, leaving a clean 1–2cm border", "Season with a light pinch of fine sea salt"] },
        { intro: "Note:", bullets: ["If the tomatoes are excessively wet, drain in a sieve for 10–15 minutes before assembly"] },
        { intro: "Never:", bullets: ["No olive oil is ever stirred into the raw tomato sauce"] },
      ] },
      { title: "3. Cheese & Basil Staging", sections: [
        { bullets: ["Scatter 80g–90g well-drained Fior di Latte evenly across the tomato, torn into irregular pieces", "Leave small gaps between pieces to minimise moisture pooling", "Tuck 2–3 small basil leaves under or between the mozzarella pieces to protect them from direct flame scorching"] },
      ] },
      { title: "4. Pre-Bake Oil Drizzle", sections: [
        { bullets: ["Apply a light 2g–3g micro-drizzle of Elizondo Nº3 Picual EVOO over the assembled pizza"] },
        { intro: "Purpose:", bullets: ["Fresh green/fruity integration during the bake"] },
      ] },
      { title: "5. Launch Check & Gozney Bake", sections: [
        { bullets: ["Ensure the pizza slides cleanly on the peel"] },
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 420°C–440°C", "🔥 Dome/Air: 450°C–480°C", "⏱ Cook Time: 60–75 seconds"] },
        { bullets: ["Rotate regularly and adjust the top flame dynamically according to cornicione browning and mozzarella colour — do not follow a fixed flame setting"] },
      ] },
      { title: "6. Rest & Finish", sections: [
        { intro: "Rest Protocol:", bullets: ["Transfer directly to a WOODEN BOARD (do NOT use a wire rack) and rest for 30 seconds"] },
        { bullets: ["Scatter 1–2 fresh basil leaves", "Finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO", "Slice and serve immediately"] },
        { intro: "Profile:", bullets: ["Bright San Marzano → creamy melted Fior di Latte → warm basil & fruity Picual → fresh basil → peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "bufalina-classica",
    number: 2,
    name: "Bufalina Classica",
    style: "Traditional Neapolitan — Integrated Hot San Marzano & Melted Buffalo Mozzarella",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTS95WYSPFblZrzxmXUcNGNROGg7uib_xsYLYqWMFhRg&s=10",
    toppings: "San Marzano DOP tomato sauce, Mozzarella di Bufala Campana DOP (baked), fresh basil leaves, Frantoio Muraglia Coratina EVOO.",
    menuIngredients: "Tomato, mozzarella di bufala, basil, olive oil",
    build: "Bufalina Classica is the traditional, integrated take on Margherita con Bufala: the buffalo mozzarella is drained and rested, then baked directly into the hot San Marzano DOP sauce so the fat melts straight into the tomato. Character: integrated, hot, savoury and classic.",
    postBake: "Rest 30 seconds on a wooden board, then finish with 1–2 fresh basil leaves and a light swirl of Frantoio Muraglia Coratina EVOO (Intense Fruity).",
    variations: [
      { relatedId: "bufalina-a-freddo", relatedName: "Bufalina a Freddo", summary: "Baked vs. Post-Bake Buffalo Mozzarella — integrated heat vs. cold, silky contrast." },
      { relatedId: "bufalina-de-la-casa", relatedName: "Bufalina de la Casa", summary: "San Marzano classic vs. sweet Datterini & 36-Month Parmigiano house special." },
    ],
    comparisonTable: BUFALINA_TRILOGY_TABLE,
    steps: [
      { title: "1. Prep Tomato", sections: [
        { bullets: ["80g–90g San Marzano DOP tomatoes, hand-crushed raw with 1g fine sea salt per 100g of tomato", "No cooking, no oil in the sauce"] },
      ] },
      { title: "2. Drain Cheese", sections: [
        { bullets: ["Tear 80g–90g Mozzarella di Bufala Campana DOP into large pieces", "Place in a sieve over a bowl and refrigerate UNCOVERED for 1–2 hours", "Rest at room temperature for 30 minutes before baking"] },
      ] },
      { title: "3. Stretch & Assemble", sections: [
        { bullets: ["Stretch the 280g dough ball to 30–33cm", "Spread 80g–90g sauce, leaving a 1.5–2cm rim clear", "Distribute the 80g–90g drained Bufala evenly", "Tuck 2–3 fresh basil leaves under the cheese", "No oil before baking"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🧱 Stone Floor: 430°C–440°C", "⏱ Cook Time: 60–90 seconds", "🔥 Adjust top flame dynamically based on cornicione browning"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Rest 30 seconds on a WOODEN BOARD (no wire rack)", "Finish with 1–2 fresh basil leaves and a light swirl of Frantoio Muraglia Coratina EVOO"] },
        { intro: "Profile:", bullets: ["Hot San Marzano → melted creamy buffalo → cooked basil → intense Coratina finish"] },
      ] },
    ],
  },
  {
    id: "bufalina-a-freddo",
    number: 3,
    name: "Bufalina a Freddo",
    style: "Contemporary Neapolitan — Hot Blistered Tomato & Cold Silky Buffalo Crown",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTS95WYSPFblZrzxmXUcNGNROGg7uib_xsYLYqWMFhRg&s=10",
    toppings: "San Marzano DOP tomato sauce (sauce-only bake), Mozzarella di Bufala Campana DOP (added post-bake, never baked), fresh basil leaves, Frantoio Muraglia Coratina EVOO.",
    menuIngredients: "Tomato, mozzarella di bufala (cold), basil, olive oil",
    build: "Bufalina a Freddo bakes a sauce-only base, then crowns it with cold, freshly-drained buffalo mozzarella straight after the bake. The mozzarella is NEVER baked, creating an intentional thermal and textural contrast — luxurious and fresh. Character: hot, blistered crust against cool, silky buffalo.",
    postBake: "Rest 30 seconds on a wooden board, tear 90g–100g cold/room-temp Bufala directly over the hot sauce base, scatter 1–2 fresh basil leaves and finish with a light swirl of Frantoio Muraglia Coratina EVOO (Intense Fruity).",
    variations: [
      { relatedId: "bufalina-classica", relatedName: "Bufalina Classica", summary: "Post-Bake vs. Baked Buffalo Mozzarella — cold, silky contrast vs. integrated heat." },
      { relatedId: "bufalina-de-la-casa", relatedName: "Bufalina de la Casa", summary: "Thermal contrast classic vs. sweet Datterini & 36-Month Parmigiano house special." },
    ],
    comparisonTable: BUFALINA_TRILOGY_TABLE,
    steps: [
      { title: "1. Prep Tomato", sections: [
        { bullets: ["80g–90g San Marzano DOP tomatoes, hand-crushed raw with 1g fine sea salt per 100g of tomato", "No cooking, no oil in the sauce"] },
      ] },
      { title: "2. Prep Cheese", sections: [
        { bullets: ["Keep 90g–100g Mozzarella di Bufala Campana DOP cold in the fridge until service", "Immediately before finishing, drain excess whey and tear into large, irregular pieces"] },
      ] },
      { title: "3. Stretch & Assemble", sections: [
        { bullets: ["Stretch the 280g dough ball to 30–33cm", "Spread 80g–90g sauce, leaving a 1.5–2cm rim clear", "Add nothing else — no cheese, no basil, no oil"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🧱 Stone Floor: 430°C–440°C", "⏱ Cook Time: 60–90 seconds — bake the sauce-only pie until the crust is blistered and the tomato is hot and lightly reduced"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Rest 30 seconds on a WOODEN BOARD", "Tear 90g–100g cold or room-temperature Bufala directly over the hot sauce base", "Scatter 1–2 fresh basil leaves and finish with a light swirl of Frantoio Muraglia Coratina EVOO"] },
        { intro: "Profile:", bullets: ["Hot San Marzano → blistered crust → cool, silky buffalo → fresh basil → intense Coratina finish"] },
      ] },
    ],
  },
  {
    id: "bufalina-de-la-casa",
    number: 4,
    name: "Bufalina de la Casa",
    style: "House Neapolitan — Fresh Datterini, Buffalo Mozzarella & 36-Month Parmigiano",
    category: "classic",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/doc-carmnella.jpg",
    toppings: "100g–110g sweet Datterini tomatoes (filleted lengthwise, lightly salted, drained), 8g–10g Parmigiano Reggiano DOP 36-Month, 85g–90g Mozzarella di Bufala Campana DOP, 4–5 fresh basil leaves, Elizondo Nº3 Picual EVOO pre-bake, Barbera Lorenzo N°5 EVOO finishing swirl.",
    menuIngredients: "Datterini tomato, Parmigiano Reggiano, buffalo mozzarella, basil, olive oil",
    build: "House-style Neapolitan built around sweet fresh Datterini fillets, a 36-month Parmigiano umami layer, creamy buffalo mozzarella, and a Barbera Lorenzo N°5 finish. Character: sweet, rich, complex, and umami-driven.",
    postBake: "Rest 30 seconds on a wooden board, then scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO (Monovarietal Nocellara del Belice DOP).",
    variations: [
      { relatedId: "bufalina-classica", relatedName: "Bufalina Classica", summary: "Sweet Datterini & 36-Month Parmigiano house special vs. San Marzano classic." },
      { relatedId: "bufalina-a-freddo", relatedName: "Bufalina a Freddo", summary: "Sweet Datterini & 36-Month Parmigiano house special vs. thermal contrast classic." },
    ],
    comparisonTable: BUFALINA_TRILOGY_TABLE,
    steps: [
      { title: "1. Prep Datterini", sections: [
        { bullets: ["Slice Datterini lengthwise into thin fillets", "Season lightly with fine sea salt", "Place in a sieve for 10 minutes to draw out excess juice — do not add oil"] },
      ] },
      { title: "2. Drain Buffalo", sections: [
        { bullets: ["Tear 85g–90g Mozzarella di Bufala Campana DOP into medium pieces", "Drain UNCOVERED in a sieve in the fridge for 1–2 hours", "Rest at room temperature for 30 minutes pre-bake"] },
      ] },
      { title: "3. Stretch Dough", sections: [
        { bullets: ["Stretch the 280g dough ball to 30cm–33cm on semolina rimacinata, preserving a soft cornicione"] },
      ] },
      { title: "4. Layer Assembly", sections: [
        { bullets: ["Spread 100g–110g drained Datterini fillets evenly, leaving a 1.5–2cm rim clear", "Grate 8g–10g Parmigiano Reggiano DOP 36-Month directly onto the tomatoes", "Arrange the drained 85g–90g Bufala DOP evenly", "Tuck 2–3 fresh basil leaves between the cheese", "Micro-drizzle 2g–3g Elizondo Nº3 Picual EVOO"] },
      ] },
      { title: "5. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🧱 Stone Floor: 430°C–440°C", "⏱ Cook Time: 60–90 seconds", "🔥 Turn regularly and adjust top flame to prevent cheese scorching"] },
      ] },
      { title: "6. Rest & Finish", sections: [
        { intro: "Rest Protocol:", bullets: ["Rest 30 seconds on a WOODEN BOARD (do NOT use a wire rack)"] },
        { bullets: ["Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO"] },
        { intro: "Profile:", bullets: ["Sweet blistered Datterini → savory Parmigiano 36M umami → rich creamy buffalo → fresh herbal basil → buttery Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "cosacca",
    number: 5,
    name: "Cosacca",
    style: "Historic Neapolitan — San Marzano DOP, Pecorino Romano & Dual-Oil Protocol",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76JLGq7RrjabxAASmGaLI7E9ZYoLUAyTVG41MbMh-KA&s=10",
    toppings: "70g–80g hand-crushed San Marzano DOP tomatoes, 10g–12g Pecorino Romano DOP (8g–10g pre-bake, 2g–3g post-bake), 3–4 fresh basil leaves, 2g–3g Elizondo Nº3 Picual EVOO pre-bake, 2g–3g Frantoio Muraglia Coratina EVOO post-bake. No mozzarella.",
    menuIngredients: "San Marzano DOP, Pecorino Romano, basil, Picual & Coratina EVOO",
    build: "A historic Neapolitan classic — a minimalist, mozzarella-free build defined by bright San Marzano DOP, dual-stage Pecorino Romano DOP, and dual EVOO integration.",
    postBake: "Rest on a wooden board for 30–60 seconds, distribute the remaining 2g–3g finely grated Pecorino Romano DOP as a light snowfall over the hot pizza, finish with a 2g–3g swirl of Frantoio Muraglia Coratina EVOO, then slice and serve immediately.",
    flavorProgression: "Bright San Marzano → salty toasted Pecorino Romano → warm basil → fruity Picual → peppery Coratina finish",
    videoGuide: "Cosacca — Traditional Neapolitan Technique",
    videoUrl: "https://www.youtube.com/shorts/ZI231wvnZtA",
    steps: [
      { title: "1. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on Caputo Semolina Rimacinata", "Press the gas outward into the perimeter to form a pronounced, airy 1.5cm cornicione", "Keep the center thin and evenly stretched"] },
      ] },
      { title: "2. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 70g–80g hand-crushed San Marzano DOP evenly across the center, leaving a 1.5–2cm clean rim", "Season with a light pinch of fine sea salt"] },
        { intro: "Layer 2 — Pecorino Romano:", bullets: ["Distribute 8g–10g finely grated Pecorino Romano DOP evenly over the tomato, seasoning the sauce without creating a dense cheese blanket"] },
        { intro: "Layer 3 — Basil:", bullets: ["Lay 3–4 fresh basil leaves directly over the tomato and Pecorino layer"] },
        { intro: "Layer 4 — Picual:", bullets: ["Apply a 2g–3g spiral drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "3. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "🔥 Manage the top flame dynamically after launch, reducing as needed to control Pecorino browning while allowing the cornicione to develop strong leopard spotting", "⏱ Cook Time: 75–90 seconds", "🔄 Rotate regularly for an even rise, browning and leopard spotting"] },
      ] },
      { title: "4. Rest & Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds", "Distribute the remaining 2g–3g of finely grated Pecorino Romano DOP as a light snowfall over the hot pizza", "Finish with a 2g–3g swirl of Frantoio Muraglia Coratina EVOO", "Slice and serve immediately"] },
        { intro: "Profile:", bullets: ["Bright San Marzano → salty toasted Pecorino Romano → warm basil → fruity Picual → peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "marinara",
    number: 6,
    name: "Marinara",
    style: "Historic Neapolitan — San Marzano DOP, Garlic, Wild Oregano & Dual EVOO",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbF4nIbd7R8H5Ugiak8LK3jFHSZ3_ULRo6lC7wE3Ru6Q&s=10",
    toppings: "80g–90g hand-crushed San Marzano DOP tomatoes, 4g–6g razor-thin garlic, 0.8g–1.2g dried wild oregano, 4–5 fresh basil leaves, 3g–4g Elizondo Nº3 Picual EVOO pre-bake, 3g–4g Frantoio Muraglia Coratina EVOO post-bake. No cheese.",
    menuIngredients: "San Marzano DOP, garlic, wild oregano, basil, Picual & Coratina EVOO",
    build: "A historic mozzarella-free Neapolitan classic built around bright San Marzano DOP, razor-thin garlic, wild oregano, and a two-stage EVOO finish.",
    postBake: "Rest on a wooden board for 30–60 seconds, apply a 3g–4g finishing swirl of Frantoio Muraglia Coratina EVOO across the hot pie, then slice and serve immediately.",
    flavorProgression: "Concentrated San Marzano → sweet baked garlic → fragrant wild oregano → baked Picual → peppery Coratina finish",
    videoGuide: "Marinara — No-Cheese Technique",
    videoUrl: "https://www.youtube.com/shorts/SsJtUw2jnV4",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Drain crushed San Marzano DOP tomatoes in a fine sieve for 10 minutes if watery, then season with 0.8g–1.2g fine sea salt", "Slice garlic cloves (4g–6g, 1 large or 2 small) as thinly as possible using a mandoline or razor-sharp knife", "Keep dried wild oregano ready at assembly"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on Caputo Semolina Rimacinata, preserving gas in the airy 1.5–2cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 80g–90g seasoned San Marzano DOP evenly across the center, leaving a 1.5–2cm rim clean"] },
        { intro: "Layer 2 — Garlic:", bullets: ["Scatter 4g–6g razor-thin garlic slices evenly over the tomato sauce, avoiding clumping"] },
        { intro: "Layer 3 — Oregano:", bullets: ["Rub 0.8g–1.2g wild oregano between your palms directly over the tomato and garlic"] },
        { intro: "Layer 4 — Basil:", bullets: ["Tuck 4–5 fresh basil leaves naturally into the sauce"] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 3g–4g spiral drizzle of Elizondo Nº3 Picual EVOO over the entire build, ensuring the garlic slices are lightly coated to protect them from scorching"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "🔥 Manage the top flame dynamically after launch to allow the tomato sauce to reduce and concentrate while allowing the garlic to soften and sweeten without scorching the herbs", "⏱ Cook Time: 75–90 seconds", "🔄 Rotate regularly for an even rise and leopard spotting"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds", "Apply a 3g–4g finishing swirl of Frantoio Muraglia Coratina EVOO across the hot pie", "Slice and serve immediately"] },
        { intro: "Profile:", bullets: ["Concentrated San Marzano → sweet baked garlic → fragrant wild oregano → baked Picual → peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "napoli",
    number: 7,
    name: "Napolitan",
    category: "classic",
    image: "https://italianfoodforever.com/wp-content/uploads/2015/01/napolipizza4.jpg",
    toppings: "San Marzano tomatoes, pre-dried mozzarella strips, premium Cantabrian anchovies, Kalamata black olives (halved and pitted), rinsed capers, fresh garlic, dried wild oregano.",
    menuIngredients: "Tomato, mozzarella, anchovies, olives, capers, garlic, oregano",
    build: "Open the 280g dough ball to a 30–33cm disc. Spread your well-drained tomato base over the dough circle. Lay down your mozzarella matchsticks. Securely map out the anchovy fillets, olive halves, and a scattered tablespoon of rinsed capers. Finish with one garlic clove sliced paper-thin and a generous pinch of dried wild oregano.",
    postBake: "Finish with a post-bake swirl of Barbera Lorenzo Nº5 (softens the anchovy punch with a creamy finish) or Frantoio Muraglia Coratina (for a bold, peppery kick), then serve immediately.",
    videoGuide: "True Italian Savory Flavors & Anchovy Placement",
    videoUrl: "https://www.youtube.com/shorts/sekbRulg8iA",
    steps: [
      { title: "1. Base & Portioning", sections: [
        { bullets: ["280g dough ball, hand-stretched to a 30–33cm disc", "75g–80g crushed San Marzano DOP tomatoes, well-drained to prevent sogginess", "Spread evenly in a thin circular layer", "No spiral patterning — just uniform coverage", "1–2 cm clean cornicione border", "No seasoning or only a microscopic pinch of salt"] },
      ] },
      { title: "2. Mozzarella", sections: [{ bullets: ["Fior di Latte, very well-drained", "Torn irregular pieces (not matchsticks)", "Sparse distribution", "Visible tomato between pieces", "Goal: light coverage, not full melt blanket"] }] },
      { title: "3. Anchovy (Primary Salt Source)", sections: [
        { bullets: ["2–3 anchovy fillets max", "Placed after mozzarella", "Broken into smaller segments and distributed lightly", "No pattern, no “mapping”", "Anchovy = seasoning, not feature"] },
        { intro: "Tip:", bullets: ["Tuck anchovy segments and thin garlic slices against the mozzarella or sauce so they melt into an umami glaze rather than burning under high heat"] },
        { intro: "Salinity Rule:", bullets: ["Anchovies are the primary salt source — keep capers rinsed and sparse (see Step 5) so the overall salt balance doesn't tip over"] },
      ] },
      { title: "4. Olives (Optional — Choose Instead of Capers)", sections: [{ bullets: ["4–6 black olives, pitted and halved", "Light scatter only", "OR omit entirely for stricter Naples style"] }] },
      { title: "5. Capers (Optional — Only If No Olives)", sections: [
        { bullets: ["1 tsp, well rinsed and dried", "Sparse distribution", "Must not overlap with anchovy clusters"] },
        { intro: "Salinity Rule:", bullets: ["Rinse capers thoroughly under cold water to strip excess brine — unrinsed capers stacked on top of the anchovies will easily overpower the pizza's salt balance"] },
      ] },
      { title: "6. Garlic (Optional, Very Controlled)", sections: [
        { bullets: ["2–4 ultra-thin slices", "Only if you want a Marinara-adjacent influence", "Should not brown or cluster"] },
        { intro: "Tip:", bullets: ["Tuck anchovy segments and thin garlic slices against the mozzarella or sauce so they melt into an umami glaze rather than burning under high heat"] },
      ] },
      { title: "7. Oregano (Style Dependent)", sections: [{ bullets: ["Pinch of dried oregano", "Only if aiming for Marinara-leaning profile", "Otherwise omit for Salvo-style balance"] }] },
      { title: "8. Olive Oil (Final Balance Element)", sections: [
        { intro: "Pre-Bake:", bullets: ["Micro-drizzle of Elizondo Nº3 Picual EVOO"] },
        { intro: "Post-Bake (Choose One):", bullets: ["Barbera Lorenzo Nº5 (Nocellara del Belice DOP) — a creamy, delicate swirl that softens the anchovy punch", "Frantoio Muraglia Coratina (Intense Fruity) — for a bold, peppery kick that stands up to the anchovy and garlic"] },
      ] },
    ],
  },
  {
    id: "diavola",
    number: 8,
    name: "Diavola",
    style: "Margherita con Salame Piccante",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd4NQF9AoDHLYIDv3yGqhdZq9HBRfQ8WuGZUuR5s9Vw&s=10",
    toppings: "San Marzano tomato sauce, Fior di Latte mozzarella, Salame Piccante (Neapolitan spicy salami, Calabrian Soppressata, or pepperoni), Parmigiano-Reggiano, fresh basil, Elizondo Nº3 Picual EVOO, Frantoio Muraglia Coratina EVOO, optional chili flakes or chili oil.",
    menuIngredients: "Tomato, mozzarella, spicy salami, Parmigiano, basil",
    build: "A 280g dough ball, hand-stretched to a 30–33cm disc, topped with a Margherita base and spicy cured salami — no olives required. (Quick tip: if you order this in Italy, always ask for Salame Piccante rather than \"pepperoni,\" as peperoni with one \"p\" means bell peppers in Italian!)",
    postBake: "Post-bake, add fresh basil and a finishing swirl of Frantoio Muraglia Coratina EVOO (Intense Fruity) to complement the spicy salami, or an optional drizzle of chili-infused olive oil.",
    steps: [
      { title: "1. Toppings & Proportions (280g Dough Ball, 30–33cm Stretch)", sections: [
        { bullets: ["280g dough ball, hand-stretched to a 30–33cm disc", "80g San Marzano Tomato Sauce (crushed DOP San Marzano tomatoes with 1g fine salt per 100g)", "80g–90g Fior di Latte Mozzarella (cubed or cut into strips and well-drained)", "35g–45g Salame Piccante (thinly sliced Neapolitan spicy salami, Calabrian Soppressata, or pepperoni)", "15g Parmigiano-Reggiano (finely grated)", "4–5 Fresh Basil Leaves", "Elizondo Nº3 Picual EVOO (pre-bake light drizzle)", "Frantoio Muraglia Coratina EVOO (Intense Fruity — post-bake finish)", "Dried Chili Flakes or Chili Oil (optional, for extra heat)"] },
        { intro: "Why 35g–45g:", bullets: ["Keeping the salami to 35g–45g gives full coverage without the rendered fat pooling into excess oil on the bake"] },
      ] },
      { title: "2. Prep the Cheese", sections: [
        { bullets: ["Cut the Fior di Latte into strips and drain in a sieve for 30–60 minutes"] },
        { intro: "Why:", bullets: ["Keeping excess moisture off the top ensures the rendered fats from the salami blend smoothly with the cheese rather than becoming watery"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your 280g dough ball using semolina to a 30–33 cm disc", "Leave an airy 1.5–2 cm cornicione"] },
      ] },
      { title: "4. Assemble", sections: [
        { bullets: ["Spread the San Marzano tomato sauce evenly from the center outward in a spiral", "Dust with the finely grated Parmigiano-Reggiano", "Distribute the drained Fior di Latte strips across the sauce", "Lay the 35g–45g of Salame Piccante evenly across the pizza", "Add fresh basil leaves and a light drizzle of Elizondo Nº3 Picual EVOO before launching into the oven"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor: 420°C–450°C", "🔥 Air: 450°C–480°C", "🔥 Flame: turn down to LOW/MEDIUM immediately after launch to prevent burnt salami edges", "⏱ Cook time: 60–75 seconds total", "The heat crisps the edges of the salami slices, making them cup up slightly and release their spicy oil over the melted mozzarella"] },
        { intro: "Home Oven with Pizza Steel/Stone:", bullets: ["Bake at max temp near the top heating element for 5–7 minutes until the crust is leopard-spotted and the salami edges are crisp"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Post-bake, add fresh basil and a finishing swirl of Frantoio Muraglia Coratina EVOO (Intense Fruity) to complement the spicy salami, or an optional drizzle of chili-infused olive oil"] },
      ] },
    ],
  },
  {
    id: "seven-stars-parma",
    number: 9,
    name: "Prosciutto e Rucola",
    style: "Contemporary Neapolitan — Thermal & Texture Contrasts",
    category: "classic",
    image: "https://theuppercrustpizzeria.co.uk/cdn/shop/products/Parma.jpg?v=1639743529",
    toppings: "San Marzano tomato sauce stirred with Elizondo Nº3 Picual EVOO, Mozzarella di Bufala DOP mixed with a touch of Fior di Latte (pre-bake), extra fresh Mozzarella di Bufala DOP (post-bake), paper-thin cured ham (Serrano Ham or Prosciutto), fresh wild rocket (arugula) tossed in Barbera Lorenzo Nº5, Barbera Lorenzo Nº5 finishing swirl.",
    menuIngredients: "Tomato, mozzarella di bufala, Serrano ham or Prosciutto, arugula, olive oil",
    build: "Hot blistered base topped with melted & fresh Bufala DOP, paper-thin cured ham (Serrano Ham or Prosciutto), fresh wild rocket, and finished with Barbera Lorenzo Nº5 EVOO.",
    steps: [
      { title: "1. Base Layer", sections: [
        { bullets: ["San Marzano tomato sauce, thin and even", "Stir in Elizondo Nº3 Picual EVOO before spreading"] },
        { intro: "Key idea:", bullets: ["Tomato = moisture + acidity base"] },
      ] },
      { title: "2. Cheese Mix (Pre-Bake)", sections: [
        { bullets: ["Mozzarella di Bufala DOP mixed with a small amount of Fior di Latte", "Well-drained before mixing", "Torn and scattered evenly across the tomato base"] },
        { intro: "Effect:", bullets: ["Fior di Latte adds structural melt and stability", "Bufala keeps the rich, creamy dairy character"] },
      ] },
      { title: "3. Bake (Single Bake Only)", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 420°C–440°C", "🔥 Dome/Air: 450°C–480°C", "⏱ Cook time: 60–75 seconds"] },
        { intro: "Goal:", bullets: ["A sturdy, crisp base that holds up under the fresh post-bake toppings without structural folding", "Crust fully blistered and airy", "Cheese mix melted and glossy", "Everything finishes in one bake — no flash return"] },
      ] },
      { title: "4. Fresh Bufala (Post-Bake)", sections: [
        { bullets: ["A little more fresh Mozzarella di Bufala DOP, torn", "Placed straight onto the hot, just-baked pizza"] },
        { intro: "Effect:", bullets: ["Adds a cool, creamy contrast against the melted cheese underneath"] },
      ] },
      { title: "5. Cured Ham — Serrano / Prosciutto (Primary Cured Meat)", sections: [
        { bullets: ["Paper-thin Serrano Ham or Prosciutto", "Draped loosely over the fresh bufala"] },
        { intro: "Effect:", bullets: ["Fat gently relaxes from residual heat, not cooked", "Quality paper-thin cured ham's pronounced savory bite and nutty fat profile creates a superior contrast with the warm Bufala mozzarella and peppery rocket"] },
      ] },
      { title: "6. Rocket (Arugula)", sections: [
        { bullets: ["Fresh wild rocket, hand-torn", "Added on top, no heat exposure"] },
        { intro: "Tip:", bullets: ["Lightly toss the fresh wild rocket with a drop of Barbera Lorenzo Nº5 before laying it over the cured ham — the smooth, sweet almond notes of this oil perfectly balance the peppery rocket and salty ham without adding bitterness"] },
        { intro: "Effect:", bullets: ["Fresh peppery lift against warm dairy and ham"] },
      ] },
      { title: "7. Olive Oil Finish", sections: [
        { bullets: ["Finishing swirl of Barbera Lorenzo Nº5 (Nocellara del Belice)"] },
      ] },
    ],
  },
  {
    id: "parma-bianca",
    number: 10,
    name: "Ibérica Bianca",
    style: "Contemporary Neapolitan White Base — Ibérico Fat & Creamy Dairy",
    category: "classic",
    image: "https://ginopizzaovens.com/cdn/shop/articles/gino-pizza-fior-latte-parma-ham-rocket-parmesan.jpg?v=1683056519&width=1500",
    toppings: "Fior di Latte cheese, ricotta, Jamón de Cebo Ibérico (Iberico ham), rocket (arugula), Parmigiano-Reggiano, Barbera Lorenzo Nº5 EVOO.",
    menuIngredients: "Mozzarella, ricotta, Iberico ham, arugula, Parmigiano",
    build: "A luxurious white pizza with a Fior di Latte and fresh Ricotta base, topped post-bake with paper-thin Jamón de Cebo Ibérico, fresh wild rocket, Parmigiano-Reggiano, and finished with Barbera Lorenzo Nº5 EVOO.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style dough (00 flour, well-fermented, elastic)", "280 g dough ball (default)", "Stretch to 30–33 cm", "Light, airy cornicione", "Do not degas edge gas"] },
        { intro: "Key idea:", bullets: ["Air = oven spring + structure for dairy + ham balance"] },
      ] },
      { title: "2. Base (Bianca Foundation)", sections: [
        { bullets: ["No tomato sauce", "No olive oil under cheese (Neapolitan standard)", "Optional: tiny pinch of fine sea salt only"] },
        { intro: "Key idea:", bullets: ["Clean dough expression — dairy must define flavour, not fat or tomato"] },
      ] },
      { title: "3. Fior di Latte & Ricotta (Pre-Bake Application)", sections: [
        { bullets: ["Well-drained Fior di Latte", "Torn irregular pieces (not uniform cubes)", "Small spaced dollops of ricotta", "Even but light distribution", "Leave small gaps for melt flow"] },
        { intro: "Effect:", bullets: ["Melts directly in oven", "Ricotta adds creamy, milky pockets", "Becomes integrated dairy layer", "Avoids post-bake reconstruction"] },
      ] },
      { title: "4. Bake (Single Cycle Only)", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 420°C–440°C", "🔥 Air/Dome: 450°C–480°C", "⏱ Cook time: 60–75 seconds"] },
        { intro: "Goal:", bullets: ["Full bake of dough", "Full melt of Fior di Latte in-oven", "Light blistering on cornicione", "Slight browning on exposed cheese edges"] },
        { intro: "Critical rule:", bullets: ["No second oven entry — everything must finish in one clean single-bake cycle"] },
      ] },
      { title: "5. Post-Bake Ibérico Ham Layer", sections: [
        { bullets: ["Jamón de Cebo Ibérico (Iberico ham)", "Paper-thin slices", "Draped loosely over hot mozzarella"] },
        { intro: "Tip:", bullets: ["Bring Jamón de Cebo Ibérico to room temperature before topping — the low melting point of Ibérico fat allows it to turn translucent and release its nutty aroma instantly upon contact with the hot ricotta base"] },
        { intro: "Effect:", bullets: ["Fat softens from residual heat", "Salt blooms across warm dairy", "Texture remains silk-like, not cooked"] },
      ] },
      { title: "6. Rocket (Post-Bake)", sections: [
        { bullets: ["Fresh wild rocket (arugula)", "Added immediately after oven exit", "Hand-torn, loose scatter"] },
        { intro: "Effect:", bullets: ["Peppery freshness", "Cuts dairy richness", "Adds temperature contrast (hot base / cold greens)"] },
      ] },
      { title: "7. Parmigiano Finish", sections: [
        { bullets: ["Freshly grated or shaved Parmigiano-Reggiano", "Light, even dusting over entire pizza"] },
        { intro: "Effect:", bullets: ["Umami lift", "Subtle salt structure", "Integrates prosciutto + dairy profile"] },
      ] },
      { title: "8. Olive Oil Finish", sections: [
        { bullets: ["Barbera Lorenzo Nº5 (Monovarietal Nocellara del Belice) — required post-bake finishing EVOO", "Final light drizzle only"] },
        { intro: "Why:", bullets: ["Its sweet, buttery, low-bitterness profile complements the delicate ricotta and Ibérico fat without overpowering them"] },
        { intro: "Effect:", bullets: ["Aromatic finish", "Softens salt edges", "Adds shine and perfume"] },
      ] },
    ],
  },
  {
    id: "prosciutto-e-funghi",
    number: 11,
    name: "Prosciutto e Funghi",
    style: "Classic Neapolitan — Blistered San Marzano, Sliced Cotto & Earthy Champignons",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAP5MdbljTAVL7meY_XhtUQ1HIdHrEIdsxxZk_dqVevQ&s=10",
    toppings: "San Marzano tomato sauce (Agro Sarnese-Nocerino DOP), Elizondo Nº3 Picual EVOO (pre-bake), house-made Fior di Latte mozzarella, sliced prosciutto cotto (cooked ham), Champignon mushrooms, Barbera Lorenzo Nº5 EVOO (post-bake), Parmigiano Reggiano DOP aged 24 months, fresh basil.",
    menuIngredients: "Tomato, mozzarella, cooked ham, Champignon mushrooms, Parmigiano Reggiano, basil, olive oil",
    build: "A comforting, familiar classic built on San Marzano tomatoes from the Agro Sarnese-Nocerino DOP finished pre-bake with a micro-drizzle of Elizondo Nº3 Picual EVOO, and our own house-made Fior di Latte. Sliced prosciutto cotto and Champignon mushrooms bake right into the pizza, then it's finished post-bake with Barbera Lorenzo Nº5 (Nocellara del Belice DOP), shavings of Parmigiano Reggiano DOP aged 24 months, and fresh basil for a smooth, velvety finish.",
    postBake: "Finish with Barbera Lorenzo Nº5 (Nocellara del Belice DOP), shaved Parmigiano Reggiano DOP and fresh basil leaves for a smooth, velvety finish.",
    steps: [
      { title: "1. Dough", sections: [{ bullets: ["Stretch the 280g dough ball to a target size of 30–32 cm", "Preserve a light, airy cornicione"] }] },
      { title: "2. Tomato Base", sections: [{ bullets: ["60g–70g San Marzano tomato sauce (Agro Sarnese-Nocerino DOP)", "Spread in a thin, even layer", "Leave a clean 1.5–2 cm border", "A micro-drizzle of Elizondo Nº3 Picual EVOO over the tomato"] }] },
      { title: "3. Mozzarella, Ham & Mushroom", sections: [
        { bullets: ["70g–80g house-made Fior di Latte, well-drained and torn into pieces", "50g prosciutto cotto (cooked ham), thinly sliced", "40g Champignon mushrooms"] },
        { intro: "Mushroom Tip:", bullets: ["Ensure Champignon mushrooms are sliced paper-thin or lightly dry-sautéed prior to topping to prevent water pooling on the pizza"] },
      ] },
      { title: "4. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 420°C–440°C", "🔥 Dome/Air: 450°C–480°C", "⏱ Cook time: 60–75 seconds", "🔄 Rotate every 15–20 seconds"] },
      ] },
      { title: "5. Finish", sections: [{ bullets: ["Finish with Barbera Lorenzo Nº5 (Nocellara del Belice DOP) drizzled over the hot pizza", "Shave Parmigiano Reggiano DOP (24 months) over the top", "Scatter fresh basil leaves for a smooth, velvety finish"] }] },
    ],
  },
  {
    id: "capricciosa",
    number: 12,
    name: "Capricciosa",
    style: "The Neapolitan Big Four — Cotto, Salame, Artichokes & Champignons",
    category: "classic",
    image: "https://positano.lv/wp-content/uploads/2021/12/Capricciosa-1.png",
    toppings: "San Marzano tomato sauce (Agro Sarnese-Nocerino DOP), Elizondo Nº3 Picual EVOO (pre-bake), Fior di Latte mozzarella, prosciutto cotto (cooked ham), Salame di Mugnano del Cardinale (garlic-and-pepper cured salami), Funghi Champignon, Carciofini Mammarelle artichoke hearts, Barbera Lorenzo Nº5 EVOO (post-bake), Parmigiano-Reggiano DOP aged 24 months, fresh basil.",
    menuIngredients: "Tomato, mozzarella, cooked ham, salami, mushroom, artichoke, Parmigiano, basil",
    build: "One of Naples' 'Big Four' classics alongside Margherita, Marinara and Diavola. A San Marzano base finished pre-bake with a micro-drizzle of Elizondo Nº3 Picual EVOO, then prosciutto cotto, spicy Salame di Mugnano del Cardinale, Funghi Champignon and quartered Carciofini Mammarelle are scattered together over Fior di Latte, baked hot, and finished post-bake with Barbera Lorenzo Nº5 (Nocellara del Belice DOP), grated Parmigiano-Reggiano DOP aged 24 months, and fresh basil for a smooth, velvety finish.",
    postBake: "Finish with Barbera Lorenzo Nº5 (Nocellara del Belice DOP), grated Parmigiano-Reggiano DOP 24 months and fresh basil for a smooth, velvety finish.",
    steps: [
      { title: "1. Toppings & Proportions (Per 280g Dough Ball)", sections: [
        { bullets: ["60g–70g Pomodoro San Marzano dell'Agro Sarnese-Nocerino DOP (crushed tomatoes with 1g fine salt per 100g, reduced to balance the heavy topping load)", "70g–80g Fior di Latte (cubed/sliced and thoroughly drained)", "40g Prosciutto Cotto (high-grade cooked ham, torn into bite-sized pieces)", "30g Salame di Mugnano del Cardinale (traditional Neapolitan garlic-and-pepper cured salami, thinly sliced)", "30g Funghi Champignon (fresh button mushrooms, thinly sliced)", "35g Carciofini Mammarelle (Roman/Neapolitan artichoke hearts in oil, thoroughly drained and quartered)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated, for the post-bake finish)", "4–5 Fresh Basil Leaves", "Elizondo Nº3 Picual EVOO (pre-bake) and Barbera Lorenzo Nº5 EVOO (post-bake)"] },
      ] },
      { title: "2. Moisture Control (Essential Step)", sections: [
        { intro: "Fior di Latte:", bullets: ["Drain in a sieve for at least 1–2 hours"] },
        { intro: "Artichokes (Carciofini):", bullets: ["Thoroughly press the artichoke quarters between paper towels to remove excess oil/brine so they crisp up rather than boil on the pizza"] },
        { intro: "Mushrooms:", bullets: ["Slice thinly so they roast fast under high heat"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–32 cm, leaving an airy 1.5–2 cm cornicione"] },
      ] },
      { title: "4. Assemble", sections: [
        { bullets: ["Spread the 60g–70g San Marzano tomato sauce evenly outward in a quick spiral", "A micro-drizzle of Elizondo Nº3 Picual EVOO over the tomato base", "Scatter the drained Fior di Latte across the base", "Distribute the Funghi Champignon, Prosciutto Cotto, Salame di Mugnano del Cardinale, and quartered Carciofini Mammarelle evenly over the cheese"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to Medium/Low immediately after launch so the floor heat cooks through the heavy toppings without burning the top", "⏱ Cook time: 70–80 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "You're looking for:", bullets: ["Crust puffed and leopard-spotted, salami edges curled, artichokes slightly charred"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Finish with Barbera Lorenzo Nº5 (Nocellara del Belice DOP) drizzled over the hot pizza", "Shave/grate Parmigiano-Reggiano DOP 24 mesi over the top", "Scatter fresh basil leaves for a smooth, velvety finish"] },
      ] },
    ],
  },
  {
    id: "quattro-formaggi",
    number: 13,
    name: "Quattro Formaggi",
    style: "Classic Neapolitan — Pizza Bianca",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQib4tBZbanA4_Cd1takByQB8S_KSC4VKJpP0-Tey91vQ&s=10",
    toppings: "Fior di Latte mozzarella, ricotta, Gorgonzola Dolce DOP, Parmigiano-Reggiano, Barbera Lorenzo Nº5 EVOO, optional fresh basil, optional wildflower honey & Belazu White Truffle EVOO.",
    menuIngredients: "Mozzarella, ricotta, gorgonzola, Parmigiano",
    build: "The classic Neapolitan Quattro Formaggi is a white pizza (pizza bianca) engineered to balance four distinct cheese profiles: a structural melting base (Fior di Latte), a creamy mild accent (Ricotta), a sharp salty kick (Parmigiano-Reggiano), and a rich, spicy bite (Gorgonzola).",
    postBake: "Finish with a fresh basil leaf and a delicate swirl of Barbera Lorenzo Nº5 (Nocellara del Belice DOP) — its sweet, buttery, low-bitterness finish unifies the blue cheese and rich dairy. Optional gourmet finish: a touch of wildflower honey and 1–2 drops of Belazu White Truffle EVOO.",
    steps: [
      { title: "1. Toppings & Proportions (280g Dough Ball, 30–33cm Stretch)", sections: [
        { bullets: ["280g dough ball, hand-stretched to a 30–33cm disc", "50g–60g Fior di Latte Mozzarella (cubed or cut into strips)", "30g Ricotta Cheese (fresh cow's milk ricotta)", "20g–25g Gorgonzola Dolce DOP (for smooth, high-heat melting)", "15g Parmigiano-Reggiano (freshly, finely grated)", "Barbera Lorenzo Nº5 EVOO (post-bake finish)", "Fresh Basil leaves (optional)"] },
        { intro: "Total:", bullets: ["~125g combined cheese — proportioned for even, high-heat melting without any single cheese overpowering the others"] },
      ] },
      { title: "2. Prep the Fior di Latte & Ricotta", sections: [
        { bullets: ["Cut the Fior di Latte into strips or cubes and drain for at least 30–60 minutes in a sieve", "Whisk or loosen the ricotta in a small bowl with a tiny splash of olive oil or water so it's smooth and easy to dollop"] },
      ] },
      { title: "3. Stretch the Base", sections: [
        { bullets: ["Stretch your 280g dough ball on semolina to a 30–33cm disc", "Leave a generous cornicione"] },
      ] },
      { title: "4. Layer the Cheeses", sections: [
        { intro: "Base Layer:", bullets: ["Dust the stretched dough directly with the finely grated Parmigiano-Reggiano", "Placing the hard cheese directly on the dough creates an aromatic, toasted crust layer"] },
        { intro: "Melt Layer:", bullets: ["Distribute the Fior di Latte evenly over the base"] },
        { intro: "Accent Layer:", bullets: ["Drop small, spaced-out dollops of Ricotta and crumbled nuggets of Gorgonzola Dolce across the top using two spoons", "Keeping Gorgonzola in isolated clusters prevents its bold flavor from overpowering every single bite"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome: 450°C–480°C", "🔥 Flame: turn down to LOW upon launch to prevent cheese separation", "⏱ Cook time: 60–75 seconds total"] },
        { intro: "Home Oven with Steel/Stone:", bullets: ["Bake near the top heating element for 5–7 minutes until the cheeses are bubbling and the crust is deeply golden"] },
        { intro: "Watch closely:", bullets: ["Cheese-only pizzas burn slightly faster than tomato-sauced bases"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Finish with a fresh basil leaf and a delicate swirl of Barbera Lorenzo Nº5 (Nocellara del Belice DOP) — its smooth, sweet, buttery finish unifies the blue cheese and rich dairy without overpowering them"] },
        { intro: "Optional Gourmet Finish:", bullets: ["Drizzle post-bake with a touch of wildflower honey and 1–2 drops of Belazu White Truffle EVOO"] },
      ] },
    ],
  },
  {
    id: "ortolana",
    number: 14,
    name: "Ortolana",
    style: "Gourmet Neapolitan — Slow Food Pappacella Peppers, Grilled Veggies & Pacchetelle Fillets",
    category: "classic",
    image: "/pizzas/ortolana.png",
    toppings: "Pacchetelle di San Marzano Kiros (whole tomato fillets), Elizondo Nº3 Picual EVOO (pre-bake), Fior di Latte, pre-grilled Melanzane, pre-grilled Zucchine San Pasquale, roasted Pappacella Napoletana peppers (Presìdi Slow Food), Carciofini Mammarelle, Barbera Lorenzo Nº5 EVOO (post-bake), Parmigiano-Reggiano DOP 24 mesi, fresh basil.",
    menuIngredients: "Pacchetelle tomato, Fior di Latte, grilled eggplant & zucchini, roasted Pappacella peppers, artichokes, Parmigiano",
    build: "This traditional Gourmet Neapolitan Ortolana features regional, Presìdi Slow Food Campania produce. Using Pacchetelle (whole plum tomato fillets preserved in glass jars) instead of blended sauce gives juicy bursts of sweet tomato that complement the charred, roasted vegetables, finished pre-bake with Elizondo Nº3 Picual EVOO and post-bake with Barbera Lorenzo Nº5 (Nocellara del Belice DOP), grated Parmigiano-Reggiano DOP 24 mesi, and fresh basil for a smooth, sweet, velvety finish.",
    postBake: "Finish with Barbera Lorenzo Nº5 (Nocellara del Belice DOP), grated Parmigiano-Reggiano DOP 24 mesi and fresh basil for a smooth, sweet, velvety finish.",
    steps: [
      { title: "1. The Topping Build (Per 280g Dough Ball)", sections: [
        { bullets: ["60g Pacchetelle di San Marzano Kiros (hand-crushed tomato fillets, lightly drained)", "65g–70g Fior di Latte (cubed and thoroughly drained)", "25g Melanzane (sliced thin and pre-grilled)", "25g Zucchine San Pasquale (sliced into rounds or ribbons and light-grilled)", "25g Pappacella Napoletana Presìdi Slow Food (sweet/spicy heirloom peppers, roasted, peeled, and sliced into strips)", "30g Carciofini Mammarelle (quartered Roman/Neapolitan artichoke hearts in oil, well-drained)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated, for the post-bake finish)", "4–5 Fresh Basil Leaves", "Elizondo Nº3 Picual EVOO (pre-bake) and Barbera Lorenzo Nº5 EVOO (post-bake)"] },
      ] },
      { title: "2. Vegetable Moisture Control", sections: [
        { intro: "Pacchetelle:", bullets: ["Gently spoon out the tomato fillets and crush them lightly by hand", "Drain the fillets in a strainer briefly so excess juice drains off"] },
        { intro: "Melanzane & Zucchine San Pasquale:", bullets: ["Slice 4–5mm thin", "Pre-grill quickly on a hot skillet until charred marks appear"] },
        { intro: "Pappacella Peppers & Carciofini:", bullets: ["Press thoroughly between paper towels to remove excess brine or oil"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–32 cm, preserving an airy, pronounced cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Distribute the hand-crushed Pacchetelle tomatoes across the base in scattered clusters rather than a continuous flat layer", "A drizzle of Elizondo Nº3 Picual EVOO over the Pacchetelle tomatoes and veggies", "Scatter the drained Fior di Latte across the base", "Arrange the pre-grilled zucchini, eggplant, roasted Pappacella strips, and quartered Carciofini Mammarelle over the cheese"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to Medium/Low immediately after launch", "⏱ Cook time: 70–80 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "You're looking for:", bullets: ["The high ambient flame caramelizes the sweet Pappacella peppers and artichokes while melting the Fior di Latte into the tomato fillets"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Finish with Barbera Lorenzo Nº5 (Nocellara del Belice DOP) drizzled over the hot pizza", "Shave/grate Parmigiano-Reggiano DOP 24 mesi over the top", "Scatter fresh basil leaves for a smooth, sweet, velvety finish"] },
      ] },
    ],
  },
  {
    id: "ripieno-calzone",
    number: 15,
    name: "Ripieno (Calzone)",
    style: "Folded Neapolitan Calzone — Ricotta, Fior di Latte & Salame",
    category: "classic",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/11/91/05/29/calzone-al-forno-ripieno.jpg",
    toppings: "Interior: fresh ricotta, Fior di Latte mozzarella, Salame di Mugnano del Cardinale, coarsely ground black pepper. Exterior: San Marzano tomato sauce (Agro Sarnese-Nocerino DOP), Parmigiano-Reggiano DOP aged 24 months, Elizondo Nº3 Picual EVOO (pre-bake), Frantoio Muraglia or Barbera Lorenzo Nº5 EVOO (post-bake), fresh basil.",
    menuIngredients: "Ricotta, mozzarella, salami, tomato, Parmigiano, basil",
    build: "A folded calzone built around a creamy ricotta and Fior di Latte filling studded with diced Salame di Mugnano del Cardinale and cracked black pepper. The 280g dough ball is stretched thin and even to 30–32 cm (no built-up cornicione, since the whole edge is folded and sealed), filled on one half, folded into a crescent and crimped tight. The exterior is finished with crushed San Marzano tomato, grated Parmigiano-Reggiano and a pre-bake drizzle of Elizondo Nº3 Picual before baking, then a fresh basil leaf and a final post-bake swirl of Frantoio Muraglia or Barbera Lorenzo Nº5 right out of the oven.",
    postBake: "Finish with a fresh basil leaf and a final post-bake swirl of Frantoio Muraglia (spicy, peppery kick) or Barbera Lorenzo Nº5 (smooth, velvety finish) right out of the oven.",
    steps: [
      { title: "1. Interior Filling & Exterior Topping (Per 280g Dough Ball)", sections: [
        { intro: "The Interior Filling:", bullets: ["60g Fresh Ricotta (whisked until creamy)", "60g Fior di Latte (cubed and thoroughly drained)", "40g Salame di Mugnano del Cardinale (diced into small cubes or thin strips)", "1/2 tsp Coarsely Ground Black Pepper (Pepe nero)"] },
        { intro: "The Exterior Topping:", bullets: ["50g–60g Pomodoro San Marzano dell'Agro Sarnese-Nocerino DOP (crushed)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated)", "Elizondo Nº3 Picual EVOO (pre-bake exterior drizzle)", "Frantoio Muraglia or Barbera Lorenzo Nº5 EVOO (post-bake finish)", "Fresh Basil leaves"] },
      ] },
      { title: "2. Prep the Ricotta Cream", sections: [
        { bullets: ["In a bowl, whisk the fresh ricotta with a pinch of salt and the freshly cracked black pepper until smooth"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your 280g dough ball on semolina to a 30–32 cm round", "Keep the thickness even — do not build a large cornicione since the entire edge will be folded and sealed"] },
      ] },
      { title: "4. Fill One Half (Bottom Crescent)", sections: [
        { bullets: ["Spread the creamed ricotta smoothly over one half of the dough disc, leaving a 2 cm clean border around the edge", "Scatter the drained Fior di Latte and diced Salame di Mugnano del Cardinale evenly over the ricotta"] },
      ] },
      { title: "5. Fold & Seal", sections: [
        { bullets: ["Fold the empty half of the dough over the filled half to form a crescent shape", "Press and crimp the border firmly to seal, preventing the filling from leaking during the bake"] },
        { intro: "Tip:", bullets: ["Lightly moisten the clean 2cm border with water before folding into a crescent, then press and crimp tightly to ensure an airtight seal"] },
        { intro: "Steam Tip:", bullets: ["Prick a tiny steam vent at the top center of the calzone before spreading the exterior tomato sauce"] },
      ] },
      { title: "6. Exterior Topping", sections: [
        { bullets: ["Spread the crushed San Marzano tomato sauce over the top of the sealed calzone", "Dust with finely grated Parmigiano-Reggiano DOP 24 mesi", "Add a light pre-bake drizzle of Elizondo Nº3 Picual EVOO over the exterior"] },
      ] },
      { title: "7. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone: 380°C–400°C (lower floor temp required to cook the internal filling through without scorching the exterior)", "🔥 Flame: turn to MINIMUM immediately upon launch", "⏱ Cook time: 100–120 seconds total, with frequent turns, until the exterior is deeply golden and blistered and the interior filling is fully melted"] },
      ] },
      { title: "8. Finish", sections: [
        { bullets: ["Finish with a fresh basil leaf and a final post-bake swirl of Frantoio Muraglia (Intense Fruity, for a spicy/peppery kick) or Barbera Lorenzo Nº5 (for a smooth, velvety finish) right out of the oven"] },
      ] },
    ],
  },
  {
    id: "double-pepperoni-hot-honey",
    number: 16,
    name: "Double Pepperoni & Hot Honey",
    style: "Modern Crowd-Pleaser",
    category: "innovative",
    image: "https://coolfooddude.com/wp-content/uploads/2020/12/Double-Pepperoni-and-honey-PIzza.jpg",
    toppings: "San Marzano tomato sauce, Elizondo Nº3 Picual EVOO (pre-bake), low-moisture mozzarella, aged provolone, cup-and-char pepperoni, spicy dry-cured salami (piccante salame), Calabrian hot honey, fermented chili vinegar, flaky sea salt, Frantoio Muraglia EVOO (post-bake).",
    menuIngredients: "Tomato, mozzarella, provolone, pepperoni, hot honey",
    build: "Double-layer cup-and-char pepperoni over a mozzarella/provolone blend, finished post-bake with chili-infused honey and a whisper of acid lift.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style dough with 24–48 hour fermentation", "280 g dough ball (standard)", "63–65% hydration", "Hand-stretched to 30–32 cm", "Well-developed but extensible gluten network", "Preserve rim gas during opening"] },
        { intro: "Key idea:", bullets: ["Gluten network must be well developed to support the fat load of the double pepperoni layers and the provolone/mozzarella blend while retaining the lightness of modern Neapolitan pizza", "Slightly stronger structure than a Margherita dough"] },
      ] },
      { title: "2. Tomato Base", sections: [
        { bullets: ["San Marzano tomatoes, lightly crushed by hand", "55–65 g per pizza", "Thin, even application", "1.5–2 cm clean border", "Fine sea salt only", "Micro-drizzle of Elizondo Nº3 Picual EVOO over the tomato base"] },
        { intro: "Key idea:", bullets: ["Acidity should remain present but never dominate", "Tomato acts as a freshness layer beneath the pepperoni fat"] },
      ] },
      { title: "3. Cheese Foundation", sections: [
        { intro: "Mozzarella Blend:", bullets: ["80% low-moisture mozzarella", "20% aged provolone", "Cut into thin matchsticks and mixed together", "Apply a light, even layer with small gaps left visible"] },
        { intro: "Effect:", bullets: ["Mozzarella provides creaminess", "Provolone contributes nutty depth and superior browning", "Blend prevents the pizza from tasting one-dimensional"] },
      ] },
      { title: "4. Double Pepperoni Architecture", sections: [
        { intro: "Layer One:", bullets: ["Premium cup-and-char pepperoni", "Tight overlapping coverage across the entire pizza"] },
        { intro: "Layer Two:", bullets: ["Offset pattern over the first layer", "Approximately 70% of the coverage of layer one"] },
        { intro: "Recommended blend:", bullets: ["70% classic cup-and-char pepperoni", "30% spicy dry-cured salami or piccante salame"] },
        { intro: "Effect:", bullets: ["Crisp edges", "Soft rendered centers", "Deep cured-meat complexity"] },
        { intro: "Key idea:", bullets: ["Second layer is not about excess — it creates depth and fat retention zones for the honey glaze"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 410°C–430°C", "🔥 Dome: 450°C–480°C", "🔥 Flame: reduce to MEDIUM upon launch so the pepperoni cups render and crisp without burning", "⏱ Cook time: 70–80 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "Goal:", bullets: ["Pepperoni cups fully develop", "Edges crisp", "Cheese melts into channels beneath the meat", "Base remains dry and structured", "Cornicione achieves leopard spotting and internal softness"] },
      ] },
      { title: "6. Settling Phase", sections: [
        { intro: "Immediately after baking:", bullets: ["Rest pizza 10–15 seconds"] },
        { intro: "Why:", bullets: ["Allows rendered oils to stabilize", "Prevents honey from immediately sliding off", "Creates better glaze adhesion"] },
      ] },
      { title: "7. Hot Honey Finish", sections: [
        { intro: "Honey:", bullets: ["High-quality wildflower honey", "Infused with Calabrian chili", "Warm gently before use"] },
        { intro: "Application:", bullets: ["Fast zig-zag pattern", "Focus slightly heavier over pepperoni cup zones", "Light coverage only"] },
        { intro: "Effect:", bullets: ["Honey mixes with rendered pepperoni oils", "Creates sweet-spicy pockets throughout the pizza", "Enhances caramelized cured-meat flavors"] },
      ] },
      { title: "8. Acid Lift (Critical Balance Layer)", sections: [
        { intro: "Fermented chili vinegar — apply extremely sparingly:", bullets: ["3–5 tiny drops distributed around the pizza, OR", "Fine mist from atomizer"] },
        { intro: "Effect:", bullets: ["Brightens the finish", "Prevents sweetness fatigue", "Keeps each bite feeling fresh"] },
        { intro: "Key idea:", bullets: ["Almost invisible — nobody should identify it", "They should simply feel the pizza remains balanced until the final slice"] },
      ] },
      { title: "9. Final Finish", sections: [
        { intro: "Flaky sea salt:", bullets: ["Very small pinch"] },
        { intro: "Post-Bake EVOO:", bullets: ["Frantoio Muraglia Coratina (Intense Fruity)", "Micro-dots alongside the hot honey and fermented chili vinegar for a bold, peppery contrast"] },
        { intro: "Effect:", bullets: ["Enhances aroma", "Extends finish", "Sharpens contrast against honey sweetness"] },
      ] },
    ],
  },
  {
    id: "chorizo",
    number: 17,
    name: "Chorizo and Gorgonzola",
    style: "Modern Neapolitan — Paprika Spice & Creamy Blue Pockets",
    category: "innovative",
    image: "https://image.eatencdn.com/image/1f55d2e1-e560-4a16-94a0-dcc00041e6cb/small/image.jpg",
    toppings: "San Marzano tomatoes, Elizondo Nº3 Picual EVOO (pre-bake), standard mozzarella strips, dry and semi-dry cured Iberico chorizo, Gorgonzola DOP Dolce (primary recommendation; Stilton optional British twist), Frantoio Muraglia EVOO (post-bake).",
    menuIngredients: "Tomato, mozzarella, chorizo, blue cheese",
    build: "A rich, high-contrast pizza featuring a San Marzano and Fior di Latte base topped with dry/semi-dry cured Ibérico chorizo, creamy Gorgonzola DOP Dolce pockets, and finished post-bake with Frantoio Muraglia (Intense Fruity) EVOO.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style sourdough (Franco Manca-inspired)", "280 g dough ball (standard)", "Stretch to 30–33 cm", "Light, airy cornicione", "Do not degas edge gas"] },
        { intro: "Key idea:", bullets: ["Sourdough or extended fermentation acidity is essential to balance the rich chorizo fat", "High heat structure to support fat-rich toppings"] },
      ] },
      { title: "2. Tomato Base", sections: [
        { bullets: ["San Marzano tomatoes, lightly crushed", "~60–70 g", "Thin, even spread", "1–2 cm clean border", "Light pinch of sea salt", "Pre-bake drizzle of Elizondo Nº3 Picual EVOO over the tomato base"] },
        { intro: "Key idea:", bullets: ["Bright acidity to balance chorizo fat and blue cheese salt"] },
      ] },
      { title: "3. Fior di Latte", sections: [
        { bullets: ["Well-drained Fior di Latte", "Torn irregularly", "Medium, even distribution with small gaps"] },
        { intro: "Effect:", bullets: ["Creates melt base that absorbs rendered chorizo oil gradually"] },
      ] },
      { title: "4. Chorizo", sections: [
        { bullets: ["Thin semi-cured chorizo slices", "Light, even scatter (avoid clustering)"] },
        { intro: "Effect:", bullets: ["Paprika oils render into tomato and cheese during bake", "Adds smoky spice without overpowering structure"] },
      ] },
      { title: "5. Blue Cheese", sections: [
        { bullets: ["Gorgonzola DOP Dolce (primary recommendation — melts smoothly without separating under high heat)", "Stilton (optional British twist)", "Small, spaced crumbles"] },
        { intro: "Effect:", bullets: ["Creamy blue pockets that melt into background richness"] },
      ] },
      { title: "6. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 420°C–440°C", "🔥 Dome: 450°C–480°C", "🔥 Flame: reduce to MEDIUM/LOW post-launch to prevent paprika/chorizo scorching", "⏱ Cook time: 60–75 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "Goal:", bullets: ["Chorizo lightly crisps and renders", "Mozzarella melts into creamy layer", "Gorgonzola softens into pockets", "Crust blisters and stays structured"] },
      ] },
      { title: "7. Olive Oil Finish", sections: [
        { intro: "Pre-Bake:", bullets: ["Elizondo Nº3 Picual EVOO over the tomato base"] },
        { intro: "Post-Bake:", bullets: ["Frantoio Muraglia Coratina (Intense Fruity), applied in a very light spiral or micro dots", "A bold, peppery finish that cuts through the rich chorizo and blue cheese fat"] },
      ] },
    ],
  },
  {
    id: "burratina",
    number: 18,
    name: "Burratina",
    style: "Blistered Volcanic Piennolo & Post-Bake Putignano Burrata Crown",
    category: "innovative",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/cafona-carm.jpeg",
    toppings: "Red Piennolo tomatoes (crushed a pacchetelle), finely grated hard cheese (Pecorino Romano or Grana Padano), mountain oregano, fresh basil, Elizondo Nº3 Picual EVOO (pre-bake), Burrata di Putignano (post-bake), Barbera Lorenzo Nº5 EVOO (post-bake).",
    menuIngredients: "Red Piennolo tomato, hard cheese, oregano, basil, olive oil, Burrata di Putignano (post-bake)",
    build: "Burratina plays on the contrast between warm, blistered Red Piennolo tomatoes and fresh, creamy Putignano Burrata, which is placed whole in the center after the bake and sliced open tableside so its rich stracciatella spills over the base.",
    postBake: "Place the whole Burrata di Putignano in the center of the steaming tomato base, slice the top open with a knife so the creamy stracciatella spills over the tomatoes, basil, and oregano, then finish with a drizzle of Barbera Lorenzo Nº5 EVOO, then serve.",
    steps: [
      { title: "1. Master Topping Specifications (For One 28–30cm Pizza)", sections: [
        { intro: "Base:", bullets: ["70g–80g Red Piennolo tomatoes, crushed a pacchetelle by hand"] },
        { intro: "Base Cheese & Seasoning:", bullets: ["8g–10g finely grated hard cheese (Pecorino Romano or Grana Padano)", "Mountain oregano", "Fresh basil", "Elizondo Nº3 Picual EVOO (pre-bake)"] },
        { intro: "Post-Bake Hero Ingredient:", bullets: ["100g–125g Burrata di Putignano (Pugliese burrata, brought to room temperature before serving)", "Barbera Lorenzo Nº5 EVOO (Nocellara del Belice), for the post-bake finish"] },
      ] },
      { title: "2. Prep & Stretch", sections: [
        { intro: "Bring burrata to room temperature before serving:", bullets: ["Take the Putignano Burrata out of the fridge 30–45 minutes prior so the creamy stracciatella center isn't ice-cold when placed on the hot pizza", "Open your 280g dough ball in Caputo Semolina Rimacinata to 30–33 cm (12–13 in), pushing gas into the outer ring (cornicione)"] },
      ] },
      { title: "3. Pre-Bake Assembly", sections: [
        { intro: "Burrata is strictly applied post-bake:", bullets: ["Spread 70g–80g of Red Piennolo tomatoes over the dough", "Dust the grated hard cheese across the tomatoes", "Scatter a generous pinch of mountain oregano and fresh basil leaves", "Finish with a spiral of Elizondo Nº3 Picual EVOO over the Piennolo tomatoes and mountain oregano"] },
        { intro: "Rule:", bullets: ["Do not put the burrata in the oven — high heat causes it to break, separate into whey, and ruin the crust"] },
      ] },
      { title: "4. Launch & Gozney Bake (75–90 Seconds)", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to LOW immediately upon launch to caramelize the Piennolo tomatoes without scorching", "⏱ Cook time: 75–90 seconds"] },
        { intro: "Blister the volcanic Piennolo tomatoes:", bullets: ["Rotate every 15 seconds as the Piennolo tomatoes caramelize and the rim inflates with dark leopard spots"] },
      ] },
      { title: "5. Post-Bake Burrata Finish", sections: [
        { intro: "The signature Putignano Burrata crown:", bullets: ["Transfer the pizza directly onto a wire cooling rack for 60 seconds", "Place the whole Putignano Burrata right in the center of the steaming tomato base", "Slice the top of the burrata open with a knife so the rich, creamy stracciatella spills over the sweet Red Piennolo tomatoes, basil, and oregano", "Finish with a drizzle of Barbera Lorenzo Nº5 EVOO over the opened burrata stracciatella"] },
      ] },
    ],
  },
  {
    id: "bufala-e-iberico",
    number: 19,
    name: "Bufala e Ibérico",
    style: "Contemporary Neapolitan Pizza Bianca — Creamy Mozzarella di Bufala DOP meets silky Jamón Ibérico fat.",
    category: "innovative",
    image: "https://www.fllifiorentinoblog.it/wp-content/uploads/2022/11/316661686_3326119354306765_8744321983837170150_n.jpg",
    toppings: "Mozzarella di Bufala Campana DOP, thin-sliced Jamón Ibérico, Barbera Lorenzo Nº5 EVOO (post-bake), fresh basil. Zero tomato sauce.",
    menuIngredients: "Mozzarella di bufala, Jamón Ibérico, basil, olive oil",
    build: "A luxurious white pizza with no tomato sauce, featuring hot melted Bufala DOP topped post-bake with room-temperature Jamón Ibérico slices, fresh basil, and finished with Barbera Lorenzo Nº5 (Nocellara del Belice) EVOO.",
    steps: [
      { title: "1. Toppings & Assembly (Per 280g Dough Ball)", sections: [
        { bullets: ["100 g Mozzarella di Bufala Campana DOP", "50–60 g Jamón Ibérico, thinly sliced", "Barbera Lorenzo Nº5 EVOO (Monovarietal Nocellara del Belice), for the post-bake finish", "Fresh basil leaves"] },
      ] },
      { title: "2. Prep the Mozzarella di Bufala", sections: [
        { bullets: ["Slice or tear the buffalo mozzarella 1 to 2 hours beforehand", "Place it in a colander in the fridge to drain excess liquid"] },
        { intro: "Why:", bullets: ["So it won't make your white pizza base soggy"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch a 280 g dough ball using semolina on your work surface", "Target stretch size: 30–33 cm", "Leave a raised cornicione (outer crust)"] },
      ] },
      { title: "4. Assemble the White Base", sections: [
        { bullets: ["Distribute the drained Mozzarella di Bufala evenly across the base", "Add a couple of fresh basil leaves"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome: 450°C–480°C", "⏱ Cook time: 60–75 seconds"] },
        { intro: "Tip:", bullets: ["Ensure stone floor is at least 430°C to set the bottom crust fast under the heavy buffalo mozzarella"] },
        { intro: "Home oven with pizza steel/stone (max temp ~275°C / 530°F):", bullets: ["Pre-bake the dough base with just the mozzarella for 5–7 minutes until cooked through and golden"] },
      ] },
      { title: "6. Post-Bake Finishing", sections: [
        { intro: "Temperature Tip:", bullets: ["Bring Jamón Ibérico to room temperature 30 minutes prior to topping so the fat renders instantly upon contact with the hot mozzarella"] },
        { bullets: ["Immediately upon taking the pizza out, drape the delicate slices of Jamón Ibérico over the warm melted mozzarella so the fat gently renders from the heat of the crust", "Finish with a fresh leaf of basil and a final swirl of Barbera Lorenzo Nº5 EVOO (required finishing oil)"] },
      ] },
    ],
  },
  {
    id: "tettoia-four-cheese-truffle",
    number: 20,
    name: "Tettoia — Four Cheese & Truffle",
    style: "Gourmet White Pizza — Four Cheese Blend, Baked Truffle Croutons & Chili Lift",
    category: "innovative",
    image: "https://rs-menus-api.roocdn.com/images/2018fd22-bd00-4726-bae8-5c9cc89ce052/image.jpeg",
    toppings: "Fior di Latte mozzarella, Gorgonzola DOP, Parmigiano-Reggiano, Bufala DOP, Elizondo Nº3 Picual EVOO (pre-bake), truffle croutons, Belazu White Truffle Oil, Barbera Lorenzo Nº5 EVOO (post-bake), chilli flakes.",
    menuIngredients: "Mozzarella, gorgonzola, Parmigiano, bufala, truffle",
    build: "Pizza Bianca — zero tomato sauce, no extra salt. A micro-drizzle of Elizondo Nº3 Picual EVOO goes on before baking; the four cheeses are layered in a specific order, baked hot and fast, then rested briefly and finished with truffle croutons, Belazu White Truffle Oil, Barbera Lorenzo Nº5 EVOO and chilli post-bake.",
    steps: [
      { title: "1. Prep the Cheeses", sections: [
        { intro: "Fiordilatte — 65 g:", bullets: ["Tear into small pieces", "Drain in a sieve for 1 hour minimum"] },
        { intro: "Bufala — 45 g:", bullets: ["Drain extremely well in a sieve for 1 hour minimum", "Tear into small pieces"] },
        { intro: "Gorgonzola — 30 g:", bullets: ["Cut into small ~1 cm pieces"] },
        { intro: "Parmigiano — 15 g:", bullets: ["Grate finely"] },
        { intro: "Key idea:", bullets: ["The relatively small amount of cheese is deliberate", "With a Gozney, you don't want a huge pile of cheese because the top will burn before the base is ready"] },
      ] },
      { title: "2. Make the Truffle Croutons", sections: [
        { bullets: ["Use approximately 20–25 g bread", "Cut into 1 cm cubes"] },
        { intro: "Toss with:", bullets: ["A few drops of olive oil", "A tiny amount of truffle oil", "No/very little salt"] },
        { intro: "Bake until properly crunchy", bullets: ["Set aside", "Don't put them on the pizza before launching"] },
      ] },
      { title: "3. Stretch Your 280 g Dough", sections: [
        { bullets: ["Style: Pizza Bianca — zero tomato sauce", "Take dough out of the fridge and let it warm up according to your normal dough process", "Stretch to a target size of 31–32 cm", "Leave a nice 1.5–2 cm rim"] },
        { intro: "Important:", bullets: ["Since you're using a Gozney, don't make the centre paper-thin"] },
      ] },
      { title: "4. Build the Pizza", sections: [
        { intro: "Distribute in this order:", bullets: ["A micro-drizzle of Elizondo Nº3 Picual EVOO over the bare dough", "65 g Fiordilatte", "30 g Gorgonzola", "45 g Bufala", "15 g Parmigiano"] },
        { intro: "Placement tip:", bullets: ["Put the Gorgonzola and Bufala in relatively small, separated pieces rather than creating four distinct sections", "You want every bite to get some combination of the cheeses"] },
      ] },
      { title: "5. Gozney Cooking", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 410°C–430°C (slightly lower than classic Neapolitan because of Gorgonzola and Parmesan)", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to LOW immediately post-launch to prevent the Gorgonzola and Parmigiano from scorching", "⏱ Cook time: 75–90 seconds", "🔄 Rotate every 20–30 seconds"] },
        { intro: "You want:", bullets: ["Inflated leopard-spotted crust", "Melted/bubbling cheeses", "Gorgonzola just melted", "Parmesan lightly browned", "No burnt Parmesan"] },
      ] },
      { title: "6. Finish Outside the Oven", sections: [
        { intro: "Rest 30 seconds on a wire cooling rack, then:", bullets: ["① Truffle croutons — Scatter 20–25 g over the pizza", "② Belazu White Truffle Oil — Drizzle approximately 1 tsp (don't go crazy, good truffle oil is extremely powerful)", "③ Barbera Lorenzo Nº5 (Nocellara del Belice DOP) EVOO — Finishing drizzle", "④ Chilli — Add a small pinch of chilli flakes"] },
      ] },
      { title: "7. What You're Aiming For", sections: [
        { intro: "The finished pizza should have:", bullets: ["Crispy, airy crust", "Creamy fiordilatte", "Sharp/funky Gorgonzola", "Sweet, rich bufala", "Salty umami Parmesan", "Crunchy truffle bread", "Truffle aroma", "Tiny chilli kick"] },
        { intro: "Adjustments after first attempt:", bullets: ["If Gorgonzola dominates: drop to 25 g and increase Fiordilatte to 70 g", "If pizza tastes too mild: keep 30 g Gorgonzola and increase Parmesan to 20 g"] },
      ] },
    ],
    videoGuide: "Achieving the Perfect Golden Crunch on Croutons",
  },
  {
    id: "calabrese",
    number: 21,
    name: "Calabrese",
    style: "Contemporary White Pizza — Rendering 'Nduja di Spilinga & Creamy Gorgonzola Dolce Pockets",
    category: "innovative",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/9e/0f/61/nduja-e-gorgonzola.jpg",
    toppings: "Fior di Latte mozzarella, Gorgonzola Dolce DOP, 'Nduja di Spilinga, Elizondo Nº3 Picual EVOO (pre-bake), Parmigiano-Reggiano DOP aged 24 months, fresh basil, Frantoio Muraglia Coratina or Barbera Lorenzo Nº5 EVOO (post-bake). No tomato.",
    menuIngredients: "Mozzarella, gorgonzola, 'nduja, Parmigiano, basil",
    build: "Pizza Bianca — zero tomato sauce. A white pizza built on the contrast between mild, creamy Gorgonzola Dolce and small dollops of fiery 'Nduja di Spilinga, which render into a glossy red oil during the bake and weep their paprika spice into the pool of melted Fior di Latte, finished post-bake with either a spicy-peppery Frantoio Muraglia Coratina or a smooth, sweet Barbera Lorenzo Nº5 (Nocellara del Belice DOP).",
    postBake: "Finish with Frantoio Muraglia Coratina EVOO for a spicy, peppery kick, or Barbera Lorenzo Nº5 (Nocellara del Belice DOP) for a smooth, sweet, creamy balance.",
    steps: [
      { title: "1. Ingredients & Proportions (Per 280g Dough Ball)", sections: [
        { bullets: ["60g Fior di Latte (cubed/cut into strips, drained thoroughly)", "40g Gorgonzola Dolce DOP (broken into small dollops)", "35g–40g 'Nduja di Spilinga (rolled into small hazelnut-sized dollops)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated)", "4–5 Fresh Basil Leaves", "Elizondo Nº3 Picual EVOO (pre-bake) and Frantoio Muraglia Coratina or Barbera Lorenzo Nº5 EVOO (post-bake)"] },
      ] },
      { title: "2. Moisture & Fat Management", sections: [
        { intro: "Fior di Latte:", bullets: ["Drain in a sieve for at least 1–2 hours"] },
        { intro: "'Nduja Prep:", bullets: ["Keep the 'Nduja at room temperature so it is soft", "Pinch off hazelnut-sized dollops with wet fingers", "Dotting small, even dollops across the pizza lets it render evenly into the Gorgonzola without forming heavy fat pools"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Style: Pizza Bianca — zero tomato sauce", "Stretch the 280g dough ball on semolina rimacinata to a target size of 30–32 cm, preserving an airy, raised cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Dust the bare dough directly with the Parmigiano-Reggiano DOP 24 mesi", "Distribute the drained Fior di Latte evenly over the base", "Scatter dollops of the Gorgonzola Dolce DOP in between the fior di latte", "Dot the hazelnut-sized pieces of 'Nduja di Spilinga evenly across the top", "A micro-drizzle of Elizondo Nº3 Picual EVOO over the cheese base"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to Medium/Low immediately post-launch", "⏱ Cook time: 60–75 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "You're looking for:", bullets: ["The 'Nduja melted into a glossy red oil, weeping its paprika spice into the mild, creamy pool of Gorgonzola and Fior di Latte"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Add fresh basil leaves", "Finish with a swirl of Frantoio Muraglia Coratina EVOO for a spicy, peppery kick, or Barbera Lorenzo Nº5 (Nocellara del Belice DOP) for a smooth, sweet, creamy balance"] },
      ] },
    ],
  },
  {
    id: "quattro-latte-e-nduja",
    number: 22,
    name: "Quattro Latte e 'Nduja",
    style: "Four-Milk Neapolitan Pizza Bianca — Buffalo, Cow, Sheep & Post-Bake Goat Cacioricotta",
    category: "innovative",
    toppings: "Ricotta di Búfala (buffalo), 'Nduja di Spilinga, Fior di Latte (cow), Crema di Pecorino Bagnolese (sheep), Elizondo Nº3 Picual EVOO (pre-bake), Cacioricotta di Capra (goat, post-bake), Frantoio Muraglia Coratina or Barbera Lorenzo Nº5 EVOO (post-bake).",
    menuIngredients: "Buffalo ricotta, 'nduja, Fior di Latte, Pecorino cream, goat's milk Cacioricotta (post-bake)",
    build: "Pizza Bianca — zero tomato sauce. A Neapolitan white pizza built around the four-milk concept — Buffalo, Cow, Sheep, and Goat — layered for maximum flavor separation: a smooth buffalo ricotta base carries dollops of spicy 'Nduja di Spilinga, blanketed in Fior di Latte and a swirl of sheep's-milk Pecorino cream, finished post-bake with a snowfall of aged goat's milk Cacioricotta and a finishing drizzle of Frantoio Muraglia Coratina or Barbera Lorenzo Nº5.",
    postBake: "Rest on a wire cooling rack for 60 seconds, then grate a generous, even snowfall of aged goat's milk Cacioricotta di Capra over the steaming crust and center. Finish with Frantoio Muraglia Coratina EVOO for bold spice, or Barbera Lorenzo Nº5 for a smooth, velvety finish.",
    videoGuide: "Quattro Latte e 'Nduja — Four-Milk Layering Order",
    videoUrl: "https://www.youtube.com/shorts/TkejTs74130",
    steps: [
      { title: "1. Ingredients & Topping Ratios (Per 280g Dough Ball)", sections: [
        { bullets: ["280g dough ball (67% hydration Poolish blend), target stretch 30–33cm", "Milk 1 (Buffalo): 60–70g Ricotta di Búfala, whisked smooth with a tiny pinch of salt", "Spicy Element: 30–40g 'Nduja di Spilinga, rolled into small dime-sized pieces", "Milk 2 (Cow): 60–70g Fior di Latte, cut into strips and well-drained", "Milk 3 (Sheep): 20–25g Crema di Pecorino Bagnolese (substitute: whisk 15g finely grated Pecorino Romano into 10g warm heavy cream until smooth)", "Elizondo Nº3 Picual EVOO: micro-drizzle pre-bake", "Milk 4 (Goat, post-bake): 8–10g aged Cacioricotta di Capra (substitute: aged Caprino Stagionato or dry aged Goat Feta)", "Frantoio Muraglia Coratina or Barbera Lorenzo Nº5 EVOO (post-bake)"] },
      ] },
      { title: "2. Preheat & Station Prep", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "Preheat for 35–40 minutes until the stone is fully saturated"] },
        { intro: "Station prep:", bullets: ["Whisk the buffalo ricotta, prep the Pecorino cream sauce, drain the Fior di Latte, and have the 'nduja at room temperature so it spreads easily in the oven heat"] },
      ] },
      { title: "3. Open the Dough", sections: [
        { intro: "Preserve the puffy cornicione edge:", bullets: ["Style: Pizza Bianca — zero tomato sauce", "Drop the 280g dough ball into a mound of Caputo Semolina Rimacinata", "Press flat, joined fingers from the center outward, pushing gas into the outer 1.5cm ring (cornicione)", "Stretch using gravity or gentle knuckle turns to a target size of 30–33cm"] },
      ] },
      { title: "4. Pre-Bake Assembly (In Exact Order)", sections: [
        { intro: "Layering order for maximum flavor separation:", bullets: ["Ricotta di Búfala (Buffalo): spread 60–70g of smooth buffalo ricotta across the base as the primary sauce layer", "'Nduja di Spilinga: distribute small dollops of 'nduja across the ricotta base", "Fior di Latte (Cow): scatter 60–70g of drained mozzarella over the pie", "Crema di Pecorino (Sheep): drizzle the Pecorino cream sauce in a swirl over the cheeses and 'nduja", "Olive Oil: finish with a micro-drizzle of Elizondo Nº3 Picual EVOO over the cheese base"] },
      ] },
      { title: "5. Launch & Gozney Bake (75–90 Seconds)", sections: [
        { intro: "Flame management for delicate cream bases:", bullets: ["Pull the assembled pizza onto your perforated launch peel", "Drop the flame to LOW immediately right before launching — the delicate ricotta and Pecorino cream scorch easily under high top flames", "Bake for 75–90 seconds, rotating every 15 seconds, as the 'nduja melts and renders its vibrant red chili oil into the white ricotta and mozzarella"] },
      ] },
      { title: "6. Post-Bake Finish & Rest", sections: [
        { intro: "Goat milk finish completes the four-milk concept:", bullets: ["Retrieve the pizza and place it directly onto a wire cooling rack for 60 seconds to vent steam underneath", "Using a Microplane, grate a generous, even snowfall of aged goat's milk Cacioricotta over the steaming crust and center", "Finish with Frantoio Muraglia Coratina EVOO for bold spice, or Barbera Lorenzo Nº5 (Nocellara del Belice DOP) for a smooth, velvety finish", "Slice and serve immediately"] },
      ] },
    ],
  },
  {
    id: "nduja-honey",
    number: 23,
    name: "'Nduja & Hot Honey",
    style: "Calabrian Chili Fire Meets Sweet Heat — Rendering 'Nduja di Spilinga & Hot Honey Glaze",
    category: "innovative",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QIDb-C5YJ62kzmEGA9VLPE-dkJbayXDcvR90G2p1PjLMsJr48qWq6no&s=10",
    toppings: "San Marzano tomato sauce, Elizondo Nº3 Picual EVOO (pre-bake), Fior di Latte mozzarella, spreadable 'Nduja di Spilinga, fresh red chili flakes, post-bake hot honey, Frantoio Muraglia Coratina EVOO (post-bake).",
    menuIngredients: "Tomato, mozzarella, 'nduja, hot honey, chili",
    build: "The 'Nduja & Hot Honey Pizza balances the slow-building, smoky heat of Calabrian spicy sausage with sweet, infused honey. Because honey burns instantly under intense, direct heat, the hot honey must be drizzled strictly post-bake, allowing it to warm and loosen over the hot pizza without caramelizing into a bitter crust, then finished with a peppery, spicy contrast of Frantoio Muraglia Coratina EVOO.",
    postBake: "Rest on a wire cooling rack for 15–20 seconds, then drizzle the warm hot honey in a fine zigzag across the entire pie. Finish with Frantoio Muraglia Coratina EVOO for a peppery, spicy contrast — the residual heat will instantly thin the honey, allowing it to fuse with the rendered 'Nduja oil.",
    steps: [
      { title: "1. Ingredients & Proportions (Per 280g Dough Ball)", sections: [
        { intro: "Pre-Bake:", bullets: ["60g–70g Pomodoro San Marzano DOP (crushed tomatoes with 1g fine salt per 100g, reduced to balance the rendering 'Nduja fat)", "70g Fior di Latte (cubed/cut into strips, drained thoroughly)", "35g–40g Spreadable 'Nduja di Spilinga (pinched into small hazelnut-sized dollops)", "1/2 tsp Fresh Red Chili Flakes (Peperoncino)", "Elizondo Nº3 Picual EVOO (micro-drizzle)"] },
        { intro: "Post-Bake (The Finish):", bullets: ["1.5–2 tbsp Hot Honey (warmed slightly for a smooth, consistent drizzle)", "Frantoio Muraglia Coratina EVOO (finishing drizzle)"] },
      ] },
      { title: "2. Moisture & 'Nduja Prep", sections: [
        { intro: "Fior di Latte:", bullets: ["Drain in a sieve for at least 1–2 hours to prevent pooling water"] },
        { intro: "'Nduja:", bullets: ["Keep at room temperature so it remains soft", "Pinch into small hazelnut-sized dollops with wet fingers", "Small, even dollops allow the spicy pork fat to render evenly across the base without creating heavy soggy patches"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–32 cm, preserving an airy, raised cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Ladle the 60g–70g San Marzano tomato sauce into the center and spread outward in a smooth spiral", "A micro-drizzle of Elizondo Nº3 Picual EVOO over the tomatoes", "Distribute the drained Fior di Latte across the base", "Dot the small hazelnut-sized pieces of 'Nduja evenly over the cheese and sauce", "Scatter the fresh red chili flakes for an extra layer of sharp heat"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 420°C–440°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to Medium/Low immediately post-launch to render the 'Nduja without scorching", "⏱ Cook time: 70–80 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "You're looking for:", bullets: ["The 'Nduja melted into a glossy orange-red paprika oil that pools gently into the San Marzano sauce and melted mozzarella"] },
      ] },
      { title: "6. Post-Bake Hot Honey Finish", sections: [
        { bullets: ["Rest the pizza on a wire cooling rack for 15–20 seconds", "Zigzag the warm hot honey across the entire pie", "Finish with Frantoio Muraglia Coratina EVOO for a peppery, spicy contrast — the residual heat instantly thins the honey, allowing it to fuse with the rendered 'Nduja oil"] },
      ] },
    ],
  },
  {
    id: "cetarese",
    number: 24,
    name: "Cetarese",
    style: "Amalfi Coast Tribute — Blistered Cherry Tomatoes, Desalted Capers & Post-Bake Alici di Cetara",
    category: "innovative",
    image: "https://lnx.spaghettitaliani.com/si/wp-content/uploads/2022/02/Pizza-Cetarese.jpg",
    toppings: "Sweet red or yellow cherry tomatoes (Piennolo del Vesuvio or Corbara — UK sub: Piccolo/Santini cherry tomatoes or Finest/Extra Special San Marzano), Elizondo Nº3 Picual EVOO (pre-bake), fiordilatte or a dollop of fresh stracciatella, desalted capers, black or crushed green olives, garlic, wild oregano; finished post-bake with whole Alici di Cetara (salted cured anchovies), Frantoio Muraglia Coratina EVOO, and a few drops of colatura di alici.",
    menuIngredients: "Cherry tomatoes, fiordilatte or stracciatella, capers, olives, garlic, oregano, Alici di Cetara anchovies (post-bake)",
    build: "Contemporary Neapolitan — Pizza Cetarese (or Pizza di Cetara) pays homage to Cetara, a small fishing village on the Amalfi Coast famous for its anchovies and colatura di alici. It shifts the classic Neapolitan focus onto bold, salty seafood accents — Cetara's anchovies and colatura, capers, and olives — balanced against sweet cherry tomatoes, with cheese kept light or optional. The critical technical rule is adding the anchovies POST-BAKE: high-grade salted anchovies contain delicate oils that dry out, turn bitter, and release harsh saltiness if exposed to high flame.",
    postBake: "Rest on a wire cooling rack for 30 seconds, then drape the delicate Alici di Cetara fillets whole across the top (and optional Stracciatella dollops). The ambient heat from the hot cheese will soften the anchovy fillets, releasing their rich, savory umami into the crust without cooking away their sweetness. Finish with Frantoio Muraglia Coratina EVOO and 3–5 drops of colatura di alici.",
    videoGuide: "Post-Bake Anchovy Placement — Alici di Cetara",
    videoUrl: "https://www.youtube.com/shorts/NTx-rgtDH14",
    steps: [
      { title: "1. Ingredients & Proportions (Per 280g Dough Ball)", sections: [
        { intro: "Pre-Bake Toppings:", bullets: ["70g sweet red or yellow cherry tomatoes (Piennolo/Corbara, or UK-sourced Piccolo/Santini cherry tomatoes/Finest San Marzano), halved and squeezed of excess juice", "60g–70g Fiordilatte (cubed and well-drained) or a dollop of fresh stracciatella", "15g capers (salted, soaked and desalted)", "30g black or crushed green olives (pitted and halved)", "1 tsp wild dried oregano", "1 clove garlic (sliced razor-thin, optional)", "Elizondo Nº3 Picual EVOO (pre-bake drizzle)"] },
        { intro: "Post-Bake Finish:", bullets: ["6–8 whole fillets of Alici di Cetara (salted cured anchovies)", "Optional dollops of fresh Stracciatella", "Frantoio Muraglia Coratina EVOO", "3–5 drops of colatura di alici"] },
      ] },
      { title: "2. Moisture Control & Desalting", sections: [
        { intro: "Cherry Tomatoes:", bullets: ["Halve the sweet cherry tomatoes and gently squeeze out excess juice before topping"] },
        { intro: "Capers:", bullets: ["Soak the salted capers in warm water for 20 minutes to draw out excess salt", "Pat completely dry on paper towels"] },
        { intro: "Cheese:", bullets: ["Cut fiordilatte into strips 1–2 hours in advance and strain out excess moisture, or keep stracciatella chilled until the pizza comes out of the oven"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–32 cm", "Preserve a high, airy cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Scatter the halved, squeezed cherry tomatoes in a light layer over the base", "If using fiordilatte, scatter the drained cheese across the tomatoes now; if using stracciatella, add it after the bake instead", "Distribute the desalted capers, halved olives, thin garlic slices, and a generous pinch of wild oregano", "Drizzle Elizondo Nº3 Picual EVOO over the cherry tomatoes, capers, and oregano"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to Medium/Low immediately post-launch", "⏱ Cook time: 60–75 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "You're looking for:", bullets: ["The intense heat blisters the tomatoes, melts the fiordilatte, and toasts the oregano and capers into a fragrant topping"] },
      ] },
      { title: "6. Post-Bake Anchovy Finish", sections: [
        { bullets: ["Rest the pizza on a wire cooling rack for 30 seconds", "Drape the whole Alici di Cetara fillets across the top (add optional Stracciatella dollops now if using)", "The ambient heat will soften the anchovy fillets, releasing their umami without cooking away their sweetness", "Finish with Frantoio Muraglia Coratina EVOO and 3–5 drops of colatura di alici"] },
      ] },
    ],
  },
  {
    id: "cacio-e-pepe",
    number: 25,
    name: "Cacio e Pepe",
    style: "Stefano Callegari Method — Ice-Cube Boiling Pool & Post-Bake Pecorino Emulsion",
    category: "innovative",
    image: "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2018/07/02/bb7c436164c0454fb27f55eadbcb9cde_Cacio_e_Pepe_SimoPizza__Credit+Francesco+Sapienza.jpg",
    toppings: "Elizondo Nº3 Picual EVOO (pre-bake), ice cubes (melted into the bake to create the emulsion), finely grated Pecorino Romano DOP, coarsely toasted and cracked whole black peppercorns, Barbera Lorenzo Nº5 or Frantoio Muraglia Coratina EVOO (post-bake).",
    menuIngredients: "Pecorino Romano, cracked black pepper, olive oil",
    build: "Contemporary Pizza Bianca — Ice Emulsion Technique. In a 450°C+ oven, raw Pecorino Romano burns instantly — so Stefano Callegari's technique places ice cubes directly on the raw dough before baking, creating a pool of boiling starchy water on the surface. As soon as the pizza is pulled from the oven, finely grated Pecorino is showered over that hot puddle: the residual heat instantly binds the cheese fat and protein with the starchy water, forming the exact creamy emulsion (cremina) of traditional Cacio e Pepe pasta.",
    postBake: "Immediately shower the entire hot center with the finely grated Pecorino Romano and swirl vigorously with a spatula for 10–15 seconds to lock the silky cremina, then finish with a heavy dusting of toasted cracked black pepper and Barbera Lorenzo Nº5 (Nocellara del Belice DOP) for a smooth, velvety finish, or Frantoio Muraglia Coratina for a bold peppery lift.",
    videoGuide: "Stefano Callegari's Ice-Cube Cacio e Pepe Technique",
    steps: [
      { title: "1. Ingredients (Per 280g Dough Ball)", sections: [
        { bullets: ["4 standard Ice Cubes (~50g–60g total water)", "60g–70g Pecorino Romano DOP (extremely finely grated using a Microplane)", "2 tsp Whole Black Peppercorns (coarsely toasted and cracked)", "Elizondo Nº3 Picual EVOO (pre-bake) and Barbera Lorenzo Nº5 or Frantoio Muraglia Coratina EVOO (post-bake)"] },
      ] },
      { title: "2. Prep the Dough & Pepper", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–32 cm, keeping a defined cornicione"] },
        { intro: "Toast the pepper:", bullets: ["Toast whole black peppercorns in a dry pan until fragrant", "Coarsely crush with a mortar and pestle"] },
      ] },
      { title: "3. Add the Ice & Bake", sections: [
        { bullets: ["Lightly dimple the center of the raw stretched dough and place 4 standard ice cubes (~50g–60g total water) directly in the well", "Sprinkle a small pinch of cracked pepper around the dough", "A micro-drizzle of Elizondo Nº3 Picual EVOO"] },
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "⏱ Cook time: 70–80 seconds", "As it bakes, the ice melts rapidly and boils into a hot puddle of starchy water on the crust while keeping the center flat and hydrated"] },
      ] },
      { title: "4. The Creamy Finish (Post-Bake Emulsion)", sections: [
        { bullets: ["As soon as the crust is puffed and leopard-spotted, pull the pizza out", "Immediately shower the entire hot center with the 60g–70g of finely grated Pecorino Romano"] },
        { intro: "Why it works:", bullets: ["The starchy, hot water instantly binds with the cheese fat and protein, forming the exact creamy emulsion (cremina) of traditional Cacio e Pepe pasta"] },
        { intro: "Finish:", bullets: ["Swirl vigorously with a spatula for 10–15 seconds directly in the boiling water pool to lock the silky cremina", "Finish with a heavy dusting of toasted cracked black pepper and Barbera Lorenzo Nº5 (Nocellara del Belice DOP) for a smooth, velvety finish, or Frantoio Muraglia Coratina for a bold peppery lift"] },
      ] },
    ],
  },
  {
    id: "carbonara",
    number: 26,
    name: "Carbonara",
    style: "Gourmet Contemporary — Crispy Guanciale, Pecorino Romano DOP & Post-Bake Yolk Emulsion",
    category: "innovative",
    image: "https://www.vincenzosplate.com/wp-content/uploads/2022/10/1500x1500-Photo-4_1951-How-to-Make-CARBONARA-PIZZA-Like-an-Italian-V1.jpg",
    toppings: "Elizondo Nº3 Picual EVOO (pre-bake), crispy pre-rendered Guanciale di Maiale Nero, Pecorino Romano DOP (baked in and post-bake), coarsely cracked black pepper, post-bake egg yolk emulsion, Frantoio Muraglia Coratina EVOO (post-bake).",
    menuIngredients: "Pecorino Romano, crispy guanciale, egg yolk, black pepper",
    build: "Contemporary Pizza Bianca — zero tomato sauce. A pizza translation of pasta carbonara. A bare dough disc gets a micro-drizzle of Elizondo Nº3 Picual EVOO, then is showered with Pecorino Romano and crispy pre-rendered Guanciale di Maiale Nero, baked until the cheese melts into the rendered pork fat. As soon as it leaves the oven, a smooth egg yolk emulsion (whisked with warm water and rendered guanciale fat) is drizzled across the piping-hot crust — the residual heat instantly warms and sets it into a silky, glossy cream — before a final shower of Pecorino, cracked black pepper, and Frantoio Muraglia Coratina EVOO.",
    postBake: "Rest on a wire cooling rack for 20–30 seconds, then drizzle the egg yolk emulsion in a zigzag pattern across the piping-hot pizza so the crust's heat sets it into a silky, glossy cream. Shower with 20g fresh Pecorino Romano and a final heavy dusting of coarsely cracked black pepper, and finish with Frantoio Muraglia Coratina EVOO.",
    steps: [
      { title: "1. Toppings & Proportions (Per 280g Dough Ball)", sections: [
        { intro: "Pre-Bake (The Base):", bullets: ["60g–70g Guanciale di Maiale Nero (diced into lardons and pre-rendered in a dry pan until crispy)", "25g Pecorino Romano DOP (finely grated)", "Coarsely cracked black pepper", "Elizondo Nº3 Picual EVOO (micro-drizzle)"] },
        { intro: "Post-Bake (The Drizzle & Finish):", bullets: ["2 Fresh Egg Yolks (whisked with 1 tbsp warm water and 1 tsp rendered guanciale fat into a smooth, pourable squeeze-bottle emulsion)", "20g Pecorino Romano DOP (for the final shower)", "Extra cracked black pepper", "Frantoio Muraglia Coratina EVOO (finishing drizzle)"] },
      ] },
      { title: "2. Pre-Cook the Pork", sections: [
        { bullets: ["Dice the Guanciale di Maiale Nero into lardons and pre-render in a dry pan over medium heat for 3–5 minutes until crisp and golden", "Drain on paper towels, reserving 1 tsp of the rendered fat for the yolk emulsion"] },
      ] },
      { title: "3. Prep the Yolk Drizzle", sections: [
        { bullets: ["In a small bowl or squeeze bottle, whisk the 2 egg yolks with 1 tbsp warm water and 1 tsp of the reserved rendered guanciale fat until fluid and smooth enough to drizzle", "Keep at room temperature"] },
      ] },
      { title: "4. Stretch & Assemble Base", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina to a target size of 30–32 cm, keeping a pronounced cornicione", "A micro-drizzle of Elizondo Nº3 Picual EVOO over the bare dough", "Shower the dough directly with 25g of finely grated Pecorino Romano", "Scatter the crispy pre-rendered Guanciale evenly across the Pecorino", "Add a pinch of cracked black pepper"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 420°C–440°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to Medium/Low immediately post-launch to prevent the Pecorino base from burning", "⏱ Cook time: 70–80 seconds"] },
        { intro: "You're looking for:", bullets: ["The crust puffed and leopard-spotted and the Pecorino melted into the rendered pork fat on the dough"] },
      ] },
      { title: "6. Post-Bake Finishing", sections: [
        { bullets: ["Pull the pizza out of the oven and rest on a wire cooling rack for 20–30 seconds", "Drizzle the egg yolk emulsion in a zigzag pattern across the piping-hot pizza — the heat of the crust instantly warms and sets it into a silky, glossy cream", "Shower with the remaining 20g fresh Pecorino Romano and a final heavy dusting of coarsely cracked black pepper", "Finish with Frantoio Muraglia Coratina EVOO"] },
      ] },
    ],
  },
  {
    id: "amatriciana",
    number: 27,
    name: "Amatriciana",
    style: "Roman Classic Redefined — Guanciale-Infused San Marzano DOP, Pecorino & Crispy Guanciale Crunch",
    category: "innovative",
    image: "https://doublethespoonfuls.com/wp-content/uploads/2023/07/amatriciana-pizza-finished.jpg",
    toppings: "Elizondo Nº3 Picual EVOO (pre-bake), San Marzano DOP tomato sauce (infused with rendered guanciale fat), Fior di Latte mozzarella, crispy pre-rendered guanciale, Pecorino Romano DOP, dried red chili flakes, Frantoio Muraglia Coratina EVOO (post-bake), optional fresh basil.",
    menuIngredients: "Tomato, mozzarella, guanciale, Pecorino Romano, chili",
    build: "Contemporary Neapolitan. Pizza all'Amatriciana translates Amatrice's iconic pasta sauce onto a high-heat Neapolitan base. The magic lies in the contrast between sweet San Marzano DOP tomato sauce, rich rendered guanciale (cured pork cheek), sharp Pecorino Romano DOP, and a hint of fresh chili heat. Because raw guanciale releases a lot of fat at high oven temperatures, pre-rendering the pork is crucial to avoid a soggy center.",
    postBake: "Rest on a wire cooling rack for 30 seconds, then immediately shower the remaining Pecorino Romano DOP over the piping-hot tomato sauce so it melts into a silky coating. Top with the reserved crispy guanciale for maximum crunch, add fresh basil if desired, and finish with Frantoio Muraglia Coratina EVOO for a bold, peppery kick.",
    steps: [
      { title: "1. Ingredients & Proportions (Per 280g Dough Ball)", sections: [
        { intro: "For the Crispy Pork:", bullets: ["60g Guanciale (sliced into 5mm strips / lardons) — Pancetta works as a fine substitute if guanciale isn't available"] },
        { intro: "For the Base & Toppings:", bullets: ["60g–70g Pomodoro San Marzano DOP (crushed tomatoes with 1g fine salt per 100g)", "60g Fior di Latte Mozzarella (cubed and thoroughly drained)", "25g Pecorino Romano DOP (finely grated)", "1/2 tsp Dried Red Chili Flakes (Peperoncino, or a splash of chili oil)", "Elizondo Nº3 Picual EVOO (pre-bake) and Frantoio Muraglia Coratina EVOO (post-bake)", "Fresh Basil leaves (optional)"] },
      ] },
      { title: "2. Pre-Render the Guanciale (Crucial Step)", sections: [
        { bullets: ["Fry the guanciale strips in a dry skillet over medium-low heat for 4–5 minutes until the fat renders out and the edges turn crispy and golden", "Remove the crispy pork and drain on paper towels"] },
        { intro: "Pro Tip:", bullets: ["Stir 1 tsp of warm rendered guanciale fat directly into the crushed San Marzano tomatoes for authentic Roman depth"] },
      ] },
      { title: "3. Prep the Cheese", sections: [
        { bullets: ["Cut your Fior di Latte into strips or cubes and let it drain in a sieve for at least 1–2 hours"] },
      ] },
      { title: "4. Stretch & Assemble", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–32 cm, leaving an elevated cornicione", "Ladle the 60g–70g San Marzano DOP tomato sauce (infused with the guanciale fat) evenly over the base", "A micro-drizzle of Elizondo Nº3 Picual EVOO over the tomato base", "Dust with half of the finely grated Pecorino Romano (about 10g–15g) and the dried chili flakes", "Scatter the drained Fior di Latte across the sauce", "Distribute three-quarters of the pre-cooked crispy guanciale over the top"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 420°C–440°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to Medium/Low immediately post-launch to protect the Pecorino and guanciale", "⏱ Cook time: 70–80 seconds"] },
        { intro: "You're looking for:", bullets: ["The crust puffed with dark leopard spots and the cheese fully melted and bubbling"] },
      ] },
      { title: "6. Post-Bake Finishing", sections: [
        { bullets: ["Pull the pizza out of the oven and rest on a wire cooling rack for 30 seconds", "Immediately shower the remaining 10g–15g of fresh Pecorino Romano DOP over the piping-hot tomato sauce so it melts into a silky coating", "Top with the reserved crispy guanciale for maximum crunch, add fresh basil if desired, and finish with Frantoio Muraglia Coratina EVOO for a bold, peppery kick"] },
      ] },
    ],
  },
  {
    id: "gricia",
    number: 28,
    name: "Gricia",
    style: "Roman Pasta-Inspired — Guanciale & Pecorino, No Tomato",
    category: "innovative",
    image: "https://cache.marieclaire.fr/data/photo/w1475_ci/6w/pizza-a-la-gricia.webp",
    toppings: "Fior di Latte mozzarella, crispy pre-rendered guanciale, Pecorino Romano DOP (baked in and as a post-bake cremina), coarsely cracked toasted black pepper, extra virgin olive oil. No tomato.",
    menuIngredients: "Mozzarella, guanciale, Pecorino Romano, black pepper",
    build: "Pizza alla Gricia translates Rome's oldest pasta sauce — the direct ancestor of both Carbonara and Amatriciana — onto a high-heat Neapolitan white base (pizza bianca). Because a Gricia relies entirely on guanciale, Pecorino Romano, and toasted black pepper, baking it in a high-heat Gozney (450°C–480°C) requires managing the pork fat and creating a smooth cheese emulsion post-bake so the Pecorino doesn't separate or burn.",
    postBake: "As soon as the pizza comes out of the oven, spoon or drizzle the Pecorino cremina across the hot melted Fior di Latte — the heat of the crust binds the cream smoothly with the melted cheese. Top with the remaining reserved crispy guanciale for texture contrast, then finish with a heavy shower of freshly cracked toasted black pepper and a final dusting of raw Pecorino Romano.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { intro: "Pre-Bake (The Base & Pork):", bullets: ["60g Fior di Latte Mozzarella (cubed and thoroughly drained)", "60g Guanciale (sliced into 5mm strips / lardons)", "15g Pecorino Romano DOP (finely grated)", "1 tsp Whole Black Peppercorns (toasted and coarsely cracked)"] },
        { intro: "Post-Bake (The Pecorino Cremina & Finish):", bullets: ["30g Pecorino Romano DOP (finely grated)", "2–3 tbsp Starchy Hot Water (or hot pasta/pizza cooking water)", "Extra cracked black pepper", "Extra Virgin Olive Oil (light swirl)"] },
      ] },
      { title: "2. Pre-Render the Guanciale (Crucial Step)", sections: [
        { bullets: ["Fry the guanciale strips in a dry skillet over low-medium heat for 4–5 minutes until the fat renders out and the edges turn golden and crispy", "Drain on paper towels and reserve 1 tsp of the warm rendered pork fat in a bowl"] },
        { intro: "Why:", bullets: ["Launching raw guanciale into a 450°C Gozney will cause excess grease to pool in the center of the dough"] },
      ] },
      { title: "3. Make the Gricia Pecorino Paste (La Cremina)", sections: [
        { bullets: ["In a small bowl, whisk together the 30g Pecorino Romano, 1 tsp of saved rendered guanciale fat, and 2–3 tbsp of hot water until you form a smooth, velvety cheese paste"] },
      ] },
      { title: "4. Stretch & Assemble Base", sections: [
        { bullets: ["Stretch your dough disc on semolina rimacinata, leaving an airy, raised cornicione", "Dust the bare base with the initial 15g Pecorino Romano", "Scatter the drained Fior di Latte evenly across the dough", "Distribute three-quarters of the pre-cooked crispy guanciale over the cheese", "Add a pinch of cracked black pepper and a very light swirl of olive oil"] },
      ] },
      { title: "5. Bake in the Gozney (60–90 Seconds)", sections: [
        { bullets: ["Fire your Gozney floor stone to 450°C–480°C", "Lower the flame slightly right before launching", "Launch and turn every 15–20 seconds until the crust is leopard-spotted and the Fior di Latte is completely melted"] },
      ] },
      { title: "6. Post-Bake Finishing", sections: [
        { bullets: ["As soon as the pizza comes out of the oven, spoon or drizzle the Pecorino cremina across the hot melted Fior di Latte — the heat of the crust will bind the cream smoothly with the melted cheese", "Top with the remaining reserved crispy guanciale for texture contrast", "Finish with a heavy shower of freshly cracked toasted black pepper and a final dusting of raw Pecorino Romano"] },
      ] },
    ],
  },
  {
    id: "pesto-burrata",
    number: 29,
    name: "Pesto & Burrata",
    style: "Contemporary Pizza Bianca — Baked Genovese Pesto & Cold Stracciatella Crown",
    category: "innovative",
    image: "/pizzas/pesto-burrata.jpeg",
    toppings: "Fior di Latte mozzarella (well-drained), Genovese basil pesto, Elizondo Nº3 Picual EVOO (pre-bake), Burrata di Putignano, fresh basil, flaky sea salt, Barbera Lorenzo Nº5 EVOO — Monovarietal Nocellara del Belice (post-bake).",
    menuIngredients: "Mozzarella, pesto, burrata, olive oil",
    build: "Fior di Latte → pesto → Gozney → burrata → EVOO. A Pizza Bianca with zero tomato sauce — well-drained Fior di Latte laid directly on the bare dough, Genovese pesto dolloped between the cheese to shield it from the flame, baked hot, then finished post-bake with torn room-temperature Burrata di Putignano, fresh basil, and a generous drizzle of Barbera Lorenzo Nº5 EVOO.",
    postBake: "Serve immediately.",
    videoGuide: "Fresh Pesto Base & Post-Bake Burrata",
    steps: [
      { title: "1. Stretch the Dough", sections: [
        { bullets: ["Stretch the 280g dough ball to a target size of 30–32 cm, leaving a raised cornicione"] },
        { intro: "Style:", bullets: ["Pizza Bianca — zero tomato sauce"] },
      ] },
      { title: "2. Lay the Fior di Latte Base", sections: [
        { bullets: ["Lay 70g well-drained Fior di Latte mozzarella evenly across the bare dough disc first, distributed fairly lightly"] },
      ] },
      { title: "3. Add the Pesto", sections: [
        { intro: "Add:", bullets: ["35g–40g Genovese basil pesto, dolloped between the Fior di Latte strips", "A micro-drizzle of Elizondo Nº3 Picual EVOO to finish"] },
        { intro: "Pesto Protection Tip:", bullets: ["Tuck the pesto between/under the Fior di Latte strips so the mozzarella shields it from direct top flame"] },
        { intro: "Note:", bullets: ["Don't overload it — the burrata added afterwards provides a lot of richness"] },
      ] },
      { title: "4. Bake in the Gozney", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to LOW immediately upon launch", "⏱ Cook time: 60–75 seconds"] },
        { intro: "You're looking for:", bullets: ["Well-risen, leopard-spotted crust", "Melted Fior di Latte", "Pesto still relatively fresh rather than burnt (shielded by the mozzarella)"] },
      ] },
      { title: "5. Post-Bake Burrata & EVOO Finish", sections: [
        { intro: "Important:", bullets: ["Do NOT bake the burrata"] },
        { bullets: ["Rest the baked pizza on a wire cooling rack for 30 seconds", "Tear open 100g room-temperature Burrata di Putignano in the centre and distribute over the hot pizza"] },
        { intro: "Finish with:", bullets: ["Fresh basil leaves", "A generous drizzle of Barbera Lorenzo Nº5 EVOO (Monovarietal Nocellara del Belice) for a smooth, sweet, creamy finish", "Tiny pinch of flaky sea salt if needed", "Serve immediately"] },
      ] },
    ],
  },
  {
    id: "salsiccia-al-pesto",
    number: 30,
    name: "Salsiccia al Pesto",
    style: "White Pizza — Genoese Pesto & Smoked Provola",
    category: "innovative",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/contadino-in-trasferta18-scaled.jpg",
    toppings: "Genoese basil pesto, Smoked Agerola Provola (drained strips), finely grated hard cheese, hand-cut fresh pork sausage (crumbled raw).",
    menuIngredients: "Basil pesto, smoked Agerola provola, hard cheese, fresh pork sausage",
    build: "A rich, savory white pizza using Genoese basil pesto as the base sauce, topped with hand-cut fresh pork sausage and rustic smoked Agerola provola.",
    postBake: "Transfer directly to a wire cooling rack for 60 seconds to vent steam beneath the crust, then slice and serve.",
    steps: [
      { title: "1. Ingredients (For One 28–30cm Pizza)", sections: [
        { intro: "Base:", bullets: ["50g–60g Genoese Basil Pesto, spread across the base"] },
        { intro: "Cheese:", bullets: ["80g–90g Smoked Agerola Provola, cut into strips and well-drained", "8g–10g finely grated hard cheese"] },
        { intro: "Meat:", bullets: ["60g–70g hand-cut fresh pork sausage, crumbled raw into small pieces"] },
      ] },
      { title: "2. Stretch the Dough", sections: [
        { intro: "Handle gently to prevent center tears:", bullets: ["Open the dough ball in semolina to 28–30cm, preserving a prominent outer rim"] },
      ] },
      { title: "3. Pre-Bake Assembly", sections: [
        { intro: "Layer raw sausage over pesto and smoked provola:", bullets: ["Spread a thin, even layer of Genoese Basil Pesto as your base sauce", "Distribute the Smoked Agerola Provola strips over the pesto", "Scatter crumbled hand-cut fresh pork sausage evenly across the cheese so it bakes through directly under the flame", "Dust with hard cheese"] },
      ] },
      { title: "4. Launch & Gozney Bake", sections: [
        { intro: "Cook sausage completely while protecting the pesto base:", bullets: ["Launch into your preheated Gozney and keep the flame on LOW", "Bake for 75–90 seconds, rotating continuously so the hand-cut sausage sizzles and cooks through while the provola melts into the green pesto base"] },
      ] },
      { title: "5. Rest & Serve", sections: [
        { intro: "Rest on wire rack:", bullets: ["Transfer directly to a wire cooling rack for 60 seconds to vent steam beneath the crust", "Slice and serve"] },
      ] },
    ],
  },
  {
    id: "boscaiola",
    number: 31,
    name: "Boscaiola",
    style: "Forester's Pizza — Sausage & Mushroom, Pizza Bianca",
    category: "innovative",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4c90OTCp_IEocTO38KnTvWuXxhkRs-NpLzRLtET9QDw&s=10",
    toppings: "Fior di Latte (or Provola Affumicata), fresh Italian pork sausage (Salsiccia), Porcini or Champignon mushrooms, Parmigiano-Reggiano DOP 24 mesi, extra virgin olive oil. No tomato.",
    menuIngredients: "Mozzarella or smoked provola, sausage, mushroom, Parmigiano",
    build: "Pizza alla Boscaiola (\"forester's pizza\") is a classic autumnal pie built around earthiness and smoke. In Naples, it is traditionally made as a white pizza (pizza bianca) using fresh Italian sausage (Salsiccia) and mushrooms (Funghi Porcini or Champignon) over a base of Fior di Latte or smoked Provola. The main technical rule for your Gozney is pre-cooking the mushrooms (to remove their high water content) and pinching raw fresh sausage into small nuggets so they cook through completely in 60–90 seconds.",
    postBake: "Finish with fresh thyme or a tiny swirl of raw EVOO right out of the oven.",
    steps: [
      { title: "1. Ingredients & Proportions (Per 250g–280g Dough Ball)", sections: [
        { intro: "Pre-Bake:", bullets: ["70g Fior di Latte (or Provola Affumicata for a smoky twist, cubed and well-drained)", "50g Fresh Italian Pork Sausage (Salsiccia) (casing removed, crumbled into small hazelnut-sized pieces)", "40g Mushrooms (Porcini or fresh Champignon, sliced thinly)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated)", "Extra Virgin Olive Oil (light swirl)"] },
        { intro: "Optional Finish:", bullets: ["Fresh Thyme leaves or chopped parsley", "Extra Virgin Olive Oil"] },
      ] },
      { title: "2. Pre-Sauté the Mushrooms", sections: [
        { bullets: ["Sauté the sliced mushrooms in a dry skillet over medium-high heat with a tiny splash of olive oil and a pinch of salt for 2–3 minutes until they release their liquid and soften", "Drain on paper towels"] },
      ] },
      { title: "3. Prep the Sausage", sections: [
        { bullets: ["Remove the sausage meat from its casing and pinch into small, loose hazelnut-sized nuggets using wet fingers", "Keep them small so the high ambient heat in your Gozney renders the fat and cooks the meat through thoroughly in under 90 seconds"] },
      ] },
      { title: "4. Stretch & Assemble", sections: [
        { bullets: ["Stretch your dough disc on semolina rimacinata, preserving an airy, raised cornicione", "Dust the bare base directly with the Parmigiano-Reggiano DOP 24 mesi", "Scatter the drained Fior di Latte across the base", "Distribute the pre-sautéed mushrooms and raw sausage nuggets evenly over the cheese", "Add a light spiral of Extra Virgin Olive Oil"] },
      ] },
      { title: "5. Bake in the Gozney (60–90 Seconds)", sections: [
        { bullets: ["Preheat your Gozney floor stone to 450°C–480°C (840°F–900°F). Turn the flame down slightly right before launching", "Launch and turn every 15–20 seconds. The high heat roasts the sausage, crisps the edges of the mushrooms, and melts the cheese into a savory pool"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Finish with fresh thyme or a tiny swirl of raw EVOO right out of the oven"] },
      ] },
    ],
  },
  {
    id: "mortadella-pistachio",
    number: 32,
    name: "Mortadella and Pistachio",
    style: "Gourmet Pizza Bianca — Franco Pepe-Style Mortadella Ribbons, Ricotta Quenelles & Bronte Pistachio",
    category: "innovative",
    image: "https://myhusbandmakespies.com/wp-content/uploads/2025/07/mortadella-ricotta-pizza-ooni-baked.jpg",
    toppings: "Fior di Latte mozzarella, Elizondo Nº3 Picual EVOO (pre-bake), Mortadella di Suino Nero Casertano, fresh cow's milk ricotta, granella di pistacchio (Bronte pistachios), fresh basil leaves, Barbera Lorenzo Nº5 EVOO (post-bake).",
    menuIngredients: "Mozzarella, mortadella, ricotta, pistachio, basil",
    build: "A hot, crispy white pizza base cooked with Fior di Latte, topped post-bake with cool, ultra-premium Casertano black pig mortadella, fresh creamed ricotta, crunchy pistachios, and intense local Caiazzano extra virgin olive oil.",
    postBake: "Drape the mortadella loosely in ribbon-like folds over the hot melted cheese, pipe or dollop the smooth ricotta between the folds, scatter the pistachio granella generously, then finish with fresh basil leaves and a final delicate swirl of Barbera Lorenzo Nº5 (Nocellara del Belice DOP) so the sweet butter and green almond notes complement the mortadella and pistachio.",
    steps: [
      { title: "1. Toppings & Proportions (Per 280g Dough Ball)", sections: [
        { intro: "Pre-Bake:", bullets: ["70g–80g Fior di Latte Mozzarella (cubed or cut into strips and well-drained)", "Elizondo Nº3 Picual EVOO, light micro-drizzle"] },
        { intro: "Post-Bake (Finishing Touches):", bullets: ["60g–70g Mortadella di Suino Nero Casertano (thinly sliced, high-grade artisanal mortadella)", "40g Fresh Cow's Milk Ricotta", "15g Granella di Pistacchio (coarsely chopped/crushed Bronte or high-quality pistachios)", "Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — mandatory final delicate raw finish)", "Fresh Basil leaves"] },
      ] },
      { title: "2. Prep the Ricotta", sections: [
        { bullets: ["Whisk the fresh ricotta in a small bowl with a tiny splash of extra virgin olive oil and a pinch of salt until smooth and velvety", "Transfer to a piping bag (or use two spoons to form neat quenelles/dollops)"] },
      ] },
      { title: "3. Drain the Fior di Latte", sections: [
        { bullets: ["Cut the mozzarella into strips 1–2 hours ahead and let it drain thoroughly in a sieve"] },
      ] },
      { title: "4. Stretch & Pre-Bake", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–33 cm, leaving an airy, raised cornicione", "Lay the drained Fior di Latte evenly across the bare dough disc", "Add a light micro-drizzle of Elizondo Nº3 Picual EVOO over the Fior di Latte base"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "⏱ Cook time: 60–75 seconds"] },
        { intro: "Home Oven with Steel/Stone:", bullets: ["Bake at maximum temperature for 5–7 minutes until golden and bubbling"] },
      ] },
      { title: "6. Post-Bake Layering (The Pepe in Grani Method)", sections: [
        { intro: "Tip:", bullets: ["Rest baked base on a cooling rack for 30s before topping to keep the crust crisp"] },
        { bullets: ["Drape the thin slices of Mortadella di Nero Casertano loosely in ribbon-like folds (a rose) over the hot melted cheese", "Pipe or dollop the smooth ricotta directly onto or between the folds of mortadella", "Generously scatter the granella di pistacchio over the top for crucial crunch", "Finish with fresh basil leaves and a final delicate swirl of Barbera Lorenzo Nº5 (Nocellara del Belice DOP) — the mandatory finishing oil, its sweet butter and green almond notes complementing the mortadella, ricotta, and pistachio"] },
      ] },
    ],
  },
  {
    id: "la-oro-verde",
    number: 33,
    name: "La Oro Verde",
    style: "Gourmet White Pizza — Mortadella Ribbons, Cold Stracciatella & Pistachio Pesto",
    category: "innovative",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/a211bd6f00b7a30664e5d05480027f27/Derivates/01948b21d82cfcb00473494c5780e3b3e3d00e52.jpg",
    toppings: "Fior di Latte mozzarella (well-drained), Elizondo Nº3 Picual EVOO (pre-bake), thinly sliced artisanal Mortadella, fresh cold Stracciatella di Burrata, Pistachio Pesto (Pesto di Pistacchio), granella di pistacchio, fresh basil leaves, Barbera Lorenzo Nº5 EVOO — Monovarietal Nocellara del Belice DOP (post-bake).",
    menuIngredients: "Mozzarella, mortadella, stracciatella, pistachio pesto, basil",
    build: "A Contemporary Pizza Bianca with zero tomato sauce — a hot, crispy Fior di Latte base, topped post-bake with warm ribbons of artisanal mortadella, cold creamy stracciatella di burrata, room-temp pistachio pesto, crunchy pistachio granella, and fresh basil.",
    postBake: "Drape the mortadella in loose ribbon-like folds over the hot melted cheese, spoon dollops of cold stracciatella across and between the folds, drizzle generously with room-temp pistachio pesto, then finish with crushed granella di pistacchio, fresh basil leaves, and a final light swirl of Barbera Lorenzo Nº5 (Monovarietal Nocellara del Belice DOP) so the sweet butter and green almond notes complement the mortadella, stracciatella, and pistachio.",
    steps: [
      { title: "1. Toppings & Proportions (Per 280g Dough Ball)", sections: [
        { intro: "Pre-Bake (Base):", bullets: ["60g–70g Fior di Latte Mozzarella (well-drained)", "Elizondo Nº3 Picual EVOO, micro-drizzle"] },
        { intro: "Post-Bake (The Fresh Layering):", bullets: ["60g–70g Mortadella (thinly sliced, artisanal)", "60g–70g Stracciatella di Burrata (fresh, cold)", "3–4 tbsp Pistachio Pesto (room temperature)", "15g Granella di Pistacchio (coarsely crushed pistachios)", "Fresh Basil Leaves", "Barbera Lorenzo Nº5 EVOO (Monovarietal Nocellara del Belice DOP)"] },
        { intro: "Style:", bullets: ["Contemporary Pizza Bianca — zero tomato sauce"] },
      ] },
      { title: "2. Fire Up the Gozney", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Floor/Stone: 430°C–450°C", "🔥 Dome/Air: 450°C–480°C", "🔥 Flame: drop to LOW immediately upon launch"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch the 280g dough ball on semolina rimacinata to a target size of 30–33 cm, keeping a soft, elevated cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Scatter the 60g–70g well-drained Fior di Latte evenly across the bare dough", "Add a micro-drizzle of Elizondo Nº3 Picual EVOO"] },
      ] },
      { title: "5. Bake (60–75 Seconds)", sections: [
        { bullets: ["Launch into your Gozney and rotate every 15–20 seconds", "Cook time: 60–75 seconds, until the base is crisp, the fior di latte is completely melted, and the crust has signature leopard spots"] },
      ] },
      { title: "6. Post-Bake Staging & Layering", sections: [
        { intro: "Rest:", bullets: ["Rest the baked base on a wire cooling rack for 30–45 seconds before topping"] },
        { intro: "1. Mortadella:", bullets: ["Drape the thin slices of Mortadella over the melted fior di latte in loose, ribbon-like folds (a rose)", "The heat from the crust will warm the meat and render its delicate fats"] },
        { intro: "2. Stracciatella:", bullets: ["Spoon dollops of cold Stracciatella across and between the mortadella folds"] },
        { intro: "3. Pistachio Pesto:", bullets: ["Drizzle the room-temperature Pistachio Pesto generously over the stracciatella and mortadella"] },
        { intro: "4. Crunch & Garnish:", bullets: ["Finish with a heavy dusting of crushed Granella di Pistacchio and fresh basil leaves"] },
        { intro: "Finishing EVOO:", bullets: ["A final light swirl of Barbera Lorenzo Nº5 (Monovarietal Nocellara del Belice DOP) for a sweet butter and green almond finish"] },
      ] },
    ],
  },
  {
    id: "margherita-della-casa",
    number: 34,
    name: "Margherita della Casa",
    style: "House Margherita — Piennolo Tomatoes, Buffalo Mozzarella & Hard Cheese Crown",
    category: "classic",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/47/06/c4/pizza-buonissima-ci-siamo.jpg?w=2000&h=-1&s=1",
    toppings: "60g–70g hand-crushed San Marzano DOP, 5–6 halved Pomodorini del Piennolo del Vesuvio DOP, 80g–90g Mozzarella di Bufala Campana DOP medallions, 8g–10g Grana Padano DOP & Pecorino Romano DOP blend, 4–5 fresh basil leaves, Elizondo Nº3 Picual EVOO pre-bake.",
    menuIngredients: "Tomato, Piennolo cherry tomatoes, mozzarella di bufala, Grana Padano, Pecorino Romano, basil, olive oil",
    build: "A rich, umami-forward house Margherita featuring blistered Piennolo del Vesuvio tomatoes, buffalo mozzarella, a toasted Grana & Pecorino crown, and zero post-bake additions.",
    postBake: "Strictly no post-bake additions — nothing added after baking.",
    flavorProgression: "Concentrated San Marzano → sweet blistered Piennolo → rich buffalo cream → toasted Grana & Pecorino umami → warm baked Picual",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Cut 80g–90g Mozzarella di Bufala DOP into thick medallions and pat gently with paper towels to remove excess surface whey (do not press or squeeze)", "Halve 5–6 Pomodorini del Piennolo del Vesuvio DOP lengthwise and season the cut surfaces with a tiny pinch of fine sea salt"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–32cm on Caputo Semolina Rimacinata, preserving gas in the airy 1.5cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 60g–70g hand-crushed San Marzano DOP evenly, leaving a 1.5–2cm clean rim"] },
        { intro: "Layer 2 — Piennolo:", bullets: ["Arrange the halved Piennolo tomatoes cut-side up across the sauce"] },
        { intro: "Layer 3 — Basil:", bullets: ["Distribute 4–5 fresh basil leaves"] },
        { intro: "Layer 4 — Buffalo:", bullets: ["Arrange the Bufala DOP medallions over the basil and tomatoes"] },
        { intro: "Layer 5 — Hard Cheese Crown:", bullets: ["Distribute 8g–10g finely grated Grana Padano DOP + Pecorino Romano DOP blend over the mozzarella and exposed tomato areas rather than a solid blanket, leaving small gaps between the cheese"] },
        { intro: "Layer 6 — Picual:", bullets: ["Apply a 3g–4g spiral drizzle of Elizondo Nº3 Picual EVOO over the complete build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "⏱ Cook Time: 75–90 seconds", "🔥 Manage the top flame dynamically post-launch — allow the Piennolo tomatoes to soften and blister while controlling hard-cheese browning to prevent scorching", "🔄 Rotate regularly for an even rise and leopard spotting"] },
      ] },
      { title: "5. Rest & Serve", sections: [
        { intro: "Rest Protocol:", bullets: ["Transfer directly to a WOODEN BOARD (not a wire rack) and rest for 30–60 seconds"] },
        { intro: "Strictly no post-bake additions:", bullets: ["No post-bake oil, basil, or cheese — slice and serve immediately"] },
        { intro: "Profile:", bullets: ["Concentrated San Marzano → sweet blistered Piennolo → rich buffalo cream → toasted Grana & Pecorino umami → warm baked Picual"] },
      ] },
    ],
  },
  {
    id: "margherita-duo",
    number: 35,
    name: "Margherita Duo",
    style: "Dual-Color Piennolo — Agerola Fior di Latte",
    category: "classic",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/70-scaled.jpg",
    toppings: "70g–80g Red and Yellow Piennolo del Vesuvio DOP tomatoes (50/50, hand-torn into rough pieces, keeping the Red and Yellow varieties visually distinct), 80g–90g Agerola Fior di Latte (well drained), 8g finely grated Grana Padano DOP, 4–5 fresh basil leaves, Elizondo Nº3 Picual EVOO pre-bake, Frantoio Muraglia Coratina EVOO post-bake.",
    menuIngredients: "Red & Yellow Piennolo tomato, Agerola Fior di Latte, Grana Padano, basil, Picual & Coratina EVOO",
    build: "A celebration of Vesuvian agriculture pairing sweet Red and Yellow Piennolo tomatoes with fresh Agerola Fior di Latte.",
    postBake: "Rest on a wooden board for 30–60 seconds, scatter the remaining 1–2 fresh basil leaves, finish with 3g–4g Frantoio Muraglia Coratina EVOO, then slice and serve immediately.",
    flavorProgression: "Sweet Yellow Piennolo → mineral Red Piennolo → creamy Agerola Fior di Latte → toasted Grana Padano → warm fruity Picual → peppery Coratina finish",
    steps: [
      { title: "1. Ingredients", sections: [
        { intro: "Prepare the two Piennolo colors separately:", bullets: ["Divide the Red and Yellow Piennolo equally", "Hand-tear into rough pieces and lightly salt", "Keep the two varieties separate during preparation so their colors remain visually distinct", "Drain the Agerola Fior di Latte thoroughly and tear into irregular strips", "Have 8g finely grated Grana Padano ready for assembly"] },
      ] },
      { title: "2. Stretch the Dough", sections: [
        { intro: "Form a thin center with a prominent airy cornicione:", bullets: ["Stretch the 280g dough ball gently in semolina to 28–30cm", "Push the air outward into the rim while preserving approximately 1.5cm of airy cornicione", "Avoid excessively thinning the center"] },
      ] },
      { title: "3. Pre-Bake Assembly", sections: [
        { intro: "Create the distinctive two-color tomato pattern:", bullets: ["Distribute the 70g–80g Red and Yellow Piennolo across the base in alternating clusters, keeping the two colors clearly distinguishable", "Leave a 1.5–2cm rim clear", "Scatter the 80g–90g Agerola Fior di Latte in irregular strips over and between the tomato clusters, leaving small gaps", "Distribute the 8g Grana Padano over the mozzarella and exposed tomato rather than creating a solid blanket", "Tuck 2–3 basil leaves between the cheese pieces", "Finish with a 2g–3g spiral of Elizondo Nº3 Picual EVOO"] },
      ] },
      { title: "4. Launch & Gozney Bake", sections: [
        { intro: "High stone heat blisters the Piennolo while keeping the cheese creamy:", bullets: ["Target a 430°C–450°C stone floor", "Launch onto the stone and manage the top flame dynamically after launch", "Allow the Red and Yellow Piennolo to soften, blister and concentrate while controlling the Grana Padano so it browns without scorching", "Bake for approximately 75–90 seconds, rotating regularly for even cooking and leopard spotting"] },
      ] },
      { title: "5. Rest & Serve", sections: [
        { intro: "Finish with fresh basil and peppery Coratina:", bullets: ["Transfer to a wooden board and rest for 30–60 seconds", "Scatter the remaining 1–2 fresh basil leaves over the pizza", "Finish with 3g–4g Frantoio Muraglia Coratina EVOO", "Slice and serve immediately"] },
        { intro: "Profile:", bullets: ["Sweet Yellow Piennolo → mineral Red Piennolo → creamy Agerola Fior di Latte → toasted Grana Padano → warm fruity Picual → peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "margherita-macchiata",
    number: 36,
    name: "Margherita Macchiata",
    style: "Blistered Piennolo, Fior di Latte & Post-Bake Pesto alla Genovese",
    category: "classic",
    toppings: "70g–80g hand-torn Pomodorino del Piennolo del Vesuvio DOP, 6g–8g finely grated Grana Padano DOP, 4–5 fresh basil leaves, 80g–90g Agerola Fior di Latte, 2g–3g Elizondo Nº3 Picual EVOO pre-bake, 12g–15g Pesto alla Genovese for post-bake macchie. No additional post-bake EVOO.",
    menuIngredients: "Piennolo cherry tomatoes, Grana Padano, basil, Agerola Fior di Latte, Pesto Genovese (post-bake)",
    build: "A contemporary Neapolitan pie featuring sweet blistered Piennolo tomatoes, Agerola Fior di Latte, and vibrant post-bake macchie of raw Pesto alla Genovese.",
    postBake: "Rest 30–60 seconds on a wooden board, then use a squeeze bottle or small spoon to distribute 12g–15g of distinct raw dots (macchie) of Pesto alla Genovese directly over the melted Fior di Latte and blistered tomatoes. Slice and serve immediately. No additional post-bake EVOO.",
    flavorProgression: "Hot sweet Piennolo → creamy Agerola Fior di Latte → toasted Grana → warm fruity Picual → cold, intensely aromatic Genovese pesto",
    videoGuide: "Margherita Macchiata — Exact Layering & Post-Bake Pesto",
    videoUrl: "https://www.youtube.com/shorts/os-6iufgy9E",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Hand-tear fresh Piennolo tomatoes into rough pieces, toss lightly with fine sea salt, and set in a sieve for 10 minutes to drain excess juice", "Hand-tear 80g–90g Agerola Fior di Latte into irregular rustic strips and drain in a sieve for 1–2 hours", "Fill a squeeze bottle with 12g–15g fresh room-temperature Pesto alla Genovese"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–32cm on Caputo Semolina Rimacinata, preserving gas in the airy 1.5cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Piennolo:", bullets: ["Spread 70g–80g drained Piennolo pieces evenly across the base, leaving a 1.5–2cm clean rim"] },
        { intro: "Layer 2 — Grana Padano:", bullets: ["Distribute 6g–8g finely grated Grana Padano DOP over the tomatoes"] },
        { intro: "Layer 3 — Basil:", bullets: ["Lay 4–5 fresh basil leaves across the tomato layer"] },
        { intro: "Layer 4 — Fior di Latte:", bullets: ["Scatter 80g–90g well-drained Fior di Latte strips over the basil and tomatoes, leaving small gaps"] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 2g–3g spiral drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "⏱ Cook Time: 75–90 seconds", "🔥 Manage the top flame dynamically post-launch — allow the Piennolo tomatoes to soften, blister and concentrate while controlling cheese browning", "🔄 Rotate regularly for an even rise and leopard spotting"] },
      ] },
      { title: "5. Rest & Post-Bake Finish", sections: [
        { intro: "Rest Protocol:", bullets: ["Transfer directly to a WOODEN BOARD and rest for 30–60 seconds"] },
        { bullets: ["Using a squeeze bottle or small spoon, distribute 12g–15g of distinct raw dots (macchie) of Pesto alla Genovese across the pizza, directly over the melted Fior di Latte and blistered tomatoes", "Slice and serve immediately", "No additional post-bake EVOO"] },
        { intro: "Profile:", bullets: ["Hot sweet Piennolo → creamy Agerola Fior di Latte → toasted Grana → warm fruity Picual → cold, intensely aromatic Genovese pesto"] },
      ] },
      { title: "6. Culinary Technique Note", sections: [
        { intro: "Why post-bake for the pesto?", bullets: ["Pesto Genovese is applied raw post-bake because intense oven heat can alter the pesto's delicate texture, cause oil separation, and diminish the fresh basil aroma and vibrant green character"] },
      ] },
    ],
  },
  {
    id: "marinara-al-salame",
    number: 37,
    name: "Marinara al Salame",
    style: "Yellow Marinara — Neapolitan Salami",
    category: "classic",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/don-alberto22-scaled.jpg",
    toppings: "Yellow Piennolo tomatoes (crushed or halved), thinly sliced Neapolitan salami, sliced garlic, mountain oregano, fresh basil, extra virgin olive oil. No cheese.",
    menuIngredients: "Yellow Piennolo tomato, Neapolitan salami, garlic, oregano, basil, olive oil",
    build: "A vibrant yellow Marinara variation that pairs the sweetness of Yellow Piennolo tomatoes with savory Neapolitan salami, sliced garlic, and aromatic oregano.",
    postBake: "Transfer to a wire cooling rack for 60 seconds to vent steam and keep the bottom shell crisp, then slice and serve.",
    videoGuide: "Marinara al Salame — Yellow Piennolo & Salame Napoletano",
    videoUrl: "https://www.youtube.com/shorts/pFQqAXboCeY",
    steps: [
      { title: "1. Ingredients (For One 28–30cm Pizza)", sections: [
        { intro: "Base:", bullets: ["70g–80g Yellow Piennolo tomatoes (crushed or halved)"] },
        { intro: "Toppings:", bullets: ["6–8 thin slices of Neapolitan salami", "1 small clove, finely sliced garlic", "Pinch of mountain oregano", "Fresh basil", "Extra virgin olive oil"] },
        { intro: "Cheese:", bullets: ["None"] },
      ] },
      { title: "2. Stretch the Dough", sections: [
        { intro: "Preserve gas pockets in the 67% Poolish dough:", bullets: ["Open your 280g dough ball in semolina to 28–30cm (11–12in), keeping the outer 1.5cm rim untouched"] },
      ] },
      { title: "3. Pre-Bake Assembly", sections: [
        { intro: "Classic garlic & salami Marinara structure:", bullets: ["Spread 70g–80g of crushed Yellow Piennolo tomatoes", "Scatter sliced garlic, a pinch of oregano, and thin slices of Neapolitan salami", "Lay fresh basil leaves across the top and finish with a spiral of extra virgin olive oil"] },
      ] },
      { title: "4. Launch & Gozney Bake", sections: [
        { intro: "Low flame prevents garlic and salami edges from scorching:", bullets: ["Launch into the 430–450°C (800–840°F) Gozney and turn the burner down to LOW immediately", "Bake for 75–90 seconds, rotating every 15 seconds until the rim balloons with dark leopard spots and the salami renders into the yellow tomatoes"] },
      ] },
      { title: "5. Rest & Serve", sections: [
        { intro: "Vent steam beneath the base:", bullets: ["Transfer to a wire cooling rack for 60 seconds to keep the bottom shell crisp", "Slice and serve"] },
      ] },
    ],
  },
  {
    id: "sfiziosa-basilico",
    number: 38,
    name: "Sfiziosa (Basilico)",
    style: "Pumpkin Base — Mushroom & Pancetta",
    category: "pumpkin",
    toppings: "Smooth roasted pumpkin cream (pumpkin roasted with rosemary, olive oil and salt, then blended smooth), pre-sautéed mushrooms, mozzarella strips, pancetta.",
    build: "Pumpkin cream base with Fior di Latte, sautéed mushrooms and pancetta, finished with sage oil and grated Parmigiano.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style dough", "250–270 g dough ball", "24–48 hour fermentation", "63–65% hydration", "Hand-stretched to 30–32 cm", "Preserve rim gas during opening"] },
        { intro: "Key idea:", bullets: ["The topping combination is rich and earthy, so the crust should remain light and airy"] },
      ] },
      { title: "2. Pumpkin Cream Base", sections: [
        { bullets: ["Roasted pumpkin purée", "Small amount of extra virgin olive oil", "Pinch of sea salt", "Tiny touch of nutmeg (optional)", "Apply a thin, even layer"] },
        { intro: "Effect:", bullets: ["Provides sweetness and creaminess", "Replaces tomato acidity with autumnal depth"] },
        { intro: "Key idea:", bullets: ["Pumpkin should be a base, not a thick soup layer"] },
      ] },
      { title: "3. Mozzarella", sections: [
        { bullets: ["Fior di Latte", "Well-drained", "Cut into strips rather than chunks", "Distribute evenly with small gaps"] },
        { intro: "Effect:", bullets: ["Creates melt channels through the pumpkin cream", "Prevents the pizza from becoming heavy"] },
      ] },
      { title: "4. Mushrooms", sections: [
        { intro: "Preparation:", bullets: ["Sauté mushrooms before topping", "Cook off excess moisture completely", "Light seasoning only"] },
        { intro: "Placement:", bullets: ["Even distribution across the pizza", "Avoid piling"] },
        { intro: "Effect:", bullets: ["Concentrated mushroom flavor", "Prevents water release during baking"] },
        { intro: "Key idea:", bullets: ["Mushrooms should contribute umami, not steam"] },
      ] },
      { title: "5. Pancetta", sections: [
        { bullets: ["Thin slices or small batons", "Distributed evenly", "Avoid dense clusters"] },
        { intro: "Effect:", bullets: ["Fat renders into the pumpkin and mushrooms", "Provides the salt element that balances the sweet pumpkin"] },
      ] },
      { title: "6. Bake", sections: [
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "⏱ 70–80 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "Goal:", bullets: ["Pancetta lightly crisps", "Mozzarella melts without flooding", "Pumpkin cream remains silky", "Cornicione develops leopard spotting"] },
      ] },
      { title: "7. Finish (Recommended Upgrade)", sections: [
        { intro: "Sage oil:", bullets: ["Extra virgin olive oil infused with fresh sage", "Applied sparingly after bake"] },
        { intro: "Effect:", bullets: ["Adds aromatic lift", "Complements both pumpkin and pancetta"] },
      ] },
      { title: "8. Final Finish", sections: [
        { intro: "Parmigiano-Reggiano:", bullets: ["Finely grated", "Light snowfall after baking"] },
        { intro: "Effect:", bullets: ["Adds umami and nuttiness", "Connects the mushroom and pumpkin flavors"] },
      ] },
    ],
  },
  {
    id: "sfiziosa-signature",
    number: 39,
    name: "Sfiziosa Signature Edition",
    style: "Pumpkin Base — Premium Mushroom, Pancetta & Sage",
    category: "pumpkin",
    toppings: "Roasted pumpkin cream, 24–30 month Parmigiano-Reggiano, Fior di Latte mozzarella, sautéed chestnut mushrooms, sautéed oyster mushrooms, sautéed porcini mushrooms, pancetta arrotolata or guanciale, crispy sage, brown butter, aged white balsamic, early-harvest Campanian extra virgin olive oil.",
    build: "Roasted pumpkin cream over a Parmigiano umami scaffold, Fior di Latte and a three-mushroom blend, pancetta or guanciale, finished with Parmigiano snow, crispy sage, brown butter EVOO and a whisper of aged white balsamic.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["48-hour fermented Neapolitan dough", "63–65% hydration", "260 g dough ball", "30–32 cm pizza", "Strong but highly extensible gluten network"] },
        { intro: "Goal:", bullets: ["A light, airy crust capable of supporting rich autumnal toppings without feeling heavy"] },
      ] },
      { title: "2. Pumpkin Cream", sections: [
        { intro: "Build:", bullets: ["Roasted Delica, Kabocha, or butternut pumpkin", "Campanian EVOO", "Sea salt", "Tiny pinch white pepper", "Tiny pinch nutmeg", "Puree until silky", "Apply thinly"] },
        { intro: "Why roasted?", bullets: ["Caramelization", "Nuttiness", "Sweetness — without introducing excess water"] },
      ] },
      { title: "3. Parmigiano Foundation", sections: [
        { intro: "Before mozzarella:", bullets: ["Very light dusting of 24–30 month Parmigiano-Reggiano"] },
        { intro: "Effect:", bullets: ["Creates an umami scaffold beneath the toppings", "Technique often found in elite modern Neapolitan pizzas"] },
      ] },
      { title: "4. Fior di Latte", sections: [
        { bullets: ["Premium Fior di Latte", "Thoroughly drained", "Torn into irregular strips"] },
        { intro: "Placement:", bullets: ["Moderate coverage", "Leave visible pumpkin zones"] },
        { intro: "Effect:", bullets: ["Allows contrast between pumpkin and dairy"] },
      ] },
      { title: "5. Mushroom Layer", sections: [
        { intro: "Best blend (instead of one mushroom):", bullets: ["50% chestnut mushrooms", "30% oyster mushrooms", "20% porcini"] },
        { intro: "Preparation:", bullets: ["Sauté separately", "Remove moisture completely"] },
        { intro: "Effect:", bullets: ["Creates layered mushroom flavor rather than generic mushroom taste"] },
      ] },
      { title: "6. Pancetta", sections: [
        { intro: "Upgrade — use:", bullets: ["Pancetta arrotolata, OR", "Guanciale", "Thin slices, distributed evenly"] },
        { intro: "Effect:", bullets: ["Rendered fat", "Sweetness", "Cured depth — far superior to generic bacon"] },
      ] },
      { title: "7. Bake", sections: [
        { bullets: ["🪨 Stone: 390–400°C", "🔥 Air: 440–480°C", "⏱ 70–80 seconds"] },
        { intro: "Goal:", bullets: ["Pancetta edges crisp", "Mushrooms roast slightly", "Pumpkin concentrates", "Fior di Latte melts into creamy pockets"] },
      ] },
      { title: "8. Parmigiano Snow", sections: [
        { intro: "Immediately after bake:", bullets: ["Freshly grated 30-month Parmigiano-Reggiano", "Very light"] },
        { intro: "Effect:", bullets: ["Adds aroma and umami lift"] },
      ] },
      { title: "9. Crispy Sage", sections: [
        { intro: "Preparation:", bullets: ["Flash-fry sage leaves", "Drain thoroughly", "Crumble lightly over pizza"] },
        { intro: "Effect:", bullets: ["Aromatic bridge between pumpkin and pancetta", "A classic northern Italian pairing"] },
      ] },
      { title: "10. Brown Butter & Sage EVOO Finish", sections: [
        { intro: "Blend:", bullets: ["Brown butter", "Early-harvest Campanian EVOO", "Tiny droplets only"] },
        { intro: "Effect:", bullets: ["Adds extraordinary aroma without making the pizza greasy"] },
      ] },
      { title: "11. Acid Counterpoint (Secret Weapon)", sections: [
        { intro: "The one thing almost every pumpkin pizza lacks — a tiny amount of acidity:", bullets: ["A few drops of aged white balsamic, OR", "Apple cider vinegar reduction", "Applied extremely sparingly"] },
        { intro: "Effect:", bullets: ["Cuts richness", "Keeps the palate refreshed", "Makes the pumpkin taste sweeter without adding sugar"] },
      ] },
    ],
  },
  {
    id: "sfiziosa-aqua",
    number: 40,
    name: "Sfiziosa Aqua & Farina",
    style: "Pumpkin Base — Smoked Pork, Burrata & Truffle",
    category: "pumpkin",
    image: "/pizzas/sfiziosa-aqua.jpg",
    toppings: "Roasted pumpkin cream, mozzarella, smoked bacon, fresh Burrata, black truffle cream.",
    build: "Pumpkin cream over a Parmigiano scaffold, Fior di Latte and smoked guanciale, finished post-bake with hand-torn burrata, truffle cream, crispy sage, aged white balsamic and Campanian EVOO.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["48-hour fermented Neapolitan dough", "63–65% hydration", "260 g dough ball", "Opened to 30–32 cm", "Well-preserved rim gas"] },
        { intro: "Goal:", bullets: ["Create a light structure capable of carrying multiple rich toppings"] },
      ] },
      { title: "2. Pumpkin Cream Base", sections: [
        { intro: "Build:", bullets: ["Roasted pumpkin (Delica, Kabocha or Butternut)", "Early-harvest EVOO", "Sea salt", "Tiny pinch nutmeg", "Tiny pinch white pepper", "Puree until smooth", "Apply thinly and evenly"] },
        { intro: "Effect:", bullets: ["Provides sweetness and body without excessive moisture"] },
        { intro: "Key principle:", bullets: ["Roasted pumpkin only — never boiled", "Roasting develops natural sugars and concentrates flavor"] },
      ] },
      { title: "3. Parmigiano Foundation", sections: [
        { intro: "Before mozzarella:", bullets: ["Light dusting of 24–30 month Parmigiano-Reggiano"] },
        { intro: "Effect:", bullets: ["Creates a deep umami layer underneath the dairy"] },
      ] },
      { title: "4. Mozzarella", sections: [
        { bullets: ["Fior di Latte", "Thoroughly drained", "Torn into strips", "Moderate coverage", "Allow pumpkin cream to remain visible"] },
        { intro: "Effect:", bullets: ["Creates a creamy bridge between pumpkin and burrata"] },
      ] },
      { title: "5. Smoked Pork", sections: [
        { intro: "Best choice:", bullets: ["Smoked guanciale (if available)", "Otherwise: high-quality smoked pancetta"] },
        { intro: "Placement:", bullets: ["Distributed evenly", "No clustering"] },
        { intro: "Effect:", bullets: ["Provides smoke, salt and rendered fat"] },
        { intro: "Key principle:", bullets: ["This is the pizza’s savory backbone"] },
      ] },
      { title: "6. Bake", sections: [
        { bullets: ["🪨 Stone: 390–400°C", "🔥 Air: 440–480°C", "⏱ 70–80 seconds", "Rotate every 15–20 seconds"] },
        { intro: "Goal:", bullets: ["Pumpkin concentrates", "Mozzarella melts", "Pork lightly crisps", "Cornicione develops strong leopard spotting"] },
      ] },
      { title: "7. Burrata (Post-Bake)", sections: [
        { intro: "Critical rule:", bullets: ["Never bake the burrata"] },
        { intro: "After the pizza exits the oven:", bullets: ["Tear burrata by hand", "Place in 4–6 generous pockets"] },
        { intro: "Effect:", bullets: ["Creates hot/cold contrast", "Maintains the fresh milk character"] },
      ] },
      { title: "8. Truffle Cream", sections: [
        { intro: "Application:", bullets: ["Apply after burrata", "Very light zig-zag"] },
        { intro: "Effect:", bullets: ["Provides aroma rather than domination"] },
        { intro: "Critical rule:", bullets: ["Most truffle pizzas fail because they use too much truffle", "The goal is perfume, not saturation"] },
      ] },
      { title: "9. Crispy Sage", sections: [
        { intro: "Preparation:", bullets: ["Flash-fried sage leaves", "Crumbled lightly over the pizza"] },
        { intro: "Why:", bullets: ["Sage is one of the best companions to pumpkin, burrata and smoked pork", "It creates a bridge between all three"] },
      ] },
      { title: "10. Acid Lift (The Missing Element)", sections: [
        { intro: "Without acidity this pizza becomes too rich.", bullets: [] },
        { intro: "Best option — aged white balsamic:", bullets: ["3–5 tiny drops only"] },
        { intro: "Effect:", bullets: ["Brightens the pumpkin", "Cuts through burrata fat", "Makes the truffle seem more aromatic"] },
      ] },
      { title: "11. Final EVOO", sections: [
        { intro: "Style — early-harvest Campanian EVOO:", bullets: ["Tomato leaf", "Green almond", "Artichoke", "Gentle pepper finish"] },
        { intro: "Application:", bullets: ["Micro-dots only"] },
        { intro: "Effect:", bullets: ["Adds freshness without competing with truffle"] },
      ] },
    ],
  },
  {
    id: "mantovana",
    number: 41,
    name: "Mantovana (Acqua e Farina Signature Edition)",
    style: "Pumpkin Base — Gorgonzola & Smoked Bacon",
    category: "pumpkin",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/c3/7a/78/caption.jpg?w=1100&h=-1&s=1",
    toppings: "Roasted pumpkin cream, 24–30 month Parmigiano-Reggiano, Fior di Latte mozzarella, quick-pickled red onions, Gorgonzola Dolce, pre-cooked smoked bacon, crispy sage, aged white balsamic, early-harvest Campanian extra virgin olive oil.",
    build: "Roasted pumpkin cream over a Parmigiano scaffold, Fior di Latte and quick-pickled red onions, Gorgonzola Dolce in waves and smoked bacon, finished with crispy sage, aged white balsamic and Campanian EVOO.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["48-hour fermented Neapolitan dough", "63–65% hydration", "260 g dough ball", "Opened to 30–32 cm", "Well-preserved rim gas"] },
        { intro: "Goal:", bullets: ["Provide enough strength for the rich toppings while remaining light and airy"] },
      ] },
      { title: "2. Pumpkin Cream Base", sections: [
        { intro: "Build:", bullets: ["Roasted pumpkin (Delica, Kabocha or Butternut)", "Early-harvest EVOO", "Sea salt", "Tiny pinch white pepper", "Tiny pinch nutmeg", "Pureed until silky", "Apply a thin, even layer"] },
        { intro: "Effect:", bullets: ["Provides sweetness and acts as the flavor canvas for the stronger toppings"] },
        { intro: "Key principle:", bullets: ["Roasted pumpkin only", "The caramelized notes are essential"] },
      ] },
      { title: "3. Parmigiano Foundation", sections: [
        { intro: "Before mozzarella:", bullets: ["Light dusting of 24–30 month Parmigiano-Reggiano"] },
        { intro: "Effect:", bullets: ["Creates an umami foundation beneath the dairy", "Helps connect the pumpkin and Gorgonzola"] },
      ] },
      { title: "4. Mozzarella", sections: [
        { bullets: ["Fior di Latte", "Thoroughly drained", "Cut into matchsticks", "Moderate coverage", "Leave visible pumpkin zones"] },
        { intro: "Effect:", bullets: ["Provides creamy melt without masking the pumpkin"] },
      ] },
      { title: "5. Red Onions", sections: [
        { intro: "Preparation:", bullets: ["Thinly sliced", "Ideally quick-pickled for 10–15 minutes, then drained"] },
        { intro: "Placement:", bullets: ["Scattered evenly"] },
        { intro: "Effect:", bullets: ["Adds sweetness, brightness and texture"] },
        { intro: "Why upgrade?", bullets: ["Raw onions often remain too aggressive in a 70–80 second bake", "A quick pickle softens them and introduces subtle acidity"] },
      ] },
      { title: "6. Gorgonzola", sections: [
        { intro: "Preferred style — Gorgonzola Dolce:", bullets: ["Use small spaced crumbles", "Do not blanket the pizza"] },
        { intro: "Effect:", bullets: ["Creates pockets of creamy blue-cheese richness"] },
        { intro: "Key principle:", bullets: ["The Gorgonzola should appear in waves, not dominate every bite"] },
      ] },
      { title: "7. Smoked Bacon", sections: [
        { intro: "Preparation:", bullets: ["Pre-cooked and lightly rendered beforehand", "Cut into thin strips or small batons"] },
        { intro: "Placement:", bullets: ["Even distribution", "Avoid clusters"] },
        { intro: "Effect:", bullets: ["Provides smoke, salt and meaty depth"] },
        { intro: "Key principle:", bullets: ["Think of bacon as seasoning rather than a primary topping"] },
      ] },
      { title: "8. Bake", sections: [
        { bullets: ["🪨 Stone: 390–400°C", "🔥 Air: 440–480°C", "⏱ 70–80 seconds", "Rotate every 15–20 seconds"] },
        { intro: "Goal:", bullets: ["Pumpkin concentrates", "Mozzarella melts", "Gorgonzola softens", "Bacon crisps lightly", "Cornicione develops leopard spotting"] },
      ] },
      { title: "9. Crispy Sage", sections: [
        { intro: "Preparation:", bullets: ["Flash-fried sage leaves", "Crumbled lightly after baking"] },
        { intro: "Effect:", bullets: ["Creates a classic pairing with both pumpkin and Gorgonzola"] },
        { intro: "Why:", bullets: ["Sage is the missing aromatic bridge in most pumpkin pizzas"] },
      ] },
      { title: "10. Acid Lift", sections: [
        { intro: "Without acidity, the pizza can become heavy.", bullets: [] },
        { intro: "Best option — aged white balsamic:", bullets: ["3–5 tiny drops only"] },
        { intro: "Effect:", bullets: ["Brightens pumpkin sweetness", "Cuts through blue-cheese richness", "Extends palate freshness"] },
      ] },
      { title: "11. Final EVOO", sections: [
        { intro: "Style — early-harvest Campanian EVOO:", bullets: ["Tomato leaf", "Green almond", "Artichoke", "Clean pepper finish"] },
        { intro: "Application:", bullets: ["Micro-dots only"] },
        { intro: "Effect:", bullets: ["Adds freshness and aroma"] },
      ] },
    ],
  },
  {
    id: "norcina",
    number: 42,
    name: "Norcina (Acqua e Farina Signature Edition)",
    style: "Pumpkin Base — Porcini & Fennel Sausage",
    category: "pumpkin",
    image: "/pizzas/norcina.jpg",
    toppings: "Roasted pumpkin cream, 24–30 month Parmigiano-Reggiano, Fior di Latte mozzarella, pre-sautéed porcini (ceps), fennel sausage meat, crispy sage, aged white balsamic, early-harvest Campanian extra virgin olive oil.",
    build: "Roasted pumpkin cream over a Parmigiano scaffold, Fior di Latte, pre-sautéed porcini and rustic chunks of fennel sausage, finished with crispy sage, aged white balsamic and Campanian EVOO.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["48-hour fermented Neapolitan dough", "63–65% hydration", "260 g dough ball", "30–32 cm stretch", "Well-preserved cornicione gas", "Strong but elastic gluten network"] },
        { intro: "Goal:", bullets: ["Support heavy umami toppings without collapsing or turning dense"] },
      ] },
      { title: "2. Pumpkin Cream Base", sections: [
        { intro: "Build:", bullets: ["Roasted pumpkin (Delica / Kabocha preferred)", "Early-harvest EVOO", "Sea salt", "White pepper (tiny pinch)", "Optional: micro pinch nutmeg", "Blend until silky", "Apply thin layer"] },
        { intro: "Effect:", bullets: ["Sweet base layer", "Softens sausage intensity", "Balances porcini earthiness"] },
        { intro: "Key idea:", bullets: ["Pumpkin is the “sweet frame” that holds everything together"] },
      ] },
      { title: "3. Parmigiano Foundation (Critical Upgrade)", sections: [
        { intro: "Before mozzarella:", bullets: ["Light dusting of 24–30 month Parmigiano-Reggiano"] },
        { intro: "Effect:", bullets: ["Adds umami backbone", "Connects mushroom + sausage fats", "Prevents flavor flatness"] },
      ] },
      { title: "4. Mozzarella", sections: [
        { bullets: ["Fior di Latte", "Well-drained", "Torn into irregular strips", "Moderate coverage with visible pumpkin zones"] },
        { intro: "Effect:", bullets: ["Creamy melt structure", "Prevents sausage dryness", "Keeps pizza cohesive"] },
      ] },
      { title: "5. Porcini (Ceps)", sections: [
        { intro: "Preparation (CRITICAL):", bullets: ["Pre-sautéed porcini", "Fully moisture-reduced (no water left in pan)", "Light seasoning only (salt, maybe garlic oil touch)"] },
        { intro: "Placement:", bullets: ["Even scatter across pizza", "Avoid clustering"] },
        { intro: "Effect:", bullets: ["Deep forest umami", "Nutty, earthy complexity", "Aromatic backbone of the pizza"] },
      ] },
      { title: "6. Fennel Sausage Meat", sections: [
        { intro: "Preparation:", bullets: ["Raw sausage removed from casing", "Lightly broken into small rustic chunks", "Not compacted"] },
        { intro: "Placement:", bullets: ["Distributed evenly but not densely"] },
        { intro: "Effect:", bullets: ["Fat renders into pumpkin and cheese", "Fennel gives aromatic lift", "Provides savory sweetness"] },
        { intro: "Key principle:", bullets: ["Do NOT overload — sausage must “breathe” on the pizza"] },
      ] },
      { title: "7. Bake", sections: [
        { bullets: ["🪨 Stone: 390–400°C", "🔥 Air: 440–480°C", "⏱ 70–80 seconds", "Rotate every 15–20 seconds"] },
        { intro: "What must happen:", bullets: ["Sausage lightly crisps at edges", "Fat renders into pumpkin layer", "Porcini concentrates, not steams", "Mozzarella melts into creamy pockets", "Cornicione blisters properly"] },
      ] },
      { title: "8. Crispy Sage (Essential Upgrade)", sections: [
        { intro: "Preparation:", bullets: ["Flash-fried sage leaves", "Crumbled after baking"] },
        { intro: "Effect:", bullets: ["Cuts through sausage fat", "Elevates pumpkin sweetness", "Adds aromatic Italian “forest” note"] },
      ] },
      { title: "9. Acid Lift (Optional but Powerful)", sections: [
        { intro: "Best option — aged white balsamic (very light):", bullets: ["3–5 micro drops only"] },
        { intro: "Effect:", bullets: ["Brightens earthy mushrooms", "Prevents heaviness", "Adds subtle lift to fennel sausage"] },
      ] },
      { title: "10. Final EVOO Finish", sections: [
        { intro: "Style — early-harvest Campanian EVOO:", bullets: ["Green almond", "Artichoke", "Tomato leaf", "Light pepper finish"] },
        { intro: "Application:", bullets: ["Micro-dots only"] },
      ] },
    ],
  },
  {
    id: "zucca-salsiccia-provola",
    number: 43,
    name: "Zucca, Salsiccia e Provola",
    style: "Pumpkin Base — Smoked Provola & Pork Sausage",
    category: "pumpkin",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/b3/50/80/zucca-salsiccia-e-provola.jpg",
    toppings: "Greci or Demetra pumpkin cream, Smoked Provola di Agerola, raw fresh pork sausage, Pecorino Romano, fresh basil, extra virgin olive oil.",
    menuIngredients: "Pumpkin cream, smoked provola, pork sausage, pecorino, basil",
    build: "The smoky, melted Provola and rich pork sausage balance either pumpkin base beautifully — giving a sweeter contrast with Greci or a deep savory-herb note with Demetra.",
    postBake: "Transfer to a wire cooling rack for 60 seconds, then microplane 8–10 g of Pecorino Romano over the hot crust and center. Slice and serve.",
    steps: [
      { title: "1. Ingredients", sections: [
        { intro: "Base:", bullets: ["75 g prepared Greci OR Demetra Pumpkin Cream"] },
        { intro: "Cheese:", bullets: ["80 g Smoked Provola di Agerola (cut into strips and well-drained)"] },
        { intro: "Meat:", bullets: ["60 g Raw fresh pork sausage (casing removed, crumbled into small dime-sized pieces)"] },
        { intro: "Finish:", bullets: ["8–10 g Pecorino Romano (microplaned post-bake), fresh basil, EVOO"] },
      ] },
      { title: "2. Stretch Dough", sections: [
        { intro: "Form base without flattening edges:", bullets: ["Open your 280 g dough ball in semolina to 28–30 cm (11–12 in), pushing gas into the outer ring (cornicione)"] },
      ] },
      { title: "3. Pre-Bake Assembly", sections: [
        { intro: "Raw sausage sits on top to cook directly under flame:", bullets: ["Spread 75 g of prepared Greci or Demetra Pumpkin Cream across the center", "Scatter 80 g of drained Smoked Provola di Agerola strips", "Distribute 60 g of crumbled raw pork sausage over the cheese", "Add 3–4 fresh basil leaves and a thin spiral of EVOO"] },
      ] },
      { title: "4. Launch & Gozney Bake (75–90 Seconds)", sections: [
        { intro: "Sausage sizzles while provola melts smoothly:", bullets: ["Launch into your preheated 430–450°C Gozney and turn the burner to LOW immediately", "Bake for 75–90 seconds, rotating every 15 seconds so the raw sausage cooks through completely and the provola bubbles into the pumpkin cream"] },
      ] },
      { title: "5. Post-Bake Finish", sections: [
        { intro: "Sharp sheep's milk finish:", bullets: ["Transfer to a wire cooling rack for 60 seconds", "Microplane 8–10 g of Pecorino Romano over the hot crust and center. Slice and serve"] },
      ] },
    ],
  },
  {
    id: "zucca-nduja",
    number: 44,
    name: "Zucca e 'Nduja",
    style: "Pumpkin Base — 'Nduja & Stracciatella",
    category: "pumpkin",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1f/ce/83/00/zucca-e-nduja.jpg",
    toppings: "Greci or Demetra pumpkin cream, Fior di Latte, 'Nduja di Spilinga, fresh Stracciatella (or Burrata), fresh basil, extra virgin olive oil.",
    menuIngredients: "Pumpkin cream, mozzarella, 'nduja, stracciatella, basil",
    build: "A high-contrast gourmet pie. If using Greci, the 'Nduja creates a sharp sweet-and-spicy punch. If using Demetra, the onion/wine aromatics combine with the 'Nduja for a rich, savory chili finish.",
    postBake: "Transfer to a wire rack for 60 seconds, then spoon 80–90 g of fresh, creamy Stracciatella (or 1 whole opened Burrata) over the center of the pizza. Serve immediately.",
    steps: [
      { title: "1. Ingredients", sections: [
        { intro: "Base:", bullets: ["75 g prepared Greci OR Demetra Pumpkin Cream"] },
        { intro: "Cheese (Pre-Bake):", bullets: ["70 g Fior di Latte (cut into strips and well-drained)"] },
        { intro: "Spicy Element:", bullets: ["30–35 g 'Nduja di Spilinga (rolled into small dollops at room temperature)"] },
        { intro: "Finish (Post-Bake):", bullets: ["80–90 g fresh Stracciatella (or 1 whole room-temperature Burrata opened post-bake), fresh basil, EVOO"] },
      ] },
      { title: "2. Stretch Dough", sections: [
        { intro: "Preserve gas pockets in the cornicione:", bullets: ["Open your 280 g dough ball in semolina to 28–30 cm, preserving a prominent outer rim"] },
      ] },
      { title: "3. Pre-Bake Assembly", sections: [
        { intro: "'Nduja renders red chili oil into the pumpkin cream:", bullets: ["Spread 75 g of Greci or Demetra Pumpkin Cream over the base", "Scatter 70 g of drained Fior di Latte", "Dot 30–35 g of room-temperature 'Nduja di Spilinga across the mozzarella", "Add 3–4 fresh basil leaves and a light spiral of EVOO"] },
      ] },
      { title: "4. Launch & Gozney Bake (75–90 Seconds)", sections: [
        { intro: "Low flame prevents white cream from scorching:", bullets: ["Launch onto the 430–450°C stone and turn the burner to LOW immediately", "Bake for 75–90 seconds, turning every 15 seconds as the 'Nduja melts its red spicy oil into the pumpkin base"] },
      ] },
      { title: "5. Post-Bake Stracciatella Crown", sections: [
        { intro: "Cool creamy crown against hot spicy base:", bullets: ["Transfer to a wire rack for 60 seconds", "Spoon 80–90 g of fresh, creamy Stracciatella (or 1 whole opened Burrata) over the center of the pizza. Serve immediately"] },
      ] },
    ],
  },
  {
    id: "zucca-guanciale-rosmarino",
    number: 45,
    name: "Zucca, Guanciale e Rosmarino",
    style: "Pumpkin Base — Guanciale & Rosemary",
    category: "pumpkin",
    image: "https://foodionista.com/wp-content/uploads/2022/10/zucca-pancetta.jpg",
    toppings: "Greci or Demetra pumpkin cream, Fior di Latte, fresh rosemary, Guanciale, Pecorino Romano, extra virgin olive oil.",
    menuIngredients: "Pumpkin cream, mozzarella, rosemary, guanciale, pecorino",
    build: "An aromatic, crispy pie. Fresh rosemary infuses into the pumpkin sauce during the bake, topped with crispy cured guanciale strips.",
    postBake: "Rest on a wire rack for 60 seconds, scatter warm crispy guanciale (if pan-fried separately) and microplane 8–10 g of Pecorino Romano over the top. Serve immediately.",
    steps: [
      { title: "1. Ingredients", sections: [
        { intro: "Base:", bullets: ["75 g prepared Greci OR Demetra Pumpkin Cream"] },
        { intro: "Cheese:", bullets: ["75 g Fior di Latte (cut into strips and well-drained)"] },
        { intro: "Aromatics:", bullets: ["1 tsp finely chopped fresh rosemary leaves"] },
        { intro: "Cured Pork:", bullets: ["50–60 g Guanciale (cut into thin strips). Can be baked pre-bake OR crisp-pan-fried separately and added post-bake"] },
        { intro: "Finish:", bullets: ["8–10 g Pecorino Romano (microplaned post-bake), EVOO"] },
      ] },
      { title: "2. Stretch Dough", sections: [
        { intro: "Open an extensible, thin base:", bullets: ["Open your 280 g dough ball in semolina to 28–30 cm"] },
      ] },
      { title: "3. Pre-Bake Assembly", sections: [
        { intro: "Rosemary releases aromatic oils in the oven:", bullets: ["Spread 75 g of Greci or Demetra Pumpkin Cream", "Scatter 75 g of drained Fior di Latte", "Sprinkle 1 tsp of chopped fresh rosemary evenly over the cheese and sauce", "(If baking guanciale directly on the pie): scatter thin raw guanciale strips over the top so the pork fat renders into the pumpkin cream", "Drizzle a thin spiral of EVOO"] },
      ] },
      { title: "4. Launch & Gozney Bake (75–90 Seconds)", sections: [
        { intro: "Renders pork fat while keeping dough crisp:", bullets: ["Launch into the Gozney and turn burner down to LOW immediately", "Bake for 75–90 seconds, rotating every 15 seconds until the rim balloons and the guanciale edges crisp up"] },
      ] },
      { title: "5. Post-Bake Finish", sections: [
        { intro: "Add pan-crisped guanciale (if pre-fried) & cheese:", bullets: ["Rest on a wire rack for 60 seconds", "(If crisping guanciale separately in a pan): scatter the warm, ultra-crispy guanciale strips over the hot pizza now", "Microplane 8–10 g of Pecorino Romano over the top. Serve immediately"] },
      ] },
    ],
  },
  {
    id: "zucca-gorgonzola-noci",
    number: 46,
    name: "Zucca, Gorgonzola & Noci",
    style: "Pumpkin Base — Gorgonzola & Walnuts",
    category: "pumpkin",
    image: "https://blog.giallozafferano.it/ricettechepassione/wp-content/uploads/2019/10/pizza-zucca-e-gorgonzola-con-nociv.jpg",
    toppings: "Roasted pumpkin cream, Fior di Latte mozzarella, Gorgonzola Dolce, toasted walnuts, honey drizzle, fresh sage.",
    menuIngredients: "Pumpkin, mozzarella, gorgonzola, walnuts, honey",
    build: "A sweet-and-savory pumpkin pizza that diversifies away from the pork-heavy Sfiziosa/Norcina/Zucca Salsiccia lineup: roasted pumpkin cream and Fior di Latte baked with waves of Gorgonzola Dolce, then finished with toasted walnuts, crispy sage and a light honey drizzle.",
    postBake: "Scatter toasted walnuts and crispy sage, then finish with a light drizzle of honey.",
    steps: [
      { title: "1. Dough", sections: [{ bullets: ["250–280 g dough ball", "Stretch to 30–32 cm"] }] },
      { title: "2. Pumpkin Base", sections: [{ bullets: ["80 g roasted pumpkin cream, spread evenly", "Leave a clean border for the cornicione"] }] },
      { title: "3. Cheese", sections: [{ bullets: ["80–90 g Fior di Latte, torn into pieces", "40 g Gorgonzola Dolce, dolloped in small spoonfuls"] }] },
      { title: "4. Bake", sections: [{ bullets: ["🪨 Stone: 400–430°C", "⏱ Cook time: 70–90 seconds", "🔄 Rotate every 15–20 seconds"] }] },
      { title: "5. Finish", sections: [{ bullets: ["Scatter toasted walnut pieces and crispy fried sage", "Finish with a light drizzle of honey"] }] },
    ],
  },
];

export function getRecipesByCategory(category: PizzaRecipeCategory): PizzaRecipe[] {
  return RECIPES.filter((r) => r.category === category);
}
