---
name: motion
description: Motion and animation guidelines for this site — durations, easing, transform/opacity-only animation, scroll reveals, hover/press states, and prefers-reduced-motion (Next 16, React 19, Tailwind v4). Use when adding or fixing animations, transitions, scroll reveals, or interaction feedback. Triggers: "add animation", "transition", "scroll reveal", "hover effect", "make it animate", "motion", "reduced motion", "it feels janky", "fade in".
---

# Motion — Solren

This project: **Next.js 16, React 19, Tailwind v4**. Existing motion lives in the
`.ps-*` animation classes in `app/public-site.css` and in `reveal.tsx` /
`rotating-highlight.tsx`. Reuse those patterns — don't add a parallel animation system or
a heavy animation library for simple effects.

## Performance — animate only `transform` & `opacity`
- **Never** animate `width`, `height`, `top`, `left`, `margin` — they trigger layout and
  cause CLS. Use `transform: translate/scale` and `opacity` instead.
- Keep hover/press feedback within the element's bounds; don't shift surrounding layout.
- Heavy fixed background effects stay desktop-only (`hidden lg:block`) — keep expensive
  motion off mobile.

## Timing & easing
- Micro-interactions **150–300ms**; larger transitions ≤ 400ms; avoid > 500ms.
- **ease-out** for entering, **ease-in** for exiting; avoid `linear` for UI motion.
- Exit ~60–70% of enter duration so dismissals feel responsive.
- Stagger list/grid reveals **30–50ms** per item — not all-at-once, not crawling.

## Meaning & restraint
- Every animation expresses cause→effect (state change, entrance, feedback) — not decoration.
- Animate **1–2 key elements per view**; let the rest stay calm.
- State changes (hover / active / expanded / modal) should ease, not snap. Subtle press
  scale (0.95–1.05) on tappable cards/buttons, restored on release.

## Scroll reveals
- Use the existing `reveal.tsx` (IntersectionObserver) pattern; reveal once, with a small
  translate + fade. Reserve final layout space so reveals never cause shift.

## Accessibility — required
- Respect **`prefers-reduced-motion`**: reduce or disable non-essential motion and show the
  end state immediately. Gate JS-driven animation on the media query and mirror it in CSS
  (`@media (prefers-reduced-motion: reduce)`).
- Never block input during animation; motion must be interruptible.
- Don't convey information by motion alone.

## React
- Clean up every observer/listener/timeout in the `useEffect` return (see `nav.tsx`,
  `reveal.tsx`). Keep `"use client"` on the animated leaf only — don't pull a whole section
  client-side just to animate one element.

## Before finishing
1. `npm run build` passes clean.
2. Only `transform`/`opacity` animated; no CLS introduced.
3. Reduced-motion path verified (animations reduce/stop, content still readable).
4. Durations in the 150–300ms range with ease-out/ease-in.
