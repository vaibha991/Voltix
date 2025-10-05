"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      {/* Small Banners - Row 1 */}
      <section className="flex flex-wrap justify-between gap-6 py-6 px-6">
        {/* Tech Upgrade Banner */}
        <div className="flex flex-col justify-end items-start bg-[url('/img/keyboard.jpg')] bg-cover bg-center min-w-[300px] h-64 lg:flex-1 md:w-[calc(50%-12px)] hover:scale-105 transition-transform duration-300 relative overflow-hidden rounded-lg">
          {/* Note: Removed the black overlay to match the new image's contrast */}
          <div className="relative p-4">
            <h4 className="text-white text-lg font-light">LIMITED STOCK</h4>
            <h2 className="text-white text-3xl font-extrabold mt-0.5">Tech Upgrade</h2>
            <span className="text-white text-sm mt-0.5">Get 30% off top-rated smart devices</span>
            <button className="mt-2 bg-white text-black py-1.5 px-4 rounded hover:bg-gray-200 transition text-sm font-semibold">
              Shop Tech
            </button>
          </div>
        </div>

        {/* Shirts Banner */}
        <div className="flex flex-col justify-end items-start bg-[url('/img/daily.jpg')] bg-cover bg-center min-w-[300px] h-64 lg:flex-1 md:w-[calc(50%-12px)] hover:scale-105 transition-transform duration-300 relative overflow-hidden rounded-lg">
          <div className="relative p-4">
            <h4 className="text-white text-lg font-light">DAILY WEAR</h4>
            <h2 className="text-white text-3xl font-extrabold mt-0.5">Essential Comfort</h2>
            <span className="text-white text-sm mt-0.5">Buy 2 Shirts, get the 3rd at half price!</span>
            <button className="mt-2 bg-white text-black py-1.5 px-4 rounded hover:bg-gray-200 transition text-sm font-semibold">
              View Styles
            </button>
          </div>
        </div>

        {/* Games Banner */}
        <div className="flex flex-col justify-end items-start bg-[url('/img/game.jpg')] bg-cover bg-center min-w-[300px] h-64 lg:flex-1 md:w-[calc(50%-12px)] hover:scale-105 transition-transform duration-300 relative overflow-hidden rounded-lg">
          <div className="relative p-4">
            <h4 className="text-white text-lg font-light">PRE-ORDER NOW</h4>
            <h2 className="text-white text-3xl font-extrabold mt-0.5">New Adventures</h2>
            <span className="text-white text-sm mt-0.5">Unlock bonus content with any new title</span>
            <button className="mt-2 bg-white text-black py-1.5 px-4 rounded hover:bg-gray-200 transition text-sm font-semibold">
              Explore Games
            </button>
          </div>
        </div>
      </section>

      {/* Banner3 Section - Row 2 */}
      <section className="flex flex-wrap justify-center gap-6 py-6 px-6">
        {/* Flash Sale Banner (T-Shirts) */}
        <div className="flex flex-col justify-end items-start bg-[url('/img/tshirt.webp')] bg-cover bg-center min-w-[300px] h-64 lg:flex-1 md:w-[calc(50%-12px)] hover:scale-105 transition-transform duration-300 relative overflow-hidden rounded-lg">
          <div className="relative p-4">
            <h4 className="text-white text-lg font-light">LIMITED TIME</h4>
            <h2 className="text-white text-3xl font-extrabold mt-0.5">FLASH SALE</h2>
            <span className="text-white text-sm mt-0.5">Extra 25% off all accessories, today only!</span>
            <button className="mt-2 bg-white text-black py-1.5 px-4 rounded hover:bg-gray-200 transition text-sm font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        {/* Limited Edition Banner (Sneaker) */}
        <div className="flex flex-col justify-end items-start bg-[url('/img/sneaker.webp')] bg-cover bg-center min-w-[300px] h-64 lg:flex-1 md:w-[calc(50%-12px)] hover:scale-105 transition-transform duration-300 relative overflow-hidden rounded-lg">
          <div className="relative p-4">
            <h4 className="text-white text-lg font-light">EXCLUSIVE RELEASE</h4>
            <h2 className="text-white text-3xl font-extrabold mt-0.5">LIMITED EDITION</h2>
            <span className="text-white text-sm mt-0.5">Be the first to grab the latest sneaker drop</span>
            <button className="mt-2 bg-white text-black py-1.5 px-4 rounded hover:bg-gray-200 transition text-sm font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <div className="text-center py-4 text-gray-400 text-sm">
        &copy; 2025 Voltix. All rights reserved.
      </div>
    </footer>
  );
}