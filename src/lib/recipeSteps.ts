import type { Pizzaiolo, DoughResult } from "./types";

export interface RecipeStep {
  icon: string;
  title: string;
  detail: string;
}

export function buildRecipeSteps(p: Pizzaiolo, dough: DoughResult): RecipeStep[] {
  const steps: RecipeStep[] = [];

  if (p.preferment === "poolish") {
    const poolishFlour = Math.round(dough.flour * 0.3);
    steps.push({
      icon: "🧪",
      title: "Prepare poolish (16–24 h ahead)",
      detail: `Mix ${poolishFlour}g flour + ${poolishFlour}g water + ~1g instant yeast. Cover, leave at room temperature 16–24 h until bubbly and slightly domed.`,
    });
  } else if (p.preferment === "sourdough") {
    steps.push({
      icon: "🧫",
      title: "Refresh sourdough starter",
      detail: "8–12 h before mixing, feed your 100% hydration starter 1:1:1 (starter:flour:water). It should at least double in volume before use.",
    });
  }

  steps.push({
    icon: "💧",
    title: "Dissolve salt in water",
    detail: `Combine ${Math.round(dough.water)}g water with ${Math.round(dough.salt)}g salt. Stir until fully dissolved.`,
  });

  const yeastText = p.preferment === "sourdough"
    ? "Add the refreshed sourdough starter (no commercial yeast)."
    : p.preferment === "poolish"
      ? `Add the matured poolish. Sprinkle the remaining ${dough.yeast > 0 ? Math.round(dough.yeast * 10) / 10 + "g instant yeast" : "yeast"} over the flour.`
      : `Sprinkle ${dough.yeast.toFixed(1)}g of yeast over the flour.`;

  steps.push({
    icon: "🥣",
    title: "Mix the dough",
    detail: `Gradually add ${Math.round(dough.flour)}g flour to the water. ${yeastText} Mix until a shaggy mass forms, then knead 10–15 min until smooth and elastic. Final dough temp ~22–24°C.`,
  });

  steps.push({
    icon: "🌡",
    title: `Bulk fermentation (${p.bulkTime})`,
    detail: `Cover and bulk-ferment at ${p.tempPreference.toLowerCase()}. ${p.fermentationApproach}.`,
  });

  const ballGrams = Math.round(dough.totalDough / dough.numPizzas);
  steps.push({
    icon: "⚽",
    title: `Divide & ball into ${dough.numPizzas} × ${ballGrams}g`,
    detail: `Scale the dough into ${dough.numPizzas} balls of ~${ballGrams}g. Round tightly with smooth surface, place seam-down in a covered container with space between them.`,
  });

  const tempLower = p.tempPreference.toLowerCase();
  if (tempLower.includes("cold")) {
    steps.push({
      icon: "❄️",
      title: `Cold ball fermentation (${p.ballTime})`,
      detail: "Transfer the balled dough to the fridge at 3–5°C. Let it mature undisturbed.",
    });
    steps.push({
      icon: "☀️",
      title: "Warm up (1.5–2 h before baking)",
      detail: "Remove balls from the fridge and let them come to room temperature so they are pliable and easy to open.",
    });
  } else {
    steps.push({
      icon: "🍞",
      title: `Ball fermentation (${p.ballTime})`,
      detail: `Let the balls proof at ${tempLower} until soft, jiggly, and visibly expanded.`,
    });
  }

  steps.push({
    icon: "🍅",
    title: "Prepare the sauce",
    detail: `${p.sauceRecipe1000g.tomatoes} ${p.sauce.tomatoType}, ${p.sauceRecipe1000g.salt} salt, ${p.sauceRecipe1000g.oliveOil} olive oil, basil: ${p.sauceRecipe1000g.basil.toLowerCase()}. ${p.saucePhilosophy}`,
  });

  steps.push({
    icon: "👐",
    title: "Open the dough",
    detail: "Flour a ball lightly, press from the center outward leaving a cornicione (~1.5 cm). Avoid degassing the rim.",
  });

  steps.push({
    icon: "🔥",
    title: "Top & bake",
    detail: "Top with sauce, mozzarella, and basil if desired. Bake at the hottest setting your oven allows (450–500°C in a wood oven; 280–300°C + steel/stone at home).",
  });

  return steps;
}
