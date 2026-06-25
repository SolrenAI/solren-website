import type { Metadata } from "next"

import { PricingContent, pricingFaqsText } from "@/components/public-site/pricing-content"
import { FaqStructuredData } from "@/components/public-site/structured-data"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "What Solren costs, what you get, and our guarantee. Set up for you and run month to month.",
  alternates: { canonical: "/pricing" },
}

export default function PricingPage() {
  return (
    <>
      {/* FAQPage schema mirrors the visible FAQ copy */}
      <FaqStructuredData faqs={pricingFaqsText} />
      <PricingContent />
    </>
  )
}
