import { siteConfig } from "@/data/siteConfig";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function StudioGallery() {
  const { socialGallery, urls } = siteConfig;

  if (socialGallery.length === 0) return null;

  const followHref = urls.instagram || urls.tiktok || urls.etsy;

  return (
    <section className="mx-auto max-w-[var(--container-max)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
        <SectionHeading eyebrow="Behind the scenes" heading="From the studio" />
        {followHref && (
          <Button href={followHref} variant="secondary">
            Follow along
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {socialGallery.map((item, index) => {
          const image = (
            <Photo
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          );

          return item.href ? (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-cream"
            >
              {image}
            </a>
          ) : (
            <div key={index} className="relative aspect-square bg-cream">
              {image}
            </div>
          );
        })}
      </div>
    </section>
  );
}
