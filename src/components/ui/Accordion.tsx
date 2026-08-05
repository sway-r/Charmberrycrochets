import type { FaqItem } from "@/data/siteConfig";

type AccordionProps = {
  items: FaqItem[];
};

/**
 * Grouped, accessible FAQ accordion built on native <details>/<summary> —
 * keyboard and screen-reader accessible with no client-side JS.
 */
export function Accordion({ items }: AccordionProps) {
  const groups = items.reduce<Record<string, FaqItem[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-10">
      {Object.entries(groups).map(([category, entries]) => (
        <div key={category}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-rose">
            {category}
          </h3>
          <div className="divide-y divide-border border-t border-border">
            {entries.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-brown marker:content-none">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl leading-none text-rose transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
