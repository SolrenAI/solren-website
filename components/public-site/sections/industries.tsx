import { Reveal } from "../reveal"
import { ImageFrame } from "../image-frame"
import {
  Zap,
  HardHat,
  Wind,
  Droplets,
  SprayCan,
  Hammer,
  Trees,
  Bug,
  type LucideIcon,
} from "lucide-react"

type Trade = {
  name: string
  label: string
  icon: LucideIcon
  src?: string
  objectPosition?: string
}

const trades: Trade[] = [
  {
    name: "Electricians",
    label: "Electrical · on site",
    icon: Zap,
    src: "/images/trades/electrician-01.jpg",
    objectPosition: "center",
  },
  {
    name: "Roofers",
    label: "Roofing · at height",
    icon: HardHat,
    src: "/images/trades/roofer-01.jpg",
    objectPosition: "50% 40%",
  },
  {
    name: "HVAC",
    label: "HVAC · rooftop",
    icon: Wind,
    src: "/images/trades/hvac-01.webp",
    objectPosition: "center",
  },
  {
    name: "Plumbers",
    label: "Plumbing · call out",
    icon: Droplets,
    src: "/images/trades/leak-callout.webp",
    objectPosition: "70% center",
  },
  {
    name: "Cleaners",
    label: "Cleaning · crew",
    icon: SprayCan,
    src: "/images/trades/cleaner-01.jpg",
    objectPosition: "center",
  },
  {
    name: "Builders",
    label: "Building · on site",
    icon: Hammer,
    src: "/images/trades/builder-01.jpg",
    objectPosition: "50% 65%",
  },
  {
    name: "Landscapers",
    label: "Landscaping · grounds",
    icon: Trees,
    src: "/images/trades/landscaper-01.jpg",
    objectPosition: "center",
  },
  {
    name: "Pest control",
    label: "Pest control · field",
    icon: Bug,
    src: "/images/trades/pest-01.jpg",
    objectPosition: "40% center",
  },
]

function Card({ name, label, icon, src, objectPosition }: Trade) {
  return (
    <div className="w-[280px] shrink-0 sm:w-[320px]">
      <ImageFrame
        label={label}
        icon={icon}
        src={src}
        objectPosition={objectPosition}
        sizes="320px"
        hideCaption
      />
      <div className="mt-4 px-1">
        <span className="text-[15px] font-medium text-white">{name}</span>
      </div>
    </div>
  )
}

export function Industries() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--hair)] bg-[#0A0D12] py-28 sm:py-36">
      <div className="mx-auto mb-14 max-w-[1240px] px-6">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="ps-label">Industries</span>
              <h2 className="mt-6 text-[clamp(2.2rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.02em] text-white">
                Built for the trades.
              </h2>
            </div>
            <p className="max-w-xs text-[14.5px] leading-relaxed text-[var(--muted)]">
              One system, shaped to the way each trade wins work.
            </p>
          </div>
        </Reveal>
      </div>

      {/* drifting gallery: pauses on hover, edges faded */}
      <div className="ps-marquee-wrap relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0D12] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0D12] to-transparent" />
        <div className="ps-marquee flex w-max gap-5 px-6">
          {[...trades, ...trades].map((t, i) => (
            <Card key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
