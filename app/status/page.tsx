import type { Metadata } from "next"
import Link from "next/link"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "System Status",
  description:
    "Current availability across Solren's website, dashboard, automation, messaging and billing systems.",
}

type System = { name: string; desc: string }
type Group = { title: string; systems: System[] }

const groups: Group[] = [
  {
    title: "Core platform",
    systems: [
      { name: "Website", desc: "Public marketing site and pages." },
      { name: "Dashboard", desc: "Client command centre and views." },
      { name: "Automation engine", desc: "The system that runs your workflows." },
    ],
  },
  {
    title: "Messaging",
    systems: [
      { name: "Gmail connection", desc: "Reading enquiries from connected inboxes." },
      { name: "Reply drafting", desc: "Drafting fast first replies for review." },
      { name: "Follow-up workflows", desc: "Timely follow-ups until a lead is resolved." },
    ],
  },
  {
    title: "Data and billing",
    systems: [
      { name: "Database", desc: "Secure storage for your business data." },
      { name: "Payments", desc: "Subscription billing handled by Stripe." },
      { name: "Notifications", desc: "Alerts and updates across the service." },
    ],
  },
]

/* Status treatment. Solren blue/neutral is the operational default; amber and
   red are reserved for degraded and outage states so they are ready when needed. */
type State = "operational" | "degraded" | "outage"

const STATES: Record<
  State,
  { dot: string; text: string; pill: string; label: string }
> = {
  operational: {
    dot: "bg-[#537FEA]",
    text: "text-[#86A2F0]",
    pill: "border-[#537FEA]/25 bg-[#537FEA]/[0.08]",
    label: "Operational",
  },
  degraded: {
    dot: "bg-[#E2A95E]",
    text: "text-[#E0AE70]",
    pill: "border-[#E2A95E]/25 bg-[#E2A95E]/[0.08]",
    label: "Degraded",
  },
  outage: {
    dot: "bg-[#EF6A6A]",
    text: "text-[#F0A0A0]",
    pill: "border-[#EF6A6A]/25 bg-[#EF6A6A]/[0.08]",
    label: "Outage",
  },
}

/* Quiet per-row indicator — a small dot plus muted label, no boxed pill */
function StatusDot({ state = "operational", label }: { state?: State; label?: string }) {
  const s = STATES[state]
  return (
    <span className="inline-flex shrink-0 items-center gap-2">
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      <span className="text-[12px] font-medium tracking-tight text-[var(--muted)]">
        {label ?? s.label}
      </span>
    </span>
  )
}

export default function StatusPage() {
  return (
    <>
      <PageHeader
        eyebrow="System Status"
        looseTitle
        title={<>All systems operational.</>}
        sub="Current availability across Solren's website, dashboard, automation, messaging and billing systems."
      />

      <section className="py-16 sm:pb-24 sm:pt-12">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          {/* Overall status summary — the at-a-glance operational banner that makes
              this read as a real public status page, not an internal table. */}
          <Reveal>
            <div className="flex max-w-[1040px] flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
              <div className="flex items-center gap-3">
                <span className="ps-live-dot h-2 w-2 shrink-0 rounded-full bg-[#537FEA]" />
                <div>
                  <div className="text-[15px] font-medium tracking-tight text-white">
                    All systems operational
                  </div>
                  <p className="mt-0.5 text-[13px] leading-snug text-[var(--muted)]">
                    All Solren services are running normally.
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center self-start rounded-full border border-[var(--hair-strong)] bg-white/[0.02] px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--silver)] sm:self-auto">
                Last checked: 22 June 2026
              </span>
            </div>
          </Reveal>

          {/* Detailed rows — cleaner, un-boxed, subtle dividers. Wider than the
              prose blocks so the operational list extends right like a status table. */}
          <div className="mt-10 max-w-[1040px] space-y-10 sm:mt-12">
            {groups.map((group) => (
              <Reveal key={group.title}>
                <div>
                  <h2 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/45">
                    {group.title}
                  </h2>
                  <div className="mt-3 divide-y divide-white/[0.06]">
                    {group.systems.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-start justify-between gap-4 py-4"
                      >
                        <div>
                          <div className="text-[15px] font-medium tracking-tight text-white">
                            {s.name}
                          </div>
                          <div className="mt-0.5 text-[13px] leading-snug text-[var(--muted)]">
                            {s.desc}
                          </div>
                        </div>
                        <span className="mt-0.5"><StatusDot state="operational" /></span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Recent history — calm record, no fake timeline when there are none */}
          <Reveal>
            <div className="mt-12 max-w-[800px] border-t border-[var(--hair)] pt-10 sm:mt-16 sm:pt-12">
              <h2 className="text-[19px] font-medium tracking-tight text-white">
                Recent history
              </h2>
              <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6">
                <div className="text-[15px] font-medium tracking-tight text-white">
                  No incidents reported.
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--silver)]">
                  Solren has no reported incidents for the current period.
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
                  Last reviewed June 2026.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Support */}
          <Reveal>
            <div className="mt-12 max-w-[800px] border-t border-[var(--hair)] pt-10">
              <h2 className="text-[15px] font-medium tracking-tight text-white">
                Need help?
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
                For urgent support, contact us through the{" "}
                <Link
                  href="/help"
                  className="text-[var(--silver)] underline-offset-2 hover:underline"
                >
                  Help Centre
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
