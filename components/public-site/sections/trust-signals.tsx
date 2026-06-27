import { Reveal } from "../reveal"

/* "The difference": a single bold before→after statement, large type and air.
   The concrete benefit list lives in the closing "What you get" card, so this
   stays a pure statement — the same points are never listed twice. */
export function TrustSignals({ tightTop = false }: { tightTop?: boolean }) {
  return (
    /* `tightTop` (desktop only): pull the headline up so it reads as the conclusion
       of the section above rather than a floating section. */
    <section
      className={`relative pb-4 pt-0 sm:pb-12 sm:pt-8 ${
        tightTop ? "lg:pt-10 lg:pb-12" : "lg:pt-8 lg:pb-8"
      }`}
    >
      <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-6">
        <Reveal>
          {/* Mobile: a larger, tighter headline (≈38–44px, leading 1.12) sized via
              the base classes; the original desktop clamp + leading restore at sm:.
              The gradient (.ps-silver) clips the "j" descender in "jobs." — guarded
              with overflow-visible + extra bottom padding on mobile (where the type
              is largest) so it can never be cut. Desktop is pixel-identical. */}
          <h2 className="mx-auto max-w-[15ch] overflow-visible pb-[0.08em] text-[clamp(2.375rem,10vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] sm:pb-0 sm:text-[clamp(1.85rem,8vw,3.7rem)] sm:leading-[1.08] lg:max-w-[24ch]">
            <span className="text-[var(--muted)] lg:block">From missed enquiries</span>{" "}
            <span className="ps-silver-safe overflow-visible pb-[0.18em] sm:pb-[0.12em] lg:block">to booked jobs.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
