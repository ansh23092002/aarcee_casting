'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");


  const submitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder - integrate with your newsletter provider
    console.log("newsletter sign up", email);
    setEmail("");
    alert("Thanks! We'll keep you updated.");
  };

  return (
    <footer className="bg-[#0b1820] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stay Connected / Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest">STAY CONNECTED</h3>
            <p className="text-gray-300 mt-4 max-w-sm">
              Join our newsletter for the latest updates and exclusive offers.
            </p>

            <form onSubmit={submitNewsletter} className="mt-6 flex items-center gap-2 max-w-sm">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-[#07151a] border border-[#203039] text-gray-200 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="p-3 rounded-md bg-gradient-to-r from-[#2b8a8a] to-[#0ea5a5] text-white hover:opacity-90"
              >
                <TfiEmail  className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest">QUICK LINKS</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest">CONTACT US</h3>
            <div className="mt-4 text-gray-300 space-y-2">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <a href="mailto:hello@example.com" className="underline hover:text-white">hello@example.com</a>
            </div>
          </div>

          {/* Follow Us + Theme toggle */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest">FOLLOW US</h3>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0f2730] hover:bg-[#142f38]"><FaFacebookF/></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0f2730] hover:bg-[#142f38]"><FaTwitter/></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0f2730] hover:bg-[#142f38]"><FaInstagram/></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0f2730] hover:bg-[#142f38]"><FaLinkedinIn/></a>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <div>© {new Date().getFullYear()} Your Company. All rights reserved.</div>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
