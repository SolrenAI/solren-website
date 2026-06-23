"use client"

import Link from "next/link"
import { useState } from "react"
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

const packages = ["Starter", "Growth", "Enterprise", "Not sure"]

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

const bestTimes = ["Morning", "Afternoon", "Evening", "Anytime"]

const urgencies = ["Just exploring", "Want to install this month", "Need help urgently"]

const nextSteps = [
  "We review your business.",
  "We map your lead flow.",
  "We recommend the right install.",
]

/* ------------------------------------------------------------------ */
/* shared pieces                                                      */
/* ------------------------------------------------------------------ */

const fieldClass =
  "w-full rounded-xl border border-[var(--hair-strong)] bg-white/[0.025] px-4 py-3 text-[15px] text-white placeholder:text-[#969ba6] outline-none transition-colors hover:border-white/25 focus:border-[#537FEA]/60 focus:bg-white/[0.04] focus:ring-2 focus:ring-[#537FEA]/20"

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
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-medium transition-colors ${
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
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-medium transition-colors ${
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

function NextStepsList() {
  return (
    <ol className="mt-6 space-y-5">
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
function SuccessPanel() {
  return (
    <div className="ps-card ps-card-warm rounded-[24px] p-8 sm:p-10">
      <div className="flex items-center gap-2.5">
        <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
        <span className="ps-label !text-[10px] text-white">Request received</span>
      </div>
      <h2 className="mt-5 text-[24px] font-medium leading-tight tracking-tight text-white">
        Thank you. Your details are on their way.
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-[var(--silver)]">
        Your email app should have opened with your request ready to send. If it
        didn&apos;t, email us at{" "}
        <a
          href="mailto:contact@solren.ai"
          className="text-white underline-offset-2 hover:underline"
        >
          contact@solren.ai
        </a>{" "}
        and we&apos;ll pick it up from there.
      </p>

      <div className="mt-7 border-t border-[var(--hair)] pt-6">
        <span className="ps-label !text-[10px]">What happens next</span>
        <NextStepsList />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--hair)] pt-7">
        <Link
          href="/how-it-works"
          className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
        >
          See how it works
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-white/[0.03]"
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
  const [pkg, setPkg] = useState("")
  const [selChannels, setSelChannels] = useState<string[]>([])
  const [selTools, setSelTools] = useState<string[]>([])
  const [selProblems, setSelProblems] = useState<string[]>([])
  const [bestTime, setBestTime] = useState("")
  const [urgency, setUrgency] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  function toggle(list: string[], setList: (v: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const subject = `Get started: ${fields.business || fields.name || "Solren"}`
    const lines = [
      `Name: ${fields.name}`,
      `Business: ${fields.business}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Trade: ${fields.trade}`,
      `Website: ${fields.website || "-"}`,
      `Package interest: ${pkg || "-"}`,
      "",
      "Fix first:",
      message || "-",
    ]
    if (
      selChannels.length ||
      selTools.length ||
      selProblems.length ||
      bestTime ||
      urgency
    ) {
      lines.push(
        "",
        `Lead channels: ${selChannels.join(", ") || "-"}`,
        `Current tools: ${selTools.join(", ") || "-"}`,
        `Leads slipping: ${selProblems.join(", ") || "-"}`,
        `Best time to contact: ${bestTime || "-"}`,
        `Timeline: ${urgency || "-"}`
      )
    }

    setSubmitted(true)
    window.location.href = `mailto:contact@solren.ai?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`
  }

  return (
    <section className="relative pt-6 pb-20 sm:pt-8 sm:pb-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-14">
        {/* ---------------------------------------------------------- */}
        {/* LEFT: short copy + what happens after you submit           */}
        {/* ---------------------------------------------------------- */}
        <div className="max-w-sm">
          <p className="text-[16px] leading-relaxed text-[var(--silver)]">
            Solren is installed and managed for you. Tell us where leads are slipping,
            and we&apos;ll map the right install.
          </p>
          <div className="mt-6 rounded-[20px] border border-[var(--hair)] bg-white/[0.015] p-5 sm:p-6">
            <span className="text-[13px] font-medium text-[var(--silver)]">After you submit</span>
            <NextStepsList />
          </div>
          <p className="mt-6 text-[13.5px] leading-relaxed text-[var(--muted)]">
            You speak to the people who build and run your install.
          </p>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* RIGHT: one clean form (or success state)                   */}
        {/* ---------------------------------------------------------- */}
        {submitted ? (
          <SuccessPanel />
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-[18px] font-medium tracking-tight text-white">
              Tell us about your business.
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                <select
                  required
                  value={fields.trade}
                  onChange={set("trade")}
                  className={`${fieldClass} appearance-none ${fields.trade ? "" : "text-[#969ba6]"}`}
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

            <div className="mt-5">
              <Field label="What should we fix first?">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Missed calls, slow replies, quotes not followed up, leads going quiet…"
                  className={`${fieldClass} resize-none`}
                />
              </Field>
            </div>

            <div className="mt-6">
              <span className="mb-2.5 block text-[13px] font-medium text-[var(--silver)]">Package interest</span>
              <ChoiceGroup
                options={packages}
                value={pkg}
                onChange={setPkg}
                ariaLabel="Package interest"
              />
            </div>

            {/* optional, collapsed by default */}
            <details className="group mt-6 border-t border-[var(--hair)] pt-6">
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
                  <span className="mb-2.5 block text-[13px] font-medium text-[var(--silver)]">Best time to contact</span>
                  <ChoiceGroup
                    options={bestTimes}
                    value={bestTime}
                    onChange={setBestTime}
                    ariaLabel="Best time to contact"
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

            <div className="mt-7 border-t border-[var(--hair)] pt-6">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE] sm:w-auto"
              >
                Talk to us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <p className="mt-4 text-[13px] leading-relaxed text-[var(--silver)]">
                We&apos;ll review your details and reply with the best next step.
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--muted)]">
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
        )}
      </div>
    </section>
  )
}
