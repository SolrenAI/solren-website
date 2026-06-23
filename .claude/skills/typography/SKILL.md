---
name: typography
description: Typography system for this site — type scale, font pairing, weights, line-height, line length/measure, and tabular numbers (Next 16, React 19, Tailwind v4). Use when setting headings/body text, choosing sizes or weights, fixing readability, or aligning text styling to the design system. Triggers: "type scale", "font size", "font weight", "line height", "heading hierarchy", "readability", "line length", "font pairing", "make the text look right".
---

# Typography — Solren

This project: **Next.js 16, React 19, Tailwind v4**. Fonts are loaded in the root
`layout.tsx` via `next/font/google` with `display: "swap"` and exposed as CSS vars:
`--font-inter` (sans / UI + body) and `--font-geist-mono` (mono / data). Use the
`.ps`-scoped design system in `app/public-site.css` — don't introduce parallel styles.

## Pairing & roles
- **Inter** for headings, body, and UI labels. **Geist Mono** only for code, metrics,
  prices, timers, and tabular data — not for prose.
- One typeface family per role; don't mix a third font in.

## Type scale (use consistent steps, don't invent in-between sizes)
- Steps: **12 · 14 · 16 · 18 · 24 · 32 · 48** (+ display sizes for hero only).
- Body base **16px minimum** on mobile (prevents iOS auto-zoom). Never put body copy < 14px.
- Scale headings down responsively (e.g. `text-3xl md:text-5xl`), keep one logical jump
  per level — no skipping straight from hero size to body.

## Weight hierarchy
- Headings **600–700**, body **400**, labels/eyebrows **500**. Reinforce hierarchy with
  weight + size + spacing, **not color alone**.
- Avoid faux-bold or stacking too many weights; 2–3 weights total across the page.

## Line-height & measure
- Body **line-height 1.5–1.75**; tight headings ~1.1–1.25.
- Measure: **35–60 chars/line on mobile, 60–75 on desktop**. Cap long-form blocks with a
  `max-w-*` (e.g. `max-w-prose` / `max-w-2xl`) — never edge-to-edge paragraphs on desktop.

## Numbers, color & truncation
- Use **tabular / monospaced figures** (Geist Mono or `tabular-nums`) for prices, stats,
  and anything in a column/timer to stop layout shift.
- Body contrast ≥ **4.5:1** (e.g. slate-900 on white); secondary text ≥ 3:1. Verify in
  **both light and dark** — don't assume light-mode values pass in dark.
- Prefer wrapping over truncation; if truncating, use ellipsis + full text via title/tooltip.
- Respect default letter-spacing per the design tokens; don't tighten tracking on body text.

## Heading semantics
- Sequential `h1→h6`, **no skipped levels** (one `h1` per page). Style with classes, not by
  picking a heading tag for its size.

## Before finishing
1. `npm run build` passes clean (type-check).
2. No body text below 16px on mobile; line-length capped on desktop.
3. Heading order is sequential and the scale uses the defined steps only.
4. Contrast checked in light **and** dark mode.
