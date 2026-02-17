import React from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="p-4 w-full border-b border-gray-100 bg-white">
      
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-[#1a1a1a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-widest text-[#1a1a1a]">
            MOON.
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-black transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 hover:text-black transition-colors font-medium"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-black transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-black transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-5 text-[#1a1a1a]">
          <button className="hover:text-gray-500 transition-colors">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <Link to="/profile" className="hover:text-gray-500 transition-colors">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <Link
            to="/wishlist"
            className="hover:text-gray-500 transition-colors"
          >
            <Heart size={22} strokeWidth={1.5} />
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-500 transition-colors relative"
          >
            <ShoppingCart size={22} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
