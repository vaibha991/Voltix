import { Product } from "./types";

export type CartItem = Product & { cartItemId: string; quantity: number };

// Add a product to the cart
export const addToCart = (product: Product, quantity = 1) => {
  const savedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingItem = savedCart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    savedCart.push({
      ...product,
      cartItemId: Date.now().toString() + Math.random(),
      quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(savedCart));
  return savedCart; // return updated cart for state updates
};

// Update quantity of a cart item
export const updateCartQuantity = (cartItemId: string, quantity: number) => {
  const savedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const updatedCart = savedCart.map(item =>
    item.cartItemId === cartItemId ? { ...item, quantity } : item
  );

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

// Remove a cart item
export const removeCartItem = (cartItemId: string) => {
  const savedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = savedCart.filter(item => item.cartItemId !== cartItemId);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

// Clear entire cart
export const clearCart = () => {
  localStorage.removeItem("cart");
  return [];
};
