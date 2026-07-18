import { NextResponse } from "next/server"
import { INSTALL_SLUG_RE } from "@/lib/quote/config"

/* Universal quote-lead delivery for the hosted pages (/q/[slug]). The browser
   submits the installation slug plus the lead fields; this route validates
   and sanitises the payload, then forwards it to the S00 Universal Lead
   Intake webhook with installation_slug. S00 resolves installation_slug to
   the active client_installations record server-side, so no install_key,
   client_id, or Supabase credential appears anywhere in this flow. Payload
   property names (installation_slug, name, email, phone, service, message,
   source) match the S00 workflow contract — do not rename them without
   checking that contract. */

export const runtime = "nodejs"

const MAX_BODY_BYTES = 10_000

type Payload = {
  slug?: string
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  source?: string
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

  const slug = str(body.slug, 80).toLowerCase()
  const name = str(body.name, 120)
  const email = str(body.email, 200)
  const phone = str(body.phone, 60)
  const service = str(body.service, 80)
  const message = str(body.message, 4000)
  /* Attribution tag, not user content — restrict to a safe token. */
  const source = str(body.source, 80).replace(/[^a-zA-Z0-9_:-]/g, "") || "hosted_quote_page"

  if (!slug || !INSTALL_SLUG_RE.test(slug)) {
    return NextResponse.json(
      { ok: false, error: "This enquiry form is unavailable." },
      { status: 404 }
    )
  }
  if (!name || !email || !isEmail(email) || !service || !message) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please provide your name, a valid email, the service required, and a message.",
      },
      { status: 422 }
    )
  }

  const webhookUrl = process.env.SOLREN_S00_LEAD_WEBHOOK_URL
  if (!webhookUrl) {
    // Name only — never log the value.
    console.error("[quote-lead] SOLREN_S00_LEAD_WEBHOOK_URL is not set.")
    return NextResponse.json({ ok: false, error: "The form is not configured yet." }, { status: 500 })
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        installation_slug: slug,
        name,
        email,
        phone,
        service,
        message,
        source,
      }),
    })

    if (!res.ok) {
      // Status only — no lead data, no webhook response body.
      console.error("[quote-lead] Lead intake webhook responded with status", res.status)
      return NextResponse.json(
        { ok: false, error: "We could not send your enquiry just now. Please try again." },
        { status: 502 }
      )
    }
  } catch {
    console.error("[quote-lead] Failed to reach the lead intake webhook.")
    return NextResponse.json(
      { ok: false, error: "We could not send your enquiry just now. Please try again." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
