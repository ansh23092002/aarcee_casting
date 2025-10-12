import React from "react";
import Image from "next/image";
import { FaMicroscope } from "react-icons/fa";
import { SiExoscale } from "react-icons/si";
import { GiDistressSignal } from "react-icons/gi";

const Quality = () => {
  const QualityList = [
    {
      id: "1",
      icon: <FaMicroscope className="text-yellow-400" />,
      title: "Material Testing",
      description:
        "Mechanical property testing and microstructure evaluation to ensure material integrity.",
    },
    {
      id: "2",
      icon: <SiExoscale className="text-yellow-400" />,
      title: "Dimensional Inspection",
      description:
        "Advanced CMM and 3D scanning to verify dimensional accuracy and geometric tolerances.",
    },
    {
      id: "3",
      icon: <GiDistressSignal className="text-yellow-400" />,
      title: "Non-Destructive Testing",
      description:
        "Ultrasonic, radiographic, and magnetic particle inspection for internal and surface defects.",
    },
  ];

  return (
    <section className="w-full px-6 py-12 md:px-20 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-heading"><u>Quality</u></span> Aarcee Casting
          </h2>
          <p>
            At Aarcee Casting, quality is at the core of everything we do. Our comprehensive
            quality management system ensures that every casting meets or exceeds industry
            standards and customer specifications.
          </p>
          <p>
            We employ rigorous testing and inspection protocols throughout production, using
            advanced technology to verify dimensional accuracy, material integrity, and
            surface quality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QualityList.map((list) => (
              <div
                key={list.id}
                className="flex gap-3 rounded-xl border border-white/10 bg-[#0a131a] text-white p-4"
              >
                <div className="text-2xl">{list.icon}</div>
                <div>
                  <h3 className="font-semibold">{list.title}</h3>
                  <p className="text-sm text-gray-300">{list.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src="/assets/image/Quality.jpg"
            width={1200}
            height={900}
            alt="Quality inspection at Aarcee Casting"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Quality;
