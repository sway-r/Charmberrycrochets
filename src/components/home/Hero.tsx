import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { BerryMark } from "@/components/ui/BerryMark";

export function Hero() {
  const { hero } = siteConfig;
  const headingLines = hero.heading.split("\n");

  return (
    <section className="relative border-b border-border">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-6 px-6 py-16 text-center sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2">
          <BerryMark className="h-4 w-4 text-pink" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
            {hero.eyebrow}
          </span>
        </div>

        <h1 className="max-w-4xl font-display text-[2.6rem] leading-[1.05] text-brown sm:text-[3.2rem] lg:text-[4.25rem]">
          {headingLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted">
          {hero.description}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {hero.primaryCtaLabel && (
            <Button href={hero.primaryCtaHref} variant="primary">
              {hero.primaryCtaLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
