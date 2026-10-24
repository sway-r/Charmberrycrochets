"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getCartSnapshot, getServerCartSnapshot, subscribeCart } from "@/lib/cart";

export function CartIndicator() {
  const cart = useSyncExternalStore(subscribeCart, getCartSnapshot, getServerCartSnapshot);
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative inline-flex min-h-11 items-center px-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-brown transition-colors hover:text-berry"
      aria-label={count ? "Cart, " + count + " items" : "Cart"}
    >
      Cart
      {count > 0 && (
        <span className="ml-1.5 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-berry px-1 text-[10px] text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
