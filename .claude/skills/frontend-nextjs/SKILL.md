---
name: frontend-nextjs
description: Next.js App Router best practices for this site (Next 16, React 19, Tailwind v4). Use when building or refactoring pages/components, choosing server vs client components, handling images/fonts/metadata, data fetching, or cleaning up React code. Triggers: "build a page", "refactor this component", "is this server or client", "clean up the Next.js code", "fix hydration".
---

# Frontend — Next.js (App Router)

This project: **Next.js 16, React 19, Tailwind v4, lucide-react**. Static marketing
site (`solren-website`, port 3100). No Supabase/auth/dashboard here — those live in
`solren-frontend` and are out of scope.

## Server vs Client components
- Default to **Server Components**. Only add `"use client"` when you need state, effects,
  refs, browser APIs, or event handlers.
- Push `"use client"` to the **leaf** (e.g. `nav.tsx`, `book-demo.tsx`), keep pages and
  section wrappers as Server Components so they stay statically rendered.
- Never import a Server-only module into a client component.

## Routing & metadata
- One route = one folder with `page.tsx`. Use `layout.tsx` for shared shell.
- Every page exports `metadata` (or `generateMetadata` for dynamic routes). Keep
  `title`/`description` unique per page; the root `layout.tsx` template adds `· Solren`.
- Dynamic routes export `generateStaticParams` so they prerender (see `app/help/[slug]`).
- SEO files are code: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` (already present).
  Keep the sitemap sourced from the same data file as the route (no hardcoded duplicate lists).
- Redirect stubs use `redirect()` from `next/navigation` (see `app/install-packages`).

## Images & fonts
- Always `next/image` with explicit `width`/`height` (or `fill` + sized parent) and a
  `sizes` attribute. Use `priority` only for above-the-fold/LCP images (hero).
- Prefer `.webp`. Decorative images get `alt=""` + `aria-hidden`.
- Fonts via `next/font/google` with `display: "swap"` (see root layout: Inter + Geist Mono
  exposed as CSS vars `--font-inter`, `--font-geist-mono`).

## React / code quality
- No `useEffect` for derived state — compute with `useMemo` (see `book-demo.tsx` `done`).
- Clean up every listener in `useEffect` return (see scroll/Escape handlers in `nav.tsx`).
- Type props inline or with a `type`; avoid `any`. `strict` is on.
- Keep the `.ps`-scoped design system (`app/public-site.css`) — use its classes/tokens,
  don't introduce parallel styling systems.

## Before finishing
1. `npm run build` must pass clean (it type-checks).
2. New `MetadataRoute.*` / routes appear in the build route table.
3. No client component leaked `"use client"` up to a page that could stay static.
