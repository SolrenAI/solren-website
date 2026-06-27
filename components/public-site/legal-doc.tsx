import type { ReactNode } from "react"
import { PageHeader } from "./page-header"
import { Reveal } from "./reveal"

export type LegalSection = {
  h: string
  body?: string[]
  bullets?: string[]
}

/* stable anchor id from a heading, e.g. "AI and automation" -> "ai-and-automation" */
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

/*
 * Shared layout for the marketing legal pages (Privacy, Terms). Typography
 * first: a narrow readable column, clear section headings, restrained dividers
 * and generous spacing. Premium dark theme, no cards or gradients.
 */
export function LegalDoc({
  eyebrow,
  title,
  sub,
  lastUpdated,
  dateLabel = "Last updated",
  intro,
  sections,
  footer,
  toc = false,
  tightTop = false,
  looseTitle = false,
  summary,
  afterToc,
  wide = false,
  editorial = false,
}: {
  eyebrow: string
  title: ReactNode
  sub?: string
  lastUpdated: string
  /* label shown before the date, e.g. "Last reviewed" or "Effective" */
  dateLabel?: string
  intro?: string
  sections: LegalSection[]
  footer?: ReactNode
  /* show an "On this page" box that anchor-links to each section */
  toc?: boolean
  /* trim the gap between the hero and the contents, for this page only */
  tightTop?: boolean
  /* open the hero title's line-height + headroom (PageHeader's looseTitle) so a
     short single-line title isn't clipped by the gradient text-clip. */
  looseTitle?: boolean
  /* small "at a glance" card shown above the body, instead of a full contents box */
  summary?: { title: string; items: string[] }
  /* optional custom content rendered between the contents box and the sections,
     for pages that need richer elements (e.g. a provider table) than plain
     prose sections. Aligned to the same reading measure as the body. */
  afterToc?: ReactNode
  /* opt into a slightly wider, single-measure column (no narrow inner cap) for
     pages whose content benefits from more room, e.g. a provider table. */
  wide?: boolean
  /* opt into a tighter, more editorial reading rhythm — narrower column, tighter
     paragraph spacing, slightly more section separation and weightier headings —
     for a policy page that should read like an Apple/OpenAI policy doc. */
  editorial?: boolean
}) {
  /* Desktop documentation layout: the content shares the hero's 1240px container
     (so its left edge sits directly under the title) and inner blocks are
     left-aligned for a wider, more confident feel. Prose keeps a readable measure
     (~800px); the "On this page" box and any tables/cards extend further right.
     On mobile every block is full-width (narrower than these caps) with px-5
     gutters, so the mobile layout is unchanged. */
  const containerW = "max-w-[1240px]"
  const read = editorial ? "max-w-[700px]" : "max-w-[800px]" // prose reading column, left-aligned
  const box = "max-w-[680px]" // "On this page" / summary — a compact index, left-aligned, kept narrower than the writing column
  const wideArea = wide ? "max-w-[1180px]" : "max-w-[1040px]" // tables / custom content
  /* editorial rhythm overrides (opt-in): tighter paragraphs, slightly more section
     separation, weightier headings, and a tightened headline→sub gap */
  const sectionGap = editorial ? "space-y-9 sm:space-y-11" : "space-y-8 sm:space-y-10"
  const bodyGap = editorial ? "space-y-4 sm:space-y-3.5" : "space-y-5 sm:space-y-4"
  const headingWeight = editorial ? "font-semibold" : "font-medium"

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} sub={sub} note={`${dateLabel}: ${lastUpdated}`} looseTitle={looseTitle} divider={false} compact topClass="pt-20 sm:pt-26 lg:pt-30" bottomClass="pb-6 sm:pb-9 lg:pb-6" subGapClass={editorial ? "mt-2.5 sm:mt-3" : undefined} />

      <section className={`ps-doc ${tightTop ? "pb-12 pt-4 sm:pb-16 sm:pt-7 lg:pt-3" : "pb-12 pt-0 -mt-2 sm:mt-0 sm:pb-16 sm:pt-6 lg:pt-2"}`}>
        {/* The contents box is a compact index — left-aligned on the same rail as
            the body and kept narrower than the writing column so it never stretches
            past it. */}
        <div className={`mx-auto px-5 sm:px-6 ${containerW}`}>
          {intro && (
            <Reveal>
              <p
                className={`mb-10 text-[16.5px] leading-relaxed text-[var(--silver)] lg:mb-14 ${read}`}
              >
                {intro}
              </p>
            </Reveal>
          )}

          {summary && (
            <Reveal>
              <div className={`mb-8 rounded-2xl bg-white/[0.02] px-6 py-5 sm:px-8 sm:py-6 lg:mb-7 ${box}`}>
                <h2 className="ps-label ps-label-legible">{summary.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {summary.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--silver)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--faint)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {toc && (
            <Reveal className="hidden md:block">
              <nav
                aria-label="On this page"
                className={`mb-10 lg:mb-7 rounded-2xl bg-white/[0.02] px-6 py-5 sm:px-8 sm:py-6 ${box}`}
              >
                <h2 className="ps-label ps-label-legible">On this page</h2>
                <ol
                  className="mt-4 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-flow-col sm:grid-cols-2"
                  style={{
                    gridTemplateRows: `repeat(${Math.ceil(
                      sections.length / 2,
                    )}, minmax(0, auto))`,
                  }}
                >
                  {sections.map((s, i) => (
                    <li key={s.h}>
                      <a
                        href={`#${slugify(s.h)}`}
                        className="group flex items-baseline gap-3 text-[14.5px] leading-snug text-[var(--silver)] transition-colors hover:text-[#537FEA]"
                      >
                        <span className="text-[12px] tabular-nums text-[var(--faint)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="underline-offset-2 group-hover:underline">
                          {s.h}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>
          )}

          {afterToc && <div className={`mb-12 ${wideArea}`}>{afterToc}</div>}

          <div className={`${sectionGap} ${read}`}>
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 30}>
                <div
                  id={slugify(s.h)}
                  className="scroll-mt-28"
                >
                  <h2 className={`text-[19px] ${headingWeight} tracking-tight text-white`}>
                    {s.h}
                  </h2>
                  <div className={`mt-3 ${bodyGap} sm:mt-4`}>
                    {s.body?.map((p, j) => (
                      <p key={j} className="text-[15.5px] leading-relaxed text-[var(--silver)]">
                        {p}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="space-y-3 pl-1 sm:space-y-2.5">
                        {s.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-[15.5px] leading-relaxed text-[var(--silver)]"
                          >
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#537FEA]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {footer && (
            <Reveal>
              <p
                className={`mt-8 text-[14px] leading-relaxed text-[var(--muted)] sm:mt-10 ${read}`}
              >
                {footer}
              </p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
