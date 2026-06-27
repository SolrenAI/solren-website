"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Reveal } from "./reveal"
import { HelpCard } from "./help-card"
import type { HelpArticle } from "./help-data"

/* Client index for the Help Centre: a search box that filters the article
   cards, with results grouped by category. Restrained and typography-first. */
export function HelpIndex({
  categories,
  articles,
}: {
  categories: { id: string; label: string }[]
  articles: HelpArticle[]
}) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return articles
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)
    )
  }, [query, articles])

  return (
    <div>
      {/* search */}
      <div className="relative mx-auto max-w-xl">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--faint)]"
          strokeWidth={1.8}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search help articles..."
          aria-label="Search help articles"
          className="w-full rounded-full border border-white/[0.1] bg-white/[0.02] py-3.5 pl-11 pr-4 text-[15px] text-white placeholder:text-[var(--faint)] outline-none transition-colors hover:border-white/20 focus:border-[#537FEA]/50 focus:bg-white/[0.03]"
        />
      </div>

      <div className="mt-3 space-y-8 sm:mt-7 sm:space-y-7">
        {categories.map((cat) => {
          const items = filtered.filter((a) => a.category === cat.id)
          if (items.length === 0) return null
          return (
            <Reveal key={cat.id}>
              <div>
                <h2 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/55">
                  {cat.label}
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-[13px] sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {items.map((a) => (
                    <HelpCard
                      key={a.slug}
                      title={a.title}
                      summary={a.summary}
                      href={`/help/${a.slug}`}
                      accent
                      light
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}

        {filtered.length === 0 && (
          <p className="text-center text-[14.5px] text-[var(--muted)]">
            No articles match that search. Try a different term, or email{" "}
            <a
              href="mailto:contact@solren.ai"
              className="text-[var(--silver)] underline-offset-2 hover:underline"
            >
              contact@solren.ai
            </a>
            .
          </p>
        )}
      </div>
    </div>
  )
}
