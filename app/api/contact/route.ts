import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

/* Contact-form delivery over Google Workspace SMTP (Nodemailer). Runs only on the
   server, so the SMTP credentials are never shipped to the browser. Validates the
   payload, emails the enquiry to CONTACT_TO with the visitor's address as the
   reply-to, and returns JSON the client uses to show a success or error state. */

export const runtime = "nodejs"

type Payload = {
  name?: string
  business?: string
  email?: string
  phone?: string
  trade?: string
  website?: string
  message?: string
  pkg?: string
  channels?: string[]
  tools?: string[]
  problems?: string[]
  bestTime?: string
  urgency?: string
  hp?: string // honeypot — real users never fill this
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")
const list = (v: unknown) =>
  Array.isArray(v)
    ? v.filter((x): x is string => typeof x === "string").map((x) => x.trim()).filter(Boolean).slice(0, 30)
    : []

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

export async function POST(req: Request) {
  let body: Payload
  try {
    body = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  // Silently accept and drop bot submissions caught by the honeypot.
  if (str(body.hp, 100)) {
    return NextResponse.json({ ok: true })
  }

  const name = str(body.name, 120)
  const business = str(body.business, 160)
  const email = str(body.email, 200)
  const phone = str(body.phone, 60)
  const trade = str(body.trade, 80)
  const website = str(body.website, 200)
  const message = str(body.message, 4000)
  const pkg = str(body.pkg, 40)
  const channels = list(body.channels)
  const tools = list(body.tools)
  const problems = list(body.problems)
  const bestTime = str(body.bestTime, 40)
  const urgency = str(body.urgency, 60)

  const fieldErrors: Record<string, string> = {}
  if (!name) fieldErrors.name = "Your name is required."
  if (!business) fieldErrors.business = "Business name is required."
  if (!email) fieldErrors.email = "Email is required."
  else if (!isEmail(email)) fieldErrors.email = "Enter a valid email address."
  if (!phone) fieldErrors.phone = "Phone is required."
  if (!trade) fieldErrors.trade = "Trade is required."
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ error: "Please check the highlighted fields.", fieldErrors }, { status: 422 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("[contact] SMTP env vars are not fully set — cannot send enquiry.")
    return NextResponse.json({ error: "The contact form is not configured yet." }, { status: 500 })
  }

  const port = Number(SMTP_PORT)
  if (!Number.isFinite(port)) {
    console.error("[contact] SMTP_PORT is not a number:", SMTP_PORT)
    return NextResponse.json({ error: "The contact form is not configured correctly." }, { status: 500 })
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Business", business],
    ["Email", email],
    ["Phone", phone],
    ["Trade", trade],
    ["Website", website || "-"],
    ["Package interest", pkg || "-"],
    ["Lead channels", channels.join(", ") || "-"],
    ["Current tools", tools.join(", ") || "-"],
    ["Leads slipping", problems.join(", ") || "-"],
    ["Best time to contact", bestTime || "-"],
    ["Timeline", urgency || "-"],
  ]

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nWhat to fix first:\n${message || "-"}\n`

  const html = `<div style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.5;color:#111">
    <h2 style="margin:0 0 16px">New website enquiry</h2>
    <table style="border-collapse:collapse">${rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 14px 4px 0;color:#666;vertical-align:top;white-space:nowrap">${escapeHtml(
            k
          )}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
      )
      .join("")}</table>
    <h3 style="margin:20px 0 6px">What to fix first</h3>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(message || "-")}</p>
  </div>`

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      // Port 465 uses implicit TLS; 587 (and others) start plaintext then STARTTLS.
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      // Google Workspace rewrites the from to the authenticated user, so we send
      // as SMTP_USER (with a friendly display name) and route replies to the lead.
      from: `Solren Website <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New enquiry: ${business || name}`,
      text,
      html,
    })
  } catch (err) {
    console.error("[contact] SMTP send failed:", err)
    return NextResponse.json({ error: "We could not send your enquiry just now." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
