"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
  <div className="flex items-center justify-between h-12 md:h-14">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg md:text-xl font-extrabold text-white hover:scale-105 transition-transform">
              AarCee <span className="text-[#E8C999]">Casting</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-white hover:text-[#E8C999] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8C999] hover:after:w-full after:transition-all"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-white hover:text-[#E8C999] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8C999] hover:after:w-full after:transition-all"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-[#E8C999] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8C999] hover:after:w-full after:transition-all"
            >
              About Us
            </Link>
            <a 
              href="#contact-form" 
              className="bg-gradient-to-r from-[#E8C999] to-[#F8EEDF] text-black px-4 py-1 md:px-4 md:py-2 rounded-full font-semibold hover:from-[#F8EEDF] hover:to-[#E8C999] transition-all transform hover:scale-105 shadow-sm text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)} 
              aria-label="Toggle menu" 
              className="p-1 text-white hover:text-[#E8C999] transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className="block text-white text-lg hover:text-[#E8C999] transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block text-white text-lg hover:text-[#E8C999] transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="block text-white text-lg hover:text-[#E8C999] transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="#contact-form" 
              className="block bg-gradient-to-r from-[#E8C999] to-[#F8EEDF] text-black px-6 py-3 rounded-full font-bold text-center hover:from-[#F8EEDF] hover:to-[#E8C999] transition-all"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
