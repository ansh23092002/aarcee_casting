"use client";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";

const AboutPage = () => {
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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-14 md:pt-16 bg-gray-50">
          <About showTeam={true} />
        </main>
        <Footer />

        {/* Scroll to Top Button - Mobile Only */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="block md:hidden fixed bottom-8 right-6 z-[9999] bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white p-4 rounded-full shadow-2xl hover:from-[#B91C1C] hover:to-[#8E1616] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}
      </div>
    </>
  );
};

export default AboutPage;