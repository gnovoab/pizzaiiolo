import { Card, CardContent } from "@/components/ui/card";

interface VideoEntry {
  number: number;
  title: string;
  category: string;
  url: string;
}

const VIDEOS: VideoEntry[] = [
  { number: 1, title: "Stretching perfection",            category: "Stretching",  url: "https://www.youtube.com/watch?v=4oNczFlRktA" },
  { number: 2, title: "Another stretching pizza",         category: "Stretching",  url: "https://www.youtube.com/watch?v=mSUIZqOfmnM" },
  { number: 3, title: "Pizza making from different places", category: "Inspiration", url: "https://www.youtube.com/watch?v=yiFEksEWXEc" },
  { number: 4, title: "Cooking with Gozney",              category: "Oven",        url: "https://www.youtube.com/watch?v=wC34d4i_RMs" },
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

      <div className="grid gap-5 sm:grid-cols-2">
        {VIDEOS.map((v) => {
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
                      {v.number}
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
    </div>
  );
}
