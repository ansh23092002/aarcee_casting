'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const submitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("newsletter sign up", email);
    setEmail("");
    alert("Thanks! We'll keep you updated.");
  };

  return (
    <footer className="bg-gradient-to-br from-[#480500] to-[#A22900] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Stay Connected / Newsletter */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#A22900]">
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
                className="flex-1 px-4 py-3 rounded-lg bg-[#480500] border border-[#A22900] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="p-3 rounded-lg bg-gradient-to-r from-[#A22900] to-[#480500] text-white hover:from-[#480500] hover:to-[#A22900] transition-all transform hover:scale-105"
              >
                <TfiEmail className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#A22900]">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-white text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-[#A22900] transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#A22900] transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#services" className="hover:text-[#A22900] transition-colors inline-block">
                  Services
                </a>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#A22900] transition-colors inline-block">
                  Products
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A22900] transition-colors inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#A22900]">
              CONTACT US
            </h3>
            <div className="space-y-4 text-white text-sm md:text-base">
              <div className="flex items-start gap-3">
                <HiLocationMarker className="text-[#A22900] text-xl flex-shrink-0 mt-1" />
                <div>
                  <p>Donde Kala & Donde Khurd</p>
                  <p>Raipur, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="text-[#A22900] text-xl flex-shrink-0" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="text-[#A22900] text-xl flex-shrink-0" />
                <a href="mailto:info@aarceecasting.com" className="hover:text-white transition-colors">
                  info@aarceecasting.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm md:text-base font-bold tracking-widest mb-4 text-[#A22900]">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#480500] hover:bg-[#A22900] text-white hover:text-white transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#480500] hover:bg-[#A22900] text-white hover:text-white transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#480500] hover:bg-[#A22900] text-white hover:text-white transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#480500] hover:bg-[#A22900] text-white hover:text-white transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Connect with us on social media for industry insights and company updates.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#A22900]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-white text-xs md:text-sm">
          <div className="mb-3 md:mb-0">
            © {new Date().getFullYear()} Aarcee Casting Industries. All rights reserved.
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-[#A22900] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#A22900] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#A22900] transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
