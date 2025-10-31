import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aarcee Casting Industries - a leading steel casting manufacturer in Raipur, Chhattisgarh since establishment. We specialize in precision CI castings, Gray Cast Iron, High Manganese Steel, and Alloy Steel components. Located in Donde Kala, Donde Khurd, Raipur, we serve automotive, construction, mining, and industrial sectors with ISO certified quality standards and state-of-the-art manufacturing facilities.",
  keywords: "about aarcee casting, steel casting company Raipur, CI casting manufacturer Chhattisgarh, precision casting company India, Donde Kala casting industry, Donde Khurd Raipur, ISO certified casting company, automotive casting manufacturer, construction casting supplier, mining equipment casting, industrial casting Raipur",
  openGraph: {
    title: "About Aarcee Casting Industries - Leading Steel Casting Manufacturer",
    description: "Discover Aarcee Casting Industries - your trusted partner for precision steel castings in Raipur, Chhattisgarh. ISO certified facilities serving automotive, construction, and industrial sectors.",
    url: "https://www.aarceecasting.com/about",
    type: "website",
    images: [
      {
        url: "/assets/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Aarcee Casting Industries About"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aarcee Casting Industries - Steel Casting Excellence",
    description: "Leading steel casting manufacturer in Raipur, Chhattisgarh with ISO certified facilities and precision manufacturing capabilities."
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
