import clientPromise from "./mongo";
import { DEFAULT_CATEGORIES, type MenuCategoryDoc } from "../menuCategories";

export { DEFAULT_CATEGORIES, type MenuCategoryDoc };

interface CategoryDoc {
  _id: string;
  label: string;
  sortOrder: number;
}

function toCategory(doc: CategoryDoc): MenuCategoryDoc {
  return { id: doc._id, label: doc.label, sortOrder: doc.sortOrder };
}

/** pizzaiiolo is the sole writer — reads and writes the shared `categories` collection. */
export async function getCategories(): Promise<MenuCategoryDoc[]> {
  const client = await clientPromise;
  const docs = await client
    .db("gabriellos")
    .collection<CategoryDoc>("categories")
    .find({})
    .sort({ sortOrder: 1 })
    .toArray();
  if (docs.length === 0) return DEFAULT_CATEGORIES;
  return docs.map(toCategory);
}

/** Full replace of the category list — supports create, rename, reorder and delete in one call. */
export async function saveCategories(categories: MenuCategoryDoc[]): Promise<void> {
  const client = await clientPromise;
  const col = client.db("gabriellos").collection<CategoryDoc>("categories");
  const ids = categories.map((c) => c.id);
  // Drop any category that's no longer in the incoming list (deletions).
  await col.deleteMany({ _id: { $nin: ids.length ? ids : ["__none__"] } });
  const ops = categories.map((c) => ({
    replaceOne: {
      filter: { _id: c.id },
      replacement: { _id: c.id, label: c.label, sortOrder: c.sortOrder },
      upsert: true,
    },
  }));
  if (ops.length) await col.bulkWrite(ops);
}
