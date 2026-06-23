import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Request received",
  description: "Your Solren request has been received.",
}

const steps = [
  "We review your business.",
  "We map your lead flow.",
  "We reply with the right next step.",
]

export default function ThankYouPage() {
  return (
    <>
      <PageHeader
        eyebrow="Request received"
        title={<>Your request has been received.</>}
        sub="We'll review your business and reply with the next step."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[760px] px-5 sm:px-6">
          <Reveal>
            <h2 className="text-[19px] font-medium tracking-tight text-white">
              What happens next
            </h2>
            <ol className="mt-6 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#537FEA]/30 bg-[#537FEA]/[0.08] text-[10.5px] font-medium tabular-nums text-[#86A2F0]"
                    style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-[15.5px] leading-relaxed text-[var(--silver)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <p className="mt-12 border-t border-[var(--hair)] pt-10 text-[15px] leading-relaxed text-[var(--silver)]">
              If you need to add anything, email{" "}
              <a
                href="mailto:contact@solren.ai"
                className="text-white underline-offset-2 hover:underline"
              >
                contact@solren.ai
              </a>
              .
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Back to home
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--hair-strong)] px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-white/[0.03]"
              >
                View pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
