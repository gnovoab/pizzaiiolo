// Mongo-free — safe to import from client components (e.g. the Gabriellos
// admin page and La Carta), unlike src/lib/db/categories.ts which pulls in
// the MongoDB driver.

export interface MenuCategoryDoc {
  id: string;
  label: string;
  sortOrder: number;
}

// Seed set used only until the admin has saved a category list of their own
// (first run) — mirrors the categories the menu previously had hardcoded.
export const DEFAULT_CATEGORIES: MenuCategoryDoc[] = [
  { id: "classic", label: "Classic", sortOrder: 0 },
  { id: "innovative", label: "Innovative", sortOrder: 1 },
  { id: "le-nostre", label: "Le Nostre", sortOrder: 2 },
  { id: "pumpkin", label: "Pumpkin Base", sortOrder: 3 },
  { id: "calzone-focaccia", label: "Calzone & Focaccia", sortOrder: 4 },
  { id: "specials", label: "Limited Time Only", sortOrder: 5 },
];
