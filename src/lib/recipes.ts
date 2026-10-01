import type { PizzaRecipe, PizzaRecipeCategory, RecipeComparisonTable } from "./types";

/** Shared spec-comparison matrix for the Bufalina trilogy (Classica / a Freddo / de la Casa). */
const BUFALINA_TRILOGY_TABLE: RecipeComparisonTable = {
  headers: ["Spec", "Bufalina Classica", "Bufalina a Freddo", "Bufalina de la Casa"],
  rows: [
    { label: "Tomato Base", values: ["80–90g San Marzano DOP", "80–90g San Marzano DOP", "100–110g Fresh Datterini Fillets"] },
    { label: "Umami Layer", values: ["3–4g Parmigiano Reggiano", "None", "None"] },
    { label: "Buffalo Mozzarella", values: ["80–90g (Baked)", "90–100g (Post-Bake)", "85–90g (Baked)"] },
    { label: "Pre-Bake Oil", values: ["None", "None", "2–3g Elizondo Nº3 Picual"] },
    { label: "Finishing Oil", values: ["Frantoio Muraglia Coratina", "Frantoio Muraglia Coratina", "Barbera Lorenzo N°5"] },
    { label: "Core Character", values: ["Integrated classic", "Thermal & textural contrast", "Sweet, rich & complex house special"] },
  ],
};

