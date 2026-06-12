import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  { pizza: "Quattro Formaggi",             style: "White / Gourmet",  region: "Tuscany or Liguria",       profile: "Herbal rich or soft buttery",          whenToUse: "Post-bake after baking" },
  { pizza: "Bufala e Fiocco",              style: "White Premium",    region: "Liguria",                  profile: "Light, delicate, clean",               whenToUse: "Very light post-bake only" },
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
  { pizza: "Pumpkin Base Pizzas",          style: "Seasonal White",   region: "Puglia blend",             profile: "Smooth, slightly sweet balance",       whenToUse: "Post-bake only" },
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
  return (
    <div className="space-y-10">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">Finitura</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Olive Oil Guide</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          Pairing the right extra-virgin olive oil to each pizza style — by Italian region, profile and pre/post-bake usage.
        </p>
      </div>

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
