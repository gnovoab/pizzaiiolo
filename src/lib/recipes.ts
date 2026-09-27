import type { PizzaRecipe, PizzaRecipeCategory } from "./types";

export const RECIPE_CATEGORIES: { id: PizzaRecipeCategory; label: string; blurb: string }[] = [
  { id: "classic", label: "Classic", blurb: "Margherita, Bufalina, Marinara, Cosacca, Napolitan, Diavola, Parma, Parma Bianca, Prosciutto e Funghi, Capricciosa, Quattro Formaggi, Ortolana." },
  { id: "calzone-focaccia", label: "Calzone & Focaccia", blurb: "Folded and stuffed specialties — Ripieno (Calzone)." },
  { id: "innovative", label: "Innovative", blurb: "Modern and rustic twists on Italian tradition — Bufala e Iberico, Double Pepperoni & Hot Honey, Chorizo, Tettoia — Four Cheese & Truffle, Cacio e Pepe, Carbonara, Amatriciana, Gricia, 'Nduja & Hot Honey, Calabrese, Pesto & Burrata, Mortadella and Pistachio, La Oro Verde, Boscaiola." },
  { id: "pumpkin", label: "Pumpkin Base", blurb: "Replace tomato with smooth roasted pumpkin cream — Sfiziosa, Sfiziosa Signature, Mantovana, Norcina, Zucca & Pancetta, Zucca, Gorgonzola & Noci." },
];

