import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: string;
  tag?: string;
  image: string;
  color: string;
  category: string;
};

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Column Wool Coat",
    price: "$320",
    tag: "Bestseller",
    image:
      "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "Warm Camel",
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Structure Knit Set",
    price: "$210",
    tag: "New",
    image:
      "https://images.pexels.com/photos/7671270/pexels-photo-7671270.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "Soft Sand",
    category: "Knitwear",
  },
  {
    id: 3,
    name: "Tailored Wide Trousers",
    price: "$185",
    image:
      "https://images.pexels.com/photos/7671164/pexels-photo-7671164.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "Ink Black",
    category: "Trousers",
  },
  {
    id: 4,
    name: "Everyday Poplin Shirt",
    price: "$140",
    image:
      "https://images.pexels.com/photos/7671285/pexels-photo-7671285.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "Optic White",
    category: "Shirts",
  },
];

const lookbookImages = [
  "https://images.pexels.com/photos/7671245/pexels-photo-7671245.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6311659/pexels-photo-6311659.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7671269/pexels-photo-7671269.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

const categories = [
  "New Arrivals",
  "Coats & Jackets",
  "Knitwear",
  "Trousers",
  "Dresses",
  "Accessories",
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-[0_18px_45px_-28px_rgba(15,23,42,1)] transition hover:border-slate-500/90 hover:bg-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        {product.tag && (
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-slate-100/95 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-950">
            {product.tag}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={640}
          height={800}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <button className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center rounded-full bg-slate-100/95 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-950 opacity-0 shadow-sm shadow-black/40 transition hover:bg-white group-hover:opacity-100">
          VIEW DETAILS
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-400">
          <span>{product.category}</span>
          <span>{product.color}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <p className="text-sm font-medium text-slate-50">{product.name}</p>
          <p className="text-sm font-semibold text-slate-100">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

function LookbookStrip() {
  return (
    <section
      aria-label="Lookbook"
      className="mt-12 flex flex-col gap-4 rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 px-5 py-4 sm:px-6"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
          <span className="h-px w-6 bg-slate-600" />
          <span>WINTER 24 / CAPSULE I</span>
        </div>
        <Link
          href="/new-arrivals"
          className="text-xs font-medium tracking-[0.18em] text-slate-200 underline-offset-4 hover:text-slate-50 hover:underline"
        >
          SHOP THE EDIT
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {lookbookImages.map((src, index) => (
          <div
            key={src}
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
          >
            <Image
              src={src}
              alt="Lookbook"
              width={480}
              height={640}
              className="h-32 w-full object-cover brightness-110 transition duration-500 hover:scale-105 sm:h-40 md:h-44"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] font-medium tracking-[0.2em] text-slate-200">
              LOOK {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section
      id="story"
      className="relative mt-20 grid gap-12 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
    >
      <div className="space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400">
          ABOUT LUMEN ATELIER
        </p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          A considered wardrobe of pieces that move seamlessly from morning
          light to after-hours.
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-slate-300">
          Lumen Atelier is a modern clothing studio focused on elevated
          essentials. Each silhouette is cut with clean lines, softened by
          tactile materials and quietly confident details inspired by
          architecture, music, and nocturnal city light.
        </p>
        <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-3">
          <div className="space-y-1">
            <p className="text-2xl font-semibold">48h</p>
            <p className="text-xs text-slate-400">
              Average time from sketch to first toile in studio.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold">92%</p>
            <p className="text-xs text-slate-400">
              Of fabrics sourced from certified European mills.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold">3</p>
            <p className="text-xs text-slate-400">
              Curated drops per season for a focused wardrobe.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_100%_0,rgba(251,191,36,0.12),transparent_55%)]" />
        <div className="relative flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-300">
            CUSTOMERS
          </p>
          <p className="text-sm leading-relaxed text-slate-200">
            “Every piece feels like it was designed for the way I actually live.
            Clean, easy, but with enough structure that I feel put together in
            every room I walk into.”
          </p>
          <div className="flex items-center gap-3">
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
    </section>
  );
}

function CategoriesSection() {
  return (
    <section
      aria-label="Shop by category"
      className="mt-16 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-6 py-8 sm:px-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400">
            CURATED EDITS
          </p>
          <h2 className="text-sm font-medium tracking-[0.18em] text-slate-200">
            SHOP BY CATEGORY
          </h2>
        </div>
        <Link
          href="/collection"
          className="text-xs font-medium tracking-[0.18em] text-slate-200 underline-offset-4 hover:text-slate-50 hover:underline"
        >
          VIEW ALL PIECES
        </Link>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-medium tracking-[0.18em] text-slate-200 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950"
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="mt-16 rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 px-6 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-300">
            PRIVATE PREVIEW
          </p>
          <h2 className="text-balance text-xl font-semibold tracking-tight text-slate-50">
            Join the studio list for first access to new capsules.
          </h2>
          <p className="max-w-md text-sm text-slate-300">
            Receive early access to limited runs, styling notes from our
            atelier, and invitations to private fittings in select cities.
          </p>
        </div>
        <form className="flex w-full flex-col gap-3 sm:max-w-xs">
          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 focus-within:border-slate-400">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-950 transition hover:bg-white"
          >
            REQUEST ACCESS
          </button>
          <p className="text-[10px] text-slate-500">
            By joining, you agree to receive curated updates from Lumen Atelier.
          </p>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 lg:px-4 lg:pb-20 lg:pt-14">
        <section className="grid items-start gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-slate-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Winter Capsule I · 2024
            </p>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Tailored silhouettes, softened by light and movement.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Build a precise, quietly confident wardrobe with limited-run
                essentials cut in architectural lines, softened by tactile
                wool, brushed cotton, and fluid crepe.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/new-arrivals"
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-5 py-3 text-xs font-semibold tracking-[0.22em] text-slate-950 transition hover:bg-white"
              >
                SHOP NEW ARRIVALS
              </Link>
              <Link
                href="/story"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 text-xs font-semibold tracking-[0.22em] text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
              >
                DISCOVER THE STORY
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-6 w-px bg-slate-700" />
                <span>Free carbon-neutral delivery on all orders over $250</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-6 w-px bg-slate-700" />
                <span>Made in small, intentional runs</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-12 rounded-[3rem] bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_100%_0,rgba(251,191,36,0.12),transparent_55%)]" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/80 shadow-[0_40px_120px_-45px_rgba(15,23,42,1)]">
              <Image
                src="https://images.pexels.com/photos/7671270/pexels-photo-7671270.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Model wearing Lumen Atelier coat"
                width={800}
                height={960}
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-xs">
                <div className="space-y-1 text-slate-100">
                  <p className="font-medium tracking-[0.2em]">
                    COLUMN WOOL COAT
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Styled with structure knit set in Soft Sand.
                  </p>
                </div>
                <div className="rounded-full bg-slate-900/80 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-slate-100">
                  DROP I · LIMITED
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="new"
          className="mt-14 border-t border-slate-800/80 pt-10 sm:mt-16 sm:pt-12"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-300">
                NEW ARRIVALS
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                The Winter Capsule Edit
              </h2>
              <p className="max-w-lg text-sm text-slate-300">
                A focused selection of outerwear, knits, and tailored separates
                designed to layer seamlessly across your week.
              </p>
            </div>
            <Link
              href="/collection"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
            >
              VIEW FULL COLLECTION
            </Link>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <LookbookStrip />
        <CategoriesSection />
        <StorySection />
        <NewsletterSection />

        <footer className="mt-16 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:mt-20 sm:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Lumen Atelier Studio.</p>
            <div className="flex flex-wrap gap-4">
              <button className="hover:text-slate-200">
                Shipping & Returns
              </button>
              <button className="hover:text-slate-200">Care Guide</button>
              <button className="hover:text-slate-200">Privacy</button>
            </div>
          </div>
        </footer>
    </div>
  );
}
