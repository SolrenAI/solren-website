import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { RotatingHighlight } from "../rotating-highlight"

export function Hero() {
  return (
    <section className="relative pb-5 pt-24 sm:pb-24 sm:pt-36 lg:pb-20 lg:pt-[136px]">
      {/* heading block — one centred vertical stack */}
      <div className="mx-auto max-w-[1080px] px-5 text-center sm:px-6">
        <div className="inline-flex items-center gap-2">
          <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
          <span className="ps-label !text-[11px] !font-normal !tracking-[0.22em] !text-[var(--muted)]">
            Enquiry Intelligence
          </span>
        </div>

        <h1 className="mx-auto mt-6 max-w-[680px] text-[clamp(2.15rem,9.5vw,3.25rem)] font-medium leading-[1] tracking-[-0.025em] text-white sm:mt-9 sm:leading-[0.95]">
          Missed enquiry. Fast reply. Booked job.
        </h1>

        <p className="mx-auto mt-6 text-[clamp(1rem,4.5vw,1.25rem)] font-medium tracking-[-0.01em] sm:mt-8">
          <RotatingHighlight />
        </p>
        <p className="mx-auto mt-4 max-w-[34rem] text-[15px] leading-[1.6] text-[var(--silver)] sm:mt-5 sm:text-[16px]">
          Solren catches every enquiry. Replies fast. Follows up. You stay on the job.
        </p>

        {/* CTAs — deliberately quiet so they never compete with the headline */}
        <div className="mx-auto mt-8 flex max-w-[320px] flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--hair)] px-6 py-3 text-[14.5px] font-medium text-[var(--silver)] transition-colors hover:border-[var(--hair-strong)] hover:text-white"
          >
            See how it works
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-[42ch] text-[12.5px] leading-relaxed text-[var(--muted)] sm:mt-8 sm:max-w-none sm:text-[13px]">
          From A$497/month. One booked job covers it.
        </p>

        <p className="mx-auto mt-6 max-w-[42ch] text-[12.5px] leading-relaxed text-[var(--muted)] sm:mt-8 sm:max-w-none sm:text-[13px]">
          Most jobs aren&apos;t lost on price. They&apos;re lost on response time.
        </p>
      </div>
    </section>
  )
}
