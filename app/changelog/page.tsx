import type { Metadata } from "next"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "A clear record of improvements to Solren's automation, dashboard and customer experience.",
}

type Entry = { title: string; body: string; category: string }
type Release = { month: string; entries: Entry[] }

const releases: Release[] = [
  {
    month: "June 2026",
    entries: [
      {
        category: "Trust",
        title: "Trust and legal pages added",
        body: "Added Privacy, Security, Terms of Service, Help Centre, Our Story, Status and Changelog pages to improve transparency and support.",
      },
      {
        category: "Website",
        title: "Public website refined",
        body: "Improved homepage structure, footer navigation, industry pages, package flow and the dark visual system.",
      },
      {
        category: "Dashboard",
        title: "Client settings improved",
        body: "Improved client settings reliability, timezone handling, business selection and save behaviour.",
      },
      {
        category: "Automation",
        title: "Operational controls connected",
        body: "Connected internal controls to Solren's automation backend for safer management and support.",
      },
      {
        category: "Client Experience",
        title: "Daily summaries improved",
        body: "Improved daily summaries for lead activity, follow-ups and booked work visibility.",
      },
    ],
  },
  {
    month: "May 2026",
    entries: [
      {
        category: "Automation",
        title: "Core automation workflows completed",
        body: "Completed the core enquiry capture, reply drafting, follow-up, booking, summary and admin workflows.",
      },
      {
        category: "Dashboard",
        title: "Dashboard command centre refined",
        body: "Improved the dashboard experience across leads, action queue, Gmail drafts, daily summaries and onboarding.",
      },
      {
        category: "Dashboard",
        title: "Multi-client handling improved",
        body: "Added better business selection, filtering and client context across the dashboard.",
      },
      {
        category: "Automation",
        title: "Reply and follow-up flow improved",
        body: "Improved how enquiries move from capture to draft reply, approval, follow-up and booking visibility.",
      },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Changelog"
        title={<>Product updates.</>}
        sub="A clear record of improvements to Solren's automation, dashboard and customer experience."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="space-y-14">
            {releases.map((release) => (
              <Reveal key={release.month}>
                <div className="relative">
                  {/* month heading */}
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#86A2F0]" />
                    <h2 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/45">
                      {release.month}
                    </h2>
                  </div>

                  {/* vertical timeline of entries */}
                  <div className="relative mt-6 pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-transparent via-[var(--hair)] to-transparent"
                    />
                    <div className="space-y-4">
                      {release.entries.map((e) => (
                        <div key={e.title} className="relative">
                          <span
                            aria-hidden="true"
                            className="absolute -left-[23px] top-5 h-1.5 w-1.5 rounded-full border border-[var(--hair-strong)] bg-[#0D1117]"
                          />
                          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5 sm:p-6">
                            <div className="flex items-start justify-between gap-4">
                              <h3 className="text-[16px] font-medium tracking-tight text-white">
                                {e.title}
                              </h3>
                              <span className="ps-label shrink-0 !text-[9px] !tracking-[0.18em]">
                                {e.category}
                              </span>
                            </div>
                            <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--silver)]">
                              {e.body}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
