import type { Metadata } from "next"
import { Hero } from "@/components/public-site/sections/hero"
import { EnquiryFlow } from "@/components/public-site/sections/enquiry-flow"
import { IndustriesPreview } from "@/components/public-site/sections/industries-preview"
import { ProcessPreview } from "@/components/public-site/sections/process-preview"
import { TrustSignals } from "@/components/public-site/sections/trust-signals"
import { FinalCta } from "@/components/public-site/sections/final-cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

/* Contained, centred hairline between major lower sections — matches the content
   width and fades at both ends, so it reads as a quiet rule rather than a
   full-width border cutting across the page. */
function SectionRule() {
  return (
    <div aria-hidden="true" className="px-5 sm:px-6">
      <div className="mx-auto h-px max-w-[1200px] bg-gradient-to-r from-transparent via-[var(--hair-strong)] to-transparent" />
    </div>
  )
}

export default function PublicSiteHome() {
  return (
    <>
      <Hero />
      <EnquiryFlow />
      <IndustriesPreview />
      <SectionRule />
      <ProcessPreview />
      <SectionRule />
      <TrustSignals />
      <FinalCta />
    </>
  )
}
