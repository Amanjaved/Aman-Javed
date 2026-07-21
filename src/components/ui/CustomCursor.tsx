'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop / non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.getAttribute('role') === 'button';

      if (clickable) {
        setIsHovered(true);
        const link = target.closest('a') || target.closest('button');
        if (link?.innerText && link.innerText.length < 20) {
          setHoverText(link.innerText.trim());
        } else {
          setHoverText('');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient Radial Spotlight (Borderless, illuminates content behind pointer) */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-transform duration-200 ease-out hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(203, 178, 106, 0.06) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />

      {/* 2. Interactive Magnetic Pointer Pin / Gold Diamond */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-100 ease-out hidden md:flex items-center justify-center"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {isHovered ? (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(203,178,106,0.6)] animate-pulse-subtle">
            <span>{hoverText || 'INTERACT'}</span>
            <span className="text-[9px]">↗</span>
          </div>
        ) : (
          <div className="w-2.5 h-2.5 rotate-45 bg-primary border border-white/40 shadow-[0_0_12px_rgba(203,178,106,0.8)] transition-transform duration-200" />
        )}
      </div>
    </>
  );
}

