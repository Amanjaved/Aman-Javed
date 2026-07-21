'use client';

import React, { useEffect, useRef } from 'react';

const milestones = [
  {
    id: 1,
    role: 'Software Engineer (.NET)',
    company: 'Amity Software Ltd.',
    location: 'Lucknow, UP',
    period: 'August 2024 — Present',
    duration: 'Current',
    type: 'Full-time',
    client: 'Directorate of Economic Intelligence & Statistics, Govt. of UP',
    achievement:
      'Developing enterprise-level web applications for the Government of Uttar Pradesh. Building dynamic dashboards, statistical modules, and data entry systems. Optimizing SQL queries and stored procedures for improved performance.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'Bootstrap', 'JavaScript', 'IIS'],
    highlight: 'Government of Uttar Pradesh — Lucknow Secretariat',
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'Nippon Data Systems Ltd.',
    location: 'Lucknow, UP',
    period: 'August 2023 — August 2024',
    duration: '1 yr',
    type: 'Full-time',
    client: 'Directorate of Economic Intelligence & Statistics, Govt. of UP',
    achievement:
      'Developed and enhanced multiple web modules for government statistical reporting systems. Designed responsive interfaces, created and optimized SQL Server database objects, and implemented business logic using C# and ADO.NET.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
    highlight: 'Statistical reporting systems for Govt. of UP',
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'SISL InfoTech Pvt. Ltd.',
    location: 'Lucknow, UP',
    period: 'December 2022 — August 2023',
    duration: '9 mos',
    type: 'Full-time',
    client: null,
    achievement:
      'Developed web applications using ASP.NET and SQL Server. Built reusable backend components, designed database tables and stored procedures, fixed application bugs, and assisted senior developers during software development.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'HTML', 'CSS'],
    highlight: 'Built reusable backend components & optimized performance',
  },
  {
    id: 4,
    role: 'Assistant Developer',
    company: 'Pushpa Techno Soft Pvt. Ltd.',
    location: 'Lucknow, UP',
    period: 'January 2022 — November 2022',
    duration: '11 mos',
    type: 'Full-time',
    client: null,
    achievement:
      'Worked on Hospital Management Systems and Digital Marketing applications. Assisted in coding, testing, debugging, and deployment. Designed database modules and maintained client websites.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'HTML', 'CSS', 'JavaScript'],
    highlight: 'Hospital Management Systems & Digital Marketing apps',
  },
  {
    id: 5,
    role: 'Software Development Intern',
    company: 'Softpro India Pvt. Ltd.',
    location: 'Lucknow, UP',
    period: 'January 2020 — June 2020',
    duration: '6 mos',
    type: 'Internship',
    client: 'Jobs@mail — Online Job Portal',
    achievement:
      'Developed an online job portal including Home Page, Contact Module, Job Seeker Module, Admin Panel, User Dashboard, and Database Integration. Gained hands-on experience in full-stack .NET development.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'HTML', 'CSS', 'JavaScript'],
    highlight: 'Jobs@mail — Full Online Job Portal',
  },
];

const education = [
  {
    degree: 'Bachelor of Technology (Computer Science)',
    institution: 'Integral University, Lucknow',
    year: '2020',
    score: '70%',
  },
  {
    degree: 'Intermediate',
    institution: 'Baby Martin International School',
    year: '2016',
    score: '61%',
  },
  {
    degree: 'High School',
    institution: 'Baby Martin International School',
    year: '2014',
    score: 'CGPA: 5',
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const eduRef = useRef<HTMLDivElement>(null);

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

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          { opacity: 0, x: fromLeft ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
            },
          }
        );
      });

      if (eduRef.current) {
        gsap.fromTo(
          eduRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: { trigger: eduRef.current, start: 'top 85%' },
          }
        );
      }
    };

    init();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-16 px-6 relative overflow-hidden">
      <div
        className="blob-accent absolute w-[600px] h-[600px] rounded-full -top-20 -left-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 opacity-100">
          <p className="section-label mb-2">Engineering Arc</p>
          <h2 className="font-display text-section-xl font-black text-foreground">
            3+ Years of{' '}
            <span className="italic font-light text-gradient-gold">Building Enterprise Systems.</span>
          </h2>
        </div>

        {/* Timeline — alternating left/right layout */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={m.id}
                  className={`relative flex items-start md:gap-0 gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:mb-10`}
                >
                  {/* Card — takes 45% width on each side */}
                  <article
                    ref={(el) => { cardsRef.current[i] = el; }}
                    className={`opacity-100 w-full md:w-[45%] bg-card border border-border rounded-3xl p-6 sm:p-7 hover:border-primary/50 transition-all duration-500 glass-card-gold ${
                      isLeft ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {m.role}
                        </h3>
                        <p className="text-primary font-bold text-xs mt-0.5">{m.company}</p>
                        {m.client && (
                          <p className="text-[11px] text-muted-foreground mt-0.5 italic">Client: {m.client}</p>
                        )}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 whitespace-nowrap ml-3">
                        {m.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {m.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {m.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {m.achievement}
                    </p>

                    {/* Highlight */}
                    <div className="flex items-center gap-2 mb-4 py-2 px-3 rounded-xl bg-primary/10 border border-primary/20">
                      <svg className="w-3 h-3 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-[11px] font-semibold text-primary">{m.highlight}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {m.tags.map((tag) => (
                        <span key={tag} className="tag-tech">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>

                  {/* Center dot — desktop only */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_8px_rgba(203,178,106,0.35)] items-center justify-center z-10">
                    <div className="w-1 h-1 rounded-full bg-background" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div ref={eduRef} className="mt-14 opacity-100">
          <p className="section-label mb-3">Academic Background</p>
          <h3 className="font-display text-3xl font-black text-foreground mb-10">
            Degrees &{' '}
            <span className="italic font-light text-gradient-gold">Qualifications.</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 glass-card"
              >
                <div className="font-display text-2xl font-black text-gradient-gold mb-1">
                  {edu.year}
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-xs text-primary font-bold mb-2">{edu.institution}</p>
                <span className="text-xs text-muted-foreground">{edu.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}