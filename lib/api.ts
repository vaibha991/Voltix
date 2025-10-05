import { Product, CartItem, Cart } from "./types";

/*Fetch all products*/
export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("/api/products"); 
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

/* Checkout API call*/
export const checkout = async (cart: CartItem[] | Cart): Promise<{ success: boolean; orderId?: string }> => {
  const cartItems = Array.isArray(cart) ? cart : cart.items;

  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart: cartItems }),
  });

  if (!res.ok) throw new Error("Checkout failed");
  return res.json();
};
