import { siteConfig } from "@/data/siteConfig";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { BerryMark } from "@/components/ui/BerryMark";

export function Hero() {
  const { hero, urls } = siteConfig;
  const headingLines = hero.heading.split("\n");
  const secondaryHref = hero.secondaryCtaHref || urls.etsy;

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-8 px-6 pb-14 pt-8 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-10 lg:px-12 lg:pb-20 lg:pt-10">
        <Photo
          src={hero.image}
          alt={hero.imageAlt}
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-[640px]"
        />

        <div className="flex flex-col gap-6 lg:pb-6">
          <div className="flex items-center gap-2">
            <BerryMark className="h-4 w-4 text-pink" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] leading-[1.05] text-brown sm:text-[3.2rem] lg:text-[2.85rem] xl:text-[3.4rem]">
            {headingLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="max-w-[38ch] text-[15px] leading-relaxed text-muted">
            {hero.description}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
            {hero.primaryCtaLabel && (
              <Button href={hero.primaryCtaHref} variant="primary">
                {hero.primaryCtaLabel}
              </Button>
            )}
            {hero.secondaryCtaLabel && (
              <Button href={secondaryHref} variant="secondary">
                {hero.secondaryCtaLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
