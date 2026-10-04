import React from 'react';
import { Zap, GitMerge, Search, ArrowRight } from 'lucide-react';

interface WorkflowSectionProps {
  onOpenAuth: (mode?: 'signin' | 'signup' | 'trial') => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenAuth }) => {
  const steps = [
    {
      step: '01',
      title: 'Frictionless Quick Capture',
      subtitle: 'Never lose a fleeting idea',
      description: 'Trigger the global quick capture pop-up with Cmd + Shift + N from any application or browser tab. Type and close in 2 seconds. No folder picking required.',
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      detail: 'Available on macOS, Windows, Linux, and iOS Quick Action'
    },
    {
      step: '02',
      title: 'Organic Bi-Directional Linking',
      subtitle: 'Build a second brain that compounds',
      description: 'Type [[ to instantly search and link to any previous note, person, book, or project. As you build connections, your personal knowledge graph visualizes how ideas relate.',
      icon: <GitMerge className="h-6 w-6 text-blue-600" />,
      detail: 'Automatic backlink indexing with contextual breadcrumbs'
    },
    {
      step: '03',
      title: 'Zero-Latency Total Recall',
      subtitle: 'Find needles in a 100,000-note haystack',
      description: 'Lightning-fast fuzzy search matches text within PDFs, code blocks, and markdown titles in milliseconds. Filter by date, tag, or backlink relation with ease.',
      icon: <Search className="h-6 w-6 text-blue-600" />,
      detail: 'Typo-tolerant search algorithm running entirely on your machine'
    }
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            The QuickNotes Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            From fleeting spark to organized knowledge in three natural steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 [text-wrap:balance]">
            Designed for how the human mind naturally associates ideas—not rigid filing cabinets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, index) => (
            <div
              key={s.step}
              className="relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-xs border border-slate-200 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-slate-200 tabular-nums">
                    {s.step}
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                  {s.subtitle}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                {s.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenAuth('signup')}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Experience the workflow yourself — Start free in 30 seconds</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
