---
name: brand-strategist
description: Keep the Solren brand consistent across the site — visual identity, color/type tokens, tone, naming, and positioning. Use when checking brand consistency, reviewing new UI for on-brand-ness, defining brand rules, or making design decisions that affect identity. Triggers: "is this on brand", "brand consistency", "brand guidelines", "positioning", "tone of voice", "do the colors match".
---

# Brand Strategist — Solren

## Positioning (one line)
Solren is the **follow-up system for service businesses** — it catches every enquiry,
replies in seconds, follows up automatically, and keeps work moving until it's booked.
Tone of the brand: **industrial calm** — quiet power, premium, never flashy.

## Visual identity (source of truth: `app/public-site.css`, `.ps` scope)
Use these tokens — do not introduce off-palette colors:
- Ground `--ground #07080b`, raised `--raised #101319`, warm `--warm #0f0b08`
- Type: `--white #f6f7f9`, `--silver #ccced4`, `--muted #8f929b`, `--faint #5c5f68`
- Hairlines: `--hair`, `--hair-strong`
- **Accent: `--spark #ff6a2c`** (deep `--spark-deep #c2410c`). Orange is the *only* accent
  and marks **active moments** (a reply going out, a job booked) — used sparingly. Don't
  spray it; its scarcity is the brand.
- Fonts: **Inter** (UI/headings), **Geist Mono** (eyebrows, labels, numbers, timings).

## Visual rules
- Dark, dimensional, composed. Atmosphere via subtle navy depth + a faint warm pool; never
  neon glows competing with content.
- Headlines use the silver sheen (`.ps-silver`); eyebrows/labels use `.ps-label` (mono,
  uppercase, wide tracking).
- Cards = `.ps-card` (sculpted, hairline, deep soft shadow). Use existing component classes
  rather than reinventing shadows/borders.
- Icons: **lucide-react only**, consistent stroke. No emoji as UI/structural icons.
- Imagery: real trades/infrastructure, darkened/desaturated to sit in the dark ground.
- Motion is restrained and meaningful (live dots, slow float, signal scan) and always
  respects `prefers-reduced-motion`.

## Verbal identity
- Name is **Solren** (capital S). Tagline family: "Reply faster. Book more jobs."
- Plain, confident, Australian spelling, no hype. (See `conversion-copywriter`.)

## Consistency review checklist
- Only brand tokens used? No stray hex outside the `.ps` system?
- Orange reserved for active/CTA moments, not decoration?
- Inter + Geist Mono only? lucide icons, consistent stroke, no emoji?
- Logo: official `/logos/solren-logo.png`, correct proportions, clear space?
- Does it feel "industrial calm" — premium and quiet, not loud?
- Light/dark and hover/focus states stay on-brand and legible.
