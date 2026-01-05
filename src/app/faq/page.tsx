"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of steel castings do you manufacture?",
      answer: "We manufacture a wide range of steel castings including Gray Cast Iron, High Manganese Steel, Alloy Steel, Steel Casting, Rolling Mill Castings, and custom machine workshop components. Our products serve automotive, construction, mining, and industrial equipment sectors."
    },
    {
      question: "Are you ISO certified?",
      answer: "Yes, Aarcee Casting Industries is ISO certified. We maintain international quality standards and implement rigorous quality control measures throughout our manufacturing process to ensure consistent excellence."
    },
    {
      question: "What is your production capacity?",
      answer: "We have state-of-the-art manufacturing facilities in Raipur, Chhattisgarh with advanced equipment capable of handling large-scale production. Our capacity varies based on product specifications. Please contact us for specific project requirements."
    },
    {
      question: "Do you provide custom casting solutions?",
      answer: "Absolutely! We specialize in custom steel casting solutions tailored to your specific requirements. Our engineering team works closely with clients to deliver precision-engineered components that meet exact specifications."
    },
    {
      question: "What is the typical lead time for orders?",
      answer: "Lead times vary depending on order complexity, quantity, and specifications. Standard products typically take 2-4 weeks, while custom orders may require 4-8 weeks. We're committed to timely delivery without compromising quality."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship both domestically across India and internationally. We have experience in handling export documentation and logistics to ensure safe and timely delivery to your location."
    },
    {
      question: "What quality control measures do you follow?",
      answer: "We implement comprehensive quality control at every stage - from raw material inspection to final product testing. This includes dimensional checks, material composition analysis, mechanical property testing, and visual inspection to ensure ISO-certified quality standards."
    },
    {
      question: "Can I visit your manufacturing facility?",
      answer: "Yes, we welcome facility visits by appointment. Please contact us to schedule a tour of our manufacturing facility in Donde Khurd, Raipur, Chhattisgarh. We'd be happy to showcase our capabilities and discuss your requirements in person."
    },
    {
      question: "What materials do you work with?",
      answer: "We work with various materials including Gray Cast Iron (GCI), High Manganese Steel, Carbon Steel, Alloy Steel, and other specialized ferrous and non-ferrous materials based on application requirements."
    },
    {
      question: "How do I request a quotation?",
      answer: "You can request a quotation by filling out the contact form on our website, clicking the 'Get Quotation' button on any product page, calling us at (+91) 777-2937-772, or emailing us at aarceeCasting.Industries@gmail.com with your requirements."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including automotive manufacturing, construction equipment, mining machinery, industrial equipment, agriculture machinery, railway components, and general engineering applications."
    },
    {
      question: "Do you offer technical support and consultation?",
      answer: "Yes, our experienced engineering team provides technical support and consultation services. We assist with design optimization, material selection, and manufacturing process recommendations to ensure the best results for your project."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#8E1616] to-[#B91C1C] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Find answers to common questions about our steel casting products and services
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                        {faq.question}
                      </span>
                      <span className="text-[#8E1616] flex-shrink-0">
                        {openIndex === index ? (
                          <FaChevronUp className="w-5 h-5" />
                        ) : (
                          <FaChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Still Have Questions */}
              <div className="mt-12 bg-gradient-to-r from-[#F8EEDF] to-[#E8C999] rounded-xl p-8 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8E1616] mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg">
                  Our team is here to help! Contact us for personalized assistance with your steel casting needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact-form"
                    className="inline-block bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white font-semibold px-8 py-3 rounded-lg hover:from-[#B91C1C] hover:to-[#8E1616] transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+917772937772"
                    className="inline-block bg-white text-[#8E1616] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#8E1616]"
                  >
                    Call Now
                  </a>
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

export default FAQPage;
