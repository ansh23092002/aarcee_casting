import React from "react";
import { FaArrowRight, FaCogs, FaShieldAlt, FaClock } from "react-icons/fa";

const Index = () => {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Mobile view */}
      <div className="relative sm:hidden w-full h-screen">
        <video
          src="/assets/background_video.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="opacity-90 scale-x-[-1] w-full h-full object-cover"
        />
      </div>
      {/* Desktop view */}
      <div className="max-sm:hidden w-full h-screen">
        <video
          src="/assets/background.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="opacity-90 scale-x-[-1] w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-8 md:px-16">
        <div className="text-center sm:text-left text-white max-w-2xl">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Precision Steel <br />
            <span className="text-[#E8C999]">Casting Solutions</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8">
            Delivering exceptional quality steel casting with cutting-edge technology and decades of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mb-12">
            <button className="bg-gradient-to-r from-[#E8C999] to-[#F8EEDF] text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 hover:from-[#F8EEDF] hover:to-[#E8C999] transform hover:scale-105 shadow-lg text-sm sm:text-base">
              Request a Quote <FaArrowRight />
            </button>
            <button className="border-2 border-[#E8C999] text-[#E8C999] hover:bg-[#E8C999] hover:text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 text-sm sm:text-base">
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
