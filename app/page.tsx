import type { Metadata } from "next"
import { Hero } from "@/components/public-site/sections/hero"
import { EnquiryFlow } from "@/components/public-site/sections/enquiry-flow"
import { IndustriesPreview } from "@/components/public-site/sections/industries-preview"
import { TrustSignals } from "@/components/public-site/sections/trust-signals"
import { FinalCta } from "@/components/public-site/sections/final-cta"
import { ClosingCards } from "@/components/public-site/sections/closing-cards"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function PublicSiteHome() {
  return (
    <>
      <Hero />
      <EnquiryFlow />
      {/* No rules between the lower sections: controlled whitespace and the dark
          ground carry the eye from one chapter to the next. */}
      <IndustriesPreview />
      {/* The key trust moment: you approve every reply — nothing sends without you. */}
      <TrustSignals />

      {/* The ONLY divider on the homepage — deliberately not a reusable separator.
          It sits on the hinge between the two control statements: what Solren does
          do (approve every reply) and what it doesn't (answer your phone).

          .ps-rule is the site's existing centre-weighted fade: transparent → --hair
          → transparent. Constrained to 560px — the same measure as the ClosingCards
          paragraph below it — so it reads as an accent under the centred text, not
          a full-bleed section rule.

          lg-only, matching ClosingCards: below lg the "We don't answer your phone."
          block is not rendered at all, so there is no boundary here to divide. */}
      <div className="hidden lg:my-8 lg:block">
        <div className="ps-rule mx-auto w-full max-w-[560px]" />
      </div>

      {/* Desktop: the stronger two-card closing area. Mobile/tablet keep the
          FinalCta card (last child, for the footer-gap rule). */}
      <ClosingCards />
      {/* Mobile: pull the footer up under the closing card so it reads as the
          conclusion of the page, not a new section. Wrapper keeps this homepage-
          scoped (FinalCta is shared) and lg:hidden leaves desktop/ClosingCards
          and the footer itself untouched. */}
      <div className="-mb-14 lg:hidden">
        <FinalCta mobileOnly />
      </div>
    </>
  )
}
