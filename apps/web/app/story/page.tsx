import Link from "next/link";
import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-4 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400">
              LUMEN ATELIER
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              A modern clothing studio inspired by night cities, soft light, and
              precise architecture.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Lumen Atelier was founded around a simple idea: build a wardrobe
              of pieces that feel as considered as a gallery space, yet as easy
              as your favorite tee. Each capsule focuses on a small family of
              silhouettes, reworked through fabric, proportion, and subtle
              detail.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Shapes are drawn from the lines of nocturnal city architecture:
              softened corners, elongated profiles, and clean vertical breaks.
              We balance this structure with tactility—brushed wools, compact
              knits, and cotton poplins that catch and diffuse light.
            </p>
            <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="text-2xl font-semibold">48h</p>
                <p className="text-xs text-slate-400">
                  Average time from first sketch to toile on the cutting table.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-semibold">92%</p>
                <p className="text-xs text-slate-400">
                  Of fabrics sourced from certified mills across Europe.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-semibold">3</p>
                <p className="text-xs text-slate-400">
                  Curated drops per season to keep the wardrobe focused.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/new-arrivals"
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-5 py-3 text-xs font-semibold tracking-[0.22em] text-slate-950 transition hover:bg-white"
              >
                SHOP THE LATEST DROP
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 text-xs font-semibold tracking-[0.22em] text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
              >
                BACK TO STUDIO
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80">
              <Image
                src="https://images.pexels.com/photos/6311659/pexels-photo-6311659.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Studio rail with Lumen Atelier garments"
                width={800}
                height={600}
                className="h-64 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-4 text-xs text-slate-100">
                <p className="font-medium tracking-[0.2em]">
                  STUDIO RAIL · WINTER 24
                </p>
                <p className="text-[11px] text-slate-300">
                  First fittings for Capsule I, photographed in our Berlin
                  studio.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-300">
                CUSTOMERS
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                “Every piece feels like it was designed for the way I actually
                live. Clean, easy, but with enough structure that I feel put
                together in every room I walk into.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-full border border-slate-700">
                  <Image
                    src="https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Customer portrait"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-100">
                    Amira Cole
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Creative Director, Berlin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

