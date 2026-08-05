import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  active: string;
};

export function CategoryFilter({ active }: CategoryFilterProps) {
  const linkClass = (isActive: boolean) =>
    cn(
      "border-b-2 pb-2 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors",
      isActive
        ? "border-berry text-berry"
        : "border-transparent text-muted hover:text-brown",
    );

  return (
    <nav
      aria-label="Shop by category"
      className="flex flex-wrap gap-x-7 gap-y-3 border-b border-border pb-px"
    >
      <Link href="/shop" className={linkClass(active === "all")}>
        All
      </Link>
      {siteConfig.categories.map((category) => (
        <Link
          key={category.id}
          href={`/shop?category=${category.id}`}
          className={linkClass(active === category.id)}
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
}
