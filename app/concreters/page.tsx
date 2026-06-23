import type { Metadata } from "next"

import { IndustryPage } from "@/components/public-site/industry-page"
import { getIndustry } from "@/components/public-site/industries-data"

const SLUG = "concreters"

export function generateMetadata(): Metadata {
  const industry = getIndustry(SLUG)
  if (!industry) return { title: "Industries" }
  return {
    title: industry.name,
    description: industry.heroSub,
    alternates: { canonical: `/${SLUG}` },
  }
}

export default function Page() {
  return <IndustryPage slug={SLUG} />
}
