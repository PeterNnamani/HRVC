'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const STATES = [
  { name: 'Enugu', lgas: ['Enugu North', 'Enugu South', 'Enugu East', 'Nsukka', 'Udi', 'Awgu', 'Oji River'] },
  { name: 'Lagos', lgas: ['Ikeja', 'Lagos Island', 'Surulere', 'Kosofe', 'Alimosho', 'Oshodi-Isolo', 'Eti-Osa'] },
  { name: 'Abuja (FCT)', lgas: ['Abuja Municipal', 'Gwagwalada', 'Kuje', 'Bwari', 'Abaji'] },
  { name: 'Anambra', lgas: ['Awka South', 'Nnewi North', 'Onitsha North', 'Idemili North', 'Oyi'] },
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    otherNames: '',
    address: '',
    state: '',
    lga: '',
    employmentStatus: '',
    category: '',
    refereeName: '',
    refereePhone: '',
    refereeRelationship: '',
  });

  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms & Conditions");
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      alert("✅ Thank you! Your volunteer application has been successfully submitted. We will contact you soon.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: '', surname: '', otherNames: '', address: '', state: '', lga: '',
        employmentStatus: '', category: '', refereeName: '', refereePhone: '', refereeRelationship: ''
      });
      setAgreed(false);
    }, 1500);
  };

  const currentState = STATES.find(s => s.name === formData.state);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero - Same as other pages */}
      <div className="relative bg-[#0f172a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Become a Volunteer</h1>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Join Us
          </div>
          <p className="mt-6 max-w-lg mx-auto text-lg opacity-90">
            Join the movement. Stand for justice. Protect human rights across Nigeria.
          </p>
        </div>
      </div>

      {/* Form Section - Dark background matching hero */}
      <div className="bg-[#0f172a] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-2">First Name <span className="text-orange-400">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="John"
                />
              </div>

              {/* Surname */}
              <div>
                <label className="block text-sm font-medium mb-2">Surname <span className="text-orange-400">*</span></label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="Doe"
                />
              </div>

              {/* Other Names */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Other Names</label>
                <input
                  type="text"
                  name="otherNames"
                  value={formData.otherNames}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="Chukwuma (optional)"
                />
              </div>

              {/* Full Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Residential Address <span className="text-orange-400">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="12 Connor Street, Asata, Enugu"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium mb-2">State <span className="text-orange-400">*</span></label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white"
                >
                  <option value="" className="text-gray-800">Select State</option>
                  {STATES.map((s) => (
                    <option key={s.name} value={s.name} className="text-gray-800">{s.name}</option>
                  ))}
                </select>
              </div>

              {/* Local Government */}
              <div>
                <label className="block text-sm font-medium mb-2">Local Government Area <span className="text-orange-400">*</span></label>
                <select
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  required
                  disabled={!formData.state}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white"
                >
                  <option value="" className="text-gray-800">Select LGA</option>
                  {currentState?.lgas.map((lga) => (
                    <option key={lga} value={lga} className="text-gray-800">{lga}</option>
                  ))}
                </select>
              </div>

              {/* Employment Status */}
              <div>
                <label className="block text-sm font-medium mb-2">Employment Status</label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white"
                >
                  <option value="" className="text-gray-800">Select Status</option>
                  <option value="Student" className="text-gray-800">Student</option>
                  <option value="Employed" className="text-gray-800">Employed</option>
                  <option value="Self-Employed" className="text-gray-800">Self-Employed</option>
                  <option value="Unemployed" className="text-gray-800">Unemployed</option>
                  <option value="NYSC Corps Member" className="text-gray-800">NYSC Corps Member</option>
                  <option value="Retired" className="text-gray-800">Retired</option>
                </select>
              </div>

              {/* Volunteer Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Volunteer Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white"
                >
                  <option value="" className="text-gray-800">Select Category</option>
                  <option value="Legal Support" className="text-gray-800">Legal Support</option>
                  <option value="Community Outreach" className="text-gray-800">Community Outreach</option>
                  <option value="Education & Awareness" className="text-gray-800">Education & Awareness</option>
                  <option value="Advocacy" className="text-gray-800">Advocacy & Campaign</option>
                  <option value="Emergency Response" className="text-gray-800">Emergency Response</option>
                  <option value="Admin Support" className="text-gray-800">Administrative Support</option>
                </select>
              </div>

              {/* Referee Information */}
              <div className="md:col-span-2 border-t border-white/20 pt-8 mt-4">
                <h3 className="font-semibold text-lg mb-6">Referee Information (Optional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Referee Name</label>
                    <input
                      type="text"
                      name="refereeName"
                      value={formData.refereeName}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Referee Phone</label>
                    <input
                      type="tel"
                      name="refereePhone"
                      value={formData.refereePhone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Relationship</label>
                    <input
                      type="text"
                      name="refereeRelationship"
                      value={formData.refereeRelationship}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                      placeholder="Pastor, Teacher..."
                    />
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="md:col-span-2 flex items-start gap-3 pt-6">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-orange-500 w-5 h-5"
                />
                <p className="text-sm text-white/80 leading-relaxed">
                  I agree to the{' '}
                  <span className="text-orange-400 underline cursor-pointer">Volunteer Code of Conduct</span> and{' '}
                  <span className="text-orange-400 underline cursor-pointer">Terms & Conditions</span> of HRVC.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !agreed}
              className="mt-12 w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-5 rounded-3xl flex items-center justify-center gap-3 text-xl transition-all active:scale-95"
            >
              {isSubmitting ? 'Submitting Application...' : 'Get Involved'}
              <ArrowRight size={26} />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}