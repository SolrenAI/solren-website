/*
 * Payment methods for the footer — elegant text labels (equal weight, no boxes,
 * no outlines) with a subtle Solren-blue separator so the row isn't all grey.
 * Text reads as official method names and themes cleanly in dark and light mode.
 */

const methods = [
  "Apple Pay",
  "Google Pay",
  "Visa",
  "Mastercard",
  "American Express",
  "Link",
]

export function PaymentMarks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2.5 gap-y-1.5 opacity-90 ${className}`}>
      {/* every method carries the same leading dot — identical size, colour,
          opacity and baseline (the one before Apple Pay reads as the lead) */}
      {methods.map((m) => (
        <span key={m} className="inline-flex items-center gap-x-2.5">
          <span aria-hidden="true" className="text-[var(--spark-deep)]">
            &middot;
          </span>
          <span className="whitespace-nowrap text-[12px] font-medium tracking-tight text-[var(--muted)] transition-colors duration-200 hover:text-[var(--spark)]">
            {m}
          </span>
        </span>
      ))}
    </div>
  )
}
