import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { RotatingHighlight } from "../rotating-highlight"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-28">
      {/* heading block — one centred vertical stack */}
      <div className="mx-auto max-w-[1080px] px-6 text-center">
        <div className="inline-flex items-center gap-2">
          <span className="ps-live-dot h-1.5 w-1.5 rounded-full bg-[#537FEA]" />
          <span className="ps-label !text-[11px] !font-normal !tracking-[0.22em] !text-[var(--muted)]">
            Enquiry Intelligence
          </span>
        </div>

        <h1 className="mx-auto mt-8 max-w-[680px] text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[0.95] tracking-[-0.025em] text-white">
          Every new enquiry
          <br />
          gets answered.
        </h1>

        <p className="mx-auto mt-7 text-[clamp(1.05rem,1.7vw,1.25rem)] font-medium tracking-[-0.01em]">
          <RotatingHighlight />
        </p>
        <p className="mx-auto mt-2.5 max-w-[540px] text-[15px] leading-[1.6] text-[var(--muted)]">
          All followed up automatically.
        </p>

        {/* CTAs — deliberately quiet so they never compete with the headline */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-5 py-3 text-[14px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
          >
            Get started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--hair)] px-5 py-3 text-[14px] font-medium text-[var(--silver)] transition-colors hover:border-[var(--hair-strong)] hover:text-white"
          >
            See how it works
          </Link>
        </div>

        <p className="mx-auto mt-9 text-[13px] text-[var(--muted)]">
          Built for service businesses that rely on fast replies.
        </p>
      </div>
    </section>
  )
}
