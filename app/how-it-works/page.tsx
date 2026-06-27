import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { HowItWorks, WorkSplit, InstalledAround } from "@/components/public-site/sections/how-it-works"
import { Trust } from "@/components/public-site/sections/trust"

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Missed enquiry. Fast reply. Booked job. Solren catches new leads, replies fast, follows up automatically, and helps you book more work. Installed and managed for you.",
  alternates: { canonical: "/how-it-works" },
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        divider={false}
        bottomClass="pb-12 sm:pb-16 lg:pb-10"
        eyebrowPulse
        eyebrow="How it works"
        title={
          <span className="block overflow-visible text-balance pb-2 leading-[1.1]">
            Missed enquiry. Fast reply. Booked job.
          </span>
        }
        sub="Solren catches new leads, prepares the reply, follows up automatically, and keeps the job moving while you work."
        actions={
          <>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              View pricing
            </Link>
            <p className="basis-full text-[12.5px] leading-relaxed text-[var(--muted)] sm:text-[13px]">
              From A$497/month. One booked job covers it.
            </p>
          </>
        }
      />

      <HowItWorks />

      <WorkSplit />

      {/* The "Custom-built" pill is removed from the md+ layout in favour of the
          simpler closing trust strip below; kept on phones (where Trust is hidden)
          so the mobile layout is unchanged for now. */}
      <div className="md:hidden">
        <InstalledAround />
      </div>

      <Trust />
    </>
  )
}
