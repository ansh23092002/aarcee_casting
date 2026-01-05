"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaShieldAlt, FaUserLock, FaCookieBite, FaEnvelope } from "react-icons/fa";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#8E1616] to-[#B91C1C] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FaShieldAlt className="text-5xl md:text-6xl mx-auto mb-6 opacity-90" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Your privacy is important to us
              </p>
              <p className="text-sm md:text-base mt-2 opacity-75">
                Last Updated: January 5, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Aarcee Casting Industries, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our website, you agree to the terms outlined in this Privacy Policy. If you do not agree with our policies and practices, please do not use our website.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserLock className="text-3xl text-[#8E1616]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616]">
                    Information We Collect
                  </h2>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>Fill out contact forms or quotation requests</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                  <li>Register for an account (if applicable)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This information may include: name, email address, phone number, company name, address, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website or source</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process quotation requests and business transactions</li>
                  <li>To send you newsletters, marketing communications, and updates (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To analyze website usage and optimize user experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCookieBite className="text-3xl text-[#8E1616]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616]">
                    Cookies and Tracking Technologies
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. Cookies are small data files stored on your device.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can control cookie settings through your browser preferences. However, disabling cookies may limit certain features of our website.
                </p>
              </div>

              {/* Information Sharing */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website and business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We strive to use commercially acceptable means to protect your information but cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Your Privacy Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access and review the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your personal information</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Children&apos;s Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website and services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-gradient-to-r from-[#F8EEDF] to-[#E8C999] rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaEnvelope className="text-3xl text-[#8E1616]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616]">
                    Contact Us
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Aarcee Casting Industries</strong></p>
                  <p>Donde Khurd, Kharora Road</p>
                  <p>Raipur, Chhattisgarh 493111</p>
                  <p>Phone: <a href="tel:+917772937772" className="text-[#8E1616] hover:underline">(+91) 777-2937-772</a></p>
                  <p>Email: <a href="mailto:aarceeCasting.Industries@gmail.com" className="text-[#8E1616] hover:underline">aarceeCasting.Industries@gmail.com</a></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
