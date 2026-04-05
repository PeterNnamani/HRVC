'use client';

import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Users, MapPin, Award } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref} className="text-5xl font-bold">{count}{suffix}</span>;
};

export default function Home() {
  const partners = [
    { name: "Solid FM", logo: "/solidfm.png" },
    { name: "Urban Radio", logo: "/urbanradio.png" },
    { name: "Dream FM", logo: "/dreamfm.png" },
    { name: "Blaze FM", logo: "/blazefm.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION - Unchanged */}
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-widest">
              ❤️ HUMAN RIGHTS DEFENSE
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-none">
              For The People &amp;<br />
              Cause You Care About
            </h1>

            <p className="text-lg text-white/80 max-w-md">
              We defend human rights, support victims of abuse, and mobilize volunteers to protect dignity and justice across Nigeria.
            </p>

            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-3xl flex items-center gap-3 text-base transition-all active:scale-95">
                Make a Report
                <span className="text-2xl leading-none">→</span>
              </button>

              <button className="px-8 py-4 border border-white/50 hover:bg-white/10 text-white font-semibold rounded-3xl transition-all">
                Become a Volunteer
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -right-6 -top-6 w-80 h-80 bg-gradient-to-br from-orange-400 to-transparent rounded-[4rem] rotate-12 z-10" />
            <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/emmanuel.jpg"
                alt="HRVC Impact"
                width={620}
                height={680}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US SECTION - Unchanged */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold">❤️ ABOUT US</div>
              <h2 className="text-4xl font-bold leading-tight">
                Helping Each Other Can Make The World Better
              </h2>
              <p className="text-lg text-gray-700 max-w-lg">
                We defend human rights, provide legal support to victims of abuse, and empower communities to stand for justice across Nigeria.
              </p>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-2xl text-3xl">🤝</div>
                  <div>
                    <p className="font-semibold text-lg">Start Helping Team</p>
                    <p className="text-sm text-gray-600">There are many variations of solve</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPROVED STATS & EVENTS SECTION */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Improved Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={48} className="text-white" strokeWidth={2.2} />
              </div>
              <AnimatedCounter end={260} suffix="+" />
              <div className="mt-3 text-orange-300 text-sm tracking-widest font-medium">CASES SUPPORTED</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Users size={48} className="text-white" strokeWidth={2.2} />
              </div>
              <AnimatedCounter end={110} suffix="+" />
              <div className="mt-3 text-orange-300 text-sm tracking-widest font-medium">ACTIVE VOLUNTEERS</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group text-center"
            >
              <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <MapPin size={48} className="text-white" strokeWidth={2.2} />
              </div>
              <AnimatedCounter end={190} suffix="+" />
              <div className="mt-3 text-orange-300 text-sm tracking-widest font-medium">COMMUNITIES REACHED</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group text-center"
            >
              <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Award size={48} className="text-white" strokeWidth={2.2} />
              </div>
              <AnimatedCounter end={560} suffix="+" />
              <div className="mt-3 text-orange-300 text-sm tracking-widest font-medium">RIGHTS AWARENESS SESSIONS</div>
            </motion.div>
          </div>

          {/* Event Schedule - Unchanged */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events &amp; Activities</h2>
              <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-3xl hover:bg-orange-600 transition-all">
                Explore More
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1,2,3,4].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-center">
                      <div className="text-orange-400 text-4xl font-bold">29</div>
                      <div className="text-xs uppercase tracking-widest">July</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-white/20 text-white text-xs px-4 py-1 rounded-3xl">Event Details</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Human Rights Awareness Workshop</h3>
                  <p className="text-white/70 text-sm mb-6">Interactive session on rights protection and legal aid for NYSC corps members.</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-white/10 px-4 py-2 rounded-3xl">📍 Enugu Orientation Camp</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Unchanged */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-semibold tracking-widest">❤️ TESTIMONIALS</p>
            <h2 className="text-4xl font-bold">What People Are Saying About HRVC</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
              >
                <div className="flex text-orange-400 mb-6">★★★★☆</div>
                <p className="text-foreground/80 text-base leading-relaxed">
                  HRVC gave me the courage and support I needed when my rights were violated. Their team responded quickly and guided me through the process.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-2xl"></div>
                  <div>
                    <p className="font-semibold">Esther Howard</p>
                    <p className="text-xs text-foreground/60">Corps Member, Enugu</p>
                  </div>
                  <div className="ml-auto text-4xl text-orange-400">”</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS LOGO SECTION - Unchanged */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm tracking-widest mb-10">OUR MEDIA &amp; STRATEGIC PARTNERS</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  width={220}
                  height={90}
                  className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110" 
                  priority
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}