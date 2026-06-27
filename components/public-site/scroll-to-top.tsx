"use client"

import { useEffect } from "react"

/* Forces the viewport to the top on mount. Used on post-submit pages so the
   confirmation is visible immediately rather than opening part-way down on
   mobile. Renders nothing. */
export function ScrollToTop() {
  useEffect(() => {
    // "instant" is ignored (falls back to default jump) on browsers that don't
    // support it, so it's safe to pass directly.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return null
}
