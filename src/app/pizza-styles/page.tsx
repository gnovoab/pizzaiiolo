import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const styles: { name: string; flour: string; hydration: string; fermentation: string; stoneTemp: string; bakeTime: string }[] = [
  { name: "Neapolitan Pizza", flour: "00 flour", hydration: "60–65%", fermentation: "24 hrs", stoneTemp: "450°C", bakeTime: "60–90 sec" },
  { name: "Contemporary Neapolitan Pizza", flour: "Strong 00 flour", hydration: "65–75%", fermentation: "48 hrs", stoneTemp: "420°C", bakeTime: "90–120 sec" },
  { name: "Roman Pizza (Tonda)", flour: "Strong flour or 00", hydration: "55–60%", fermentation: "48 hrs", stoneTemp: "375°C", bakeTime: "2–3 min" },
  { name: "New York-Style Pizza", flour: "Bread flour", hydration: "62–65%", fermentation: "48 hrs cold ferment", stoneTemp: "330°C", bakeTime: "5–8 min" },
  { name: "New Haven Pizza", flour: "Bread flour", hydration: "60–65%", fermentation: "48 hrs cold ferment", stoneTemp: "350°C", bakeTime: "4–7 min" },
  { name: "Detroit-Style Pizza", flour: "Bread flour", hydration: "70–80%", fermentation: "24 hrs", stoneTemp: "250°C", bakeTime: "10–15 min" },
  { name: "Sicilian Pizza", flour: "Bread flour", hydration: "65–75%", fermentation: "24 hrs", stoneTemp: "250°C", bakeTime: "15–22 min" },
  { name: "Grandma Pizza", flour: "Bread flour", hydration: "65–75%", fermentation: "24 hrs", stoneTemp: "275°C", bakeTime: "8–12 min" },
  { name: "Chicago Thin-Crust Pizza", flour: "Bread flour", hydration: "50–60%", fermentation: "24 hrs", stoneTemp: "290°C", bakeTime: "6–10 min" },
  { name: "St. Louis-Style Pizza", flour: "Bread flour", hydration: "50–55%", fermentation: "0–6 hrs", stoneTemp: "290°C", bakeTime: "4–6 min" },
  { name: "Pinsa", flour: "Wheat + rice + soy blend", hydration: "75–85%", fermentation: "72 hrs", stoneTemp: "350°C", bakeTime: "3–5 min" },
];

export default function PizzaStylesPage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">I Tipi di Pizza</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Pizza Styles</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          A quick-reference guide to dough characteristics across popular pizza styles.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl">Dough &amp; Bake Reference</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] sm:text-[14px]">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-2.5 pr-3 font-semibold text-foreground whitespace-nowrap">Style</th>
                  <th className="pb-2.5 pr-3 font-semibold text-foreground whitespace-nowrap">Flour</th>
                  <th className="pb-2.5 pr-3 font-semibold text-foreground whitespace-nowrap">Hydration</th>
                  <th className="pb-2.5 pr-3 font-semibold text-foreground whitespace-nowrap">Fermentation</th>
                  <th className="pb-2.5 pr-3 font-semibold text-foreground whitespace-nowrap">Stone Temp</th>
                  <th className="pb-2.5 font-semibold text-foreground whitespace-nowrap">Bake Time</th>
                </tr>
              </thead>
              <tbody>
                {styles.map((s, i) => (
                  <tr key={s.name} className={i < styles.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="py-2.5 pr-3 font-medium text-foreground whitespace-nowrap">{s.name}</td>
                    <td className="py-2.5 pr-3 text-muted-foreground whitespace-nowrap">{s.flour}</td>
                    <td className="py-2.5 pr-3 whitespace-nowrap"><HighlightNumbers text={s.hydration} /></td>
                    <td className="py-2.5 pr-3 text-muted-foreground whitespace-nowrap">{s.fermentation}</td>
                    <td className="py-2.5 pr-3 whitespace-nowrap"><HighlightNumbers text={s.stoneTemp} /></td>
                    <td className="py-2.5 whitespace-nowrap"><HighlightNumbers text={s.bakeTime} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-3 border-b border-border/60">
            <CardTitle className="font-serif text-lg">Flour Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-3 font-semibold text-foreground whitespace-nowrap">Style Family</th>
                    <th className="pb-2 font-semibold text-foreground whitespace-nowrap">Recommended Flour</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Neapolitan", "Strong 00 (12.5–13% protein)"],
                    ["Contemporary Neapolitan", "Strong 00 (13%+ protein)"],
                    ["New York / New Haven", "Bread flour (13–14% protein)"],
                    ["Detroit / Sicilian / Grandma", "Bread flour (12.5–14% protein)"],
                    ["Roman Tonda", "Strong wheat flour or 00"],
                    ["Pinsa", "Dedicated pinsa blend"],
                  ].map(([family, flour], i) => (
                    <tr key={family} className={i < 5 ? "border-b border-border/60" : ""}>
                      <td className="py-2 pr-3 text-foreground font-medium whitespace-nowrap">{family}</td>
                      <td className="py-2 text-muted-foreground whitespace-nowrap">{flour}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3 border-b border-border/60">
            <CardTitle className="font-serif text-lg">Temperature Guide</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-3 font-semibold text-foreground whitespace-nowrap">Goal</th>
                    <th className="pb-2 font-semibold text-foreground whitespace-nowrap">Temp</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Fast authentic Neapolitan", "450°C"],
                    ["Contemporary Neapolitan", "420°C"],
                    ["Crispy Roman", "375°C"],
                    ["New York slice shop style", "330°C"],
                    ["New Haven charred crust", "350°C"],
                    ["Detroit pan pizza", "250°C"],
                    ["Sicilian sheet-pan", "250°C"],
                  ].map(([goal, temp], i) => (
                    <tr key={goal} className={i < 6 ? "border-b border-border/60" : ""}>
                      <td className="py-2 pr-3 text-muted-foreground whitespace-nowrap">{goal}</td>
                      <td className="py-2 whitespace-nowrap"><HighlightNumbers text={temp} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="border-l-2 border-primary/30 pl-4 py-1 text-sm text-muted-foreground italic leading-relaxed">
        Temperatures assume a wood-fired or gas pizza oven. For home ovens, use the highest setting and adjust bake times accordingly.
      </div>
    </div>
  );
}

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|ml|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|%))/gi);
  return <>{parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}</>;
}
