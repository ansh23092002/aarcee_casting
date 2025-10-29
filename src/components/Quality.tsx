import React from "react";
import Image from "next/image";
import { FaMicroscope, FaFlask } from "react-icons/fa";
import { GiDistressSignal } from "react-icons/gi";

const Quality = () => {
  const QualityList = [
    {
      id: "1",
      icon: <FaMicroscope className="text-[#8E1616] text-3xl" />,
      title: "Material Testing",
      description:
        "Mechanical property testing and microstructure evaluation to ensure material integrity.",
    },
    {
      id: "2",
      icon: <FaFlask className="text-[#8E1616] text-3xl" />,
      title: "spectro material teasting",
      description:
        "Advanced spectro material testing technology to verify material composition and ensure quality standards.",
    },
    {
      id: "3",
      icon: <GiDistressSignal className="text-[#8E1616] text-3xl" />,
      title: "Non-Destructive Testing",
      description:
        "Ultrasonic, radiographic, and magnetic particle inspection to detect internal and surface defects.",
    },
  ];

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F8EEDF] via-[#E8C999] to-[#F8EEDF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
              <span className="text-[#8E1616] underline decoration-4 underline-offset-8">Quality</span> Assurance
            </h1>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              At Aarcee Casting, quality is at the core of everything we do. Our comprehensive quality management system ensures that every casting meets or exceeds industry standards and customer specifications.
            </p>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We employ rigorous testing and inspection protocols throughout the production process, utilizing advanced technology to verify dimensional accuracy, material integrity, and surface quality.
            </p>

            <div className="space-y-4 md:space-y-5">
              {QualityList.map((list) => (
                <div
                  key={list.id}
                  className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8E1616] transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 mt-1">{list.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                      {list.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {list.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <Image
              src="/assets/image/Quality.jpg"
              width={700}
              height={700}
              alt="Quality control at Aarcee Casting"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
