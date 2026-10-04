import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TomatoSaucePage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Il Sugo di Pomodoro</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Tomato Sauce</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Three tomato systems for Neapolitan and contemporary pizza. The tomato determines not only flavour, but also texture, water management, sweetness, acidity and how the topping behaves in a high-temperature oven.
        </p>
      </div>

      <Section number={1} title="San Marzano DOP" subtitle="The classic Neapolitan tomato base">
        <div className="space-y-4">
          <SubStep label="Character">
            San Marzano has a balanced combination of tomato acidity, savouriness and natural sweetness, with relatively soft flesh and plenty of juice. It is the most versatile of the three and is therefore the default tomato for a traditional pizza sauce.
          </SubStep>
          <SubStep label="Preparation — 100g peeled San Marzano + 1g fine salt">
            <ol className="space-y-1 list-decimal pl-5 text-[14px] text-muted-foreground">
              <li>Remove the tomatoes from their juice.</li>
              <li>Place them in a bowl.</li>
              <li>Crush gently by hand.</li>
              <li>Add <HighlightNumbers text="1g" /> salt per <HighlightNumbers text="100g" /> tomato.</li>
              <li>Mix gently.</li>
              <li>Keep the sauce raw — do not cook or reduce it before the pizza bake.</li>
            </ol>
            <p className="text-sm text-muted-foreground italic mt-2">Do not blend unless a specific recipe calls for a smoother texture.</p>
          </SubStep>
          <SubStep label="Texture">
            Hand-crushed, loose and spoonable. Small pieces are desirable, but the tomatoes should form a coherent sauce rather than remain as separate tomato pieces.
          </SubStep>
          <SubStep label="Typical Pizza Portion">
            <HighlightNumbers text="60–80g" /> per <HighlightNumbers text="30–32cm" /> pizza, depending on the recipe and topping load.
          </SubStep>
          <SubStep label="Best Suited To">
            <ul className="space-y-1 list-disc pl-5 text-[14px] text-muted-foreground">
              <li>Marinara, Margherita, Amatriciana</li>
              <li>&apos;Nduja &amp; Hot Honey, Prosciutto e Funghi, Capricciosa</li>
              <li>other pizzas where tomato is the main continuous base</li>
            </ul>
          </SubStep>
        </div>
        <Callout><strong className="font-serif text-foreground not-italic">Pizzaiiolo rule:</strong> San Marzano = sauce.</Callout>
      </Section>

      <Section number={2} title="Datterini" subtitle="Sweeter, fruitier and more delicate than San Marzano">
        <div className="space-y-4">
          <SubStep label="Character">
            Datterini are small, elongated tomatoes with naturally high perceived sweetness and a concentrated fruity flavour. Excellent when you want the tomato to taste noticeably sweeter and more aromatic without turning the pizza into a heavy tomato sauce. Because sweetness and acidity vary between products, do not automatically apply the San Marzano <HighlightNumbers text="1g" />/<HighlightNumbers text="100g" /> salt rule — taste first.
          </SubStep>
          <SubStep label="Preparation for Pizza Sauce">
            <ol className="space-y-1 list-decimal pl-5 text-[14px] text-muted-foreground">
              <li>Drain the Datterini briefly.</li>
              <li>Keep some of their natural tomato juice.</li>
              <li>Crush gently by hand.</li>
              <li>Leave some small pieces.</li>
              <li>Taste before adding salt.</li>
              <li>If seasoning is required, add salt gradually rather than automatically using <HighlightNumbers text="1g" />/<HighlightNumbers text="100g" />.</li>
            </ol>
          </SubStep>
          <SubStep label="Starting Point">
            <HighlightNumbers text="0g" /> salt initially. If the tomato tastes flat rather than naturally balanced, season gradually. A useful working range is approximately <HighlightNumbers text="0–0.8g" /> salt / <HighlightNumbers text="100g" /> tomato, depending on the product and the recipe.
          </SubStep>
          <SubStep label="Texture">
            Rustic crushed sauce with small pieces. Do not aggressively blend into a completely smooth passata unless the individual recipe specifically requires it.
          </SubStep>
          <SubStep label="Typical Pizza Portion">
            <HighlightNumbers text="60–75g" /> per <HighlightNumbers text="30–32cm" /> pizza.
          </SubStep>
          <SubStep label="Best Suited To">
            <ul className="space-y-1 list-disc pl-5 text-[14px] text-muted-foreground">
              <li>Cosacca, Margherita, lighter tomato pizzas</li>
              <li>pizzas where tomato sweetness should remain prominent</li>
              <li>contemporary pizzas where a sweeter tomato profile balances salty cheese or cured meats</li>
            </ul>
          </SubStep>
        </div>
        <Callout><strong className="font-serif text-foreground not-italic">Pizzaiiolo rule:</strong> Datterini = sweet, fruity crushed tomato.</Callout>
      </Section>

      <Section number={3} title="Pomodorini del Piennolo del Vesuvio DOP" subtitle="Intense, concentrated Vesuvian cherry tomato">
        <div className="space-y-4">
          <SubStep label="Character">
            Piennolo del Vesuvio DOP is fundamentally different from a conventional tomato sauce. The tomatoes are small, firm and concentrated, with an intense tomato flavour, pronounced sweetness and acidity, and a distinctive dense texture. The preserved whole-fruit product is intended to retain the character of the individual tomatoes.
          </SubStep>
          <SubStep label="Important Distinction">
            A whole Piennolo DOP product is not the same thing as Piennolo passata. If the product contains whole cherry tomatoes, do not treat it like San Marzano sauce.
          </SubStep>
          <SubStep label="Preparation for Pizza">
            <ol className="space-y-1 list-decimal pl-5 text-[14px] text-muted-foreground">
              <li>Remove the whole tomatoes from the preserving juice.</li>
              <li>Drain excess liquid.</li>
              <li>Cut each tomato in half lengthwise.</li>
              <li>If particularly large, quarter it.</li>
              <li>Distribute the pieces over the pizza.</li>
              <li>Gently press some pieces with your fingers if additional pulp is desired.</li>
            </ol>
            <p className="text-sm text-muted-foreground italic mt-2">Do not turn the entire quantity into a smooth sauce.</p>
          </SubStep>
          <SubStep label="Texture">
            Whole or halved tomato pieces. The firm flesh is part of the appeal. During baking, the pieces soften and concentrate while retaining more identifiable tomato texture than a hand-crushed San Marzano sauce.
          </SubStep>
          <SubStep label="Typical Pizza Portion">
            <HighlightNumbers text="30–60g" /> per <HighlightNumbers text="30–32cm" /> pizza, depending on whether another tomato sauce is also present. When combined with San Marzano, use Piennolo as the secondary tomato rather than creating a second sauce layer.
          </SubStep>
          <SubStep label="Best Suited To">
            <ul className="space-y-1 list-disc pl-5 text-[14px] text-muted-foreground">
              <li>Margherita Duo, Piennolo e Bufala, Margherita variants</li>
              <li>Cetarese</li>
              <li>pizzas where concentrated tomato pieces are desirable</li>
              <li>combinations with Fior di Latte, Bufala, aged cheese, basil and EVOO</li>
            </ul>
          </SubStep>
        </div>
        <Callout><strong className="font-serif text-foreground not-italic">Pizzaiiolo rule:</strong> Piennolo = tomato pieces, not default sauce.</Callout>
      </Section>

      <Section number={4} title="Tomato System at a Glance" subtitle="Comparing the three systems">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse" style={{ minWidth: 720 }}>
            <thead>
              <tr className="text-left bg-muted/60 border-b-2 border-primary/30">
                {["Tomato", "Primary role", "Preparation", "Texture", "Flavour"].map((h) => (
                  <th key={h} className="py-3 px-4 text-[11px] uppercase tracking-[0.12em] font-semibold text-secondary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["San Marzano DOP", "Main sauce", "Hand-crushed + salt", "Loose sauce", "Balanced, savoury, acidic, naturally sweet"],
                ["Datterini", "Sweet tomato sauce", "Lightly crushed + season to taste", "Rustic crushed", "Sweet, fruity, aromatic"],
                ["Piennolo del Vesuvio DOP", "Concentrated tomato topping", "Drain + halve", "Distinct pieces", "Intense, concentrated, sweet-tart"],
              ].map((row, i) => (
                <tr key={row[0]} className={`border-b border-border/60 align-top ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
                  <td className="py-3 px-4 font-serif font-semibold text-foreground whitespace-nowrap">{row[0]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[1]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[2]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[3]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section number={5} title="Combination Rule" subtitle="When using two tomato types on the same pizza, give them different jobs">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="font-serif text-base font-semibold mb-2">Piennolo e Bufala</div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong className="font-serif text-foreground not-italic">San Marzano</strong> → continuous sauce foundation.<br />
              <strong className="font-serif text-foreground not-italic">Piennolo</strong> → concentrated tomato pieces.
            </p>
            <p className="text-[13px] text-muted-foreground italic mt-2">This creates two different tomato textures and flavour profiles rather than simply mixing two varieties into one sauce.</p>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="font-serif text-base font-semibold mb-2">Margherita Duo</div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              <strong className="font-serif text-foreground not-italic">Red Piennolo + yellow tomato</strong> → distinct tomato pieces / zones.
            </p>
            <p className="text-[13px] text-muted-foreground italic mt-2">Keep their identities visible rather than blending them together.</p>
          </div>
        </div>
      </Section>

      <Section number={6} title="General Rules" subtitle="Do and don't">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="font-serif text-base font-semibold mb-2">Do</div>
            <ul className="space-y-1 list-disc pl-5 text-[14px] text-muted-foreground">
              <li>Taste the tomato before seasoning.</li>
              <li>Drain according to the tomato&apos;s water content.</li>
              <li>Use hand crushing when a rustic texture is desirable.</li>
              <li>Keep whole Piennolo tomatoes intact or halved.</li>
              <li>Adjust tomato quantity according to topping load.</li>
              <li>Treat each tomato variety according to its own characteristics.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="font-serif text-base font-semibold mb-2">Don&apos;t</div>
            <ul className="space-y-1 list-disc pl-5 text-[14px] text-muted-foreground">
              <li>Apply the San Marzano salt ratio automatically to every tomato.</li>
              <li>Blend Piennolo into sauce when using whole Piennolo tomatoes.</li>
              <li>Add sugar to compensate for acidity before tasting.</li>
              <li>Cook or reduce the tomato sauce before baking unless a specific recipe calls for it.</li>
              <li>Treat tomato juice and tomato pulp as interchangeable.</li>
              <li>Combine multiple tomato varieties without giving each one a deliberate role.</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
        <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">The Simple Rule</div>
        <p className="font-serif text-lg text-foreground leading-relaxed">
          San Marzano → sauce.<br />
          Datterini → sweet, fruity crushed sauce.<br />
          Piennolo → concentrated tomato pieces.
        </p>
      </div>

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
      <div className="text-[15px] leading-relaxed text-foreground">{children}</div>
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
