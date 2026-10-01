import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RECIPES } from "@/lib/recipes";

export default function PumpkinBasePage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">La Crema di Zucca</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Pumpkin Base</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          The house reference for pumpkin cream — homemade preparation, the two professional options, and how each is used across the recipe system.
        </p>
      </div>

      <Section number={1} title="Homemade Pumpkin Crema" subtitle="A separate, from-scratch preparation — not a universal substitute for the commercial creams below">
        <div className="space-y-4">
          <SubStep label="Varietal Selection">
            Recommended: <strong className="font-serif text-foreground not-italic">Delica Pumpkin</strong>, Crown Prince, or Butternut Squash. Delica is preferred for its lower water content and intense natural sweetness.
          </SubStep>
          <SubStep label="Roast Until Fully Tender & Concentrated">
            <HighlightNumbers text="Cube the pumpkin, toss with EVOO, salt and pepper, and roast at 200°C (390°F) for 35–40 minutes until fully tender and caramelized at the edges." /> Roasting (rather than boiling) concentrates the natural sugars and avoids adding extra water.
          </SubStep>
          <SubStep label="Blend Until Completely Smooth">
            Blend until silky, with no fibrous texture remaining. Add hot water only if genuinely needed to get the blender moving — not as a default step.
          </SubStep>
          <SubStep label="Control Moisture">
            The finished crema should be thick and spreadable, holding its shape on a spoon. If it is loose, reduce gently in a wide pan over low heat, stirring until it tightens.
          </SubStep>
          <SubStep label="Season to the Pizza, Not to a Universal Recipe">
            Keep the base itself simple — salt, pepper, perhaps a background aromatic. Let the specific pizza&apos;s herbs, cheeses and cured meats define the final flavour, rather than building one heavily seasoned &quot;house&quot; crema that overrides every topping combination.
          </SubStep>
        </div>
        <Callout>
          This is a separate preparation path from the commercial creams below. Neither is automatically superior — choose homemade when you want full control over sweetness and seasoning, or a commercial cream when consistency and speed matter.
        </Callout>
      </Section>

      <Section number={2} title="Professional Commercial Pumpkin Creams" subtitle="Two first-class options with different flavour roles — Greci and Demetra">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Pumpkin-Forward</div>
            <div className="font-serif text-base font-semibold mb-1.5">Greci — Crema/Purée di Zucca Mantovana</div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              A relatively simple formulation — naturally sweet and velvety, with approximately <HighlightNumbers text="84%" /> pumpkin according to the product information. Useful when the pumpkin itself should be the dominant flavour, and particularly suitable when the toppings are delicate and should remain clearly identifiable.
            </p>
            <p className="text-[13px] text-muted-foreground italic mt-2">
              Assess the consistency before use. If it is too loose for the intended pizza, adjust the amount or gently reduce it — this is not a mandatory step.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Seasoned & Savoury</div>
            <div className="font-serif text-base font-semibold mb-1.5">Demetra — Crema di Zucca</div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              A prepared, seasoned pumpkin cream rather than a neutral purée — approximately <HighlightNumbers text="68%" /> pumpkin according to the product specification, with sautéed onion and leek, white wine, and additional seasoning built into the formulation. More savoury and complex than a simple pumpkin-forward purée, and particularly useful when the pumpkin base itself should contribute savoury depth to the finished pizza.
            </p>
            <p className="text-[13px] text-muted-foreground italic mt-2">
              Demetra is already seasoned, so additional salt should not automatically be added. Assess the consistency before building the pizza. Use directly when the texture is suitable for spreading; if the cream is too loose for the intended application, reduce gently or adjust the quantity.
            </p>
          </div>
        </div>
      </Section>

      <Section number={3} title="Greci vs Demetra" subtitle="The two products behave differently — this is not a ranking">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse" style={{ minWidth: 640 }}>
            <thead>
              <tr className="text-left bg-muted/60 border-b-2 border-primary/30">
                {["", "Greci", "Demetra"].map((h) => (
                  <th key={h} className="py-3 px-4 text-[11px] uppercase tracking-[0.12em] font-semibold text-secondary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Pumpkin content", "Approximately 84%", "Approximately 68%"],
                ["Character", "Pumpkin-forward, naturally sweet", "More seasoned and savoury"],
                ["Formulation", "Simpler pumpkin preparation", "Prepared cream with onion, leek, white wine and additional seasoning"],
                ["Flavour role", "Lets the toppings dominate", "Pumpkin contributes more of the seasoning and savoury background"],
                ["Texture", "Dense, velvety", "Smooth prepared cream"],
                ["Starting house pizza portion", "~65–75g", "~60–70g"],
                ["Salt", "Taste and adjust according to recipe", "Already seasoned; do not automatically add salt"],
                ["Best applications", "Delicate toppings, mushrooms, truffle, cleaner pumpkin profiles", "Guanciale, sausage, rosemary, Pecorino and more savoury combinations"],
              ].map((row, i) => (
                <tr key={row[0]} className={`border-b border-border/60 align-top ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
                  <td className="py-3 px-4 font-serif font-semibold text-foreground whitespace-nowrap">{row[0]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[1]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section number={4} title="How to Choose Between Them" subtitle="Flavour-design guidance, not a quality ranking">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="font-serif text-base font-semibold mb-2">Choose Greci when:</div>
            <ul className="space-y-1 list-disc pl-5 text-[14px] text-muted-foreground">
              <li>you want a cleaner pumpkin flavour</li>
              <li>pumpkin sweetness should be prominent</li>
              <li>the toppings are delicate</li>
              <li>you are using truffle</li>
              <li>you want mushrooms to remain clearly identifiable</li>
              <li>you want the base to behave more like a pumpkin purée</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="font-serif text-base font-semibold mb-2">Choose Demetra when:</div>
            <ul className="space-y-1 list-disc pl-5 text-[14px] text-muted-foreground">
              <li>you want a more savoury pumpkin profile</li>
              <li>the pizza contains guanciale</li>
              <li>the pizza contains sausage</li>
              <li>rosemary is prominent</li>
              <li>Pecorino is part of the finish</li>
              <li>you want onion/leek/wine seasoning already integrated into the base</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm border-collapse" style={{ minWidth: 560 }}>
            <thead>
              <tr className="text-left bg-muted/60 border-b-2 border-primary/30">
                {["Combination", "Preferred base", "Why"].map((h) => (
                  <th key={h} className="py-3 px-4 text-[11px] uppercase tracking-[0.12em] font-semibold text-secondary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Guanciale + Rosemary + Pecorino", "Demetra", "Its seasoned savoury profile complements guanciale, rosemary and Pecorino."],
                ["Sausage", "Demetra", "A strong option, particularly where rosemary or other savoury aromatics are present."],
                ["Mushrooms", "Either", "Greci for a cleaner pumpkin/mushroom profile; Demetra for a more savoury prepared-sauce profile."],
                ["Truffle", "Greci", "The cleaner pumpkin profile leaves more room for the truffle aroma."],
                ["Gorgonzola", "Either", "Greci for a cleaner sweet pumpkin/Gorgonzola contrast; Demetra for a more savoury, complex base."],
                ["Spicy salami / 'nduja", "Demetra", "Its savoury seasoning can support the cured meat and chilli."],
              ].map((row, i) => (
                <tr key={row[0]} className={`border-b border-border/60 align-top ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
                  <td className="py-3 px-4 font-serif font-semibold text-foreground">{row[0]}</td>
                  <td className="py-3 px-4 text-foreground whitespace-nowrap">{row[1]}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout>
          Demetra itself publishes pizza applications using its pumpkin cream, in combinations including Fior di Latte, porcini, sausage, rosemary, spicy salami, olives, Pecorino, roasted onion and Chianina ragù — establishing that Demetra is designed and used as a pizza ingredient, not only a kitchen base. We do not copy their recipes. Published manufacturer examples commonly use smaller quantities than this site&apos;s ~70g house starting point; the site&apos;s 70g quantity is a deliberate pumpkin-forward house formulation rather than a manufacturer&apos;s prescribed dose.
        </Callout>
      </Section>

      <Section number={5} title="Pizza Application & House Dosing" subtitle="The house starting point and how to adjust it">
        <div className="space-y-4">
          <SubStep label="House Starting Point">
            For a <HighlightNumbers text="280g" /> dough ball / <HighlightNumbers text="30–32cm" /> pizza: <strong className="font-serif text-foreground not-italic">~70g pumpkin cream</strong>. This is the site&apos;s house recipe-system starting point — a deliberate pumpkin-forward application, not necessarily the manufacturer&apos;s recommended quantity.
          </SubStep>
          <SubStep label="Consistency Over a Fixed Number">
            Consistency matters more than blindly following 70g. If the commercial cream is particularly loose, use slightly less or adjust its consistency; if it is dense, 70g can be spread thinly and evenly. The goal: complete coverage of the centre, no heavy pool of cream, no excess moisture, a clean <HighlightNumbers text="1.5–2cm" /> cornicione, and enough pumpkin flavour to remain identifiable after baking. 70g is not a universal requirement — recipes can intentionally use different quantities when documented.
          </SubStep>
          <SubStep label="Assessing & Seasoning a Commercial Cream">
            Commercial pumpkin creams are already prepared products. Taste and assess the specific product before seasoning or adjusting it. The final pizza recipe determines whether additional salt, cheese, oil or aromatics are appropriate — this is particularly important for Demetra, which is already seasoned.
          </SubStep>
          <SubStep label="Cheese & Flavour Pairings">
            Pumpkin cream is naturally sweet, so it pairs well with toppings that give contrast: smoked Provola di Agerola or well-drained Fior di Latte for the cheese; Salsiccia Fresca, &apos;Nduja di Spilinga, crispy guanciale or pancetta for cured meats; Pecorino Romano or aged Cacioricotta grated post-bake for a sharp finish; fresh rosemary or fried sage for herbs.
          </SubStep>
          <SubStep label="Bake Parameters">
            Stone floor target <HighlightNumbers text="430°C–440°C" />, dome <HighlightNumbers text="450°C–480°C" />. Manage the top flame dynamically after launch so the cream heats through and the cheese melts cleanly without scorching; rotate regularly for <HighlightNumbers text="75–90 seconds" /> until the cornicione is fully inflated and leopard-spotted. Rest briefly on a wooden board before any post-bake staging (crispy cured meats, microplaned hard cheese, finishing oil).
          </SubStep>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-2">
          For dough blend recommendations, see the{" "}
          <Link href="/flour-guide" className="text-primary underline underline-offset-2 hover:text-primary/80">Flour Guide</Link> and the{" "}
          <Link href="/spiral-mixer" className="text-primary underline underline-offset-2 hover:text-primary/80">Spiral Mixer</Link> page for the mixing protocol.
        </p>
      </Section>

      <Section number={6} title="Pumpkin Recipes Using This Base" subtitle="Preferred base shown for each — see the full recipe for exact quantities">
        <div className="grid sm:grid-cols-2 gap-3">
          {PUMPKIN_RECIPE_BASES.map((r) => {
            const recipe = RECIPES.find((x) => x.id === r.id);
            return (
              <RecipeBaseCard
                key={r.id}
                name={recipe?.name ?? r.id}
                style={recipe?.style}
                preferredBase={r.preferredBase}
              />
            );
          })}
        </div>
        <p className="text-muted-foreground text-sm mt-4">
          See the full build, bake parameters and finishing notes for each on the{" "}
          <Link href="/recipes" className="text-primary underline underline-offset-2 hover:text-primary/80">Recipes</Link> page, under Pumpkin Base.
        </p>
      </Section>

    </div>
  );
}

const PUMPKIN_RECIPE_BASES: { id: string; preferredBase: string }[] = [
  { id: "zucca-guanciale-e-rosmarino", preferredBase: "Demetra — its onion, leek and wine seasoning complements the guanciale, rosemary and Pecorino." },
  { id: "zucca-salsiccia-e-provola", preferredBase: "Demetra — its savoury, herb-forward depth complements the pork sausage." },
  { id: "zucca-e-nduja", preferredBase: "Demetra — its savoury seasoning supports the 'Nduja's heat and cured-pork intensity." },
  { id: "zucca-gorgonzola-e-noci", preferredBase: "Greci — its cleaner, naturally sweet profile pairs with the honey drizzle and Gorgonzola Dolce." },
  { id: "sfiziosa-basilico", preferredBase: "Greci — its clean, naturally sweet profile lets the sautéed mushrooms and pancetta lead." },
  { id: "sfiziosa", preferredBase: "Greci — the cleaner pumpkin profile leaves more room for the black truffle aroma." },
  { id: "mantovana", preferredBase: "Demetra — its onion/leek/wine seasoning echoes the pickled red onions and Gorgonzola." },
  { id: "norcina", preferredBase: "Demetra — its savoury seasoning complements the fennel sausage and porcini." },
];

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

function RecipeBaseCard({ name, style, preferredBase }: { name: string; style?: string; preferredBase: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <div className="font-serif text-base font-semibold text-foreground">{name}</div>
      {style && <div className="text-[13px] text-muted-foreground italic mt-0.5">{style}</div>}
      <div className="text-[13px] text-muted-foreground mt-2">
        <strong className="font-serif text-foreground not-italic">Preferred base:</strong> {preferredBase}
      </div>
    </div>
  );
}

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|ml|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|tbsp|tsp|%))/gi);
  return <>{parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}</>;
}
