"use client";
import { useState, useEffect } from "react";
import { FaTrophy, FaUsers, FaProjectDiagram } from "react-icons/fa";

const Stats = () => {
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
    <section className="w-full bg-gradient-to-br from-black via-[#8E1616] to-black py-12 sm:py-16 md:py-20">
      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
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
    </section>
  );
};

export default Stats;