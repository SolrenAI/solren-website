"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

/* Very subtle bottom-left theme toggle. Dark is the default; light is a clean
   white / soft-grey variant. Choice persists in localStorage and is applied to
   <html data-theme> (a no-flash script in the layout sets it before paint).
   Hidden-ish by default (low opacity), clearer on hover, icon-only with a
   hover-revealed label. Never covers content; works on mobile. */
type Theme = "dark" | "light"

function applyTheme(theme: Theme) {
  if (theme === "light") document.documentElement.dataset.theme = "light"
  else delete document.documentElement.dataset.theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    let saved: Theme = "dark"
    try {
      if (localStorage.getItem("solren-theme") === "light") saved = "light"
    } catch {}
    setTheme(saved)
    applyTheme(saved)
  }, [])

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    applyTheme(next)
    try {
      localStorage.setItem("solren-theme", next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="group fixed bottom-3 left-3 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--hair-strong)] bg-[var(--card)] text-[var(--silver)] opacity-75 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 hover:opacity-100 hover:text-[var(--white)] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#537FEA]/50 sm:bottom-4 sm:left-4 sm:h-9 sm:w-9 sm:opacity-65"
    >
      {/* In dark mode show the sun (switch to light); in light mode show the moon */}
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={1.7} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.7} />
      )}
      {/* subtle label appears only on hover */}
      <span className="pointer-events-none absolute left-[44px] whitespace-nowrap rounded-full border border-[var(--hair)] bg-[var(--card)] px-2.5 py-1 text-[11px] font-medium text-[var(--silver)] opacity-0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.4)] transition-opacity duration-200 group-hover:opacity-100">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  )
}
