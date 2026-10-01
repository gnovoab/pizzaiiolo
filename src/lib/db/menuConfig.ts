import clientPromise from "./mongo";

// Categories are now admin-managed (create/rename/reorder/delete) and stored
// in the `categories` collection — see src/lib/db/categories.ts. A menu
// item's `category` is just the id of one of those documents.
export type MenuCategory = string;

export interface GabriellosMenuItem {
  id: string;
  number: number;
  name: string;
  style?: string;
  category: MenuCategory;
  description: string;
  price: number;
  image?: string;
  available: boolean;
  /** Independent from `available` — controls visibility on the catering site/menu, not online ordering or the tablet menu. */
  cateringAvailable: boolean;
}

interface MenuDoc {
  _id: string;
  number: number;
  name: string;
  style?: string;
  category: MenuCategory;
  description: string;
  price: number;
  image?: string;
  available: boolean;
  cateringAvailable?: boolean;
  updatedAt: Date;
}

function toGabriellosMenuItem(doc: MenuDoc): GabriellosMenuItem {
  return {
    id: String(doc._id),
    number: doc.number,
    name: doc.name,
    style: doc.style,
    category: doc.category,
    description: doc.description,
    price: doc.price,
    image: doc.image,
    available: doc.available,
    cateringAvailable: doc.cateringAvailable ?? false,
  };
}

/** pizzaiiolo is the sole writer — reads and writes the shared `menu` collection. */
export async function getMenuConfig(): Promise<GabriellosMenuItem[]> {
  const client = await clientPromise;
  const docs = await client.db("gabriellos").collection<MenuDoc>("menu").find({}).toArray();
  return docs.map(toGabriellosMenuItem);
}

export async function saveMenuConfig(items: GabriellosMenuItem[]): Promise<void> {
  const client = await clientPromise;
  const col = client.db("gabriellos").collection<MenuDoc>("menu");
  const ops = items.map(({ id, ...rest }) => ({
    replaceOne: {
      filter: { _id: id },
      replacement: { _id: id, ...rest, updatedAt: new Date() },
      upsert: true,
    },
  }));
  if (ops.length) await col.bulkWrite(ops);
}
