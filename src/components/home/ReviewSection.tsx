import { Star } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewSection() {
  const { reviews } = siteConfig;

  if (reviews.length === 0) return null;

  return (
    <section className="border-y border-border bg-blush/30 py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Reviews" heading="What people say" />

        <ul
          role="region"
          aria-label="Customer reviews"
          tabIndex={0}
          className="mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4"
        >
          {reviews.map((review, index) => (
            <li
              key={`${review.author}-${index}`}
              className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[40%]"
            >
              <div className="flex gap-0.5 text-rose" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-3.5 w-3.5"
                    fill={starIndex < review.rating ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="mt-4 font-display text-xl italic leading-snug text-brown sm:text-2xl">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm text-muted">
                {review.author}
                {review.source ? ` · ${review.source}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
