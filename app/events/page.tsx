'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { Calendar, MapPin, Clock, X, ArrowRight } from 'lucide-react';

const EVENTS = [
  {
    id: 1,
    title: "Human Rights Awareness Workshop for NYSC Corps Members",
    date: "29 July",
    image: "https://picsum.photos/id/1015/600/400",
    description: "Join us for an interactive session on rights protection, legal aid, and how to report violations safely during service year.",
    venue: "National Youth Service Corps Orientation Camp, Enugu",
    fullDescription: "This workshop equips corps members with practical knowledge on human rights, how to document violations, and available support channels. Experts from legal aid organizations will be present.",
    mission: "Empowering the next generation of leaders to defend dignity and justice.",
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero - Same as other pages */}
      <div className="relative bg-[#0f172a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Events</h1>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Events
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.id}
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
            </div>
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