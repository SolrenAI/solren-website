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
      <PageHeader
        eyebrow="Industries"
        title={<>Built for service businesses.</>}
        sub="Helping busy businesses turn more enquiries into booked work."
        divider={false}
      />

      {/* short, soft divider aligned to the photo grid width, fading at the ends */}
      <div className="mx-auto max-w-[1240px] px-6">
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        />
      </div>

      <section className="pt-20 pb-10 sm:pt-24 sm:pb-12">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {industries.map((it, i) => (
              <Reveal key={it.slug} delay={(i % 3) * 70}>
                <Link href={`/${it.slug}`} className="group block">
                  <ImageFrame
                    label={it.label}
                    icon={it.icon}
                    src={it.image}
                    objectPosition={it.objectPosition}
                    hideCaption
                    bare
                    aspectClass="aspect-[3/2] sm:aspect-[4/3]"
                    sizes="(min-width: 1024px) 380px, 50vw"
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

      <FinalCta />
    </>
  )
}
