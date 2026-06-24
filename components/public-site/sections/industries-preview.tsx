import Link from "next/link"
import { Reveal } from "../reveal"
import { ImageFrame } from "../image-frame"
import { Zap, Droplets, HardHat, Wind, ArrowUpRight, type LucideIcon } from "lucide-react"

/* Editorial bento of real trade photography: one large feature image with three
   smaller cards, so the section reads as a considered visual block rather than a
   flat row. Full industries list lives on /industries. */
type Trade = {
  name: string
  label: string
  icon: LucideIcon
  src: string
  /* optional desktop-only (lg+) photo override; mobile/tablet keep `src` */
  srcDesktop?: string
  objectPosition: string
  span: string
}

const trades: Trade[] = [
  {
    name: "Electricians",
    label: "Electrical · on site",
    icon: Zap,
    src: "/images/trades/electricians/home-electrician-v2.jpg",
    objectPosition: "50% 20%",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Plumbers",
    label: "Plumbing · call out",
    icon: Droplets,
    src: "/images/trades/plumbing/home-plumbing.webp",
    objectPosition: "center",
    span: "lg:col-start-3 lg:row-start-1",
  },
  {
    name: "Roofers",
    label: "Roofing · at height",
    icon: HardHat,
    src: "/images/trades/roofers/home-roofing.webp",
    objectPosition: "50% 40%",
    span: "lg:col-start-4 lg:row-start-1",
  },
  {
    name: "HVAC",
    label: "HVAC · rooftop",
    icon: Wind,
    src: "/images/trades/hvac/home-hvac.jpg",
    objectPosition: "center",
    span: "lg:col-start-3 lg:col-span-2 lg:row-start-2",
  },
]

export function IndustriesPreview() {
  return (
    <section className="relative py-16 sm:py-24 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <div className="mb-7 sm:mb-8">
            <span className="ps-label">Who it&apos;s for</span>
            <h2 className="mt-5 max-w-xl text-[clamp(1.7rem,7.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] sm:mt-6 sm:leading-[1.05]">
              <span className="ps-silver">Built for teams customers call</span>{" "}
              <span className="text-[var(--muted)]">when something needs fixing.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--silver)]">
              For electricians, plumbers, roofers, HVAC and service businesses
              that need every enquiry answered, followed up and moved forward.
            </p>
            <Link
              href="/industries"
              className="group mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-white"
            >
              See industries
              <ArrowUpRight className="h-4 w-4 text-[#537FEA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* editorial bento: one feature image + three smaller cards */}
        <Reveal delay={80}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:h-[430px] lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
            {trades.map((t, i) => {
              const Icon = t.icon
              return (
                <div key={t.name} className={`group relative ${t.span}`}>
                  <ImageFrame
                    label={t.name}
                    icon={Icon}
                    src={t.src}
                    srcDesktop={t.srcDesktop}
                    objectPosition={t.objectPosition}
                    sizes={i === 0 ? "(min-width:1024px) 600px, (min-width:640px) 50vw, 100vw" : "(min-width:1024px) 300px, (min-width:640px) 50vw, 100vw"}
                    hideCaption
                    aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
                  />
                  {/* clean label overlay — feature label a touch larger/dominant */}
                  <span
                    className={`pointer-events-none absolute z-20 inline-flex items-center gap-2 font-medium text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] ${
                      i === 0 ? "bottom-5 left-5 text-[16px]" : "bottom-4 left-4 text-[14.5px]"
                    }`}
                  >
                    <Icon className={`${i === 0 ? "h-[18px] w-[18px]" : "h-4 w-4"} text-[#6A8FEE]`} strokeWidth={1.8} />
                    {t.name}
                  </span>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
