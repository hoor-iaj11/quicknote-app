import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import sarahImg from '../assets/images/testimonial_sarah_chen_1790529540530.jpg';
import marcusImg from '../assets/images/testimonial_marcus_vance_1790529556133.jpg';
import elenaImg from '../assets/images/testimonial_elena_rostova_1790529570766.jpg';

export const Testimonials: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const testimonials = [
    {
      id: 'sarah',
      quote:
        'QuickNotes cut our product brief drafting time in half. The bi-directional linking automatically surfaced historical research notes we would have otherwise duplicated. It has fundamentally changed how our team thinks.',
      name: 'Sarah Chen',
      role: 'Head of Product',
      company: 'LinearFlow Systems',
      avatarUrl: sarahImg,
      initials: 'SC',
      metricLabel: 'Brief turnaround',
      metricValue: '+48% Faster',
    },
    {
      id: 'marcus',
      quote:
        'As an engineer who lives in markdown, QuickNotes is the first tool that genuinely respects raw speed. Keystroke latency is imperceptible, the vim bindings work flawlessly, and everything stays local on my SSD.',
      name: 'Marcus Vance',
      role: 'Principal Software Architect',
      company: 'Synthetix Tech',
      avatarUrl: marcusImg,
      initials: 'MV',
      metricLabel: 'Keystroke lag',
      metricValue: '&lt; 25ms',
    },
    {
      id: 'elena',
      quote:
        'The offline-first architecture saved me during field interviews across three rural clinic sites with zero cellular coverage. QuickNotes synced over 90 pages of observations seamlessly the second I returned to the hotel.',
      name: 'Elena Rostova',
      role: 'Lead UX Researcher',
      company: 'Aurora BioLabs',
      avatarUrl: elenaImg,
      initials: 'ER',
      metricLabel: 'Data recovery',
      metricValue: '100% Intact',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Social Proof & Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            Trusted by thinkers, engineers, and researchers worldwide.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 [text-wrap:balance]">
            Over 14,000 knowledge workers rely on QuickNotes every day to capture ideas, draft specifications, and maintain mental clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-200"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Attributable Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Quantified impact metric */}
                <div className="mb-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{t.metricLabel}</span>
                  <span
                    className="font-bold text-blue-600 font-mono"
                    dangerouslySetInnerHTML={{ __html: t.metricValue }}
                  />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {!imageErrors[t.id] ? (
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="h-11 w-11 rounded-full object-cover border border-slate-200 shadow-2xs"
                      onError={() => handleImageError(t.id)}
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs shadow-2xs">
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {t.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t.role} · <span className="font-medium text-slate-700">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet company trust bar */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-600 font-medium mb-6">
            Engineers & writers at leading technology teams choose QuickNotes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all text-sm font-bold text-slate-600">
            <span>LINEARFLOW</span>
            <span>SYNTHETIX</span>
            <span>AURORA LABS</span>
            <span>NEXTGEN DATA</span>
            <span>FOUNDRY CO.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
