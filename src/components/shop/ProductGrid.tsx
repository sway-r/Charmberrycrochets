import Link from "next/link";
import type { Product } from "@/data/siteConfig";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 border border-dashed border-border py-24 text-center">
        <p className="font-display text-xl text-brown">Nothing in this category yet.</p>
        <Link href="/shop" className="text-sm text-berry underline underline-offset-4">
          View all pieces
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 4} />
      ))}
    </div>
  );
}
