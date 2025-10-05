import React from "react";
import { CartItem } from "@/lib/types";

interface CartProps {
  cart?: CartItem[];
  updateQuantity: (cartItemId: string, quantity: number) => void;
  checkout: () => void;
}

const Cart: React.FC<CartProps> = ({ cart = [], updateQuantity, checkout }) => {
  const total = cart.reduce(
    (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 1),
    0
  );

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl w-full max-w-md mx-auto text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-white border-b border-gray-700 pb-3">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 py-8 text-lg">
          No items in cart. Start shopping!
        </p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => {
            const quantity = typeof item.quantity === "number" ? item.quantity : 1;
            const price = typeof item.price === "number" ? item.price : 0;

            return (
              <li
                key={item.cartItemId || item.id.toString()}
                className="relative flex items-center justify-between p-3 rounded-lg overflow-hidden
                           before:absolute before:inset-0 before:-z-10 before:rounded-lg
                           before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500
                           before:bg-[length:300%_300%] before:animate-gradient
                           hover:before:opacity-100 transition duration-300"
              >
                <div className="flex-grow relative z-10">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-gray-300 flex items-center mt-1">
                    ${price.toFixed(2)} x
                    <input
                      type="number"
                      value={quantity}
                      min={1}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        updateQuantity(
                          item.cartItemId || item.id.toString(),
                          isNaN(val) ? 1 : val
                        );
                      }}
                      className="w-16 ml-3 border border-gray-600 rounded-md px-1 py-0.5 text-center text-sm bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </p>
                </div>
                <span className="font-bold text-lg text-white relative z-10">
                  ${(price * quantity).toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-8 pt-4 border-t border-gray-700 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">
          Total: ${total.toFixed(2)}
        </h3>
        <button
          onClick={checkout}
          disabled={cart.length === 0}
          className={`
            px-6 py-3 rounded-xl text-lg font-semibold shadow-lg
            ${cart.length === 0
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-green-500 to-lime-400 text-white hover:from-lime-400 hover:to-green-500 transition duration-200 ease-in-out"
            }
          `}
        >
          Proceed to Checkout
        </button>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Cart;
