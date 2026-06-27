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
    title: "Find where enquiries get missed",
    body: "We find where enquiries arrive. We find where follow-up breaks.",
    tone: "start",
  },
  {
    n: "02",
    title: "Connect every enquiry",
    body: "Website. Google. Phone. Email.",
    tone: "step",
  },
  {
    n: "03",
    title: "Approve the replies",
    body: "You approve. Solren sends.",
    tone: "step",
  },
  {
    n: "04",
    title: "Book more work",
    body: "More enquiries become jobs.",
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
    <section className="relative pt-2 pb-3 sm:pt-6 sm:pb-8 lg:pt-5 lg:pb-10">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* left: heading + copy */}
        <Reveal>
          <div>
            <span className="ps-label block">How it works</span>
            <h2 className="mt-1 text-[clamp(1.7rem,7.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] sm:mt-3 sm:leading-[1.05]">
              <span className="ps-silver">Connected once.</span>{" "}
              <span className="text-[var(--muted)]">Working every day.</span>
            </h2>
            <p className="mt-1.5 max-w-md text-[15px] leading-[1.65] text-[var(--silver)] sm:mt-4 sm:text-[15.5px]">
              We connect your enquiries. We test the replies. We run it for you.
            </p>
            <Link
              href="/how-it-works"
              className="group mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-white sm:mt-8"
            >
              See full process
              <ArrowUpRight className="h-4 w-4 text-[#537FEA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* right: vertical setup sequence on a quiet signal line */}
        <Reveal delay={120}>
          <ol className="relative grid grid-cols-[34px_minmax(0,1fr)] gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-9 md:hidden">
            {phases.map((p, index) => (
              <li key={p.n} className="contents">
                <div className="relative z-10 col-start-1" style={{ gridRow: index + 1 }}>
                  {index < phases.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-[-45px] left-1/2 top-[17px] z-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#537FEA]/18 via-[#537FEA]/26 to-[#537FEA]/38 sm:bottom-[-53px]"
                    />
                  )}
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
