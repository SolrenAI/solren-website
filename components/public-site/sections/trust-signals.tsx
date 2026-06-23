import { Reveal } from "../reveal"

/* "The difference": a single bold before→after statement, large type and air.
   The concrete benefit list lives in the closing "What you get" card, so this
   stays a pure statement — the same points are never listed twice. */
export function TrustSignals() {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <Reveal>
          <span className="ps-label !text-[12px] !tracking-[0.3em] !text-[var(--silver)]">
            The difference
          </span>
          <h2 className="mx-auto mt-6 max-w-[15ch] text-[clamp(2.3rem,5.4vw,3.7rem)] font-medium leading-[1.04] tracking-[-0.02em]">
            <span className="text-[var(--muted)]">From missed enquiries</span>{" "}
            <span className="ps-silver">to booked jobs.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
