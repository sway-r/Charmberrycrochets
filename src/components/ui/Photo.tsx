import Image from "next/image";
import { imageExists } from "@/lib/images";
import { cn } from "@/lib/utils";
import { ImageFallback } from "./ImageFallback";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** e.g. "4/5", "1/1", "16/10" — omit when the parent controls height. */
  aspect?: string;
  /** Use when stacking this photo absolutely inside a parent that owns the aspect ratio (e.g. hover crossfades). */
  fill?: boolean;
};

/**
 * Server-rendered image wrapper. Falls back to a quiet placeholder
 * (instead of a broken image) when the referenced file isn't in
 * /public yet, so the site always compiles and looks intentional.
 */
export function Photo({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority,
  aspect,
  fill,
}: PhotoProps) {
  const exists = imageExists(src);

  return (
    <div
      className={cn(
        fill ? "absolute inset-0" : "relative",
        "overflow-hidden bg-neutral",
        className,
      )}
      style={!fill && aspect ? { aspectRatio: aspect } : undefined}
    >
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "100vw"}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <ImageFallback src={src} />
      )}
    </div>
  );
}
