import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  ShieldCheck,
  Settings2,
  LifeBuoy,
  PenLine,
} from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Packages } from "@/components/public-site/packages"
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

/* contained, edge-fading divider between major sections — aligned to the page
   content width, never a full browser-width cut */
function SectionDivider() {
  return (
    <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Install packages"
        title={<>Installed like a product. Not an app.</>}
        sub="Pick how much you install. Every package is built for you, shaped around your business, and managed month to month."
      />

      {/* Solren Beta — selective early-access callout, placed above pricing so it
          frames the installs being opened. Warm amber is reserved for the beta /
          referral accent; blue stays for the primary CTA. */}
      <section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          <Reveal>
            <div className="ps-card rounded-[24px] p-6 sm:rounded-[28px] sm:p-12">
              <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
                {/* the program */}
                <div>
                  <span className="ps-label inline-flex items-center gap-2.5 text-[#E0AE70]">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#E2A95E]" />
                    Solren Beta
                  </span>
                  <h2 className="mt-6 max-w-xl text-[clamp(1.8rem,3.2vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.02em] ps-silver">
                    5 founder installs available.
                  </h2>
                  <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[var(--silver)]">
                    We are opening a small number of beta installs so each business
                    can be set up carefully, tested properly, and shaped around how
                    their enquiries come in.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
                  >
                    Get started
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* referral credit — restrained warm-amber sub-panel, not a coupon */}
                <div className="rounded-2xl border border-[#E2A95E]/20 bg-[#E2A95E]/[0.04] p-6 sm:p-7">
                  <span className="ps-label inline-flex items-center gap-2 text-[#E0AE70]">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#E2A95E]" />
                    Referral credit
                  </span>
                  <p className="mt-3 text-[15px] leading-relaxed">
                    <span className="font-medium text-white">Introduce another business.</span>{" "}
                    <span className="text-[var(--silver)]">
                      When they install, your next month is on us.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing — grouped tightly under the Beta callout */}
      <section className="pt-14 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          <Packages detailed />
        </div>
      </section>

      <SectionDivider />

      {/* Every install includes — sits on the page background, light cards that
          echo the pricing grid above (no separate slab / dashboard panel) */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
          <Reveal>
            <h2 className="max-w-xl text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.02em] ps-silver">
              Every install includes.
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {includes.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="ps-card h-full rounded-[22px] p-6 sm:rounded-[24px] sm:p-8">
                  <Icon className="h-7 w-7 text-[#86A2F0]" strokeWidth={1.5} />
                  <h3 className="mt-6 text-[18px] font-medium tracking-tight text-white sm:mt-8">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--silver)]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA — quiet close, single primary action */}
      <section className="py-16 text-center sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.02em]">
              <span className="ps-silver">Let&apos;s find your install.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-[var(--silver)]">
              Tell us how work comes in. We&apos;ll point you to the right install.
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
