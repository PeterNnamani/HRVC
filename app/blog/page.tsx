'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { Calendar, User, ArrowRight, X, ArrowLeft } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Outstanding entrepreneurs and develop your skills.',
    excerpt: 'When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template for looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will be distracting.',
    fullContent: 'Full article content goes here. This is the complete detailed version of the blog post. You can add as much text as needed including paragraphs, lists, quotes, etc. HRVC is committed to empowering corps members with accurate information about their rights.',
    date: 'May 12, 2025',
    author: 'Admin',
    category: 'Donation',
    image: '/image.png',
  },
  {
    id: 2,
    title: 'Money markets rates finding the best account',
    excerpt: 'When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template for looking bare or minimizing the distractions of the draft copy...',
    fullContent: 'Detailed full content for the second post. This section expands when you click Read More. Include important information about financial rights, market updates, or any relevant topic for HRVC audience.',
    date: 'May 12, 2025',
    author: 'Admin',
    category: 'Donation',
    image: '/test-pics.png',
  },
  {
    id: 3,
    title: 'There are many various passages of',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullContent: 'This is the complete article content. Expand this area with real blog content about human rights, stories of change, or practical guides for NYSC corps members.',
    date: 'May 12, 2025',
    author: 'HRVC Team',
    category: 'Charity',
    image: '/ceo.png',
  },
];

const CATEGORIES = [
  { name: 'Charity', count: 8 },
  { name: 'Crowdfunding', count: 11 },
  { name: 'Industries', count: 18 },
  { name: 'Innovations', count: 11 },
  { name: 'Technology', count: 7 },
];

const TAGS = ['Crowdfunding', 'Innovations', 'Justice', 'Lead', 'Startup', 'Technology', 'Market', 'Court'];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [modalPost, setModalPost] = useState<any>(null);

  const toggleExpand = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0f172a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Blog Standard</h1>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-5 py-1.5 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Blog Standard
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Search */}
            <div className="bg-gray-50 rounded-3xl p-6">
              <h3 className="font-semibold mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-5 pr-12 focus:outline-none focus:border-orange-400"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-2xl">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 rounded-3xl p-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 text-sm hover:bg-orange-50 cursor-pointer transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-gray-400">({cat.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 rounded-3xl p-6">
              <h3 className="font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-5">
                {BLOG_POSTS.map((post) => (
                  <div key={post.id} className="flex gap-3 cursor-pointer" onClick={() => setModalPost(post)}>
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image src={post.image} alt={post.title} width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium line-clamp-2 hover:text-orange-600 transition-colors">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="bg-gray-50 rounded-3xl p-6">
              <h3 className="font-semibold mb-4">Tag Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-sm px-4 py-2 rounded-2xl border border-gray-200 hover:border-orange-400 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Smaller stylish cards */}
          <div className="lg:col-span-8 space-y-10">
            {BLOG_POSTS.map((post) => {
              const isExpanded = expandedPost === post.id;
              return (
                <div key={post.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row">
                    {/* Small stylish image */}
                    <div className="md:w-48 h-48 md:h-auto flex-shrink-0 relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-7">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <User size={15} /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={15} /> {post.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold leading-tight mb-4">{post.title}</h3>

                      <p className={`text-gray-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                        {isExpanded ? post.fullContent : post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center gap-4">
                        <button
                          onClick={() => toggleExpand(post.id)}
                          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                        >
                          {isExpanded ? 'Show Less' : 'Read More'}
                          <ArrowRight size={18} className={isExpanded ? 'rotate-180' : ''} />
                        </button>

                        <button
                          onClick={() => setModalPost(post)}
                          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          Full Article →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-12">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className={`w-10 h-10 flex items-center justify-center rounded-2xl text-sm font-medium transition-colors ${
                    num === 1 ? 'bg-orange-500 text-white' : 'border border-gray-200 hover:border-orange-400'
                  }`}
                >
                  {num}
                </button>
              ))}
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-2xl hover:border-orange-400 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Article Modal */}
      {modalPost && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full rounded-3xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b px-8 py-5">
              <button
                onClick={() => setModalPost(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Back</span>
              </button>
              <button
                onClick={() => setModalPost(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-8 flex-1">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                <Image src={modalPost.image} alt={modalPost.title} fill className="object-cover" />
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span>{modalPost.author}</span>
                <span>•</span>
                <span>{modalPost.date}</span>
              </div>

              <h2 className="text-3xl font-bold mb-6">{modalPost.title}</h2>
              <div className="prose text-gray-700 leading-relaxed">
                {modalPost.fullContent}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}