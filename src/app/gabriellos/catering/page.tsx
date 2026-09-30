"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { GabriellosMenuItem, MenuCategory } from "@/lib/db/menuConfig";

const CATEGORY_OPTIONS: { id: MenuCategory; label: string }[] = [
  { id: "classic", label: "Classic" },
  { id: "innovative", label: "Innovative" },
  { id: "le-nostre", label: "Le Nostre" },
  { id: "pumpkin", label: "Pumpkin Base" },
  { id: "calzone-focaccia", label: "Calzone & Focaccia" },
  { id: "specials", label: "Limited Time Only" },
];

export default function CateringAdminPage() {
  const [rows, setRows] = useState<GabriellosMenuItem[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "saving" | "saved" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/menu")
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load menu (${r.status})`);
        return r.json() as Promise<GabriellosMenuItem[]>;
      })
      .then((remote) => {
        setRows(remote.sort((a, b) => a.number - b.number));
        setStatus("idle");
      })
      .catch((e) => {
        setErrorMessage(e instanceof Error ? e.message : "Could not load menu.");
        setStatus("error");
      });
  }, []);

  function toggleCatering(id: string, cateringAvailable: boolean) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, cateringAvailable } : r)));
  }

  async function handleSave() {
    setStatus("saving");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rows),
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
          <h1 className="font-serif text-3xl font-semibold mt-2">Catering Availability</h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">
            Choose which pizzas appear on the catering site menu. This is independent from the
            &quot;Available&quot; toggle on the main{" "}
            <Link href="/gabriellos" className="underline underline-offset-2 hover:text-foreground">
              Gabriellos Menu
            </Link>{" "}
            page, which controls online ordering and the tablet menu.
          </p>
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
                {g.rows.map((r) => (
                  <div
                    key={r.id}
                    className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
                  >
                    <div className="min-w-[220px] flex-1">
                      <p className="font-medium leading-tight">{r.name}</p>
                      {r.style && <p className="text-sm italic text-secondary">{r.style}</p>}
                    </div>

                    <span className="text-sm text-muted-foreground">£{r.price.toFixed(2)}</span>

                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={r.cateringAvailable}
                        onChange={(e) => toggleCatering(r.id, e.target.checked)}
                      />
                      Available for catering
                    </label>
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
