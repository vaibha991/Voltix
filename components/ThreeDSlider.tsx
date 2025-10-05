"use client";

import Image from "next/image";

const products = [
  { id: 1, name: "VR Headset", description: "Step into a virtual world with ultra-realistic visuals.", image: "/vr.webp", gradient: "from-pink-500 to-red-500", hoverShadow: "hover:shadow-pink-400/50" },
  { id: 2, name: "Smartwatch Pro", description: "Stay connected and track your fitness in style.", image: "/smartwatch.webp", gradient: "from-yellow-400 to-orange-500", hoverShadow: "hover:shadow-yellow-400/50" },
  { id: 3, name: "Drone X", description: "Capture aerial shots with precision and stability.", image: "/drone.webp", gradient: "from-purple-400 to-indigo-500", hoverShadow: "hover:shadow-purple-400/50" },
  { id: 4, name: "Next-Gen Laptop", description: "Blazing-fast performance meets sleek futuristic design.", image: "/laptop.jpg", gradient: "from-emerald-400 to-green-600", hoverShadow: "hover:shadow-emerald-400/50" },
  { id: 5, name: "Smartphone X", description: "Power in your hands. Capture life in ultra HD.", image: "/phone.webp", gradient: "from-fuchsia-500 to-purple-600", hoverShadow: "hover:shadow-fuchsia-400/50" },
];

export default function ThreeDSlider() {
  const total = products.length;
  const radius = 250; // distance from center

  return (
    <div className="relative w-full h-96 perspective-1000 my-16">
      <div className="absolute w-full h-full flex justify-center items-center carousel-3d">
        {products.map((product, index) => {
          const angle = (360 / total) * index;
          return (
            <div
              key={product.id}
              className={`absolute w-64 h-80 bg-gradient-to-br ${product.gradient} rounded-xl shadow-2xl p-6 card-3d ${product.hoverShadow} transform transition-transform duration-500`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
              <p className="text-sm text-gray-200">{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
