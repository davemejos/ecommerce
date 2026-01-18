import Link from "next/link";
import Image from "next/image";

export default function WomenPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-4 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400">
              WOMEN&apos;S EDIT
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Clean silhouettes, softened tailoring, and knitwear designed for
              everyday movement.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Discover women&apos;s pieces built around ease and structure.
              Column coats, fluid trousers, and elevated knits pair quietly
              together, creating a wardrobe that feels intentional without
              effort.
            </p>
            <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-[0.22em] text-slate-400">
                  OUTERWEAR
                </p>
                <p className="text-sm">
                  Longline wool coats and padded jackets in studio neutrals.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-[0.22em] text-slate-400">
                  KNITWEAR
                </p>
                <p className="text-sm">
                  Structured rib knits and brushed crewnecks for layered looks.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-[0.22em] text-slate-400">
                  TROUSERS
                </p>
                <p className="text-sm">
                  Wide-leg tailoring and soft drape trousers that sit cleanly on
                  the waist.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/new-arrivals"
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-5 py-3 text-xs font-semibold tracking-[0.22em] text-slate-950 transition hover:bg-white"
              >
                VIEW NEW IN
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 text-xs font-semibold tracking-[0.22em] text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
              >
                BACK TO STUDIO
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_100%_0,rgba(251,191,36,0.12),transparent_55%)]" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/80 shadow-[0_40px_120px_-45px_rgba(15,23,42,1)]">
              <Image
                src="https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Woman wearing Lumen Atelier coat"
                width={800}
                height={960}
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 text-xs">
                <div className="space-y-1 text-slate-100">
                  <p className="font-medium tracking-[0.2em]">
                    WOMEN&apos;S COLUMN COAT
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Styled with structure knit set and tailored trousers.
                  </p>
                </div>
                <span className="rounded-full bg-slate-900/80 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-slate-100">
                  CAPSULE I
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

