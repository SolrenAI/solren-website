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
        eyebrow="Get started"
        title={<>Start your Solren install.</>}
        sub="Tell us where work comes in and what you want fixed first. We'll map the right install and send the next step."
        divider={false}
      />

      {/* quiet section break, aligned to the content grid and fading at the ends */}
      <div className="mx-auto max-w-[1240px] px-6">
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        />
      </div>

      <BookDemo />
    </>
  )
}
