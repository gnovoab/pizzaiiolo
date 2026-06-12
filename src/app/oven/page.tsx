import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OvenPage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Il Forno</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Gozney Arc Pizza System</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          A complete guide for cooking high-heat pizzas in the Gozney Arc, from preheat to plating.
        </p>
      </div>

      <Section number={1} title="Oven Setup">
        <Subhead>Preheat</Subhead>
        <Bullets items={[
          "Preheat for 25–35 minutes",
          "Keep flame on high during warm-up",
          "Allow full stone heat saturation before baking",
        ]} />

        <Subhead className="mt-5">Temperature Targets <span className="text-[10px] tracking-wider text-muted-foreground font-normal normal-case italic">(use your infrared gun)</span></Subhead>

        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-2">
            <div className="text-sm font-serif font-semibold flex items-center gap-2">🪨 Stone <Badge variant="outline" className="text-[9px] uppercase tracking-wider border-primary/40 text-primary">Primary Control</Badge></div>
            <ul className="text-[15px] space-y-1.5 leading-relaxed">
              <li><HighlightNumbers text="380–400°C" /> — ideal cooking zone</li>
              <li><HighlightNumbers text="370–379°C" /> → slightly slow bake, softer base</li>
              <li><HighlightNumbers text="400–410°C" /> → faster bake, more charring</li>
              <li><HighlightNumbers text="410°C+" /> → risk of burning before full cook</li>
            </ul>
            <p className="text-xs text-muted-foreground italic pt-1">👉 Always measure multiple spots on the centre cooking area.</p>
          </div>

          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4 space-y-2">
            <div className="text-sm font-serif font-semibold">🔥 Air / Flame Zone</div>
            <div className="text-[15px]"><HighlightNumbers text="430–480°C" /></div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Drives:</div>
            <ul className="text-[15px] space-y-1.5 leading-relaxed">
              <li>• Crust puffing</li>
              <li>• Browning</li>
              <li>• Cheese melt speed</li>
            </ul>
          </div>
        </div>

        <Subhead className="mt-5">Launch Rule</Subhead>
        <p className="text-[15px] text-muted-foreground mb-2 italic">Only launch when:</p>
        <Bullets items={[
          "Stone is stable in range",
          "Flame is active but not overwhelming",
          "Surface heat is even (no hot/cold patches)",
        ]} />
      </Section>

      <Section number={2} title="Dough Handling">
        <Bullets items={[
          "Dough weight: 250–270 g",
          "Stretch to 28–33 cm",
          "Keep a defined outer rim (cornicione)",
          "Do not degas edges (air = structure)",
        ]} />
      </Section>

      <Section number={3} title="Sauce">
        <Bullets items={[
          "~60 g crushed tomatoes",
          "Spread evenly in a thin circular layer",
          "Leave clean crust border",
          "Light salt only if needed",
        ]} />
      </Section>

      <Section number={4} title="Cheese">
        <Bullets items={[
          "Well-drained mozzarella",
          "Torn into small, spaced pieces",
          "Avoid full coverage (prevents steaming)",
        ]} />
      </Section>

      <Section number={5} title="Basil">
        <p className="text-sm text-muted-foreground mb-1.5">Choose one:</p>
        <Bullets items={[
          "Under cheese (protected from heat)",
          "Or added after baking (fresh aroma)",
        ]} />
      </Section>

      <Section number={6} title="Olive Oil">
        <Bullets items={[
          "Light extra-virgin drizzle",
          "Small spiral or scattered drops",
          "Keep minimal",
        ]} />
      </Section>

      <Section number={7} title="Baking Process">
        <Subhead>Launch</Subhead>
        <Bullets items={["Launch directly onto 380–400°C stone"]} />
        <Subhead className="mt-4">Cook Time</Subhead>
        <Bullets items={["60–75 seconds total"]} />
        <Subhead className="mt-4">Rotation</Subhead>
        <Bullets items={["Rotate every 15–20 seconds", "Maintain even exposure to flame"]} />

        <Subhead className="mt-4">Visual Cues</Subhead>
        <div className="grid sm:grid-cols-3 gap-3 mt-1">
          <CueCard title="Crust" body="Rapid puff in first 20–30 seconds. Even leopard spotting." />
          <CueCard title="Base" body="Firm, dry, lightly charred." />
          <CueCard title="Cheese" body="Fully melted, glossy, not watery." />
        </div>
      </Section>

      <Section number={8} title="Final Principle">
        <p className="text-[15px] text-muted-foreground mb-3 italic">Success in the Arc is about balance:</p>
        <ul className="text-[15px] space-y-2 leading-relaxed">
          <li>🪨 <strong className="font-semibold text-foreground">Stone</strong> controls the base</li>
          <li>🔥 <strong className="font-semibold text-foreground">Flame</strong> controls the top</li>
          <li>⏱️ <strong className="font-semibold text-foreground">Time</strong> is extremely short (<HighlightNumbers text="60–75 seconds" />)</li>
          <li>🍞 <strong className="font-semibold text-foreground">Dough fermentation</strong> does most of the work</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-4 italic border-l-2 border-primary/30 pl-3">
          A properly executed bake produces a light, airy, leopard-spotted crust typical of a true Pizza Margherita.
        </p>
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

function CueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3">
      <div className="text-[10px] uppercase tracking-[0.15em] text-secondary font-semibold mb-1">{title}</div>
      <p className="text-sm leading-relaxed"><HighlightNumbers text={body} /></p>
    </div>
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
