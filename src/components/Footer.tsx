'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const submitNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: email,
          message: "Newsletter subscription request",
          type: "newsletter"
        }),
      });

      if (response.ok) {
        alert("Thanks! We'll keep you updated.");
        setEmail("");
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Stay Connected / Newsletter */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#E8C999]">
              STAY CONNECTED
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6">
              Join our newsletter for the latest updates and exclusive offers.
            </p>

            <form onSubmit={submitNewsletter} className="flex items-center gap-2">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#F8EEDF] border border-[#E8C999] text-black placeholder-gray-600 focus:outline-none focus:border-[#8E1616] transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                disabled={loading}
                className="p-3 rounded-lg bg-gradient-to-r from-[#E8C999] to-[#F8EEDF] text-black hover:from-[#F8EEDF] hover:to-[#E8C999] transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <TfiEmail className="w-5 h-5" />
                )}
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#E8C999]">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-white text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-[#E8C999] transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E8C999] transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#E8C999] transition-colors inline-block">
                  Products
                </Link>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-[#E8C999] transition-colors inline-block">
                  Contact
                </a>
              </li>
             
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#E8C999]">
              CONTACT US
            </h3>
            <div className="space-y-4 text-white text-sm md:text-base">
              <div className="flex items-start gap-3">
                <HiLocationMarker className="text-[#E8C999] text-xl flex-shrink-0 mt-1" />
                <div>
                  <p>Donde khurd, kharora Road </p>
                  <p>Raipur, Chhattisgarh 493111</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="text-[#E8C999] text-xl flex-shrink-0" />
                <p>(+91) 777-2937-772</p>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="text-[#E8C999] text-xl flex-shrink-0" />
                <a href="mailto:aarceeCasting.Industries@gmail.com" className="hover:text-[#E8C999] transition-colors">
                  aarceeCasting.Industries@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#E8C999]">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center  bg-[#E8C999] hover:bg-[#F8EEDF] text-black hover:text-black transition-all transform hover:scale-110"
                aria-label="Visit Aarcee Casting Industries on Facebook"
                title="Follow us on Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center  bg-[#E8C999] hover:bg-[#F8EEDF] text-black transition-all transform hover:scale-110"
                aria-label="Visit Aarcee Casting Industries on Twitter"
                title="Follow us on Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center  bg-[#E8C999] hover:bg-[#F8EEDF] text-black transition-all transform hover:scale-110"
                aria-label="Visit Aarcee Casting Industries on Instagram"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8C999] hover:bg-[#F8EEDF] text-black transition-all transform hover:scale-110"
                aria-label="Visit Aarcee Casting Industries on LinkedIn"
                title="Follow us on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Connect with us on social media for industry insights and company updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar - Copyright, Terms, Developer Credit */}
        <div className="border-t border-gray-700 mt-20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-gray-400 text-sm">
              © 2026 Aarcee Casting Industries. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#E8C999] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="text-gray-400 hover:text-[#E8C999] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/faq" className="text-gray-400 hover:text-[#E8C999] transition-colors">
                FAQ
              </Link>
            </div>
            <div className="text-right text-gray-300 text-xs md:text-sm">
              Designed & Developed by <span className="text-[#E8C999] font-semibold">Ansh Sharma</span>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
