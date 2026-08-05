import { siteConfig } from "@/data/siteConfig";
import { Photo } from "@/components/ui/Photo";

export function Craftsmanship() {
  const { craftsmanship } = siteConfig;

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
        <div>
          <Photo
            src={craftsmanship.image}
            alt={craftsmanship.imageAlt}
            className="aspect-[4/5]"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted">
            {craftsmanship.caption}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
            {craftsmanship.eyebrow}
          </span>
          <h2 className="font-display text-3xl text-berry sm:text-4xl">
            {craftsmanship.heading}
          </h2>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-muted">
            {craftsmanship.body}
          </p>
        </div>
      </div>
    </section>
  );
}
