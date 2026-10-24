"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  formatPrice,
  getCartSnapshot,
  getServerCartSnapshot,
  priceToNumber,
  subscribeCart,
  writeCart,
  type CartLine,
} from "@/lib/cart";

export function CartView() {
  const items = useSyncExternalStore(subscribeCart, getCartSnapshot, getServerCartSnapshot);

  function update(next: CartLine[]) {
    writeCart(next);
  }

  const currency = items[0]?.currency ?? "USD";
  const subtotal = items.reduce(
    (sum, item) => sum + priceToNumber(item.price) * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center gap-5 border border-border px-6 py-16 text-center">
        <p className="font-display text-2xl text-brown">Your cart is empty.</p>
        <Link
          href="/shop"
          className="bg-berry px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-rose"
        >
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
      <div className="flex flex-col">
        {items.map((item) => (
          <article
            key={item.key}
            className="grid grid-cols-[88px_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[120px_1fr_auto]"
          >
            <Link
              href={"/shop/" + item.slug}
              className="relative aspect-[4/5] overflow-hidden bg-neutral"
            >
              {item.image && (
                <Image src={item.image} alt={item.name} fill sizes="120px" className="object-cover" />
              )}
            </Link>

            <div className="flex flex-col gap-2">
              <Link href={"/shop/" + item.slug} className="font-display text-lg text-brown hover:underline">
                {item.name}
              </Link>
              <p className="text-sm text-muted">{item.price}</p>
              {Object.entries(item.options).map(([label, value]) => (
                <p key={label} className="text-xs text-muted">
                  {label}: {value}
                </p>
              ))}
              {item.customization && (
                <p className="whitespace-pre-line text-xs text-muted">
                  Customization: {item.customization}
                </p>
              )}
              <div className="mt-2 flex items-center gap-3">
                <label htmlFor={"cart-quantity-" + item.key} className="text-xs uppercase tracking-wide text-muted">
                  Qty
                </label>
                <input
                  id={"cart-quantity-" + item.key}
                  type="number"
                  min={1}
                  max={20}
                  value={item.quantity}
                  onChange={(event) => {
                    const quantity = Math.min(20, Math.max(1, Number(event.target.value) || 1));
                    update(items.map((line) => line.key === item.key ? { ...line, quantity } : line));
                  }}
                  className="w-16 border border-border bg-white px-2 py-1.5 text-sm"
                />
                <button
                  type="button"
                  onClick={() => update(items.filter((line) => line.key !== item.key))}
                  className="text-xs text-rose underline underline-offset-4"
                >
                  Remove
                </button>
              </div>
            </div>
            <p className="col-start-2 text-sm font-medium text-brown sm:col-start-auto">
              {formatPrice(priceToNumber(item.price) * item.quantity, item.currency)}
            </p>
          </article>
        ))}
      </div>

      <aside className="h-fit border border-border p-6 lg:sticky lg:top-24">
        <h2 className="font-display text-xl text-brown">Order summary</h2>
        <div className="mt-5 flex justify-between border-t border-border pt-4 text-sm">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal, currency)}</span>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Shipping and payment will be set up before checkout opens.
        </p>
        <button
          type="button"
          disabled
          className="mt-6 w-full cursor-not-allowed bg-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted"
        >
          Checkout coming soon
        </button>
        <Link href="/shop" className="mt-4 block text-center text-xs text-berry underline underline-offset-4">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
