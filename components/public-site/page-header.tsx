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
  containerClass = "max-w-[1240px]",
  bottomClass = "pb-12 sm:pb-16 lg:pb-20",
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
  /* override the hero container max-width (defaults to the standard 1240px) so a
     page can align its hero to a wider content grid */
  containerClass?: string
  /* override the hero bottom padding (e.g. to tuck a grid closer beneath it) */
  bottomClass?: string
}) {
  return (
    <>
      <header className={`relative overflow-hidden pt-24 sm:pt-36 lg:pt-44 ${bottomClass}`}>
      {decoration}
      <div
        className={`relative z-10 mx-auto ${containerClass} px-5 sm:px-6 ${
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
            className={`mt-5 max-w-3xl overflow-visible text-[clamp(2.05rem,8.5vw,4.4rem)] font-medium tracking-[-0.03em] ps-silver sm:mt-7 ${
              looseTitle ? "leading-[1.08] pb-[0.2em] pt-[0.04em]" : "leading-[1.02] pb-[0.14em] sm:leading-[0.98]"
            }`}
          >
            {title}
          </h1>
          {sub && (
            <p className="mt-5 max-w-[34rem] text-[15.5px] leading-[1.65] text-[var(--silver)] sm:mt-7 sm:text-[16px]">
              {sub}
            </p>
          )}
          {note && (
            <div className="mt-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[var(--hair-strong)] bg-white/[0.02] px-3.5 py-2 sm:mt-7 sm:py-1.5">
              <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
              <span className="text-[12.5px] font-medium text-[var(--silver)]">{note}</span>
            </div>
          )}
          {actions && (
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center [&>*]:justify-center sm:[&>*]:w-auto">
              {actions}
            </div>
          )}
        </Reveal>
      </div>
      </header>
      {/* contained, edge-fading divider under the hero — aligned to the page
          container, never a full browser-width cut */}
      {divider && (
        <div className={`mx-auto ${containerClass} px-5 sm:px-6`}>
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          />
        </div>
      )}
    </>
  )
}
