import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import { SocialProof } from "@/components/public-site/social-proof"

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

const headingClass =
  "text-[clamp(1.55rem,3.4vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.02em] ps-silver"
const proseClass = "mt-4 max-w-[680px] text-[16px] leading-[1.7] text-[var(--silver)] sm:mt-5"

/* Real trust line shown under both primary CTAs. */
const trustLine =
  "Solren Foundation. $490 one-time setup, then $497/month. Live in 7-14 days. No setup fee if Solren isn't catching your enquiries in 30 days."

const trustLineClass = "text-[13px] leading-relaxed text-[var(--muted)]"

/* Flip to true once a real result stat + named testimonial are ready. */
const showSocialProof = false

export default function WhySolrenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Solren"
        looseTitle
        containerClass="max-w-[1080px]"
        divider={false}
        compact
        bottomClass="pb-6 sm:pb-12 lg:pb-8"
        title={<>Slow replies lose jobs. Solren helps you win them back.</>}
        sub="Most businesses do not lose work because they are bad at the job. They lose work because the reply came too late."
        actions={
          <>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              See how it works
            </Link>
            <p className={`basis-full ${trustLineClass}`}>{trustLine}</p>
          </>
        }
      />

      {/* One consistent left-rail editorial layout (max-w-[1080px]): hero, problem,
          cards, value and CTA all share the same grid. No funnel, no per-section
          centring. The same rail holds on mobile, where blocks simply stack. */}
      <section className="pt-2 pb-12 sm:pt-8 sm:pb-20 lg:pt-3">
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
              <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
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

          {/* Proof — hidden until a real stat + testimonial exist. Flip
              showSocialProof to true once content is ready. */}
          {showSocialProof && (
            <Reveal>
              <SocialProof className="mt-8 sm:mt-12 lg:mt-10" />
            </Reveal>
          )}

          {/* 2. Value — the main statement, a subtle dark editorial card on the rail */}
          <Reveal>
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:mt-14 sm:p-10 lg:mt-10">
              <h2 className={headingClass}>
                One <span className="text-[#537FEA]">good job</span> can change the month.
              </h2>
              <p className={proseClass}>
                A good enquiry can become a callout, quote, booking or repeat customer.
                Solren helps keep those moments moving before they go quiet.
              </p>
              {/* The decision sits inside the card, surprisingly close to the copy:
                  the story ends on the opportunity and the single action, then the
                  page transitions straight into the footer. */}
              <Link
                href="/contact"
                className="group mt-3 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE] sm:mt-4"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <p className={`mt-4 ${trustLineClass}`}>{trustLine}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
