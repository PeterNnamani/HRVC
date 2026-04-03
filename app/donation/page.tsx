'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Search, Calendar, User } from 'lucide-react';

const CATEGORIES = [
  { name: 'Human Rights', count: 12 },
  { name: 'Legal Aid', count: 8 },
  { name: 'Education', count: 15 },
  { name: 'Emergency Relief', count: 9 },
  { name: 'Advocacy', count: 11 },
];

const RECENT_POSTS = [
  {
    title: "Protecting NYSC Corps Members' Rights",
    date: "May 12, 2025",
    image: "/image.png",
  },
  {
    title: "Stories of Justice: Real Cases We Supported",
    date: "May 10, 2025",
    image: "/test-pics.png",
  },
  {
    title: "How Your Donation Changes Lives",
    date: "May 8, 2025",
    image: "/ceo.png",
  },
];

const TAGS = ['Rights', 'Justice', 'Legal', 'NYSC', 'Advocacy', 'Emergency', 'Education', 'Protection'];

export default function Donation() {
  const [amount, setAmount] = useState(10);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const goal = 100000;
  const raised = 69000;
  const progress = Math.round((raised / goal) * 100);

  const handleDonate = () => {
    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Thank you! Your ₦${amount} donation to support human rights has been received.`);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0f172a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Donation Details</h1>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Donation Details
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
                  className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-5 pr-12 focus:outline-none focus:border-orange-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-2xl">
                  <Search size={20} />
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
              <div className="space-y-6">
                {RECENT_POSTS.map((post, index) => (
                  <div key={index} className="flex gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image src={post.image} alt={post.title} width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium line-clamp-2">{post.title}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </p>
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
                    className="bg-white text-sm px-4 py-2 rounded-2xl border border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Donation Content */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
              {/* Featured Image */}
              <div className="relative h-80">
                <Image
                  src="/image.png"
                  alt="Child in need"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <div>
                      <span className="text-4xl font-bold text-orange-600">₦{raised.toLocaleString()}</span>
                      <span className="text-gray-500"> of ₦{goal.toLocaleString()} raised</span>
                    </div>
                    <span className="text-orange-600 font-semibold">{progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-8 flex items-start gap-3">
                  <div className="text-orange-600 mt-0.5">ℹ️</div>
                  <p className="text-sm text-orange-800">
                    Test mode is enabled. While in test mode no live donations are processed.
                  </p>
                </div>

                {/* Quick Amounts */}
                <div className="mb-8">
                  <p className="font-medium mb-3">Select Amount (₦)</p>
                  <div className="flex flex-wrap gap-3">
                    {[10, 20, 30, 40, 50, 100].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                          amount === amt
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        ₦{amt}
                      </button>
                    ))}
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="px-6 py-3 border border-gray-200 rounded-2xl w-32 focus:outline-none focus:border-orange-500"
                      placeholder="Other"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <p className="font-medium mb-4">Select Payment Method</p>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { id: 'test', label: 'Test donation' },
                      { id: 'offline', label: 'Offline Donation' },
                      { id: 'credit', label: 'Credit Card' },
                    ].map((method) => (
                      <label key={method.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === method.id}
                          onChange={() => setPaymentMethod(method.id)}
                          className="accent-orange-500"
                        />
                        <span>{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="mb-8">
                  <p className="font-medium mb-4">Personal Info</p>
                  <p className="text-xs text-gray-500 mb-4">Your email address will not be published. Required fields marked *</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name *"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-orange-500"
                  />
                </div>

                {/* Donate Button */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleDonate}
                    disabled={isProcessing}
                    className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold px-10 py-4 rounded-3xl flex items-center gap-3 transition-all active:scale-95"
                  >
                    {isProcessing ? 'Processing...' : 'Donate Now'}
                    <ArrowRight size={20} />
                  </button>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">Donation Total</p>
                    <p className="text-2xl font-bold text-orange-600">₦{amount}</p>
                  </div>
                </div>

                {/* Summary / Impact */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold mb-4">Your donation will help us:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <span>Provide free legal aid to victims of human rights abuse</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <span>Educate NYSC corps members about their rights</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <span>Support emergency intervention for urgent cases</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <span>Amplify advocacy campaigns for systemic change</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}