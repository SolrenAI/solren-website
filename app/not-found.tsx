import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-32 text-center">
      <div className="mx-auto max-w-xl">
        <span className="ps-label">Not found</span>
        <h1 className="mt-6 overflow-visible pb-[0.1em] text-[clamp(2.4rem,6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.03em] ps-silver">
          Page not found.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-[var(--silver)]">
          The page may have moved, or the link may be incorrect.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
          >
            Back home
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/contact-support"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  )
}
