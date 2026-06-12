export interface Pizzaiolo {
  id: string;
  name: string;
  style: string;
  hydration: number; // 0-1
  salt: number; // 0-1
  yeast: number; // 0-1
  fermentationMin: number; // hours
  fermentationMax: number; // hours
  preferment?: "poolish" | "biga" | "sourdough";
  sauce: SauceProfile;
  color: string; // accent color for charts
  flourW: string; // e.g. "W280–300"
  hydrationRange: string; // e.g. "58–62%"
  saltRange: string; // e.g. "2.8–3.0%"
  yeastRange: string; // e.g. "0.3–0.8%" or "Poolish + tiny yeast"
  fermentationRange: string; // e.g. "8–24 hrs"
  mixing: string; // e.g. "Direct", "Direct/Biga", "Poolish"
  characteristics: string;
  mainFocus: string;
  recipe1000g: {
    water: string;
    salt: string;
    yeast: string;
  };
  fermentationApproach: string;
  bulkTime: string;
  ballTime: string;
  totalTime: string;
  tempPreference: string;
  saucePreference: string;
  philosophy: string;
  saucePhilosophy: string;
  sauceRecipe1000g: {
    tomatoes: string;
    salt: string;
    oliveOil: string;
    basil: string;
    other: string;
  };
  technique: PizzaioloTechnique;
}

export type TechniqueVideoCategory = "dough" | "fermentation" | "stretching" | "sauce" | "general";

export interface TechniqueVideo {
  category: TechniqueVideoCategory;
  title: string;
  url: string;
}

export interface PizzaioloTechnique {
  level: string;
  stretching: string;
  notes: { title: string; detail: string }[];
  videos: TechniqueVideo[];
}

export type PizzaRecipeCategory =
  | "classic"
  | "fifty-kalo"
  | "pizzaerium"
  | "calzone-focaccia"
  | "pumpkin";

export interface RecipeStepSection {
  intro?: string;
  bullets: string[];
}

export interface RecipeStep {
  title: string;
  sections: RecipeStepSection[];
}

export interface PizzaRecipe {
  id: string;
  number: number;
  name: string;
  style?: string;
  category: PizzaRecipeCategory;
  toppings: string;
  build: string;
  postBake?: string;
  specialRule?: { label: string; detail: string };
  videoGuide?: string;
  videoUrl?: string;
  image?: string;
  steps?: RecipeStep[];
}

export interface SauceProfile {
  tomatoType: string;
  saltPercent: number; // 0-1 of sauce weight
  oliveOilPercent: number; // 0-1
  basil: boolean;
  notesPerPizza: number; // grams of sauce per pizza
}

export type DoughMode = "pizzas" | "flour" | "water";

export interface DoughInputs {
  mode: DoughMode;
  numPizzas: number;
  ballWeight: number; // grams
  flour: number; // grams
  water: number; // grams
  hydration: number; // 0-1
  salt: number; // 0-1
  yeast: number; // 0-1
  selectedPizzaioloId: string;
}

export interface DoughResult {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
  totalDough: number;
  numPizzas: number;
}

export interface PoolishInputs {
  totalFlour: number;
  poolishPercent: number; // 0-1
  yeastPercent: number; // 0-1
}

export interface PoolishResult {
  poolishFlour: number;
  poolishWater: number;
  poolishYeast: number;
  mainFlour: number;
  mainWater: number;
}

export interface BigaInputs {
  totalFlour: number;
  bigaPercent: number; // 0-1
  hydration: number; // 0-1
  yeastPercent: number; // 0-1
}

export interface BigaResult {
  bigaFlour: number;
  bigaWater: number;
  bigaYeast: number;
  mainFlour: number;
  mainWater: number;
}

export interface FermentationInputs {
  roomTemp: number; // celsius
  fridgeTemp: number; // celsius
  bakeTime: string; // ISO time string or HH:mm
  bakeDate: string; // date string
  pizzaioloId: string;
}

export interface FermentationPlan {
  mixTime: Date;
  bulkEnd: Date;
  fridgeEntry: Date;
  fridgeExit: Date;
  ballTime: Date;
  bakeTime: Date;
  bulkHours: number;
  coldHours: number;
  warmupHours: number;
}

export interface CostInputs {
  flourCostPerKg: number;
  tomatoCostPerKg: number;
  mozzarellaCostPerKg: number;
  oliveOilCostPerL: number;
  numPizzas: number;
  flourGrams: number;
  sauceGramsPerPizza: number;
  mozzarellaGramsPerPizza: number;
  oliveOilMlPerPizza: number;
}

export interface CostResult {
  flourCost: number;
  tomatoCost: number;
  mozzarellaCost: number;
  oliveOilCost: number;
  totalCost: number;
  costPerPizza: number;
}
