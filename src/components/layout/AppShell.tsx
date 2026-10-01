"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { APP_VERSION } from "@/lib/version";

const NAV_SECTIONS = [
  {
    title: "Making Pizza",
    items: [
      { href: "/dough-maker", label: "🥖 Dough", short: "Dough" },
      { href: "/", label: "📖 Recipes", short: "Recipes" },
      { href: "/videos", label: "🎬 Videos", short: "Videos" },
    ],
  },
  {
    title: "Ingredients & Process",
    items: [
      { href: "/flour-guide", label: "🌾 Flour Guide", short: "Flour" },
      { href: "/spiral-mixer", label: "🌀 Spiral Mixer", short: "Mixer" },
      { href: "/fermentation", label: "⏱️ Fermentation", short: "Ferment" },
      { href: "/fridge", label: "🧊 Fridge", short: "Fridge" },
      { href: "/oven", label: "🔥 Oven", short: "Oven" },
      { href: "/olive-oil", label: "🫒 Olive Oil", short: "Oil" },
      { href: "/pumpkin-base", label: "🎃 Pumpkin Base", short: "Pumpkin" },
      { href: "/preferments", label: "🧫 Preferments", short: "Pref." },
      { href: "/yeast", label: "🔬 Yeast", short: "Yeast" },
      { href: "/pizza-styles", label: "📋 Pizza Styles", short: "Styles" },
    ],
  },
  {
    title: "Pizzaiolo",
    items: [
      { href: "/comparison", label: "📊 Comparison", short: "Compare" },
      { href: "/calculator", label: "🍕 Calculator", short: "Calc" },
      { href: "/create", label: "👨‍🍳 Create a Pizza", short: "Create" },
    ],
  },
  {
    title: "Menus",
    items: [
      { href: "/menu", label: "🧾 La Carta", short: "La Carta" },
      { href: "/gabriellos", label: "🍽️ Gabriellos Settings", short: "Gabriellos" },
      { href: "/gabriellos/catering", label: "🎉 Catering Menu", short: "Catering" },
    ],
  },
];

const NAV = NAV_SECTIONS.flatMap((s) => s.items);

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar – desktop */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-border bg-sidebar">
        <div className="px-5 py-6 border-b border-border">
          <span className="font-serif text-2xl font-semibold tracking-tight text-primary">Pizza Lab</span>
          <p className="text-xs text-muted-foreground mt-1 italic">Dough · Fire · Flour</p>
          <p className="text-[10px] text-muted-foreground/70 mt-1 font-mono">v{APP_VERSION}</p>
        </div>
        <nav className="flex-1 p-3 space-y-5 overflow-y-auto">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-1">
              <p className="px-3 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                {section.title}
              </p>
              {section.items.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === href
                      ? "bg-primary/15 text-primary"
                      : "text-foreground/75 hover:text-foreground hover:bg-sidebar-accent"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground italic">🍕 Made with love</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-card sticky top-0 z-40">
          <span className="text-lg font-bold text-primary">
            Pizza Lab <span className="text-[10px] font-mono font-normal text-muted-foreground/70">v{APP_VERSION}</span>
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted-foreground hover:text-foreground p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </header>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-card border-b border-border z-30 max-h-[70vh] overflow-y-auto">
            <nav className="p-3 space-y-3">
              {NAV_SECTIONS.map((section) => (
                <div key={section.title}>
                  <p className="px-1 pb-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                    {section.title}
                  </p>
                  <div className="grid grid-cols-3 gap-1">
                    {section.items.map(({ href, short }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "text-center px-2 py-2 rounded-lg text-xs font-medium transition-colors",
                          pathname === href
                            ? "bg-primary/15 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {short}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Bottom nav – mobile */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40 flex">
          {NAV.slice(0, 5).map(({ href, short }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex-1 flex flex-col items-center py-2 text-[10px] font-medium transition-colors",
                pathname === href ? "text-primary" : "text-muted-foreground"
              )}
            >
              <span className="text-base">{short === "Recipes" ? "📖" : short === "La Carta" ? "🧾" : short === "Dough" ? "🥖" : short === "Oven" ? "🔥" : short === "Oil" ? "🫒" : short === "Pumpkin" ? "🎃" : short === "Fridge" ? "🧊" : short === "Styles" ? "📋" : short === "Videos" ? "🎬" : short === "Pref." ? "🧫" : short === "Mixer" ? "🌀" : short === "Ferment" ? "⏱️" : short === "Create" ? "👨‍🍳" : short === "Compare" ? "📊" : "🍕"}</span>
              <span>{short}</span>
            </Link>
          ))}
        </nav>

        <main className="flex-1 p-4 md:p-8 pb-20 md:pb-8 max-w-5xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
