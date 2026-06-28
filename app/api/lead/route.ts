import { NextResponse } from "next/server"

/* Lead-form delivery to the n8n backend. Runs only on the server, so the n8n
   webhook URL is never shipped to the browser. The website form posts to
   /api/lead; this route validates the payload and forwards it to
   SOLREN_N8N_LEAD_WEBHOOK_URL, returning clean JSON the client uses to show a
   success or error state. */

export const runtime = "nodejs"

type Payload = {
  name?: string
  email?: string
  phone?: string
  business_name?: string
  service_needed?: string
  message?: string
  page_url?: string
  form_name?: string
  // Additional context the form collects — forwarded so no lead data is lost.
  website?: string
  preferred_call_date?: string
  preferred_call_time?: string
  timezone?: string
  lead_channels?: unknown
  current_tools?: unknown
  problems?: unknown
  urgency?: string
  hp?: string // honeypot — real users never fill this
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")
const list = (v: unknown) =>
  Array.isArray(v)
    ? v.filter((x): x is string => typeof x === "string").map((x) => x.trim()).filter(Boolean).slice(0, 30)
    : []

export async function POST(req: Request) {
  let body: Payload
  try {
    body = (await req.json()) as Payload
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
  const business_name = str(body.business_name, 160)
  const service_needed = str(body.service_needed, 80)
  const message = str(body.message, 4000)
  const page_url = str(body.page_url, 300)
  const form_name = str(body.form_name, 80)
  const website = str(body.website, 200)
  const preferred_call_date = str(body.preferred_call_date, 40)
  const preferred_call_time = str(body.preferred_call_time, 40)
  const timezone = str(body.timezone, 80)
  const lead_channels = list(body.lead_channels)
  const current_tools = list(body.current_tools)
  const problems = list(body.problems)
  const urgency = str(body.urgency, 60)

  if (!name || !email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name and a valid email." },
      { status: 422 }
    )
  }

  const webhookUrl = process.env.SOLREN_N8N_LEAD_WEBHOOK_URL
  if (!webhookUrl) {
    console.error("[lead] SOLREN_N8N_LEAD_WEBHOOK_URL is not set — cannot forward lead.")
    return NextResponse.json({ ok: false, error: "The form is not configured yet." }, { status: 500 })
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        business_name,
        service_needed,
        message,
        page_url,
        form_name,
        website,
        preferred_call_date,
        preferred_call_time,
        timezone,
        lead_channels,
        current_tools,
        problems,
        urgency,
      }),
    })

    if (!res.ok) {
      console.error("[lead] n8n webhook responded with status", res.status)
      return NextResponse.json(
        { ok: false, error: "We could not send your details just now." },
        { status: 502 }
      )
    }
  } catch (err) {
    console.error("[lead] Failed to reach n8n webhook:", err)
    return NextResponse.json(
      { ok: false, error: "We could not send your details just now." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
