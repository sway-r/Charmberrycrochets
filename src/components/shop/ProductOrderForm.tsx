"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/data/siteConfig";
import { addCartLine } from "@/lib/cart";

type ProductOrderFormProps = {
  product: Product;
};

export function ProductOrderForm({ product }: ProductOrderFormProps) {
  const router = useRouter();
  const defaults = useMemo(
    () =>
      Object.fromEntries(
        product.variations.map((variation) => {
          const available = variation.options.filter((option) => !option.soldOut);
          return [variation.name, available.length === 1 ? available[0].name : ""];
        }),
      ),
    [product.variations],
  );
  const [selections, setSelections] = useState<Record<string, string>>(defaults);
  const [customization, setCustomization] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const customChoiceSelected =
    Boolean(product.customizationRequiredFor) &&
    Object.values(selections).includes(product.customizationRequiredFor ?? "");

  function addToCart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missing = product.variations.some((variation) => !selections[variation.name]);

    if (missing) {
      setError("Choose an option for each variation.");
      return;
    }
    if (customChoiceSelected && !customization.trim()) {
      setError("Add the custom color details before adding this item.");
      return;
    }

    addCartLine({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.images[0] ?? "",
      quantity,
      options: selections,
      customization: customization.trim(),
    });
    router.push("/cart");
  }

  return (
    <form onSubmit={addToCart} className="flex flex-col gap-5 border-y border-border py-6">
      {product.variations.map((variation) => {
        const singleAvailableOption =
          variation.options.filter((option) => !option.soldOut).length === 1 &&
          variation.options.length === 1;
        const isNumberedPalette = variation.options.some((option) => /^\d+$/.test(option.name));

        return (
          <div key={variation.name} className="flex flex-col gap-2">
            <label
              htmlFor={product.id + "-" + variation.name}
              className="text-xs font-semibold uppercase tracking-[0.08em] text-muted"
            >
              {variation.name}
            </label>
            {singleAvailableOption ? (
              <p className="text-sm text-brown">{variation.options[0].name}</p>
            ) : (
              <select
                id={product.id + "-" + variation.name}
                value={selections[variation.name] ?? ""}
                onChange={(event) => {
                  setSelections((current) => ({
                    ...current,
                    [variation.name]: event.target.value,
                  }));
                  setError("");
                }}
                required
                className="w-full border border-border bg-white px-3 py-3 text-sm text-brown focus:border-berry focus:outline-none"
              >
                <option value="">Select an option</option>
                {variation.options.map((option) => (
                  <option key={option.name} value={option.name} disabled={option.soldOut}>
                    {option.name}{option.soldOut ? " — Sold out" : ""}
                  </option>
                ))}
              </select>
            )}
            {isNumberedPalette && (
              <p className="text-xs leading-relaxed text-muted">
                Color numbers match the swatch photos in the product gallery.
              </p>
            )}
          </div>
        );
      })}

      <div className="flex flex-col gap-2">
        <label
          htmlFor={product.id + "-customization"}
          className="text-xs font-semibold uppercase tracking-[0.08em] text-muted"
        >
          {product.customizationPrompt ?? "Customization notes (optional)"}
          {customChoiceSelected ? " *" : ""}
        </label>
        <textarea
          id={product.id + "-customization"}
          value={customization}
          onChange={(event) => {
            setCustomization(event.target.value);
            setError("");
          }}
          required={customChoiceSelected}
          rows={3}
          maxLength={500}
          className="w-full resize-y border border-border bg-white px-3 py-3 text-sm text-brown placeholder:text-muted/70 focus:border-berry focus:outline-none"
          placeholder="Add any details for this item"
        />
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor={product.id + "-quantity"}
            className="text-xs font-semibold uppercase tracking-[0.08em] text-muted"
          >
            Quantity
          </label>
          <input
            id={product.id + "-quantity"}
            type="number"
            min={1}
            max={20}
            value={quantity}
            onChange={(event) =>
              setQuantity(Math.min(20, Math.max(1, Number(event.target.value) || 1)))
            }
            className="w-24 border border-border bg-white px-3 py-3 text-sm text-brown focus:border-berry focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={product.soldOut}
          className="min-h-12 flex-1 bg-berry px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-rose disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
        >
          {product.soldOut ? "Sold out" : "Add to cart"}
        </button>
      </div>
      {error && (
        <p role="alert" className="text-sm text-rose">
          {error}
        </p>
      )}
      <p className="text-xs text-muted">
        Payments are not enabled yet. Items you add are saved in this browser.
      </p>
    </form>
  );
}
