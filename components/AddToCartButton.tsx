"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { addToCart } from "@/lib/cart";
import { Product } from "@/lib/types";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export default function AddToCartButton({ product, quantity = 1 }: AddToCartButtonProps) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!isSignedIn) {
      // Save product info to localStorage for auto-add after login
      localStorage.setItem(
        "pendingAddToCart",
        JSON.stringify({ product, quantity })
      );
      router.push("/sign-in?redirect=/cart");
      return;
    }

    // User is signed in → add directly
    addToCart(product, quantity);
    router.refresh(); // optional, to refresh cart count in header
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
    >
      Add to Cart
    </button>
  );
}
