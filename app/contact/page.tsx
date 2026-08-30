'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Reveal, RevealArticle } from '@/components/MotionScroll';
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, DoorOpen, DoorClosed } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

function getOfficeStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5; // Monday to Friday
  const isOfficeHours = hour >= 9 && hour < 17; // 9:00 AM to 5:00 PM

  if (isWeekday && isOfficeHours) {
    return 'Open';
  }
  return 'Closed';
}

export default function Contact() {
  const [officeStatus, setOfficeStatus] = useState(getOfficeStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setOfficeStatus(getOfficeStatus());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[whitesmoke]">
      <Navbar />

      {/* Header */}
      <div className="relative bg-cover text-white py-8 h-[25vh]" style={{ backgroundImage: "url('/ngo-boy.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 z-0">

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10 mt-12">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
            <div className="mt-2 inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-xs">
              Home <span className="text-orange-400">»</span> Contact Us
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 w-full">
        {/* Contact Info Cards */}
        <Reveal variant="up" className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Get In Touch With Us</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <RevealArticle variant="scale" delay={0} className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all shadow-sm">
              <div className="mx-auto w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
              <p className="text-lg font-medium text-gray-800">
                <a href="tel:+2348037056016" className="text-blue-600 hover:underline">
                  +234 803 705 6016
                </a>
              </p>
              <p className="text-xs text-orange-600 mt-2">
                <a href="https://wa.me/2348037056016" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-bold flex items-center gap-2 text-lg">
                  <MessageCircle className="w-6 h-6" /> WhatsApp Us
                </a>
              </p>
            </RevealArticle>

            <RevealArticle variant="scale" delay={0.08} className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all shadow-sm">
              <div className="mx-auto w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Email Address</h3>
              <p className="text-lg font-medium text-gray-800">info@hrvc.ng</p>
              <p className="text-xs text-gray-500 mt-2">We reply within 24 hours</p>
            </RevealArticle>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <RevealArticle variant="scale" delay={0.12} className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all shadow-sm">
              <div className="mx-auto w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Office Address</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                O'Connor Street, Asata, Enugu, Nigeria
              </p>
            </RevealArticle>

            <RevealArticle variant="scale" delay={0.16} className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-lg">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Saturday, Sunday &amp; Public Holidays</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className={`font-semibold text-sm flex items-center gap-2 ${officeStatus === 'Open' ? 'text-green-600' : 'text-red-600'}`}>
                  {officeStatus === 'Open' ? (
                    <>
                      <DoorOpen className="w-5 h-5" /> Open
                    </>
                  ) : (
                    <>
                      <DoorClosed className="w-5 h-5" /> Closed
                    </>
                  )}
                </p>
              </div>
            </RevealArticle>
          </div>
        </Reveal>

        <Reveal variant="left" className="mb-16">
          <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <MapPin className="text-orange-500" /> Our Location in Enugu
          </h3>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[320px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8!2d7.4965!3d6.452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5f5f5f5f5f5%3A0xabcdef1234567890!2sO'Connor%20Street%2C%20Enugu%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000&t=k&markers=color:red%7Clabel:A%7C6.452,7.4965"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-gray-600 mt-2 text-sm font-medium">
            12, Connor Street, Asata, Enugu, Nigeria
          </p>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}