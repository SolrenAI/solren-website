import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight, Check, Globe, MessageSquare } from "lucide-react"

import { PageHeader } from "./page-header"
import { Reveal } from "./reveal"
import { FaqAccordion } from "./faq-accordion"
import { CardStack, CardStackOutcomeRow, CardStackRow } from "./card-stack"

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

/* What the buyer does from here, on the shared card-stack primitive: three
   numbered steps, then the outcome carrying the blue — the same grammar as the
   "Booked" row on /. No card surface of its own; the rows are the surface. */
const nextSteps = ["A 15-minute call", "We map your enquiries", "Live in 7–14 days"]

function NextStepsCard() {
  return (
    <div>
      <span className="ps-label !text-[10px] text-[var(--faint)]">What happens next</span>
      <CardStack className="mt-4">
        {nextSteps.map((s, i) => (
          <CardStackRow key={s}>
            <div className="flex items-center gap-3.5">
              <span className="w-4 shrink-0 text-[13px] font-medium tabular-nums text-[var(--silver)]">
                {i + 1}
              </span>
              <span className="text-[14px] text-[var(--silver)]">{s}</span>
            </div>
          </CardStackRow>
        ))}
        {/* the outcome of the sequence, not a fourth step */}
        <CardStackOutcomeRow>
          <span className="block text-[14px] font-medium text-white">Thirty days to decide</span>
        </CardStackOutcomeRow>
      </CardStack>
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
        {/* Top-aligned with the hero copy, at the same offset the header's
            padding-top gives the h1. It used to be top-1/2 + -translate-y-1/2,
            i.e. centred on the WHOLE header including its padding — so a card
            taller than the left column grew upward and tucked under the fixed
            nav. Both columns now start at the same line. */}
        <div className="absolute right-16 top-[calc(var(--nav-h)+var(--space-section))] w-[300px]">
          <NextStepsCard />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <>
      {/* The nav is position:fixed (57px) and takes no layout space, so the
          hero's top padding must carry the nav's height and then a full
          --space-section beneath it. A section owns its TOP padding only.
          PageHeader is shared by 18 routes, so this is a per-route override,
          not a change to its default topClass. */}
      <PageHeader
        eyebrow="Pricing"
        title={<>One booked job covers it.</>}
        sub="Solren catches enquiries, prepares replies and follows up automatically, so more jobs move from first message to booked work."
        containerClass="max-w-[1080px]"
        titleClass="text-[clamp(1.95rem,6.5vw,3.4rem)]"
        innerClass="xl:max-w-[600px]"
        actionsGapClass="lg:mt-5"
        topClass="pt-20 sm:pt-30 lg:pt-[calc(var(--nav-h)+var(--space-section))]"
        bottomClass="pb-3 sm:pb-8 lg:pb-0"
        overflowClass="overflow-hidden xl:overflow-visible"
        subExtra="hidden"
        divider={false}
        decoration={<HeroDecoration />}
        actions={
          <div className="flex w-full flex-col items-start gap-3 sm:gap-4 lg:gap-3">
            {/* Price, then what it buys. One <p> at every size — this line used to
                exist twice, as sm:hidden and hidden sm:block, with identical copy. */}
            <p className="text-[16px] leading-snug">
              <span className="font-semibold text-white">{`${MONTHLY} a month.`}</span>{" "}
              <span className="text-[var(--silver)]">Installed and managed for you.</span>
            </p>
            <p className="text-[13px] leading-snug text-[var(--silver)]">
              {`One-time setup ${SETUP}`}
            </p>
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
            <NextStepsCard />
          </div>
        </Reveal>
      </div>
    </>
  )
}

/* ---------- 2. calculator: cost of doing nothing ---------------------------- */

/* Two missed jobs, then the month's price — the reader performs the subtraction.
   No total, no saving, no multiple, no percentage, no disclaimer: nothing is
   being claimed. Static: no state, no handlers, no hover. */
const MISSED_JOBS = [
  { icon: Globe, detail: "Switchboard upgrade", amount: "A$850" },
  { icon: MessageSquare, detail: "Ceiling fan install", amount: "A$450" },
]

function ProofSection() {
  return (
    <section className="pt-3 pb-5 sm:pt-8 sm:pb-7 lg:pb-0 lg:pt-[var(--space-section)]">
      <div className={containerCls}>
        <Reveal>
          <h2 className="text-[clamp(1.35rem,3.5vw,1.7rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver lg:overflow-visible lg:pb-[0.12em]">
            Two jobs. That&apos;s the month.
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <CardStack className="mt-6 sm:mt-8 lg:mt-[var(--space-block)]">
            {MISSED_JOBS.map(({ icon: Icon, detail, amount }) => (
              <CardStackRow key={detail}>
                <div className="flex items-center gap-3.5">
                  <Icon className="h-[18px] w-[18px] shrink-0 text-[var(--muted)]" strokeWidth={1.8} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14.5px] font-medium text-white sm:text-[15px]">
                      Missed enquiry
                    </span>
                    <span className="block truncate text-[13px] text-[var(--silver)] sm:text-[13.5px]">
                      &ldquo;{detail}&rdquo;
                    </span>
                  </span>
                  {/* tabular-nums so A$850 and A$450 align on their digits */}
                  <span className="shrink-0 text-right text-[14.5px] font-medium tabular-nums text-white sm:text-[15px]">
                    {amount}
                  </span>
                </div>
              </CardStackRow>
            ))}

            {/* The outcome, not a fourth item: the price lives in this row's own
                body text, never in the right column. */}
            <CardStackOutcomeRow>
              <span className="block text-[14.5px] font-medium tracking-[-0.01em] text-white sm:text-[15px]">
                Both booked
              </span>
              <span className="mt-0.5 block text-[13px] tabular-nums text-[var(--silver)] sm:text-[13.5px]">
                A$497 for the month
              </span>
            </CardStackOutcomeRow>
          </CardStack>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 3. main offer: everything installed for you --------------------- */

/* Solren does not handle phone calls. Nothing in this list may imply it does. */
const deliverables = [
  "We map where your enquiries come from.",
  "We connect your website, Google, Facebook, Instagram, SMS and email.",
  "We draft replies to every message.",
  "We prepare follow-ups.",
  "Live in 7–14 days.",
  "Thirty days to decide. If it isn't catching your enquiries, we refund the month.",
]

function OfferSection() {
  return (
    <section className="pt-5 pb-6 sm:pt-7 sm:pb-7 lg:pb-0 lg:pt-[var(--space-section)]">
      <div className={containerCls}>
        <Reveal>
          <h2 className="overflow-visible pb-[0.12em] text-[clamp(1.7rem,6vw,2.6rem)] font-medium leading-[1.12] tracking-[-0.02em] ps-silver">
            Everything installed for you.
          </h2>
        </Reveal>

        {/* the one offer — the strongest value moment on the page */}
        <Reveal delay={70}>
          {/* Background is the page ground, not the card gradient. Inline, not a
              utility: .ps-card sets the `background` shorthand (a gradient image)
              as unlayered CSS, which a Tailwind bg-* class can't fully override —
              it would only swap the colour and leave the gradient on top. This
              replaces the whole background with --ground and leaves the border,
              radius, padding, ring and highlight untouched. Theme-aware: --ground
              is the page ground in both themes. */}
          <div
            className="ps-card ps-card-warm mt-6 rounded-[22px] p-5 ring-1 ring-white/15 sm:mt-8 sm:rounded-[28px] sm:p-7 lg:mt-8 lg:p-7"
            style={{ background: "var(--ground)" }}
          >
            <div className="grid gap-6 sm:gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              {/* left: name, price, CTA. Top-aligned to the cell (no lift), so the
                  SOLREN FOUNDATION badge sits on the same line as the WHAT'S
                  INCLUDED eyebrow and the top/bottom padding read symmetric. */}
              <div>
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
                </div>
              </div>

              {/* right: what's included — a plain checklist. No row surfaces:
                  it is inventory inside the framed card, not free-standing rows,
                  so a check + line is enough. No vertical divider rule. */}
              <div>
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

        {/* The kept line from the deleted guarantee section: beneath the box,
            left-aligned to its edge (same container), --space-block above.
            Template literal because `The {SETUP} setup` drops the spaces around
            the expression and renders "A$490setup". */}
        <Reveal delay={100}>
          <p className="mt-[var(--space-block)] text-[14.5px] leading-relaxed text-[var(--silver)] sm:text-[15px]">
            {`The ${SETUP} setup covers work already done and isn't refunded.`}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 6. FAQ ---------------------------------------------------------- */

/* Plain-text answers — used for the FAQPage structured data (kept truthful and
   mirroring the visible copy). Exported for the page's <FaqStructuredData>. */
/* Order is the reading order: the missed call first (the doubt that stops them
   reading), then voice, control, effort, fit, privacy — and it closes on cancel,
   so the last thing read before the CTA is how easily they can leave. The 01–07
   markers are derived from the index, never authored. */
export const pricingFaqsText: { q: string; a: string }[] = [
  {
    q: "What happens when someone rings me?",
    a: "Nothing changes. That call's yours. But most people who can't reach you don't stop there. They text, or fill in your form. That's the one we catch. The ring you miss becomes the message we answer.",
  },
  {
    q: "Will it still sound like me?",
    a: "It's trained on how you already talk, and you sign off every reply before it sends. If one sounds off, you change it in a tap. Your customers won't know it wasn't you. Most of the time, it was.",
  },
  {
    q: "What if it says the wrong thing to a client?",
    a: "It can't. Nothing reaches a customer until you've seen it. Every reply is drafted, sent to your phone, and held there. You approve it, or it doesn't go. The AI never gets the last word. You do.",
  },
  {
    q: "Do I have to learn any software?",
    a: "No. We install it, we run it, we fix it. Your whole job is tapping approve. If it's harder than sending a text, we built it wrong.",
  },
  {
    q: "Does it work with the tools I already use?",
    a: "Website, Google, Facebook, Instagram, SMS, email. No new app, no new number, no new inbox to check. The enquiries arrive where they always have. The difference is none of them sit there going cold.",
  },
  {
    q: "What can you actually see?",
    a: "Card details never touch us. That's Stripe's job. Your data lives on secure, access-controlled systems, and it's never sold, never shared, and deleted the day you ask. Their trust is your business. We treat it like it.",
  },
  {
    q: "Can I cancel?",
    a: "Any time. No contract, no lock-in, no exit fee. The month you're in is the last one you pay. And if it isn't catching your enquiries in the first thirty, that month's on us.",
  },
]

/* Visible copy and the FAQPage schema are the same strings — no answer needs
   inline markup, so there's nothing to override here. */
const pricingFaqs: { q: string; a: ReactNode }[] = pricingFaqsText

/* One set at every width. Mobile used to be trimmed to the first four, but the
   order now closes on "Can I cancel?" — the last beat before the CTA — and a
   trim would cut exactly that. Three extra collapsed rows is the cheaper cost. */
function FaqSection() {
  return (
    <section className="pt-4 pb-4 sm:pt-6 sm:pb-7 lg:pb-0 lg:pt-[var(--space-section)]">
      <div className={containerCls}>
        <Reveal>
          <h2 className="text-[clamp(1.35rem,3.5vw,1.7rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver lg:overflow-visible lg:pb-[0.12em]">
            Questions, answered straight.
          </h2>
        </Reveal>
        <div className="mt-4 sm:mt-6 lg:mt-5">
          <FaqAccordion
            items={pricingFaqs}
            defaultOpenIndex={null}
            /* `!`: .ps-label sets `color: var(--muted)` as unlayered CSS, which
               beats a plain Tailwind utility. */
            numeralClassName="!text-[color:var(--silver)]"
          />
        </div>
      </div>
    </section>
  )
}

/* ---------- 8. final CTA ---------------------------------------------------- */

/* 104px above, not the full --space-section: this closing CTA sits a touch
   higher under the FAQ than a full section break. The FAQ owns pb-0, so this
   section's top padding is the whole gap. */
function FinalSection() {
  return (
    <section className="pt-6 pb-8 sm:pt-9 sm:pb-10 md:pb-10 lg:pb-8 lg:pt-[104px]">
      {/* The only centred section on the page — deliberately, because nothing
          follows it. Everything above left-aligns to the container edge. */}
      <div className={`${containerCls} text-center`}>
        <Reveal>
          <h2 className="overflow-visible pb-[0.12em] text-[clamp(1.9rem,5.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.02em] ps-silver sm:pb-0">
            Fifteen minutes.
          </h2>
          <p className="mx-auto mt-2 max-w-[480px] text-[15px] leading-relaxed text-[var(--silver)] sm:text-[16px]">
            We&apos;ll look at where your enquiries land now, and where they&apos;re going missing.
          </p>
          <div className="mt-[var(--space-block)] flex justify-center">
            <PrimaryCta />
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-[var(--silver)]">
            No pitch. No obligation.
          </p>
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
      <ProofSection />
      <OfferSection />
      <FaqSection />
      <FinalSection />
    </>
  )
}
