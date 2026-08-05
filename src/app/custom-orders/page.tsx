import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Custom Orders",
  description: "Custom crochet commissions from Charmberry Crochets.",
};

export default function CustomOrdersPage() {
  const { customOrders } = siteConfig;

  if (!customOrders.enabled) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center sm:px-8">
        <h1 className="font-display text-4xl text-brown">Custom orders</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          Custom pieces aren&rsquo;t open right now — check back later, or browse what&rsquo;s
          currently in the shop.
        </p>
        <Button href="/shop" variant="primary" className="mt-6">
          Shop crochet
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
          {customOrders.eyebrow}
        </span>
        <h1 className="mt-4 font-display text-4xl text-brown sm:text-5xl">
          {customOrders.heading}
        </h1>
        {customOrders.description && (
          <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-muted">
            {customOrders.description}
          </p>
        )}
        {customOrders.acceptedItems.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {customOrders.acceptedItems.map((item) => (
              <li
                key={item}
                className="border border-border px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-brown"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {customOrders.steps.length > 0 && (
        <div className="mt-20 grid gap-10 sm:grid-cols-3 lg:mt-28 lg:gap-16">
          {customOrders.steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-3xl text-pink">{step.number}</span>
              <h3 className="mt-3 font-display text-xl text-brown">{step.title}</h3>
              {step.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-20 flex flex-col gap-6 border-t border-border pt-12 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
        {customOrders.timeline && (
          <p className="text-sm text-muted">
            <span className="font-medium text-brown">Timeline: </span>
            {customOrders.timeline}
          </p>
        )}
        {customOrders.contactUrl && (
          <Button href={customOrders.contactUrl} variant="primary">
            {customOrders.contactLabel || "Get in touch"}
          </Button>
        )}
      </div>
    </div>
  );
}
