import Image from "next/image";

type BackendProductImage = {
  image?:
    | {
        cloudinaryUrl?: string;
        cloudinaryPublicId?: string;
        alt?: string;
      }
    | string;
  alt?: string;
  isPrimary?: boolean;
};

type BackendProduct = {
  id: number | string;
  title?: string;
  slug?: string;
  sku?: string;
  price?: number;
  currency?: string;
  status?: string;
  images?: BackendProductImage[];
};

type ProductsResponse = {
  docs: BackendProduct[];
};

async function getProducts(): Promise<BackendProduct[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3000";

  const res = await fetch(`${baseUrl}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = (await res.json()) as ProductsResponse;

  return data.docs ?? [];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 lg:px-4 lg:pb-20 lg:pt-14">
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-400">
            LUMEN ATELIER
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Products
          </h1>
          <p className="max-w-xl text-sm text-slate-300">
            All products currently available in the studio backend. Data is
            pulled live from the Payload products collection.
          </p>
        </div>
        {products.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-6 text-sm text-slate-300 sm:px-6">
            No products have been created in the backend yet.
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const primaryImage =
                product.images?.find((img) => img.isPrimary) ??
                product.images?.[0];

              const media =
                primaryImage && typeof primaryImage.image === "object"
                  ? primaryImage.image
                  : undefined;

              const imageUrl = media?.cloudinaryUrl;
              const imageAlt =
                media?.alt ?? product.title ?? "Product image";

              return (
                <article
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 text-sm text-slate-200 shadow-[0_24px_60px_-35px_rgba(15,23,42,1)] transition hover:border-slate-500"
                >
                  {imageUrl && (
                    <div className="relative overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={640}
                        height={800}
                        className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <h2 className="text-sm font-medium text-slate-50">
                          {product.title ?? "Untitled product"}
                        </h2>
                        {product.slug && (
                          <p className="text-[11px] text-slate-500">
                            {product.slug}
                          </p>
                        )}
                      </div>
                      <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                        {product.status ?? "draft"}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                      <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-slate-100">
                        {product.price != null
                          ? `${product.currency ?? "USD"} ${
                              Math.round(product.price * 100) / 100
                            }`
                          : "Price not set"}
                      </span>
                      {product.sku && (
                        <span className="text-[11px] text-slate-400">
                          SKU {product.sku}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
