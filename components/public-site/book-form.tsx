"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight, ChevronDown } from "lucide-react"

/* ------------------------------------------------------------------ */
/* Universal client lead form                                          */
/* ------------------------------------------------------------------ */
/* Customer-facing request form for any service business. The person filling
   this in is the client's *customer* (e.g. a homeowner), not a business
   owner — so the flow leads with their problem, then asks how to reach them.
   The lead is forwarded to /api/lead tagged with the hidden source / channel /
   form_name fields and the per-client slug from ?client= so the n8n pipeline
   can route it. On success it redirects to the shared /thank-you page. Kept
   self-contained so /contact's BookDemo is untouched. */

const fieldClass =
  "w-full rounded-xl border border-[var(--hair-strong)] bg-white/[0.025] px-4 py-3.5 text-[15px] text-white placeholder:text-[#969ba6] outline-none transition-colors hover:border-white/25 focus:border-[#537FEA]/60 focus:bg-white/[0.04] focus:ring-2 focus:ring-[#537FEA]/20"

const URGENCIES = ["Emergency", "This week", "This month", "Just looking"]
const CONTACT_METHODS = ["Call", "SMS", "Email"]
const CONTACT_TIMES = ["Morning", "Afternoon", "Evening", "Anytime"]

/* n8n Universal Lead Intake webhook. The /book form posts the lead directly. */
const WEBHOOK_URL = "https://n8n.solren.ai/webhook/e9530cc9-4439-4af6-98b1-8508f82fa2cd"

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
      <span className="mb-2 flex items-baseline gap-1.5 text-[13px] font-semibold text-[var(--silver)]">
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

/* single-select chip group — tap to select, tap again to clear */
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
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2.5 text-[13px] font-medium transition-colors sm:py-2 ${
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

export function BookForm() {
  const router = useRouter()

  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    suburb: "",
    service_needed: "",
    business_name: "",
    website: "",
  })
  const [urgency, setUrgency] = useState("")
  const [contactMethod, setContactMethod] = useState("")
  const [contactTime, setContactTime] = useState("")
  const [message, setMessage] = useState("")
  const [clientSlug, setClientSlug] = useState("")
  const [hp, setHp] = useState("") // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  // Read after mount to avoid any SSR/hydration mismatch, and to keep this off
  // useSearchParams (which would force a Suspense boundary).
  useEffect(() => {
    try {
      setClientSlug(new URLSearchParams(window.location.search).get("client") ?? "")
    } catch {}
  }, [])

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return

    setStatus("submitting")
    setErrorMsg("")

    // Honeypot: silently drop bot submissions (real users never fill `hp`).
    if (hp) {
      router.push("/thank-you")
      return
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_slug: clientSlug || "solren",
          source: "website",
          lead_name: fields.name,
          lead_email: fields.email,
          lead_phone: fields.phone,
          address: fields.address,
          suburb: fields.suburb,
          service_needed: fields.service_needed,
          urgency,
          message,
          preferred_contact: contactMethod,
          best_time_to_contact: contactTime,
          business_name: fields.business_name,
          website: fields.website,
        }),
      })

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.")
      }

      router.push("/thank-you")
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again.")
    }
  }

  return (
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

      {/* Row 1: Name | Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            required
            value={fields.name}
            onChange={set("name")}
            placeholder="Jordan Mills"
            autoComplete="name"
            className={fieldClass}
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="you@email.com"
            autoComplete="email"
            className={fieldClass}
          />
        </Field>
      </div>

      {/* Row 2: Phone | Address */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Phone" required>
          <input
            required
            type="tel"
            value={fields.phone}
            onChange={set("phone")}
            placeholder="04xx xxx xxx"
            autoComplete="tel"
            className={fieldClass}
          />
        </Field>
        <Field label="Address" required>
          <input
            required
            value={fields.address}
            onChange={set("address")}
            placeholder="e.g. 25 Smith Street"
            autoComplete="street-address"
            className={fieldClass}
          />
        </Field>
      </div>

      {/* Row 3: Suburb | What do you need help with? */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Suburb" required>
          <input
            required
            value={fields.suburb}
            onChange={set("suburb")}
            placeholder="e.g. Bondi, NSW"
            autoComplete="address-level2"
            className={fieldClass}
          />
        </Field>
        <Field label="What do you need help with?" required>
          <input
            required
            value={fields.service_needed}
            onChange={set("service_needed")}
            placeholder="e.g. Blocked drain"
            className={fieldClass}
          />
        </Field>
      </div>

      {/* Row 4: urgency */}
      <div className="mt-4">
        <span className="mb-2.5 block text-[13px] font-semibold text-[var(--silver)]">
          How soon do you need help?
          <span className="ml-1.5 text-[12px] font-normal text-[var(--muted)]">optional</span>
        </span>
        <ChoiceGroup
          options={URGENCIES}
          value={urgency}
          onChange={setUrgency}
          ariaLabel="How soon do you need help?"
        />
      </div>

      {/* Row 5: message */}
      <div className="mt-4">
        <Field label="Anything we should know?" hint="optional">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="e.g. Water leaking through the kitchen ceiling since this morning."
            className={`${fieldClass} resize-none`}
          />
        </Field>
      </div>

      {/* optional, collapsed by default */}
      <details className="group mt-6">
        <summary className="flex cursor-pointer list-none items-center text-[13.5px] font-medium text-[var(--silver)] transition-colors hover:text-white">
          Additional details
          <ChevronDown className="ml-auto h-4 w-4 text-[var(--muted)] transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <div className="mt-5 space-y-5">
          <div>
            <span className="mb-2.5 block text-[13px] font-semibold text-[var(--silver)]">
              Best time to contact
            </span>
            <ChoiceGroup
              options={CONTACT_TIMES}
              value={contactTime}
              onChange={setContactTime}
              ariaLabel="Best time to contact"
            />
          </div>
          <div>
            <span className="mb-2.5 block text-[13px] font-semibold text-[var(--silver)]">
              Preferred contact method
            </span>
            <ChoiceGroup
              options={CONTACT_METHODS}
              value={contactMethod}
              onChange={setContactMethod}
              ariaLabel="Preferred contact method"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Business name" hint="optional">
              <input
                value={fields.business_name}
                onChange={set("business_name")}
                placeholder="Mills Electrical"
                autoComplete="organization"
                className={fieldClass}
              />
            </Field>
            <Field label="Website" hint="optional">
              <input
                value={fields.website}
                onChange={set("website")}
                placeholder="yourbusiness.com"
                className={fieldClass}
              />
            </Field>
          </div>
        </div>
      </details>

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request help"}
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
      </div>
    </form>
  )
}
