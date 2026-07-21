'use client';

import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-[9000] p-3.5 rounded-2xl bg-[#121212]/90 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-2xl backdrop-blur-md active:scale-95 group focus-visible:ring-2 focus-visible:ring-primary"
    >
      <svg
        className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
