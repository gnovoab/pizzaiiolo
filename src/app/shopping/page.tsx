"use client";

import { useMemo, useState } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { PIZZAIOLI, getPizzaiolo } from "@/lib/pizzaioli";
import { calcDough, fmt } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShoppingPage() {
  const store = usePizzaStore();
  const { set } = store;
  const [copied, setCopied] = useState(false);

  const pizzaiolo = getPizzaiolo(store.selectedPizzaioloId) || PIZZAIOLI[0];

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

  const sauce = store.sauceGramsPerPizza * store.numPizzas;
  const mozzarella = store.mozzarellaGramsPerPizza * store.numPizzas;
  const oliveOil = pizzaiolo.sauce.oliveOilPercent > 0 ? store.oliveOilMlPerPizza * store.numPizzas : 0;

  const items = [
    { name: "Flour (00 or bread)", amount: dough.flour, unit: "g", category: "dough", kg: dough.flour / 1000 },
    { name: "Water", amount: dough.water, unit: "g", category: "dough", kg: null },
    { name: "Salt (fine sea salt)", amount: dough.salt, unit: "g", category: "dough", kg: null },
    { name: "Yeast (instant dry)", amount: dough.yeast, unit: "g", category: "dough", kg: null },
    { name: "San Marzano Tomatoes", amount: sauce, unit: "g", category: "sauce", kg: sauce / 1000 },
    { name: "Fresh Mozzarella", amount: mozzarella, unit: "g", category: "toppings", kg: mozzarella / 1000 },
    ...(pizzaiolo.sauce.basil ? [{ name: "Fresh Basil", amount: store.numPizzas * 3, unit: "leaves", category: "sauce", kg: null }] : []),
    ...(oliveOil > 0 ? [{ name: "Extra Virgin Olive Oil", amount: oliveOil, unit: "ml", category: "sauce", kg: null }] : []),
  ];

  const categories = ["dough", "sauce", "toppings"];
  const catLabels: Record<string, string> = { dough: "🍞 Dough", sauce: "🍅 Sauce", toppings: "🧀 Toppings" };

  const listText = items.map(i =>
    `${i.name}: ${fmt(i.amount, 1)} ${i.unit}${i.kg ? ` (${i.kg.toFixed(3)} kg)` : ""}`
  ).join("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(listText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <p className="text-muted-foreground text-sm mt-1">All ingredients for your pizza session</p>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader><CardTitle className="text-base">Session Settings</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Pizzaiolo Style</label>
            <select value={store.selectedPizzaioloId} onChange={e => set({ selectedPizzaioloId: e.target.value })}
              className="bg-muted border border-border rounded-lg px-3 py-2 text-sm w-full text-foreground">
              {PIZZAIOLI.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-muted-foreground">Number of Pizzas</label>
              <span className="text-sm font-mono font-medium">{store.numPizzas}</span>
            </div>
            <input type="range" min={1} max={100} value={store.numPizzas} onChange={e => set({ numPizzas: Number(e.target.value) })} className="w-full accent-primary" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-muted-foreground">Mozzarella per Pizza (g)</label>
              <span className="text-sm font-mono font-medium">{store.mozzarellaGramsPerPizza}g</span>
            </div>
            <input type="range" min={60} max={200} value={store.mozzarellaGramsPerPizza} onChange={e => set({ mozzarellaGramsPerPizza: Number(e.target.value) })} className="w-full accent-primary" />
          </div>
        </CardContent>
      </Card>

      {/* Shopping list */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Shopping List — {store.numPizzas} Pizzas</CardTitle>
            <button onClick={handleCopy}
              className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {copied ? "✓ Copied!" : "Copy List"}
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {categories.map(cat => {
            const catItems = items.filter(i => i.category === cat);
            if (!catItems.length) return null;
            return (
              <div key={cat} className="mb-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{catLabels[cat]}</h3>
                <div className="space-y-1.5">
                  {catItems.map((item) => (
                    <div key={item.name} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-sm">{item.name}</span>
                      <div className="text-right">
                        <span className="font-mono font-semibold text-sm">{fmt(item.amount, 1)} {item.unit}</span>
                        {item.kg && <span className="text-xs text-muted-foreground ml-2">({item.kg.toFixed(3)} kg)</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
