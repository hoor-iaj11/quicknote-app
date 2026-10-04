import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold text-xs">
                Q
              </span>
              <span>QuickNotes</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed mb-4">
              The modern, markdown-native note-taking workspace designed for clarity, instant speed, and effortless mental association.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>v2.4 Production</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-blue-600 transition-colors">
                  Interactive Sandbox
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-600 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Integrations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Platforms
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <span className="text-slate-700">macOS Desktop</span>
              </li>
              <li>
                <span className="text-slate-700">Windows 10/11</span>
              </li>
              <li>
                <span className="text-slate-700">Linux (AppImage)</span>
              </li>
              <li>
                <span className="text-slate-700">iOS & iPadOS</span>
              </li>
              <li>
                <span className="text-slate-700">Web App Vault</span>
              </li>
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Security Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Data Portability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} QuickNotes Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 transition-colors cursor-pointer">
              Privacy First
            </span>
            <span className="hover:text-slate-800 transition-colors cursor-pointer">
              End-to-End Encrypted
            </span>
            <span className="hover:text-slate-800 transition-colors cursor-pointer">
              Open Markdown
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
