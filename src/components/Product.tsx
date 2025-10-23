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
  { id: "gray-cast-iron", name: "Gray Cast Iron Products", data: grayCastIronProducts },
  { id: "high-manganese", name: "High Manganese Steel", data: High_Manganese_Steel },
  { id: "steel-casting", name: "Steel Casting", data: Steel_Casting },
  { id: "alloy-steel", name: "Alloy Steel", data: Alloy_Steel },
  { id: "rolling-mill", name: "Rolling Mill Casting", data: Rolling_Mill_Casting },
  { id: "machine-workshop", name: "Machine Workshop", data: Machine_Workshop },
];

const Product = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl p-4">
          Our <span className="text-heading">Products</span>
        </h2>
        <p className="max-w-2xl text-center text-gray-600">
          We specialize in manufacturing high-quality products tailored to meet diverse industry needs. Click a
          classification below to view categorized products on the product page.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
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
            <Link key={cat.id} href={`/products?category=${cat.id}`} className="block rounded-lg overflow-hidden group">
              <div className="relative h-48 bg-gray-100">
                {/* use the dedicated category .webp if present, else fallback to first product image */}
                <Image
                  src={bg}
                  alt={`${cat.name} background`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  onError={(e) => {
                    // next/image forwards onError from the underlying <img>
                    try {
                      (e?.currentTarget as HTMLImageElement).src = fallback;
                    } catch (err) {
                      // swallow errors silently
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-semibold text-center px-4">{cat.name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
