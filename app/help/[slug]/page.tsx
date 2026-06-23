import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"
import {
  LAST_UPDATED,
  getArticle,
  getCategoryLabel,
  helpArticles,
} from "@/components/public-site/help-data"

export function generateStaticParams() {
  return helpArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: "Help Centre" }
  return { title: article.title, description: article.summary }
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const index = helpArticles.findIndex((a) => a.slug === slug)
  const prev = index > 0 ? helpArticles[index - 1] : null
  const next = index < helpArticles.length - 1 ? helpArticles[index + 1] : null

  return (
    <>
      <PageHeader
        eyebrow={getCategoryLabel(article.category)}
        title={<>{article.title}</>}
        sub={article.summary}
        note={`Last updated: ${LAST_UPDATED}`}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <Link
            href="/help"
            className="group inline-flex items-center gap-2 text-[13.5px] text-[var(--muted)] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All help articles
          </Link>

          <div className="mt-10 space-y-10">
            {article.body.map((s, i) => (
              <Reveal key={i} delay={i * 30}>
                <div>
                  {s.h && (
                    <h2 className="text-[19px] font-medium tracking-tight text-white">
                      {s.h}
                    </h2>
                  )}
                  <div className={s.h ? "mt-4 space-y-4" : "space-y-4"}>
                    {s.p?.map((p, j) => (
                      <p key={j} className="text-[15.5px] leading-relaxed text-[var(--silver)]">
                        {p}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="space-y-2.5 pl-1">
                        {s.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-[15.5px] leading-relaxed text-[var(--silver)]"
                          >
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#537FEA]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {article.cta && (
            <Reveal>
              <Link
                href={article.cta.href}
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-6 py-3 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                {article.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          )}

          {/* previous / next */}
          <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 border-t border-[var(--hair)] pt-8 md:mt-16 md:auto-rows-auto md:grid-cols-2 md:pt-10">
            {prev ? (
              <Link
                href={`/help/${prev.slug}`}
                className="group rounded-2xl border border-white/[0.08] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.02]"
              >
                <div className="text-left md:hidden">
                  <span className="ps-label !text-[9px] !tracking-[0.2em]">Previous</span>
                  <div className="mt-2 flex items-start gap-2 text-[14.5px] font-medium leading-snug text-white">
                    <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-[#537FEA]/80 transition-all group-hover:-translate-x-0.5 group-hover:text-[#537FEA]" />
                    <span>{prev.title}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="ps-label !text-[9px] !tracking-[0.2em]">Previous</span>
                  <div className="mt-2 flex items-center gap-2 text-[14.5px] font-medium text-white">
                    <ArrowLeft className="h-4 w-4 text-[#537FEA]/80 transition-all group-hover:-translate-x-0.5 group-hover:text-[#537FEA]" />
                    {prev.title}
                  </div>
                </div>
              </Link>
            ) : (
              <span className="hidden md:block" />
            )}
            {next && (
              <Link
                href={`/help/${next.slug}`}
                className="group rounded-2xl border border-white/[0.08] p-5 text-right transition-colors hover:border-white/20 hover:bg-white/[0.02] md:col-start-2"
              >
                <div className="text-left md:hidden">
                  <span className="ps-label !text-[9px] !tracking-[0.2em]">Next</span>
                  <div className="mt-2 flex items-start gap-2 text-[14.5px] font-medium leading-snug text-white">
                    <span>{next.title}</span>
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#537FEA]/80 transition-all group-hover:translate-x-0.5 group-hover:text-[#537FEA]" />
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="ps-label !text-[9px] !tracking-[0.2em]">Next</span>
                  <div className="mt-2 flex items-center justify-end gap-2 text-[14.5px] font-medium text-white">
                    {next.title}
                    <ArrowRight className="h-4 w-4 text-[#537FEA]/80 transition-all group-hover:translate-x-0.5 group-hover:text-[#537FEA]" />
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* still need help — quiet support close */}
          <Reveal>
            <div className="mt-12 border-t border-[var(--hair)] pt-10 text-center sm:mt-16 sm:pt-12">
              <h2 className="text-[clamp(1.4rem,2.6vw,1.8rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver">
                Still need help?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[var(--silver)]">
                Email{" "}
                <a
                  href="mailto:contact@solren.ai"
                  className="text-[#86A2F0] underline-offset-2 hover:underline"
                >
                  contact@solren.ai
                </a>{" "}
                and we&apos;ll review your request.
              </p>
              <a
                href="mailto:contact@solren.ai"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
              >
                Contact support
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
