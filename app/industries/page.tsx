import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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

/* One pain/outcome per industry for the grid cards. Four carry a customer quote
   above the line; the other eight are a single line. Deliberately only four —
   twelve would read as a template. HARD RULE: no two cards end on the same verb
   (the old set repeated "kept" and "followed up"). Kept local to the Industries
   page; the detail pages carry their own tailored copy. */
const cardCopy: Record<string, { quote?: string; line: string }> = {
  plumbers: { quote: "There’s water coming through the ceiling.", line: "The ones that can’t wait, don’t." },
  hvac: { quote: "Aircon’s dead and it’s 38 degrees.", line: "The hottest day is your busiest day." },
  roofers: { quote: "Half the tiles came off last night.", line: "Storm week is a flood of enquiries. None go cold." },
  builders: { quote: "Rough price on a second-storey extension?", line: "Big jobs start as a question. Every one gets an answer." },
  electricians: { line: "Switchboards, faults, quotes. Answered in seconds." },
  landscapers: { line: "Quotes that sit for a day are quotes someone else won." },
  cleaners: { line: "Bond cleans book the same week or not at all." },
  "pest-control": { line: "The call comes when they’ve seen one. It won’t wait." },
  painters: { line: "Three quotes go out. The first one back gets the job." },
  concreters: { line: "Site enquiries answered before the pour is booked elsewhere." },
  "pool-services": { line: "Green pool on a Friday. Answered Friday." },
  handyman: { line: "Small jobs, fast answers, more of them." },
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero — sits on the continuous page ground (no separate background block,
          so it blends seamlessly into the grid below). Shares the grid's container
          so the title's left edge lines up with the first card. */}
      <PageHeader
        eyebrow="Industries"
        title={<>Every trade has a phone full of missed money.</>}
        sub="Solren catches enquiries, replies fast, and follows up while you stay on the tools."
        looseTitle
        divider={false}
        containerClass="max-w-[1320px]"
        bottomClass="pb-12 sm:pb-16 lg:pb-14"
      />

      {/* Industry grid — editorial, photography-led. The image is the hero; the
          name and one quiet line sit beneath it as a caption, not a card. Minimal
          chrome, generous gaps, 3 up on desktop / 2 on tablet / 1 on mobile. */}
      <section className="pt-1 pb-8 sm:pt-12 sm:pb-20 lg:pt-0 lg:pb-0">
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
                    {cardCopy[it.slug].quote ? (
                      <>
                        {/* title → quote 12px, quote → line 12px */}
                        <p className="mt-3 max-w-[36ch] text-[15px] italic leading-relaxed text-[var(--silver)]">
                          “{cardCopy[it.slug].quote}”
                        </p>
                        <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-white">
                          {cardCopy[it.slug].line}
                        </p>
                      </>
                    ) : (
                      <p className="mt-1.5 max-w-[36ch] text-[15px] leading-relaxed text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--silver)] lg:mt-[5.5px]">
                        {cardCopy[it.slug].line}
                      </p>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Close — the honest "not sure if we fit you?" invitation. The only
          centred section on the page, and deliberately so: nothing follows it,
          so there is no rhythm for the centre to break. Owns the section gap
          above it (--space-section); the grid section's bottom padding is 0. */}
      <section className="pb-16 pt-14 sm:pb-20 lg:pb-24 lg:pt-[var(--space-section)]">
        <div className="mx-auto max-w-[1320px] px-6 text-center">
          <Reveal>
            <h2 className="overflow-visible pb-[0.12em] text-[clamp(1.9rem,5.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.02em] ps-silver">
              Your trade isn’t on the list?
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-[var(--silver)] sm:text-[16px]">
              It probably still works. Fifteen minutes, and we’ll tell you honestly if it doesn’t.
            </p>
            <div className="mt-[var(--space-block)] flex justify-center">
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
