'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Thank you! Your message has been received. We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[whitesmoke]">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-cover text-white py-24 h-[40vh]"
        style={{ backgroundImage: "url('/ngo-boy.jpg')" }}>
        {/* Overlay (middle layer) */}
        <div className="absolute inset-0 bg-black/70 z-0">

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mt-18">
            <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
              Home <span className="text-orange-400">»</span> Contact Us
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        {/* Contact Info Cards - Wider */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Get In Touch With Us</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-white rounded-3xl p-10 text-center hover:shadow-lg transition-all shadow-md">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Phone Number</h3>
              <p className="text-2xl font-medium text-gray-800">+234 813 456 7890</p>
              <p className="text-sm text-orange-600 mt-3">Emergency Support: 24/7</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-10 text-center hover:shadow-lg transition-all shadow-md">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Email Address</h3>
              <p className="text-2xl font-medium text-gray-800">info@hrvc.ng</p>
              <p className="text-sm text-gray-500 mt-3">We reply within 24 hours</p>
            </div>

            {/* Office Address */}
            <div className="bg-white rounded-3xl p-10 text-center hover:shadow-lg transition-all shadow-md">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Office Address</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                12, Connor Street<br />
                Asata, Enugu<br />
                Nigeria
              </p>
            </div>
          </div>

          {/* Working Hours - Wider */}
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-10 text-center shadow-md">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-7 h-7 text-orange-500" />
              <h3 className="font-semibold text-xl">Working Hours</h3>
            </div>
            <div className="space-y-4 text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Sunday &amp; Public Holidays</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-orange-600 font-semibold text-lg">24/7 Emergency Human Rights Support Available</p>
            </div>
          </div>
        </div>

        {/* Full-Width Large Map */}
        <div className="mb-20">
          <h3 className="font-semibold text-2xl mb-6 flex items-center gap-3">
            <MapPin className="text-orange-500" /> Our Location in Enugu
          </h3>
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-md h-[520px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8!2d7.4965!3d6.452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5f5f5f5f5f5%3A0xabcdef1234567890!2sEnugu%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-gray-600 mt-4 font-medium">
            12, Connor Street, Asata, Enugu, Nigeria
          </p>
        </div>

        {/* Contact Form - Wider & Centered */}
        <div className="bg-white rounded-3xl p-10 text-center shadow-md">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-orange-500 text-sm font-medium mb-3">
                ❤️ We’re Here To Help
              </div>
              <h2 className="text-4xl font-bold">Feel Free To Write Us Anytime</h2>
              <p className="text-gray-600 mt-4 max-w-md mx-auto">
                Whether you need support with human rights issues, want to report a violation, or have any questions — we’re ready to listen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-3xl p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-base"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-base"
                  placeholder="How can we assist you?"
                />
              </div>

              <div className="mb-10">
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full border border-gray-200 rounded-3xl px-6 py-5 focus:outline-none focus:border-orange-500 resize-y text-base"
                  placeholder="Tell us more about your situation or how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-5 rounded-3xl flex items-center justify-center gap-3 text-lg transition-all active:scale-[0.985]"
              >
                {isSubmitting ? 'Sending Message...' : (
                  <>
                    Send Message <Send className="w-6 h-6" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}