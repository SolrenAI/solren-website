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
  topClass = "pt-24 sm:pt-30 lg:pt-30",
  titleClass = "text-[clamp(2.05rem,8.5vw,4.4rem)]",
  subClass = "mt-5 sm:mt-7",
  noteClass,
  subGapClass,
  innerClass,
  actionsGapClass,
  subExtra,
  compact = false,
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
  /* override the hero top padding (space under the fixed nav); defaults to
     pt-24 sm:pt-30 lg:pt-30 — one global desktop hero height across all pages
     (legal pages keep a tighter mobile/tablet via their own override) */
  topClass?: string
  /* override the hero title size classes (e.g. a smaller, more compact title on
     a utility page); defaults to the standard large hero clamp */
  titleClass?: string
  /* override the title→sub vertical gap (defaults to mt-5 sm:mt-7), e.g. to
     micro-tighten the hero rhythm on a specific page */
  subClass?: string
  /* override the sub→note (date badge) vertical gap, e.g. to micro-tighten the
     mobile rhythm on a specific page; defaults to the compact/standard noteGap */
  noteClass?: string
  /* override the title→sub (headline → supporting paragraph) vertical gap;
     defaults to mt-3 sm:mt-4 — e.g. to micro-tighten editorial rhythm on a page */
  subGapClass?: string
  /* optional class on a wrapper around the hero text block (left-aligned inside
     the container), e.g. to cap the copy column width on a specific breakpoint so
     a side decoration can never overlap it. Default undefined → unchanged. */
  innerClass?: string
  /* extra classes appended to the sub paragraph, e.g. `hidden sm:block` to drop
     the hero explanation on mobile only. Default undefined → unchanged. */
  subExtra?: string
  /* appended to the sub/note→actions wrapper, e.g. an `lg:` override to tighten
     the desktop gap above the hero CTAs on a specific page. Default undefined →
     unchanged (mobile/tablet rhythm preserved). */
  actionsGapClass?: string
  /* compact hero rhythm: tightens only the mobile vertical gaps (eyebrow→title,
     title→sub, sub→note, note→actions and the action-button gap). All sm+ values
     are unchanged, so desktop is untouched. Default off — every other page is
     unaffected. */
  compact?: boolean
}) {
  /* One global hero rhythm (same as section rhythm): eyebrow→headline lives on
     the eyebrow's mb (mb-4 sm:mb-5); headline→copy is mt-3 sm:mt-4. `compact`
     and `subClass` are retained for back-compat but no longer vary these. */
  const subGap = "mt-3 sm:mt-4"
  const noteGap = compact ? "mt-[19px] sm:mt-7" : "mt-6 sm:mt-7"
  const actionsGap = compact ? "mt-[22px] gap-2.5 sm:mt-9 sm:gap-3" : "mt-7 gap-3 sm:mt-9"
  void subClass
  return (
    <>
      <header className={`relative overflow-hidden ${topClass} ${bottomClass}`}>
      {decoration}
      <div
        className={`relative z-10 mx-auto ${containerClass} px-5 sm:px-6 ${
          nudgeLeft ? "min-[1360px]:-translate-x-[50px]" : ""
        }`}
      >
       <div className={innerClass}>
        <Reveal>
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className={`h-1.5 w-1.5 rounded-full bg-[#537FEA]${eyebrowPulse ? " ps-live-dot" : ""}`} />
            <span className="ps-label">{eyebrow}</span>
          </div>
          {/* overflow-visible + a little bottom padding gives background-clip:text
              descenders (g, q, y) room so they are not clipped on the last line.
              `looseTitle` opens the line-height and padding further for headlines
              that wrap, so glyph tops and bottoms render cleanly. */}
          <h1
            className={`max-w-3xl overflow-visible ${titleClass} font-medium tracking-[-0.03em] ps-silver ${
              looseTitle ? "leading-[1.08] pb-[0.2em] pt-[0.04em]" : "leading-[1.02] pb-[0.14em] sm:leading-[0.98]"
            }`}
          >
            {title}
          </h1>
          {sub && (
            <p className={`${subGapClass ?? subGap} max-w-[34rem] text-[15.5px] leading-[1.65] text-[var(--silver)] sm:text-[16px] ${subExtra ?? ""}`}>
              {sub}
            </p>
          )}
          {note && (
            <div className={`${noteClass ?? noteGap} inline-flex max-w-full items-center gap-2.5 rounded-full border border-[var(--hair-strong)] bg-white/[0.02] px-3.5 py-2 sm:py-1.5`}>
              <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
              <span className="text-[12.5px] font-medium text-[var(--silver)]">{note}</span>
            </div>
          )}
          {actions && (
            <div className={`${actionsGap} ${actionsGapClass ?? ""} flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center [&>*]:justify-center sm:[&>*]:w-auto`}>
              {actions}
            </div>
          )}
        </Reveal>
       </div>
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
