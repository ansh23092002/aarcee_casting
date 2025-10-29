import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Product from "@/components/Product";
import Quality from "@/components/Quality";
import GetIntouch from "@/components/GetIntouch";

export default function Home() {
  return (
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
  );
}
