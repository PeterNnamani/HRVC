'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Play, Clock, Calendar, Heart, Radio, Tv, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState<'radio' | 'tv' | 'training'>('radio');
  const [activeSection, setActiveSection] = useState<'recent' | 'archives'>('recent');

  // Expanded Mock Data - 10+ items per section
  const programs = {
    radio: {
      recent: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        title: `Justice Watch Nigeria ${i + 1}`,
        host: ["Barr. Adaobi Eze", "Dr. Chinedu Okeke", "Aisha Mohammed", "Pastor Emmanuel Nwosu"][i % 4],
        duration: `${30 + (i % 35)} min`,
        date: `April ${3 - (i % 3)}, 2026`,
        description: "In-depth discussion on human rights violations, citizen protection, and legal reforms across Nigeria.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9wgxcq",
        thumbnail: `https://picsum.photos/id/${100 + i}/600/340`,
      })),
      archives: Array.from({ length: 10 }, (_, i) => ({
        id: i + 100,
        title: `Rights & Reforms Episode ${i + 1}`,
        host: ["Prof. Ngozi Adebayo", "Barr. Olumide Afolabi", "Hon. Fatima Yusuf"][i % 3],
        duration: `${35 + (i % 30)} min`,
        date: `March ${28 - (i % 15)}, 2026`,
        description: "Archival episode covering key human rights cases and policy analysis.",
        youtubeUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        thumbnail: `https://picsum.photos/id/${200 + i}/600/340`,
      })),
    },
    tv: {
      recent: Array.from({ length: 10 }, (_, i) => ({
        id: i + 200,
        title: `HRVC Spotlight ${i + 1}`,
        host: "HRVC Media Team",
        duration: `${25 + (i % 20)} min`,
        date: `April ${4 - (i % 4)}, 2026`,
        description: "Powerful visual documentary highlighting human rights stories from across the country.",
        youtubeUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
        thumbnail: `https://picsum.photos/id/${300 + i}/600/340`,
      })),
      archives: Array.from({ length: 10 }, (_, i) => ({
        id: i + 300,
        title: `Know Your Rights ${i + 1}`,
        host: "Adv. Ifeoma Okonkwo",
        duration: `${28 + (i % 25)} min`,
        date: `February ${20 - (i % 18)}, 2026`,
        description: "Educational series breaking down constitutional rights and legal protections.",
        youtubeUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        thumbnail: `https://picsum.photos/id/${400 + i}/600/340`,
      })),
    },
    training: {
      recent: Array.from({ length: 10 }, (_, i) => ({
        id: i + 400,
        title: `Live Human Rights Training ${i + 1}`,
        facilitator: ["Prof. Ngozi Adebayo", "Barr. Olumide Afolabi", "Dr. Chinedu Okeke"][i % 3],
        duration: `${90 + (i % 60)} min`,
        date: `April ${2 - (i % 3)}, 2026`,
        description: "Interactive training session on identifying, reporting, and responding to human rights violations.",
        youtubeUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        thumbnail: `https://picsum.photos/id/${500 + i}/600/340`,
      })),
      archives: Array.from({ length: 10 }, (_, i) => ({
        id: i + 500,
        title: `Advocacy Workshop ${i + 1}`,
        facilitator: "Team HRVC",
        duration: `${75 + (i % 45)} min`,
        date: `March ${25 - (i % 20)}, 2026`,
        description: "Practical strategies for effective human rights advocacy and community mobilization.",
        youtubeUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
        thumbnail: `https://picsum.photos/id/${600 + i}/600/340`,
      })),
    },
  };

  const currentPrograms = programs[activeTab][activeSection];

  const tabs = [
    { key: 'radio', label: 'Radio Programs', icon: Radio },
    { key: 'tv', label: 'TV Programs', icon: Tv },
    { key: 'training', label: 'Live Trainings', icon: Users },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Compact Hero */}
      <div className="bg-[#0f172a] text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Media & Resources</h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Engaging radio shows • Insightful TV programs • impactful live trainings
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation with Stylish Underline */}
          <div className="relative mb-10">
            <div className="flex flex-wrap gap-x-12 border-b border-gray-200">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key as 'radio' | 'tv' | 'training');
                      setActiveSection('recent');
                    }}
                    className={`pb-5 px-1 text-lg font-semibold flex items-center gap-3 transition-all relative group`}
                  >
                    <Icon 
                      size={27} 
                      strokeWidth={2.4} 
                      className={isActive ? "text-[#0f172a]" : "text-gray-500"} 
                    />
                    <span className={isActive ? "text-[#0f172a]" : "text-gray-600 group-hover:text-gray-900"}>
                      {tab.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent / Archives Toggle */}
          <div className="flex items-center gap-3 mb-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveSection('recent')}
              className={`px-8 py-3 rounded-2xl font-medium flex items-center gap-2 transition-all ${
                activeSection === 'recent' ? 'bg-[#0f172a] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar size={19} />
              Recent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveSection('archives')}
              className={`px-8 py-3 rounded-2xl font-medium flex items-center gap-2 transition-all ${
                activeSection === 'archives' ? 'bg-[#0f172a] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Clock size={19} />
              Archives
            </motion.button>
          </div>

          {/* Programs Grid with Framer Motion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeSection}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {currentPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] bg-black overflow-hidden">
                    <img
                      src={program.thumbnail}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <a
                      href={program.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/60 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <Play size={26} className="text-white ml-1" fill="white" />
                      </div>
                    </a>

                    <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full font-mono">
                      {program.duration}
                    </div>
                  </div>

                  {/* Card Content - Compact & Stylish */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-semibold text-base leading-tight mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {program.title}
                    </h3>

                    {/* <p className="text-orange-600 text-sm mb-3 font-medium">
                      {program.host || program.facilitator}
                    </p> */}

                    <p className="text-gray-600 text-[13px] leading-relaxed line-clamp-3 mb-auto">
                      {program.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={15} />
                        {program.date}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`❤️ Added "${program.title}" to favorites`);
                        }}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Heart size={19} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <div className="mt-16 bg-[#0f172a] text-white rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-semibold mb-3">Have a story to share?</h2>
            <p className="opacity-90 mb-8 max-w-md mx-auto">
              Partner with us to create impactful media content on human rights.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              Collaborate With Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MediaPage;