import type { Metadata } from "next"

import { PageHeader } from "@/components/public-site/page-header"
import { BookDemo } from "@/components/public-site/book-demo"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where work comes in and what you want fixed first. We'll map the right Solren install and send the next step.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Talk to Solren.</>}
        sub="Tell us where your enquiries come from. We will show you what Solren could handle."
        divider={false}
        bottomClass="pb-6 sm:pb-9 lg:pb-7"
        subClass="mt-[18px] sm:mt-7"
      />

      {/* No divider — controlled whitespace carries the hero into the form. */}
      <BookDemo />
    </>
  )
}
