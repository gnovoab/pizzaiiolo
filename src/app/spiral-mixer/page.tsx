"use client";

import { useState, useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { calcWaterTemp, fmt } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Phase {
  text: string;
  note?: string;
}

const PHASES: Phase[] = [
  { text: "0–1 min (Speed 1, 90 RPM): Pour the water and dissolve the yeast",
    note: "Engage Reverse Rotation at Speed 1 (90 RPM) to hydrate flour and yeast cleanly without kicking up flour dust." },
  { text: "1–3 min (Speed 1–2): Add ~70% of the total flour; mix until a smooth batter forms around the breaker bar" },
  { text: "3–5 min (Speed 2–3): Add the salt and the remaining 30% of flour; mix until no dry flour remains" },
  { text: "5–9 min (Speed 4–5): Increase speed to build the gluten matrix until the dough detaches cleanly from the bowl sides into a smooth ring" },
];

export default function SpiralMixerPage() {
  const store = usePizzaStore();
  const { set } = store;
  const [kneadMinutes, setKneadMinutes] = useState(0);
  const [showWaterTempInfo, setShowWaterTempInfo] = useState(false);

  // Note: this duplicates the calculator on /create intentionally (same store fields
  // roomTempForWater/flourTemp/frictionFactor) — now has its own dedicated home here.
  const waterTemp = useMemo(
    () => calcWaterTemp(store.roomTempForWater, store.flourTemp, store.frictionFactor),
    [store.roomTempForWater, store.flourTemp, store.frictionFactor]
  );

  // Dynamic Bassinage Protocol: above 65% hydration, hold back 15% of the water
  // to trickle in during Phase 4 once the initial gluten structure has formed.
  const isHighHydration = store.hydration > 0.65;
  const bassinage = useMemo(
    () => ({
      initialWater: store.waterInput * 0.85,
      bassinageWater: store.waterInput * 0.15,
    }),
    [store.waterInput]
  );

  // Thermal Threshold Alert: if the room is hot enough that friction/ambient
  // heat risks pushing the FDT past the 24°C max, suggest substituting part
  // of the water weight with crushed ice.
  const roomTooWarm = store.roomTempForWater > 23;
  const iceWeight = store.waterInput * 0.20;

  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">La Impastatrice</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">🌀 Spiral Mixer Profile</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Famag IM 5-S-10V (HH) — dual-rotation spiral mixer specs, water temperature calculator, and the general 4-phase mixing protocol used across every dough recipe.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl">Machine Specifications</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 grid sm:grid-cols-3 gap-3">
          <SpecItem label="System" value="Dual Rotation (Bowl + Hook + Offset Breaker Bar)" />
          <SpecItem label="Friction Factor (default)" value="3.0°C" />
          <SpecItem label="Speed Range" value="10 Variable Speeds (90–320 RPM)" />
        </CardContent>
      </Card>

      <Section number={1} title="Water Temperature Calculator">
        <div className="grid sm:grid-cols-3 gap-3">
          <Field label="Room Temp (°C)" value={store.roomTempForWater} onChange={v => set({ roomTempForWater: v })} min={10} max={35} step={1} />
          <Field label="Flour Temp (°C)" value={store.flourTemp} onChange={v => set({ flourTemp: v })} min={5} max={30} step={1} />
          <Field label="Friction Factor (°C)" value={store.frictionFactor} onChange={v => set({ frictionFactor: v })} min={0} max={10} step={0.5} />
        </div>
        <div className="mt-2 flex justify-between items-baseline bg-primary/8 border border-primary/20 rounded-lg px-3 py-2.5" style={{ backgroundColor: "rgba(194,65,12,0.08)" }}>
          <span className="font-serif text-base font-semibold flex items-center gap-1.5">
            Target Water Temp
            <button
              type="button"
              onClick={() => setShowWaterTempInfo(v => !v)}
              aria-expanded={showWaterTempInfo}
              aria-label="What is Target Water Temp and why does it matter?"
              className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-primary/50 text-primary text-[10px] font-bold leading-none hover:bg-primary/15 transition-colors"
            >
              i
            </button>
          </span>
          <span className="font-mono font-bold text-primary text-lg">{fmt(waterTemp, 1)}°C</span>
        </div>
        {showWaterTempInfo && (
          <div className="mt-2 text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-3 space-y-2">
            <p>
              <span className="font-semibold text-foreground">What it is:</span> the water temperature you need to pour <em>right now</em> so the dough comes out of the mixer at the ideal <HighlightNumbers text="22°C" /> final dough temperature (FDT).
            </p>
            <p>
              <span className="font-semibold text-foreground">Why it matters:</span> water is the only ingredient you can easily heat or cool, so it&apos;s used to control the dough&apos;s final temperature. Too warm and the dough ferments too fast, weakening gluten and over-proofing; too cold and yeast activity stalls, leaving a dense, under-proofed crumb. A consistent FDT means consistent, repeatable fermentation timing every batch.
            </p>
            <p>
              <span className="font-semibold text-foreground">How to get it:</span> it&apos;s calculated automatically as <span className="font-mono">(3 × 22°C) − Room Temp − Flour Temp − Friction Factor</span>. The Friction Factor accounts for heat the mixer itself adds while kneading — so as your kitchen or flour runs warmer, the water gets colder to compensate, keeping the FDT on target.
            </p>
          </div>
        )}

        <div className="mt-3 flex justify-between items-baseline">
          <span className="text-[15px] text-foreground/80">Final Dough Temp — Target Range (Max Limit)</span>
          <span className="font-mono font-semibold text-primary">21°C – 23°C (24°C)</span>
        </div>
        {roomTooWarm && (
          <p className="mt-3 text-sm font-medium text-destructive border-l-2 border-destructive/40 pl-3">
            ⚠️ Room temperature exceeds 23°C — substitute 20% of the cold water weight with crushed ice to absorb motor friction ({fmt(iceWeight, 0)} g ice, replacing an equal weight of water).
          </p>
        )}
      </Section>

      <Section number={2} title="4-Phase Mixing Protocol" subtitle="8–10 minutes total — dual rotation, Ff 3.0°C">
        <Subhead>In your Famag IM 5-S-10V (HH)</Subhead>
        <ol className="space-y-1.5">
          {PHASES.map((p, i) => (
            <li key={p.text} className="text-[15px] leading-relaxed">
              <div className="flex gap-2.5">
                <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
                <span><HighlightNumbers text={p.text} /></span>
              </div>
              {p.note && (
                <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-1 ml-6">
                  <HighlightNumbers text={p.note} />
                </p>
              )}
            </li>
          ))}
        </ol>

        {isHighHydration && (
          <div className="mt-4 rounded-lg border border-primary/30 bg-primary/8 p-3.5" style={{ backgroundColor: "rgba(194,65,12,0.08)" }}>
            <Subhead className="mb-1.5">Dynamic Bassinage Protocol — Hydration {fmt(store.hydration * 100, 0)}% &gt; 65%</Subhead>
            <p className="text-sm text-foreground/80 leading-relaxed">
              High hydration detected — split the water into two additions instead of pouring it all in Phase 1:
            </p>
            <ul className="text-[15px] mt-2 space-y-1">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Initial Water (Phase 1, 85%)</span>
                <span className="font-mono font-semibold text-foreground">{fmt(bassinage.initialWater, 0)} g</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Bassinage Water (Phase 4, Speed 5–7, 15%)</span>
                <span className="font-mono font-semibold text-foreground">{fmt(bassinage.bassinageWater, 0)} g</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-2">
              Trickle the reserved 15% slowly into the bowl during Phase 4 once the initial gluten structure has formed.
            </p>
          </div>
        )}
      </Section>

      <Section
        number={3}
        title="Safety & Quality Alerts"
        info={
          <>
            <p>
              <span className="font-semibold text-foreground">What it is:</span> a live check on how long the dough has been kneading in the spiral mixer bowl.
            </p>
            <p>
              <span className="font-semibold text-foreground">Why it matters:</span> a spiral mixer adds heat through friction as it kneads. Caputo 00 flour has a narrow tolerance window — over-mixing past <HighlightNumbers text="10 minutes" /> can overheat the dough even if the water temp was correct, breaking down the gluten into a slack, sticky mass that won&apos;t hold its shape and ferments unevenly.
            </p>
            <p>
              <span className="font-semibold text-foreground">How to use it:</span> enter the elapsed knead time as you mix. If it crosses <HighlightNumbers text="10 minutes" />, you&apos;ll get a warning to stop and check the actual dough temperature with a thermometer before continuing.
            </p>
          </>
        }
      >
        <label className="text-[15px] text-foreground/80 block mb-2">Knead time so far (minutes)</label>
        <input type="number" min={0} max={30} value={kneadMinutes}
          onChange={e => setKneadMinutes(Number(e.target.value))}
          className="bg-card border border-border rounded-lg px-3 py-2 text-[15px] w-32 text-foreground focus:outline-none focus:border-primary/60" />
        {kneadMinutes > 10 && (
          <p className="mt-3 text-sm font-medium text-destructive border-l-2 border-destructive/40 pl-3">
            ⚠️ Spiral mixing past 10 minutes can overheat Caputo 00 dough — stop and check dough temperature.
          </p>
        )}
        <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-3">
          Water temperature is always forced through the Ff = 3.0°C formula above — do not eyeball it.
        </p>
      </Section>
    </div>
  );
}

