import type { ReactNode } from "react"
import { Reveal } from "../reveal"
import {
  CalendarCheck,
  PhoneMissed,
  Send,
  Check,
  type LucideIcon,
} from "lucide-react"

/* "What changes after install": an alternating feature sequence (Apple/Stripe
   style), not a card grid. Each module has its own shape: a conversation
   timeline, a calendar, a funnel, a checklist, a summary panel. */

/* Reply faster: open conversation timeline */
function ConversationVisual() {
  return (
    <div className="relative pl-1">
      <div className="absolute bottom-3 left-[6px] top-2 w-px bg-[var(--hair)]" />
      <div className="space-y-3.5">
        <div className="relative pl-7">
          <span className="ps-live-dot absolute left-0 top-[5px] h-[11px] w-[11px] rounded-full bg-[#537FEA] ring-4 ring-[#537FEA]/10" />
          <div className="flex items-center gap-2">
            <span className="ps-label !text-[9px] !tracking-[0.2em] text-[var(--faint)]">New enquiry</span>
            <span className="ps-label !text-[9px] text-[var(--faint)]">now</span>
          </div>
          <div className="mt-1.5 inline-block rounded-2xl rounded-tl-sm border border-[var(--hair)] bg-white/[0.03] px-4 py-2.5 text-[13.5px] leading-snug text-[var(--silver)]">
            Need an electrician tomorrow morning.
          </div>
        </div>
        <div className="relative pl-7">
          <span className="ps-live-dot absolute left-0 top-[5px] h-[11px] w-[11px] rounded-full bg-[#537FEA] ring-4 ring-[#537FEA]/10" />
          <div className="flex items-center gap-2">
            <span className="ps-label !text-[9px] !tracking-[0.2em] text-[var(--faint)]">Reply ready</span>
            <span className="ps-label !text-[9px] text-[var(--faint)]">45s</span>
          </div>
          <div className="mt-1.5 inline-block rounded-2xl rounded-tl-sm border border-[#537FEA]/20 bg-[#537FEA]/[0.06] px-4 py-2.5 text-[13.5px] leading-snug text-white">
            Thanks, we can help. What suburb are you in?
          </div>
        </div>
        <div className="relative pl-7">
          <span className="absolute left-0 top-[5px] h-[11px] w-[11px] rounded-full border border-[#537FEA]/50 bg-transparent" />
          <span className="ps-label !text-[9px] !tracking-[0.2em] text-[var(--faint)]">Follow-up sent</span>
          <p className="mt-1 text-[12.5px] leading-snug text-[var(--muted)]">
            If no reply, Solren follows up automatically.
          </p>
        </div>
      </div>
    </div>
  )
}

