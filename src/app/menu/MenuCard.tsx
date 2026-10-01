"use client";

import type { ReactNode } from "react";
import type { GabriellosMenuItem } from "@/lib/db/menuConfig";

export interface EditableFields {
  image: string;
  name: string;
  style: string;
  description: string;
}

export function MenuCard({
  item,
  isAdmin,
  isEditing,
  draft,
  saving,
  editIcon,
  onStartEdit,
  onCancel,
  onChange,
  onSave,
}: {
  item: GabriellosMenuItem;
  isAdmin: boolean;
  isEditing: boolean;
  draft: EditableFields | null;
  saving: boolean;
  editIcon: ReactNode;
  onStartEdit: () => void;
  onCancel: () => void;
  onChange: (patch: Partial<EditableFields>) => void;
  onSave: () => void;
}) {
  if (isEditing && draft) {
    return (
      <div className="rounded-2xl border-2 border-primary bg-card overflow-hidden shadow-sm">
        <div className="relative w-full aspect-[4/3] bg-muted border-b border-border/70 flex items-center justify-center">
          {draft.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={draft.image} alt={draft.name} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="text-5xl opacity-40">🍕</div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <input
            type="text"
            value={draft.image}
            onChange={(e) => onChange({ image: e.target.value })}
            placeholder="Image URL"
            className="w-full text-xs rounded border border-border px-2 py-1"
          />
          <input
            type="text"
            value={draft.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Title"
            className="w-full font-serif font-semibold rounded border border-border px-2 py-1"
          />
          <input
            type="text"
            value={draft.style}
            onChange={(e) => onChange({ style: e.target.value })}
            placeholder="Pitch / style line"
            className="w-full text-sm italic text-secondary rounded border border-border px-2 py-1"
          />
          <textarea
            value={draft.description}
            onChange={(e) => onChange({ description: e.target.value })}
            placeholder="Ingredients"
            rows={2}
            className="w-full text-sm rounded border border-border px-2 py-1"
          />
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={onSave}
              disabled={saving}
              className="rounded-full bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 hover:brightness-110 disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              onClick={onCancel}
              disabled={saving}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative text-left rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:border-primary/60 hover:shadow-md transition-all duration-200">
      <div className="relative w-full aspect-[4/3] bg-muted border-b border-border/70 flex items-center justify-center overflow-hidden">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="text-5xl opacity-40">🍕</div>
        )}
        {isAdmin && (
          <button
            onClick={onStartEdit}
            aria-label={`Edit ${item.name}`}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-card/95 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {editIcon}
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-xs font-mono text-primary font-semibold">№ {item.number}</span>
          <h3 className="font-serif font-semibold text-lg leading-tight text-foreground">{item.name}</h3>
        </div>
        {item.style && <p className="text-xs text-secondary italic mt-0.5">{item.style}</p>}
        <p className="text-sm text-muted-foreground mt-2 leading-snug">{item.description}</p>
      </div>
    </div>
  );
}
