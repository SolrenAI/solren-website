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

      {/* Desktop conclusion — a premium closing decision area: two equal cards
          (business outcomes vs admin relief), each with a checklist and a long
          horizontal CTA pinned to the bottom so the baselines align. Kept before
          the mobile FinalCta so FinalCta stays the last child for the footer rule. */}
      <section className="hidden lg:block lg:pb-2 lg:pt-4">
        <div className="mx-auto max-w-[900px] px-6">
          <Reveal>
            <div className="grid grid-cols-2 items-stretch gap-5">
              {/* Business results — outcomes; primary CTA */}
              <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                <h3 className="text-[19px] font-medium tracking-tight text-white">Business results</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                  Turn more enquiries into booked work with faster replies and consistent follow-up.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Faster replies", "More booked work", "Higher conversion rates", "No missed enquiries"].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[15px] leading-snug text-[var(--silver)]">
                      <Check className="h-4 w-4 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
                  >
                    Get started
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Less admin — relief; secondary outline CTA */}
              <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                <h3 className="text-[19px] font-medium tracking-tight text-white">Less admin</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                  Solren keeps follow-up moving quietly in the background while you stay focused on the work.
                </p>
                <ul className="mt-6 space-y-3">
                  {["No manual follow-ups", "Less inbox chasing", "Follow-up handled automatically", "Installed and managed"].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[15px] leading-snug text-[var(--silver)]">
                      <Check className="h-4 w-4 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    href="/pricing"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
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
