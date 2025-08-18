import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
   <div className="">
    <Navbar/>
    <Hero/>
    <About/>
    
    <Footer/>
   </div>
  );
}
