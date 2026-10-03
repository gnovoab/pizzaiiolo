"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Neapolitan Pizza tab baker's percentages (fixed, of flour weight) — the
// single source of truth every dynamic quantity in that tab is derived from.
const NEAPOLITAN_HYDRATION_PCT = 0.62;
const NEAPOLITAN_SALT_PCT = 0.024;
const NEAPOLITAN_YEAST_MIN_PCT = 0.0006;
const NEAPOLITAN_YEAST_MAX_PCT = 0.001;
const NEAPOLITAN_FIRST_FLOUR_PCT = 0.70;
const NEAPOLITAN_REMAINING_FLOUR_PCT = 0.30;

/**
 * Single source of truth for every Neapolitan-tab quantity that depends on
 * the selected flour weight and dough-ball size. No other function or JSX
 * expression in this tab should recompute these ratios directly.
 */
function calculateDoughBatch(flourWeight: number, ballWeight: number) {
  const water = flourWeight * NEAPOLITAN_HYDRATION_PCT;
  const salt = flourWeight * NEAPOLITAN_SALT_PCT;
  const yeastMin = flourWeight * NEAPOLITAN_YEAST_MIN_PCT;
  const yeastMax = flourWeight * NEAPOLITAN_YEAST_MAX_PCT;

  const firstFlour = flourWeight * NEAPOLITAN_FIRST_FLOUR_PCT;
  const remainingFlour = flourWeight * NEAPOLITAN_REMAINING_FLOUR_PCT;

  const totalDoughMin = flourWeight + water + salt + yeastMin;
  const totalDoughMax = flourWeight + water + salt + yeastMax;

  const fullBalls = Math.max(1, Math.floor(totalDoughMin / ballWeight));
  const remainder = Math.max(0, totalDoughMin - fullBalls * ballWeight);

  return {
    flourWeight,
    water,
    salt,
    yeastMin,
    yeastMax,
    firstFlour,
    remainingFlour,
    totalDoughMin,
    totalDoughMax,
    ballWeight,
    fullBalls,
    remainder,
  };
}

/** Shape consumed by <BatchSummary>; every per-style batch calculator below extends this. */
interface DoughBatchSummary {
  flourWeight: number;
  water: number;
  salt: number;
  yeastMin: number;
  yeastMax: number;
  totalDoughMin: number;
  fullBalls: number;
  ballWeight: number;
  remainder: number;
}

// Poolish tab baker's percentages (fixed, of total flour weight) — derived
// from the published 100% Poolish + cold-ferment recipe (500 g Nuvola in the
// poolish stage + 500 g Pizzeria in the final mix, 670 g total water, 24 g
// salt, 0.8 g total yeast split 0.6 g poolish / 0.2 g final mix, per 1,000 g
// total flour).
const POOLISH_NUVOLA_PCT = 0.5;
const POOLISH_PIZZERIA_PCT = 0.5;
const POOLISH_STAGE_WATER_PCT = 0.5;
const POOLISH_FINAL_WATER_PCT = 0.17;
const POOLISH_SALT_PCT = 0.024;
const POOLISH_STAGE_YEAST_PCT = 0.0006;
const POOLISH_FINAL_YEAST_PCT = 0.0002;

/** Single source of truth for every Poolish-tab quantity. */
function calculatePoolishBatch(flourWeight: number, ballWeight: number) {
  const nuvola = flourWeight * POOLISH_NUVOLA_PCT;
  const pizzeria = flourWeight * POOLISH_PIZZERIA_PCT;
  const poolishWater = flourWeight * POOLISH_STAGE_WATER_PCT;
  const finalWater = flourWeight * POOLISH_FINAL_WATER_PCT;
  const water = poolishWater + finalWater;
  const salt = flourWeight * POOLISH_SALT_PCT;
  const poolishYeast = flourWeight * POOLISH_STAGE_YEAST_PCT;
  const finalYeast = flourWeight * POOLISH_FINAL_YEAST_PCT;
  const yeast = poolishYeast + finalYeast;

  const totalDough = flourWeight + water + salt + yeast;
  const fullBalls = Math.max(1, Math.floor(totalDough / ballWeight));
  const remainder = Math.max(0, totalDough - fullBalls * ballWeight);

  return {
    flourWeight, nuvola, pizzeria, water, salt,
    yeastMin: yeast, yeastMax: yeast,
    poolishWater, finalWater, poolishYeast, finalYeast,
    totalDoughMin: totalDough,
    ballWeight, fullBalls, remainder,
  } satisfies DoughBatchSummary & Record<string, number>;
}

