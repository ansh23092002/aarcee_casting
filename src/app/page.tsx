import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
   <div className="">
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Footer/>
   </div>
  );
}
