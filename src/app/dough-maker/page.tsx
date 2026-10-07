"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Neapolitan Pizza tab baker's percentages (fixed, of total flour weight).
const NEAPOLITAN_HYDRATION_PCT = 0.63;
const NEAPOLITAN_SALT_PCT = 0.024;
// 0.06% fresh yeast converts to 0.02% instant dry yeast at a 3:1 ratio.
const NEAPOLITAN_YEAST_MIN_PCT = 0.0002;
const NEAPOLITAN_YEAST_MAX_PCT = 0.0002;
const NEAPOLITAN_FIRST_FLOUR_PCT = 0.70;
const NEAPOLITAN_REMAINING_FLOUR_PCT = 0.30;
const NEAPOLITAN_CAPUTO_00_PCT = 0.50;
const NEAPOLITAN_NUVOLA_PCT = 0.50;
const NEAPOLITAN_INITIAL_WATER_PCT = 570 / 630;

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
  const caputo00 = flourWeight * NEAPOLITAN_CAPUTO_00_PCT;
  const nuvola = flourWeight * NEAPOLITAN_NUVOLA_PCT;
  const initialWater = water * NEAPOLITAN_INITIAL_WATER_PCT;
  const reservedWater = water - initialWater;

  const firstFlour = flourWeight * NEAPOLITAN_FIRST_FLOUR_PCT;
  const remainingFlour = flourWeight * NEAPOLITAN_REMAINING_FLOUR_PCT;
  const firstCaputo00 = firstFlour * NEAPOLITAN_CAPUTO_00_PCT;
  const firstNuvola = firstFlour * NEAPOLITAN_NUVOLA_PCT;
  const remainingCaputo00 = remainingFlour * NEAPOLITAN_CAPUTO_00_PCT;
  const remainingNuvola = remainingFlour * NEAPOLITAN_NUVOLA_PCT;

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
    caputo00,
    nuvola,
    initialWater,
    reservedWater,
    firstFlour,
    remainingFlour,
    firstCaputo00,
    firstNuvola,
    remainingCaputo00,
    remainingNuvola,
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

// Vito-style Poolish tab baker's percentages, optimized for the Famag + Gozney
// setup. All yeast goes into the poolish; the final dough gets no extra yeast.
const POOLISH_NUVOLA_PCT = 0.5;
const POOLISH_PIZZERIA_PCT = 0.5;
const POOLISH_STAGE_WATER_PCT = 0.5;
const POOLISH_FINAL_WATER_PCT = 0.17;
const POOLISH_SALT_PCT = 0.024;
const POOLISH_YEAST_PCT = 0.0008;

// NY-style direct dough baseline baker's percentages.
const NY_HYDRATION_PCT = 0.58;
const NY_OIL_PCT = 0.03;
const NY_SALT_PCT = 0.024;
const NY_YEAST_PCT = 0.0006;
const NY_INITIAL_WATER_PCT = 530 / 580;

/** Single source of truth for every NY-tab quantity. */
function calculateNYBatch(flourWeight: number, ballWeight: number) {
  const water = flourWeight * NY_HYDRATION_PCT;
  const initialWater = water * NY_INITIAL_WATER_PCT;
  const remainingWater = water - initialWater;
  const oil = flourWeight * NY_OIL_PCT;
  const salt = flourWeight * NY_SALT_PCT;
  const yeast = flourWeight * NY_YEAST_PCT;
  const totalDough = flourWeight + water + oil + salt + yeast;
  const fullBalls = Math.max(1, Math.floor(totalDough / ballWeight));
  const remainder = Math.max(0, totalDough - fullBalls * ballWeight);

  return {
    flourWeight, water, initialWater, remainingWater, oil, salt,
    yeastMin: yeast, yeastMax: yeast, totalDoughMin: totalDough,
    ballWeight, fullBalls, remainder,
  } satisfies DoughBatchSummary & Record<string, number>;
}

