import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

      <Section number={5} title="Pumpkin Cream Base Preparation Guide" subtitle="Choose your brand and prepare the base in a small bowl prior to pizza assembly">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Option A</div>
            <div className="font-serif text-base font-semibold mb-1.5">
              Greci Crema di Zucca <span className="font-sans font-normal text-sm text-muted-foreground italic">(Pure &amp; Sweet)</span>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Mix <HighlightNumbers text="75 g" /> Greci Pumpkin Cream + <HighlightNumbers text="1 tsp" /> EVOO + <HighlightNumbers text="1 tsp" /> warm water + small pinch fine sea salt (<HighlightNumbers text="~0.5 g" />) + 1 crack black pepper.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Option B</div>
            <div className="font-serif text-base font-semibold mb-1.5">
              Demetra Crema di Zucca <span className="font-sans font-normal text-sm text-muted-foreground italic">(Savory, Onion/Leek Notes)</span>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Mix <HighlightNumbers text="75 g" /> Demetra Pumpkin Cream + <HighlightNumbers text="1 tsp" /> EVOO + <HighlightNumbers text="1 tsp" /> warm water + <HighlightNumbers text="1 tsp" /> microplaned Pecorino Romano + 1 crack black pepper.
            </p>
            <p className="text-[13px] text-muted-foreground italic mt-2">(No extra sea salt needed as Demetra is pre-seasoned).</p>
          </div>
        </div>
      </Section>

      <Section number={6} title="Brand-Specific Preparation Guides" subtitle="Pick a tab — Greci or Demetra — for seasoning the crema di zucca on a 67% hydration Poolish dough">
        <Tabs defaultValue="greci">
          <TabsList>
            <TabsTrigger value="greci">🎃 Greci Crema di Zucca</TabsTrigger>
            <TabsTrigger value="demetra">🎃 Demetra Crema di Zucca</TabsTrigger>
          </TabsList>

          <TabsContent value="greci" className="space-y-5 mt-4">
            <p className="text-muted-foreground leading-relaxed">
              To create a rich, velvety pumpkin pizza base using Greci Crema di Zucca (Pumpkin Cream), you need to balance its natural sweetness with salt, fat, and acid so it tastes like a savory pizza sauce rather than a pumpkin pie filling. Greci&apos;s cream is concentrated and smooth, so it requires a quick seasoning tweak before spreading on your <HighlightNumbers text="67%" /> hydration Poolish dough.
            </p>

            <div className="space-y-3">
              <SubStep label="Step 1 — Season & Adjust the Crema di Zucca">
                <span className="block mb-2">Mix your base sauce using these proportions per pizza:</span>
                <ul className="space-y-1 list-disc pl-5">
                  <li><HighlightNumbers text="Greci Pumpkin Cream: 70–80 g" /></li>
                  <li><HighlightNumbers text="Extra Virgin Olive Oil: 1 teaspoon (~5 g)" /> — softens the texture and helps it spread smoothly</li>
                  <li><HighlightNumbers text="Fine Sea Salt: A small pinch (~0.5 g)" /> — essential to cut the natural sweetness</li>
                  <li>Black Pepper: A light crack of fresh black pepper</li>
                  <li>Optional Savory Kick: A pinch of finely grated Pecorino Romano whisked directly into the cream</li>
                </ul>
              </SubStep>
              <Callout>
                Consistency Check: The cream should be as spreadable as smooth tomato sauce. If it feels too thick straight out of the tin, whisk in <HighlightNumbers text="1 teaspoon" /> of warm water or milk.
              </Callout>
            </div>
          </TabsContent>

          <TabsContent value="demetra" className="space-y-5 mt-4">
            <p className="text-muted-foreground leading-relaxed">
              Demetra Crema di Zucca is a pre-seasoned, foodservice-grade product formulated with pumpkin (68%), sunflower oil, sautéed onion, leek, white wine, spices, and vegetable fibers/starches as a natural thickener. Because Demetra already builds a savory aromatic base (onion, leek, and wine) right into the tin, your goal is not to cook it, but to adjust its density, salinity balance, and thermal behavior for high-heat baking in your Gozney.
            </p>

            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <div className="font-mono text-[13px] leading-relaxed text-center space-y-1.5">
                <div className="font-semibold text-foreground">[Demetra Crema di Zucca (80g)]</div>
                <div className="text-primary">↓</div>
                <div>1. Loosen &amp; Emulsify → + 1 tsp Warm Water or Milk</div>
                <div className="text-muted-foreground italic text-xs">(Loosens potato starch)</div>
                <div className="text-primary">↓</div>
                <div>2. Sharp Salt Contrast → + 1 tsp Microplaned Pecorino Romano</div>
                <div className="text-primary">↓</div>
                <div>3. Heat-Protection Fat → + 1 tsp Extra Virgin Olive Oil</div>
                <div className="text-primary">↓</div>
                <div>4. Aromatic Sharpness → Light Crack of Fresh Black Pepper</div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              <HighlightNumbers text="Measure out 80 g" /> of Demetra Crema di Zucca into a small bowl and adjust it following these exact steps (per 1 pizza / ~80 g base):
            </p>

            <div className="space-y-4">
              <SubStep label="Step 1 — Loosen the Starches (Adjust Hydration)">
                Because Demetra uses potato starch and rice flour to bind the purée in the tin, it can feel slightly firm out of the container. <HighlightNumbers text="Add 1 teaspoon (5 ml)" /> of warm water (or warm whole milk/cream). Whisk vigorously with a fork or small whisk for <HighlightNumbers text="15–20 seconds" />. The starches will relax, transforming the purée into a smooth, silky cream that spreads effortlessly over dough.
              </SubStep>
              <SubStep label="Step 2 — Inject Sharp Salinity (Counter the Sweetness)">
                Even with onion and leek, pumpkin cream is naturally sweet. Because Demetra already contains mild spices, do not add more raw salt — add a sharp hard cheese instead. Whisk in <HighlightNumbers text="1 teaspoon" /> of microplaned Pecorino Romano directly into the bowl. <span className="italic text-muted-foreground">Why? The sheep&apos;s milk saltiness cuts right through the natural sugars and dissolves into the warm oil base, giving you a savory, umami foundation before it even hits the oven.</span>
              </SubStep>
              <SubStep label="Step 3 — Add Heat Protection (Prevent Oven Drying)">
                Whisk in <HighlightNumbers text="1 teaspoon" /> of Extra Virgin Olive Oil. <span className="italic text-muted-foreground">Why? White/vegetable-based creams dry out quickly under a <HighlightNumbers text="450 °C" /> Gozney flame. The extra virgin olive oil binds with the sunflower oil in the Demetra formula, creating a shiny protective coat that prevents the sauce from skinning over or splitting in the oven.</span>
              </SubStep>
              <SubStep label="Step 4 — Finish with Aromatic Sharpness">
                Add one light crack of freshly ground black pepper. Whisk one final time until smooth and glossy.
              </SubStep>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Application &amp; Layering Order on Dough</div>
              <ul className="space-y-1.5">
                <li><strong className="font-serif text-foreground not-italic">Amount Per Pizza:</strong> <HighlightNumbers text="Spread 70–80 g" /> of your adjusted Demetra base over your <HighlightNumbers text="67%" /> Poolish dough base, leaving a <HighlightNumbers text="1.5–2 cm" /> clean border for the rim.</li>
                <li><strong className="font-serif text-foreground not-italic">Cheese &amp; Topping Integration:</strong> Because Demetra already contains onion, leek, and subtle white wine notes, it pairs exceptionally well with Smoked Provola di Agerola, Salsiccia Fresca (crumbled pork sausage), or &apos;Nduja di Spilinga.</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Section number={7} title="Ideal Cheese & Flavor Pairings" subtitle="Because pumpkin sauce is sweet and low-acid, it pairs best with smoky, salty, or spicy toppings">
        <ul className="space-y-1.5">
          <li><strong className="font-serif text-foreground not-italic">Best Mozzarella:</strong> Provola Affumicata di Agerola (Smoked Mozzarella). The smoke cuts through the sweet pumpkin cream exceptionally well. (If using standard Fior di Latte, ensure you add a salty cured meat.)</li>
          <li><strong className="font-serif text-foreground not-italic">Best Cured Meats:</strong> Salsiccia Fresca (crumbled raw pork sausage), &apos;Nduja di Spilinga, Crispy Guanciale, or Pancetta.</li>
          <li><strong className="font-serif text-foreground not-italic">Best Finishing Cheese:</strong> Pecorino Romano or aged Cacioricotta (grated post-bake for a sharp, salty punch).</li>
          <li><strong className="font-serif text-foreground not-italic">Best Herbs:</strong> Fresh Rosemary or Fried Sage Leaves.</li>
        </ul>
      </Section>

      <Section number={8} title="Gozney Assembly & Baking Sequence" subtitle="Greci Crema di Zucca on a 67% hydration Poolish dough">
        <ol className="space-y-3">
          <li>
            <span className="font-serif text-foreground font-semibold">1. Preheat &amp; Stretch</span>
            <p className="text-muted-foreground text-[14px] italic mt-0.5">High heat sets the cream without drying it out.</p>
            <p className="mt-1"><HighlightNumbers text="Preheat your Gozney to 430–450 °C (800–840 °F) on MAX flame for 35–40 minutes. Open your 280 g dough ball in semolina to 28–30 cm, keeping the outer 1.5 cm rim untouched." /></p>
          </li>
          <li>
            <span className="font-serif text-foreground font-semibold">2. Pre-Bake Layering Order</span>
            <p className="text-muted-foreground text-[14px] italic mt-0.5">Apply in a thin layer to avoid a heavy center.</p>
            <ul className="space-y-1 list-disc pl-5 mt-1">
              <li><HighlightNumbers text="Pumpkin Base: Ladle 70–80 g of seasoned Greci Pumpkin Cream onto the center and spiral outwards, leaving 1.5–2 cm for the rim." /></li>
              <li><HighlightNumbers text="Smoked Cheese: Scatter 70–80 g of drained Smoked Provola (or Fior di Latte)." /></li>
              <li>Salty/Spicy Topping: Add crumbled raw pork sausage or small dollops of &apos;Nduja.</li>
              <li>Herbs: Add a light sprinkling of chopped fresh rosemary or sage leaves.</li>
              <li>EVOO: Drizzle a light spiral of Extra Virgin Olive Oil.</li>
            </ul>
          </li>
          <li>
            <span className="font-serif text-foreground font-semibold">3. Gozney Bake (75–90 Seconds)</span>
            <p className="text-muted-foreground text-[14px] italic mt-0.5">Prevent top-scorching on white bases.</p>
            <p className="mt-1"><HighlightNumbers text="Launch into the Gozney and turn the burner down to LOW immediately. Bake for 75–90 seconds, rotating every 15 seconds until the rim inflates with dark leopard spots and the pumpkin base simmers softly around the melted smoked cheese." /></p>
          </li>
          <li>
            <span className="font-serif text-foreground font-semibold">4. Post-Bake Finish</span>
            <p className="text-muted-foreground text-[14px] italic mt-0.5">Releases a sharp, fragrant aroma.</p>
            <p className="mt-1"><HighlightNumbers text="Transfer to a wire cooling rack for 60 seconds. Use a Microplane to grate a generous snowfall of Pecorino Romano over the steaming crust and center. Slice and serve." /></p>
          </li>
        </ol>
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
