import { ImageResponse } from "next/og"

/* Dynamic social share card. On-brand: black ground, silver headline, a single
   orange spark — same language as the site, no extra image assets. Next uses
   this file for both og:image and twitter:image across the site. */
export const alt = "Solren. Reply faster. Book more jobs."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(120% 90% at 100% 100%, rgba(83, 127, 234,0.16) 0%, transparent 55%), radial-gradient(90% 70% at 0% 0%, rgba(18,32,54,0.6) 0%, transparent 60%), #050608",
        }}
      >
        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              background: "#537FEA",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "8px",
              textTransform: "uppercase",
              color: "#8f929b",
            }}
          >
            Follow-up system · for the trades
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-3px",
              color: "#f6f7f9",
            }}
          >
            Reply faster.
          </div>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-3px",
              color: "#f6f7f9",
            }}
          >
            Book more jobs.
          </div>
          <div
            style={{
              marginTop: "32px",
              fontSize: "30px",
              lineHeight: 1.4,
              color: "#ccced4",
              maxWidth: "780px",
            }}
          >
            Solren catches new enquiries, replies in seconds, and follows up until
            the job is booked.
          </div>
        </div>

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#ffffff",
            }}
          >
            Solren
          </div>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "9999px",
              background: "#537FEA",
            }}
          />
          <div style={{ fontSize: "26px", color: "#8f929b" }}>solren.ai</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
