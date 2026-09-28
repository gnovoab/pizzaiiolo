import clientPromise from "./mongo";

export interface GabriellosSettings {
  /** Whether prices are shown on read-only displays (tablet menu, catering site). Online ordering always shows prices regardless of this flag. */
  showPrices: boolean;
}

interface SettingsDoc extends GabriellosSettings {
  _id: string;
}

const SETTINGS_ID = "global";

const DEFAULT_SETTINGS: GabriellosSettings = { showPrices: true };

/** pizzaiiolo is the sole writer — reads and writes the shared `settings` collection. */
export async function getSettings(): Promise<GabriellosSettings> {
  const client = await clientPromise;
  const doc = await client
    .db("gabriellos")
    .collection<SettingsDoc>("settings")
    .findOne({ _id: SETTINGS_ID });
  if (!doc) return DEFAULT_SETTINGS;
  return { showPrices: doc.showPrices };
}

export async function saveSettings(settings: GabriellosSettings): Promise<void> {
  const client = await clientPromise;
  await client
    .db("gabriellos")
    .collection<SettingsDoc>("settings")
    .replaceOne({ _id: SETTINGS_ID }, settings, { upsert: true });
}
