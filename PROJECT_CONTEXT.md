# Pizza Lab (pizzaiiolo) — AI Agent Context

**Status: v1.0 — production.** This file is the single source of truth for any AI
agent (or human) picking up this repo. Read it fully before making changes.

Pizza Lab is two apps sharing one Next.js codebase and one nav shell:

1. **The Cookbook** (public, no login) — a pizzaiolo's reference manual: compare
   master pizzaioli, scale dough recipes, plan fermentation, follow the bread-machine
   and spiral-mixer workflows, browse the recipe book and curated videos. All content
   is static, bundled from `src/lib/*.ts` — no database, no auth.
2. **Gabriellos** (`/gabriellos*`, `/menu`) — a real restaurant's live menu/catering
   admin tool, backed by MongoDB and gated by Google OAuth (Auth.js) behind an
   admin-email allow-list. This is a production tool a real restaurant owner uses to
   edit prices, availability, and categories.

---

## 0. Versioning

- **Current version: `1.0.1`** — tracked in `package.json` (`version` field). This is
  the **single source of truth** for the app version.
- Surfaced in the UI via `src/lib/version.ts` (imports `package.json`) and rendered in
  `src/components/layout/AppShell.tsx` (desktop sidebar footer + mobile top bar).
- **Bump `package.json`'s `version` on every meaningful release** (feature, fix, or
  content change worth tracking). Do not hardcode a version string anywhere else —
  always import `APP_VERSION` from `@/lib/version`.
- Follow semver loosely: patch (`1.0.x`) for content/copy/bugfixes, minor (`1.x.0`) for
  new pages/features, major (`x.0.0`) for breaking changes to data shapes, routes, or
  the Gabriellos data model.

---

