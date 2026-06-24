import type { Metadata } from "next"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import { ImageFrame } from "@/components/public-site/image-frame"
import { TrustSignals } from "@/components/public-site/sections/trust-signals"
import { FinalCta } from "@/components/public-site/sections/final-cta"
import { industries } from "@/components/public-site/industries-data"
import Link from "next/link"

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

      <TrustSignals />

      <FinalCta premium />
    </>
  )
}
