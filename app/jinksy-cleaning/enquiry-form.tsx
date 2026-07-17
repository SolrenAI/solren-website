"use client"

import { useState } from "react"

/* Jinksy Clean enquiry form. Posts to /api/jinksy-lead (a server route that
   forwards to the lead intake webhook), so no webhook URL or install key is
   ever present in the browser. Styled to match the page's light palette, not
   the .ps system. */

const SERVICE_OPTIONS = [
  "Regular home cleaning",
  "Deep cleaning",
  "End-of-lease cleaning",
  "Office cleaning",
  "Other",
]

const fieldClass =
  "w-full rounded-xl border border-[#D9D5C9] bg-white px-4 py-3 text-[15px] text-[#1B2723] placeholder:text-[#9AA29D] outline-none transition-colors hover:border-[#BFBAAB] focus:border-[#14675C] focus:ring-2 focus:ring-[#14675C]/15"

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
        className="mb-2 flex items-baseline gap-1.5 text-[13.5px] font-medium text-[#1B2723]"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-[#14675C]">
            *
          </span>
        )}
        {optional && (
          <span className="ml-auto text-[12px] font-normal text-[#8A9089]">optional</span>
        )}
      </label>
      {children}
    </div>
  )
}

export function JinksyEnquiryForm() {
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

  function set(key: keyof typeof fields) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return

    const trimmed = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      service: fields.service.trim(),
      message: fields.message.trim(),
    }

    if (!trimmed.name || !trimmed.email || !trimmed.service || !trimmed.message) {
      setStatus("error")
      setErrorMsg("Please fill in your name, email, service required, and message.")
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
      const res = await fetch("/api/jinksy-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...trimmed, hp }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
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
        className="rounded-2xl border border-[#14675C]/25 bg-[#14675C]/[0.06] p-6 sm:p-7"
      >
        <h3 className="text-[17px] font-semibold tracking-tight text-[#1B2723]">
          Thanks — your enquiry has been sent.
        </h3>
        <p className="mt-2 text-[14.5px] leading-relaxed">
          We&rsquo;ve received your details and will reply by email with a quote
          and the next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13.5px] font-medium text-[#14675C] underline-offset-2 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="jc-name" required>
          <input
            id="jc-name"
            name="name"
            required
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            placeholder="Your name"
            className={fieldClass}
          />
        </Field>
        <Field label="Email" htmlFor="jc-email" required>
          <input
            id="jc-email"
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
        <Field label="Phone" htmlFor="jc-phone" optional>
          <input
            id="jc-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={set("phone")}
            placeholder="Your phone number"
            className={fieldClass}
          />
        </Field>
        <Field label="Service required" htmlFor="jc-service" required>
          <div className="relative">
            <select
              id="jc-service"
              name="service"
              required
              value={fields.service}
              onChange={set("service")}
              className={`${fieldClass} appearance-none pr-10 ${
                fields.service ? "" : "text-[#9AA29D]"
              }`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6C7671]"
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
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" htmlFor="jc-message" required>
          <textarea
            id="jc-message"
            name="message"
            required
            rows={5}
            value={fields.message}
            onChange={set("message")}
            placeholder="Tell us about your property and the cleaning you're after…"
            className={`${fieldClass} resize-none`}
          />
        </Field>
      </div>

      <div className="mt-7">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#14675C] px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#0F544B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14675C] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending your enquiry…" : "Request a cleaning quote"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-[13.5px] leading-relaxed text-[#A03A2E]">
            {errorMsg}
          </p>
        )}
        <p className="mt-3 text-[13px] leading-relaxed text-[#6C7671]">
          We only use your details to respond to your enquiry.
        </p>
      </div>
    </form>
  )
}
