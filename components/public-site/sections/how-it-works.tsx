import { Reveal } from "../reveal"
import { Check } from "lucide-react"

/* The four-beat story is the single process system on the page, read in a glance:
   Lead comes in. Bad leads get filtered. Solren replies and follows up. You win the job.
   One soft blue flow spine with a slow pulse carries the eye from first lead to booked
   job. Blue appears only on the moment Solren wins the job. */

export function HowItWorks() {
  return (
    <section id="how" className="relative pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-[1180px] px-6">
        {/* the four-beat story — the single process system, with one soft flow spine
            + slow pulse carrying the eye from first lead to booked job */}
        <Reveal>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-2 left-0 top-2 w-px bg-gradient-to-b from-[#537FEA]/10 via-[#537FEA]/40 to-[#537FEA]/10"
            >
              <span className="ps-flow-pulse-y absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#537FEA] shadow-[0_0_10px_2px_rgba(83,127,234,0.45)]" />
            </div>
            <h2 className="max-w-4xl pl-6 text-[clamp(1.6rem,6.2vw,3.65rem)] font-semibold leading-[1.2] tracking-[-0.03em] sm:pl-9">
              {/* each line is a block so background-clip:text has descender headroom */}
              <span className="ps-silver block overflow-visible pb-1.5">Lead comes in.</span>
              <span className="ps-silver block overflow-visible pb-1.5">Bad leads get filtered.</span>
              <span className="ps-silver block overflow-visible pb-1.5">Solren replies and follows up.</span>
              <span className="block overflow-visible pb-1.5 text-[#86A2F0]">You win the job.</span>
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 2. You work. Solren follows up. ---------- */

const YOU_HANDLE = ["The job", "The quote", "The customer relationship", "The final decision"]
const SOLREN_HANDLES = [
  "Automatic enquiry capture",
  "Real-time spam and bot filtering",
  "Drafted reply suggestions",
  "Automated follow-ups",
  "Live lead tracking",
  "Daily performance summaries",
]

function HandleColumn({
  label,
  items,
  accent = false,
}: {
  label: string
  items: string[]
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-7 sm:p-8 ${
        accent
          ? "border border-[#537FEA]/25 bg-[#0F141B]"
          : "border border-[var(--hair)] bg-[#0A0D12]"
      }`}
    >
      <span className="ps-label !text-[12px]">{label}</span>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            {/* quiet Linear-style tick — blue on the system side, neutral on yours */}
            <Check
              className={`h-3.5 w-3.5 shrink-0 ${accent ? "text-[#86A2F0]" : "text-[var(--muted)]"}`}
              strokeWidth={2}
            />
            <span
              className={`text-[15px] leading-snug ${accent ? "text-white" : "text-[var(--silver)]"}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function WorkSplit() {
  return (
    <section className="relative pb-16 sm:pb-20">
      {/* contained, center-weighted hairline — intentional but soft, fades at the edges */}
      <div
        aria-hidden="true"
        className="mx-auto h-px w-full max-w-[1080px] bg-gradient-to-r from-transparent via-[var(--hair-strong)] to-transparent"
      />
      <div className="mx-auto max-w-[1080px] px-6 pt-20 sm:pt-24">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
            You work. Solren follows up.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            Most businesses lose leads because they reply late, forget to follow up, or miss the
            message completely. Solren keeps those conversations moving in the background.
          </p>
        </Reveal>

        <Reveal delay={90}>
          {/* you vs the system, side by side — your side calm, Solren's side carries the blue */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <HandleColumn label="You handle" items={YOU_HANDLE} />
            <HandleColumn label="Solren handles" items={SOLREN_HANDLES} accent />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 3. Installed around your business ---------- */

const CHANNELS = ["Gmail", "Website Forms", "Facebook Leads", "Service Enquiries", "Follow-up Logic"]
const MOBILE_CHANNELS = [
  "Website forms",
  "Google enquiries",
  "Facebook leads",
  "Service enquiries",
  "Follow-up logic",
]

export function InstalledAround() {
  return (
    <section className="relative pb-12 sm:pb-20">
      {/* contained, center-weighted hairline — matches the WorkSplit divider */}
      <div
        aria-hidden="true"
        className="mx-auto h-px w-full max-w-[1080px] bg-gradient-to-r from-transparent via-[var(--hair-strong)] to-transparent"
      />
      <div className="mx-auto max-w-[840px] px-6 pt-12 text-center sm:pt-14">
        <Reveal>
          <h2 className="text-[clamp(1.25rem,2.2vw,1.65rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver">
            Custom-built around your business.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            We connect the channels you already use, configure the replies and follow-up logic, and
            tailor the system around how your business handles enquiries.
          </p>
        </Reveal>

        <Reveal delay={90}>
          {/* one grouped capsule — the channels and logic read as a single system layer */}
          <div className="mt-8 flex justify-center">
            <ul className="flex w-full max-w-sm flex-col items-start gap-y-2.5 rounded-[24px] border border-[var(--hair)] bg-white/[0.02] px-5 py-5 text-left md:hidden">
              {MOBILE_CHANNELS.map((channel) => (
                <li key={channel} className="flex w-full items-center gap-x-3">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#537FEA]" />
                  <span className="text-[14px] font-medium text-[var(--silver)]">{channel}</span>
                </li>
              ))}
            </ul>
            <ul className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-[24px] border border-[var(--hair)] bg-white/[0.02] px-11 py-5 md:inline-flex">
              {CHANNELS.map((c) => (
                <li key={c} className="flex items-center gap-x-5">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#537FEA]" />
                  <span className="text-[14px] font-medium text-[var(--silver)]">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
