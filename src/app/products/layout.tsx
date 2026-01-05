import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our complete range of high-quality steel casting products including Gray Cast Iron, High Manganese Steel, Alloy Steel, Rolling Mill Castings, and Machine Workshop products. ISO certified precision castings from Raipur, Chhattisgarh. Browse our extensive catalog and request quotation online for automotive, construction, mining, and industrial casting solutions.",
  keywords: "steel casting products, gray cast iron products, high manganese steel casting, alloy steel casting, rolling mill casting, machine workshop casting, precision castings, industrial castings, CI castings products, automotive castings, construction castings, mining equipment castings",
  openGraph: {
    title: "Steel Casting Products Catalog - Aarcee Casting Industries",
    description: "Browse our extensive catalog of steel casting products - Gray Cast Iron, High Manganese Steel, Alloy Steel, and more. Precision engineered castings for industrial applications from Raipur, Chhattisgarh.",
    url: "https://www.aarceecasting.com/products",
    type: "website",
    images: [
      {
        url: "/assets/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Aarcee Casting Products"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Casting Products - Aarcee Casting Industries",
    description: "Comprehensive range of precision steel castings for automotive, construction, mining, and industrial applications. Browse our complete product catalog."
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
