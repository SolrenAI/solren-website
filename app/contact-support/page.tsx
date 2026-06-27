import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Contact support",
  description:
    "Contact Solren support for billing, setup, account access and workflow questions.",
}

const include = [
  {
    title: "Business details",
    body: "Include your business name and the email connected to Solren.",
  },
  {
    title: "What happened",
    body: "Briefly explain the issue, question or workflow you need help with.",
  },
  {
    title: "Relevant details",
    body: "Include invoice dates, lead sources, inbox names, screenshots or error messages where useful.",
  },
]

const sections = [
  {
    h: "Support requests",
    body: "Email contact@solren.ai with your business name, the issue and any relevant details.",
  },
  {
    h: "Billing questions",
    body: "For invoices, payments, cancellations or refund questions, include the invoice date or charge details where possible.",
  },
  {
    h: "Setup and workflow questions",
    body: "For install or workflow questions, include the connected inbox, lead source or automation step involved.",
  },
]

const usefulLinks = [
  { label: "Help Centre", href: "/help" },
  { label: "Billing", href: "/billing" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Status", href: "/status" },
]

export default function ContactSupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title={<>Contact support.</>}
        sub="Need help with Solren? Send us the issue and we will get back to you."
        titleClass="text-[clamp(2.05rem,8.5vw,4.4rem)] lg:text-[3rem]"
        bottomClass="pb-7 sm:pb-9 lg:pb-6"
        divider={false}
        actions={
          <a
            href="mailto:contact@solren.ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
          >
            Email support
          </a>
        }
      />

      <section className="pt-6 pb-12 sm:pb-16 sm:pt-5 md:pb-12 lg:pt-3">
        <div className="mx-auto max-w-[1240px] px-6">
          {/* One left-aligned content system: support content, then Useful links
              inline near the bottom. Sections are separated by whitespace only —
              no decorative rules on any breakpoint. */}
          {/* What to include — quick, scannable guidance */}
          <Reveal>
            <h2 className="text-[19px] font-medium tracking-tight text-white">
              What to include
            </h2>
            <div className="mt-4 grid max-w-[1040px] grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-4">
              {include.map((c) => (
                <div
                  key={c.title}
                  className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5 lg:p-[18px]"
                >
                  <p className="text-[15px] font-medium tracking-tight text-white">
                    {c.title}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--muted)]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* detail sections — spacing + headings carry the structure, no rules */}
          <div className="mt-10 max-w-[800px] space-y-8 sm:mt-10 lg:mt-8 lg:space-y-6">
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 30}>
                <div>
                  <h2 className="text-[19px] font-medium tracking-tight text-white">
                    {s.h}
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--silver)] lg:mt-3">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Useful links — inline, same left rail, compact two-column row */}
          <Reveal>
            <div className="mt-8 max-w-[800px] lg:mt-6">
              <h2 className="text-[19px] font-medium tracking-tight text-white">
                Useful links
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4">
                {usefulLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[15px] text-[var(--silver)] transition-colors hover:text-[#537FEA]"
                    >
                      <span className="underline-offset-2 group-hover:underline">
                        {l.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#537FEA]/80 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#537FEA]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* contact note */}
          <Reveal>
            <p className="mt-8 max-w-[800px] text-[14px] leading-relaxed text-[var(--muted)] lg:mt-6">
              We&apos;ll review your request and reply with the next step. For
              anything else, email{" "}
              <a
                href="mailto:contact@solren.ai"
                className="text-[var(--silver)] underline-offset-2 transition-colors hover:text-[#537FEA] hover:underline"
              >
                contact@solren.ai
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
