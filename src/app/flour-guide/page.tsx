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
];

interface BlendPreset {
  id: string; name: string; tagline: string;
  pizzeria: number; nuvola: number; tipo1: number;
  hydrationRange: string; result: string;
}

const PRESETS: BlendPreset[] = [
  { id: "traditional", name: "100% Traditional Neapolitan", tagline: "Default", pizzeria: 1.0, nuvola: 0, tipo1: 0,
    hydrationRange: "62% – 63%", result: "Authentic STG Neapolitan softness, smooth stretching, balanced bite." },
  { id: "canotto", name: "The Contemporary \"Super-Puff\"", tagline: "Canotto Style", pizzeria: 0.70, nuvola: 0.30, tipo1: 0,
    hydrationRange: "64% – 66%", result: "Massive, light, melt-in-your-mouth airy crust with giant air bubbles." },
  { id: "rustic", name: "The Rustic Gourmet", tagline: "", pizzeria: 0.80, nuvola: 0, tipo1: 0.20,
    hydrationRange: "64% – 65%", result: "Enhanced wheat flavor, rich golden bake color, slightly crispier rim." },
  { id: "master", name: "The Ultimate 3-Flour Master Blend", tagline: "", pizzeria: 0.60, nuvola: 0.25, tipo1: 0.15,
    hydrationRange: "65%", result: "Maximum volume from Nuvola, deep aroma from Tipo 1, easy handling from Pizzeria 00." },
];

export default function FlourGuidePage() {
  const store = usePizzaStore();
  const { set } = store;

  const blend = useMemo(
    () => ({ pizzeria: store.flourPizzeriaPercent, nuvola: store.flourNuvolaPercent, tipo1: store.flourTipo1Percent }),
    [store.flourPizzeriaPercent, store.flourNuvolaPercent, store.flourTipo1Percent]
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
    });
  }

  function setNuvola(v: number) {
    const tipo1 = Math.min(store.flourTipo1Percent, 1 - v);
    set({ flourBlendPreset: "custom", flourNuvolaPercent: v, flourTipo1Percent: tipo1, flourPizzeriaPercent: 1 - v - tipo1 });
  }

  function setTipo1(v: number) {
    const nuvola = Math.min(store.flourNuvolaPercent, 1 - v);
    set({ flourBlendPreset: "custom", flourTipo1Percent: v, flourNuvolaPercent: nuvola, flourPizzeriaPercent: 1 - v - nuvola });
  }


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
          <PercentSlider label="Caputo Nuvola" value={store.flourNuvolaPercent} onChange={setNuvola} max={1 - store.flourTipo1Percent} />
          <PercentSlider label="Caputo Tipo 1" value={store.flourTipo1Percent} onChange={setTipo1} max={1 - store.flourNuvolaPercent} />
          <PercentSlider label="Semolina Rimacinata (dusting additive)" value={store.flourSemolinaAddPercent} onChange={v => set({ flourSemolinaAddPercent: v })} max={0.10} />

          <div className="border-t border-border/60 pt-4 space-y-2">
            {[
              { label: "Caputo Pizzeria 00", value: grams.pizzeria, pct: blend.pizzeria },
              { label: "Caputo Nuvola", value: grams.nuvola, pct: blend.nuvola },
              { label: "Caputo Tipo 1", value: grams.tipo1, pct: blend.tipo1 },
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
