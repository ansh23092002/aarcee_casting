"use client";
import React from "react";
import Link from "next/link";
import { AiFillSafetyCertificate, AiOutlineGlobal, AiOutlineTeam, AiFillRocket } from "react-icons/ai";
import { FaIndustry, FaShieldAlt, FaCogs, FaAward, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

interface AboutProps {
  showTeam?: boolean;
  showFullContent?: boolean;
}

const About: React.FC<AboutProps> = ({ showTeam = true, showFullContent = true }) => {
  const teamMembers = [
    {
      name: "Yogesh Gupta",
      designation: "Founder & Managing Director",
      image: "/assets/image/team-member-1.jpg",
      description: "Pioneering innovation in precision steel casting and manufacturing excellence since 1985"
    },
    {
      name: "Aaditya Gupta",
      designation: "Chief Operating Officer",
      image: "/assets/image/team-member-2.jpg",
      description: "Driving operational excellence and quality assurance across all manufacturing processes"
    }
  ];

  const milestones = [
    { year: "1985", title: "Company Founded", description: "Established in Raipur, Chhattisgarh" },
    { year: "1995", title: "Expansion Phase", description: "Advanced manufacturing facility setup" },
    { year: "2010", title: "ISO Certification", description: "Achieved international quality standards" },
    { year: "2025", title: "Industry Leader", description: "Serving 500+ clients across India" }
  ];

  const values = [
    { icon: <FaShieldAlt className="text-3xl" />, title: "Quality First", description: "Uncompromising quality in every casting" },
    { icon: <AiFillRocket className="text-3xl" />, title: "Innovation", description: "Advanced technology & continuous improvement" },
    { icon: <AiOutlineTeam className="text-3xl" />, title: "Customer Focus", description: "Dedicated to exceeding expectations" },
    { icon: <FaAward className="text-3xl" />, title: "Excellence", description: "Industry-leading precision & reliability" }
  ];

  const capabilities = [
    "Gray Cast Iron Castings",
    "High Manganese Steel Production",
    "Alloy Steel Components",
    "Precision Machining Services",
    "Rolling Mill Casting Solutions",
    "Custom Steel Casting",
    "Quality Testing & Inspection",
    "Engineering Support"
  ];

  return (
    <section id="about-section" className="flex flex-col gap-8 md:gap-12 px-4 py-12 sm:py-16 sm:px-6 md:px-12 lg:px-20 lg:py-20 bg-gradient-to-br from-[#F8EEDF] to-[#E8C999] min-h-screen">
      {/* Main About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto w-full">
        <div className="w-full lg:w-2/5 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          <Image
            src="/assets/image/Sand_Casting.jpg"
            width={700}
            height={520}
            alt="Sand casting process - Aarcee Casting Industries manufacturing facility"
            className="w-full h-auto object-cover"
            priority
            loading="eager"
          />
        </div>

        <div className="w-full lg:w-3/5 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
            <span className="text-[#8E1616] underline decoration-2 md:decoration-4 underline-offset-4">About</span> Us
          </h1>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>Aarcee Casting Industries</strong> is a premier <strong>steel casting manufacturer</strong> based in Raipur, Chhattisgarh, 
            specializing in high-quality <strong>ferrous and non-ferrous castings</strong>. 
            Established in <strong>1985</strong>, we bring over <strong>three decades of expertise</strong> in precision casting, 
            combining traditional craftsmanship with cutting-edge technology to deliver exceptional results for every project.
          </p>

          <div className="flex items-start gap-3">
            <AiOutlineGlobal className="text-[#8E1616] text-xl md:text-2xl mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Operating from our state-of-the-art manufacturing facilities in <strong>Donde Khurd, Chhattisgarh</strong>, 
              we produce an extensive range of <strong>precision CI (Cast Iron) castings</strong>, <strong>steel castings</strong>, 
              and <strong>steel casting</strong>. Every product is meticulously engineered to meet stringent industry specifications 
              and customer requirements.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <AiFillSafetyCertificate className="text-[#8E1616] text-xl md:text-2xl mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Our reputation is built on delivering <strong>superior quality</strong>, <strong>dimensional accuracy</strong>, 
              and <strong>exceptional surface finish</strong> in every casting. We maintain rigorous <strong>quality control standards</strong> 
              throughout the manufacturing process, ensuring consistent excellence and reliability that our clients trust.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <AiOutlineTeam className="text-[#8E1616] text-xl md:text-2xl mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Powered by <strong>advanced manufacturing technology</strong>, <strong>certified quality management systems</strong>, 
              and a team of <strong>skilled professionals</strong>, we deliver precision-engineered components that exceed 
              the demanding standards of industries including automotive, construction, mining, and industrial equipment manufacturing.
            </p>
          </div>

          <div className="mt-2 md:mt-4">
            <Link href="/#contact-form" className="inline-block bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white font-semibold px-5 sm:px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-lg hover:from-[#B91C1C] hover:to-[#8E1616] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Our Core Values Section */}
      {showFullContent && (
      <div className="max-w-7xl mx-auto w-full mt-8 md:mt-12">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#8E1616] mb-2 md:mb-3">
            Our Core Values
          </h2>
          <p className="text-gray-700 text-base md:text-lg px-4">
            The principles that drive our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white/70 border border-[#8E1616]/20 rounded-xl p-5 md:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]">
              <div className="text-[#8E1616] mb-3 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#8E1616] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Our Capabilities Section */}
      {showFullContent && (
      <div className="max-w-7xl mx-auto w-full mt-8 md:mt-12 bg-white/70 border border-[#8E1616]/20 rounded-xl p-6 md:p-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#8E1616] mb-2 md:mb-3">
            Our Capabilities
          </h2>
          <p className="text-gray-700 text-base md:text-lg px-4">
            Comprehensive manufacturing solutions for diverse industrial needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-[#F8EEDF] to-white p-3 md:p-4 rounded-lg hover:shadow-md transition-all duration-300">
              <FaCheckCircle className="text-[#8E1616] text-lg md:text-xl flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base font-medium">
                {capability}
              </span>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Company Milestones Section */}
      {showFullContent && (
      <div className="max-w-7xl mx-auto w-full mt-8 md:mt-12">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#8E1616] mb-2 md:mb-3">
            Our Journey
          </h2>
          <p className="text-gray-700 text-base md:text-lg px-4">
            Four decades of innovation and excellence in steel casting
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white/70 border border-[#8E1616]/20 rounded-xl p-5 md:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]">
              <div className="text-4xl md:text-5xl font-extrabold text-[#8E1616] mb-2">
                {milestone.year}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Why Choose Us Section */}
      {showFullContent && (
      <div className="max-w-7xl mx-auto w-full mt-8 md:mt-12 bg-gradient-to-r from-[#8E1616] to-[#B91C1C] rounded-xl p-6 md:p-10 text-white">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 md:mb-3">
            Why Choose Aarcee Casting?
          </h2>
          <p className="text-base md:text-lg opacity-90">
            Your trusted partner for precision steel casting solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
            <FaIndustry className="text-3xl md:text-4xl mb-3" />
            <h3 className="text-lg md:text-xl font-bold mb-2">35+ Years Experience</h3>
            <p className="text-sm md:text-base opacity-90">Decades of expertise in precision casting and manufacturing</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
            <FaCogs className="text-3xl md:text-4xl mb-3" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Advanced Technology</h3>
            <p className="text-sm md:text-base opacity-90">State-of-the-art manufacturing facilities and equipment</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
            <FaShieldAlt className="text-3xl md:text-4xl mb-3" />
            <h3 className="text-lg md:text-xl font-bold mb-2">ISO Certified Quality</h3>
            <p className="text-sm md:text-base opacity-90">International quality standards and rigorous testing</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
            <AiOutlineTeam className="text-3xl md:text-4xl mb-3" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-sm md:text-base opacity-90">Skilled professionals dedicated to your success</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
            <FaAward className="text-3xl md:text-4xl mb-3" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Proven Track Record</h3>
            <p className="text-sm md:text-base opacity-90">500+ satisfied clients across diverse industries</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
            <AiFillRocket className="text-3xl md:text-4xl mb-3" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Timely Delivery</h3>
            <p className="text-sm md:text-base opacity-90">Committed to meeting deadlines without compromising quality</p>
          </div>
        </div>
      </div>
      )}

      {/* Team Section */}
      {showTeam && showFullContent && (
        <div className="mt-8 md:mt-12 max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#8E1616] mb-2 md:mb-3">
              Our Leadership Team
            </h2>
            <p className="text-gray-700 text-base md:text-lg px-4">
              Meet the visionaries driving innovation and excellence in steel casting manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/60 border border-[#8E1616]/20 rounded-xl p-5 md:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden border-4 border-[#8E1616] shadow-lg">
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
                  <h3 className="text-lg md:text-xl font-bold text-[#8E1616] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 font-semibold mb-2 md:mb-3">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
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
