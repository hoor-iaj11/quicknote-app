import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface CtaSectionProps {
  onOpenAuth: (mode?: 'signin' | 'signup' | 'trial', planName?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenAuth }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAuth('trial', 'Pro Plan');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 py-20 text-white">
      {/* Decorative background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-blue-100 backdrop-blur-xs mb-6 border border-white/15">
          <Zap className="h-3.5 w-3.5 text-blue-300" />
          <span>Frictionless capture starts right now</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight [text-wrap:balance] text-white">
          Ready to experience note-taking at the speed of thought?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-blue-100 leading-relaxed [text-wrap:balance]">
          Join over 14,000 researchers, engineers, and creators who replaced cluttered note silos with a lightning-fast second brain.
        </p>

        {/* Lead Capture Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col sm:flex-row items-center gap-2 rounded-2xl bg-white/10 p-2 backdrop-blur-md border border-white/20"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            className="w-full sm:w-auto flex-1 rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-400 transition-colors whitespace-nowrap"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Quiet Trust Signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-blue-300" />
            <span>Free Starter tier forever</span>
          </div>
          <span aria-hidden="true" className="text-blue-400/60">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-blue-300" />
            <span>14-day free Pro trial</span>
          </div>
          <span aria-hidden="true" className="text-blue-400/60">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-blue-300" />
            <span>Zero credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};
