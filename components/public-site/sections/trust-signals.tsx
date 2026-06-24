import { Reveal } from "../reveal"

/* "The difference": a single bold before→after statement, large type and air.
   The concrete benefit list lives in the closing "What you get" card, so this
   stays a pure statement — the same points are never listed twice. */
export function TrustSignals({ tightTop = false }: { tightTop?: boolean }) {
  return (
    /* `tightTop` (desktop only): pull the headline up so it reads as the conclusion
       of the section above rather than a floating section, and give the eyebrow a
       restrained Solren-blue accent. */
    <section
      className={`relative pb-12 pt-12 sm:pb-20 sm:pt-24 lg:pb-24 ${
        tightTop ? "lg:pt-10" : "lg:pt-32"
      }`}
    >
      <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-6">
        <Reveal>
          <span
            className={`ps-label !text-[12px] !tracking-[0.3em] !text-[var(--silver)] ${
              tightTop ? "lg:!text-[#537FEA]/80" : ""
            }`}
          >
            The difference
          </span>
          <h2 className="mx-auto mt-5 max-w-[15ch] text-[clamp(1.85rem,8vw,3.7rem)] font-medium leading-[1.08] tracking-[-0.02em] sm:mt-6 sm:leading-[1.04]">
            <span className="text-[var(--muted)]">From missed enquiries</span>{" "}
            <span className="ps-silver">to booked jobs.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
