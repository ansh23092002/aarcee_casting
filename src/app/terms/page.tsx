"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaFileContract, FaBalanceScale, FaExclamationTriangle } from "react-icons/fa";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#8E1616] to-[#B91C1C] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FaFileContract className="text-5xl md:text-6xl mx-auto mb-6 opacity-90" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Terms & Conditions
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Please read these terms carefully before using our services
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
              
              {/* Agreement to Terms */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using the Aarcee Casting Industries website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These terms apply to all visitors, users, and customers who access or use our services.
                </p>
              </div>

              {/* Use of Website */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Use of Website
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Permitted Use</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You may use our website for lawful purposes only. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Engage in any activity that disrupts or interferes with our services</li>
                  <li>Copy, reproduce, or distribute content without permission</li>
                  <li>Use automated systems to access the website without authorization</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Responsibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you create an account, you are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaBalanceScale className="text-3xl text-[#8E1616]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616]">
                    Intellectual Property Rights
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Aarcee Casting Industries or its content suppliers and is protected by international copyright laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Aarcee Casting Industries name and logo are trademarks and may not be used without permission.
                </p>
              </div>

              {/* Products and Services */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Products and Services
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Product Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to provide accurate product descriptions and specifications. However, we do not warrant that product descriptions, specifications, or other content is accurate, complete, or error-free.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Quotations and Orders</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  All quotations are subject to the following terms:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>Quotations are valid for 30 days unless otherwise specified</li>
                  <li>Prices are subject to change based on material costs and specifications</li>
                  <li>Orders are subject to acceptance and availability</li>
                  <li>Custom orders may have specific terms and conditions</li>
                  <li>Payment terms will be specified in individual quotations</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Quality and Specifications</h3>
                <p className="text-gray-700 leading-relaxed">
                  All products are manufactured according to agreed specifications and ISO quality standards. Variations may occur within acceptable industry tolerances.
                </p>
              </div>

              {/* Pricing and Payment */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Pricing and Payment
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Payment terms and conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
                  <li>Prices do not include applicable taxes, which will be added as required by law</li>
                  <li>Payment terms will be specified in individual quotations and invoices</li>
                  <li>We reserve the right to refuse or cancel orders at our discretion</li>
                  <li>Late payments may incur additional charges as specified in agreements</li>
                </ul>
              </div>

              {/* Shipping and Delivery */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Shipping and Delivery
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Delivery terms and timelines will be specified in individual orders. While we strive to meet agreed delivery dates, delays may occur due to circumstances beyond our control.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Risk of loss and title for products passes to the buyer upon delivery to the carrier.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Buyers are responsible for inspecting products upon delivery and reporting any damages or discrepancies within the specified timeframe.
                </p>
              </div>

              {/* Warranties and Returns */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Warranties and Returns
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We warrant that our products will conform to agreed specifications at the time of delivery. Any warranty claims must be made in writing within the specified warranty period.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Returns and refunds are subject to our return policy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Defective products may be returned within the specified warranty period</li>
                  <li>Custom-made products are generally non-returnable unless defective</li>
                  <li>Return authorization must be obtained before returning products</li>
                  <li>Buyers are responsible for return shipping costs unless the product is defective</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaExclamationTriangle className="text-3xl text-[#8E1616]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616]">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Aarcee Casting Industries shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability for any claim arising from these terms shall not exceed the amount paid by you for the specific product or service giving rise to the claim.
                </p>
              </div>

              {/* Indemnification */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless Aarcee Casting Industries from any claims, damages, losses, or expenses arising from your violation of these terms or your use of our products or services.
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh, India.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-[#F8EEDF] to-[#E8C999] rounded-xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about these Terms and Conditions, please contact us:
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

export default TermsPage;
