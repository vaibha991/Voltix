"use client";

import Link from "next/link";



export default function Header({ cartCount = 0 }: { cartCount?: number }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-95 backdrop-blur-md shadow-2xl border-b border-purple-600">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 relative">
            {/* Optional Logo */}
          </div>
          <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-400 transition-all duration-200">
            Voltix
          </span>
        </Link>

        {/* Nav Links + Cart */}
        <ul className="flex space-x-8 text-lg font-medium items-center">
          {/* Home - Gradient 1 */}
          <li>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-green-400 via-lime-400 to-emerald-500 bg-clip-text text-transparent hover:from-lime-400 hover:to-green-500 transition-all duration-200"
            >
              Home
            </Link>
          </li>

          {/* Cart - Gradient 2 */}
          <li>
            <Link
              href="/cart"
              className="flex items-center space-x-2 relative bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent hover:from-orange-400 hover:to-red-500 transition-all duration-200"
            >
              {/* Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white" // keep icon white for contrast
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M16 16a2 2 0 11-4 0"
                />
              </svg>

              {/* Cart Count Badge */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>

          {/* About - Gradient 3 */}
          <li>
            <Link
              href="/about"
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent hover:from-teal-400 hover:to-cyan-400 transition-all duration-200"
            >
              About
            </Link>

          </li>
          

        </ul>
      </nav>
    </header>
  );
}
