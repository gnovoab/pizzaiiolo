"use client";

import { useState, useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { calcDough, fmt } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FermentationPage() {
  const store = usePizzaStore();
  const [totalFlour, setTotalFlour] = useState(1000);
  const [ballWeight, setBallWeight] = useState(280);

  const result = useMemo(() => calcDough({
    mode: "flour", flour: totalFlour, ballWeight,
    hydration: store.hydration, salt: store.salt, yeast: store.yeast,
    numPizzas: 0, water: 0, selectedPizzaioloId: store.selectedPizzaioloId,
  }), [totalFlour, ballWeight, store.hydration, store.salt, store.yeast, store.selectedPizzaioloId]);

  const scale = totalFlour / 1000;
  const yeast24Low = 0.8 * scale, yeast24High = 1.0 * scale;
  const yeast48Low = 0.4 * scale, yeast48High = 0.6 * scale;

  const fullBalls = ballWeight > 0 ? Math.floor(result.totalDough / ballWeight) : 0;
  const remainingDough = result.totalDough - fullBalls * ballWeight;

  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">La Lievitazione</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">⏱️ Fermentation &amp; Staglio</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          From bench rest to balled dough — the four stages every batch passes through, plus yield and yeast scaling.
        </p>
      </div>

      <Section number={1} title="4-Step Workflow" subtitle="Bench rest → cold bulk → balling → proofing">
        <Subhead>1. Bench Rest</Subhead>
        <Bullets items={["20–30 minutes, covered, at room temperature — right after mixing"]} />

        <Subhead className="mt-4">2. Cold Bulk Ferment (Puntata)</Subhead>
        <Bullets items={["16–24 hours in the fridge at 4°C, in a sealed container"]} />

        <Subhead className="mt-4">3. Balling (Staglio)</Subhead>
        <Bullets items={["Portion into 280 g balls using a bench scraper", "Pull tight skins for surface tension"]} />

        <Subhead className="mt-4">4. Ball Proofing (Appretto)</Subhead>
        <Bullets items={["4–6 hours at room temperature, OR", "12–24 hours cold + 2 hours at room temperature before bake"]} />
      </Section>

      <Section number={2} title="Yield Calculator & Portioning">
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Total Flour (g)" value={totalFlour} onChange={setTotalFlour} min={500} max={5000} step={50} />
          <Field label="Ball Weight (g)" value={ballWeight} onChange={setBallWeight} min={150} max={400} step={5} />
        </div>
        <div className="mt-4 space-y-1">
          <ResultRow label="Total Dough" value={`${fmt(result.totalDough, 0)} g`} />
          <ResultRow label="Yield" value={`${fullBalls} full ${fmt(ballWeight, 0)} g balls`} highlight />
          {remainingDough >= 1 && (
            <ResultRow label="Remaining Dough" value={`${fmt(remainingDough, 0)} g (mini pizza / panuozzo)`} />
          )}
        </div>
      </Section>

      <Section number={3} title="Dynamic Schedule & Yeast Generator">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">24-Hour Plan</div>
            <div className="font-serif text-base font-semibold mb-1.5">18h cold bulk + 6h room-temp balls</div>
            <p className="text-[15px]">Caputo dry yeast: <span className="font-mono font-semibold text-primary">{fmt(yeast24Low, 2)}–{fmt(yeast24High, 2)} g</span></p>
          </div>
          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">48-Hour Plan</div>
            <div className="font-serif text-base font-semibold mb-1.5">40h cold bulk + 8h room-temp balls</div>
            <p className="text-[15px]">Caputo dry yeast: <span className="font-mono font-semibold text-primary">{fmt(yeast48Low, 2)}–{fmt(yeast48High, 2)} g</span></p>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Section({ number, title, subtitle, children }: { number: number; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="pb-3 border-b border-border/60">
        <CardTitle className="font-serif text-xl flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">{number}</span>
          <span className="flex-1 min-w-0">
            <span className="text-foreground block leading-tight">{title}</span>
            {subtitle && <span className="block text-xs font-sans font-normal text-muted-foreground italic mt-0.5 normal-case tracking-normal">{subtitle}</span>}
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

function ResultRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-mono font-semibold text-sm ${highlight ? "text-primary" : "text-foreground"}`}>{value}</span>
    </div>
  );
}
