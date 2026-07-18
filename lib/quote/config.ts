import { cache } from "react"

/* Server-only configuration loader for the universal quote pages (/q/[slug]).

   Public client configuration comes from a single Supabase RPC —
   public.get_public_quote_config(p_slug) — which returns only the
   browser-safe fields (business_name, logo_url, brand_primary_color,
   services, service_area, phone, website) for an active installation. The
   site calls it over PostgREST with the publishable (anon) key; no
   service-role credential exists anywhere in this codebase, and install_key
   never leaves the database.

   The env vars are server-only (no NEXT_PUBLIC_ prefix) to keep them out of
   client bundles; the RPC is the only Supabase surface this site touches.

   Env:
   - SOLREN_SUPABASE_URL
   - SOLREN_SUPABASE_PUBLISHABLE_KEY */

export const INSTALL_SLUG_RE = /^[a-z0-9][a-z0-9-]{0,79}$/

/* Solren's own accent — the fallback when a client has no valid brand colour. */
const DEFAULT_ACCENT = "#537fea"

export type PublicQuoteConfig = {
  slug: string
  businessName: string
  logoUrl: string | null
  /* Always a validated 6-digit hex colour — safe to inline into CSS. */
  accent: string
  /* Near-black or white, chosen for contrast against the accent. */
  accentText: string
  services: string[]
  serviceArea: string | null
  phone: string | null
  website: string | null
}

async function callPublicQuoteConfigRpc(
  slug: string
): Promise<Record<string, unknown> | null> {
  const url = process.env.SOLREN_SUPABASE_URL
  const key = process.env.SOLREN_SUPABASE_PUBLISHABLE_KEY
  if (!url || !key) {
    // Names only — never log the values.
    console.error(
      "[quote-config] SOLREN_SUPABASE_URL or SOLREN_SUPABASE_PUBLISHABLE_KEY is not set."
    )
    return null
  }

  try {
    const res = await fetch(
      `${url.replace(/\/+$/, "")}/rest/v1/rpc/get_public_quote_config`,
      {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ p_slug: slug }),
        cache: "no-store",
      }
    )
    if (!res.ok) {
      console.error(`[quote-config] get_public_quote_config responded ${res.status}.`)
      return null
    }
    const data = (await res.json()) as unknown
    /* Tolerate either return shape: a single row object or a set (array). An
       empty result means the slug is unknown or the installation is inactive. */
    const row = Array.isArray(data) ? data[0] : data
    return row && typeof row === "object" ? (row as Record<string, unknown>) : null
  } catch {
    console.error("[quote-config] Failed to reach Supabase for get_public_quote_config.")
    return null
  }
}

const text = (v: unknown, max: number): string | null => {
  if (typeof v !== "string") return null
  const t = v.trim().slice(0, max)
  return t || null
}

const httpUrl = (v: unknown): string | null => {
  const t = text(v, 300)
  if (!t) return null
  try {
    const u = new URL(t)
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : null
  } catch {
    return null
  }
}

/* brand_primary_color is a database value; only a strict #rgb/#rrggbb hex is
   accepted so arbitrary content can never inject CSS into the page. */
function hexColor(v: unknown): string | null {
  const t = text(v, 10)
  if (!t) return null
  const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t)
  if (!m) return null
  const hex =
    m[1].length === 3
      ? m[1]
          .split("")
          .map((c) => c + c)
          .join("")
      : m[1]
  return `#${hex.toLowerCase()}`
}

function readableTextOn(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.58 ? "#101318" : "#ffffff"
}

/* services jsonb: accepts ["Name", ...] or [{ name|label|title: "Name" }, ...].
   Anything else degrades to an empty list (the form falls back to a free-text
   service field). */
function parseServices(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  const out: string[] = []
  for (const item of v) {
    let name: string | null = null
    if (typeof item === "string") {
      name = text(item, 80)
    } else if (item && typeof item === "object") {
      const o = item as Record<string, unknown>
      name = text(o.name, 80) ?? text(o.label, 80) ?? text(o.title, 80)
    }
    if (name && !out.includes(name)) out.push(name)
    if (out.length >= 24) break
  }
  return out
}

/* React cache() dedupes the RPC call between generateMetadata and the page
   render within a single request. Returns null for unknown or inactive slugs,
   which the page turns into a 404. */
export const getPublicQuoteConfig = cache(
  async (slug: string): Promise<PublicQuoteConfig | null> => {
    if (!INSTALL_SLUG_RE.test(slug)) return null

    const row = await callPublicQuoteConfigRpc(slug)
    if (!row) return null

    /* A hosted page without a business name is misconfigured — treat as absent
       rather than rendering a broken shell. */
    const businessName = text(row.business_name, 120)
    if (!businessName) return null

    const accent = hexColor(row.brand_primary_color) ?? DEFAULT_ACCENT

    return {
      slug,
      businessName,
      logoUrl: httpUrl(row.logo_url),
      accent,
      accentText: readableTextOn(accent),
      services: parseServices(row.services),
      serviceArea: text(row.service_area, 160),
      phone: text(row.phone, 40),
      website: httpUrl(row.website),
    }
  }
)
