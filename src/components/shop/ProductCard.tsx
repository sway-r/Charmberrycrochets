import Link from "next/link";
import type { Product } from "@/data/siteConfig";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  sizes?: string;
};

export function ProductCard({ product, priority, sizes }: ProductCardProps) {
  const [primary, secondary] = product.images;

  return (
    <Link href={`/shop/${product.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral">
        <Photo
          src={primary}
          alt={product.imageAlt || product.name}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
          imgClassName={cn(
            "transition-[opacity,transform] duration-500 ease-out",
            secondary ? "group-hover:opacity-0" : "group-hover:scale-[1.025]",
          )}
        />
        {secondary && (
          <Photo
            src={secondary}
            alt={product.imageAlt || product.name}
            fill
            sizes={sizes ?? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
            imgClassName="opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
          />
        )}

        {product.soldOut && (
          <div className="absolute inset-0 bg-cream/45" aria-hidden="true" />
        )}

        {(product.badge || product.soldOut) && (
          <span className="absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-berry">
            {product.soldOut ? "Sold out" : product.badge}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="min-w-0 break-words font-display text-base leading-snug text-brown underline-offset-4 group-hover:underline">
          {product.name}
        </h3>
        <span className="shrink-0 whitespace-nowrap text-sm text-muted">{product.price}</span>
      </div>
    </Link>
  );
}
