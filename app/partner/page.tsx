'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { ArrowRight, Award, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { 
    name: "Solid FM 100.9", 
    logo: "/solidfm.png",
    description: "Official Media Partner" 
  },
  { 
    name: "Urban Radio 94.5", 
    logo: "/urbanradio.png",
    description: "Media & Broadcast Partner" 
  },
  { 
    name: "Dream FM 92.5", 
    logo: "/dreamfm.png",
    description: "Strategic Media Partner" 
  },
  { 
    name: "Blaze FM 91.5", 
    logo: "/blazefm.png",
    description: "Community Outreach Partner" 
  },
];

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("✅ Thank you! Your partnership application has been received. We will contact you soon.");
      setIsSubmitting(false);
      setFormData({ 
        organization: '', 
        contactPerson: '', 
        email: '', 
        phone: '', 
        partnershipType: '', 
        message: '' 
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full text-sm mb-6">
            Home <span className="text-orange-400">»</span> Partners
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Partners</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl opacity-90">
            Collaborating with trusted media houses to amplify human rights advocacy across Nigeria.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Partners Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <Handshake className="text-orange-500" size={42} />
            <div>
              <h2 className="text-4xl font-bold text-[#0f172a]">Media & Strategic Partners</h2>
              <p className="text-gray-600 mt-2">Working together to promote justice and human rights</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white border border-gray-200 rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-2xl hover:border-orange-200 transition-all duration-300"
              >
                <div className="h-32 w-full flex items-center justify-center mb-8 bg-gray-50 rounded-2xl p-6 group-hover:bg-white transition-colors">
                  <Image 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    width={240}
                    height={100}
                    className="max-h-24 w-auto object-contain transition-all duration-300"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/240x100/0f172a/ffffff?text=${partner.name.split(' ')[0]}`;
                    }}
                  />
                </div>
                <h3 className="font-semibold text-2xl mb-3 text-[#0f172a]">{partner.name}</h3>
                <p className="text-orange-600 font-medium">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Become a Partner Section */}
        <div className="bg-[#0f172a] rounded-3xl p-12 md:p-16 text-white">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Award className="mx-auto mb-6 text-orange-400" size={52} />
            <h2 className="text-4xl font-bold mb-4">Become Our Partner</h2>
            <p className="text-lg opacity-90 max-w-md mx-auto">
              Join hands with HRVC to promote human rights through media, sponsorship, or strategic collaboration.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">Organization Name <span className="text-orange-400">*</span></label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-orange-500"
                  placeholder="e.g. Media House Ltd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Contact Person <span className="text-orange-400">*</span></label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-orange-500"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address <span className="text-orange-400">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-orange-500"
                  placeholder="you@organization.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number <span className="text-orange-400">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-orange-500"
                  placeholder="+234 803 123 4567"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Type of Partnership</label>
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select Partnership Type</option>
                  <option value="Media Collaboration">Media & Broadcast Collaboration</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Strategic Partnership">Strategic Partnership</option>
                  <option value="Content Creation">Content Creation & Awareness</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Tell us more about your interest</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/10 border border-white/30 rounded-3xl px-6 py-5 text-white placeholder:text-white/60 focus:outline-none focus:border-orange-500 resize-y"
                  placeholder="We are interested in collaborating on human rights awareness campaigns..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-12 w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold py-5 rounded-3xl flex items-center justify-center gap-3 text-lg transition-all"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Partnership Request"}
              <ArrowRight size={24} />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}