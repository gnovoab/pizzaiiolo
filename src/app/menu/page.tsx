"use client";

import { useState } from "react";
import { RECIPES } from "@/lib/recipes";
import type { PizzaRecipe } from "@/lib/types";

export default function MenuPage() {
  const [selected, setSelected] = useState<PizzaRecipe | null>(null);
  const pizzas = RECIPES.filter((r) => r.category !== "pumpkin").sort((a, b) => a.number - b.number);

  return (
    <div className="space-y-8">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Il Menù</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Menu</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Tap a pizza to point it out — {pizzas.length} pizzas available.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pizzas.map((r) => (
          <MenuCard
            key={r.id}
            recipe={r}
            selected={selected?.id === r.id}
            onClick={() => setSelected(selected?.id === r.id ? null : r)}
          />
        ))}
      </div>

      {selected && (
        <div className="fixed inset-x-0 bottom-0 md:bottom-4 z-40 px-4 pb-4 md:pb-0 flex justify-center pointer-events-none">
          <div className="pointer-events-auto bg-primary text-primary-foreground rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-4 max-w-lg w-full">
            <span className="text-2xl" aria-hidden>👉</span>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-wider opacity-80">I'd like this one</p>
              <p className="font-serif text-xl font-semibold leading-tight truncate">№ {selected.number} · {selected.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuCard({ recipe, selected, onClick }: { recipe: PizzaRecipe; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group text-left rounded-2xl border bg-card overflow-hidden transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
        selected ? "border-primary ring-2 ring-primary" : "border-border hover:border-primary/60"
      }`}
    >
      <div className="relative w-full aspect-[4/3] bg-muted border-b border-border/70 flex items-center justify-center">
        {recipe.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={recipe.image} alt={recipe.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="text-5xl opacity-40 group-hover:opacity-60 transition-opacity">🍕</div>
        )}
        {selected && (
          <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shadow">
            ✓
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-xs font-mono text-primary font-semibold">№ {recipe.number}</span>
          <h3 className="font-serif font-semibold text-lg leading-tight text-foreground">{recipe.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-2 leading-snug">
          {recipe.menuIngredients ?? recipe.toppings}
        </p>
      </div>
    </button>
  );
}
