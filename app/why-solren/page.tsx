import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Why Solren",
  description:
    "Why service businesses choose Solren: it catches new enquiries, drafts fast replies and follows up, so good leads do not slip away while you are busy.",
  alternates: { canonical: "/why-solren" },
}

/* The leak after an enquiry arrives — three plain failure points. */
const problemCards = [
  {
    title: "Missed calls",
    body: "When someone reaches out and nobody can respond quickly, the job can move to the next business.",
  },
  {
    title: "Slow replies",
    body: "Even good leads go cold when the first response takes too long.",
  },
  {
    title: "Forgotten follow-up",
    body: "A lead that was interested yesterday can disappear if nobody follows up.",
  },
]

/* What Solren does — four plain points, no over-explaining. */
const doesPoints = [
  "Captures new enquiries",
  "Drafts fast replies",
  "Follows up automatically",
  "Keeps you in control",
]

const headingClass =
  "text-[clamp(1.55rem,3.4vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.02em] ps-silver"
const proseClass = "mt-5 max-w-[760px] text-[16px] leading-[1.7] text-[var(--silver)]"

export default function WhySolrenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Solren"
        looseTitle
        containerClass="max-w-[1080px]"
        title={<>Why service businesses choose Solren.</>}
        sub="A missed call, slow reply or forgotten follow-up can turn into a job that goes somewhere else. Solren is installed around your business so good enquiries keep moving."
        actions={
          <>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              See how it works
            </Link>
          </>
        }
      />

      {/* One consistent left-rail editorial layout (max-w-[1080px]): hero, problem,
          cards, value and CTA all share the same grid. No funnel, no per-section
          centring. The same rail holds on mobile, where blocks simply stack. */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-6">
          {/* 1. The real problem — heading, copy, three wide cards on the rail */}
          <Reveal>
            <div>
              <h2 className={headingClass}>The problem is not always more leads.</h2>
              <p className={proseClass}>
                Most service businesses already get enquiries. The leak happens after
                the enquiry arrives: missed calls, slow replies, forgotten quotes and
                follow-ups that rely on memory.
              </p>
              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {problemCards.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-7"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
                      <p className="text-[16px] font-medium tracking-tight text-white">
                        {c.title}
                      </p>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 2. Value — the main statement, a subtle dark editorial card on the rail */}
          <Reveal>
            <div className="mt-16 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:mt-20 sm:p-12">
              <h2 className={headingClass}>
                One <span className="text-[#537FEA]">good job</span> can change the month.
              </h2>
              <p className={proseClass}>
                A good enquiry can become a callout, quote, booking or repeat customer.
                Solren helps keep those moments moving before they go quiet.
              </p>
            </div>
          </Reveal>

          {/* 3. What Solren does — left-aligned, two columns on the same rail */}
          <Reveal>
            <div className="mt-16 sm:mt-20">
              <h2 className={headingClass}>What Solren does.</h2>
              <ul className="mt-7 grid max-w-[720px] grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {doesPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-[15.5px] text-[var(--silver)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#537FEA]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* 4. Final CTA — aligned to the rail, the natural end of the story */}
          <Reveal>
            <div className="mt-16 border-t border-[var(--hair)] pt-12 sm:mt-20 sm:pt-14">
              <h2 className="text-[clamp(1.45rem,2.6vw,1.85rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver">
                Ready to stop good leads slipping away?
              </h2>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