## 1. Stack & Tooling

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.2.9 (App Router)** — see `node_modules/next/dist/docs/` for this exact version. Breaking changes vs. older Next.js; read the bundled docs before assuming older API/conventions. |
| Language | TypeScript 5 (strict), React 19.2 |
| Styling | Tailwind CSS v4 + `shadcn/ui` primitives (`src/components/ui/`) + `tw-animate-css` |
| State (Cookbook) | **Zustand** with `persist` middleware (localStorage) — `src/store/usePizzaStore.ts` |
| Database (Gabriellos) | **MongoDB** (native `mongodb` driver, no ODM) — database `gabriellos`, collections `menu`, `categories`, `settings` |
| Auth (Gabriellos) | **Auth.js / NextAuth v5 (beta)** with Google OAuth provider, allow-listed to a single `ADMIN_EMAIL` |
| Route protection | `src/proxy.ts` (this Next.js version's middleware convention — **not** `middleware.ts`) |
| Forms | React Hook Form + Zod (light usage) |
| Charts | Recharts (pizzaiolo comparison bar charts) |
| Fonts | **Fraunces** (serif headings) + **Inter** (body) + **JetBrains Mono** (numbers/version) + **Caveat** (script accents) |
| Deployment | GitHub → Vercel (auto-deploys on `git push` to `main`) |

Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
Typecheck only: `npx tsc --noEmit`.

> ⚠️ The user is **non-technical**. They cannot run `git push` from inside the agent —
> they must run it themselves in their terminal. After making code changes, instruct
> them to run `git push` to deploy. Build-verify first: `npx tsc --noEmit && npx next build`.

---

## 2. Repository Layout

```
src/
  app/                        # Next.js App Router routes (each folder = a page)
    layout.tsx                 # Root layout: fonts, AppShell wrap, <html>/<body>
    globals.css                 # Parchment theme tokens (CSS vars in :root)
    page.tsx                    # "/" — re-exports Recipes page (home = recipe book)

    # --- Cookbook: Making Pizza ---
    dough-maker/                 # 500g bread-machine workflow (Panasonic SD-ZX2522KXG)
    recipes/                     # Pizza recipe manual (grid + modal with numbered steps)
    videos/                      # Curated video library (YouTube cards by category)

    # --- Cookbook: Ingredients & Process ---
    flour-guide/                  # Caputo flour types reference + blend calculator
    spiral-mixer/                 # Commercial spiral-mixer timing + bassinage protocol
    fermentation/                 # Bench rest → cold bulk → balling → proof workflow
    fridge/                       # Cold-ferment vs. freezer storage decision guide
    oven/                         # Gozney Arc preheat/bake temperature manual
    olive-oil/                    # Pre-/post-bake EVOO pairing guide
    pumpkin-base/                 # Pumpkin cream base: homemade + commercial options
    preferments/                  # Poolish & Biga calculators
    yeast/                        # Yeast type converter (instant/fresh/active-dry)
    pizza-styles/                 # Reference table of pizza styles worldwide

    # --- Cookbook: Pizzaiolo ---
    comparison/                   # Compare pizzaioli side-by-side (tables + charts)
    calculator/                   # Dough calculator (pizzas/flour/water modes)
    create/                       # Build-a-pizza interactive hub (full guided build)

    # --- Gabriellos: Menus (MongoDB-backed, see §6) ---
    menu/                          # "La Carta" — PUBLIC live menu (reads Mongo)
      page.tsx, MenuPageClient.tsx, MenuCard.tsx
    gabriellos/
      page.tsx                     # Admin dashboard — AUTH REQUIRED (see §6)
      catering/page.tsx            # Catering availability toggle — AUTH REQUIRED
      login/page.tsx               # Google sign-in screen

    api/                           # Route handlers backing the Gabriellos admin UI
      menu/route.ts                 # GET/POST gabriellos.menu — auth-gated via proxy.ts
      categories/route.ts           # GET/POST gabriellos.categories — auth-gated
      settings/route.ts             # GET/POST gabriellos.settings — auth-gated
      auth/[...nextauth]/           # Auth.js route handler

  components/
    layout/AppShell.tsx          # Sidebar + mobile nav. NAV_SECTIONS defines all routes & groups.
    ui/                           # shadcn primitives (Card, Button, Badge, Tabs, etc.)

  lib/
    types.ts                     # ⭐ Single source of truth for all Cookbook data shapes
    pizzaioli.ts                  # ⭐ PIZZAIOLI array — comparison profiles with technique + videos
    recipes.ts                    # ⭐ RECIPES array — pizza recipes w/ step-by-step builds (fallback defaults for the Gabriellos menu too)
    recipeSteps.ts                # Reusable recipe step content (used by /create)
    calculations.ts               # Dough math (Flour = Total/(1+H+S+Y)), poolish/biga/yeast/water-temp
    bakeSchedule.ts                # Fermentation timeline helpers
    menuCategories.ts              # DEFAULT_CATEGORIES seed (Mongo-free; safe for client components)
    utils.ts                       # cn() class helper
    version.ts                     # ⭐ APP_VERSION — imports package.json, see §0
    db/
      mongo.ts                     # Shared MongoClient singleton (HMR-safe in dev)
      menuConfig.ts                 # GabriellosMenuItem type + getMenuConfig/saveMenuConfig (menu collection)
      categories.ts                 # getCategories/saveCategories (categories collection)
      settings.ts                   # getSettings/saveSettings (settings collection — showPrices flag)

  store/
    usePizzaStore.ts              # Single Zustand store for all Cookbook calculator inputs (persisted to localStorage)

  auth.ts                        # Auth.js config — Google provider + ADMIN_EMAIL allow-list, signIn page
  proxy.ts                       # Route guard for /gabriellos* and /api/{menu,categories,settings}*
```

---

## 3. Navigation Map — every tab and what it does

`src/components/layout/AppShell.tsx` defines `NAV_SECTIONS`, a flat list grouped into
four sidebar sections (desktop: labeled groups in the left sidebar; mobile: a
hamburger menu with the same groups, plus a bottom bar showing the first 5 items).
**When adding a page, add it to `NAV_SECTIONS`** (and, if it should appear in the
mobile bottom bar, extend the icon ternary near the bottom of the file).

### Section: "Making Pizza"
| Route | What it does |
|---|---|
| `/dough-maker` (🥖 Dough) | Step-by-step guide for making a batch of dough in a 500g-capacity Panasonic bread machine, with a built-in Neapolitan-ratio calculator (hydration 62%, salt 2.4%, yeast 0.06–0.1%) that scales water/salt/yeast/ball-count live from a chosen flour weight and ball weight. |
| `/` and `/recipes` (📖 Recipes) | The pizza recipe book — the home page. Groups all `RECIPES` by category (Classic, Innovative, Calzone & Focaccia, Pumpkin Base) into cards; tapping a card opens a full-screen modal with numbered build steps, post-bake finishing notes, flavor-progression summary, and (for recipes with `variations`) a side-by-side spec-comparison table against sibling recipes (e.g. the Bufalina trilogy). |
| `/videos` (🎬 Videos) | A curated YouTube video library grouped into tabs (Making Pizzas, Cooking Pizzas, Stretching, Dough), rendered as clickable thumbnail cards. |

### Section: "Ingredients & Process"
| Route | What it does |
|---|---|
| `/flour-guide` (🌾 Flour Guide) | Reference cards for each Caputo flour type (Pizzeria 00, Nuvola, Tipo 1, Semolina Rimacinata, Cuoco/Chef 00, etc.) with protein %, strength (W rating), hydration range and use case, plus an interactive flour-blend gram calculator. |
| `/spiral-mixer` (🌀 Spiral Mixer) | Commercial spiral-mixer timing protocol (4 phases: hydrate → bulk flour → salt + remainder → gluten development), a water-temperature calculator, and a dynamic "bassinage" (held-back water) calculation for hydrations above 65%. |
| `/fermentation` (⏱️ Fermentation) | The 4-stage fermentation workflow (bench rest → cold bulk ferment/puntata → balling → cold proof/appretto) with a yield calculator (full balls + remainder dough from a given flour weight and ball weight) and scaled yeast-dosage guidance for 24h/48h windows. |
| `/fridge` (🧊 Fridge) | Decision guide for what to do with balled dough: eat within 48h (fridge) vs. freeze for later, with step-by-step handling for each path. |
| `/oven` (🔥 Oven) | Gozney Arc operating manual — preheat timing, stone/air-zone temperature targets (with an infrared-gun reading guide), and bake-time guidance per temperature band. |
| `/olive-oil` (🫒 Olive Oil) | Pairing guide matching EVOO style/intensity (intense-fruity, balanced-green, creamy-delicate, etc.) to specific pizzas and specifying whether each oil is a pre-bake or post-bake (finishing) application. |
| `/pumpkin-base` (🎃 Pumpkin Base) | The house reference for pumpkin cream: a from-scratch homemade preparation (roast → blend → moisture control → seasoning philosophy) plus two professional commercial alternatives (Greci, Demetra), and how each is used across the Pumpkin Base recipe category. |
| `/preferments` (🧫 Preferments) | Poolish and Biga calculators — enter total flour and preferment %, get preferment flour/water/yeast plus remaining water needed to hit the shared target hydration. |
| `/yeast` (🔬 Yeast) | Converts between Instant Dry, Fresh, and Active Dry yeast amounts, and gives a cold-fermentation dosage warning that scales down recommended yeast as planned cold-rest hours increase (over-proofing guard). |
| `/pizza-styles` (📋 Pizza Styles) | A static reference table comparing ~11 pizza styles worldwide (Neapolitan, Roman, NY, Detroit, Sicilian, Pinsa, etc.) by flour, hydration, fermentation time, stone temp, and bake time. |

### Section: "Pizzaiolo"
| Route | What it does |
|---|---|
| `/comparison` (📊 Comparison) | Side-by-side comparison of all `PIZZAIOLI` profiles — hydration/salt/yeast/fermentation bar charts (Recharts), sticky-column spec tables, and a tomato-sauce quantity scaler. |
| `/calculator` (🍕 Calculator) | The general-purpose dough calculator: pick a pizzaiolo (or custom ratios) and a mode (by pizza count / by flour / by water), get live flour/water/salt/yeast/total-dough output. Backed by `usePizzaStore` so inputs persist across pages. |
| `/create` (👨‍🍳 Create a Pizza) | A guided, single-page build hub: pick a pizzaiolo, compute the dough batch, see a generated numbered recipe (`buildRecipeSteps`), compute mixing water temperature, and see a bake-schedule timeline (`calcBakePlan`/`buildBakeEvents`) from mix time to bake time. |

### Section: "Menus" (Gabriellos — see §6 for data flow)
| Route | Auth? | What it does |
|---|---|---|
| `/menu` (🧾 La Carta) | Public | The restaurant's live public menu. Server component: reads `RECIPES` as fallback defaults, overlays live MongoDB data (`getMenuConfig`) for price/availability/category/description, groups by admin-managed categories (`getCategories`), and renders via `MenuPageClient`/`MenuCard`. Only items with `available: true` and non-zero price are customer-facing; stays up showing recipe defaults if Mongo is unreachable. |
| `/gabriellos` (🍽️ Gabriellos Settings) | **Required** | The restaurant owner's admin dashboard: edit every menu item's name/style/description/price/category/number/`available`/`cateringAvailable`; create/rename/reorder/delete categories (blocked if a category still has items); toggle the global "show prices" setting (affects read-only displays, not online ordering). Sign-out button included. |
| `/gabriellos/catering` (🎉 Catering Menu) | **Required** | A focused admin view scoped to catering: lists every menu item (including ones hidden from the main menu, e.g. "Limited Time Only"/`specials`) grouped by category, with a single checkbox per item to toggle `cateringAvailable` independently of the main `available` flag. |
| `/gabriellos/login` | Public | Google sign-in screen (shows "Not authorized" if the signed-in Google account isn't the allow-listed `ADMIN_EMAIL`). |

---

## 4. Theme — "Light Parchment"

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

## 5. Key Conventions

1. **Each page is self-contained.** Pages duplicate small helpers (`Section`, `Bullets`, `Subhead`, `Callout`, `HighlightNumbers`) rather than sharing a `components/section.tsx`. Match the existing pattern when adding pages.
2. **`HighlightNumbers`** — regex component that auto-styles units (`°C`, `g`, `%`, `min`, `hours`, etc.) in bold terracotta. Wrap any body text with numbers in `<HighlightNumbers text="..." />`.
3. **Sticky table columns** — Comparison and Olive Oil pages use `sticky left-0` first column with zebra-striped rows. Cells **must paint their own background** to prevent bleed-through; row index is passed in.
4. **The Cookbook is static-only**: no API routes, no server-side fetches, no database. All Cookbook data is bundled from `src/lib/*.ts`. Keep it that way. (Gabriellos is the one deliberate exception — see §6 — it has API routes, auth, and MongoDB by design. Don't blur the line: never add a database dependency to a Cookbook page.)
5. **`output: 'export'` is NOT set** in `next.config.ts` — Vercel auto-detects Next.js and builds normally (required anyway now, since Gabriellos needs server-side API routes). Don't add `output: 'export'`.
6. **Code comments:** match the surrounding density. Do not add rationale-style comments.

---

## 6. Gabriellos — Data Flow & Auth

How the restaurant's menu/catering tool is wired together, end to end.

### Data flow
- **Source of truth order**: `src/lib/recipes.ts` (`RECIPES`) provides default
  name/style/description/category for every known recipe. MongoDB (`gabriellos.menu`
  collection, one document per item keyed by recipe `id`) overlays live
  price/`available`/`cateringAvailable`/category/description overrides on top.
  `getMenuConfig()` (`src/lib/db/menuConfig.ts`) merges these two sources.
- **Categories** are admin-managed, stored in `gabriellos.categories`
  (`getCategories`/`saveCategories` in `src/lib/db/categories.ts`), seeded from
  `DEFAULT_CATEGORIES` in `src/lib/menuCategories.ts` if the collection is empty.
- **Settings** (`gabriellos.settings`, `src/lib/db/settings.ts`) currently holds one
  flag: `showPrices` (controls whether prices render on read-only displays).
- **`/menu` (public)** is resilient: if `MONGODB_URI` is unset or Mongo is down, it
  falls back to rendering `RECIPES` defaults rather than crashing — never make this
  page hard-depend on Mongo being reachable.
- **`/gabriellos` and `/gabriellos/catering` (admin)** read/write through the
  `/api/menu`, `/api/categories`, `/api/settings` route handlers, which call the
  `src/lib/db/*` helpers directly. There is no client-side direct DB access.

### Auth
- **Auth.js v5 (beta)**, Google-only provider, configured in `src/auth.ts`.
- Authorization is a single explicit check in the `signIn` callback:
  `profile.email === process.env.ADMIN_EMAIL`. This is a deny-all-by-default
  allow-list for exactly one email. There is no multi-admin support — adding a
  second admin means changing this to a list/array, not just reassigning the var.
- **`src/proxy.ts`** (this Next.js version's middleware file — not `middleware.ts`)
  enforces the gate at the edge: redirects unauthenticated requests to
  `/gabriellos/login` for page routes, and returns `401 { error: "unauthorized" }`
  JSON for `/api/menu`, `/api/categories`, `/api/settings`. `config.matcher`
  controls which paths proxy.ts runs on — update it if you add a new protected route.
- **`DISABLE_AUTH=true`** in `.env.local` bypasses the entire gate for local dev
  only. Must never be set in production (Vercel env vars).

### Required environment variables (`.env.local`, also set in Vercel project settings)
| Var | Purpose |
|---|---|
| `MONGODB_URI` | Atlas connection string for the `gabriellos` database |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | Google OAuth client (read automatically by `next-auth`'s `Google` provider) |
| `AUTH_SECRET` | Auth.js session/JWT signing secret |
| `ADMIN_EMAIL` | The single Google account email allowed into `/gabriellos*` |
| `DISABLE_AUTH` | `"true"` to bypass auth locally — dev only, never in prod |

---

## 7. Data Model Highlights (see `src/lib/types.ts`)

### `Pizzaiolo`
The hero entity. Profiles in `pizzaioli.ts` include hydration/salt/yeast ratios, flour W rating, fermentation ranges, sauce profile, philosophy, **and** a `technique` object with `videos: TechniqueVideo[]`.

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

## 8. How to Extend

| Task | Steps |
|---|---|
| Add a pizzaiolo | Append entry to `PIZZAIOLI` in `src/lib/pizzaioli.ts`. Pick a unique `color`. |
| Add a video to a pizzaiolo | Push into `technique.videos`. Use existing category if possible. |
| Add a recipe | Append to `RECIPES` in `src/lib/recipes.ts`. Set `number`, `category`, `steps`. New recipes automatically become orderable in `/gabriellos` once an admin sets a price/`available`. |
| Add a top-level page | Create `src/app/<route>/page.tsx`, add an entry to the appropriate group in `NAV_SECTIONS` in `AppShell.tsx` (desktop sidebar + mobile hamburger menu update automatically). If it should appear in the mobile bottom bar (first 5 items of the flattened `NAV` list), also add its icon to the inline `short === "..."` ternary near the bottom of the file. |
| Add a new technique category | See §7 — three files. |
| Add a Gabriellos menu category | Use the "+ Category" control in `/gabriellos` (admin UI) — do not hand-edit `gabriellos.categories` in Mongo unless debugging. |
| Bump the app version | Change `version` in `package.json` only — `APP_VERSION` picks it up automatically everywhere it's rendered. |

---

## 9. Deployment

- Code lives on GitHub: `gnovoab/pizzaiiolo` (`main` branch).
- Vercel project is connected to the repo. Every push to `main` auto-deploys.
- **Workflow:** edit → `git add -A && git commit -m "..."` (agent can do) → **`git push`** (user must run).
- Build verification before push: `npx tsc --noEmit && npx next build` — both must be clean.
- Vercel project env vars must mirror `.env.local` (see §6) — `MONGODB_URI`,
  `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_SECRET`, `ADMIN_EMAIL`. Never set
  `DISABLE_AUTH` in the Vercel project.

---

## 10. Known Constraints

- Recipe modals + Zustand use `localStorage` → first paint shows defaults pre-hydration (harmless flash).
- Bottom mobile nav shows the first 5 items of the flattened `NAV_SECTIONS` list (currently Dough, Recipes, Videos, Flour Guide, Spiral Mixer) — reordering `NAV_SECTIONS` changes what appears there.
- IDE files (`.idea/`, `.vscode/`) are gitignored. Don't commit them.
- The PRD lives in `instructions` (no extension) at repo root — historical context only; the app has evolved far beyond it (cookbook aesthetic, Dough Maker module, Videos library, and the entire Gabriellos menu/catering admin tool were added after it was written).
- Gabriellos has exactly **one** admin account (`ADMIN_EMAIL`). There is no user
  management UI, no roles, and no audit log of who changed what.
- `/menu` must keep working even if Mongo is unreachable (falls back to `RECIPES`
  defaults with no price/availability overrides) — don't regress this.
