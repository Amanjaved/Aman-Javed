'use client';

import React, { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Aman delivered an exceptional state-level portal for statistical data reporting. His deep knowledge of ASP.NET Web Forms, SQL optimization, and database security ensured high stability across 75 districts.',
    author: 'Rajesh Sharma',
    role: 'Senior Technical Lead',
    organization: 'Directorate of Economic Intelligence & Statistics, Govt of UP',
    rating: 5,
    tag: 'Government Enterprise System',
  },
  {
    id: 2,
    quote:
      'Working with Aman on our quantitative Bitcoin analytics dashboard was seamless. He designed low-latency Vibe Coding backends and WebSocket indicators that perform flawlessly under high volatility.',
    author: 'David Vance',
    role: 'Crypto Product Strategist',
    organization: 'FinTech Analytics Group',
    rating: 5,
    tag: 'FinTech & AI Analytics',
  },
  {
    id: 3,
    quote:
      'Aman is a rare software engineer who understands both complex backend systems and clean, intuitive UI design. His work on trading automation and ADO.NET modules saved us months of dev time.',
    author: 'Ankit Srivastava',
    role: 'Project Manager',
    organization: 'Amity Software Ltd.',
    rating: 5,
    tag: 'Full Stack .NET Engineering',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
          }
        );
      }
    };

    init();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-28 px-6 relative overflow-hidden bg-[#0C0C0C]"
    >
      {/* Background Accent Glow */}
      <div
        className="blob-accent absolute w-[650px] h-[650px] rounded-full top-1/2 -left-60 pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-20 text-center max-w-3xl mx-auto">
          <p className="section-label mb-3">Client Trust & Endorsements</p>
          <h2 className="font-display text-section-xl font-black text-foreground">
            What Stakeholders Say About{' '}
            <span className="italic font-light text-gradient-gold">Working Together.</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4">
            Feedback from government project managers, technical leads, and collaborators across enterprise & crypto applications.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 glass-card-gold flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-primary text-lg mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic mb-8">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 border-t border-border/60">
                <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                  {item.author}
                </p>
                <p className="text-xs font-medium text-primary mt-0.5">{item.role}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{item.organization}</p>

                <div className="mt-4">
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
