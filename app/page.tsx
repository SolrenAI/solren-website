import type { Metadata } from "next"
import { Hero } from "@/components/public-site/sections/hero"
import { EnquiryFlow } from "@/components/public-site/sections/enquiry-flow"
import { IndustriesPreview } from "@/components/public-site/sections/industries-preview"
import { ProductProof } from "@/components/public-site/sections/product-proof"
import { ProcessPreview } from "@/components/public-site/sections/process-preview"
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
      {/* Quiet product proof — the real Solren command centre — before How It Works. */}
      <ProductProof />
      <ProcessPreview />
      <TrustSignals />
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
