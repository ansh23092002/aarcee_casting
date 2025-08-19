import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Image from "next/image";
const Quality = () => {
  return (
    <div className="min-sm:flex  w-sceen h-full bg-color  p-6 md:p-20 gap-10 items-center justify-around">
      
      <div className="text-white  w-full flex flex-col gap-7">
        <h1 className="text-4xl font-bold">
          <span className="text-heading ">
            {" "}
            <u>Quality</u>
          </span>{" "}
          Aarcee Casting
        </h1>
        <div>
          At Aarcee Casting, quality is at the core of everything we do. Our
          comprehensive quality management system ensures that every casting meets 
          or exceeds industry standeds and customer specifications.
          <br />
        </div>
        <div className=" ">
          We employ rigorous testing and inspection protocols throughout the production process, utilizing advanced 
          technology to verify dimensional accuracy, material integrity, and surface quality. 
        </div>
        <div className="flex flex-row  gap-10  justify-items-start">
          

          <div>
            <p className="flex items-center gap-3">
              <AiFillSafetyCertificate style={{ color: "yellow" }} />
              Global Distribution
            </p>
            <p className="flex items-center gap-3">
              <AiFillSafetyCertificate style={{ color: "yellow" }} />
              custom Solution
            </p>
          </div>
        </div>
      </div>
      <div className="w-full   rounded-xl w-full overflow-hidden ">
        {/* image */}
       <Image
      src="/assets/image/Quality.jpg"
      width={600}
      height={600}
      alt="Picture of the author"
    />
      </div>
    </div>
  );
};

export default Quality;
