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

  // JSON-LD Schema for Quality Assurance
  const qualitySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quality Assurance Services",
    "description": "Comprehensive quality management system with advanced testing and inspection protocols at Aarcee Casting Industries",
    "provider": {
      "@type": "Organization",
      "name": "Aarcee Casting Industries"
    },
    "serviceType": "Quality Control",
    "areaServed": "IN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Quality Testing Services",
      "itemListElement": QualityList.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      {/* JSON-LD Schema for Quality Assurance */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qualitySchema) }}
      />
      
      <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F8EEDF] via-[#E8C999] to-[#F8EEDF] min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
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
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className="flex-shrink-0 mt-1">{list.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2" itemProp="name">
                        {list.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed" itemProp="description">
                        {list.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/assets/qulityinspaction.png"
                width={700}
                height={520}
                alt="Quality inspection and testing at Aarcee Casting Industries - Advanced material testing and inspection processes"
                className="w-full h-auto object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
