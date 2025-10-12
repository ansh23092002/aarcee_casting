import React from "react";
import { IoLogoBuffer } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Services = () => {
  const contents = [
    {
      id: "1",
      icon: <IoLogoBuffer className="text-yellow-400" />,
      title: "Design & Engineering",
      description:
        "Our engineering team collaborates with you to optimize designs for castability, structural integrity, and cost efficiency.",
      list: [
        "3D modeling and simulation",
        "Design for manufacturability",
        "Rapid prototyping solutions",
      ],
    },
    {
      id: "2",
      icon: <IoLogoBuffer className="text-yellow-400" />,
      title: "Precision Manufacturing",
      description:
        "State-of-the-art tooling, molding, and melting processes ensure repeatable results at scale.",
      list: [
        "Shell and sand casting",
        "Alloy selection and control",
        "Heat treatment",
      ],
    },
    {
      id: "3",
      icon: <IoLogoBuffer className="text-yellow-400" />,
      title: "Finishing & Delivery",
      description:
        "End-to-end finishing, inspection, and logistics to meet your deadlines.",
      list: [
        "CNC machining",
        "Surface finishing",
        "Global shipping",
      ],
    },
  ];

  return (
    <section id="services" className="w-full px-6 py-12 md:px-20 md:py-20">
      <div className="flex-center flex-col text-center">
        <h2 className="font-bold text-3xl md:text-4xl">
          Our <span className="text-heading">Services</span>
        </h2>
        <p className="max-w-2xl mt-3 text-gray-700">
          From design and prototyping to final production, we offer comprehensive steel casting
          services tailored to your requirements.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contents.map((items) => (
          <article
            key={items.id}
            className="rounded-xl border border-white/10 bg-[#0a131a] text-white p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl">{items.icon}</div>
            <h3 className="font-semibold mt-3 text-lg">{items.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{items.description}</p>

            <ul className="mt-4 space-y-2">
              {items.list.map((data, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-200">
                  <FaCircle className="text-yellow-400" />
                  {data}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
