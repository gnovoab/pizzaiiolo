"use client";

import { useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { calcPoolish, calcBiga, fmt } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PreferentsPage() {
  const store = usePizzaStore();
  const { set } = store;

  const poolish = useMemo(() => calcPoolish({
    totalFlour: store.poolishTotalFlour,
    poolishPercent: store.poolishPercent,
    yeastPercent: store.poolishYeastPercent,
  }), [store.poolishTotalFlour, store.poolishPercent, store.poolishYeastPercent]);

  const biga = useMemo(() => calcBiga({
    totalFlour: store.bigaTotalFlour,
    bigaPercent: store.bigaPercent,
    hydration: store.bigaHydration,
    yeastPercent: store.bigaYeastPercent,
  }), [store.bigaTotalFlour, store.bigaPercent, store.bigaHydration, store.bigaYeastPercent]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Preferment Calculators</h1>
        <p className="text-muted-foreground text-sm mt-1">Poolish and Biga calculations for complex doughs</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Poolish */}
        <div className="space-y-4">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">🧫 Poolish
                <span className="text-xs text-muted-foreground font-normal ml-1">100% hydration preferment</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SliderRow label="Total Flour (g)" value={store.poolishTotalFlour}
                onChange={v => set({ poolishTotalFlour: v })} min={100} max={3000} step={50} display={`${store.poolishTotalFlour}g`} />
              <SliderRow label="Poolish %" value={store.poolishPercent * 100}
                onChange={v => set({ poolishPercent: v / 100 })} min={20} max={80} step={5} display={`${Math.round(store.poolishPercent * 100)}%`} />
              <SliderRow label="Poolish Yeast %" value={store.poolishYeastPercent * 100}
                onChange={v => set({ poolishYeastPercent: v / 100 })} min={0.01} max={0.5} step={0.01} display={`${(store.poolishYeastPercent * 100).toFixed(2)}%`} />
            </CardContent>
          </Card>

          <Card className="border-primary/40">
            <CardHeader><CardTitle className="text-sm">Poolish Results</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <ResultRow label="Poolish Flour" value={`${fmt(poolish.poolishFlour, 1)} g`} />
              <ResultRow label="Poolish Water" value={`${fmt(poolish.poolishWater, 1)} g`} />
              <ResultRow label="Poolish Yeast" value={`${fmt(poolish.poolishYeast, 2)} g`} />
              <div className="pt-2 border-t border-border">
                <ResultRow label="Remaining Flour" value={`${fmt(poolish.mainFlour, 1)} g`} highlight />
              </div>
              <div className="text-xs text-muted-foreground bg-muted rounded-lg p-3 mt-2">
                <p className="font-medium text-foreground mb-1">Instructions:</p>
                <p>Mix poolish flour + water + yeast. Ferment 12–16h at room temp until bubbly. Add to main dough.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Biga */}
        <div className="space-y-4">
          <Card className="border-[#D4A373]/20">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">🥖 Biga
                <span className="text-xs text-muted-foreground font-normal ml-1">Stiff Italian preferment</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SliderRow label="Total Flour (g)" value={store.bigaTotalFlour}
                onChange={v => set({ bigaTotalFlour: v })} min={100} max={3000} step={50} display={`${store.bigaTotalFlour}g`} />
              <SliderRow label="Biga %" value={store.bigaPercent * 100}
                onChange={v => set({ bigaPercent: v / 100 })} min={20} max={100} step={5} display={`${Math.round(store.bigaPercent * 100)}%`} />
              <SliderRow label="Biga Hydration" value={store.bigaHydration * 100}
                onChange={v => set({ bigaHydration: v / 100 })} min={40} max={60} step={1} display={`${Math.round(store.bigaHydration * 100)}%`} />
              <SliderRow label="Biga Yeast %" value={store.bigaYeastPercent * 100}
                onChange={v => set({ bigaYeastPercent: v / 100 })} min={0.01} max={1} step={0.01} display={`${(store.bigaYeastPercent * 100).toFixed(2)}%`} />
            </CardContent>
          </Card>

          <Card className="border-[#D4A373]/40">
            <CardHeader><CardTitle className="text-sm">Biga Results</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <ResultRow label="Biga Flour" value={`${fmt(biga.bigaFlour, 1)} g`} />
              <ResultRow label="Biga Water" value={`${fmt(biga.bigaWater, 1)} g`} />
              <ResultRow label="Biga Yeast" value={`${fmt(biga.bigaYeast, 2)} g`} />
              <div className="pt-2 border-t border-border">
                <ResultRow label="Remaining Flour" value={`${fmt(biga.mainFlour, 1)} g`} highlight />
              </div>
              <div className="text-xs text-muted-foreground bg-muted rounded-lg p-3 mt-2">
                <p className="font-medium text-foreground mb-1">Instructions:</p>
                <p>Mix biga ingredients into rough dough. Ferment 16–20h at 16–18°C. Incorporate into final dough.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SliderRow({ label, value, onChange, min, max, step, display }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; display: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-sm text-muted-foreground">{label}</label>
        <span className="text-sm font-mono font-medium">{display}</span>
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
