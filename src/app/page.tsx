"use client";

import { useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { PIZZAIOLI } from "@/lib/pizzaioli";
import { calcDough, fmt } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { DoughMode } from "@/lib/types";

export default function CalculatorPage() {
  const store = usePizzaStore();
  const { set, setFromPizzaiolo } = store;

  const result = useMemo(() =>
    calcDough({
      mode: store.doughMode,
      numPizzas: store.numPizzas,
      ballWeight: store.ballWeight,
      flour: store.flourInput,
      water: store.waterInput,
      hydration: store.hydration,
      salt: store.salt,
      yeast: store.yeast,
      selectedPizzaioloId: store.selectedPizzaioloId,
    }),
    [store.doughMode, store.numPizzas, store.ballWeight, store.flourInput, store.waterInput,
     store.hydration, store.salt, store.yeast, store.selectedPizzaioloId]
  );

  const modes: { key: DoughMode; label: string }[] = [
    { key: "pizzas", label: "By Pizzas" },
    { key: "flour", label: "By Flour" },
    { key: "water", label: "By Water" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">L&apos;Impasto</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Dough Calculator</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Real-time ingredient calculation from any starting point — pizzas, flour or water.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">1</span>
            <span>Select Pizzaiolo</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PIZZAIOLI.map((p) => {
              const active = store.selectedPizzaioloId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setFromPizzaiolo(p.id, p.hydration, p.salt, p.yeast)}
                  className="relative overflow-hidden p-3 pt-4 rounded-xl border text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{
                    borderColor: active ? p.color : "var(--border)",
                    backgroundColor: active ? p.color + "12" : "var(--card)",
                  }}
                >
                  <span className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: p.color }} aria-hidden />
                  <div className="font-serif font-semibold text-sm leading-tight text-foreground">{p.name}</div>
                  <div className="text-xs text-muted-foreground italic mt-0.5">{p.style}</div>
                  <div className="mt-2 flex gap-1 flex-wrap">
                    <span className="bg-muted rounded px-1.5 py-0.5 text-[10px] font-mono">{Math.round(p.hydration * 100)}% H</span>
                    {p.preferment && (
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide" style={{ backgroundColor: p.color + "22", color: p.color }}>
                        {p.preferment}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mr-1">Mode</span>
        {modes.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => set({ doughMode: key })}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              store.doughMode === key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-3 border-b border-border/60">
            <CardTitle className="font-serif text-xl flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">2</span>
              <span>Inputs</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-5">
            {store.doughMode === "pizzas" && (
              <>
                <Field label="Number of Pizzas" value={store.numPizzas} onChange={v => set({ numPizzas: v })} min={1} max={100} step={1} />
                <Field label="Ball Weight (g)" value={store.ballWeight} onChange={v => set({ ballWeight: v })} min={150} max={400} step={5} />
              </>
            )}
            {store.doughMode === "flour" && (
              <Field label="Flour (g)" value={store.flourInput} onChange={v => set({ flourInput: v })} min={100} max={5000} step={10} />
            )}
            {store.doughMode === "water" && (
              <Field label="Water (g)" value={store.waterInput} onChange={v => set({ waterInput: v })} min={100} max={5000} step={10} />
            )}
            <div className="border-t border-border/60 pt-4 space-y-5">
              <PercentField label="Hydration" value={store.hydration} onChange={v => set({ hydration: v })} min={0.50} max={0.85} />
              <PercentField label="Salt" value={store.salt} onChange={v => set({ salt: v })} min={0.01} max={0.05} step={0.001} />
              <PercentField label="Yeast" value={store.yeast} onChange={v => set({ yeast: v })} min={0.0001} max={0.02} step={0.0001} decimals={4} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/40 shadow-md">
          <CardHeader className="pb-3 border-b border-border/60">
            <CardTitle className="font-serif text-xl flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">3</span>
              <span>Recipe</span>
              <Badge variant="outline" className="text-primary border-primary/40 text-[10px] uppercase tracking-wider ml-auto">Live</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            {[
              { label: "Flour", value: result.flour },
              { label: "Water", value: result.water },
              { label: "Salt", value: result.salt },
              { label: "Yeast", value: result.yeast },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-baseline py-2 border-b border-border/40 last:border-0">
                <span className="text-muted-foreground text-[15px]">{label}</span>
                <span className="font-mono font-semibold text-foreground text-base">{fmt(value, 1)} g</span>
              </div>
            ))}
            <div className="mt-2 flex justify-between items-baseline bg-primary/8 border border-primary/20 rounded-lg px-3 py-2.5" style={{ backgroundColor: "rgba(194,65,12,0.08)" }}>
              <span className="font-serif text-base font-semibold">Total Dough</span>
              <span className="font-mono font-bold text-primary text-lg">{fmt(result.totalDough, 0)} g</span>
            </div>
            <div className="flex justify-between items-baseline px-3">
              <span className="text-xs uppercase tracking-wider text-secondary">Pizzas</span>
              <span className="font-mono text-sm text-foreground">{result.numPizzas} × {fmt(store.ballWeight, 0)} g</span>
            </div>
          </CardContent>
        </Card>
      </div>
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

function PercentField({ label, value, onChange, min, max, step = 0.01, decimals = 1 }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step?: number; decimals?: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-[15px] text-foreground/80">{label}</label>
        <span className="font-mono font-semibold text-primary">{(value * 100).toFixed(decimals)}%</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer" />
    </div>
  );
}
