import { siteConfig } from "@/data/siteConfig";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EditorialStory() {
  const { editorialStory } = siteConfig;

  return (
    <section className="overflow-hidden py-4 sm:py-8">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-10 lg:grid-cols-[1fr_auto_1.2fr] lg:items-stretch lg:gap-0">
        <div className="flex flex-col justify-center px-6 sm:px-8 lg:pl-12 lg:pr-10">
          <SectionHeading
            eyebrow={editorialStory.eyebrow}
            heading={editorialStory.heading}
            description={editorialStory.body}
          />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-6 lg:py-10">
          <span aria-hidden="true" className="w-px flex-1 bg-border" />
          <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-muted [writing-mode:vertical-rl]">
            {editorialStory.caption}
          </span>
          <span aria-hidden="true" className="w-px flex-1 bg-border" />
        </div>

        <Photo
          src={editorialStory.image}
          alt={editorialStory.imageAlt}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-[560px]"
        />
      </div>
    </section>
  );
}
