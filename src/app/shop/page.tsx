import type { Metadata } from "next";
import { getProductsByCategory, getCategoryLabel } from "@/lib/products";
import { CategoryFilter } from "@/components/shop/CategoryFilter";
import { ProductGrid } from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop",
  description: "Handmade crochet pieces from Charmberry Crochets.",
};

type ShopPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const active = category ?? "all";
  const products = getProductsByCategory(active);

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mb-10 flex flex-col gap-3 lg:mb-14">
        <h1 className="font-display text-4xl text-brown sm:text-5xl">Shop</h1>
        <p className="max-w-[55ch] text-[15px] leading-relaxed text-muted">
          {active === "all"
            ? "Every piece is made by hand — colors and small details can vary a little from photo to photo."
            : `Showing ${getCategoryLabel(active)}.`}
        </p>
      </div>

      <div className="mb-10 lg:mb-14">
        <CategoryFilter active={active} />
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
