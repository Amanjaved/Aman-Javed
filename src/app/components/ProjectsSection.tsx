'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import AppImage from '@/components/ui/AppImage';
import BrowserMockup from '@/components/ui/BrowserMockup';
import CaseStudyModal, { ProjectData } from './CaseStudyModal';
import {
  Search,
  ExternalLink,
  Sparkles,
  Layers,
  BarChart3,
  ShieldCheck,
  Zap,
  Cpu,
  ArrowUpRight,
  TrendingUp,
  LayoutGrid,
  CheckCircle2,
  Building2,
  Coins,
  Bot,
  MailCheck,
  X,
  ChevronRight,
  SlidersHorizontal,
  Code2,
} from 'lucide-react';

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface ExtendedProjectData extends ProjectData {
  categoryGroup: 'govt' | 'fintech' | 'trading' | 'automation';
  highlights: string[];
  isFeatured?: boolean;
}

const PROJECTS: ExtendedProjectData[] = [
  {
    id: '01',
    title: 'Integrated Portal — DEIS Govt. of UP',
    category: 'Government Enterprise System',
    categoryGroup: 'govt',
    year: 'Nov 2022',
    isFeatured: true,
    description:
      'A massive state-level enterprise statistical portal developed for the Directorate of Economic Intelligence & Statistics, Government of Uttar Pradesh. Orchestrates multi-departmental data collection, automated report generation, and statistical planning across 75 districts.',
    stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap', 'IIS'],
    image: '/assets/images/integrated_portal.jpg',
    imageAlt: 'Government data portal dashboard with statistical charts and data tables',
    color: '#CBB26A',
    result: 'Directorate of Economic Intelligence & Statistics',
    role: 'Full Stack .NET Developer',
    duration: 'Nov 2022 — Present',
    problem:
      'Legacy statistical collection across district secretariats relied on manual paper records and fragmented spreadsheets, leading to delayed state policy planning.',
    solution:
      'Engineered an end-to-end ASP.NET Web Forms architecture integrated with optimized SQL Server stored procedures, role-based security, and dynamic analytics dashboards.',
    highlights: [
      'Multi-tier ASP.NET Web Forms architecture with ADO.NET abstraction layer',
      'Custom SQL Server stored procedures for complex statistical aggregations',
      'Granular role-based access control for state officers across 75 districts',
    ],
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
    liveUrl: 'https://updata.upsdc.gov.in',
  },
  {
    id: '02',
    title: 'Bitcoin Market Intelligence Dashboard',
    category: 'FinTech Analytics & AI',
    categoryGroup: 'fintech',
    year: '2024',
    description:
      'Real-time Bitcoin market analytics suite monitoring order book depth, ETF flows, funding rates, liquidation heatmaps, and AI-driven market sentiment indicators.',
    stack: ['Vibe Coding', 'Flask', 'JavaScript', 'Chart.js', 'REST APIs', 'WebSockets'],
    image: '/assets/images/bitcoin_dashboard.jpg',
    imageAlt: 'Bitcoin market analysis dashboard with real-time charts and indicators',
    color: '#C8965A',
    result: 'Real-time Crypto Intelligence',
    role: 'Lead Developer & Architect',
    duration: '6 mos',
    problem:
      'Traders lack unified visibility across spot, futures, and ETF flows without subscribing to expensive institutional terminal software.',
    solution:
      'Aggregated live feeds from major exchanges into an ultra-low-latency Vibe Coding Flask backend feeding responsive HTML5 Chart.js visualizers.',
    highlights: [
      'Asynchronous WebSocket listeners tracking live exchange order books',
      'Custom sentiment scoring pipeline combining technical indicators & open interest',
      'High-performance client-side rendering with canvas Chart.js charts',
    ],
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
    categoryGroup: 'trading',
    year: '2023',
    description:
      'High-frequency automated crypto trading bot executing Heikin-Ashi trend-following strategies, automated risk-managed order entry, and Delta Exchange API hedging.',
    stack: ['Vibe Coding', 'Delta Exchange API', 'REST APIs', 'JSON', 'Pandas'],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1e697b34e-1784529052095.png',
    imageAlt: 'Algorithmic trading bot interface with automated trade execution logs',
    color: '#4A7C6F',
    result: 'Automated 24/7 Execution',
    role: 'System Designer',
    duration: '8 mos',
    problem:
      'Manual trading suffers from emotional bias, slow order entry during flash crashes, and inability to execute 24/7 options hedging.',
    solution:
      'Engineered an autonomous Vibe Coding trading service with automated dynamic trailing stops, position sizing risk limits, and instant Telegram trade alerts.',
    highlights: [
      'REST API connection with encrypted secret authentication to Delta Exchange',
      'Heikin-Ashi candle calculation module for noise-filtered trend confirmation',
      'Strict risk manager limiting max drawdown per session to under 2%',
    ],
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
    categoryGroup: 'automation',
    year: '2023',
    description:
      'Automated job scraping and email notification service matching candidate profiles with daily open positions across top tech platforms.',
    stack: ['ASP.NET Core', 'C#', 'SQL Server', 'SMTP', 'HTML/CSS'],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_12948bb57-1765181765036.png',
    imageAlt: 'Job portal dashboard showing automated matching and candidate profiles',
    color: '#8C867D',
    result: 'Automated Daily Job Alerts',
    role: 'Full Stack Developer',
    duration: '4 mos',
    problem:
      'Job seekers spend hours daily searching job boards manually without instant alerts for newly posted matching roles.',
    solution:
      'Created an automated background worker service parsing tech job feeds, filtering matching candidate keywords, and delivering HTML daily digest emails.',
    highlights: [
      'C# background worker service executing scheduled scraping & matching jobs',
      'SQL Server database storing candidate preferences & deduplicated listings',
      'Responsive HTML email template generator with single-click apply links',
    ],
    architecture: [
      'C# background worker service executing scheduled scraping & matching jobs.',
      'SQL Server database storing candidate preferences & deduplicated listings.',
      'Responsive HTML email template generator with single-click apply links.',
    ],
    metrics: [
      { label: 'Daily Emails', value: '5K+' },
      { label: 'Matching Speed', value: 'Instant' },
      { label: 'Open Rate', value: '62%' },
    ],
    liveUrl: 'https://jobsatmail.com',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Work', icon: Layers },
  { id: 'govt', label: 'Government & Enterprise', icon: Building2 },
  { id: 'fintech', label: 'FinTech & AI', icon: Coins },
  { id: 'trading', label: 'Algo Trading', icon: Bot },
  { id: 'automation', label: 'Web Automation', icon: MailCheck },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'showcase' | 'grid'>('showcase');

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    };

    init();
  }, []);

  // Filter projects based on active category tab & search input query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.categoryGroup === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Separate flagship project (DEIS Govt UP) from rest when in showcase mode
  const featuredProject = useMemo(() => {
    return filteredProjects.find((p) => p.isFeatured) || filteredProjects[0];
  }, [filteredProjects]);

  const secondaryProjects = useMemo(() => {
    if (viewMode === 'grid') return filteredProjects;
    return filteredProjects.filter((p) => p.id !== featuredProject?.id);
  }, [filteredProjects, featuredProject, viewMode]);

  return (
    <section id="work" ref={sectionRef} className="py-28 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Dynamic Background Radial Glows */}
      <div
        className="blob-primary absolute w-[900px] h-[900px] rounded-full -top-40 -left-96 pointer-events-none opacity-30"
        aria-hidden="true"
      />
      <div
        className="blob-accent absolute w-[700px] h-[700px] rounded-full bottom-10 -right-80 pointer-events-none opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading Header */}
        <div ref={headingRef} className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <p className="section-label tracking-[0.3em]">PORTFOLIO & CASE STUDIES</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-section-xl font-black text-foreground">
                Featured Projects &{' '}
                <span className="italic font-light text-gradient-gold">Case Studies.</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                Production state government systems, high-frequency cryptocurrency quantitative engines, and automated web platforms engineered with enterprise precision.
              </p>
            </div>

            {/* Quick Stat Pill Highlights */}
            <div ref={statsRef} className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
              <div className="px-4 py-2 rounded-2xl bg-card border border-primary/20 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold text-foreground">75 Districts</div>
                  <div className="text-[10px] text-muted-foreground">State Govt Portal</div>
                </div>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-card border border-primary/20 flex items-center gap-3">
                <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-foreground">24/7 Execution</div>
                  <div className="text-[10px] text-muted-foreground">Crypto Trading Bot</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Controls Bar: Category Filters & Search */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-2.5 rounded-2xl bg-[#111111] border border-border/80 glass-card">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${isActive
                      ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 scale-[1.02]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card border border-transparent'
                      }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Group: Search Bar & View Mode Toggle */}
            <div className="flex items-center gap-3">
              {/* Search Box */}
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword or stack..."
                  className="w-full bg-[#161616] border border-border/70 rounded-xl pl-9 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* View Switcher */}
              <div className="hidden sm:flex items-center p-1 rounded-xl bg-[#161616] border border-border/70">
                <button
                  onClick={() => setViewMode('showcase')}
                  title="Showcase Mode"
                  className={`p-1.5 rounded-lg text-xs transition-colors ${viewMode === 'showcase'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <Layers className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  title="Grid Mode"
                  className={`p-1.5 rounded-lg text-xs transition-colors ${viewMode === 'grid'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Zero Results State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 px-6 rounded-3xl bg-[#121212] border border-border/60 glass-card my-12">
            <SlidersHorizontal className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-bold text-foreground mb-2">No projects matched your criteria</h3>
            <p className="text-xs text-muted-foreground mb-6 max-w-md mx-auto">
              Try adjusting your category selection or clearing your search term to see all case studies.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Display Layout */}
        {filteredProjects.length > 0 && (
          <div className="space-y-12">
            {/* FEATURED FLAGSHIP PROJECT (Only in Showcase View when featured project is present) */}
            {viewMode === 'showcase' && featuredProject && (
              <div className="group relative bg-[#121212] border border-primary/35 rounded-[32px] overflow-hidden p-6 sm:p-10 transition-all duration-500 hover:border-primary shadow-2xl glass-card-gold">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Interactive macOS Browser Mockup */}
                  <div className="lg:col-span-7 relative">
                    <BrowserMockup
                      src={featuredProject.image}
                      alt={featuredProject.imageAlt}
                      url={featuredProject.liveUrl || 'https://updata.upsdc.gov.in'}
                      priority
                    />

                    {/* Flagship Badge */}
                    <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/25 text-primary border border-primary/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>★ Featured State Enterprise System</span>
                    </div>
                  </div>

                  {/* Right Column: Content Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Meta Tags */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/25">
                          {featuredProject.category}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          • {featuredProject.year}
                        </span>
                        {featuredProject.duration && !featuredProject.duration.includes(featuredProject.year) && (
                          <span className="text-xs text-muted-foreground font-medium">
                            • {featuredProject.duration}
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featuredProject.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {featuredProject.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      {featuredProject.highlights && (
                        <div className="mb-6 space-y-2 p-4 rounded-2xl bg-black/40 border border-white/5">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                            Key Engineering Deliverables
                          </p>
                          {featuredProject.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Metrics Chips */}
                      {featuredProject.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                          {featuredProject.metrics.map((m) => (
                            <div key={m.label} className="p-2.5 rounded-xl bg-[#161616] border border-border/80 text-center">
                              <div className="font-display text-base font-bold text-gradient-gold">
                                {m.value}
                              </div>
                              <div className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider mt-0.5">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.stack.map((tech) => (
                          <span key={tech} className="tag-tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span className="truncate max-w-[200px] sm:max-w-none">{featuredProject.result}</span>
                      </div>

                      <button
                        onClick={() => setSelectedProject(featuredProject)}
                        className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:bg-primary/90 active:scale-95 transition-all shadow-md flex items-center gap-2 group/btn"
                      >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECONDARY & GRID PROJECT CARDS */}
            {secondaryProjects.length > 0 && (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
                    : 'grid md:grid-cols-2 gap-6 sm:gap-8'
                }
              >
                {secondaryProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group relative bg-[#121212] border border-border/80 rounded-[28px] overflow-hidden p-6 sm:p-7 hover:border-primary/50 transition-all duration-500 glass-card flex flex-col justify-between project-card-hover"
                  >
                    <div>
                      {/* Browser Mockup Image Frame */}
                      <div className="mb-6">
                        <BrowserMockup
                          src={proj.image}
                          alt={proj.imageAlt}
                          url={proj.liveUrl || `https://amanjaved.dev/project/${proj.id}`}
                        />
                      </div>

                      {/* Header Meta */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          {proj.category}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          {proj.year}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {proj.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                        {proj.description}
                      </p>

                      {/* Key Metric Pills inside Card */}
                      {proj.metrics && (
                        <div className="grid grid-cols-3 gap-2 mb-5 p-2.5 rounded-xl bg-black/40 border border-white/5">
                          {proj.metrics.slice(0, 3).map((m) => (
                            <div key={m.label} className="text-center">
                              <div className="text-xs font-bold text-primary">{m.value}</div>
                              <div className="text-[8px] font-bold uppercase text-muted-foreground tracking-wider">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {proj.stack.map((tech) => (
                          <span key={tech} className="tag-tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-muted-foreground truncate max-w-[160px]">
                        {proj.result}
                      </span>

                      <div className="flex items-center gap-2">
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                            title="View GitHub Code"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="px-4 py-2 rounded-full border border-primary/30 text-primary text-[11px] font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-1.5 group/btn"
                        >
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Section Bottom Interactive CTA Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#141414] via-[#101010] to-[#18150D] border border-primary/20 glass-card-gold text-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/30">
              Architectural Consulting & Engineering
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">
              Have a complex enterprise app or quantitative AI system to build?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Whether you need scalable .NET enterprise infrastructure, high-frequency market analytics, or custom automation pipelines, let's turn your concept into production software.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#skills"
                className="px-7 py-3 rounded-full border border-border text-foreground text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
              >
                Explore Tech Stack ➔
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}