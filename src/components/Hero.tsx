import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative bg-black  ">
      <video
        src="/assets/background.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="w-full h-screen object-fill  min-md:object-cover opacity-20 scale-x-[-1]"
      />
      <div className="absolute top-1/3 left-30 w-130 text-white grid gap-6">
        <h1 className="font-bold text-5xl text-white">
          Precision steel Casting <br />
          <span className="text-green-800">Solutions </span>
        </h1>
        <p className="text-gray-200">
          Delivering exceptional quality steel casting with cutting-edge
          technology and decades of experties.
        </p>
        <div className="flex gap-4 ">
          <button className="bg-green-800 rounded p-3 flex items-center gap-2">Request a Quote <FaArrowRight /></button>
          <button className="border p-3  px-5 rounded ">lean More </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
