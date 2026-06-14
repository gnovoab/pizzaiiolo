import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FridgePage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Il Frigo</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Cold Fermentation &amp; Freezer Storage</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          A Pro-Home workflow for cold-fermenting and freezing dough balls to maximize flavor and schedule flexibility.
        </p>
      </div>

      <div className="border-l-2 border-primary/30 pl-4 py-1 text-sm text-muted-foreground italic leading-relaxed">
        <HighlightNumbers text="Optimized for high-hydration, long-fermentation dough using 00 flour (e.g. Caputo Pizzeria) for maximum flavor development and structural integrity." />
      </div>

      <Section number={1} title="Preparation &mdash; The Active Phase">
        <Subhead>Bulk Fermentation</Subhead>
        <Bullets items={[
          "Mix your dough and allow it to ferment at room temperature for 3 hours",
          "This kicks off yeast activity and begins gluten development",
        ]} />

        <Subhead className="mt-5">Divide &amp; Ball</Subhead>
        <Bullets items={[
          "Divide the bulk dough into equal portions (e.g. 250g–270g)",
          "Ball them tightly to build surface tension",
          "A tight ball is the key to a beautiful, airy crust",
        ]} />
      </Section>

      <Section number={2} title="Fermentation &amp; Selection &mdash; The Decision Phase">
        <p className="text-[15px] text-muted-foreground mb-3 italic">Choose your path:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-2">
            <div className="text-sm font-serif font-semibold flex items-center gap-2">🍕 For &ldquo;Now&rdquo; <span className="text-[10px] tracking-wider text-muted-foreground font-normal normal-case italic">(eat in 48 h)</span></div>
            <Bullets items={[
              "Place balls into individual, lightly oiled, airtight containers",
              "Refrigerate for 48 hours",
            ]} />
          </div>
          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4 space-y-2">
            <div className="text-sm font-serif font-semibold">🧊 For &ldquo;Later&rdquo;</div>
            <Bullets items={[
              "Place balls into individual, airtight containers",
              "Refrigerate for only 24 hours",
              "Then move them to the freezer",
            ]} />
          </div>
        </div>
      </Section>

      <Section number={3} title="Freezer Management &mdash; The Pause Phase">
        <Subhead>Freezing</Subhead>
        <Bullets items={[
          "Keep containers in the coldest part of your freezer",
          "Goal: reach freezing temperatures as quickly as possible",
          "Fast freezing prevents large ice crystals from damaging gluten structure",
        ]} />

        <Subhead className="mt-5">Labeling</Subhead>
        <Bullets items={[
          "Always mark the container with the date it entered the freezer",
          "Use your dough within 2 weeks for the best results",
        ]} />
      </Section>

      <Section number={4} title="Recovery &mdash; The Thaw &amp; Wake-Up Phase">
        <p className="text-[15px] text-muted-foreground mb-3 italic border-l-2 border-destructive/40 pl-3">
          <strong className="text-foreground not-italic">Crucial:</strong> Never thaw dough at room temperature.
        </p>

        <Subhead>Fridge Thaw &mdash; 24 Hours</Subhead>
        <Bullets items={[
          "Move the frozen ball from the freezer to the refrigerator exactly 24 hours before you plan to bake",
          "This allows gradual thawing, preserving yeast and gluten structure",
        ]} />

        <Subhead className="mt-5">Final Proof &mdash; 2&ndash;3 Hours</Subhead>
        <Bullets items={[
          "Remove dough from the fridge and let it sit at room temperature for 2–3 hours",
          "Brings the dough to a workable temperature",
          "Lets it relax so it can be stretched without tearing",
        ]} />
      </Section>

      <Section number={5} title="Pro Tips">
        <Subhead>The &ldquo;Poke&rdquo; Test</Subhead>
        <Bullets items={[
          "After the final proof, gently poke the dough",
          "Leaves an indent that slowly springs back &rarr; perfectly proofed, ready to stretch",
          "Stays indented &rarr; over-proofed",
          "Springs back instantly &rarr; needs more time",
        ]} />

        <Subhead className="mt-5">Why Balling Matters</Subhead>
        <Bullets items={[
          "Balling before the fridge or freezer is the secret to avoiding a pancake crust",
          "It traps gas inside the dough rather than letting it deflate when handled later",
        ]} />

        <Subhead className="mt-5">Flour Choice</Subhead>
        <Bullets items={[
          "High-quality 00 flour (like Caputo Pizzeria) is essential for long fermentation times",
          "Lower-protein flours break down too quickly",
        ]} />
      </Section>
    </div>
  );
}

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="pb-3 border-b border-border/60">
        <CardTitle className="font-serif text-xl flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-base shadow-sm shrink-0">{number}</span>
          <span className="text-foreground">{title}</span>
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

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|%))/gi);
  return (
    <>
      {parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}
    </>
  );
}
