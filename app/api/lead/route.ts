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
  address?: string
  location?: string
  business_name?: string
  service_needed?: string
  message?: string
  page_url?: string
  form_name?: string
  // Routing/attribution tags set by the universal /book form (hidden defaults).
  source?: string
  channel?: string
  client_slug?: string
  // Additional context the form collects — forwarded so no lead data is lost.
  website?: string
  preferred_call_date?: string
  preferred_call_time?: string
  // Lightweight follow-up preferences collected by the universal /book form.
  preferred_contact_method?: string
  preferred_contact_time?: string
  timezone?: string
  lead_channels?: unknown
  current_tools?: unknown
  problems?: unknown
  urgency?: string
  /* Honeypot. Deliberately non-semantic: the previous name, company_url, read
     to password managers as a website field, so they autofilled it and silently
     discarded genuine enquiries. Not forwarded to n8n, so unlike the payload
     names below it is safe to rename. */
  hp_check?: string
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

  /* Honeypot. Logged — with nothing about the submission itself — so a false
     positive is one log line away instead of an investigation.

     Returns a generic failure rather than the previous { ok: true }: a real
     person whose password manager filled the field must never be shown a
     success screen for an enquiry that was discarded. Status and wording match
     the webhook-failure branch below, so the response reveals nothing about why
     it was rejected. */
  if (str(body.hp_check, 100)) {
    console.warn("[lead] honeypot triggered")
    return NextResponse.json(
      { ok: false, error: "We could not send your details just now." },
      { status: 400 }
    )
  }

  const name = str(body.name, 120)
  const email = str(body.email, 200)
  const phone = str(body.phone, 60)
  const address = str(body.address, 200)
  const location = str(body.location, 200)
  const business_name = str(body.business_name, 160)
  const service_needed = str(body.service_needed, 80)
  const message = str(body.message, 4000)
  const page_url = str(body.page_url, 300)
  const form_name = str(body.form_name, 80)
  const source = str(body.source, 80)
  const channel = str(body.channel, 80)
  const client_slug = str(body.client_slug, 120)
  const website = str(body.website, 200)
  const preferred_call_date = str(body.preferred_call_date, 40)
  const preferred_call_time = str(body.preferred_call_time, 40)
  const preferred_contact_method = str(body.preferred_contact_method, 40)
  const preferred_contact_time = str(body.preferred_contact_time, 40)
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
        /* S00 Universal Lead Intake requires installation_slug (or install_key)
           on every lead. The main Solren website identifies itself with this
           fixed public slug; S00 resolves it to the right client record. */
        installation_slug: "solren-website",
        name,
        email,
        phone,
        address,
        location,
        business_name,
        service_needed,
        message,
        page_url,
        form_name,
        source,
        channel,
        client_slug,
        website,
        preferred_call_date,
        preferred_call_time,
        preferred_contact_method,
        preferred_contact_time,
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
