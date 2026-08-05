import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { BerryMark } from "@/components/ui/BerryMark";

export function CustomOrdersFeature() {
  const { customOrders } = siteConfig;

  if (!customOrders.enabled) return null;

  return (
    <section className="bg-milk/50 py-20 sm:py-24">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-5 px-6 text-center sm:px-8">
        <BerryMark className="h-6 w-6 text-berry" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-berry">
          {customOrders.eyebrow}
        </span>
        <h2 className="font-display text-3xl text-brown sm:text-4xl">
          {customOrders.heading}
        </h2>
        {customOrders.description && (
          <p className="max-w-[50ch] text-[15px] leading-relaxed text-muted">
            {customOrders.description}
          </p>
        )}
        <Button href="/custom-orders" variant="primary" className="mt-2">
          Learn more
        </Button>
      </div>
    </section>
  );
}
