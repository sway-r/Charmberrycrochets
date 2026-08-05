"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  exists: boolean;
};

type ProductGalleryProps = {
  images: GalleryImage[];
  alt: string;
};

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral">
        {current?.exists ? (
          <Image
            key={current.src}
            src={current.src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        ) : (
          <ImageFallback src={current?.src ?? ""} />
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={image.src + index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show photo ${index + 1} of ${images.length}`}
              aria-current={index === active}
              className={cn(
                "relative h-20 w-16 shrink-0 overflow-hidden bg-neutral transition-opacity",
                index === active ? "ring-1 ring-berry" : "opacity-60 hover:opacity-100",
              )}
            >
              {image.exists ? (
                <Image src={image.src} alt="" fill sizes="80px" className="object-cover" />
              ) : (
                <ImageFallback src="" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
