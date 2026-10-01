import { auth } from "@/auth";
import { RECIPES } from "@/lib/recipes";
import { getMenuConfig, type GabriellosMenuItem } from "@/lib/db/menuConfig";
import { getCategories, DEFAULT_CATEGORIES, type MenuCategoryDoc } from "@/lib/db/categories";
import { MenuPageClient } from "./MenuPageClient";

// Publicly viewable, but reads live DB state and the admin session on every
// request — never prerender/cache, and skip the build-time static-render
// probe that would otherwise fail if MONGODB_URI isn't set at build time.
export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const session = await auth();

  let remote: GabriellosMenuItem[] = [];
  let categories: MenuCategoryDoc[] = DEFAULT_CATEGORIES;
  try {
    [remote, categories] = await Promise.all([getMenuConfig(), getCategories()]);
  } catch (e) {
    // Public page — stay up (showing RECIPES defaults) even if Mongo is
    // unreachable, instead of a hard error for every visitor.
    console.error("La Carta: falling back to recipe defaults —", e);
  }

  const byId = new Map(remote.map((r) => [r.id, r]));
  const items: GabriellosMenuItem[] = RECIPES.map((r) => {
    const existing = byId.get(r.id);
    return {
      id: r.id,
      number: existing?.number ?? r.number,
      name: existing?.name ?? r.name,
      style: existing?.style ?? r.style,
      image: existing?.image ?? r.image,
      category: existing?.category ?? categories[0]?.id ?? "classic",
      price: existing?.price ?? 0,
      available: existing?.available ?? false,
      cateringAvailable: existing?.cateringAvailable ?? false,
      description: existing?.description ?? r.menuIngredients ?? r.toppings,
    };
  });

  return <MenuPageClient initialItems={items} categories={categories} isAdmin={!!session} />;
}
