import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "../reveal"

/* Closing decision area (desktop only). Two equal cards — business outcomes vs
   admin relief — each with a checklist and a long full-width CTA pinned to the
   bottom so the button baselines align. Solren dark surface, subtle border, no
   glow or heavy gradient. Shared by the Home and Industries closing sections; it
   is hidden below lg, where the FinalCta card is shown instead. */
const RESULTS = ["Faster replies", "More jobs booked", "No missed enquiries"]
const ADMIN = ["No chasing enquiries yourself", "Follow-up handled for you", "Installed and managed"]

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
            {/* Business results — pure outcome card */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12">
              <h3 className="text-[19px] font-medium tracking-tight text-white">More booked work</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                More replies. More follow-up. More jobs booked.
              </p>
              <CardChecklist items={RESULTS} />
            </div>

            {/* Less admin — pure outcome card */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12">
              <h3 className="text-[19px] font-medium tracking-tight text-white">Less chasing</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--muted)]">
                You stay on the tools. Solren handles the follow-up.
              </p>
              <CardChecklist items={ADMIN} />
            </div>
          </div>
        </Reveal>

        {/* One decision — a single primary CTA centred under both cards, attached to
            the outcome. The two competing in-card buttons are gone. */}
        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#537FEA] px-9 py-4 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
