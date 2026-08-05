import { siteConfig } from "@/data/siteConfig";
import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { EditorialStory } from "@/components/home/EditorialStory";
import { CategoryNav } from "@/components/home/CategoryNav";
import { Marquee } from "@/components/ui/Marquee";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { ReviewSection } from "@/components/home/ReviewSection";
import { CustomOrdersFeature } from "@/components/home/CustomOrdersFeature";
import { StudioGallery } from "@/components/home/StudioGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedProducts />
      <EditorialStory />
      <CategoryNav />
      {siteConfig.marquee.enabled && siteConfig.marquee.text && (
        <Marquee text={siteConfig.marquee.text} />
      )}
      <Craftsmanship />
      <ReviewSection />
      <CustomOrdersFeature />
      <StudioGallery />
    </>
  );
}
