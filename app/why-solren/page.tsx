import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Why Solren",
  description:
    "Why service businesses choose Solren to catch enquiries, draft replies and follow up. Installed and managed for you, focused on turning enquiries into booked work.",
  alternates: { canonical: "/why-solren" },
}

/* Section 2 - the gap after the enquiry */
const gapCards = [
  {
    title: "Missed calls",
    body: "When someone reaches out and nobody can respond quickly, the job can move to the next business.",
  },
  {
    title: "Slow replies",
    body: "Even good leads go cold when the first response takes too long.",
  },
  {
    title: "Forgotten follow-up",
    body: "A lead that was interested yesterday can disappear if nobody follows up.",
  },
]

/* Section 3 - how Solren is delivered */
const installPoints = [
  "Set up around your enquiry channels",
  "Managed after installation",
  "Built so you stay focused on the job",
]

/* Section 3b - less admin pressure */
const adminCards = [
  {
    title: "No extra admin hire",
    body: "Solren helps handle the repetitive lead response and follow-up work that often falls on busy owners, office staff or technicians.",
  },
  {
    title: "Keeps working in the background",
    body: "Enquiries can be captured, organised and followed up even while your team is on the tools, with customers or away from the desk.",
  },
  {
    title: "Fewer leads left sitting",
    body: "Instead of relying on memory, sticky notes or someone checking every channel manually, Solren keeps the lead journey moving.",
  },
]

/* Section 4 - comparison. Solren is highlighted with a restrained blue border. */
const comparison = [
  {
    title: "Generic chatbot",
    body: "Answers website questions, but does not manage missed calls, follow-ups or the full lead journey.",
    solren: false,
  },
  {
    title: "DIY automation",
    body: "Powerful, but often needs setup, fixes, testing and ongoing management.",
    solren: false,
  },
  {
    title: "Solren",
    body: "Installed for you, managed for you and focused on turning enquiries into booked work.",
    solren: true,
  },
]

/* Section 6 - who it is built for */
const examples = [
  "Trades",
  "Home services",
  "Local service teams",
  "Appointment-based businesses",
]

const blockClass =
  "border-t border-[var(--hair)] pt-16 first:border-t-0 first:pt-0 sm:pt-20"
const eyebrowClass = "ps-label ps-label-legible"
const headingClass =
  "mt-5 text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white"
const proseClass = "mt-5 max-w-[680px] text-[16px] leading-[1.7] text-[var(--silver)]"

export default function WhySolrenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Solren"
        looseTitle
        title={<>Why service businesses choose Solren.</>}
        sub="Most lost leads do not look lost at first. They start as a missed call, a late reply, a forgotten follow-up, or a good enquiry that goes quiet. Solren is installed around your business to reduce admin pressure, keep enquiries moving and help turn more leads into booked work."
        actions={
          <>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              See how it works
            </Link>
          </>
        }
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          {/* Section 1 - the real problem */}
          <Reveal>
            <div className={blockClass}>
              <span className={eyebrowClass}>The real problem</span>
              <h2 className={headingClass}>The problem is not always more leads.</h2>
              <p className={proseClass}>
                Many service businesses already receive enough interest. The
                problem is what happens after the enquiry arrives. Calls get
                missed while the team is on the job. Website forms wait too long.
                Facebook messages get buried. Follow-ups depend on memory. Solren
                is built for that gap.
              </p>
            </div>
          </Reveal>

          {/* Section 2 - the gap, three cards */}
          <Reveal>
            <div className={`${blockClass} mt-16 sm:mt-20`}>
              <span className={eyebrowClass}>Where leads slip</span>
              <h2 className={headingClass}>Built for the gap after the enquiry.</h2>
              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {gapCards.map((c) => (
                  <div
                    key={c.title}
                    className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
                      <p className="text-[16px] font-medium tracking-tight text-white">
                        {c.title}
                      </p>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Section 3 - installed and managed */}
          <Reveal>
            <div className={`${blockClass} mt-16 sm:mt-20`}>
              <span className={eyebrowClass}>How it is delivered</span>
              <h2 className={headingClass}>Installed and managed for you.</h2>
              <p className={proseClass}>
                Solren is not another dashboard your team needs to learn. We set
                it up around how enquiries already reach your business, connect
                the right systems and keep it running quietly in the background.
              </p>
              <ul className="mt-7 space-y-3.5">
                {installPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[15.5px] leading-relaxed text-[var(--silver)]"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#537FEA]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Section 3b - less admin pressure */}
          <Reveal>
            <div className={`${blockClass} mt-16 sm:mt-20`}>
              <span className={eyebrowClass}>Less admin pressure</span>
              <h2 className={headingClass}>
                Less chasing. Less manual follow-up. Less missed work.
              </h2>
              <p className={proseClass}>
                Solren helps reduce the admin load that builds up after an
                enquiry comes in. It can capture leads, prepare replies, trigger
                follow-ups and keep the next step moving without needing another
                person to constantly watch every inbox, form and message thread.
              </p>
              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {adminCards.map((c) => (
                  <div
                    key={c.title}
                    className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
                      <p className="text-[16px] font-medium tracking-tight text-white">
                        {c.title}
                      </p>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Section 4 - comparison */}
          <Reveal>
            <div className={`${blockClass} mt-16 sm:mt-20`}>
              <span className={eyebrowClass}>How it compares</span>
              <h2 className={headingClass}>
                Not a chatbot. Not a DIY automation tool.
              </h2>
              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {comparison.map((c) => (
                  <div
                    key={c.title}
                    className={`h-full rounded-2xl border p-6 ${
                      c.solren
                        ? "border-[#537FEA]/30 bg-[#537FEA]/[0.05]"
                        : "border-white/[0.08] bg-white/[0.015]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {c.solren && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
                      )}
                      <p
                        className={`text-[15px] font-medium tracking-tight ${
                          c.solren ? "text-white" : "text-[var(--silver)]"
                        }`}
                      >
                        {c.title}
                      </p>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Section 5 - humans in control */}
          <Reveal>
            <div className={`${blockClass} mt-16 sm:mt-20`}>
              <span className={eyebrowClass}>Your control</span>
              <h2 className={headingClass}>Humans stay in control.</h2>
              <p className={proseClass}>
                Solren can help draft replies and follow-ups, but your business
                stays in control. You decide what is sent, how leads are handled
                and how the system is configured.
              </p>
            </div>
          </Reveal>

          {/* Section 6 - who it is for */}
          <Reveal>
            <div className={`${blockClass} mt-16 sm:mt-20`}>
              <span className={eyebrowClass}>Who it is for</span>
              <h2 className={headingClass}>Designed for service businesses.</h2>
              <p className={proseClass}>
                Solren is built for businesses where the team is often busy,
                mobile or on the tools. It helps keep enquiries moving while the
                workday continues.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {examples.map((ex) => (
                  <span
                    key={ex}
                    className="inline-flex items-center rounded-full border border-[var(--hair-strong)] bg-white/[0.02] px-4 py-2 text-[13px] font-medium text-[var(--silver)]"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Final CTA */}
          <Reveal>
            <div className="mt-16 border-t border-white/[0.05] pt-16 text-center sm:mt-20 sm:pt-20">
              <h2 className="mx-auto max-w-2xl text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver">
                Ready to see where your leads go quiet?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-[var(--silver)]">
                Tell us how enquiries reach your business and we will show where
                Solren can help.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Start the review
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
