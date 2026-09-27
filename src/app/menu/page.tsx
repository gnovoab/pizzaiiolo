import { RECIPES } from "@/lib/recipes";
import type { PizzaRecipe } from "@/lib/types";

export default function MenuPage() {
  const pizzas = RECIPES.filter((r) => r.category !== "pumpkin").sort((a, b) => a.number - b.number);

  return (
    <div className="space-y-8">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Il Menù</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Menu</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          {pizzas.length} pizzas available.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pizzas.map((r) => (
          <MenuCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

function MenuCard({ recipe }: { recipe: PizzaRecipe }) {
  return (
    <div className="group text-left rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="relative w-full aspect-[4/3] bg-muted border-b border-border/70 flex items-center justify-center">
        {recipe.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={recipe.image} alt={recipe.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="text-5xl opacity-40">🍕</div>
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
    </div>
  );
}
