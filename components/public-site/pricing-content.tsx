import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react"

import { PageHeader } from "./page-header"
import { Reveal } from "./reveal"
import { FaqAccordion } from "./faq-accordion"
import { CostCalculatorCard } from "./pricing-cost-calculator"

/* ============================================================================
   Pricing page — one continuous conversion story, mobile-first and responsive.
   Reading path: slow replies cost booked jobs → what a missed enquiry is worth
   → Solren starts from A$497/mo, one booked job covers it → everything installed
   for you → you don't carry the risk alone → what happens after you sign →
   questions answered → book a call. Dark premium identity, restrained blue, no
   loud gradients or clutter. Prices are firm (foundation rate).
   ========================================================================== */

const MONTHLY = "A$497"
const SETUP = "A$490"
const SPOTS = "Only 5 foundation spots"

/* one shared primary action — used in the hero, the offer and the final CTA only */
function PrimaryCta({ label = "Book a call" }: { label?: string }) {
  return (
    <Link
      href="/contact"
      className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE] sm:w-auto"
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  )
}

const containerCls = "mx-auto max-w-[1080px] px-5 sm:px-6"

/* ---------- hero: value first ---------------------------------------------- */

const heroHighlights = [
  `From ${MONTHLY}/month`,
  `One-time setup ${SETUP}`,
  "Installed and managed for you",
  SPOTS,
]

/* Restrained enquiry-flow card: shows how one enquiry moves to booked work. No
   fake dashboard — a quiet four-step list, the last step carrying the blue. */
const flowSteps = ["Enquiry", "Reply", "Follow-up", "Booked"]