/** Single source of truth for every Poolish-tab quantity. */
function calculatePoolishBatch(flourWeight: number, ballWeight: number) {
  const nuvola = flourWeight * POOLISH_NUVOLA_PCT;
  const pizzeria = flourWeight * POOLISH_PIZZERIA_PCT;
  const poolishWater = flourWeight * POOLISH_STAGE_WATER_PCT;
  const finalWater = flourWeight * POOLISH_FINAL_WATER_PCT;
  const water = poolishWater + finalWater;
  const salt = flourWeight * POOLISH_SALT_PCT;
  const poolishYeast = flourWeight * POOLISH_YEAST_PCT;
  const finalYeast = 0;
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
  const [flourAmount, setFlourAmount] = useState(2000);
  const [ballWeight, setBallWeight] = useState(275.7);

  const batch = useMemo(() => calculateDoughBatch(flourAmount, ballWeight), [flourAmount, ballWeight]);

  const [nyFlourAmount, setNyFlourAmount] = useState(2000);
  const [nyBallWeight, setNyBallWeight] = useState(350);
  const nyBatch = useMemo(() => calculateNYBatch(nyFlourAmount, nyBallWeight), [nyFlourAmount, nyBallWeight]);

  const [poolishFlourAmount, setPoolishFlourAmount] = useState(2000);
  const [poolishBallWeight, setPoolishBallWeight] = useState(280);
  const poolishBatch = useMemo(
    () => calculatePoolishBatch(poolishFlourAmount, poolishBallWeight),
    [poolishFlourAmount, poolishBallWeight]
  );
  const directBaseline = {
    nuvola: poolishFlourAmount * 0.5,
    pizzeria: poolishFlourAmount * 0.5,
    water: poolishFlourAmount * 0.63,
    salt: poolishFlourAmount * 0.024,
    instantYeast: poolishFlourAmount * 0.0002,
  };

  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">L&apos;Impasto</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Dough Maker</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Neapolitan, Deep Dish, Detroit-Style, NY, Roman &amp; Sicilian doughs from your spiral mixer — 500–3,000 g flour batches (Caputo 00 &amp; Nuvola), Famag IM 5-S-10V (HH).
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
          <TabsTrigger value="ny">🇺🇸 NY Pizza</TabsTrigger>
          <TabsTrigger value="roman">🇮🇹 Roman Thin Pizza</TabsTrigger>
          <TabsTrigger value="sicilian">🇮🇹 Sicilian-Style Pizza</TabsTrigger>
          <TabsTrigger value="detroit">🇺🇸 Detroit-Style Pizza</TabsTrigger>
          <TabsTrigger value="deepdish">🇺🇸 Chicago Deep Dish Pizza</TabsTrigger>
        </TabsList>

        <TabsContent value="neapolitan" className="space-y-6 mt-4">
          <Section number={1} title="Formula" subtitle={`${formatWeight(flourAmount)} total flour — 50% Caputo 00 + 50% Caputo Nuvola`}>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <Field label="Flour (g)" value={flourAmount} onChange={setFlourAmount} min={500} max={3000} step={10} />
              <Field label="Dough Ball Size (g)" value={ballWeight} onChange={setBallWeight} min={200} max={400} step={0.1} />
            </div>

            <BatchSummary batch={batch} />

            <Subhead className="mt-5">Recipe at this flour weight</Subhead>
            <Bullets items={[
              `${formatWeight(batch.caputo00)} Caputo 00 flour`,
              `${formatWeight(batch.nuvola)} Caputo Nuvola flour`,
              `${formatWeight(batch.water)} water — 63%`,
              `${formatWeight(batch.salt)} fine salt — 2.4%`,
              `${formatYeast(batch.yeastMin, batch.yeastMax)} instant dry yeast — 0.02% (equivalent to ${formatWeightPrecise(batch.yeastMin * 3)} fresh yeast / 0.06%)`,
              `Total: ${fmtG(batch.totalDoughMin, 1)} g`,
              `→ ${batch.fullBalls} × ~${fmtG(batch.totalDoughMin / batch.fullBalls, 0)} g dough balls`,
            ]} />
            <Callout>All quantities scale from the formula above. Yeast is converted at 3 parts fresh yeast to 1 part instant dry yeast. The 1,000 g flour batch makes approximately 1,654.2 g dough, or six portions of about 276 g.</Callout>
          </Section>

          <Section number={2} title="Prepare the Water" subtitle="Famag home method">
            <Bullets items={[
              `${formatWeight(batch.water)} total water: ${formatWeight(batch.initialWater)} for the initial mix and ${formatWeight(batch.reservedWater)} held back`,
              "Use cool water, not warm. Because the Famag generates heat, ice-cold water is usually unnecessary unless the kitchen is particularly warm.",
              "Target final dough temperature (FDT): 21–23°C; ideally around 22°C.",
            ]} />
            <Callout>For the 1,000 g flour batch, split 630 g water into 570 g initial water + 60 g held back.</Callout>
          </Section>

          <Section number={3} title="Water & Yeast" subtitle="0–1 minute — Speed 1">
            <Bullets items={[
              `Add ${formatWeight(batch.initialWater)} water and ${formatYeast(batch.yeastMin, batch.yeastMax)} instant dry yeast to the Famag bowl.`,
              "Mix at Speed 1 for approximately 30–60 seconds to disperse the yeast.",
            ]} />
          </Section>

          <Section number={4} title="Add the Flour & Salt" subtitle="1–4 minutes — staged flour addition">
            <Bullets items={[
              `1–3 min · Speed 1–2: Add ${formatWeight(batch.firstFlour)} flour progressively (70% of total; approximately ${formatWeight(batch.firstCaputo00)} Caputo 00 + ${formatWeight(batch.firstNuvola)} Nuvola). Let it hydrate and form a cohesive mixture.`,
              `3–4 min · Speed 2–3: Add the remaining ${formatWeight(batch.remainingFlour)} flour (approximately ${formatWeight(batch.remainingCaputo00)} Caputo 00 + ${formatWeight(batch.remainingNuvola)} Nuvola) and ${formatWeight(batch.salt)} fine salt. Mix until no dry flour remains.`,
            ]} />
          </Section>

          <Section number={5} title="Add the Held-Back Water (Bassinage)" subtitle="Around minute 4 onward — Speed 2–3, batch-size dependent">
            <Bullets items={[
              `At ${formatWeight(flourAmount)} flour, ${formatWeight(batch.reservedWater)} water remains. Add it gradually at Speed 2–3, in portions of about ${formatWeight(batch.reservedWater / 4)} each, waiting for each addition to absorb before adding the next.`,
              "The dough will progressively become smoother and more elastic. Do not add all the held-back water at once.",
            ]} />
            <Callout>For this batch, add the held-back water in approximately 4 × 30 g portions. After each addition, <strong>wait until the water is fully incorporated and the dough has regained a cohesive, elastic structure before adding the next portion</strong>. As a rough guide, each addition may take around 30–45 seconds to absorb, but this is not a fixed timing—larger batches or a less-developed dough may take longer. <strong>Do not add the next portion while the dough is still loose, glossy or sloshing around the bowl.</strong> The portions do not need to be exactly 30 g.</Callout>
          </Section>

          <Section number={6} title="Gluten Development" subtitle="Around minute 7 onward — increase gradually to Speed 4">
            <Bullets items={[
              "Increase gradually to Speed 4; use Speed 5 only if the dough needs additional development. Watch the dough rather than following the timer.",
              "Look for a smooth surface, elastic dough wrapping around the spiral, a relatively clean bowl, and a cohesive mass that is elastic without becoming excessively tight.",
              "Larger flour batches contain more dough and take longer for the mass to gather around the spiral and for the bowl to look clean. Allow extra time as needed, while continuing to judge the dough by its condition and temperature.",
              "Stop as soon as the dough reaches this condition. Do not keep mixing for another 5–10 minutes just because the machine can.",
            ]} />
            <Callout>Mixing times are approximate guides. For 2 kg flour, around 10–14 minutes can be perfectly normal depending on flour temperature, water temperature and how aggressively you mix. Stop based on dough condition and final dough temperature (target 21–23°C, ideally around 22°C), not because the timer reaches 10 minutes. Avoid overdeveloping or unnecessarily heating the dough.</Callout>
            <Callout>So when the Famag reaches: smooth + cohesive + elastic + moist + bowl mostly clean + wrapping the spiral + still relaxed → STOP.</Callout>
          </Section>

          <Section number={7} title="Dough Removal — Optional Reverse">
            <Bullets items={[
              "When mixing is complete, reduce to Speed 1.",
              "Switch to Reverse ← for approximately 5–10 seconds to help unwind the dough from the spiral and breaker bar.",
              "Stop the machine and remove the dough.",
              "Do not use Reverse during normal mixing or gluten development.",
            ]} />
          </Section>

          <Section number={8} title="Famag — stage and time guidance">
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-sm border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-border/70 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                    {["Time", "Step", "500 g flour", "1 kg flour", "2 kg flour", "3 kg flour"].map((heading) => (
                      <th key={heading} className="py-2 px-2 font-semibold">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["0–1 min", "Water + yeast, Speed 1", "30–60 sec", "30–60 sec", "30–60 sec", "30–60 sec"],
                    ["1–3 min", "Add 70% flour, Speed 1–2", "2 min", "2 min", "2 min", "2 min"],
                    ["3–4 min", "Add 30% flour + salt, Speed 2–3", "1 min", "1 min", "1 min", "1 min"],
                    ["~4 min onward ★", "Add held-back water gradually until fully incorporated", "Condition-led", "Condition-led", "Condition-led", "Condition-led"],
                    ["~7 min onward ★", "Increase gradually to Speed 4; Speed 5 only if needed", "2:30 min", "2:30–3 min", "3–5 min", "4–5 min"],
                    ["TOTAL ★", "Approximate guide", "~10 min", "~10–11 min", "~10–14 min", "~12–14 min"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-border/40 last:border-0">
                      {row.map((cell, i) => (
                        i === 0
                          ? <th key={i} scope="row" className="py-2 px-2 text-left font-mono font-semibold text-primary whitespace-nowrap">{cell}</th>
                          : <td key={i} className={`py-2 px-2 ${i === 1 ? "text-foreground" : "font-mono text-muted-foreground whitespace-nowrap"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout>The held-back water amount and dough mass increase with batch size, so water absorption and bowl-cleaning/gluten development can take longer. Follow the dough’s condition; the listed stage times are approximate guidance.</Callout>
          </Section>

          <Section number={9} title="Check the Dough Temperature">
            <Bullets items={[
              "Check the dough temperature immediately after mixing; target 21–23°C. Around 22°C is ideal.",
              "If the dough consistently finishes above 23°C, use colder water next time. If it reaches 26°C or higher, treat this as a sign that the mixing process is generating too much heat and make a more substantial water-temperature adjustment for the next batch.",
            ]} />
          </Section>

          <Section number={10} title="Bench Rest & Short Bulk">
            <Bullets items={[
              "Transfer the finished dough to a covered container and rest for approximately 1 hour at room temperature.",
              "Do not automatically fold or knead the dough. The Famag has already developed the gluten structure.",
              "After approximately 1 hour, assess the dough. It should feel smooth, elastic, cohesive and relaxed, while still having enough strength to hold its shape.",
              "Only if the dough feels unusually slack, weak or lacks structure, give it one gentle stretch-and-fold during the bulk rest, then allow it to relax before dividing. Do not knead or aggressively degas it.",
              "After the bulk rest, divide and ball immediately.",
            ]} />
          </Section>

          <Section number={11} title="Divide & Ball">
            <Bullets items={[
              "Divide the 2,000 g flour batch into 12 × approximately 275.7 g dough balls (about 276 g each).",
              "The 1,000 g flour batch produces 6 × approximately 275.7 g dough balls.",
              "Turn the dough onto the bench without aggressively degassing it. Fold the edges underneath, turn over, and gently tighten into a smooth, taut ball.",
              "Place the dough balls in a covered dough box.",
            ]} />
          </Section>

          <Section number={12} title="Cold Fermentation" subtitle="Approximately 4°C">
            <Bullets items={[
              "Refrigerate the covered dough balls at approximately 4°C. First choice for this formula: 60 hours.",
              "Then compare 48 h, 60 h and 72 h batches. The expectation that 60–72 h may suit the 00/Nuvola blend is a hypothesis to test, not a guaranteed result.",
            ]} />
          </Section>

          <Section number={13} title="Final Proof" subtitle="Start with approximately 3–4 hours before baking">
            <Bullets items={[
              "Proof at normal room temperature. Readiness matters more than the clock: look for balls that are noticeably expanded, soft, relaxed, slightly puffy, extensible and still holding their structure.",
              "If already very puffy after 2 hours, bake earlier. If still tight at the end of the expected 3–4 hour conditioning window, give them another 30–60 minutes.",
            ]} />
          </Section>

          <Section number={14} title="Open, Top & Bake">
            <Subhead>Open the pizza</Subhead>
            <Bullets items={[
              "Lightly flour the bench and turn out the dough ball. Press from the centre toward the edge, leaving the outer 1.5–2 cm untouched for the cornicione.",
              "Stretch gradually by hand to approximately 30–32 cm. Do not use a rolling pin or aggressively press out the gas.",
            ]} />
            <Subhead className="mt-4">Top and launch</Subhead>
            <Bullets items={[
              "Top quickly (sauce → cheese/toppings → launch). Do not let a wet pizza sit on the peel.",
              "For a Bufalina, have the toppings ready before opening the dough so the topped pizza can be launched promptly.",
            ]} />
            <Subhead className="mt-4">Gozney</Subhead>
            <Bullets items={[
              "Start around 430–450°C stone temperature and control the flame carefully. Aim for enough top heat to develop the cornicione without burning the toppings.",
            ]} />
          </Section>

          <Section number={15} title="The Whole Process at a Glance">
            <div className="flex flex-wrap items-center gap-2">
              {[
                "1,000 g Caputo 00 + 1,000 g Nuvola",
                "1,140 g initial water + 120 g bassinage + 0.4 g IDY",
                "1,400 g flour · Speed 1",
                "600 g flour + 48 g salt",
                "Gradual bassinage",
                "Speed 4 development · Speed 5 only if needed",
                "21–23°C FDT · ideally ~22°C",
                "~1 h covered bulk · optional gentle fold only if unusually slack/weak",
                "12 × ~276 g balls",
                "60–72 h at 3–4°C",
                "~3–4 h room-temperature conditioning",
                "30–32 cm pizza",
                "Gozney · 430–450°C starting point",
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

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Sample Videos</div>
            <div className="flex flex-col gap-1.5">
              {[
                "https://www.youtube.com/watch?v=e3Wd3n1EJag",
                "https://www.youtube.com/shorts/g-ssatVbD0Q",
                "https://www.youtube.com/watch?v=gDiFd5BpTY0&t=207s",
                "https://www.youtube.com/watch?v=HgW_WzP4seU&t=522s",
                "https://www.youtube.com/watch?v=keUvOIEVNk8&t=208s",
                "https://www.youtube.com/watch?v=KOvqoHGWQSM",
              ].map((url, index) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium">
                  ▶ Sample video {index + 1} <span className="text-xs opacity-60">↗</span>
                </a>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="poolish" className="space-y-6 mt-4">
          <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
            <HighlightNumbers text="Vito-Style Poolish — Famag + Gozney. This is a Vito Iacopelli-inspired poolish method optimized for a Famag spiral mixer, Gozney high-temperature oven, 50/50 Caputo Pizzeria 00 and Caputo Nuvola, 67% hydration, and 280g dough balls. It is an adaptation for this setup, not a claim to reproduce Vito Iacopelli’s exact original recipe." />
          </p>

          <Section number={1} title="Formula & Batch Calculator" subtitle="50/50 Caputo Pizzeria 00 + Caputo Nuvola · 67% hydration · 2.4% salt · 0.08% instant dry yeast">
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <Field label="Total Flour (g)" value={poolishFlourAmount} onChange={setPoolishFlourAmount} min={500} max={3000} step={10} />
              <Field label="Dough Ball Size (g)" value={poolishBallWeight} onChange={setPoolishBallWeight} min={200} max={400} step={5} />
            </div>
            <BatchSummary batch={poolishBatch} />
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-[15px] border-collapse min-w-[420px]">
                <thead>
                  <tr className="border-b border-border/70 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 px-1 font-semibold">Ingredient / yield</th>
                    <th className="py-2 px-1 font-semibold">Amount at selected flour weight</th>
                    <th className="py-2 px-1 font-semibold">Baker&apos;s %</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Caputo Nuvola", formatWeight(poolishBatch.nuvola), "50%"],
                    ["Caputo Pizzeria 00", formatWeight(poolishBatch.pizzeria), "50%"],
                    ["Water", formatWeight(poolishBatch.water), "67%"],
                    ["Fine sea salt", formatWeight(poolishBatch.salt), "2.4%"],
                    ["Caputo Instant Dry Yeast (all in poolish)", formatWeightPrecise(poolishBatch.poolishYeast), "0.08%"],
                    ["Honey / sugar", "0 g", "0%"],
                    ["Total dough", `~${fmtG(poolishBatch.totalDoughMin, 1)} g`, "~"],
                    ["Dough balls", `${poolishBatch.fullBalls} × ${formatWeight(poolishBatch.ballWeight)}`, "—"],
                    ["Remaining dough", `~${fmtG(poolishBatch.remainder, 1)} g`, "—"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-border/40 last:border-0">
                      <td className="py-2 px-1 font-medium text-foreground">{row[0]}</td>
                      <td className="py-2 px-1 font-mono text-primary font-semibold whitespace-nowrap">{row[1]}</td>
                      <td className="py-2 px-1 font-mono whitespace-nowrap">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout>Measure the instant yeast with a precision scale. Do not estimate it with a teaspoon or pinch.</Callout>

            <Subhead className="mt-6">Comparison baseline — kept separate</Subhead>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
                <div className="font-serif font-semibold mb-2">Direct dough baseline</div>
                <Bullets items={[
                  `${formatWeight(directBaseline.pizzeria)} Caputo Pizzeria 00 + ${formatWeight(directBaseline.nuvola)} Caputo Nuvola`,
                  `${formatWeight(directBaseline.water)} water · 63% hydration`,
                  `${formatWeight(directBaseline.salt)} salt · 2.4%`,
                  `${formatWeightPrecise(directBaseline.instantYeast)} instant dry yeast · 0.02% (equivalent to ${formatWeightPrecise(directBaseline.instantYeast * 3)} fresh yeast / 0.06%)`,
                  "Approximately 60 hours cold fermentation",
                ]} />
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                <div className="font-serif font-semibold mb-2">Vito-style poolish test</div>
                <Bullets items={[
                  `${formatWeight(poolishBatch.pizzeria)} Caputo Pizzeria 00 + ${formatWeight(poolishBatch.nuvola)} Caputo Nuvola`,
                  `${formatWeight(poolishBatch.water)} water · 67% hydration`,
                  `${formatWeight(poolishBatch.salt)} salt · 2.4%`,
                  `${formatWeightPrecise(poolishBatch.poolishYeast)} instant dry yeast, all in the poolish`,
                  "Poolish + approximately 24 hours final cold fermentation",
                ]} />
              </div>
            </div>
            <Callout>Keeping both recipes separate allows a controlled taste and handling comparison without changing multiple variables within either method.</Callout>
          </Section>

          <Section number={2} title="Day 1 — Poolish" subtitle="All yeast goes here · no honey or sugar">
            <Bullets items={[
              `${formatWeight(poolishBatch.poolishWater)} water`,
              `${formatWeight(poolishBatch.nuvola)} Caputo Nuvola`,
              `${formatWeightPrecise(poolishBatch.poolishYeast)} Caputo Instant Dry Yeast — weigh precisely`,
            ]} />
            <ol className="space-y-3 mt-4">
              {[
                `Add ${formatWeight(poolishBatch.poolishWater)} water to the poolish container. Add ${formatWeightPrecise(poolishBatch.poolishYeast)} instant dry yeast and mix until reasonably dispersed.`,
                `Add ${formatWeight(poolishBatch.nuvola)} Caputo Nuvola. Mix thoroughly until no dry flour remains and the mixture resembles a smooth, thick batter.`,
                "Cover loosely and leave at room temperature for approximately 1 hour.",
                "Cover and refrigerate at approximately 4°C for around 16–18 hours. Look for a visibly fermented, bubbly poolish that has not collapsed or become excessively degraded; the clock is a guide, not an absolute.",
              ].map((text, i) => (
                <li key={text} className="flex gap-3 leading-relaxed">
                  <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
                  <span><HighlightNumbers text={text} /></span>
                </li>
              ))}
            </ol>
          </Section>

          <Section number={3} title="Day 2 — Final Dough & Famag Mixing" subtitle="All of the cold poolish · no additional yeast · no honey">
            <Subhead>Final-dough ingredients</Subhead>
            <Bullets items={[
              "All of the cold poolish",
              `${formatWeight(poolishBatch.pizzeria)} Caputo Pizzeria 00`,
              `${formatWeight(poolishBatch.finalWater)} cold water`,
              `${formatWeight(poolishBatch.salt)} fine sea salt`,
              "No additional yeast and no honey",
            ]} />
            <Subhead className="mt-5">Famag mixing process</Subhead>
            <ol className="space-y-3">
              {[
                `0–2 min · Speed 1: Add all of the cold poolish to the bowl with ${formatWeight(poolishBatch.finalWater)} cold water. Mix to loosen and disperse the poolish.`,
                `2–4 min · Speed 1–2: Progressively add ${formatWeight(poolishBatch.pizzeria)} Caputo Pizzeria 00. Let the flour hydrate and the dough come together.`,
                `4–5 min · Speed 2–3: Add ${formatWeight(poolishBatch.salt)} salt. Mix until everything is incorporated and there is no dry flour.`,
                "Approximately 5–8/10 min · Speed 3–4: Develop until the dough is smooth, cohesive, elastic, wraps around the spiral and is relatively clean from the bowl. It should remain soft and extensible, properly developed but not tight or rubbery.",
              ].map((text, i) => (
                <li key={text} className="flex gap-3 leading-relaxed">
                  <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
                  <span><HighlightNumbers text={text} /></span>
                </li>
              ))}
            </ol>
            <Callout>Mix to the dough&apos;s condition, not a fixed timer. Do not chase an extreme windowpane or keep mixing to 10 minutes if development is already right. Target a final dough temperature of 23–25°C; if the dough gets too warm, stop instead of chasing more gluten development.</Callout>
          </Section>

          <Section number={4} title="Post-Mixing & Balling" subtitle="Approximately 60 minutes total bulk after mixing">
            <Subhead>Rest and bulk</Subhead>
            <Bullets items={[
              "Transfer the dough to a covered container and rest for approximately 15–20 minutes.",
              "Perform one gentle stretch-and-fold to organize and strengthen the dough. Do not knead aggressively. A second fold is only needed if the dough is unusually slack and weak.",
              "Rest for approximately another 40–45 minutes. Dough condition takes priority over the exact clock.",
            ]} />
            <Subhead className="mt-5">Divide and ball</Subhead>
            <Bullets items={[
              `Divide into ${poolishBatch.fullBalls} × ${formatWeight(poolishBatch.ballWeight)} dough balls${poolishBatch.remainder > 0.5 ? `, with approximately ${fmtG(poolishBatch.remainder, 1)} g remaining` : ""}.`,
              "Shape gently into smooth balls without aggressively degassing.",
              "Place the balls into the Genus Dei dough box.",
            ]} />
          </Section>

          <Section number={5} title="Second Cold Fermentation & Final Proof">
            <Subhead>Second cold fermentation</Subhead>
            <Bullets items={["Refrigerate at approximately 4°C for around 24 hours. Refrigerator temperature and dough activity can shift the ideal timing, so treat 24 hours as a guide rather than an absolute requirement."]} />
            <Subhead className="mt-5">Final proof</Subhead>
            <Bullets items={[
              "Initially remove the dough balls approximately 3–4 hours before baking. Aim for a room temperature around 20–22°C.",
              "Do not require the dough to double in size. Look for dough that is visibly expanded, soft and pillowy, relaxed, extensible, actively fermenting and still strong enough to open without tearing.",
              "If the dough is still tight, allow more time. If it is already very gassy, weak or fragile, bake sooner.",
            ]} />
          </Section>

          <Section number={6} title="Important Process Principles">
            <ol className="space-y-2 list-decimal pl-5">
              {[
                "This is a Vito-style poolish adaptation, not a claim to reproduce Vito Iacopelli’s exact current recipe.",
                "67% hydration is intentional for this Famag/Gozney test.",
                "Honey is omitted; it is not required for browning or flavour in a high-temperature Gozney bake.",
                "Put all instant yeast in the poolish. Do not split it between poolish and final dough; 0.2g is difficult to measure reliably and makes fermentation less reproducible.",
                "Use a precision scale for the yeast.",
                "Choose the Famag mixing endpoint by dough development and temperature, not an arbitrary number of minutes.",
                "Do not overdevelop the dough.",
                "One gentle stretch-and-fold is the default.",
                "Do not force a full doubling during final proof.",
                "Fermentation condition takes priority over rigid clock times.",
              ].map((text) => (
                <li key={text} className="text-[15px] leading-relaxed"><HighlightNumbers text={text} /></li>
              ))}
            </ol>
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
          <Section number={1} title="NY-Style Pizza — Final Baseline" subtitle="Classic New York · direct dough · Famag + Gozney">
            <HighlightNumbers text="100% Caputo Pizzeria 00, 58% hydration, 3% olive oil, 2.4% salt and 0.06% Caputo instant dry yeast. No poolish, Nuvola, honey or sugar. Scale the flour from 500g to 3,000g; default batch is 2,000g." />
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              <Field label="Total flour (g)" value={nyFlourAmount} onChange={setNyFlourAmount} min={500} max={3000} step={10} />
              <Field label="Dough ball size (g)" value={nyBallWeight} onChange={setNyBallWeight} min={250} max={420} step={5} />
            </div>
            <BatchSummary batch={nyBatch} />
            <Subhead>Scaled ingredients</Subhead>
            <Bullets items={[
              `${formatWeight(nyBatch.flourWeight)} Caputo Pizzeria 00 (100%)`,
              `${formatWeight(nyBatch.water)} cold water (58%): ${formatWeight(nyBatch.initialWater)} initially + ${formatWeight(nyBatch.remainingWater)} held back`,
              `${formatWeight(nyBatch.oil)} olive oil (3%)`,
              `${formatWeight(nyBatch.salt)} salt (2.4%)`,
              `${formatWeightPrecise(nyBatch.yeastMin)} Caputo Instant Dry Yeast (0.06%)`,
              `Honey / sugar: 0 g · Total dough: approximately ${fmtG(nyBatch.totalDoughMin, 1)} g`,
              `At ${formatWeight(nyBatch.ballWeight)} per ball: ${nyBatch.fullBalls} full dough balls${nyBatch.remainder > 0.5 ? ` with approximately ${fmtG(nyBatch.remainder, 1)} g remaining` : ""}.`,
            ]} />
            <Callout>For the 1,000g reference formula: 1,000g flour, 580g water, 30g olive oil, 24g salt and 0.6g IDY make approximately 1,634.6g dough. That is six 272–273g balls, or use 340–400g balls for larger NY pies.</Callout>
          </Section>

          <Section number={2} title="Famag Mixing" subtitle="Keep the dough cool; target a 23–25°C final dough temperature">
            <Bullets items={[
              `0–1 min · Speed 1: Add ${formatWeight(nyBatch.initialWater)} cold water and ${formatWeightPrecise(nyBatch.yeastMin)} IDY. Mix to disperse the yeast.`,
              `1–4 min · Speed 1, then 2: Gradually add ${formatWeight(nyBatch.flourWeight)} Caputo Pizzeria 00.`,
              `Around 4 min · Speed 2: Add ${formatWeight(nyBatch.salt)} salt and mix until incorporated.`,
              `Around 4:30 · Speed 2: Add ${formatWeight(nyBatch.remainingWater)} remaining water in 2–3 small additions. Let each addition disappear before adding more.`,
              `Around 5:30: Slowly add ${formatWeight(nyBatch.oil)} olive oil and let it fully incorporate.`,
              "Around 6–9 min · Speed 2–3: Develop until smooth, elastic, cohesive, supple and slightly tacky; it should wrap around the spiral and release reasonably cleanly from the bowl.",
              "Stop when properly developed. Do not chase an extreme windowpane or keep mixing if the dough gets too warm.",
            ]} />
          </Section>

          <Section number={3} title="Rest, Ball & Cold Ferment">
            <Bullets items={[
              "Remove the dough from the mixer, form a loose ball, cover and rest at room temperature for 20–30 minutes.",
              `Divide into ${nyBatch.fullBalls} × approximately ${formatWeight(nyBatch.ballWeight)} balls${nyBatch.remainder > 0.5 ? `, with ${fmtG(nyBatch.remainder, 1)} g remaining` : ""}. Shape gently; avoid tearing the dough.`,
              "Place dough balls in lightly oiled containers or a dough box and refrigerate at approximately 4°C.",
              "Use 60 hours as the baseline cold fermentation; 48–72 hours is the useful range.",
            ]} />
          </Section>

          <Section number={4} title="Temper & Stretch">
            <Bullets items={[
              "Remove the covered dough from the refrigerator about 2 hours before baking. It should be relaxed, soft, extensible and slightly puffy; do not wait for it to double.",
              "Dust the counter lightly with Caputo Rimacinata. Press the centre and push gas outward, leaving a modest rim rather than a large Neapolitan cornicione.",
              "Gently stretch or knuckle-stretch to the target size. A 350g ball makes about a 13-inch / 33cm pizza; keep the centre very thin and the edge slightly thicker.",
              "Keep toppings light: a thin layer of tomato sauce, low-moisture mozzarella, optional Parmesan, and oregano or basil as desired.",
            ]} />
          </Section>

          <Section number={5} title="Gozney Bake" subtitle="New York bake · low flame">
            <Bullets items={[
              "Preheat the stone to approximately 370–380°C, then reduce the flame to LOW before launch.",
              "Launch onto the centre of the stone and bake for approximately 3–5 minutes.",
              "Rotate roughly every 60–90 seconds, adjusting to how the oven is cooking.",
              "Look for an evenly browned crust, crisp underside, melted and browned cheese, thin flexible centre, chewy body and modestly inflated rim.",
            ]} />
          </Section>

          <Section number={6} title="Locked Baseline Summary">
            <Bullets items={[
              "100% Caputo Pizzeria 00 · 58% hydration · 3% olive oil · 2.4% salt · 0.06% IDY",
              "No honey or sugar · no poolish · no Nuvola",
              "60 hours cold fermentation · approximately 2 hours temper",
              "370–380°C stone · low flame · 3–5 minute bake",
            ]} />
          </Section>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
            <div className="flex flex-col gap-1.5">
              <a href="https://www.youtube.com/watch?v=i1a1QTQ6MNY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium">▶ New York-Style Pizza tutorial <span className="text-xs opacity-60">↗</span></a>
              <a href="https://www.youtube.com/watch?v=R8V0WYS-f7I" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium">▶ NY Pizza style — video guide <span className="text-xs opacity-60">↗</span></a>
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