export const RECIPE_CATEGORIES: { id: PizzaRecipeCategory; label: string; blurb: string }[] = [
  { id: "classic", label: "Classic", blurb: "Margherita, Bufalina Classica, Bufalina a Freddo, Bufalina de la Casa, Cosacca, Marinara, Napoletana, Diavola, Prosciutto e Rucola, Ibérica Bianca, Prosciutto e Funghi, Capricciosa, Quattro Formaggi, Ortolana, Ripieno (Calzone)." },
  { id: "calzone-focaccia", label: "Calzone & Focaccia", blurb: "Folded and stuffed specialties." },
  { id: "innovative", label: "Innovative", blurb: "Modern and rustic twists on Italian tradition — Double Pepperoni & Hot Honey, Chorizo and Gorgonzola, Burratina, Bufala e Ibérico, Tettoia — Four Cheese & Truffle, Calabrese, Quattro Latte e 'Nduja, 'Nduja & Hot Honey, Cetarese, Cacio e Pepe, Carbonara, Amatriciana, Gricia, Pesto Cremosa, Burrata & Pesto, Salsiccia al Pesto, Boscaiola, Mortadella and Pistachio, La Oro Verde." },
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
    toppings: "70g–80g hand-crushed raw San Marzano DOP tomatoes, fine sea salt, 80g–90g well-drained Fior di Latte mozzarella, 4–5 fresh basil leaves, Elizondo Nº3 Picual EVOO (pre-bake), Frantoio Muraglia Coratina EVOO (post-bake finish). No hard cheese.",
    menuIngredients: "Tomato, mozzarella, basil, olive oil",
    build: "The quintessential benchmark Neapolitan pie — clean San Marzano DOP, well-drained Fior di Latte, split basil staging, and our house dual-tier EVOO protocol.",
    postBake: "Transfer directly to a wooden board and rest for 30 seconds (do NOT use a wire rack). Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO. Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → creamy melted Fior di Latte → warm basil & fruity Picual → fresh basil → peppery Coratina finish",
    videoGuide: "Classic San Marzano Tomato Sauce & Assembly",
    steps: [
      { title: "1. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on Caputo Semolina Rimacinata", "Flatten gently from the centre outward, pushing gas toward the perimeter to form a pronounced 1.5–2cm cornicione"] },
      ] },
      { title: "2. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Apply 70g–80g hand-crushed San Marzano DOP tomatoes", "Spread outward in a spiral, leaving a clean 1.5–2cm border", "Season with a light pinch of fine sea salt"] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Scatter 80g–90g well-drained Fior di Latte irregular pieces across the tomato sauce, leaving small gaps between pieces to minimise moisture pooling"] },
        { intro: "Layer 3 — Basil:", bullets: ["Tuck 2–3 small basil leaves under or between the mozzarella pieces to protect them from direct flame scorching"] },
        { intro: "Layer 4 — Picual:", bullets: ["Apply a light 2g–3g micro-drizzle of Elizondo Nº3 Picual EVOO over the build for fresh green/fruity integration during the bake"] },
      ] },
      { title: "3. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 420°C–440°C", "🔥 Dome/Air: 450°C–480°C", "⏱ Cook Time: 60–75 seconds"] },
        { bullets: ["Rotate regularly and adjust the top flame dynamically based on cornicione rise and mozzarella melt"] },
      ] },
      { title: "4. Rest & Finish", sections: [
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
    toppings: "80g–90g San Marzano DOP tomato sauce, 3g–4g finely grated Parmigiano Reggiano DOP, Mozzarella di Bufala Campana DOP (baked), fresh basil leaves, Frantoio Muraglia Coratina EVOO.",
    menuIngredients: "Tomato, mozzarella di bufala, Parmigiano Reggiano, basil, olive oil",
    build: "Bufalina Classica is the traditional, integrated take on Margherita con Bufala: a light dusting of Parmigiano Reggiano seasons the sauce before the buffalo mozzarella is drained, rested, then baked directly into the hot San Marzano DOP sauce so the fat melts straight into the tomato. Character: integrated, hot, savoury and classic.",
    postBake: "Rest 30 seconds on a wooden board, then finish with 1–2 fresh basil leaves and a light swirl of Frantoio Muraglia Coratina EVOO (Intense Fruity).",
    flavorProgression: "Hot San Marzano → savoury Parmigiano Reggiano → melted creamy buffalo → cooked basil → intense Coratina finish",
    variations: [
      { relatedId: "bufalina-a-freddo", relatedName: "Bufalina a Freddo", summary: "Baked vs. Post-Bake Buffalo Mozzarella — integrated heat vs. cold, silky contrast." },
      { relatedId: "bufalina-de-la-casa", relatedName: "Bufalina de la Casa", summary: "San Marzano classic vs. sweet Datterini & dual-oil house special." },
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
        { bullets: ["Stretch the 280g dough ball to 30–33cm", "Spread 80g–90g sauce, leaving a 1.5–2cm rim clear", "Lightly dust 3g–4g finely grated Parmigiano Reggiano DOP directly over the sauce", "Distribute the 80g–90g drained Bufala evenly", "Tuck 2–3 fresh basil leaves under the cheese", "No oil before baking"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🧱 Stone Floor: 430°C–440°C", "⏱ Cook Time: 60–90 seconds", "🔥 Adjust top flame dynamically based on cornicione browning"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Rest 30 seconds on a WOODEN BOARD (no wire rack)", "Finish with 1–2 fresh basil leaves and a light swirl of Frantoio Muraglia Coratina EVOO"] },
        { intro: "Profile:", bullets: ["Hot San Marzano → savoury Parmigiano Reggiano → melted creamy buffalo → cooked basil → intense Coratina finish"] },
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
      { relatedId: "bufalina-de-la-casa", relatedName: "Bufalina de la Casa", summary: "Thermal contrast classic vs. sweet Datterini & dual-oil house special." },
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
    style: "House Neapolitan — Fresh Datterini, Buffalo Mozzarella & Dual-Oil Finish",
    category: "classic",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/doc-carmnella.jpg",
    toppings: "100g–110g fresh Datterini tomatoes (filleted lengthwise, lightly salted, drained), 85g–90g Mozzarella di Bufala Campana DOP, 4–5 fresh basil leaves, Elizondo Nº3 Picual EVOO pre-bake, Barbera Lorenzo N°5 EVOO finishing swirl. No hard cheese.",
    menuIngredients: "Datterini tomato, buffalo mozzarella, basil, olive oil",
    build: "Our flagship house Bufalina inspired by classic Naples restraint — sweet filleted Datterini tomatoes, rich Mozzarella di Bufala Campana DOP, and a smooth Barbera Lorenzo N°5 finish.",
    postBake: "Rest 30–60 seconds on a wooden board, then scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO (Nocellara del Belice DOP).",
    inspiredBy: "Inspired by Pizzeria Carmnella dal 1892 — Pizza DOC.",
    variations: [
      { relatedId: "bufalina-classica", relatedName: "Bufalina Classica", summary: "Sweet Datterini & dual-oil house special vs. San Marzano classic." },
      { relatedId: "bufalina-a-freddo", relatedName: "Bufalina a Freddo", summary: "Sweet Datterini & dual-oil house special vs. thermal contrast classic." },
    ],
    comparisonTable: BUFALINA_TRILOGY_TABLE,
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Slice fresh Datterini tomatoes lengthwise into fillets, toss with a tiny pinch of fine sea salt, and drain in a sieve for 10 minutes", "Tear 85g–90g Mozzarella di Bufala Campana DOP into large pieces and drain thoroughly in a sieve"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in the 1.5–2cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Datterini Fillets:", bullets: ["Spread 100g–110g filleted Datterini tomatoes evenly across the dough, leaving a 1.5–2cm rim clean"] },
        { intro: "Layer 2 — Bufala DOP:", bullets: ["Distribute 85g–90g well-drained Bufala DOP pieces over the Datterini layer"] },
        { intro: "Layer 3 — Basil:", bullets: ["Tuck 2–3 fresh basil leaves under the Bufala pieces"] },
        { intro: "Layer 4 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🧱 Stone Floor: 430°C–440°C", "⏱ Cook Time: 60–90 seconds", "🔥 Manage top flame dynamically to allow the Datterini fillets to soften, sweeten, and blister while controlling buffalo cheese melting"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { intro: "Rest Protocol:", bullets: ["Transfer directly to a WOODEN BOARD and rest for 30–60 seconds"] },
        { bullets: ["Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO", "Slice and serve immediately"] },
        { intro: "Profile:", bullets: ["Sweet blistered Datterini → rich creamy buffalo → warm basil → baked Picual → buttery Lorenzo N°5 finish"] },
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
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "🔥 Manage the top flame dynamically after launch, reducing as needed to control Pecorino browning while allowing the cornicione to develop even blistering and colour", "⏱ Cook Time: 75–90 seconds", "🔄 Rotate regularly for an even rise, browning and leopard spotting"] },
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
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 3g–4g spiral drizzle of Elizondo Nº3 Picual EVOO over the entire build, lightly coating the garlic"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "🔥 Manage the top flame dynamically to heat and lightly concentrate the tomato while allowing the garlic to soften and sweeten without scorching", "⏱ Cook Time: 75–90 seconds", "🔄 Rotate regularly for an even rise and leopard spotting"] },
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
    name: "Napoletana",
    style: "Classic Neapolitan — San Marzano DOP, Fior di Latte, Cantabrian Anchovies, Capers & Olives",
    category: "classic",
    image: "https://italianfoodforever.com/wp-content/uploads/2015/01/napolipizza4.jpg",
    toppings: "75g–80g hand-crushed San Marzano DOP tomatoes (well-drained), 70g–80g well-drained Fior di Latte (hand-torn), 2–3 Cantabrian anchovy fillets (broken into 1cm segments), 4g–5g rinsed salted capers, 4–6 pitted & halved Kalamata or Gaeta black olives, 0.5g–0.8g dried wild oregano, 2–3 fresh basil leaves, 2g–3g Elizondo Nº3 Picual EVOO pre-bake, 3g–4g Barbera Lorenzo Nº5 EVOO (or Frantoio Muraglia Coratina) post-bake. No hard cheese, no garlic.",
    menuIngredients: "San Marzano DOP, Fior di Latte, Cantabrian anchovies, capers, olives, wild oregano",
    build: "The quintessential savory Neapolitan classic — pairing San Marzano DOP, well-drained Fior di Latte, Cantabrian anchovies, Kalamata olives, rinsed capers, and wild oregano.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds, then apply a 3g–4g finishing swirl of Barbera Lorenzo Nº5 EVOO (or Frantoio Muraglia Coratina) across the hot pie. Slice and serve immediately.",
    flavorProgression: "Concentrated San Marzano → creamy Fior di Latte → savory Cantabrian anchovy umami → briny caper & olive accent → fragrant oregano → smooth Lorenzo Nº5 finish",
    videoGuide: "True Italian Savory Flavors & Anchovy Placement",
    videoUrl: "https://www.youtube.com/shorts/sekbRulg8iA",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Drain crushed San Marzano DOP tomatoes in a fine sieve for 10 minutes", "Hand-tear Fior di Latte into rustic pieces and drain thoroughly in a sieve for 1–2 hours", "Rinse 4g–5g capers thoroughly under cold water to strip excess salt brine and pat completely dry on paper towels", "Break 2–3 Cantabrian anchovy fillets into small 1cm segments", "Pit and halve 4–6 Kalamata black olives"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on Caputo Semolina Rimacinata, preserving gas in the airy 1.5–2cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 75g–80g well-drained San Marzano DOP evenly across the center, leaving a 1.5–2cm clean rim — do NOT add extra salt"] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Scatter 70g–80g Fior di Latte sparsely over the sauce, leaving visible tomato between pieces"] },
        { intro: "Layer 3 — Anchovies & Herbs:", bullets: ["Distribute anchovy segments across the pie, tucking them gently against mozzarella pieces to prevent scorching", "Rub 0.5g–0.8g wild oregano between your palms over the build and add 2–3 basil leaves"] },
        { intro: "Layer 4 — Capers & Olives:", bullets: ["Scatter rinsed capers and halved black olives in open spaces, ensuring they do not stack directly on anchovy segments"] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "🔥 Manage the top flame dynamically after launch to allow the tomato sauce to reduce and the cheese to melt cleanly without crisping the anchovies into bitter chips", "⏱ Cook Time: 75–90 seconds", "🔄 Rotate regularly for an even rise and leopard spotting"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds", "Apply a 3g–4g finishing swirl of Barbera Lorenzo Nº5 EVOO (or Frantoio Muraglia Coratina) across the hot pie", "Slice and serve immediately"] },
        { intro: "Technical Salinity Note:", bullets: ["Cantabrian anchovies serve as the primary salt source for the entire pizza — thoroughly rinsing capers under cold water and tucking anchovies into the mozzarella matrix prevents the salt balance from overpowering the palate"] },
        { intro: "Profile:", bullets: ["Concentrated San Marzano → creamy Fior di Latte → savory Cantabrian anchovy umami → briny caper & olive accent → fragrant oregano → smooth Lorenzo Nº5 finish"] },
      ] },
    ],
  },
  {
    id: "diavola",
    number: 8,
    name: "Diavola",
    style: "Margherita con Salame Piccante — San Marzano DOP, Fior di Latte & Spicy Salami",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd4NQF9AoDHLYIDv3yGqhdZq9HBRfQ8WuGZUuR5s9Vw&s=10",
    toppings: "75g–80g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt, 80g–90g well-drained Fior di Latte (hand-torn), 35g–45g thinly sliced Salame Piccante (preferably Salame Napoletano; Ventricina or Soppressata Calabrese DOP as regional alternatives), 6g–8g Parmigiano Reggiano DOP (finely grated), 4–5 fresh basil leaves (split pre/post-bake), 2g–3g Elizondo Nº3 Picual EVOO pre-bake, 3g–4g Frantoio Muraglia Coratina EVOO post-bake. Optional: micro-drizzle of Calabrian chili oil.",
    menuIngredients: "Tomato, mozzarella, spicy salami, Parmigiano, basil",
    build: "A fiery Neapolitan classic featuring bright San Marzano DOP, well-drained Fior di Latte, thinly sliced Salame Napoletano, and a peppery Coratina EVOO finish.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds, scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO (and optional micro-drizzle of Calabrian chili oil). Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → creamy Fior di Latte → blistered spicy salami → toasted Parmigiano umami → peppery Coratina finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Drain crushed San Marzano DOP tomatoes in a fine sieve for 10 minutes", "Hand-tear 80g–90g Fior di Latte into irregular rustic strips and drain in a sieve for 1–2 hours", "Thinly slice 35g–45g Salame Piccante"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in the airy 1.5–2cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 75g–80g seasoned San Marzano DOP evenly across the center, leaving a 1.5–2cm clean rim"] },
        { intro: "Layer 2 — Parmigiano Dusting:", bullets: ["Distribute 6g–8g finely grated Parmigiano Reggiano DOP directly over the tomato sauce"] },
        { intro: "Layer 3 — Fior di Latte:", bullets: ["Scatter 80g–90g well-drained Fior di Latte strips over the tomato and Parmigiano layer"] },
        { intro: "Layer 4 — Salame Piccante & Basil:", bullets: ["Distribute 35g–45g Salame Piccante slices evenly across the pie", "Tuck 2–3 fresh basil leaves between or under cheese/salami slices"] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 420°C–440°C", "🔥 Dome: 450°C–480°C", "🔥 Manage the top flame dynamically after launch to allow the salami edges to render and blister while controlling cheese browning and fat release", "⏱ Cook Time: 60–75 seconds", "🔄 Rotate regularly for an even cook"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds", "Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO (and optional micro-drizzle of Calabrian chili oil)", "Slice and serve immediately"] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["The salami provides enough rendered fat to reinforce the spicy profile during the bake — keeping the Parmigiano to 6g–8g and thoroughly draining the Fior di Latte helps maintain a balanced center without excessive surface grease"] },
        { intro: "Profile:", bullets: ["Bright San Marzano → creamy Fior di Latte → blistered spicy salami → toasted Parmigiano umami → peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "seven-stars-parma",
    number: 9,
    name: "Prosciutto e Rucola",
    style: "Contemporary Neapolitan — Thermal & Textural Contrasts",
    category: "classic",
    image: "https://theuppercrustpizzeria.co.uk/cdn/shop/products/Parma.jpg?v=1639743529",
    toppings: "70g–80g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt (no oil stirred into the raw sauce), 50g well-drained Fior di Latte + 20g Mozzarella di Bufala DOP (70g pre-bake cheese foundation), 25g–30g fresh Mozzarella di Bufala DOP (room temperature, post-bake), 35g–40g Serrano Ham (sliced paper-thin, room temperature, post-bake), 15g–20g fresh wild rocket / arugula (tossed with 1g Barbera Lorenzo N°5 drawn from the finishing allocation), 10g–12g Parmigiano Reggiano DOP (shaved into wide ribbons), 2g–3g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch), and a 3g–4g Barbera Lorenzo N°5 EVOO total post-bake allocation (1g for the rocket, remaining 2g–3g for the finishing swirl).",
    menuIngredients: "Tomato, mozzarella di bufala, Serrano ham, arugula, Parmigiano",
    build: "A contemporary masterclass in thermal contrast — crisp baked crust topped sequentially with cool post-bake Bufala DOP, heat-warmed Serrano Ham, peppery wild rocket, and shaved Parmigiano.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Distribute the fresh Bufala DOP across the hot base, then drape the Serrano Ham, mound the dressed wild rocket, and scatter the shaved Parmigiano, finishing with the remaining 2g–3g swirl of Barbera Lorenzo N°5 EVOO. Slice and serve immediately.",
    flavorProgression: "Hot San Marzano → cool creamy Bufala DOP → warm relaxed Serrano Ham → peppery wild rocket → sharp shaved Parmigiano → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Hand-crush San Marzano DOP tomatoes and season lightly with fine sea salt.",
          "Combine 50g well-drained Fior di Latte and 20g Bufala DOP for the pre-bake layer.",
          "Toss 15g–20g fresh wild rocket with 1g Barbera Lorenzo N°5 in a bowl (drawn from the 3g–4g post-bake oil allocation).",
          "Shave 10g–12g Parmigiano Reggiano into thin ribbons.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 70g–80g seasoned San Marzano DOP evenly across the center — leave a 1.5–2cm rim clean."] },
        { intro: "Layer 2 — Pre-Bake Cheese:", bullets: ["Scatter the 70g Fior di Latte / Bufala mix over the tomato, leaving small gaps."] },
        { intro: "Layer 3 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build immediately before launching."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "⏱ Cook Time: 60–75 seconds — rotate regularly until the crust is fully blistered and the base is set enough to support the fresh post-bake toppings.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Fresh Bufala:", bullets: ["Distribute 25g–30g fresh room-temperature Bufala DOP across the hot base, keeping the fresh Bufala pieces distinct from the melted pre-bake cheese rather than mixing them together."] },
        { intro: "Stage 2 — Serrano Ham:", bullets: ["Drape 35g–40g paper-thin Serrano Ham loosely over the fresh Bufala, allowing the delicate fat to gently warm and relax from residual heat, softening its texture and warming its flavour without cooking or toughening the meat."] },
        { intro: "Stage 3 — Rocket:", bullets: ["Mound the dressed wild rocket directly over the Serrano ham."] },
        { intro: "Stage 4 — Parmigiano & Finishing Oil:", bullets: ["Scatter shaved Parmigiano ribbons over the rocket and finish with the remaining 2g–3g swirl of Barbera Lorenzo N°5 EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Thermal Note:", bullets: ["A short 30–40 second rest allows excess surface steam to dissipate while allowing the crust to settle before cold toppings are added. Keeping the post-bake fresh Bufala pieces distinct from the melted pre-bake cheese preserves the intended thermal contrast between hot, bubbling dairy and cool, creamy fresh mozzarella."] },
        { intro: "Profile:", bullets: ["Hot San Marzano → cool creamy Bufala DOP → warm relaxed Serrano Ham → peppery wild rocket → sharp shaved Parmigiano → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "parma-bianca",
    number: 10,
    name: "Ibérica Bianca",
    style: "Contemporary Neapolitan White Base — Ibérico Fat, Ricotta & Lorenzo N°5",
    category: "classic",
    image: "https://ginopizzaovens.com/cdn/shop/articles/gino-pizza-fior-latte-parma-ham-rocket-parmesan.jpg?v=1683056519&width=1500",
    toppings: "70g well-drained Fior di Latte + 50g fresh Ricotta di Bufala (pre-bake, 120g total), 35g–40g Jamón Ibérico de Cebo or de Bellota (room temperature, post-bake), 15g wild rocket tossed in 1g–2g Barbera Lorenzo N°5 (post-bake), 10g–12g Parmigiano Reggiano DOP shavings (post-bake), 2g Elizondo Nº3 Picual EVOO pre-bake, 3g–4g Barbera Lorenzo N°5 EVOO post-bake. Strictly no tomato sauce.",
    menuIngredients: "Mozzarella, ricotta, Iberico ham, arugula, Parmigiano",
    build: "A magnificent white base pie featuring creamy Fior di Latte, dollops of fresh Ricotta di Bufala, room-temperature Jamón Ibérico, wild rocket, shaved Parmigiano, and buttery Lorenzo N°5.",
    postBake: "Transfer directly to a wooden board and rest for 30 seconds to vent steam, then sequentially stage the room-temperature Jamón Ibérico, dressed wild rocket, and shaved Parmigiano, finishing with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO. Slice and serve immediately.",
    flavorProgression: "Creamy melted Fior di Latte → milky Ricotta di Bufala → warm nutty Ibérico fat → peppery wild rocket → sharp shaved Parmigiano → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Drain 50g fresh Ricotta di Bufala in a fine sieve for 30 minutes", "Hand-tear 70g Fior di Latte and drain thoroughly", "Bring 35g–40g Jamón Ibérico to room temperature before assembly so the delicate intramuscular fat softens and releases its aroma upon contact with the hot base", "Lightly toss 15g fresh wild rocket with 1g–2g Barbera Lorenzo N°5 in a bowl", "Shave 10g–12g Parmigiano Reggiano into thin ribbons"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Fior di Latte:", bullets: ["Scatter 70g well-drained Fior di Latte across the naked dough, leaving small gaps (no tomato sauce)"] },
        { intro: "Layer 2 — Ricotta Dollops:", bullets: ["Apply 50g drained Ricotta di Bufala in 5–8 small, spaced dollops over the Fior di Latte"] },
        { intro: "Layer 3 — Picual:", bullets: ["Apply a light 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 420°C–440°C", "🔥 Dome: 450°C–480°C", "⏱ Cook Time: 60–75 seconds", "🔄 Rotate regularly until the crust is fully blistered, the Fior di Latte is melted and glossy, and the ricotta dollops are set"] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30 seconds to vent steam"] },
        { intro: "Stage 1 — Jamón Ibérico:", bullets: ["Drape 35g–40g room-temperature Jamón Ibérico loosely over the hot ricotta base, allowing the oleic-rich fat to soften and turn translucent from residual heat"] },
        { intro: "Stage 2 — Rocket:", bullets: ["Mound the dressed wild rocket directly over the Ibérico ham"] },
        { intro: "Stage 3 — Parmigiano & Finishing Oil:", bullets: ["Scatter shaved Parmigiano ribbons over the rocket and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO", "Slice and serve immediately"] },
        { intro: "Technical Fat & Thermal Note:", bullets: ["Bringing Jamón Ibérico to room temperature before staging helps achieve the intended texture — the high proportion of unsaturated oleic fat softens readily and becomes more translucent from residual heat, releasing its nutty aromatics without altering its cured texture"] },
        { intro: "Profile:", bullets: ["Creamy melted Fior di Latte → milky Ricotta di Bufala → warm nutty Ibérico fat → peppery wild rocket → sharp shaved Parmigiano → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "prosciutto-e-funghi",
    number: 11,
    name: "Prosciutto e Funghi",
    style: "Classic Neapolitan — San Marzano DOP, Fior di Latte, Prosciutto Cotto & Champignons",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAP5MdbljTAVL7meY_XhtUQ1HIdHrEIdsxxZk_dqVevQ&s=10",
    toppings: "60g–70g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt, 6g Parmigiano Reggiano DOP 24M (finely grated — house savory accent), 75g well-drained Fior di Latte (hand-torn into irregular rustic strips), 40g–50g Prosciutto Cotto (high-quality Italian cooked ham, torn into rustic strips), 35g–40g Champignon mushrooms (sliced 1–2mm, dry-sautéed without oil until moisture evaporates, cooled completely), 4–5 fresh basil leaves (split: 2–3 pre-bake, 1–2 post-bake), 2g–3g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch), 3g–4g Barbera Lorenzo N°5 EVOO (Nocellara del Belice DOP — finishing swirl).",
    menuIngredients: "Tomato, mozzarella, Parmigiano Reggiano, cooked ham, Champignon mushrooms, basil, olive oil",
    build: "A cherished Neapolitan classic pairing bright San Marzano DOP and melted Fior di Latte with delicate Prosciutto Cotto, dry-sautéed Champignon mushrooms, and a smooth Lorenzo N°5 finish.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds to allow rendered moisture and melted cheese to stabilize. Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the pie. Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → toasted Parmigiano → creamy Fior di Latte → warm Prosciutto Cotto → earthy Champignons → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Hand-crush San Marzano DOP tomatoes and season lightly with fine sea salt.",
          "Hand-tear 75g Fior di Latte into irregular rustic strips and drain in a sieve for at least 1 hour.",
          "Slice 35g–40g Champignon mushrooms (1–2mm). Dry-sauté briefly in a hot pan without oil until they release and evaporate visible moisture. Cool completely before assembly.",
          "Tear 40g–50g Prosciutto Cotto into rustic strips.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on Caputo Semolina Rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 60g–70g San Marzano sauce evenly across the center — leave a 1.5–2cm rim clean."] },
        { intro: "Layer 2 — Parmigiano Accent:", bullets: ["Distribute 6g finely grated Parmigiano Reggiano DOP directly over the tomato sauce as a house savory accent."] },
        { intro: "Layer 3 — Fior di Latte & Basil:", bullets: ["Scatter 75g Fior di Latte strips over the tomato and Parmigiano.", "Tuck 2–3 fresh basil leaves under cheese pieces."] },
        { intro: "Layer 4 — Prosciutto Cotto & Champignons:", bullets: ["Distribute Prosciutto Cotto strips and dry-sautéed Champignon mushrooms evenly across the cheese."] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically, reducing as needed to warm the Prosciutto Cotto and lightly roast the mushrooms without drying the ham.",
          "⏱ Cook Time: 60–75 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: [
          "Transfer directly to a wooden board and rest for 30–60 seconds to allow rendered moisture and melted cheese to stabilize.",
          "Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO (Nocellara del Belice DOP) across the pie.",
          "Slice and serve immediately.",
        ] },
        { intro: "Technical Moisture & Fat Note:", bullets: [
          "A light 6g Parmigiano Reggiano layer over the tomato adds savoury depth as a house-level accent and helps absorb surface moisture during the bake.",
          "Dry-sautéing the Champignon mushrooms before topping removes excess surface moisture and makes their texture more predictable during the high-heat bake.",
        ] },
        { intro: "Profile:", bullets: ["Bright San Marzano → toasted Parmigiano → creamy Fior di Latte → warm Prosciutto Cotto → earthy Champignons → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "capricciosa",
    number: 12,
    name: "Capricciosa",
    style: "House Classic — Prosciutto Cotto, Salame, Artichokes & Champignons",
    category: "classic",
    image: "https://positano.lv/wp-content/uploads/2021/12/Capricciosa-1.png",
    toppings: "60g–70g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt, 6g Parmigiano Reggiano DOP 24M (finely grated — house savory accent), 75g well-drained Fior di Latte (hand-torn into rustic strips), 35g Prosciutto Cotto (high-quality Italian cooked ham, torn into rustic strips), 25g Salame di Mugnano del Cardinale or Salame Napoletano (thinly sliced), 30g Champignon mushrooms (sliced 1–2mm, dry-sautéed without oil until surface moisture evaporates, cooled completely), 30g Carciofini Mammarelle artichoke hearts (in oil/brine, gently pressed to remove excess surface oil while preserving their acidic brine profile, quartered), 4–5 fresh basil leaves (split: 2–3 pre-bake, 1–2 post-bake), 2g–3g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch), 3g–4g Barbera Lorenzo N°5 EVOO (Nocellara del Belice DOP — finishing swirl).",
    menuIngredients: "Tomato, mozzarella, cooked ham, salame, mushroom, artichoke, Parmigiano, basil",
    build: "Our house interpretation of the grand Neapolitan classic featuring the 'Big Four' toppings — Prosciutto Cotto, Salame di Mugnano, dry-sautéed Champignons, and pressed artichoke hearts over San Marzano DOP and melted Fior di Latte.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds to allow the cheese to settle and excess surface steam to dissipate. Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the pie. Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → toasted Parmigiano → creamy Fior di Latte → savory Prosciutto Cotto & spiced Salame → earthy Champignons & tangy artichoke → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Hand-crush San Marzano DOP tomatoes and season lightly with fine sea salt.",
          "Hand-tear 75g Fior di Latte into rustic strips and drain in a sieve for at least 1 hour.",
          "Slice 30g Champignon mushrooms (1–2mm) and dry-sauté briefly in a hot pan without oil until surface moisture evaporates. Cool completely.",
          "Gently press 30g Carciofini Mammarelle quarters in paper towels to remove excess surface oil without draining their acidic brine.",
          "Portion 35g Prosciutto Cotto and 25g thinly sliced Salame.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione while keeping the center structured to support the topping load."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 60g–70g San Marzano sauce evenly across the center — leave a 1.5–2cm rim clean."] },
        { intro: "Layer 2 — Parmigiano Accent:", bullets: ["Distribute 6g finely grated Parmigiano Reggiano DOP directly over the tomato sauce as a house savory accent."] },
        { intro: "Layer 3 — Fior di Latte & Basil:", bullets: ["Scatter 75g Fior di Latte strips over the tomato and Parmigiano.", "Tuck 2–3 fresh basil leaves under cheese pieces."] },
        { intro: "Layer 4 — The Four Toppings:", bullets: ["Evenly distribute Prosciutto Cotto, Salame slices, dry-sautéed Champignons, and quartered artichoke pieces across the cheese."] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, reducing as needed so floor heat cooks through the topping load without burning the top.",
          "⏱ Cook Time: 70–80 seconds — rotate regularly until the crust shows even blistering and colour, salami edges lightly curl, and artichokes show slight char.",
        ] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: [
          "Transfer directly to a wooden board and rest for 30–60 seconds to allow the cheese to settle and excess surface steam to dissipate.",
          "Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the pie.",
          "Slice and serve immediately.",
        ] },
        { intro: "Technical Moisture & Fat Note:", bullets: [
          "Gently pressing artichokes removes excess surface oil while retaining their acidic brine character.",
          "A light 6g Parmigiano Reggiano layer dusted directly on the raw tomato adds savory depth and helps absorb surface moisture during the bake.",
        ] },
        { intro: "Profile:", bullets: ["Bright San Marzano → toasted Parmigiano → creamy Fior di Latte → savory Prosciutto Cotto & spiced Salame → earthy Champignons & tangy artichoke → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "quattro-formaggi",
    number: 13,
    name: "Quattro Formaggi",
    style: "Classic Neapolitan Pizza Bianca — Fior di Latte, Ricotta, Gorgonzola Dolce & Parmigiano",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQib4tBZbanA4_Cd1takByQB8S_KSC4VKJpP0-Tey91vQ&s=10",
    toppings: "15g Parmigiano Reggiano DOP (finely grated, dusted on dough), 55g–60g Fior di Latte (hand-torn, drained 1+ hour), 30g Ricotta di Bufala or fresh cow's milk ricotta (loosened, dolloped), 20g–25g Gorgonzola DOP Dolce (crumbled), 2g Elizondo Nº3 Picual EVOO pre-bake, 3g–4g Barbera Lorenzo N°5 EVOO post-bake, 1–2 fresh basil leaves (optional). Optional gourmet finish: wildflower honey micro-drizzle + 1–2 drops Belazu White Truffle EVOO. Strictly no tomato sauce.",
    menuIngredients: "Mozzarella, ricotta, gorgonzola, Parmigiano",
    build: "A classic Neapolitan white benchmark — pairing a toasted Parmigiano base, melted Fior di Latte, milky Ricotta dollops, Gorgonzola Dolce pockets, and a smooth Lorenzo N°5 finish.",
    postBake: "Transfer directly to a wooden board and rest for 30 seconds to allow the melted cheeses to stabilize, then finish with 1–2 fresh basil leaves and a 3g–4g swirl of Barbera Lorenzo N°5 EVOO. Optional: apply a micro-drizzle of wildflower honey and white truffle oil. Slice and serve immediately.",
    flavorProgression: "Toasted Parmigiano crust → creamy melted Fior di Latte → milky ricotta pockets → rich Gorgonzola Dolce accent → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Tear 55g–60g Fior di Latte into rustic strips and drain in a sieve for at least 1 hour", "Loosen 30g fresh ricotta in a small bowl with a tiny splash of water or oil until smooth", "Finely grate 15g Parmigiano Reggiano DOP", "Portion 20g–25g Gorgonzola DOP Dolce into small, discrete nuggets"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Parmigiano Base Dusting:", bullets: ["Dust 15g finely grated Parmigiano Reggiano directly across the raw dough — placing hard cheese directly on the dough creates a savory, toasted layer"] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Distribute 55g–60g drained Fior di Latte strips evenly over the Parmigiano, leaving small gaps"] },
        { intro: "Layer 3 — Ricotta & Gorgonzola Accents:", bullets: ["Drop 4–5 small dollops of smoothed ricotta and 4–5 crumbled nuggets of Gorgonzola Dolce into open spaces across the base"] },
        { intro: "Layer 4 — Picual:", bullets: ["Apply a light 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "🔥 Dome: 450°C–480°C", "🔥 Manage the flame dynamically after launch, reducing it as needed to control browning and prevent excessive cheese fat separation", "⏱ Cook Time: 60–75 seconds", "🔄 Rotate regularly until the crust develops even blistering and colour and the cheeses are bubbling and integrated"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30 seconds to allow the melted cheeses to stabilize", "Finish with 1–2 fresh basil leaves and a 3g–4g swirl of Barbera Lorenzo N°5 EVOO", "Optional: apply micro-drizzle of wildflower honey and white truffle oil", "Slice and serve immediately"] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["Dusting Parmigiano Reggiano directly onto the naked dough creates an anchor layer that helps absorb moisture during baking and develops a toasted savoury base. Gorgonzola Dolce is used rather than Gorgonzola Piccante for its softer, creamier texture and gentler blue-cheese profile"] },
        { intro: "Profile:", bullets: ["Toasted Parmigiano crust → creamy melted Fior di Latte → milky ricotta pockets → rich Gorgonzola Dolce accent → almond-smooth Lorenzo N°5 finish"] },
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
    style: "Classic Folded Neapolitan — Creamed Ricotta, Fior di Latte & Salame",
    category: "classic",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/11/91/05/29/calzone-al-forno-ripieno.jpg",
    toppings: "Interior (160g): 60g fresh Ricotta di Bufala or cow's milk ricotta (whisked smooth), 60g Fior di Latte (cubed, drained), 40g Salame di Mugnano del Cardinale or Salame Napoletano (diced), 0.5g freshly cracked black pepper. Exterior: 50g–60g hand-crushed San Marzano DOP, 15g Parmigiano Reggiano DOP 24M (grated), 2g Elizondo Nº3 Picual EVOO (pre-bake), 3g–4g Barbera Lorenzo Nº5 EVOO (post-bake), 2–3 fresh basil leaves.",
    menuIngredients: "Ricotta, mozzarella, salami, tomato, Parmigiano, basil",
    build: "A classic folded Neapolitan calzone — packed with peppered ricotta cream, Fior di Latte, and diced Salame, dressed externally with San Marzano DOP, Parmigiano, and Lorenzo N°5.",
    postBake: "Transfer directly to a wooden board and rest for 60 seconds to allow internal steam pressure to equalize and fillings to set. Top with 2–3 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the warm tomato exterior. Slice and serve immediately.",
    flavorProgression: "Tangy exterior San Marzano & Parmigiano → golden baked crust → velvety black-peppered ricotta → melted Fior di Latte → savory diced Salame bite → smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Whisk 60g fresh ricotta with a small pinch of fine sea salt and 0.5g freshly cracked black pepper until smooth and velvety", "Cube 60g Fior di Latte into small 1cm pieces and drain in a sieve for at least 1 hour", "Dice 40g Salame into small 0.5cm cubes"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to an even 30–32cm disc on semolina rimacinata", "Do NOT push gas into a cornicione rim — keep the thickness uniform across the entire sheet"] },
      ] },
      { title: "3. Interior Layering & Sealing", sections: [
        { intro: "Step A — Ricotta Cream:", bullets: ["Spread 60g whisked ricotta smoothly across the bottom half (crescent) of the dough, leaving a clean 2cm border around the edge"] },
        { intro: "Step B — Cheese & Cured Meat:", bullets: ["Scatter 60g cubed Fior di Latte and 40g diced Salame evenly across the ricotta layer"] },
        { intro: "Step C — Fold & Crimp:", bullets: ["Lightly moisten the clean 2cm border with water", "Fold the top empty half over the filling to form a crescent", "Press and crimp the edges firmly to form a firmly sealed edge"] },
        { intro: "Step D — Steam Vent:", bullets: ["Prick a single, tiny steam release hole at the top center of the calzone"] },
      ] },
      { title: "4. Exterior Dressing", sections: [
        { bullets: ["Spread 50g–60g crushed San Marzano DOP evenly across the top exterior of the sealed calzone", "Dust finely with 15g Parmigiano Reggiano DOP 24M and apply a 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the top"] },
      ] },
      { title: "5. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 380°C–400°C (lower floor temp is required to melt interior fillings without burning the dough)", "🔥 Manage flame dynamically after launch, keeping top flame LOW/MEDIUM", "⏱ Cook Time: 100–120 seconds", "🔄 Rotate frequently until the exterior is deeply golden and blistered and the interior is fully melted and hot"] },
      ] },
      { title: "6. Rest & Post-Bake Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 60 seconds to allow the internal steam pressure to equalize and fillings to set"] },
        { bullets: ["Top with 2–3 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the warm tomato exterior", "Slice and serve immediately"] },
        { intro: "Technical Thermal Note:", bullets: ["Calzones act as thermal insulators — target a lower stone temperature of 380°C–400°C for 100–120 seconds in your Gozney to allow heat to penetrate through the double dough fold without scorching the exterior. Resting on a wooden board for 60 seconds helps prevent hot ricotta blowout upon cutting"] },
        { intro: "Profile:", bullets: ["Tangy exterior San Marzano & Parmigiano → golden baked crust → velvety black-peppered ricotta → melted Fior di Latte → savory diced Salame bite → smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "double-pepperoni-hot-honey",
    number: 16,
    name: "Double Pepperoni & Hot Honey",
    style: "Modern Crowd-Pleaser — Cup-and-Char, Salame Piccante, Provolone & Calabrian Honey",
    category: "innovative",
    image: "https://coolfooddude.com/wp-content/uploads/2020/12/Double-Pepperoni-and-honey-PIzza.jpg",
    toppings: "60g–70g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt, 70g well-drained Fior di Latte (coarsely torn/shredded), 15g aged Provolone Piccante (coarsely grated), 35g cup-and-char pepperoni, 20g thinly sliced spicy dry-cured Salame Piccante, 2g–3g Elizondo Nº3 Picual EVOO pre-bake, 10g–12g warm Calabrian hot honey, 3–5 drops fermented chili vinegar, micro-pinch Maldon flaky sea salt, 2g Frantoio Muraglia Coratina EVOO post-bake. No basil.",
    menuIngredients: "Tomato, mozzarella, provolone, pepperoni, hot honey",
    build: "A modern Neapolitan-style crowd-pleaser featuring a crisp dual-tier cured-meat architecture, aged provolone, warm Calabrian hot honey, and a precise fermented-chili vinegar lift.",
    postBake: "Transfer directly to a wooden board and rest for 30 seconds, drizzle 10g–12g warm Calabrian hot honey rapidly across the pizza (concentrating slightly over the pepperoni cups), apply 3–5 tiny drops of fermented chili vinegar, add a tiny pinch of Maldon flaky sea salt, then finish with 2g Frantoio Muraglia Coratina EVOO. Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → nutty melted Provolone Piccante → blistered cup-and-char pepperoni & spicy salami → sweet Calabrian honey heat → subtle fermented-chili acidity → peppery Coratina finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Hand-crush 60g–70g San Marzano DOP tomatoes and season lightly with fine sea salt", "Combine 70g well-drained Fior di Latte with 15g aged Provolone Piccante, keeping pieces relatively coarse so they melt without forming a dense blanket", "Prepare 35g cup-and-char pepperoni and 20g spicy dry-cured Salame Piccante in thin slices", "Warm Calabrian Hot Honey gently until fluid enough for a controlled post-bake drizzle"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5cm cornicione while keeping the center thin enough to support the topping load"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 60g–70g San Marzano sauce evenly across the center, leaving a 1.5–2cm clean rim"] },
        { intro: "Layer 2 — Cheese Foundation:", bullets: ["Scatter the 70g Fior di Latte / 15g Provolone Piccante blend evenly across the tomato, leaving small gaps"] },
        { intro: "Layer 3 — Dual Cured Meat:", bullets: ["Distribute 35g cup-and-char pepperoni across the cheese", "Offset 20g Salame Piccante over the first layer rather than fully overlapping it"] },
        { intro: "Layer 4 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 410°C–430°C", "🔥 Dome: 450°C–480°C", "🔥 Manage the top flame dynamically throughout the bake, reducing it if the pepperoni or Provolone Piccante colors faster than the crust", "⏱ Cook Time: 70–80 seconds", "🔄 Rotate regularly for even rise and blistering"] },
      ] },
      { title: "5. Rest & Post-Bake Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30 seconds", "Drizzle 10g–12g warm Calabrian Hot Honey rapidly across the pizza, concentrating slightly over the pepperoni cups", "Apply 3–5 tiny drops of fermented chili vinegar around the pizza to provide an acidic counterpoint to the rendered meat and honey", "Add a tiny pinch of Maldon flaky sea salt", "Finish with 2g Frantoio Muraglia Coratina EVOO", "Slice and serve immediately"] },
        { intro: "Culinary Science Note (Acid Lift):", bullets: ["The fermented chili vinegar acts as a balancing layer rather than a dominant topping — its acidity cuts through the rendered fat from the cured meats and offsets the sweetness of the hot honey, keeping the finish lively without introducing a separate dominant flavor"] },
        { intro: "Profile:", bullets: ["Bright San Marzano → nutty melted Provolone Piccante → blistered cup-and-char pepperoni & spicy salami → sweet Calabrian honey heat → subtle fermented-chili acidity → peppery Coratina finish"] },
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
    toppings: "60g–70g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt, 70g–80g well-drained Fior di Latte (hand-torn), 30g–35g thinly sliced Ibérico or Spanish Cured Chorizo, 25g–30g Gorgonzola DOP Dolce (dotted in small pockets; Stilton optional regional variation), 2g–3g Elizondo Nº3 Picual EVOO pre-bake, 2g–3g Frantoio Muraglia Coratina EVOO post-bake. No basil.",
    menuIngredients: "Tomato, mozzarella, chorizo, blue cheese",
    build: "A modern flavor powerhouse — combining bright San Marzano DOP, well-drained Fior di Latte, smoky Ibérico chorizo, creamy Gorgonzola Dolce DOP, and a peppery Coratina finish.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds to allow rendered fats and melted blue cheese to settle, then finish with a 2g–3g swirl of Frantoio Muraglia Coratina EVOO across the pie. Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → creamy melted Fior di Latte → smoky paprika-cured chorizo → rich Gorgonzola Dolce pockets → peppery Coratina finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Hand-crush 60g–70g San Marzano DOP tomatoes and season lightly with fine sea salt", "Hand-tear 70g–80g Fior di Latte into irregular rustic pieces and drain in a sieve for 1–2 hours", "Thinly slice 30g–35g cured chorizo", "Portion/crumble 25g–30g Gorgonzola DOP Dolce into small, discrete pieces"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 60g–70g San Marzano sauce evenly across the center, leaving a 1.5–2cm clean rim"] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Scatter 70g–80g Fior di Latte strips over the tomato, leaving small gaps"] },
        { intro: "Layer 3 — Chorizo:", bullets: ["Distribute 30g–35g thinly sliced chorizo evenly across the cheese, avoiding heavy clusters"] },
        { intro: "Layer 4 — Gorgonzola Dolce:", bullets: ["Dot 25g–30g Gorgonzola DOP Dolce in small, spaced pockets into open gaps between the chorizo"] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 420°C–440°C", "🔥 Dome: 450°C–480°C", "🔥 Manage the top flame dynamically after launch, reducing to MEDIUM/LOW to prevent the paprika-rich chorizo and Gorgonzola fat from scorching or over-rendering", "⏱ Cook Time: 60–75 seconds", "🔄 Rotate regularly for an even cook"] },
      ] },
      { title: "5. Rest & Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds to allow rendered fats and melted blue cheese to settle", "Finish with a 2g–3g swirl of Frantoio Muraglia Coratina EVOO across the pie", "Slice and serve immediately"] },
        { intro: "Technical Fat & Moisture Note:", bullets: ["Spanish chorizo renders smoky, paprika-infused oils during high-heat baking while Gorgonzola Dolce melts rapidly into creamy pockets — omitting basil prevents competing aromatic notes, allowing the fat, acidity, and blue cheese funk to maintain clear definition"] },
        { intro: "Profile:", bullets: ["Bright San Marzano → creamy melted Fior di Latte → smoky paprika-cured chorizo → rich Gorgonzola Dolce pockets → peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "burratina",
    number: 18,
    name: "Burratina",
    style: "Contemporary Neapolitan — Volcanic Piennolo DOP & Post-Bake Burrata Crown",
    category: "innovative",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/cafona-carm.jpeg",
    toppings: "70g–80g Pomodorino del Piennolo del Vesuvio DOP (crushed a pacchetelle by hand), 8g Pecorino Romano DOP (finely grated), 0.5g wild mountain oregano (Origano di Montagna), 4–5 fresh basil leaves (split: 2–3 pre-bake, 1–2 post-bake), 2g–3g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch), 100g Burrata di Putignano or Burrata di Andria DOP (120g max for 33cm stretched base; removed from refrigeration sufficiently ahead of service to take the chill off), 3g–4g Barbera Lorenzo N°5 EVOO (Nocellara del Belice DOP — finishing swirl over opened burrata).",
    menuIngredients: "Red Piennolo tomato, Pecorino Romano, oregano, basil, olive oil, Burrata di Putignano (post-bake)",
    build: "A contemporary masterclass in thermal contrast — blistered, concentrated Vesuvian Piennolo DOP tomatoes baked with mountain oregano and Pecorino Romano, crowned post-bake with a fresh, silky Pugliese Burrata.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Place the room-temperature Putignano Burrata centrally on the hot base, cross-cut and open the pouch so the stracciatella spills over the tomatoes, scatter the remaining basil, and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the opened burrata and crust. Slice and serve immediately.",
    flavorProgression: "Blistered Piennolo DOP → sharp Pecorino Romano & oregano → cool creamy Burrata stracciatella → sweet basil → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Hand-crush 70g–80g Piennolo del Vesuvio DOP tomatoes a pacchetelle.",
          "Remove 100g Burrata from refrigeration sufficiently ahead of service to take the chill off so the internal stracciatella is not ice-cold.",
          "Finely grate 8g Pecorino Romano DOP.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Piennolo DOP:", bullets: ["Spread 70g–80g crushed Piennolo tomatoes evenly across the dough, leaving a clean 1.5–2cm border."] },
        { intro: "Layer 2 — Cheese & Oregano:", bullets: ["Dust 8g finely grated Pecorino Romano DOP and 0.5g mountain oregano evenly over the tomatoes."] },
        { intro: "Layer 3 — Basil & Picual:", bullets: ["Tuck 2–3 fresh basil leaves into the tomatoes and finish with a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–450°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, reducing as needed so the sweet Piennolo tomatoes blister and concentrate without scorching.",
          "⏱ Cook Time: 75–90 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Burrata Crown:", bullets: ["Place the room-temperature Putignano Burrata centrally on the hot base. Make a light cross cut (+) in the outer skin of the top knot and gently open the pouch so the creamy stracciatella spills over the blistered Piennolo tomatoes."] },
        { intro: "Stage 2 — Basil & Finishing Oil:", bullets: ["Scatter 1–2 fresh basil leaves over the stracciatella and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the opened burrata and crust.", "Slice and serve immediately."] },
        { intro: "Technical Thermal Note:", bullets: ["Burrata must never enter the oven; extreme heat causes its delicate cream to separate into whey, saturating the crust. Resting the pizza for 30–40 seconds on a wooden board before crowning with room-temperature burrata preserves the thermal contrast between blistered, concentrated Vesuvian tomatoes and cool, silky stracciatella cream."] },
        { intro: "Profile:", bullets: ["Blistered Piennolo DOP → sharp Pecorino Romano & oregano → cool creamy Burrata stracciatella → sweet basil → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "bufala-e-iberico",
    number: 19,
    name: "Bufala e Ibérico",
    style: "Contemporary Neapolitan White Base — Inspired by Neapolitan Bufala e Fiocco Concepts",
    category: "innovative",
    image: "https://www.fllifiorentinoblog.it/wp-content/uploads/2022/11/316661686_3326119354306765_8744321983837170150_n.jpg",
    toppings: "85g–90g Mozzarella di Bufala Campana DOP (torn, drained uncovered in fridge 2+ hours, rested 30 minutes at room temp), 35g–40g Jamón Ibérico de Cebo or de Bellota (room temperature, post-bake), 4–5 fresh basil leaves (2–3 pre-bake, 1–2 post-bake), 2g Elizondo Nº3 Picual EVOO pre-bake, 3g–4g Barbera Lorenzo N°5 EVOO post-bake. Strictly no tomato sauce; no ricotta, rocket, or Parmigiano.",
    menuIngredients: "Mozzarella di bufala, Jamón Ibérico, basil, olive oil",
    build: "An exquisitely restrained Neapolitan Pizza Bianca inspired by classic Bufala e Fiocco concepts — pairing hot Mozzarella di Bufala Campana DOP with paper-thin room-temperature Jamón Ibérico and a Lorenzo N°5 finish.",
    postBake: "Transfer directly to a wooden board and rest for 30 seconds to vent excess steam, then drape the room-temperature Jamón Ibérico over the hot melted Bufala, scatter the remaining basil, and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO. Slice and serve immediately.",
    flavorProgression: "Pure hot dough base → rich creamy melted Bufala DOP → warm translucent Ibérico fat → warm basil → almond-smooth Lorenzo N°5 finish",
    inspiredBy: "Neapolitan Bufala e Fiocco Concepts",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Tear 85g–90g Mozzarella di Bufala Campana DOP into large rustic pieces, place in a sieve over a bowl, and refrigerate UNCOVERED for 2+ hours; rest at room temperature for 30 minutes prior to assembly", "Bring 35g–40g Jamón Ibérico to room temperature (20°C–22°C) so its delicate fat softens naturally upon contact with the hot pie"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Bufala DOP:", bullets: ["Distribute 85g–90g well-drained Bufala DOP evenly across the naked dough, leaving small gaps and a clean 1.5–2cm border"] },
        { intro: "Layer 2 — Basil Pre-Bake:", bullets: ["Tuck 2–3 fresh basil leaves under or between buffalo mozzarella pieces to protect them from direct flame scorching"] },
        { intro: "Layer 3 — Picual:", bullets: ["Apply a light 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 430°C–450°C", "🔥 Dome: 450°C–480°C", "⏱ Cook Time: 60–75 seconds", "🔄 Rotate regularly until the cornicione develops even blistering and colour, the base sets cleanly, and the buffalo mozzarella is fully melted and glossy"] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30 seconds to vent excess steam"] },
        { intro: "Stage 1 — Jamón Ibérico:", bullets: ["Drape 35g–40g room-temperature Jamón Ibérico loosely in single-layer folds across the hot melted Bufala, allowing the fat to turn translucent and release its aroma from residual heat"] },
        { intro: "Stage 2 — Basil & Finishing Oil:", bullets: ["Scatter 1–2 fresh basil leaves and finish with a 3g–4g swirl of Barbera Lorenzo N°5 EVOO across the ham and crust", "Slice and serve immediately"] },
        { intro: "Technical Thermal Note:", bullets: ["Bringing Jamón Ibérico to room temperature before assembly helps achieve the intended texture — draping paper-thin slices over the rested 85g–90g buffalo mozzarella allows the delicate fat to soften naturally from residual surface heat without cooking or toughening the cured ham"] },
        { intro: "Profile:", bullets: ["Pure hot dough base → rich creamy melted Bufala DOP → warm translucent Ibérico fat → warm basil → almond-smooth Lorenzo N°5 finish"] },
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
    toppings: "15g Parmigiano Reggiano DOP (finely grated, dusted on dough), 50g Fior di Latte (hand-torn, well-drained), 30g Mozzarella di Bufala DOP (drained 1+ hour, torn), 25g Gorgonzola DOP Dolce (crumbled), 2g Elizondo Nº3 Picual EVOO pre-bake, 20g–25g baked truffle croutons, 1g–2g Belazu White Truffle EVOO, 2g–3g Barbera Lorenzo N°5 EVOO (post-bake), 0.5g Calabrian dried chili flakes. Strictly no tomato sauce.",
    menuIngredients: "Mozzarella, gorgonzola, Parmigiano, bufala, truffle",
    build: "An extraordinary gourmet white pie featuring a balanced four-cheese foundation, crunchy house-baked truffle croutons, a delicate white truffle oil finish, and a subtle Calabrian chili lift.",
    postBake: "Transfer directly to a wooden board and rest for 30 seconds to allow the cheeses to stabilize, then scatter the truffle croutons, apply the white truffle oil, finish with a swirl of Barbera Lorenzo N°5 EVOO, and top with a pinch of Calabrian chili flakes. Slice and serve immediately.",
    flavorProgression: "Toasted Parmigiano base → creamy Fior di Latte & Bufala → sharp Gorgonzola Dolce → crunchy truffle crouton → delicate white truffle aroma → subtle chili kick → Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { intro: "Truffle Croutons:", bullets: ["Toss 20g–25g of 1cm bread cubes with a few drops of olive oil and white truffle oil", "Bake at 180°C until properly crunchy", "Set aside"] },
        { bullets: ["Drain 50g Fior di Latte and 30g Bufala DOP in a fine sieve for at least 1 hour", "Finely grate 15g Parmigiano Reggiano DOP and portion 25g Gorgonzola Dolce DOP"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione while keeping the center structured enough for crouton toppings"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Picual Base Drizzle:", bullets: ["Apply a light 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the bare dough"] },
        { intro: "Layer 2 — Parmigiano Anchor:", bullets: ["Dust 15g finely grated Parmigiano Reggiano directly across the dough"] },
        { intro: "Layer 3 — Melt Cheeses:", bullets: ["Scatter 50g Fior di Latte and 30g Bufala DOP evenly over the Parmigiano layer, leaving small gaps"] },
        { intro: "Layer 4 — Gorgonzola Nuggets:", bullets: ["Drop 25g Gorgonzola Dolce DOP in small, spaced nuggets across open areas"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 410°C–430°C", "🔥 Dome: 450°C–480°C", "🔥 Manage the top flame dynamically after launch, reducing as needed to prevent Gorgonzola and Parmigiano from scorching or separating while allowing the crust to fully spring and blister", "⏱ Cook Time: 75–90 seconds", "🔄 Rotate regularly for an even rise"] },
      ] },
      { title: "5. Rest & Post-Bake Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30 seconds to allow the cheeses to stabilize"] },
        { intro: "Stage 1 — Croutons:", bullets: ["Scatter 20g–25g crunchy truffle croutons across the hot cheese"] },
        { intro: "Stage 2 — Aromatic Oils & Chili:", bullets: ["Apply 1g–2g Belazu White Truffle EVOO, followed by a 2g–3g swirl of Barbera Lorenzo N°5 EVOO, and finish with a 0.5g pinch of Calabrian chili flakes", "Slice and serve immediately"] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["Keeping total cheese to 120g helps maintain a balanced white base without making it excessively heavy — pre-baking the croutons separately and applying them post-bake over the rested wooden board preserves maximum crunch against the creamy melted cheeses"] },
        { intro: "Profile:", bullets: ["Toasted Parmigiano base → creamy Fior di Latte & Bufala → sharp Gorgonzola Dolce → crunchy truffle crouton → delicate white truffle aroma → subtle chili kick → Lorenzo N°5 finish"] },
      ] },
    ],
    videoGuide: "Achieving the Perfect Golden Crunch on Croutons",
  },
  {
    id: "calabrese",
    number: 21,
    name: "Calabrese",
    style: "Contemporary White Base — Hybrid 'Nduja di Spilinga & Gorgonzola Dolce Pockets",
    category: "innovative",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/9e/0f/61/nduja-e-gorgonzola.jpg",
    toppings: "Strictly no tomato sauce. 8g Parmigiano Reggiano DOP 24M (finely grated — house savory layer), 60g Fior di Latte (hand-torn into rustic strips, drained 1+ hour), 25g Gorgonzola DOP Dolce (crumbled into 5–6 small isolated pockets), 25g 'Nduja di Spilinga total — hybrid staging: 15g–18g rolled into 6–8 hazelnut-sized pre-bake dollops, 7g–10g rolled into 3–4 tiny fresh post-bake dollops, 2g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch), 3g–4g Frantoio Muraglia Coratina EVOO (Intense Fruity — peppery finishing kick), 2–3 fresh basil leaves (post-bake only).",
    menuIngredients: "Mozzarella, gorgonzola, 'nduja, Parmigiano, basil",
    build: "A bold Calabrian white pie pairing rendered and fresh 'Nduja di Spilinga with isolated pockets of Gorgonzola Dolce, toasted Parmigiano, and an intense Frantoio Muraglia Coratina finish.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow the cheeses and rendered fats to settle. Dot the remaining 7g–10g fresh room-temperature 'Nduja dollops across the hot pie, scatter 2–3 fresh basil leaves, and finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO. Slice and serve immediately.",
    flavorProgression: "Toasted Parmigiano base → creamy Fior di Latte → fiery Calabrian ’Nduja → rich Gorgonzola Dolce pocket → peppery Muraglia Coratina finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Tear 60g Fior di Latte into rustic strips and drain in a sieve for at least 1 hour.",
          "Bring 'Nduja di Spilinga to room temperature so it softens. With wet fingers, portion into pre-bake (15g–18g) and post-bake (7g–10g) dollops.",
          "Portion 25g Gorgonzola Dolce DOP into small nuggets.",
          "Finely grate 8g Parmigiano Reggiano DOP 24M.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Parmigiano Anchor:", bullets: ["Dust 8g finely grated Parmigiano Reggiano directly across the bare dough to create a toasted, savory base layer."] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Distribute 60g drained Fior di Latte strips evenly over the Parmigiano."] },
        { intro: "Layer 3 — Gorgonzola Pockets:", bullets: ["Drop 25g Gorgonzola Dolce in 5–6 small, isolated pockets across open areas (keeping them discrete rather than uniform)."] },
        { intro: "Layer 4 — Pre-Bake 'Nduja:", bullets: ["Dot 15g–18g hazelnut-sized 'Nduja dollops evenly between the cheese pockets."] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a light 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, keeping flame moderate so floor heat sets the crust while pre-bake 'Nduja renders Calabrian pork fat into the melting cheeses without scorching the Gorgonzola.",
          "⏱ Cook Time: 60–75 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow the cheeses and rendered fats to settle."] },
        { intro: "Stage 1 — Post-Bake 'Nduja:", bullets: ["Dot the remaining 7g–10g fresh room-temperature 'Nduja dollops across the hot pie to preserve fresh, aromatic pepper heat."] },
        { intro: "Stage 2 — Aromatics & Finishing Oil:", bullets: ["Scatter 2–3 fresh basil leaves and finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["A hybrid 'Nduja technique delivers two distinct textures: pre-bake dollops render flavorful Calabrian pork fat into the melting Gorgonzola pockets, while post-bake dollops add fresh, aromatic chili punch. Dusting 8g Parmigiano Reggiano directly onto the bare dough creates a savory anchor layer beneath the melted mozzarella."] },
        { intro: "Profile:", bullets: ["Toasted Parmigiano base → creamy Fior di Latte → fiery Calabrian ’Nduja → rich Gorgonzola Dolce pocket → peppery Muraglia Coratina finish"] },
      ] },
    ],
  },
  {
    id: "quattro-latte-e-nduja",
    number: 22,
    name: "Quattro Latte e 'Nduja",
    style: "Four-Milk Pizza Bianca — Buffalo Ricotta, Fior di Latte, Pecorino & Goat Cacioricotta",
    category: "innovative",
    toppings: "Animal Milk Taxonomy: Buffalo · Cow · Sheep · Goat. Strictly no tomato sauce. 40g Ricotta di Búfala (buffalo, whisked smooth with a tiny pinch of fine sea salt), 50g Fior di Latte (cow, hand-torn into rustic strips, well-drained 1+ hour), 20g–25g 'Nduja di Spilinga (rolled with wet fingers into 6–8 small hazelnut-sized dollops), 15g Crema di Pecorino Bagnolese (sheep, or finely grated Pecorino Romano whisked with warm cream until smooth), 6g–8g aged Cacioricotta di Capra (goat, Microplaned post-bake, or Caprino Stagionato), 2g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch), 3g–4g Frantoio Muraglia Coratina EVOO (Intense Fruity — peppery finishing swirl).",
    menuIngredients: "Buffalo ricotta, Fior di Latte, 'nduja, Pecorino cream, goat's milk Cacioricotta (post-bake)",
    build: "An extraordinary four-milk white pizza architecture — pairing smooth Buffalo Ricotta, melting Cow Fior di Latte, Sheep Pecorino Cream, and a post-bake snowfall of Goat Cacioricotta with rendering 'Nduja di Spilinga.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and cheeses to settle. Microplane 6g–8g aged Cacioricotta di Capra over the hot pizza in an even snowfall, then finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO across the center and crust. Slice and serve immediately.",
    flavorProgression: "Velvety Buffalo Ricotta → melted Cow Fior di Latte → fiery rendered ’Nduja → sharp Sheep Pecorino Cream → snow-grated Goat Cacioricotta → peppery Muraglia Coratina finish",
    videoGuide: "Quattro Latte e 'Nduja — Four-Milk Layering Order",
    videoUrl: "https://www.youtube.com/shorts/TkejTs74130",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Whisk 40g Ricotta di Búfala with a tiny pinch of fine salt until velvety.",
          "Drain 50g Fior di Latte strips in a sieve for at least 1 hour.",
          "Prep 15g Crema di Pecorino Bagnolese.",
          "Soften 'Nduja di Spilinga at room temperature and roll 20g–25g into 6–8 hazelnut-sized dollops.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Buffalo Ricotta Base:", bullets: ["Spread 40g smooth Ricotta di Búfala evenly across the center as the white sauce foundation."] },
        { intro: "Layer 2 — Cow Fior di Latte:", bullets: ["Scatter 50g drained Fior di Latte strips over the ricotta."] },
        { intro: "Layer 3 — 'Nduja Dollops:", bullets: ["Dot 20g–25g hazelnut-sized 'Nduja pieces across the cheeses."] },
        { intro: "Layer 4 — Sheep Pecorino Cream:", bullets: ["Drizzle 15g Crema di Pecorino in fine spirals over the cheeses and 'nduja."] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a light 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, keeping top flame moderate so 'Nduja renders Calabrian chili oil into the white cheeses without scorching the Pecorino cream.",
          "⏱ Cook Time: 60–75 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and cheeses to settle."] },
        { intro: "Stage 1 — Goat Cacioricotta Snowfall:", bullets: ["Microplane 6g–8g aged Cacioricotta di Capra over the hot pizza in an even snowfall."] },
        { intro: "Stage 2 — Finishing Oil:", bullets: ["Finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO across the center and crust.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["Each animal milk serves a distinct culinary function: Buffalo provides a smooth white base, Cow delivers structural melt, Sheep adds salty intensity, and Goat contributes a sharp post-bake caprine aroma. Microplaning aged Cacioricotta di Capra post-bake keeps its distinctive aged-goat aroma thermally distinct from the melted cheeses beneath."] },
        { intro: "Profile:", bullets: ["Velvety Buffalo Ricotta → melted Cow Fior di Latte → fiery rendered ’Nduja → sharp Sheep Pecorino Cream → snow-grated Goat Cacioricotta → peppery Muraglia Coratina finish"] },
      ] },
    ],
  },
  {
    id: "nduja-honey",
    number: 23,
    name: "'Nduja & Hot Honey",
    style: "Sweet Heat Neapolitan — 'Nduja di Spilinga & Hot Honey",
    category: "innovative",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QIDb-C5YJ62kzmEGA9VLPE-dkJbayXDcvR90G2p1PjLMsJr48qWq6no&s=10",
    toppings: "65g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt, 6g Parmigiano Reggiano DOP 24M (finely grated — savoury aged-cheese accent), 70g well-drained Fior di Latte (hand-torn into rustic strips), 25g 'Nduja di Spilinga (rolled with wet fingers into 6–8 small hazelnut-sized dollops), 2g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch), 12g Hot Honey (warmed slightly for a very fine, controlled zigzag drizzle), 3g–4g Frantoio Muraglia Coratina EVOO (Intense Fruity — peppery finishing swirl).",
    menuIngredients: "Tomato, mozzarella, 'nduja, hot honey, Parmigiano",
    build: "An addictive study in sweet heat — rendering 'Nduja di Spilinga over bright San Marzano DOP and Fior di Latte, finished with a precise hot honey glaze and peppery Coratina EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and rendered fats to settle. Drizzle 12g warmed hot honey in a very fine, controlled zigzag across the pie, then finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO across the center and crust. Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → toasted Parmigiano → creamy Fior di Latte → fiery rendered ’Nduja → sweet hot honey → peppery Muraglia Coratina finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Hand-crush San Marzano DOP tomatoes and season lightly with fine sea salt.",
          "Hand-tear 70g Fior di Latte into rustic strips and drain in a sieve for at least 1 hour.",
          "Soften 'Nduja di Spilinga at room temperature and pinch 25g into 6–8 small hazelnut-sized dollops with wet fingers.",
          "Gently warm 12g hot honey so it flows freely.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 65g San Marzano sauce evenly across the center (leave 1.5–2cm rim clean)."] },
        { intro: "Layer 2 — Parmigiano Accent:", bullets: ["Dust 6g finely grated Parmigiano Reggiano DOP directly over the tomato sauce."] },
        { intro: "Layer 3 — Fior di Latte:", bullets: ["Scatter 70g drained Fior di Latte strips over the base."] },
        { intro: "Layer 4 — 'Nduja Dollops:", bullets: ["Dot hazelnut-sized 'Nduja dollops evenly across the cheese."] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a light 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, reducing as needed so floor heat sets the crust while 'Nduja renders without scorching exposed fats.",
          "⏱ Cook Time: 70–80 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and rendered fats to settle."] },
        { intro: "Stage 1 — Hot Honey Glaze:", bullets: ["Drizzle 12g warmed hot honey in a very fine, controlled zigzag across the pie."] },
        { intro: "Stage 2 — Finishing Oil:", bullets: ["Finish with a 3g–4g swirl of Frantoio Muraglia Coratina EVOO across the center and crust.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["A precise 12g hot honey allocation prevents sweet saturation while highlighting the fiery pork fat of the rendered 'Nduja. The short wooden-board rest lets surface steam dissipate before the hot honey and finishing oil are applied, keeping the glaze defined rather than diluted by condensation."] },
        { intro: "Profile:", bullets: ["Bright San Marzano → toasted Parmigiano → creamy Fior di Latte → fiery rendered ’Nduja → sweet hot honey → peppery Muraglia Coratina finish"] },
      ] },
    ],
  },
  {
    id: "cetarese",
    number: 24,
    name: "Cetarese",
    style: "Amalfi Coast Tribute — Blistered Piennolo, Gaeta Olives, Capers & Post-Bake Alici di Cetara",
    category: "innovative",
    image: "https://lnx.spaghettitaliani.com/si/wp-content/uploads/2022/02/Pizza-Cetarese.jpg",
    toppings: "60g sweet red Piennolo del Vesuvio DOP or Corbarino tomatoes (halved lengthwise a pacchetelle, lightly drained of free juice; UK sub: Piccolo/Santini/Extra Special San Marzano), 60g well-drained Fior di Latte (hand-torn into rustic strips), 7g capers (salted, soaked in warm water for 20 mins, thoroughly dried), 20g Gaeta olives (pitted and halved), 3g–4g garlic (sliced paper-thin), 0.5g wild mountain oregano (Origano di Montagna), 1g–2g Elizondo Nº3 Picual EVOO (spiral micro-drizzle pre-launch); finished post-bake with 6 whole fillets of Alici di Cetara (salted cured anchovies in olive oil; 8 max for small fillets), 3–4 drops of Colatura di Alici di Cetara, and 3g Frantoio Muraglia Coratina EVOO (Intense Fruity — peppery finishing swirl).",
    menuIngredients: "Piennolo tomatoes, Fior di Latte, capers, Gaeta olives, garlic, oregano, Alici di Cetara anchovies & Colatura (post-bake)",
    build: "A contemporary tribute to the fishing village of Cetara — sweet blistered Piennolo tomatoes, desalted capers, and Gaeta olives over Fior di Latte, finished post-bake with whole Alici di Cetara, Coratina EVOO, and drops of Colatura.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the melted cheese to settle. Drape 6 whole fillets of Alici di Cetara across the hot melted mozzarella, allowing residual surface heat to soften the fish and release its umami oils. Apply 3–4 drops of Colatura di Alici di Cetara across the pie and finish with a 3g swirl of Frantoio Muraglia Coratina EVOO. Slice and serve immediately.",
    flavorProgression: "Blistered sweet tomatoes → melted Fior di Latte → aromatic garlic & oregano → saline capers & Gaeta olives → rich Alici di Cetara → intense Colatura & peppery Coratina finish",
    videoGuide: "Post-Bake Anchovy Placement — Alici di Cetara",
    videoUrl: "https://www.youtube.com/shorts/NTx-rgtDH14",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Halve 60g sweet Piennolo tomatoes lengthwise and lightly drain excess free juice.",
          "Soak 7g salted capers in warm water for 20 minutes to draw out excess salt, then pat completely dry on paper towels.",
          "Drain 60g Fior di Latte strips in a sieve for at least 1 hour.",
          "Slice garlic paper-thin (3g–4g).",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Tomatoes, Fior di Latte & Garlic:", bullets: ["Scatter halved Piennolo tomatoes and 60g Fior di Latte strips across the bare dough. Nestling the 3g–4g thin garlic slices among the tomatoes and cheese protects them from scorching under high heat."] },
        { intro: "Layer 2 — Capers, Gaeta Olives & Oregano:", bullets: ["Scatter 7g desalted capers, 20g halved Gaeta olives, and 0.5g mountain oregano over the tomato and cheese layer."] },
        { intro: "Layer 3 — Picual:", bullets: ["Apply a light 1g–2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, keeping top flame moderate so high stone heat blisters the tomatoes and melts the mozzarella without burning the garlic or oregano.",
          "⏱ Cook Time: 65–75 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the melted cheese to settle."] },
        { intro: "Stage 1 — Alici di Cetara:", bullets: ["Drape 6 whole fillets of Alici di Cetara across the hot melted mozzarella, allowing residual surface heat to soften the fish and release its umami oils."] },
        { intro: "Stage 2 — Colatura & Finishing Oil:", bullets: ["Apply 3–4 drops of Colatura di Alici di Cetara across the pie and finish with a 3g swirl of Frantoio Muraglia Coratina EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Salt Note:", bullets: ["Soaking capers and lightly draining Piennolo tomatoes are critical moisture and salt management steps. Adding the Alici di Cetara post-bake preserves their delicate texture and concentrated cured-anchovy character rather than exposing them to full oven heat."] },
        { intro: "Profile:", bullets: ["Blistered sweet tomatoes → melted Fior di Latte → aromatic garlic & oregano → saline capers & Gaeta olives → rich Alici di Cetara → intense Colatura & peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "cacio-e-pepe",
    number: 25,
    name: "Cacio e Pepe",
    style: "Callegari-Inspired Roman Pizza — Ice-Cube Bake & Pecorino Romano Cremina",
    category: "innovative",
    image: "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2018/07/02/bb7c436164c0454fb27f55eadbcb9cde_Cacio_e_Pepe_SimoPizza__Credit+Francesco+Sapienza.jpg",
    toppings: "3 ice cubes (approx. 40g total water mass — in-bake moisture engine), 1g–1.2g whole Tellicherry black peppercorns (lightly toasted in a dry skillet, coarsely cracked), no pre-bake oil (baked entirely naked with ice and pepper); finished post-bake with 50g Pecorino Romano DOP (finely grated using a Microplane into a light, fluffy mound) and 3g–4g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — finishing swirl).",
    menuIngredients: "Pecorino Romano, cracked black pepper, olive oil",
    build: "An ingenious Roman pizza architecture inspired by Stefano Callegari — ice cubes melt during the bake to keep the center humid, allowing Microplaned Pecorino Romano and toasted black pepper to bind into a creamy layer post-bake.",
    postBake: "Transfer to a wooden board with the center still visibly humid and a small pool of hot water remaining. Immediately shower the entire humid center with the 50g Microplaned Pecorino Romano, gently working the cheese into the central moisture with the back of a spoon to create a moist, creamy Pecorino layer. Dust with the remaining cracked black pepper and finish with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO across the cheese and crust. Slice and serve immediately.",
    flavorProgression: "Golden baked crust → creamy Pecorino Romano → fragrant toasted black pepper → salty sheep's-cheese depth → almond-smooth Lorenzo N°5 finish",
    videoGuide: "Stefano Callegari's Ice-Cube Cacio e Pepe Technique",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Lightly toast 1g–1.2g whole black peppercorns in a dry skillet just until fragrant, then coarsely crack in a mortar and pestle.",
          "Microplane 50g Pecorino Romano DOP into a fluffy, razor-thin mountain for rapid melting.",
          "Have 3 ice cubes (~40g total) ready.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata. Create a shallow central basin with a slightly raised cornicione rim acting as a natural dam to retain the melting ice."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Ice Engine:", bullets: ["Place the 3 ice cubes directly in the shallow central basin of the raw dough."] },
        { intro: "Layer 2 — Pepper Accent:", bullets: ["Sprinkle ~0.3g of the cracked black pepper around the base. Do NOT add oil pre-bake."] },
      ] },
      { title: "4. Gozney Bake (Special Thermal Profile)", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 400°C–420°C",
          "🔥 Dome: 450°C–470°C",
          "Manage top flame dynamically, keeping top flame moderate so the lower floor heat allows the dough beneath the water pool to cook through while the ice melts and boils into the central basin.",
          "⏱ Cook Time: 90–120 seconds — rotate regularly until the crust is fully set and structured.",
        ] },
      ] },
      { title: "5. Rest & Post-Bake Staging", sections: [
        { bullets: ["Transfer the pizza to a wooden board with the center still visibly humid and a small pool of hot water remaining."] },
        { intro: "Stage 1 — Pecorino Shower:", bullets: ["Immediately shower the entire humid center with the 50g Microplaned Pecorino Romano. If needed, gently work the cheese into the central moisture with the back of a spoon to create a moist, creamy Pecorino layer."] },
        { intro: "Stage 2 — Pepper & Finishing Oil:", bullets: ["Dust with the remaining ~0.8g cracked black pepper and finish with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO across the cheese and crust.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Emulsion Note:", bullets: ["Baking with ice cubes keeps the center humid and leaves a small pool of hot water post-bake. Adding Microplaned Pecorino Romano immediately upon removal allows the cheese to bind with the surface moisture, creating a creamy Pecorino layer that echoes the emulsion of classic Roman cacio e pepe. Lowering the stone floor to 400°C–420°C ensures the dough beneath the wet center cooks through without scorching the bottom."] },
        { intro: "Profile:", bullets: ["Golden baked crust → creamy Pecorino Romano → fragrant toasted black pepper → salty sheep's-cheese depth → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "carbonara",
    number: 26,
    name: "Carbonara",
    style: "Contemporary Roman-Inspired — Crispy Guanciale, Pecorino Romano & Warm Yolk Crema",
    category: "innovative",
    image: "https://www.vincenzosplate.com/wp-content/uploads/2022/10/1500x1500-Photo-4_1951-How-to-Make-CARBONARA-PIZZA-Like-an-Italian-V1.jpg",
    toppings: "Strictly no tomato sauce. 40g raw Guanciale di Maiale (diced into 6–8mm lardons, pre-rendered until golden and slightly yielding; reserve 1 tsp rendered fat), 35g total Pecorino Romano DOP split across 18g finely grated pre-bake base, 5g in the yolk crema, and 12g Microplaned post-bake snowfall, 2 fresh egg yolks + 10g warm water + 1 tsp reserved rendered guanciale fat + 5g Pecorino Romano (warm yolk crema, cooked to 65°C–70°C), 1.0g whole Tellicherry black peppercorns (lightly toasted, coarsely cracked; ~0.3g pre-bake, ~0.7g post-bake), no pre-bake oil, 2g–3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — smooth finishing swirl, post-bake).",
    menuIngredients: "Pecorino Romano, crispy guanciale, warm yolk crema, black pepper",
    build: "A contemporary pizza interpretation of Rome's carbonara — crisp rendered guanciale and toasted Pecorino on white dough, finished with a warm yolk crema and freshly cracked Tellicherry pepper.",
    postBake: "Transfer directly to a wooden board and rest for 20–30 seconds to allow surface steam to dissipate and the crust to settle. Spoon or drizzle the warm carbonara yolk crema in controlled ribbons across the pie, shower with 12g Microplaned Pecorino Romano, dust with ~0.7g cracked black pepper, and finish with a 2g–3g swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately.",
    flavorProgression: "Toasted Pecorino base → crisp rendered guanciale → warm yolk carbonara crema → fresh Pecorino snowfall → fragrant Tellicherry pepper → smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { intro: "Guanciale Prep:", bullets: ["Dice 40g raw guanciale into 6–8mm lardons. Pre-render in a dry pan over medium heat until golden and slightly rendered, keeping the center slightly tender. Drain on paper towels, reserving 1 tsp rendered pork fat."] },
        { intro: "Warm Yolk Crema:", bullets: ["In a small heatproof bowl over gentle indirect heat (or warm water bath), whisk 2 egg yolks with 10g warm water, 1 tsp reserved guanciale fat, and 5g Pecorino Romano until thickened, glossy, and warmed to ~65°C–70°C. Keep warm."] },
        { intro: "Pepper Prep:", bullets: ["Lightly toast whole Tellicherry peppercorns in a dry skillet until fragrant, then coarsely crack in a mortar."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Pecorino Base:", bullets: ["Distribute 18g finely grated Pecorino Romano DOP evenly across the bare dough."] },
        { intro: "Layer 2 — Guanciale & Pepper:", bullets: ["Scatter the golden pre-rendered guanciale lardons over the Pecorino and sprinkle ~0.3g cracked black pepper. Do NOT add oil pre-bake."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–430°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, keeping flame moderate so floor heat cooks the base while Pecorino lightly toasts into the rendered guanciale without burning.",
          "⏱ Cook Time: 70–80 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 20–30 seconds to allow surface steam to dissipate and the crust to settle."] },
        { intro: "Stage 1 — Warm Yolk Crema:", bullets: ["Spoon or drizzle the warm carbonara yolk crema in controlled ribbons across the pie."] },
        { intro: "Stage 2 — Pecorino Snowfall & Finish:", bullets: ["Shower with 12g Microplaned Pecorino Romano, dust with ~0.7g cracked black pepper, and finish with a 2g–3g swirl of Barbera Lorenzo Nº5 EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["Pre-cooking the egg yolk emulsion to 65°C–70°C creates a velvety carbonara crema that remains thermally stable without relying on unpredictable pizza surface heat. Pre-rendering 6–8mm guanciale lardons until golden—rather than fully crisp—prevents the pork from scorching during the Gozney bake."] },
        { intro: "Profile:", bullets: ["Toasted Pecorino base → crisp rendered guanciale → warm yolk carbonara crema → fresh Pecorino snowfall → fragrant Tellicherry pepper → smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "amatriciana",
    number: 27,
    name: "Amatriciana",
    style: "Roman Classic Redefined — San Marzano DOP, Guanciale, Pecorino Romano & Peperoncino",
    category: "innovative",
    image: "https://doublethespoonfuls.com/wp-content/uploads/2023/07/amatriciana-pizza-finished.jpg",
    toppings: "65g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt (no oil stirred into raw sauce), 40g raw Guanciale di Maiale (diced into 6–8mm lardons, pre-rendered until golden with browned edges but slightly yielding; Pancetta di Maiale works as an acceptable fallback), 50g well-drained Fior di Latte (hand-torn into rustic strips), 15g Pecorino Romano DOP (finely grated; split: 8g pre-bake, 7g post-bake), 0.4g dried red chili flakes (Peperoncino), no pre-bake oil, 2g–3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — smooth finishing swirl, post-bake).",
    menuIngredients: "Tomato, mozzarella, guanciale, Pecorino Romano, chili",
    build: "Amatrice's legendary pasta reimagined on dough — bright San Marzano DOP, melted Fior di Latte, toasted Pecorino Romano, and a two-stage guanciale build delivering both rendered depth and a crisp pork crunch.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the sauce to settle. Scatter the remaining 15g reserved crisp guanciale lardons over the hot pie, shower 7g Microplaned Pecorino Romano DOP over the top, and finish with a 2g–3g swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately.",
    flavorProgression: "Bright San Marzano → creamy Fior di Latte → rendered Guanciale → fiery peperoncino → sharp Pecorino Romano → crisp Guanciale crunch → smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { intro: "Guanciale Prep:", bullets: ["Dice 40g raw guanciale into 6–8mm lardons. Pre-render in a dry skillet over medium-low heat until golden with browned edges, keeping the center slightly tender. Drain on paper towels."] },
        { intro: "Cheese & Tomato Prep:", bullets: ["Hand-crush 65g San Marzano DOP tomatoes with a pinch of fine sea salt. Drain 50g Fior di Latte strips in a sieve for at least 1 hour. Finely grate 15g Pecorino Romano DOP."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 65g San Marzano sauce evenly across the dough (leave 1.5–2cm border clean)."] },
        { intro: "Layer 2 — Pre-Bake Pecorino & Chili:", bullets: ["Dust 8g finely grated Pecorino Romano DOP and 0.4g chili flakes directly over the tomato sauce."] },
        { intro: "Layer 3 — Fior di Latte:", bullets: ["Distribute 50g drained Fior di Latte strips over the pie."] },
        { intro: "Layer 4 — Pre-Bake Guanciale:", bullets: ["Scatter 25g of the golden pre-rendered guanciale lardons across the cheese. Do NOT add pre-bake oil."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–430°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, keeping top flame moderate so floor heat cooks the base while the pork fat renders into the mozzarella without burning the Pecorino.",
          "⏱ Cook Time: 65–75 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the sauce to settle."] },
        { intro: "Stage 1 — Crisp Guanciale Crunch:", bullets: ["Scatter the remaining 15g reserved crisp guanciale lardons over the hot pie."] },
        { intro: "Stage 2 — Pecorino Snowfall & Finish:", bullets: ["Shower 7g Microplaned Pecorino Romano DOP over the top and finish with a 2g–3g swirl of Barbera Lorenzo Nº5 EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["Pre-rendering the guanciale controls its moisture and fat while creating two distinct textures: savory rendered pork integrated into the bake and a crisp finishing bite. Splitting the guanciale between pre- and post-bake stages preserves both flavor depth and crisp texture."] },
        { intro: "Profile:", bullets: ["Bright San Marzano → creamy Fior di Latte → rendered Guanciale → fiery peperoncino → sharp Pecorino Romano → crisp Guanciale crunch → smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "gricia",
    number: 28,
    name: "Gricia",
    style: "Roman White Classic — Crispy Guanciale, Pecorino Romano & Tellicherry Pepper",
    category: "innovative",
    image: "https://cache.marieclaire.fr/data/photo/w1475_ci/6w/pizza-a-la-gricia.webp",
    toppings: "Strictly no tomato sauce. 40g raw Guanciale di Maiale (diced into 6–8mm lardons, pre-rendered until golden with browned edges but slightly yielding), 55g well-drained Fior di Latte (hand-torn into rustic strips), 20g total Pecorino Romano DOP split across 12g finely grated pre-bake base and 8g Microplaned post-bake snowfall, 1.0g whole Tellicherry black peppercorns (lightly toasted, coarsely cracked; split: 0.3g pre-bake, 0.7g post-bake), no pre-bake oil, 2g–3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — smooth finishing swirl, post-bake).",
    menuIngredients: "Mozzarella, guanciale, Pecorino Romano, black pepper",
    build: "Rome's iconic white pasta classic reimagined — toasted Pecorino Romano, melted Fior di Latte, and a two-stage guanciale build finished with cracked Tellicherry black pepper and Lorenzo N°5 EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the melted cheese to settle. Shower 8g Microplaned Pecorino Romano DOP over the hot cheese, scatter the remaining 15g reserved crisp guanciale lardons over the top, dust with 0.7g cracked black pepper, and finish with a 2g–3g swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately.",
    flavorProgression: "Toasted Pecorino base → creamy Fior di Latte → savoury rendered Guanciale → sharp fresh Pecorino → crisp Guanciale crunch → fragrant Tellicherry pepper → smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { intro: "Guanciale Prep:", bullets: ["Dice 40g raw guanciale into 6–8mm lardons. Pre-render in a dry skillet over medium-low heat until golden with browned edges, keeping the center slightly tender. Drain on paper towels."] },
        { intro: "Cheese & Pepper Prep:", bullets: ["Drain 55g Fior di Latte strips in a sieve for at least 1 hour. Finely grate 20g Pecorino Romano DOP. Lightly toast whole Tellicherry peppercorns in a dry skillet until fragrant, then coarsely crack in a mortar."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Pecorino Base:", bullets: ["Distribute 12g finely grated Pecorino Romano DOP evenly across the bare dough to build a toasted, savory base layer."] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Distribute 55g drained Fior di Latte strips over the Pecorino."] },
        { intro: "Layer 3 — Pre-Bake Guanciale & Pepper:", bullets: ["Scatter 25g of the golden pre-rendered guanciale lardons with plenty of visible gaps across the cheese, then dust with 0.3g cracked black pepper. Do NOT add pre-bake oil."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–430°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, keeping top flame moderate so floor heat cooks the base while the pork fat renders into the mozzarella without burning the Pecorino.",
          "⏱ Cook Time: 65–75 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the melted cheese to settle."] },
        { intro: "Stage 1 — Pecorino Snowfall:", bullets: ["Shower 8g Microplaned Pecorino Romano DOP over the hot cheese."] },
        { intro: "Stage 2 — Crisp Guanciale Crunch & Finish:", bullets: ["Scatter the remaining 15g reserved crisp guanciale lardons over the top, dust with 0.7g cracked black pepper, and finish with a 2g–3g swirl of Barbera Lorenzo Nº5 EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Fat Note:", bullets: ["Pre-rendering the guanciale controls moisture and excess grease while creating two distinct textures: savory rendered pork integrated into the bake and a crisp finishing bite. Dusting Pecorino directly onto the dough creates a toasted savoury base and allows the cheese to brown lightly as the guanciale renders above it."] },
        { intro: "Profile:", bullets: ["Toasted Pecorino base → creamy Fior di Latte → savoury rendered Guanciale → sharp fresh Pecorino → crisp Guanciale crunch → fragrant Tellicherry pepper → smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "pesto-cremosa",
    number: 29,
    name: "Pesto Cremosa",
    style: "Contemporary Pizza Bianca — Baked Genovese Pesto & Burrata Stracciatella Crown",
    category: "innovative",
    image: "/pizzas/pesto-burrata.jpeg",
    toppings: "Strictly no tomato sauce. 25g Pesto alla Genovese (fresh basil, Parmigiano Reggiano, pine nuts, garlic, EVOO), 60g Fior di Latte (hand-torn into rustic strips, well-drained for 1+ hour), 1g–2g Elizondo Nº3 Picual EVOO (light spiral micro-drizzle pre-launch); finished post-bake with 100g Burrata di Andria IGP or Burrata di Putignano (removed 30–45 minutes before service so it is cool-to-room-temperature; 120g max for 33cm+ stretch), 3–4 fresh basil leaves, 3g toasted pine nuts (optional), Maldon sea salt flakes, and 3g–4g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — finishing swirl over opened burrata).",
    menuIngredients: "Mozzarella, pesto, burrata, olive oil",
    build: "A contemporary masterclass in thermal contrast — aromatic Genovese basil pesto baked under melting Fior di Latte, crowned post-bake with cool Burrata stracciatella and Lorenzo N°5 EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Place the cool-to-room-temperature Burrata centrally on the base, make a light cross cut (+) in the outer skin of the top knot, and gently open the pouch so creamy stracciatella spills over the baked pesto and cheese base. Scatter 3–4 fresh basil leaves, 3g toasted pine nuts (optional), and a light pinch of Maldon sea salt flakes over the stracciatella. Finish with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO across the opened burrata and crust. Slice and serve immediately.",
    flavorProgression: "Baked Genovese pesto → melted Fior di Latte → cool creamy Burrata stracciatella → sweet basil & toasted pine nuts → almond-smooth Lorenzo N°5 finish",
    videoGuide: "Fresh Pesto Base & Post-Bake Burrata",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Drain 60g Fior di Latte strips in a sieve for at least 1 hour.",
          "Remove 100g Burrata from refrigeration 30–45 minutes before service so it is cool-to-room-temperature rather than fridge-cold.",
          "Toast 3g pine nuts in a dry skillet until lightly golden (if using).",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Pesto Foundation:", bullets: ["Dollop 25g Pesto alla Genovese across the bare dough in discrete spots."] },
        { intro: "Layer 2 — Fior di Latte Shield:", bullets: ["Scatter 60g drained Fior di Latte strips over the pesto dollops. The Fior di Latte partially shields the pesto from direct top heat, reducing scorching while allowing the pesto to warm and release its aroma."] },
        { intro: "Layer 3 — Picual:", bullets: ["Apply a light 1g–2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–435°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically after launch, keeping top flame moderate so floor heat sets the crust while mozzarella melts over the pesto without burning.",
          "⏱ Cook Time: 60–75 seconds — rotate regularly for even blistering and colour.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Burrata Crown:", bullets: ["Place the cool-to-room-temperature Burrata centrally on the base. Make a light cross cut (+) in the outer skin of the top knot and gently open the pouch so creamy stracciatella spills over the baked pesto and cheese base."] },
        { intro: "Stage 2 — Aromatics & Finishing Oil:", bullets: ["Scatter 3–4 fresh basil leaves, 3g toasted pine nuts (optional), and a light pinch of Maldon sea salt flakes over the stracciatella.", "Finish with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO across the opened burrata and crust.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Genovese pesto scorches easily at 450°C+, turning bitter if exposed directly to top flames. Placing Fior di Latte strips directly over the pesto dollops partially shields the basil oils during the bake. Crowning post-bake with cool-to-room-temperature Burrata creates a striking contrast between hot, baked herbs and cool, silky stracciatella."] },
        { intro: "Profile:", bullets: ["Baked Genovese pesto → melted Fior di Latte → cool creamy Burrata stracciatella → sweet basil & toasted pine nuts → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "burrata-and-pesto",
    number: 47,
    name: "Burrata & Pesto",
    style: "Contemporary Pizza Bianca — Baked Genovese Pesto & Burrata Stracciatella",
    category: "innovative",
    image: "/pizzas/burrata-and-pesto.jpeg",
    toppings: "Strictly no tomato sauce. Strictly no Fior di Latte. Strictly no additional cheese or extra pine nuts. Exactly 25g fresh Pesto alla Genovese (fresh basil, Parmigiano Reggiano, pine nuts, garlic, EVOO; kept chilled until assembly), 0g–1g Elizondo Nº3 Picual EVOO (0g preferred for strict minimalism; max 1g micro-drizzle over pesto patches); finished post-bake with 100g Burrata di Andria IGP or fresh Burrata from Putignano (removed 30–45 minutes before service; cool-to-room-temperature rather than fridge-cold), 3g–4g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — finishing swirl over opened burrata), and optional 3–4 fresh basil leaves and a tiny pinch of Maldon sea salt flakes.",
    menuIngredients: "Pesto, burrata, olive oil",
    build: "A minimalist contemporary Bianca built around two hero ingredients — aromatic Genovese pesto baked directly onto the dough, then crowned post-bake with cool, creamy Burrata for a striking contrast between hot basil intensity and silky stracciatella.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Place the 100g cool Burrata centrally on the hot pizza, make a light cross cut (+) through the outer skin of the Burrata pouch, and gently open it so internal stracciatella and cream spread naturally across the baked pesto. Finish with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO over the opened Burrata and selected areas of the crust. Add optional fresh basil leaves or a tiny pinch of Maldon sea salt if desired. Slice and serve immediately.",
    flavorProgression: "Baked Genovese pesto → cool creamy Burrata stracciatella → fresh basil → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Remove 100g Burrata from refrigeration 30–45 minutes before service so it is cool-to-room-temperature rather than fridge-cold.",
          "Keep 25g fresh Pesto alla Genovese chilled until build time.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, shaping a relatively flat centre while preserving an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Pesto Foundation:", bullets: ["Apply exactly 25g Pesto alla Genovese directly across the bare dough in 6–8 thin, discrete patches, leaving small areas of exposed dough between them. Do NOT create a continuous thick layer."] },
        { intro: "Layer 2 — Pre-Bake Oil (Optional):", bullets: ["Omit pre-bake oil for the strict minimalist build (or apply no more than 1g Elizondo Nº3 Picual EVOO as an extremely light micro-drizzle over the pesto patches). Do NOT oil the cornicione."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–435°C",
          "🔥 Dome: 450°C–480°C",
          "Launch with pesto-heavy areas facing away from direct flame initially. Manage top flame dynamically at low/moderate intensity, rotating progressively throughout the bake to develop the crust while avoiding prolonged direct flame exposure over the pesto.",
          "⏱ Cook Time: 60–75 seconds.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Burrata Crown:", bullets: ["Place the 100g cool Burrata centrally on the hot pizza. Make a light cross cut (+) through the outer skin of the Burrata pouch and gently open it so internal stracciatella and cream spread naturally across the baked pesto."] },
        { intro: "Stage 2 — Final Finish:", bullets: ["Finish with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO over the opened Burrata and selected areas of the crust.", "Add optional fresh basil leaves or a tiny pinch of Maldon sea salt if desired.", "Slice and serve immediately."] },
        { intro: "Technical Thermal Note:", bullets: ["Fresh Genovese pesto is delicate under Neapolitan pizza temperatures. A thick continuous layer can overheat, separate, and develop bitter notes. The 6–8 thin-patch technique limits oil pooling and reduces prolonged direct flame exposure while allowing the pesto to warm and concentrate against the dough. The Burrata is deliberately kept out of the oven to preserve its fresh dairy character and contrast with the hot baked pesto."] },
        { intro: "Profile:", bullets: ["Baked Genovese pesto → cool creamy Burrata stracciatella → fresh basil → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "salsiccia-al-pesto",
    number: 30,
    name: "Salsiccia al Pesto",
    style: "Contemporary Pizza Bianca — Smoked Agerola Provola, Genoese Pesto & Fennel Pork Sausage",
    category: "innovative",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/contadino-in-trasferta18-scaled.jpg",
    toppings: "Strictly no tomato sauce. 25g fresh Pesto alla Genovese (fresh basil, Parmigiano Reggiano, pine nuts, garlic, EVOO; kept chilled until assembly), 60g Smoked Agerola Provola (cut into strips, well-drained for 2+ hours), 8g Pecorino Romano DOP (finely grated), 40g fresh Italian pork sausage with fennel/black pepper (casing removed, pinched into small, uniform 5mm–8mm raw morsels), 1g Elizondo Nº3 Picual EVOO (light micro-drizzle pre-launch); finished post-bake with 3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — finishing swirl) and 2–3 fresh basil leaves (optional).",
    menuIngredients: "Basil pesto, smoked Agerola provola, Pecorino Romano, fennel pork sausage",
    build: "A rich, smoky Ligurian-Campanian fusion — aromatic Genovese pesto partially shielded under melting Smoked Agerola Provola, topped with small morsels of fresh fennel pork sausage that sizzle and crisp in the Gozney.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Apply a 3g swirl of Barbera Lorenzo Nº5 EVOO across the pie and add optional fresh basil leaves. Slice and serve immediately.",
    flavorProgression: "Aromatic Genovese pesto → smoky melted Provola → savoury fennel pork sausage → sharp Pecorino Romano → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: [
          "Cut 60g Smoked Agerola Provola into strips and drain in a sieve for at least 2 hours to remove excess moisture.",
          "Remove casing from fresh Italian pork sausage and pinch into small 5mm–8mm raw morsels (40g total). Keep refrigerated until assembly.",
        ] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Pesto Foundation:", bullets: ["Apply 25g Pesto alla Genovese across the bare dough in 6–8 discrete patches."] },
        { intro: "Layer 2 — Smoked Provola Base:", bullets: ["Distribute 60g drained Smoked Provola strips over the pesto patches. The Provola partially shields the pesto from direct top heat, helping reduce scorching while allowing the pesto to warm and release its aroma."] },
        { intro: "Layer 3 — Sausage & Pecorino:", bullets: ["Scatter 40g of small 5mm–8mm raw sausage morsels sparsely over the cheese so they are exposed to direct heat. Dust with 8g Pecorino Romano DOP."] },
        { intro: "Layer 4 — Picual:", bullets: ["Apply a light 1g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–430°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically, keeping top flame low-to-moderate as required.",
          "⏱ Cook Time: 75–90 seconds — rotate progressively so the small sausage morsels sizzle and render while the Provola melts smoothly without charring the pesto.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Finish:", bullets: ["Apply a 3g swirl of Barbera Lorenzo Nº5 EVOO across the pie and add optional fresh basil leaves.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Placing Smoked Provola strips over the pesto patches partially shields delicate basil oils from high top heat. Pinching the raw sausage into small 5mm–8mm morsels and distributing them sparsely ensures rapid heat transfer and even rendering during the 75–90 second bake."] },
        { intro: "Profile:", bullets: ["Aromatic Genovese pesto → smoky melted Provola → savoury fennel pork sausage → sharp Pecorino Romano → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "boscaiola",
    number: 31,
    name: "Boscaiola",
    style: "Contemporary Boscaiola — Fennel Sausage, Sautéed Mushrooms & Parmigiano-Reggiano",
    category: "innovative",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4c90OTCp_IEocTO38KnTvWuXxhkRs-NpLzRLtET9QDw&s=10",
    toppings: "Strictly no tomato sauce. 10g Parmigiano-Reggiano DOP 24 Mesi (finely grated), 60g well-drained Fior di Latte (hand-torn into rustic strips, drained for 1+ hour), 40g fresh Champignon or Cremini mushrooms (sliced thinly, dry-sautéed without salt until moisture evaporates, lightly salted after evaporation, and cooled), 40g fresh fennel pork sausage (casing removed, pinched into small, uniform 5mm–8mm raw morsels), 0g–1g Elizondo Nº3 Picual EVOO (optional light micro-drizzle pre-launch); finished post-bake with 3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — finishing swirl) and fresh thyme leaves to taste (stripped post-bake).",
    menuIngredients: "Mozzarella, sausage, mushroom, Parmigiano",
    build: "An earthy Italian classic — dry-sautéed Champignon mushrooms, sizzling raw fennel pork sausage, and melting Fior di Latte over a toasted Parmigiano-Reggiano base, finished with fresh thyme and Lorenzo N°5 EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Strip fresh thyme leaves over the hot pizza and finish with a 3g swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately.",
    flavorProgression: "Toasted Parmigiano base → creamy Fior di Latte → earthy sautéed mushrooms → savoury fennel pork sausage → aromatic fresh thyme → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { intro: "Mushroom Prep:", bullets: ["Slice 40g Champignon/Cremini mushrooms thinly. Dry-sauté in a hot pan over medium-high heat without salt or oil for 2–3 minutes until liquid releases and completely evaporates. Lightly season with fine salt after evaporation, then cool completely."] },
        { intro: "Sausage Prep:", bullets: ["Remove casing from fresh fennel pork sausage and pinch into small 5mm–8mm raw morsels (40g total). Keep chilled until assembly."] },
        { intro: "Cheese Prep:", bullets: ["Drain 60g Fior di Latte strips in a sieve for at least 1 hour. Finely grate 10g Parmigiano-Reggiano DOP 24 Mesi."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Parmigiano Base:", bullets: ["Dust 10g finely grated Parmigiano-Reggiano DOP 24 Mesi directly onto the bare dough to build a toasted, savory base layer."] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Distribute 60g drained Fior di Latte strips over the Parmigiano base."] },
        { intro: "Layer 3 — Mushrooms & Sausage:", bullets: ["Scatter the cooled dry-sautéed mushrooms and 40g of small 5mm–8mm raw fennel sausage morsels evenly over the cheese so they face direct top heat."] },
        { intro: "Layer 4 — Picual (Optional):", bullets: ["Apply an optional light 0g–1g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 420°C–430°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically, reducing direct flame exposure if the Parmigiano or sausage colors too rapidly.",
          "⏱ Cook Time: 75–90 seconds — rotate progressively so the small sausage morsels render and cook through while the mushrooms concentrate and the cheese melts smoothly.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Finish:", bullets: ["Strip fresh thyme leaves over the hot pizza and finish with a 3g swirl of Barbera Lorenzo Nº5 EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Dry-sautéing mushrooms without salt first drives off internal moisture before assembly, preventing water separation during the bake. Parmigiano-Reggiano baked directly against the dough creates a concentrated toasted savoury layer beneath the Fior di Latte. Small 5mm–8mm sausage morsels promote rapid, even cooking and rendering during the high-temperature bake."] },
        { intro: "Profile:", bullets: ["Toasted Parmigiano base → creamy Fior di Latte → earthy sautéed mushrooms → savoury fennel pork sausage → aromatic fresh thyme → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "mortadella-e-pistacchio",
    number: 32,
    name: "Mortadella e Pistacchio",
    style: "Contemporary Pizza Bianca — Mortadella Ribbons, Whipped Ricotta & Bronte Pistachio",
    category: "innovative",
    image: "https://myhusbandmakespies.com/wp-content/uploads/2025/07/mortadella-ricotta-pizza-ooni-baked.jpg",
    toppings: "Strictly no tomato sauce. 60g Fior di Latte (hand-torn into rustic strips, well-drained for 1+ hour), 0g–1g Elizondo Nº3 Picual EVOO (optional light micro-drizzle pre-launch); finished post-bake with 50g Mortadella IGP (preferably Mortadella di Suino Nero Casertano, paper-thin slices draped into elevated rosettes), 40g fresh cow's milk ricotta (whipped smooth with a tiny pinch of fine sea salt; no oil added), 10g–12g Granella di Pistacchio (coarsely crushed Bronte pistachios), 2–3 fresh basil leaves, and 3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — finishing swirl).",
    menuIngredients: "Mozzarella, mortadella, ricotta, pistachio, basil",
    build: "A contemporary Campanian-inspired Bianca masterclass — melting Fior di Latte baked on bare dough, layered post-bake with paper-thin mortadella ribbons, dollops of whipped ricotta, Bronte pistachio crunch, and Lorenzo N°5 EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Drape 50g of thin mortadella slices loosely in elevated, ribbon-like folds across the hot melted mozzarella. Pipe or spoon neat dollops of whipped ricotta between and over the mortadella folds. Shower with 10g–12g pistachio granella. Tuck 2–3 fresh basil leaves into the build and finish with a 3g swirl of Barbera Lorenzo N°5 EVOO. Slice and serve immediately.",
    flavorProgression: "Melted Fior di Latte → gently tempered Mortadella IGP ribbons → cool whipped Ricotta → crunchy Bronte pistachio → sweet basil → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { intro: "Dairy Prep:", bullets: ["Drain 60g Fior di Latte strips in a sieve for at least 1 hour. In a small bowl, whip 40g fresh ricotta with a tiny pinch of fine salt until smooth and velvety. Transfer to a piping bag (or reserve for spooning)."] },
        { intro: "Meat & Nut Prep:", bullets: ["Slice mortadella paper-thin (50g total). Coarsely crush 10g–12g Bronte pistachios."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Fior di Latte:", bullets: ["Distribute 60g drained Fior di Latte strips evenly across the bare dough."] },
        { intro: "Layer 2 — Picual (Optional):", bullets: ["Apply an optional light 0g–1g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the cheese base."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically, keeping top flame moderate after launch.",
          "⏱ Cook Time: 60–75 seconds — rotate regularly until the crust is puffed and leopard-spotted and the Fior di Latte is completely melted.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Mortadella Rosettes:", bullets: ["Drape 50g of thin mortadella slices loosely in elevated, ribbon-like folds across the hot melted mozzarella."] },
        { intro: "Stage 2 — Whipped Ricotta & Pistachio Crunch:", bullets: ["Pipe or spoon neat dollops of whipped ricotta between and over the mortadella folds. Shower with 10g–12g pistachio granella."] },
        { intro: "Stage 3 — Finish:", bullets: ["Tuck 2–3 fresh basil leaves into the build and finish with a 3g swirl of Barbera Lorenzo N°5 EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Direct exposure to the high heat of the pizza oven can cause Mortadella to lose its delicate texture and render excessive fat. Post-bake staging preserves the delicate texture of the Mortadella and the fresh, creamy character of the ricotta while keeping the pistachio aromatic and crunchy."] },
        { intro: "Profile:", bullets: ["Melted Fior di Latte → gently tempered Mortadella IGP ribbons → cool whipped Ricotta → crunchy Bronte pistachio → sweet basil → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "la-oro-verde",
    number: 33,
    name: "La Oro Verde",
    style: "Contemporary Pizza Bianca — Mortadella Ribbons, Cold Stracciatella & Pistachio Pesto",
    category: "innovative",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/a211bd6f00b7a30664e5d05480027f27/Derivates/01948b21d82cfcb00473494c5780e3b3e3d00e52.jpg",
    toppings: "Strictly no tomato sauce. 60g Fior di Latte (hand-torn into rustic strips, well-drained for 1+ hour), 0g–1g Elizondo Nº3 Picual EVOO (0g preferred for strict balance; max 1g micro-drizzle pre-launch); finished post-bake with 50g Mortadella IGP (preferably Mortadella di Suino Nero Casertano, paper-thin slices loosely folded into ribbons), 45g fresh Stracciatella di Burrata (spooned in discrete pools), 20g Pistachio Pesto (piped or dotted in small discrete accents), 10g Granella di Pistacchio (coarsely crushed Bronte pistachios), 2–3 fresh basil leaves, and 3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — finishing swirl).",
    menuIngredients: "Mozzarella, mortadella, stracciatella, pistachio pesto, basil",
    build: "The ultimate expression of Italian green gold — melting Fior di Latte baked on bare dough, crowned post-bake with paper-thin mortadella ribbons, cold Stracciatella di Burrata, rich pistachio pesto, and Lorenzo N°5 EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle. Drape 50g of paper-thin mortadella slices loosely in ribbons across the hot melted mozzarella. Spoon 45g of cold Stracciatella di Burrata into discrete pools across the mortadella. Pipe or dot 20g Pistachio Pesto in small accents around and over the creamy pockets. Shower with 10g pistachio granella, tuck 2–3 fresh basil leaves into the build, and finish with a 3g swirl of Barbera Lorenzo N°5 EVOO. Slice and serve immediately.",
    flavorProgression: "Melted Fior di Latte → gently tempered Mortadella IGP ribbons → cool Stracciatella di Burrata → rich Pistachio Pesto → crunchy Bronte pistachio → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { intro: "Dairy Prep:", bullets: ["Drain 60g Fior di Latte strips in a sieve for at least 1 hour. Keep 45g Stracciatella di Burrata chilled until service."] },
        { intro: "Pesto & Nut Prep:", bullets: ["Bring 20g Pistachio Pesto to room temperature. Coarsely crush 10g Bronte pistachios."] },
        { intro: "Meat Prep:", bullets: ["Slice mortadella paper-thin (50g total)."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Fior di Latte:", bullets: ["Distribute 60g drained Fior di Latte strips evenly across the bare dough."] },
        { intro: "Layer 2 — Picual (Optional):", bullets: ["Omit pre-bake oil for the default build (or apply no more than 1g Elizondo Nº3 Picual EVOO as a light micro-drizzle)."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically, keeping top flame moderate after launch.",
          "⏱ Cook Time: 60–75 seconds — rotate regularly until the crust is fully puffed and well blistered, with the Fior di Latte melted but not excessively browned.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { intro: "Stage 1 — Mortadella Ribbons:", bullets: ["Drape 50g of paper-thin mortadella slices loosely in ribbons across the hot melted mozzarella."] },
        { intro: "Stage 2 — Stracciatella & Pistachio Pesto Accents:", bullets: ["Spoon 45g of cold Stracciatella di Burrata into discrete pools across the mortadella. Pipe or dot 20g Pistachio Pesto in small accents around and over the creamy pockets."] },
        { intro: "Stage 3 — Finish & Crunch:", bullets: ["Shower with 10g pistachio granella, tuck 2–3 fresh basil leaves into the build, and finish with a 3g swirl of Barbera Lorenzo N°5 EVOO.", "Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["The Stracciatella and pistachio pesto are added entirely post-bake to preserve their cool creamy texture, fresh pistachio aroma, and vibrant colour. Keeping them off the high heat also prevents excess moisture from being driven into the crust."] },
        { intro: "Profile:", bullets: ["Melted Fior di Latte → gently tempered Mortadella IGP ribbons → cool Stracciatella di Burrata → rich Pistachio Pesto → crunchy Bronte pistachio → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "margherita-della-casa",
    number: 34,
    name: "Margherita della Casa",
    style: "House Margherita — San Marzano, Blistered Piennolo, Buffalo Mozzarella & Pecorino Crown",
    category: "classic",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/47/06/c4/pizza-buonissima-ci-siamo.jpg?w=2000&h=-1&s=1",
    toppings: "60g hand-crushed San Marzano DOP (seasoned with a light pinch of fine salt), 35g Pomodorini del Piennolo del Vesuvio DOP (halved lengthwise, kept as substantial, clearly visible protagonist pieces), 70g Mozzarella di Bufala Campana DOP (thick medallions, drained 1–2 hours and gently patted dry), 8g finely grated Pecorino Romano DOP, 4–5 fresh basil leaves, 2g–3g Elizondo Nº3 Picual EVOO (pre-bake spiral micro-drizzle). Strictly no post-bake additions.",
    menuIngredients: "Tomato, Piennolo cherry tomatoes, mozzarella di bufala, Pecorino Romano, basil, olive oil",
    build: "Our definitive house Margherita — inspired by Maestro Roberto at Pizzeria Al Terrazzo (Dal 1953), featuring hand-crushed San Marzano, prominent blistered Piennolo tomatoes, rich melting Buffalo mozzarella, and a savory Pecorino crown baked with Picual EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds to allow excess moisture to vent and the crust to stabilize. Strictly no post-bake additions — no oil, basil, or cheese added after baking. Slice and serve immediately.",
    flavorProgression: "Concentrated San Marzano → sweet blistered Piennolo → rich buffalo cream → toasted Pecorino umami → warm baked Picual",
    inspiredBy: "Inspired by the artisanal techniques of Maestro Roberto at Pizzeria Ristorante Al Terrazzo (Dal 1953).",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Cut 70g Mozzarella di Bufala Campana DOP into thick medallions and drain in a sieve for 1–2 hours. Gently pat dry with paper towels to remove excess surface whey (do not squeeze).", "Halve Piennolo tomatoes lengthwise, keeping them as prominent, clearly visible pieces (do not pre-salt)."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 60g hand-crushed San Marzano DOP evenly across the centre, leaving a clean 1.5–2cm cornicione rim."] },
        { intro: "Layer 2 — Piennolo:", bullets: ["Arrange the halved Piennolo tomatoes cut-side up across the sauce as distinct, prominent features."] },
        { intro: "Layer 3 — Basil:", bullets: ["Distribute 4–5 fresh basil leaves over the tomatoes."] },
        { intro: "Layer 4 — Buffalo Mozzarella:", bullets: ["Distribute the drained Bufala DOP medallions evenly over the basil and tomatoes."] },
        { intro: "Layer 5 — Pecorino Crown:", bullets: ["Scatter 8g of finely grated Pecorino Romano DOP in small gaps over the mozzarella and exposed tomato areas (avoiding a solid blanket)."] },
        { intro: "Layer 6 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the complete build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically post-launch — allow the Piennolo tomatoes to soften and blister while controlling Pecorino browning to prevent scorching.",
          "🔄 Rotate regularly for an even rise and leopard spotting.",
          "⏱ Cook Time: 75–90 seconds.",
        ] },
      ] },
      { title: "5. Rest & Serve", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds to allow excess moisture to vent and the crust to stabilize."] },
        { intro: "Strictly no post-bake additions:", bullets: ["No oil, basil, or cheese added after baking. Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Mozzarella di Bufala has a high moisture content that releases free whey during high-heat baking. Thoroughly draining the medallions for 1–2 hours helps control free moisture during the bake. The Pecorino Romano crown bakes directly into the tomato and buffalo cream, building a deep, toasted umami finish."] },
        { intro: "Profile:", bullets: ["Concentrated San Marzano → sweet blistered Piennolo → rich buffalo cream → toasted Pecorino umami → warm baked Picual"] },
      ] },
    ],
  },
  {
    id: "margherita-duo",
    number: 35,
    name: "Margherita Duo",
    style: "Dual-Color Piennolo — Yellow & Red Vesuvian Tomatoes & Agerola Fior di Latte",
    category: "classic",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/70-scaled.jpg",
    toppings: "35g yellow Piennolo-style Vesuvian tomatoes (hand-torn into rough pieces), 35g Pomodorini del Piennolo del Vesuvio DOP (red, hand-torn into rough pieces), 70g Agerola Fior di Latte (hand-torn into irregular strips, drained for 1+ hours), 8g finely grated Grana Padano DOP, 4–5 fresh basil leaves (tucked entirely pre-bake), 1g–2g Elizondo Nº3 Picual EVOO (pre-bake spiral micro-drizzle); finished post-bake with 3g Frantoio Muraglia Coratina EVOO (monovarietal Coratina — pungent, herbaceous, intensely peppery).",
    menuIngredients: "Red & Yellow Piennolo tomato, Agerola Fior di Latte, Grana Padano, basil, Picual & Coratina EVOO",
    build: "A vibrant house interpretation inspired by Pizzeria Carmnella's Neapolitan Pride (dal 1892) — sweet yellow and mineral red Piennolo tomatoes paired with creamy Agerola Fior di Latte, toasted Grana Padano and a peppery Coratina EVOO finish.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds to allow excess surface steam to dissipate and the base to settle. Apply a finishing 3g swirl of Frantoio Muraglia Coratina EVOO. Slice and serve immediately (zero post-bake basil).",
    flavorProgression: "Sweet Yellow Piennolo → mineral Red Piennolo → creamy Agerola Fior di Latte → toasted Grana Padano → warm fruity Picual → peppery Coratina finish",
    inspiredBy: "Inspired by the dual-colour Piennolo tradition of \"Neapolitan Pride\" at Pizzeria Carmnella (dal 1892).",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Drain 70g Agerola Fior di Latte strips in a sieve for at least 1 hour.", "Hand-tear the red and yellow Piennolo tomatoes into rough pieces, keeping the two varieties visually separated during prep (do not salt)."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, pushing air outward into the rim while preserving an airy 1.5cm cornicione. Avoid thinning the centre excessively."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Dual-Color Piennolo:", bullets: ["Distribute the 35g yellow and 35g red Piennolo tomatoes across the base in alternating clusters, keeping the two colors clearly distinguishable and leaving a 1.5–2cm clean rim."] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Scatter 70g drained Agerola Fior di Latte strips over and between the tomato clusters, leaving small gaps."] },
        { intro: "Layer 3 — Hard Cheese:", bullets: ["Distribute 8g finely grated Grana Padano DOP over the mozzarella and exposed tomato areas (avoiding a solid blanket)."] },
        { intro: "Layer 4 — Basil:", bullets: ["Tuck 4–5 fresh basil leaves between the cheese and tomato pieces."] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a light 1g–2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically post-launch — allow the red and yellow Piennolo tomatoes to soften, blister, and concentrate while controlling the Grana Padano so it browns without scorching.",
          "🔄 Rotate regularly for even cooking and leopard spotting.",
          "⏱ Cook Time: 75–90 seconds.",
        ] },
      ] },
      { title: "5. Rest & Serve", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds to allow excess surface steam to dissipate and the base to settle.", "Apply a finishing 3g swirl of Frantoio Muraglia Coratina EVOO. Slice and serve immediately (zero post-bake basil)."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Keeping the red and yellow Piennolo tomatoes unsalted allows their natural sweetness, acidity and mineral character to remain clearly differentiated during the bake. The high heat blisters and concentrates the tomatoes while the Agerola Fior di Latte melts around them without overwhelming the dual-colour tomato profile."] },
        { intro: "Profile:", bullets: ["Sweet Yellow Piennolo → mineral Red Piennolo → creamy Agerola Fior di Latte → toasted Grana Padano → warm fruity Picual → peppery Coratina finish"] },
      ] },
    ],
  },
  {
    id: "margherita-macchiata",
    number: 36,
    name: "Margherita Macchiata",
    style: "Blistered Piennolo, Fior di Latte & Post-Bake Pesto Macchie",
    category: "classic",
    toppings: "70g Pomodorini del Piennolo del Vesuvio DOP (hand-torn into substantial rough pieces, kept unsalted pre-bake), 70g Agerola Fior di Latte (hand-torn into irregular rustic strips, drained for 1+ hours), 8g finely grated Grana Padano DOP, 4–5 fresh basil leaves (distributed on and among the Fior di Latte), 1g Elizondo Nº3 Picual EVOO (light pre-bake micro-drizzle); finished post-bake with 12g fresh room-temperature Pesto alla Genovese (applied as 6–8 distinct raw dots/macchie). Strictly 0g additional post-bake EVOO.",
    menuIngredients: "Piennolo cherry tomatoes, Grana Padano, basil, Agerola Fior di Latte, Pesto Genovese (post-bake)",
    build: "A contemporary Margherita hybrid — blistered Vesuvian Piennolo tomatoes and melting Agerola Fior di Latte over a toasted Grana base, finished post-bake with fresh Genovese pesto macchie.",
    postBake: "Transfer directly to a wooden board and rest for 30–60 seconds to allow excess surface steam to dissipate and the base to settle. Using a squeeze bottle or small spoon, distribute 12g of pesto in 6–8 distinct raw dots (macchie) directly over the melted Fior di Latte and blistered tomatoes. Slice and serve immediately (zero post-bake EVOO).",
    flavorProgression: "Hot sweet Piennolo → creamy Agerola Fior di Latte → toasted Grana → warm fruity Picual → fresh, intensely aromatic Genovese pesto",
    videoGuide: "Margherita Macchiata — Exact Layering & Post-Bake Pesto",
    videoUrl: "https://www.youtube.com/shorts/os-6iufgy9E",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Drain 70g Agerola Fior di Latte strips in a sieve for at least 1 hour. Hand-tear 70g Piennolo tomatoes into substantial rough pieces.", "Load 12g fresh room-temperature Pesto alla Genovese into a squeeze bottle or small spooning dish."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Piennolo:", bullets: ["Spread 70g hand-torn Piennolo rough pieces evenly across the base, leaving a 1.5–2cm clean rim."] },
        { intro: "Layer 2 — Grana Padano:", bullets: ["Distribute 8g finely grated Grana Padano DOP over the tomatoes."] },
        { intro: "Layer 3 — Fior di Latte:", bullets: ["Scatter 70g well-drained Agerola Fior di Latte strips over the Grana and tomatoes, leaving small gaps."] },
        { intro: "Layer 4 — Basil:", bullets: ["Lay 4–5 fresh basil leaves directly on and among the Fior di Latte strips for proper heat exposure."] },
        { intro: "Layer 5 — Picual:", bullets: ["Apply a light 1g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically post-launch — allow the Piennolo tomatoes to soften, blister, and concentrate while controlling cheese browning.",
          "🔄 Rotate regularly for an even rise and leopard spotting.",
          "⏱ Cook Time: 75–90 seconds.",
        ] },
      ] },
      { title: "5. Rest & Post-Bake Macchie Finish", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–60 seconds to allow excess surface steam to dissipate and the base to settle."] },
        { bullets: ["Using a squeeze bottle or small spoon, distribute 12g of pesto in 6–8 distinct raw dots (macchie) directly over the melted Fior di Latte and blistered tomatoes.", "Slice and serve immediately (zero post-bake EVOO)."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Adding the Genovese pesto entirely post-bake preserves its fresh basil aroma and vibrant colour by avoiding direct high-heat exposure. Applying it as discrete macchie keeps the pesto concentrated and visually distinct against the blistered Piennolo and melted Fior di Latte."] },
        { intro: "Profile:", bullets: ["Hot sweet Piennolo → creamy Agerola Fior di Latte → toasted Grana → warm fruity Picual → fresh, intensely aromatic Genovese pesto"] },
      ] },
    ],
  },
  {
    id: "marinara-al-salame",
    number: 37,
    name: "Marinara al Salame",
    style: "Yellow Marinara — Vesuvian Yellow Tomatoes, Neapolitan Salami & Mountain Oregano",
    category: "classic",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/don-alberto22-scaled.jpg",
    toppings: "70g yellow Piennolo-style Vesuvian tomatoes (hand-torn into rough, irregular pieces, kept unsalted pre-bake), 30g–35g thinly sliced Salame Napoli, 1 small garlic clove (very thinly sliced), 0.8g–1g dried mountain oregano (origano di montagna), 4–5 fresh basil leaves, 2g Elizondo Nº3 Picual EVOO pre-bake, 2g Barbera Lorenzo Nº5 EVOO post-bake. Strictly NONE (zero cheese).",
    menuIngredients: "Yellow Piennolo tomato, Neapolitan salami, garlic, mountain oregano, basil, Picual & Lorenzo Nº5 EVOO",
    build: "A vibrant house interpretation inspired by Don Alberto at Pizzeria Carmnella (dal 1892) — sweet yellow Vesuvian tomatoes, sliced garlic, mountain oregano, and rendering slices of Neapolitan salami baked with Picual EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to stabilize. Apply a light 2g finishing swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately.",
    flavorProgression: "Sweet yellow Vesuvian tomatoes → savoury Neapolitan salami → sliced garlic → aromatic mountain oregano → warm Picual → almond-smooth Lorenzo N°5 finish",
    inspiredBy: "A house interpretation inspired by Don Alberto at Pizzeria Carmnella (dal 1892).",
    videoGuide: "Marinara al Salame — Yellow Piennolo & Salame Napoletano",
    videoUrl: "https://www.youtube.com/shorts/pFQqAXboCeY",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Hand-tear or crush 70g yellow Piennolo-style Vesuvian tomatoes into rough pieces. Slice 1 small garlic clove very thinly. Weigh out 30g–35g Salame Napoli and 0.8g–1g mountain oregano."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Yellow Tomato Base:", bullets: ["Spread 70g crushed yellow Piennolo tomatoes evenly across the base, leaving a 1.5–2cm clean rim."] },
        { intro: "Layer 2 — Garlic & Oregano:", bullets: ["Scatter the very thinly sliced garlic and 0.8g–1g mountain oregano across the tomatoes."] },
        { intro: "Layer 3 — Salami & Basil:", bullets: ["Arrange 30g–35g thin Salame Napoli slices evenly across the pie. Lay 4–5 fresh basil leaves over the build."] },
        { intro: "Layer 4 — Picual:", bullets: ["Apply a 2g spiral micro-drizzle of Elizondo Nº3 Picual EVOO."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically post-launch — keep the burner moderate so the thin garlic and salami edges do not scorch.",
          "🔄 Rotate regularly until the cornicione is fully inflated and blistered, the tomato is concentrated, and the salami edges are lightly crisped with some fat rendered.",
          "⏱ Cook Time: 75–85 seconds.",
        ] },
      ] },
      { title: "5. Rest & Serve", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to stabilize."] },
        { intro: "Stage 1 (Finish):", bullets: ["Apply a light 2g finishing swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Yellow Vesuvian tomatoes provide a vibrant sweetness that contrasts with the savory, cured profile of Neapolitan salami. Because thin garlic and salami slices are vulnerable to high oven heat, dynamic top-flame management during the 75–85 second bake ensures controlled fat rendering and aromatic caramelization without scorching."] },
        { intro: "Profile:", bullets: ["Sweet yellow Vesuvian tomatoes → savoury Neapolitan salami → sliced garlic → aromatic mountain oregano → warm Picual → almond-smooth Lorenzo N°5 finish"] },
      ] },
    ],
  },
  {
    id: "burratina-della-casa",
    number: 48,
    name: "Burratina della Casa",
    style: "House Burratina Pizza — Red Piennolo, Mountain Oregano & Creamy Putignano Burratina",
    category: "classic",
    image: "https://www.rtagency.it/menu/pizzeria%20carmnella/images/cafona-carm.jpeg",
    toppings: "70g Pomodorini del Piennolo del Vesuvio DOP (red, hand-torn into rough pieces, kept unsalted pre-bake), 8g finely grated Grana Padano DOP, 0.8g–1g dried mountain oregano (origano di montagna); finished post-bake with ~100g Burratina di Putignano (drained, placed centrally with a gentle incision on top), 4–5 fresh basil leaves tucked around the burratina, 3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP). Zero pre-bake oil.",
    menuIngredients: "Red Piennolo tomato, Grana Padano, mountain oregano, Burratina di Putignano (post-bake), basil, Lorenzo Nº5 EVOO",
    build: "A luxurious house interpretation inspired by Pizza Cafona at Pizzeria Carmnella (dal 1892) — sweet red Piennolo tomatoes and mountain oregano baked over a toasted Grana base, crowned post-bake with a creamy Putignano burratina, fresh basil, and Lorenzo Nº5 EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to stabilize. Place the ~100g Burratina di Putignano squarely in the center with a gentle incision on top, tuck 4–5 fresh basil leaves around it, and finish with a 3g swirl of Barbera Lorenzo Nº5 EVOO primarily around the burratina and lightly across the crust. Slice and serve immediately.",
    flavorProgression: "Sweet red Piennolo → toasted Grana → aromatic mountain oregano → cool creamy Putignano burratina → fresh basil → almond-smooth Lorenzo N°5 finish",
    inspiredBy: "Inspired by Pizza Cafona at Pizzeria Carmnella (dal 1892).",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Hand-tear 70g red Piennolo tomatoes into rough pieces. Weigh out 8g Grana Padano and 0.8g–1g mountain oregano. Keep the ~100g Burratina di Putignano cool until service."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Red Piennolo Base:", bullets: ["Spread 70g hand-torn red Piennolo tomatoes evenly across the base, leaving a 1.5–2cm clean rim."] },
        { intro: "Layer 2 — Grana & Oregano:", bullets: ["Distribute 8g finely grated Grana Padano DOP and 0.8g–1g mountain oregano evenly over the tomatoes."] },
        { intro: "Layer 3 — Oil:", bullets: ["Zero pre-bake oil."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically post-launch — allow the red Piennolo tomatoes to soften, blister, and concentrate while the Grana toasts underneath.",
          "🔄 Rotate regularly until the cornicione is fully inflated and leopard-spotted.",
          "⏱ Cook Time: ~75–85 seconds.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to stabilize."] },
        { intro: "Stage 1 (Burratina Crown):", bullets: ["Place the ~100g Burratina di Putignano squarely in the center. Make a gentle opening in the top to reveal the creamy stracciatella interior."] },
        { intro: "Stage 2 (Herb & Oil Finish):", bullets: ["Tuck 4–5 fresh basil leaves around the burratina. Apply a 3g finishing swirl of Barbera Lorenzo Nº5 EVOO primarily around the burratina and lightly across the crust. Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Adding the burratina post-bake keeps its creamy stracciatella interior away from direct oven heat and preserves its cool, fluid texture. Baking the red Piennolo tomatoes with Grana Padano and mountain oregano creates a concentrated, savoury red layer that contrasts with the rich, milky burratina."] },
        { intro: "Profile:", bullets: ["Sweet red Piennolo → toasted Grana → aromatic mountain oregano → cool creamy Putignano burratina → fresh basil → almond-smooth Lorenzo N°5 finish"] },
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
    id: "zucca-guanciale-e-rosmarino",
    number: 45,
    name: "Zucca, Guanciale e Rosmarino",
    style: "Pumpkin Cream Base — Crispy Guanciale, Fresh Rosemary & Pecorino Romano",
    category: "pumpkin",
    image: "https://foodionista.com/wp-content/uploads/2022/10/zucca-pancetta.jpg",
    toppings: "Strictly no tomato sauce. 70g thick, spreadable prepared pumpkin cream (e.g., Greci or Demetra), 60g well-drained Fior di Latte (hand-torn into strips, drained for 1+ hours), 0.5g–0.7g finely chopped fresh rosemary leaves, 40g Guanciale (cut into thin strips, pan-crisped separately and drained completely; zero reserved fat added to the pie), 8g finely microplaned Pecorino Romano DOP (post-bake), zero pre-bake oil, 3g Barbera Lorenzo Nº5 EVOO (Nocellara del Belice DOP — post-bake finishing swirl).",
    menuIngredients: "Pumpkin cream, Fior di Latte, rosemary, crispy guanciale, Pecorino Romano",
    build: "A refined autumn-winter white pizza — sweet pumpkin cream and melting Fior di Latte baked with fresh rosemary, then finished with crisp guanciale, Pecorino Romano and Lorenzo Nº5 EVOO.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to stabilize. Scatter the warm, pan-crisped guanciale strips across the hot pizza, microplane 8g Pecorino Romano DOP evenly over the top, and finish with a 3g swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately.",
    flavorProgression: "Velvety pumpkin cream → creamy Fior di Latte → aromatic fresh rosemary → crispy guanciale → sharp Pecorino Romano → almond-smooth Lorenzo N°5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Drain 60g Fior di Latte strips in a sieve for at least 1 hour. Finely chop 0.5g–0.7g fresh rosemary leaves."] },
        { intro: "Guanciale Prep:", bullets: ["Sauté 40g thin guanciale strips in a dry skillet over medium-low heat until golden and ultra-crisp. Drain completely on paper towels (reserve no fat for the pizza)."] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch 280g dough ball to 30–32cm on semolina rimacinata, preserving gas in an airy 1.5–2cm cornicione."] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — Pumpkin Cream:", bullets: ["Spread 70g thick, spreadable pumpkin cream evenly across the base, leaving a clean 1.5–2cm rim."] },
        { intro: "Layer 2 — Fior di Latte:", bullets: ["Scatter 60g drained Fior di Latte strips evenly over the pumpkin cream."] },
        { intro: "Layer 3 — Rosemary:", bullets: ["Sprinkle 0.5g–0.7g finely chopped fresh rosemary evenly across the cheese and pumpkin base."] },
        { intro: "Layer 4 — Oil:", bullets: ["Zero pre-bake oil."] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: [
          "🪨 Stone floor target: 430°C–440°C",
          "🔥 Dome: 450°C–480°C",
          "Manage top flame dynamically post-launch — keep the burner on low-to-moderate so the pumpkin cream heats through and the Fior di Latte melts cleanly without scorching.",
          "🔄 Rotate regularly until the cornicione is fully inflated and leopard-spotted.",
          "⏱ Cook Time: 75–85 seconds.",
        ] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to allow excess surface steam to dissipate and the base to stabilize."] },
        { intro: "Stage 1 (Crispy Guanciale):", bullets: ["Scatter the warm, pan-crisped guanciale strips across the hot pizza."] },
        { intro: "Stage 2 (Pecorino & Oil Finish):", bullets: ["Microplane 8g Pecorino Romano DOP evenly over the top. Finish with a 3g finishing swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately."] },
        { intro: "Technical Moisture & Thermal Note:", bullets: ["Pan-crisping the guanciale separately limits its exposure to intense dome heat and allows the pizza to retain the guanciale's crisp texture when added post-bake. Spreading a thick, spreadable pumpkin cream base beneath the Fior di Latte and rosemary creates a sweet, velvety foundation that balances the sharp, salty Pecorino Romano."] },
        { intro: "Profile:", bullets: ["Velvety pumpkin cream → creamy Fior di Latte → aromatic fresh rosemary → crispy guanciale → sharp Pecorino Romano → almond-smooth Lorenzo N°5 finish"] },
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
