"use client";
import { useState } from "react";

const GetIntouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitError(data.error || 'Failed to send message');
      }
    } catch (_error) {
      setSubmitError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-black via-[#8E1616] to-black">

      {/* CTA Section with Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px]">
        <img
          src="/assets/companyimage.jpg"
          alt="Aarcee Casting facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 max-w-4xl">
            <h4 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
              Ready to Discuss Your Project?
            </h4>
            <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 text-[#F8EEDF]">
              Contact our team of experts to discuss your steel casting requirements and discover how Aarcee Casting can deliver the perfect solution for your needs.
            </p>
            <a 
              href="#contact-form" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-gradient-to-r from-[#E8C999] to-[#F8EEDF] text-black font-bold px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg hover:from-[#F8EEDF] hover:to-[#E8C999] transform hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-[#F8EEDF] text-lg md:text-xl">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {submitMessage && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center">
              {submitMessage}
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-center">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#F8EEDF] to-[#E8C999] p-6 md:p-8 rounded-2xl shadow-xl border border-[#8E1616]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-[#8E1616] font-semibold mb-2">
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
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white/90 text-gray-800 placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#8E1616] font-semibold mb-2">
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
                  className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white/90 text-gray-800 placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-[#8E1616] font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white/90 text-gray-800 placeholder-gray-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-[#8E1616] font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                rows={5}
                className="w-full px-4 py-3 border border-[#8E1616]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E1616] focus:border-transparent bg-white/90 text-gray-800 placeholder-gray-500 resize-vertical"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg hover:from-[#B91C1C] hover:to-[#8E1616] transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetIntouch;
