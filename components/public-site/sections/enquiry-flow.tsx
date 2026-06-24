import { Check, MessageSquare, RefreshCw, Send } from "lucide-react"
import { Reveal } from "../reveal"

/* Faithful evolution of the original "Solren Service Enquiry Animation" asset,
   rebalanced into one engineered composition: every lead source on the left
   funnels through converging signal paths into a single merge node, then flows
   through four stages — New enquiry → Solren replies → Solren follows up → Job
   booked — with a blue pulse travelling the rail and Job booked as the glowing
   finale. Built on a fixed 1240-unit canvas (via SVG viewBox), whose window is
   nudged left so the whole object sits centred on the page; positioning, spacing,
   hierarchy and animation flow stay exact. Only the accent (our #537FEA) and
   typography (inherited) are Solren's. */

const BLUE = "#537FEA"

/* x geometry on a wide 1500-unit canvas that fills the navbar container: the
   source list sits at the far left, the four stages spread evenly across the
   width to the right edge, and the ambient field glows behind the signal path */
const MERGE_X = 255
const RAIL_END_X = 1245

const channels = [
  { y: 60, label: "Website" },
  { y: 94, label: "Google" },
  { y: 128, label: "Facebook" },
  { y: 162, label: "Instagram" },
  { y: 196, label: "SMS" },
] as const

type StageKind = "message" | "send" | "refresh" | "check"

const stages: {
  x: number
  kind: StageKind
  iconStroke: string
  node: "hollow" | "fill" | "fillLg"
  tick: number
  halo: number
  haloR: number
  title: string
  titleFill: string
  titleWeight: number
  sub: string
  subFill: string
}[] = [
  { x: MERGE_X, kind: "message", iconStroke: "var(--ef-icon-stage)", node: "hollow", tick: 0.08, halo: 0.05, haloR: 42, title: "New enquiry", titleFill: "var(--ef-strong)", titleWeight: 500, sub: "From any channel", subFill: "var(--ef-muted)" },
  { x: 585, kind: "send", iconStroke: "var(--ef-icon-stage)", node: "fill", tick: 0.18, halo: 0.14, haloR: 42, title: "Solren replies", titleFill: "var(--ef-strong)", titleWeight: 500, sub: "In seconds", subFill: "var(--ef-muted)" },
  { x: 915, kind: "refresh", iconStroke: "var(--ef-icon-stage)", node: "fill", tick: 0.18, halo: 0.14, haloR: 42, title: "Solren follows up", titleFill: "var(--ef-strong)", titleWeight: 500, sub: "Automatically", subFill: "var(--ef-muted)" },
  { x: RAIL_END_X, kind: "check", iconStroke: "var(--ef-icon-stage)", node: "fillLg", tick: 0.24, halo: 0.22, haloR: 50, title: "Job booked", titleFill: "var(--ef-accent)", titleWeight: 500, sub: "Customer confirmed", subFill: "var(--ef-muted)" },
]

/* channel source icons — original 16-unit artwork scaled to 20px (×1.25) */
function ChannelIcon({ label, cx, cy }: { label: string; cx: number; cy: number }) {
  const stroke = {
    fill: "none",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { stroke: "var(--ef-icon)" },
  }
  return (
    <g transform={`translate(${cx - 10} ${cy - 10}) scale(1.25)`}>
      {label === "Website" && (
        <>
          <circle cx={8} cy={8} r={6} {...stroke} />
          <path d="M2 8h12" {...stroke} />
          <path d="M8 2c2.2 2 2.2 10 0 12M8 2c-2.2 2-2.2 10 0 12" {...stroke} />
        </>
      )}
      {label === "Google" && (
        <text x={8} y={12.3} textAnchor="middle" fontWeight={700} fontSize={15} style={{ fill: "var(--ef-icon)" }}>G</text>
      )}
      {label === "Facebook" && (
        <text x={8} y={12.3} textAnchor="middle" fontWeight={700} fontSize={15} style={{ fill: "var(--ef-icon)" }}>f</text>
      )}
      {label === "Instagram" && (
        <>
          <rect x={2.5} y={2.5} width={11} height={11} rx={3.2} {...stroke} />
          <circle cx={8} cy={8} r={2.6} {...stroke} />
          <circle cx={11.5} cy={4.5} r={0.6} stroke="none" style={{ fill: "var(--ef-icon)" }} />
        </>
      )}
      {label === "SMS" && (
        <path d="M2.5 4.5h11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7l-3 2.2V10.5H2.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" {...stroke} />
      )}
    </g>
  )
}

