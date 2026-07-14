import { notFound } from "next/navigation"

import { PageHeader } from "./page-header"
import { Reveal } from "./reveal"
import { ImageFrame } from "./image-frame"
import { FinalCta } from "./sections/final-cta"
import { IndustryCta } from "./sections/industry-cta"
import { NumberedSteps, type NumberedStep } from "./numbered-steps"
import { FaqStructuredData } from "./structured-data"
import { getIndustry } from "./industries-data"

/* The workflow is the one shared section: the mechanism is identical for every
   trade. The hero, common problems, how-it-helps and FAQs are tailored per
   industry in industries-data so each page reads like it was written for it. */
/* "message, email or form" — NOT "call". Solren never answers a phone; it
   catches what the missed call turns into. The claim propagates to all twelve
   pages, so it has to be literally true on every one of them. */
const WORKFLOWS: NumberedStep[] = [
  { title: "Enquiry captured", body: "The message, email or form lands and Solren logs it straight away." },
  { title: "Reply drafted in seconds", body: "Solren writes a first reply in your voice, ready for you to send." },
  { title: "Follow-up scheduled", body: "If they go quiet, Solren nudges them again before they look elsewhere." },
  { title: "Job booked", body: "The details are sorted and the job's on your calendar, not lost." },
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
              {/* Optional: trades whose copy has been rewritten let the hero sub
                  carry this job and omit the intro. The eleven not yet rewritten
                  still supply one, and must not silently lose the paragraph. */}
              {industry.helpsIntro && (
                <p className="mb-5 text-[15px] leading-relaxed text-[var(--silver)]">
                  {industry.helpsIntro}
                </p>
              )}
              <Bullets items={industry.helps} />
            </Block>

            <Block title="Typical workflow">
              {/* The numbered-row primitive from the homepage flow — not a list.
                  Bullets are reserved for the two genuine lists above. */}
              <NumberedSteps steps={WORKFLOWS} />
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
