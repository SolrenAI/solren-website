import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "../reveal"
import { faqs } from "../faq-data"

export function FaqPreview() {
  const preview = faqs.slice(0, 4)
  return (
    <section className="relative py-16 sm:py-20 lg:py-36">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* Left: heading, sticky */}
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="ps-label">Questions</span>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] ps-silver">
              Before the demo.
            </h2>
            <Link
              href="/faq"
              className="group mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-white"
            >
              Read all questions
              <ArrowUpRight className="h-4 w-4 text-[#537FEA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* Right: editorial Q/A rows */}
        <div>
          {preview.map((f, i) => (
            <Reveal key={f.q} delay={i * 70}>
              <div className="border-t border-[var(--hair)] py-6 sm:py-8 first:border-t-0 first:pt-0">
                <h3 className="text-[18px] font-medium tracking-tight text-white">
                  {f.q}
                </h3>
                <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[var(--silver)]">
                  {f.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
