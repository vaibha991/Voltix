import React from "react";
import Image from "next/image";
import { Product } from "@/lib/types";

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
      >
        <div className="w-32 h-32 relative mb-2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

export default ProductList;
