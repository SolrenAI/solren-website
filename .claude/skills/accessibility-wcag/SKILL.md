---
name: accessibility-wcag
description: Audit and fix UI against WCAG 2.2 AA. Use when reviewing or building UI for accessibility, keyboard/screen-reader support, contrast, focus, ARIA, forms, or "is this accessible". Triggers: "check accessibility", "a11y review", "keyboard navigation", "screen reader", "contrast", "ARIA", "WCAG".
---

# Accessibility — WCAG 2.2 AA

Audit, then fix. Report findings as: **issue · WCAG criterion · file:line · fix**.

## Perceivable
- **Contrast**: body/icon text ≥ 4.5:1, large text (≥24px or 19px bold) ≥ 3:1, UI
  components/graphics ≥ 3:1 (1.4.3 / 1.4.11). On the dark `--ground`, watch `--muted`
  (#8f929b) and `--faint` (#5c5f68) — `--faint` fails for body text; only use it for
  decoration or large/secondary text, never small functional copy.
- **Images**: meaningful → descriptive `alt`; decorative → `alt=""` + `aria-hidden="true"`
  (the layout's atmosphere layers already do this).
- **Don't rely on color alone** (1.4.1): pair status color with icon/text.

## Operable
- **Keyboard**: every interactive element reachable and operable by keyboard; logical tab
  order (2.1.1). No keyboard traps.
- **Focus visible** (2.4.7): never remove focus rings without a replacement. Use
  `focus:ring-2 focus:ring-[#ff6a2c]/...` consistent with the form fields.
- **Skip link** (2.4.1): present in `layout.tsx` → `#main`. Keep `main` with `id="main"`.
- **Target size** (2.5.8, WCAG 2.2): interactive targets ≥ 24×24px (aim 44×44). Check small
  icon buttons; add padding/hit area if short.
- **Focus not obscured** (2.4.11, WCAG 2.2): the fixed header must not hide focused content —
  ensure scroll-margin/offset for in-page anchors.

## Understandable
- `<html lang>` set (it is: `en`).
- **Forms**: visible `<label>` per field (the `Field` wrapper does this), `required` marked,
  semantic `type` (email/tel) for correct mobile keyboard + autofill. Errors near the field
  with `role="alert"` / `aria-live`. Don't rely on placeholder as label.
- Headings sequential h1→h6, no skipped levels; one h1 per page.

## Robust
- Icon-only buttons need `aria-label` (see nav toggle).
- Disclosure controls: `aria-expanded` + `aria-controls` (nav mobile menu).
- Grouped controls (chip selectors): `role="group"` + `aria-label` (book-demo).
- Respect `prefers-reduced-motion` — `public-site.css` already disables reveals/floats/scan;
  any NEW animation must be added to that media query too.

## Verify
- Keyboard-only pass: Tab from top → skip link → through nav → into form → submit.
- Check at 200% zoom and 375px width (no horizontal scroll, no clipped text).
- Spot-check contrast on the darkest surfaces with actual hex values.
