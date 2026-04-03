'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'mission', label: 'Our Mission' },
  { id: 'vision', label: 'Our Vision' },
  { id: 'history', label: 'Our History' },
];

const testimonials = [
  {
    quote: "Climb it see the world, not so the world can see you. This is due to their excellent service...",
    author: "Esther Howard",
    role: "Web Designer",
    avatar: "/test-pics.png",
  },
  {
    quote: "HRVC gave me hope when I felt completely alone. Their support team responded within hours.",
    author: "Chinasa Okafor",
    role: "Corps Member",
    avatar: "/image.png",
  },
  {
    quote: "The resources and community here helped me understand my rights and stand up confidently.",
    author: "Emeka Nwosu",
    role: "Volunteer",
    avatar: "/ceo.png",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderTabContent = () => {
    if (activeTab === 'mission') {
      return (
        <>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To empower, inform, and protect NYSC corps members by creating accessible resources, trusted advocacy, and a welcoming community of allies.
          </p>
        </>
      );
    }
    if (activeTab === 'vision') {
      return (
        <>
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A Nigeria where every corps member understands their rights, feels supported, and can demand fair treatment without fear.
          </p>
        </>
      );
    }
    return (
      <>
        <h2 className="text-3xl font-bold mb-6">Our History</h2>
        <p className="text-gray-700 leading-relaxed">
          Integer lobortis, velit quis facilisis pellentesque... (your full history text here)
        </p>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-[#0f172a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Main About Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Heart Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <div className="absolute inset-0 bg-orange-500 rounded-[4rem] rotate-12 scale-95" />
              <div className="absolute inset-4 bg-white rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src="/ceo.png" alt="Helping Hands" fill className="object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-center px-8 py-3 rounded-3xl shadow-xl flex flex-col items-center">
                <span className="text-4xl font-bold">15+</span>
                <span className="text-sm tracking-widest">Years Of Experience</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold">❤️ ABOUT US</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-none">
              Helping Each Other can Make World Better
            </h2>
            <p className="text-lg text-gray-700 max-w-lg">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nonprofits around the world apply and join us to access more funding.
            </p>

            <div className="flex items-center gap-6">
              <button className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-3">
                Explore More <span className="text-xl">→</span>
              </button>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-2xl">📞</div>
                <div>
                  <p className="font-medium">Call Any Time</p>
                  <p className="text-gray-600">+234 813 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission / Vision / History Tabs */}
      <div className="bg-[#0f172a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Charitics Information of Event Schedule</h2>

          <div className="flex justify-center border-b border-white/20 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-10 py-5 text-lg font-medium transition-all border-b-2 ${
                  activeTab === tab.id ? 'border-orange-500 text-white' : 'border-transparent text-white/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-white text-black rounded-3xl p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={activeTab === 'mission' ? '/test-pics.png' : activeTab === 'vision' ? '/ceo.png' : '/image.png'}
                  alt={activeTab}
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="space-y-6">{renderTabContent()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-semibold">❤️ TESTIMONIALS</p>
            <h2 className="text-4xl font-bold">What People Say About us</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <div className="flex text-orange-400 mb-6 text-2xl">★★★★☆</div>
              <p className="text-xl leading-relaxed text-gray-700 italic">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image src={testimonials[currentTestimonial].avatar} width={48} height={48} alt="" className="rounded-full" />
                <div>
                  <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-12 h-12 flex items-center justify-center border border-gray-200 hover:border-orange-300 rounded-2xl transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} className="w-12 h-12 flex items-center justify-center border border-gray-200 hover:border-orange-300 rounded-2xl transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}