function EnquiryFlowCard() {
  return (
    <div className="ps-card ps-card-warm rounded-[20px] p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.95)]">
      <span className="ps-label !text-[10px] text-[var(--faint)]">How an enquiry moves</span>
      <ol className="mt-4">
        {flowSteps.map((s, i) => {
          const last = i === flowSteps.length - 1
          return (
            <li key={s} className="relative flex items-center gap-3.5 py-2.5">
              {i < flowSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-[34px] h-[18px] w-px bg-[var(--hair)]"
                />
              )}
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10.5px] font-medium tabular-nums ${
                  last
                    ? "border-[#537FEA]/40 bg-[#537FEA]/[0.10] text-[#86A2F0]"
                    : "border-[var(--hair-strong)] text-[var(--muted)]"
                }`}
              >
                {i + 1}
              </span>
              <span className={`text-[14px] ${last ? "font-medium text-white" : "text-[var(--silver)]"}`}>
                {s}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/* Absolute hero decoration on wide desktops only. Sits in the right column; the
   hero copy is capped to the left (innerClass below) so it can never overlap.
   Decorative, aria-hidden. */
function HeroDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
      <div className="relative mx-auto h-full max-w-[1080px] px-6">
        {/* pulled in toward the hero copy (vertical position unchanged) so it
            reads as attached to the hero argument rather than floating alone */}
        <div className="absolute right-16 top-1/2 mt-2 w-[300px] -translate-y-1/2">
          <EnquiryFlowCard />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={<>Stop losing booked jobs to slow replies.</>}
        sub="Solren catches enquiries, prepares replies and follows up automatically, so more jobs move from first message to booked work."
        containerClass="max-w-[1080px]"
        titleClass="text-[clamp(1.95rem,6.5vw,3.4rem)]"
        innerClass="xl:max-w-[600px]"
        actionsGapClass="lg:mt-5"
        topClass="pt-20 sm:pt-30 lg:pt-30"
        bottomClass="pb-3 sm:pb-8 lg:pb-4"
        subExtra="hidden"
        divider={false}
        decoration={<HeroDecoration />}
        actions={
          <div className="flex w-full flex-col items-start gap-3 sm:gap-4 lg:gap-3">
            {/* the payback line leads on every size — what it costs + why it pays.
                Desktop adds the three secondary facts below it; the "From A$497"
                bullet is dropped there so the price isn't repeated and reads firm. */}
            <p className="text-[16px] leading-snug sm:hidden">
              <span className="font-medium text-white">{MONTHLY}/month.</span>{" "}
              <span className="text-[var(--silver)]">One booked job covers it.</span>
            </p>
            <p className="hidden text-[16px] leading-snug sm:block">
              <span className="font-medium text-white">{MONTHLY}/month.</span>{" "}
              <span className="text-[var(--silver)]">One booked job covers it.</span>
            </p>
            <ul className="hidden flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] leading-snug text-[var(--silver)] sm:flex">
              {/* desktop facts only: setup fee + scarcity. "Installed and managed"
                  is dropped — it just repeats the offer heading below. */}
              {heroHighlights.slice(1).filter((h) => h !== "Installed and managed for you").map((h, i) => (
                <li key={h} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[var(--faint)]" />
                  )}
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <PrimaryCta />
            {/* mobile only: the next step, framed as low-commitment */}
            <p className="text-[12.5px] text-[var(--muted)] sm:hidden">No pressure, no obligation.</p>
          </div>
        }
      />
      {/* in-flow flow card for the lg–xl range (the absolute one is xl+ only);
          hidden on mobile to keep the first screen tight */}
      <div className="mx-auto hidden max-w-[1080px] px-5 pb-6 sm:px-6 lg:block lg:pb-4 xl:hidden">
        <Reveal>
          <div className="max-w-[340px]">
            <EnquiryFlowCard />
          </div>
        </Reveal>
      </div>
    </>
  )
}

/* ---------- 2. calculator: cost of doing nothing ---------------------------- */

function CostSection() {
  return (
    <section className="pt-3 pb-5 sm:pt-8 sm:pb-7 lg:pt-4 lg:pb-6">
      {/* desktop: heading, qualifier and calculator are one centred stack — the
          heading sits directly above the card (never split into a side column),
          with symmetric whitespace instead of a one-sided gutter. Below lg it is
          the exact mobile stack. */}
      <div className={containerCls}>
        <Reveal>
          <h2 className="text-[clamp(1.6rem,5.5vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver-safe lg:mx-auto lg:max-w-[640px] lg:overflow-visible lg:pb-[0.12em] lg:text-center">
            What is one missed enquiry worth?
          </h2>
          <p className="mt-2 hidden text-[14px] leading-relaxed text-[var(--muted)] lg:mx-auto lg:block lg:max-w-[640px] lg:text-center">
            Rough estimate, not a promise.
          </p>
        </Reveal>
        <div className="mt-5 sm:mt-8 lg:mx-auto lg:mt-4 lg:max-w-[640px]">
          <Reveal>
            <CostCalculatorCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- 3. main offer: everything installed for you --------------------- */

const deliverables = [
  "We map where your enquiries come from.",
  "We connect your website, Google, Facebook, email and phone enquiry paths.",
  "We draft missed-call and message replies.",
  "We prepare follow-ups.",
]

function OfferSection() {
  return (
    <section className="pt-5 pb-6 sm:pt-7 sm:pb-7 lg:pt-6 lg:pb-5">
      <div className={containerCls}>
        <Reveal>
          <h2 className="overflow-visible pb-[0.12em] text-[clamp(1.7rem,6vw,2.6rem)] font-medium leading-[1.12] tracking-[-0.02em] ps-silver">
            Everything installed for you.
          </h2>
        </Reveal>

        {/* the one offer — the strongest value moment on the page */}
        <Reveal delay={70}>
          <div className="ps-card ps-card-warm mt-6 rounded-[22px] p-5 ring-1 ring-white/15 sm:mt-8 sm:rounded-[28px] sm:p-7 lg:mt-8 lg:p-7">
            <div className="grid gap-6 sm:gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              {/* left: name, price, CTA — lifted a touch on desktop so the
                  price→text→CTA→proof reads as one decision stack */}
              <div className="lg:-mt-2.5">
                <span className="inline-flex rounded-full border border-[#537FEA]/40 bg-[#537FEA]/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#86A2F0]">
                  Solren Foundation
                </span>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 sm:mt-4">
                  <span className="text-[38px] font-medium leading-none tracking-tight text-white tabular-nums sm:text-[44px]">
                    {MONTHLY}
                  </span>
                  <span className="text-[16px] text-[var(--muted)]">/ month</span>
                </div>
                {/* just the setup fee — scarcity is the badge, "installed/managed"
                    is the heading + the included list */}
                <ul className="mt-3 text-[14px] leading-relaxed text-[var(--silver)] sm:mt-4 lg:mt-3">
                  <li>One-time setup {SETUP}</li>
                </ul>
                <div className="mt-4 sm:mt-6 lg:mt-4">
                  <PrimaryCta />
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--silver)]">
                    Live in 7–14 days.
                  </p>
                </div>
              </div>

              {/* right: what's included — centred on desktop so the divider no
                  longer overhangs the shorter (4-item) list */}
              <div className="lg:flex lg:flex-col lg:justify-center lg:border-l lg:border-[var(--hair)] lg:pl-10">
                <span className="ps-label !text-[11px] text-[var(--faint)]">What's included</span>
                <ul className="mt-4 space-y-2.5 sm:space-y-3 lg:space-y-3.5">
                  {deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14.5px] leading-snug text-[var(--silver)] sm:text-[15px]"
                    >
                      <Check className="mt-[3px] h-4 w-4 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 5. risk reversal ------------------------------------------------ */

function GuaranteeSection() {
  return (
    <section className="pt-3 pb-4 sm:pt-6 sm:pb-7 lg:pt-4 lg:pb-5">
      <div className={containerCls}>
        <Reveal>
          <div className="ps-card ps-card-warm rounded-[20px] px-5 py-5 ring-1 ring-[#537FEA]/20 sm:rounded-[24px] sm:px-8 sm:py-7 lg:py-[25px]">
            <div className="flex items-start gap-4 sm:gap-5 lg:gap-3">
              <ShieldCheck className="h-7 w-7 shrink-0 text-[#86A2F0] sm:h-8 sm:w-8" strokeWidth={1.5} />
              <div className="max-w-2xl">
                <h2 className="text-[clamp(1.3rem,3.4vw,1.7rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver-safe lg:overflow-visible lg:pb-[0.12em]">
                  You do not carry the risk alone.
                </h2>
                <p className="mt-3 text-[14.5px] leading-[1.5] text-[var(--silver)] sm:text-[15px] sm:leading-relaxed lg:leading-[1.45]">
                  Once you are live, try Solren for 30 days. If it is not catching and replying to
                  your enquiries the way we promised, we will refund that month. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 6. FAQ ---------------------------------------------------------- */

/* Plain-text answers — used for the FAQPage structured data (kept truthful and
   mirroring the visible copy). Exported for the page's <FaqStructuredData>. */
export const pricingFaqsText: { q: string; a: string }[] = [
  {
    q: "Will it sound like a robot to my customers?",
    a: "No. Replies are written in plain, human language and shaped to how you already talk to your customers. You read them before they go out, so nothing stiff or off-brand ever lands.",
  },
  {
    q: "Do I have to learn any software?",
    a: "No. Solren works with the inbox and phone you already use. There's nothing new to log into and nothing to manage. We build it and run it for you.",
  },
  {
    q: "What if it says the wrong thing to a client?",
    a: "You approve every reply before it sends. Solren drafts it, you give it the nod. Nothing reaches a customer without your say-so.",
  },
  {
    q: "Does it work with the tools I already use?",
    a: "In most cases, yes. We work with your email, website forms, Google and phone enquiries. On your call we check your exact setup and tell you straight if anything won't fit.",
  },
  {
    q: "Is my customers' data safe?",
    a: "We take privacy seriously and only connect the tools you approve. See our Security and Trust pages for the details.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. You can stop your monthly plan any time, with no lock-in contract. Setup and install work already done may not be refundable, but you keep what we've built.",
  },
]

const pricingFaqs: { q: string; a: ReactNode }[] = pricingFaqsText.map((f) =>
  f.q === "Is my customers' data safe?"
    ? {
        q: f.q,
        a: (
          <>
            We take privacy seriously and only connect the tools you approve. See our{" "}
            <Link href="/security" className="text-[#86A2F0] underline underline-offset-2 hover:text-[#a6bcf6]">
              Security
            </Link>{" "}
            and{" "}
            <Link href="/trust" className="text-[#86A2F0] underline underline-offset-2 hover:text-[#a6bcf6]">
              Trust
            </Link>{" "}
            pages for the details.
          </>
        ),
      }
    : f,
)

/* Mobile shows only the four objections that move the decision (quality, ease,
   control, cancel); the full set returns at sm. Tools-compatibility and data-safe
   are covered by the call and the Trust/Security pages. */
const mobilePricingFaqs = [pricingFaqs[0], pricingFaqs[1], pricingFaqs[2], pricingFaqs[5]]

function FaqSection() {
  return (
    <section className="pt-4 pb-4 sm:pt-6 sm:pb-7 lg:pt-6 lg:pb-5">
      <div className={containerCls}>
        <Reveal>
          <h2 className="text-[clamp(1.35rem,3.5vw,1.7rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver lg:overflow-visible lg:pb-[0.12em]">
            Questions, answered straight.
          </h2>
        </Reveal>
        <div className="mt-4 sm:mt-6 lg:mt-5">
          {/* mobile: four key objections only; sm+ keeps the full set */}
          <div className="sm:hidden">
            <FaqAccordion items={mobilePricingFaqs} defaultOpenIndex={null} idPrefix="m-" />
          </div>
          <div className="hidden sm:block">
            <FaqAccordion items={pricingFaqs} defaultOpenIndex={null} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 8. final CTA ---------------------------------------------------- */

function FinalSection() {
  return (
    <section className="pt-6 pb-8 sm:pt-9 sm:pb-10 md:pb-10 lg:pt-6 lg:pb-8">
      <div className="mx-auto max-w-[760px] px-5 text-center sm:px-6">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] overflow-visible pb-[0.12em] text-[clamp(1.9rem,5.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.02em] ps-silver sm:pb-0">
            Ready to stop losing enquiries?
          </h2>
          <div className="mt-5 flex justify-center sm:mt-7 lg:mt-6">
            <PrimaryCta />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- assembled page -------------------------------------------------- */

export function PricingContent() {
  return (
    <>
      <Hero />
      <CostSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalSection />
    </>
  )
}
