"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Check, ChevronDown } from "lucide-react"

/* ------------------------------------------------------------------ */
/* options                                                            */
/* ------------------------------------------------------------------ */

const trades = [
  "Electrical",
  "Plumbing",
  "Roofing",
  "HVAC",
  "Cleaning",
  "Landscaping",
  "Building",
  "Pest control",
  "Other",
]

/* optional, only shown if the visitor opens "Add more detail" */
const channels = [
  "Phone calls",
  "Website form",
  "Email",
  "Google Business Profile",
  "Facebook",
  "Instagram",
  "SMS",
  "Other",
]

const tools = [
  "Gmail / Google Workspace",
  "Outlook",
  "ServiceM8",
  "Tradify",
  "Jobber",
  "Spreadsheet",
  "No system yet",
  "Other",
]

const problems = [
  "Missing calls",
  "Slow replies",
  "Leads going cold",
  "No follow-up",
  "Too much admin",
  "Quotes not chased",
  "Need more booked jobs",
]

const urgencies = ["Just exploring", "Want to install this month", "Need help urgently"]

const nextSteps = [
  "We review your business.",
  "We identify where your enquiries are being lost.",
  "We show you exactly how Solren would work for you.",
]

/* ------------------------------------------------------------------ */
/* shared pieces                                                      */
/* ------------------------------------------------------------------ */

const fieldClass =
  "w-full rounded-xl border border-[var(--hair-strong)] bg-white/[0.025] px-4 py-3 text-[15px] text-white placeholder:text-[#969ba6] outline-none transition-colors hover:border-white/25 focus:border-[#537FEA]/60 focus:bg-white/[0.04] focus:ring-2 focus:ring-[#537FEA]/20"

/* Preferred-call-time slots (9:00 AM – 4:30 PM, 30-min). Optional convenience —
   collected with the enquiry, not a live booking system. */
const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
]

/* On-brand dark dropdown for the preferred time. Replaces the native <select>
   (whose option menu renders as an off-brand white OS popup). The trigger reuses
   fieldClass so it matches the inputs beside it; the panel reuses the dark nav
   dropdown treatment. Closes on outside click and Escape. */
