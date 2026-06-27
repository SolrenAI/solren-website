import { Reveal } from "../reveal"
import { Check } from "lucide-react"

/* The four-beat story, read in a glance:
   Lead comes in. Solren replies fast. Follow-up happens automatically. You book more work.
   One soft blue flow spine with a slow pulse carries the eye from first lead to booked
   job. Blue appears only on the moment the work is booked. */

export function HowItWorks() {
  /* Mobile: timeline pulled up under the hero CTA (no top padding + a small
     negative margin) so it reads as a continuous flow, not a new page. The
     hero's own spacing is untouched. sm+ restores the original lead-in. */
  return (
    <section id="how" className="relative -mt-3 pt-0 pb-6 sm:mt-0 sm:pt-8 sm:pb-8 lg:pt-4 lg:pb-12">
      <div className="mx-auto max-w-[1240px] px-6">
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
              {/* each line is a block so background-clip:text has descender headroom;
                  the {" "} separators keep the flattened text from running together */}
              <span className="ps-silver block overflow-visible pb-1.5">Lead comes in.</span>{" "}
              <span className="ps-silver block overflow-visible pb-1.5">Solren replies fast.</span>{" "}
              <span className="ps-silver block overflow-visible pb-1.5">Follow-up happens automatically.</span>{" "}
              <span className="block overflow-visible pb-1.5 text-[#86A2F0]">You book more work.</span>
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 2. You work. Solren follows up. ---------- */

const YOU_HANDLE = ["The job", "The customer", "The work"]
const SOLREN_HANDLES = [
  "New enquiries",
  "Fast replies",
  "Follow-ups",
  "Daily summaries",
  "Lead tracking",
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
      className={`rounded-2xl px-6 py-5 sm:p-8 ${
        accent
          ? "border border-[#537FEA]/25 bg-[#0F141B]"
          : "border border-[var(--hair)] bg-[#0A0D12]"
      }`}
    >
      <span className="ps-label !text-[12px]">{label}</span>
      <ul className="mt-6 space-y-3.5 sm:space-y-4">
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
    <section className="relative pb-12 lg:pb-10">
      {/* No divider — controlled whitespace separates this from the story above. */}
      <div className="mx-auto max-w-[1240px] px-6 pt-4 sm:pt-8 lg:pt-0">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
            You do the work. Solren handles the chase.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] sm:mt-5">
            Most businesses lose work because replies are late, follow-ups are forgotten, or
            messages are missed. Solren keeps every enquiry moving until there is a clear next step.
          </p>
        </Reveal>

        <Reveal delay={90}>
          {/* you vs the system, side by side — your side calm, Solren's side carries the blue */}
          <div className="mt-2 grid gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-5">
            <HandleColumn label="You handle" items={YOU_HANDLE} />
            <HandleColumn label="Solren handles" items={SOLREN_HANDLES} accent />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 3. Installed around your business ---------- */

const CHANNELS = ["Gmail", "Website Forms", "Facebook Leads", "Service Enquiries", "Follow-ups"]
const MOBILE_CHANNELS = [
  "Website forms",
  "Google enquiries",
  "Facebook leads",
  "Service enquiries",
  "Follow-ups",
]

export function InstalledAround() {
  return (
    /* Mobile-only on How It Works (rendered inside a md:hidden wrapper; desktop
       uses Trust). Tightened lead-in from the cards above, with real bottom
       padding so the rounded capsule completes and the footer begins cleanly
       beneath it (no negative pull — that cropped the card under the footer). */
    <section className="relative pb-6">
      {/* No divider — whitespace separates this from the section above. */}
      <div className="mx-auto max-w-[1240px] px-6 pt-1 text-center md:text-left">
        <Reveal>
          <h2 className="text-[clamp(1.25rem,2.2vw,1.65rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver">
            Built around your business.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] md:mx-0">
            We connect the channels you already use, set up the replies and follow-ups, and fit it
            around how your business already works.
          </p>
        </Reveal>

        <Reveal delay={90}>
          {/* one grouped capsule — the channels and logic read as a single system layer */}
          <div className="mt-6 flex justify-center md:justify-start">
            <ul className="flex w-full max-w-[340px] flex-col items-start gap-y-2 rounded-[24px] border border-[var(--hair)] bg-white/[0.02] px-4 py-3.5 text-left md:hidden">
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

        <Reveal delay={120}>
          <div className="mx-auto mt-5 flex max-w-xl flex-col gap-1 text-[13px] leading-relaxed text-[var(--muted)] md:mx-0">
            <p>Billing secured by Stripe. Card details stay with Stripe.</p>
            <p>Your data is stored on secure, access-controlled systems.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
