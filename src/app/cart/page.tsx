import type { Metadata } from "next";
import { CartView } from "@/components/shop/CartView";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the products and custom options in your Charmberry Crochets cart.",
};

export default function CartPage() {
  return (
    <main className="mx-auto max-w-[var(--container-max)] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mb-10">
        <h1 className="font-display text-4xl text-brown sm:text-5xl">Your cart</h1>
        <p className="mt-3 max-w-[55ch] text-[15px] leading-relaxed text-muted">
          Review your items, selected colors, and customization notes.
        </p>
      </div>
      <CartView />
    </main>
  );
}
