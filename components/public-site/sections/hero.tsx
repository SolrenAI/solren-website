import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { RotatingHighlight } from "../rotating-highlight"

export function Hero() {
  return (
    <section className="relative pb-14 pt-24 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      {/* heading block — one centred vertical stack */}
      <div className="mx-auto max-w-[1080px] px-5 text-center sm:px-6">
        <div className="inline-flex items-center gap-2">
          <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
          <span className="ps-label !text-[11px] !font-normal !tracking-[0.22em] !text-[var(--muted)]">
            Enquiry Intelligence
          </span>
        </div>

        <h1 className="mx-auto mt-6 max-w-[680px] text-[clamp(2.15rem,9.5vw,3.25rem)] font-medium leading-[1] tracking-[-0.025em] text-white sm:mt-8 sm:leading-[0.95]">
          Every new enquiry
          <br />
          gets answered.
        </h1>

        <p className="mx-auto mt-6 text-[clamp(1rem,4.5vw,1.25rem)] font-medium tracking-[-0.01em] sm:mt-7">
          <RotatingHighlight />
        </p>
        <p className="mx-auto mt-3 max-w-[32rem] text-[15px] leading-[1.6] text-[var(--muted)]">
          All followed up automatically.
        </p>

        {/* CTAs — deliberately quiet so they never compete with the headline */}
        <div className="mx-auto mt-8 flex max-w-[320px] flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
          >
            Get started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--hair)] px-6 py-3 text-[14.5px] font-medium text-[var(--silver)] transition-colors hover:border-[var(--hair-strong)] hover:text-white"
          >
            See how it works
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-[30ch] text-[12.5px] leading-relaxed text-[var(--muted)] sm:mt-8 sm:max-w-none sm:text-[13px]">
          Built for service businesses that rely on fast replies.
        </p>
      </div>
    </section>
  )
}
