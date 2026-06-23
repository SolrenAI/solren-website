import { Reveal } from "./reveal"

export function PageHeader({
  eyebrow,
  title,
  sub,
  note,
  actions,
  decoration,
  divider = true,
  eyebrowPulse = false,
  looseTitle = false,
  nudgeLeft = false,
}: {
  eyebrow: string
  title: React.ReactNode
  sub?: string
  note?: string
  /* optional primary/secondary CTAs rendered under the subheading */
  actions?: React.ReactNode
  /* optional, page-specific atmospheric layer rendered behind the heading */
  decoration?: React.ReactNode
  /* full-width hairline under the hero; defaults on. Set false to drop it. */
  divider?: boolean
  /* very subtle live pulse on the eyebrow dot; off by default */
  eyebrowPulse?: boolean
  /* looser line-height + extra vertical room for headlines that wrap and would
     otherwise clip glyph tops/bottoms; keeps the same size and tracking */
  looseTitle?: boolean
  /* nudge the hero text block slightly left for a more intentional, less
     centred feel; only on wide viewports where there is margin to absorb it */
  nudgeLeft?: boolean
}) {
  return (
    <>
      <header className="relative overflow-hidden pt-40 pb-20 sm:pt-44">
      {decoration}
      <div
        className={`relative z-10 mx-auto max-w-[1240px] px-6 ${
          nudgeLeft ? "min-[1360px]:-translate-x-[50px]" : ""
        }`}
      >
        <Reveal>
          <div className="flex items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full bg-[#537FEA]${eyebrowPulse ? " ps-live-dot" : ""}`} />
            <span className="ps-label">{eyebrow}</span>
          </div>
          {/* overflow-visible + a little bottom padding gives background-clip:text
              descenders (g, q, y) room so they are not clipped on the last line.
              `looseTitle` opens the line-height and padding further for headlines
              that wrap, so glyph tops and bottoms render cleanly. */}
          <h1
            className={`mt-7 max-w-3xl overflow-visible text-[clamp(2.6rem,6vw,4.4rem)] font-medium tracking-[-0.03em] ps-silver ${
              looseTitle ? "leading-[1.06] pb-[0.2em] pt-[0.04em]" : "leading-[0.98] pb-[0.14em]"
            }`}
          >
            {title}
          </h1>
          {sub && (
            <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-[var(--silver)]">
              {sub}
            </p>
          )}
          {note && (
            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--hair-strong)] bg-white/[0.02] px-3.5 py-1.5">
              <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
              <span className="text-[12.5px] font-medium text-[var(--silver)]">{note}</span>
            </div>
          )}
          {actions && <div className="mt-9 flex flex-wrap items-center gap-3">{actions}</div>}
        </Reveal>
      </div>
      </header>
      {/* contained, edge-fading divider under the hero — aligned to the page
          container, never a full browser-width cut */}
      {divider && (
        <div className="mx-auto max-w-[1240px] px-6">
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          />
        </div>
      )}
    </>
  )
}
