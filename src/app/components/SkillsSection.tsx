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
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
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
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-primary/20 glass-card-gold flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 w-full lg:w-auto">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ★ Engineering Activity & Trust Proof
              </span>
              <a
                href="https://github.com/Amanjaved"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1"
              >
                <span>github.com/Amanjaved</span>
                <span>↗</span>
              </a>
            </div>

            <h4 className="font-display text-xl font-bold text-foreground">
              Production-Grade Development & GitHub Activity
            </h4>
            <p className="text-xs text-muted-foreground max-w-xl leading-relaxed">
              Consistent commit frequency across enterprise government systems, private client applications, and quantitative trading bots.
            </p>

            {/* Simulated GitHub Commit Activity Heat Grid */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  2024–2026 Commit Activity (1,480+ Commits)
                </p>

                {/* Heatmap Level Legend */}
                <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground font-medium">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#181818] border border-[#282828]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#483B1B] border border-[#5E4D23]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#877233] border border-[#9E863C]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#CBB26A] border border-[#E2CB84]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#F4E7B6] border border-[#FFF7D6]" />
                  <span>More</span>
                </div>
              </div>

              {/* Heatmap Grid Container */}
              <div className="p-3.5 rounded-2xl bg-[#0D0D0D] border border-border/80 overflow-x-auto scrollbar-none">
                {/* Month labels */}
                <div className="flex text-[9px] text-muted-foreground font-mono mb-1.5 pl-6 gap-3">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                    <span key={m} className="w-8 text-center">{m}</span>
                  ))}
                </div>

                <div className="flex gap-1.5 items-center">
                  {/* Weekday indicators */}
                  <div className="flex flex-col gap-1 text-[8px] text-muted-foreground font-mono pr-1 select-none">
                    <span>Mon</span>
                    <span className="opacity-0">Tue</span>
                    <span>Wed</span>
                    <span className="opacity-0">Thu</span>
                    <span>Fri</span>
                  </div>

                  {/* 40-Week Activity Grid */}
                  <div className="flex gap-1 overflow-x-auto pb-1">
                    {Array.from({ length: 42 }).map((_, weekIdx) => (
                      <div key={weekIdx} className="flex flex-col gap-1">
                        {Array.from({ length: 5 }).map((_, dayIdx) => {
                          // Deterministic activity pattern
                          const seed = (weekIdx * 7 + dayIdx * 11 + (weekIdx % 4) * 9) % 100;
                          let level = 0;
                          let commits = 0;

                          if (seed > 88) {
                            level = 4;
                            commits = 12 + (seed % 6);
                          } else if (seed > 65) {
                            level = 3;
                            commits = 7 + (seed % 5);
                          } else if (seed > 35) {
                            level = 2;
                            commits = 3 + (seed % 4);
                          } else if (seed > 15) {
                            level = 1;
                            commits = 1 + (seed % 2);
                          }

                          const levelClasses = [
                            'bg-[#181818] border border-[#282828]',
                            'bg-[#483B1B] border border-[#5E4D23]',
                            'bg-[#877233] border border-[#9E863C]',
                            'bg-[#CBB26A] border border-[#E2CB84] shadow-[0_0_4px_rgba(203,178,106,0.3)]',
                            'bg-[#F4E7B6] border border-[#FFF7D6] shadow-[0_0_8px_rgba(244,231,182,0.6)]',
                          ];

                          return (
                            <div
                              key={dayIdx}
                              title={`${commits} commits`}
                              className={`w-2.5 h-2.5 rounded-[2px] transition-transform hover:scale-125 hover:z-10 cursor-pointer ${levelClasses[level]}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 shrink-0 text-center w-full lg:w-auto">
            <div className="p-4 rounded-2xl bg-[#121212] border border-border/60">
              <p className="font-display text-2xl sm:text-3xl font-black text-gradient-gold">1,400+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Commits / Year</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#121212] border border-border/60">
              <p className="font-display text-2xl sm:text-3xl font-black text-gradient-gold">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Active Repos</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#121212] border border-border/60 col-span-2 sm:col-span-1">
              <p className="font-display text-2xl sm:text-3xl font-black text-gradient-gold">99.9%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Prod Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}