import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read Aarcee Casting Industries' terms and conditions for using our website and services. Learn about our policies on products, orders, warranties, payments, and liability.",
  keywords: "terms and conditions, legal terms, service terms, warranty policy, return policy, Aarcee Casting terms, user agreement",
  openGraph: {
    title: "Terms & Conditions - Aarcee Casting Industries",
    description: "Terms and conditions for using Aarcee Casting Industries' website and services.",
    url: "https://www.aarceecasting.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions - Aarcee Casting Industries",
    description: "Terms and conditions for using our website and services.",
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
