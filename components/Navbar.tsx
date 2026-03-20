'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Know Your Rights', href: '/know-your-rights' },
  { label: 'Report', href: '/report' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-background border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/image.png'
              alt='HRVC Logo'
              width={40}
              height={40}
              className='object-contain'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-1'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors'
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Button
              asChild
              variant='default'
              className='bg-accent text-accent-foreground hover:bg-accent/90'
            >
              <Link href='/report'>Report Now</Link>
            </Button>
            <Button
              asChild
              variant='default'
              className='bg-primary text-primary-foreground hover:bg-primary/90'
            >
              <Link href='/register'>Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden p-2 text-foreground'
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='lg:hidden pb-4 space-y-2'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='block px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant='default'
              className='w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90'
            >
              <Link href='/report'>Report Now</Link>
            </Button>
            <Button
              asChild
              variant='default'
              className='w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90'
            >
              <Link href='/register'>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
