"use client"

import { useState } from "react"

/* Universal enquiry form for the hosted quote pages (/q/[slug]). Posts to
   /api/quote-lead with the installation slug; the server validates the
   payload and forwards it to the S00 webhook, which resolves the installation
   from the slug — so no webhook URL or credential is ever present in the
   browser.

   The client's accent colour arrives via the --qp-accent / --qp-accent-text
   CSS variables set (from a validated hex value) on the page wrapper. */

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-[#f4f5f7] placeholder:text-[#697180] outline-none transition-colors hover:border-white/20 focus:border-[var(--qp-accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--qp-accent)_25%,transparent)]"

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

function Field({
  label,
  htmlFor,
  required,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-baseline gap-1.5 text-[13.5px] font-medium text-[#e6e8ec]"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-[var(--qp-accent)]">
            *
          </span>
        )}
        {optional && (
          <span className="ml-auto text-[12px] font-normal text-[#697180]">optional</span>
        )}
      </label>
      {children}
    </div>
  )
}

export function QuoteForm({ slug, services }: { slug: string; services: string[] }) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [hp, setHp] = useState("") // honeypot — real users never see or fill this
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  /* "Other" is always offered as an escape hatch beyond the configured list. */
  const serviceOptions = services.length ? [...services, "Other"] : []

  function set(key: keyof typeof fields) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return // duplicate-submit guard

    const trimmed = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      service: fields.service.trim(),
      message: fields.message.trim(),
    }

    if (!trimmed.name || !trimmed.email || !trimmed.service || !trimmed.message) {
      setStatus("error")
      setErrorMsg("Please fill in your name, email, the service you need, and a message.")
      return
    }
    if (!isEmail(trimmed.email)) {
      setStatus("error")
      setErrorMsg("Please enter a valid email address so we can reply to you.")
      return
    }

    setStatus("submitting")
    setErrorMsg("")

    try {
      const res = await fetch("/api/quote-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, ...trimmed, source: "hosted_quote_page", hp_check: hp }),
      })

      /* Success requires an explicit ok:true, not merely a 2xx. The route
         returns that only after the enquiry has actually been forwarded to S00,
         so a request it accepted but discarded can never render the
         confirmation below. */
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null

      if (!res.ok || data?.ok !== true) {
        throw new Error(data?.error || "")
      }

      // Clear the form only after a confirmed successful submission.
      setFields({ name: "", email: "", phone: "", service: "", message: "" })
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(
        (err instanceof Error && err.message) ||
          "Sorry — we couldn't send your enquiry just now. Please try again in a moment."
      )
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[color-mix(in_srgb,var(--qp-accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--qp-accent)_8%,transparent)] p-6 sm:p-7"
      >
        <h3 className="text-[17px] font-semibold tracking-tight text-[#f4f5f7]">
          Thanks, your enquiry has been sent.
        </h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-[#a8afb9]">
          Your details have been received. You&rsquo;ll get a reply by email with a
          quote and the next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13.5px] font-medium text-[var(--qp-accent)] underline-offset-2 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot: hidden from users, catches bots that fill every field.

          The name is deliberately non-semantic. It was previously company_url,
          which password managers read as a website field and autofilled — which
          silently discarded genuine enquiries. autoComplete="off" alone does not
          stop them; the data-* attributes below are the opt-outs 1Password,
          LastPass and Chrome actually honour.

          tabIndex={-1} keeps it out of tab order and aria-hidden keeps it from
          screen readers, so it stays invisible to real users by every route. */}
      <input
        type="text"
        name="hp_check"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        data-1p-ignore=""
        data-lpignore="true"
        data-form-type="other"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="qp-name" required>
          <input
            id="qp-name"
            name="name"
            required
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            placeholder="Your name"
            className={fieldClass}
          />
        </Field>
        <Field label="Email" htmlFor="qp-email" required>
          <input
            id="qp-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </Field>
        <Field label="Phone" htmlFor="qp-phone" optional>
          <input
            id="qp-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={set("phone")}
            placeholder="Your phone number"
            className={fieldClass}
          />
        </Field>
        <Field label="Service required" htmlFor="qp-service" required>
          {serviceOptions.length ? (
            <div className="relative">
              <select
                id="qp-service"
                name="service"
                required
                value={fields.service}
                onChange={set("service")}
                className={`${fieldClass} appearance-none pr-10 ${
                  fields.service ? "" : "text-[#697180]"
                }`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697180]"
              >
                <path
                  d="M5 8l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : (
            <input
              id="qp-service"
              name="service"
              required
              value={fields.service}
              onChange={set("service")}
              placeholder="What do you need done?"
              className={fieldClass}
            />
          )}
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" htmlFor="qp-message" required>
          <textarea
            id="qp-message"
            name="message"
            required
            rows={5}
            value={fields.message}
            onChange={set("message")}
            placeholder="Tell us about the job and anything else we should know…"
            className={`${fieldClass} resize-none`}
          />
        </Field>
      </div>

      <div className="mt-7">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--qp-accent)] px-6 py-3.5 text-[15px] font-medium text-[var(--qp-accent-text)] transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--qp-accent)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending your enquiry…" : "Request a quote"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-[13.5px] leading-relaxed text-[#f0938a]">
            {errorMsg}
          </p>
        )}
        <p className="mt-3 text-[13px] leading-relaxed text-[#697180]">
          Your details are only used to respond to your enquiry.
        </p>
      </div>
    </form>
  )
}
