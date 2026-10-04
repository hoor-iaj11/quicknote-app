import React, { useState } from 'react';
import { 
  Zap, 
  GitFork, 
  Cloud, 
  Search, 
  FileCode, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  previewContent: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const Features: React.FC = () => {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);

  const features = [
    {
      number: '01',
      icon: <Zap className="h-5 w-5 text-blue-600" />,
      title: 'Distraction-Free Markdown Engine',
      description: 'Write at the speed of thought. Pure, standard markdown with immediate live preview, vim navigation keys, and keyboard-first workflow.',
      bullets: [
        'Zero milliseconds keypress lag on local SSD',
        'Built-in tables, task lists, code formatting & LaTeX math',
        'Custom typography scale with balanced line length'
      ],
      preview: (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 text-slate-400">
            <span>quick_capture.md</span>
            <span className="text-emerald-600 font-semibold">● LIVE EDIT</span>
          </div>
          <div className="space-y-2 text-slate-700">
            <p className="text-blue-600 font-bold"># Architecture Sprint Plan</p>
            <p className="text-slate-500">- [x] Migrate SQLite database to local CRDT stream</p>
            <p className="text-slate-500">- [x] Benchmark key-up latency &lt; 30ms</p>
            <p className="text-slate-900 font-semibold">- [ ] Implement backlink relation indexing</p>
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-600 mt-2">
              <span className="text-blue-700 font-medium">const</span> syncTime = await engine.benchmark();
              <br />
              {'console.log(`Sync completed in ${syncTime}ms`);'}
            </div>
          </div>
        </div>
      )
    },
    {
      number: '02',
      icon: <GitFork className="h-5 w-5 text-blue-600" />,
      title: 'Bidirectional Linking & Knowledge Graph',
      description: 'Never let ideas get isolated in hierarchical folders. Link concepts effortlessly using [[wikilinks]] and watch your personal knowledge network grow.',
      bullets: [
        'Automatic backlinks discovery without manual tagging',
        'Visual interactive 2D relation graph with zoom & cluster view',
        'Transclusion: embed live blocks from one note into another'
      ],
      preview: (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
            <span className="font-semibold text-slate-900">Knowledge Graph View</span>
            <span className="text-[11px] text-blue-600 font-medium">342 Connected Nodes</span>
          </div>
          {/* Visual mock graph representation */}
          <div className="relative h-44 rounded-lg bg-blue-50/40 p-4 border border-blue-100 flex items-center justify-center">
            <div className="absolute top-4 left-6 rounded-md bg-white border border-blue-200 px-2 py-1 font-semibold text-blue-900 shadow-xs">
              [[Product Strategy]]
            </div>
            <div className="absolute bottom-6 left-12 rounded-md bg-white border border-slate-200 px-2 py-1 text-slate-700 shadow-xs">
              [[User Research]]
            </div>
            <div className="absolute top-10 right-8 rounded-md bg-blue-600 text-white px-2 py-1 font-bold shadow-xs">
              [[QuickNotes Core]]
            </div>
            <div className="absolute bottom-8 right-14 rounded-md bg-white border border-slate-200 px-2 py-1 text-slate-700 shadow-xs">
              [[Offline Engine]]
            </div>
            {/* SVG Connecting lines */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
              <line x1="25%" y1="25%" x2="70%" y2="35%" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="30%" y1="75%" x2="25%" y2="25%" stroke="#93C5FD" strokeWidth="1.5" />
              <line x1="70%" y1="35%" x2="65%" y2="75%" stroke="#3B82F6" strokeWidth="2" />
            </svg>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span>Related references automatically indexed</span>
            <span className="text-blue-600 font-semibold">Explore 14 Backlinks →</span>
          </div>
        </div>
      )
    },
    {
      number: '03',
      icon: <Cloud className="h-5 w-5 text-blue-600" />,
      title: 'Local-First Architecture & Instant Cloud Sync',
      description: 'Your notes live on your disk first. You can edit on planes, in subways, or with no Wi-Fi. The moment you reconnect, changes merge instantly without conflicts.',
      bullets: [
        'State-based CRDT resolution prevents overwriting edits',
        'End-to-end encrypted with zero-knowledge server storage',
        'Native desktop clients for macOS, Windows, Linux & Mobile'
      ],
      preview: (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-semibold text-slate-900">Active Sync Devices</span>
            <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              All 3 Encrypted & Synced
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800">MacBook Pro 16" (Primary)</span>
              </div>
              <span className="text-[11px] text-slate-500">Synced 0s ago</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800">iPhone 15 Pro (Mobile App)</span>
              </div>
              <span className="text-[11px] text-slate-500">Synced 4s ago</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800">Web Vault (Chrome)</span>
              </div>
              <span className="text-[11px] text-slate-500">Synced 12s ago</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
            <span>Local file storage: ~/Documents/QuickNotes</span>
            <span className="text-emerald-700 font-medium">100% Offline Accessible</span>
          </div>
        </div>
      )
    },
    {
      number: '04',
      icon: <Search className="h-5 w-5 text-blue-600" />,
      title: 'Instant Fuzzy Search & Command Palette',
      description: 'Find any note, snippet, or thought across tens of thousands of documents in milliseconds. Use natural commands to jump, tag, or export effortlessly.',
      bullets: [
        'Global Cmd + K command palette for rapid actions',
        'Full-text indexing with typographical typo-tolerance',
        'Filter by #tags, modification date, or linked references'
      ],
      preview: (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs text-xs">
          <div className="flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-50/30 px-3 py-2 text-slate-900 mb-3 shadow-xs">
            <Search className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-slate-800">distributed consensus</span>
            <span className="ml-auto text-[10px] font-mono text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
              3 results (2ms)
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="p-2 rounded-lg bg-blue-50/50 border border-blue-200">
              <div className="font-semibold text-blue-900">System Architecture Decisions</div>
              <p className="text-[11px] text-slate-600 truncate mt-0.5">
                ...evaluated Raft vs state CRDTs for distributed consensus in offline multi-writer setups...
              </p>
            </div>
            <div className="p-2 rounded-lg hover:bg-slate-50 text-slate-700">
              <div className="font-semibold text-slate-800">Reading List: Distributed Systems</div>
              <p className="text-[11px] text-slate-500 truncate mt-0.5">
                ...notes on Lamport clocks, vector timestamps, and consensus protocols...
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Designed for Cognitive Flow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            Everything you need to think clearly, nothing to get in your way.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 [text-wrap:balance]">
            Traditional note apps are bloated with heavy databases, confusing permissions, and slow web wrappers.
            QuickNotes is built from scratch for speed, durability, and mental clarity.
          </p>
        </div>

        {/* Asymmetric Bento-Grid Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Feature Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((feature, idx) => {
              const isSelected = activeFeatureIdx === idx;
              return (
                <div
                  key={feature.number}
                  onClick={() => setActiveFeatureIdx(idx)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all border text-left ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/40 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveFeatureIdx(idx);
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-blue-600 font-mono">
                      {feature.number}.
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <div className="space-y-1.5">
                    {feature.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Feature Showcase Panel */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
                    {features[activeFeatureIdx].icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {features[activeFeatureIdx].title}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Feature Spotlight {features[activeFeatureIdx].number} of 04
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-blue-700 font-semibold bg-white border border-blue-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Interactive Preview</span>
                </div>
              </div>

              {/* Dynamic Feature Preview Slot */}
              {features[activeFeatureIdx].preview}

              {/* Bottom Feature Guarantee */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  Included in all plans, free forever
                </span>
                <a
                  href="#pricing"
                  className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Compare plans</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
