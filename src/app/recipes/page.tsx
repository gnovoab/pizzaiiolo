"use client";

import { useEffect, useState } from "react";
import { RECIPES, RECIPE_CATEGORIES, getRecipesByCategory } from "@/lib/recipes";
import type { PizzaRecipe, RecipeStep, RecipeStepSection } from "@/lib/types";

export default function RecipesPage() {
  const [selected, setSelected] = useState<PizzaRecipe | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="space-y-12">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Il Menù</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Pizza Recipes</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          {RECIPES.length} pizzas · tap any item for the full build, bake parameters and finishing notes.
        </p>
      </div>

      {RECIPE_CATEGORIES.map((c) => {
        const items = getRecipesByCategory(c.id);
        if (items.length === 0) return null;
        return (
          <section key={c.id} className="space-y-5">
            <div className="flex items-end justify-between gap-4 border-b-2 border-primary/20 pb-3">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold">{c.label}</h2>
                <p className="text-sm text-muted-foreground mt-1 italic">{c.blurb}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground shrink-0">{items.length} pizzas</span>
            </div>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {items.map((r) => (
                <MenuItem key={r.id} recipe={r} onClick={() => setSelected(r)} />
              ))}
            </div>
          </section>
        );
      })}

      {selected && <RecipeModal recipe={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function MenuItem({ recipe, onClick }: { recipe: PizzaRecipe; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left flex gap-4 p-3 rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-muted border border-border/70 flex items-center justify-center">
        {recipe.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={recipe.image} alt={recipe.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="text-4xl opacity-40 group-hover:opacity-60 transition-opacity">🍕</div>
        )}
      </div>
      <div className="flex-1 min-w-0 py-0.5">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-xs font-mono text-primary font-semibold">№ {recipe.number}</span>
          <h3 className="font-serif font-semibold text-lg sm:text-xl leading-tight text-foreground">{recipe.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-2 leading-snug line-clamp-3">
          {recipe.toppings}
        </p>
      </div>
    </button>
  );
}

function RecipeModal({ recipe, onClose }: { recipe: PizzaRecipe; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-foreground/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full max-w-3xl max-h-[94vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={recipe.name}
      >
        <div className="relative aspect-[16/9] sm:aspect-[2/1] bg-muted border-b border-border flex items-center justify-center shrink-0">
          {recipe.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={recipe.image} alt={recipe.name} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="text-6xl opacity-30">🍕</div>
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/95 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow"
            aria-label="Close"
          >
            ✕
          </button>
          <span className="absolute top-3 left-3 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-card/95 backdrop-blur text-primary shadow">
            № {recipe.number}
          </span>
        </div>

        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight">{recipe.name}</h2>
            {recipe.style && <p className="text-sm text-secondary italic mt-1">{recipe.style}</p>}
          </div>

          <div className="rounded-xl border border-border bg-muted/60 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Ingredients</div>
            <p className="text-[15px] leading-relaxed text-foreground">{recipe.toppings}</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold">The Build</div>
              <div className="flex-1 h-px bg-border" />
              {recipe.steps && recipe.steps.length > 0 && (
                <span className="text-xs font-mono text-muted-foreground">{recipe.steps.length} steps</span>
              )}
            </div>
            {recipe.steps && recipe.steps.length > 0 ? (
              <ol className="grid md:grid-cols-2 gap-4">
                {recipe.steps.map((s, i) => <StepCard key={s.title} step={s} index={i + 1} />)}
              </ol>
            ) : (
              <p className="text-[15px] leading-relaxed">{recipe.build}</p>
            )}
          </div>

          {recipe.postBake && (
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Post-Bake</div>
              <p className="text-[15px] leading-relaxed">{recipe.postBake}</p>
            </div>
          )}

          {recipe.specialRule && (
            <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-1.5 flex items-center gap-1.5">
                <span aria-hidden>⚠</span> {recipe.specialRule.label}
              </div>
              <p className="leading-relaxed text-[15px]">{recipe.specialRule.detail}</p>
            </div>
          )}

          {recipe.videoGuide && (
            <div className="pt-3 border-t border-border">
              <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
              {recipe.videoUrl ? (
                <a
                  href={recipe.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
                >
                  ▶ {recipe.videoGuide} <span className="text-xs opacity-60">↗</span>
                </a>
              ) : (
                <p className="text-[15px] italic text-muted-foreground">▶ {recipe.videoGuide} <span className="text-xs">(link coming soon)</span></p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Highlight numeric values (temps, times, weights, %) inline so they pop while cooking. */
function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|%))/gi);
  return (
    <>
      {parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}
    </>
  );
}

/** Recognised intro labels get a colored pill instead of a faint grey caption. */
const INTRO_STYLES: { match: RegExp; cls: string }[] = [
  { match: /^(critical|important|never|do not|warning)/i, cls: "bg-destructive/10 text-destructive border-destructive/30" },
  { match: /^(key (idea|principle|point)|key)/i, cls: "bg-primary/10 text-primary border-primary/30" },
  { match: /^(goal|why|what must happen)/i, cls: "bg-secondary/15 text-secondary border-secondary/30" },
  { match: /^effect/i, cls: "bg-chart-3/15 text-chart-3 border-chart-3/30" },
  { match: /^(best|recommended|upgrade|preferred)/i, cls: "bg-chart-4/15 text-chart-4 border-chart-4/30" },
  { match: /^(preparation|placement|application|build|style|note|before|after|preparation|options?)/i, cls: "bg-muted text-foreground/80 border-border" },
];

function introClass(intro: string): string {
  return INTRO_STYLES.find((s) => s.match.test(intro))?.cls ?? "bg-muted text-foreground/80 border-border";
}

function StepCard({ step, index }: { step: RecipeStep; index: number }) {
  // Strip a leading "1. " / "12. " from the title since we render the number ourselves.
  const cleanTitle = step.title.replace(/^\d+\.\s*/, "");
  return (
    <li className="rounded-xl border border-border bg-card p-4 shadow-sm flex gap-3.5">
      <div className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-semibold text-base shadow-sm">
        {index}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-serif text-lg font-semibold leading-tight mb-2 text-foreground">{cleanTitle}</h4>
        <div className="space-y-3">
          {step.sections.map((sec, i) => <StepSection key={i} section={sec} />)}
        </div>
      </div>
    </li>
  );
}

function StepSection({ section }: { section: RecipeStepSection }) {
  const hasLabel = !!section.intro;
  const hasBullets = section.bullets.length > 0;
  return (
    <div>
      {hasLabel && (
        <div className={`inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${introClass(section.intro!)} ${hasBullets ? "mb-1.5" : ""}`}>
          {section.intro}
        </div>
      )}
      {hasBullets && (
        <ul className="text-[15px] space-y-1 leading-relaxed">
          {section.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-primary/70 mt-1 shrink-0" aria-hidden>•</span>
              <span><HighlightNumbers text={b} /></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
