import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our extensive range of steel casting products including Gray Cast Iron, High Manganese Steel, Alloy Steel, Rolling Mill Castings, and precision machined components. Request quotation online for automotive, construction, mining, and industrial casting solutions.",
  keywords: "steel casting products, gray cast iron products, high manganese steel casting, alloy steel casting, rolling mill casting, machine workshop casting, precision castings, industrial castings, CI castings products, automotive castings, construction castings, mining equipment castings",
  openGraph: {
    title: "Steel Casting Products Catalog - Aarcee Casting Industries",
    description: "Explore our comprehensive range of precision steel castings for automotive, construction, mining, and industrial applications. Quality CI casting products from Raipur, Chhattisgarh.",
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
    description: "Comprehensive range of precision steel castings for automotive, construction, mining, and industrial applications."
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
