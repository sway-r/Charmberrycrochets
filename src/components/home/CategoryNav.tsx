import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CategoryNav() {
  const { categories } = siteConfig;

  if (categories.length === 0) return null;

  return (
    <section className="mx-auto max-w-[var(--container-max)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeading eyebrow="Browse" heading="Shop by category" className="mb-10 lg:mb-14" />

      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/shop?category=${category.id}`}
            className="group relative flex aspect-[3/4] items-end bg-cream"
          >
            {category.image && (
              <Photo
                src={category.image}
                alt={category.label}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            )}
            <span className="relative z-10 w-full bg-cream/90 px-3 py-3 text-center text-[12px] font-medium uppercase tracking-[0.08em] text-brown">
              {category.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
