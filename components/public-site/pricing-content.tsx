import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react"

import { PageHeader } from "./page-header"
import { Reveal } from "./reveal"
import { FaqAccordion } from "./faq-accordion"
import { CostCalculatorCard } from "./pricing-cost-calculator"
import { MobileSupportTabs } from "./pricing-mobile-tabs"

/* ============================================================================
   Pricing page content. One mobile-first responsive tree (no breakpoint split):
   it reads well on a phone first, then scales up.

   OWNER INPUTS — local preview values. Placeholders to be replaced with real,
   verified values before launch; do not treat them as facts. While a value is
   null the page renders a clearly visible {{PLACEHOLDER}} so nothing is ever
   fabricated. The same code paths render the real value once supplied.
   ========================================================================== */
// Average job value and missed enquiries are now set by the visitor in the
// interactive cost card (see CostCalculatorCard); defaults there are A$850 / 8.
const MONTHLY_PRICE: number | null = 497 // foundation rate, dollars / month
const SETUP_PRICE: number | null = null // not set: pricing stays the quote model
const GUARANTEE_TERMS: string | null =
  "Once you're live, try Solren for 30 days. If it isn't catching and replying to your enquiries the way we promised, we'll refund that month, no questions asked. No lock-in, cancel any time."
const PRODUCT_SCREENSHOT: string | null = null // example preview panel shown until a real screenshot is added

const aud = (n: number) => `A$${n.toLocaleString("en-AU")}`

const havePrices = SETUP_PRICE != null && MONTHLY_PRICE != null

/* ---------- placeholders (no new colours — uses the existing blue accent) ---- */

const monoStyle = { fontFamily: "var(--font-geist-mono), monospace" } as const

/* Inline "owner to supply" chip rendering the literal {{TOKEN}}. */
function FillIn({ children }: { children: string }) {
  return (
    <span
      style={monoStyle}
      className="inline-flex items-center rounded-md border border-dashed border-[#537FEA]/45 bg-[#537FEA]/[0.08] px-1.5 py-0.5 align-baseline text-[0.82em] font-medium leading-none tracking-tight text-[#86A2F0]"
    >
      {`{{${children}}}`}
    </span>
  )
}

