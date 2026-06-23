---
name: performance-auditor
description: Audit and improve front-end performance and Core Web Vitals for the Next.js site — LCP, CLS, INP, bundle size, image/font loading, render-blocking work. Use when asked to make the site faster, fix layout shift, reduce bundle, or audit performance. Triggers: "make it faster", "performance", "Core Web Vitals", "LCP", "CLS", "bundle size", "slow load", "lighthouse".
---

# Performance Auditor (Core Web Vitals)

Targets: **LCP < 2.5s, CLS < 0.1, INP < 200ms**. Audit first, quantify, then fix the
biggest offender. Prefer measurement over guessing.

## LCP (largest contentful paint)
- Hero image/heading is usually LCP. The hero image must use `next/image` with `priority`
  and an accurate `sizes` (it does). Don't mark below-the-fold images `priority`.
- Fonts: `display: "swap"` (set) so text paints immediately.
- Keep above-the-fold CSS cheap; the heavy fixed background layers are desktop-only
  (`hidden lg:block`) — keep expensive effects off mobile.

## CLS (layout shift)
- Every image needs intrinsic dimensions (`width`/`height` or `fill` + sized parent).
- Reserve space for anything async; don't inject content that pushes layout.
- Animate only `transform`/`opacity` (the `.ps-*` animations do). Never animate
  width/height/top/left.

## INP / responsiveness
- Keep client components small (this site is mostly static SSG — protect that).
- Throttle/passive-listen high-frequency events (the scroll listener uses `{ passive: true }`).
- Avoid heavy work in event handlers; defer non-critical JS.

## Bundle / JS
- Minimize `"use client"` surface — every client component ships JS. Keep pages/sections
  as Server Components.
- `next/dynamic` for genuinely heavy, below-the-fold, or interaction-gated widgets.
- Watch `lucide-react` imports: import named icons (`import { Menu } from "lucide-react"`),
  never the whole library.

## Images
- `.webp`/`.avif`, correct `sizes`, `loading="lazy"` (default for non-priority next/image).
- Don't ship 1024px icons where 192px is rendered (manifest declares sizes; fine — but for
  in-page `<Image>`, size to actual display).

## Audit workflow
1. `npm run build` → read the route table for unexpectedly large First Load JS.
2. Lighthouse (mobile preset) on `/`, `/contact`, an industry page.
3. Identify the single worst metric, fix its top cause, re-measure.
4. Confirm no regression in CLS after any animation/layout change.
