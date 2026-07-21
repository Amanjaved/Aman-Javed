'use client';

import React from 'react';
import AppImage from './AppImage';

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
  className?: string;
}

export default function BrowserMockup({
  src,
  alt,
  url = 'https://amanjaved.dev/project',
  priority = false,
  className = '',
}: BrowserMockupProps) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* macOS Window Titlebar Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-white/10 select-none">
        {/* Window action buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Address bar */}
        <div className="flex-1 max-w-sm mx-4 px-3 py-1 rounded-md bg-[#0F0F0F] border border-white/10 flex items-center gap-2 text-[11px] text-muted-foreground font-mono truncate">
          <svg
            className="w-3 h-3 text-emerald-400 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="truncate">{url}</span>
        </div>

        {/* Action dots */}
        <div className="flex items-center gap-1 opacity-40">
          <span className="w-1 h-1 rounded-full bg-white" />
          <span className="w-1 h-1 rounded-full bg-white" />
          <span className="w-1 h-1 rounded-full bg-white" />
        </div>
      </div>

      {/* Screen Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <AppImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Glass reflection gloss overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* Dark bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
