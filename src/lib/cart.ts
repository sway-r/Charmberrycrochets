export type CartLine = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  price: string;
  currency: string;
  image: string;
  quantity: number;
  options: Record<string, string>;
  customization: string;
};

const CART_STORAGE_KEY = "charmberry-cart-v1";
export const CART_CHANGED_EVENT = "charmberry-cart-changed";
const EMPTY_CART: CartLine[] = [];

let cachedCartJson: string | null = null;
let cachedCart = EMPTY_CART;

export function getCartSnapshot(): CartLine[] {
  if (typeof window === "undefined") return EMPTY_CART;
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (stored === cachedCartJson) return cachedCart;

  cachedCartJson = stored;
  try {
    const parsed: unknown = JSON.parse(stored ?? "[]");
    cachedCart = Array.isArray(parsed) ? (parsed as CartLine[]) : EMPTY_CART;
  } catch {
    cachedCart = EMPTY_CART;
  }
  return cachedCart;
}

export function getServerCartSnapshot(): CartLine[] {
  return EMPTY_CART;
}

export function subscribeCart(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CART_CHANGED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CART_CHANGED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function readCart(): CartLine[] {
  return getCartSnapshot();
}

export function writeCart(lines: CartLine[]): void {
  if (typeof window === "undefined") return;
  cachedCartJson = JSON.stringify(lines);
  cachedCart = lines;
  localStorage.setItem(CART_STORAGE_KEY, cachedCartJson);
  window.dispatchEvent(new Event(CART_CHANGED_EVENT));
}

export function addCartLine(line: Omit<CartLine, "key">): void {
  const key = JSON.stringify([line.productId, line.options, line.customization.trim()]);
  const cart = readCart();
  const existing = cart.find((item) => item.key === key);

  if (existing) {
    writeCart(
      cart.map((item) =>
        item.key === key ? { ...item, quantity: item.quantity + line.quantity } : item,
      ),
    );
    return;
  }

  writeCart([...cart, { ...line, key }]);
}

export function priceToNumber(price: string): number {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export function formatPrice(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