/* Block "owner to supply" slot — for the guarantee body and screenshot. */
function FillInBlock({ token, hint }: { token: string; hint: string }) {
  return (
    <span className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-[#537FEA]/40 bg-[#537FEA]/[0.05] px-5 py-4">
      <span className="ps-label !text-[10px] text-[#86A2F0]">Owner to supply</span>
      <span style={monoStyle} className="text-[15px] font-medium text-[#86A2F0]">
        {`{{${token}}}`}
      </span>
      <span className="text-[13px] leading-relaxed text-[var(--silver)]">{hint}</span>
    </span>
  )
}

/* Contained, edge-fading divider between sections — matches the site pattern. */
function SectionRule() {
  return (
    <div aria-hidden="true" className="px-5 sm:px-6">
      <div className="mx-auto h-px max-w-[1240px] bg-gradient-to-r from-transparent via-[var(--hair-strong)] to-transparent" />
    </div>
  )
}

function RecommendedPill() {
  return (
    <span className="shrink-0 rounded-full border border-[#537FEA]/40 bg-[#537FEA]/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#86A2F0]">
      Recommended
    </span>
  )
}

function PrimaryCta({ label = "Book a 15-min call" }: { label?: string }) {
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

/* ---------- section 2: cost of the problem ---------------------------------- */

function CostBlock() {
  return (
    <section className="pt-10 pb-14 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#537FEA]" />
            <h2 className="text-[clamp(1.65rem,6vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
              What&apos;s a missed enquiry actually costing you?
            </h2>
          </div>
          <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[var(--silver)] sm:text-[15px]">
            Rough numbers, not a promise, but the gap is the point.
          </p>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
          {/* left: the cost of doing nothing — interactive estimate */}
          <Reveal>
            <CostCalculatorCard />
          </Reveal>

          {/* right: the cost of fixing it */}
          <Reveal delay={90}>
            <div className="ps-card ps-card-warm flex h-full flex-col rounded-[20px] p-6 ring-1 ring-[#537FEA]/20 sm:rounded-[24px] sm:p-8 lg:p-10">
              <span className="ps-label">The cost of fixing it</span>
              <div className="mt-5 text-[34px] font-medium leading-none tracking-tight text-white tabular-nums sm:mt-6 sm:text-[40px]">
                {MONTHLY_PRICE != null ? aud(MONTHLY_PRICE) : <FillIn>MONTHLY_PRICE</FillIn>}
                <span className="ml-1 text-[17px] font-normal text-[var(--muted)] sm:text-[18px]">/month</span>
              </div>
              <p className="mt-2 text-[13px] text-[var(--silver)]">plus a one-time setup.</p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--silver)] sm:mt-5 sm:text-[15px]">
                Win back a job or two and it pays for itself.
              </p>
              <p className="mt-3 text-[13px] text-[var(--muted)]">Live in 7 to 14 days. Cancel any time.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- section 3: guarantee -------------------------------------------- */

function GuaranteeCard() {
  return (
    <div className="ps-card ps-card-warm relative overflow-hidden rounded-[22px] px-6 py-10 ring-1 ring-[#537FEA]/25 sm:rounded-[28px] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#537FEA]/[0.06] blur-3xl"
      />
      <div className="relative flex items-start gap-4 sm:gap-5">
        <ShieldCheck className="h-8 w-8 shrink-0 text-[#86A2F0] sm:h-9 sm:w-9" strokeWidth={1.5} />
        <div className="max-w-2xl">
          <span className="ps-label">Our guarantee</span>
          <h2 className="mt-3 text-[clamp(1.7rem,6vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
            You don&apos;t carry the risk. We do.
          </h2>
          <div className="mt-5 text-[15.5px] leading-relaxed text-[var(--silver)] sm:mt-6 sm:text-[16px]">
            {GUARANTEE_TERMS ?? (
              <FillInBlock
                token="GUARANTEE_TERMS"
                hint="The real risk-reversal you can stand behind, e.g. 'If Solren doesn't win you work in 60 days, you don't pay,' or 'Cancel any time and keep everything we've built.'"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function GuaranteeBand() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <GuaranteeCard />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- section 4: what you get ----------------------------------------- */

const deliverables = [
  "We reply to your website, Google and phone enquiries for you.",
  "We catch missed calls and messages, and follow them up.",
  "We draft every reply, and you approve what goes out.",
  "We keep chasing quiet leads so you don't have to.",
  "You get a short daily summary of what came in and what we sent.",
  "We set it all up around the tools you already use.",
  "We watch it, support it and improve it every month.",
]

function ScreenshotSlot() {
  /* A real screenshot keeps the 4:3 frame at every size (fill needs a sized box).
     The placeholder drops the fixed ratio on mobile so its two panels can stack
     to full width without clipping, then restores 4:3 side-by-side from sm up. */
  if (PRODUCT_SCREENSHOT) {
    return (
      <figure className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[var(--hair)] bg-[#0A0D12] sm:rounded-[20px]">
        <Image
          src={PRODUCT_SCREENSHOT}
          alt="A drafted Solren reply and the daily summary"
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover"
        />
      </figure>
    )
  }
  return (
    <figure className="relative overflow-hidden rounded-[18px] border border-[var(--hair)] bg-[#0A0D12] sm:aspect-[4/3] sm:rounded-[20px]">
      {/* Example preview panel: incoming enquiry and drafted reply, with short
          illustrative sample copy. Clearly labelled "Example preview", so it reads
          as a sample, not a real screenshot. Replace with a real screenshot before
          launch. The two panels stack on mobile and sit side by side from sm up. */}
      <div className="flex h-full flex-col p-5">
          <span className="ps-label !text-[10px] text-[var(--faint)]">Example preview</span>
          <div className="mt-4 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex flex-col rounded-xl border border-[var(--hair)] bg-white/[0.02] p-4">
              <span className="ps-label !text-[9px] !tracking-[0.18em]">Incoming</span>
              <p className="mt-3 text-[12.5px] font-medium leading-snug text-white">
                Hi, do you do hot water repairs? Mine&apos;s leaking.
              </p>
              <span className="mt-auto pt-3 text-[10px] font-medium text-[var(--muted)]">2 mins ago</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#537FEA]/25 bg-[#0F141B] p-4">
              <span className="ps-label !text-[9px] !tracking-[0.18em] text-[#86A2F0]">
                Solren reply
              </span>
              <p className="mt-3 text-[12.5px] font-medium leading-snug text-white">
                Hi John, yes we do. We could take a look tomorrow morning. What&apos;s the
                best address and number to reach you on?
              </p>
              <span className="mt-auto inline-flex w-fit items-center rounded-full border border-[#537FEA]/30 bg-[#537FEA]/[0.08] px-2.5 py-1 text-[10px] font-medium text-[#86A2F0]">
                Awaiting your approval
              </span>
            </div>
          </div>
        </div>
    </figure>
  )
}

/* Install-card pieces, shared so the desktop card and the mobile essentials/tab
   render the exact same copy from one source. */
function InstallHeading() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-[21px] font-medium tracking-tight text-white sm:text-[24px]">
          Your Solren install
        </h3>
        <RecommendedPill />
      </div>
      <p className="mt-2 text-[14.5px] text-[var(--silver)] sm:text-[15px]">
        Done for you. Run for you. Built around how you already work.
      </p>
    </>
  )
}

function PriceBox() {
  return (
    <div className="mt-5 rounded-2xl border border-[var(--hair)] bg-white/[0.02] px-5 py-5">
      <span className="inline-flex rounded-full border border-[#537FEA]/40 bg-[#537FEA]/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#86A2F0]">
        Foundation
      </span>
      <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
        <span className="text-[34px] font-medium leading-none tracking-tight text-white tabular-nums sm:text-[38px]">
          A$497
        </span>
        <span className="text-[16px] text-[var(--muted)]">/ month</span>
      </div>
      <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--silver)] sm:text-[15px]">
        Locked for as long as you stay. Cancel any time.
      </p>
    </div>
  )
}

function DeliverablesList({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {deliverables.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14.5px] leading-snug text-[var(--silver)] sm:text-[15px]">
          <Check className="mt-[3px] h-4 w-4 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InstallCta({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <PrimaryCta />
      <p className="mt-3 text-[13px] leading-relaxed text-[var(--silver)]">
        Live in 7 to 14 days, fully built around your business.
      </p>
    </div>
  )
}

function WhatYouGet() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.6rem,5.5vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
            What you get.
          </h2>
        </Reveal>

        {/* the one recommended package — visually dominant */}
        <Reveal delay={70}>
          <div className="ps-card ps-card-warm mt-8 rounded-[22px] p-6 ring-1 ring-white/15 sm:mt-10 sm:rounded-[28px] sm:p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
              <div>
                <InstallHeading />
                <PriceBox />
                <DeliverablesList className="mt-6 sm:mt-7" />
                <InstallCta className="mt-8 sm:mt-9" />
              </div>
              <ScreenshotSlot />
            </div>
          </div>
        </Reveal>

        {/* secondary: need something bigger */}
        <Reveal delay={140}>
          <div className="mt-5 flex flex-col gap-4 rounded-[20px] border border-[var(--hair)] bg-white/[0.02] px-6 py-6 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:rounded-[24px] sm:px-8 sm:py-7">
            <div>
              <h3 className="text-[17px] font-medium tracking-tight text-white">
                Need something bigger?
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--silver)]">
                Multiple locations, high volume, or custom routing across your team.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--hair-strong)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.03]"
            >
              Talk to us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- section 5: pricing treatment ------------------------------------ */

