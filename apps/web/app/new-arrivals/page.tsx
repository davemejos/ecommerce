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

const products: Product[] = [
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

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-4 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-300">
              NEW ARRIVALS
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              The Winter Capsule Edit
            </h1>
            <p className="max-w-xl text-sm text-slate-300">
              Considered outerwear, knitwear, and structured separates designed
              to move with you from first light to after-hours. Each piece is
              cut in limited runs and finished with quiet studio-level details.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              In-season, limited availability
            </span>
            <span className="hidden h-6 w-px bg-slate-700 sm:block" />
            <Link
              href="/"
              className="text-xs font-medium tracking-[0.18em] text-slate-200 underline-offset-4 hover:text-slate-50 hover:underline"
            >
              BACK TO STUDIO
            </Link>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