function TimeSelect({
  value,
  onChange,
  placeholder = "No preference",
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${fieldClass} flex items-center justify-between text-left ${value ? "" : "text-[#969ba6]"}`}
      >
        {value || placeholder}
        <ChevronDown
          aria-hidden="true"
          className={`ml-2 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-[var(--hair-strong)] bg-[#0D1117] p-1.5 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.9)]"
        >
          {["", ...TIME_SLOTS].map((t) => {
            const isSel = t === value
            return (
              <li key={t || "none"}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSel}
                  onClick={() => {
                    onChange(t)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-[14px] transition-colors hover:bg-white/[0.04] ${
                    isSel ? "text-white" : "text-[var(--silver)]"
                  }`}
                >
                  {t || placeholder}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline gap-1.5 text-[13px] font-medium text-[var(--silver)]">
        {label}
        {required && <span className="text-[#537FEA]">*</span>}
        {hint && (
          <span className="ml-auto text-[12px] font-normal text-[var(--muted)]">{hint}</span>
        )}
      </span>
      {children}
    </label>
  )
}

/* single-select chip group (package interest, and the optional extras) */
function ChoiceGroup({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: string[]
  value: string
  onChange: (value: string) => void
  ariaLabel?: string
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {options.map((opt) => {
        const active = value === opt
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(active ? "" : opt)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2.5 sm:py-2 text-[13px] font-medium transition-colors ${
              active
                ? "border-[#537FEA]/70 bg-[#537FEA]/[0.16] text-white"
                : "border-[var(--hair-strong)] bg-white/[0.02] text-[var(--silver)] hover:border-white/25 hover:bg-white/[0.04]"
            }`}
          >
            {active && <span className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />}
            {opt}
          </button>
        )
      })}
    </div>
  )
}

/* multi-select chip group, used only inside the optional details */
function ChipGroup({
  options,
  selected,
  onToggle,
  ariaLabel,
}: {
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
  ariaLabel?: string
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {options.map((opt) => {
        const active = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(opt)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2.5 sm:py-2 text-[13px] font-medium transition-colors ${
              active
                ? "border-[#537FEA]/70 bg-[#537FEA]/[0.16] text-white"
                : "border-[var(--hair-strong)] bg-white/[0.02] text-[var(--silver)] hover:border-white/25 hover:bg-white/[0.04]"
            }`}
          >
            {active && <Check className="h-3.5 w-3.5 text-[#86A2F0]" strokeWidth={2.6} />}
            {opt}
          </button>
        )
      })}
    </div>
  )
}

function NextStepsList({ olClassName = "mt-6 space-y-5" }: { olClassName?: string }) {
  return (
    <ol className={olClassName}>
      {nextSteps.map((step, i) => (
        <li key={step} className="flex items-center gap-3.5">
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#537FEA]/35 bg-[#537FEA]/[0.10] text-[11px] font-medium tabular-nums text-[#b6c5f0]"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            {i + 1}
          </span>
          <span className="text-[15px] leading-snug text-[var(--silver)]">{step}</span>
        </li>
      ))}
    </ol>
  )
}

/* Shown in place of the form after submit, so the action ends in a clear
   confirmation rather than leaving the user on a full form. */
/* "2026-07-09" -> "Thursday, 9 July 2026" (falls back to the raw value). */
function formatBookingDate(d: string): string {
  const parts = d.split("-").map(Number)
  if (parts.length !== 3 || parts.some(Number.isNaN)) return d
  const dt = new Date(parts[0], parts[1] - 1, parts[2])
  if (Number.isNaN(dt.getTime())) return d
  const weekday = dt.toLocaleDateString("en-AU", { weekday: "long" })
  const rest = dt.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })
  return `${weekday}, ${rest}`
}

function SuccessPanel({
  preferredCallDate = "",
  preferredCallTime = "",
  timezone = "",
}: {
  preferredCallDate?: string
  preferredCallTime?: string
  timezone?: string
}) {
  const hasSlot = Boolean(preferredCallDate && preferredCallTime)
  return (
    <div className="ps-card ps-card-warm rounded-[24px] p-6 sm:mx-auto sm:max-w-[540px] sm:p-10">
      <div className="flex items-center gap-2.5">
        <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
        <span className="ps-label !text-[10px] text-white">Request received</span>
      </div>
      <h2 className="mt-5 text-[21px] font-medium leading-tight tracking-tight text-white lg:text-[24px]">
        Thanks. We’ve received your details.
      </h2>
      {hasSlot ? (
        <div className="mt-4">
          <span className="ps-label !text-[10px]">Preferred call time</span>
          <p className="mt-2 text-[15px] leading-snug text-white">
            {formatBookingDate(preferredCallDate)}
          </p>
          <p className="text-[15px] leading-snug text-white">
            {preferredCallTime}
            {timezone ? ` ${timezone}` : ""}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--silver)]">
            We’ll review your details and confirm the next step by email.
          </p>
        </div>
      ) : (
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--silver)]">
          We’ll review your business and reply with the best next step.
        </p>
      )}

      <div className="mt-6">
        <span className="ps-label !text-[10px]">What happens next</span>
        <NextStepsList />
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href="/how-it-works"
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
        >
          See how it works
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--hair)] px-6 py-3 text-[14.5px] font-medium text-[var(--silver)] transition-colors hover:bg-white/[0.03] hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* main                                                               */
/* ------------------------------------------------------------------ */

export function BookDemo() {
  const [fields, setFields] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    trade: "",
    website: "",
  })
  const [message, setMessage] = useState("")
  const [selChannels, setSelChannels] = useState<string[]>([])
  const [selTools, setSelTools] = useState<string[]>([])
  const [selProblems, setSelProblems] = useState<string[]>([])
  const [urgency, setUrgency] = useState("")
  const [preferredCallDate, setPreferredCallDate] = useState("")
  const [preferredCallTime, setPreferredCallTime] = useState("")
  const [tz, setTz] = useState("")
  const [submittedPreferredCallDate, setSubmittedPreferredCallDate] = useState("")
  const [submittedPreferredCallTime, setSubmittedPreferredCallTime] = useState("")
  const [submittedTimezone, setSubmittedTimezone] = useState("")
  const [hp, setHp] = useState("") // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const submitted = status === "success"

  // Browser timezone, read after mount to avoid any SSR/hydration mismatch.
  useEffect(() => {
    try {
      setTz(Intl.DateTimeFormat().resolvedOptions().timeZone ?? "")
    } catch {}
  }, [])

  // After a successful submit the form is replaced by the (shorter) success
  // panel. On mobile the viewport is usually scrolled down near the submit
  // button, so the confirmation can open part-way down the page. Reset to the
  // top so the confirmation is visible immediately.
  useEffect(() => {
    if (!submitted) return
    // "instant" is ignored (falls back to default jump) on browsers that don't
    // support it, so it's safe to pass directly.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [submitted])

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  function toggle(list: string[], setList: (v: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return

    setStatus("submitting")
    setErrorMsg("")

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          business_name: fields.business,
          service_needed: fields.trade,
          message,
          page_url: typeof window !== "undefined" ? window.location.href : "",
          form_name: "book-demo",
          website: fields.website,
          preferred_call_date: preferredCallDate,
          preferred_call_time: preferredCallTime,
          timezone: tz,
          lead_channels: selChannels,
          current_tools: selTools,
          problems: selProblems,
          urgency,
          hp,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || "Something went wrong. Please try again.")
      }

      // Preserve the submitted preferred-time values so the success card can
      // read them back even though the form state remains mounted.
      setSubmittedPreferredCallDate(preferredCallDate)
      setSubmittedPreferredCallTime(preferredCallTime)
      setSubmittedTimezone(tz)
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      )
    }
  }

  return (
    <section className="relative pb-12 pt-1 sm:pb-16 sm:pt-4 md:pb-12 lg:pt-2">
      <div className="mx-auto max-w-[640px] px-5 sm:px-6">
        {/* Single-column onboarding flow: the enquiry form is the one focal point
            (decision first); the "After you submit" reassurance sits as a small
            card directly below it (reassurance second). */}
        {submitted ? (
          <SuccessPanel
            preferredCallDate={submittedPreferredCallDate}
            preferredCallTime={submittedPreferredCallTime}
            timezone={submittedTimezone}
          />
        ) : (
          <>
            <form onSubmit={handleSubmit}>
            {/* honeypot: hidden from users, catches bots that fill every field */}
            <input
              type="text"
              name="company_url"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <h2 className="text-[18px] font-medium tracking-tight text-white">
              Tell us about your business.
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mt-6">
              <Field label="Your name" required>
                <input
                  required
                  value={fields.name}
                  onChange={set("name")}
                  placeholder="Jordan Mills"
                  className={fieldClass}
                />
              </Field>
              <Field label="Business name" required>
                <input
                  required
                  value={fields.business}
                  onChange={set("business")}
                  placeholder="Mills Electrical"
                  className={fieldClass}
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  value={fields.email}
                  onChange={set("email")}
                  placeholder="you@business.com.au"
                  className={fieldClass}
                />
              </Field>
              <Field label="Phone" required>
                <input
                  required
                  type="tel"
                  value={fields.phone}
                  onChange={set("phone")}
                  placeholder="04xx xxx xxx"
                  className={fieldClass}
                />
              </Field>
              <Field label="Trade / industry" required>
                <div className="relative">
                  <select
                    required
                    value={fields.trade}
                    onChange={set("trade")}
                    className={`${fieldClass} appearance-none pr-10 ${fields.trade ? "" : "text-[#969ba6]"}`}
                  >
                    <option value="" disabled className="bg-[#0A0D12] text-[var(--faint)]">
                      Select a trade
                    </option>
                    {trades.map((t) => (
                      <option key={t} value={t} className="bg-[#0A0D12] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
                  />
                </div>
              </Field>
              <Field label="Website" hint="optional">
                <input
                  value={fields.website}
                  onChange={set("website")}
                  placeholder="millselectrical.com.au"
                  className={fieldClass}
                />
              </Field>
            </div>

            {/* Preferred call time — optional; collected with the enquiry.
                Not a live booking. */}
            <div className="mt-5">
              <span className="text-[13px] font-medium text-[var(--silver)]">Preferred call time</span>
              <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Date" hint="optional">
                  <input
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    value={preferredCallDate}
                    onChange={(e) => setPreferredCallDate(e.target.value)}
                    className={fieldClass}
                  />
                </Field>
                <Field label="Time" hint={tz || "optional"}>
                  <TimeSelect value={preferredCallTime} onChange={setPreferredCallTime} />
                </Field>
              </div>
            </div>

            <div className="mt-5">
              <Field label="What should we fix first?">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Slow replies, quotes not followed up, enquiries going quiet…"
                  className={`${fieldClass} resize-none`}
                />
              </Field>
            </div>

            {/* optional, collapsed by default */}
            <details className="group mt-7">
              <summary className="flex cursor-pointer list-none items-center text-[13.5px] font-medium text-[var(--silver)] transition-colors hover:text-white">
                Add more detail
                <span className="ml-2 text-[12px] font-normal text-[var(--muted)]">optional</span>
                <ChevronDown className="ml-auto h-4 w-4 text-[var(--muted)] transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="mt-6 space-y-6">
                <div>
                  <span className="mb-2.5 block text-[13px] font-medium text-[var(--silver)]">How do leads come in?</span>
                  <ChipGroup
                    options={channels}
                    selected={selChannels}
                    onToggle={(v) => toggle(selChannels, setSelChannels, v)}
                    ariaLabel="How do leads come in?"
                  />
                </div>
                <div>
                  <span className="mb-2.5 block text-[13px] font-medium text-[var(--silver)]">What tools do you use?</span>
                  <ChipGroup
                    options={tools}
                    selected={selTools}
                    onToggle={(v) => toggle(selTools, setSelTools, v)}
                    ariaLabel="What tools do you use?"
                  />
                </div>
                <div>
                  <span className="mb-2.5 block text-[13px] font-medium text-[var(--silver)]">Where are leads slipping?</span>
                  <ChipGroup
                    options={problems}
                    selected={selProblems}
                    onToggle={(v) => toggle(selProblems, setSelProblems, v)}
                    ariaLabel="Where are leads slipping?"
                  />
                </div>
                <div>
                  <span className="mb-2.5 block text-[13px] font-medium text-[var(--silver)]">Timeline / urgency</span>
                  <ChoiceGroup
                    options={urgencies}
                    value={urgency}
                    onChange={setUrgency}
                    ariaLabel="Timeline / urgency"
                  />
                </div>
              </div>
            </details>

            <div className="mt-7">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Sending…" : "Send your details"}
                {status !== "submitting" && (
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
              {status === "error" && (
                <p role="alert" className="mt-4 text-[13px] leading-relaxed text-[#f7a8a8]">
                  {errorMsg} You can also email us at{" "}
                  <a
                    href="mailto:contact@solren.ai"
                    className="text-white underline-offset-2 hover:underline"
                  >
                    contact@solren.ai
                  </a>
                  .
                </p>
              )}
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--silver)] sm:mt-3">
                We&apos;ll review your business and reply with the next step.
              </p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--muted)] sm:mt-2">
                Prefer to write us directly?{" "}
                <a
                  href="mailto:contact@solren.ai"
                  className="text-[var(--silver)] underline-offset-2 hover:underline"
                >
                  contact@solren.ai
                </a>
              </p>
            </div>
          </form>

            {/* After you submit — a small reassurance card directly below the form */}
            <div className="mt-8 rounded-[20px] border border-[var(--hair)] bg-white/[0.015] p-5 sm:mt-10 sm:p-6">
              <span className="text-[13px] font-medium text-[var(--silver)]">After you submit</span>
              <NextStepsList />
              <p className="mt-5 text-[13px] leading-relaxed text-[var(--muted)]">
                You&rsquo;ll talk to the person who builds and runs your install.
                Not a ticket queue.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