const quoteSteps = [
  { t: "Book a 15-min call", b: "Tell us how your enquiries come in. 15 minutes, no pressure." },
  { t: "We scope your setup", b: "We map your channels and what a good reply looks like." },
  { t: "You get a fixed quote", b: "One clear price, no surprises later." },
]

/* Price fine print. Shared so the desktop pricing section and the mobile
   foundation box show the same disclaimer from one source. */
function PricingFootnote() {
  return (
    <>
      <p className="mt-6 text-[14px] leading-relaxed text-[var(--silver)]">
        Standard rate A$997/month. One-time setup A$490, non-refundable.
        Fair-use allowance included, high-volume billed at cost. Only 5 foundation
        spots, <span className="font-semibold text-white">closing 31 July 2026</span>.
      </p>
      <p className="mt-2.5 text-[12px] leading-relaxed text-[var(--muted)]">
        Prices in AUD. GST excluded.
      </p>
    </>
  )
}

function PricingTreatment() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.6rem,5.5vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
            Simple pricing, no surprises.
          </h2>

          {havePrices ? (
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-[var(--silver)] sm:text-[18px]">
              Setup:{" "}
              <span className="font-medium text-white">
                {SETUP_PRICE != null ? aud(SETUP_PRICE) : <FillIn>SETUP_PRICE</FillIn>}
              </span>
              . Then{" "}
              <span className="font-medium text-white">
                {MONTHLY_PRICE != null ? aud(MONTHLY_PRICE) : <FillIn>MONTHLY_PRICE</FillIn>}
              </span>
              /month. Final quote confirmed on your call.
            </p>
          ) : (
            <>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[var(--silver)] sm:text-[15px]">
                No two businesses are the same, so we quote yours properly. Here&apos;s how it goes.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {quoteSteps.map((step, i) => (
                  <div
                    key={step.t}
                    className="rounded-2xl border border-[var(--hair)] bg-white/[0.02] p-6"
                  >
                    <span className="ps-label !text-[11px] text-[var(--faint)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-[16px] font-medium leading-snug text-white">{step.t}</p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--silver)]">{step.b}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <PricingFootnote />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- section 6: how it works after you sign -------------------------- */

const steps = [
  { t: "We map your enquiries", b: "We find where leads come in and where follow-up breaks." },
  { t: "We connect your channels", b: "Website, Google, phone, email. You do nothing." },
  { t: "We test the replies", b: "You see and approve the drafts before anything goes live." },
  { t: "We go live", b: "Solren starts moving enquiries from first message to booked job." },
]

function HowItWorks() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.6rem,5.5vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
            How it works after you sign.
          </h2>
          <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[var(--silver)] sm:text-[15px]">
            The heavy lifting is on us. Here&apos;s exactly what happens.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-4">
          {steps.map(({ t, b }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="border-t border-[var(--hair)] pt-5">
                <span className="ps-label !text-[11px] text-[var(--faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3.5 text-[16px] font-medium tracking-tight text-white">{t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--silver)]">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- section 7: FAQ -------------------------------------------------- */

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

/* Display answers — same copy, but the data-safety answer carries real links. */
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

function PricingFaq() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          {/* left: heading + a short prompt, so the column is never empty */}
          <div className="lg:pt-2">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,5.5vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
                Questions, answered straight.
              </h2>
              <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-[var(--silver)] sm:text-[15px]">
                Still have a question? Book a 15-min call and we&apos;ll talk it through, no pressure.
              </p>
              <div className="mt-6">
                <PrimaryCta />
              </div>
            </Reveal>
          </div>
          {/* right: the accordion */}
          <div>
            <FaqAccordion items={pricingFaqs} defaultOpenIndex={null} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- section 8: final CTA -------------------------------------------- */

function FinalCta() {
  return (
    <section className="px-5 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
      <Reveal>
        <div className="ps-card ps-card-warm mx-auto max-w-[860px] rounded-[24px] px-6 py-10 text-center sm:rounded-[28px] sm:px-12 sm:py-12">
          <p className="mx-auto max-w-xl text-[16px] leading-relaxed text-[var(--silver)] sm:text-[18px]">
            {GUARANTEE_TERMS ?? (
              <>
                You don&apos;t carry the risk. <FillIn>GUARANTEE_TERMS</FillIn>
              </>
            )}
          </p>
          <div className="mt-7 flex justify-center sm:mt-8">
            <PrimaryCta />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- hero supporting visual ----------------------------------------- */

/* The hero reply-preview card. Generic placeholder text, no fabricated messages.
   Reused in two places: the absolute xl decoration (HeroPreview) and the in-flow
   card that reflows below the hero on mobile/tablet (HeroPreviewInline). */
function ReplyPreviewCard() {
  return (
    <div className="ps-card ps-card-warm rounded-[20px] p-5 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.95)]">
      <span className="ps-label !text-[10px] text-[var(--faint)]">Example preview</span>
      <div className="mt-4 space-y-3">
        <div className="rounded-xl border border-[var(--hair)] bg-white/[0.02] p-3.5">
          <span className="ps-label !text-[9px] !tracking-[0.18em]">Incoming</span>
          <p className="mt-2 text-[12.5px] font-medium leading-snug text-white">
            New enquiry from a customer
          </p>
          <div className="mt-2.5 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/[0.07]" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/[0.07]" />
          </div>
        </div>
        <div className="rounded-xl border border-[#537FEA]/25 bg-[#0F141B] p-3.5">
          <span className="ps-label !text-[9px] !tracking-[0.18em] text-[#86A2F0]">
            Solren reply
          </span>
          <p className="mt-2 text-[12.5px] font-medium leading-snug text-white">
            Solren&apos;s drafted reply
          </p>
          <div className="mt-2.5 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/[0.09]" />
            <div className="h-1.5 w-3/4 rounded-full bg-white/[0.09]" />
          </div>
          <span className="mt-3 inline-flex w-fit items-center rounded-full border border-[#537FEA]/30 bg-[#537FEA]/[0.08] px-2.5 py-1 text-[10px] font-medium text-[#86A2F0]">
            Awaiting your approval
          </span>
        </div>
      </div>
    </div>
  )
}

/* Absolute decoration filling the empty right side of the hero on wide desktops.
   Decorative only, so it is aria-hidden and pointer-events-none. Shown from xl
   up, where the headline leaves room beside it; below xl HeroPreviewInline takes
   over and reflows the same card into the page below the hero. */
function HeroPreview() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
      <div className="relative mx-auto h-full max-w-[1240px] px-6">
        <div className="absolute right-6 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#537FEA]/[0.06] blur-3xl" />
        <div className="absolute right-0 top-1/2 w-[360px] -translate-y-1/2">
          <ReplyPreviewCard />
        </div>
      </div>
    </div>
  )
}

/* The same preview card, reflowed in-flow below the hero text in the lg-to-xl
   range (where the headline leaves no room beside it and the absolute decoration
   is hidden). Hidden below lg, where the mobile layout drops it for space, and
   from xl up, where the absolute HeroPreview shows it beside the headline. */
function HeroPreviewInline() {
  return (
    <div className="mx-auto hidden max-w-[1240px] px-5 pb-12 sm:px-6 sm:pb-16 lg:block xl:hidden">
      <Reveal>
        <div className="max-w-[420px]">
          <ReplyPreviewCard />
        </div>
      </Reveal>
    </div>
  )
}

/* ---------- mobile-only layout --------------------------------------------- */

/* Compact, stacked version of the setup steps for the mobile "How it works" tab.
   Reuses the same `steps` copy as the desktop grid. */
function StepsList() {
  return (
    <ol className="space-y-6">
      {steps.map(({ t, b }, i) => (
        <li key={t} className="border-t border-[var(--hair)] pt-4">
          <span className="ps-label !text-[11px] text-[var(--faint)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-[16px] font-medium tracking-tight text-white">{t}</h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--silver)]">{b}</p>
        </li>
      ))}
    </ol>
  )
}

/* The "you get a fixed quote" steps, reusing the same `quoteSteps` copy as the
   desktop pricing section. */
function QuoteStepsList() {
  return (
    <ol className="space-y-3">
      {quoteSteps.map((step, i) => (
        <li key={step.t} className="rounded-2xl border border-[var(--hair)] bg-white/[0.02] p-5">
          <span className="ps-label !text-[11px] text-[var(--faint)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-[16px] font-medium leading-snug text-white">{step.t}</p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--silver)]">{step.b}</p>
        </li>
      ))}
    </ol>
  )
}

/* Mobile-only: the conversion essentials stacked and always visible. The cost of
   the problem, the A$497 foundation price (with its fine print), the example
   preview, the guarantee and the main CTA. The "cost of fixing it" card and the
   "need something bigger" card are intentionally dropped here. */
function MobileSupportStack() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1240px] space-y-8 px-5 sm:px-6">
        <Reveal>
          <CostCalculatorCard />
        </Reveal>
        <Reveal>
          <div className="ps-card ps-card-warm rounded-[22px] p-6 ring-1 ring-white/15 sm:rounded-[28px] sm:p-8">
            <InstallHeading />
            <PriceBox />
            <PricingFootnote />
          </div>
        </Reveal>
        <Reveal>
          <ScreenshotSlot />
        </Reveal>
        <Reveal>
          <GuaranteeCard />
        </Reveal>
        <Reveal>
          <InstallCta />
        </Reveal>
      </div>
    </section>
  )
}

