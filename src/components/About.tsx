import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full px-6 py-12 md:px-20 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src="/assets/image/Sand_Casting.jpg"
            width={1200}
            height={900}
            alt="Sand casting process at Aarcee Casting"
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>

        <div className="w-full flex flex-col gap-6 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-heading"><u>About</u></span> Aarcee Casting
          </h2>

          <p>
            Founded in 1985, Aarcee Casting Company has established itself as a
            premier steel casting manufacturer with a commitment to excellence
            and innovation. Our state-of-the-art facilities and experienced team
            enable us to deliver superior products that meet the most demanding
            specifications.
          </p>

          <p>
            With over three decades of experience, we have perfected our
            processes to ensure consistent quality, precise dimensional
            accuracy, and exceptional surface finish across all of our steel
            castings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <AiFillSafetyCertificate className="text-yellow-400" />
                35+ Years Experience
              </p>
              <p className="flex items-center gap-3">
                <AiFillSafetyCertificate className="text-yellow-400" />
                ISO 9001 Certified
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <AiFillSafetyCertificate className="text-yellow-400" />
                Global Distribution
              </p>
              <p className="flex items-center gap-3">
                <AiFillSafetyCertificate className="text-yellow-400" />
                Custom Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
