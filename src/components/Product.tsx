import React from "react";
import Image from "next/image";

const Product = () => {
  const ProductItem = [
    {
      id: "1",
      img: "/assets/image/RollingMill_cupling.jpg",
      title: "Rolling Mill Coupling",
      description:
        "Connects shafts in rolling mills for efficient power transmission and smooth operation.",
    },
    {
      id: "2",
      img: "/assets/image/farns_rail.jpg",
      title: "Furnace Rail",
      description:
        "Engineered for durability and thermal resistance in industrial furnace applications.",
    },
    {
      id: "3",
      img: "/assets/image/HB_wire.jpg",
      title: "HB Wire",
      description:
        "High-strength, flexible wire for binding, reinforcement, and fabrication needs.",
    },
    {
      id: "4",
      img: "/assets/image/Binding_wire.jpg",
      title: "Binding Wire",
      description:
        "Reliable tying solution for rebar, mesh, and other structural assemblies.",
    },
  ];

  return (
    <section className="w-full px-6 py-12 md:px-20 md:py-20">
      <div className="flex-center flex-col text-center">
        <h2 className="font-bold text-3xl md:text-4xl">
          Our <span className="text-heading">Products</span>
        </h2>
        <p className="max-w-2xl mt-3 text-gray-700">
          We manufacture high‑quality products to meet diverse industry needs, with reliability and precision.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ProductItem.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a131a] text-white shadow-md"
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Product;
