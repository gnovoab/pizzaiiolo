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
    toppings: "70g–80g hand-crushed San Marzano DOP tomatoes + light pinch of fine sea salt, 50g well-drained Fior di Latte + 20g Mozzarella di Bufala DOP (pre-bake), 25g–30g fresh Mozzarella di Bufala DOP (post-bake), 35g–40g Prosciutto di Parma DOP or San Daniele DOP (post-bake), 15g–20g wild rocket tossed in 1g–2g Barbera Lorenzo Nº5 (post-bake), 10g–12g Parmigiano Reggiano DOP shavings (post-bake), 2g–3g Elizondo Nº3 Picual EVOO pre-bake, 3g–4g Barbera Lorenzo Nº5 EVOO post-bake.",
    menuIngredients: "Tomato, mozzarella di bufala, Prosciutto di Parma, arugula, Parmigiano",
    build: "A contemporary masterclass in thermal contrast — crisp baked crust topped sequentially with cool post-bake Bufala DOP, heat-warmed Prosciutto di Parma, peppery wild rocket, and shaved Parmigiano.",
    postBake: "Transfer directly to a wooden board and rest for 30–40 seconds to vent excess steam, then sequentially stage the fresh Bufala DOP, Prosciutto di Parma, dressed wild rocket, and shaved Parmigiano, finishing with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO. Slice and serve immediately.",
    flavorProgression: "Hot San Marzano → cool creamy Bufala DOP → warm relaxed Prosciutto di Parma → peppery wild rocket → sharp shaved Parmigiano → almond-smooth Lorenzo Nº5 finish",
    steps: [
      { title: "1. Pre-Prep", sections: [
        { bullets: ["Hand-crush San Marzano DOP tomatoes and season with fine sea salt", "Combine 50g well-drained Fior di Latte and 20g Bufala DOP for the pre-bake layer", "Lightly toss 15g–20g fresh wild rocket with 1g–2g Barbera Lorenzo Nº5 in a bowl", "Shave 10g–12g Parmigiano Reggiano into thin ribbons"] },
      ] },
      { title: "2. Dough Prep", sections: [
        { bullets: ["Hand-stretch the 280g dough ball to 30–33cm on semolina rimacinata, preserving gas in an airy 1.5cm cornicione"] },
      ] },
      { title: "3. Layer Assembly (In Exact Order)", sections: [
        { intro: "Layer 1 — San Marzano:", bullets: ["Spread 70g–80g seasoned San Marzano DOP evenly across the center, leaving a 1.5–2cm clean rim"] },
        { intro: "Layer 2 — Pre-Bake Cheese:", bullets: ["Scatter the 70g Fior di Latte / Bufala mix over the tomato, leaving small gaps"] },
        { intro: "Layer 3 — Picual:", bullets: ["Apply a 2g–3g spiral micro-drizzle of Elizondo Nº3 Picual EVOO over the build"] },
      ] },
      { title: "4. Gozney Bake", sections: [
        { intro: "Gozney / High-Heat Oven:", bullets: ["🪨 Stone Floor: 420°C–440°C", "🔥 Dome: 450°C–480°C", "⏱ Cook Time: 60–75 seconds", "🔄 Rotate regularly until the crust is fully blistered and structured to support cold toppings"] },
      ] },
      { title: "5. Rest & Sequential Post-Bake Staging", sections: [
        { bullets: ["Transfer directly to a wooden board and rest for 30–40 seconds to vent excess steam"] },
        { intro: "Stage 1 — Fresh Bufala:", bullets: ["Distribute 25g–30g fresh room-temperature Bufala DOP separately across the hot melted base"] },
        { intro: "Stage 2 — Prosciutto:", bullets: ["Drape 35g–40g paper-thin Prosciutto di Parma loosely over the pizza, allowing the delicate fat to gently warm and relax from residual heat without cooking"] },
        { intro: "Stage 3 — Rocket:", bullets: ["Mound the dressed wild rocket directly over the prosciutto"] },
        { intro: "Stage 4 — Parmigiano & Finishing Oil:", bullets: ["Scatter shaved Parmigiano ribbons over the rocket and finish with a 3g–4g swirl of Barbera Lorenzo Nº5 EVOO", "Slice and serve immediately"] },
        { intro: "Technical Thermal Note:", bullets: ["Resting the base for 30–40 seconds before staging prevents steam wilting — draping the Prosciutto di Parma loosely allows the cured fat to warm and relax naturally from residual surface heat, softening its texture and releasing aromatic volatile oils without cooking or toughening the meat"] },
        { intro: "Profile:", bullets: ["Hot San Marzano → cool creamy Bufala DOP → warm relaxed Prosciutto di Parma → peppery wild rocket → sharp shaved Parmigiano → almond-smooth Lorenzo Nº5 finish"] },
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
