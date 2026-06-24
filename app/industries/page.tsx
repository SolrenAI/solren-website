import type { Metadata } from "next"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import { ImageFrame } from "@/components/public-site/image-frame"
import { TrustSignals } from "@/components/public-site/sections/trust-signals"
import { FinalCta } from "@/components/public-site/sections/final-cta"
import { industries } from "@/components/public-site/industries-data"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Helping busy service businesses turn more enquiries into booked work, from electricians and plumbers to cleaners, painters and handymen.",
  alternates: { canonical: "/industries" },
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero shares the grid's 1480 container so the title's left edge lines up
          with the first card, and a tighter desktop bottom padding lets the grid
          tuck in directly beneath it (Apple collection feel). No divider — the
          hero introduces the grid rather than being a separate section. */}
      <PageHeader
        eyebrow="Industries"
        title={<>Built for service businesses.</>}
        sub="Helping busy businesses turn more enquiries into booked work."
        divider={false}
        containerClass="max-w-[1480px]"
        bottomClass="pb-12 sm:pb-16 lg:pb-10"
      />

      <section className="pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-2">
        <div className="mx-auto max-w-[1480px] px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {industries.map((it, i) => (
              <Reveal key={it.slug} delay={(i % 4) * 70}>
                <Link href={`/${it.slug}`} className="group block">
                  <ImageFrame
                    label={it.label}
                    icon={it.icon}
                    src={it.image}
                    objectPosition={it.objectPosition}
                    hideCaption
                    bare
                    aspectClass="aspect-[3/2] sm:aspect-[4/3]"
                    sizes="(min-width: 1024px) 360px, 50vw"
                  />
                  <div className="mt-2 flex items-center justify-between sm:mt-3">
                    <span className="text-[13.5px] font-medium text-white sm:text-[15px]">{it.name}</span>
                    <span className="ps-label hidden !text-[10px] !tracking-[0.24em] transition-colors group-hover:text-[#86A2F0] sm:block">
                      View
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustSignals tightTop />

      {/* Desktop conclusion — the payoff after the headline. Two open benefit
          panels (no card) split by a quiet fading divider; CTAs sit below. Kept
          before the mobile FinalCta so FinalCta stays the last child and the
          footer-gap rule still governs spacing. */}
      <section className="hidden lg:block lg:pb-6 lg:pt-8">
        <div className="mx-auto max-w-[840px] px-6">
          <Reveal>
            <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-x-16">
              <div>
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
                  <span className="ps-label !text-[11.5px] !tracking-[0.22em] !text-[var(--silver)]">
                    Business results
                  </span>
                </div>
                <ul className="mt-7 space-y-4">
                  {["Faster replies", "More booked work", "Higher conversion rates"].map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
                      <span className="text-[16px] leading-snug text-[var(--silver)]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* quiet vertical divider, fading at both ends — not a card edge */}
              <div
                aria-hidden="true"
                className="w-px self-stretch bg-gradient-to-b from-transparent via-white/[0.12] to-transparent"
              />

              <div>
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
                  <span className="ps-label !text-[11.5px] !tracking-[0.22em] !text-[var(--silver)]">
                    Less admin
                  </span>
                </div>
                <ul className="mt-7 space-y-4">
                  {["No chasing enquiries", "Follow-up handled automatically", "Installed and managed"].map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
                      <span className="text-[16px] leading-snug text-[var(--silver)]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs sit below the panels, not inside them */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
              >
                See pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mobile/tablet keep the existing premium CTA card (last child for the
          footer-gap rule); the desktop version above replaces it from lg up. */}
      <FinalCta premium mobileOnly />
    </>
  )
}
