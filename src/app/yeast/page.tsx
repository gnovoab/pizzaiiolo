"use client";

import { useState, useMemo } from "react";
import { convertYeast } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type YeastType = "instant" | "fresh" | "activeDry";

export default function YeastPage() {
  const [inputType, setInputType] = useState<YeastType>("instant");
  const [amount, setAmount] = useState(2);

  const converted = useMemo(() => {
    let instantGrams: number;
    if (inputType === "instant") instantGrams = amount;
    else if (inputType === "fresh") instantGrams = amount / 3;
    else instantGrams = amount / 1.25;
    return convertYeast(instantGrams);
  }, [inputType, amount]);

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
      <div>
        <h1 className="text-2xl font-bold">Yeast Converter</h1>
        <p className="text-muted-foreground text-sm mt-1">Convert between instant, fresh, and active dry yeast</p>
      </div>

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
