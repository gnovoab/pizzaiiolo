"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PIZZAIOLI } from "@/lib/pizzaioli";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

/* Scale a gram value string (e.g. "10g", "10–12g", "5–10g") by a factor.
   Non-numeric strings ("None", "Minimal", "Optional") pass through unchanged. */
function scaleGrams(raw: string, factor: number): string {
  const m = raw.match(/^(\d+(?:\.\d+)?)(?:\s*[–-]\s*(\d+(?:\.\d+)?))?\s*g$/i);
  if (!m) return raw;
  const fmt = (n: number) => {
    const v = Math.round(n * 10) / 10;
    return Number.isInteger(v) ? v.toString() : v.toFixed(1);
  };
  const lo = parseFloat(m[1]) * factor;
  const hi = m[2] ? parseFloat(m[2]) * factor : null;
  return hi !== null ? `${fmt(lo)}–${fmt(hi)}g` : `${fmt(lo)}g`;
}

export default function ComparisonPage() {
  const [tomatoGrams, setTomatoGrams] = useState<number>(1000);
  const factor = tomatoGrams / 1000;
  const hydrationData = PIZZAIOLI.map(p => ({
    name: p.name.split(" ")[0],
    value: Math.round(p.hydration * 100),
    color: p.color,
  }));

  const saltData = PIZZAIOLI.map(p => ({
    name: p.name.split(" ")[0],
    value: +(p.salt * 1000).toFixed(1),
    color: p.color,
  }));

  const yeastData = PIZZAIOLI.map(p => ({
    name: p.name.split(" ")[0],
    value: +(p.yeast * 1000).toFixed(2),
    color: p.color,
  }));

  const fermData = PIZZAIOLI.map(p => ({
    name: p.name.split(" ")[0],
    min: p.fermentationMin,
    max: p.fermentationMax,
    color: p.color,
  }));

  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-4">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Reference</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold mt-2">Pizzaioli Comparison</h1>
        <p className="text-muted-foreground text-base mt-2 italic">Side-by-side reference of all pizzaioli — similarities and differences.</p>
      </div>

      <Tabs defaultValue="dough">
        <TabsList>
          <TabsTrigger value="dough">Dough</TabsTrigger>
          <TabsTrigger value="fermentation">Fermentation</TabsTrigger>
          <TabsTrigger value="sauce">Sauce</TabsTrigger>
        </TabsList>

        <TabsContent value="dough" className="space-y-6 mt-4">
          <TableCard title="Dough Profiles" minWidth={900}>
            <thead>
              <HeaderRow>
                <Th sticky>Pizzaiolo</Th>
                <Th>Style</Th>
                <Th>Flour W</Th>
                <Th>Hydration</Th>
                <Th>Salt</Th>
                <Th>Yeast</Th>
                <Th>Fermentation</Th>
                <Th>Mixing</Th>
                <Th>Characteristics</Th>
              </HeaderRow>
            </thead>
            <tbody>
              {PIZZAIOLI.map((p, i) => (
                <BodyRow key={p.id} index={i}>
                  <NameTd color={p.color} name={p.name} index={i} />
                  <Td>{p.style}</Td>
                  <Td mono>{p.flourW}</Td>
                  <Td mono>{p.hydrationRange}</Td>
                  <Td mono>{p.saltRange}</Td>
                  <Td mono>{p.yeastRange}</Td>
                  <Td mono>{p.fermentationRange}</Td>
                  <Td>{p.mixing}</Td>
                  <Td muted wrap>{p.characteristics}</Td>
                </BodyRow>
              ))}
            </tbody>
          </TableCard>

          <TableCard title="Recipe per 1000 g of Flour" minWidth={600}>
            <thead>
              <HeaderRow>
                <Th sticky>Pizzaiolo</Th>
                <Th>Flour</Th>
                <Th>Water</Th>
                <Th>Salt</Th>
                <Th>Yeast</Th>
              </HeaderRow>
            </thead>
            <tbody>
              {PIZZAIOLI.map((p, i) => (
                <BodyRow key={p.id} index={i}>
                  <NameTd color={p.color} name={p.name} index={i} />
                  <Td mono>1000 g</Td>
                  <Td mono>{p.recipe1000g.water}</Td>
                  <Td mono>{p.recipe1000g.salt}</Td>
                  <Td mono>{p.recipe1000g.yeast}</Td>
                </BodyRow>
              ))}
            </tbody>
          </TableCard>

          <TableCard title="Main Focus" minWidth={500}>
            <thead>
              <HeaderRow>
                <Th sticky>Pizzaiolo</Th>
                <Th>Main Focus</Th>
              </HeaderRow>
            </thead>
            <tbody>
              {PIZZAIOLI.map((p, i) => (
                <BodyRow key={p.id} index={i}>
                  <NameTd color={p.color} name={p.name} index={i} />
                  <Td muted wrap>{p.mainFocus}</Td>
                </BodyRow>
              ))}
            </tbody>
          </TableCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PIZZAIOLI.map((p) => (
              <Card key={p.id} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: p.color }} />
                <CardContent className="pt-5 pb-4 px-4">
                  <div className="font-serif font-semibold text-lg leading-tight">{p.name}</div>
                  <div className="text-sm text-muted-foreground italic mb-3">{p.style}</div>
                  <div className="space-y-1.5 text-sm">
                    <StatRow label="Hydration" value={`${Math.round(p.hydration * 100)}%`} />
                    <StatRow label="Salt" value={`${(p.salt * 1000).toFixed(1)} g`} />
                    <StatRow label="Yeast" value={`${(p.yeast * 1000).toFixed(2)} g`} />
                    <StatRow label="Ferment" value={`${p.fermentationMin}–${p.fermentationMax} h`} />
                  </div>
                  {p.preferment && (
                    <Badge className="mt-3 text-[10px] uppercase tracking-wide" style={{ backgroundColor: p.color + "22", color: "var(--foreground)", border: `1px solid ${p.color}55` }}>
                      {p.preferment}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ChartCard title="Hydration (%)" data={hydrationData} unit="%" domain={[55, 75]} />
            <ChartCard title="Salt (g per 1kg flour)" data={saltData} unit="g" domain={[25, 32]} />
            <ChartCard title="Yeast (g per 1kg flour)" data={yeastData} unit="g" domain={[0, 6]} />
          </div>
        </TabsContent>

        <TabsContent value="fermentation" className="space-y-6 mt-4">
          <TableCard title="Fermentation Approach" minWidth={900}>
            <thead>
              <HeaderRow>
                <Th sticky>Pizzaiolo</Th>
                <Th>Approach</Th>
                <Th>Bulk</Th>
                <Th>Ball</Th>
                <Th>Total Time</Th>
                <Th>Temperature</Th>
                <Th>Philosophy</Th>
              </HeaderRow>
            </thead>
            <tbody>
              {PIZZAIOLI.map((p, i) => (
                <BodyRow key={p.id} index={i}>
                  <NameTd color={p.color} name={p.name} index={i} />
                  <Td>{p.fermentationApproach}</Td>
                  <Td mono>{p.bulkTime}</Td>
                  <Td mono>{p.ballTime}</Td>
                  <Td mono>{p.totalTime}</Td>
                  <Td>{p.tempPreference}</Td>
                  <Td muted wrap>{p.philosophy}</Td>
                </BodyRow>
              ))}
            </tbody>
          </TableCard>

          <Card>
            <CardHeader><CardTitle className="font-serif text-lg">Fermentation Range (hours)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={fermData} layout="vertical" margin={{ left: 40, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E4D6BB" />
                  <XAxis type="number" tick={{ fill: "#6B5440", fontSize: 12 }} stroke="#C9B79A" />
                  <YAxis type="category" dataKey="name" tick={{ fill: "#2A1E14", fontSize: 12 }} width={70} stroke="#C9B79A" />
                  <Tooltip
                    contentStyle={{ background: "#FFFBF1", border: "1px solid #E4D6BB", borderRadius: 8, color: "#2A1E14" }}
                    cursor={{ fill: "rgba(194,65,12,0.08)" }}
                    formatter={(v, name) => [`${v} h`, name === "min" ? "Min" : "Max"]}
                  />
                  <Bar dataKey="min" name="min" fill="#7C5E3B" radius={[0, 2, 2, 0]} />
                  <Bar dataKey="max" name="max" fill="#C2410C" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sauce" className="space-y-6 mt-4">
          <Card>
            <CardContent className="py-4 px-5 flex flex-wrap items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.15em] text-secondary font-medium">
                Tomatoes
              </span>
              <div className="flex gap-2">
                {[400, 800, 1000].map((g) => (
                  <button
                    key={g}
                    onClick={() => setTomatoGrams(g)}
                    className={`px-3 py-1.5 rounded-md font-mono text-sm border transition-colors ${
                      tomatoGrams === g
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {g}g
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={50}
                  step={50}
                  value={tomatoGrams}
                  onChange={(e) => setTomatoGrams(Math.max(1, Number(e.target.value) || 0))}
                  className="w-24 px-3 py-1.5 rounded-md border border-border bg-card font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <span className="text-sm text-muted-foreground">g custom</span>
              </div>
              <span className="text-xs italic text-muted-foreground ml-auto">
                Salt and olive oil scale to each pizzaiolo&apos;s ratio.
              </span>
            </CardContent>
          </Card>

          <TableCard title="Sauce Profiles" minWidth={1100}>
            <thead>
              <HeaderRow>
                <Th sticky>Pizzaiolo</Th>
                <Th>Preferred Tomato</Th>
                <Th>Sauce Philosophy</Th>
                <Th>Tomatoes</Th>
                <Th>Salt</Th>
                <Th>Olive Oil</Th>
                <Th>Basil</Th>
                <Th>Other</Th>
              </HeaderRow>
            </thead>
            <tbody>
              {PIZZAIOLI.map((p, i) => (
                <BodyRow key={p.id} index={i}>
                  <NameTd color={p.color} name={p.name} index={i} />
                  <Td muted wrap>{p.saucePreference}</Td>
                  <Td muted wrap>{p.saucePhilosophy}</Td>
                  <Td mono>{tomatoGrams}g</Td>
                  <Td mono>{scaleGrams(p.sauceRecipe1000g.salt, factor)}</Td>
                  <Td mono>{scaleGrams(p.sauceRecipe1000g.oliveOil, factor)}</Td>
                  <Td>{p.sauceRecipe1000g.basil}</Td>
                  <Td>{p.sauceRecipe1000g.other}</Td>
                </BodyRow>
              ))}
            </tbody>
          </TableCard>

        </TabsContent>
      </Tabs>
    </div>
  );
}

/* Table primitives --- warm parchment styling, sticky pizzaiolo column, zebra rows */

function TableCard({ title, minWidth, children }: { title: string; minWidth: number; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="font-serif text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto px-0 sm:px-6">
        <table className="w-full text-sm border-collapse" style={{ minWidth }}>
          {children}
        </table>
      </CardContent>
    </Card>
  );
}

function HeaderRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="text-left bg-muted/60 border-b-2 border-primary/30">
      {children}
    </tr>
  );
}

function Th({ children, sticky = false }: { children: React.ReactNode; sticky?: boolean }) {
  return (
    <th
      className={`py-3 px-4 text-[11px] uppercase tracking-[0.12em] font-semibold text-secondary ${sticky ? "sticky left-0 bg-[#EFE5CC] z-20" : ""}`}
    >
      {children}
    </th>
  );
}

function BodyRow({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <tr className={`border-b border-border/60 align-top ${index % 2 === 1 ? "bg-muted/30" : ""} hover:bg-primary/5 transition-colors`}>
      {children}
    </tr>
  );
}

function Td({ children, mono = false, muted = false, wrap = false }: {
  children: React.ReactNode;
  mono?: boolean;
  muted?: boolean;
  wrap?: boolean;
}) {
  return (
    <td className={`py-3 px-4 ${wrap ? "" : "whitespace-nowrap"} ${mono ? "font-mono" : ""} ${muted ? "text-muted-foreground" : ""}`}>
      {children}
    </td>
  );
}

function NameTd({ name, color, index = 0 }: { name: string; color: string; index?: number }) {
  // Sticky cell must paint its own background so the cells behind it don't bleed through during horizontal scroll.
  const bg = index % 2 === 1 ? "bg-[#F5EBD6]" : "bg-card";
  return (
    <td className={`py-3 px-4 whitespace-nowrap sticky left-0 ${bg} z-10`}>
      <div className="flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full shrink-0 ring-2 ring-card" style={{ backgroundColor: color }} aria-hidden />
        <span className="font-serif font-semibold text-foreground">{name}</span>
      </div>
    </td>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono font-semibold text-foreground">{value}</span>
    </div>
  );
}

function ChartCard({ title, data, unit, domain }: {
  title: string;
  data: { name: string; value: number; color: string }[];
  unit: string;
  domain: [number, number];
}) {
  return (
    <Card>
      <CardHeader className="pb-3"><CardTitle className="font-serif text-lg">{title}</CardTitle></CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E4D6BB" />
            <XAxis dataKey="name" tick={{ fill: "#2A1E14", fontSize: 11 }} stroke="#C9B79A" />
            <YAxis domain={domain} tick={{ fill: "#6B5440", fontSize: 11 }} stroke="#C9B79A" />
            <Tooltip
              contentStyle={{ background: "#FFFBF1", border: "1px solid #E4D6BB", borderRadius: 8, color: "#2A1E14" }}
              cursor={{ fill: "rgba(194,65,12,0.08)" }}
              formatter={(v) => [`${v}${unit}`]}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
