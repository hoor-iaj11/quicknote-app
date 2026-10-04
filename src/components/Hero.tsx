import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Laptop, Terminal } from 'lucide-react';
import heroImage from '../assets/images/hero_quicknotes_preview_1790529525374.jpg';

interface HeroProps {
  onOpenAuth: (mode?: 'signin' | 'signup' | 'trial') => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth, onExploreDemo }) => {
  const [emailInput, setEmailInput] = useState('');
  const [imageError, setImageError] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAuth('signup');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Decorative ambient background accents */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Top Copy */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Quiet, unboxed metadata kicker */}
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-blue-700">
            <span>Markdown-native</span>
            <span aria-hidden="true">·</span>
            <span>Sub-40ms latency</span>
            <span aria-hidden="true">·</span>
            <span>End-to-end encrypted</span>
          </div>

          {/* Primary Headline with balance wrapping */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] [text-wrap:balance]">
            Capture thoughts at the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              speed of mind.
            </span>
          </h1>

          {/* Clear, concrete value proposition */}
          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed [text-wrap:balance]">
            QuickNotes eliminates every ounce of friction between your thoughts and the page.
            Zero loading screens, instant cloud sync, and interconnected notes that grow with you.
          </p>

          {/* Primary Action Zone */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <form
              onSubmit={handleQuickSubmit}
              className="flex w-full sm:w-auto items-center rounded-xl border border-slate-300 bg-white p-1.5 shadow-sm focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100"
            >
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email..."
                className="w-full sm:w-64 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Start Free</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <button
              onClick={onExploreDemo}
              className="w-full sm:w-auto rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              Try Interactive Sandbox ↓
            </button>
          </div>

          {/* Adjacency Proof Line */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Free forever tier</span>
            </div>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>macOS, Windows, iOS & Web</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Presentation */}
        <div className="mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-900/5 p-2 sm:p-3 shadow-2xl backdrop-blur-xs">
            <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
              {!imageError ? (
                <img
                  src={heroImage}
                  alt="QuickNotes modern minimal note taking interface preview on a workstation"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[580px]"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Fallback styled container if image ever fails to load */
                <div className="flex h-96 w-full flex-col items-center justify-center bg-slate-900 p-8 text-center text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg mb-4">
                    QN
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">QuickNotes Desktop Workspace</h3>
                  <p className="mt-2 text-sm text-slate-400 max-w-md">
                    Lightning-fast native markdown editor with instant bi-directional links and offline sync.
                  </p>
                </div>
              )}
            </div>

            {/* Floating Quick Feature Highlights */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 px-1 text-left">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span>0ms Keystroke Delay</span>
                </div>
                <p className="text-xs text-slate-500">
                  Built on local-first storage with instant background reconciliation.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                  <Terminal className="h-4 w-4 text-blue-600" />
                  <span>Full Markdown & LaTeX</span>
                </div>
                <p className="text-xs text-slate-500">
                  Native code blocks, math equations, tables, and task checklists.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  <span>End-to-End Encrypted</span>
                </div>
                <p className="text-xs text-slate-500">
                  Your encryption keys never leave your devices. Absolute privacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Band */}
        <div className="mt-14 border-y border-slate-200/80 py-8 bg-slate-50/50 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tabular-nums">
                &lt; 40ms
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                Average Capture Latency
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                2.4M+
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                Notes Created Monthly
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tabular-nums">
                99.99%
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                Sync Uptime Reliability
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                100%
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                Offline Capable Vaults
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
