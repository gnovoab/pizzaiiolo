import { NextResponse, type NextRequest } from "next/server";
import { getSettings, saveSettings, type GabriellosSettings } from "@/lib/db/settings";

// Always personalized (session-gated) and reads live DB state — never
// prerender/cache this route, and skip the build-time static-render probe
// that would otherwise fail if MONGODB_URI isn't set at build time.
export const dynamic = "force-dynamic";

function isValidSettings(body: unknown): body is GabriellosSettings {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return typeof b.showPrices === "boolean";
}

// Protected by src/proxy.ts — only reachable with a valid Auth.js session.
export async function GET() {
  try {
    return NextResponse.json(await getSettings());
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not load settings.";
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

  if (!isValidSettings(body)) {
    return NextResponse.json({ error: "Invalid body — expected { showPrices: boolean }." }, { status: 400 });
  }

  try {
    await saveSettings(body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not save settings.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
