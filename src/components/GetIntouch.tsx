"use client";
import { useState, useEffect } from "react";
import { FaTrophy, FaUsers, FaProjectDiagram } from "react-icons/fa";

const GetIntouch = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(430);
  const [projects, setProjects] = useState(970);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (years < 35) {
        setYears(years + 1);
      }
      if (clients < 500) {
        setClients(clients + 1);
      }
      if (projects < 1000) {
        setProjects(projects + 1);
      }
    }, 30);
    return () => clearTimeout(interval);
  }, [years, clients, projects]);

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-black via-[#8E1616] to-black">
      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#F8EEDF] to-[#E8C999] rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#8E1616]">
            <FaTrophy className="text-[#8E1616] text-5xl md:text-6xl mb-4" />
            <p className="font-bold text-[#8E1616] text-4xl md:text-5xl mb-2">
              {years}+
            </p>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Years of Excellence
            </p>
          </div>

            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#F8EEDF] to-[#E8C999] rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#8E1616]">
            <FaUsers className="text-[#8E1616] text-5xl md:text-6xl mb-4" />
            <p className="font-bold text-[#8E1616] text-4xl md:text-5xl mb-2">
              {clients}+
            </p>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Happy Clients
            </p>
          </div>

            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-[#F8EEDF] to-[#E8C999] rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#8E1616]">
            <FaProjectDiagram className="text-[#8E1616] text-5xl md:text-6xl mb-4" />
            <p className="font-bold text-[#8E1616] text-4xl md:text-5xl mb-2">
              {projects}+
            </p>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Projects Completed
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section with Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="/assets/companyimage.jpg"
          alt="Aarcee Casting facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 max-w-4xl">
            <h4 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
              Ready to Discuss Your Project?
            </h4>
            <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 text-[#F8EEDF]">
              Contact our team of experts to discuss your steel casting requirements and discover how Aarcee Casting can deliver the perfect solution for your needs.
            </p>
            <button className="bg-gradient-to-r from-[#E8C999] to-[#F8EEDF] text-black font-bold px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg hover:from-[#F8EEDF] hover:to-[#E8C999] transform hover:scale-105 transition-all duration-300 shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetIntouch;
