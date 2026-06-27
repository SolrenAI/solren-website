/* Proof element: ONE result stat + ONE named testimonial.
   All content is a TODO placeholder — fill these in, do not ship as-is. */
type SocialProofProps = {
  stat?: string
  statLabel?: string
  quote?: string
  name?: string
  town?: string
  trade?: string
  className?: string
}

export function SocialProof({
  stat,
  statLabel,
  quote,
  name,
  town,
  trade,
  className = "",
}: SocialProofProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8 ${className}`}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
        {/* Result stat — TODO: replace with one real number */}
        <div>
          <p className="text-[clamp(1.8rem,4vw,2.4rem)] font-medium tracking-tight text-white">
            {stat ?? "TODO: stat"}
          </p>
          <p className="mt-1 text-[13px] text-[var(--muted)]">
            {statLabel ?? "TODO: what the number means"}
          </p>
        </div>
        {/* Named testimonial — TODO: replace with one real quote */}
        <figure>
          <blockquote className="text-[16px] leading-[1.6] text-[var(--silver)]">
            {quote ?? "TODO: one short customer quote"}
          </blockquote>
          <figcaption className="mt-3 text-[13px] text-[var(--muted)]">
            {name ?? "TODO: name"}, {town ?? "TODO: town"} · {trade ?? "TODO: trade"}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
