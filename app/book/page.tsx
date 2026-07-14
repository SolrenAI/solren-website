import type { Metadata } from "next"

import { BookForm } from "@/components/public-site/book-form"

export const metadata: Metadata = {
  title: "Request help",
  description: "Share a few details and we'll get back to you shortly.",
  alternates: { canonical: "/book" },
  // Per-client request form (varies by ?client=) — kept out of search indexes.
  robots: { index: false, follow: false },
}

/* Placeholder client identity. These values are hard-coded for now; later they
   come from client_settings, looked up by the ?client= slug. Shape kept flat so
   the swap to real data is a drop-in. */
const client = {
  businessName: "Solren",
  subtitle: "AI lead response system",
  location: "Sydney, NSW",
  phone: "04xx xxx xxx",
  email: "contact@solren.ai",
}

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-12 sm:px-6 sm:py-16">
      <div className="w-full max-w-[780px]">
        {/* Standalone request card — no marketing chrome, the form is the page. */}
        <div className="ps-card rounded-[26px] border border-[var(--hair-strong)] bg-white/[0.02] p-6 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] sm:p-9">
          {/* 1. Client identity — quiet, secondary letterhead (top-left). */}
          <div>
            <p className="text-[14px] font-semibold tracking-tight text-white">
              {client.businessName}
            </p>
            <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">{client.subtitle}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12.5px] text-[var(--muted)]">
              <span>{client.location}</span>
              <span aria-hidden="true" className="text-[var(--hair-strong)]">·</span>
              <a
                href={`tel:${client.phone.replace(/\s+/g, "")}`}
                className="transition-colors hover:text-[var(--silver)]"
              >
                {client.phone}
              </a>
              <span aria-hidden="true" className="text-[var(--hair-strong)]">·</span>
              <a
                href={`mailto:${client.email}`}
                className="transition-colors hover:text-[var(--silver)]"
              >
                {client.email}
              </a>
            </div>
          </div>

          {/* 2. Request form — the hero. */}
          <div className="mt-6 sm:mt-7">
            <span className="ps-label text-[var(--muted)]">Request help</span>

            <h1 className="mt-6 text-[26px] font-medium leading-tight tracking-tight text-white sm:text-[30px]">
              Tell us what you need.
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--silver)] sm:text-[15.5px]">
              Share a few details and we&apos;ll get back to you shortly.
            </p>

            <div className="mt-7 sm:mt-8">
              <BookForm />
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[12.5px] text-[var(--muted)]">
          Powered by <span className="font-medium text-[var(--silver)]">Solren</span>
        </p>
      </div>
    </div>
  )
}
