import type { Metadata } from "next";
import { BerryMark } from "@/components/ui/BerryMark";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-5 px-6 py-32 text-center sm:px-8">
      <BerryMark className="h-6 w-6 text-pink" />
      <h1 className="font-display text-3xl text-brown sm:text-4xl">
        Looks like this stitch got lost.
      </h1>
      <p className="text-[15px] leading-relaxed text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
      </p>
      <Button href="/shop" variant="primary" className="mt-2">
        Back to shop
      </Button>
    </div>
  );
}
