"use client";

import { useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { PIZZAIOLI } from "@/lib/pizzaioli";
import { calcDough, calcCost, fmt } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CostPage() {
  const store = usePizzaStore();
  const { set } = store;

  const dough = useMemo(() => calcDough({
    mode: "pizzas",
    numPizzas: store.numPizzas,
    ballWeight: store.ballWeight,
    flour: store.flourInput,
    water: store.waterInput,
    hydration: store.hydration,
    salt: store.salt,
    yeast: store.yeast,
    selectedPizzaioloId: store.selectedPizzaioloId,
  }), [store.numPizzas, store.ballWeight, store.hydration, store.salt, store.yeast, store.selectedPizzaioloId, store.flourInput, store.waterInput]);

  const cost = useMemo(() => calcCost({
    flourCostPerKg: store.flourCostPerKg,
    tomatoCostPerKg: store.tomatoCostPerKg,
    mozzarellaCostPerKg: store.mozzarellaCostPerKg,
    oliveOilCostPerL: store.oliveOilCostPerL,
    numPizzas: store.numPizzas,
    flourGrams: dough.flour,
    sauceGramsPerPizza: store.sauceGramsPerPizza,
    mozzarellaGramsPerPizza: store.mozzarellaGramsPerPizza,
    oliveOilMlPerPizza: store.oliveOilMlPerPizza,
  }), [store, dough.flour]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Cost Calculator</h1>
        <p className="text-muted-foreground text-sm mt-1">Estimate ingredient costs for your batch</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle className="text-base">Batch Setup</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Pizzaiolo</label>
                <select value={store.selectedPizzaioloId} onChange={e => set({ selectedPizzaioloId: e.target.value })}
                  className="bg-muted border border-border rounded-lg px-3 py-2 text-sm w-full text-foreground">
                  {PIZZAIOLI.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <SliderRow label="Number of Pizzas" value={store.numPizzas}
                onChange={v => set({ numPizzas: v })} min={1} max={100} display={`${store.numPizzas}`} />
              <SliderRow label="Ball Weight (g)" value={store.ballWeight}
                onChange={v => set({ ballWeight: v })} min={150} max={400} step={5} display={`${store.ballWeight}g`} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Ingredient Prices</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <PriceInput label="Flour (€/kg)" value={store.flourCostPerKg} onChange={v => set({ flourCostPerKg: v })} />
              <PriceInput label="Tomatoes (€/kg)" value={store.tomatoCostPerKg} onChange={v => set({ tomatoCostPerKg: v })} />
              <PriceInput label="Mozzarella (€/kg)" value={store.mozzarellaCostPerKg} onChange={v => set({ mozzarellaCostPerKg: v })} />
              <PriceInput label="Olive Oil (€/L)" value={store.oliveOilCostPerL} onChange={v => set({ oliveOilCostPerL: v })} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Quantities per Pizza</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <SliderRow label="Sauce (g/pizza)" value={store.sauceGramsPerPizza}
                onChange={v => set({ sauceGramsPerPizza: v })} min={60} max={200} step={5} display={`${store.sauceGramsPerPizza}g`} />
              <SliderRow label="Mozzarella (g/pizza)" value={store.mozzarellaGramsPerPizza}
                onChange={v => set({ mozzarellaGramsPerPizza: v })} min={50} max={200} step={5} display={`${store.mozzarellaGramsPerPizza}g`} />
              <SliderRow label="Olive Oil (ml/pizza)" value={store.oliveOilMlPerPizza}
                onChange={v => set({ oliveOilMlPerPizza: v })} min={0} max={50} step={2} display={`${store.oliveOilMlPerPizza}ml`} />
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <Card className="border-primary/30">
            <CardHeader><CardTitle className="text-base">Cost Breakdown</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {[
                { label: "Flour", value: cost.flourCost },
                { label: "Tomatoes / Sauce", value: cost.tomatoCost },
                { label: "Mozzarella", value: cost.mozzarellaCost },
                { label: "Olive Oil", value: cost.oliveOilCost },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="font-mono font-semibold text-sm">€{fmt(value, 2)}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Card className="border-primary/40">
              <CardContent className="pt-5 text-center">
                <div className="text-3xl font-bold text-primary font-mono">€{fmt(cost.totalCost, 2)}</div>
                <div className="text-xs text-muted-foreground mt-1">Total Batch Cost</div>
                <div className="text-xs text-muted-foreground">({store.numPizzas} pizzas)</div>
              </CardContent>
            </Card>
            <Card className="border-primary/40">
              <CardContent className="pt-5 text-center">
                <div className="text-3xl font-bold text-primary font-mono">€{fmt(cost.costPerPizza, 2)}</div>
                <div className="text-xs text-muted-foreground mt-1">Cost Per Pizza</div>
                <div className="text-xs text-muted-foreground">(ingredients only)</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-sm">Dough Used</CardTitle></CardHeader>
            <CardContent className="space-y-1.5 text-sm">
              {[
                { label: "Flour", value: `${fmt(dough.flour, 1)} g` },
                { label: "Water", value: `${fmt(dough.water, 1)} g` },
                { label: "Salt", value: `${fmt(dough.salt, 1)} g` },
                { label: "Yeast", value: `${fmt(dough.yeast, 2)} g` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-mono">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SliderRow({ label, value, onChange, min, max, step = 1, display }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number; display: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-sm text-muted-foreground">{label}</label>
        <span className="text-sm font-mono font-medium">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))} className="w-full accent-primary cursor-pointer" />
    </div>
  );
}

function PriceInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-muted-foreground flex-1">{label}</label>
      <input type="number" step="0.1" min={0} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="bg-muted border border-border rounded-lg px-3 py-1.5 text-sm w-24 text-right font-mono text-foreground" />
    </div>
  );
}
