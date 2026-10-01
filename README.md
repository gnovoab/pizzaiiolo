# Pizza Lab (pizzaiiolo) — v1.0

A pizzaiolo's cookbook web app (dough calculators, pizzaiolo comparisons, recipe
manual, fermentation/oven/flour guides) that also hosts **Gabriellos**, a real
restaurant's live menu and catering admin tool backed by MongoDB and gated by
Google sign-in.

> 🤖 **AI agents / new contributors: read [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md)
> first.** It documents the full tech stack, repository layout, every nav tab/section,
> the Gabriellos data flow & auth model, and conventions to follow before editing.

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in MONGODB_URI, AUTH_GOOGLE_ID/SECRET, AUTH_SECRET, ADMIN_EMAIL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the Cookbook (home page).
The Gabriellos admin tool lives at `/gabriellos` (requires Google sign-in as the
`ADMIN_EMAIL` account); the public live menu is at `/menu`.

Other scripts: `npm run build`, `npm run start`, `npm run lint`.
Typecheck only: `npx tsc --noEmit`.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 + shadcn/ui ·
Zustand (Cookbook state) · MongoDB (Gabriellos data) · Auth.js / Google OAuth
(Gabriellos auth) · deployed on Vercel.

See [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md) for full details.
