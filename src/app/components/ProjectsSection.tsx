'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import BrowserMockup from '@/components/ui/BrowserMockup';
import CaseStudyModal, { ProjectData } from './CaseStudyModal';

const PROJECTS: ProjectData[] = [
  {
    id: '01',
    title: 'Integrated Portal — DEIS Govt. of UP',
    category: 'Government Enterprise System',
    year: '2024',
    description:
      'A massive state-level enterprise statistical portal developed for the Directorate of Economic Intelligence & Statistics, Government of Uttar Pradesh. Orchestrates multi-departmental data collection, automated report generation, and statistical planning.',
    stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap', 'IIS'],
    image: '/assets/images/integrated_portal.jpg',
    imageAlt:
      'Government data portal dashboard with statistical charts and data tables',
    color: '#CBB26A',
    result: 'Directorate of Economic Intelligence & Statistics',
    role: 'Full Stack .NET Developer',
    duration: '1 yr 6 mos',
    problem:
      'Legacy statistical collection across district secretariats relied on manual paper records and fragmented spreadsheets, leading to delayed state policy planning.',
    solution:
      'Built an end-to-end ASP.NET Web Forms architecture integrated with optimized SQL Server stored procedures, role-based security, and dynamic analytics dashboards.',
    architecture: [
      'Multi-tier ASP.NET Web Forms architecture with ADO.NET data abstraction layer.',
      'Custom SQL Server stored procedures handling complex statistical aggregations.',
      'Role-based granular access control for state officers across 75 districts.',
      'IIS server deployment with SSL encryption & automated backup procedures.',
    ],
    metrics: [
      { label: 'State Districts', value: '75' },
      { label: 'Query Speedup', value: '45%' },
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Uptime SLA', value: '99.9%' },
    ],
  },
  {
    id: '02',
    title: 'Bitcoin Market Intelligence Dashboard',
    category: 'FinTech Analytics & AI',
    year: '2024',
    description:
      'Real-time Bitcoin market analytics suite monitoring order book depth, ETF flows, funding rates, liquidation heatmaps, and AI-driven market sentiment indicators.',
    stack: ['Vibe Coding', 'Flask', 'JavaScript', 'Chart.js', 'REST APIs', 'WebSockets'],
    image: '/assets/images/bitcoin_dashboard.jpg',
    imageAlt:
      'Bitcoin market analysis dashboard with real-time charts and indicators',
    color: '#C8965A',
    result: 'Real-time Crypto Intelligence',
    role: 'Lead Developer & Architect',
    duration: '6 mos',
    problem:
      'Traders lack unified visibility across spot, futures, and ETF flows without subscribing to expensive institutional terminal software.',
    solution:
      'Aggregated live feeds from major exchanges into an ultra-low-latency Vibe Coding Flask backend feeding responsive HTML5 Chart.js visualizers.',
    architecture: [
      'Asynchronous WebSocket listeners tracking live exchange order books.',
      'Custom sentiment scoring pipeline combining technical indicators & open interest.',
      'High-performance client-side rendering with canvas Chart.js charts.',
    ],
    metrics: [
      { label: 'Feed Latency', value: '<50ms' },
      { label: 'Exchanges Sync', value: '5+' },
      { label: 'Indicators', value: '18' },
    ],
    githubUrl: 'https://github.com/Amanjaved',
  },
  {
    id: '03',
    title: 'Automated Bitcoin Trading Bot',
    category: 'Algorithmic Trading & Delta API',
    year: '2023',
    description:
      'High-frequency automated crypto trading bot executing Heikin-Ashi trend-following strategies, automated risk-managed order entry, and Delta Exchange API hedging.',
    stack: ['Vibe Coding', 'Delta Exchange API', 'REST APIs', 'JSON', 'Pandas'],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1e697b34e-1784529052095.png',
    imageAlt:
      'Algorithmic trading bot interface with automated trade execution logs',
    color: '#4A7C6F',
    result: 'Automated 24/7 Execution',
    role: 'System Designer',
    duration: '8 mos',
    problem:
      'Manual trading suffers from emotional bias, slow order entry during flash crashes, and inability to execute 24/7 options hedging.',
    solution:
      'Engineered an autonomous Vibe Coding trading service with automated dynamic trailing stops, position sizing risk limits, and instant Telegram trade alerts.',
    architecture: [
      'REST API connection with encrypted secret authentication to Delta Exchange.',
      'Heikin-Ashi candle calculation module for noise-filtered trend confirmation.',
      'Strict risk manager limiting max drawdown per session.',
    ],
    metrics: [
      { label: 'Uptime', value: '24/7' },
      { label: 'Exec Speed', value: '120ms' },
      { label: 'Risk Protection', value: 'Max 2%' },
    ],
    githubUrl: 'https://github.com/Amanjaved',
  },
  {
    id: '04',
    title: 'Jobs@mail — Job Alert Automation',
    category: 'Full Stack & Automation',
    year: '2023',
    description:
      'Automated job scraping and email notification service matching candidate profiles with daily open positions across top tech platforms.',
    stack: ['ASP.NET Core', 'C#', 'SQL Server', 'SMTP', 'HTML/CSS'],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_12948bb57-1765181765036.png',
    imageAlt:
      'Job portal dashboard showing automated matching and candidate profiles',
    color: '#8C867D',
    result: 'Automated Daily Job Alerts',
    role: 'Full Stack Developer',
    duration: '4 mos',
    problem:
      'Job seekers spend hours daily searching job boards manually without instant alerts for newly posted matching roles.',
    solution:
      'Created an automated background worker service parsing tech job feeds, filtering matching candidate keywords, and delivering HTML daily digest emails.',
    architecture: [
      'C# background worker service executing scheduled scraping & matching jobs.',
      'SQL Server database storing candidate preferences & deduplicated listings.',
      'Responsive HTML email template generator with single-click apply links.',
    ],
    metrics: [
      { label: 'Daily Emails Sent', value: '5K+' },
      { label: 'Matching Speed', value: 'Instant' },
      { label: 'Open Rate', value: '62%' },
    ],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

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
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    };

    init();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="blob-primary absolute w-[800px] h-[800px] rounded-full top-1/3 -left-80 pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-20">
          <p className="section-label mb-3">Craft & Engineering</p>
          <h2 className="font-display text-section-xl font-black text-foreground">
            Featured Projects &{' '}
            <span className="italic font-light text-gradient-gold">Case Studies.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mt-4">
            A selection of production government systems, cryptocurrency quantitative intelligence tools, and full-stack web platforms.
          </p>
        </div>

        {/* Asymmetric Project Layout Grid */}
        <div className="space-y-16">
          {/* Featured Project #1 — Full-Width Luxury Card */}
          <div className="group relative bg-[#121212] border border-primary/30 rounded-[32px] overflow-hidden p-6 sm:p-10 transition-all duration-500 hover:border-primary shadow-2xl glass-card-gold">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Image Frame with macOS Browser Mockup */}
              <div className="lg:col-span-7 relative">
                <BrowserMockup
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].imageAlt}
                  url="https://deis.up.gov.in"
                  priority
                />
                
                <span className="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
                  ★ Featured Enterprise System
                </span>
              </div>

              {/* Card Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {PROJECTS[0].category}
                    </span>
                    <span className="text-xs text-muted-foreground">• {PROJECTS[0].year}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {PROJECTS[0].title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {PROJECTS[0].description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {PROJECTS[0].stack.map((tech) => (
                      <span key={tech} className="tag-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Trigger Button */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-primary font-semibold">{PROJECTS[0].result}</span>
                  <button
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-md"
                  >
                    Read Full Case Study ➔
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Split 2-Column Cards (Project #2 and Project #3) */}
          <div className="grid lg:grid-cols-2 gap-8">
            {PROJECTS.slice(1, 3).map((proj) => (
              <div
                key={proj.id}
                className="group relative bg-[#121212] border border-border rounded-[28px] overflow-hidden p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 glass-card flex flex-col justify-between"
              >
                <div>
                  {/* Browser Mockup */}
                  <div className="mb-6">
                    <BrowserMockup
                      src={proj.image}
                      alt={proj.imageAlt}
                      url={`https://amanjaved.dev/project/${proj.id}`}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {proj.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">• {proj.year}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.stack.map((tech) => (
                      <span key={tech} className="tag-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{proj.result}</span>
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-5 py-2.5 rounded-full border border-primary/30 text-primary text-[11px] font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    View Details ➔
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Project #4 — Supporting Wide Card */}
          <div className="group relative bg-[#121212] border border-border rounded-[28px] p-6 sm:p-8 hover:border-primary/40 transition-all duration-500 glass-card">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative">
                <BrowserMockup
                  src={PROJECTS[3].image}
                  alt={PROJECTS[3].imageAlt}
                  url="https://jobsatmail.com"
                />
              </div>

              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {PROJECTS[3].category} • {PROJECTS[3].year}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {PROJECTS[3].title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {PROJECTS[3].description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {PROJECTS[3].stack.map((tech) => (
                      <span key={tech} className="tag-tech">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(PROJECTS[3])}
                    className="px-4 py-2 rounded-full border border-border text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                  >
                    View Case Study ➔
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}