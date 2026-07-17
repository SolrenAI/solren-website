import type { Metadata } from "next"
import { JinksyEnquiryForm } from "./enquiry-form"

/* Standalone landing page for Jinksy Clean, an independent cleaning brand.
   Deliberately outside the .ps design language: it renders as its own light,
   self-contained site. Unlinked from all Solren navigation, excluded from the
   sitemap, and blocked from indexing via metadata + an X-Robots-Tag header
   (next.config.ts). Reachable only by its exact URL. */

const TITLE = "Jinksy Clean | Home and Office Cleaning"
const DESCRIPTION = "Reliable home and office cleaning services from Jinksy Clean."

export const metadata: Metadata = {
  /* absolute: escapes the root "%s · Solren" title template */
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  /* Defining openGraph/twitter here replaces the root Solren objects wholesale,
     so no Solren titles or social images leak onto this page. */
  openGraph: {
    type: "website",
    siteName: "Jinksy Clean",
    url: "https://solren.ai/jinksy-cleaning",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
}

/* Original four-point sparkle mark on a rounded tile. Text wordmark beside it. */
function JinksyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#14675C" />
      <path
        d="M16 7c.95 4.9 3.15 7.1 8.05 8.05-4.9.95-7.1 3.15-8.05 8.05-.95-4.9-3.15-7.1-8.05-8.05C12.85 14.1 15.05 11.9 16 7Z"
        fill="#F7F6F1"
      />
    </svg>
  )
}

function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <JinksyMark className="h-8 w-8" />
      <span className="text-[17px] font-semibold tracking-tight text-[#1B2723]">
        Jinksy&nbsp;Clean
      </span>
    </span>
  )
}

const SERVICES = [
  {
    name: "Regular home cleaning",
    copy: "Weekly or fortnightly cleaning that keeps your home consistently fresh, following the same checklist every visit.",
  },
  {
    name: "One-off deep cleaning",
    copy: "A thorough top-to-bottom clean for when your home needs extra attention, covering the areas a regular clean doesn't reach.",
  },
  {
    name: "End-of-lease cleaning",
    copy: "A detailed clean when you're moving out, worked through methodically so the property is presented at its best.",
  },
  {
    name: "Small office cleaning",
    copy: "Reliable cleaning for small offices and studios, scheduled around your working hours to keep disruption to a minimum.",
  },
]

const STEPS = [
  {
    name: "Send your enquiry",
    copy: "Tell us about your property and the kind of cleaning you're after using the form below.",
  },
  {
    name: "Receive your quote",
    copy: "We reply by email with a quote based on what you've told us, and confirm the scope and schedule with you.",
  },
  {
    name: "We do the cleaning",
    copy: "Your clean is carried out to the agreed checklist, on the schedule that suits you.",
  },
]

const EXPECTATIONS = [
  "Clear communication before and after every job",
  "A consistent checklist agreed with you up front",
  "Cleaning products suited to the surfaces in your property",
  "Scheduling that works around your routine",
]

export default function JinksyCleaningPage() {
  return (
    <div
      className="min-h-screen bg-[#F7F6F1] font-[var(--font-inter),Inter,system-ui,sans-serif] text-[#3E4A45] [color-scheme:light]"
      style={{ colorScheme: "light" }}
    >
      {/* header */}
      <header className="border-b border-[#E4E1D6]">
        <div className="mx-auto flex max-w-[1060px] items-center justify-between px-5 py-4 sm:px-8">
          <Logo />
          <a
            href="#quote"
            className="rounded-full border border-[#14675C] px-4 py-2 text-[13.5px] font-medium text-[#14675C] transition-colors hover:bg-[#14675C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14675C]"
          >
            Request a quote
          </a>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="mx-auto max-w-[1060px] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#14675C]">
            Home &amp; office cleaning
          </p>
          <h1 className="mt-4 max-w-[640px] text-[34px] font-semibold leading-[1.12] tracking-tight text-[#1B2723] sm:text-[46px]">
            Reliable home and office cleaning
          </h1>
          <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed">
            Professional cleaning tailored to your property, your schedule, and
            your priorities.
          </p>
          <div className="mt-8">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-[#14675C] px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#0F544B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14675C]"
            >
              Request a cleaning quote
            </a>
          </div>
        </section>

        {/* services */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="border-t border-[#E4E1D6] bg-white"
        >
          <div className="mx-auto max-w-[1060px] px-5 py-14 sm:px-8 sm:py-20">
            <h2
              id="services-heading"
              className="text-[24px] font-semibold tracking-tight text-[#1B2723] sm:text-[28px]"
            >
              What we clean
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-[#E4E1D6] bg-[#FBFAF7] p-6"
                >
                  <h3 className="text-[16.5px] font-semibold tracking-tight text-[#1B2723]">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* process + expectations */}
        <section
          aria-labelledby="process-heading"
          className="border-t border-[#E4E1D6]"
        >
          <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <h2
                id="process-heading"
                className="text-[24px] font-semibold tracking-tight text-[#1B2723] sm:text-[28px]"
              >
                How it works
              </h2>
              <ol className="mt-8 space-y-7">
                {STEPS.map((step, i) => (
                  <li key={step.name} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14675C]/10 text-[14px] font-semibold text-[#14675C]"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-semibold tracking-tight text-[#1B2723]">
                        {step.name}
                      </h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed">{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-[#E4E1D6] bg-white p-6 sm:p-7 lg:self-start">
              <h3 className="text-[16px] font-semibold tracking-tight text-[#1B2723]">
                What you can expect
              </h3>
              <ul className="mt-4 space-y-3.5">
                {EXPECTATIONS.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="mt-0.5 h-4.5 w-4.5 shrink-0"
                    >
                      <path
                        d="M4.5 10.5 8.5 14.5 15.5 6"
                        fill="none"
                        stroke="#14675C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* enquiry form */}
        <section
          id="quote"
          aria-labelledby="quote-heading"
          className="scroll-mt-6 border-t border-[#E4E1D6] bg-white"
        >
          <div className="mx-auto max-w-[640px] px-5 py-14 sm:px-8 sm:py-20">
            <h2
              id="quote-heading"
              className="text-[24px] font-semibold tracking-tight text-[#1B2723] sm:text-[28px]"
            >
              Request a cleaning quote
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed">
              Tell us what you need and we&rsquo;ll reply by email with a quote
              and the next steps.
            </p>
            <div className="mt-8">
              <JinksyEnquiryForm />
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="border-t border-[#E4E1D6]">
        <div className="mx-auto flex max-w-[1060px] flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Logo />
          <p className="text-[13px] text-[#6C7671]">
            © {new Date().getFullYear()} Jinksy Clean. Home and office cleaning.
          </p>
        </div>
      </footer>
    </div>
  )
}
