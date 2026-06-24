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
  summary,
  afterToc,
  wide = false,
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
  /* small "at a glance" card shown above the body, instead of a full contents box */
  summary?: { title: string; items: string[] }
  /* optional custom content rendered between the contents box and the sections,
     for pages that need richer elements (e.g. a provider table) than plain
     prose sections. Aligned to the same reading measure as the body. */
  afterToc?: ReactNode
  /* opt into a slightly wider, single-measure column (no narrow inner cap) for
     pages whose content benefits from more room, e.g. a provider table. */
  wide?: boolean
}) {
  /* Desktop documentation layout: the content shares the hero's 1240px container
     (so its left edge sits directly under the title) and inner blocks are
     left-aligned for a wider, more confident feel. Prose keeps a readable measure
     (~800px); the "On this page" box and any tables/cards extend further right.
     On mobile every block is full-width (narrower than these caps) with px-5
     gutters, so the mobile layout is unchanged. */
  const containerW = "max-w-[1240px]"
  const read = "max-w-[800px]" // prose reading column, left-aligned
  const box = "max-w-[680px]" // "On this page" / summary — a compact index, left-aligned, kept narrower than the writing column
  const wideArea = wide ? "max-w-[1180px]" : "max-w-[1040px]" // tables / custom content

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} sub={sub} note={`${dateLabel}: ${lastUpdated}`} />

      <section className={`ps-doc ${tightTop ? "pb-12 pt-6 sm:pb-24 sm:pt-14" : "py-12 sm:py-24"}`}>
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
              <div className={`mb-10 rounded-2xl bg-white/[0.02] p-6 sm:p-8 lg:mb-14 ${box}`}>
                <h2 className="ps-label ps-label-legible">{summary.title}</h2>
                <ul className="mt-5 space-y-3">
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
                className={`mb-16 rounded-2xl bg-white/[0.02] p-6 sm:p-8 ${box}`}
              >
                <h2 className="ps-label ps-label-legible">On this page</h2>
                <ol
                  className="mt-5 grid grid-cols-1 gap-x-12 gap-y-2.5 sm:grid-flow-col sm:grid-cols-2"
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

          {afterToc && <div className={`mb-16 ${wideArea}`}>{afterToc}</div>}

          <div className={`space-y-12 ${read}`}>
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 30}>
                <div
                  id={slugify(s.h)}
                  className="scroll-mt-28 border-t border-[var(--hair)] pt-8 first:border-t-0 first:pt-0 sm:pt-10"
                >
                  <h2 className="text-[19px] font-medium tracking-tight text-white">
                    {s.h}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {s.body?.map((p, j) => (
                      <p key={j} className="text-[15.5px] leading-relaxed text-[var(--silver)]">
                        {p}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="space-y-2.5 pl-1">
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
                className={`mt-14 border-t border-[var(--hair)] pt-10 text-[14px] leading-relaxed text-[var(--muted)] ${read}`}
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
