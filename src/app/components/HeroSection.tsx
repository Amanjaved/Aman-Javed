'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import HeroParticles from '@/components/ui/HeroParticles';

const HERO_STATEMENTS = [
  'Building Intelligent Software.',
  'Creating Scalable Products.',
  'Crafting Premium Experiences.',
];

const ROLES = [
  'Full Stack Engineer',
  '.NET Expert',
  'AI Developer',
  'Vibe Coder',
  'Cloud Enthusiast',
];

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Completed' },
  { value: '15+', label: 'Tech Stack' },
  { value: '2M+', label: 'Lines of Code' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  const [statementIndex, setStatementIndex] = useState(0);
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });

  // Statement cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % HERO_STATEMENTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 3D tilt movement on photo card mouse move
  const handleMouseMovePhoto = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 16;
    const rotateY = (x / rect.width) * 16;
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    });
  };

  const handleMouseLeavePhoto = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
  };

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ delay: 0.2 });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 60, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: 'power4.out' }
        );
      }
      if (statementRef.current) {
        tl.fromTo(
          statementRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.8'
        );
      }
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.7'
        );
      }
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
      }
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        );
      }
      if (imgRef.current) {
        tl.fromTo(
          imgRef.current,
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: 'power3.out' },
          '-=0.7'
        );
      }

      // Parallax scroll effects
      if (blobRef1.current) {
        gsap.to(blobRef1.current, {
          y: 150,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
      if (blobRef2.current) {
        gsap.to(blobRef2.current, {
          y: -150,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    };

    init();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Interactive GPU Particle Canvas */}
      <HeroParticles />

      {/* Animated Mesh Gradient & Radial Lighting */}
      <div
        ref={blobRef1}
        className="blob-primary absolute w-[750px] h-[750px] rounded-full top-10 -left-60 pointer-events-none opacity-40"
        aria-hidden="true"
      />
      <div
        ref={blobRef2}
        className="blob-accent absolute w-[650px] h-[650px] rounded-full bottom-10 -right-60 pointer-events-none opacity-30"
        aria-hidden="true"
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"
        aria-hidden="true"
      />

      {/* Hero Grid Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Live Status & Location Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8">
            {/* Available for Freelance Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/35 bg-primary/10 backdrop-blur-md shadow-[0_0_20px_rgba(203,178,106,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                Available for Freelance
              </span>
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md">
              <span className="text-xs">📍</span>
              <span className="text-[11px] font-semibold text-foreground">Lucknow, India</span>
            </div>

            {/* Role Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md">
              <span className="text-xs">💼</span>
              <span className="text-[11px] font-medium text-muted-foreground">
                Software Engineer @ Govt. of UP
              </span>
            </div>
          </div>

          {/* Cycling Statement Title */}
          <div ref={statementRef} className="h-12 sm:h-14 mb-2 overflow-hidden">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-light italic text-primary transition-all duration-700">
              {HERO_STATEMENTS[statementIndex]}
            </p>
          </div>

          {/* AMAN JAVED Punchy Title */}
          <h1
            ref={titleRef}
            className="font-display text-hero-xl font-black text-foreground tracking-tight mb-4 relative"
          >
            <span className="relative inline-block">
              AMAN <span className="text-gradient-gold font-light italic">JAVED.</span>
            </span>
          </h1>

          {/* Memorable Personality Sentence */}
          <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-xl mb-6">
            I build enterprise software, AI-powered platforms, and data-driven applications that solve real business problems.
          </p>

          {/* Role Badges Subtitle */}
          <div
            ref={subtitleRef}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8 max-w-xl"
          >
            {ROLES.map((role) => (
              <span
                key={role}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
          >
            <a
              href="#work"
              className="group w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:opacity-95 active:scale-95 transition-all duration-200 shadow-xl"
              style={{ boxShadow: '0 8px 32px rgba(203,178,106,0.35)' }}
            >
              Explore Featured Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-border bg-card/40 text-foreground text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 15V3M6 9l6 6 6-6M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download CV (PDF)
            </a>
          </div>

          {/* 5-Column Stats Grid */}
          <div
            ref={statsRef}
            className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-8 border-t border-border/60 opacity-100"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display text-2xl sm:text-3xl font-black text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 25% Larger 3D Luxury Profile Image Card */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div
            ref={imgRef}
            onMouseMove={handleMouseMovePhoto}
            onMouseLeave={handleMouseLeavePhoto}
            className="relative z-10 w-full max-w-[440px] sm:max-w-[500px] aspect-[3/4] rounded-[40px] border border-primary/40 bg-card/60 p-4 shadow-2xl backdrop-blur-md transition-transform duration-200 ease-out cursor-pointer group animate-float-slow"
            style={{
              ...tiltStyle,
              boxShadow: '0 35px 100px -15px rgba(0,0,0,0.95), 0 0 45px rgba(203,178,106,0.25)',
            }}
          >
            {/* Inner Profile Image Frame */}
            <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-white/15 bg-secondary/80">
              <AppImage
                src="/assets/images/user_photo.jpg"
                alt="Aman Javed - Full Stack Software Engineer"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              
              {/* Dark Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-65 pointer-events-none" />

              {/* Gold Accent Glow Frame */}
              <div className="absolute -inset-px rounded-[30px] pointer-events-none border border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Orbit Badge 1: Top Left */}
            <div className="absolute -left-6 top-8 glass-card-gold px-4 py-2.5 rounded-2xl hidden sm:flex items-center gap-2 transform hover:-translate-y-1 transition-transform duration-300 shadow-xl">
              <span className="text-sm">⚡</span>
              <div>
                <p className="text-foreground font-bold text-[11px]">.NET Core & C#</p>
                <p className="text-muted-foreground text-[9px]">Backend Specialist</p>
              </div>
            </div>

            {/* Orbit Badge 2: Top Right */}
            <div className="absolute -right-6 top-16 glass-card-gold px-4 py-2.5 rounded-2xl hidden sm:flex items-center gap-2 transform hover:-translate-y-1 transition-transform duration-300 shadow-xl">
              <span className="text-sm">🗄️</span>
              <div>
                <p className="text-foreground font-bold text-[11px]">SQL Server</p>
                <p className="text-muted-foreground text-[9px]">Stored Procedures</p>
              </div>
            </div>

            {/* Orbit Badge 3: Bottom Left */}
            <div className="absolute -left-6 bottom-14 glass-card-gold px-4 py-3 rounded-2xl hidden sm:block max-w-[210px] transform hover:-translate-y-1 transition-transform duration-300 shadow-xl">
              <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-1.5">
                Core Tech Stack
              </p>
              <div className="flex flex-wrap gap-1">
                {['C#', 'ASP.NET', 'SQL', 'Vibe Coder'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Orbit Badge 4: Bottom Right */}
            <div className="absolute -right-6 bottom-8 glass-card-gold px-4 py-2.5 rounded-2xl hidden sm:flex items-center gap-2.5 transform hover:-translate-y-1 transition-transform duration-300 shadow-xl">
              <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center text-primary font-bold text-xs">
                🏛️
              </div>
              <div>
                <p className="text-foreground font-bold text-[11px]">Govt. of UP</p>
                <p className="text-muted-foreground text-[9px]">Enterprise Client</p>
              </div>
            </div>

            {/* Ambient Back Glow */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/25 to-accent/25 rounded-[52px] -z-10 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}