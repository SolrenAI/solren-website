import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

/* Dynamic social share card. One job: communicate the core promise instantly —
   "Never lose another lead." — on a premium dark ground with a single blue accent,
   plus a small solren.ai wordmark at the foot. No tagline, no supporting copy. */
export const alt = "Solren — Never lose another lead."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const interTightBold = await readFile(
    fileURLToPath(new URL("./InterTight-Bold.ttf", import.meta.url))
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "70px",
          fontFamily: "Inter Tight",
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(83,127,234,0.16) 0%, rgba(83,127,234,0) 55%), radial-gradient(80% 60% at 50% 50%, rgba(83,127,234,0.06) 0%, rgba(83,127,234,0) 70%), #050608",
        }}
      >
        {/* core promise — the whole message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-5px",
              color: "#F6F7F9",
            }}
          >
            Never lose
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-5px",
            }}
          >
            <span style={{ color: "#F6F7F9", marginRight: "28px" }}>another</span>
            <span style={{ color: "#537FEA" }}>lead.</span>
          </div>
        </div>

        {/* small brand mark at the foot */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "#8f929b",
          }}
        >
          solren.ai
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter Tight",
          data: interTightBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  )
}
