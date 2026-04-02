'use client';

import Link from 'next/link';
import { Mail, Phone, MessageCircle, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">HRVC</h3>
            <p className="text-sm text-slate-300">
              HRVC is a movement in Nigeria dedicated to protecting rights, raising awareness, and supporting survivors through volunteer action and legal outreach.
            </p>
            <p className="text-xs mt-4 text-slate-500">
              Building safety, accountability, and dignity for every community.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/know-your-rights" className="hover:text-white transition-colors">
                  Know Your Rights
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-white transition-colors">
                  Report a Violation
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@hrvc.org" className="hover:text-white transition-colors">
                  info@hrvc.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+2348078836002" className="hover:text-white transition-colors">
                  +234 807 883 6002
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a href="https://wa.me/2348078836002" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <p>12, Connor Street, Asata, Enugu, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2026 HRVC. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <span>•</span>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <span>•</span>
              <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                <Heart size={14} /> Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
