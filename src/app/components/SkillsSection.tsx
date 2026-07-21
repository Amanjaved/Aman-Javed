'use client';

import React, { useEffect, useRef, useState } from 'react';

const CATEGORIES = [
  'All Technologies',
  'Backend & .NET',
  'Frontend & Web',
  'Database & Cloud',
  'AI & Algorithmic Trading',
];

const SKILL_ITEMS = [
  { name: 'C# / .NET Core', category: 'Backend & .NET', level: 94, years: '3+ yrs', icon: '⚡', desc: 'Enterprise Web Forms, MVC, C# OOP' },
  { name: 'ASP.NET Web Forms', category: 'Backend & .NET', level: 92, years: '3+ yrs', icon: '🌐', desc: 'Govt Enterprise Portals & State Systems' },
  { name: 'SQL Server & ADO.NET', category: 'Database & Cloud', level: 90, years: '3+ yrs', icon: '🗄️', desc: 'Stored Procedures, Triggers, Views & Queries' },
  { name: 'Vibe Coding & AI Flask', category: 'AI & Algorithmic Trading', level: 86, years: '2+ yrs', icon: '✨', desc: 'Crypto market intelligence & REST backends' },
  { name: 'Algorithmic Trading & Delta API', category: 'AI & Algorithmic Trading', level: 85, years: '2+ yrs', icon: '📈', desc: 'Heikin-Ashi strategies & order execution' },
  { name: 'JavaScript & jQuery & AJAX', category: 'Frontend & Web', level: 88, years: '3+ yrs', icon: '💻', desc: 'Dynamic UI, Async requests & DOM manipulation' },
  { name: 'HTML5 & CSS3 & Bootstrap', category: 'Frontend & Web', level: 90, years: '3+ yrs', icon: '🎨', desc: 'Responsive government & client layouts' },
  { name: 'REST APIs & WebSockets', category: 'Backend & .NET', level: 85, years: '2+ yrs', icon: '🔌', desc: 'Exchange feeds & multi-service integration' },
  { name: 'IIS & Windows Server', category: 'Database & Cloud', level: 84, years: '3+ yrs', icon: '☁️', desc: 'Deployment, SSL certificates & site hosting' },
  { name: 'Git & GitHub & Version Control', category: 'Backend & .NET', level: 88, years: '3+ yrs', icon: '⬡', desc: 'Source control, branching & release tags' },
];

const TOOLS = [
  { name: 'Visual Studio Enterprise', category: 'IDE', icon: '⬛' },
  { name: 'VS Code', category: 'IDE', icon: '🔷' },
  { name: 'SQL Server Management Studio (SSMS)', category: 'DB Tool', icon: '🗄️' },
  { name: 'Postman API Tester', category: 'API Tool', icon: '🟠' },
  { name: 'IIS Server Manager', category: 'Hosting', icon: '🌐' },
  { name: 'Chart.js & Recharts', category: 'Data Viz', icon: '📊' },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All Technologies');

  const filteredSkills = SKILL_ITEMS.filter(
    (skill) => activeCategory === 'All Technologies' || skill.category === activeCategory
  );

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

      if (barsRef.current) {
        const bars = barsRef.current.querySelectorAll<HTMLElement>('.skill-bar-fill');
        ScrollTrigger.create({
          trigger: barsRef.current,
          start: 'top 75%',
          onEnter: () => {
            bars.forEach((bar, i) => {
              setTimeout(() => bar.classList.add('active'), i * 80);
            });
          },
        });
      }
    };

    init();
  }, [activeCategory]);

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      {/* Ambient background blob */}
      <div
        className="blob-primary absolute w-[700px] h-[700px] rounded-full -bottom-40 -right-40 pointer-events-none opacity-50"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-16">
          <p className="section-label mb-3">Technical Architecture</p>
          <h2 className="font-display text-section-xl font-black text-foreground">
            Skills &{' '}
            <span className="italic font-light text-gradient-gold">Technology Stack.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mt-4">
            3+ years of battle-tested engineering across enterprise backend systems, SQL optimization, and quantitative analytics.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={barsRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 glass-card group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{skill.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display text-lg font-bold text-gradient-gold">
                    {skill.level}%
                  </span>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">
                    {skill.years}
                  </p>
                </div>
              </div>

              {/* Progress Bar Track */}
              <div className="skill-bar-track mt-4">
                <div
                  className="skill-bar-fill active"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Environment Matrix */}
        <div className="bg-[#121212] border border-border rounded-3xl p-8 glass-card mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
            🛠️ Tools & Development Environment
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TOOLS.map((t) => (
              <div
                key={t.name}
                className="p-4 rounded-xl bg-card border border-border flex items-center gap-3 hover:border-primary/30 transition-all"
              >
                <span className="text-lg">{t.icon}</span>
                <div>
                  <p className="text-xs font-bold text-foreground leading-snug">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub & Engineering Trust Proof Matrix */}
        <div className="p-8 rounded-3xl bg-card border border-primary/20 glass-card-gold flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              ★ Engineering Activity & Trust Proof
            </span>
            <h4 className="font-display text-xl font-bold text-foreground">
              Production-Grade Development & GitHub Activity
            </h4>
            <p className="text-xs text-muted-foreground max-w-xl">
              Consistent commit frequency across enterprise government systems, private client applications, and quantitative trading bots.
            </p>

            {/* Simulated 52-week GitHub Commit Heat Grid */}
            <div className="pt-2">
              <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                2024–2026 Commit Activity Heatmap
              </p>
              <div className="flex gap-1 overflow-x-auto pb-1 max-w-md">
                {Array.from({ length: 32 }).map((_, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-1">
                    {Array.from({ length: 5 }).map((_, rowIdx) => {
                      const active = (colIdx + rowIdx) % 3 !== 0;
                      return (
                        <div
                          key={rowIdx}
                          className={`w-2.5 h-2.5 rounded-[2px] ${
                            active
                              ? 'bg-primary/80 border border-primary/40'
                              : 'bg-muted border border-border/40'
                          }`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 shrink-0 text-center">
            <div>
              <p className="font-display text-2xl font-black text-gradient-gold">1,200+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Commits / Year</p>
            </div>
            <div>
              <p className="font-display text-2xl font-black text-gradient-gold">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Active Repos</p>
            </div>
            <div>
              <p className="font-display text-2xl font-black text-gradient-gold">99.9%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Prod Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}