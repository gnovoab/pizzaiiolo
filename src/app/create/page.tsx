"use client";

import { useMemo } from "react";
import { usePizzaStore } from "@/store/usePizzaStore";
import { PIZZAIOLI } from "@/lib/pizzaioli";
import { calcDough, fmt } from "@/lib/calculations";
import { buildRecipeSteps } from "@/lib/recipeSteps";
import { calcBakePlan, buildBakeEvents, fmtBakeDate } from "@/lib/bakeSchedule";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { DoughMode } from "@/lib/types";

export default function CreatePizzaPage() {
  const store = usePizzaStore();
  const { set, setFromPizzaiolo } = store;

  const pizzaiolo = PIZZAIOLI.find(p => p.id === store.selectedPizzaioloId) || PIZZAIOLI[0];

  const result = useMemo(() =>
    calcDough({
      mode: store.doughMode,
      numPizzas: store.numPizzas,
      ballWeight: store.ballWeight,
      flour: store.flourInput,
      water: store.waterInput,
      hydration: pizzaiolo.hydration,
      salt: pizzaiolo.salt,
      yeast: pizzaiolo.yeast,
      selectedPizzaioloId: pizzaiolo.id,
    }),
    [store.doughMode, store.numPizzas, store.ballWeight, store.flourInput, store.waterInput, pizzaiolo]
  );

  const steps = useMemo(() => buildRecipeSteps(pizzaiolo, result), [pizzaiolo, result]);

  const plan = useMemo(
    () => calcBakePlan(store.bakeDate, store.bakeTime, pizzaiolo.fermentationMin, pizzaiolo.fermentationMax),
    [store.bakeDate, store.bakeTime, pizzaiolo]
  );
  const events = useMemo(() => buildBakeEvents(plan, store.roomTemp, store.fridgeTemp), [plan, store.roomTemp, store.fridgeTemp]);
  const isRoomTemp = plan.type === "room-temp";

  const modes: { key: DoughMode; label: string }[] = [
    { key: "pizzas", label: "By Pizzas" },
    { key: "flour", label: "By Flour" },
    { key: "water", label: "By Water" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">La Ricetta</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Create a Pizza</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Pick a pizzaiolo and follow their process from mix to bake.
        </p>
      </div>

      <NumberedCard n={1} title="Pick a Pizzaiolo">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {PIZZAIOLI.map((p) => {
            const active = store.selectedPizzaioloId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setFromPizzaiolo(p.id, p.hydration, p.salt, p.yeast)}
                className="relative overflow-hidden p-3 pt-4 rounded-xl border text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  borderColor: active ? p.color : "var(--border)",
                  backgroundColor: active ? p.color + "12" : "var(--card)",
                }}
              >
                <span className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: p.color }} aria-hidden />
                <div className="font-serif font-semibold text-sm leading-tight text-foreground">{p.name}</div>
                <div className="text-xs text-muted-foreground italic mt-0.5">{p.style}</div>
                <div className="mt-2 flex gap-1 flex-wrap">
                  <span className="bg-muted rounded px-1.5 py-0.5 text-[10px] font-mono">{Math.round(p.hydration * 100)}% H</span>
                  {p.preferment && (
                    <span className="rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide" style={{ backgroundColor: p.color + "22", color: p.color }}>
                      {p.preferment}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </NumberedCard>

      <Card className="border-l-4 shadow-sm" style={{ borderLeftColor: pizzaiolo.color }}>
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl flex items-center gap-2 flex-wrap">
            <span style={{ color: pizzaiolo.color }}>★</span>
            <span>Technique Spotlight</span>
            <span className="text-xs font-normal text-muted-foreground italic">— {pizzaiolo.technique.level}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-1.5">Stretching</div>
            <p className="text-[15px] leading-relaxed">{pizzaiolo.technique.stretching}</p>
          </div>
          {pizzaiolo.technique.notes.map((n) => (
            <div key={n.title}>
              <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-1.5">{n.title}</div>
              <p className="text-[15px] leading-relaxed">{n.detail}</p>
            </div>
          ))}
          <div className="pt-1">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Companion Videos</div>
            <ul className="space-y-2">
              {pizzaiolo.technique.videos.map((v) => {
                const label =
                  v.category === "dough" ? "Dough" :
                  v.category === "fermentation" ? "Fermentation" :
                  v.category === "stretching" ? "Stretching" :
                  v.category === "sauce" ? "Sauce" :
                  v.category === "recipe" ? "Recipe" :
                  v.category === "hydration" ? "Hydration" : "Overview";
                return (
                  <li key={v.url}>
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 text-[15px] hover:underline"
                      style={{ color: pizzaiolo.color }}
                    >
                      <span
                        className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 mt-1"
                        style={{ backgroundColor: `${pizzaiolo.color}22`, color: pizzaiolo.color }}
                      >
                        {label}
                      </span>
                      <span className="flex-1">▶ {v.title} <span className="text-xs opacity-60">↗</span></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </CardContent>
      </Card>

      <NumberedCard n={2} title="Recipe Settings">
        <div className="flex gap-2 flex-wrap mb-2">
          {modes.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => set({ doughMode: key })}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                store.doughMode === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {store.doughMode === "pizzas" && (
          <>
            <Field label="Number of Pizzas" value={store.numPizzas} onChange={v => set({ numPizzas: v })} min={1} max={100} step={1} />
            <Field label="Ball Weight (g)" value={store.ballWeight} onChange={v => set({ ballWeight: v })} min={150} max={400} step={5} />
          </>
        )}
        {store.doughMode === "flour" && (
          <Field label="Flour (g)" value={store.flourInput} onChange={v => set({ flourInput: v })} min={100} max={5000} step={10} />
        )}
        {store.doughMode === "water" && (
          <Field label="Water (g)" value={store.waterInput} onChange={v => set({ waterInput: v })} min={100} max={5000} step={10} />
        )}
        <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-1">
          Hydration, salt and yeast are locked to <span style={{ color: pizzaiolo.color }} className="font-semibold not-italic">{pizzaiolo.name}</span>&apos;s
          recipe ({Math.round(pizzaiolo.hydration * 100)}% / {(pizzaiolo.salt * 100).toFixed(1)}% / {(pizzaiolo.yeast * 100).toFixed(2)}%).
        </p>
      </NumberedCard>

      <Card className="border-primary/40 shadow-md">
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">★</span>
            <span>Your Recipe</span>
            <Badge variant="outline" className="text-primary border-primary/40 text-[10px] uppercase tracking-wider ml-auto">{result.numPizzas} × {fmt(store.ballWeight, 0)}g</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Flour", value: result.flour },
            { label: "Water", value: result.water },
            { label: "Salt", value: result.salt },
            { label: "Yeast", value: result.yeast },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-border bg-muted/30 p-3">
              <div className="text-[10px] uppercase tracking-[0.15em] text-secondary font-semibold">{label}</div>
              <div className="font-mono font-bold text-primary text-lg mt-1">{fmt(value, 1)} g</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <NumberedCard n={3} title="Bake Schedule">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold block mb-1.5">Bake Date</label>
            <input type="date" value={store.bakeDate}
              onChange={e => set({ bakeDate: e.target.value })}
              className="bg-card border border-border rounded-lg px-3 py-2 text-[15px] w-full text-foreground focus:outline-none focus:border-primary/60" />
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold block mb-1.5">Bake Time</label>
            <input type="time" value={store.bakeTime}
              onChange={e => set({ bakeTime: e.target.value })}
              className="bg-card border border-border rounded-lg px-3 py-2 text-[15px] w-full text-foreground focus:outline-none focus:border-primary/60" />
          </div>
          <Field label="Room Temp (°C)" value={store.roomTemp} onChange={v => set({ roomTemp: v })} min={15} max={35} step={1} />
          {!isRoomTemp && (
            <Field label="Fridge Temp (°C)" value={store.fridgeTemp} onChange={v => set({ fridgeTemp: v })} min={1} max={10} step={1} />
          )}
        </div>

        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium w-fit ${
          isRoomTemp
            ? "bg-emerald-700/10 text-emerald-800 border border-emerald-700/30"
            : "bg-blue-700/10 text-blue-800 border border-blue-700/30"
        }`}>
          {isRoomTemp ? "🌡 Room temperature only — no fridge" : "❄️ Cold-proof workflow — fridge required"}
        </div>

        <div className="relative pt-1">
          {events.map((ev, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-lg z-10 shrink-0">{ev.icon}</div>
                {i < events.length - 1 && <div className="w-0.5 bg-border flex-1 my-1 min-h-[28px]" />}
              </div>
              <div className="pb-5 flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-serif font-semibold text-base text-foreground">{ev.label}</span>
                  <span className="text-primary text-sm font-mono">{fmtBakeDate(ev.time)}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </NumberedCard>

      <Card>
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">4</span>
            <span>The Process</span>
            <span className="text-xs font-normal text-muted-foreground italic">— {pizzaiolo.fermentationApproach}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="rounded-xl border border-border bg-card p-4 shadow-sm flex gap-3.5">
                <div className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-semibold text-base shadow-sm">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl shrink-0" aria-hidden>{s.icon}</span>
                    <h4 className="font-serif text-lg font-semibold leading-tight text-foreground">{s.title}</h4>
                  </div>
                  <p className="text-[15px] text-foreground/80 mt-1.5 leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

function NumberedCard({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="pb-3 border-b border-border/60">
        <CardTitle className="font-serif text-xl flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">{n}</span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">{children}</CardContent>
    </Card>
  );
}

function Field({ label, value, onChange, min, max, step = 1 }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-[15px] text-foreground/80">{label}</label>
        <span className="font-mono font-semibold text-primary">{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer" />
    </div>
  );
}
