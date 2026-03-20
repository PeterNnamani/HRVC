'use client';

import Link from 'next/link';
import { Mail, Phone, MessageCircle, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">HRVC</h3>
            <p className="text-sm opacity-90">
              Protecting the rights of NYSC corps members and advocating for human rights in Nigeria.
            </p>
            <p className="text-xs mt-4 opacity-75">
              Note: HRVC is not affiliated with the official NYSC organization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/know-your-rights" className="opacity-90 hover:opacity-100 transition-opacity">
                  Know Your Rights
                </Link>
              </li>
              <li>
                <Link href="/report" className="opacity-90 hover:opacity-100 transition-opacity">
                  Report a Violation
                </Link>
              </li>
              <li>
                <Link href="/resources" className="opacity-90 hover:opacity-100 transition-opacity">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="opacity-90 hover:opacity-100 transition-opacity">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@hrvc.org" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@hrvc.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+2341234567890" className="opacity-90 hover:opacity-100 transition-opacity">
                  +234 (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="opacity-75">
              © 2024 HRVC. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/contact" className="opacity-75 hover:opacity-100 transition-opacity">
                Contact
              </Link>
              <span className="opacity-75">•</span>
              <Link href="/about" className="opacity-75 hover:opacity-100 transition-opacity">
                About
              </Link>
              <span className="opacity-75">•</span>
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity flex items-center gap-1">
                <Heart size={14} /> Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