export const RECIPES: PizzaRecipe[] = [
  {
    id: "margherita",
    number: 1,
    name: "Margherita",
    style: "Traditional Base",
    category: "classic",
    image: "https://data.thefeedfeed.com/static/2021/04/13/16183401006075e904223ae.jpg",
    toppings: "Raw hand-crushed San Marzano tomatoes, fine sea salt, thick matchstick cuts of Fior di Latte mozzarella, extra virgin olive oil (EVOO), fresh basil leaves.",
    menuIngredients: "Tomato, mozzarella, basil, olive oil",
    build: "Preheat the Gozney oven until the stone is fully saturated and running around 400–450°C. Spread 60g of crushed tomatoes evenly over the dough in a smooth circular motion, leaving a clean border. Add a light pinch of salt if needed. Distribute well-drained, torn mozzarella in small, evenly spaced pieces to prevent pooling during the slightly longer bake. Add fresh basil either tucked lightly under some cheese or placed on top after baking to preserve freshness. Finish with a light drizzle of extra-virgin olive oil. Launch the pizza and rotate frequently for even cooking, baking until the crust is deeply blistered and the cheese is fully melted but not soupy.",
    postBake: "Serve immediately.",
    videoGuide: "Classic San Marzano Tomato Sauce & Assembly",
    steps: [
      { title: "1. Dough", sections: [{ bullets: ["250–270 g dough ball", "Stretch to 28–33 cm", "Keep a light, airy cornicione", "Do not press out edge gas"] }] },
      { title: "2. Tomato Base", sections: [{ bullets: ["~60 g crushed San Marzano tomatoes", "Spread in a thin, even circular layer", "Leave a 1–2 cm clean border", "Light pinch of sea salt (optional)"] }] },
      { title: "3. Mozzarella", sections: [{ bullets: ["Well-drained Fior di Latte", "Torn into small, evenly spaced pieces", "Keep gaps between pieces (prevents steaming in high heat)"] }] },
      { title: "4. Basil", sections: [{ intro: "Choose one:", bullets: ["Tucked under mozzarella (heat protection)", "Added after baking (fresher aroma finish)"] }] },
      { title: "5. Olive Oil (Pairing Rule)", sections: [
        { bullets: ["Use Campania-style EVOO (peppery, grassy profile)", "Apply lightly only"] },
        { intro: "When:", bullets: ["Pre-bake: optional micro-drizzle (very light)", "Post-bake: preferred method (flavour release)"] },
      ] },
      { title: "6. Final Check Before Launch", sections: [{ bullets: ["Base slides cleanly", "Toppings evenly spaced", "No wet or overloaded centre", "Cornicione is airy and intact"] }] },
      { title: "7. Bake", sections: [{ bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "⏱ Cook time: 60–75 seconds", "🔄 Rotate every 15–20 seconds"] }] },
      { title: "8. Finish", sections: [{ bullets: ["Puffy leopard-spotted crust", "Melted, glossy mozzarella (not watery)", "Clean base with light char", "Fresh basil aroma released on heat"] }] },
    ],
  },
  {
    id: "bufalina",
    number: 2,
    name: "Bufalina",
    style: "Margherita con Bufala",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTS95WYSPFblZrzxmXUcNGNROGg7uib_xsYLYqWMFhRg&s=10",
    toppings: "San Marzano tomato sauce, Mozzarella di Bufala Campana DOP, fresh basil leaves, extra virgin olive oil.",
    menuIngredients: "Tomato, mozzarella di bufala, basil, olive oil",
    build: "The classic Pizza Bufalina (or Margherita con Bufala) is the ultimate test of simplicity. Unlike a standard Margherita made with fior di latte, using Mozzarella di Bufala Campana DOP brings a much richer, creamier texture and a slightly tangy flavor that cuts through the acidity of the tomato sauce.",
    postBake: "Add one or two fresh basil leaves post-bake for aroma and a fresh pop of color.",
    steps: [
      { title: "1. Ingredients (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["80g–90g San Marzano Tomato Sauce (crushed DOP San Marzano tomatoes mixed with 1g fine salt per 100g of tomato, no cooking required)", "90g–100g Mozzarella di Bufala Campana DOP", "4–5 Fresh Basil Leaves", "Extra Virgin Olive Oil (a generous swirl)"] },
      ] },
      { title: "2. Drain the Buffalo Mozzarella", sections: [
        { bullets: ["Slice or hand-tear the mozzarella at least 1 to 2 hours before baking", "Leave it in a colander in the fridge to drain off excess whey"] },
        { intro: "Why:", bullets: ["Buffalo mozzarella holds significantly more moisture than fior di latte; skipping this step will cause a pool of water in the center of your pizza"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough disc using semolina rimacinata", "Leave a soft, pronounced cornicione"] },
      ] },
      { title: "4. Assemble", sections: [
        { bullets: ["Ladle the San Marzano tomato sauce into the center and spread it outward in a spiral, leaving 1.5–2 cm around the edge clear", "Scatter the drained buffalo mozzarella pieces evenly across the sauce", "Add a few fresh basil leaves", "Finish with a light spiral drizzle of extra virgin olive oil before launching into the oven"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Pizza Oven (450°C–500°C / 850°F+):", bullets: ["Bake for 60–90 seconds until the crust rises with dark leopard spots and the cheese is fully melted and bubbling"] },
        { intro: "Home Oven with Pizza Steel/Stone (Max Temp):", bullets: ["Bake near the top element until the crust is golden-brown and the cheese is melted (approx. 5–7 minutes)"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Add one or two fresh basil leaves post-bake for aroma and a fresh pop of color"] },
      ] },
    ],
  },
  {
    id: "marinara",
    number: 3,
    name: "Marinara",
    style: "Historic Naples — No Cheese",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbF4nIbd7R8H5Ugiak8LK3jFHSZ3_ULRo6lC7wE3Ru6Q&s=10",
    toppings: "San Marzano tomato sauce, thinly sliced fresh garlic, dried wild oregano, fresh basil leaves, extra virgin olive oil. No cheese.",
    menuIngredients: "Tomato, garlic, oregano, basil, olive oil",
    build: "The classic Neapolitan Pizza Marinara is the oldest, purest pizza in Naples — created for sailors (marinai) returning from sea. It contains no cheese whatsoever. Its legendary flavor relies entirely on high-quality tomatoes, pungent garlic, fragrant oregano, and rich extra virgin olive oil.",
    postBake: "Add a tiny splash of raw extra virgin olive oil post-bake if desired.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["90g–100g San Marzano Tomato Sauce (crushed DOP San Marzano tomatoes with 1g fine salt per 100g)", "1–2 Cloves Fresh Garlic (sliced razor-thin using a knife or mandoline)", "1 tsp Dried Wild Oregano (preferably Mediterranean or Calabrian oregano on the stem)", "Fresh Basil Leaves (4–5 leaves)", "Extra Virgin Olive Oil (a generous spiral—roughly 10g–15g)"] },
      ] },
      { title: "2. Slice the Garlic Thinly", sections: [
        { bullets: ["Slice the garlic as thinly as possible"] },
        { intro: "Why:", bullets: ["If the garlic slices are too thick, they won't cook through in 60–90 seconds and will taste harsh and raw"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough ball on semolina rimacinata, preserving an airy, pronounced cornicione"] },
      ] },
      { title: "4. Assemble", sections: [
        { bullets: ["Ladle the San Marzano tomato sauce into the center and spread it almost all the way to the edge (Marinara takes slightly more sauce than a Margherita)", "Scatter the thin garlic slices evenly across the tomato sauce", "Rub the dried oregano between your palms directly over the pizza to release its aromatic oils", "Add the fresh basil leaves", "Finish with a generous, spiral drizzle of extra virgin olive oil starting from the center outward"] },
        { intro: "Why the oil matters:", bullets: ["The oil is essential in a Marinara as it fries the garlic slices in the sauce during baking"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney / High-Heat Pizza Oven (450°C–480°C):", bullets: ["Launch and bake for 60–90 seconds, turning every 15–20 seconds", "Watch closely: without cheese to insulate the top, the tomato and garlic cook quickly into a sweet, rich, aromatic sauce while the crust turns crisp and leopard-spotted"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Add a tiny splash of raw extra virgin olive oil post-bake if desired"] },
      ] },
    ],
  },
  {
    id: "cosacca",
    number: 4,
    name: "Cosacca",
    style: "Historic Naples — 1844",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76JLGq7RrjabxAASmGaLI7E9ZYoLUAyTVG41MbMh-KA&s=10",
    toppings: "San Marzano tomato sauce, Pecorino Romano DOP (or a 50/50 mix with Parmigiano-Reggiano), extra virgin olive oil, fresh basil leaves.",
    menuIngredients: "Tomato, Pecorino Romano, basil, olive oil",
    build: "Pizza Cosacca (the Cossack Pizza) is one of the oldest and most historic pizzas in Naples, dating back to 1844. Created to honor Tsar Nicholas I of Russia during his visit to the Kingdom of the Two Sicilies, it sits structurally between a Marinara and a Margherita: sweet tomato sauce, no mozzarella, and a heavy dusting of aged grated cheese that melts into the warm sauce.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["80g–90g San Marzano Tomato Sauce (sweet, high-quality crushed tomatoes mixed with 1g salt per 100g)", "25g–35g Pecorino Romano DOP (or a 50/50 mix of Pecorino Romano and Parmigiano-Reggiano for a slightly milder finish)", "Extra Virgin Olive Oil", "4–5 Fresh Basil Leaves"] },
      ] },
      { title: "2. Stretch the Base", sections: [
        { bullets: ["Stretch your dough disc using semolina", "Preserve a puffy cornicione"] },
      ] },
      { title: "3. Apply Sauce & Basil", sections: [
        { bullets: ["Ladle the San Marzano tomato sauce over the dough, spreading it evenly out toward the edges", "Lay fresh basil leaves directly on top of the sauce"] },
      ] },
      { title: "4. The Cheese Application (Dual Technique)", sections: [
        { intro: "Traditional Method:", bullets: ["Dust about half of the finely grated Pecorino over the sauce along with a swirl of extra virgin olive oil before launching into the oven"] },
        { intro: "Post-Bake Shower:", bullets: ["Immediately upon taking the pizza out of the oven, shower the remaining Pecorino heavily over the piping hot center", "The residual heat from the sauce partially melts the cheese, creating a silky, intensely savory coating"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Pizza Oven (450°C–500°C / 850°F+):", bullets: ["Bake for 60–90 seconds until the crust is airy with strong leopard spots"] },
      ] },
    ],
  },
  {
    id: "napoli",
    number: 5,
    name: "Napolitan",
    category: "classic",
    image: "https://italianfoodforever.com/wp-content/uploads/2015/01/napolipizza4.jpg",
    toppings: "San Marzano tomatoes, pre-dried mozzarella strips, premium Cantabrian anchovies, Kalamata black olives (halved and pitted), rinsed capers, fresh garlic, dried wild oregano.",
    menuIngredients: "Tomato, mozzarella, anchovies, olives, capers, garlic, oregano",
    build: "Spread your tomato base over the dough circle. Lay down your mozzarella matchsticks. Securely map out the anchovy fillets, olive halves, and a scattered tablespoon of rinsed capers. Finish with one garlic clove sliced paper-thin and a generous pinch of dried wild oregano.",
    postBake: "Serve immediately.",
    videoGuide: "True Italian Savory Flavors & Anchovy Placement",
    steps: [
      { title: "1. Tomato Base", sections: [{ bullets: ["~60–70g crushed San Marzano tomatoes", "Spread evenly in a thin circular layer", "No spiral patterning — just uniform coverage", "1–2 cm clean cornicione border", "No seasoning or only a microscopic pinch of salt"] }] },
      { title: "2. Mozzarella", sections: [{ bullets: ["Fior di Latte, very well-drained", "Torn irregular pieces (not matchsticks)", "Sparse distribution", "Visible tomato between pieces", "Goal: light coverage, not full melt blanket"] }] },
      { title: "3. Anchovy (Primary Salt Source)", sections: [{ bullets: ["2–3 anchovy fillets max", "Placed after mozzarella", "Broken into smaller segments and distributed lightly", "No pattern, no “mapping”", "Anchovy = seasoning, not feature"] }] },
      { title: "4. Olives (Optional — Choose Instead of Capers)", sections: [{ bullets: ["4–6 black olives, pitted and halved", "Light scatter only", "OR omit entirely for stricter Naples style"] }] },
      { title: "5. Capers (Optional — Only If No Olives)", sections: [{ bullets: ["1 tsp, well rinsed and dried", "Sparse distribution", "Must not overlap with anchovy clusters"] }] },
      { title: "6. Garlic (Optional, Very Controlled)", sections: [{ bullets: ["2–4 ultra-thin slices", "Only if you want a Marinara-adjacent influence", "Should not brown or cluster"] }] },
      { title: "7. Oregano (Style Dependent)", sections: [{ bullets: ["Pinch of dried oregano", "Only if aiming for Marinara-leaning profile", "Otherwise omit for Salvo-style balance"] }] },
      { title: "8. Olive Oil (Final Balance Element)", sections: [{ bullets: ["Light EVOO drizzle (Campania-style)", "Pre-bake: optional micro drizzle, OR", "Post-bake: preferred (cleaner aroma expression)"] }] },
    ],
  },
  {
    id: "diavola",
    number: 6,
    name: "Diavola",
    style: "Margherita con Salame Piccante",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd4NQF9AoDHLYIDv3yGqhdZq9HBRfQ8WuGZUuR5s9Vw&s=10",
    toppings: "San Marzano tomato sauce, Fior di Latte mozzarella, Salame Piccante (Neapolitan spicy salami, Calabrian Soppressata, or pepperoni), Parmigiano-Reggiano, fresh basil, extra virgin olive oil, optional chili flakes or chili oil.",
    menuIngredients: "Tomato, mozzarella, spicy salami, Parmigiano, basil",
    build: "A Margherita topped with spicy cured salami — no olives required. (Quick tip: if you order this in Italy, always ask for Salame Piccante rather than \"pepperoni,\" as peperoni with one \"p\" means bell peppers in Italian!)",
    postBake: "Post-bake, add fresh basil or an optional drizzle of spicy chili-infused extra virgin olive oil.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["80g San Marzano Tomato Sauce (crushed DOP San Marzano tomatoes with 1g fine salt per 100g)", "80g–90g Fior di Latte Mozzarella (cubed or cut into strips and well-drained)", "50g–60g Salame Piccante (thinly sliced Neapolitan spicy salami, Calabrian Soppressata, or pepperoni)", "15g Parmigiano-Reggiano (finely grated)", "4–5 Fresh Basil Leaves", "Extra Virgin Olive Oil", "Dried Chili Flakes or Chili Oil (optional, for extra heat)"] },
      ] },
      { title: "2. Prep the Cheese", sections: [
        { bullets: ["Cut the Fior di Latte into strips and drain in a sieve for 30–60 minutes"] },
        { intro: "Why:", bullets: ["Keeping excess moisture off the top ensures the rendered fats from the salami blend smoothly with the cheese rather than becoming watery"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough ball using semolina", "Leave an airy 1.5–2 cm cornicione"] },
      ] },
      { title: "4. Assemble", sections: [
        { bullets: ["Spread the San Marzano tomato sauce evenly from the center outward in a spiral", "Dust with the finely grated Parmigiano-Reggiano", "Distribute the drained Fior di Latte strips across the sauce", "Lay the slices of Salame Piccante evenly across the pizza", "Add fresh basil leaves and a light drizzle of extra virgin olive oil before launching into the oven"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Pizza Oven (450°C–500°C / 850°F+):", bullets: ["Bake for 60–90 seconds", "The high heat crisps the edges of the salami slices, making them cup up slightly and release their spicy oil over the melted mozzarella"] },
        { intro: "Home Oven with Pizza Steel/Stone:", bullets: ["Bake at max temp near the top heating element for 5–7 minutes until the crust is leopard-spotted and the salami edges are crisp"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Post-bake, add fresh basil or an optional drizzle of spicy chili-infused extra virgin olive oil"] },
      ] },
    ],
  },
  {
    id: "seven-stars-parma",
    number: 7,
    name: "Parma",
    style: "Single-Bake with Fresh Post-Bake Bufala",
    category: "classic",
    image: "https://theuppercrustpizzeria.co.uk/cdn/shop/products/Parma.jpg?v=1639743529",
    toppings: "San Marzano tomato sauce, Mozzarella di Bufala DOP mixed with a touch of Fior di Latte (pre-bake), extra fresh Mozzarella di Bufala DOP (post-bake), paper-thin Serrano Ham, fresh wild rocket (arugula), extra virgin olive oil.",
    menuIngredients: "Tomato, mozzarella di bufala, Serrano ham, arugula, olive oil",
    build: "Tomato base topped with a pre-bake mix of Mozzarella di Bufala and a touch of Fior di Latte, baked in a single bake, then finished post-bake with a little more fresh Mozzarella di Bufala, Serrano ham, rocket and olive oil — no second bake.",
    steps: [
      { title: "1. Base Layer", sections: [
        { bullets: ["San Marzano tomato sauce, thin and even"] },
        { intro: "Key idea:", bullets: ["Tomato = moisture + acidity base"] },
      ] },
      { title: "2. Cheese Mix (Pre-Bake)", sections: [
        { bullets: ["Mozzarella di Bufala DOP mixed with a small amount of Fior di Latte", "Well-drained before mixing", "Torn and scattered evenly across the tomato base"] },
        { intro: "Effect:", bullets: ["Fior di Latte adds structural melt and stability", "Bufala keeps the rich, creamy dairy character"] },
      ] },
      { title: "3. Bake (Single Bake Only)", sections: [
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "60–75 seconds"] },
        { intro: "Goal:", bullets: ["Crust fully blistered and airy", "Cheese mix melted and glossy", "Everything finishes in one bake — no flash return"] },
      ] },
      { title: "4. Fresh Bufala (Post-Bake)", sections: [
        { bullets: ["A little more fresh Mozzarella di Bufala DOP, torn", "Placed straight onto the hot, just-baked pizza"] },
        { intro: "Effect:", bullets: ["Adds a cool, creamy contrast against the melted cheese underneath"] },
      ] },
      { title: "5. Serrano Ham", sections: [
        { bullets: ["Paper-thin Serrano ham", "Draped loosely over the fresh bufala"] },
        { intro: "Effect:", bullets: ["Fat gently relaxes from residual heat, not cooked"] },
      ] },
      { title: "6. Rocket (Arugula)", sections: [
        { bullets: ["Fresh wild rocket, hand-torn", "Added on top, no heat exposure"] },
        { intro: "Effect:", bullets: ["Fresh peppery lift against warm dairy and ham"] },
      ] },
      { title: "7. Olive Oil Finish", sections: [
        { bullets: ["Light drizzle of extra virgin olive oil to finish"] },
      ] },
    ],
  },
  {
    id: "parma-bianca",
    number: 8,
    name: "Parma Bianca",
    category: "classic",
    image: "https://ginopizzaovens.com/cdn/shop/articles/gino-pizza-fior-latte-parma-ham-rocket-parmesan.jpg?v=1683056519&width=1500",
    toppings: "Fior di Latte cheese, ricotta, Jamón de Cebo Ibérico (Iberico ham), rocket (arugula), Parmigiano-Reggiano, extra virgin olive oil.",
    menuIngredients: "Mozzarella, ricotta, Iberico ham, arugula, Parmigiano",
    build: "Bianca base (no tomato) with Fior di Latte and ricotta dollops baked in, then Jamón de Cebo Ibérico, rocket, Parmigiano and EVOO post-bake.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style dough (00 flour, well-fermented, elastic)", "250–270 g dough ball", "Stretch to 28–33 cm", "Light, airy cornicione", "Do not degas edge gas"] },
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
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "⏱ 60–75 seconds"] },
        { intro: "Goal:", bullets: ["Full bake of dough", "Full melt of Fior di Latte in-oven", "Light blistering on cornicione", "Slight browning on exposed cheese edges"] },
        { intro: "Critical rule:", bullets: ["No second oven entry — everything must finish in one bake"] },
      ] },
      { title: "5. Post-Bake Ibérico Ham Layer", sections: [
        { bullets: ["Jamón de Cebo Ibérico (Iberico ham)", "Paper-thin slices", "Draped loosely over hot mozzarella"] },
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
        { bullets: ["Extra virgin olive oil (Campania-style preferred)", "Final light drizzle only"] },
        { intro: "Effect:", bullets: ["Aromatic finish", "Softens salt edges", "Adds shine and perfume"] },
      ] },
    ],
  },
  {
    id: "prosciutto-e-funghi",
    number: 9,
    name: "Prosciutto e Funghi",
    style: "Classic Neapolitan — Ham & Mushroom",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAP5MdbljTAVL7meY_XhtUQ1HIdHrEIdsxxZk_dqVevQ&s=10",
    toppings: "San Marzano tomato sauce (Agro Sarnese-Nocerino DOP), house-made Fior di Latte mozzarella, sliced prosciutto cotto (cooked ham), Champignon mushrooms, Parmigiano Reggiano DOP aged 24 months, fresh basil, extra virgin olive oil from the Sorrento Peninsula.",
    menuIngredients: "Tomato, mozzarella, cooked ham, Champignon mushrooms, Parmigiano Reggiano, basil, olive oil",
    build: "A comforting, familiar classic built on San Marzano tomatoes from the Agro Sarnese-Nocerino DOP and our own house-made Fior di Latte. Sliced prosciutto cotto and Champignon mushrooms bake right into the pizza, then it's finished with shavings of Parmigiano Reggiano DOP aged 24 months, fresh basil and a drizzle of extra virgin olive oil from the Sorrento Peninsula.",
    postBake: "Finish with shaved Parmigiano Reggiano DOP, fresh basil leaves and a drizzle of Sorrento Peninsula extra virgin olive oil.",
    steps: [
      { title: "1. Dough", sections: [{ bullets: ["250–280 g dough ball", "Stretch to 30–32 cm", "Preserve a light, airy cornicione"] }] },
      { title: "2. Tomato Base", sections: [{ bullets: ["70–80 g San Marzano tomato sauce (Agro Sarnese-Nocerino DOP)", "Spread in a thin, even layer", "Leave a clean 1.5–2 cm border"] }] },
      { title: "3. Mozzarella, Ham & Mushroom", sections: [{ bullets: ["90–100 g house-made Fior di Latte, torn into pieces", "50–60 g prosciutto cotto (cooked ham), thinly sliced", "40–50 g Champignon mushrooms, thinly sliced"] }] },
      { title: "4. Bake", sections: [{ bullets: ["🪨 Stone: 400–430°C", "⏱ Cook time: 70–90 seconds", "🔄 Rotate every 15–20 seconds"] }] },
      { title: "5. Finish", sections: [{ bullets: ["Shave Parmigiano Reggiano DOP (24 months) over the hot pizza", "Scatter fresh basil leaves", "Finish with a drizzle of extra virgin olive oil from the Sorrento Peninsula"] }] },
    ],
  },
  {
    id: "capricciosa",
    number: 10,
    name: "Capricciosa",
    style: "Neapolitan Big Four — Ham, Mushroom, Artichoke & Olive",
    category: "classic",
    image: "https://positano.lv/wp-content/uploads/2021/12/Capricciosa-1.png",
    toppings: "San Marzano tomato sauce (Agro Sarnese-Nocerino DOP), Fior di Latte mozzarella, prosciutto cotto (cooked ham), Salame di Mugnano del Cardinale (garlic-and-pepper cured salami), Funghi Champignon, Carciofini Mammarelle artichoke hearts, Parmigiano-Reggiano DOP aged 24 months, fresh basil, extra virgin olive oil from the Sorrento Peninsula.",
    menuIngredients: "Tomato, mozzarella, cooked ham, salami, mushroom, artichoke, Parmigiano, basil",
    build: "One of Naples' 'Big Four' classics alongside Margherita, Marinara and Diavola. Prosciutto cotto, spicy Salame di Mugnano del Cardinale, Funghi Champignon and quartered Carciofini Mammarelle are scattered together over Fior di Latte and dusted with aged Parmigiano-Reggiano, then finished with fresh basil and a spiral of Sorrento Peninsula extra virgin olive oil.",
    postBake: "Finish with fresh basil and a light final drizzle of raw Penisola Sorrentina EVOO straight out of the oven.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["80g Pomodoro San Marzano dell'Agro Sarnese-Nocerino DOP (crushed tomatoes with 1g fine salt per 100g)", "70g–80g Fior di Latte (cubed/sliced and thoroughly drained)", "40g Prosciutto Cotto (high-grade cooked ham, torn into bite-sized pieces)", "30g Salame di Mugnano del Cardinale (traditional Neapolitan garlic-and-pepper cured salami, thinly sliced)", "30g Funghi Champignon (fresh button mushrooms, thinly sliced)", "35g Carciofini Mammarelle (Roman/Neapolitan artichoke hearts in oil, thoroughly drained and quartered)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated)", "4–5 Fresh Basil Leaves", "Olio Extravergine della Penisola Sorrentina DOP (spiral drizzle)"] },
      ] },
      { title: "2. Moisture Control (Essential Step)", sections: [
        { intro: "Fior di Latte:", bullets: ["Drain in a sieve for at least 1–2 hours"] },
        { intro: "Artichokes (Carciofini):", bullets: ["Gently press the artichoke quarters between paper towels to remove excess oil/brine so they crisp up rather than boil on the pizza"] },
        { intro: "Mushrooms:", bullets: ["Slice thinly so they roast fast under high heat"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough disc on semolina rimacinata, leaving an airy 1.5–2 cm cornicione"] },
      ] },
      { title: "4. Assemble", sections: [
        { bullets: ["Spread the San Marzano tomato sauce evenly outward in a quick spiral", "Dust with Parmigiano-Reggiano DOP 24 mesi", "Scatter the drained Fior di Latte across the base", "Distribute the Funghi Champignon, Prosciutto Cotto, Salame di Mugnano del Cardinale, and quartered Carciofini Mammarelle evenly over the cheese", "Add fresh basil leaves and a light spiral of Olio Extravergine della Penisola Sorrentina DOP"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Gozney (450°C–480°C):", bullets: ["Lower the flame slightly right before launching to allow the stone heat to cook through the heavier topping load without burning the top", "Bake for 60–90 seconds, rotating every 15–20 seconds until the crust is puffed and leopard-spotted, the salami edges curl, and the artichokes are slightly charred"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Finish with fresh basil and a light final drizzle of raw Penisola Sorrentina EVOO out of the oven"] },
      ] },
    ],
  },
  {
    id: "quattro-formaggi",
    number: 11,
    name: "Quattro Formaggi",
    style: "Classic Neapolitan — Pizza Bianca",
    category: "classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQib4tBZbanA4_Cd1takByQB8S_KSC4VKJpP0-Tey91vQ&s=10",
    toppings: "Fior di Latte mozzarella, ricotta, Gorgonzola DOP, Parmigiano-Reggiano, extra virgin olive oil, optional fresh basil.",
    menuIngredients: "Mozzarella, ricotta, gorgonzola, Parmigiano",
    build: "The classic Neapolitan Quattro Formaggi is a white pizza (pizza bianca) engineered to balance four distinct cheese profiles: a structural melting base (Fior di Latte), a creamy mild accent (Ricotta), a sharp salty kick (Parmigiano-Reggiano), and a rich, spicy bite (Gorgonzola).",
    postBake: "Finish with a fresh basil leaf and a tiny extra drizzle of raw extra virgin olive oil if desired.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["60g–70g Fior di Latte Mozzarella (cubed or cut into strips)", "40g Ricotta Cheese (fresh cow's milk ricotta)", "30g Gorgonzola DOP (preferably Dolce for smooth melting, or Piccante for a sharper blue punch)", "20g Parmigiano-Reggiano (freshly, finely grated)", "Extra Virgin Olive Oil", "Fresh Basil leaves (optional)"] },
      ] },
      { title: "2. Prep the Fior di Latte & Ricotta", sections: [
        { bullets: ["Cut the Fior di Latte into strips or cubes and drain for at least 30–60 minutes in a sieve", "Whisk or loosen the ricotta in a small bowl with a tiny splash of olive oil or water so it's smooth and easy to dollop"] },
      ] },
      { title: "3. Stretch the Base", sections: [
        { bullets: ["Stretch your dough ball on semolina", "Leave a generous cornicione"] },
      ] },
      { title: "4. Layer the Cheeses", sections: [
        { intro: "Base Layer:", bullets: ["Dust the stretched dough directly with the finely grated Parmigiano-Reggiano", "Placing the hard cheese directly on the dough creates an aromatic, toasted crust layer"] },
        { intro: "Melt Layer:", bullets: ["Distribute the Fior di Latte evenly over the base"] },
        { intro: "Accent Layer:", bullets: ["Drop small, spaced-out dollops of Ricotta and crumbled nuggets of Gorgonzola across the top using two spoons", "Keeping Gorgonzola in isolated clusters prevents its bold flavor from overpowering every single bite"] },
      ] },
      { title: "5. Oil & Bake", sections: [
        { bullets: ["Swirl extra virgin olive oil over the top before baking"] },
        { intro: "Pizza Oven (450°C–500°C / 850°F+):", bullets: ["Bake for 60–90 seconds", "Watch closely: cheese-only pizzas burn slightly faster than tomato-sauced bases"] },
        { intro: "Home Oven with Steel/Stone:", bullets: ["Bake near the top heating element for 5–7 minutes until the cheeses are bubbling and the crust is deeply golden"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Finish with a fresh basil leaf and a tiny extra drizzle of raw extra virgin olive oil if desired"] },
      ] },
    ],
  },
  {
    id: "ortolana",
    number: 12,
    name: "Ortolana",
    style: "Gourmet Neapolitan — Presìdi Slow Food Campania Vegetables",
    category: "classic",
    image: "/pizzas/ortolana.png",
    toppings: "Pacchetelle di San Marzano Kiros (whole tomato fillets), Fior di Latte, pre-grilled Melanzane, pre-grilled Zucchine San Pasquale, roasted Pappacella Napoletana peppers (Presìdi Slow Food), Carciofini Mammarelle, Parmigiano-Reggiano DOP 24 mesi, fresh basil, extra virgin olive oil (Colline Salernitane DOP).",
    menuIngredients: "Pacchetelle tomato, Fior di Latte, grilled eggplant & zucchini, roasted Pappacella peppers, artichokes, Parmigiano",
    build: "This traditional Gourmet Neapolitan Ortolana features regional, Presìdi Slow Food Campania produce. Using Pacchetelle (whole plum tomato fillets preserved in glass jars) instead of blended sauce gives juicy bursts of sweet tomato that complement the charred, roasted vegetables.",
    postBake: "Top with a final touch of raw Colline Salernitane EVOO right out of the oven.",
    steps: [
      { title: "1. The Topping Build (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["60g Pacchetelle di San Marzano Kiros (hand-crushed tomato fillets, lightly drained)", "65g–70g Fior di Latte (cubed and thoroughly drained)", "25g Melanzane (sliced thin and pre-grilled)", "25g Zucchine San Pasquale (sliced into rounds or ribbons and light-grilled)", "25g Pappacella Napoletana Presìdi Slow Food (sweet/spicy heirloom peppers, roasted, peeled, and sliced into strips)", "30g Carciofini Mammarelle (quartered Roman/Neapolitan artichoke hearts in oil, well-drained)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated)", "4–5 Fresh Basil Leaves", "Olio Extravergine delle Colline Salernitane DOP (generous spiral)"] },
      ] },
      { title: "2. Vegetable Moisture Control", sections: [
        { intro: "Pacchetelle:", bullets: ["Gently spoon out the tomato fillets and crush them lightly by hand", "Let them sit in a strainer briefly so excess juice drains off"] },
        { intro: "Melanzane & Zucchine San Pasquale:", bullets: ["Slice 4–5mm thin", "Grill quickly on a hot skillet until charred marks appear"] },
        { intro: "Pappacella Peppers & Carciofini:", bullets: ["Press gently between paper towels to remove excess brine or oil"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough ball on semolina rimacinata, preserving an airy, pronounced cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Distribute the hand-crushed Pacchetelle tomatoes across the base in scattered clusters rather than a continuous flat layer", "Dust evenly with Parmigiano-Reggiano DOP 24 mesi", "Scatter the drained Fior di Latte across the base", "Arrange the pre-grilled zucchini, eggplant, roasted Pappacella strips, and quartered Carciofini Mammarelle over the cheese", "Add fresh basil leaves and a spiral of Olio Extravergine delle Colline Salernitane DOP"] },
      ] },
      { title: "5. Bake (Gozney at 450°C–480°C)", sections: [
        { bullets: ["Launch and bake for 60–90 seconds, turning every 15–20 seconds", "The high ambient flame caramelizes the sweet Pappacella peppers and artichokes while melting the Fior di Latte into the tomato fillets"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Top with a final touch of raw Colline Salernitane EVOO right out of the oven"] },
      ] },
    ],
  },
  {
    id: "ripieno-calzone",
    number: 13,
    name: "Ripieno (Calzone)",
    style: "Folded Neapolitan Calzone — Ricotta, Fior di Latte & Salame",
    category: "calzone-focaccia",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/11/91/05/29/calzone-al-forno-ripieno.jpg",
    toppings: "Interior: fresh ricotta, Fior di Latte mozzarella, Salame di Mugnano del Cardinale, coarsely ground black pepper. Exterior: San Marzano tomato sauce (Agro Sarnese-Nocerino DOP), Parmigiano-Reggiano DOP aged 24 months, extra virgin olive oil (Colline Salernitane DOP), fresh basil.",
    menuIngredients: "Ricotta, mozzarella, salami, tomato, Parmigiano, basil",
    build: "A folded calzone built around a creamy ricotta and Fior di Latte filling studded with diced Salame di Mugnano del Cardinale and cracked black pepper. The dough is stretched thin and even (no built-up cornicione, since the whole edge is folded and sealed), filled on one half, folded into a crescent and crimped tight. The exterior is finished with crushed San Marzano tomato and grated Parmigiano-Reggiano before baking, then a fresh basil leaf and a final touch of raw EVOO right out of the oven.",
    postBake: "Finish with a fresh basil leaf and a final touch of raw Colline Salernitane EVOO right out of the oven.",
    steps: [
      { title: "1. Interior Filling & Exterior Topping (Per 250g–280g Dough Ball)", sections: [
        { intro: "The Interior Filling:", bullets: ["60g Fresh Ricotta (whisked until creamy)", "60g Fior di Latte (cubed and thoroughly drained)", "40g Salame di Mugnano del Cardinale (diced into small cubes or thin strips)", "1/2 tsp Coarsely Ground Black Pepper (Pepe nero)"] },
        { intro: "The Exterior Topping:", bullets: ["50g–60g Pomodoro San Marzano dell'Agro Sarnese-Nocerino DOP (crushed)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated)", "Olio Extravergine delle Colline Salernitane DOP", "Fresh Basil leaves"] },
      ] },
      { title: "2. Prep the Ricotta Cream", sections: [
        { bullets: ["In a bowl, whisk the fresh ricotta with a pinch of salt and the freshly cracked black pepper until smooth"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough disc on semolina into a flat 11–12 inch round", "Keep the thickness even — do not build a large cornicione since the entire edge will be folded and sealed"] },
      ] },
      { title: "4. Fill One Half (Bottom Crescent)", sections: [
        { bullets: ["Spread the creamed ricotta smoothly over one half of the dough disc, leaving a 2 cm clean border around the edge", "Scatter the drained Fior di Latte and diced Salame di Mugnano del Cardinale evenly over the ricotta"] },
      ] },
      { title: "5. Fold & Seal", sections: [
        { bullets: ["Fold the empty half of the dough over the filled half to form a crescent shape", "Press and crimp the border firmly to seal, preventing the filling from leaking during the bake"] },
      ] },
      { title: "6. Exterior Topping", sections: [
        { bullets: ["Spread the crushed San Marzano tomato sauce over the top of the sealed calzone", "Dust with finely grated Parmigiano-Reggiano DOP 24 mesi", "Add a light drizzle of Olio Extravergine delle Colline Salernitane DOP"] },
      ] },
      { title: "7. Bake", sections: [
        { intro: "Gozney (400°C–450°C):", bullets: ["Bake for 90–120 seconds, rotating every 20–30 seconds, until the exterior is deeply golden and blistered and the interior filling is fully melted"] },
      ] },
      { title: "8. Finish", sections: [
        { bullets: ["Finish with a fresh basil leaf and a final touch of raw EVOO right out of the oven"] },
      ] },
    ],
  },
  {
    id: "double-pepperoni-hot-honey",
    number: 14,
    name: "Double Pepperoni & Hot Honey",
    style: "Modern Crowd-Pleaser",
    category: "innovative",
    image: "https://coolfooddude.com/wp-content/uploads/2020/12/Double-Pepperoni-and-honey-PIzza.jpg",
    toppings: "San Marzano tomato sauce, low-moisture mozzarella, aged provolone, cup-and-char pepperoni, spicy dry-cured salami (piccante salame), Calabrian hot honey, fermented chili vinegar, flaky sea salt, early-harvest Campanian extra virgin olive oil.",
    menuIngredients: "Tomato, mozzarella, provolone, pepperoni, hot honey",
    build: "Double-layer cup-and-char pepperoni over a mozzarella/provolone blend, finished post-bake with chili-infused honey and a whisper of acid lift.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style dough with 24–48 hour fermentation", "250–270 g dough ball", "63–65% hydration", "Hand-stretched to 30–32 cm", "Well-developed but extensible gluten network", "Preserve rim gas during opening"] },
        { intro: "Key idea:", bullets: ["Dough must support a high-fat topping load while retaining the lightness of modern Neapolitan pizza", "Slightly stronger structure than a Margherita dough"] },
      ] },
      { title: "2. Tomato Base", sections: [
        { bullets: ["San Marzano tomatoes, lightly crushed by hand", "55–65 g per pizza", "Thin, even application", "1.5–2 cm clean border", "Fine sea salt only"] },
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
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "⏱ 70–80 seconds", "🔄 Rotate every 15–20 seconds"] },
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
        { intro: "Optional EVOO:", bullets: ["Early-harvest peppery extra virgin olive oil", "Micro-dots only"] },
        { intro: "Effect:", bullets: ["Enhances aroma", "Extends finish", "Sharpens contrast against honey sweetness"] },
      ] },
    ],
  },
  {
    id: "chorizo",
    number: 15,
    name: "Chorizo",
    style: "Inspired by Franco Manca UK",
    category: "innovative",
    image: "https://image.eatencdn.com/image/1f55d2e1-e560-4a16-94a0-dcc00041e6cb/small/image.jpg",
    toppings: "San Marzano tomatoes, standard mozzarella strips, dry and semi-dry cured Iberico chorizo, blue cheese (Stilton or Gorgonzola).",
    menuIngredients: "Tomato, mozzarella, chorizo, blue cheese",
    build: "Sourdough base, tomato + Fior di Latte, light chorizo and Gorgonzola, finished with peppery EVOO.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style sourdough (Franco Manca-inspired)", "250–270 g dough ball", "Stretch to 28–32 cm", "Light, airy cornicione", "Do not degas edge gas"] },
        { intro: "Key idea:", bullets: ["Sourdough acidity + high heat structure to support fat-rich toppings"] },
      ] },
      { title: "2. Tomato Base", sections: [
        { bullets: ["San Marzano tomatoes, lightly crushed", "~60–70 g", "Thin, even spread", "1–2 cm clean border", "Light pinch of sea salt"] },
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
      { title: "5. Gorgonzola", sections: [
        { bullets: ["Gorgonzola Dolce (preferred)", "Small, spaced crumbles"] },
        { intro: "Effect:", bullets: ["Creamy blue pockets that melt into background richness"] },
      ] },
      { title: "6. Bake", sections: [
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "⏱ 60–75 seconds", "🔄 Rotate every 15–20 seconds"] },
        { intro: "Goal:", bullets: ["Chorizo lightly crisps and renders", "Mozzarella melts into creamy layer", "Gorgonzola softens into pockets", "Crust blisters and stays structured"] },
      ] },
      { title: "7. Finish (Chef Olive Oil Standard)", sections: [
        { bullets: ["Cold-extracted extra virgin olive oil (Campania preferred)", "Early-harvest, peppery, slightly bitter profile", "Applied post-bake in a very light spiral or micro dots"] },
        { intro: "Effect:", bullets: ["Sharp peppery finish that cuts through fat and enhances acidity"] },
      ] },
    ],
  },
  {
    id: "bufala-e-iberico",
    number: 16,
    name: "Bufala e Iberico",
    style: "50 Kalò — Signature Pizza Bianca",
    category: "innovative",
    image: "https://www.fllifiorentinoblog.it/wp-content/uploads/2022/11/316661686_3326119354306765_8744321983837170150_n.jpg",
    toppings: "Mozzarella di Bufala Campana DOP, thin-sliced Jamón Ibérico, extra virgin olive oil, fresh basil. Zero tomato sauce.",
    menuIngredients: "Mozzarella di bufala, Jamón Ibérico, basil, olive oil",
    build: "A signature white pizza (pizza bianca) from Ciro Salvo's 50 Kalò. Relies entirely on high-quality ingredients: Mozzarella di Bufala Campana DOP baked into the base, then finished post-bake with delicate Jamón Ibérico, EVOO and fresh basil.",
    steps: [
      { title: "1. Toppings & Assembly (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["100 g Mozzarella di Bufala Campana DOP", "50–60 g Jamón Ibérico, thinly sliced", "Extra Virgin Olive Oil (preferably DOP Colline Salernitane)", "Fresh basil leaves"] },
      ] },
      { title: "2. Prep the Mozzarella di Bufala", sections: [
        { bullets: ["Slice or tear the buffalo mozzarella 1 to 2 hours beforehand", "Place it in a colander in the fridge to drain excess liquid"] },
        { intro: "Why:", bullets: ["So it won't make your white pizza base soggy"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch a ~260 g dough ball using semolina on your work surface", "Form a 12-inch disc", "Leave a raised cornicione (outer crust)"] },
      ] },
      { title: "4. Assemble the White Base", sections: [
        { bullets: ["Distribute the drained Mozzarella di Bufala evenly across the base", "Add a light drizzle of extra virgin olive oil", "Add a couple of fresh basil leaves"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "High-heat pizza oven (450°C–500°C / 850°F+):", bullets: ["Bake for 60–90 seconds until the crust is leopard-spotted and the mozzarella is melted"] },
        { intro: "Home oven with pizza steel/stone (max temp ~275°C / 530°F):", bullets: ["Pre-bake the dough base with just the mozzarella and a light drizzle of oil for 5–7 minutes until cooked through and golden"] },
      ] },
      { title: "6. Post-Bake Finishing", sections: [
        { bullets: ["Immediately upon taking the pizza out, drape the delicate slices of Jamón Ibérico over the warm melted mozzarella so the fat gently renders from the heat of the crust", "Finish with a fresh leaf of basil and a final swirl of raw Extra Virgin Olive Oil"] },
      ] },
    ],
  },
  {
    id: "tettoia-four-cheese-truffle",
    number: 17,
    name: "Tettoia — Four Cheese & Truffle",
    style: "Classic — Gourmet White Pizza",
    category: "innovative",
    image: "https://rs-menus-api.roocdn.com/images/2018fd22-bd00-4726-bae8-5c9cc89ce052/image.jpeg",
    toppings: "Fior di Latte mozzarella, Gorgonzola DOP, Parmigiano-Reggiano, Bufala DOP, truffle croutons, truffle oil, chilli flakes.",
    menuIngredients: "Mozzarella, gorgonzola, Parmigiano, bufala, truffle",
    build: "No tomato, no extra salt, no olive oil before baking. Layer cheeses in specific order, bake, then finish with truffle croutons, truffle oil and chilli post-bake.",
    steps: [
      { title: "1. Prep the Cheeses", sections: [
        { intro: "Fiordilatte — 65 g:", bullets: ["Tear into small pieces", "Put on kitchen paper for 30–60 min"] },
        { intro: "Bufala — 45 g:", bullets: ["Drain extremely well", "Tear into small pieces", "Give at least 1 hour draining time"] },
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
        { bullets: ["Take dough out of the fridge and let it warm up according to your normal dough process", "Stretch to about 31–32 cm", "Leave a nice 1.5–2 cm rim"] },
        { intro: "Important:", bullets: ["Since you're using a Gozney, don't make the centre paper-thin"] },
      ] },
      { title: "4. Build the Pizza", sections: [
        { intro: "Distribute in this order:", bullets: ["65 g Fiordilatte", "30 g Gorgonzola", "45 g Bufala", "15 g Parmigiano"] },
        { intro: "Placement tip:", bullets: ["Put the Gorgonzola and Bufala in relatively small, separated pieces rather than creating four distinct sections", "You want every bite to get some combination of the cheeses"] },
      ] },
      { title: "5. Gozney Cooking", sections: [
        { bullets: ["🪨 Stone: 400–420°C (slightly lower than classic Neapolitan because of Gorgonzola and Parmesan)", "⏱ Cook time: 90–120 seconds", "🔄 Rotate every 20–30 seconds"] },
        { intro: "You want:", bullets: ["Inflated leopard-spotted crust", "Melted/bubbling cheeses", "Gorgonzola just melted", "Parmesan lightly browned", "No burnt Parmesan"] },
        { intro: "If your Gozney is running at 450°C+:", bullets: ["Let it cool slightly OR", "Cook with the flame reduced"] },
      ] },
      { title: "6. Finish Outside the Oven", sections: [
        { intro: "As soon as it comes out:", bullets: ["① Truffle croutons — Scatter 20–25 g over the pizza", "② Truffle oil — Drizzle approximately 1 tsp (don't go crazy, good truffle oil is extremely powerful)", "③ Chilli — Add a small pinch of chilli flakes"] },
      ] },
      { title: "7. What You're Aiming For", sections: [
        { intro: "The finished pizza should have:", bullets: ["Crispy, airy crust", "Creamy fiordilatte", "Sharp/funky Gorgonzola", "Sweet, rich bufala", "Salty umami Parmesan", "Crunchy truffle bread", "Truffle aroma", "Tiny chilli kick"] },
        { intro: "Adjustments after first attempt:", bullets: ["If Gorgonzola dominates: drop to 25 g and increase Fiordilatte to 70 g", "If pizza tastes too mild: keep 30 g Gorgonzola and increase Parmesan to 20 g"] },
      ] },
    ],
    videoGuide: "Achieving the Perfect Golden Crunch on Croutons",
  },
  {
    id: "cacio-e-pepe",
    number: 18,
    name: "Cacio e Pepe",
    style: "Stefano Callegari — Ice-Cube & Post-Bake Pecorino Emulsion",
    category: "innovative",
    image: "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2018/07/02/bb7c436164c0454fb27f55eadbcb9cde_Cacio_e_Pepe_SimoPizza__Credit+Francesco+Sapienza.jpg",
    toppings: "Finely grated Pecorino Romano DOP, coarsely toasted and cracked whole black peppercorns, extra virgin olive oil, ice cubes (melted into the bake to create the emulsion).",
    menuIngredients: "Pecorino Romano, cracked black pepper, olive oil",
    build: "In a 450°C+ oven, raw Pecorino Romano burns instantly — so Stefano Callegari's technique places ice cubes directly on the raw dough before baking, creating a pool of boiling starchy water on the surface. As soon as the pizza is pulled from the oven, finely grated Pecorino is showered over that hot puddle: the residual heat instantly binds the cheese fat and protein with the starchy water, forming the exact creamy emulsion (cremina) of traditional Cacio e Pepe pasta.",
    postBake: "Immediately shower the entire hot center with the finely grated Pecorino Romano and swirl it into the boiling pool of melted ice water with a spoon or spatula until velvety, then finish with a heavy dusting of toasted cracked black pepper and a final swirl of extra virgin olive oil.",
    videoGuide: "Stefano Callegari's Ice-Cube Cacio e Pepe Technique",
    steps: [
      { title: "1. Ingredients (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["4–6 Ice Cubes (standard ice tray size)", "60g–70g Pecorino Romano DOP (extremely finely grated using a Microplane)", "2 tsp Whole Black Peppercorns (coarsely toasted and cracked)", "Extra Virgin Olive Oil"] },
      ] },
      { title: "2. Prep the Dough & Pepper", sections: [
        { bullets: ["Stretch your dough ball on semolina rimacinata, keeping a defined cornicione"] },
        { intro: "Toast the pepper:", bullets: ["Toast whole black peppercorns in a dry pan until fragrant", "Crush coarsely with a mortar and pestle or heavy pan"] },
      ] },
      { title: "3. Add the Ice & Bake", sections: [
        { bullets: ["Place 4–6 ice cubes directly in the center of the raw stretched dough", "Sprinkle a small pinch of cracked pepper around the dough", "Drizzle a touch of extra virgin olive oil"] },
        { intro: "Bake:", bullets: ["Launch into your Gozney / pizza oven at 450°C–480°C", "As it bakes, the ice melts rapidly and boils into a hot puddle of starchy water on the crust while keeping the center flat and hydrated"] },
      ] },
      { title: "4. The Creamy Finish (Post-Bake Emulsion)", sections: [
        { bullets: ["As soon as the crust is puffed and leopard-spotted (around 60–90 seconds), pull the pizza out", "Immediately shower the entire hot center with the 60g–70g of finely grated Pecorino Romano"] },
        { intro: "Why it works:", bullets: ["The starchy, hot water instantly binds with the cheese fat and protein, forming the exact creamy emulsion (cremina) of traditional Cacio e Pepe pasta"] },
        { intro: "Finish:", bullets: ["Using a spoon or spatula, quickly swirl the cheese into the boiling pool of melted ice water", "Finish with a heavy dusting of toasted cracked black pepper and a final swirl of extra virgin olive oil"] },
      ] },
    ],
  },
  {
    id: "carbonara",
    number: 19,
    name: "Carbonara",
    style: "Pecorino, Crispy Pork & Egg Yolk Drizzle",
    category: "innovative",
    image: "https://www.vincenzosplate.com/wp-content/uploads/2022/10/1500x1500-Photo-4_1951-How-to-Make-CARBONARA-PIZZA-Like-an-Italian-V1.jpg",
    toppings: "Crispy pre-rendered pancetta or guanciale, Pecorino Romano DOP (baked in and post-bake), coarsely cracked black pepper, extra virgin olive oil, post-bake egg yolk drizzle.",
    menuIngredients: "Pecorino Romano, crispy guanciale, egg yolk, black pepper",
    build: "A pizza translation of pasta carbonara. A bare dough disc is showered with Pecorino Romano and crispy pre-rendered pancetta or guanciale, then baked until the cheese melts into the rendered pork fat. As soon as it leaves the oven, a smooth whisked egg yolk is drizzled across the piping-hot crust — the residual heat instantly warms and sets it into a silky, glossy cream — before a final shower of Pecorino and cracked black pepper.",
    postBake: "Drizzle the whisked egg yolk in a zigzag or spiral across the piping-hot pizza so the crust's heat sets it into a silky, glossy cream, then shower with the remaining Pecorino Romano and a final heavy dusting of coarsely cracked black pepper.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { intro: "Pre-Bake (The Base):", bullets: ["60g–70g Pancetta or Guanciale (diced into lardons and pre-rendered in a pan until crispy)", "25g Pecorino Romano DOP (finely grated)", "Coarsely cracked black pepper", "Extra Virgin Olive Oil (light swirl)"] },
        { intro: "Post-Bake (The Drizzle & Finish):", bullets: ["2 Fresh Egg Yolks (whisked smoothly with 1 tbsp warm water or a drop of olive oil so it drizzles easily)", "20g Pecorino Romano DOP (for the final shower)", "Extra cracked black pepper"] },
      ] },
      { title: "2. Pre-Cook the Pork", sections: [
        { bullets: ["Fry the pancetta/guanciale in a dry pan over medium heat for 3–5 minutes until crisp and golden", "Drain on paper towels"] },
      ] },
      { title: "3. Prep the Yolk Drizzle", sections: [
        { bullets: ["In a small bowl or squeeze bottle, whisk the 2 egg yolks with 1 tbsp warm water and a tiny drop of olive oil until fluid and smooth enough to drizzle", "Keep at room temperature"] },
      ] },
      { title: "4. Stretch & Assemble Base", sections: [
        { bullets: ["Stretch your dough disc on semolina, keeping a pronounced cornicione", "Shower the bare dough directly with 25g of finely grated Pecorino Romano", "Scatter the crispy pre-cooked pancetta evenly across the Pecorino", "Add a pinch of cracked black pepper and a very light drizzle of olive oil"] },
      ] },
      { title: "5. Bake in the Gozney (60–90 Seconds)", sections: [
        { bullets: ["Launch into your Gozney at 450°C–480°C", "Bake until the crust is puffed and leopard-spotted and the Pecorino has melted into the rendered pork fat on the dough"] },
      ] },
      { title: "6. Post-Bake Finishing", sections: [
        { bullets: ["Pull the pizza out of the oven", "Drizzle the whisked egg yolk in a zigzag or spiral across the piping-hot pizza — the heat of the crust instantly warms and sets the yolk into a silky, glossy cream", "Shower with the remaining 20g fresh Pecorino Romano and a final heavy dusting of coarsely cracked black pepper"] },
      ] },
    ],
  },
  {
    id: "amatriciana",
    number: 20,
    name: "Amatriciana",
    style: "Roman Pasta-Inspired — Guanciale, Tomato & Pecorino",
    category: "innovative",
    image: "https://doublethespoonfuls.com/wp-content/uploads/2023/07/amatriciana-pizza-finished.jpg",
    toppings: "San Marzano tomato sauce (infused with rendered guanciale fat), Fior di Latte mozzarella, crispy pre-rendered guanciale, Pecorino Romano DOP, dried red chili flakes, extra virgin olive oil, optional fresh basil.",
    menuIngredients: "Tomato, mozzarella, guanciale, Pecorino Romano, chili",
    build: "Pizza all'Amatriciana translates Amatrice's iconic pasta sauce onto a high-heat Neapolitan base. The magic lies in the contrast between sweet San Marzano tomato sauce, rich rendered guanciale (cured pork cheek), sharp Pecorino Romano DOP, and a hint of fresh chili heat. Because raw guanciale releases a lot of fat at high oven temperatures, pre-rendering the pork is crucial to avoid a soggy center.",
    postBake: "Immediately shower the remaining Pecorino Romano DOP over the piping-hot tomato sauce so it melts into a silky coating. Scatter the reserved crispy guanciale over the top for maximum crunch, add fresh basil if desired, and finish with a light swirl of raw EVOO or chili oil.",
    steps: [
      { title: "1. Ingredients & Proportions (Per 250g–280g Dough Ball)", sections: [
        { intro: "For the Crispy Pork:", bullets: ["60g Guanciale (sliced into 5mm strips / lardons) — Pancetta works as a fine substitute if guanciale isn't available"] },
        { intro: "For the Base & Toppings:", bullets: ["80g Pomodoro San Marzano DOP (crushed tomatoes with 1g fine salt per 100g)", "60g Fior di Latte Mozzarella (cubed and thoroughly drained)", "25g Pecorino Romano DOP (finely grated)", "1/2 tsp Dried Red Chili Flakes (Peperoncino, or a splash of chili oil)", "Extra Virgin Olive Oil", "Fresh Basil leaves (optional)"] },
      ] },
      { title: "2. Pre-Render the Guanciale (Crucial Step)", sections: [
        { bullets: ["Fry the guanciale strips in a dry skillet over medium-low heat for 4–5 minutes until the fat renders out and the edges turn crispy and golden", "Remove the crispy pork and drain on paper towels"] },
        { intro: "The Pro Touch:", bullets: ["Stir 1 tsp of the rendered warm guanciale fat directly into your San Marzano tomato sauce for a rich, authentic flavor profile throughout the base"] },
      ] },
      { title: "3. Prep the Cheese", sections: [
        { bullets: ["Cut your Fior di Latte into strips or cubes and let it drain in a sieve for at least 1–2 hours"] },
      ] },
      { title: "4. Stretch & Assemble", sections: [
        { bullets: ["Stretch your dough disc on semolina rimacinata, leaving an elevated cornicione", "Ladle the San Marzano tomato sauce (infused with the guanciale fat) evenly over the base", "Dust with half of the finely grated Pecorino Romano (about 10g–15g) and the dried chili flakes", "Scatter the drained Fior di Latte across the sauce", "Distribute three-quarters of the pre-cooked crispy guanciale over the top", "Add a very light spiral drizzle of Extra Virgin Olive Oil"] },
      ] },
      { title: "5. Bake in the Gozney (60–90 Seconds)", sections: [
        { bullets: ["Ensure your Gozney floor stone is preheated to 450°C–480°C (840°F–900°F)", "Turn the flame down to medium-high right before launching", "Launch and turn every 15–20 seconds until the crust is puffed with dark leopard spots and the cheese is fully melted and bubbling"] },
      ] },
      { title: "6. Post-Bake Finishing", sections: [
        { bullets: ["Pull the pizza out of the oven", "Immediately shower the remaining 10g–15g of fresh Pecorino Romano DOP over the piping-hot tomato sauce so it melts into a silky coating", "Scatter the reserved crispy guanciale over the top for maximum crunch, add fresh basil if desired, and finish with a light swirl of raw EVOO or chili oil"] },
      ] },
    ],
  },
  {
    id: "gricia",
    number: 21,
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
    id: "nduja-honey",
    number: 22,
    name: "'Nduja & Hot Honey",
    style: "Calabrian Spice Meets Sweet Heat",
    category: "innovative",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QIDb-C5YJ62kzmEGA9VLPE-dkJbayXDcvR90G2p1PjLMsJr48qWq6no&s=10",
    toppings: "San Marzano tomato sauce, Fior di Latte mozzarella, spreadable 'Nduja di Spilinga, fresh red chili flakes, extra virgin olive oil, post-bake hot honey.",
    menuIngredients: "Tomato, mozzarella, 'nduja, hot honey, chili",
    build: "The 'Nduja & Hot Honey Pizza balances the slow-building, smoky heat of Calabrian spicy sausage with sweet, infused honey. Because honey burns instantly under intense, direct heat, the hot honey must be drizzled strictly post-bake, allowing it to warm and loosen over the hot pizza without caramelizing into a bitter crust.",
    postBake: "As soon as you pull the pizza from the oven onto your cutting board, drizzle the hot honey in a fine zigzag or spiral across the entire pie. The residual heat will instantly thin the honey, allowing it to fuse with the rendered 'Nduja oil.",
    steps: [
      { title: "1. Ingredients & Proportions (Per 250g–280g Dough Ball)", sections: [
        { intro: "Pre-Bake:", bullets: ["80g Pomodoro San Marzano DOP (crushed tomatoes with 1g fine salt per 100g)", "70g Fior di Latte (cubed/cut into strips, drained thoroughly)", "35g–40g Spreadable 'Nduja di Spilinga (pinched into hazelnut-sized pieces)", "1/2 tsp Fresh Red Chili Flakes (Peperoncino)", "Extra Virgin Olive Oil (light swirl)"] },
        { intro: "Post-Bake (The Finish):", bullets: ["1.5–2 tbsp Hot Honey (warmed slightly for a smooth, consistent drizzle)"] },
      ] },
      { title: "2. Moisture & 'Nduja Prep", sections: [
        { intro: "Fior di Latte:", bullets: ["Drain in a sieve for at least 1–2 hours to prevent pooling water"] },
        { intro: "'Nduja:", bullets: ["Keep at room temperature so it remains soft", "Roll into small hazelnut-sized dollops with wet fingers", "Small, even pieces allow the spicy pork fat to render and the weeping-oil effect to distribute across the sauce without creating heavy soggy patches"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough disc on semolina rimacinata, preserving an airy, raised cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Ladle the San Marzano tomato sauce into the center and spread outward in a smooth spiral", "Distribute the drained Fior di Latte across the base", "Dot the small pieces of 'Nduja evenly over the cheese and sauce", "Scatter the fresh red chili flakes for an extra layer of sharp heat", "Add a light spiral of Extra Virgin Olive Oil"] },
      ] },
      { title: "5. Bake (Gozney at 450°C–480°C)", sections: [
        { bullets: ["Launch into your Gozney and bake for 60–90 seconds, turning every 15–20 seconds", "Watch as the 'Nduja melts into a glossy orange-red paprika oil that pools gently into the San Marzano sauce and melted mozzarella"] },
      ] },
      { title: "6. Post-Bake Hot Honey Finish", sections: [
        { bullets: ["As soon as you pull the pizza from the oven onto your cutting board, drizzle the hot honey in a fine zigzag or spiral across the entire pie", "The residual heat will instantly thin the honey, allowing it to fuse with the rendered 'Nduja oil"] },
      ] },
    ],
  },
  {
    id: "calabrese",
    number: 23,
    name: "Calabrese",
    style: "Gorgonzola, 'Nduja & Fior di Latte — White Pizza",
    category: "innovative",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/9e/0f/61/nduja-e-gorgonzola.jpg",
    toppings: "Fior di Latte mozzarella, Gorgonzola Dolce DOP, 'Nduja di Spilinga, Parmigiano-Reggiano DOP aged 24 months, fresh basil, Olio Extravergine del Cilento DOP. No tomato.",
    menuIngredients: "Mozzarella, gorgonzola, 'nduja, Parmigiano, basil",
    build: "A white pizza built on the contrast between mild, creamy Gorgonzola Dolce and small dollops of fiery 'Nduja di Spilinga, which render into a glossy red oil during the bake and weep their paprika spice into the pool of melted Fior di Latte.",
    postBake: "Add a tiny final swirl of raw Olio Extravergine del Cilento DOP immediately upon removal from the oven.",
    steps: [
      { title: "1. Ingredients & Proportions (Per 250g–280g Dough Ball)", sections: [
        { bullets: ["60g Fior di Latte (cubed/cut into strips, drained thoroughly)", "40g Gorgonzola Dolce DOP (broken into small dollops)", "35g–40g 'Nduja di Spilinga (rolled into small hazelnut-sized dollops)", "15g Parmigiano-Reggiano DOP 24 mesi (finely grated)", "4–5 Fresh Basil Leaves", "Olio Extravergine del Cilento DOP (spiral drizzle)"] },
      ] },
      { title: "2. Moisture & Temperature Control", sections: [
        { intro: "Fior di Latte:", bullets: ["Drain in a sieve for at least 1–2 hours"] },
        { intro: "'Nduja Prep:", bullets: ["Keep the 'Nduja at room temperature so it is soft", "Pinch off small hazelnut-sized pieces with wet fingers", "Placing small dollops across the pizza ensures it renders quickly into the cheese without creating heavy, dense spots"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough disc on semolina rimacinata, preserving an airy, raised cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Dust the bare dough directly with the Parmigiano-Reggiano DOP 24 mesi", "Distribute the drained Fior di Latte evenly over the base", "Scatter dollops of the Gorgonzola Dolce DOP in between the fior di latte", "Dot the small pieces of 'Nduja di Spilinga evenly across the top", "Add fresh basil leaves and a light spiral of Olio Extravergine del Cilento DOP"] },
      ] },
      { title: "5. Bake (Gozney at 450°C–480°C)", sections: [
        { bullets: ["Launch into your Gozney and bake for 60–90 seconds, rotating every 15–20 seconds", "Watch as the 'Nduja melts into a glossy red oil, weeping its paprika spice into the mild, creamy pool of Gorgonzola and fior di latte"] },
      ] },
      { title: "6. Finish", sections: [
        { bullets: ["Add a tiny final swirl of raw Olio Extravergine del Cilento DOP immediately upon removal from the oven"] },
      ] },
    ],
  },
  {
    id: "pesto-burrata",
    number: 24,
    name: "Pesto & Burrata",
    style: "Traditional Base — Fresh Pesto & Cold Burrata",
    category: "innovative",
    image: "/pizzas/pesto-burrata.jpeg",
    toppings: "Rega San Marzano DOP peeled tomatoes, fine salt, Genovese basil pesto, Fior di Latte mozzarella, burrata, extra-virgin olive oil, optional flaky sea salt.",
    menuIngredients: "Tomato, pesto, mozzarella, burrata, olive oil",
    build: "Rega San Marzano → pesto → Fior di Latte → Gozney → burrata → EVOO. A hand-crushed raw tomato base with spoonfuls of Genovese pesto and light Fior di Latte, baked hot, then finished post-bake with torn cool, creamy burrata and a generous drizzle of good EVOO.",
    postBake: "Serve immediately.",
    videoGuide: "Fresh Pesto Base & Post-Bake Burrata",
    steps: [
      { title: "1. Prepare the Rega Tomato", sections: [
        { bullets: ["60–70 g Rega San Marzano DOP peeled tomatoes in a bowl", "Crush gently by hand into a rustic sauce with some small pieces remaining", "Add just a small pinch of fine salt", "Don't cook the tomatoes", "If particularly watery, leave some liquid behind rather than putting it all on the pizza"] },
      ] },
      { title: "2. Prepare the Pizza", sections: [
        { bullets: ["Stretch the dough to around 30–32 cm", "Spread the 60–70 g Rega tomato evenly over the centre, leaving the rim clear"] },
        { intro: "Add:", bullets: ["35–40 g pesto, in small spoonfuls", "50 g Fior di Latte, distributed fairly lightly", "A very small drizzle of EVOO to finish"] },
        { intro: "Note:", bullets: ["Don't overload it — the burrata added afterwards provides a lot of richness"] },
      ] },
      { title: "3. Bake in the Gozney", sections: [
        { bullets: ["Get the oven properly hot, around 430–450°C at the stone/floor", "Launch the pizza and immediately turn the flame down slightly if necessary", "Bake for approximately 60–90 seconds", "Rotate the pizza every 15–20 seconds"] },
        { intro: "You're looking for:", bullets: ["Well-risen, leopard-spotted crust", "Melted Fior di Latte", "Tomato bubbling", "Pesto still relatively fresh rather than burnt"] },
      ] },
      { title: "4. Add the Burrata", sections: [
        { intro: "Important:", bullets: ["Do NOT bake the burrata"] },
        { bullets: ["Take the pizza out and immediately tear the 80–100 g burrata into several pieces", "Distribute it over the hot pizza"] },
        { intro: "Finish with:", bullets: ["A generous drizzle of good EVOO", "Tiny pinch of flaky salt if needed", "Serve immediately"] },
      ] },
      { title: "5. Final Build", sections: [
        { bullets: ["Rega San Marzano → pesto → Fior di Latte → Gozney → burrata → EVOO"] },
        { intro: "Why it works:", bullets: ["The combination of the hot, crisp pizza with cool, creamy burrata is what makes this work particularly well"] },
      ] },
    ],
  },
  {
    id: "mortadella-pistachio",
    number: 25,
    name: "Mortadella and Pistachio",
    style: "White Pizza — Mortadella, Ricotta & Pistachio",
    category: "innovative",
    image: "https://myhusbandmakespies.com/wp-content/uploads/2025/07/mortadella-ricotta-pizza-ooni-baked.jpg",
    toppings: "Fior di Latte mozzarella, extra virgin olive oil (Olio Caiazzano / Tonda del Matese), Mortadella di Suino Nero Casertano, fresh cow's milk ricotta, granella di pistacchio (Bronte pistachios), fresh basil leaves.",
    menuIngredients: "Mozzarella, mortadella, ricotta, pistachio, basil",
    build: "A hot, crispy white pizza base cooked with Fior di Latte, topped post-bake with cool, ultra-premium Casertano black pig mortadella, fresh creamed ricotta, crunchy pistachios, and intense local Caiazzano extra virgin olive oil.",
    postBake: "Drape the mortadella loosely in ribbon-like folds over the hot melted cheese, pipe or dollop the smooth ricotta between the folds, scatter the pistachio granella generously, then finish with fresh basil leaves and a final swirl of raw Olio Extravergine Caiazzano.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { intro: "Pre-Bake:", bullets: ["70g–80g Fior di Latte Mozzarella (cubed or cut into strips and well-drained)", "Extra Virgin Olive Oil (preferably an intense single-varietal like Olio Caiazzano / Tonda del Matese)"] },
        { intro: "Post-Bake (Finishing Touches):", bullets: ["60g–70g Mortadella di Suino Nero Casertano (thinly sliced, high-grade artisanal mortadella)", "40g Fresh Cow's Milk Ricotta", "15g Granella di Pistacchio (coarsely chopped/crushed Bronte or high-quality pistachios)", "Extra Virgin Olive Oil (for the final raw finish)", "Fresh Basil leaves"] },
      ] },
      { title: "2. Prep the Ricotta", sections: [
        { bullets: ["Whisk the fresh ricotta in a small bowl with a tiny splash of extra virgin olive oil and a pinch of salt until smooth and velvety", "Transfer to a piping bag (or use two spoons to form neat quenelles/dollops)"] },
      ] },
      { title: "3. Drain the Fior di Latte", sections: [
        { bullets: ["Cut the mozzarella into strips 1–2 hours ahead and let it drain thoroughly in a sieve"] },
      ] },
      { title: "4. Stretch & Pre-Bake", sections: [
        { bullets: ["Stretch your dough ball on semolina rimacinata, leaving an airy, raised cornicione", "Lay the drained Fior di Latte evenly across the bare dough disc", "Add a very light drizzle of olive oil"] },
      ] },
      { title: "5. Bake", sections: [
        { intro: "Pizza Oven (450°C–500°C / 850°F+):", bullets: ["Bake for 60–90 seconds until the crust is puffed with dark leopard spots and the fior di latte is completely melted"] },
        { intro: "Home Oven with Steel/Stone:", bullets: ["Bake at maximum temperature for 5–7 minutes until golden and bubbling"] },
      ] },
      { title: "6. Post-Bake Layering (The Pepe in Grani Method)", sections: [
        { bullets: ["As soon as the pizza comes out of the oven, drape the thin slices of Mortadella di Nero Casertano loosely in ribbon-like folds (a rose) over the hot melted cheese", "Pipe or dollop the smooth ricotta directly onto or between the folds of mortadella", "Generously scatter the granella di pistacchio over the top for crucial crunch", "Finish with fresh basil leaves and a final swirl of raw Olio Extravergine Caiazzano"] },
      ] },
    ],
  },
  {
    id: "la-oro-verde",
    number: 26,
    name: "La Oro Verde",
    style: "White Pizza — Mortadella, Stracciatella & Pistachio Pesto",
    category: "innovative",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/a211bd6f00b7a30664e5d05480027f27/Derivates/01948b21d82cfcb00473494c5780e3b3e3d00e52.jpg",
    toppings: "Fior di Latte mozzarella, extra virgin olive oil, thinly sliced artisanal Mortadella, fresh cold Stracciatella di Burrata, Pistachio Pesto (Pesto di Pistacchio), granella di pistacchio, fresh basil leaves.",
    menuIngredients: "Mozzarella, mortadella, stracciatella, pistachio pesto, basil",
    build: "A hot, crispy white pizza base cooked with Fior di Latte, topped post-bake with warm ribbons of artisanal mortadella, cold creamy stracciatella di burrata, generous pistachio pesto, crunchy pistachio granella, and fresh basil.",
    postBake: "Drape the mortadella in loose ribbon-like folds over the hot melted cheese, spoon dollops of cold stracciatella across and between the folds, drizzle generously with pistachio pesto, then finish with crushed granella di pistacchio, fresh basil leaves, and a final light swirl of raw extra virgin olive oil.",
    steps: [
      { title: "1. Toppings & Proportions (Per 250g–280g Dough Ball)", sections: [
        { intro: "Pre-Bake (Base):", bullets: ["60g–70g Fior di Latte Mozzarella (cubed and well-drained)", "Extra Virgin Olive Oil (light drizzle)"] },
        { intro: "Post-Bake (The Fresh Layering):", bullets: ["60g–70g Mortadella (thinly sliced, artisanal)", "60g–70g Stracciatella di Burrata (fresh, cold)", "3–4 tbsp Pistachio Pesto (Pesto di Pistacchio)", "15g Granella di Pistacchio (coarsely crushed pistachios)", "Fresh Basil Leaves", "Extra Virgin Olive Oil"] },
      ] },
      { title: "2. Fire Up the Gozney", sections: [
        { bullets: ["Pre-heat your oven until the stone floor hits 450°C–480°C (840°F–900°F)", "Lower the flame slightly right before launching to protect the top of the crust"] },
      ] },
      { title: "3. Stretch the Dough", sections: [
        { bullets: ["Stretch your dough disc on semolina rimacinata, keeping a soft, elevated cornicione"] },
      ] },
      { title: "4. Pre-Bake Assembly", sections: [
        { bullets: ["Scatter the Fior di Latte evenly across the bare dough", "Add a very light swirl of Extra Virgin Olive Oil"] },
      ] },
      { title: "5. Bake (60–90 Seconds)", sections: [
        { bullets: ["Launch into your Gozney and rotate every 15–20 seconds", "Cook until the base is crisp, the fior di latte is completely melted, and the crust has signature leopard spots"] },
      ] },
      { title: "6. Post-Bake Finishing (Layering Steps)", sections: [
        { intro: "1. Mortadella:", bullets: ["As soon as the pizza leaves the oven, drape the thin slices of Mortadella over the melted fior di latte in loose, ribbon-like folds (a rose)", "The heat from the crust will warm the meat and render its delicate fats"] },
        { intro: "2. Stracciatella:", bullets: ["Spoon dollops of cold Stracciatella across and between the mortadella folds"] },
        { intro: "3. Pistachio Pesto:", bullets: ["Drizzle the Pistachio Pesto generously over the stracciatella and mortadella"] },
        { intro: "4. Crunch & Garnish:", bullets: ["Finish with a heavy dusting of crushed Granella di Pistacchio, fresh basil leaves, and a final light swirl of raw Extra Virgin Olive Oil"] },
      ] },
    ],
  },
  {
    id: "boscaiola",
    number: 27,
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
    id: "sfiziosa-basilico",
    number: 28,
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
    number: 29,
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
    number: 30,
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
    number: 31,
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
    number: 32,
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
    id: "zucca-pancetta",
    number: 33,
    name: "Zucca & Pancetta",
    style: "Pumpkin Base — Simple & Classic",
    category: "pumpkin",
    image: "https://foodionista.com/wp-content/uploads/2022/10/zucca-pancetta.jpg",
    toppings: "Yellow pumpkin cream, fresh mozzarella (fior di latte or buffalo), crispy pancetta, fresh basil, extra virgin olive oil.",
    build: "Spread pumpkin cream evenly, add mozzarella, drizzle with olive oil, bake, then finish with crispy pancetta and fresh basil.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["250–280 g pizza dough ball", "Authentic Neapolitan pizza dough", "Stretch to 30–32 cm"] },
      ] },
      { title: "2. Spread the Sauce", sections: [
        { bullets: ["80 g yellow pumpkin cream", "Spread evenly using a spoon starting from the center", "Leave half an inch at the edge without sauce to create a nice cornicione that will puff up in the oven"] },
      ] },
      { title: "3. Add Toppings", sections: [
        { bullets: ["80–100 g fresh mozzarella (fior di latte or buffalo)", "Spread evenly throughout the pizza"] },
      ] },
      { title: "4. Olive Oil", sections: [
        { bullets: ["5 g extra virgin olive oil", "A light drizzle"] },
      ] },
      { title: "5. Bake", sections: [
        { bullets: ["🪨 Wood fire or gas oven: 430°C/806°F", "⏱ 20–30 seconds before turning", "🔄 Turn every 20–30 seconds", "Maximum 90 seconds total"] },
        { intro: "Home oven alternative:", bullets: ["Preheat at hottest setting", "Bake for 4–8 minutes"] },
      ] },
      { title: "6. Final Touch", sections: [
        { intro: "At the exit:", bullets: ["Add crispy pancetta", "Add 3–4 large leaves of fresh basil"] },
      ] },
    ],
  },
  {
    id: "zucca-gorgonzola-noci",
    number: 34,
    name: "Zucca, Gorgonzola & Noci",
    style: "Pumpkin Base — Gorgonzola & Walnuts",
    category: "pumpkin",
    image: "https://blog.giallozafferano.it/ricettechepassione/wp-content/uploads/2019/10/pizza-zucca-e-gorgonzola-con-nociv.jpg",
    toppings: "Roasted pumpkin cream, Fior di Latte mozzarella, Gorgonzola Dolce, toasted walnuts, honey drizzle, fresh sage.",
    menuIngredients: "Pumpkin, mozzarella, gorgonzola, walnuts, honey",
    build: "A sweet-and-savory pumpkin pizza that diversifies away from the pork-heavy Sfiziosa/Norcina/Zucca & Pancetta lineup: roasted pumpkin cream and Fior di Latte baked with waves of Gorgonzola Dolce, then finished with toasted walnuts, crispy sage and a light honey drizzle.",
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
