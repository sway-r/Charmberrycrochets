import { siteConfig } from "@/data/siteConfig";

export function BrandStatement() {
  const { brandStatement } = siteConfig;

  return (
    <section className="border-y border-border bg-blush/40 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
          {brandStatement.eyebrow}
        </span>
        <p className="mt-6 font-display text-[1.9rem] italic leading-snug text-berry sm:text-4xl lg:text-[2.75rem]">
          {brandStatement.heading}
        </p>
        <p className="mx-auto mt-6 max-w-[46ch] text-[15px] leading-relaxed text-muted">
          {brandStatement.body}
        </p>
      </div>
    </section>
  );
}
