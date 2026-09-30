import type {
  DoughInputs,
  DoughResult,
  PoolishInputs,
  PoolishResult,
  BigaInputs,
  BigaResult,
  FermentationInputs,
  FermentationPlan,
  CostInputs,
  CostResult,
} from "./types";

export function calcDough(inputs: DoughInputs): DoughResult {
  const { mode, numPizzas, ballWeight, flour, water, hydration, salt, yeast } = inputs;
  const h = hydration;
  const s = salt;
  const y = yeast;
  const divisor = 1 + h + s + y;

  let f: number, w: number, sl: number, ys: number, total: number, np: number;

  if (mode === "pizzas") {
    total = numPizzas * ballWeight;
    f = total / divisor;
    w = f * h;
    sl = f * s;
    ys = f * y;
    np = numPizzas;
  } else if (mode === "flour") {
    f = flour;
    w = f * h;
    sl = f * s;
    ys = f * y;
    total = f + w + sl + ys;
    np = Math.round(total / (ballWeight || 270));
  } else {
    // water mode
    w = water;
    f = w / h;
    sl = f * s;
    ys = f * y;
    total = f + w + sl + ys;
    np = Math.round(total / (ballWeight || 270));
  }

  return { flour: f, water: w, salt: sl, yeast: ys, totalDough: total, numPizzas: np };
}

export function calcPoolish(inputs: PoolishInputs): PoolishResult {
  const poolishFlour = inputs.totalFlour * inputs.poolishPercent;
  const poolishWater = poolishFlour; // 100% hydration
  const poolishYeast = poolishFlour * inputs.yeastPercent;
  const mainFlour = inputs.totalFlour - poolishFlour;
  // main water is calculated at recipe level, not here
  const mainWater = 0;
  return { poolishFlour, poolishWater, poolishYeast, mainFlour, mainWater };
}

export function calcBiga(inputs: BigaInputs): BigaResult {
  const bigaFlour = inputs.totalFlour * inputs.bigaPercent;
  const bigaWater = bigaFlour * inputs.hydration;
  const bigaYeast = bigaFlour * inputs.yeastPercent;
  const mainFlour = inputs.totalFlour - bigaFlour;
  const mainWater = 0;
  return { bigaFlour, bigaWater, bigaYeast, mainFlour, mainWater };
}

export function calcFermentation(inputs: FermentationInputs): FermentationPlan {
  const { bakeTime, bakeDate, fermentationMin, fermentationMax } = {
    ...inputs,
    fermentationMin: 24,
    fermentationMax: 48,
  };

  const [bH, bM] = (bakeTime || "18:00").split(":").map(Number);
  const bake = new Date(bakeDate || new Date().toDateString());
  bake.setHours(bH, bM, 0, 0);

  const totalFermentation = (fermentationMin + fermentationMax) / 2;
  const warmupHours = 2;
  const bulkHours = Math.min(6, totalFermentation * 0.25);
  const coldHours = totalFermentation - bulkHours - warmupHours;

  const fridgeExit = new Date(bake.getTime() - warmupHours * 3600000);
  const fridgeEntry = new Date(fridgeExit.getTime() - coldHours * 3600000);
  const ballTime = new Date(fridgeEntry.getTime() - 0.5 * 3600000);
  const bulkEnd = ballTime;
  const mixTime = new Date(bulkEnd.getTime() - bulkHours * 3600000);

  return { mixTime, bulkEnd, fridgeEntry, fridgeExit, ballTime, bakeTime: bake, bulkHours, coldHours, warmupHours };
}

export function calcFermentationForPizzaiolo(
  inputs: FermentationInputs,
  fermentationMin: number,
  fermentationMax: number
): FermentationPlan {
  return calcFermentation({ ...inputs });
}

export function calcCost(inputs: CostInputs): CostResult {
  const flourCost = (inputs.flourGrams / 1000) * inputs.flourCostPerKg;
  const tomatoCost = (inputs.sauceGramsPerPizza * inputs.numPizzas / 1000) * inputs.tomatoCostPerKg;
  const mozzarellaCost = (inputs.mozzarellaGramsPerPizza * inputs.numPizzas / 1000) * inputs.mozzarellaCostPerKg;
  const oliveOilCost = (inputs.oliveOilMlPerPizza * inputs.numPizzas / 1000) * inputs.oliveOilCostPerL;
  const totalCost = flourCost + tomatoCost + mozzarellaCost + oliveOilCost;
  const costPerPizza = inputs.numPizzas > 0 ? totalCost / inputs.numPizzas : 0;
  return { flourCost, tomatoCost, mozzarellaCost, oliveOilCost, totalCost, costPerPizza };
}

export function calcWaterTemp(roomTemp: number, flourTemp: number, frictionFactor: number): number {
  const target = 22; // target final dough temperature (°C) for the Famag IM 5-S-10V (HH) spiral mixer
  return 3 * target - roomTemp - flourTemp - frictionFactor;
}

export interface FlourBlendPercents {
  pizzeria: number; // 0-1, Caputo Pizzeria 00
  nuvola: number;   // 0-1, Caputo Nuvola / Nuvola Super
  tipo1: number;    // 0-1, Caputo Tipo 1
}

export interface FlourBlendGrams {
  pizzeria: number;
  nuvola: number;
  tipo1: number;
  semolina: number; // dusting / optional additive, on top of the 100% blend
}

/**
 * Dynamic gram allocation for a flour blend across the total flour weight (g).
 * Semolina Rimacinata is an optional additive used for dusting/extra crunch,
 * calculated separately from the 100% Pizzeria/Nuvola/Tipo 1 blend.
 */
export function calcFlourBlendGrams(
  totalFlour: number,
  blend: FlourBlendPercents,
  semolinaAddPercent: number
): FlourBlendGrams {
  return {
    pizzeria: totalFlour * blend.pizzeria,
    nuvola: totalFlour * blend.nuvola,
    tipo1: totalFlour * blend.tipo1,
    semolina: totalFlour * semolinaAddPercent,
  };
}

/**
 * Automatic recommended hydration adjustment based on blend composition:
 * - Base target hydration is 62%.
 * - If Nuvola > 20%, raise to 65% (higher gas retention needs more water).
 * - If Tipo 1 > 15%, add +1% to compensate for bran's higher water absorption.
 */
export function suggestedBlendHydration(blend: FlourBlendPercents): number {
  let hydration = 0.62;
  if (blend.nuvola > 0.20) hydration = 0.65;
  if (blend.tipo1 > 0.15) hydration += 0.01;
  return hydration;
}

export function convertYeast(instant: number): { instant: number; fresh: number; activeDry: number } {
  return {
    instant,
    fresh: instant * 3,
    activeDry: instant * 1.25,
  };
}

export function fmt(n: number, decimals = 1): string {
  if (isNaN(n) || !isFinite(n)) return "—";
  return n.toFixed(decimals);
}
