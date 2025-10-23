import React from "react";
import { FaCogs, FaIndustry, FaTools } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiMetalBar } from "react-icons/gi";

const Services = () => {
  const contents = [
    {
      id: "1",
      icon: <FaCogs className="text-5xl text-yellow-400" />,
      title: "Design & Engineering",
      description:
        "Our engineering team works closely with clients to optimize designs for castability, structural integrity, and cost-efficiency.",
      list: [
        "3D modeling and simulation",
        "Design for manufacturability",
        "Prototyping solutions",
      ],
    },
    {
      id: "2",
      icon: <MdPrecisionManufacturing className="text-5xl text-yellow-400" />,
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
      icon: <FaIndustry className="text-5xl text-yellow-400" />,
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
      icon: <GiMetalBar className="text-5xl text-yellow-400" />,
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
      icon: <FaTools className="text-5xl text-yellow-400" />,
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
    <div className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black via-[#8E1616] to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center mb-4">
            Our <span className="text-[#E8C999]">Services</span>
          </h2>
          <p className="max-w-3xl text-center text-[#F8EEDF] text-base md:text-lg leading-relaxed px-4">
            From design and prototyping to final production, we offer comprehensive steel casting services tailored to your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contents.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#F8EEDF] to-[#E8C999] p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#8E1616]"
            >
              <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-black mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>

              <ul className="space-y-3">
                {item.list.map((data, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-800">
                    <span className="w-2 h-2 bg-[#8E1616] rounded-full flex-shrink-0"></span>
                    <span className="text-sm md:text-base">{data}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
