import { NextResponse } from "next/server"

/* Jinksy Clean enquiry delivery. The /jinksy-cleaning form posts here; this
   route validates the payload and forwards it to the S00 Universal Lead Intake
   webhook with the Jinksy Clean install key. Both SOLREN_S00_LEAD_WEBHOOK_URL and
   JINKSY_CLEAN_INSTALL_KEY are server-only env vars, so neither ever reaches
   the browser. Payload property names (install_key, name, email, phone,
   service, message, source) match the S00 workflow contract — do not rename
   them without checking that contract. */

export const runtime = "nodejs"

const MAX_BODY_BYTES = 10_000

const SERVICES = new Set([
  "Regular home cleaning",
  "Deep cleaning",
  "End-of-lease cleaning",
  "Office cleaning",
  "Other",
])

type Payload = {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  hp?: string // honeypot — real users never fill this
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(req: Request) {
  let body: Payload
  try {
    const raw = await req.text()
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 })
    }
    body = JSON.parse(raw) as Payload
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 })
  }

  // Silently accept and drop bot submissions caught by the honeypot.
  if (str(body.hp, 100)) {
    return NextResponse.json({ ok: true })
  }

  const name = str(body.name, 120)
  const email = str(body.email, 200)
  const phone = str(body.phone, 60)
  const service = str(body.service, 60)
  const message = str(body.message, 4000)

  if (!name || !email || !isEmail(email) || !SERVICES.has(service) || !message) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name, a valid email, the service required, and a message." },
      { status: 422 }
    )
  }

  const webhookUrl = process.env.SOLREN_S00_LEAD_WEBHOOK_URL
  const installKey = process.env.JINKSY_CLEAN_INSTALL_KEY
  if (!webhookUrl || !installKey) {
    // Names only — never log the values.
    console.error("[jinksy-lead] SOLREN_S00_LEAD_WEBHOOK_URL or JINKSY_CLEAN_INSTALL_KEY is not set.")
    return NextResponse.json({ ok: false, error: "The form is not configured yet." }, { status: 500 })
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        install_key: installKey,
        name,
        email,
        phone,
        service,
        message,
        source: "jinksy_clean_website",
      }),
    })

    if (!res.ok) {
      // Status only — no lead data, no webhook response body.
      console.error("[jinksy-lead] Lead intake webhook responded with status", res.status)
      return NextResponse.json(
        { ok: false, error: "We could not send your enquiry just now. Please try again." },
        { status: 502 }
      )
    }
  } catch {
    console.error("[jinksy-lead] Failed to reach the lead intake webhook.")
    return NextResponse.json(
      { ok: false, error: "We could not send your enquiry just now. Please try again." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
