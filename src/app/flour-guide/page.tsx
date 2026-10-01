"use client";

import { useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { calcFlourBlendGrams, suggestedBlendHydration, fmt } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FlourProfile {
  name: string;
  tagline: string;
  protein: string;
  strength: string;
  profile: string;
  characteristics: string;
  hydration: string;
  color: string;
}

const FLOUR_PROFILES: FlourProfile[] = [
  { name: "Caputo Pizzeria 00", tagline: "The Classic Standard", protein: "12.5%", strength: "W260–W280",
    profile: "Highly refined soft wheat flour designed specifically for high-heat ovens (400°C–480°C).",
    characteristics: "Perfect balance of elasticity and extensibility. Delivers a soft, foldable, tender Neapolitan crust with a light chew.",
    hydration: "62%–64%", color: "#C2410C" },
  { name: "Caputo Nuvola / Nuvola Super", tagline: "The Cloud Maker", protein: "12.5%", strength: "W270–W290",
    profile: "Formulated using selected natural wheat germs to maximize gas retention and dough expansion.",
    characteristics: "Produces massive, inflated, airy rims (cornicione) filled with open honeycomb pockets (alveoli). Ideal for contemporary \"Canotto\" style pizza.",
    hydration: "65%–70%", color: "#4D7C3F" },
  { name: "Caputo Tipo 1", tagline: "The Rustic & Aromatic", protein: "13.0%", strength: "W300–W320",
    profile: "Less refined flour containing a higher percentage of wheat bran and germ.",
    characteristics: "Adds a rich golden color, deep nutty aroma, and a slightly crunchier exterior bite without making the dough heavy.",
    hydration: "64%–68% (absorbs more water due to bran content)", color: "#7C5E3B" },
  { name: "Caputo Semolina Rimacinata", tagline: "Double-Milled Semolina", protein: "12.5%", strength: "Hard Durum Wheat",
    profile: "Double-milled golden durum wheat flour.",
    characteristics: "Primarily used for stretching/dusting to prevent dough from sticking to the peel, creating a light, non-burnt bottom crust. Optionally add 5%–10% into dough for extra crunch.",
    hydration: "Dusting / optional additive", color: "#B45309" },
  { name: "Caputo Cuoco / Chef 00", tagline: "The Extended-Cold-Fermentation Flour", protein: "13.0%", strength: "W300–W320",
    profile: "High-strength flour built for extended cold fermentation (48h–72h) in commercial spiral mixers.",
    characteristics: "Blend 20%–30% with Pizzeria 00 to maintain dough structure during multi-day fridge rests.",
    hydration: "63%–65%", color: "#9D4EDD" },
  { name: "Caputo Saccorosso 00", tagline: "The Ultra-Strong Professional", protein: "13.5%", strength: "W320–W350",
    profile: "Ultra-strong professional flour for high-hydration or preferment (Biga/Poolish) workflows.",
    characteristics: "Ideal as a base for 70%+ hydration batches in the Famag HH.",
    hydration: "70%+", color: "#DC2626" },
  { name: "Caputo Manitoba Oro", tagline: "The Structural Booster", protein: "14.5%", strength: "W370–W390",
    profile: "Structural \"booster\" flour made from high-protein Canadian spring wheat.",
    characteristics: "10%–15% max blend to reinforce dough elasticity and prevent tearing in high-water recipes.",
    hydration: "Booster only, 10%–15% max", color: "#D4A017" },
  { name: "Caputo Integrale / Whole Wheat", tagline: "The Rustic Whole-Grain", protein: "12.5%", strength: "Whole Grain",
    profile: "100% unrefined flour with full natural bran and germ.",
    characteristics: "5%–10% blend to add rustic whole-grain aroma, deeper coloration, and earthy flavor notes.",
    hydration: "65%–67% (absorbs more water due to bran content)", color: "#6B4423" },
];

interface BlendPreset {
  id: string; name: string; tagline: string;
  pizzeria: number; nuvola: number; tipo1: number; cuoco: number; integrale: number;
  hydrationRange: string; result: string;
}

const PRESETS: BlendPreset[] = [
  { id: "traditional", name: "100% Traditional Neapolitan", tagline: "Default", pizzeria: 1.0, nuvola: 0, tipo1: 0, cuoco: 0, integrale: 0,
    hydrationRange: "62% – 63%", result: "Authentic STG Neapolitan softness, smooth stretching, balanced bite." },
  { id: "canotto", name: "The Contemporary \"Super-Puff\"", tagline: "Canotto Style", pizzeria: 0.70, nuvola: 0.30, tipo1: 0, cuoco: 0, integrale: 0,
    hydrationRange: "64% – 66%", result: "Massive, light, melt-in-your-mouth airy crust with giant air bubbles." },
  { id: "rustic", name: "The Rustic Gourmet", tagline: "", pizzeria: 0.80, nuvola: 0, tipo1: 0.20, cuoco: 0, integrale: 0,
    hydrationRange: "64% – 65%", result: "Enhanced wheat flavor, rich golden bake color, slightly crispier rim." },
  { id: "master", name: "The Ultimate 3-Flour Master Blend", tagline: "", pizzeria: 0.60, nuvola: 0.25, tipo1: 0.15, cuoco: 0, integrale: 0,
    hydrationRange: "65%", result: "Maximum volume from Nuvola, deep aroma from Tipo 1, easy handling from Pizzeria 00." },
  { id: "cold-rest-48h", name: "Preset E: The 48-Hour Cold Rest", tagline: "Strength & Elasticity", pizzeria: 0.75, nuvola: 0, tipo1: 0, cuoco: 0.25, integrale: 0,
    hydrationRange: "63% – 65%", result: "Extended 48h–72h cold bulk ferment without dough structural degradation." },
  { id: "rustic-whole-grain", name: "Preset F: The Rustic Whole-Grain Blend", tagline: "", pizzeria: 0.85, nuvola: 0, tipo1: 0.10, cuoco: 0, integrale: 0.05,
    hydrationRange: "64% – 66%", result: "Maximum rustic flavor profile with rich crust charring." },
];

export default function FlourGuidePage() {
  const store = usePizzaStore();
  const { set } = store;

  const blend = useMemo(
    () => ({
      pizzeria: store.flourPizzeriaPercent,
      nuvola: store.flourNuvolaPercent,
      tipo1: store.flourTipo1Percent,
      cuoco: store.flourCuocoPercent,
      integrale: store.flourIntegralePercent,
    }),
    [store.flourPizzeriaPercent, store.flourNuvolaPercent, store.flourTipo1Percent, store.flourCuocoPercent, store.flourIntegralePercent]
  );

  const grams = useMemo(
    () => calcFlourBlendGrams(store.flourInput, blend, store.flourSemolinaAddPercent),
    [store.flourInput, blend, store.flourSemolinaAddPercent]
  );

  const suggested = useMemo(() => suggestedBlendHydration(blend), [blend]);

  function applyPreset(p: BlendPreset) {
    set({
      flourBlendPreset: p.id,
      flourPizzeriaPercent: p.pizzeria,
      flourNuvolaPercent: p.nuvola,
      flourTipo1Percent: p.tipo1,
      flourCuocoPercent: p.cuoco,
      flourIntegralePercent: p.integrale,
    });
  }

  // Pizzeria 00 always fills the remainder; adjusting one secondary flour
  // proportionally scales the others down if they no longer fit.
  function setBlendComponent(component: "nuvola" | "tipo1" | "cuoco" | "integrale", v: number) {
    const current = {
      nuvola: store.flourNuvolaPercent,
      tipo1: store.flourTipo1Percent,
      cuoco: store.flourCuocoPercent,
      integrale: store.flourIntegralePercent,
    };
    current[component] = v;
    const othersTotal = (Object.keys(current) as (keyof typeof current)[])
      .filter(k => k !== component)
      .reduce((sum, k) => sum + current[k], 0);
    const remaining = 1 - v;
    if (othersTotal > remaining && othersTotal > 0) {
      const scale = remaining / othersTotal;
      (Object.keys(current) as (keyof typeof current)[])
        .filter(k => k !== component)
        .forEach(k => { current[k] *= scale; });
    }
    const pizzeria = 1 - current.nuvola - current.tipo1 - current.cuoco - current.integrale;
    set({
      flourBlendPreset: "custom",
      flourNuvolaPercent: current.nuvola,
      flourTipo1Percent: current.tipo1,
      flourCuocoPercent: current.cuoco,
      flourIntegralePercent: current.integrale,
      flourPizzeriaPercent: pizzeria,
    });
  }

  const setNuvola = (v: number) => setBlendComponent("nuvola", v);
  const setTipo1 = (v: number) => setBlendComponent("tipo1", v);
  const setCuoco = (v: number) => setBlendComponent("cuoco", v);
  const setIntegrale = (v: number) => setBlendComponent("integrale", v);


  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">La Farina</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Flour Guide &amp; Blending Engine</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-2xl mx-auto italic">
          The foundation of Neapolitan pizza is the flour. While 100% Caputo Pizzeria 00 is the gold standard for traditional pizza, combining different flour types allows you to tailor the crust&apos;s airiness, crispiness, and flavor profile — especially when using a spiral mixer like the Famag IM 5-S (HH).
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">Flour Profile Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          {FLOUR_PROFILES.map((f) => (
            <FlourCard key={f.name} f={f} />
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">Recommended Blending Ratios</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          {PRESETS.map((p) => {
            const active = store.flourBlendPreset === p.id;
            return (
              <button
                key={p.id}
                onClick={() => applyPreset(p)}
                className={`text-left rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  active ? "border-primary" : "border-border bg-card"
                }`}
                style={active ? { backgroundColor: "rgba(194,65,12,0.08)" } : undefined}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-serif font-semibold text-base text-foreground">{p.name}</span>
                  {p.tagline && <Badge variant="outline" className="text-[10px] uppercase tracking-wider shrink-0">{p.tagline}</Badge>}
                </div>
                <div className="mt-2 font-mono text-sm text-primary">
                  {Math.round(p.pizzeria * 100)}% Pizzeria 00
                  {p.nuvola > 0 && ` + ${Math.round(p.nuvola * 100)}% Nuvola`}
                  {p.tipo1 > 0 && ` + ${Math.round(p.tipo1 * 100)}% Tipo 1`}
                  {p.cuoco > 0 && ` + ${Math.round(p.cuoco * 100)}% Cuoco`}
                  {p.integrale > 0 && ` + ${Math.round(p.integrale * 100)}% Integrale`}
                </div>
                <div className="text-xs text-secondary uppercase tracking-wide mt-1.5">Target Hydration: {p.hydrationRange}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.result}</p>
              </button>
            );
          })}
        </CardContent>
      </Card>

      <Card className="border-primary/40 shadow-md">
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl flex items-center gap-3">
            <span>Custom Blend</span>
            <Badge variant="outline" className="text-primary border-primary/40 text-[10px] uppercase tracking-wider ml-auto">
              {store.flourBlendPreset === "custom" ? "Custom" : "Preset"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-5">
          <Field label="Total Flour (g)" value={store.flourInput} onChange={v => set({ flourInput: v })} min={1000} max={3000} step={10} />
          <PercentSlider label="Caputo Nuvola" value={store.flourNuvolaPercent} onChange={setNuvola} max={1 - (store.flourTipo1Percent + store.flourCuocoPercent + store.flourIntegralePercent)} />
          <PercentSlider label="Caputo Tipo 1" value={store.flourTipo1Percent} onChange={setTipo1} max={1 - (store.flourNuvolaPercent + store.flourCuocoPercent + store.flourIntegralePercent)} />
          <PercentSlider label="Caputo Cuoco / Chef 00" value={store.flourCuocoPercent} onChange={setCuoco} max={1 - (store.flourNuvolaPercent + store.flourTipo1Percent + store.flourIntegralePercent)} />
          <PercentSlider label="Caputo Integrale / Whole Wheat" value={store.flourIntegralePercent} onChange={setIntegrale} max={1 - (store.flourNuvolaPercent + store.flourTipo1Percent + store.flourCuocoPercent)} />
          <PercentSlider label="Semolina Rimacinata (dusting additive)" value={store.flourSemolinaAddPercent} onChange={v => set({ flourSemolinaAddPercent: v })} max={0.10} />

          <div className="border-t border-border/60 pt-4 space-y-2">
            {[
              { label: "Caputo Pizzeria 00", value: grams.pizzeria, pct: blend.pizzeria },
              { label: "Caputo Nuvola", value: grams.nuvola, pct: blend.nuvola },
              { label: "Caputo Tipo 1", value: grams.tipo1, pct: blend.tipo1 },
              { label: "Caputo Cuoco / Chef 00", value: grams.cuoco, pct: blend.cuoco },
              { label: "Caputo Integrale / Whole Wheat", value: grams.integrale, pct: blend.integrale },
            ].filter(r => r.pct > 0).map(r => (
              <div key={r.label} className="flex justify-between items-baseline py-1.5 border-b border-border/40 last:border-0">
                <span className="text-muted-foreground text-[15px]">{r.label} <span className="text-xs">({Math.round(r.pct * 100)}%)</span></span>
                <span className="font-mono font-semibold text-foreground text-base">{fmt(r.value, 0)} g</span>
              </div>
            ))}
            {store.flourSemolinaAddPercent > 0 && (
              <div className="flex justify-between items-baseline py-1.5">
                <span className="text-muted-foreground text-[15px]">Semolina Rimacinata <span className="text-xs">(+{Math.round(store.flourSemolinaAddPercent * 100)}%, dusting)</span></span>
                <span className="font-mono font-semibold text-foreground text-base">{fmt(grams.semolina, 0)} g</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-baseline bg-primary/8 border border-primary/20 rounded-lg px-3 py-2.5" style={{ backgroundColor: "rgba(194,65,12,0.08)" }}>
            <div>
              <span className="font-serif text-base font-semibold">Suggested Hydration</span>
              <p className="text-xs text-muted-foreground mt-0.5">Based on blend composition</p>
            </div>
            <span className="font-mono font-bold text-primary text-lg">{(suggested * 100).toFixed(0)}%</span>
          </div>

          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm text-muted-foreground">Current calculator hydration: <span className="font-mono font-semibold text-foreground">{(store.hydration * 100).toFixed(1)}%</span></p>
            <button
              onClick={() => set({ hydration: suggested })}
              disabled={Math.abs(store.hydration - suggested) < 0.001}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground shadow-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors shrink-0"
            >
              Apply to Calculator
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FlourCard({ f }: { f: FlourProfile }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: f.color }} aria-hidden />
      <div className="flex items-baseline justify-between gap-2 pt-1.5">
        <span className="font-serif font-semibold text-lg" style={{ color: f.color }}>{f.name}</span>
      </div>
      <p className="text-xs text-muted-foreground italic mt-0.5">{f.tagline}</p>
      <div className="flex gap-3 mt-2 text-xs font-mono">
        <span className="bg-muted rounded px-1.5 py-0.5">Protein {f.protein}</span>
        <span className="bg-muted rounded px-1.5 py-0.5">{f.strength}</span>
      </div>
      <p className="text-sm text-foreground/80 mt-2.5 leading-relaxed">{f.profile}</p>
      <p className="text-sm text-foreground/80 mt-2 leading-relaxed">{f.characteristics}</p>
      <div className="text-xs uppercase tracking-wide text-secondary mt-2.5">Hydration: <span className="font-mono normal-case">{f.hydration}</span></div>
    </div>
  );
}

function Field({ label, value, onChange, min, max, step = 1 }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-[15px] text-foreground/80">{label}</label>
        <span className="font-mono font-semibold text-primary">{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer" />
    </div>
  );
}

function PercentSlider({ label, value, onChange, max }: {
  label: string; value: number; onChange: (v: number) => void; max: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-[15px] text-foreground/80">{label}</label>
        <span className="font-mono font-semibold text-primary">{(value * 100).toFixed(0)}%</span>
      </div>
      <input type="range" min={0} max={max} step={0.01} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer" />
    </div>
  );
}
