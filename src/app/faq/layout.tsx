import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to frequently asked questions about Aarcee Casting Industries steel casting products, manufacturing processes, quality standards, and services. Learn about our ISO certification, production capacity, and custom solutions.",
  keywords: "steel casting FAQ, casting questions, Aarcee Casting help, steel manufacturing FAQ, ISO certification, custom casting solutions, quality control, delivery times, casting materials",
  openGraph: {
    title: "FAQ - Aarcee Casting Industries",
    description: "Get answers to common questions about our steel casting products, services, and manufacturing capabilities.",
    url: "https://www.aarceecasting.com/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Aarcee Casting Industries",
    description: "Find answers to frequently asked questions about our steel casting products and services.",
  }
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
