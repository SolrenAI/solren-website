import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import { HelpIndex } from "@/components/public-site/help-index"
import { helpArticles, helpCategories } from "@/components/public-site/help-data"

export const metadata: Metadata = {
  title: "Help Centre",
  description:
    "Find answers about setup, billing, integrations and support.",
}

export default function HelpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help Centre"
        title={<>How can we help?</>}
        sub="Find answers about setup, billing, integrations and support."
      />

      <section className="pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-[1080px] px-6">
          <HelpIndex categories={helpCategories} articles={helpArticles} />

          {/* Still need help — quiet support close, above the footer */}
          <Reveal>
            <div className="mt-12 border-t border-[var(--hair)] pt-10 text-center sm:mt-16 sm:pt-14">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
                Still need help?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-[var(--silver)]">
                Email{" "}
                <a
                  href="mailto:contact@solren.ai"
                  className="text-[#86A2F0] underline-offset-2 hover:underline"
                >
                  contact@solren.ai
                </a>{" "}
                and we&apos;ll review your request.
              </p>
              <a
                href="mailto:contact@solren.ai"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
              >
                Contact support
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
