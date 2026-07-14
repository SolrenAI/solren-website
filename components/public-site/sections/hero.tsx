import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pb-4 pt-24 sm:pb-24 sm:pt-36 lg:pb-20 lg:pt-[112px]">
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

        {/* Subheading, one step below the h1: white, both lines. Replaces the
            removed rotating line and the old grey footnote below the CTAs. */}
        <p className="mx-auto mt-6 max-w-[24ch] text-[clamp(1.2rem,5vw,1.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-white sm:mt-8">
          Most jobs aren&apos;t lost on price.
          <br />
          They&apos;re lost on the clock.
        </p>

        {/* Body: two lines — the promise in silver, the one claim no competitor
            can copy in white on its own line. */}
        <p className="mx-auto mt-4 max-w-[34rem] text-[15px] leading-[1.6] text-[var(--silver)] sm:mt-5 sm:text-[16px]">
          Solren catches every enquiry, replies in seconds, and follows up until the job is booked.
        </p>
        <p className="mx-auto mt-3 max-w-[34rem] text-[15px] leading-[1.6] text-white sm:text-[16px]">
          Nothing goes out until you say so.
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

        <p className="mx-auto mt-6 max-w-[42ch] text-[15px] leading-relaxed sm:mt-8 sm:max-w-none sm:text-[16px]">
          <span className="text-white">A$497 a month.</span>
          <span className="text-[var(--silver)]"> One booked job covers it.</span>
        </p>
      </div>
    </section>
  )
}
