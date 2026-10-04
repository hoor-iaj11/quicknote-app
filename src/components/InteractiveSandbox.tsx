import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Plus, 
  CheckSquare, 
  Code, 
  Bold, 
  Italic, 
  List, 
  Check, 
  CloudCheck, 
  Clock, 
  Sparkles, 
  Hash,
  Share2,
  Trash2
} from 'lucide-react';
import { NoteItem } from '../types';

const INITIAL_NOTES: NoteItem[] = [
  {
    id: 'note-1',
    title: 'Product Strategy & Roadmap 2026',
    category: 'Work',
    snippet: 'Core focus: latency minimization, frictionless offline sync, and knowledge graph relations.',
    content: `# Product Strategy & Roadmap 2026

## 1. High Velocity Capture
- [x] Global instant shortcut (Cmd + Shift + N)
- [x] Sub-40ms keypress to disk write
- [ ] Voice memo transcription with offline whisper

## 2. Knowledge Graph [[Architecture]]
Bi-directional links allow interconnected thoughts. Notes automatically surface backlinked context.

> "Clarity of thought precedes clarity of execution."

## 3. Security
- Client-side AES-GCM 256 encryption
- Zero knowledge server architecture`,
    updatedAt: 'Just now',
    tags: ['strategy', 'roadmap', 'architecture'],
  },
  {
    id: 'note-2',
    title: 'System Design: Distributed Sync Engine',
    category: 'Engineering',
    snippet: 'CRDT-based state reconciliation for concurrent offline updates across multiple devices.',
    content: `# System Design: Distributed Sync Engine

Using state-based CRDTs (Conflict-free Replicated Data Types) to resolve offline collisions seamlessly.

\`\`\`typescript
interface NoteSyncPayload {
  documentId: string;
  vectorClock: Record<string, number>;
  deltaChanges: Uint8Array;
}
\`\`\`

### Invariants:
1. Zero data loss during network dropouts
2. Keystroke buffer retains 10,000 edits locally
3. Instant optimistic UI feedback`,
    updatedAt: '12m ago',
    tags: ['engineering', 'crdt', 'distributed-systems'],
  },
  {
    id: 'note-3',
    title: 'Book Notes: The Art of Doing Science',
    category: 'Reading',
    snippet: 'Richard Hamming on high-impact work, active inquiry, and questioning foundational assumptions.',
    content: `# The Art of Doing Science and Engineering
Author: Richard Hamming

### Key Takeaways:
- **Style of thinking**: Great scientists do not work harder; they work on fundamentally important problems.
- Ask yourself: *"What are the most important problems in your field?"*
- Connect disparate disciplines to form unique compound insights.

Related thoughts: [[Product Strategy & Roadmap 2026]]`,
    updatedAt: '2h ago',
    tags: ['reading', 'philosophy', 'learning'],
  },
];

