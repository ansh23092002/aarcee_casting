import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services"
import React from "react";
import Footer from "@/components/Footer";
import Work from "@/components/Work";

export default function Home() {
  return (
   <div className="">
    <Navbar/>
    <Hero/>
    <Work title="what we do" srcimg="/assets/image/molten.png"/>
    
    <Services  srcimg="/assets/image/Sand_Casting.jpg"/> 
    {/* <Services srcimg="/assets/image/Sand_Casting.jpg"/>   
   */}
    <Footer/>
   </div>
  );
}
