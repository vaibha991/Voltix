"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { CartItem, updateCartQuantity, removeCartItem, clearCart } from "@/lib/cart";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);

  const router = useRouter();
  const { isSignedIn } = useUser();

  // Load cart from localStorage
  useEffect(() => {
    const savedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const normalizedCart = savedCart.map(item => ({
      ...item,
      cartItemId: item.cartItemId || Date.now().toString() + Math.random(),
      quantity: item.quantity || 1,
    }));

    setCart(normalizedCart);
    setCartCount(normalizedCart.reduce((sum, item) => sum + item.quantity, 0));
  }, []);

  const handleQuantityChange = (cartItemId: string, quantity: number) => {
    const updatedCart = updateCartQuantity(cartItemId, quantity);
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
  };

  const handleRemoveItem = (cartItemId: string) => {
    const updatedCart = removeCartItem(cartItemId);
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
  };

  const handleCheckout = () => {
    if (!isSignedIn) {
      router.push("/sign-in?redirect=/cart");
      return;
    }

    clearCart();
    setCart([]);
    setCartCount(0);
    setCheckoutMessage("🎉 Success! Your order has been placed. Thank you for shopping!");
    setTimeout(() => setCheckoutMessage(null), 5000);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="min-h-screen p-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        <h1 className="text-4xl font-bold text-white mb-8 text-center relative z-10">
          🛒 Your Cart
        </h1>

        {checkoutMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-green-500 text-center max-w-sm">
              <p className="text-white text-xl font-semibold mb-4">{checkoutMessage}</p>
              <button
                onClick={() => setCheckoutMessage(null)}
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {cart.length === 0 ? (
          <p className="text-gray-300 text-center text-lg mt-12 relative z-10">
            Your cart is empty. Start shopping!
          </p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            {cart.map(item => (
              <div
                key={item.cartItemId}
                className="flex items-center justify-between bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-inner hover:shadow-blue-500/50 transition duration-200"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={80} // w-20
                    height={80} // h-20
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-semibold text-white">{item.name}</p>
                    <p className="text-gray-400 mt-1">
                      ${item.price.toFixed(2)} x{" "}
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={e =>
                          handleQuantityChange(item.cartItemId, parseInt(e.target.value) || 1)
                        }
                        className="w-16 ml-2 text-center rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-white font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleRemoveItem(item.cartItemId)}
                    className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center bg-gray-800 p-6 rounded-xl shadow-xl mt-6">
              <h2 className="text-2xl font-bold text-white">Total: ${total.toFixed(2)}</h2>
              <button
                onClick={handleCheckout}
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </>
  );
}
