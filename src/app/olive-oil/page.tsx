"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OilProfile {
  id: string;
  style: string;
  example: string;
  notes: string;
  bestUse: string;
  rule: string;
  color: string;
}

const OIL_PROFILES: OilProfile[] = [
  {
    id: "intense",
    style: "Intense Fruity / High Polyphenol",
    example: "Frantoio Muraglia Coratina",
    notes: "Bold, peppery, grassy — a high-polyphenol oil built to be noticed, not hidden.",
    bestUse: "Best used strictly as a post-bake finishing drizzle (a girotto) on classic Margherita and Marinara.",
    rule: "Post-Bake Only",
    color: "#4D7C3F",
  },
  {
    id: "balanced",
    style: "Balanced & Green",
    example: "Elizondo Nº3 Picual",
    notes: "Tomato leaf and green grass notes, clean and rounded on the finish.",
    bestUse: "Best paired with fresh San Marzano tomato sauces and raw toppings — burrata, prosciutto, rocket.",
    rule: "Sauce & Raw Toppings",
    color: "#B91C1C",
  },
  {
    id: "creamy",
    style: "Creamy & Delicate",
    example: "Barbera Lorenzo Nº5 (Nocellara del Belice DOP, Denocciolata)",
    notes: "Creamy, delicate, sweet butter and green almond with very low bitterness.",
    bestUse: "Ideal post-bake finish for delicate white pizzas (Pizza Bianca), Mortadella & Pistachio, Burrata, and Pumpkin Base (Crema di Zucca) — complements rather than overpowers.",
    rule: "Post-Bake · Delicate White",
    color: "#B58A3D",
  },
  {
    id: "smooth",
    style: "Smooth & Mild",
    example: "Odysea Kalamata PDO Koroneiki",
    notes: "Buttery and fruity, with gentle, low-bitterness character.",
    bestUse: "Ideal for coating dough containers, pizza box prep, and mild toppings.",
    rule: "Utility / Prep",
    color: "#C2410C",
  },
  {
    id: "flavored",
    style: "Flavored / Infused",
    example: "Belazu White Truffle EVOO",
    notes: "Delicate aromatics that are destroyed by heat within seconds.",
    bestUse: "Strictly post-bake finishing for Pizza Bianca, mushroom, and cream-based pizzas.",
    rule: "Post-Bake Only · 3–4 drops",
    color: "#7C5E3B",
  },
];

interface TimingRule {
  n: number;
  title: string;
  body: string;
}

const TIMING_RULES: TimingRule[] = [
  {
    n: 1,
    title: "Post-Bake Drizzle",
    body: "Always apply premium finishing EVOOs after the pizza leaves the oven — 400°C+ heat degrades fine flavor notes and turns oil bitter.",
  },
  {
    n: 2,
    title: "No Oil in Neapolitan Dough",
    body: "Traditional Neapolitan dough omits oil entirely to preserve maximum steam expansion and crispness. Only suggest 1% EVOO in the dough calculator when Domestic Home Oven mode is active.",
  },
  {
    n: 3,
    title: "Truffle Preservation",
    body: "Truffle oil must never enter the oven — add 3–4 drops post-bake only.",
  },
  {
    n: 4,
    title: "Bold vs Delicate Post-Bake Oil",
    body: "Bold red pizzas (Margherita, Marinara, Cosacca) finish with Frantoio Muraglia (Intense Fruity). Delicate white/gourmet pizzas (Pumpkin Base, Creamy Cheeses, Mortadella) finish with Barbera Lorenzo Nº5 so the oil complements rather than overpowers.",
  },
];

interface PairingOption {
  id: string;
  label: string;
  oil: string;
  application: string;
}

const PAIRING_OPTIONS: PairingOption[] = [
  { id: "margherita",       label: "Classic Margherita DOP",          oil: "Frantoio Muraglia",           application: "Post-bake swirl" },
  { id: "bianca-mushroom",  label: "Pizza Bianca with Mushrooms",     oil: "Belazu White Truffle EVOO",   application: "Post-bake drizzle" },
  { id: "sauce-prep",       label: "Tomato Sauce Base Prep",          oil: "Elizondo Nº3 Picual",         application: "1 tsp stirred into raw San Marzano Rega DOP tomatoes" },
  { id: "container-prep",   label: "Container / Dough Box Prep",      oil: "Odysea Kalamata PDO",         application: "Light coating to prevent sticking" },
  { id: "pumpkin-creamy",   label: "Pumpkin Base / Creamy Cheese / Mortadella", oil: "Barbera Lorenzo Nº5", application: "Post-bake swirl — sweet butter and green almond notes that complement delicate toppings" },
];

