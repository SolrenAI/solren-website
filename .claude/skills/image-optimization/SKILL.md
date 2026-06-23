---
name: image-optimization
description: Image optimization for this site — next/image usage, WebP/AVIF, responsive sizes, dimensions to prevent CLS, priority vs lazy, and alt text (Next 16, React 19, Tailwind v4). Use when adding or fixing images, choosing formats, fixing layout shift from media, or auditing image weight. Triggers: "add an image", "optimize images", "image format", "webp", "avif", "layout shift", "image too big", "next/image", "alt text", "lazy load".
---

# Image Optimization — Solren

This project: **Next.js 16, React 19, Tailwind v4**. Use `next/image` everywhere; see the
hero and `image-frame.tsx` for the established pattern. This skill is the image-specific
companion to `performance-auditor` (Core Web Vitals).

## Always use `next/image`
- Every raster image goes through `next/image` — never a bare `<img>` for content images.
- Provide explicit **`width`/`height`**, or `fill` with a sized/positioned parent. This
  reserves space and prevents **CLS**.
- Always set a realistic **`sizes`** attribute matching the rendered width across
  breakpoints (e.g. `sizes="(max-width: 768px) 100vw, 50vw"`). A wrong `sizes` ships the
  wrong resolution.

## priority vs lazy
- `priority` **only** for the above-the-fold / LCP image (the hero). Everything below the
  fold stays lazy (next/image default `loading="lazy"`) — never mark below-fold `priority`.
- One `priority` image per page, max.

## Format & weight
- Prefer **`.webp`** (or `.avif`); avoid PNG/JPEG for photos. Next's optimizer serves
  modern formats automatically when sources allow.
- Don't ship a 1024px asset where ~400px renders. Size source files near the largest
  rendered size; let `next/image` generate the responsive set.
- Static assets live in `public/`. Keep originals reasonably sized — don't commit
  multi-MB images.

## Accessibility
- Meaningful images: descriptive **`alt`**. Decorative images: `alt=""` **and**
  `aria-hidden` (see `frontend-nextjs` convention).
- Don't put essential text inside an image; use real text overlaid via CSS.

## Icons / SVG (not raster)
- UI icons come from **`lucide-react`** (import named icons only:
  `import { Menu } from "lucide-react"` — never the whole library). Don't rasterize icons
  and don't use emoji as icons.

## Before finishing
1. `npm run build` passes; check the route table for unexpectedly large First Load JS.
2. Every image has dimensions (or `fill` + sized parent) and a correct `sizes` — no CLS.
3. Only the LCP/hero image is `priority`; the rest lazy-load.
4. Sources are `.webp`/`.avif` and sized to actual display; alt text correct.