export default function DoughMakerPage() {
  const [flourAmount, setFlourAmount] = useState(1000);
  const [ballWeight, setBallWeight] = useState(280);

  const batch = useMemo(() => calculateDoughBatch(flourAmount, ballWeight), [flourAmount, ballWeight]);

  const [poolishFlourAmount, setPoolishFlourAmount] = useState(1000);
  const [poolishBallWeight, setPoolishBallWeight] = useState(280);
  const poolishBatch = useMemo(
    () => calculatePoolishBatch(poolishFlourAmount, poolishBallWeight),
    [poolishFlourAmount, poolishBallWeight]
  );

  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">L&apos;Impasto</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Dough Maker</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Neapolitan, Deep Dish, Detroit-Style, NY, Roman &amp; Sicilian doughs from your spiral mixer — 1,000–3,000 g flour batches (Caputo 00 &amp; Nuvola), Famag IM 5-S-10V (HH).
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl">Equipment</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 grid sm:grid-cols-4 gap-3">
          <EquipmentItem icon="🌀" name="Famag IM 5-S-10V (HH)" detail="Spiral mixer — dual rotation" />
          <EquipmentItem icon="🌾" name="Caputo Pizzeria 00" detail="Flour" />
          <EquipmentItem icon="☁️" name="Caputo Nuvola" detail="Flour" />
          <EquipmentItem icon="🔥" name="Gozney Arc" detail="Gas pizza oven" />
        </CardContent>
      </Card>

      <Tabs defaultValue="neapolitan">
        <TabsList>
          <TabsTrigger value="neapolitan">🇮🇹 Neapolitan Pizza</TabsTrigger>
          <TabsTrigger value="poolish">🫧 Poolish</TabsTrigger>
          <TabsTrigger value="roman">🇮🇹 Roman Thin Pizza</TabsTrigger>
          <TabsTrigger value="sicilian">🇮🇹 Sicilian-Style Pizza</TabsTrigger>
          <TabsTrigger value="ny">🇺🇸 NY Pizza</TabsTrigger>
          <TabsTrigger value="detroit">🇺🇸 Detroit-Style Pizza</TabsTrigger>
          <TabsTrigger value="deepdish">🇺🇸 Chicago Deep Dish Pizza</TabsTrigger>
        </TabsList>

        <TabsContent value="neapolitan" className="space-y-6 mt-4">
          <Section number={1} title="Ingredients" subtitle={`${formatWeight(flourAmount)} flour — Neapolitan style`}>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <Field label="Flour (g)" value={flourAmount} onChange={setFlourAmount} min={1000} max={3000} step={10} />
              <Field label="Dough Ball Size (g)" value={ballWeight} onChange={setBallWeight} min={200} max={400} step={10} />
            </div>

            <BatchSummary batch={batch} />

            <Subhead className="mt-5">Current Recipe</Subhead>
            <Bullets items={[
              `${formatWeight(batch.flourWeight)} 00 flour (Caputo Pizzeria)`,
              `${formatWeight(batch.water)} water`,
              `${formatWeight(batch.salt)} salt`,
              `${formatYeast(batch.yeastMin, batch.yeastMax)} instant dry yeast`,
            ]} />
            <Callout>👉 This is a classic slow-fermentation Neapolitan dough. Choose your flour quantity above and all ingredient quantities scale automatically using the same baker&apos;s percentages.</Callout>
          </Section>

          <Section number={2} title="Famag Spiral Mixer Timeline" subtitle="8–10 minutes total — staged mixing">
            <Subhead>In your Famag IM 5-S-10V (HH)</Subhead>
            <Bullets items={[
              `0–1 min · Speed 1 — Pour the ${formatWeight(batch.water)} cold water into the bowl and dissolve the yeast (${formatYeast(batch.yeastMin, batch.yeastMax)})`,
              `1–3 min · Speed 1–2 — Add approximately ${formatWeight(batch.firstFlour)} of the flour (~70%); mix until a smooth batter forms and the flour is fully hydrated.`,
              `3–5 min · Speed 2–3 — Add ${formatWeight(batch.salt)} fine sea salt and the remaining ${formatWeight(batch.remainingFlour)} of the flour (~30%); mix until no dry flour remains`,
              "5–9/10 min · Speed 4–5 — Increase speed to build the gluten matrix until the dough detaches cleanly from the bowl sides into a smooth ring",
            ]} />
            <Callout>💡 Keep salt and yeast separated at first — important for yeast health. Target total knead time: 8–10 minutes.</Callout>
          </Section>

          <Section number={3} title="Equipment">
            <Bullets items={[
              "Mixer: Famag IM 5-S-10V (HH)",
              "Flour: Caputo Pizzeria 00",
              "Optional flour: Caputo Nuvola — see flour variations",
              "Opening/stretching flour: Caputo Semola Rimacinata",
              "Oven: Gozney Arc",
            ]} />
          </Section>

          <Section number={4} title="After Mixing — Puntata" subtitle="Initial rest: 45–60 minutes at room temperature">
            <p className="text-[15px] mb-3 leading-relaxed">
              <HighlightNumbers text="This is a short initial rest right after mixing — it lets the gluten relax before the dough is divided into balls. This recipe uses the main fermentation as dough balls, not as a single bulk mass." />
            </p>
            <Bullets items={[
              "Tip the dough out if needed",
              "Gently fold/tighten",
              "Cover",
              "Rest 45–60 minutes",
            ]} />
          </Section>

          <Section number={5} title="Staglio — Divide & Ball">
            <p className="text-[15px] mb-3">
              Divide the dough into <span className="font-semibold text-primary">{formatWeight(ballWeight)}</span> portions, producing{" "}
              <span className="font-semibold text-primary">{batch.fullBalls} full dough ball{batch.fullBalls === 1 ? "" : "s"}</span>
              {batch.remainder > 0.5 ? <> plus approximately <span className="font-semibold text-primary">{formatWeight(batch.remainder)}</span> remaining dough</> : null}.
            </p>
            <Bullets items={[
              "Divide accurately on a scale",
              "Shape into smooth, taut balls",
              "Keep the seam underneath",
              "Place into a covered dough tray/container",
            ]} />
          </Section>

          <Section number={6} title="Fermentation Options">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Option A — Cold Fermentation</div>
                <ol className="text-[15px] space-y-1.5 leading-relaxed list-decimal pl-4">
                  <li><HighlightNumbers text="24–48 hours" /> refrigerated as covered dough balls</li>
                  <li>Remove <HighlightNumbers text="4–6 hours" /> before baking</li>
                  <li>Temper at room temperature</li>
                  <li>Bake when balls are soft, relaxed and slightly domed</li>
                </ol>
              </div>
              <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Option B — Same-Day Dough</div>
                <ol className="text-[15px] space-y-1.5 leading-relaxed list-decimal pl-4">
                  <li>Ball after the initial rest</li>
                  <li>Ferment covered for <HighlightNumbers text="4–6 hours" /> at room temperature</li>
                  <li>Bake when relaxed, aerated and slightly domed</li>
                </ol>
              </div>
            </div>
          </Section>

          <Section number={7} title="Why This Ratio Works" subtitle={`For ${formatWeight(flourAmount)} flour`}>
            <div className="grid sm:grid-cols-3 gap-4">
              <RatioCard title={`${Math.round(NEAPOLITAN_HYDRATION_PCT * 100)}% Hydration`}>
                Provides enough water for a soft, extensible dough while retaining the strength needed for hand stretching and high-temperature baking.
              </RatioCard>
              <RatioCard title={`${(NEAPOLITAN_SALT_PCT * 100).toFixed(1)}% Salt`}>
                Provides seasoning while helping regulate fermentation and strengthen the dough structure.
              </RatioCard>
              <RatioCard title={`${(NEAPOLITAN_YEAST_MIN_PCT * 100).toFixed(2)}–${(NEAPOLITAN_YEAST_MAX_PCT * 100).toFixed(2)}% Instant Dry Yeast`}>
                The low yeast level is designed for controlled fermentation over 24–48 hours.
              </RatioCard>
            </div>
            <Subhead className="mt-4">This Gives</Subhead>
            <Bullets items={[
              "Airy cornicione",
              "Soft, flexible interior",
              "Good extensibility",
              "Controlled fermentation",
              "Strong oven spring",
              "Good performance in a high-heat oven",
            ]} />
          </Section>

          <Section number={8} title="From Dough Ball to Pizza" subtitle="Tempered and ready to stretch">
            <p className="text-[15px] mb-3">
              <span className="font-semibold text-primary">{formatWeight(ballWeight)}</span> dough ball → <span className="font-semibold text-primary">30–33 cm</span> pizza
            </p>
            <Bullets items={[
              "Dust with Caputo Semola Rimacinata",
              "Press the centre outward",
              "Preserve the gas around the perimeter",
              "Maintain approximately 1.5–2 cm cornicione",
              `Stretch gently to 30–33 cm for a ${formatWeight(ballWeight)} ball`,
              "Avoid aggressive degassing",
            ]} />
          </Section>

          <Section number={9} title="Gozney Arc — Neapolitan Bake">
            <Bullets items={[
              "Stone floor: 430–450°C",
              "Dynamic top flame",
              "Typical bake: 60–90 seconds",
              "Rotate regularly",
              "Adjust flame according to stone temperature, dough fermentation and topping moisture",
            ]} />
            <Callout>👉 60–90 seconds is a typical range, not a fixed rule — judge doneness by colour and structure.</Callout>
          </Section>

          <Section number={10} title="After the Bake">
            <Bullets items={[
              "Remove onto a wooden board",
              "Rest approximately 30–60 seconds",
              "Avoid a wire cooling rack",
              "Slice and serve",
            ]} />
          </Section>

          <Section number={11} title="Key Mistakes to Avoid">
            <ul className="space-y-2">
              {[
                "Overmixing",
                "Final dough temperature too high",
                "Using excessive flour during shaping",
                "Leaving dough balls uncovered",
                "Overproofing",
                "Aggressive stretching/degassing",
                "Baking before the dough has relaxed",
                "Insufficient room-temperature tempering",
              ].map((t) => (
                <li key={t} className="text-[15px] flex gap-2.5 leading-relaxed">
                  <span className="text-destructive mt-0.5 shrink-0" aria-hidden>❌</span>
                  <span><HighlightNumbers text={t} /></span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number={12} title="Master Workflow" subtitle="The full process, start to finish">
            <div className="flex flex-wrap items-center gap-2">
              {[
                "Mix",
                "45–60 min Puntata",
                `${formatWeight(ballWeight)} Staglio & Balling`,
                "24–48 h Cold Fermentation",
                "4–6 h Room-Temperature Temper",
                "Stretch",
                "430–450°C Gozney Arc",
                "60–90 sec Bake",
                "30–60 sec Rest",
                "Serve",
              ].map((t, i, arr) => (
                <span key={t} className="contents">
                  <WorkflowChip text={t} />
                  {i < arr.length - 1 && <WorkflowArrow />}
                </span>
              ))}
            </div>
          </Section>

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Dough Maker Principle</div>
            <p className="font-serif text-lg italic text-foreground">&ldquo;Control the dough temperature. Control the fermentation. Protect the gas. Then let the oven do the work.&rdquo;</p>
          </div>
        </TabsContent>

        <TabsContent value="poolish" className="space-y-6 mt-4">
          <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
            <HighlightNumbers text="If you want to achieve the absolute gold standard of modern Neapolitan (Canotto-style) pizza in your Gozney, the best approach is to switch from a direct dough to a 100% Poolish Preferment method combined with a cold ferment. This is the technique favored by contemporary Italian master pizzaiolos (like Vito Iacopelli and Diego Vitagliano) and Gozney's own recipe developers. It produces a crust that is dramatically airier, far lighter on the stomach, and explodes into giant, blistered rims under high heat." />
          </p>

          <Section number={1} title="Why the 100% Poolish + Cold Ferment Wins">
            <Bullets items={[
              "Explosive Micro-Bubbling — A Poolish creates heavy enzymatic activity before the final mix. When this liquid starter hits the 450°C Gozney stone, the micro-bubbles expand instantly, puffing the rim into a hollow shell",
              "Softness Without Toughness — Because half the flour gets pre-hydrated overnight, the gluten network becomes extremely relaxed and extensible. You get zero rubbery chew",
              "Deep, Sweet Wheat Flavor — The extended preferment breaks down complex starches into natural sugars, producing a fragrant, sweet, buttery crust aroma instead of a sharp yeast smell",
            ]} />
            <Callout>👉 Uses the Famag spiral mixer only for the final short knead. Choose your flour quantity in the next section and every ingredient scales automatically using the same baker&apos;s percentages.</Callout>
          </Section>

          <Section number={2} title="Two Critical Adjustments for the Gozney" subtitle={`${formatWeight(poolishBatch.flourWeight)} flour and ${formatWeight(poolishBatch.water)} water (67% hydration) are correct — yeast and honey are not`}>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <Field label="Total Flour (g)" value={poolishFlourAmount} onChange={setPoolishFlourAmount} min={1000} max={3000} step={10} />
              <Field label="Dough Ball Size (g)" value={poolishBallWeight} onChange={setPoolishBallWeight} min={200} max={400} step={5} />
            </div>
            <p className="text-[15px] mb-4 leading-relaxed">
              <HighlightNumbers text={`The ${formatWeight(poolishBatch.flourWeight)} flour total and ${formatWeight(poolishBatch.water)} water (67% hydration) are calculated correctly, but there are two critical adjustments to the yeast and honey before you mix this for your Gozney.`} />
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.15em] text-destructive font-semibold mb-2">1. Drop the Honey Completely (0 g)</div>
                <p className="text-[15px] leading-relaxed"><span className="font-semibold">The Error:</span> Adding 6 g of honey to a Poolish cooked in a Gozney at 450–500°C will cause the rim to char and burn too quickly before the inside cooks through. Honey is meant for home ovens (250°C).</p>
                <p className="text-[15px] leading-relaxed mt-2"><span className="font-semibold">The Fix:</span> 0 g honey. At 450°C, the natural sugars released by the Poolish are more than enough to give you perfect leopard spotting without burning.</p>
              </div>
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.15em] text-destructive font-semibold mb-2">2. Reduce the Yeast (0.8–1.0 g max per 1,000 g flour)</div>
                <p className="text-[15px] leading-relaxed"><span className="font-semibold">The Error:</span> 1.6 g of dry yeast across a Poolish + 24-hour cold ferment is too aggressive for 1,000 g of flour. The dough will over-proof in the fridge, become overly acidic, lose its gluten strength, and collapse or tear when stretched.</p>
                <p className="text-[15px] leading-relaxed mt-2"><span className="font-semibold">The Fix:</span> 0.8 g to 1.0 g total dry yeast per 1,000 g flour (about a generous 1/4 tsp).</p>
              </div>
            </div>
          </Section>

          <Section number={3} title="Corrected Final Measurements" subtitle="Gozney + Famag setup">
            <BatchSummary batch={poolishBatch} />
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-[15px] border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-border/70 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 px-1 font-semibold">Ingredient</th>
                    <th className="py-2 px-1 font-semibold">Measurement</th>
                    <th className="py-2 px-1 font-semibold">% Ratio</th>
                    <th className="py-2 px-1 font-semibold">Purpose in the Recipe</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Caputo Nuvola Flour", formatWeight(poolishBatch.nuvola), "50%", "High gas retention for an airy rim"],
                    ["Caputo Pizzeria 00 Flour", formatWeight(poolishBatch.pizzeria), "50%", "Strength and elasticity for the base"],
                    ["Cool Water", formatWeight(poolishBatch.water), "67%", "Moisture for a cloud-like interior in high heat"],
                    ["Trapani / Fine Sea Salt", formatWeight(poolishBatch.salt), "2.4%", "Gluten structure and taste"],
                    ["Caputo Instant Dry Yeast", formatWeightPrecise(poolishBatch.yeastMin), "0.08%", "Just a generous 1/4 tsp for the entire process"],
                    ["Honey / Sugar", "0 g", "0%", "Omit for Gozney to prevent burning"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-border/40 last:border-0">
                      <td className="py-2 px-1 font-medium text-foreground">{row[0]}</td>
                      <td className="py-2 px-1 font-mono text-primary font-semibold whitespace-nowrap">{row[1]}</td>
                      <td className="py-2 px-1 font-mono whitespace-nowrap">{row[2]}</td>
                      <td className="py-2 px-1 text-muted-foreground">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section number={4} title="How to Divide the Yeast Exactly Between Steps" subtitle={`Splitting ${formatWeightPrecise(poolishBatch.poolishYeast + poolishBatch.finalYeast)} across the Poolish and final mix`}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Step 1 — The Poolish (Day 1)</div>
                <ul className="text-[15px] space-y-1.5 leading-relaxed list-disc pl-4">
                  <li>{formatWeight(poolishBatch.nuvola)} Caputo Nuvola</li>
                  <li>{formatWeight(poolishBatch.poolishWater)} Water</li>
                  <li>{formatWeightPrecise(poolishBatch.poolishYeast)} Yeast (a standard 1/4 tsp pinch)</li>
                </ul>
                <p className="text-[15px] mt-2 leading-relaxed">Mix, leave 1 hour on the counter, then fridge for 16–18 hours.</p>
              </div>
              <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Step 2 — The Final Mix (Day 2)</div>
                <ul className="text-[15px] space-y-1.5 leading-relaxed list-disc pl-4">
                  <li>All of the cold Poolish</li>
                  <li>{formatWeight(poolishBatch.pizzeria)} Caputo Pizzeria</li>
                  <li>{formatWeight(poolishBatch.finalWater)} Water</li>
                  <li>{formatWeight(poolishBatch.salt)} Salt</li>
                  <li>{formatWeightPrecise(poolishBatch.finalYeast)} Yeast (a tiny micro-pinch)</li>
                </ul>
                <p className="text-[15px] mt-2 leading-relaxed">Mix in the Famag on Speed 1–3 for 6–8 minutes, then fridge for 24 hours.</p>
              </div>
            </div>
          </Section>

          <Section number={5} title="Phase 1: The Poolish Preferment" subtitle="Day 1 — Morning">
            <ol className="space-y-1.5">
              {[
                `In a glass jar or bowl, mix ${formatWeight(poolishBatch.poolishWater)} of the water and ${formatWeightPrecise(poolishBatch.poolishYeast)} of dry yeast (a standard 1/4 tsp pinch) until dissolved`,
                `Whisk in ${formatWeight(poolishBatch.nuvola)} of the Caputo Nuvola flour until a smooth, pancake-like batter forms`,
                "Cover loosely and leave on the counter at room temperature for 1 hour to kickstart fermentation, then place in the refrigerator (4°C) for 16–18 hours",
              ].map((t, i) => (
                <li key={t} className="text-[15px] flex gap-2.5 leading-relaxed">
                  <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
                  <span><HighlightNumbers text={t} /></span>
                </li>
              ))}
            </ol>
            <Callout>💡 It will double in size and become bubbly. No honey — the natural sugars from the Poolish are enough for a Gozney-hot bake.</Callout>
          </Section>

          <Section number={6} title="Phase 2: The Final Knead" subtitle="Day 2 — Morning">
            <ol className="space-y-1.5">
              {[
                "Scrape the cold, bubbly Poolish directly into the Famag bowl",
                `Pour in the remaining ${formatWeight(poolishBatch.finalWater)} of cold water`,
                `Add the remaining ${formatWeight(poolishBatch.pizzeria)} Caputo Pizzeria flour, the remaining ${formatWeightPrecise(poolishBatch.finalYeast)} dry yeast (a tiny micro-pinch), and the ${formatWeight(poolishBatch.salt)} salt`,
                "Run Speed 1–2 for the first 2–3 minutes, then Speed 3–4 for 6 to 8 minutes max — just until a smooth, cohesive dough ball detaches from the bowl",
                "Stop the mixer immediately once the dough is smooth",
              ].map((t, i) => (
                <li key={t} className="text-[15px] flex gap-2.5 leading-relaxed">
                  <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
                  <span><HighlightNumbers text={t} /></span>
                </li>
              ))}
            </ol>
          </Section>

          <Section number={7} title="Phase 3: Cold Ferment & Balling" subtitle="Day 2 to Day 3">
            <Bullets items={[
              "Transfer the dough to an airtight container and place it back in the fridge (4°C) for 24 hours",
              `5 to 6 hours before baking on Day 3, take the cold dough out and divide it into ${poolishBatch.fullBalls} equal ball${poolishBatch.fullBalls === 1 ? "" : "s"} (~${formatWeight(poolishBatch.ballWeight)} each)${poolishBatch.remainder > 0.5 ? ` plus approximately ${formatWeight(poolishBatch.remainder)} remaining dough` : ""}`,
              "Shape gently into tight balls, place in a covered proofing box, and let rise at room temperature (20°C–22°C) until doubled, pillowy, and soft",
            ]} />
          </Section>

          <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
            <HighlightNumbers text="Handling a 67% hydration Poolish dough requires a different touch than a lower-hydration direct dough. Because the preferment makes the gluten extremely extensible (stretchy and relaxed), the dough will open up almost effortlessly, but it can tear if pulled aggressively or stretched from the center. Here is the step-by-step master technique for shaping, launching, and controlling the flame in your Gozney (Roccbox, Arc, or Dome) to achieve a giant, airy cornicione without burning." />
          </p>

          <Section number={8} title="Preheat the Gozney & Prep Your Station" subtitle="Set up before touching the dough">
            <Bullets items={[
              "Preheat the oven: turn your Gozney flame to MAX for 30–40 minutes until the stone temperature reads 430–450°C (800–840°F) on an infrared thermometer",
              "Prep the workstation: dump a generous mound of Caputo Semolina Rimacinata onto your work surface",
              "Dough box prep: dust the top of your dough balls inside the proofing container with a light sprinkling of semolina so your hands don't stick when lifting them out",
            ]} />
          </Section>

          <Section number={9} title="Extract the Dough Ball" subtitle="Preserve the gas structure">
            <Bullets items={[
              "Use a wide flexible dough spatula/scraper to scoop around the dough ball",
              "Lift gently from underneath — do not pull from the top, or you will deflate the delicate gas pockets built up by the Poolish",
              "Drop the ball directly into the mound of semolina, coating both the top and bottom completely",
            ]} />
          </Section>

          <Section number={10} title="Form the Rim (Gas Pushing Technique)" subtitle="Never touch the outer ring!">
            <Bullets items={[
              "Place the semolina-coated dough ball on a clean spot on your counter",
              "Keeping your fingers flat and joined together, press into the dough starting 1.5 cm (0.5 inch) away from the edge",
              "Push the trapped air outwards toward the rim using short, firm presses. Work your way down, flip the dough over, and repeat the process going back up",
            ]} />
            <Callout>⚠️ Rule: Never press down on the outer 1.5 cm edge — this ring must stay uncompressed to expand into a giant, airy cornicione.</Callout>
          </Section>

          <Section number={11} title="Open the Base" subtitle="Neapolitan Slap or Knuckle Stretch — avoid pulling from the center">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                <div className="font-serif text-base font-semibold mb-1.5">Steering Wheel / Gravity Method</div>
                <p className="text-[15px] leading-relaxed">Pick up the dough by holding the inner boundary of the rim with both hands, letting gravity pull the dough down while rotating it like a steering wheel.</p>
              </div>
              <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
                <div className="font-serif text-base font-semibold mb-1.5">Knuckle Stretch</div>
                <p className="text-[15px] leading-relaxed">Make two fists, place your knuckles beneath the inner circle of the dough, and gently pull your hands apart. Rotate 90° and repeat.</p>
              </div>
            </div>
            <Callout>👉 Stop stretching once the base reaches 28–30 cm (11–12 inches). The middle will feel thin, while the outer rim will look noticeably thick and puffy.</Callout>
          </Section>

          <Section number={12} title="Top & Load the Peel" subtitle="Keep movement fast to prevent sticking">
            <Bullets items={[
              "Perforated peel: lightly dust your launch peel with a tiny bit of semolina (shake off any excess)",
              "Quick topping: spread your crushed San Marzano DOP tomatoes, fresh mozzarella, olive oil, and basil quickly — high-hydration dough absorbs moisture fast, so if toppings sit too long, the dough will stick to the peel",
              "Drag the pizza onto your peel in one smooth, confident movement",
            ]} />
          </Section>

          <Section number={13} title="Flame Management & Baking in the Gozney" subtitle="Prevent burning the high rim">
            <ol className="space-y-1.5">
              {[
                "Lower the flame: right before launching, turn the Gozney burner knob down to LOW (or medium-low) — the high-hydration rim expands so tall that a maximum top flame will scorch it before the interior bakes",
                "The launch: aim for the back-middle of the stone (where heat is most even) and slide the pizza off the peel with a crisp back-and-forth motion",
                "The first turn: let the pizza cook untouched for 25–30 seconds until the base sets and the back rim begins to puff and spot",
                "Rotate: insert your turning peel under the firm base and rotate 180° so the front rim moves toward the back flame. Turn every 15 seconds",
              ].map((t, i) => (
                <li key={t} className="text-[15px] flex gap-2.5 leading-relaxed">
                  <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
                  <span><HighlightNumbers text={t} /></span>
                </li>
              ))}
            </ol>
            <Callout>🔥 Total bake time: 75 to 90 seconds.</Callout>
          </Section>

          <Section number={14} title="Post-Bake Rest" subtitle="Maintain crispness">
            <Bullets items={[
              "Retrieve the pizza and place it onto a wire cooling rack for 60 seconds before moving it to a wooden cutting board or plate",
            ]} />
            <Callout>💡 Why? Placing a 67% hydration pizza directly onto a flat board creates steam underneath, turning the bottom crust soggy. A cooling rack lets steam vent, keeping the bottom shell crisp.</Callout>
          </Section>

          <Section number={15} title="Critical Reminders for High Hydration (67%)">
            <Bullets items={[
              "Use semolina, not 00 flour, for dusting — raw 00 flour burns at 450°C and tastes bitter. Semolina acts like tiny ball bearings beneath the wet dough and slides off the perforated peel cleanly",
              "Keep sauce cold/room temp — never put warm tomato sauce on high-hydration dough; it weakens the gluten instantly and causes tears",
              "Don't overload the middle — high-hydration dough is delicate. Keep your sauce layer thin and cheese spread evenly so the center doesn't get weighed down or soggy",
            ]} />
          </Section>
        </TabsContent>

        <TabsContent value="deepdish" className="space-y-6 mt-4">
          <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
            <HighlightNumbers text="This guide synthesizes your specific equipment (Famag IM 5-S-10V (HH) spiral mixer) and ingredients with professional techniques to create a deep-pan pizza. Quantities below use 1,000 g total flour (yields roughly two 9–10 inch pans) — double everything again for a 2,000 g (2 kg) batch." />
          </p>

          <Section number={1} title="The Poolish" subtitle="The Kickstart">
            <p className="text-[15px] text-muted-foreground italic mb-3">Do this the night before or at least 4 hours before mixing the final dough.</p>
            <Subhead>Combine</Subhead>
            <Bullets items={[
              "In a clean bowl, mix 200g of All-Purpose Flour and 200g of water (room temperature)",
            ]} />
            <Subhead className="mt-4">Add Yeast</Subhead>
            <Bullets items={[
              "Add roughly 0.2g (a tiny pinch) of your dry yeast",
            ]} />
            <Subhead className="mt-4">Rest</Subhead>
            <Bullets items={[
              "Cover with a damp cloth and let it sit at room temperature",
              "It will become bubbly and active, essentially pre-digesting the flour and building flavor",
            ]} />
          </Section>

          <Section number={2} title="The Final Dough" subtitle="Spiral Mixer">
            <p className="text-[15px] text-muted-foreground italic mb-3">Use your Famag IM 5-S-10V (HH).</p>
            <Subhead>Add to Bowl</Subhead>
            <Bullets items={[
              "Add the remaining 800g of All-Purpose Flour and 350g–380g of water (55–58% hydration) to the Famag bowl",
            ]} />
            <Subhead className="mt-4">Add Poolish</Subhead>
            <Bullets items={[
              "Add the active poolish from Phase 1",
              "Add 2g instant dry yeast for reliable rise",
            ]} />
            <Subhead className="mt-4">Add Sweetener</Subhead>
            <Bullets items={[
              "Add 2–4 tsp of honey (this aids crust color and yeast activity)",
            ]} />
            <Subhead className="mt-4">Add Fat</Subhead>
            <Bullets items={[
              "Add 50g butter or olive oil — essential for that tender, shortbread-like deep dish crust",
            ]} />
            <Subhead className="mt-4">Mixing Speed</Subhead>
            <Bullets items={[
              "Run Speed 1–2 for 2–3 minutes to combine, then Speed 3–4 to knead",
            ]} />
            <Subhead className="mt-4">The Salt Rule</Subhead>
            <Bullets items={[
              "Since salt can inhibit yeast, add your 20g of salt roughly 5 minutes after the mixer starts kneading, or towards the end of the initial mix",
            ]} />
            <Subhead className="mt-4">Knead</Subhead>
            <Bullets items={[
              "Let the mixer run until the dough is smooth and pulls cleanly from the bowl — about 8–10 minutes total",
            ]} />
          </Section>

          <Section number={3} title="Fermentation &amp; Storage">
            <Subhead>Bulk Rise</Subhead>
            <Bullets items={[
              "Let the dough rise in a covered bowl at room temperature for 1–2 hours",
            ]} />
            <Subhead className="mt-4">Cold Ferment</Subhead>
            <Bullets items={[
              "Transfer the dough to a sealed container and place it in the refrigerator overnight",
              'This is the "secret" to the airy, professional texture',
            ]} />
          </Section>

          <Section number={4} title="Shaping &amp; Stretching" subtitle="2 hours before baking">
            <Subhead>Room Temp</Subhead>
            <Bullets items={[
              "Remove the dough from the fridge and let it sit on the counter for 30–60 minutes to take the chill off",
            ]} />
            <Subhead className="mt-4">Pan Prep</Subhead>
            <Bullets items={[
              "Lightly oil your pizza pan (use a high-smoke point oil)",
            ]} />
            <Subhead className="mt-4">The Press</Subhead>
            <Bullets items={[
              "Place the dough in the pan. Gently press it outward from the center",
            ]} />
            <Subhead className="mt-4">The Goal</Subhead>
            <Bullets items={[
              "Ensure the dough is perfectly even and pushed up the sides to form a lip",
              "If it snaps back, let it rest for 10 minutes and try again",
              "Evenness is critical to prevent sauce leaks",
            ]} />
          </Section>

          <Section number={5} title="Assembly &amp; Baking">
            <Subhead>Layer the Cheese</Subhead>
            <Bullets items={[
              "Place your mozzarella slices (roughly 12–20, depending on pan size) along the bottom and, crucially, right up against the vertical sides of the pan",
              "This creates that caramelized pre-co edge",
            ]} />
            <Subhead className="mt-4">Add Toppings</Subhead>
            <Bullets items={[
              "Place your meat/toppings inside the cheese ring",
            ]} />
            <Subhead className="mt-4">Add Sauce</Subhead>
            <Bullets items={[
              "Spoon your raw San Marzano sauce over the top. Keep it simple — don&apos;t drown the tomatoes",
            ]} />
            <Subhead className="mt-4">Bake</Subhead>
            <Bullets items={[
              "Preheat your oven to a high setting (typically 220°C–240°C)",
              "Bake until the crust is a deep golden brown and the cheese at the edges is bubbling and darkened",
              "Visual check is better than a timer",
            ]} />
          </Section>

          <Section number={6} title="Finishing">
            <Subhead>Release</Subhead>
            <Bullets items={[
              "As soon as it comes out, use a spatula to quickly run around the edge to ensure the caramelized cheese hasn&apos;t bonded to the pan",
            ]} />
            <Subhead className="mt-4">Rest</Subhead>
            <Bullets items={[
              "Let it sit for 2–5 minutes. This allows the steam to escape and prevents the soggy bottom effect",
            ]} />
            <Subhead className="mt-4">Serve</Subhead>
            <Bullets items={[
              "Slice and enjoy",
            ]} />
          </Section>

          <div className="border-l-2 border-primary/30 pl-4 py-1 text-sm text-muted-foreground italic leading-relaxed">
            <HighlightNumbers text="Pro tip: Since you are using a spiral mixer, the poolish method ensures you get that professional, long-fermented flavor profile despite the convenience of the machine. If you find the dough too wet when pressing into the pan, reduce the water in the final dough step by 10g next time." />
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
            <a
              href="https://www.youtube.com/watch?v=JtNtB2Og4U4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
            >
              ▶ Deep Dish Pizza tutorial <span className="text-xs opacity-60">↗</span>
            </a>
          </div>
        </TabsContent>

        <TabsContent value="detroit" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="This guide combines your Famag IM 5-S-10V (HH) spiral mixer for precision dough development with your Gozney Arc for professional-level crust finishing. Quantities below use 1,000 g total flour (yields roughly two standard Detroit pans) — double everything again for a 2,000 g (2 kg) batch." />
            </p>

            <Section number={1} title="The Dough" subtitle="Famag IM 5-S-10V (HH)">
              <Subhead>Standard Recipe</Subhead>
              <Bullets items={[
                "Use your standard recipe (1,000g Bread Flour, ~680g water, 24g salt, 1g yeast) + 2–4 tsp honey",
              ]} />

              <Subhead className="mt-4">
                <span>Poolish</span>
                <span className="text-[10px] tracking-wider text-muted-foreground font-normal normal-case italic ml-1">(Optional but Recommended)</span>
              </Subhead>
              <details className="group mt-2 rounded-lg border border-border/70 bg-muted/20">
                <summary className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-secondary cursor-pointer hover:text-foreground transition-colors select-none [&::-webkit-details-marker]:hidden">
                  <svg className="size-3.5 shrink-0 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  How to prepare the poolish
                </summary>
                <div className="px-3 pb-3 text-[13px] leading-relaxed text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">Ratio:</strong> Mix 200g of your Bread Flour and 200g of room-temperature water.</p>
                  <p><strong className="text-foreground">Yeast:</strong> Add a very small pinch of your dry yeast (~0.2g). Too much will cause it to ferment too quickly.</p>
                  <p><strong className="text-foreground">Rest:</strong> Stir until smooth, cover, and let sit at room temperature for 4–8 hours.</p>
                  <p><strong className="text-foreground">Visual cue:</strong> Surface covered in bubbles and frothy.</p>
                  <p>When ready, scrape the bubbly poolish into the Famag bowl along with the remaining flour, water, and yeast before mixing.</p>
                </div>
              </details>
              <Bullets items={[
                "Mix 200g flour, 200g water, and a pinch of yeast 4–8 hours before",
                "Cover and let it ferment at room temperature until bubbly and active",
              ]} />

              <Subhead className="mt-4">Spiral Mixer</Subhead>
              <Bullets items={[
                "Add all ingredients to the Famag bowl",
                "Run Speed 1–2 for 2–3 minutes, then Speed 3–4 for 6–8 minutes until smooth",
              ]} />

              <Subhead className="mt-4">Salt</Subhead>
              <Bullets items={[
                "Add the 24g of salt 5 minutes after the mixer starts",
              ]} />

              <Subhead className="mt-4">Bulk Rise</Subhead>
              <Bullets items={[
                "Let it sit in a bowl at room temp for 1 hour",
              ]} />

              <Subhead className="mt-4">Cold Ferment</Subhead>
              <Bullets items={[
                "Place in the fridge overnight. This is mandatory for professional flavor and structure",
              ]} />
            </Section>

            <Section number={2} title="Shaping &amp; Proofing" subtitle="The Setup">
              <Subhead>Prep</Subhead>
              <Bullets items={[
                "Remove dough 1 hour before baking",
                "Oil your rectangular Detroit-style pan (blue steel or anodized aluminum) heavily",
              ]} />

              <Subhead className="mt-4">Stretch</Subhead>
              <Bullets items={[
                "Press the dough into the pan",
                "If it snaps back, let it rest for 10 minutes and press again until it reaches all four corners",
              ]} />

              <Subhead className="mt-4">The Long Proof</Subhead>
              <Bullets items={[
                "This is the most important step for the light interior",
                "Cover and let it rise in the pan for 80–90 minutes",
              ]} />
            </Section>

            <Section number={3} title="The Gozney Arc Bake">
              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Heat your Gozney Arc to 250°C (480°F) on the stone surface",
                "Keep the flame on LOW",
              ]} />

              <Subhead className="mt-4">Par-Bake</Subhead>
              <Bullets items={[
                "Place the pan with just the dough into the oven",
                "Bake for 3–5 minutes, rotating once",
                "The goal is to set the structure so it doesn&apos;t collapse",
                "Remove the pan",
              ]} />

              <Subhead className="mt-4">Assembly</Subhead>
              <Bullets items={[
                "Apply your brick cheese/mozzarella blend all the way to the edges so it touches the pan",
                "Add your pepperoni",
              ]} />

              <Subhead className="mt-4">Final Bake</Subhead>
              <Bullets items={[
                "Place the pan back in the oven on low flame",
                "Bake until the cheese is bubbling and dark brown on the edges",
              ]} />

              <Callout>💡 If the top is browning too fast, tent it loosely with aluminum foil for the last 2 minutes.</Callout>

              <Subhead className="mt-4">Sauce</Subhead>
              <Bullets items={[
                "Apply your raw, seasoned San Marzano sauce in stripes on top after pulling it out, or during the last 2 minutes of the bake",
              ]} />
            </Section>

            <Section number={4} title="The Finish">
              <Subhead>Release</Subhead>
              <Bullets items={[
                "Immediately use a spatula to run around the edge of the pan to break the caramelized cheese seal",
              ]} />

              <Subhead className="mt-4">Rest</Subhead>
              <Bullets items={[
                "Let the pizza sit in the pan for 2–3 minutes to allow steam to escape",
              ]} />

              <Subhead className="mt-4">Serve</Subhead>
              <Bullets items={[
                "Transfer to a wire rack or cutting board",
                "Garnish with hot honey or truffle oil",
              ]} />
            </Section>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-2">
              <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold">Pro Summary for Your Gear</div>
              <ul className="text-[15px] space-y-1.5 leading-relaxed">
                <li>🌀 <strong className="text-foreground">Famag:</strong> Takes care of the heavy lifting of kneading and initial fermentation.</li>
                <li>🧊 <strong className="text-foreground">Cold Ferment:</strong> Your secret weapon for deep flavor.</li>
                <li>🔥 <strong className="text-foreground">Gozney Arc:</strong> Used as a low-temperature deck oven. Keeping the flame LOW and using the par-bake method prevents the top from burning while the bottom gets that signature cracker-like crunch.</li>
              </ul>
            </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
            <div className="flex flex-col gap-1.5">
              <a
                href="https://www.youtube.com/watch?v=_my8uyoR-Sc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
              >
                ▶ Detroit-Style Pizza tutorial <span className="text-xs opacity-60">↗</span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=Eq6TQY93XiE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
              >
                ▶ Detroit-Style Pizza — how to <span className="text-xs opacity-60">↗</span>
              </a>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ny" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="To get that authentic, foldable, crispy-yet-chewy New York slice, this lower-hydration, oil-enriched dough is designed for your Gozney Arc's stone-baking capabilities. Quantities below use 1,000 g total flour — double everything again for a 2,000 g (2 kg) batch." />
            </p>

            <Section number={1} title="The Proper NY Dough Recipe" subtitle="Famag IM 5-S-10V (HH)">
              <Subhead>Ingredients</Subhead>
              <Bullets items={[
                "1,000g Bread Flour (or High-Gluten Flour — essential for that signature NY chew)",
                "580g Water (Cold)",
                "30g Olive Oil (essential for the NY texture)",
                "24g Salt",
                "0.6g Dry Yeast (a tiny pinch — NY dough needs a slower, longer rise)",
                "2 tsp Honey (optional, for better browning)",
              ]} />

              <Subhead className="mt-4">The Procedure</Subhead>
              <Bullets items={[
                "Poolish (optional): Mix 200g flour, 200g water, pinch of yeast. Let sit 4–8 hours.",
                "Spiral Mixer: Add all ingredients (including poolish) to the Famag bowl. Run Speed 1–2 for 2–3 minutes, then Speed 3–4 until smooth.",
                "Salt &amp; Oil: Add salt and olive oil 5 minutes after the mixer starts kneading.",
                'The "Crispy" Adjustment: When the dough detaches cleanly from the bowl (around 8–10 minutes total), take it out and hand-knead it for 60 seconds on the counter. Feel for a supple, elastic texture. If it feels sticky, add a dusting of flour. This hand-work connects you to the dough structure.',
                "Balling: Once done, divide into four equal pieces (~400g each). Roll into tight, smooth balls.",
                "Cold Ferment: Place each ball into a separate, lightly oiled container. Refrigerate for 24–72 hours. This is the key to the New York flavor and structure.",
              ]} />
            </Section>

            <Section number={2} title="The Stretching Ritual">
              <Subhead>Tempering</Subhead>
              <Bullets items={[
                "Take your dough out of the fridge 2 hours before baking. Cold dough will fight you and shrink back.",
              ]} />

              <Subhead className="mt-4">The Surface</Subhead>
              <Bullets items={[
                "Use a light dusting of your Caputo Rimacinata (semolina) on the counter.",
              ]} />

              <Subhead className="mt-4">The Technique</Subhead>
              <Bullets items={[
                "Press the center of the ball down, pushing air outward toward the edges. Do not squash the rim.",
                "Pick it up and gently rotate it over your knuckles, letting gravity stretch it to about 14 inches.",
                "The center should be thin enough to see light through it; the rim should remain slightly thicker.",
              ]} />
            </Section>

            <Section number={3} title="The Gozney Arc Bake">
              <p className="text-[15px] text-muted-foreground italic mb-3">With a lower-hydration dough, you need to manage heat carefully for a crispy bottom without burning the top.</p>

              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Get your Gozney Arc stone to 380°C (720°F).",
              ]} />

              <Subhead className="mt-4">Flame Control</Subhead>
              <Bullets items={[
                "Turn the flame to LOW before you launch the pizza.",
              ]} />

              <Subhead className="mt-4">Assembly</Subhead>
              <Bullets items={[
                "Stretch the dough on a peel.",
                "Apply a thin, even layer of sauce.",
                "Apply a moderate amount of low-moisture, grated mozzarella.",
              ]} />

              <Subhead className="mt-4">The Launch</Subhead>
              <Bullets items={[
                "Slide it onto the center of the stone.",
              ]} />

              <Subhead className="mt-4">The Rotation</Subhead>
              <Bullets items={[
                "This is a 3–5 minute bake. Rotate the pizza 90 degrees every 60 seconds.",
                "Look for a uniform, golden-brown crust and a blistered, melted cheese top.",
              ]} />
            </Section>

            <Section number={4} title='The Pro "NY" Finishing Touches'>
              <Subhead>The Cut</Subhead>
              <Bullets items={[
                "Use a pizza wheel or rocker blade to cut it into 8 large, classic NY triangles.",
              ]} />

              <Subhead className="mt-4">The Fold</Subhead>
              <Bullets items={[
                "Pick up a slice, fold it down the center, and enjoy.",
                "The bottom should be rigid enough to hold the weight of the cheese without flopping too much.",
              ]} />

              <Subhead className="mt-4">Garnish</Subhead>
              <Bullets items={[
                "A classic NY pizzeria move: offer a side of garlic dipping sauce or a light dusting of dried oregano and parmesan immediately after it comes out of the oven.",
              ]} />
            </Section>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3">Summary Checklist for Success</div>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left font-semibold text-foreground pb-2 pr-4">Stage</th>
                      <th className="text-left font-semibold text-foreground pb-2">Key Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Hydration</td>
                      <td className="py-2"><HighlightNumbers text="58% (580g water / 1,000g flour) — keeps it foldable, not soggy." /></td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Fermentation</td>
                      <td className="py-2"><HighlightNumbers text="24+ hours cold — essential for the New York taste." /></td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Stretching</td>
                      <td className="py-2">Knuckle-stretch — keep the rim airy, center thin.</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Bake</td>
                      <td className="py-2"><HighlightNumbers text="Medium-High Stone / Low Flame — even cooking without scorching." /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
            <div className="flex flex-col gap-1.5">
              <a
                href="https://www.youtube.com/watch?v=i1a1QTQ6MNY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
              >
                ▶ New York-Style Pizza tutorial <span className="text-xs opacity-60">↗</span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=R8V0WYS-f7I"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
              >
                ▶ NY Pizza style — video guide <span className="text-xs opacity-60">↗</span>
              </a>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="roman" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="Roman thin-crust pizza (Pizza Tonda Romana) is the antithesis of the soft, airy Neapolitan style. Thin, biscuit-like, and shatteringly crispy with zero flop. Quantities below use 1,000 g total flour — double everything again for a 2,000 g (2 kg) batch." />
            </p>

            <Section number={1} title="The Roman Dough" subtitle="Famag IM 5-S-10V (HH)">
              <p className="text-[15px] text-muted-foreground italic mb-3">The key difference: olive oil and lower hydration for a crisp rather than chewy crust.</p>

              <Subhead>Ingredients</Subhead>
              <Bullets items={[
                '1,000g Strong 00 Flour (W300+) or Bread Flour (or a blend of 800g strong flour + 200g Semolina Rimacinata for extra crunch)',
                "550g–570g Water (aim for ~55–57% hydration)",
                "50g Extra Virgin Olive Oil (the secret to elasticity and biscuit texture)",
                "24g Salt",
                "0.6g Dry Yeast",
              ]} />

              <Subhead className="mt-4">Method</Subhead>
              <Bullets items={[
                "Add ingredients to the Famag bowl and run Speed 1–2 for 2–3 minutes, then Speed 3–4 until smooth (8–10 minutes total).",
                "Add salt and oil 5 minutes into the kneading process.",
                "Once mixing finishes, bulk ferment in a covered bowl for 1 hour at room temp.",
                "Cold Ferment: Transfer to the fridge for 12–24 hours. Vital for breaking down proteins and creating a light, digestible structure.",
              ]} />
            </Section>

            <Section number={2} title="The Shaping" subtitle="Rolling is allowed!">
              <p className="text-[15px] text-muted-foreground italic mb-3">Unlike Neapolitan style where air bubbles are protected, Roman Tonda is often rolled.</p>

              <Subhead>Divide</Subhead>
              <Bullets items={[
                "Split your dough into 180g–200g balls.",
              ]} />

              <Subhead className="mt-4">Stretch</Subhead>
              <Bullets items={[
                "Use a rolling pin to flatten the dough until very thin and even.",
                "You are not looking for a puffy cornicione — aim for almost uniform thickness from center to edge.",
              ]} />

              <Subhead className="mt-4">Docking</Subhead>
              <Bullets items={[
                "If the dough is very thin, lightly dock (poke holes with a fork) the center to prevent large bubbles during the bake.",
              ]} />
            </Section>

            <Section number={3} title="The Gozney Arc Bake" subtitle="The Slow Crisp">
              <p className="text-[15px] text-muted-foreground italic mb-3">For cracker-like crunch, manage the oven differently than for Neapolitan.</p>

              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Aim for a stone temperature of 300°C–350°C (575°F–660°F).",
              ]} />

              <Subhead className="mt-4">Flame</Subhead>
              <Bullets items={[
                "Keep the flame on LOW. Let the stone do the work of drying out the crust.",
              ]} />

              <Subhead className="mt-4">The Bake</Subhead>
              <Bullets items={[
                "Slide the pizza onto the stone.",
                "Bake for 3–5 minutes. The thin dough crisps up quickly.",
                "Rotate frequently to ensure the edge doesn&apos;t burn while the center crisps.",
              ]} />

              <Subhead className="mt-4">Visual Cue</Subhead>
              <Bullets items={[
                "Look for a uniform, golden-brown color across the entire base.",
                "It should feel rigid, not pliable, when you lift it.",
              ]} />
            </Section>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
              <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold">Pro Tips for Pizza Romana Success</div>
              <Bullets items={[
                "Toppings: Roman pizzas are elegant and minimal. Use high-quality, drier toppings. Avoid wet vegetables or excess sauce — the thin base will get soggy instantly.",
                'Semolina: Mix 20% Semolina Rimacinata into your flour for a significantly crunchier bottom — a common trick in Roman pizzerias.',
                'The "No Flop" Test: A proper Roman tonda should not sag. When you pick up a slice, it should stay perfectly straight. If it flops, roll it thinner next time.',
              ]} />
            </div>
        </TabsContent>

        <TabsContent value="sicilian" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="Sicilian-style pizza (Sfincione) is built on a pan-proof method — a sponge-like, airy crumb that soaks up sauce while maintaining a crispy, fried bottom. Quantities below use 1,000 g total flour (yields roughly two pans) — double everything again for a 2,000 g (2 kg) batch." />
            </p>

            <Section number={1} title="The Sicilian Dough" subtitle="Famag IM 5-S-10V (HH)">
              <Subhead>Ingredients</Subhead>
              <Bullets items={[
                "1,000g High-Protein Bread Flour (better than 00 for that tall, airy sponge)",
                "700g Water (70% hydration — Sicilian dough should be quite soft and tacky)",
                "40g Extra Virgin Olive Oil",
                "20g Salt",
                "1g Dry Yeast",
              ]} />

              <Subhead className="mt-4">Method</Subhead>
              <Bullets items={[
                "Add ingredients to the Famag bowl. Run Speed 1–2 for 2–3 minutes, then Speed 3–4 until smooth (8–10 minutes total).",
                "Add salt and oil 5 minutes after mixing starts.",
                "Once mixing finishes, let the dough rest in a lightly oiled bowl for 1 hour at room temperature.",
              ]} />
            </Section>

            <Section number={2} title="The Pan-Proof" subtitle="Crucial">
              <Subhead>Prep</Subhead>
              <Bullets items={[
                "Heavily oil a deep-sided rectangular metal baking pan — lots of olive oil, this is how you get the fried bottom.",
              ]} />

              <Subhead className="mt-4">Pan-Transfer</Subhead>
              <Bullets items={[
                "Place the dough into the pan. Don&apos;t force it to the corners yet. Cover and let it sit for 30 minutes.",
              ]} />

              <Subhead className="mt-4">The Gentle Stretch</Subhead>
              <Bullets items={[
                "After 30 minutes, the gluten will have relaxed. Gently stretch it toward the corners.",
                "If it snaps back, leave it alone for another 15 minutes.",
              ]} />

              <Subhead className="mt-4">The Long Rise</Subhead>
              <Bullets items={[
                "Cover the pan and let it proof at room temperature for 2–3 hours.",
                "You want the dough to be very bubbly and reach about 1–1.5 inches in height. It should look like a thick sponge.",
              ]} />
            </Section>

            <Section number={3} title="Assembly" subtitle="The Sicilian Way">
              <Subhead>Dimpling</Subhead>
              <Bullets items={[
                "Once proofed, lightly dimple the surface with your fingers (like focaccia).",
              ]} />

              <Subhead className="mt-4">Toppings</Subhead>
              <Bullets items={[
                "Use a bright, seasoned tomato sauce that soaks in.",
                "Add plenty of olive oil, oregano, and finely grated Pecorino Romano.",
                "Add mozzarella (often underneath the sauce) and any other toppings.",
              ]} />

              <Subhead className="mt-4">Final Rest</Subhead>
              <Bullets items={[
                "Let it sit for another 15–20 minutes while you prep the oven.",
              ]} />
            </Section>

            <Section number={4} title="The Gozney Arc Bake">
              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Aim for 275°C–300°C (530°F–575°F).",
              ]} />

              <Subhead className="mt-4">Flame</Subhead>
              <Bullets items={[
                "Keep the flame on LOW. Sicilian pizza needs a longer bake to cook the thick center through without burning the top.",
              ]} />

              <Subhead className="mt-4">Bake</Subhead>
              <Bullets items={[
                "Slide the pan onto the stone. Bake for 10–14 minutes, rotating the pan halfway through.",
              ]} />

              <Subhead className="mt-4">Visual Cue</Subhead>
              <Bullets items={[
                "The crust should be a deep golden brown, and the bottom should be crispy and fried from the oil in the pan.",
              ]} />
            </Section>

            <Section number={5} title="Final Touch">
              <Subhead>Release</Subhead>
              <Bullets items={[
                "Immediately run a spatula around the edge of the pan to release the crust.",
              ]} />

              <Subhead className="mt-4">Rest</Subhead>
              <Bullets items={[
                "Let it rest on a wire rack for at least 5 minutes. This is mandatory; otherwise, the steam will make the bottom soggy.",
              ]} />
            </Section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Section({ number, title, subtitle, children }: { number: number; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="pb-3 border-b border-border/60">
        <CardTitle className="font-serif text-xl flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">{number}.</span>{" "}
          <span className="flex-1 min-w-0">
            <span className="text-foreground block leading-tight">{title}</span>
            {subtitle && <>{"\n"}<span className="block text-xs font-sans font-normal text-muted-foreground italic mt-0.5 normal-case tracking-normal">{subtitle}</span></>}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-[15px] pt-4">{children}</CardContent>
    </Card>
  );
}

