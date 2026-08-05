import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { getSiteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes = ["", "/shop", "/about", "/custom-orders", "/faq"].map((path) => ({
    url: `${base}${path}`,
    lastModified,
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: `${base}/shop/${product.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...productRoutes];
}
