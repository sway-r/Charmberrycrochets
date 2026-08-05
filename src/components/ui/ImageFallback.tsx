import { BerryMark } from "./BerryMark";

type ImageFallbackProps = {
  src: string;
};

/**
 * Presentational placeholder shown in place of a missing /public image.
 * Has no server-only dependencies, so it's safe to use from client
 * components (unlike Photo, which checks the filesystem).
 */
export function ImageFallback({ src }: ImageFallbackProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-rose/30 bg-blush/60 px-4 text-center">
      <BerryMark className="h-4 w-4 text-rose/50" />
      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
        Add image
      </span>
      {src && (
        <span className="max-w-[16ch] font-mono text-[10px] leading-tight text-muted/70 break-all">
          {src}
        </span>
      )}
    </div>
  );
}
