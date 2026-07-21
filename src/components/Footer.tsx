'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/80 bg-[#080808] pt-20 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top 4-Column Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border/60">
          {/* Column 1: Branding statement (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <AppLogo size={36} />
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                AMAN <span className="text-primary font-normal">JAVED</span>
              </span>
            </div>
            <p className="text-xl font-display font-light italic text-muted-foreground leading-relaxed max-w-md">
              &quot;Building software that solves real problems & scales with precision.&quot;
            </p>
            <p className="text-xs text-muted-foreground max-w-sm">
              Software Engineer specializing in enterprise .NET backends, state government statistical systems, and algorithmic trading platforms.
            </p>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <a href="#work" className="hover:text-foreground transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground transition-colors">
                  Skills & Stack
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-foreground transition-colors">
                  Career Arc
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Systems (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
              Featured Systems
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>Integrated Portal — DEIS Govt of UP</li>
              <li>Bitcoin Market Intelligence Dashboard</li>
              <li>Automated Bitcoin Trading Bot</li>
              <li>Jobs@mail Automation Platform</li>
            </ul>
          </div>

          {/* Column 4: Quick Actions & Back to Top (2 cols) */}
          <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                Direct Contact
              </h4>
              <a
                href="mailto:amanjaved.aj@gmail.com"
                className="text-xs text-foreground font-semibold hover:text-primary transition-colors block"
              >
                amanjaved.aj@gmail.com
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <span>Download CV (PDF)</span>
                <span>↓</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card text-xs font-bold uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-all duration-300 shadow-md w-fit"
            >
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Social Matrix */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aman Javed. Built with Next.js, Tailwind & GSAP.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Amanjaved"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/aman-javed-225b6b3b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:amanjaved.aj@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}