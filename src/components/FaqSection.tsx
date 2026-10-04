import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'How does offline-first sync work if I lose connection?',
      answer:
        'QuickNotes writes every character directly to your local encrypted SSD storage before dispatching to the network. If your connection drops, you can continue typing, creating notes, and linking documents without interruption. When you reconnect, our conflict-free replicated data types (CRDT) engine silently merges all changes without dialog popups or overwrite conflicts.',
    },
    {
      id: 'faq-2',
      question: 'Can I import notes from Notion, Obsidian, Bear, or Apple Notes?',
      answer:
        'Yes! QuickNotes provides a one-click migration wizard for standard Markdown files, Obsidian vaults, Notion HTML/Markdown exports, and Apple Notes. It preserves your folder hierarchies, tags, internal wikilinks, and attached images cleanly.',
    },
    {
      id: 'faq-3',
      question: 'Are my notes locked into a proprietary database format?',
      answer:
        'Never. Your notes are stored as standard, human-readable UTF-8 Markdown (.md) files. You can open them in VS Code, TextEdit, or backup them using standard Git, Time Machine, or rsync anytime. There is zero vendor lock-in.',
    },
    {
      id: 'faq-4',
      question: 'How does QuickNotes handle data security and privacy?',
      answer:
        'On Pro and Team tiers, all sync payloads are encrypted with AES-256-GCM using keys derived on your devices from your passphrase. We operate on a zero-knowledge model—we cannot read your notes, index them for advertising, or sell your data. Your thoughts belong entirely to you.',
    },
    {
      id: 'faq-5',
      question: 'Which platforms and operating systems are supported?',
      answer:
        'QuickNotes has native desktop applications for macOS (Apple Silicon & Intel), Windows 10/11, and Linux (AppImage & deb). Mobile apps are available for iOS (iPhone & iPad) and Android, alongside our progressive web app for instant browser access anywhere.',
    },
    {
      id: 'faq-6',
      question: 'Can I cancel or switch my plan at any time?',
      answer:
        'Yes. You can switch between Monthly and Annual billing or downgrade to the Free Forever tier anytime from your account settings with a single click. If you downgrade, you retain 100% of your existing local markdown files and never lose access to your data.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/50 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            Everything you need to know about QuickNotes.
          </h2>
          <p className="mt-3 text-base text-slate-600 [text-wrap:balance]">
            Have a question that is not listed here? Our support team is always ready to assist.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span className="ml-4 shrink-0 rounded-full p-1 text-slate-400 bg-slate-100 hover:text-slate-600">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
