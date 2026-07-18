import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPublicQuoteConfig } from "@/lib/quote/config"
import { QuoteForm } from "./quote-form"

/* Universal hosted quote page. One route serves every client with an active
   client_installations row: /q/[slug] resolves the slug server-side (see
   lib/quote/config.ts) and renders this page with that client's public
   branding — logo, accent colour, services, contact details. Unknown or
   deactivated slugs 404.

   Like /jinksy-cleaning, these pages are standalone client properties hosted
   on solren.ai: rendered bare (no Solren nav/footer via SiteChrome), excluded
   from the sitemap, noindexed via metadata + an X-Robots-Tag header
   (next.config.ts), and reachable only by their exact URL. */

export const dynamic = "force-dynamic"

type Props = { params: Promise<{ slug: string }> }

function decodeSlug(raw: string): string {
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const config = await getPublicQuoteConfig(decodeSlug(slug))

  const title = config ? `${config.businessName} | Request a Quote` : "Request a Quote"
  const description = config
    ? `Request a quote from ${config.businessName}. Send your details and they'll reply with a quote and the next steps.`
    : "Request a quote."

  return {
    /* absolute: escapes the root "%s · Solren" title template */
    title: { absolute: title },
    description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
    /* Own openGraph/twitter objects replace the root Solren ones wholesale,
       so no Solren titles or social images leak onto client pages. */
    openGraph: {
      type: "website",
      siteName: config?.businessName ?? "Request a Quote",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  }
}

/* Logo if the client has one; otherwise an accent tile with the business
   initial beside the name — a tasteful default that needs no assets. */
function Brand({
  businessName,
  logoUrl,
}: {
  businessName: string
  logoUrl: string | null
}) {
  if (logoUrl) {
    /* Plain <img>: client logos live on arbitrary hosts, which next/image
       would require remotePatterns entries for. Height-capped so any aspect
       ratio sits cleanly in the header. */
    return <img src={logoUrl} alt={businessName} className="h-9 w-auto max-w-[220px] object-contain" />
  }
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--qp-accent)] text-[16px] font-semibold text-[var(--qp-accent-text)]"
      >
        {businessName.charAt(0).toUpperCase()}
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-[#f4f5f7]">
        {businessName}
      </span>
    </span>
  )
}

export default async function QuotePage({ params }: Props) {
  const { slug } = await params
  const config = await getPublicQuoteConfig(decodeSlug(slug))
  if (!config) notFound()

  const details = [
    config.serviceArea && { label: "Service area", value: config.serviceArea },
    config.phone && {
      label: "Phone",
      value: config.phone,
      href: `tel:${config.phone.replace(/[^\d+]/g, "")}`,
    },
    config.website && {
      label: "Website",
      value: config.website.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: config.website,
    },
  ].filter((d): d is { label: string; value: string; href?: string } => Boolean(d))

  return (
    <div
      className="min-h-screen bg-[#07080a] font-[var(--font-inter),Inter,system-ui,sans-serif] text-[#a8afb9] [color-scheme:dark]"
      style={
        {
          colorScheme: "dark",
          "--qp-accent": config.accent,
          "--qp-accent-text": config.accentText,
        } as React.CSSProperties
      }
    >
      {/* header */}
      <header className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-5 sm:px-8">
          <Brand businessName={config.businessName} logoUrl={config.logoUrl} />
          {config.phone && (
            <a
              href={`tel:${config.phone.replace(/[^\d+]/g, "")}`}
              className="hidden text-[14px] font-medium text-[#e6e8ec] transition-colors hover:text-white sm:block"
            >
              {config.phone}
            </a>
          )}
        </div>
      </header>

      <main>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* intro */}
          <div>
            <p className="font-[var(--font-geist-mono),ui-monospace,monospace] text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--qp-accent)]">
              Request a quote
            </p>
            <h1 className="mt-4 text-[32px] font-semibold leading-[1.12] tracking-tight text-[#f4f5f7] sm:text-[40px]">
              Tell {config.businessName} what you need.
            </h1>
            <p className="mt-5 max-w-[480px] text-[16px] leading-relaxed">
              Share a few details about the job. {config.businessName} will
              review your enquiry and reply by email with a quote and the next
              steps.
            </p>

            {details.length > 0 && (
              <dl className="mt-10 space-y-5 border-t border-white/[0.07] pt-8">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="font-[var(--font-geist-mono),ui-monospace,monospace] text-[11px] font-medium uppercase tracking-[0.14em] text-[#697180]">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-[15px] text-[#e6e8ec]">
                      {d.href ? (
                        <a
                          href={d.href}
                          {...(d.label === "Website"
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="underline-offset-4 transition-colors hover:text-white hover:underline"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          {/* form */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 lg:self-start">
            <QuoteForm slug={config.slug} services={config.services} />
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-[13px] text-[#697180]">
            © {new Date().getFullYear()} {config.businessName}
          </p>
          <p className="text-[13px] text-[#697180]">
            Powered by{" "}
            <a
              href="https://solren.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8afb9] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Solren
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
