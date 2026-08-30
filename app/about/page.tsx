'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RevealSection } from '@/components/MotionScroll';
import { ChevronLeft, ChevronRight, Target, Eye, Award, Zap, Heart, Users, Star, ArrowRight } from 'lucide-react';

const tabs = [
  { id: 'mission', label: 'Our Mission', icon: Target },
  { id: 'vision', label: 'Our Vision', icon: Eye },
  { id: 'history', label: 'Our History', icon: Award },
];

const missionPoints = [
  { icon: Heart, text: "Empower NYSC corps members with knowledge and resources" },
  { icon: Users, text: "Build a trusted community of advocates and allies" },
  { icon: Zap, text: "Provide accessible legal aid and human rights support" },
  { icon: Star, text: "Create meaningful change through collective action" },
];

const visionPoints = [
  { icon: Heart, text: "Every corps member understands their fundamental rights" },
  { icon: Zap, text: "A culture where fair treatment is demanded and protected" },
  { icon: Users, text: "Communities empowered to advocate for themselves" },
  { icon: Star, text: "Human rights protection embedded in society" },
];

const milestones = [
  {
    year: "2008",
    title: "Foundation Year",
    description: "HRVC was founded with a vision to protect human rights and empower underserved communities.",
    icon: Award,
  },
  {
    year: "2012",
    title: "First Milestone",
    description: "Expanded operations to reach 10,000+ corps members across Nigeria.",
    icon: Users,
  },
  {
    year: "2017",
    title: "Major Growth",
    description: "Launched comprehensive legal aid program and advocacy initiatives nationally.",
    icon: Zap,
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Introduced online resources, digital advocacy tools, and community platforms.",
    icon: Star,
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Became recognized partner for international human rights organizations.",
    icon: Heart,
  },
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
        <div className="space-y-8">
          <div>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              To empower, inform, and protect communities by creating accessible resources, trusted advocacy, and a welcoming space for collective action.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center group-hover:bg-orange-500/40 transition-all">
                    <Icon size={24} className="text-orange-400" />
                  </div>
                  <p className="text-white/80 pt-2 group-hover:text-white/100 transition-all">{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    if (activeTab === 'vision') {
      return (
        <div className="space-y-8">
          <div>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              A world where every person understands their rights, feels empowered to exercise them, and can demand fair treatment without fear or hesitation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visionPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center group-hover:bg-orange-500/40 transition-all">
                    <Icon size={24} className="text-orange-400" />
                  </div>
                  <p className="text-white/80 pt-2 group-hover:text-white/100 transition-all">{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    // History with Timeline
    return (
      <div className="space-y-8">
        <p className="text-lg text-white/90 leading-relaxed">
          Founded with a clear mission, HRVC has grown from a small group of passionate advocates into a recognized force for human rights protection and community empowerment.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-10">
          {/* Timeline */}
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500/20"></div>
            
            {milestones.map((milestone, idx) => {
              const MilestoneIcon = milestone.icon;
              return (
                <div key={idx} className="pl-20 relative group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-[#1a1f3a] shadow-lg group-hover:scale-110 transition-transform">
                    <MilestoneIcon size={24} className="text-white" />
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 group-hover:bg-white/10 group-hover:border-orange-400/30 transition-all">
                    <div className="text-orange-400 font-bold text-lg">{milestone.year}</div>
                    <h4 className="text-white font-semibold mt-2">{milestone.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Details Side */}
          <div className="space-y-6 flex flex-col justify-between">
            {milestones.map((milestone, idx) => {
              const isActive = idx === Math.min(milestones.length - 1, Math.floor((Date.now() - new Date(2008, 0).getTime()) / (365 * 24 * 60 * 60 * 1000)));
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-400 font-bold text-xl">{milestone.year}</span>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-orange-400 transition-colors">{milestone.title}</h4>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="relative bg-cover text-white py-12 h-[35vh]" style={{ backgroundImage: "url('/ngo-boy.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <div className="mt-3 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> About
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <RevealSection variant="up" className="max-w-7xl mx-auto px-6 py-16">
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
      </RevealSection>

      {/* Mission / Vision / History Tabs */}
      <RevealSection variant="up" className="bg-gradient-to-b from-[#0f172a] to-[#1a1f3a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-widest">🏢 OUR CORE VALUES</span>
            </div>
            <h2 className="text-5xl font-bold mb-2">Our Organization</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-4"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white shadow-2xl shadow-orange-500/40 scale-105'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon size={20} className={`transition-all ${activeTab === tab.id ? 'rotate-0' : 'group-hover:scale-110'}`} />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 to-transparent rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Card with Better Design */}
          <div className="max-w-6xl mx-auto w-full">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-2xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-3xl p-8 md:p-12 border border-white/30 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Left Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent rounded-l-3xl"></div>
                
                {/* Content */}
                <div key={activeTab} className="animate-slideInRight space-y-8 pl-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center border border-orange-400/30">
                      {tabs.find(t => t.id === activeTab)?.icon && (
                        <>
                          {(() => {
                            const Icon = tabs.find(t => t.id === activeTab)?.icon;
                            return Icon ? <Icon size={32} className="text-orange-400" /> : null;
                          })()}
                        </>
                      )}
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold">
                        {tabs.find(t => t.id === activeTab)?.label}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-orange-400/50 via-white/10 to-transparent"></div>
                  
                  {/* Description */}
                  {renderTabContent()}
                  
                  {/* Footer Element */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <div className="w-2 h-2 rounded-full bg-orange-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-orange-500/25"></div>
                    </div>
                    <span className="text-sm text-white/50">HRVC Mission & Values</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Testimonials Carousel */}
      <RevealSection variant="up" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-semibold">❤️ TESTIMONIALS</p>
            <h2 className="text-4xl font-bold">What People Say About us</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm overflow-hidden">
              {/* Smooth Slide Animation */}
              <div key={currentTestimonial} className="animate-slideInRight">
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
      </RevealSection>

      <Footer />
    </div>
  );
}