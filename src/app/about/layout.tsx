import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aarcee Casting Industries - a trusted leader in steel casting manufacturing since 1985. Located in Raipur, Chhattisgarh, we specialize in ferrous and non-ferrous castings with ISO certified precision and quality. Discover our 35+ years of expertise in delivering precision castings for automotive, construction, mining, and industrial sectors.",
  keywords: "about aarcee casting, steel casting company Raipur, CI casting manufacturer Chhattisgarh, precision casting company India, Donde Kala casting industry, Donde Khurd Raipur, ISO certified casting company, automotive casting manufacturer, construction casting supplier, mining equipment casting, industrial casting Raipur",
  openGraph: {
    title: "About Aarcee Casting Industries - Leading Steel Casting Manufacturer",
    description: "Discover our 35+ years of expertise in steel casting manufacturing. ISO certified facility in Raipur, Chhattisgarh delivering precision castings for automotive, mining, and industrial sectors.",
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
    description: "Leading steel casting manufacturer in Raipur, Chhattisgarh with ISO certified facilities and precision manufacturing capabilities since 1985."
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
