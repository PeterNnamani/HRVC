'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/image.png"
              alt="HRVC Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-9 text-sm font-medium text-gray-700">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition-colors group ${
                    isActive ? 'text-orange-600' : 'hover:text-orange-600'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/events"
              className={`relative py-2 transition-colors group ${
                pathname === '/events' ? 'text-orange-600' : 'hover:text-orange-600'
              }`}
            >
              Event
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                  pathname === '/events' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>

            <Link
              href="/blog"
              className={`relative py-2 transition-colors group ${
                pathname === '/blog' ? 'text-orange-600' : 'hover:text-orange-600'
              }`}
            >
              Blog
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                  pathname === '/blog' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>

            {/* Make a Report Button - Text turns black on hover */}
            <Button
              asChild
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-black font-semibold px-6 rounded-3xl transition-all"
            >
              <Link href="/report">Make a Report</Link>
            </Button>

            {/* Join Us Button */}
            <Button
              asChild
              variant="default"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 rounded-3xl"
            >
              <Link href="/get-involved">Join Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2 border-t pt-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-2xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/events"
              className="block px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Event
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            <div className="pt-4 space-y-3">
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-black"
              >
                <Link href="/report">Make a Report</Link>
              </Button>

              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/get-involved">Join Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}