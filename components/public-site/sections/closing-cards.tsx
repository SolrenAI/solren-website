import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "../reveal"

/* Closing statement (desktop only). The honest boundary — Solren does not answer
   the phone, but catches everything else. Centred, because nothing follows it.
   Hidden below lg, where the FinalCta card is shown instead. */
export function ClosingCards() {
  return (
    <section className="hidden lg:block lg:pb-2 lg:pt-8">
      <div className="mx-auto max-w-[1272px] px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="overflow-visible pb-[0.12em] text-[clamp(1.9rem,5.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.02em] ps-silver">
              We don&apos;t answer your phone.
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-[var(--silver)] sm:text-[16px]">
              We catch everything else. Every form, every message, every DM.
              And we never let one go cold.
            </p>
            <div className="mt-[var(--space-block)] flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#537FEA] px-9 py-4 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-[var(--silver)]">
              No pitch. No obligation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
