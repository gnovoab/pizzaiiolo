"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { RECIPES } from "@/lib/recipes";
import type { PizzaRecipeCategory } from "@/lib/types";
import type { GabriellosMenuItem, MenuCategory } from "@/lib/db/menuConfig";
import { DEFAULT_CATEGORIES, type MenuCategoryDoc } from "@/lib/menuCategories";

type Row = GabriellosMenuItem;

function guessCategory(c: PizzaRecipeCategory, categories: MenuCategoryDoc[]): MenuCategory {
  const ids = new Set(categories.map((cat) => cat.id));
  if (c === "calzone-focaccia" && ids.has("calzone-focaccia")) return "calzone-focaccia";
  if (c === "innovative" && ids.has("innovative")) return "innovative";
  if (c === "pumpkin" && ids.has("pumpkin")) return "pumpkin";
  if (ids.has("classic")) return "classic";
  return categories[0]?.id ?? "classic";
}

function slugify(label: string): string {
  return label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "category";
}

// `number` is the single global ordering key (drives both the admin list and
// the public menu/catering display). To keep it meaningful, it must always
// form contiguous per-category blocks in the current category order (as
// managed in the Categories section below), with the existing relative order
// preserved inside each category. Call this after any change that can affect
// category membership (e.g. moving an item to a different section) so
// numbers stay consistent; `justMovedId`, if given, is placed last within its
// (new) category instead of keeping its old rank. Items whose category no
// longer exists (e.g. an unsaved recipe default pointing at a category that
// was since deleted) are appended at the end instead of being dropped.
function renumberByCategory(list: Row[], categories: MenuCategoryDoc[], justMovedId?: string): Row[] {
  const newNumberById = new Map<string, number>();
  let counter = 1;
  const sortedCats = [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
  const sortFn = (a: Row, b: Row) => {
    if (justMovedId) {
      if (a.id === justMovedId) return 1;
      if (b.id === justMovedId) return -1;
    }
    return a.number - b.number;
  };
  for (const cat of sortedCats) {
    const items = list.filter((r) => r.category === cat.id).sort(sortFn);
    for (const item of items) {
      newNumberById.set(item.id, counter);
      counter++;
    }
  }
  const knownIds = new Set(sortedCats.map((c) => c.id));
  const orphans = list.filter((r) => !knownIds.has(r.category)).sort(sortFn);
  for (const item of orphans) {
    newNumberById.set(item.id, counter);
    counter++;
  }
  return list.map((r) => ({ ...r, number: newNumberById.get(r.id) ?? r.number }));
}

export default function GabriellosAdminPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "saving" | "saved" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showPrices, setShowPrices] = useState(true);
  const [settingsStatus, setSettingsStatus] = useState<"idle" | "loading" | "saving" | "saved" | "error">("loading");
  const [settingsError, setSettingsError] = useState<string | null>(null);

  const [categories, setCategories] = useState<MenuCategoryDoc[]>(DEFAULT_CATEGORIES);
  const [categoriesStatus, setCategoriesStatus] = useState<"idle" | "loading" | "saving" | "saved" | "error">("loading");
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load settings (${r.status})`);
        return r.json() as Promise<{ showPrices: boolean }>;
      })
      .then((s) => {
        setShowPrices(s.showPrices);
        setSettingsStatus("idle");
      })
      .catch((e) => {
        setSettingsError(e instanceof Error ? e.message : "Could not load settings.");
        setSettingsStatus("error");
      });
  }, []);

  async function handleSaveSettings() {
    setSettingsStatus("saving");
    setSettingsError(null);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ showPrices }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as { error?: string });
        throw new Error(body.error ?? `Save failed (${res.status})`);
      }
      setSettingsStatus("saved");
    } catch (e) {
      setSettingsError(e instanceof Error ? e.message : "Could not save settings.");
      setSettingsStatus("error");
    }
  }

  // Categories and menu items are loaded together because the fallback
  // category assigned to never-saved recipe defaults (guessCategory) and the
  // initial per-category numbering (renumberByCategory) both depend on
  // knowing the current category list.
  useEffect(() => {
    Promise.all([
      fetch("/api/categories").then((r) => {
        if (!r.ok) throw new Error(`Failed to load categories (${r.status})`);
        return r.json() as Promise<MenuCategoryDoc[]>;
      }),
      fetch("/api/menu").then((r) => {
        if (!r.ok) throw new Error(`Failed to load menu (${r.status})`);
        return r.json() as Promise<GabriellosMenuItem[]>;
      }),
    ])
      .then(([cats, remote]) => {
        const resolvedCategories = cats.length ? cats : DEFAULT_CATEGORIES;
        setCategories(resolvedCategories);
        setCategoriesStatus("idle");

        const byId = new Map(remote.map((r) => [r.id, r]));
        const merged = RECIPES.map((r) => {
          const existing = byId.get(r.id);
          // RECIPES values are only fallback defaults for items never saved
          // to Mongo yet — once an item has been saved, its Mongo values
          // (including any admin-edited name/style/description/number)
          // always win.
          return {
            id: r.id,
            number: existing?.number ?? r.number,
            name: existing?.name ?? r.name,
            style: existing?.style ?? r.style,
            image: existing?.image ?? r.image,
            category: existing?.category ?? guessCategory(r.category, resolvedCategories),
            price: existing?.price ?? 0,
            available: existing?.available ?? false,
            cateringAvailable: existing?.cateringAvailable ?? false,
            description: existing?.description ?? r.menuIngredients ?? r.toppings,
          };
        });
        // Normalize numbers to contiguous per-category blocks (in the
        // current category order), preserving each item's existing relative
        // order within its category.
        setRows(renumberByCategory(merged, resolvedCategories));
        setStatus("idle");
      })
      .catch((e) => {
        const message = e instanceof Error ? e.message : "Could not load menu.";
        setErrorMessage(message);
        setStatus("error");
        setCategoriesError(message);
        setCategoriesStatus("error");
      });
  }, []);

  function updateRow(id: string, patch: Partial<Row>) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }

  // Moving an item to a different section: it should adopt the numbering of
  // its new section (placed last within it), and every item's number is
  // recomputed so the whole list stays a clean, contiguous, category-ordered
  // sequence (no leftover gaps or out-of-place numbers from its old section).
  function handleCategoryChange(id: string, newCategory: MenuCategory) {
    setRows((prev) => {
      const withNewCategory = prev.map((r) => (r.id === id ? { ...r, category: newCategory } : r));
      return renumberByCategory(withNewCategory, categories, id);
    });
  }

  function handleAddCategory() {
    const label = newCategoryName.trim();
    if (!label) return;
    const existingIds = new Set(categories.map((c) => c.id));
    let id = slugify(label);
    let suffix = 2;
    while (existingIds.has(id)) {
      id = `${slugify(label)}-${suffix}`;
      suffix++;
    }
    const maxSort = categories.reduce((max, c) => Math.max(max, c.sortOrder), -1);
    setCategories((prev) => [...prev, { id, label, sortOrder: maxSort + 1 }]);
    setNewCategoryName("");
    setCategoriesStatus("idle");
  }

  function handleRenameCategory(id: string, label: string) {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, label } : c)));
  }

  function handleDeleteCategory(id: string) {
    if (rows.some((r) => r.category === id)) {
      setCategoriesError("Move or delete the pizzas in this category before deleting it.");
      setCategoriesStatus("error");
      return;
    }
    setCategories((prev) => prev.filter((c) => c.id !== id));
    setCategoriesStatus("idle");
    setCategoriesError(null);
  }

  function moveCategory(id: string, direction: "up" | "down") {
    setCategories((prev) => {
      const sorted = [...prev].sort((a, b) => a.sortOrder - b.sortOrder);
      const idx = sorted.findIndex((c) => c.id === id);
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= sorted.length) return prev;
      const a = sorted[idx];
      const b = sorted[swapIdx];
      return prev.map((c) => {
        if (c.id === a.id) return { ...c, sortOrder: b.sortOrder };
        if (c.id === b.id) return { ...c, sortOrder: a.sortOrder };
        return c;
      });
    });
  }

  async function handleSaveCategories() {
    setCategoriesStatus("saving");
    setCategoriesError(null);
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categories),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as { error?: string });
        throw new Error(body.error ?? `Save failed (${res.status})`);
      }
      setCategoriesStatus("saved");
    } catch (e) {
      setCategoriesError(e instanceof Error ? e.message : "Could not save categories.");
      setCategoriesStatus("error");
    }
  }

  // Reorder within a category by swapping `number` with the adjacent item
  // (sorted by number). `number` is the sole ordering key — it's what both
  // the admin list and the public menu sort by — so a swap is a real reorder,
  // not just a relabel. Button-based on purpose; no drag-and-drop.
  function moveItem(id: string, direction: "up" | "down") {
    setRows((prev) => {
      const item = prev.find((r) => r.id === id);
      if (!item) return prev;
      const siblings = prev.filter((r) => r.category === item.category).sort((a, b) => a.number - b.number);
      const idx = siblings.findIndex((r) => r.id === id);
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= siblings.length) return prev;
      const other = siblings[swapIdx];
      return prev.map((r) => {
        if (r.id === item.id) return { ...r, number: other.number };
        if (r.id === other.id) return { ...r, number: item.number };
        return r;
      });
    });
  }

  async function handleSave() {
    setStatus("saving");
    setErrorMessage(null);
    try {
      const payload: GabriellosMenuItem[] = rows.map((r) => ({
        id: r.id,
        number: r.number,
        name: r.name,
        style: r.style,
        category: r.category,
        description: r.description,
        price: r.price,
        image: r.image,
        available: r.available,
        cateringAvailable: r.cateringAvailable,
      }));
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as { error?: string });
        throw new Error(body.error ?? `Save failed (${res.status})`);
      }
      setStatus("saved");
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : "Could not save menu.");
      setStatus("error");
    }
  }

  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
  const knownCategoryIds = new Set(sortedCategories.map((c) => c.id));
  const orphanRows = rows.filter((r) => !knownCategoryIds.has(r.category)).sort((a, b) => a.number - b.number);
  const grouped = [
    ...sortedCategories.map((c) => ({
      id: c.id,
      label: c.label,
      rows: rows.filter((r) => r.category === c.id).sort((a, b) => a.number - b.number),
    })),
    ...(orphanRows.length > 0 ? [{ id: "__other__", label: "Other", rows: orphanRows }] : []),
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Gabriellos Admin</p>
          <h1 className="font-serif text-3xl font-semibold mt-2">Menu Management</h1>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/gabriellos/login" })}
          className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-2"
        >
          Sign out
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card px-4 py-3">
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={showPrices}
            disabled={settingsStatus === "loading"}
            onChange={(e) => setShowPrices(e.target.checked)}
          />
          Show prices on tablet &amp; catering displays
        </label>
        <button
          onClick={handleSaveSettings}
          disabled={settingsStatus === "loading" || settingsStatus === "saving"}
          className="rounded-full bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-1.5 hover:brightness-110 active:scale-[0.99] transition disabled:opacity-50"
        >
          {settingsStatus === "saving" ? "Saving…" : "Save"}
        </button>
        {settingsStatus === "saved" && <span className="text-sm text-green-700">Saved.</span>}
        {settingsStatus === "error" && settingsError && (
          <span className="text-sm text-destructive">{settingsError}</span>
        )}
        <span className="text-xs text-muted-foreground basis-full">
          Online ordering always shows prices regardless of this setting.
        </span>
      </div>

      <div className="space-y-3 rounded-lg border border-border bg-card px-4 py-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="font-serif text-lg font-semibold">Menu Categories</h2>
          <button
            onClick={handleSaveCategories}
            disabled={categoriesStatus === "loading" || categoriesStatus === "saving"}
            className="rounded-full bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-1.5 hover:brightness-110 active:scale-[0.99] transition disabled:opacity-50"
          >
            {categoriesStatus === "saving" ? "Saving…" : "Save categories"}
          </button>
          {categoriesStatus === "saved" && <span className="text-sm text-green-700">Saved.</span>}
        </div>
        {categoriesStatus === "error" && categoriesError && (
          <p className="text-sm text-destructive">{categoriesError}</p>
        )}
        <div className="space-y-1.5">
          {sortedCategories.map((c, idx) => (
            <div key={c.id} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => moveCategory(c.id, "up")}
                disabled={idx === 0}
                aria-label={`Move ${c.label} up`}
                className="w-6 h-6 rounded border border-border flex items-center justify-center text-xs hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ▲
              </button>
              <button
                type="button"
                onClick={() => moveCategory(c.id, "down")}
                disabled={idx === sortedCategories.length - 1}
                aria-label={`Move ${c.label} down`}
                className="w-6 h-6 rounded border border-border flex items-center justify-center text-xs hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ▼
              </button>
              <input
                type="text"
                value={c.label}
                onChange={(e) => handleRenameCategory(c.id, e.target.value)}
                className="flex-1 rounded border border-border px-2 py-1 text-sm"
              />
              <button
                type="button"
                onClick={() => handleDeleteCategory(c.id)}
                className="text-xs text-destructive hover:underline shrink-0"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-1">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="New category name"
            className="flex-1 rounded border border-border px-2 py-1 text-sm"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="rounded-full bg-primary text-primary-foreground text-sm font-semibold px-3.5 py-1.5 hover:brightness-110"
          >
            Add
          </button>
        </div>
      </div>

      {status === "loading" && <p className="text-sm text-muted-foreground">Loading menu…</p>}
      {status === "error" && errorMessage && (
        <p className="text-sm text-destructive border border-destructive/30 bg-destructive/10 rounded-lg px-4 py-3">
          {errorMessage}
        </p>
      )}

      {rows.length > 0 && (
        <div className="space-y-10">
          {grouped.map((g) => (
            <section key={g.id} className="space-y-3">
              <h2 className="font-serif text-xl font-semibold border-b border-border pb-2">{g.label}</h2>
              <div className="space-y-2">
                {g.rows.map((r, idx) => (
                  <div
                    key={r.id}
                    className="flex flex-wrap items-start gap-3 rounded-lg border border-border bg-card px-4 py-3"
                  >
                    <div className="flex flex-col items-center gap-1 pt-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => moveItem(r.id, "up")}
                        disabled={idx === 0}
                        aria-label={`Move ${r.name} up`}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-xs hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ▲
                      </button>
                      <span className="text-[11px] font-mono text-muted-foreground">№{r.number}</span>
                      <button
                        type="button"
                        onClick={() => moveItem(r.id, "down")}
                        disabled={idx === g.rows.length - 1}
                        aria-label={`Move ${r.name} down`}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-xs hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ▼
                      </button>
                    </div>

                    <div className="w-20 h-20 shrink-0 rounded-lg border border-border bg-muted overflow-hidden flex items-center justify-center">
                      {r.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-2xl opacity-40">🍕</span>
                      )}
                    </div>

                    {/* Name/style/ingredients are edited on La Carta (/menu) — shown
                        here read-only for reference alongside sorting controls. */}
                    <div className="min-w-[220px] flex-1 space-y-0.5">
                      <p className="font-medium leading-tight">{r.name}</p>
                      {r.style && <p className="text-sm italic text-secondary">{r.style}</p>}
                      <p className="text-xs text-muted-foreground leading-snug">{r.description}</p>
                    </div>

                    <label className="flex items-center gap-2 text-sm pt-1.5">
                      <input
                        type="checkbox"
                        checked={r.available}
                        onChange={(e) => updateRow(r.id, { available: e.target.checked })}
                      />
                      Available
                    </label>

                    <label className="flex items-center gap-1.5 text-sm pt-1.5">
                      £
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={r.price}
                        onChange={(e) => updateRow(r.id, { price: parseFloat(e.target.value) || 0 })}
                        className="w-20 rounded border border-border px-2 py-1"
                      />
                    </label>

                    <select
                      value={r.category}
                      onChange={(e) => handleCategoryChange(r.id, e.target.value as MenuCategory)}
                      className="rounded border border-border px-2 py-1 text-sm mt-1.5"
                    >
                      {sortedCategories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="flex items-center gap-4 sticky bottom-4">
            <button
              onClick={handleSave}
              disabled={status === "saving"}
              className="rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3 shadow-sm hover:brightness-110 active:scale-[0.99] transition disabled:opacity-50"
            >
              {status === "saving" ? "Saving…" : "Save changes"}
            </button>
            {status === "saved" && <span className="text-sm text-green-700">Saved.</span>}
          </div>
        </div>
      )}
    </div>
  );
}