/* Book more jobs: a single calendar panel */
function CalendarVisual() {
  const rows = [
    { time: "9:30", label: "Emergency callout", urgent: true },
    { time: "12:00", label: "Quote follow-up" },
    { time: "3:30", label: "New booking" },
  ]
  return (
    <div className="rounded-2xl border border-[var(--hair)] bg-white/[0.02] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="ps-label !text-[9px] !tracking-[0.2em] text-[var(--silver)]">Today</span>
        <span className="rounded-full border border-[#537FEA]/25 bg-[#537FEA]/[0.06] px-2.5 py-0.5 text-[10px] font-medium text-[#86A2F0]">
          12 booked this week
        </span>
      </div>
      <div className="my-3 h-px bg-[var(--hair)]" />
      <ul className="space-y-2.5">
        {rows.map(({ time, label, urgent }) => (
          <li key={label} className="flex items-center gap-3">
            <span
              className="w-10 shrink-0 text-right text-[11px] tabular-nums text-[var(--faint)]"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {time}
            </span>
            <div
              className={`flex flex-1 items-center justify-between rounded-md border-l-2 py-2 pl-3 pr-2 ${
                urgent ? "border-l-[#537FEA] bg-[#537FEA]/[0.06]" : "border-l-[var(--hair-strong)] bg-white/[0.02]"
              }`}
            >
              <span className={`text-[12.5px] ${urgent ? "text-white" : "text-[var(--silver)]"}`}>{label}</span>
              {urgent && <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Recover missed leads: open funnel */
function FunnelVisual() {
  const steps: { icon: LucideIcon; label: string; tone: "muted" | "normal" | "won" }[] = [
    { icon: PhoneMissed, label: "Missed enquiry", tone: "muted" },
    { icon: Send, label: "Follow-up sent", tone: "normal" },
    { icon: CalendarCheck, label: "Quote booked", tone: "won" },
  ]
  return (
    <div className="relative pl-7">
      <div className="absolute bottom-4 left-[5px] top-2 w-px bg-gradient-to-b from-[var(--hair)] via-[var(--hair)] to-[#537FEA]/50" />
      <ul className="space-y-6">
        {steps.map(({ icon: Icon, label, tone }) => (
          <li key={label} className="relative">
            <span
              className={`absolute -left-7 top-0.5 h-[11px] w-[11px] rounded-full ${
                tone === "won" ? "bg-[#537FEA] ring-4 ring-[#537FEA]/10" : "border border-[var(--hair-strong)] bg-[#050608]"
              }`}
            />
            <div className="flex items-center gap-2.5">
              <Icon
                className={`h-4 w-4 shrink-0 ${
                  tone === "won" ? "text-[#86A2F0]" : tone === "muted" ? "text-[var(--faint)]" : "text-[var(--muted)]"
                }`}
                strokeWidth={1.7}
              />
              <span
                className={`text-[14px] ${
                  tone === "won"
                    ? "font-medium text-white"
                    : tone === "muted"
                      ? "text-[var(--muted)] line-through decoration-[var(--faint)]"
                      : "text-[var(--silver)]"
                }`}
              >
                {label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Less admin: checklist panel */
function ChecklistVisual() {
  const items = ["Reply drafted", "Reminder set", "Summary sent", "Lead updated"]
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--hair)] bg-white/[0.02]">
      <div className="flex items-center justify-between border-b border-[var(--hair)] px-5 py-3">
        <span className="ps-label !text-[9px] !tracking-[0.2em] text-[var(--silver)]">Inbox</span>
        <span className="flex items-center gap-1 rounded-full border border-[#537FEA]/25 bg-[#537FEA]/[0.06] px-2 py-0.5">
          <Check className="h-2.5 w-2.5 text-[#86A2F0]" strokeWidth={2.6} />
          <span className="ps-label !text-[8px] !tracking-[0.16em] text-[#86A2F0]">Cleared</span>
        </span>
      </div>
      <ul className="divide-y divide-[var(--hair)]">
        {items.map((label) => (
          <li key={label} className="flex items-center gap-3 px-5 py-2.5">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border border-[#537FEA]/30 bg-[#537FEA]/[0.08]">
              <Check className="h-2.5 w-2.5 text-[#86A2F0]" strokeWidth={2.6} />
            </span>
            <span className="text-[13px] text-[var(--silver)]">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Know what is happening: summary panel */
function SummaryVisual() {
  const lines = [
    { value: "6", label: "New leads" },
    { value: "4", label: "Replies ready" },
    { value: "3", label: "Follow-ups due", warm: true },
    { value: "5", label: "Jobs booked" },
  ]
  return (
    <div className="rounded-2xl border border-[var(--hair)] bg-[#0D1117] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-white">Daily Summary</span>
        <span className="ps-label !text-[9px] text-[var(--faint)]">7:00am</span>
      </div>
      <div className="my-3 h-px bg-[var(--hair)]" />
      <ul className="space-y-2.5">
        {lines.map(({ value, label, warm }) => (
          <li key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className={`h-1.5 w-1.5 rounded-full ${warm ? "bg-[#537FEA]" : "bg-[var(--faint)]"}`} />
              <span className="text-[13px] text-[var(--silver)]">{label}</span>
            </div>
            <span className="text-[15px] font-medium tabular-nums text-white">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

type Feature = { tag: string; title: string; body: string; visual: ReactNode }

const features: Feature[] = [
  {
    tag: "Reply faster",
    title: "Every enquiry gets an answer in seconds.",
    body: "Solren drafts the right reply the moment a lead lands, ready to send, day or night. First to reply usually wins the job.",
    visual: <ConversationVisual />,
  },
  {
    tag: "Book more jobs",
    title: "Follow-up keeps work moving until it is booked.",
    body: "Fast replies and steady, automatic follow-up turn more enquiries into confirmed work on the calendar.",
    visual: <CalendarVisual />,
  },
  {
    tag: "Recover missed leads",
    title: "Quiet leads get another chance.",
    body: "The enquiries that slip get picked back up and chased, so the ones you would have lost come back to life.",
    visual: <FunnelVisual />,
  },
  {
    tag: "Less admin",
    title: "Replies, reminders and summaries, handled for you.",
    body: "Stop living in your inbox. The repetitive follow-up work runs itself in the background.",
    visual: <ChecklistVisual />,
  },
  {
    tag: "Know what is happening",
    title: "See everything without living in your inbox.",
    body: "A clear daily view of every lead, what is next, and what got booked, sent straight to you.",
    visual: <SummaryVisual />,
  },
]

export function Benefits() {
  return (
    <section className="relative border-t border-[var(--hair)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <span className="ps-label">What changes after install</span>
        </Reveal>

        <div className="mt-10 space-y-14 sm:space-y-20 lg:mt-16 lg:space-y-24">
          {features.map((f, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal key={f.tag} delay={60}>
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={flip ? "lg:order-2" : ""}>
                    <span className="ps-label !text-[10px] text-[#86A2F0]">{f.tag}</span>
                    <h3 className="mt-4 max-w-md text-[clamp(1.55rem,3vw,2.1rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white">
                      {f.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-[var(--silver)]">
                      {f.body}
                    </p>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>{f.visual}</div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
