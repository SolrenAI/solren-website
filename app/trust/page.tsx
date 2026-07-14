import type { Metadata } from "next"

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
    body: "You approve the first reply to every new lead. The routine follow-ups run themselves, and stop the moment someone answers. The replies that matter are always yours.",
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
    summary: "How Solren uses AI to draft replies, and which ones you approve.",
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
        title={<>Built to earn trust.</>}
        sub="Security, privacy and legal information in one place."
        note="Last reviewed: 22 November 2025"
        divider={false}
        bottomClass="pb-4 sm:pb-6 lg:pb-6"
      />

      <section className="pt-1 pb-6 sm:pt-3 sm:pb-10 md:pb-6 lg:pt-2">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-4 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <HelpCard title={c.title} summary={c.summary} href={c.href} blue />
              </Reveal>
            ))}
          </div>

          {/* Built for reliability: customer-friendly, calm, plain English */}
          <Reveal>
            <div className="mt-8 sm:mt-14">
              <span className="ps-label ps-label-legible block">Reliability</span>
              <h2 className="mt-2 max-w-xl text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver sm:mt-3">
                Designed to keep work moving.
              </h2>
              <p className="mt-2 max-w-[800px] text-[15.5px] leading-relaxed text-[var(--silver)] sm:mt-4">
                Solren is designed to keep enquiries moving, keep an eye on how
                things run, and keep the replies that matter with you, so work
                does not slip when you are busy.
              </p>
              {/* No divider rules: on mobile the blocks read as one continuous
                  story, with generous vertical breathing room between each pair
                  (heading + text) carrying the hierarchy. From sm up they sit
                  side-by-side and the row gap tightens. */}
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-y-8">
                {reliability.map((r) => (
                  <div key={r.title}>
                    <h3 className="text-[15.5px] font-medium tracking-tight text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--silver)] sm:mt-2.5">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
