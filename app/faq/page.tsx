import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { FaqAccordion } from "@/components/public-site/faq-accordion"
import { Reveal } from "@/components/public-site/reveal"
import { FaqStructuredData } from "@/components/public-site/structured-data"
import { faqs } from "@/components/public-site/faq-data"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Straight answers about installing Solren: setup time, control, monthly management, and who it's for.",
  alternates: { canonical: "/faq" },
}

export default function FaqPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <PageHeader
        eyebrow="FAQ"
        title={<>Straight answers.</>}
        sub="No jargon. Here's how Solren works, what it costs, and what stays in your hands."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[860px] px-5 sm:px-6">
          <FaqAccordion />

          <Reveal>
            <div className="ps-card ps-card-warm mt-12 flex flex-col items-stretch justify-between gap-6 rounded-[22px] p-6 sm:mt-14 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h2 className="text-[20px] font-medium tracking-tight text-white">
                  Still have a question?
                </h2>
                <p className="mt-2 text-[14.5px] text-[var(--silver)]">
                  Ask us anything before you commit.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Talk to us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