function Section({ number, title, subtitle, info, children }: { number: number; title: string; subtitle?: string; info?: React.ReactNode; children: React.ReactNode }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Card>
      <CardHeader className="pb-3 border-b border-border/60">
        <CardTitle className="font-serif text-xl flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">{number}</span>
          <span className="flex-1 min-w-0">
            <span className="text-foreground flex items-center gap-1.5 leading-tight">
              {title}
              {info && (
                <button
                  type="button"
                  onClick={() => setShowInfo(v => !v)}
                  aria-expanded={showInfo}
                  aria-label={`Why ${title}?`}
                  className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-primary/50 text-primary text-[10px] font-bold leading-none hover:bg-primary/15 transition-colors shrink-0"
                >
                  i
                </button>
              )}
            </span>
            {subtitle && <span className="block text-xs font-sans font-normal text-muted-foreground italic mt-0.5 normal-case tracking-normal">{subtitle}</span>}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-[15px] pt-4">
        {info && showInfo && (
          <div className="mb-4 text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-3 space-y-2">
            {info}
          </div>
        )}
        {children}
      </CardContent>
    </Card>
  );
}

function Subhead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2 ${className}`}>{children}</div>;
}

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|ml|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|%))/gi);
  return <>{parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}</>;
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

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3">
      <div className="text-[10px] uppercase tracking-[0.15em] text-secondary font-semibold">{label}</div>
      <div className="font-serif font-semibold text-sm text-foreground mt-1 leading-snug">{value}</div>
    </div>
  );
}
