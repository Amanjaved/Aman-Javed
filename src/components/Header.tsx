'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

interface HeaderProps {
  onOpenCmdPalette?: () => void;
}

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ onOpenCmdPalette }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 40);

      // Auto-hide when scrolling down past 200px, reveal when scrolling up
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setVisible(false);
        } else if (lastScrollY - currentScrollY > 10) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ${
              scrolled ? 'glass-nav shadow-2xl border border-primary/20' : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <AppLogo
                size={32}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
              <span className="font-display font-semibold text-lg tracking-tight text-foreground hidden sm:block">
                Aman<span className="text-primary font-normal">Javed</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md transition-colors duration-300 relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA & Command Palette Trigger */}
            <div className="hidden md:flex items-center gap-3">
              <button
                id="cmd-palette-trigger"
                onClick={onOpenCmdPalette}
                aria-label="Open Command Palette"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50 text-xs focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-300"
              >
                <span>🔍 Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono border border-border">
                  ⌘K
                </kbd>
              </button>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-95 transition-all duration-200 shadow-md"
                style={{ boxShadow: '0 4px 20px rgba(216,195,118,0.25)' }}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Hamburger & Search Trigger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenCmdPalette}
                aria-label="Open Search"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary"
              >
                🔍
              </button>

              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
              >
                <span
                  className={`h-[1.5px] bg-foreground transition-all duration-300 ${
                    menuOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-foreground transition-all duration-300 ${
                    menuOpen ? 'opacity-0 w-0' : 'w-4'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-foreground transition-all duration-300 ${
                    menuOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-6'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(24px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="font-display text-3xl font-light text-foreground hover:text-primary transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-4 px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}