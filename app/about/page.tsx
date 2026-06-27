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
    h: "The problem was personal.",
    body: [
      "Before Solren was a product, it was a problem we kept seeing up close. Family members lost good jobs because they were on the tools, missed the call, replied too late, or forgot to follow up while the day kept moving.",
      "It happened to us too. The painful part was how simple the reason was: the customer had already reached out, the opportunity was real, but by the time someone replied, they had booked another business.",
      "Solren was built for that moment. It catches the enquiry, replies quickly, follows up properly, and helps make sure the job goes to you, not just to whoever answered first.",
    ],
  },
  {
    h: "What Solren does",
    body: [
      "Solren focuses on doing a few things well: capturing enquiries, replying quickly and maintaining consistent follow-up. It should feel less like software to manage and more like a system that just works.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        looseTitle
        title={<>Built for businesses that lose work while they’re busy doing the work.</>}
        sub="Solren was built around a simple problem. Good businesses miss enquiries because they are busy doing the work."
        divider={false}
        compact
        subGapClass="mt-4 sm:mt-5"
        bottomClass="pb-6 sm:pb-9 lg:pb-9"
      />

      {/* No divider — whitespace carries the hero into the story. */}
      <section className="pt-3 pb-8 sm:pt-5 sm:pb-12 md:pb-8 lg:pt-4">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-[680px] space-y-7 sm:space-y-9">
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 30}>
                <div>
                  <h2 className="text-[20px] font-semibold tracking-tight text-white">
                    {s.h}
                  </h2>
                  <div className="mt-4 space-y-5 sm:mt-5">
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

          {/* The single action is the full stop of the story: left-aligned on the
              same rail as the copy and pulled up tight to the final paragraph — no
              question, no separate centred CTA block. */}
          <Reveal>
            <div className="mt-5 sm:mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