function Subhead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2 ${className}`}>{children}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((t) => (
        <li key={t} className="text-[15px] flex gap-2 leading-relaxed">
          <span className="text-primary/70 mt-1 shrink-0" aria-hidden>•</span>
          <span><HighlightNumbers text={t} /></span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-3">{children}</p>;
}

function fmtG(n: number, decimals = 0): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: decimals });
}

/** Rounds to the nearest gram and formats with thousands separators, e.g. 1234.56 -> "1,235 g". */
function formatWeight(n: number): string {
  if (isNaN(n) || !isFinite(n)) return "—";
  return `${fmtG(n, 0)} g`;
}

/** Formats a yeast range to a fixed one decimal place, e.g. (0.6, 1.0) -> "0.6–1.0 g". Collapses to a single value when min equals max. */
function formatYeast(min: number, max: number): string {
  if (isNaN(min) || isNaN(max) || !isFinite(min) || !isFinite(max)) return "—";
  if (Math.abs(max - min) < 0.001) return `${min.toFixed(1)} g`;
  return `${min.toFixed(1)}–${max.toFixed(1)} g`;
}

/** Formats a small quantity (e.g. yeast) to a fixed one decimal place, e.g. 0.6 -> "0.6 g". */
function formatWeightPrecise(n: number): string {
  if (isNaN(n) || !isFinite(n)) return "—";
  return `${n.toFixed(1)} g`;
}

function BatchSummary({ batch }: { batch: DoughBatchSummary }) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 p-4 mb-5">
      <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-3">Batch Summary</div>
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <SummaryStat label="Flour" value={formatWeight(batch.flourWeight)} />
        <SummaryStat label="Water" value={formatWeight(batch.water)} />
        <SummaryStat label="Salt" value={formatWeight(batch.salt)} />
        <SummaryStat label="Yeast" value={formatYeast(batch.yeastMin, batch.yeastMax)} />
      </dl>
      <div className="mt-3 pt-3 border-t border-border/50 flex flex-wrap gap-x-8 gap-y-2">
        <SummaryStat label="Total dough" value={`≈${formatWeight(batch.totalDoughMin)}`} />
        <SummaryStat
          label="Dough balls"
          value={`${batch.fullBalls} × ${formatWeight(batch.ballWeight)}${batch.remainder > 0.5 ? ` + ${formatWeight(batch.remainder)}` : ""}`}
        />
      </div>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground uppercase tracking-wide">{label}</dt>
      <dd className="font-mono font-semibold text-primary text-[15px]">{value}</dd>
    </div>
  );
}

function RatioCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
      <div className="font-serif text-base font-semibold mb-1.5 text-primary">{title}</div>
      <p className="text-[15px] leading-relaxed">{children}</p>
    </div>
  );
}

function WorkflowChip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-[14px] font-medium text-foreground">
      <HighlightNumbers text={text} />
    </span>
  );
}

function WorkflowArrow() {
  return <span className="text-muted-foreground" aria-hidden>→</span>;
}

function Field({ label, value, onChange, min, max, step = 1 }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-[15px] text-foreground/80">{label}</label>
        <span className="font-mono font-semibold text-primary">{fmtG(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer" />
    </div>
  );
}

function EquipmentItem({ icon, name, detail }: { icon: string; name: string; detail: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3 flex items-center gap-3">
      <span className="text-2xl shrink-0" aria-hidden>{icon}</span>
      <div className="min-w-0">
        <div className="font-serif font-semibold text-sm text-foreground leading-tight">{name}</div>
        <div className="text-xs text-muted-foreground italic mt-0.5">{detail}</div>
      </div>
    </div>
  );
}

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|ml|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|%))/gi);
  return <>{parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}</>;
}
