/**
 * SolrenMark: the brand logomark. A precise aperture/sun: a thin silver
 * ring around a single electric-blue core. The core is the one blue accent in
 * the identity. Geometric, calm, recognizable.
 */
export function SolrenMark({
  className = "",
  size = 22,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* outer aperture ring */}
      <circle cx="12" cy="12" r="9" stroke="#C9CBCE" strokeWidth="1.1" strokeOpacity="0.85" />
      {/* aperture blades: four fine ticks */}
      <path d="M12 3.4V6M12 18v2.6M3.4 12H6M18 12h2.6" stroke="#9A9CA0" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
      {/* warm core */}
      <circle cx="12" cy="12" r="3.4" fill="#537FEA" />
      <circle cx="12" cy="12" r="3.4" stroke="#86A2F0" strokeWidth="0.6" strokeOpacity="0.5" />
    </svg>
  )
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SolrenMark size={20} />
      <span
        className="text-[15px] font-medium tracking-[0.16em] text-[#ECECEA]"
        style={{ fontVariantCaps: "all-small-caps" }}
      >
        SOLREN
      </span>
    </span>
  )
}
