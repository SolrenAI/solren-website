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

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        looseTitle
        title={<>Built from a problem we knew too well.</>}
        sub="A message arrives while you're on the tools. You see it three hours later. By then it's gone."
        divider={false}
        compact
        subGapClass="mt-4 sm:mt-5"
        bottomClass="pb-6 sm:pb-9 lg:pb-9"
      />

      {/* No divider — whitespace carries the hero into the story. */}
      <section className="pt-3 pb-8 sm:pt-5 sm:pb-12 md:pb-8 lg:pt-4">
        <div className="mx-auto max-w-[1240px] px-6">
          {/* One story, told once. The mid sub-heading and the italic "reply"
              are why this section is written out rather than mapped from data —
              the rail, widths and type are unchanged. The A$850 switchboard job
              is the same one used on / and /pricing; do not vary it. */}
          <div className="max-w-[680px]">
            <Reveal>
              <h2 className="text-[20px] font-semibold tracking-tight text-white">
                We watched it happen to someone we love.
              </h2>
              <div className="mt-4 space-y-5 sm:mt-5">
                <p className="text-[16px] leading-[1.7] text-[var(--silver)]">
                  He&rsquo;s a sparky. Twenty-two years on the tools. The kind of tradesman
                  people wait for.
                </p>
                <p className="text-[16px] leading-[1.7] text-[var(--silver)]">
                  One Tuesday a man messaged him about a switchboard. Eight hundred and
                  fifty dollars. He was up a ladder. He saw it at six. He replied at nine.
                </p>
                <p className="text-[16px] leading-[1.7] text-[var(--silver)]">
                  By nine the man had someone else.
                </p>
                <p className="text-[16px] leading-[1.7] text-[var(--silver)]">
                  Nothing was wrong with his work. Nothing was wrong with his price. He lost
                  that job in the three hours between a question and an answer. And he
                  never knew he&rsquo;d lost it, because the man simply never wrote back.
                </p>
              </div>

              {/* Same size as the section heading above */}
              <h3 className="mt-8 text-[20px] font-semibold tracking-tight text-white sm:mt-10">
                That&rsquo;s the part nobody tells you.
              </h3>
              <div className="mt-4 space-y-5 sm:mt-5">
                <p className="text-[16px] leading-[1.7] text-[var(--silver)]">
                  You don&rsquo;t lose the job. You lose the <em className="italic">reply</em>.
                  And a lost reply doesn&rsquo;t feel like anything at all. It feels like a
                  quiet week.
                </p>
                <p className="text-[16px] leading-[1.7] text-[var(--silver)]">
                  We built Solren so that the quiet weeks stop being a mystery.
                </p>
              </div>
            </Reveal>
          </div>

          {/* The close: one white line, then the single action — left-aligned on
              the same rail as the copy. */}
          <Reveal>
            <div className="mt-8 max-w-[680px] sm:mt-10">
              <p className="text-[16px] leading-[1.7] text-white">
                We can&rsquo;t get that Tuesday back. We can make sure it doesn&rsquo;t happen
                again on Thursday.
              </p>
              <div className="mt-[var(--space-block)]">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
                >
                  Book a call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
