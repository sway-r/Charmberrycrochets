import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getCategoryLabel } from "@/lib/products";
import { imageExists } from "@/lib/images";
import { siteConfig } from "@/data/siteConfig";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductInfo } from "@/components/shop/ProductInfo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const description = product.shortDescription || product.description || siteConfig.seo.description;

  return {
    title: product.name,
    description,
    openGraph: product.images[0]
      ? { title: product.name, description, images: [product.images[0]] }
      : { title: product.name, description },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const sourceImages = product.images.length > 0 ? product.images : [`/images/products/${product.slug}-01.jpg`];
  const galleryImages = sourceImages.map((src) => ({ src, exists: imageExists(src) }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription || product.description || undefined,
    category: getCategoryLabel(product.category),
    ...(product.price && product.price !== "REPLACE_ME"
      ? {
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: product.currency,
            availability: product.soldOut
              ? "https://schema.org/OutOfStock"
              : "https://schema.org/InStock",
            url: product.purchaseUrl || undefined,
          },
        }
      : {}),
  };

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.08em] text-muted">
        <Link href="/shop" className="hover:text-berry">
          Shop
        </Link>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        <span className="text-brown">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={galleryImages} alt={product.imageAlt || product.name} />
        <ProductInfo product={product} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
