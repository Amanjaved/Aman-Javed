'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from './AppLogo';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 900);
    const removeTimer = setTimeout(() => setIsLoading(false), 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-[#080808] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFading ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="flex items-center gap-4 animate-pulse">
        <AppLogo size={48} />
        <div className="text-left">
          <p className="font-display text-2xl font-black text-foreground tracking-tight">
            AMAN <span className="text-primary font-light italic">JAVED</span>
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
            Full Stack .NET & AI Engineer
          </p>
        </div>
      </div>

      <div className="w-32 h-1 bg-secondary rounded-full overflow-hidden mt-8">
        <div className="w-full h-full bg-primary animate-pulse" />
      </div>
    </div>
  );
}
