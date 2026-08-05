import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Charmberry Crochets.",
};

export default function FaqPage() {
  const { faq } = siteConfig;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 lg:py-20">
      <h1 className="mb-10 font-display text-4xl text-brown sm:text-5xl lg:mb-14">
        Frequently asked questions
      </h1>
      {faq.length > 0 ? (
        <Accordion items={faq} />
      ) : (
        <p className="text-muted">Nothing here yet — check back soon.</p>
      )}
    </div>
  );
}
