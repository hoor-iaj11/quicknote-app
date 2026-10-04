import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode?: 'signin' | 'signup' | 'trial', planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold text-sm shadow-xs">
            Q
          </span>
          <span>QuickNotes</span>
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#features"
            className="hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Features
          </a>
          <a
            href="#interactive-demo"
            className="hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Interactive Demo
          </a>
          <a
            href="#pricing"
            className="hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenAuth('signin')}
            className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap px-2 py-1.5"
          >
            Sign In
          </button>
          <button
            onClick={() => onOpenAuth('signup')}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Get Started Free
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenAuth('signup')}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-700"
          >
            Start Free
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pb-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1 rounded-md"
            >
              Features
            </a>
            <a
              href="#interactive-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1 rounded-md"
            >
              Interactive Demo
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1 rounded-md"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1 rounded-md"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-2 py-1 rounded-md"
            >
              FAQ
            </a>
          </nav>
          <div className="flex flex-col gap-2.5 border-t border-slate-100 pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signin');
              }}
              className="w-full rounded-lg border border-slate-300 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="w-full rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-700"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
