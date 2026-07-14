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

/* What Solren refuses to do: three plain trust statements. */
const problemCards = [
  {
    title: "You approve what matters",
    body: "The first reply to a new lead is yours. Follow-ups run themselves, and stop when someone answers.",
  },
  {
    title: "We don't touch your phone",
    body: "Calls stay yours. We catch the text that comes after.",
  },
  {
    title: "No lock-in",
    body: "Thirty days. If it isn't catching your enquiries, the setup was free.",
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
        divider={false}
        compact
        bottomClass="pb-6 sm:pb-12 lg:pb-8"
        title={<>Slow replies lose jobs. Solren catches them first.</>}
        sub="You don't lose the job on the work. You lose it on the clock."
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

      {/* One consistent left-rail editorial layout on .ps-container — the site
          standard (1240px), the same rail as /trust, /about, /integrations and the
          industry pages. Hero, problem, cards, value and CTA all share it. No
          funnel, no per-section centring, no breakout: the container is wide enough
          for the cards natively. Prose keeps its own narrower reading measure, as
          it does elsewhere on the site. On mobile the blocks simply stack. */}
      <section className="pt-2 pb-12 sm:pt-8 sm:pb-20 lg:pt-3">
        <div className="ps-container">
          {/* 1. Problem framing as the lead-in, then "What we won't do" over the three refusal cards */}
          <Reveal>
            <div>
              <h2 className={headingClass}>The problem is not always more leads.</h2>
              <p className={proseClass}>
                Most service businesses already get enquiries. The leak happens after:
                slow replies, forgotten quotes, follow-ups that rely on memory.
              </p>
              <h2 className={`mt-8 sm:mt-10 ${headingClass}`}>What we won&rsquo;t do.</h2>
              {/* The cards sit on the shared rail: same left edge as the heading
                  above them and the prose. No breakout wrapper — .ps-container is
                  wide enough for three columns natively. 3-up waits for lg: below
                  that the columns cramp and the headings wrap. */}
              <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-3">
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

          {/* Trust interlude between the refusal cards and the closing card. Tight
              --space-block on both sides: the top gap is this block's own margin; the
              bottom is this block's margin-bottom, which collapses with the closing
              card's top margin (larger wins), so the closing card is left unchanged. */}
          <Reveal className="mt-[var(--space-block)] mb-[var(--space-block)]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
                <span className="ps-label">Who you&rsquo;re dealing with</span>
              </div>
              <h2 className="mt-2 text-[clamp(1.55rem,3.4vw,2.1rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white">
                You&rsquo;re not buying software. You&rsquo;re hiring us.
              </h2>
              <p className="mt-4 max-w-[680px] text-[16px] leading-[1.7] text-[var(--silver)]">
                We build your install, we run it, and when something needs fixing you
                talk to the person who set it up. Not a ticket queue. Not a chatbot.
              </p>
            </div>
          </Reveal>

          {/* 2. Value — the main statement, a subtle dark editorial card on the rail */}
          <Reveal>
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:mt-14 sm:p-10 lg:mt-10">
              <h2 className={headingClass}>
                One <span className="text-[#537FEA]">good job</span> can change the month.
              </h2>
              <p className={proseClass}>
                One booked job pays for the month. Solren&rsquo;s job is to make sure you
                never miss the one that would have.
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
