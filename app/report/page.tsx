'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { ArrowRight, Upload } from 'lucide-react';

const CASE_TYPES = [
  "Police Harassment / Brutality",
  "Arbitrary Arrest or Detention",
  "Domestic / Gender-Based Violence",
  "Child Rights Violation",
  "Land or Property Rights Abuse",
  "Employment / Workplace Discrimination",
  "Ethnic or Religious Discrimination",
  "Freedom of Speech Violation",
  "Election-Related Violence",
  "Illegal Detention by Security Agents",
  "Corruption / Extortion by Officials",
  "Other (Please specify below)",
];

const STATES = [
  { name: 'Enugu', lgas: ['Enugu North', 'Enugu South', 'Enugu East', 'Nsukka', 'Udi', 'Awgu', 'Oji River'] },
  { name: 'Lagos', lgas: ['Ikeja', 'Lagos Island', 'Surulere', 'Kosofe', 'Alimosho', 'Oshodi-Isolo', 'Eti-Osa'] },
  { name: 'Abuja (FCT)', lgas: ['Abuja Municipal', 'Gwagwalada', 'Kuje', 'Bwari', 'Abaji'] },
  { name: 'Anambra', lgas: ['Awka South', 'Nnewi North', 'Onitsha North', 'Idemili North', 'Oyi'] },
];

export default function Report() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    caseType: '',
    otherType: '',
    dateOfIncident: '',
    state: '',
    lga: '',
    address: '',
    description: '',
  });

  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms before submitting your report.");
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      alert("✅ Your report has been submitted successfully and securely.\n\nOur team will review it and contact you shortly.");
      setIsSubmitting(false);
      setFormData({
        fullName: '', phone: '', email: '', caseType: '', otherType: '',
        dateOfIncident: '', state: '', lga: '', address: '', description: ''
      });
      setFileName(null);
      setAgreed(false);
    }, 1800);
  };

  const currentState = STATES.find(s => s.name === formData.state);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0f172a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Report a Case</h1>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Report
          </div>
          <p className="mt-6 max-w-lg mx-auto text-lg opacity-90">
            Your voice matters. Report any human rights violation safely and confidentially.
          </p>
        </div>
      </div>

      {/* Form Section - Dark background like Volunteer page */}
      <div className="bg-[#0f172a] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

              {/* Full Name - Text Field */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name (Optional - You can stay anonymous)</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number <span className="text-orange-400">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="+234 813 456 7890"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="you@example.com"
                />
              </div>

              {/* Type of Case */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Type of Case <span className="text-orange-400">*</span></label>
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white"
                >
                  <option value="">Select type of violation</option>
                  {CASE_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Other Type */}
              {formData.caseType === "Other (Please specify below)" && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Please specify the case</label>
                  <input
                    type="text"
                    name="otherType"
                    value={formData.otherType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                    placeholder="Describe the type of case"
                  />
                </div>
              )}

              {/* Date of Incident */}
              <div>
                <label className="block text-sm font-medium mb-2">Date of Incident</label>
                <input
                  type="date"
                  name="dateOfIncident"
                  value={formData.dateOfIncident}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white"
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
                  <option value="">Select State</option>
                  {STATES.map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* LGA */}
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
                  <option value="">Select LGA</option>
                  {currentState?.lgas.map((lga) => (
                    <option key={lga} value={lga}>{lga}</option>
                  ))}
                </select>
              </div>

              {/* Specific Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Specific Location / Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50"
                  placeholder="Street, landmark, or exact location"
                />
              </div>

              {/* Detailed Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Detailed Description of the Incident <span className="text-orange-400">*</span></label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full bg-white/10 border border-white/30 rounded-3xl px-6 py-5 focus:outline-none focus:border-orange-500 text-white placeholder:text-white/50 resize-y"
                  placeholder="Please describe what happened, who was involved, and any other important details..."
                />
              </div>

              {/* Optional Evidence Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-3">Upload Evidence (Photos, Documents - Optional)</label>
                <div className="border-2 border-dashed border-white/30 rounded-3xl p-8 text-center hover:border-orange-400 transition-colors">
                  <Upload className="mx-auto text-orange-400 mb-3" size={48} />
                  <p className="font-medium">Click to upload evidence</p>
                  <p className="text-xs text-white/60 mt-1">JPG, PNG, PDF • Max 10MB</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {fileName && <p className="mt-4 text-sm text-green-400">✓ {fileName}</p>}
                </div>
              </div>

              {/* Terms */}
              <div className="md:col-span-2 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-orange-500 w-5 h-5"
                />
                <p className="text-sm text-white/80">
                  I understand this report is confidential and I agree to the{' '}
                  <span className="text-orange-400 underline">HRVC Reporting Terms</span>.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !agreed}
              className="mt-12 w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-5 rounded-3xl flex items-center justify-center gap-3 text-xl transition-all active:scale-95"
            >
              {isSubmitting ? 'Submitting Report...' : 'Submit Report'}
              <ArrowRight size={26} />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}