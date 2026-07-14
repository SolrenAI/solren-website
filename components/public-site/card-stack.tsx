import type { CSSProperties, ReactNode } from "react"
import { Check } from "lucide-react"

/* The card-stack primitive. ONE definition of the row surface, shared by the
   /how-it-works hero (enquiry → reply → booked) and the /pricing proof stack
   (two jobs → both booked). Do not re-declare these classes anywhere else; if a
   stack needs a different surface, it is not this primitive.

   The final row is filled blue with a left check mark. That grammar means "the
   good thing that happened" — the outcome, never a cost line. */

/* Both plain variants collapse to the same surface at lg; they differ only on
   phones, where the hero's second card sits one step brighter than its first. */
const ROW_BASE =
  "rounded-[18px] border px-3.5 py-3 lg:rounded-xl lg:border-white/[0.05] lg:bg-white/[0.012] lg:px-4 lg:py-4"
const ROW_QUIET = "border-white/[0.06] bg-white/[0.03]"
const ROW_RAISED = "border-white/[0.09] bg-white/[0.045]"

const OUTCOME_ROW =
  "flex items-center gap-3 rounded-[18px] border border-[#537FEA]/40 bg-[#537FEA]/[0.12] px-3.5 py-3.5 lg:gap-3.5 lg:rounded-xl lg:px-4 lg:py-4"
const OUTCOME_MARK =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#537FEA] text-black"

export function CardStack({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`space-y-2.5 lg:space-y-3 ${className}`}>{children}</div>
}

export function CardStackRow({
  children,
  variant = "quiet",
  className = "",
  style,
}: {
  children: ReactNode
  variant?: "quiet" | "raised"
  className?: string
  style?: CSSProperties
}) {
  const surface = variant === "raised" ? ROW_RAISED : ROW_QUIET
  return (
    <div className={`${ROW_BASE} ${surface} ${className}`} style={style}>
      {children}
    </div>
  )
}

export function CardStackOutcomeRow({
  children,
  className = "",
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={`${OUTCOME_ROW} ${className}`} style={style}>
      <span className={OUTCOME_MARK}>
        <Check className="h-4 w-4" strokeWidth={2.6} />
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </div>
  )
}
