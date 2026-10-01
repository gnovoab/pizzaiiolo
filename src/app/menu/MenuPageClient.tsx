"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import type { GabriellosMenuItem } from "@/lib/db/menuConfig";
import type { MenuCategoryDoc } from "@/lib/menuCategories";
import { MenuCard, type EditableFields } from "./MenuCard";

export function MenuPageClient({
  initialItems,
  categories,
  isAdmin,
}: {
  initialItems: GabriellosMenuItem[];
  categories: MenuCategoryDoc[];
  isAdmin: boolean;
}) {
  const [items, setItems] = useState(initialItems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<EditableFields | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sorted = [...items].sort((a, b) => a.number - b.number);
  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
  const knownIds = new Set(categories.map((c) => c.id));
  const orphanItems = sorted.filter((r) => !knownIds.has(r.category));

  function startEdit(item: GabriellosMenuItem) {
    setError(null);
    setEditingId(item.id);
    setDraft({ image: item.image ?? "", name: item.name, style: item.style ?? "", description: item.description });
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(null);
    setError(null);
  }

  async function saveEdit(item: GabriellosMenuItem) {
    if (!draft) return;
    setSaving(true);
    setError(null);
    const updated = items.map((r) => (r.id === item.id ? { ...r, ...draft } : r));
    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as { error?: string });
        throw new Error(body.error ?? `Save failed (${res.status})`);
      }
      setItems(updated);
      setEditingId(null);
      setDraft(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Il Menù</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">La Carta</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          {items.length} pizzas available.
        </p>
      </div>

      {error && (
        <p className="text-sm text-destructive border border-destructive/30 bg-destructive/10 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <div className="space-y-10">
        {[...sortedCategories, ...(orphanItems.length ? [{ id: "__other__", label: "Other", sortOrder: Infinity }] : [])].map(
          (c) => {
            const cItems = c.id === "__other__" ? orphanItems : sorted.filter((r) => r.category === c.id);
            if (cItems.length === 0) return null;
            return (
              <section key={c.id} className="space-y-4">
                <div className="flex items-end justify-between gap-4 border-b-2 border-primary/20 pb-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">{c.label}</h2>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{cItems.length} pizzas</span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cItems.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      isAdmin={isAdmin}
                      isEditing={editingId === item.id}
                      draft={editingId === item.id ? draft : null}
                      saving={saving && editingId === item.id}
                      editIcon={<Pencil className="w-3.5 h-3.5" />}
                      onStartEdit={() => startEdit(item)}
                      onCancel={cancelEdit}
                      onChange={(patch) => setDraft((d) => (d ? { ...d, ...patch } : d))}
                      onSave={() => saveEdit(item)}
                    />
                  ))}
                </div>
              </section>
            );
          }
        )}
      </div>
    </div>
  );
}
