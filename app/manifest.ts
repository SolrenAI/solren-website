import type { MetadataRoute } from "next"

/* Web app manifest. Colors match the site ground and viewport themeColor so
   the install/splash chrome stays on-brand. The 1024x1024 app icon is declared
   at the standard PWA sizes; browsers resample as needed. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Solren",
    short_name: "Solren",
    description:
      "Solren installs a follow-up system for service businesses: reply faster, recover missed leads, less admin, more booked jobs.",
    start_url: "/",
    display: "standalone",
    background_color: "#050608",
    theme_color: "#050608",
    icons: [
      {
        src: "/logos/solren-app-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logos/solren-app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logos/solren-app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
