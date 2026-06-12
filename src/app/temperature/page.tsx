"use client";

import { useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { calcWaterTemp } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TemperaturePage() {
  const store = usePizzaStore();
  const { set } = store;

  const waterTemp = useMemo(() =>
    calcWaterTemp(store.roomTempForWater, store.flourTemp, store.frictionFactor),
    [store.roomTempForWater, store.flourTemp, store.frictionFactor]
  );

  const isCold = waterTemp < 10;
  const isHot = waterTemp > 35;
  const isIdeal = !isCold && !isHot;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dough Temperature Calculator</h1>
        <p className="text-muted-foreground text-sm mt-1">Calculate ideal water temperature for 23°C target dough</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Inputs</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <TempSlider
              label="Room Temperature"
              value={store.roomTempForWater}
              onChange={v => set({ roomTempForWater: v })}
              min={15} max={35} unit="°C"
            />
            <TempSlider
              label="Flour Temperature"
              value={store.flourTemp}
              onChange={v => set({ flourTemp: v })}
              min={10} max={35} unit="°C"
            />
            <TempSlider
              label="Friction Factor"
              value={store.frictionFactor}
              onChange={v => set({ frictionFactor: v })}
              min={0} max={20} unit="°C"
              hint="Typical: 3–8°C for hand mixing, 5–15°C for stand mixer"
            />
          </CardContent>
        </Card>

        <div className="space-y-4">
          {/* Main result */}
          <Card className={`border-2 ${isIdeal ? "border-green-500/40" : isCold ? "border-blue-400/40" : "border-red-400/40"}`}>
            <CardContent className="pt-6 text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Ideal Water Temperature</div>
              <div className={`text-6xl font-bold font-mono mb-2 ${
                isIdeal ? "text-green-700" : isCold ? "text-blue-700" : "text-red-700"
              }`}>
                {waterTemp.toFixed(1)}°C
              </div>
              <div className="text-sm text-muted-foreground">
                {isCold && "⚠️ Very cold — may slow fermentation"}
                {isHot && "⚠️ Too hot — may kill yeast"}
                {isIdeal && "✅ Perfect for 23°C dough target"}
              </div>
            </CardContent>
          </Card>

          {/* Formula breakdown */}
          <Card>
            <CardHeader><CardTitle className="text-sm">Formula</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="bg-muted rounded-lg p-3 font-mono text-xs">
                Water Temp = (3 × 23°C) − Room − Flour − Friction
              </div>
              <div className="space-y-1 text-xs">
                <CalcRow label="3 × Target (23°C)" value="69°C" />
                <CalcRow label="− Room Temp" value={`${store.roomTempForWater}°C`} />
                <CalcRow label="− Flour Temp" value={`${store.flourTemp}°C`} />
                <CalcRow label="− Friction Factor" value={`${store.frictionFactor}°C`} />
                <div className="border-t border-border pt-1 flex justify-between font-semibold">
                  <span>= Water Temp</span>
                  <span className="text-primary font-mono">{waterTemp.toFixed(1)}°C</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader><CardTitle className="text-sm">Tips</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-xs text-muted-foreground">
              <p>🌡 <strong className="text-foreground">Target:</strong> 23°C final dough temp for optimal yeast activity.</p>
              <p>🧊 <strong className="text-foreground">Summer:</strong> Use ice water or refrigerate flour beforehand.</p>
              <p>🔥 <strong className="text-foreground">Winter:</strong> Use lukewarm water to compensate for cold flour.</p>
              <p>⚙️ <strong className="text-foreground">Mixer friction:</strong> Stand mixers add ~5–15°C; hand mixing ~3–8°C.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function TempSlider({ label, value, onChange, min, max, unit, hint }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; unit: string; hint?: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-sm text-muted-foreground">{label}</label>
        <span className="text-sm font-mono font-medium">{value}{unit}</span>
      </div>
      <input type="range" min={min} max={max} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer" />
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </div>
  );
}

function CalcRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="font-mono">{value}</span>
    </div>
  );
}
