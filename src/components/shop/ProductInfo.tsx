import type { Product } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

type ProductInfoProps = {
  product: Product;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const details = [
    {
      label: "Materials",
      value: product.materials.length > 0 ? product.materials.join(", ") : "",
    },
    { label: "Dimensions", value: product.dimensions },
    { label: "Care", value: product.care },
  ].filter((detail) => detail.value);

  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
      <div>
        {product.badge && !product.soldOut && (
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-rose">
            {product.badge}
          </span>
        )}
        <h1 className="font-display text-3xl text-brown sm:text-4xl">{product.name}</h1>
        <p className="mt-3 text-lg text-muted">{product.price}</p>
      </div>

      {product.shortDescription && (
        <p className="max-w-[55ch] text-[15px] leading-relaxed text-brown/90">
          {product.shortDescription}
        </p>
      )}

      {product.soldOut ? (
        <span className="inline-flex w-fit items-center border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
          Currently sold out
        </span>
      ) : (
        product.purchaseUrl && (
          <Button href={product.purchaseUrl} variant="primary" className="w-fit">
            {product.purchaseLabel || "Buy on Etsy"}
          </Button>
        )
      )}

      {product.madeToOrderNote && (
        <p className="text-sm leading-relaxed text-muted">{product.madeToOrderNote}</p>
      )}

      {product.description && (
        <div className="border-t border-border pt-6">
          <p className="max-w-[60ch] whitespace-pre-line text-[15px] leading-relaxed text-brown/90">
            {product.description}
          </p>
        </div>
      )}

      {details.length > 0 && (
        <dl className="flex flex-col gap-3 border-t border-border pt-6 text-sm">
          {details.map((detail) => (
            <div key={detail.label} className="flex gap-4">
              <dt className="w-28 shrink-0 pt-0.5 text-xs font-medium uppercase tracking-[0.06em] text-muted">
                {detail.label}
              </dt>
              <dd className="text-brown/90">{detail.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
