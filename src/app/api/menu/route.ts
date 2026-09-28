import { NextResponse, type NextRequest } from "next/server";
import { getMenuConfig, saveMenuConfig, type GabriellosMenuItem } from "@/lib/db/menuConfig";

// Always personalized (session-gated) and reads live DB state — never
// prerender/cache this route, and skip the build-time static-render probe
// that would otherwise fail if MONGODB_URI isn't set at build time.
export const dynamic = "force-dynamic";

const CATEGORIES = new Set(["classic", "innovative", "calzone-focaccia", "specials"]);

function isValidItem(item: unknown): item is GabriellosMenuItem {
  if (typeof item !== "object" || item === null) return false;
  const i = item as Record<string, unknown>;
  return (
    typeof i.id === "string" &&
    i.id.length > 0 &&
    typeof i.number === "number" &&
    typeof i.name === "string" &&
    i.name.length > 0 &&
    typeof i.category === "string" &&
    CATEGORIES.has(i.category) &&
    typeof i.description === "string" &&
    typeof i.price === "number" &&
    Number.isFinite(i.price) &&
    typeof i.available === "boolean" &&
    (i.style === undefined || typeof i.style === "string") &&
    (i.image === undefined || typeof i.image === "string")
  );
}

// Protected by src/proxy.ts — only reachable with a valid Auth.js session.
export async function GET() {
  try {
    return NextResponse.json(await getMenuConfig());
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not load menu.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!Array.isArray(body) || !body.every(isValidItem)) {
    return NextResponse.json({ error: "Invalid body — expected an array of menu items." }, { status: 400 });
  }

  try {
    await saveMenuConfig(body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not save menu.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
