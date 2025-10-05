"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import Header from "@/components/Header";
import ThreeDSlider from "@/components/ThreeDSlider";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";

// Cart item type
type CartItem = Product & {
  cartItemId: number;
  quantity: number;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const addToCart = (product: Product) => {
    const savedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = savedCart.findIndex(item => item.id === product.id);

    let updatedCart: CartItem[];
    if (existingItemIndex > -1) {
      updatedCart = savedCart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const cartItem: CartItem = {
        ...product,
        cartItemId: Date.now() + Math.random(),
        quantity: 1,
      };
      updatedCart = [...savedCart, cartItem];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    const initialCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(initialCart.reduce((sum, item) => sum + item.quantity, 0));

    fetchProducts();
  }, []);

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category || "Uncategorized")))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header cartCount={cartCount} />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-12 pb-8 bg-black">
        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center gap-4 mb-2">
            <Image src="/logo.png" alt="Voltix Logo" width={60} height={60} className="rounded" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Welcome to Voltix 🛒
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mt-2 text-center max-w-lg">
            Capture the world from above with precision and stability.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto p-6 bg-black">
        {/* 3D Slider */}
        <section className="pt-10">
          <ThreeDSlider />
        </section>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-lg mt-6">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="border border-gray-800 rounded-lg p-4 bg-black text-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 hover:shadow-blue-500/50"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover rounded mb-3 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-400">₹{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
