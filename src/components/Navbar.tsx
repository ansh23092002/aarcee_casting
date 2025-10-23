"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#480500] via-[#A22900] to-[#480500] backdrop-blur-lg border-b border-[#A22900]/20 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl md:text-2xl font-extrabold text-white hover:scale-105 transition-transform">
              Aarcee <span className="text-[#A22900]">Casting</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-white hover:text-[#A22900] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A22900] hover:after:w-full after:transition-all"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-white hover:text-[#A22900] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A22900] hover:after:w-full after:transition-all"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-[#A22900] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A22900] hover:after:w-full after:transition-all"
            >
              About Us
            </Link>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#A22900] to-[#480500] text-white px-6 py-2 rounded-full font-bold hover:from-[#480500] hover:to-[#A22900] transition-all transform hover:scale-105 shadow-lg"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)} 
              aria-label="Toggle menu" 
              className="p-2 text-white hover:text-[#A22900] transition-colors"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-gradient-to-br from-[#480500] to-[#A22900] border-t border-[#A22900]/20 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className="block text-white text-lg hover:text-[#A22900] transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block text-white text-lg hover:text-[#A22900] transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="block text-white text-lg hover:text-[#A22900] transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="#contact" 
              className="block bg-gradient-to-r from-[#A22900] to-[#480500] text-white px-6 py-3 rounded-full font-bold text-center hover:from-[#480500] hover:to-[#A22900] transition-all"
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
