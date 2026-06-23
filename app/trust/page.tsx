import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import { HelpCard } from "@/components/public-site/help-card"

export const metadata: Metadata = {
  title: "Trust Centre",
  description:
    "Security, privacy, AI transparency, system health, infrastructure and data handling at Solren, in one place.",
}

const reliability = [
  {
    title: "Work keeps moving",
    body: "Each enquiry follows a reliable path from first message to booked work, even across several steps and follow-ups.",
  },
  {
    title: "Watched and improved",
    body: "We keep an eye on how things run, so the service keeps getting more dependable over time.",
  },
  {
    title: "You stay in control",
    body: "Solren drafts the replies. Your team approves what gets sent, so the final call is always yours.",
  },
]

const cards = [
  {
    title: "Security",
    summary: "Infrastructure, encryption in transit, access controls and reasonable measures.",
    href: "/security",
  },
  {
    title: "Privacy",
    summary: "What we collect, how we use it, retention and your rights.",
    href: "/privacy",
  },
  {
    title: "AI control",
    summary: "How Solren uses AI to draft replies, and what stays under your control.",
    href: "/help/openai",
  },
  {
    title: "Status",
    summary: "Live availability across automation, messaging, billing and the website.",
    href: "/status",
  },
  {
    title: "Infrastructure",
    summary: "The proven technology Solren is built on.",
    href: "/integrations",
  },
  {
    title: "Data handling",
    summary: "What data Solren processes, where it is stored and how it is protected.",
    href: "/help/data-handling",
  },
]

export default function TrustPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust Centre"
        title={<>Built to be trusted.</>}
        sub="Security, privacy, AI transparency and system health, brought together in one place."
        note="Last reviewed: 22 November 2025"
      />

      <section className="pt-14 pb-20 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <HelpCard title={c.title} summary={c.summary} href={c.href} />
              </Reveal>
            ))}
          </div>

          {/* Built for reliability: customer-friendly, calm, plain English */}
          <Reveal>
            <div className="mt-16 border-t border-[var(--hair)] pt-14">
              <span className="ps-label ps-label-legible">Reliability</span>
              <h2 className="mt-5 max-w-xl text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
                Designed to keep work moving.
              </h2>
              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-[var(--silver)]">
                Solren is designed to keep enquiries moving, keep an eye on how
                things run, and keep your team in control, so work does not slip
                when you are busy.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
                {reliability.map((r) => (
                  <div key={r.title} className="border-t border-[var(--hair)] pt-5">
                    <h3 className="text-[15.5px] font-medium tracking-tight text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--silver)]">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* quiet closing CTA — single line, one action, no sales section */}
          <Reveal>
            <div className="mt-12 border-t border-[var(--hair)] pt-10">
              <p className="text-[16px] leading-relaxed text-[var(--silver)]">
                Ready to see how Solren handles your enquiries?
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-12 border-t border-[var(--hair)] pt-10 text-[14px] leading-relaxed text-[var(--muted)]">
              You can also read our{" "}
              <a href="/terms" className="text-[var(--silver)] underline-offset-2 hover:underline">
                Terms of Service
              </a>{" "}
              and review recent updates in the{" "}
              <a href="/changelog" className="text-[var(--silver)] underline-offset-2 hover:underline">
                Changelog
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
