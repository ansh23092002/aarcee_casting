"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productCategory: string;
}

const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  productName,
  productCategory,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    size: "",
    specifications: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("/api/send-quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productName,
          productCategory,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(
          data.message || "Quotation request sent successfully!"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          quantity: "",
          size: "",
          specifications: "",
        });
        setTimeout(() => {
          onClose();
          setSubmitMessage("");
        }, 2000);
      } else {
        setSubmitError(data.error || "Failed to send quotation request");
      }
    } catch (_error) {
      setSubmitError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-[#F8EEDF] to-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Request Quotation</h2>
            <p className="text-[#F8EEDF] text-sm mt-1">
              {productName} - {productCategory}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {submitMessage && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-700 text-center">
              {submitMessage}
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-700 text-center">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#8E1616] font-semibold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#8E1616] font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#8E1616] font-semibold mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-[#8E1616] font-semibold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-[#8E1616] font-semibold mb-2"
                >
                  Quantity *
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
                  placeholder="e.g., 100 units"
                />
              </div>

              <div>
                <label
                  htmlFor="size"
                  className="block text-[#8E1616] font-semibold mb-2"
                >
                  Size/Dimensions *
                </label>
                <input
                  type="text"
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
                  placeholder="e.g., 50x30x20 cm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="specifications"
                className="block text-[#8E1616] font-semibold mb-2"
              >
                Additional Specifications
              </label>
              <textarea
                id="specifications"
                name="specifications"
                value={formData.specifications}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows={4}
                className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white text-gray-800 placeholder-gray-500 resize-vertical"
                placeholder="Any specific requirements, materials, or additional details..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border-2 border-[#8E1616] text-[#8E1616] font-bold rounded-full hover:bg-[#8E1616] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white font-bold px-6 py-3 rounded-full hover:from-[#B91C1C] hover:to-[#8E1616] transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotationModal;
