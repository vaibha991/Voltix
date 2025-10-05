// lib/types.ts

// Product definition
export interface Product {
  id: number;                 // Unique product ID
  name: string;               // Product name
  price: number;              // Product price
  imageUrl: string;           // Product image
  description?: string;       // Optional product description
  category?: string;          // Optional category
}

// Cart item definition
export interface CartItem extends Product {
  quantity: number;           // Number of this product in the cart
  cartItemId?: string;        // Optional unique ID for the cart entry
  options?: Record<string, string | number | undefined>; // Optional variations
  totalPrice?: number;        // Optional: price * quantity
}

// Cart structure
export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
