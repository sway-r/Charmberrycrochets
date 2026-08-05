import { getAllProducts, getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 3);
  const items = featured.length > 0 ? featured : getAllProducts().slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-[var(--container-max)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14">
        <SectionHeading eyebrow="Featured" heading="A few favorites" />
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          {String(items.length).padStart(2, "0")} pieces
        </span>
      </div>

      <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:gap-8 lg:gap-12">
        {items[0] && (
          <ProductCard
            product={items[0]}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        )}
        <div className="flex flex-col gap-10 sm:gap-8 lg:gap-12">
          {items[1] && (
            <ProductCard product={items[1]} sizes="(min-width: 640px) 30vw, 100vw" />
          )}
          {items[2] && (
            <ProductCard product={items[2]} sizes="(min-width: 640px) 30vw, 100vw" />
          )}
        </div>
      </div>

      <div className="mt-12 flex justify-center lg:mt-16">
        <Button href="/shop" variant="secondary">
          View all pieces
        </Button>
      </div>
    </section>
  );
}
