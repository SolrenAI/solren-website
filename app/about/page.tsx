import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why Solren exists, who it is built for, and where it is headed. Dependable follow-up software for service businesses.",
  alternates: { canonical: "/about" },
}

type Section = {
  h: string
  body: string[]
}

const sections: Section[] = [
  {
    h: "The problem",
    body: [
      "Too many businesses lose good enquiries simply because they are busy doing the work. A call is missed, a message sits unanswered, and the customer moves on to whoever replies first.",
      "Solren exists to help service businesses stay responsive without adding more admin. It captures enquiries, drafts fast replies and keeps follow-up consistent, so the work of staying in touch happens quietly in the background.",
    ],
  },
  {
    h: "Built for real businesses",
    body: [
      "Solren is built for the businesses that keep things running. The people on the tools, on site and on the road, who cannot always stop to answer.",
      "From electricians and plumbers to builders, landscapers, HVAC teams and cleaners, the goal is the same: stay responsive without spending the day chasing enquiries.",
    ],
  },
  {
    h: "Simple by design",
    body: [
      "Software should remove complexity, not create it. We are not interested in dashboards no one opens or features that get in the way.",
      "Solren focuses on doing a few things well: capturing enquiries, replying quickly and maintaining consistent follow-up. It should feel less like software to manage and more like a system that just works.",
    ],
  },
  {
    h: "Built on trusted technology",
    body: [
      "Solren runs on dependable technology, chosen because it is proven, secure and reliable.",
      "The tools matter less than the result: enquiries are captured, replies are prepared, and follow-up keeps moving in the background.",
    ],
  },
  {
    h: "Built to last",
    body: [
      "Solren is focused on dependable software that helps service businesses spend less time chasing enquiries and more time doing the work that matters.",
      "Installed for you, managed for you, and built to keep working quietly in the background.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      {/* a touch more breathing room above the hero headline, this page only */}
      <div aria-hidden="true" className="h-5" />
      <PageHeader
        eyebrow="Our Story"
        title={<>Why Solren exists.</>}
        sub="Solren was created to help busy service businesses respond faster, follow up automatically and turn more enquiries into booked work."
        divider={false}
      />

      {/* short, soft divider aligned to the body content width, fading at the ends */}
      <div className="mx-auto max-w-[760px] px-6">
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        />
      </div>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="space-y-16">
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 30}>
                <div className="border-t border-[var(--hair)] pt-10 first:border-t-0 first:pt-0">
                  <h2 className="text-[20px] font-medium tracking-tight text-white">
                    {s.h}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-[16px] leading-[1.7] text-[var(--silver)]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 border-t border-[var(--hair)] pt-10">
              <p className="text-[16px] leading-[1.7] text-[var(--silver)]">
                Want to see how Solren would work for your business?
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
