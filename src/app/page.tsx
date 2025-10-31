"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Product from "@/components/Product";
import Quality from "@/components/Quality";
import GetIntouch from "@/components/GetIntouch";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <section id="about">
          <About showTeam={false} />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="products">
          <Product />
        </section>
        <section id="quality">
          <Quality />
        </section>
        <GetIntouch />
        <Footer />
      </div>

      {/* Scroll to Top Button - Mobile Only */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="block md:hidden fixed bottom-8 right-6 z-[9999] bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white p-4 rounded-full shadow-2xl hover:from-[#B91C1C] hover:to-[#8E1616] transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
          style={{ willChange: 'transform' }}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}