/* pipeline stage icons — original 24-unit artwork scaled to 50px (×2.0833) */
function StageIcon({ x, kind, stroke }: { x: number; kind: StageKind; stroke: string }) {
  const s = {
    fill: "none",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { stroke },
  }
  return (
    <g transform={`translate(${x - 25} 71) scale(2.08333)`}>
      {kind === "message" && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" {...s} />}
      {kind === "send" && (
        <>
          <path d="M22 2 11 13" {...s} />
          <path d="M22 2 15 22 11 13 2 9z" {...s} />
        </>
      )}
      {kind === "refresh" && (
        <>
          <path d="M21 12a9 9 0 1 1-3-6.7L21 8" {...s} />
          <path d="M21 3v5h-5" {...s} />
        </>
      )}
      {kind === "check" && <path d="M20 6 9 17l-5-5" {...s} />}
    </g>
  )
}

const mobileStageIcons = [MessageSquare, Send, RefreshCw, Check] as const

export function EnquiryFlow() {
  return (
    <section className="relative overflow-hidden pb-14 pt-2 sm:pb-16 sm:pt-4 lg:-mt-24 lg:pb-16 lg:pt-24">
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          {/* Compact responsive flow for phones and tablets. It keeps the same
              story as the wide diagram without horizontal scrolling. */}
          <div className="lg:hidden">
            <div className="text-center">
              <span className="ps-label !text-[10px]">Enquiries from</span>
              <div className="mx-auto mt-4 flex max-w-[34rem] flex-wrap justify-center gap-2">
                {channels.map((channel) => (
                  <span
                    key={channel.label}
                    className="rounded-full border border-[var(--hair)] bg-white/[0.02] px-3 py-1.5 text-[12px] font-medium text-[var(--silver)]"
                  >
                    {channel.label}
                  </span>
                ))}
              </div>
            </div>

            <ol className="relative mx-auto mt-7 grid max-w-[42rem] grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              {stages.map((stage, index) => {
                const Icon = mobileStageIcons[index]!
                const last = index === stages.length - 1
                return (
                  <li
                    key={stage.title}
                    className={`relative flex min-h-[76px] items-center gap-4 rounded-2xl border px-4 py-3.5 ${
                      last
                        ? "border-[#537FEA]/35 bg-[#537FEA]/[0.08]"
                        : "border-[var(--hair)] bg-white/[0.015]"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                        last
                          ? "border-[#537FEA]/50 bg-[#537FEA]/[0.16] text-[#b8c8f4]"
                          : "border-[var(--hair-strong)] bg-[var(--card)] text-[var(--muted-blue)]"
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[15px] font-medium text-white">{stage.title}</p>
                      <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">{stage.sub}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="hidden lg:block">
          <svg
            viewBox="0 0 1500 276"
            role="img"
            aria-label="Enquiry channels Website, Google, Facebook, Instagram and SMS all merge into one system: new enquiry, Solren replies, Solren follows up, job booked."
            className="h-auto w-full"
            style={{ overflow: "visible", fontFamily: "inherit" }}
            textRendering="geometricPrecision"
            shapeRendering="geometricPrecision"
          >
            <defs>
              <radialGradient id="ef-halo">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0.55" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
              </radialGradient>
              {/* ambient field — a subtle navy glow behind the signal path */}
              <radialGradient id="ef-field" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0.075" />
                <stop offset="70%" stopColor={BLUE} stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ef-railfill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="ef-comet" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0.75" />
              </linearGradient>
              <filter id="ef-glow-sm" x="-300%" y="-300%" width="700%" height="700%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor={BLUE} floodOpacity="0.55" />
              </filter>
              <filter id="ef-glow-lg" x="-300%" y="-300%" width="700%" height="700%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={BLUE} floodOpacity="0.7" />
              </filter>
              <filter id="ef-pulse" x="-400%" y="-400%" width="900%" height="900%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={BLUE} floodOpacity="0.9" />
              </filter>
            </defs>

            {/* ambient field behind the signal path */}
            <ellipse className="ef-glow" cx={750} cy={150} rx={560} ry={170} fill="url(#ef-field)" />

            {/* eyebrow */}
            <text x={6} y={8} dominantBaseline="hanging" fontSize={13} fontWeight={600} style={{ fill: "var(--ef-eyebrow)", letterSpacing: "0.16em" }}>
              ENQUIRIES FROM
            </text>

            {/* converging connector curves — static base */}
            {channels.map((c) => (
              <path key={`s${c.y}`} d={`M170 ${c.y} C 205 ${c.y}, 230 178, ${MERGE_X} 178`} fill="none" strokeWidth={1} style={{ stroke: "var(--ef-line-soft)" }} />
            ))}
            {/* converging connector curves — animated blue signal flow */}
            {channels.map((c) => (
              <path className="ef-motion" key={`b${c.y}`} d={`M170 ${c.y} C 205 ${c.y}, 230 178, ${MERGE_X} 178`} fill="none" stroke={BLUE} strokeOpacity={0.56} strokeWidth={1} strokeDasharray="2 12">
                <animate attributeName="stroke-dashoffset" values="0;-140" dur="2.4s" repeatCount="indefinite" />
              </path>
            ))}

            {/* channel sources: icon, label, convergence dot */}
            {channels.map((c) => (
              <g key={c.label}>
                <ChannelIcon label={c.label} cx={16} cy={c.y} />
                <text x={40} y={c.y} dominantBaseline="central" fontSize={20} fontWeight={500} style={{ fill: "var(--ef-text)", letterSpacing: "-0.01em" }}>
                  {c.label}
                </text>
                <circle cx={170} cy={c.y} r={3} style={{ fill: "var(--ef-dot)" }} />
              </g>
            ))}

            {/* main horizontal rail */}
            <line x1={MERGE_X} y1={178} x2={RAIL_END_X} y2={178} strokeWidth={1.5} style={{ stroke: "var(--ef-line)" }} />

            {/* blue rail fill that grows as the signal travels, then resets */}
            <rect className="ef-motion" x={MERGE_X} y={177.25} height={1.5} width={0} fill="url(#ef-railfill)">
              <animate attributeName="width" values={`0;0;${RAIL_END_X - MERGE_X};${RAIL_END_X - MERGE_X}`} keyTimes="0;0.05;0.82;1" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;1;1;0" keyTimes="0;0.05;0.82;1" dur="4s" repeatCount="indefinite" />
            </rect>

            {/* the three pipeline stages */}
            {stages.map((s) => (
              <g key={s.x}>
                <line x1={s.x} y1={148} x2={s.x} y2={178} stroke={BLUE} strokeOpacity={s.tick} strokeWidth={1} />
                {s.halo > 0 && <circle cx={s.x} cy={96} r={s.haloR} fill="url(#ef-halo)" opacity={s.halo} />}
                <StageIcon x={s.x} kind={s.kind} stroke={s.iconStroke} />
                {s.node === "hollow" && <circle cx={s.x} cy={178} r={6.5} fill="none" strokeWidth={1.5} style={{ stroke: "var(--ef-hollow)" }} />}
                {s.node === "fill" && <circle cx={s.x} cy={178} r={6.5} fill="rgb(90,104,142)" filter="url(#ef-glow-sm)" />}
                {s.node === "fillLg" && <circle cx={s.x} cy={178} r={7} fill="rgb(98,118,166)" filter="url(#ef-glow-lg)" />}
                <text x={s.x} y={230} textAnchor="middle" fontSize={21} fontWeight={s.titleWeight} style={{ fill: s.titleFill, letterSpacing: "-0.014em" }}>
                  {s.title}
                </text>
                <text x={s.x} y={256} textAnchor="middle" fontSize={14} fontWeight={400} style={{ fill: s.subFill, letterSpacing: "-0.005em" }}>
                  {s.sub}
                </text>
              </g>
            ))}

            {/* the travelling signal pulse: comet trail + bright head */}
            <g className="ef-motion">
              <rect y={176.5} height={3} rx={1.5} width={64} fill="url(#ef-comet)">
                <animate attributeName="x" values={`${MERGE_X - 64};${MERGE_X - 64};${RAIL_END_X - 64};${RAIL_END_X - 64}`} keyTimes="0;0.05;0.82;1" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.05;0.82;1" dur="4s" repeatCount="indefinite" />
              </rect>
              <circle cy={178} r={7.5} filter="url(#ef-pulse)" style={{ fill: "var(--ef-pulse)" }}>
                <animate attributeName="cx" values={`${MERGE_X};${MERGE_X};${RAIL_END_X};${RAIL_END_X}`} keyTimes="0;0.05;0.82;1" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.82;1" dur="4s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
