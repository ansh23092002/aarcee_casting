import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aarceecasting.com'),
  title: {
    default: "Aarcee Casting Industries - Leading Steel Casting Manufacturer in Raipur, Chhattisgarh",
    template: "%s | Aarcee Casting Industries"
  },
  description: "Aarcee Casting Industries - Premier manufacturer of high-quality steel castings, ferrous & non-ferrous castings since 1985. Based in Raipur, Chhattisgarh. ISO certified precision casting solutions for automotive, construction, mining, and industrial equipment.",
  keywords: [
    "steel casting manufacturer",
    "ferrous castings",
    "non-ferrous castings",
    "precision casting",
    "CI castings",
    "steel ingots",
    "Raipur casting industry",
    "Chhattisgarh manufacturer",
    "industrial casting",
    "metal casting",
    "gray cast iron",
    "high manganese steel",
    "alloy steel casting",
    "rolling mill casting",
    "Aarcee Casting",
    "casting manufacturer India"
  ],
  authors: [{ name: "Aarcee Casting Industries" }],
  creator: "Aarcee Casting Industries",
  publisher: "Aarcee Casting Industries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.aarceecasting.com",
    siteName: "Aarcee Casting Industries",
    title: "Aarcee Casting Industries - Leading Steel Casting Manufacturer",
    description: "Premium steel casting manufacturer in Raipur, Chhattisgarh since 1985. Specializing in precision ferrous and non-ferrous castings for diverse industries.",
    images: [
      {
        url: "/assets/image/Sand_Casting.jpg",
        width: 1200,
        height: 630,
        alt: "Aarcee Casting Industries - Steel Casting Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarcee Casting Industries - Steel Casting Manufacturer",
    description: "Premier steel casting manufacturer in Raipur, Chhattisgarh since 1985. Quality, precision, and innovation in every cast.",
    images: ["/assets/image/Sand_Casting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.aarceecasting.com" />
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Raipur, Chhattisgarh" />
        <meta name="geo.position" content="21.2514;81.6296" />
        <meta name="ICBM" content="21.2514, 81.6296" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
