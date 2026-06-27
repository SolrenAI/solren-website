import Image from "next/image"
import { Reveal } from "../reveal"

/* A quiet product-proof moment: one wide screenshot of the real Solren command
   centre. The full image stays in place — a bottom-fading mask makes only the
   top ~55% fully opaque and dissolves the lower portion (and its subtle frame)
   into the page ground, so the dashboard rows trail off softly instead of ending
   in a hard edge. No mockup, frame, glow, caption or separate overlay. */
export function ProductProof() {
  return (
    <section className="relative pt-2 pb-1 sm:py-4 lg:pt-4 lg:pb-2">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          {/* Plain product name so the screenshot reads as the real Solren
              Dashboard, not a floating image. Sits tight above the frame. */}
          <span className="ps-label block">Solren Dashboard</span>
          <figure
            /* Mobile: a fixed aspect box (card size unchanged). The ultra-wide
               (~2:1) screenshot is shown WHOLE inside it (object-contain) anchored
               top-left, so the Solren logo, the left sidebar and the full dashboard
               are never cropped — the only empty space sits at the bottom, where
               the fade mask already dissolves it. Desktop (sm+) drops the box and
               shows the full image at its natural ratio, unchanged. */
            className="mt-2 aspect-[2/1] overflow-hidden rounded-[20px] border border-[var(--hair)] bg-[var(--ground)] sm:mt-3 sm:aspect-auto lg:mt-2.5"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 55%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            }}
          >
            <Image
              src="/images/homepage/dashboard.png"
              alt="The Solren command centre: incoming enquiries, drafted replies and follow-ups in one managed dashboard"
              width={2557}
              height={1268}
              sizes="(min-width: 1024px) 1240px, 100vw"
              /* Mobile: whole image, no crop, anchored top-left (logo + sidebar
                 always fully visible). Desktop reverts to the full natural image. */
              className="block h-full w-full object-contain object-left-top sm:h-auto sm:object-contain"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
