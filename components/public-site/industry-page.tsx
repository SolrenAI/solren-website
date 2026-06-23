import { notFound } from "next/navigation"

import { PageHeader } from "./page-header"
import { Reveal } from "./reveal"
import { ImageFrame } from "./image-frame"
import { FinalCta } from "./sections/final-cta"
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
      <div className="border-t border-[var(--hair)] pt-10 first:border-t-0 first:pt-0">
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#537FEA]" aria-hidden="true" />
            <span className="ps-label">{eyebrow}</span>
          </div>
        )}
        <h2 className="text-[19px] font-medium tracking-tight text-white">{title}</h2>
        <div className="mt-5">{children}</div>
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
      />

      {/* short, soft divider aligned to the body content width, fading at the ends */}
      <div className="mx-auto max-w-[820px] px-6">
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        />
      </div>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[820px] px-6">
          {industry.image && (
            <Reveal>
              <div className="mb-3">
                <ImageFrame
                  label={industry.label}
                  alt={industry.name}
                  icon={industry.icon}
                  src={industry.image}
                  objectPosition={industry.objectPosition}
                  bare
                  hideCaption
                  clear
                  sizes="(min-width: 820px) 820px, 100vw"
                />
              </div>
            </Reveal>
          )}

          <div className="space-y-12">
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

      <FinalCta />
    </>
  )
}
