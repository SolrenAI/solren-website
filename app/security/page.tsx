import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import {
  SecurityAccordion,
  type SecurityRow,
} from "@/components/public-site/security-accordion"

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Solren protects your information: infrastructure, encryption in transit, access controls and trusted providers.",
}

/* The 10-second takeaways — calm principles, no icons */
const principles = [
  {
    title: "Controlled access",
    body: "Only the people who need to operate, support and improve the service can access relevant data.",
  },
  {
    title: "Trusted infrastructure",
    body: "Solren runs on reputable cloud and software providers, not homemade systems.",
  },
  {
    title: "Secure payments by Stripe",
    body: "Payments are processed through Stripe, so card details are handled by Stripe.",
  },
]

/* The in-depth rows — fuller explanation than the principles */
const rows: SecurityRow[] = [
  {
    title: "Infrastructure",
    body: "Solren runs on reputable cloud and software providers with access-controlled systems. Production systems are separated from day-to-day tools and access is limited.",
  },
  {
    title: "Transport security",
    body: "Data is transmitted over HTTPS/TLS where supported by browsers, connected services and providers.",
  },
  {
    title: "Access control",
    body: "Internal access is limited to what is needed to operate and support the service. Access is reviewed and removed when no longer required.",
  },
  {
    title: "Data handling",
    body: "Customer information is handled carefully and used only to provide the service. No system can be guaranteed completely secure, but Solren works to reduce risk over time.",
  },
  {
    title: "AI providers",
    body: "Solren may use AI providers, including OpenAI, to help draft replies and process message content only where needed to provide the service.",
  },
  {
    title: "Connected services",
    body: "Solren may use trusted services such as Google Workspace, Stripe, Supabase, n8n, Vercel and hosting infrastructure to deliver the service.",
  },
  {
    title: "Secure payments",
    body: "Payments are processed through Stripe. Card details are handled by Stripe, not stored directly by Solren.",
  },
]

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Data protection"
        title={<>Security.</>}
        sub="How Solren protects your information, customer enquiries and connected workflows."
        note="Last reviewed: 1 January 2026"
        actions={
          <>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:contact@solren.ai"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              Report a vulnerability
            </a>
          </>
        }
      />

      {/* Principles — the quick, reassuring takeaways under the hero */}
      <section className="pt-14 sm:pt-16">
        <div className="mx-auto max-w-[1080px] px-6">
          <Reveal>
            <span className="ps-label ps-label-legible">Trust principles</span>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6">
                  <p className="text-[16px] font-medium tracking-tight text-white">
                    {p.title}
                  </p>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In depth — intro on the left, accordion rows on the right.
         This section wraps ONLY the two-column grid. The sticky <aside> is a
         direct grid child (no Reveal/transform/overflow ancestor between it and
         the grid), so its containing block is the grid and it releases exactly
         where this section ends — it cannot follow into "Report a vulnerability"
         below, which is a separate section. */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[330px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <span className="ps-label ps-label-legible">In depth</span>
                <h2 className="mt-5 text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
                  Security practices
                </h2>
                <p className="mt-5 max-w-sm text-[15.5px] leading-relaxed text-[var(--silver)]">
                  A clear overview of how Solren handles data, providers, access
                  and reporting.
                </p>
              </Reveal>
            </aside>

            <Reveal delay={80}>
              <SecurityAccordion rows={rows} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Report a vulnerability — its own section, outside the sticky wrapper.
         Sits below the grid; the sticky column has already released by here. */}
      <section className="pb-24 sm:pb-28">
        <div className="mx-auto max-w-[1080px] px-6">
          <Reveal>
            <div className="mt-12 border-t border-white/[0.05] pt-10 text-center sm:mt-20 sm:pt-16">
              <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
                Report a vulnerability.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-[var(--silver)]">
                If you believe you have found a security vulnerability in Solren, email{" "}
                <a
                  href="mailto:contact@solren.ai"
                  className="text-[#86A2F0] underline-offset-2 hover:underline"
                >
                  contact@solren.ai
                </a>{" "}
                so we can review it.
              </p>
              <a
                href="mailto:contact@solren.ai"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
              >
                Contact Solren
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Final note — quiet */}
          <Reveal>
            <p className="mx-auto mt-12 max-w-md text-center text-[14px] leading-relaxed text-[var(--muted)]">
              For what we collect and how it is used, see our{" "}
              <Link
                href="/privacy"
                className="text-[var(--silver)] underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
