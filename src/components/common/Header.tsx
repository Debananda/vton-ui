import React from "react";

const Header: React.FC = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-100 text-xs text-center py-1 px-4">
        <span className="text-gray-600">
          Buy Apparels & Get 50% Offer on Accessories* | Save 5% on Dresses |
          Get 50% Offer on Activewear | FREE SHIPPING FOR OVER
        </span>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold tracking-wider">
                ALTAR'D STATE
              </h1>
              <span className="ml-2 bg-black text-white text-xs px-2 py-1 rounded">
                ONLINE
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
              <button className="text-sm font-medium">SIGN IN</button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center space-x-8 py-4 border-t border-gray-100">
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Clothing
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Tops
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Bottoms
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Jackets + Vests
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Accessories
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Apparels
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Special Products
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
