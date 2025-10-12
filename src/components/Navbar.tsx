"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu as Menu, FiX as X } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-white">Aarcee <span className="text-orange-400">Casting</span></Link>
            {/* logo only - location removed as requested */}
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-200 hover:text-white">Home</Link>
            <Link href="/products" className="text-gray-200 hover:text-white">Products</Link>
            <Link href="/about" className="text-gray-200 hover:text-white">About Us</Link>
            <a href="#contact" className="text-gray-200 hover:text-white">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-[#071521] border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-white">Home</Link>
            <Link href="/products" className="block text-white">Products</Link>
            <Link href="/about" className="block text-white">About Us</Link>
            <a href="#contact" className="block text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
