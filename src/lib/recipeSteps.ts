import type { Pizzaiolo, DoughResult } from "./types";

export interface RecipeStep {
  icon: string;
  title: string;
  detail: string;
}

export function buildRecipeSteps(p: Pizzaiolo, dough: DoughResult): RecipeStep[] {
  const steps: RecipeStep[] = [];

  if (p.id === "vincenzo-esposito") {
    const initialWater = dough.water * 0.96;
    const reservedWater = dough.water - initialWater;
    const freshYeastEquivalent = dough.flour * 0.001875;
    const ballGrams = Math.round(dough.totalDough / dough.numPizzas);

    return [
      {
        icon: "⚖️",
        title: "Measure the scaled dough ingredients",
        detail: `${Math.round(dough.flour)}g Caputo 00 flour, ${dough.yeast.toFixed(2)}g instant dry yeast (about ${freshYeastEquivalent.toFixed(2)}g fresh yeast equivalent), ${Math.round(initialWater)}g initial water, ${Math.round(reservedWater)}g reserved water, and ${dough.salt.toFixed(2)}g fine salt. Weigh the reserved water into a separate small jug before starting the mixer. The published formula uses fresh yeast; instant yeast is the home conversion.`,
      },
      {
        icon: "🥣",
        title: "Mix and develop in the Famag",
        detail: `At Speed 0, mix the flour and yeast for 30–60 seconds. At Speed 1, gradually add ${Math.round(initialWater)}g water over 60–90 seconds, then continue mixing for about 4–6 minutes from the start of water addition until the dough gathers and develops.`,
      },
      {
        icon: "💧",
        title: "Finish hydration and gluten development",
        detail: `Increase to Speed 5. Add the reserved ${Math.round(reservedWater)}g water progressively, about 5–10g at a time. Wait for it to absorb and for the dough to become cohesive again before adding the next portion; do not add more while water is still visibly loose around the dough. Add ${dough.salt.toFixed(2)}g salt once most water is incorporated, then mix another 1–2 minutes until smooth, elastic and cohesive. Target final dough temperature: 23–24°C; typical total mixing time is 8–12 minutes. Times are starting points, not hard stops: judge the dough by its condition and final temperature.`,
      },
      {
        icon: "⏱️",
        title: "Rest, divide and ball",
        detail: `Remove the dough, form a smooth mass, cover and rest for 30 minutes. For the 1kg flour batch, divide into six portions of approximately 276g each. Alternatively, make five 280g portions and retain approximately 257g for another pizza. Shape each portion into a smooth, tight ball while handling gently and avoiding excessive degassing; place in covered containers. For scaled batches, divide into ${dough.numPizzas} portions of about ${ballGrams}g each.`,
      },
      {
        icon: "🌡️",
        title: "Ferment at room temperature",
        detail: "For fidelity to the published Carmnella / Vincenzo Esposito method, ferment the covered dough balls at room temperature for at least 12 hours. The 12-hour clock starts after dividing and balling. After 12 hours, look for dough that is visibly aerated, relaxed and expanded; if it remains very tight and dense, allow more time. The published method does not include refrigeration; a fridge stage is a separate home adaptation.",
      },
      {
        icon: "🔥",
        title: "Open and bake",
        detail: "Lightly flour the work surface. Place the dough ball on the flour and press gently from the centre outward, deliberately preserving the outer rim. Stretch gradually by hand without crushing or flattening the cornicione. For a 280g ball, approximately 30cm is a useful starting diameter, not a required specification. In a thoroughly preheated Gozney, 430–450°C stone temperature is a useful home-baking starting point, not a Carmnella specification. Exact flame management depends on the Gozney model and oven conditions.",
      },
    ];
  }

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
    detail: `Gradually add ${Math.round(dough.flour)}g flour to the water. ${yeastText} Mix until a shaggy mass forms, then knead 8–10 min on the Famag spiral mixer (Speed 1–5) until smooth and elastic. Target final dough temp ~22°C.`,
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
