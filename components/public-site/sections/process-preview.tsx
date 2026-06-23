import Link from "next/link"
import { Reveal } from "../reveal"
import { ArrowUpRight } from "lucide-react"

/* Install plan as a vertical setup sequence (not a horizontal rail — the page
   already has the horizontal enquiry flow up top). Heading on the left, four
   numbered steps on the right threaded by a quiet vertical signal line. */
type Phase = { n: string; title: string; body: string; tone: "start" | "step" | "live" }

const phases: Phase[] = [
  {
    n: "01",
    title: "Map your enquiries",
    body: "Find where leads arrive and where follow-up breaks.",
    tone: "start",
  },
  {
    n: "02",
    title: "Connect your channels",
    body: "Website forms, email, SMS and key workflows are connected carefully.",
    tone: "step",
  },
  {
    n: "03",
    title: "Test the replies",
    body: "Drafts, follow-ups and summaries are checked before going live.",
    tone: "step",
  },
  {
    n: "04",
    title: "Go live",
    body: "Solren starts moving enquiries from first message to booked work.",
    tone: "live",
  },
]

function StepNode({ n, tone }: { n: string; tone: Phase["tone"] }) {
  return (
    <span
      className={`relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border text-[12px] font-medium tabular-nums ${
        tone === "live"
          ? "border-[#537FEA]/55 bg-[#111725] text-white shadow-[0_0_9px_-6px_rgba(83,127,234,0.4)]"
          : "border-[#537FEA]/40 bg-[#0A0D12] text-[#6A8FEE]"
      }`}
      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
    >
      {n}
    </span>
  )
}

export function ProcessPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* left: heading + copy */}
        <Reveal>
          <div>
            <span className="ps-label">How it works</span>
            <h2 className="mt-5 text-[clamp(1.9rem,8.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] sm:mt-6 sm:leading-[1.05]">
              <span className="ps-silver">Connected once.</span>{" "}
              <span className="text-[var(--muted)]">Working every day.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-[var(--silver)] sm:mt-6 sm:text-[15.5px]">
              We map where enquiries come from, connect your channels, test the
              replies and turn Solren on around the way your business already works.
            </p>
            <Link
              href="/how-it-works"
              className="group mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-white"
            >
              See full process
              <ArrowUpRight className="h-4 w-4 text-[#537FEA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* right: vertical setup sequence on a quiet signal line */}
        <Reveal delay={120}>
          <ol className="relative grid grid-cols-[34px_minmax(0,1fr)] gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-9 md:hidden">
            <span
              aria-hidden="true"
              className="pointer-events-none relative z-0 col-start-1 row-start-1 row-end-4"
            >
              <span className="absolute bottom-[-17px] left-1/2 top-[17px] w-px -translate-x-1/2 bg-gradient-to-b from-[#537FEA]/18 via-[#537FEA]/26 to-[#537FEA]/38">
                <span className="ps-flow-pulse-y absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6f93ee] opacity-0 shadow-[0_0_5px_rgba(83,127,234,0.35)]" />
              </span>
            </span>
            {phases.map((p, index) => (
              <li key={p.n} className="contents">
                <div className="relative z-10 col-start-1" style={{ gridRow: index + 1 }}>
                  <StepNode n={p.n} tone={p.tone} />
                </div>
                <div className="col-start-2 pt-1" style={{ gridRow: index + 1 }}>
                  <h3 className="text-[17px] font-medium tracking-tight text-white">{p.title}</h3>
                  <p className="mt-1.5 max-w-md text-[14.5px] leading-relaxed text-[var(--silver)]">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <ol className="relative hidden space-y-7 sm:space-y-9 md:block">
            <span
              aria-hidden="true"
              className="absolute left-[17px] top-[17px] bottom-[17px] w-px bg-gradient-to-b from-[#537FEA]/18 via-[#537FEA]/26 to-[#537FEA]/38"
            />
            {phases.map((p) => (
              <li key={p.n} className="relative flex items-start gap-4 sm:gap-5">
                <StepNode n={p.n} tone={p.tone} />
                <div className="pt-1">
                  <h3 className="text-[17px] font-medium tracking-tight text-white">{p.title}</h3>
                  <p className="mt-1.5 max-w-md text-[14.5px] leading-relaxed text-[var(--silver)]">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
