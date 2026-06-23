import type { Metadata } from "next"
import Link from "next/link"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every public page on the Solren website, grouped by section.",
  alternates: { canonical: "/site-map" },
}

type Group = { title: string; links: { label: string; href: string }[] }

/* Every public route, grouped. Each href maps to a real app/.../page.tsx. */
const groups: Group[] = [
  {
    title: "Core",
    links: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/how-it-works" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Electricians", href: "/electricians" },
      { label: "Plumbers", href: "/plumbers" },
      { label: "Roofers", href: "/roofers" },
      { label: "HVAC", href: "/hvac" },
      { label: "Builders", href: "/builders" },
      { label: "Cleaners", href: "/cleaners" },
      { label: "Concreters", href: "/concreters" },
      { label: "Handyman", href: "/handyman" },
      { label: "Landscapers", href: "/landscapers" },
      { label: "Painters", href: "/painters" },
      { label: "Pest Control", href: "/pest-control" },
      { label: "Pool Services", href: "/pool-services" },
    ],
  },
  {
    title: "Integrations",
    links: [{ label: "Integrations", href: "/integrations" }],
  },
  {
    title: "Trust",
    links: [
      { label: "Trust Centre", href: "/trust" },
      { label: "Security", href: "/security" },
      { label: "Privacy", href: "/privacy" },
      { label: "Subprocessors", href: "/subprocessors" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact Support", href: "/contact-support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Solren", href: "/why-solren" },
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Brand", href: "/brand" },
      { label: "Careers", href: "/careers" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Billing", href: "/billing" },
      { label: "Cookies", href: "/cookies" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Acceptable Use", href: "/acceptable-use" },
      { label: "Site Map", href: "/site-map" },
    ],
  },
]

export default function SiteMapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Site map"
        title={<>Site map.</>}
        sub="Every public page on the Solren website, grouped by section."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          {/* Multi-column masonry: groups vary a lot in length (Industries has
              13 links, Integrations has 1), so cards pack and fill the space
              instead of leaving ragged gaps or a stretched empty card. */}
          <div className="gap-6 columns-1 sm:columns-2 lg:columns-3">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 30} className="mb-6 break-inside-avoid">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 transition-colors hover:border-white/[0.14]">
                  <h2 className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--silver)]">
                    {g.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {g.links.map((l) => (
                      <li key={`${l.label}-${l.href}`}>
                        <Link
                          href={l.href}
                          className="text-[14px] text-white/60 transition-colors duration-200 hover:text-[var(--spark)]"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
