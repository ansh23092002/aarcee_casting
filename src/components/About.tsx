"use client";
import React from "react";
import { AiFillSafetyCertificate, AiOutlineGlobal, AiOutlineTeam } from "react-icons/ai";
import Image from "next/image";

interface AboutProps {
  showTeam?: boolean;
}

const About: React.FC<AboutProps> = ({ showTeam = true }) => {
  const teamMembers = [
    {
      name: "Yogesh Gupta",
      designation: "Founder ",
      image: "/assets/image/team-member-1.jpg",
      description: "Leading innovation in casting technology since 1985"
    },
    {
      name: "Aaditya Gupta",
      designation: "Chief Operating Officer",
      image: "/assets/image/team-member-2.jpg",
      description: "Ensuring excellence in operations and quality"
    }
  ];

  return (
    <section id="about-section" className="flex flex-col gap-12 p-6 md:p-12 lg:p-20 bg-gradient-to-br from-[#F8EEDF] to-[#E8C999] min-h-screen">
      {/* Main About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-2/5 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <Image
            src="/assets/image/Sand_Casting.jpg"
            width={700}
            height={520}
            alt="Sand casting process"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
            <span className="text-[#8E1616] underline decoration-4 underline-offset-4">About</span> Us
          </h1>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Aarcee Casting Industries is a leading Raipur-based manufacturer
            specializing in high-quality ferrous and non-ferrous castings.
            Founded in 1985, we bring over three decades of expert craftsmanship
            and technical innovation to every project.
          </p>

          <div className="flex items-start gap-3">
            <AiOutlineGlobal className="text-[#8E1616] text-2xl mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              From our advanced facilities in Donde Kala and Donde Khurd, Chhattisgarh,
              we produce a diverse range of products, such as precision CI castings
              and ingots, all engineered to meet rigorous specifications.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <AiFillSafetyCertificate className="text-[#8E1616] text-2xl mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Our legacy is built on a perfected process that guarantees superior,
              consistent quality, flawless dimensional accuracy, and an outstanding
              surface finish in every piece.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <AiOutlineTeam className="text-[#8E1616] text-2xl mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We combine modern manufacturing technology with strict quality control
              practices and a skilled workforce to deliver components that meet the
              exacting standards of our customers across industries.
            </p>
          </div>

          <div className="mt-4">
            <a href="#contact" className="inline-block bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white font-semibold px-6 py-3 rounded-lg hover:from-[#B91C1C] hover:to-[#8E1616] transition transform hover:scale-105 shadow-lg">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {showTeam && (
        <div className="mt-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#8E1616] mb-3">
              Our Leadership Team
            </h2>
            <p className="text-gray-700 text-lg">
              Meet the visionaries driving excellence at Aarcee Casting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/60 border border-[#8E1616]/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-[#8E1616] shadow-lg">
                    <Image
                      src={member.image}
                      width={128}
                      height={128}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=128&background=8E1616&color=fff`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#8E1616] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 font-semibold mb-3">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
