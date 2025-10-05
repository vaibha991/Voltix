"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";

// Define proper cart item type
type CartItemType = {
  id: string | number;
  name: string;
  price: number;
  imageUrl?: string;
  quantity: number;
  [key: string]: unknown; // other optional fields
};

const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { name: "About us", href: "#" },
      { name: "Delivery Information", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Contact Us", href: "#" },
    ]
  },
  {
    title: "My Account",
    links: [
      { name: "Sign In", href: "#" },
      { name: "View Cart", href: "#" },
      { name: "My Wishlist", href: "#" },
      { name: "Track My Order", href: "#" },
      { name: "Help", href: "#" },
    ]
  },
];

const AboutPage: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const initialCart: CartItemType[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(initialCart.reduce((sum, item) => sum + (item.quantity || 0), 0));
  }, []);

  const Newsletter: React.FC = () => (
    <section className="max-w-6xl mx-auto py-16 px-6 sm:px-10 bg-gray-800 rounded-xl shadow-2xl mb-12 flex flex-col md:flex-row justify-between items-center border border-gray-700">
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h4 className="text-3xl font-extrabold text-white">Sign Up For News Releases</h4>
        <p className="text-gray-400 mt-2">
          Get E-mail updates about our latest shop and <span className="text-blue-400 font-semibold">special offers.</span>
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Your email address"
          className="flex-grow p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200 shadow-md">
          Sign Up
        </button>
      </div>
    </section>
  );

  const Footer: React.FC = () => (
    <footer className="w-full bg-gray-900 border-t border-gray-800 pt-10 pb-4 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Logo & Contact */}
        <div className="col space-y-4 col-span-2 md:col-span-1">
          <Image src="/logo1.png" alt="Voltix Logo" width={150} height={40} />
          <h4 className="text-xl font-bold text-white mt-4">Contact</h4>
          <p><strong>Address: </strong>742 Infinity Loop, Andromeda City...</p>
          <p><strong>Phone:</strong> +99 1234 567 890</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
          <div className="mt-4">
            <h4 className="text-lg font-bold text-white mb-2">Follow us</h4>
            <div className="flex gap-3 text-2xl text-gray-500">
              <i className="fab fa-facebook-f hover:text-white transition"></i>
              <i className="fab fa-twitter hover:text-white transition"></i>
              <i className="fab fa-instagram hover:text-white transition"></i>
              <i className="fab fa-pinterest-p hover:text-white transition"></i>
              <i className="fab fa-youtube hover:text-white transition"></i>
            </div>
          </div>
        </div>

        {/* Footer links */}
        {FOOTER_LINKS.map((col) => (
          <div key={col.title} className="col space-y-3">
            <h4 className="text-xl font-bold text-white">{col.title}</h4>
            {col.links.map((link) => (
              <a key={link.name} href={link.href} className="block hover:text-white transition">
                {link.name}
              </a>
            ))}
          </div>
        ))}

        {/* Install App */}
        <div className="col install space-y-3 lg:col-span-2 md:col-span-2">
          <h4 className="text-xl font-bold text-white">Install App</h4>
          <p className="text-gray-300">From App Store or Google Play</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              App Store
            </a>
            <a href="#" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Google Play
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
        <p>© 2025, Voltix - All rights reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-black">
      <Header cartCount={cartCount} />

      <main>
        {/* Hero Section */}
        <section
          className="relative h-100 w-381 p-96 flex flex-col items-center justify-center text-white border-b-4 border-blue-500 shadow-xl"
          style={{
            backgroundImage: `url('https://swapithub.com/wp-content/uploads/2023/05/LATEST-TECHNOLOGY-SHAPE-THE-FUTURE-OF-ONLINE-SHOPPING.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 text-center bg-black/50 p-4 rounded">
            <h2 className="text-5xl font-extrabold tracking-tight">#KnowUs</h2>
            <p className="text-xl mt-3 text-gray-300">
              We believe shopping should be fun, fast, and stress-free. Join us on a journey to discover products that make every day better.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col lg:flex-row items-start gap-12 text-gray-300">
          <div className="w-full lg:w-2/5 flex justify-center">
            <Image
              src="/logo1.png"
              alt="Voltix Logo"
              width={400}
              height={450}
              className="rounded-xl shadow-2xl border border-gray-700 object-cover"
            />
          </div>

          <div className="lg:w-3/5">
            <h2 className="text-4xl font-bold text-white mb-6 border-b border-gray-700 pb-3">Who We Are</h2>
            <p className="mb-4 leading-relaxed">
              At <strong>Voltix</strong>, we believe technology is more than just gadgets&mdash;it&apos;s the spark that powers innovation and connects the world. Founded with a passion for electronics and cutting-edge solutions, we bring you the latest devices, smart innovations, and essential components to electrify your life.
            </p>
            <p className="mb-6 leading-relaxed">
              Our commitment is to provide high-quality electronics, reliable performance, and designs that combine functionality with style. Whether you&apos;re looking for smart home devices, personal gadgets, or advanced components, <strong>Voltix</strong> has something for every tech enthusiast.
            </p>

            <p className="text-sm italic text-gray-500 border-l-4 border-blue-500 pl-4 py-2 bg-gray-900 rounded-r-lg">
              <abbr title="Image Generation">
                Generate breathtaking images with the flexibility to choose between Basic and Creative modes, giving you as much or as little control as you desire.
              </abbr>
            </p>

            <div className="bg-gray-700 text-white py-2 px-4 rounded-lg overflow-hidden mt-4">
              <div className="animate-marquee whitespace-nowrap">
                Generate breathtaking images with the flexibility to choose between Basic and Creative modes, giving you as much or as little control as you desire.
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
