import type { Metadata } from "next"

import { ScrollToTop } from "@/components/public-site/scroll-to-top"

export const metadata: Metadata = {
  title: "Request received",
  description: "Your Solren request has been received.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-12 sm:px-6 sm:py-16">
      <ScrollToTop />
      <div className="w-full max-w-[780px]">
        {/* Standalone confirmation card — mirrors /book, no marketing chrome. */}
        <div className="ps-card rounded-[26px] border border-[var(--hair-strong)] bg-white/[0.02] p-6 text-center shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] sm:p-9">
          <span className="ps-label text-[var(--muted)]">Request received</span>

          <h1 className="mt-6 text-[26px] font-medium leading-tight tracking-tight text-white sm:text-[30px]">
            Request received.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--silver)] sm:text-[15.5px]">
            Thanks. Your details have been sent to Solren.
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
            We&apos;ll review the enquiry and reply with the next step.
          </p>
        </div>

        <p className="mt-6 text-center text-[12.5px] text-[var(--muted)]">
          Powered by <span className="font-medium text-[var(--silver)]">Solren</span>
        </p>
      </div>
    </div>
  )
}
