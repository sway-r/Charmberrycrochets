import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Charmberry Crochets.",
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-16">
        <Photo
          src={about.portrait}
          alt={about.portraitAlt || about.ownerName || "Portrait"}
          className="aspect-[4/5]"
          sizes="(min-width: 1024px) 40vw, 100vw"
          priority
        />

        <div className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose">
            {about.eyebrow}
          </span>
          <h1 className="font-display text-4xl text-brown sm:text-5xl">{about.heading}</h1>
          <div className="flex flex-col gap-4">
            {about.body
              .filter((paragraph) => paragraph)
              .map((paragraph, index) => (
                <p key={index} className="max-w-[55ch] text-[15px] leading-relaxed text-brown/90">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>

      {about.process.length > 0 && (
        <div className="mt-24 lg:mt-32">
          <h2 className="mb-10 font-display text-3xl text-brown sm:text-4xl lg:mb-14">
            How a piece comes together
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {about.process.map((step, index) => (
              <div key={step.label}>
                {step.image && (
                  <Photo
                    src={step.image}
                    alt={step.label}
                    className="mb-4 aspect-[4/5]"
                    sizes="(min-width: 1024px) 22vw, 50vw"
                  />
                )}
                <span className="mb-1 block font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-1 font-display text-lg text-brown">{step.label}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
