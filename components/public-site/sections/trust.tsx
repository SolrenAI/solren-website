import { Reveal } from "../reveal"

/* The infrastructure Solren is built with, shown as a premium brand strip.
   Stripe is a real coloured wordmark. The rest are monochrome marks tinted to
   their brand colour via CSS mask, with the brand name beside them so each
   reads as a full lockup, not an icon. Hetzner has no file yet, so it shows as
   a clean wordmark in its brand red. Named as systems, not partners; no
   endorsement implied. */
type Item =
  | { kind: "image"; name: string; file: string; w: number; h: number; label?: string; label_color?: string }
  | { kind: "lockup"; name: string; icon: string; label: string; color: string; icon_size: number; text_color?: string }
  | { kind: "pill"; name: string; icon: string; label: string; icon_color: string; text_color: string; icon_size: number; pill_bg: string; icon_gradient?: string }
  | { kind: "text"; name: string; label: string; color: string }

// ordered to read as two balanced centered rows (4 over 3), no logo stranded:
//   Row 1: OpenAI · Supabase · n8n · Vercel
//   Row 2: Google Workspace · Hetzner · Stripe
const items: Item[] = [
  { kind: "lockup", name: "OpenAI", icon: "openai.svg", label: "OpenAI", color: "#FFFFFF", icon_size: 21 },
  { kind: "lockup", name: "Supabase", icon: "supabase.svg", label: "Supabase", color: "#3ECF8E", icon_size: 26 },
  { kind: "lockup", name: "n8n", icon: "n8n.svg", label: "n8n", color: "#EA4B71", icon_size: 26 },
  { kind: "lockup", name: "Vercel", icon: "vercel.svg", label: "Vercel", color: "#FFFFFF", icon_size: 16 },
  {
    kind: "pill",
    name: "Google Workspace",
    icon: "google-workspace.svg",
    label: "Google Workspace",
    icon_color: "#4285F4",
    icon_gradient:
      "conic-gradient(#EA4335 0deg 45deg, #4285F4 45deg 135deg, #34A853 135deg 225deg, #FBBC05 225deg 315deg, #EA4335 315deg 360deg)",
    text_color: "#3C4043",
    icon_size: 14,
    pill_bg: "#ECECEE",
  },
  { kind: "image", name: "Hetzner Cloud", file: "hetzner.png", w: 23, h: 23, label: "Hetzner", label_color: "#E8344C" },
  { kind: "image", name: "Stripe", file: "stripe.svg", w: 65, h: 27 },
]

const NAME = "whitespace-nowrap text-[18px] font-semibold tracking-tight sm:text-[19px]"

function LogoItem({ item }: { item: Item }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 opacity-70 transition-opacity duration-300 hover:opacity-100">
      {item.kind === "image" && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/logos/infrastructure/${item.file}`}
            alt={item.name}
            width={item.w}
            height={item.h}
            style={{ width: item.w, height: item.h }}
            className="block max-w-none object-contain"
          />
          {item.label && (
            <span className={NAME} style={{ color: item.label_color }}>
              {item.label}
            </span>
          )}
        </>
      )}

      {item.kind === "lockup" && (
        <>
          <span
            aria-hidden="true"
            className="ps-brand-icon"
            style={{
              width: item.icon_size,
              height: item.icon_size,
              backgroundColor: item.color,
              WebkitMaskImage: `url(/logos/infrastructure/${item.icon})`,
              maskImage: `url(/logos/infrastructure/${item.icon})`,
            }}
          />
          <span className={NAME} style={{ color: item.text_color ?? item.color }}>
            {item.label}
          </span>
        </>
      )}

      {item.kind === "pill" && (
        <span
          className="flex items-center gap-2.5 rounded-full border border-black/10 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
          style={{ backgroundColor: item.pill_bg }}
        >
          <span
            aria-hidden="true"
            className="ps-brand-icon"
            style={{
              width: item.icon_size,
              height: item.icon_size,
              backgroundColor: item.icon_color,
              backgroundImage: item.icon_gradient,
              WebkitMaskImage: `url(/logos/infrastructure/${item.icon})`,
              maskImage: `url(/logos/infrastructure/${item.icon})`,
            }}
          />
          <span
            className="whitespace-nowrap text-[13px] font-semibold tracking-tight sm:text-[14px]"
            style={{ color: item.text_color }}
          >
            {item.label}
          </span>
        </span>
      )}

      {item.kind === "text" && (
        <span aria-label={item.name} className={NAME} style={{ color: item.color }}>
          {item.label}
        </span>
      )}
    </div>
  )
}

export function Trust() {
  return (
    /* How It Works only (hidden md:block = desktop-only). No background panel —
       the strip blends into the page ground, set apart only by a subtle,
       edge-fading divider above it. A generous top margin gives breathing room
       from the custom-built section and pushes the strip down toward the footer;
       the small inline paddingBottom keeps the gap before the footer modest
       (overriding the global #main last-child cap, so the footer's 96px margin
       reads as a tidy gap rather than dead space). */
    <section className="relative mt-20 hidden md:block" style={{ paddingBottom: "0.5rem" }}>
      {/* subtle, low-opacity divider that fades at both edges — no heavy panel */}
      <div
        aria-hidden="true"
        className="mx-auto h-px w-full max-w-[1080px] bg-gradient-to-r from-transparent via-white/[0.10] to-transparent"
      />
      <div className="mx-auto max-w-[1240px] px-6 pt-6">
        {/* Compact trust strip: a small label + one flowing row of marks. No
            heading hierarchy, no standalone-section framing — a quiet trust signal
            that wraps gracefully rather than reading as its own content block. */}
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <span className="ps-label">Built on proven infrastructure</span>
            <div className="flex max-w-[1040px] flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {items.map((item) => (
                <LogoItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
