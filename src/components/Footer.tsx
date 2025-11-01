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
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
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
                className="p-3 rounded-lg bg-gradient-to-r from-[#E8C999] to-[#F8EEDF] text-black hover:from-[#F8EEDF] hover:to-[#E8C999] transition-all transform hover:scale-105"
              >
                <TfiEmail className="w-5 h-5" />
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
                <a href="#services" className="hover:text-[#E8C999] transition-colors inline-block">
                  Services
                </a>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#E8C999] transition-colors inline-block">
                  Products
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E8C999] transition-colors inline-block">
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
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F8EEDF] hover:bg-[#E8C999] hover:text-black transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F8EEDF] hover:bg-[#E8C999] hover:text-black transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F8EEDF] hover:bg-[#E8C999] hover:text-black transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F8EEDF] hover:bg-[#E8C999] hover:text-black transition-all transform hover:scale-110"
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

     
    </footer>
  );
};

export default Footer;
