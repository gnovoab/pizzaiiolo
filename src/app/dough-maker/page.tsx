import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoughMakerPage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">L&apos;Impasto</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Dough Maker</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Classic slow-fermentation Neapolitan dough — 1000 g flour, bread-machine workflow.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3 border-b border-border/60">
          <CardTitle className="font-serif text-xl">Equipment</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 grid sm:grid-cols-3 gap-3">
          <EquipmentItem icon="🍞" name="Panasonic SD-ZX2522KXG" detail="Bread machine" />
          <EquipmentItem icon="🌾" name="Caputo Pizzeria 00" detail="Flour" />
          <EquipmentItem icon="🔥" name="Gozney Arc" detail="Gas pizza oven" />
        </CardContent>
      </Card>

      <Section number={1} title="Ingredients" subtitle="1000 g flour — Neapolitan style">
        <Bullets items={[
          "1000 g 00 flour (Caputo Pizzeria)",
          "610–630 g water (start with 620 g)",
          "25 g salt",
          "0.5–1 g dry yeast (very small pinch)",
        ]} />
        <Callout>👉 This is a classic slow-fermentation Neapolitan dough.</Callout>
      </Section>

      <Section number={2} title="Bread Machine Loading Order">
        <Subhead>In your Panasonic</Subhead>
        <ol className="space-y-1.5">
          {[
            "Pour water first (620 g)",
            "Add flour (1000 g)",
            "Add salt (25 g) on one side",
            "Add yeast (0.5–1 g) on opposite side",
          ].map((t, i) => (
            <li key={t} className="text-[15px] flex gap-2.5 leading-relaxed">
              <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
              <span><HighlightNumbers text={t} /></span>
            </li>
          ))}
        </ol>
        <Callout>💡 Keep salt and yeast separated at first — important for yeast health.</Callout>
      </Section>

      <Section number={3} title="Program">
        <p className="text-[15px] mb-2">Use the <strong className="font-serif font-semibold text-primary">Pizza Dough</strong> program. It will:</p>
        <Bullets items={["Mix", "Knead", "Stop (no proofing or baking)"]} />
      </Section>

      <Section number={4} title="After Kneading" subtitle="This is where quality is made">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Option A — Recommended</div>
            <div className="font-serif text-base font-semibold mb-1.5">Proper Neapolitan</div>
            <ul className="text-[15px] space-y-1.5 leading-relaxed">
              <li>• <HighlightNumbers text="30–60 min" /> rest at room temp</li>
              <li>• Then refrigerate <HighlightNumbers text="24–48 hours" /></li>
            </ul>
          </div>
          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Option B — Fast Pizza</div>
            <div className="font-serif text-base font-semibold mb-1.5">Same-day use</div>
            <ul className="text-[15px] space-y-1.5 leading-relaxed">
              <li>• <HighlightNumbers text="2–3 hours" /> room temp</li>
              <li>• Less flavour, weaker structure</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section number={5} title="Balling the Dough">
        <p className="text-[15px] mb-3">After fermentation, divide into <span className="font-semibold text-primary">230–250 g</span> dough balls — about <span className="font-semibold text-primary">8–10 pizzas</span>.</p>
        <Subhead>Steps</Subhead>
        <Bullets items={[
          "Cut evenly",
          "Fold into tight balls",
          "Store in covered tray/box",
          "Let rise 2–3 hours before baking",
        ]} />
      </Section>

      <Section number={6} title="Why This Ratio Works" subtitle="For 1000 g flour">
        <Bullets items={[
          "60–63% hydration → balanced for high-heat oven",
          "Low yeast → long fermentation = better flavour",
          "Salt ~2.8% → strengthens gluten without killing elasticity",
        ]} />
        <Subhead className="mt-4">This Gives</Subhead>
        <Bullets items={[
          "Airy crust (cornicione)",
          "Soft interior",
          "Good stretch resistance",
          "Fast oven performance",
        ]} />
      </Section>

      <Section number={7} title="Key Mistakes to Avoid" subtitle="Especially with 1 kg dough">
        <ul className="space-y-2">
          {[
            "Leaving dough warm too long after mixing → overproofing",
            "Using too much flour when shaping → dry crust",
            "Skipping fridge fermentation → weak flavour",
            "Not resting dough balls before baking → tight dough, no bubbles",
          ].map((t) => (
            <li key={t} className="text-[15px] flex gap-2.5 leading-relaxed">
              <span className="text-destructive mt-0.5 shrink-0" aria-hidden>❌</span>
              <span><HighlightNumbers text={t} /></span>
            </li>
          ))}
        </ul>
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

function Subhead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2 ${className}`}>{children}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((t) => (
        <li key={t} className="text-[15px] flex gap-2 leading-relaxed">
          <span className="text-primary/70 mt-1 shrink-0" aria-hidden>•</span>
          <span><HighlightNumbers text={t} /></span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mt-3">{children}</p>;
}

function EquipmentItem({ icon, name, detail }: { icon: string; name: string; detail: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3 flex items-center gap-3">
      <span className="text-2xl shrink-0" aria-hidden>{icon}</span>
      <div className="min-w-0">
        <div className="font-serif font-semibold text-sm text-foreground leading-tight">{name}</div>
        <div className="text-xs text-muted-foreground italic mt-0.5">{detail}</div>
      </div>
    </div>
  );
}

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|ml|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|%))/gi);
  return <>{parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}</>;
}
