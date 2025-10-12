import Hero from "@/components/Hero";
import React from "react";
import Product from "@/components/Product";
import Quality from "@/components/Quality";
import GetIntouch from "@/components/GetIntouch";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Hero />

      {/* Section 2 — Company Overview (Short About) */}
      <section id="about-short" className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-4">About Aarcee Casting</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Aarcee Casting is a trusted manufacturer of high-quality steel castings built to meet global industrial standards. With
                modern foundry infrastructure and a passion for precision, we deliver durable, high-performance castings for critical
                applications.
              </p>
              <Link href="/about" className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-black font-semibold px-5 py-2 rounded-md shadow">
                Learn More About Us
              </Link>
            </div>
            <div className="order-first md:order-last">
              {/* Decorative card */}
              <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/2 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Built for performance</h3>
                <p className="text-gray-300">Precision casting, strict quality controls, and services tailored to your project's needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Core Services (Highlights) */}
      <section id="capabilities" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Our Capabilities</h2>
            <p className="text-gray-300">End-to-end casting solutions under one roof.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 bg-white/3 rounded-lg border border-white/6">
              <h4 className="text-lg font-semibold text-white mb-2">Custom Steel Castings</h4>
              <p className="text-gray-300 text-sm">Bespoke castings engineered to specification for demanding applications.</p>
            </div>

            <div className="p-6 bg-white/3 rounded-lg border border-white/6">
              <h4 className="text-lg font-semibold text-white mb-2">Pattern Development &amp; Machining</h4>
              <p className="text-gray-300 text-sm">In-house pattern design with precision machining to tight tolerances.</p>
            </div>

            <div className="p-6 bg-white/3 rounded-lg border border-white/6">
              <h4 className="text-lg font-semibold text-white mb-2">Heat Treatment &amp; Testing</h4>
              <p className="text-gray-300 text-sm">Full heat treatment cycles and non-destructive testing to ensure integrity.</p>
            </div>

            <div className="p-6 bg-white/3 rounded-lg border border-white/6">
              <h4 className="text-lg font-semibold text-white mb-2">CNC Machining</h4>
              <p className="text-gray-300 text-sm">Final machining services to deliver ready-to-fit components.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about" className="inline-block bg-transparent border border-white/10 text-white px-5 py-2 rounded-md hover:bg-white/5 transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Industries We Serve */}
      <section id="industries" className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-extrabold text-gray-100 mb-2">Industries We Serve</h2>
            <p className="text-gray-300">We supply casting components to leading sectors that power the world.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Automotive','Pumps & Valves','Power','Mining','Oil & Gas'].map((i)=> (
              <span key={i} className="px-4 py-2 bg-white/3 text-gray-100 rounded-full text-sm">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Why Choose Us */}
      <section id="why-choose" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Why Choose Aarcee Casting</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Uncompromised Quality', desc: 'Strict QA & inspection at every stage.' },
              { title: 'Modern Infrastructure', desc: 'State-of-the-art foundry and machinery.' },
              { title: 'On-Time Delivery', desc: 'Reliable schedules and logistics.' },
              { title: 'Sustainable Practices', desc: 'Eco-conscious operations and recycling.' },
            ].map((item)=> (
              <div key={item.title} className="p-6 bg-white/3 rounded-lg border border-white/6 flex flex-col gap-3">
                <div className="text-2xl">✅</div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Call to Action */}
      <section id="cta" className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg p-8 text-black text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Looking for Reliable Steel Casting Partners?</h2>
            <p className="mb-6">Let’s discuss your next project. We deliver quality, precision, and trust.</p>
            <div className="flex justify-center">
              <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md font-semibold">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Existing components (product listings, quality, contact) */}

      <GetIntouch />
    </div>
  );
}