export const InteractiveSandbox: React.FC = () => {
  const [notes, setNotes] = useState<NoteItem[]>(INITIAL_NOTES);
  const [activeNoteId, setActiveNoteId] = useState<string>('note-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'split' | 'edit' | 'preview'>('split');
  const [saveStatus, setSaveStatus] = useState<string>('Synced');

  const activeNote = notes.find((n) => n.id === activeNoteId) || notes[0];

  const filteredNotes = notes.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag ? n.tags.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  const handleUpdateTitle = (newTitle: string) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === activeNoteId
          ? { ...n, title: newTitle, updatedAt: 'Just now' }
          : n
      )
    );
    triggerAutoSave();
  };

  const handleUpdateContent = (newContent: string) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === activeNoteId
          ? {
              ...n,
              content: newContent,
              snippet: newContent.slice(0, 90).replace(/[#*`>-]/g, ''),
              updatedAt: 'Just now',
            }
          : n
      )
    );
    triggerAutoSave();
  };

  const triggerAutoSave = () => {
    setSaveStatus('Saving...');
    setTimeout(() => {
      setSaveStatus('Synced');
    }, 300);
  };

  const handleCreateNewNote = () => {
    const newId = `note-${Date.now()}`;
    const newNote: NoteItem = {
      id: newId,
      title: 'Untitled QuickNote',
      category: 'General',
      snippet: 'Type to begin recording thoughts...',
      content: '# Untitled QuickNote\n\nStart typing here using markdown syntax...',
      updatedAt: 'Just now',
      tags: ['quick-capture'],
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newId);
    setSaveStatus('Created');
    setTimeout(() => setSaveStatus('Synced'), 500);
  };

  const handleDeleteActiveNote = () => {
    if (notes.length <= 1) return;
    const remaining = notes.filter((n) => n.id !== activeNoteId);
    setNotes(remaining);
    setActiveNoteId(remaining[0].id);
  };

  const insertMarkdownSyntax = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('sandbox-textarea') as HTMLTextAreaElement | null;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = activeNote.content.substring(start, end);
    const replacement = `${prefix}${selected || 'text'}${suffix}`;
    const newContent =
      activeNote.content.substring(0, start) +
      replacement +
      activeNote.content.substring(end);
    handleUpdateContent(newContent);
  };

  // Simple markdown renderer for preview
  const renderSimpleMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-4 mb-2">
            {line.replace('# ', '')}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-lg font-bold text-slate-800 mt-3 mb-1.5">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-base font-semibold text-slate-800 mt-2 mb-1">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('- [x] ')) {
        return (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-500 line-through my-1">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-blue-600 text-white text-[10px]">
              ✓
            </span>
            <span>{line.replace('- [x] ', '')}</span>
          </div>
        );
      }
      if (line.startsWith('- [ ] ')) {
        return (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 my-1">
            <span className="h-4 w-4 rounded border border-slate-300 bg-white" />
            <span>{line.replace('- [ ] ', '')}</span>
          </div>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-sm text-slate-700 my-1">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-3 border-blue-500 pl-3 italic text-sm text-slate-600 my-2 bg-blue-50/50 py-1 rounded-r">
            {line.replace('> ', '')}
          </blockquote>
        );
      }
      if (line.startsWith('```')) {
        return (
          <div key={idx} className="my-1 font-mono text-xs text-blue-600 bg-slate-900 p-1 rounded">
            {line}
          </div>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }

      // Format bold, italics, tags, and wikilinks
      const formatted = line
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/\[\[(.*?)\]\]/g, '<span class="text-blue-600 font-semibold underline decoration-blue-300 cursor-pointer">$&</span>');

      return (
        <p
          key={idx}
          className="text-sm text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  };

  const wordCount = activeNote.content.trim() ? activeNote.content.trim().split(/\s+/).length : 0;
  const charCount = activeNote.content.length;

  return (
    <div id="interactive-demo" className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-blue-950/5">
        {/* Sandbox Window Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-slate-300" />
              <span className="h-3 w-3 rounded-full bg-slate-300" />
              <span className="h-3 w-3 rounded-full bg-slate-300" />
            </div>
            <div className="h-4 w-px bg-slate-200 mx-1.5" />
            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Interactive QuickNotes Sandbox
            </span>
          </div>

          {/* Sync indicator & View Modes */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{saveStatus}</span>
              <span className="text-slate-400">· 0ms latency</span>
            </div>

            {/* View Mode Segmented Controls */}
            <div className="flex rounded-lg bg-slate-200/80 p-0.5">
              <button
                onClick={() => setViewMode('edit')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  viewMode === 'edit'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Editor
              </button>
              <button
                onClick={() => setViewMode('split')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  viewMode === 'split'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Split
              </button>
              <button
                onClick={() => setViewMode('preview')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  viewMode === 'preview'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Sandbox Main Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          {/* Left Column: Note Explorer & Search */}
          <div className="border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/60 p-3 md:col-span-4 flex flex-col justify-between">
            <div>
              {/* Search & New note action */}
              <div className="flex items-center gap-2 mb-3">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search notes or #tags..."
                    className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-8 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-hidden"
                  />
                </div>
                <button
                  onClick={handleCreateNewNote}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs hover:bg-blue-700 transition-colors"
                  title="Create new note"
                  aria-label="New Note"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Tag filtering (clean unboxed text filter controls) */}
              <div className="flex items-center gap-1.5 flex-wrap mb-3 text-xs text-slate-500">
                <button
                  onClick={() => setActiveTag(null)}
                  className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                    activeTag === null
                      ? 'bg-blue-100 text-blue-800 font-semibold'
                      : 'hover:text-slate-800 hover:bg-slate-200/60'
                  }`}
                >
                  All
                </button>
                {['strategy', 'engineering', 'reading'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                      activeTag === tag
                        ? 'bg-blue-100 text-blue-800 font-semibold'
                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/60'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              {/* Notes List */}
              <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                {filteredNotes.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-400">
                    No notes match your filter.
                  </div>
                ) : (
                  filteredNotes.map((note) => {
                    const isSelected = note.id === activeNoteId;
                    return (
                      <button
                        key={note.id}
                        onClick={() => setActiveNoteId(note.id)}
                        className={`w-full text-left rounded-lg p-2.5 transition-all text-xs border ${
                          isSelected
                            ? 'bg-white border-blue-200 shadow-xs'
                            : 'border-transparent hover:bg-white/60 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`font-semibold truncate max-w-[170px] ${
                              isSelected ? 'text-blue-900' : 'text-slate-900'
                            }`}
                          >
                            {note.title || 'Untitled Note'}
                          </span>
                          <span className="text-[10px] text-slate-400 shrink-0">
                            {note.updatedAt}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-[11px] text-slate-500 leading-snug">
                          {note.snippet}
                        </p>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Quick Tip Footer */}
            <div className="border-t border-slate-200/80 pt-2.5 mt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span>{notes.length} notes in vault</span>
              <span className="font-mono text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">
                Cmd + K
              </span>
            </div>
          </div>

          {/* Right Column: Active Note Editor & Preview */}
          <div className="md:col-span-8 flex flex-col justify-between bg-white p-4 sm:p-6">
            <div>
              {/* Note Header Toolbar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <input
                  type="text"
                  value={activeNote.title}
                  onChange={(e) => handleUpdateTitle(e.target.value)}
                  placeholder="Note Title..."
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight w-full focus:outline-hidden"
                />

                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <button
                    onClick={() => insertMarkdownSyntax('**', '**')}
                    className="p-1.5 rounded hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Bold"
                    aria-label="Bold"
                  >
                    <Bold className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => insertMarkdownSyntax('*', '*')}
                    className="p-1.5 rounded hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Italic"
                    aria-label="Italic"
                  >
                    <Italic className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => insertMarkdownSyntax('- [ ] ')}
                    className="p-1.5 rounded hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Checklist item"
                    aria-label="Task"
                  >
                    <CheckSquare className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => insertMarkdownSyntax('[[', ']]')}
                    className="p-1.5 rounded hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Wikilink / Backlink"
                    aria-label="Link"
                  >
                    <Hash className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleDeleteActiveNote}
                    className="p-1.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors ml-1"
                    title="Delete Note"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Editor Workspace: Split, Full Edit, or Full Preview */}
              <div className="min-h-[320px]">
                {viewMode === 'split' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Raw Markdown */}
                    <div className="relative">
                      <div className="text-[10px] font-mono text-slate-400 mb-1 flex items-center justify-between">
                        <span>MARKDOWN INPUT</span>
                        <span>Auto-formatting active</span>
                      </div>
                      <textarea
                        id="sandbox-textarea"
                        value={activeNote.content}
                        onChange={(e) => handleUpdateContent(e.target.value)}
                        placeholder="Type thoughts in markdown..."
                        className="w-full h-[300px] resize-none font-mono text-xs sm:text-sm text-slate-800 leading-relaxed border-0 focus:outline-hidden p-2 bg-slate-50/50 rounded-lg"
                      />
                    </div>

                    {/* Live Rendered Output */}
                    <div className="h-[300px] overflow-y-auto p-2 border-l border-slate-100 pl-4">
                      <div className="text-[10px] font-mono text-blue-600 mb-1">
                        LIVE RENDERED OUTPUT
                      </div>
                      {renderSimpleMarkdown(activeNote.content)}
                    </div>
                  </div>
                ) : viewMode === 'edit' ? (
                  <textarea
                    id="sandbox-textarea"
                    value={activeNote.content}
                    onChange={(e) => handleUpdateContent(e.target.value)}
                    placeholder="Type thoughts in markdown..."
                    className="w-full h-[320px] resize-none font-mono text-sm text-slate-800 leading-relaxed border-0 focus:outline-hidden p-2"
                  />
                ) : (
                  <div className="h-[320px] overflow-y-auto p-2">
                    {renderSimpleMarkdown(activeNote.content)}
                  </div>
                )}
              </div>
            </div>

            {/* Editor Footer Stats */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span className="tabular-nums">{wordCount} words</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{charCount} characters</span>
                <span aria-hidden="true">·</span>
                <span>Markdown standard</span>
              </div>
              <div className="text-[11px] text-blue-600 font-medium hidden sm:block">
                Type <code className="bg-blue-50 px-1 py-0.5 rounded text-blue-700">[[Note]]</code> to link
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
