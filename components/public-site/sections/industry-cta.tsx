import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "../reveal"

/* Desktop closing CTA for the SEO industry pages: two equal cards — Book a
   15-minute call and Compare plans — replacing the old checklist CTA. Hidden below lg, where the
   FinalCta card is shown instead. Cards use the pricing surface (ps-card), the
   same max width as the old CTA, equal height with the buttons pinned to the
   bottom so their baselines align. Subtle hover only; no gradients or glass. */
export function IndustryCta() {
  return (
    <section className="relative hidden px-6 pb-2 pt-6 lg:block">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <div className="grid grid-cols-2 items-stretch gap-6">
            {/* Book a call — primary */}
            <div className="ps-card flex min-h-[260px] flex-col rounded-[24px] p-10">
              <h3 className="text-[19px] font-medium tracking-tight text-white">Book a call</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                We&apos;ll show you how Solren would handle your enquiries, explain how the installation works, and answer any questions. No pressure, no obligation.
              </p>
              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
                >
                  Book a call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Compare plans — secondary outline */}
            <div className="ps-card flex min-h-[260px] flex-col rounded-[24px] p-10">
              <h3 className="text-[19px] font-medium tracking-tight text-white">Compare plans</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                Compare installation packages, monthly management, and everything that&apos;s included before making a decision.
              </p>
              <div className="mt-auto pt-8">
                <Link
                  href="/pricing"
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
                >
                  Compare plans
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
