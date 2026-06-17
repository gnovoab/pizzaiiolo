import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PumpkinBasePage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">La Crema di Zucca</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Pumpkin Base</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          A silky, reduced pumpkin cream — the artisan method and the professional tin-doctoring technique.
        </p>
      </div>

      <Section number={1} title="Homemade Pumpkin Base" subtitle="The artisan method — most authentic flavor profile">
        <div className="space-y-4">
          <SubStep label="Roast">
            <HighlightNumbers text="Cube 800 g of pumpkin (Butternut/Hokkaido) into 3 cm pieces. Toss with olive oil, salt, 3 cloves of garlic (skin-on), and 2 shallots (halved). Roast on a parchment-lined, rimmed baking sheet at 200°C until deeply caramelized (30–40 min)." />
          </SubStep>
          <SubStep label="Blend">
            Squeeze the roasted garlic from skins; discard skins. Blend with the pumpkin and shallots until completely smooth.
          </SubStep>
          <SubStep label="Reduce">
            <HighlightNumbers text="Transfer the mixture to a wide sauté pan. Add 1 tbsp of butter and 1 tsp of fresh minced sage. Cook over medium-low heat for 5–8 minutes, stirring constantly, until the mixture thickens into a heavy, paste-like consistency." />
          </SubStep>
          <SubStep label="Finish">
            Season to taste. If using for savory recipes (pancetta, mushrooms), stir in a few drops of aged white balsamic at the very end to cut the sweetness.
          </SubStep>
        </div>
      </Section>

      <Section number={2} title="Ready-Made Bases" subtitle="Greci vs. Demetra">
        <Callout>
          Between the two, <strong className="text-foreground not-italic">Greci (Prontofresco) Crema di Zucca Mantovana</strong> is the industry standard for Italian pizzerias.
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Recommended</div>
            <div className="font-serif text-base font-semibold mb-1.5">Greci — Crema di Zucca Mantovana</div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <HighlightNumbers text="Highly regarded for its 84% pumpkin content and dense, velvety structure. Designed specifically for professional kitchens to withstand the high temperatures of professional ovens." />
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Alternative</div>
            <div className="font-serif text-base font-semibold mb-1.5">Demetra</div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Excellent, reliable manufacturer (often used in fine-dining). Greci&apos;s formulation is generally tighter and better suited to the specific demands of a pizza base, where moisture control is critical.
            </p>
          </div>
        </div>
      </Section>

      <Section number={3} title="Doctoring a Tinned Base" subtitle="The professional way — never use straight from the tin">
        <Callout>
          ⚠️ Both products contain moisture intended to help them serve as risotto or soup bases. For pizza, you must &quot;doctor&quot; them.
        </Callout>
        <ol className="space-y-2 mt-4">
          {[
            ["Scoop", "Scoop the required amount of cream into a pan."],
            ["Reduce", "Simmer on low heat for 3–5 minutes to evaporate excess water."],
            ["Emulsify", "Whisk in 1 tbsp of high-quality Extra Virgin Olive Oil. This makes the cream glossy and helps it \u201cset\u201d on the pizza during the bake."],
            ["Infuse", "Add fresh herbs (rosemary/sage) or a touch of cracked black pepper in the pan. This hides the canned flavour and makes the sauce taste fresh."],
          ].map(([label, body], i) => (
            <li key={label} className="text-[15px] flex gap-2.5 leading-relaxed">
              <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
              <span><strong className="font-serif text-foreground">{label}.</strong> <HighlightNumbers text={body} /></span>
            </li>
          ))}
        </ol>
      </Section>

      <Section number={4} title="Checklist for Success">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse" style={{ minWidth: 600 }}>
            <thead>
              <tr className="text-left bg-muted/60 border-b-2 border-primary/30">
                {["Step", "Action", "Why"].map((h) => (
                  <th key={h} className="py-3 px-4 text-[11px] uppercase tracking-[0.12em] font-semibold text-secondary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Consistency", "Reduce in a pan", "Prevents soggy dough / undercooked centre."],
                ["Fat", "Add EVOO or brown butter", "Creates a silky mouthfeel and emulsifies."],
                ["Acidity", "Add drops of aged balsamic", "Balances the inherent sweetness of the pumpkin."],
                ["Temperature", "Use at room temperature", "Cold sauce will shock the dough and ruin the rise."],
                ["Application", "Thin, even layer", "Keeps the pizza light and allows for proper browning."],
              ].map((row, i) => (
                <tr key={row[0]} className={`border-b border-border/60 align-top ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
                  <td className="py-3 px-4 font-serif font-semibold text-foreground whitespace-nowrap">{row[0]}</td>
                  <td className="py-3 px-4 text-foreground">{row[1]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          📝 For a <HighlightNumbers text="62%" /> hydration dough, drier is always better. If you can pull a spoon through the sauce and the &quot;trail&quot; stays clear without the sauce sliding back, it is ready for your pizza.
        </Callout>
      </Section>
    </div>
  );
}

function Section({ number, title, subtitle, children }: { number: number; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="pb-3 border-b border-border/60">
        <CardTitle className="font-serif text-xl flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">{number}</span>
          <span className="flex-1 min-w-0">
            <span className="text-foreground block leading-tight">{title}</span>
            {subtitle && <span className="block text-xs font-sans font-normal text-muted-foreground italic mt-0.5 normal-case tracking-normal">{subtitle}</span>}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-[15px] pt-4">{children}</CardContent>
    </Card>
  );
}

function SubStep({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-primary/30 pl-3">
      <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-1">{label}</div>
      <p className="text-[15px] leading-relaxed text-foreground">{children}</p>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-3">{children}</p>;
}

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|ml|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|tbsp|tsp|%))/gi);
  return <>{parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}</>;
}
