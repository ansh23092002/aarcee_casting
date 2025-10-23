import React from "react";
import { AiFillSafetyCertificate, AiOutlineGlobal, AiOutlineTeam } from "react-icons/ai";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 md:p-12 lg:p-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/assets/image/Sand_Casting.jpg"
          width={700}
          height={520}
          alt="Sand casting process"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
          <span className="text-heading underline decoration-4 underline-offset-4">About</span> Aarcee Casting
        </h1>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Aarcee Casting Industries is a leading Raipur-based manufacturer
          specializing in high-quality ferrous and non-ferrous castings.
          Founded in 1985, we bring over three decades of expert craftsmanship
          and technical innovation to every project.
        </p>

        <div className="flex items-start gap-3">
          <AiOutlineGlobal className="text-heading text-2xl mt-1 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            From our advanced facilities in Donde Kala and Donde Khurd, Chhattisgarh,
            we produce a diverse range of products, such as precision CI castings
            and ingots, all engineered to meet rigorous specifications.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <AiFillSafetyCertificate className="text-heading text-2xl mt-1 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Our legacy is built on a perfected process that guarantees superior,
            consistent quality, flawless dimensional accuracy, and an outstanding
            surface finish in every piece.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <AiOutlineTeam className="text-heading text-2xl mt-1 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            We combine modern manufacturing technology with strict quality control
            practices and a skilled workforce to deliver components that meet the
            exacting standards of our customers across industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
