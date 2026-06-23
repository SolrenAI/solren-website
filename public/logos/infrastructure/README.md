# Infrastructure logos

Real brand logos for the "Built on trusted infrastructure." marquee on the
homepage (`components/public-site/sections/trust.tsx`). Local SVGs only; no
external URLs. Used only as infrastructure ("Built with") — not partners, no
endorsement implied.

## In use
Rendered as a premium brand strip: Stripe is its real coloured wordmark; the
others are the icon mark **tinted to the brand colour via CSS mask** with the
brand name beside it (a full lockup). Hetzner has no file and shows as a red
text wordmark.
| File | Rendered as | Brand colour |
| --- | --- | --- |
| `stripe.svg` | coloured wordmark image | purple `#533AFD` |
| `supabase.svg` | icon (tinted) + "Supabase" | green `#3ECF8E` |
| `n8n.svg` | icon (tinted) + "n8n" | red `#EA4B71` |
| `vercel.svg` | triangle (tinted) + "Vercel" | white `#FFFFFF` |
| `openai.svg` | icon (tinted) + "OpenAI" | white `#FFFFFF` |
| `google-workspace.svg` | "G" (tinted) + "Google Workspace" | blue `#4285F4` (single colour, see below) |
| (none) | "Hetzner" text wordmark | red `#E8344C` |

## Needs a file
- **hetzner**: no logo file was provided. It currently shows as a clean text
  wordmark ("Hetzner") in Hetzner red so it appears in the strip and is visible
  on black. Drop in `hetzner.svg` (or `hetzner.png`) and tell me; I will switch
  it to the real logo and size it to match. Label/purpose: "Hetzner Cloud",
  hosting / backend infrastructure.

## Needs a better file
- **google-workspace.svg**: the provided asset is only a plain monochrome Google
  "G" (not the recognizable 4-color G and not a "Google Workspace" wordmark). It
  is shown in white so the strip stays complete, but for a stronger result drop
  in either the official 4-color Google "G" or the proper "Google Workspace"
  logotype (keep the same filename). Rendering keeps aspect ratio, so any size
  works.

## Rendering
Each logo is an `<img>` at a fixed height with width matched to its aspect ratio
(`object-contain`), so nothing is stretched or clipped. The strip is on a near
black background, so dark/black logos must be supplied as light/white variants.
Stripe keeps its brand color; the rest are white marks.
