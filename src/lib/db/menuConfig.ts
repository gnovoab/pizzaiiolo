import clientPromise from "./mongo";

export type MenuCategory = "classic" | "innovative" | "pumpkin" | "le-nostre" | "calzone-focaccia" | "specials";

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
