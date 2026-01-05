import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Aarcee Casting Industries' privacy policy to understand how we collect, use, and protect your personal information. Learn about data security, cookies, and your privacy rights.",
  keywords: "privacy policy, data protection, personal information, cookies, GDPR, data security, user privacy, Aarcee Casting privacy",
  openGraph: {
    title: "Privacy Policy - Aarcee Casting Industries",
    description: "Learn how Aarcee Casting Industries protects your privacy and handles your personal information.",
    url: "https://www.aarceecasting.com/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Aarcee Casting Industries",
    description: "Learn how we protect your privacy and handle your personal information.",
  }
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
