import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <div className="relative bg-black">
      {/* {mobile view} */}
      <div className="relative sm:hidden w-full  ">
       <video
        src="/assets/background_video.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="opacity-20 scale-x-[-1] w-full h-screen"
        />
      </div>
      {/* window sceen  */}
      <div className="max-sm:hidden ">
      <video
        src="/assets/background.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="  opacity-20 scale-x-[-1]"
        />
        </div>
      <div className="absolute bottom-30 p-4 md:top-1/3 text-white flex flex-col gap-6 m-5  ">
        <h1 className="font-bold md:text-5xl text-white text-5xl">
          Precision steel Casting <br />
          <span className="text-heading">Solutions </span>
        </h1>
        <p className="text-gray-200  ">
          Delivering exceptional quality steel casting with cutting-edge
          technology and decades of experties.
        </p>
        <div className="flex gap-4 ">
          <button className="bg-yellow-900 rounded  flex items-center gap-2 p-3">Request a Quote <FaArrowRight /></button>
          <button className="border px-5 rounded p-3 ">lean More </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
