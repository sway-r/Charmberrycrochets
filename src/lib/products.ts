import { siteConfig, type Product } from "@/data/siteConfig";

export function getAllProducts(): Product[] {
  return siteConfig.products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return siteConfig.products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return siteConfig.products.filter((product) => product.featured);
}

export function getProductsByCategory(categoryId?: string): Product[] {
  if (!categoryId || categoryId === "all") return siteConfig.products;
  return siteConfig.products.filter((product) => product.category === categoryId);
}

export function getCategoryLabel(categoryId: string): string {
  return (
    siteConfig.categories.find((category) => category.id === categoryId)?.label ??
    categoryId
  );
}
