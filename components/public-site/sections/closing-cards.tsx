import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "../reveal"

/* Closing decision area (desktop only). Two equal cards — business outcomes vs
   admin relief — each with a checklist and a long full-width CTA pinned to the
   bottom so the button baselines align. Solren dark surface, subtle border, no
   glow or heavy gradient. Shared by the Home and Industries closing sections; it
   is hidden below lg, where the FinalCta card is shown instead. */
const RESULTS = ["Faster replies", "More booked work", "Higher conversion rates", "No missed enquiries"]
const ADMIN = ["No manual follow-ups", "Less inbox chasing", "Follow-up handled automatically", "Installed and managed"]

function CardChecklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 space-y-4">
      {items.map((b) => (
        <li key={b} className="flex items-center gap-3 text-[15px] leading-snug text-[var(--silver)]">
          <Check className="h-4 w-4 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

export function ClosingCards() {
  return (
    <section className="hidden lg:block lg:pb-2 lg:pt-4">
      <div className="mx-auto max-w-[1272px] px-6">
        <Reveal>
          <div className="grid grid-cols-2 items-stretch gap-24">
            {/* Business results — outcomes; primary CTA */}
            <div className="flex min-h-[460px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12">
              <h3 className="text-[19px] font-medium tracking-tight text-white">Business results</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                Turn more enquiries into booked work with faster replies and consistent follow-up.
              </p>
              <CardChecklist items={RESULTS} />
              <div className="mt-auto pt-10">
                <Link
                  href="/contact"
                  className="group flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-7 py-4 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
                >
                  Get started
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Less admin — relief; secondary outline CTA */}
            <div className="flex min-h-[460px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12">
              <h3 className="text-[19px] font-medium tracking-tight text-white">Less admin</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                Solren keeps follow-up moving quietly in the background while you stay focused on the work.
              </p>
              <CardChecklist items={ADMIN} />
              <div className="mt-auto pt-10">
                <Link
                  href="/pricing"
                  className="flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