/* Mobile-only: the supporting detail (bullets, setup/pricing steps, FAQ) tucked
   into a segmented-control tab strip. No price, guarantee or main CTA lives in
   here. Reuses the same components/data as the desktop sections. */
function MobileSupportTabsSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <MobileSupportTabs
            tabs={[
              { id: "what", label: "What you get", panel: <DeliverablesList /> },
              {
                id: "how",
                label: "How it works",
                panel: (
                  <div className="space-y-8">
                    <StepsList />
                    <div aria-hidden="true" className="h-px bg-[var(--hair)]" />
                    <QuoteStepsList />
                  </div>
                ),
              },
              {
                id: "faq",
                label: "FAQ",
                panel: <FaqAccordion items={pricingFaqs} defaultOpenIndex={null} />,
              },
            ]}
          />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- assembled page -------------------------------------------------- */

export function PricingContent() {
  return (
    <>
      {/* a little breathing room above the hero so the first line isn't tight
          against the nav on load (this page only; keeps PageHeader untouched) */}
      <div aria-hidden="true" className="h-6 sm:h-8 lg:h-10" />
      <PageHeader
        eyebrow="Pricing"
        title={<>Win back the jobs you&apos;re losing to slow replies.</>}
        sub="Solren catches every enquiry, drafts the reply and the follow-ups, and you approve what goes out. We set the whole thing up for you and run it month to month."
        bottomClass="pb-8 sm:pb-12 lg:pb-14"
        divider={false}
        decoration={<HeroPreview />}
        actions={
          <div className="flex w-full flex-col items-start gap-3">
            <PrimaryCta />
            <p className="text-[13px] leading-relaxed text-[var(--silver)]">
              No software to learn. We build it around how you already work.
            </p>
          </div>
        }
      />
      <HeroPreviewInline />
      <SectionRule />

      {/* Desktop: the full linear sequence, unchanged. `hidden lg:contents` drops
          this wrapper from the box tree at lg+, so the desktop layout is exactly
          as before; below lg the whole block is hidden.
          Order tells the story: cost of the problem, then price, then guarantee. */}
      <div className="hidden lg:contents">
        <CostBlock />
        <SectionRule />
        <WhatYouGet />
        <SectionRule />
        <GuaranteeBand />
        <SectionRule />
        <PricingTreatment />
        <SectionRule />
        <HowItWorks />
        <SectionRule />
        <PricingFaq />
      </div>

      {/* Mobile: essentials stacked and always visible, then the supporting
          detail behind a 3-tab control. Hidden from lg up. */}
      <div className="lg:hidden">
        <MobileSupportStack />
        <SectionRule />
        <MobileSupportTabsSection />
      </div>

      <FinalCta />
    </>
  )
}
