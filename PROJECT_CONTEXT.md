# Pizza Lab — AI Agent Context

A pizzaiolo's cookbook web app: compare master pizzaioli, scale dough recipes, plan fermentation, and follow a bread-machine workflow. Built as an "Italian Cookbook" themed manual the user can read while building pizza.

---

## 1. Stack & Tooling

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.2.9 (App Router)** — see `node_modules/next/dist/docs/` for this exact version |
| Language | TypeScript 5, React 19.2 |
| Styling | Tailwind CSS v4 + `shadcn/ui` primitives + `tw-animate-css` |
| State | **Zustand** with `persist` middleware (localStorage) |
| Forms | React Hook Form + Zod (light usage) |
| Charts | Recharts |
| Fonts | **Fraunces** (serif headings) + **Inter** (body) + **JetBrains Mono** |
| Deployment | GitHub → Vercel (auto-deploys on `git push`). Static-export compatible. |

Scripts: `npm run dev`, `npm run build`, `npm run lint`.
Typecheck only: `npx tsc --noEmit`.

> ⚠️ The user is **non-technical**. They cannot run `git push` from inside the agent — they must run it themselves in their terminal. After making code changes, instruct them to run `git push` to deploy.

---

## 2. Repository Layout

```
src/
  app/                      # Next.js App Router routes (each folder = page)
    layout.tsx              # Root layout: fonts, AppShell wrap
    globals.css             # Parchment theme tokens (HSL-ish vars in :root)
    page.tsx                # "/" — Dough Calculator (home)
    comparison/             # Compare pizzaioli (sticky tables, charts)
    create/                 # Build-a-pizza interactive hub
    recipes/                # Pizza recipe manual (modal with steps)
    dough-maker/            # 500g bread-machine workflow (Panasonic SD-ZX2522KXG)
    oven/                   # Gozney Arc bake manual
    olive-oil/              # Pre/post-bake EVOO pairing guide
    videos/                 # Curated video library (cards w/ YT thumbs)
    preferments/            # Poolish & Biga calculators
    yeast/                  # Yeast type converter
  components/
    layout/AppShell.tsx     # Sidebar + mobile nav. NAV array defines all routes.
    ui/                     # shadcn primitives (Card, Button, etc.)
  lib/
    types.ts                # ⭐ Single source of truth for all data shapes
    pizzaioli.ts            # ⭐ PIZZAIOLI array — 8 masters with technique + videos
    recipes.ts              # ⭐ RECIPES array — pizza recipes w/ step-by-step builds
    recipeSteps.ts          # Reusable recipe step content
    calculations.ts         # Dough math (Flour=Total/(1+H+S+Y))
    bakeSchedule.ts         # Fermentation timeline helpers
    utils.ts                # cn() class helper
  store/
    usePizzaStore.ts        # Single Zustand store for all calculator inputs
```

---

## 3. Theme — "Light Parchment"

Defined in `src/app/globals.css`. Do **not** hardcode colors; use semantic tokens.

| Token | Value | Use |
|---|---|---|
| `--background` | `#FBF5E9` (parchment cream) | Page bg |
| `--foreground` | `#2A1E14` (espresso brown) | Body text |
| `--primary` | `#C2410C` (roasted terracotta) | Headings, numbers, CTA |
| `--secondary` | `#7C5E3B` (olive wood) | Italic captions, small-caps labels |
| `--card` | `#FFFBF1` (paper white) | Cards |
| `--border` | warm tan | Card borders |

Typography pattern: serif (`font-serif`) for titles, small-caps olive-wood for label pills (`text-[11px] uppercase tracking-[0.15em] text-secondary`).

---

## 4. Key Conventions

1. **Each page is self-contained.** Pages duplicate small helpers (`Section`, `Bullets`, `Subhead`, `Callout`, `HighlightNumbers`) rather than sharing a `components/section.tsx`. Match the existing pattern when adding pages.
2. **`HighlightNumbers`** — regex component that auto-styles units (`°C`, `g`, `%`, `min`, `hours`, etc.) in bold terracotta. Wrap any body text with numbers in `<HighlightNumbers text="..." />`.
3. **Sticky table columns** — Comparison and Olive Oil pages use `sticky left-0` first column with zebra-striped rows. Cells **must paint their own background** to prevent bleed-through; row index is passed in.
4. **Static-only**: no API routes, no middleware, no `next/image`, no server-side fetches. All data is bundled from `src/lib/*.ts`. Keep it that way.
5. **`output: 'export'` is NOT set** in `next.config.ts` — Vercel auto-detects Next.js and builds normally. Don't add `output: 'export'` unless deploying elsewhere.
6. **Code comments:** match the surrounding density. Do not add rationale-style comments.

---

## 5. Data Model Highlights (see `src/lib/types.ts`)

### `Pizzaiolo`
The hero entity. 8 instances in `pizzaioli.ts`. Includes hydration/salt/yeast ratios, flour W rating, fermentation ranges, sauce profile, philosophy, **and** a `technique` object with `videos: TechniqueVideo[]`.

### `TechniqueVideoCategory`
Union: `"dough" | "fermentation" | "stretching" | "sauce" | "general" | "recipe" | "hydration"`.
When adding a new category, **update three places**:
1. `src/lib/types.ts` — append to the union.
2. `src/app/create/page.tsx` — add the `label` case in the Companion Videos block (search for `v.category === "dough" ? "Dough"`).
3. `src/lib/pizzaioli.ts` — use the new category on a video entry.

### `PizzaRecipe`
Recipe card + modal content. `steps` is an array of `RecipeStep` with `RecipeStepSection` (intro + bullets). The recipes page auto-renders these as a numbered manual.

### `Pizzaiolo` excluded
**Gennaro Esposito** is intentionally excluded from the list — do not re-add him.
**Anthony Mangieri** uses 100% sourdough (no commercial yeast) — represented as `yeast: 0`, `preferment: "sourdough"`.

---

## 6. How to Extend

| Task | Steps |
|---|---|
| Add a pizzaiolo | Append entry to `PIZZAIOLI` in `src/lib/pizzaioli.ts`. Pick a unique `color`. |
| Add a video to a pizzaiolo | Push into `technique.videos`. Use existing category if possible. |
| Add a recipe | Append to `RECIPES` in `src/lib/recipes.ts`. Set `number`, `category`, `steps`. |
| Add a top-level page | Create `src/app/<route>/page.tsx`, add an entry to `NAV` in `AppShell.tsx`. If it should appear in mobile bottom-bar (first 5), also add icon to the inline `short === "..."` ternary. |
| Add a new technique category | See §5 — three files. |

---

## 7. Deployment

- Code lives on GitHub: `gnovoab/pizzaiiolo` (`main` branch).
- Vercel project is connected to the repo. Every push to `main` auto-deploys.
- **Workflow:** edit → `git add -A && git commit -m "..."` (agent can do) → **`git push`** (user must run).
- Build verification before push: `npx tsc --noEmit && npx next build` — both must be clean.

---

## 8. Known Constraints

- Recipe modals + Zustand use `localStorage` → first paint shows defaults pre-hydration (harmless flash).
- Bottom mobile nav shows `NAV.slice(0, 5)` — reorder `NAV` carefully.
- IDE files (`.idea/`, `.vscode/`) are gitignored. Don't commit them.
- The PRD lives in `instructions` (no extension) at repo root — historical context only; the app has evolved beyond it (cookbook aesthetic, Dough Maker module, Videos library).
