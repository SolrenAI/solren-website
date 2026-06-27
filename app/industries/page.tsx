import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import { ImageFrame } from "@/components/public-site/image-frame"
import { industries } from "@/components/public-site/industries-data"
import { industriesBlur } from "@/components/public-site/industries-blur"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Solren replies to every enquiry and follows up for you, so busy trades win more work. For electricians, plumbers, roofers, HVAC, builders and more.",
  alternates: { canonical: "/industries" },
}

/* One short pain/outcome line per industry for the grid cards. Kept local to the
   Industries page (the detail pages carry their own tailored copy) so this is a
   pure visual-layer addition that touches nothing shared. */
const cardLines: Record<string, string> = {
  electricians: "Missed calls. Quote requests. Emergency jobs followed up fast.",
  plumbers: "Leaks, blocked drains and urgent jobs answered before they go elsewhere.",
  builders: "Project enquiries kept moving while you’re on site.",
  roofers: "Storm damage and repair quotes followed up before they go cold.",
  landscapers: "Seasonal jobs and maintenance quotes kept warm.",
  hvac: "Breakdowns, installs and service calls handled fast.",
  cleaners: "End-of-lease cleans, regulars and quotes kept on track.",
  "pest-control": "Urgent inspections and treatment enquiries followed up quickly.",
  painters: "Interior, exterior and commercial quotes kept warm.",
  concreters: "Driveways, slabs and site enquiries kept moving.",
  "pool-services": "Repairs, servicing and quotes kept on schedule.",
  handyman: "Odd jobs and repair requests followed up before they pile up.",
}

const moreBookedWork = ["Faster replies", "More enquiries become jobs", "Fewer lost jobs"]
const lessAdmin = ["No chasing enquiries yourself", "Follow-up handled for you", "Installed and managed"]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero — sits on the continuous page ground (no separate background block,
          so it blends seamlessly into the grid below). Shares the grid's container
          so the title's left edge lines up with the first card. */}
      <PageHeader
        eyebrow="Industries"
        title={<>Fast replies win jobs.</>}
        sub="Solren catches enquiries, replies fast and follows up while you stay on the tools."
        looseTitle
        divider={false}
        containerClass="max-w-[1320px]"
        bottomClass="pb-12 sm:pb-16 lg:pb-14"
      />

      {/* Industry grid — editorial, photography-led. The image is the hero; the
          name and one quiet line sit beneath it as a caption, not a card. Minimal
          chrome, generous gaps, 3 up on desktop / 2 on tablet / 1 on mobile. */}
      <section className="pt-1 pb-8 sm:pt-12 sm:pb-20 lg:pt-0 lg:pb-9">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-3.5">
            {industries.map((it, i) => (
              <Reveal key={it.slug} delay={(i % 3) * 70}>
                <Link href={`/${it.slug}`} className="group block">
                  <ImageFrame
                    label={it.label}
                    icon={it.icon}
                    src={it.image}
                    srcDesktop={it.imageDesktop}
                    objectPosition={it.objectPosition}
                    alt={it.name}
                    hideCaption
                    bare
                    /* Preload + high-priority the first row (3-up on desktop) so the
                       first screen never staggers; card 0 is the mobile LCP. The rest
                       lazy-load. Every card has a tiny blur LQIP so it blurs up
                       instead of popping in. */
                    priority={i < 3}
                    blurDataURL={industriesBlur[it.slug]}
                    aspectClass="aspect-[4/3]"
                    className="!border-white/[0.06] transition-colors duration-300 group-hover:!border-white/[0.14]"
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 46vw, 100vw"
                  />
                  <div className="mt-4 lg:mt-2">
                    <h2 className="text-[19px] font-medium tracking-tight text-white lg:text-[20px]">{it.name}</h2>
                    <p className="mt-1.5 max-w-[36ch] text-[15px] leading-relaxed text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--silver)] lg:mt-[5.5px]">
                      {cardLines[it.slug]}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — the transformation as two equal outcome cards (not a before/after
          feature comparison), then a single decision: Problem → Outcome → Decision.
          Both cards keep the existing card chrome and the blue check treatment; the
          revenue outcome carries the subtle blue edge. */}
      <section className="pt-2 pb-10 sm:pt-8 sm:pb-12 md:pb-8 lg:pt-2">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <span className="ps-label block">The difference</span>
            <h2 className="mt-3 max-w-[18ch] overflow-visible pb-[0.12em] text-[clamp(2.05rem,5.2vw,3.3rem)] font-medium leading-[1.1] tracking-[-0.025em] ps-silver lg:mt-2">
              From missed enquiries to booked jobs.
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-10 lg:mt-7 lg:grid-cols-2 lg:gap-6">
              {/* Outcome 1 — more revenue; the subtle blue edge carries the emphasis */}
              <div className="rounded-[28px] border border-[#537FEA]/25 bg-[#537FEA]/[0.04] px-6 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10">
                <h3 className="text-[21px] font-medium tracking-[-0.01em] text-white lg:text-[23px]">More booked work</h3>
                <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5 lg:mt-6">
                  {moreBookedWork.map((b) => (
                    <li key={b} className="flex items-center gap-4 text-[17px] leading-snug text-white lg:text-[18px]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#537FEA]/15">
                        <Check className="h-3.5 w-3.5 text-[#6A8FEE]" strokeWidth={2.6} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome 2 — less effort; neutral card chrome, same positive treatment */}
              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.015] px-6 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10">
                <h3 className="text-[21px] font-medium tracking-[-0.01em] text-white lg:text-[23px]">Less chasing</h3>
                <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5 lg:mt-6">
                  {lessAdmin.map((b) => (
                    <li key={b} className="flex items-center gap-4 text-[17px] leading-snug text-white lg:text-[18px]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#537FEA]/15">
                        <Check className="h-3.5 w-3.5 text-[#6A8FEE]" strokeWidth={2.6} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* One decision, centred and attached to the outcome — no competing CTA */}
          <Reveal>
            <div className="mt-6 flex justify-center sm:mt-8">
              <Link
                href="/contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#537FEA] px-9 text-[15px] font-medium text-black transition-colors duration-200 ease-out hover:bg-[#6A8FEE]"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
