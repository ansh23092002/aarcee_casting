import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Image from "next/image";
const About = () => {
  return (
    <div className="min-sm:flex  w-sceen h-full bg-color  p-20 gap-10 items-center justify-around">
      <div className="w-full h-100 border border-white  rounded-xl w-full overflow-hidden ">
        {/* image */}
       <Image
      src="/assets/image/Sand_Casting.jpg"
      width={600}
      height={500}
      alt="Picture of the author"
    />
      </div>
      <div className="text-white  w-full flex flex-col gap-7">
        <h1 className="text-4xl font-bold">
          <span className="text-green-800 ">
            {" "}
            <u>About</u>
          </span>{" "}
          Aarcee Casting
        </h1>
        <div>
          founded in 1985, Aarcee Casting Campany has established itself as a
          premier steel casting manufacturer with a commmitment to excellence
          and innovation. Our state-of-the-art facilities and experienced team
          allow us to deliver superio products that meet the most demanding
          specifications.
          <br />
        </div>
        <div className=" ">
          With over three decades of exprience in the industry, we have
          perferted our processs to ensure consistent quality, precise
          dimensional accuracy, and exceptional surface finish across all our
          steel castings.
        </div>
        <div className="flex flex-row  gap-10  justify-items-start">
          <div className="">
            <p className="flex items-center gap-3">
              <AiFillSafetyCertificate style={{ color: "green" }} />
              35+ Years Experience
            </p>
            <p className="flex items-center gap-3">
              <AiFillSafetyCertificate style={{ color: "green" }} />
              ISO 9001 Certified{" "}
            </p>
          </div>

          <div>
            <p className="flex items-center gap-3">
              <AiFillSafetyCertificate style={{ color: "green" }} />
              Global Distribution
            </p>
            <p className="flex items-center gap-3">
              <AiFillSafetyCertificate style={{ color: "green" }} />
              custom Solution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
