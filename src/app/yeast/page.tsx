"use client";

import { useState, useMemo, type ReactNode } from "react";
import { convertYeast } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type YeastType = "instant" | "fresh" | "activeDry";

export default function YeastPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Yeast</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Convert between yeast types, and store Caputo Instant Dry Yeast
        </p>
      </div>

      <Tabs defaultValue="conversion">
        <TabsList>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
        </TabsList>

        <TabsContent value="conversion" className="mt-4">
          <ConversionSection />
        </TabsContent>

        <TabsContent value="storage" className="mt-4">
          <StorageSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ConversionSection() {
  const [inputType, setInputType] = useState<YeastType>("instant");
  const [amount, setAmount] = useState(2);
  const [coldHours, setColdHours] = useState(24);

  const converted = useMemo(() => {
    let instantGrams: number;
    if (inputType === "instant") instantGrams = amount;
    else if (inputType === "fresh") instantGrams = amount / 3;
    else instantGrams = amount / 1.25;
    return convertYeast(instantGrams);
  }, [inputType, amount]);

  // Recommended Dosage Note: yeast activity doesn't stop at 4°C, it only slows down —
  // so the longer the total cold fermentation, the less yeast should be used up front
  // to avoid over-proofing (collapsed cornicione, sour/boozy flavor) by bake day.
  const dosageNote = useMemo(() => {
    if (coldHours <= 24) {
      return { level: "ok" as const, text: "Standard dosage is appropriate for a same-day to 24h cold fermentation." };
    } else if (coldHours <= 48) {
      return { level: "warn" as const, text: "For a 24–48h cold rest, cut yeast to roughly 50%–70% of a same-day dose to avoid over-proofing." };
    } else if (coldHours <= 72) {
      return { level: "warn" as const, text: "For a 48–72h multi-day cold rest, use only 30%–50% of a same-day dose — the dough keeps fermenting slowly even at 4°C (39°F)." };
    }
    return { level: "danger" as const, text: "Beyond 72h, use a bare trace of yeast (under 20% of a same-day dose) or switch to a poolish/biga preferment — standard doses will over-proof and collapse the dough before bake day." };
  }, [coldHours]);

  const types: { key: YeastType; label: string; desc: string; icon: string }[] = [
    { key: "instant", label: "Instant Dry Yeast", desc: "Active Dry × 0.8 / Fresh ÷ 3", icon: "🟡" },
    { key: "fresh", label: "Fresh Yeast", desc: "Instant × 3", icon: "🟤" },
    { key: "activeDry", label: "Active Dry Yeast", desc: "Instant × 1.25", icon: "🟠" },
  ];

  const results = [
    { type: "instant" as YeastType, label: "Instant Dry Yeast", value: converted.instant },
    { type: "fresh" as YeastType, label: "Fresh Yeast", value: converted.fresh },
    { type: "activeDry" as YeastType, label: "Active Dry Yeast", value: converted.activeDry },
  ];

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground text-sm">Convert between instant, fresh, and active dry yeast</p>

      {/* Input type selector */}
      <Card>
        <CardHeader><CardTitle className="text-base">I have…</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {types.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setInputType(key)}
                className={`p-3 rounded-lg border text-center transition-all ${
                  inputType === key
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50 text-muted-foreground"
                }`}
              >
                <div className="text-2xl mb-1">{icon}</div>
                <div className="text-xs font-medium leading-tight">{label}</div>
              </button>
            ))}
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-muted-foreground">Amount</label>
              <span className="text-sm font-mono font-medium">{amount} g</span>
            </div>
            <input
              type="range" min={0.1} max={50} step={0.1} value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number" step="0.1" min={0.1} value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="bg-muted border border-border rounded-lg px-3 py-2 text-sm w-28 font-mono text-foreground"
            />
            <span className="text-sm text-muted-foreground">grams of {types.find(t => t.key === inputType)?.label}</span>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {results.map(({ type, label, value }) => (
          <Card key={type} className={inputType === type ? "border-primary/40" : ""}>
            <CardContent className="pt-5 text-center">
              <div className="text-3xl font-bold font-mono text-primary mb-1">
                {value.toFixed(2)} g
              </div>
              <div className="text-sm font-medium mb-1">{label}</div>
              {inputType === type && (
                <div className="text-xs text-primary bg-primary/10 rounded px-2 py-0.5 inline-block">Input</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommended Dosage Note */}
      <Card>
        <CardHeader><CardTitle className="text-base">Recommended Dosage Note</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-muted-foreground">Total Cold Fermentation Duration</label>
              <span className="text-sm font-mono font-medium">{coldHours} h</span>
            </div>
            <input
              type="range" min={8} max={96} step={4} value={coldHours}
              onChange={e => setColdHours(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
          </div>
          <p
            className={`text-sm rounded-lg p-3 border ${
              dosageNote.level === "ok"
                ? "bg-primary/5 border-primary/20 text-foreground"
                : dosageNote.level === "warn"
                ? "bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-300"
                : "bg-red-500/10 border-red-500/30 text-red-900 dark:text-red-300"
            }`}
          >
            {dosageNote.text}
          </p>
        </CardContent>
      </Card>

      {/* Conversion table */}
      <Card>
        <CardHeader><CardTitle className="text-sm">Conversion Reference</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-muted-foreground font-medium">Instant (g)</th>
                  <th className="text-right py-2 text-muted-foreground font-medium">Fresh (g)</th>
                  <th className="text-right py-2 text-muted-foreground font-medium">Active Dry (g)</th>
                </tr>
              </thead>
              <tbody>
                {[0.5, 1, 2, 3, 5, 7, 10].map(i => (
                  <tr key={i} className={`border-b border-border last:border-0 ${Math.abs(converted.instant - i) < 0.05 ? "bg-primary/5" : ""}`}>
                    <td className="py-1.5 font-mono">{i}</td>
                    <td className="py-1.5 font-mono text-right">{(i * 3).toFixed(1)}</td>
                    <td className="py-1.5 font-mono text-right">{(i * 1.25).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Info */}
      <Card>
        <CardHeader><CardTitle className="text-sm">About Yeast Types</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs text-muted-foreground">
          {types.map(({ icon, label, key, desc }) => (
            <div key={key}>
              <span className="mr-1">{icon}</span>
              <strong className="text-foreground">{label}</strong> — {desc}
            </div>
          ))}
          <p className="pt-2 border-t border-border text-muted-foreground/70">
            Note: Conversions are approximate. Fermentation behavior varies by yeast brand and freshness.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function StorageSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-5 text-sm leading-relaxed text-muted-foreground space-y-3">
          <p>
            Stored properly in the freezer, Caputo Instant Dry Yeast maintains full fermentation power for 12 to 24 months. Proper storage prevents exposure to humidity, oxygen, and ambient heat, which degrade live yeast cells over time.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Step-by-Step Storage Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Step number={1} title="Transfer to an Airtight Glass Container">
            <p>
              Once you open the original foil tin or pouch, transfer all the dry yeast into a clean, completely dry glass jar with a rubber seal or tight screw lid (a small mason jar or spice jar works best).
            </p>
            <p>
              Avoid plastic Ziploc bags for long-term storage, as polythene is slightly permeable to oxygen and humidity over time.
            </p>
          </Step>

          <Step number={2} title="Place Directly in the Freezer">
            <p>
              Store the sealed glass jar in your freezer (ideally at or below -18°C).
            </p>
            <p>
              Because instant dry yeast has virtually zero moisture content, it will not freeze solid or clump together. It remains a free-flowing powder.
            </p>
          </Step>

          <Step number={3} title="Measure Directly from Frozen">
            <p>
              When preparing your dough, remove the jar from the freezer, scoop the exact dosage (e.g., 1.6 g) directly onto your precision scale, and return the jar to the freezer immediately.
            </p>
            <Verification>
              Ensure your spoon and scale tray are 100% dry before measuring. Never introduce moisture into the jar.
            </Verification>
          </Step>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">How to Perform a Proof Test Before Baking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            If your yeast has been stored for several months and you want to verify that it is fully active before starting a full dough batch, perform this simple 10-minute proofing test:
          </p>

          <Step number={1} title="Prepare Warm Water">
            <p>
              Measure 50 g of lukewarm water into a small glass or measuring cup. Target a water temperature of 30–35°C.
            </p>
            <Verification>
              Water that feels comfortably warm (not hot) to the touch is ideal. Water above 45°C will kill the yeast.
            </Verification>
          </Step>

          <Step number={2} title="Add Sugar and Yeast">
            <p>
              Add 1 g (about 1/4 tsp) of sugar or honey to the water and stir until fully dissolved. Then add 1 g of Caputo Instant Dry Yeast and stir gently for 5–10 seconds to disperse the grains.
            </p>
          </Step>

          <Step number={3} title="Rest and Observe (10 Minutes)">
            <p>
              Leave the mixture undisturbed at room temperature for 10 to 15 minutes.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 text-sm leading-relaxed">
                <div className="font-semibold text-foreground mb-1">Active Yeast (Pass)</div>
                <p className="text-muted-foreground">
                  Within 10 minutes, a thick layer of creamy foam, small bubbling carbon dioxide clusters, and a distinct yeasty aroma will form on the surface.
                </p>
              </div>
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm leading-relaxed">
                <div className="font-semibold text-red-900 dark:text-red-300 mb-1">Inactive/Degraded Yeast (Fail)</div>
                <p className="text-red-900/90 dark:text-red-300/90">
                  The water remains flat with no foam, surface bubbles, or volume expansion. If this happens, discard the yeast and open a fresh batch.
                </p>
              </div>
            </div>
          </Step>
        </CardContent>
      </Card>
    </div>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm shrink-0 mt-0.5">
        {number}
      </span>
      <div className="space-y-2 min-w-0">
        <h3 className="font-medium text-foreground">{title}</h3>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
      </div>
    </div>
  );
}

function Verification({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm rounded-lg p-3 border bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-300">
      <span className="font-semibold">Verification: </span>
      {children}
    </p>
  );
}
