import { siteConfig } from "@/data/siteConfig";

type ClassValue = string | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

/** Falls back to a placeholder domain until urls.website is set in siteConfig. */
export function getSiteUrl(): string {
  return siteConfig.urls.website.startsWith("http")
    ? siteConfig.urls.website
    : "https://example.com";
}
