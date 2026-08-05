import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { BerryMark } from "@/components/ui/BerryMark";

export function Footer() {
  const { brand, urls, nav, customOrders, categories, footer } = siteConfig;
  const year = new Date().getFullYear();

  const infoLinks = nav.primary.filter(
    (link) => link.label !== "Shop" && (link.label !== "Custom Orders" || customOrders.enabled),
  );

  const socialLinks = [
    { label: "Instagram", href: urls.instagram },
    { label: "TikTok", href: urls.tiktok },
    { label: "Etsy", href: urls.etsy },
  ].filter((link) => link.href);

  return (
    <footer className="bg-berry text-cream">
      <div className="mx-auto max-w-[var(--container-max)] px-6 pb-10 pt-16 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 border-b border-cream/15 pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <BerryMark className="h-7 w-7 text-pink" />
            <p className="font-display text-3xl leading-none sm:text-4xl">{brand.name}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pink/80">
                Shop
              </p>
              <ul className="flex flex-col gap-2 text-sm text-cream/85">
                <li>
                  <Link href="/shop" className="transition-colors hover:text-pink">
                    All pieces
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/shop?category=${category.id}`}
                      className="transition-colors hover:text-pink"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {infoLinks.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pink/80">
                  Info
                </p>
                <ul className="flex flex-col gap-2 text-sm text-cream/85">
                  {infoLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition-colors hover:text-pink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {socialLinks.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pink/80">
                  Social
                </p>
                <ul className="flex flex-col gap-2 text-sm text-cream/85">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-pink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}
            {footer.note ? ` — ${footer.note}` : ""}
          </p>
        </div>
      </div>
    </footer>
  );
}
