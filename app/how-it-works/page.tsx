import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { HowItWorks, WorkSplit, InstalledAround } from "@/components/public-site/sections/how-it-works"
import { Trust } from "@/components/public-site/sections/trust"

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Solren turns missed enquiries into booked work. Solren catches new enquiries, replies fast, follows up automatically, and helps you book more jobs.",
  alternates: { canonical: "/how-it-works" },
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        divider={false}
        eyebrowPulse
        eyebrow="How it works"
        title={
          <span className="block overflow-visible text-balance pb-2 leading-[1.1]">
            How Solren turns missed enquiries into booked work
          </span>
        }
        sub="Your customers ask for help. Solren responds fast, follows up automatically, and keeps the lead moving while you stay focused on the job."
        actions={
          <>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              View pricing
            </Link>
          </>
        }
      />

      <HowItWorks />

      <WorkSplit />

      <InstalledAround />

      <Trust />
    </>
  )
}
