import Image from "next/image"
import type { LucideIcon } from "lucide-react"

/**
 * ImageFrame: an art-directed photographic slot.
 *
 * With `src`, it renders a real local photo through next/image (tunable fit and
 * focal point) under a subtle dark overlay so it sits in the dark theme and
 * keeps the caption legible. Without `src`, it falls back to a duotone, grained,
 * vignetted placeholder so the layout never looks broken.
 *
 * Local images only. `src` points at /public (e.g. "/images/plumbing/..").
 */
export function ImageFrame({
  label,
  icon: Icon,
  className = "",
  src,
  tall = false,
  priority = false,
  sizes = "(min-width: 1024px) 420px, 100vw",
  objectPosition = "center",
  fit = "cover",
  scan = false,
  aspectClass,
  hideCaption = false,
  bare = false,
  clear = false,
  alt,
}: {
  label: string
  icon: LucideIcon
  className?: string
  src?: string
  tall?: boolean
  priority?: boolean
  sizes?: string
  objectPosition?: string
  fit?: "cover" | "contain"
  scan?: boolean
  /* override the default aspect ratio (e.g. a gentler portrait for the hero) */
  aspectClass?: string
  /* hide the small in-image caption (label still used for the alt text) */
  hideCaption?: boolean
  /* meaningful alt text for the photo; falls back to the decorative label.
     The label is a styled field caption ("Electrical · on site"), so pass a
     real description (e.g. the industry name) where the image carries meaning */
  alt?: string
  /* drop the corner ticks + accent blob for calm, dense grids (decoration that
     reads as restrained on one hero shot but as noise repeated across a grid) */
  bare?: boolean
  /* lighter, clearer image treatment: softer flat tint, no heavy bottom
     gradient and no grayscale, so detail stays sharp on a large hero shot
     while keeping enough dark for premium consistency */
  clear?: boolean
}) {
  return (
    <figure
      className={`if-frame relative overflow-hidden rounded-[20px] border border-[var(--hair)] bg-[#0A0D12] ${
        bare ? "" : "ps-ticks "
      }${
        aspectClass ?? (tall ? "aspect-[3/4]" : "aspect-[4/3]")
      } ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt ?? label}
            fill
            sizes={sizes}
            priority={priority}
            className={`${
              fit === "contain" ? "object-contain" : "object-cover"
            } ${clear ? "if-photo-clear" : "if-photo"}`}
            style={{ objectPosition }}
          />
          {/* theme-aware overlays: a flat tint, a bottom gradient that keeps the
              caption readable, and a soft vignette — lighter in light mode. The
              `clear` variant softens the tint and drops the bottom gradient so a
              large captionless hero stays sharp and readable. */}
          <div className={`${clear ? "if-overlay-soft" : "if-overlay"} absolute inset-0`} />
          {!clear && <div className="if-grad absolute inset-0" />}
          <div className="if-vignette absolute inset-0" />
          {/* restrained warm accent, matching the placeholder language */}
          {!bare && (
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#537FEA]/[0.05] blur-3xl mix-blend-screen" />
          )}
          {/* single orange line scanning the frame, like work passing through */}
          {scan && (
            <div className="ps-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#537FEA]/70 to-transparent" />
          )}
        </>
      ) : (
        <>
          {/* duotone ground */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11161E] via-[#0D1117] to-[#08090C]" />
          {/* warm vignette in one corner only, restrained */}
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#537FEA]/[0.07] blur-3xl" />
          {/* scanning hairline */}
          <div className="absolute inset-x-8 top-1/2 h-px bg-white/[0.05]" />
          {/* ghost subject */}
          <Icon
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-white/[0.06]"
            strokeWidth={1}
          />
          {/* single orange line scanning the frame, like work passing through */}
          {scan && (
            <div className="ps-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#537FEA]/70 to-transparent" />
          )}
          {/* grain */}
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </>
      )}

      {/* field caption (optional — omitted on grid cards that label below) */}
      {!hideCaption && (
        <figcaption aria-hidden="true" className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#537FEA]" />
          <span className="ps-label !text-[10px] !tracking-[0.24em] text-[#9a9ca0]">{label}</span>
        </figcaption>
      )}
    </figure>
  )
}
