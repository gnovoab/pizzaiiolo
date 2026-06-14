"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/comparison", label: "📊 Comparison", short: "Compare" },
  { href: "/", label: "🍕 Calculator", short: "Calc" },
  { href: "/create", label: "👨‍🍳 Create a Pizza", short: "Create" },
  { href: "/recipes", label: "📖 Pizza Recipes", short: "Recipes" },
  { href: "/dough-maker", label: "🥖 Dough Maker", short: "Dough" },
  { href: "/fridge", label: "🧊 Fridge", short: "Fridge" },
  { href: "/oven", label: "🔥 Oven", short: "Oven" },
  { href: "/olive-oil", label: "🫒 Olive Oil", short: "Oil" },
  { href: "/videos", label: "🎬 Videos", short: "Videos" },
  { href: "/preferments", label: "🧫 Preferments", short: "Pref." },
  { href: "/yeast", label: "🔬 Yeast", short: "Yeast" },
];

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
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {NAV.map(({ href, label }) => (
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
        </nav>
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground italic">🍕 Made with love</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-card sticky top-0 z-40">
          <span className="text-lg font-bold text-primary">Pizza Lab</span>
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
          <div className="md:hidden bg-card border-b border-border z-30">
            <nav className="p-3 grid grid-cols-3 gap-1">
              {NAV.map(({ href, short }) => (
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
              <span className="text-base">{short === "Calc" ? "🍕" : short === "Create" ? "👨‍🍳" : short === "Compare" ? "📊" : short === "Recipes" ? "📖" : short === "Dough" ? "🥖" : short === "Oven" ? "🔥" : short === "Oil" ? "🫒" : short === "Fridge" ? "🧊" : short === "Videos" ? "🎬" : short === "Pref." ? "🧫" : "🍕"}</span>
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
