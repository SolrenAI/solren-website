"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"

type SubLink = { label: string; href: string; all?: boolean }
type NavItem = { label: string; href: string; children?: SubLink[] }

const industries: SubLink[] = [
  { label: "Electricians", href: "/electricians" },
  { label: "Plumbers", href: "/plumbers" },
  { label: "Roofers", href: "/roofers" },
  { label: "HVAC", href: "/hvac" },
  { label: "Builders", href: "/builders" },
  { label: "Landscapers", href: "/landscapers" },
  { label: "View all industries", href: "/industries", all: true },
]

const company: SubLink[] = [
  { label: "Why Solren", href: "/why-solren" },
  { label: "Our Story", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Trust", href: "/trust" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

/* Solren header lock: do not change header layout, spacing, logo position, CTA
   position or nav order unless explicitly requested. Only the nav items change
   on request. */

/* Active rules — an item highlights on its own page or any page inside its
   dropdown; Industries also owns the top-level industry detail routes; the
   homepage "/" highlights nothing.
   - Platform → /how-it-works
   - Industries → /industries + every industry detail route
   - Pricing → /pricing
   - Company → /about, /careers, /contact, /why-solren, /trust, /privacy, /terms */
const links: NavItem[] = [
  { label: "Platform", href: "/how-it-works" },
  { label: "Industries", href: "/industries", children: industries },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about", children: company },
]

/* Top-level industry detail routes, so the Industries tab stays active on the
   individual pages (not just the listing). Keep in sync with the industry pages. */
const industryRoutes = new Set([
  "/electricians", "/plumbers", "/roofers", "/hvac", "/builders", "/landscapers",
  "/cleaners", "/pest-control", "/painters", "/concreters", "/pool-services", "/handyman",
])

function isActive(pathname: string, item: NavItem): boolean {
  if (pathname === "/") return false
  if (pathname === item.href) return true
  if (item.children?.some((c) => pathname === c.href)) return true
  if (item.href === "/industries" && industryRoutes.has(pathname)) return true
  return false
}

/* Nav link: 14px / medium / muted grey. Active or hovered → white. Active is the
   subtle, premium signal (brighter text), never an orange block. */
function navLinkClass(active: boolean): string {
  return `inline-flex h-9 items-center leading-none text-[13px] font-medium transition-colors ${
    active ? "text-white" : "text-[#8f8f8f] hover:text-white"
  }`
}

/* Desktop dropdown: opens on intentional hover only, closes on mouse-out, on
   focus leaving the group, on Escape (which returns focus to the trigger), on
   outside click, on route change, and whenever the window loses focus or the tab
   is hidden. It deliberately does NOT open on focus alone, so returning to the
   browser tab (which restores focus to the trigger) never re-opens the menu. No
   heavy animation — a 150ms opacity fade only. */
function NavDropdown({ item, active, className = "" }: { item: NavItem; active: boolean; className?: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLAnchorElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  /* Always close when the route changes so navigating never leaves a menu open. */
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  /* Force-close on window blur, tab-hidden and outside click. Returning to the
     tab keeps the menu closed until the user hovers again. */
  useEffect(() => {
    const close = () => setOpen(false)
    const onVisibility = () => {
      if (document.hidden) setOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener("blur", close)
    document.addEventListener("visibilitychange", onVisibility)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      window.removeEventListener("blur", close)
      document.removeEventListener("visibilitychange", onVisibility)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className={`relative flex items-center ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false)
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false)
          triggerRef.current?.focus()
        }
      }}
    >
      <Link
        ref={triggerRef}
        href={item.href}
        aria-haspopup="true"
        aria-expanded={open}
        aria-current={active ? "page" : undefined}
        className={`inline-flex items-center gap-1.5 ${navLinkClass(active)}`}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 text-[#6f6f6f] transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        />
      </Link>

      {/* pt-3 forms a hover bridge so the menu does not close in the gap */}
      <div
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-opacity duration-150 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="min-w-[208px] rounded-xl border border-[var(--hair)] bg-[#0D1117] p-1.5 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.9)]">
          {item.children!.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              tabIndex={open ? 0 : -1}
              className={`flex items-center justify-between gap-6 rounded-lg px-3 py-2 text-[13px] transition-colors hover:bg-white/[0.04] hover:text-white ${
                c.all
                  ? "mt-1 border-t border-[var(--hair)] pt-2.5 text-white"
                  : "text-[#8f8f8f]"
              }`}
            >
              {c.label}
              {c.all && <ArrowUpRight className="h-3.5 w-3.5 text-[#537FEA]" aria-hidden="true" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PublicNav() {
  const pathname = usePathname() ?? "/"
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.05] bg-[#08090C]">
      {/* One compact bar: logo + nav grouped left, CTA far right. */}
      <div className="mx-auto flex h-[50px] max-w-[1240px] items-center px-5 sm:px-6 lg:h-[56px]">
        {/* left zone: logo anchors the left of the header container */}
        <div className="flex flex-1 items-center justify-start">
          <Link
            href="/"
            aria-label="Solren home"
            className="-my-1 inline-flex items-center py-1"
          >
            <Image
              src="/logos/solren-wordmark-blue-s.png"
              alt="Solren"
              width={1305}
              height={183}
              priority
              sizes="210px"
              className="h-[28px] w-auto sm:h-[29px]"
            />
          </Link>
        </div>

        {/* centre zone: the four nav links, dead-centred via equal flex-1 sides */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => {
            const active = isActive(pathname, l)
            return l.children ? (
              <NavDropdown key={l.label} item={l} active={active} />
            ) : (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={navLinkClass(active)}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* right zone: CTA (desktop) / menu toggle (mobile), anchors the right */}
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="/contact"
            className="group hidden h-9 items-center gap-1.5 rounded-full border border-[var(--hair-strong)] bg-white/[0.02] px-[18px] text-[13.5px] font-medium text-white transition-colors hover:border-[#537FEA]/50 hover:bg-[#537FEA]/[0.06] lg:inline-flex"
          >
            Book a call
            <ArrowUpRight className="h-3.5 w-3.5 text-[#537FEA] transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
          </Link>

          <button
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-[#8f8f8f] transition-colors hover:bg-white/[0.04] hover:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-50px)] overflow-y-auto border-t border-[var(--hair)] bg-[#08090C] px-5 pb-5 pt-3 sm:px-6 lg:hidden"
        >
          <div className="flex flex-col">
            {links.map((l) => {
              const active = isActive(pathname, l)
              return l.children ? (
                <details key={l.label} className="group/mobile border-b border-[var(--hair)]">
                  <summary
                    className={`flex min-h-12 cursor-pointer list-none items-center justify-between py-2 text-[16px] font-medium ${
                      active ? "text-white" : "text-[var(--silver)]"
                    }`}
                  >
                    {l.label}
                    <ChevronDown className="h-4 w-4 text-[var(--muted)] transition-transform group-open/mobile:rotate-180" />
                  </summary>
                  <div className="mb-3 ml-1 flex flex-col border-l border-[var(--hair)] pl-4">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-11 items-center gap-1.5 py-2 text-[14px] ${
                          c.all ? "text-white" : "text-[var(--silver)] hover:text-[#86A2F0]"
                        }`}
                      >
                        {c.label}
                        {c.all && <ArrowUpRight className="h-3.5 w-3.5 text-[#537FEA]" aria-hidden="true" />}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-[var(--hair)] py-2 text-[16px] font-medium ${active ? "text-white" : "text-[var(--silver)]"}`}
                >
                  {l.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-[#537FEA] px-[18px] text-[15px] font-medium text-black"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 text-black" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
