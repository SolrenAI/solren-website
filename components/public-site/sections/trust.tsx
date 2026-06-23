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
  { kind: "lockup", name: "OpenAI", icon: "openai.svg", label: "OpenAI", color: "#FFFFFF", icon_size: 25 },
  { kind: "lockup", name: "Supabase", icon: "supabase.svg", label: "Supabase", color: "#3ECF8E", icon_size: 30 },
  { kind: "lockup", name: "n8n", icon: "n8n.svg", label: "n8n", color: "#EA4B71", icon_size: 30 },
  { kind: "lockup", name: "Vercel", icon: "vercel.svg", label: "Vercel", color: "#FFFFFF", icon_size: 19 },
  {
    kind: "pill",
    name: "Google Workspace",
    icon: "google-workspace.svg",
    label: "Google Workspace",
    icon_color: "#4285F4",
    icon_gradient:
      "conic-gradient(#EA4335 0deg 45deg, #4285F4 45deg 135deg, #34A853 135deg 225deg, #FBBC05 225deg 315deg, #EA4335 315deg 360deg)",
    text_color: "#3C4043",
    icon_size: 16,
    pill_bg: "#ECECEE",
  },
  { kind: "image", name: "Hetzner Cloud", file: "hetzner.png", w: 27, h: 27, label: "Hetzner", label_color: "#E8344C" },
  { kind: "image", name: "Stripe", file: "stripe.svg", w: 77, h: 32 },
]

const logoRows = [items.slice(0, 4), items.slice(4)]

const NAME = "whitespace-nowrap text-[21px] font-semibold tracking-tight sm:text-[22px]"

function LogoItem({ item }: { item: Item }) {
  return (
    <div className="flex shrink-0 items-center gap-3 opacity-70 transition-opacity duration-300 hover:opacity-100">
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
            className="whitespace-nowrap text-[15px] font-semibold tracking-tight sm:text-[16px]"
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
    <section className="relative bg-[#0A0D12] pb-12">
      {/* contained, edge-fading seam instead of a harsh full-width border */}
      <div
        aria-hidden="true"
        className="mx-auto h-px w-full max-w-[1080px] bg-gradient-to-r from-transparent via-[var(--hair-strong)] to-transparent"
      />
      <div className="mx-auto max-w-[1240px] px-6 pt-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="ps-label">Infrastructure</span>
            <h2 className="mt-3 text-[clamp(1.4rem,2.6vw,1.95rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver">
              Built on proven infrastructure.
            </h2>
            <p className="mx-auto mt-3.5 max-w-lg text-[14.5px] leading-relaxed text-[var(--muted)]">
              Trusted technology behind Solren&apos;s automation, messaging and
              payments.
            </p>
          </div>
        </Reveal>

        {/* two balanced centered rows (4 over 3) — a distinct trust layer, no marquee */}
        <Reveal delay={90}>
          <div className="mx-auto mt-5 flex max-w-[920px] flex-col items-center gap-y-8">
            {logoRows.map((row, r) => (
              <div
                key={r}
                className="flex flex-wrap items-center justify-center gap-x-[54px] gap-y-7 sm:gap-x-[72px]"
              >
                {row.map((item) => (
                  <LogoItem key={item.name} item={item} />
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