interface Row {
  pizza: string;
  style: string;
  region: string;
  profile: string;
  whenToUse: string;
}

const ROWS: Row[] = [
  { pizza: "Margherita",                   style: "Red (Neapolitan)", region: "Campania",                 profile: "Peppery, grassy, tomato-friendly",     whenToUse: "Light post-bake drizzle or minimal pre-bake" },
  { pizza: "Napoli",                       style: "Red (Savory)",     region: "Campania",                 profile: "Strong peppery, herbaceous",           whenToUse: "Post-bake finish only" },
  { pizza: "Seven Stars Parma",            style: "White / Gourmet",  region: "Tuscany",                  profile: "Herbal, structured, aromatic",         whenToUse: "Post-bake over ham & rocket" },
  { pizza: "Quattro Formaggi",             style: "White / Gourmet",  region: "Tuscany or Liguria",       profile: "Creamy, sweet butter, green almond",   whenToUse: "Post-bake: Barbera Lorenzo Nº5" },
  { pizza: "Bufala e Ibérico",             style: "White Premium",    region: "Liguria",                  profile: "Light, delicate, clean",               whenToUse: "Post-bake: Barbera Lorenzo Nº5" },
  { pizza: "Bianca Prosciutto e Funghi",   style: "White Mushroom",   region: "Tuscany",                  profile: "Earthy, aromatic",                     whenToUse: "Post-bake finish" },
  { pizza: "Del Monaco DOP",               style: "Red Premium",      region: "Campania (intense blend)", profile: "Strong, bold, structured",             whenToUse: "Light post-bake finish" },
  { pizza: "Il Mascalzone Calzone",        style: "Stuffed / Heavy",  region: "Puglia blend",             profile: "Rounded, mild fruitiness",             whenToUse: "Light pre-bake or post-bake" },
  { pizza: "Chorizo",                      style: "Red Spicy",        region: "Campania",                 profile: "Peppery, fat-cutting",                 whenToUse: "Post-bake drizzle" },
  { pizza: "Cured Meats Classic",          style: "Red / Gourmet",    region: "Campania or Puglia",       profile: "Balanced, fatty cut-through",          whenToUse: "Post-bake only" },
  { pizza: "Double Pepperoni + Hot Honey", style: "Red Modern",       region: "Campania",                 profile: "Spicy-friendly, aromatic",             whenToUse: "Post-bake before honey" },
  { pizza: "Cotto Ham & Mushroom",         style: "Red Balanced",     region: "Puglia or Campania",       profile: "Mild, rounded, stable",                whenToUse: "Light post-bake" },
  { pizza: "Bufala Classic",               style: "Red Simple",       region: "Campania",                 profile: "Fresh, peppery, tomato lift",          whenToUse: "Post-bake only" },
  { pizza: "Four Cheese Truffle",          style: "White Luxury",     region: "Tuscany",                  profile: "Earthy, aromatic, strong finish",      whenToUse: "Post-bake + truffle oil" },
  { pizza: "Garlic Herb Focaccia",         style: "Bread",            region: "Puglia or Liguria",        profile: "Soft fruity or light herbal",          whenToUse: "Pre-bake heavy + post-bake finish" },
  { pizza: "Pumpkin Base Pizzas",          style: "Seasonal White",   region: "Puglia blend",             profile: "Smooth, slightly sweet balance",       whenToUse: "Post-bake: Barbera Lorenzo Nº5" },
];

interface OilMapRow {
  n: number;
  pizza: string;
  pre: string;
  post: string;
  why: string;
}

const OIL_LEGEND: { code: string; name: string }[] = [
  { code: "P", name: "Elizondo Nº3 Picual" },
  { code: "L", name: "Barbera Lorenzo N°5" },
  { code: "O", name: "Odysea Kalamata/Koroneiki" },
  { code: "C", name: "Frantoio Muraglia Coratina" },
  { code: "T", name: "Belazu White Truffle EVOO" },
];

