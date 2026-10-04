import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Essential local markdown capture for personal daily thinking.',
      monthlyPrice: 0,
      annualPrice: 0,
      ctaText: 'Get Started Free',
      ctaAction: 'signup',
      features: [
        'Up to 1,000 markdown notes',
        '2 active synced devices',
        'Local-first offline storage',
        'Standard full-text search',
        'Basic markdown & task lists',
        'Community support forum',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      tagline: 'For researchers, engineers, and creators who need unlimited power.',
      monthlyPrice: 10,
      annualPrice: 8,
      isPopular: true,
      ctaText: 'Start 14-Day Free Trial',
      ctaAction: 'trial',
      features: [
        'Unlimited notes & attachments',
        'Unlimited device sync across all platforms',
        'Bi-directional knowledge graph visualizer',
        'End-to-end zero-knowledge encryption',
        '90-day version history & note recovery',
        'Custom shortcuts & Vim keybindings',
        'High-speed dedicated sync nodes',
        'Priority email support',
      ],
    },
    {
      id: 'team',
      name: 'Team',
      tagline: 'Collaborative workspaces for fast-moving product and engineering squads.',
      monthlyPrice: 20,
      annualPrice: 16,
      ctaText: 'Start Team Trial',
      ctaAction: 'trial',
      features: [
        'Everything in Pro plan included',
        'Shared workspaces & shared [[wikilinks]]',
        'Real-time live multi-user editing',
        'Role-based access & admin permissions',
        'Unlimited version history & audit logs',
        'SOC2 compliance reports & export',
        'Dedicated account manager',
        '24/7 SLA guaranteed response',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50/60 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            Invest in your focus. Predictable and transparent.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 [text-wrap:balance]">
            Start free, upgrade when your knowledge base grows. All plans include full offline access and open markdown exports.
          </p>

          {/* Interactive Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center rounded-xl bg-slate-200/80 p-1">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual Billing{' '}
              <span className="ml-1 text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                Save 20%
              </span>
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-200 ${
                  isPopular
                    ? 'border-2 border-blue-600 bg-white shadow-xl shadow-blue-950/10 ring-1 ring-blue-600/20'
                    : 'border border-slate-200 bg-white shadow-xs hover:shadow-md'
                }`}
              >
                {/* Popularity badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    {plan.id === 'starter' && (
                      <span className="text-xs font-medium text-slate-500">Free forever</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 min-h-[40px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
                        ${price}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {plan.id === 'team' ? '/user/month' : '/month'}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {price === 0
                        ? 'No credit card needed'
                        : billingCycle === 'annual'
                        ? `Billed annually ($${price * 12}/year)`
                        : 'Billed monthly, cancel anytime'}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Included features:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full rounded-xl py-3 text-center text-sm font-bold transition-all shadow-xs ${
                      isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-500">
                    {plan.id === 'starter'
                      ? 'Instant setup in 30 seconds'
                      : '14-day free trial · Cancel anytime with 1 click'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plan Comparison Summary Checklist */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h4 className="text-base font-bold text-slate-900 mb-4 text-center sm:text-left">
            All QuickNotes plans include our core guarantees:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>100% data portability (standard .md)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>No vendor lock-in or proprietary formats</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Full offline reading and editing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Zero tracking or behavioral ads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
