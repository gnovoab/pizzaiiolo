import { NextResponse, type NextRequest } from "next/server";
import { getCategories, saveCategories, type MenuCategoryDoc } from "@/lib/db/categories";
import { getMenuConfig } from "@/lib/db/menuConfig";

// Always personalized (session-gated) and reads live DB state — never
// prerender/cache this route, and skip the build-time static-render probe
// that would otherwise fail if MONGODB_URI isn't set at build time.
export const dynamic = "force-dynamic";

function isValidCategory(c: unknown): c is MenuCategoryDoc {
  if (typeof c !== "object" || c === null) return false;
  const o = c as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    o.id.length > 0 &&
    typeof o.label === "string" &&
    o.label.length > 0 &&
    typeof o.sortOrder === "number"
  );
}

// Protected by src/proxy.ts — only reachable with a valid Auth.js session.
export async function GET() {
  try {
    return NextResponse.json(await getCategories());
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not load categories.";
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

  if (!Array.isArray(body) || !body.every(isValidCategory)) {
    return NextResponse.json({ error: "Invalid body — expected an array of categories." }, { status: 400 });
  }

  try {
    // Block deleting a category that still has pizzas assigned to it —
    // those must be reassigned (or deleted) first.
    const menu = await getMenuConfig();
    const newIds = new Set(body.map((c) => c.id));
    const stillInUse = Array.from(new Set(menu.filter((item) => !newIds.has(item.category)).map((item) => item.category)));
    if (stillInUse.length > 0) {
      return NextResponse.json(
        {
          error: `Cannot delete categories that still contain pizzas: ${stillInUse.join(", ")}. Move or remove those pizzas first.`,
        },
        { status: 409 }
      );
    }

    await saveCategories(body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not save categories.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