const OIL_MAP: OilMapRow[] = [
  { n: 1, pizza: "Cosacca", pre: "2g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Pecorino needs Coratina's peppery/bitter counterpoint" },
  { n: 2, pizza: "Marinara", pre: "2g Elizondo Nº3 Picual", post: "2–3g Odysea Kalamata/Koroneiki", why: "Odysea's tomato-vine/herbaceous character is excellent with garlic & oregano" },
  { n: 3, pizza: "Margherita", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Lets tomato, FdL and basil stay delicate" },
  { n: 4, pizza: "Piennolo e Bufala", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Sweet Piennolo + buffalo benefit from Lorenzo" },
  { n: 5, pizza: "Margherita Macchiata", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Piennolo + pesto don't need Coratina" },
  { n: 6, pizza: "Margherita Duo", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Keeps red/yellow Piennolo at the centre" },
  { n: 7, pizza: "Bufalina Classica", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Buffalo is too delicate for a heavy Coratina finish" },
  { n: 8, pizza: "Bufalina a Freddo", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Especially good with cold buffalo" },
  { n: 10, pizza: "Burratina", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Creamy burrata + tomato + Lorenzo is very balanced" },
  { n: 11, pizza: "Marinara al Salame", pre: "2g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Salame gives enough weight for Coratina" },
  { n: 12, pizza: "Quattro Formaggi", pre: "1–2g Odysea Kalamata/Koroneiki", post: "2g Frantoio Muraglia Coratina", why: "Odysea lifts the cheese; Coratina cuts richness" },
  { n: 13, pizza: "Napoletana", pre: "2g Elizondo Nº3 Picual", post: "2–3g Odysea Kalamata/Koroneiki", why: "Herbaceous Odysea works beautifully with tomato, anchovy/capers-style savouriness" },
  { n: 14, pizza: "Diavola", pre: "2g Elizondo Nº3 Picual", post: "2–3g Frantoio Muraglia Coratina", why: "Peppery Coratina reinforces the spicy salami" },
  { n: 15, pizza: "Prosciutto e Funghi", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Keeps mushroom + ham elegant" },
  { n: 16, pizza: "Capricciosa", pre: "2g Elizondo Nº3 Picual", post: "2g Odysea Kalamata/Koroneiki", why: "Herbaceous/citrus notes complement artichoke, mushroom and ham" },
  { n: 17, pizza: "Prosciutto e Rucola", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Soft oil balances Serrano + rocket" },
  { n: 18, pizza: "Ibérica Bianca", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Jamón + ricotta/FdL need a gentle finish" },
  { n: 19, pizza: "Ortolana", pre: "2g Odysea Kalamata/Koroneiki", post: "3g Odysea Kalamata/Koroneiki", why: "Odysea's green/herbaceous profile suits vegetables" },
  { n: 20, pizza: "Ripieno (Calzone)", pre: "2g Elizondo Nº3 Picual", post: "2g Odysea Kalamata/Koroneiki", why: "Odysea gives freshness to the enclosed, richer filling" },
  { n: 21, pizza: "Margherita Datterini", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5 ⭐", why: "Best match: sweet tomato + FdL + aged cheese" },
  { n: 22, pizza: "Tettoia — Four Cheese & Truffle", pre: "1g Elizondo Nº3 Picual", post: "1–2g Belazu White Truffle EVOO + 2g Barbera Lorenzo N°5", why: "Truffle is the specialist finish; Lorenzo rounds it" },
  { n: 23, pizza: "Double Pepperoni & Hot Honey", pre: "2g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Pepper + chilli + honey need Coratina's bitterness" },
  { n: 24, pizza: "Chorizo & Gorgonzola", pre: "2g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Big flavours can handle Coratina" },
  { n: 26, pizza: "Bufala e Ibérico", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Buffalo + Ibérico is already rich and aromatic" },
  { n: 27, pizza: "Cetarese", pre: "1–2g Odysea Kalamata/Koroneiki", post: "2g Frantoio Muraglia Coratina", why: "Mediterranean herbaceousness pre; Coratina handles anchovy/colatura" },
  { n: 28, pizza: "Piennolo & Alici di Cetara", pre: "2g Odysea Kalamata/Koroneiki", post: "2g Odysea Kalamata/Koroneiki", why: "Fish + Piennolo + Provola suit Odysea's citrus/herbal profile" },
  { n: 30, pizza: "'Nduja & Hot Honey", pre: "2g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Excellent sweet/chilli/bitter contrast" },
  { n: 31, pizza: "Calabrese", pre: "2g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Gorgonzola + 'nduja can absorb the intensity" },
  { n: 32, pizza: "Quattro Latte e 'Nduja", pre: "1g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Rich cheese + 'nduja needs a strong finish" },
  { n: 33, pizza: "Cacio e Pepe", pre: "—", post: "2–3g Odysea Kalamata/Koroneiki", why: "Odysea gives herbaceous lift without overwhelming Pecorino" },
  { n: 34, pizza: "Carbonara", pre: "—", post: "2–3g Barbera Lorenzo N°5", why: "Lorenzo is ideal with yolk, guanciale and Pecorino" },
  { n: 35, pizza: "Amatriciana", pre: "2g Elizondo Nº3 Picual", post: "2g Frantoio Muraglia Coratina", why: "Tomato + guanciale + Pecorino can handle Coratina" },
  { n: 36, pizza: "Gricia", pre: "—", post: "2–3g Barbera Lorenzo N°5", why: "Soft finish against guanciale/Pecorino" },
  { n: 37, pizza: "Pesto Cremosa", pre: "1g Odysea Kalamata/Koroneiki", post: "2–3g Barbera Lorenzo N°5", why: "Odysea reinforces basil; Lorenzo softens the dairy" },
  { n: 38, pizza: "Burrata & Pesto", pre: "—", post: "3g Barbera Lorenzo N°5", why: "Keep the pesto/burrata combination clean" },
  { n: 39, pizza: "Salsiccia al Pesto", pre: "1–2g Odysea Kalamata/Koroneiki", post: "2g Frantoio Muraglia Coratina", why: "Herbaceous pre-oil + stronger finish for sausage" },
  { n: 40, pizza: "Boscaiola", pre: "1–2g Odysea Kalamata/Koroneiki", post: "2g Barbera Lorenzo N°5", why: "Mushroom + sausage benefit from restraint" },
  { n: 41, pizza: "Mortadella e Pistacchio", pre: "—", post: "3g Barbera Lorenzo N°5", why: "Very delicate; don't introduce Coratina" },
  { n: 42, pizza: "La Oro Verde", pre: "— / 1g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Pistachio + mortadella + stracciatella need elegance" },
  { n: 43, pizza: "Zucca, Guanciale e Rosmarino", pre: "—", post: "2g Barbera Lorenzo N°5", why: "Pumpkin sweetness + guanciale + rosemary; Coratina unnecessary" },
  { n: 44, pizza: "Zucca e 'Nduja", pre: "—", post: "2g Frantoio Muraglia Coratina", why: "Pumpkin sweetness + 'nduja loves the bitter/peppery contrast" },
  { n: 45, pizza: "Zucca, Salsiccia e Provola", pre: "—", post: "2g Odysea Kalamata/Koroneiki", why: "Odysea adds green/herbaceous lift without fighting smoked Provola" },
  { n: 46, pizza: "Norcina", pre: "—", post: "2g Belazu White Truffle EVOO + 1g Barbera Lorenzo N°5", why: "Truffle + mushroom + sausage; Lorenzo rounds the finish" },
  { n: 47, pizza: "Mantovana", pre: "—", post: "2g Barbera Lorenzo N°5", why: "Gorgonzola, bacon, sage and pumpkin already have plenty of character" },
  { n: 48, pizza: "Zucca, Gorgonzola & Noci", pre: "—", post: "2g Barbera Lorenzo N°5", why: "Pumpkin + walnut + Gorgonzola needs softness" },
  { n: 49, pizza: "Sfiziosa", pre: "—", post: "2g Belazu White Truffle EVOO + 1g Barbera Lorenzo N°5", why: "Truffle + pumpkin + guanciale; specialist finish" },
  { n: 50, pizza: "Sfiziosa (Basilico)", pre: "—", post: "3g Barbera Lorenzo N°5", why: "Sage oil already supplies the aromatic finish" },
  { n: 51, pizza: "Ragù Napoletano", pre: "2g Elizondo Nº3 Picual", post: "3g Barbera Lorenzo N°5", why: "Rich ragù + Parmigiano needs a soft finish so the thyme stays forward" },
];

const REGION_COLORS: Record<string, string> = {
  Campania: "#B91C1C",      // tomato red
  Tuscany:  "#7C5E3B",      // olive wood
  Liguria:  "#4D7C3F",      // basil green
  Puglia:   "#C2410C",      // terracotta
};

function regionColor(region: string): string {
  const key = Object.keys(REGION_COLORS).find((k) => region.includes(k));
  return key ? REGION_COLORS[key] : "#6B5440";
}

export default function OliveOilPage() {
  const [openProfile, setOpenProfile] = useState<string>(OIL_PROFILES[0].id);
  const [pairingId, setPairingId] = useState<string>(PAIRING_OPTIONS[0].id);
  const pairing = PAIRING_OPTIONS.find((p) => p.id === pairingId) ?? PAIRING_OPTIONS[0];

  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Finitura</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Olive Oil Guide &amp; Pairing Engine</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Pairing the right extra-virgin olive oil to each pizza style — by profile, Italian region, and pre/post-bake timing.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">The EVOO Profile Matrix</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-3">
          {OIL_PROFILES.map((p) => {
            const open = openProfile === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setOpenProfile(open ? "" : p.id)}
                className={`text-left rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  open ? "border-primary" : "border-border bg-card"
                }`}
                style={open ? { backgroundColor: "rgba(194,65,12,0.06)" } : undefined}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-serif font-semibold text-base" style={{ color: p.color }}>{p.style}</div>
                    <div className="text-xs text-muted-foreground italic mt-0.5">{p.example}</div>
                  </div>
                  <ChevronDown className={`w-4 h-4 shrink-0 mt-1 text-secondary transition-transform ${open ? "rotate-180" : ""}`} />
                </div>
                <span className="inline-block mt-2 text-[10px] uppercase tracking-[0.12em] font-semibold px-2 py-0.5 rounded-full border" style={{ color: p.color, borderColor: p.color + "55" }}>
                  {p.rule}
                </span>
                {open && (
                  <div className="mt-3 pt-3 border-t border-border/60 space-y-1.5">
                    <p className="text-sm leading-relaxed">{p.notes}</p>
                    <p className="text-sm leading-relaxed text-foreground/85"><HighlightNumbers text={p.bestUse} /></p>
                  </div>
                )}
              </button>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">Your Complete Pizza Oil Map</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Each oil has a distinct job: <span className="font-semibold text-foreground">Lorenzo N°5</span> is soft and naturally sweet,{" "}
            <span className="font-semibold text-foreground">Muraglia Coratina</span> is powerful, bitter/peppery, and{" "}
            <span className="font-semibold text-foreground">Odysea Koroneiki</span> is herbaceous, citrusy and tomato-vine driven.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {OIL_LEGEND.map((l) => (
              <span key={l.code} className="inline-flex items-center gap-1.5 text-xs rounded-full border border-border bg-muted/40 px-2.5 py-1">
                <span className="font-mono font-bold text-primary">{l.code}</span>
                <span className="text-muted-foreground">= {l.name}</span>
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 text-xs rounded-full border border-border bg-muted/40 px-2.5 py-1">
              <span className="font-mono font-bold text-primary">—</span>
              <span className="text-muted-foreground">= no oil needed at that stage</span>
            </span>
          </div>
          <div className="overflow-x-auto px-0">
            <table className="w-full text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="text-left bg-muted/60 border-b-2 border-primary/30">
                  <Th sticky>#</Th>
                  <Th>Pizza</Th>
                  <Th>Pre-bake</Th>
                  <Th>Post-bake</Th>
                  <Th>Why</Th>
                </tr>
              </thead>
              <tbody>
                {OIL_MAP.map((r, i) => {
                  const zebra = i % 2 === 1;
                  return (
                    <tr key={r.n} className={`border-b border-border/60 last:border-0 align-top ${zebra ? "bg-muted/30" : ""} hover:bg-primary/5 transition-colors`}>
                      <td className={`px-4 py-3 whitespace-nowrap sticky left-0 ${zebra ? "bg-[#F5EBD6]" : "bg-card"} z-10 text-muted-foreground`}>
                        {r.n}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="font-serif font-semibold text-foreground">{r.pizza}</span>
                      </td>
                      <Td>{r.pre}</Td>
                      <Td>{r.post}</Td>
                      <Td muted>{r.why}</Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">High-Heat Baking &amp; Timing Rules</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-3 gap-4">
          {TIMING_RULES.map((r) => (
            <div key={r.n} className="rounded-xl border border-border bg-muted/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-mono font-semibold text-xs shrink-0">{r.n}</span>
                <span className="font-serif font-semibold text-sm">{r.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/85"><HighlightNumbers text={r.body} /></p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">Interactive Pairing Selector</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold block mb-1.5">
              Choose Your Pizza Style / Topping
            </label>
            <select
              value={pairingId}
              onChange={(e) => setPairingId(e.target.value)}
              className="w-full sm:w-auto min-w-[280px] rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {PAIRING_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Recommended Application</div>
            <div className="font-serif text-lg font-semibold text-foreground mb-1">{pairing.oil}</div>
            <p className="text-sm leading-relaxed text-foreground/85"><HighlightNumbers text={pairing.application} /></p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">Pizza × Oil Pairing</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto px-0 sm:px-6">
          <table className="w-full text-sm border-collapse min-w-[820px]">
            <thead>
              <tr className="text-left bg-muted/60 border-b-2 border-primary/30">
                <Th sticky>Pizza</Th>
                <Th>Style</Th>
                <Th>Base Oil Region</Th>
                <Th>Oil Profile</Th>
                <Th>When to Use</Th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => {
                const color = regionColor(r.region);
                const zebra = i % 2 === 1;
                return (
                  <tr key={r.pizza} className={`border-b border-border/60 last:border-0 align-top ${zebra ? "bg-muted/30" : ""} hover:bg-primary/5 transition-colors`}>
                    <td className={`px-4 py-3 whitespace-nowrap sticky left-0 ${zebra ? "bg-[#F5EBD6]" : "bg-card"} z-10`}>
                      <span className="font-serif font-semibold text-foreground">{r.pizza}</span>
                    </td>
                    <Td muted>{r.style}</Td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} aria-hidden />
                        <span style={{ color }}>{r.region}</span>
                      </span>
                    </td>
                    <Td>{r.profile}</Td>
                    <Td muted>{r.whenToUse}</Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">Regional Profiles</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          <RegionCard color={REGION_COLORS.Campania} name="Campania" notes="Bold, peppery, grassy — the classic Neapolitan pairing. Cuts through tomato acidity and salty cured meats." />
          <RegionCard color={REGION_COLORS.Tuscany}  name="Tuscany"  notes="Herbal, structured, aromatic — adds backbone to gourmet whites with cheese, ham and earthy mushroom." />
          <RegionCard color={REGION_COLORS.Liguria}  name="Liguria"  notes="Light, delicate, clean — does not overpower fresh buffalo or premium fior di latte." />
          <RegionCard color={REGION_COLORS.Puglia}   name="Puglia"   notes="Rounded, mild fruitiness — stable and crowd-friendly, balanced for breads, calzoni and seasonal pumpkin bases." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-lg">Pre-Bake vs Post-Bake</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold mb-2">Pre-Bake</div>
            <p className="text-[15px] leading-relaxed">A controlled drizzle before launch — only on doughs and bases that benefit from oil-driven browning and crispness (focaccia, calzone, occasional Margherita). High-heat breaks down the oil&apos;s aroma; never use your finest finishing oil here.</p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">Post-Bake</div>
            <p className="text-[15px] leading-relaxed">A fresh, raw finishing drizzle the second the pizza leaves the oven. Preserves all the volatile aromatics that make a premium EVOO worth the price. Default mode for virtually every pizza.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Th({ children, sticky = false }: { children: React.ReactNode; sticky?: boolean }) {
  return (
    <th className={`py-3 px-4 text-[11px] uppercase tracking-[0.12em] font-semibold text-secondary ${sticky ? "sticky left-0 bg-[#EFE5CC] z-20" : ""}`}>
      {children}
    </th>
  );
}

function Td({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <td className={`px-4 py-3 align-top ${muted ? "text-muted-foreground" : ""}`}>{children}</td>
  );
}

function RegionCard({ color, name, notes }: { color: string; name: string; notes: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }} aria-hidden />
      <div className="font-serif font-semibold text-lg pt-1.5 mb-1.5" style={{ color }}>{name}</div>
      <p className="text-sm leading-relaxed text-foreground/80">{notes}</p>
    </div>
  );
}

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(\d+[\d.,\u2013\u2014–-]*\s?(?:°C|°F|°|cm|mm|ml|m|g\b|kg|h\b|min\b|sec\b|seconds|second|minutes|minute|hours|hour|tsp|tbsp|drops|%))/gi);
  return <>{parts.map((p, i) => /^\d/.test(p) ? <span key={i} className="font-semibold text-primary whitespace-nowrap">{p}</span> : <span key={i}>{p}</span>)}</>;
}
