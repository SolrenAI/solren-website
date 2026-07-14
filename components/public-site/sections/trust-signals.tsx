import { Reveal } from "../reveal"

/* The key trust moment for a tradie wary of AI messaging their customers:
   Solren drafts, the owner approves, then it sends. One quiet, centred
   statement — deliberately smaller than the "Built for trades" headline so the
   page keeps a single mega-headline. */
export function TrustSignals() {
  return (
    <section className="relative px-5 pb-8 pt-4 text-center sm:px-6 sm:pb-12 sm:pt-8 lg:pb-10 lg:pt-10">
      <Reveal>
        <span className="ps-label block">You stay in control</span>
        {/* Both halves white: silver marks the problem, white marks the outcome,
            and both lines here are outcome. */}
        <h2 className="mx-auto mt-3 max-w-[24ch] text-[clamp(1.6rem,6.5vw,2.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white">
          You approve every reply. Nothing sends without you.
        </h2>
      </Reveal>
    </section>
  )
}
