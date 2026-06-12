import type { PizzaRecipe, PizzaRecipeCategory } from "./types";

export const RECIPE_CATEGORIES: { id: PizzaRecipeCategory; label: string; blurb: string }[] = [
  { id: "classic", label: "Classic & Franco Manca", blurb: "Margherita, Napolitan, Parma, Parma Bianca, Chorizo, Double Pepperoni & Hot Honey." },
  { id: "fifty-kalo", label: "50 Kalò Style", blurb: "Gourmet white and red Neapolitan bases — Quattro Formaggi, Bufala e Fiocco, Bianca Funghi, Del Monaco DOP." },
  { id: "pizzaerium", label: "Pizzaerium Style", blurb: "Cotto, Bufala and the Tettoia Four Cheese & Truffle." },
  { id: "calzone-focaccia", label: "Calzone & Focaccia", blurb: "Il Mascalzone Calzone and Garlic & Herb Focaccia — low-flame bakes." },
  { id: "pumpkin", label: "Pumpkin Base", blurb: "Replace tomato with smooth roasted pumpkin cream — Sfiziosa, Sfiziosa Signature, Mantovana, Norcina." },
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
    id: "napoli",
    number: 2,
    name: "Napolitan",
    category: "classic",
    image: "https://italianfoodforever.com/wp-content/uploads/2015/01/napolipizza4.jpg",
    toppings: "San Marzano tomatoes, pre-dried mozzarella strips, premium Cantabrian anchovies, Kalamata black olives (halved and pitted), rinsed capers, fresh garlic, dried wild oregano.",
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
    id: "seven-stars-parma",
    number: 3,
    name: "Parma",
    style: "Authentic Post-Bake Flash Process",
    category: "classic",
    image: "https://theuppercrustpizzeria.co.uk/cdn/shop/products/Parma.jpg?v=1639743529",
    toppings: "San Marzano tomato sauce, grated Parmigiano-Reggiano, fresh Mozzarella di Bufala DOP, paper-thin Prosciutto di Parma or Serrano Ham, fresh wild rocket (arugula).",
    build: "Sauce-only first bake, then cold-layer mozzarella and prosciutto post-bake.",
    steps: [
      { title: "1. Base Layer (Pre-Bake Build)", sections: [
        { bullets: ["San Marzano tomato sauce, thin and even", "Light dusting of Parmigiano-Reggiano"] },
        { intro: "Key idea:", bullets: ["Tomato = moisture + acidity base", "Parmigiano = umami scaffold before heat"] },
      ] },
      { title: "2. First Bake (Sauce-Only Phase)", sections: [
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "50–60 seconds bake"] },
        { intro: "Goal:", bullets: ["Crust is blistered and set", "Tomato slightly reduced and concentrated", "Base becomes structurally stable for topping load"] },
        { intro: "Important:", bullets: ["Don’t overcook edges — keep cornicione elastic for post-bake layering"] },
      ] },
      { title: "3. Mozzarella", sections: [
        { bullets: ["Mozzarella di Bufala DOP (well-drained, cold)", "Thick medallions", "Torn and scattered across base", "Uneven spacing for contrast melt zones"] },
        { intro: "Effect:", bullets: ["Controlled melting pockets instead of full cheese blanket"] },
      ] },
      { title: "4. Prosciutto", sections: [
        { bullets: ["Prosciutto di Parma or Serrano (paper-thin)", "Draped loosely over mozzarella", "Not pressed into base"] },
        { intro: "Effect:", bullets: ["Fat gently relaxes from residual heat, not cooked"] },
      ] },
      { title: "5. Parmigiano Finish (Pre-Flash Layer)", sections: [
        { bullets: ["Shaved Parmigiano-Reggiano", "Light, even scatter"] },
        { intro: "Optional timing:", bullets: ["Before flash for integration, OR", "After flash for sharper aroma lift"] },
      ] },
      { title: "6. Flash Melt Return (10–15s)", sections: [
        { bullets: ["🪨 Stone: same heat (380–400°C)", "🔥 Air: residual high heat (430–480°C environment)", "10–15 seconds only"] },
        { intro: "Goal:", bullets: ["Slightly soften mozzarella surface", "Warm prosciutto fats", "Bind layers without cooking toppings"] },
        { intro: "Critical rule:", bullets: ["This is a heat kiss, not a second bake"] },
      ] },
      { title: "7. Rocket (Arugula) — Post Bake", sections: [
        { bullets: ["Added only after final oven exit", "Fresh wild rocket, hand-torn", "No heat exposure"] },
        { intro: "Effect:", bullets: ["Fresh peppery lift against warm dairy and ham"] },
      ] },
      { title: "8. Final Finish", sections: [
        { bullets: ["Micro drizzle of EVOO (optional, Campania-style)"] },
        { intro: "Final result:", bullets: ["Blistered structured base", "Creamy bufala pockets", "Silky warmed prosciutto", "Fresh rocket contrast", "Sharp Parmigiano finish", "Hot/cold layered texture architecture"] },
      ] },
    ],
  },
  {
    id: "parma-bianca",
    number: 4,
    name: "Parma Bianca",
    category: "classic",
    image: "https://ginopizzaovens.com/cdn/shop/articles/gino-pizza-fior-latte-parma-ham-rocket-parmesan.jpg?v=1683056519&width=1500",
    toppings: "Fior di Latte cheese, Parma ham (Prosciutto di Parma), rocket (arugula), Parmigiano-Reggiano, extra virgin olive oil.",
    build: "Bianca base (no tomato) with Fior di Latte baked in, then prosciutto, rocket, Parmigiano and EVOO post-bake.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["Neapolitan-style dough (00 flour, well-fermented, elastic)", "250–270 g dough ball", "Stretch to 28–33 cm", "Light, airy cornicione", "Do not degas edge gas"] },
        { intro: "Key idea:", bullets: ["Air = oven spring + structure for dairy + ham balance"] },
      ] },
      { title: "2. Base (Bianca Foundation)", sections: [
        { bullets: ["No tomato sauce", "No olive oil under cheese (Neapolitan standard)", "Optional: tiny pinch of fine sea salt only"] },
        { intro: "Key idea:", bullets: ["Clean dough expression — dairy must define flavour, not fat or tomato"] },
      ] },
      { title: "3. Fior di Latte (Pre-Bake Application)", sections: [
        { bullets: ["Well-drained Fior di Latte", "Torn irregular pieces (not uniform cubes)", "Even but light distribution", "Leave small gaps for melt flow"] },
        { intro: "Effect:", bullets: ["Melts directly in oven", "Becomes integrated dairy layer", "Avoids post-bake reconstruction"] },
      ] },
      { title: "4. Bake (Single Cycle Only)", sections: [
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Air: 430–480°C", "⏱ 60–75 seconds"] },
        { intro: "Goal:", bullets: ["Full bake of dough", "Full melt of Fior di Latte in-oven", "Light blistering on cornicione", "Slight browning on exposed cheese edges"] },
        { intro: "Critical rule:", bullets: ["No second oven entry — everything must finish in one bake"] },
      ] },
      { title: "5. Post-Bake Prosciutto Layer", sections: [
        { bullets: ["Prosciutto di Parma (or Serrano)", "Paper-thin slices", "Draped loosely over hot mozzarella"] },
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
    id: "chorizo",
    number: 5,
    name: "Chorizo",
    style: "Inspired by Franco Manca UK",
    category: "classic",
    image: "https://image.eatencdn.com/image/1f55d2e1-e560-4a16-94a0-dcc00041e6cb/small/image.jpg",
    toppings: "San Marzano tomatoes, standard mozzarella strips, dry and semi-dry cured Iberico chorizo, blue cheese (Stilton or Gorgonzola).",
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
    id: "double-pepperoni-hot-honey",
    number: 6,
    name: "Double Pepperoni & Hot Honey",
    style: "Modern Crowd-Pleaser",
    category: "classic",
    image: "https://coolfooddude.com/wp-content/uploads/2020/12/Double-Pepperoni-and-honey-PIzza.jpg",
    toppings: "San Marzano tomato sauce, low-moisture mozzarella, aged provolone, cup-and-char pepperoni, spicy dry-cured salami (piccante salame), Calabrian hot honey, fermented chili vinegar, flaky sea salt, early-harvest Campanian extra virgin olive oil.",
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
    id: "quattro-formaggi-50kalo",
    number: 7,
    name: "Quattro Formaggi",
    style: "50 Kalò Style — White Base Gourmet",
    category: "fifty-kalo",
    toppings: "Fior di Latte cheese, Wine-Aged Goat's Cheese, Cow's Cheese aged in straw, sweet cherry tomatoes confit, Selva Blue Cheese fondue, 24-Month aged Parmesan DOP chips, fresh basil.",
    build: "No tomato sauce. Lay down a balanced layer of pre-dried Fior di Latte, wine-aged goat's cheese, and straw-aged cow's cheese. Scatter your cherry tomatoes confit evenly across the surface. Launch and bake for 70 to 80 seconds.",
    postBake: "As soon as it exits onto your board, drizzle a rich, warm fondue of Selva Blue Cheese over the bubbling cheese matrix. Finish with crispy curls of your 24-Month Parmesan DOP chips and fresh basil.",
    videoGuide: "Mastering Gourmet Multi-Cheese Blends on White Bases",
  },
  {
    id: "bufala-e-fiocco",
    number: 8,
    name: "Bufala e Fiocco",
    style: "50 Kalò Style — Pure White Premium",
    category: "fifty-kalo",
    toppings: "San Marzano tomato base, light Fior di Latte (optional stabilization layer), Mozzarella di Bufala DOP (post-bake), fiocco di prosciutto, early-harvest Campanian extra virgin olive oil, optional flaky sea salt and basil.",
    build: "Thin San Marzano tomato base with an optional light Fior di Latte stabilizer, baked clean and then layered post-bake with torn Mozzarella di Bufala DOP, fiocco di prosciutto and a finish of Campanian EVOO.",
    steps: [
      { title: "1. Dough", sections: [
        { bullets: ["48-hour fermented Neapolitan dough", "63–65% hydration", "250–260 g dough ball", "30–32 cm stretch", "Soft, highly extensible gluten network", "Strong cornicione gas retention"] },
        { intro: "Goal:", bullets: ["A light, airy base that acts as a neutral stage for premium dairy and cured meat"] },
      ] },
      { title: "2. Tomato Base", sections: [
        { bullets: ["San Marzano tomatoes, lightly crushed", "~60 g", "Very thin, even layer", "1.5–2 cm clean border", "Fine sea salt only"] },
        { intro: "Key idea:", bullets: ["Clean acidity is essential — this pizza has no cooked complexity, so tomato provides structure and brightness"] },
      ] },
      { title: "3. Fior di Latte (Optional Micro Layer — Modern 50 Kalò Style)", sections: [
        { bullets: ["Very light scattering of Fior di Latte strips", "Well-drained"] },
        { intro: "Effect:", bullets: ["Creates gentle melt base", "Helps stabilize bufala during post-bake placement", "Prevents watery separation"] },
        { intro: "Note:", bullets: ["Some traditional versions skip this entirely; this is a modern stabilization upgrade"] },
      ] },
      { title: "4. Bake", sections: [
        { bullets: ["🪨 Stone: 380–400°C", "🔥 Oven air: 430–480°C", "⏱ 60–75 seconds", "Rotate every 15–20 seconds"] },
        { intro: "What must happen:", bullets: ["Crust fully blistered and airy", "Tomato slightly concentrated", "Base remains light, not dry", "No overcooking (critical for final assembly integrity)"] },
      ] },
      { title: "5. Mozzarella di Bufala (Post-Bake Layer — Critical Rule)", sections: [
        { bullets: ["Mozzarella di Bufala DOP", "Well-drained for several hours", "Torn into large irregular pieces"] },
        { intro: "Application:", bullets: ["Placed immediately after baking while base is still hot"] },
        { intro: "Effect:", bullets: ["Creamy, milky bursts", "Cold/warm contrast against hot crust", "Fresh dairy aroma preserved (not melted into oil)"] },
      ] },
      { title: "6. Fiocco di Prosciutto", sections: [
        { bullets: ["Fiocco di prosciutto (lean cured ham)", "Paper-thin slices", "Light draping over bufala"] },
        { intro: "Effect:", bullets: ["Delicate saltiness", "Soft cured sweetness", "Melt-in-mouth texture from residual heat only"] },
        { intro: "Key principle:", bullets: ["Never cook it — only warm it gently"] },
      ] },
      { title: "7. Rest Phase (Important)", sections: [
        { bullets: ["20–30 seconds after assembly"] },
        { intro: "Why:", bullets: ["Allows bufala to relax slightly", "Prevents sliding", "Lets prosciutto fat bloom gently"] },
      ] },
      { title: "8. Final EVOO Finish", sections: [
        { bullets: ["Early-harvest Campanian extra virgin olive oil", "Very light micro-dots or spiral"] },
        { intro: "Effect:", bullets: ["Peppery lift", "Aromatic structure", "Enhances dairy richness without heaviness"] },
      ] },
      { title: "9. Optional Finish (Modern 50 Kalò Touch)", sections: [
        { bullets: ["Tiny pinch of flaky sea salt on bufala", "Optional basil leaf (very light, torn, not whole leaf styling)"] },
      ] },
    ],
  },
  {
    id: "bianca-prosciutto-funghi-cardon",
    number: 9,
    name: "Bianca Prosciutto e Funghi Cardon",
    style: "50 Kalò Style — White Mushroom Base",
    category: "fifty-kalo",
    toppings: "Fior di Latte cheese, pre-sautéed Cardon (King Oyster) mushrooms, premium Cotto ham, shaved Parmigiano-Reggiano, EVOO.",
    build: "No tomato sauce. Lay down your pre-dried Fior di Latte matchsticks. Layer on your pre-sautéed Cardon mushrooms and torn strips of your high-quality cooked ham. Launch and bake for 70 to 80 seconds.",
    postBake: "Finish with a light dusting of shaved Parmigiano-Reggiano and a tiny drop of EVOO.",
    videoGuide: "50 Kalò White Base Mushroom Layouts",
  },
  {
    id: "del-monaco-dop",
    number: 10,
    name: "Del Monaco DOP",
    style: "50 Kalò Style — Premium Red Base",
    category: "fifty-kalo",
    toppings: "Casa Marrazzo San Marzano DOP blended tomatoes, Fior di Latte cheese, Salame Napoli, shaved Provolone Del Monaco DOP cheese, Colline Salernitane extra virgin olive oil, basil.",
    build: "Ladle a thin layer of the blended Casa Marrazzo San Marzano tomatoes over the dough. Scatter your dried Fior di Latte matchsticks and top evenly with slices of rich, smoky Salame Napoli. Launch into the Arc and actively rotate for 70 to 90 seconds.",
    postBake: "Immediately after pulling from the heat, shave thin, translucent ribbons of authentic Provolone Del Monaco DOP cheese across the sizzling hot surface. Finish with fresh basil and a fine stream of Colline Salernitane EVOO.",
    videoGuide: "Shaving Finishes on High-Heat Neapolitan Pizzas",
  },
  {
    id: "cotto-pizzaerium",
    number: 11,
    name: "Cotto",
    style: "Pizzaerium Style — Classic Ham & Mushroom",
    category: "pizzaerium",
    toppings: "San Marzano tomato sauce, fresh basil, Fior di Latte mozzarella, sautéed chestnut mushrooms, premium Cotto Ham.",
    build: "Layer tomato sauce, fresh basil, and pre-dried mozzarella. Scatter your pre-sautéed chestnut mushrooms and torn strips of cooked Cotto ham. Launch and bake for 70 to 80 seconds.",
    postBake: "Serve immediately.",
    videoGuide: "Pre-Sautéing Toppings for Crisp High-Heat Pizza Centers",
  },
  {
    id: "bufala-pizzaerium",
    number: 12,
    name: "Bufala",
    style: "Pizzaerium Style — The Neapolitan Staple",
    category: "pizzaerium",
    toppings: "San Marzano tomato sauce, fresh basil, extra virgin olive oil, Bufala Mozzarella DOP.",
    build: "Lay down your base layer of San Marzano tomato sauce, fresh basil tucked low, and a light spiral of EVOO. Launch and bake sauce-only.",
    postBake: "Slice your cold Bufala Mozzarella DOP into thick medallions and tear them open across the hot pizza immediately after it exits the oven so they melt gently from residual heat.",
    videoGuide: "Authentic Buffalo Mozzarella DOP Handling Standards",
  },
  {
    id: "tettoia-four-cheese-truffle",
    number: 13,
    name: "Tettoia — Four Cheese & Truffle",
    style: "Pizzaerium Style — Gourmet White Pizza",
    category: "pizzaerium",
    toppings: "Fior di Latte mozzarella, Gorgonzola DOP, Parmigiano-Reggiano, Bufala DOP, stale high-protein bread croutons, truffle oil, chilli flakes.",
    build: "No tomato sauce. Lay down your base layer of mozzarella strips, crumbled Gorgonzola, grated Parmigiano, and medallions of Bufala mozzarella. Dice a slice of high-protein bread into tiny 1cm croutons, toss lightly in truffle oil and a pinch of chilli flakes, and scatter them directly into the cheese layers before launching. Launch and bake for 70 seconds.",
    postBake: "Drizzle with a final touch of truffle oil as it exits the Arc.",
    videoGuide: "Achieving the Perfect Golden Crunch on Croutons",
  },
  {
    id: "il-mascalzone-calzone",
    number: 14,
    name: "Il Mascalzone Calzone",
    style: "Putney Icon Style — Filled to the Brim",
    category: "calzone-focaccia",
    toppings: "Raw crushed San Marzano tomatoes, dry mozzarella matchsticks, prosciutto cotto (cooked ham), salami piccante, extra tomato glaze.",
    build: "Open a relaxed dough ball into a uniform 12\" circle. Spread a light coating of raw tomatoes exclusively over one half of the dough circle. Layer heavily with your thick matchsticks of dry mozzarella, cooked ham, and salami piccante pieces. Fold the clean half of the dough completely over the loaded side, creating a crescent shape. Crimp the circular edge firmly into a tight, locked rope seam. Ladle a small tablespoon of tomato sauce across the exterior top of the calzone, and score a brief 1-inch slice in the center of the top layer to act as a steam vent.",
    postBake: "Serve hot.",
    specialRule: { label: "Low-Flame Bake Rule", detail: "Turn your Gozney Arc gas dial down to its absolute minimum setting before launching. Slide the calzone into the front corner of the oven stone — away from the main flame pocket. Bake slower for 2.5 to 3 minutes, rotating it 180 degrees every 30 seconds until puffed and golden brown." },
    videoGuide: "How to Properly Fold, Seal, and Low-Flame Bake a Stuffed Calzone",
  },
  {
    id: "garlic-herb-focaccia",
    number: 15,
    name: "Garlic & Herb Focaccia Bread",
    style: "Pala Romana Mechanics",
    category: "calzone-focaccia",
    toppings: "Premium extra virgin olive oil (EVOO), coarse flaky sea salt, fresh picked rosemary sprigs, fresh garlic slivers.",
    build: "Take a fully rested 250g dough ball. Flatten it out on a heavily dimpled surface, using your fingers to stamp deep wells directly into the dough across its entire face (no distinct raised rim). Drizzle a heavy, generous pool of premium EVOO over the top, follow with coarse flaky sea salt, fresh picked rosemary sprigs, and thin slivers of fresh garlic.",
    postBake: "Serve as a premium crisp side flatbread.",
    specialRule: { label: "Low-Flame Bake Rule", detail: "Turn the gas flame down to its absolute lowest setting before launching. Slide the focaccia in and use your turning peel to rotate it constantly for 60 seconds until blistered and golden." },
    videoGuide: "Traditional Italian Pala Romana Flatbread Mechanics",
  },
  {
    id: "sfiziosa-basilico",
    number: 16,
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
    number: 17,
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
    number: 18,
    name: "Sfiziosa Aqua & Farina",
    style: "Pumpkin Base — Smoked Pork, Burrata & Truffle",
    category: "pumpkin",
    toppings: "Roasted pumpkin cream, mozzarella, smoked boucané, fresh Burrata, black truffle cream.",
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
    number: 19,
    name: "Mantovana (Acqua e Farina Signature Edition)",
    style: "Pumpkin Base — Gorgonzola & Smoked Boucané",
    category: "pumpkin",
    toppings: "Roasted pumpkin cream, 24–30 month Parmigiano-Reggiano, Fior di Latte mozzarella, quick-pickled red onions, Gorgonzola Dolce, pre-cooked smoked boucané, crispy sage, aged white balsamic, early-harvest Campanian extra virgin olive oil.",
    build: "Roasted pumpkin cream over a Parmigiano scaffold, Fior di Latte and quick-pickled red onions, Gorgonzola Dolce in waves and smoked boucané, finished with crispy sage, aged white balsamic and Campanian EVOO.",
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
      { title: "7. Smoked Boucané", sections: [
        { intro: "Preparation:", bullets: ["Pre-cooked and lightly rendered beforehand", "Cut into thin strips or small batons"] },
        { intro: "Placement:", bullets: ["Even distribution", "Avoid clusters"] },
        { intro: "Effect:", bullets: ["Provides smoke, salt and meaty depth"] },
        { intro: "Key principle:", bullets: ["Think of boucané as seasoning rather than a primary topping"] },
      ] },
      { title: "8. Bake", sections: [
        { bullets: ["🪨 Stone: 390–400°C", "🔥 Air: 440–480°C", "⏱ 70–80 seconds", "Rotate every 15–20 seconds"] },
        { intro: "Goal:", bullets: ["Pumpkin concentrates", "Mozzarella melts", "Gorgonzola softens", "Boucané crisps lightly", "Cornicione develops leopard spotting"] },
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
    number: 20,
    name: "Norcina (Acqua e Farina Signature Edition)",
    style: "Pumpkin Base — Porcini & Fennel Sausage",
    category: "pumpkin",
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
];

export function getRecipesByCategory(category: PizzaRecipeCategory): PizzaRecipe[] {
  return RECIPES.filter((r) => r.category === category);
}
