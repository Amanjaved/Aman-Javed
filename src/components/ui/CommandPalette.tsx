'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMMANDS = [
  { id: 'sec-hero', category: 'Navigation', title: 'Home / Hero', icon: '🏠', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { id: 'sec-work', category: 'Navigation', title: 'Featured Projects', icon: '💼', href: '#work' },
  { id: 'sec-skills', category: 'Navigation', title: 'Skills & Stack', icon: '⚡', href: '#skills' },
  { id: 'sec-journey', category: 'Navigation', title: 'Experience Journey', icon: '🚀', href: '#journey' },
  { id: 'sec-testimonials', category: 'Navigation', title: 'Testimonials & Proof', icon: '⭐', href: '#testimonials' },
  { id: 'sec-contact', category: 'Navigation', title: 'Get in Touch', icon: '✉️', href: '#contact' },
  
  { id: 'proj-deis', category: 'Projects', title: 'Govt of UP - Integrated Portal (DEIS)', icon: '🏛️', href: '#work' },
  { id: 'proj-btc', category: 'Projects', title: 'Bitcoin Market Analysis Dashboard', icon: '📈', href: '#work' },
  { id: 'proj-bot', category: 'Projects', title: 'Automated Bitcoin Trading Bot', icon: '🤖', href: '#work' },
  { id: 'proj-job', category: 'Projects', title: 'Jobs@mail Online Job Portal', icon: '🌐', href: '#work' },

  { id: 'action-cv', category: 'Quick Actions', title: 'Download Resume (PDF)', icon: '📄', href: '/resume.pdf', download: true },
  { id: 'action-github', category: 'Quick Actions', title: 'GitHub Profile', icon: '⬡', href: 'https://github.com/Amanjaved', external: true },
  { id: 'action-linkedin', category: 'Quick Actions', title: 'LinkedIn Profile', icon: '💼', href: 'https://www.linkedin.com/in/aman-javed-225b6b3b1/', external: true },
  { id: 'action-email', category: 'Quick Actions', title: 'Send Email (amanjaved.aj@gmail.com)', icon: '📧', href: 'mailto:amanjaved.aj@gmail.com' },
];

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = COMMANDS.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state trigger
          const btn = document.getElementById('cmd-palette-trigger');
          btn?.click();
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          executeCommand(filteredCommands[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  const executeCommand = (cmd: typeof COMMANDS[0]) => {
    onClose();
    if (cmd.action) {
      cmd.action();
    } else if (cmd.href) {
      if (cmd.external) {
        window.open(cmd.href, '_blank');
      } else if (cmd.download) {
        const link = document.createElement('a');
        link.href = cmd.href;
        link.download = 'Aman_Javed_Resume.pdf';
        link.click();
      } else {
        const target = document.querySelector(cmd.href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = cmd.href;
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 px-4">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#121212] border border-[#2A2A2A] rounded-2xl shadow-2xl overflow-hidden z-10 glass-card-gold">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#242424]">
          <span className="text-primary font-mono text-sm">🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search (e.g. Projects, Skills, Resume)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none font-sans"
          />
          <kbd className="px-2 py-0.5 rounded bg-muted text-[10px] text-muted-foreground border border-border">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto py-2">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No matching commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors text-xs sm:text-sm ${
                    isSelected ? 'bg-primary/15 text-primary border-l-2 border-primary' : 'text-foreground hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{cmd.icon}</span>
                    <span className="font-medium">{cmd.title}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-muted/60">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-[#0D0D0D] border-t border-[#242424] text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Navigation: <kbd className="px-1 bg-muted rounded border border-border">↑</kbd> <kbd className="px-1 bg-muted rounded border border-border">↓</kbd></span>
            <span>Select: <kbd className="px-1 bg-muted rounded border border-border">↵</kbd></span>
          </div>
          <span className="text-primary font-semibold">Raycast Style Command Palette</span>
        </div>
      </div>
    </div>
  );
}
