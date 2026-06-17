import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DoughMakerPage() {
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">L&apos;Impasto</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Dough Maker</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Neapolitan, Deep Dish, Detroit-Style, NY, Roman &amp; Sicilian doughs from your bread machine — 500 g flour, Panasonic SD-ZX2522KXG.
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

      <Tabs defaultValue="neapolitan">
        <TabsList>
          <TabsTrigger value="neapolitan">🇮🇹 Neapolitan Pizza</TabsTrigger>
          <TabsTrigger value="roman">🇮🇹 Roman Thin Pizza</TabsTrigger>
          <TabsTrigger value="sicilian">🇮🇹 Sicilian-Style Pizza</TabsTrigger>
          <TabsTrigger value="ny">🇺🇸 NY Pizza</TabsTrigger>
          <TabsTrigger value="detroit">🇺🇸 Detroit-Style Pizza</TabsTrigger>
          <TabsTrigger value="deepdish">🇺🇸 Chicago Deep Dish Pizza</TabsTrigger>
        </TabsList>

        <TabsContent value="neapolitan" className="space-y-6 mt-4">
          <Section number={1} title="Ingredients" subtitle="500 g flour — Neapolitan style">
            <Bullets items={[
              "500 g 00 flour (Caputo Pizzeria)",
              "305–315 g water (start with 310 g)",
              "12 g salt",
              "0.3–0.5 g dry yeast (very small pinch)",
            ]} />
            <Callout>👉 This is a classic slow-fermentation Neapolitan dough.</Callout>
          </Section>

          <Section number={2} title="Bread Machine Loading Order">
            <Subhead>In your Panasonic</Subhead>
            <ol className="space-y-1.5">
              {[
                "Pour water first (310 g)",
                "Add flour (500 g)",
                "Add salt (12 g) on one side",
                "Add yeast (0.3–0.5 g) on opposite side",
                "Select Menu 32 (Pizza Dough) — runs 45 minutes (mix + knead, no proofing)",
              ].map((t, i) => (
                <li key={t} className="text-[15px] flex gap-2.5 leading-relaxed">
                  <span className="font-mono font-semibold text-primary shrink-0">{i + 1}.</span>
                  <span><HighlightNumbers text={t} /></span>
                </li>
              ))}
            </ol>
            <Callout>💡 Keep salt and yeast separated at first — important for yeast health.</Callout>
          </Section>

          <Section number={3} title="After Kneading" subtitle="This is where quality is made">
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

          <Section number={4} title="Balling the Dough">
            <p className="text-[15px] mb-3">After fermentation, divide into <span className="font-semibold text-primary">230–250 g</span> dough balls — about <span className="font-semibold text-primary">4–5 pizzas</span>.</p>
            <Subhead>Steps</Subhead>
            <Bullets items={[
              "Cut evenly",
              "Fold into tight balls",
              "Store in covered tray/box",
              "Let rise 2–3 hours before baking",
            ]} />
          </Section>

          <Section number={5} title="Why This Ratio Works" subtitle="For 500 g flour">
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

          <Section number={6} title="Key Mistakes to Avoid" subtitle="Especially with smaller batches">
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
        </TabsContent>

        <TabsContent value="deepdish" className="space-y-6 mt-4">
          <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
            <HighlightNumbers text="This guide synthesizes your specific equipment (Panasonic SD-ZX2522KXG) and ingredients with professional techniques to create a deep-pan pizza." />
          </p>

          <Section number={1} title="The Poolish" subtitle="The Kickstart">
            <p className="text-[15px] text-muted-foreground italic mb-3">Do this the night before or at least 4 hours before mixing the final dough.</p>
            <Subhead>Combine</Subhead>
            <Bullets items={[
              "In a clean bowl, mix 100g of All-Purpose Flour and 100g of water (room temperature)",
            ]} />
            <Subhead className="mt-4">Add Yeast</Subhead>
            <Bullets items={[
              "Add roughly 0.1g (a tiny pinch) of your dry yeast",
            ]} />
            <Subhead className="mt-4">Rest</Subhead>
            <Bullets items={[
              "Cover with a damp cloth and let it sit at room temperature",
              "It will become bubbly and active, essentially pre-digesting the flour and building flavor",
            ]} />
          </Section>

          <Section number={2} title="The Final Dough" subtitle="Bread Maker">
            <p className="text-[15px] text-muted-foreground italic mb-3">Use your Panasonic SD-ZX2522KXG.</p>
            <Subhead>Add to Pan</Subhead>
            <Bullets items={[
              "Add the remaining 400g of All-Purpose Flour and 175g–190g of water (55–58% hydration) to the bread maker pan",
            ]} />
            <Subhead className="mt-4">Add Poolish</Subhead>
            <Bullets items={[
              "Add the active poolish from Phase 1",
              "Add 1g instant dry yeast for reliable rise",
            ]} />
            <Subhead className="mt-4">Add Sweetener</Subhead>
            <Bullets items={[
              "Add 1–2 tsp of honey (this aids crust color and yeast activity)",
            ]} />
            <Subhead className="mt-4">Add Fat</Subhead>
            <Bullets items={[
              "Add 25g butter or olive oil — essential for that tender, shortbread-like deep dish crust",
            ]} />
            <Subhead className="mt-4">Set Program</Subhead>
            <Bullets items={[
              'Select a "Dough" or "Pizza" cycle',
            ]} />
            <Subhead className="mt-4">The Salt Rule</Subhead>
            <Bullets items={[
              "Since salt can inhibit yeast, add your 10g of salt roughly 5 minutes after the machine starts kneading, or towards the end of the initial mix",
            ]} />
            <Subhead className="mt-4">Knead</Subhead>
            <Bullets items={[
              "Let the machine finish the kneading cycle",
            ]} />
          </Section>

          <Section number={3} title="Fermentation &amp; Storage">
            <Subhead>Bulk Rise</Subhead>
            <Bullets items={[
              "Let the dough rise in a covered bowl at room temperature for 1–2 hours",
            ]} />
            <Subhead className="mt-4">Cold Ferment</Subhead>
            <Bullets items={[
              "Transfer the dough to a sealed container and place it in the refrigerator overnight",
              'This is the "secret" to the airy, professional texture',
            ]} />
          </Section>

          <Section number={4} title="Shaping &amp; Stretching" subtitle="2 hours before baking">
            <Subhead>Room Temp</Subhead>
            <Bullets items={[
              "Remove the dough from the fridge and let it sit on the counter for 30–60 minutes to take the chill off",
            ]} />
            <Subhead className="mt-4">Pan Prep</Subhead>
            <Bullets items={[
              "Lightly oil your pizza pan (use a high-smoke point oil)",
            ]} />
            <Subhead className="mt-4">The Press</Subhead>
            <Bullets items={[
              "Place the dough in the pan. Gently press it outward from the center",
            ]} />
            <Subhead className="mt-4">The Goal</Subhead>
            <Bullets items={[
              "Ensure the dough is perfectly even and pushed up the sides to form a lip",
              "If it snaps back, let it rest for 10 minutes and try again",
              "Evenness is critical to prevent sauce leaks",
            ]} />
          </Section>

          <Section number={5} title="Assembly &amp; Baking">
            <Subhead>Layer the Cheese</Subhead>
            <Bullets items={[
              "Place your mozzarella slices (roughly 12–20, depending on pan size) along the bottom and, crucially, right up against the vertical sides of the pan",
              "This creates that caramelized pre-co edge",
            ]} />
            <Subhead className="mt-4">Add Toppings</Subhead>
            <Bullets items={[
              "Place your meat/toppings inside the cheese ring",
            ]} />
            <Subhead className="mt-4">Add Sauce</Subhead>
            <Bullets items={[
              "Spoon your raw San Marzano sauce over the top. Keep it simple — don&apos;t drown the tomatoes",
            ]} />
            <Subhead className="mt-4">Bake</Subhead>
            <Bullets items={[
              "Preheat your oven to a high setting (typically 220°C–240°C)",
              "Bake until the crust is a deep golden brown and the cheese at the edges is bubbling and darkened",
              "Visual check is better than a timer",
            ]} />
          </Section>

          <Section number={6} title="Finishing">
            <Subhead>Release</Subhead>
            <Bullets items={[
              "As soon as it comes out, use a spatula to quickly run around the edge to ensure the caramelized cheese hasn&apos;t bonded to the pan",
            ]} />
            <Subhead className="mt-4">Rest</Subhead>
            <Bullets items={[
              "Let it sit for 2–5 minutes. This allows the steam to escape and prevents the soggy bottom effect",
            ]} />
            <Subhead className="mt-4">Serve</Subhead>
            <Bullets items={[
              "Slice and enjoy",
            ]} />
          </Section>

          <div className="border-l-2 border-primary/30 pl-4 py-1 text-sm text-muted-foreground italic leading-relaxed">
            <HighlightNumbers text="Pro tip: Since you are using a bread maker, the poolish method ensures you get that professional, long-fermented flavor profile despite the convenience of the machine. If you find the dough too wet when pressing into the pan, reduce the water in the final dough step by 10g next time." />
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
            <a
              href="https://www.youtube.com/watch?v=JtNtB2Og4U4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
            >
              ▶ Deep Dish Pizza tutorial <span className="text-xs opacity-60">↗</span>
            </a>
          </div>
        </TabsContent>

        <TabsContent value="detroit" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="This guide combines your Panasonic SD-ZX2522KXG for precision dough development with your Gozney Arc for professional-level crust finishing." />
            </p>

            <Section number={1} title="The Dough" subtitle="Panasonic SD-ZX2522KXG">
              <Subhead>Standard Recipe</Subhead>
              <Bullets items={[
                "Use your standard recipe (500g Bread Flour, ~340g water, 12g salt, 0.5g yeast) + 1–2 tsp honey",
              ]} />

              <Subhead className="mt-4">
                <span>Poolish</span>
                <span className="text-[10px] tracking-wider text-muted-foreground font-normal normal-case italic ml-1">(Optional but Recommended)</span>
              </Subhead>
              <details className="group mt-2 rounded-lg border border-border/70 bg-muted/20">
                <summary className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-secondary cursor-pointer hover:text-foreground transition-colors select-none [&::-webkit-details-marker]:hidden">
                  <svg className="size-3.5 shrink-0 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  How to prepare the poolish
                </summary>
                <div className="px-3 pb-3 text-[13px] leading-relaxed text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">Ratio:</strong> Mix 100g of your Bread Flour and 100g of room-temperature water.</p>
                  <p><strong className="text-foreground">Yeast:</strong> Add a very small pinch of your dry yeast (~0.1g). Too much will cause it to ferment too quickly.</p>
                  <p><strong className="text-foreground">Rest:</strong> Stir until smooth, cover, and let sit at room temperature for 4–8 hours.</p>
                  <p><strong className="text-foreground">Visual cue:</strong> Surface covered in bubbles and frothy.</p>
                  <p>When ready, scrape the bubbly poolish into your Panasonic pan along with the remaining flour, water, and yeast before the Dough cycle.</p>
                </div>
              </details>
              <Bullets items={[
                "Mix 100g flour, 100g water, and a pinch of yeast 4–8 hours before",
                "Cover and let it ferment at room temperature until bubbly and active",
              ]} />

              <Subhead className="mt-4">Bread Maker Cycle</Subhead>
              <Bullets items={[
                "Add all ingredients to the Panasonic pan",
                'Run the "Dough" cycle',
              ]} />

              <Subhead className="mt-4">Salt</Subhead>
              <Bullets items={[
                "Add the 12g of salt 5 minutes after the cycle starts",
              ]} />

              <Subhead className="mt-4">Bulk Rise</Subhead>
              <Bullets items={[
                "Let it sit in a bowl at room temp for 1 hour",
              ]} />

              <Subhead className="mt-4">Cold Ferment</Subhead>
              <Bullets items={[
                "Place in the fridge overnight. This is mandatory for professional flavor and structure",
              ]} />
            </Section>

            <Section number={2} title="Shaping &amp; Proofing" subtitle="The Setup">
              <Subhead>Prep</Subhead>
              <Bullets items={[
                "Remove dough 1 hour before baking",
                "Oil your rectangular Detroit-style pan (blue steel or anodized aluminum) heavily",
              ]} />

              <Subhead className="mt-4">Stretch</Subhead>
              <Bullets items={[
                "Press the dough into the pan",
                "If it snaps back, let it rest for 10 minutes and press again until it reaches all four corners",
              ]} />

              <Subhead className="mt-4">The Long Proof</Subhead>
              <Bullets items={[
                "This is the most important step for the light interior",
                "Cover and let it rise in the pan for 80–90 minutes",
              ]} />
            </Section>

            <Section number={3} title="The Gozney Arc Bake">
              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Heat your Gozney Arc to 250°C (480°F) on the stone surface",
                "Keep the flame on LOW",
              ]} />

              <Subhead className="mt-4">Par-Bake</Subhead>
              <Bullets items={[
                "Place the pan with just the dough into the oven",
                "Bake for 3–5 minutes, rotating once",
                "The goal is to set the structure so it doesn&apos;t collapse",
                "Remove the pan",
              ]} />

              <Subhead className="mt-4">Assembly</Subhead>
              <Bullets items={[
                "Apply your brick cheese/mozzarella blend all the way to the edges so it touches the pan",
                "Add your pepperoni",
              ]} />

              <Subhead className="mt-4">Final Bake</Subhead>
              <Bullets items={[
                "Place the pan back in the oven on low flame",
                "Bake until the cheese is bubbling and dark brown on the edges",
              ]} />

              <Callout>💡 If the top is browning too fast, tent it loosely with aluminum foil for the last 2 minutes.</Callout>

              <Subhead className="mt-4">Sauce</Subhead>
              <Bullets items={[
                "Apply your raw, seasoned San Marzano sauce in stripes on top after pulling it out, or during the last 2 minutes of the bake",
              ]} />
            </Section>

            <Section number={4} title="The Finish">
              <Subhead>Release</Subhead>
              <Bullets items={[
                "Immediately use a spatula to run around the edge of the pan to break the caramelized cheese seal",
              ]} />

              <Subhead className="mt-4">Rest</Subhead>
              <Bullets items={[
                "Let the pizza sit in the pan for 2–3 minutes to allow steam to escape",
              ]} />

              <Subhead className="mt-4">Serve</Subhead>
              <Bullets items={[
                "Transfer to a wire rack or cutting board",
                "Garnish with hot honey or truffle oil",
              ]} />
            </Section>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-2">
              <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold">Pro Summary for Your Gear</div>
              <ul className="text-[15px] space-y-1.5 leading-relaxed">
                <li>🍞 <strong className="text-foreground">Panasonic:</strong> Takes care of the heavy lifting of kneading and initial fermentation.</li>
                <li>🧊 <strong className="text-foreground">Cold Ferment:</strong> Your secret weapon for deep flavor.</li>
                <li>🔥 <strong className="text-foreground">Gozney Arc:</strong> Used as a low-temperature deck oven. Keeping the flame LOW and using the par-bake method prevents the top from burning while the bottom gets that signature cracker-like crunch.</li>
              </ul>
            </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
            <a
              href="https://www.youtube.com/watch?v=_my8uyoR-Sc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
            >
              ▶ Detroit-Style Pizza tutorial <span className="text-xs opacity-60">↗</span>
            </a>
          </div>
        </TabsContent>

        <TabsContent value="ny" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="To get that authentic, foldable, crispy-yet-chewy New York slice, this lower-hydration, oil-enriched dough is designed for your Gozney Arc's stone-baking capabilities." />
            </p>

            <Section number={1} title="The Proper NY Dough Recipe" subtitle="Panasonic SD-ZX2522KXG">
              <Subhead>Ingredients</Subhead>
              <Bullets items={[
                "500g Bread Flour (or High-Gluten Flour — essential for that signature NY chew)",
                "290g Water (Cold)",
                "15g Olive Oil (essential for the NY texture)",
                "12g Salt",
                "0.3g Dry Yeast (a tiny pinch — NY dough needs a slower, longer rise)",
                "1 tsp Honey (optional, for better browning)",
              ]} />

              <Subhead className="mt-4">The Procedure</Subhead>
              <Bullets items={[
                "Poolish (optional): Mix 100g flour, 100g water, pinch of yeast. Let sit 4–8 hours.",
                "Bread Maker: Add all ingredients (including poolish). Select the Dough cycle.",
                "Salt &amp; Oil: Add salt and olive oil 5 minutes after the machine starts kneading.",
                'The "Crispy" Adjustment: When the machine beeps, take the dough out and hand-knead it for 60 seconds on the counter. Feel for a supple, elastic texture. If it feels sticky, add a dusting of flour. This hand-work connects you to the dough structure.',
                "Balling: When the cycle ends, divide into two equal pieces (~400g each). Roll into tight, smooth balls.",
                "Cold Ferment: Place each ball into a separate, lightly oiled container. Refrigerate for 24–72 hours. This is the key to the New York flavor and structure.",
              ]} />
            </Section>

            <Section number={2} title="The Stretching Ritual">
              <Subhead>Tempering</Subhead>
              <Bullets items={[
                "Take your dough out of the fridge 2 hours before baking. Cold dough will fight you and shrink back.",
              ]} />

              <Subhead className="mt-4">The Surface</Subhead>
              <Bullets items={[
                "Use a light dusting of your Caputo Rimacinata (semolina) on the counter.",
              ]} />

              <Subhead className="mt-4">The Technique</Subhead>
              <Bullets items={[
                "Press the center of the ball down, pushing air outward toward the edges. Do not squash the rim.",
                "Pick it up and gently rotate it over your knuckles, letting gravity stretch it to about 14 inches.",
                "The center should be thin enough to see light through it; the rim should remain slightly thicker.",
              ]} />
            </Section>

            <Section number={3} title="The Gozney Arc Bake">
              <p className="text-[15px] text-muted-foreground italic mb-3">With a lower-hydration dough, you need to manage heat carefully for a crispy bottom without burning the top.</p>

              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Get your Gozney Arc stone to 380°C (720°F).",
              ]} />

              <Subhead className="mt-4">Flame Control</Subhead>
              <Bullets items={[
                "Turn the flame to LOW before you launch the pizza.",
              ]} />

              <Subhead className="mt-4">Assembly</Subhead>
              <Bullets items={[
                "Stretch the dough on a peel.",
                "Apply a thin, even layer of sauce.",
                "Apply a moderate amount of low-moisture, grated mozzarella.",
              ]} />

              <Subhead className="mt-4">The Launch</Subhead>
              <Bullets items={[
                "Slide it onto the center of the stone.",
              ]} />

              <Subhead className="mt-4">The Rotation</Subhead>
              <Bullets items={[
                "This is a 3–5 minute bake. Rotate the pizza 90 degrees every 60 seconds.",
                "Look for a uniform, golden-brown crust and a blistered, melted cheese top.",
              ]} />
            </Section>

            <Section number={4} title='The Pro "NY" Finishing Touches'>
              <Subhead>The Cut</Subhead>
              <Bullets items={[
                "Use a pizza wheel or rocker blade to cut it into 8 large, classic NY triangles.",
              ]} />

              <Subhead className="mt-4">The Fold</Subhead>
              <Bullets items={[
                "Pick up a slice, fold it down the center, and enjoy.",
                "The bottom should be rigid enough to hold the weight of the cheese without flopping too much.",
              ]} />

              <Subhead className="mt-4">Garnish</Subhead>
              <Bullets items={[
                "A classic NY pizzeria move: offer a side of garlic dipping sauce or a light dusting of dried oregano and parmesan immediately after it comes out of the oven.",
              ]} />
            </Section>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3">Summary Checklist for Success</div>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left font-semibold text-foreground pb-2 pr-4">Stage</th>
                      <th className="text-left font-semibold text-foreground pb-2">Key Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Hydration</td>
                      <td className="py-2"><HighlightNumbers text="58% (290g water / 500g flour) — keeps it foldable, not soggy." /></td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Fermentation</td>
                      <td className="py-2"><HighlightNumbers text="24+ hours cold — essential for the New York taste." /></td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Stretching</td>
                      <td className="py-2">Knuckle-stretch — keep the rim airy, center thin.</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-secondary font-medium align-top whitespace-nowrap">Bake</td>
                      <td className="py-2"><HighlightNumbers text="Medium-High Stone / Low Flame — even cooking without scorching." /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-1.5">Video Guide</div>
            <a
              href="https://www.youtube.com/watch?v=i1a1QTQ6MNY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] text-primary hover:underline font-medium"
            >
              ▶ New York-Style Pizza tutorial <span className="text-xs opacity-60">↗</span>
            </a>
          </div>
        </TabsContent>

        <TabsContent value="roman" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="Roman thin-crust pizza (Pizza Tonda Romana) is the antithesis of the soft, airy Neapolitan style. Thin, biscuit-like, and shatteringly crispy with zero flop." />
            </p>

            <Section number={1} title="The Roman Dough" subtitle="Panasonic SD-ZX2522KXG">
              <p className="text-[15px] text-muted-foreground italic mb-3">The key difference: olive oil and lower hydration for a crisp rather than chewy crust.</p>

              <Subhead>Ingredients</Subhead>
              <Bullets items={[
                '500g Strong 00 Flour (W300+) or Bread Flour (or a blend of 400g strong flour + 100g Semolina Rimacinata for extra crunch)',
                "275g–285g Water (aim for ~55–57% hydration)",
                "25g Extra Virgin Olive Oil (the secret to elasticity and biscuit texture)",
                "12g Salt",
                "0.3g Dry Yeast",
              ]} />

              <Subhead className="mt-4">Method</Subhead>
              <Bullets items={[
                "Add ingredients to the Panasonic and run the Dough cycle.",
                "Add salt and oil 5 minutes into the kneading process.",
                "Once the cycle finishes, bulk ferment in a covered bowl for 1 hour at room temp.",
                "Cold Ferment: Transfer to the fridge for 12–24 hours. Vital for breaking down proteins and creating a light, digestible structure.",
              ]} />
            </Section>

            <Section number={2} title="The Shaping" subtitle="Rolling is allowed!">
              <p className="text-[15px] text-muted-foreground italic mb-3">Unlike Neapolitan style where air bubbles are protected, Roman Tonda is often rolled.</p>

              <Subhead>Divide</Subhead>
              <Bullets items={[
                "Split your dough into 180g–200g balls.",
              ]} />

              <Subhead className="mt-4">Stretch</Subhead>
              <Bullets items={[
                "Use a rolling pin to flatten the dough until very thin and even.",
                "You are not looking for a puffy cornicione — aim for almost uniform thickness from center to edge.",
              ]} />

              <Subhead className="mt-4">Docking</Subhead>
              <Bullets items={[
                "If the dough is very thin, lightly dock (poke holes with a fork) the center to prevent large bubbles during the bake.",
              ]} />
            </Section>

            <Section number={3} title="The Gozney Arc Bake" subtitle="The Slow Crisp">
              <p className="text-[15px] text-muted-foreground italic mb-3">For cracker-like crunch, manage the oven differently than for Neapolitan.</p>

              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Aim for a stone temperature of 300°C–350°C (575°F–660°F).",
              ]} />

              <Subhead className="mt-4">Flame</Subhead>
              <Bullets items={[
                "Keep the flame on LOW. Let the stone do the work of drying out the crust.",
              ]} />

              <Subhead className="mt-4">The Bake</Subhead>
              <Bullets items={[
                "Slide the pizza onto the stone.",
                "Bake for 3–5 minutes. The thin dough crisps up quickly.",
                "Rotate frequently to ensure the edge doesn&apos;t burn while the center crisps.",
              ]} />

              <Subhead className="mt-4">Visual Cue</Subhead>
              <Bullets items={[
                "Look for a uniform, golden-brown color across the entire base.",
                "It should feel rigid, not pliable, when you lift it.",
              ]} />
            </Section>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
              <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold">Pro Tips for Pizza Romana Success</div>
              <Bullets items={[
                "Toppings: Roman pizzas are elegant and minimal. Use high-quality, drier toppings. Avoid wet vegetables or excess sauce — the thin base will get soggy instantly.",
                'Semolina: Mix 20% Semolina Rimacinata into your flour for a significantly crunchier bottom — a common trick in Roman pizzerias.',
                'The "No Flop" Test: A proper Roman tonda should not sag. When you pick up a slice, it should stay perfectly straight. If it flops, roll it thinner next time.',
              ]} />
            </div>
        </TabsContent>

        <TabsContent value="sicilian" className="space-y-6 mt-4">
            <p className="text-[15px] text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
              <HighlightNumbers text="Sicilian-style pizza (Sfincione) is built on a pan-proof method — a sponge-like, airy crumb that soaks up sauce while maintaining a crispy, fried bottom." />
            </p>

            <Section number={1} title="The Sicilian Dough" subtitle="Panasonic SD-ZX2522KXG">
              <Subhead>Ingredients</Subhead>
              <Bullets items={[
                "500g High-Protein Bread Flour (better than 00 for that tall, airy sponge)",
                "350g Water (70% hydration — Sicilian dough should be quite soft and tacky)",
                "20g Extra Virgin Olive Oil",
                "10g Salt",
                "0.5g Dry Yeast",
              ]} />

              <Subhead className="mt-4">Method</Subhead>
              <Bullets items={[
                "Add ingredients to the Panasonic pan. Run the Dough cycle.",
                "Add salt and oil 5 minutes after the cycle starts.",
                "Once the cycle finishes, let the dough rest in a lightly oiled bowl for 1 hour at room temperature.",
              ]} />
            </Section>

            <Section number={2} title="The Pan-Proof" subtitle="Crucial">
              <Subhead>Prep</Subhead>
              <Bullets items={[
                "Heavily oil a deep-sided rectangular metal baking pan — lots of olive oil, this is how you get the fried bottom.",
              ]} />

              <Subhead className="mt-4">Pan-Transfer</Subhead>
              <Bullets items={[
                "Place the dough into the pan. Don&apos;t force it to the corners yet. Cover and let it sit for 30 minutes.",
              ]} />

              <Subhead className="mt-4">The Gentle Stretch</Subhead>
              <Bullets items={[
                "After 30 minutes, the gluten will have relaxed. Gently stretch it toward the corners.",
                "If it snaps back, leave it alone for another 15 minutes.",
              ]} />

              <Subhead className="mt-4">The Long Rise</Subhead>
              <Bullets items={[
                "Cover the pan and let it proof at room temperature for 2–3 hours.",
                "You want the dough to be very bubbly and reach about 1–1.5 inches in height. It should look like a thick sponge.",
              ]} />
            </Section>

            <Section number={3} title="Assembly" subtitle="The Sicilian Way">
              <Subhead>Dimpling</Subhead>
              <Bullets items={[
                "Once proofed, lightly dimple the surface with your fingers (like focaccia).",
              ]} />

              <Subhead className="mt-4">Toppings</Subhead>
              <Bullets items={[
                "Use a bright, seasoned tomato sauce that soaks in.",
                "Add plenty of olive oil, oregano, and finely grated Pecorino Romano.",
                "Add mozzarella (often underneath the sauce) and any other toppings.",
              ]} />

              <Subhead className="mt-4">Final Rest</Subhead>
              <Bullets items={[
                "Let it sit for another 15–20 minutes while you prep the oven.",
              ]} />
            </Section>

            <Section number={4} title="The Gozney Arc Bake">
              <Subhead>Preheat</Subhead>
              <Bullets items={[
                "Aim for 275°C–300°C (530°F–575°F).",
              ]} />

              <Subhead className="mt-4">Flame</Subhead>
              <Bullets items={[
                "Keep the flame on LOW. Sicilian pizza needs a longer bake to cook the thick center through without burning the top.",
              ]} />

              <Subhead className="mt-4">Bake</Subhead>
              <Bullets items={[
                "Slide the pan onto the stone. Bake for 10–14 minutes, rotating the pan halfway through.",
              ]} />

              <Subhead className="mt-4">Visual Cue</Subhead>
              <Bullets items={[
                "The crust should be a deep golden brown, and the bottom should be crispy and fried from the oil in the pan.",
              ]} />
            </Section>

            <Section number={5} title="Final Touch">
              <Subhead>Release</Subhead>
              <Bullets items={[
                "Immediately run a spatula around the edge of the pan to release the crust.",
              ]} />

              <Subhead className="mt-4">Rest</Subhead>
              <Bullets items={[
                "Let it rest on a wire rack for at least 5 minutes. This is mandatory; otherwise, the steam will make the bottom soggy.",
              ]} />
            </Section>
        </TabsContent>
      </Tabs>
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
