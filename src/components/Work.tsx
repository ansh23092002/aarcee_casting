import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="m-4 border-2 rounded-2xl  overflow-hidden  border-yellow-800  grid place-items-center">
      <div className=" h-100 w-full flex  items-center justify-around bg-gray-100 p-4">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/image/molten.png"
            alt="Work Image 1"
            height={100}
            width={100}
            className=""
          />
          <p className="text-center">Work Image 1</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/image/molten.png"
            alt="Work Image 1"
            height={100}
            width={100}
            className=""
          />
          <p className="text-center">Work Image 1</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/image/molten.png"
            alt="Work Image 1"
            height={100}
            width={100}
            className=""
          />
          <p className="text-center">Work Image 1</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
