/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { Features } from './components/Features';
import { WorkflowSection } from './components/WorkflowSection';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { PricingPlan } from './types';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'trial'>('signup');
  const [selectedPlanName, setSelectedPlanName] = useState('Pro Plan');

  const handleOpenAuth = (
    mode: 'signin' | 'signup' | 'trial' = 'signup',
    planName: string = 'Pro Plan'
  ) => {
    setAuthMode(mode);
    setSelectedPlanName(planName);
    setAuthModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    if (plan.id === 'starter') {
      handleOpenAuth('signup', 'Starter Plan');
    } else {
      handleOpenAuth('trial', `${plan.name} Plan`);
    }
  };

  const handleExploreDemo = () => {
    const demoElement = document.getElementById('interactive-demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between">
      {/* Top Bar Navigation */}
      <Navbar onOpenAuth={handleOpenAuth} />

      <main className="flex-1">
        {/* Hero Section with Value Prop & Visual Showcase */}
        <Hero
          onOpenAuth={handleOpenAuth}
          onExploreDemo={handleExploreDemo}
        />

        {/* Live Interactive QuickNotes Sandbox */}
        <section className="py-16 bg-gradient-to-b from-white via-slate-50/60 to-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
          <div className="mx-auto max-w-4xl text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Try It In Your Browser
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Test drive the editor right now.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Type markdown, create new notes, filter tags, and switch between edit and live preview.
            </p>
          </div>
          <InteractiveSandbox />
        </section>

        {/* Features Section (Bento-style with interactive detail preview) */}
        <Features />

        {/* 3-Step Natural Workflow */}
        <WorkflowSection onOpenAuth={handleOpenAuth} />

        {/* 3-Plan Transparent Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Concrete, Attributable Testimonials */}
        <Testimonials />

        {/* Collapsible FAQ Section */}
        <FaqSection />

        {/* High-Impact Lead Capture CTA */}
        <CtaSection onOpenAuth={handleOpenAuth} />
      </main>

      {/* Clean 4-Column Quiet Footer */}
      <Footer />

      {/* Global Interactive Auth / Trial Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        planName={selectedPlanName}
      />
    </div>
  );
}
