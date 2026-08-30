'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RevealArticle } from '@/components/MotionScroll';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, X, ArrowRight, BadgeCheck, CheckCircle2, Clock3, Sparkles, TicketPercent } from 'lucide-react';

const DEFAULT_EVENT_AMOUNT = 25000;

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  attendanceMode: 'In-person',
  state: '',
};

const EVENTS = [
  {
    id: 1,
    title: "International Peace Summit",
    date: "17th – 18th September 2026",
    image: "/WhatsApp Image 2026-08-30 at 13.25.35.jpeg",
    description: "Engage Empower Educate Initiative presents the International Peace Summit in Abuja, Nigeria, with a focus on the power of the media in shaping the future of peace.",
    venue: "Barcelona Hotel, Abuja, Nigeria",
    fullDescription: "This summit is being held in commemoration of International Peace Day 2026. It brings together advocates, leaders, and stakeholders to discuss the role of information, media influence, and community action in building lasting peace. The event is designed to inspire collective commitment to peace and justice across Nigeria.",
    mission: "Advancing peaceful dialogue, awareness, and action for a more just and peaceful future.",
  },
  {
    id: 2,
    title: "Community Legal Aid & Rights Clinic",
    date: "15 August",
    image: "https://picsum.photos/id/201/600/400",
    description: "Free legal consultation and rights education for victims of abuse and marginalized communities in Enugu State.",
    venue: "HRVC Hall, 12 Connor Street, Asata, Enugu",
    fullDescription: "Our monthly clinic provides free legal advice, mediation, and referral services. Special focus on gender-based violence and youth rights.",
    mission: "Bringing justice closer to the people who need it most.",
  },
  {
    id: 3,
    title: "Stand Up For Rights: Public March & Rally",
    date: "05 September",
    image: "https://picsum.photos/id/1005/600/400",
    description: "A peaceful march calling for stronger protection of corps members and accountability for rights violators.",
    venue: "Enugu City Stadium Grounds",
    fullDescription: "Join thousands of concerned citizens as we march for justice, equality, and the rule of law. Speeches from activists and survivors.",
    mission: "Raising our voices together for a fairer Nigeria.",
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handlePaystackPayment = () => {
    const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
    const paystackWindow = window as typeof window & {
      PaystackPop?: {
        setup: (options: any) => { openIframe: () => void };
      };
    };

    if (!paystackPublicKey || !paystackWindow.PaystackPop) {
      alert('Paystack public key is not configured. Please add NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY to your environment variables.');
      setIsSubmitting(false);
      return;
    }

    const [firstName, ...restName] = formData.fullName.trim().split(' ');

    paystackWindow.PaystackPop.setup({
      key: paystackPublicKey,
      email: formData.email,
      amount: DEFAULT_EVENT_AMOUNT * 100,
      currency: 'NGN',
      ref: `hrvc-${Date.now()}`,
      firstname: firstName || '',
      lastname: restName.join(' ') || '',
      phone: formData.phone,
      metadata: {
        custom_fields: [
          { display_name: 'Organization', variable_name: 'organization', value: formData.organization || 'Not provided' },
          { display_name: 'Attendance Mode', variable_name: 'attendance_mode', value: formData.attendanceMode },
          { display_name: 'State', variable_name: 'state', value: formData.state || 'Not provided' },
        ],
      },
      callback: (response: { reference: string }) => {
        alert(`Payment successful. Reference: ${response.reference}`);
        setIsSubmitting(false);
        setIsRegisterModalOpen(false);
        setFormData(initialFormState);
      },
      onClose: () => {
        setIsSubmitting(false);
      },
    }).openIframe();
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.organization || !formData.state) {
      alert('Please fill in all required fields before continuing.');
      return;
    }

    setIsSubmitting(true);
    handlePaystackPayment();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />


      {/* Header */}
      <div className="relative bg-cover text-white py-12 h-[35vh]" style={{ backgroundImage: "url('/ngo-boy.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">Events</h1>
          <div className="mt-3 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Events
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="overflow-hidden rounded-[28px] border border-orange-200 bg-slate-950 text-white shadow-[0_22px_60px_rgba(15,23,42,0.20)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <Image
                src="/WhatsApp Image 2026-08-30 at 13.25.35.jpeg"
                alt="HRVC mandatory training program"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/35 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                <Sparkles className="size-3.5" aria-hidden />
                Engage Empower Educate Initiative
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                International Peace Summit
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                17th – 18th September 2026 • Barcelona Hotel, Abuja, Nigeria.<br />
                Theme: The Power of the Feed: The Future of Peace.
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-200">
                <p>This summit is very important for all HRVC members and will provide certificates to all participants.</p>
                <p>Members who are unable to attend in person may participate online and still receive their certificate.</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-100">
                {[
                  'Reservation support',
                  'Transportation support',
                  'Certificate awarded',
                  'Online participation available',
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsRegisterModalOpen(true)}
                className="mt-7 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Register now
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </section>

      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Registration</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">International Peace Summit</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsRegisterModalOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                aria-label="Close registration form"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="08012345678"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-slate-700">Organization</label>
                  <input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleFormChange}
                    placeholder="Your organization or association"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-slate-700">State</label>
                  <input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleFormChange}
                    placeholder="Your state"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="attendanceMode" className="mb-1.5 block text-sm font-medium text-slate-700">Attendance mode</label>
                  <select
                    id="attendanceMode"
                    name="attendanceMode"
                    value={formData.attendanceMode}
                    onChange={handleFormChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white"
                  >
                    <option value="In-person">In-person</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-3 text-sm text-orange-800">
                Registration fee: <span className="font-bold">₦{DEFAULT_EVENT_AMOUNT.toLocaleString()}</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
              >
                {isSubmitting ? 'Processing...' : 'Submit and Pay'}
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <RevealArticle
              key={event.id}
              variant="up"
              delay={index * 0.09}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-5 left-5 bg-white text-orange-600 text-sm font-bold px-4 py-2 rounded-2xl shadow">
                  {event.date}
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-bold text-xl leading-tight mb-4 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <MapPin size={18} />
                  <span>{event.venue}</span>
                </div>

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all"
                >
                  Event Details <ArrowRight size={18} />
                </button>
              </div>
            </RevealArticle>
          ))}
        </div>
      </div>

      {/* Large Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 z-[70] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-6xl rounded-3xl max-h-[95vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b px-8 py-5 bg-gray-50">
              <div>
                <h2 className="text-3xl font-bold">{selectedEvent.title}</h2>
                <p className="text-orange-600 mt-1 flex items-center gap-2">
                  <Calendar size={18} /> {selectedEvent.date} • {selectedEvent.venue}
                </p>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row overflow-hidden flex-1">
              {/* Main Content */}
              <div className="flex-1 p-10 overflow-y-auto">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  width={900}
                  height={500}
                  className="w-full rounded-3xl mb-10"
                />

                <h3 className="text-2xl font-semibold mb-4">Event Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-10">
                  {selectedEvent.fullDescription}
                </p>

                <h3 className="text-2xl font-semibold mb-4">Our Event Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.mission}
                </p>

                <div className="mt-12 pt-10 border-t">
                  <h3 className="text-2xl font-semibold mb-6">See Our Locations</h3>
                  <div className="h-96 bg-gray-100 rounded-3xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8!2d7.4965!3d6.452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5f5f5f5f5f5%3A0xabcdef1234567890!2sEnugu%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar - Same style as your other detail pages */}
              <div className="lg:w-96 bg-gray-50 p-8 border-l overflow-y-auto">
                <div className="bg-white rounded-3xl p-6 mb-8">
                  <h4 className="font-semibold mb-4">Search</h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 px-5 pr-12 focus:outline-none focus:border-orange-500"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-xl">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 mb-8">
                  <h4 className="font-semibold mb-4">Categories</h4>
                  <div className="space-y-2">
                    {["Awareness", "Legal Aid", "Community", "Advocacy", "Training"].map((cat) => (
                      <div key={cat} className="flex justify-between bg-gray-50 hover:bg-orange-50 px-5 py-3 rounded-2xl text-sm cursor-pointer transition-colors">
                        <span>{cat}</span>
                        <span className="text-gray-400">(08)</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6">
                  <h4 className="font-semibold mb-4">Recent Events</h4>
                  <div className="space-y-6 text-sm">
                    <div className="flex gap-4">
                      <Image src="https://picsum.photos/id/1015/80/80" alt="" width={80} height={80} className="rounded-2xl" />
                      <div>
                        <p className="font-medium line-clamp-2">Rights Workshop for Corps Members</p>
                        <p className="text-gray-500 text-xs mt-1">28 July 2025</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Image src="https://picsum.photos/id/201/80/80" alt="" width={80} height={80} className="rounded-2xl" />
                      <div>
                        <p className="font-medium line-clamp-2">Legal Aid Clinic</p>
                        <p className="text-gray-500 text-xs mt-1">20 July 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}