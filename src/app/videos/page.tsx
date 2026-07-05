import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CATEGORY_ORDER = ["Making Pizzas", "Cooking Pizzas", "Stretching", "Dough"] as const;
type Category = (typeof CATEGORY_ORDER)[number];

const CATEGORY_SLUG: Record<Category, string> = {
  "Stretching": "stretching",
  "Making Pizzas": "making",
  "Cooking Pizzas": "cooking",
  "Dough": "dough",
};

interface VideoEntry {
  title: string;
  category: Category;
  url: string;
}

const VIDEOS: VideoEntry[] = [
  { title: "Stretching perfection",             category: "Stretching",     url: "https://www.youtube.com/watch?v=4oNczFlRktA" },
  { title: "Another stretching pizza",          category: "Stretching",     url: "https://www.youtube.com/watch?v=mSUIZqOfmnM" },
  { title: "Stretching pizza",                  category: "Stretching",     url: "https://www.youtube.com/watch?v=Hu9-NemY5RQ" },
  { title: "Lo Schiaffo di Enzo Coccia",        category: "Stretching",     url: "https://www.youtube.com/watch?v=xzbW8CZx538" },
  { title: "Stretching high-hydration pizza",   category: "Stretching",     url: "https://www.youtube.com/watch?v=Mdq0eUhnUHI" },
  { title: "Step-by-step stretching pizza",     category: "Stretching",     url: "https://www.youtube.com/watch?v=StoORqYZqe8" },
  { title: "Stretching Neapolitan pizza — slow motion", category: "Stretching", url: "https://www.youtube.com/watch?v=piVoAghLW9M" },
  { title: "Stretching pizza",                  category: "Stretching",     url: "https://www.youtube.com/watch?v=xS0TI3KSUSE" },
  { title: "Stretching pizza",                  category: "Stretching",     url: "https://www.youtube.com/watch?v=iybaQFesimE" },
  { title: "How to stretch and slap pizza",     category: "Stretching",     url: "https://www.youtube.com/watch?v=e8jO0oUS-LI" },
  { title: "Stretching pizza",                  category: "Stretching",     url: "https://www.youtube.com/shorts/AWkD5xtM2Rc" },

  { title: "Pizza making from different places", category: "Making Pizzas", url: "https://www.youtube.com/watch?v=yiFEksEWXEc" },
  { title: "Pizza making in Markthalle Berlin", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=OJmVs416a78" },
  { title: "Restaurant pizzas",                 category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=u8e9LYh6-Yo" },
  { title: "Clandestine pizzas",                category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=vxQLt4ode2k&t=832s" },
  { title: "Una sera nella Prima Pizzeria Napoletana STG", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=1sGxrDAKR98" },
  { title: "Artisanal pizzeria in Milan — Pizzeria Da Zero", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=pZTURMnjMM4" },
  { title: "Campionessa del Mondo di Pizza — Pizzeria Napoli", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=pYH6Dqo3Sz4" },
  { title: "Napoli's best Pizzeria? — Busy Saturday Night", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=bekM69DbAe4" },
  { title: "Where Pizza Began: Naples' 5 Legendary Pizzerias", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=JzSI0DpYM0k" },
  { title: "Top 4 Pizzerie che Sfornano Valanghe di Pizze", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=msrZgCK3tSU" },
  { title: "Meet the Pizza Master — Enzo Coccia", category: "Making Pizzas",  url: "https://www.youtube.com/watch?v=kugcTACFgmI" },

  { title: "Cooking with Gozney",               category: "Cooking Pizzas", url: "https://www.youtube.com/watch?v=wC34d4i_RMs" },
  { title: "Cooking pizza",                     category: "Cooking Pizzas", url: "https://www.youtube.com/watch?v=0vwTl23V_fA" },
  { title: "Marinara",                          category: "Cooking Pizzas", url: "https://www.youtube.com/shorts/j8dtDOemTPk" },
  { title: "Quattro Formaggi",                  category: "Cooking Pizzas", url: "https://www.youtube.com/shorts/7OXG78wz8EA" },
  { title: "Calzone",                           category: "Cooking Pizzas", url: "https://www.youtube.com/shorts/cSsncURDc-k" },
  { title: "Prosciutto di Parma",               category: "Cooking Pizzas", url: "https://www.youtube.com/shorts/QNiyO1omq_U" },

  { title: "Dealing with high-hydration bulk dough", category: "Dough",     url: "https://www.youtube.com/watch?v=bWN9mxR_iXI" },
];

function videoId(url: string): string | null {
  const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/) || url.match(/shorts\/([^?&]+)/);
  return m ? m[1] : null;
}

export default function VideosPage() {
  return (
    <div className="space-y-8">
      <div className="text-center pb-6 border-b border-border/70">
        <p className="text-[11px] uppercase tracking-[0.4em] text-secondary font-medium">La Videoteca</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-foreground">Videos</h1>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto italic">
          A curated library of technique videos — stretching, baking, and inspiration from the masters.
        </p>
      </div>

      <Tabs defaultValue={CATEGORY_SLUG[CATEGORY_ORDER[0]]}>
        <TabsList>
          {CATEGORY_ORDER.map((cat) => {
            const count = VIDEOS.filter((v) => v.category === cat).length;
            if (count === 0) return null;
            return (
              <TabsTrigger key={cat} value={CATEGORY_SLUG[cat]}>
                {cat} <span className="opacity-60 ml-1">({count})</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {CATEGORY_ORDER.map((cat) => {
          const items = VIDEOS.filter((v) => v.category === cat);
          if (items.length === 0) return null;
          return (
            <TabsContent key={cat} value={CATEGORY_SLUG[cat]} className="mt-4">
              <div className="grid gap-5 sm:grid-cols-2">
                {items.map((v, i) => {
                  const id = videoId(v.url);
                  const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
                  return (
                    <a
                      key={v.url}
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                    >
                      <Card className="overflow-hidden transition-shadow hover:shadow-md group-hover:border-primary/40">
                        <div className="relative aspect-video bg-muted overflow-hidden">
                          {thumb && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={thumb}
                              alt={v.title}
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              loading="lazy"
                            />
                          )}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <CardContent className="pt-4 pb-4">
                          <div className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-sm shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] uppercase tracking-[0.15em] text-secondary font-semibold mb-1">
                                {v.category}
                              </div>
                              <div className="font-serif text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                                {v.title}
                                <span className="text-xs opacity-60 ml-1.5">↗</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
