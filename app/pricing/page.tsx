import type { Metadata } from "next"
import {
  ShieldCheck,
  Settings2,
  LifeBuoy,
  PenLine,
} from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Packages } from "@/components/public-site/packages"
import { PricingMobile } from "@/components/public-site/pricing-mobile"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Solren install packages for AI follow-up and lead automation.",
  alternates: { canonical: "/pricing" },
}

const includes = [
  { icon: PenLine, title: "Done for you", body: "We build and install it. You don't set anything up." },
  { icon: Settings2, title: "Shaped to you", body: "Fitted to how your leads come in and how you work." },
  { icon: ShieldCheck, title: "You stay in control", body: "Replies are ready. You choose what sends." },
  { icon: LifeBuoy, title: "Managed monthly", body: "Monitoring, support and improvements every month." },
]

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Install packages"
        title={<>Installed like a product. Not an app.</>}
        sub="Pick how much you install. Every package is built for you, shaped around your business, and managed month to month."
      />

      {/* Founder Beta — a compact announcement banner, not a card, so the pricing
          plans stay the clear focus of the page. Warm amber stays reserved for the
          beta accent; blue is for the primary actions in the plans. */}
      <section className="pt-8 sm:pt-10">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-[var(--hair)] bg-white/[0.02] px-5 py-3.5">
              <span className="ps-label inline-flex shrink-0 items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]" />
                Founder Beta
              </span>
              <span className="text-[14px] font-medium text-white">
                5 founder installs available
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing — the hero of the page. Mobile/tablet show one package at a time
          via tabs + a collapsed compare accordion; desktop keeps the three-up grid. */}
      <section className="pt-4 pb-16 sm:pt-6 sm:pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          <div className="lg:hidden">
            <PricingMobile />
          </div>
          <div className="hidden lg:block">
            <Packages detailed />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-[13px] leading-relaxed text-[var(--muted)]">
            <span className="text-[var(--silver)]">Referral credit:</span> Introduce another
            business and when they install, your next month is on us.
          </p>
        </div>
      </section>

      {/* Included with every install — a calm, borderless trust strip that supports
          the plans. A contained, edge-fading divider (aligned to the pricing cards)
          replaces the old full-width rule; the top gap is tightened on desktop. */}
      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          {/* contained, edge-fading divider — aligned to the cards, never full-bleed */}
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          />
          <div className="pt-14 sm:pt-20 lg:pt-12">
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#537FEA]" />
                <h2 className="text-[clamp(1.55rem,3vw,2.1rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
                  Included with every install.
                </h2>
              </div>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[var(--muted)] sm:text-[14.5px]">
                Setup, replies, follow-up logic and monthly tuning are handled for you.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-9 sm:mt-12 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10">
              {includes.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <div>
                    <Icon className="h-5 w-5 text-[var(--silver)]" strokeWidth={1.5} />
                    <h3 className="mt-3.5 text-[15px] font-medium tracking-tight text-white sm:text-[16px]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--silver)] sm:text-[13.5px]">
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
