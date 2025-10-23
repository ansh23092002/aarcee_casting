"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  grayCastIronProducts,
  High_Manganese_Steel,
  Steel_Casting,
  Alloy_Steel,
  Rolling_Mill_Casting,
  Machine_Workshop,
} from "../Data/index";

const categories = [
  { id: "gray-cast-iron", name: "Gray Cast Iron Products Casting", data: grayCastIronProducts },
  { id: "high-manganese", name: "High Manganese Steel Casting ", data: High_Manganese_Steel },
  { id: "steel-casting", name: "Steel Casting", data: Steel_Casting },
  { id: "alloy-steel", name: "Alloy Steel Casting ", data: Alloy_Steel },
  { id: "rolling-mill", name: "Rolling Mill Casting", data: Rolling_Mill_Casting },
  { id: "machine-workshop", name: "Machine Workshop Casting ", data: Machine_Workshop },
];

const Product = () => {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#F8EEDF] to-[#E8C999]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-black">
            Our <span className="text-[#8E1616]">Products</span>
          </h2>
          <p className="max-w-3xl text-center text-gray-600 text-base md:text-lg leading-relaxed px-4">
            We specialize in manufacturing high-quality products tailored to meet diverse industry needs. Click a
            classification below to view categorized products on the product page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => {
          // map category id -> existing .webp file names in public/assets/image/categories/
          const categoryFiles: Record<string, string> = {
            'gray-cast-iron': '/assets/image/categories/GrayCastIron.webp',
            'high-manganese': '/assets/image/categories/HighManganeseSteel.webp',
            'steel-casting': '/assets/image/categories/SteelCasting.webp',
            'alloy-steel': '/assets/image/categories/AlloyCasting.webp',
            'rolling-mill': '/assets/image/categories/RollingMill.webp',
            'machine-workshop': '/assets/image/categories/MachineWorkshop.webp',
          };

          const fallback = cat.data[0]?.image || '/assets/image/placeholder.svg';
          const bg = categoryFiles[cat.id] || fallback;

          return (
            <Link 
              key={cat.id} 
              href={`/products?category=${cat.id}`} 
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-56 md:h-64 bg-gray-100">
                {/* use the dedicated category .webp if present, else fallback to first product image */}
                <Image
                  src={bg}
                  alt={`${cat.name} background`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // next/image forwards onError from the underlying <img>
                    try {
                      (e?.currentTarget as HTMLImageElement).src = fallback;
                    } catch (err) {
                      // swallow errors silently
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold text-center transform group-hover:scale-105 transition-transform duration-300">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Product;
