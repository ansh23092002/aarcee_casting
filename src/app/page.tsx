"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { FaArrowUp } from "react-icons/fa";

// Lazy load heavy components
const Footer = lazy(() => import("@/components/Footer"));
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Product = lazy(() => import("@/components/Product"));
const Stats = lazy(() => import("@/components/Stats"));
const Quality = lazy(() => import("@/components/Quality"));
const GetIntouch = lazy(() => import("@/components/GetIntouch"));

// Loading fallback
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8E1616]"></div>
  </div>
);

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle hash scroll on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        <Suspense fallback={<SectionLoader />}>
          <section id="about" className="relative z-10 bg-white">
            <About showTeam={false} showFullContent={false} />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="services" className="relative z-10 bg-white">
            <Services />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="products" className="relative z-10 bg-white">
            <Product />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <div className="relative z-10 bg-white">
            <Stats />
          </div>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="quality" className="relative z-10 bg-white">
            <Quality />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <div className="relative z-10 bg-white">
            <GetIntouch />
          </div>
        </Suspense>
        <Suspense fallback={null}>
          <div className="relative z-10">
            <Footer />
          </div>
        </Suspense>
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
