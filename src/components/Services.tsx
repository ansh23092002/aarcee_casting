import React from "react";
import { FaIndustry, FaTools } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiMetalBar } from "react-icons/gi";

const Services = () => {
  const contents = [
    {
      id: "2",
      icon: <MdPrecisionManufacturing className="text-4xl sm:text-5xl text-[#E8C999]" />,
      title: "Precision Casting",
      description:
        "Advanced casting techniques ensuring superior quality and dimensional accuracy for complex industrial components.",
      list: [
        "High-precision mold making",
        "Quality control at every stage",
        "Multiple alloy options",
      ],
    },
    {
      id: "3",
      icon: <FaIndustry className="text-4xl sm:text-5xl text-[#E8C999]" />,
      title: "Custom Manufacturing",
      description:
        "Tailored manufacturing solutions to meet your specific requirements with flexibility and expertise.",
      list: [
        "Custom alloy formulations",
        "Flexible production volumes",
        "Industry-specific solutions",
      ],
    },
    {
      id: "4",
      icon: <GiMetalBar className="text-4xl sm:text-5xl text-[#E8C999]" />,
      title: "Material Testing",
      description:
        "Comprehensive testing and quality assurance to ensure every product meets the highest industry standards.",
      list: [
        "Mechanical property testing",
        "Non-destructive testing",
        "Certification support",
      ],
    },
    {
      id: "5",
      icon: <FaTools className="text-4xl sm:text-5xl text-[#E8C999]" />,
      title: "Machining Services",
      description:
        "Complete machining and finishing services to deliver ready-to-use components with precision tolerances.",
      list: [
        "CNC machining",
        "Surface finishing",
        "Assembly services",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-black via-[#8E1616] to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-[#E8C999]">Services</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            From precision casting to final machining, we deliver comprehensive steel casting solutions tailored to your industrial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contents.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-[#E8C999]/50"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-[#8E1616] to-[#E8C999] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#8E1616] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base text-center">
                {item.description}
              </p>

              <ul className="space-y-3">
                {item.list.map((data, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#E8C999] rounded-full flex-shrink-0 group-hover:bg-[#8E1616] transition-colors duration-300"></div>
                    <span className="text-sm md:text-base">{data}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
