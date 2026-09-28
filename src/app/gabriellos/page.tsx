"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { RECIPES } from "@/lib/recipes";
import type { PizzaRecipeCategory } from "@/lib/types";
import type { GabriellosMenuItem, MenuCategory } from "@/lib/db/menuConfig";

type Row = GabriellosMenuItem;

const CATEGORY_OPTIONS: { id: MenuCategory; label: string }[] = [
  { id: "classic", label: "Classic" },
  { id: "innovative", label: "Innovative" },
  { id: "calzone-focaccia", label: "Calzone & Focaccia" },
  { id: "specials", label: "Limited Time Only" },
];

function guessCategory(c: PizzaRecipeCategory): MenuCategory {
  if (c === "calzone-focaccia") return "calzone-focaccia";
  if (c === "innovative") return "innovative";
  return "classic"; // classic + pumpkin default to classic until owner reassigns
}

export default function GabriellosAdminPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "saving" | "saved" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showPrices, setShowPrices] = useState(true);
  const [settingsStatus, setSettingsStatus] = useState<"idle" | "loading" | "saving" | "saved" | "error">("loading");
  const [settingsError, setSettingsError] = useState<string | null>(null);

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

  useEffect(() => {
    fetch("/api/menu")
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load menu (${r.status})`);
        return r.json() as Promise<GabriellosMenuItem[]>;
      })
      .then((remote) => {
        const byId = new Map(remote.map((r) => [r.id, r]));
        setRows(
          RECIPES.map((r) => {
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
              category: existing?.category ?? guessCategory(r.category),
              price: existing?.price ?? 0,
              available: existing?.available ?? false,
              cateringAvailable: existing?.cateringAvailable ?? false,
              description: existing?.description ?? r.menuIngredients ?? r.toppings,
            };
          })
        );
        setStatus("idle");
      })
      .catch((e) => {
        setErrorMessage(e instanceof Error ? e.message : "Could not load menu.");
        setStatus("error");
      });
  }, []);

  function updateRow(id: string, patch: Partial<Row>) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
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

  const grouped = CATEGORY_OPTIONS.map((c) => ({
    ...c,
    rows: rows.filter((r) => r.category === c.id).sort((a, b) => a.number - b.number),
  }));

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

                    <div className="min-w-[220px] flex-1 space-y-1.5">
                      <input
                        type="text"
                        value={r.name}
                        onChange={(e) => updateRow(r.id, { name: e.target.value })}
                        placeholder="Name"
                        className="w-full font-medium leading-tight rounded border border-border px-2 py-1"
                      />
                      <input
                        type="text"
                        value={r.style ?? ""}
                        onChange={(e) => updateRow(r.id, { style: e.target.value })}
                        placeholder="Style (e.g. Neapolitan-style)"
                        className="w-full text-sm italic text-secondary rounded border border-border px-2 py-1"
                      />
                      <textarea
                        value={r.description}
                        onChange={(e) => updateRow(r.id, { description: e.target.value })}
                        placeholder="Ingredients / description"
                        rows={2}
                        className="w-full text-xs text-muted-foreground rounded border border-border px-2 py-1"
                      />
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
                      onChange={(e) => updateRow(r.id, { category: e.target.value as MenuCategory })}
                      className="rounded border border-border px-2 py-1 text-sm mt-1.5"
                    >
                      {CATEGORY_OPTIONS.map((c) => (
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
