import { notFound } from "next/navigation"

import { PageHeader } from "./page-header"
import { Reveal } from "./reveal"
import { ImageFrame } from "./image-frame"
import { FinalCta } from "./sections/final-cta"
import { IndustryCta } from "./sections/industry-cta"
import { FaqStructuredData } from "./structured-data"
import { getIndustry } from "./industries-data"

/* The workflow is the one shared section: the mechanism is identical for every
   trade. The hero, common problems, how-it-helps and FAQs are tailored per
   industry in industries-data so each page reads like it was written for it. */
const WORKFLOWS: { title: string; body: string }[] = [
  { title: "Enquiry captured", body: "A new call, email or form is logged the moment it arrives." },
  { title: "Reply drafted in seconds", body: "Solren prepares a clear first reply for you to approve." },
  { title: "Follow-up scheduled", body: "If the lead goes quiet, Solren checks back in before they call someone else." },
  { title: "Job booked", body: "Details are organised and the next step is ready for your team." },
]

function Block({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow?: string
  children: React.ReactNode
}) {
  return (
    <Reveal>
      <div>
        {eyebrow && <span className="ps-label mb-3 block">{eyebrow}</span>}
        <h2 className="text-[19px] font-medium tracking-tight text-white">{title}</h2>
        <div className="mt-3 sm:mt-4">{children}</div>
      </div>
    </Reveal>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-[var(--silver)]">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#537FEA]" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

export function IndustryPage({ slug }: { slug: string }) {
  const industry = getIndustry(slug)
  if (!industry) notFound()

  return (
    <>
      <FaqStructuredData faqs={industry.faqs} />
      <PageHeader
        eyebrow="Industries"
        title={industry.heroTitle}
        sub={industry.heroSub}
        looseTitle={industry.heroLoose}
        nudgeLeft={industry.slug === "cleaners"}
        divider={false}
        compact
        bottomClass="pb-4 sm:pb-12 lg:pb-8"
      />

      {/* No divider — whitespace carries the hero into the image and first block.
          Mobile pt/pb are tightened explicitly (pt-3 → 44px from hero sub to image;
          pb-6 → 48px from the last block to the closing card); sm+/lg keep the
          original desktop padding. */}
      <section className="pb-6 pt-3 sm:pb-24 sm:pt-8 lg:pt-1 lg:pb-5">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          {industry.image && (
            <Reveal>
              {/* supporting visual on the one left rail — NOT centred independently.
                  Left edge matches the hero and the body column; capped narrower
                  than the text, with tight vertical spacing on desktop. */}
              <div className="mb-5 max-w-[480px] sm:mb-12 lg:mb-2.5">
                <ImageFrame
                  label={industry.label}
                  alt={industry.name}
                  icon={industry.icon}
                  src={industry.heroImage ?? industry.image}
                  srcDesktop={industry.heroImageDesktop}
                  fit={industry.imageFit}
                  objectPosition={industry.objectPosition}
                  bare
                  hideCaption
                  clear
                  /* The single hero image on the page — the LCP candidate. Load it
                     eagerly instead of lazily so it is not delayed below the fold. */
                  priority
                  /* The frame is capped at max-w-[480px] from 640px up, so request
                     a 480px variant there rather than a full-width tablet image. */
                  sizes="(min-width: 640px) 480px, 100vw"
                />
              </div>
            </Reveal>
          )}

          <div className="max-w-[800px] space-y-10">
            <Block eyebrow={industry.name} title={`Common problems ${industry.audience} face`}>
              <Bullets items={industry.problems} />
            </Block>

            <Block title="How Solren helps">
              <p className="mb-5 text-[15px] leading-relaxed text-[var(--silver)]">
                {industry.helpsIntro}
              </p>
              <Bullets items={industry.helps} />
            </Block>

            <Block title="Typical workflow">
              <ol className="space-y-4">
                {WORKFLOWS.map((w, i) => (
                  <li key={w.title} className="flex items-start gap-3.5">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#537FEA]/30 bg-[#537FEA]/[0.08] text-[10.5px] font-medium tabular-nums text-[#86A2F0]"
                      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <div className="text-[15px] font-medium text-white">{w.title}</div>
                      <div className="mt-1 text-[14px] leading-relaxed text-[var(--muted)]">
                        {w.body}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Block>

            <Block title="FAQs">
              <div className="space-y-6">
                {industry.faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-[15px] font-medium text-white">{f.q}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--silver)]">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </Block>
          </div>
        </div>
      </section>

      {/* Desktop: the two-card Get Started / See Pricing close. Mobile keeps the
          existing FinalCta card. The mobile wrapper pulls the footer up (same
          pattern as the homepage) so the closing card sits ~32px from the footer
          divider instead of floating above a large gap. lg:hidden so desktop is
          untouched (IndustryCta closes the desktop layout). */}
      <IndustryCta />
      <div className="-mb-12 lg:hidden">
        <FinalCta mobileOnly />
      </div>
    </>
  )
}
