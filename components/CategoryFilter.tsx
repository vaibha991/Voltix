"use client";

import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category || "All")}
          className={`px-5 py-2 rounded-full border text-white text-sm font-semibold transition-all duration-300 ease-in-out
            ${
              selectedCategory === category
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_15px_rgb(255,105,180)]"
                : "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-blue-500 hover:shadow-[0_0_10px_rgb(0,191,255)]"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
