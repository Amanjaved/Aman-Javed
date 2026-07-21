'use client';

import React, { useState, useEffect, useRef } from 'react';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  'Full-time Role',
  'Freelance Project',
  'Contract Work',
  'Technical Consultation',
  'Other',
];

const achievements = [
  'Successfully delivered multiple modules for the Government of Uttar Pradesh',
  'Developed and maintained enterprise web applications used by government departments',
  'Improved SQL query performance through optimization techniques',
  'Contributed to production deployments and application support',
  'Built advanced personal projects in cryptocurrency analytics and algorithmic trading',
];

const languages = [
  { lang: 'English', level: 'Professional Working Proficiency' },
  { lang: 'Hindi', level: 'Native' },
];

const interests = [
  'Software Development',
  'Artificial Intelligence',
  'Financial Markets',
  'Algorithmic Trading',
  'Open Source Technologies',
  'System Design',
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amanjaved.aj@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: { trigger: leftRef.current, start: 'top 80%' },
          }
        );
      }
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: { trigger: rightRef.current, start: 'top 80%' },
          }
        );
      }
      if (extraRef.current) {
        gsap.fromTo(
          extraRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: { trigger: extraRef.current, start: 'top 85%' },
          }
        );
      }
    };
    init();
  }, []);

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Valid email is required';
    if (!form.projectType) newErrors.projectType = 'Please select a project type';
    if (!form.message.trim() || form.message.length < 20)
      newErrors.message = 'Message must be at least 20 characters';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="blob-primary absolute w-[600px] h-[600px] rounded-full top-0 left-1/4 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="blob-accent absolute w-[500px] h-[500px] rounded-full bottom-0 right-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="mb-16">
          <p className="section-label mb-3">Initiate Collaboration</p>
          <h2 className="font-display text-section-xl font-black text-foreground">
            Let&apos;s Build{' '}
            <span className="italic font-light text-gradient-gold">Something Extraordinary.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info + Avatar + Timezone + Copy Email */}
          <div ref={leftRef} className="space-y-8 opacity-100">
            {/* Avatar & Availability Header Card */}
            <div className="p-6 rounded-3xl bg-card border border-border glass-card-gold flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-primary/40 shrink-0">
                <img
                  src="/assets/images/user_photo.jpg"
                  alt="Aman Javed"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">Aman Javed</h3>
                <p className="text-xs text-primary font-semibold">Software Engineer • Open for Hire</p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-muted-foreground">
                  <span>📍 Lucknow, IN (IST UTC+5:30)</span>
                  <span>⚡ Responds in &lt; 2 hrs</span>
                </div>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Results-driven Software Engineer with 3+ years of experience architecting enterprise government applications & algorithmic FinTech systems. Open to full-time roles, freelance contracts, and technical consultations.
            </p>

            {/* Quick Copy Email Action Box */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-primary/30 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Direct Email Address</p>
                <p className="text-sm font-bold text-foreground mt-0.5">amanjaved.aj@gmail.com</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0"
              >
                {isCopied ? 'Copied! ✓' : 'Copy Email'}
              </button>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  label: 'Email Direct',
                  value: 'amanjaved.aj@gmail.com',
                  href: 'mailto:amanjaved.aj@gmail.com',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: 'Phone / WhatsApp',
                  value: '+91-9044692882',
                  href: 'tel:+919044692882',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/aman-javed-225b6b3b1',
                  href: 'https://www.linkedin.com/in/aman-javed-225b6b3b1/',
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  label: 'GitHub Profile',
                  value: 'github.com/Amanjaved',
                  href: 'https://github.com/Amanjaved',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 py-4 px-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume download */}
            <div className="bg-card border border-border rounded-3xl p-8">
              <p className="section-label mb-3">Curriculum Vitae</p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Download my full CV with project details, work experience, and technical skills — ready for your hiring process.
              </p>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 active:scale-95 transition-all duration-200"
                style={{ boxShadow: '0 8px 24px rgba(200,150,90,0.25)' }}
              >
                <span className="uppercase tracking-widest text-xs">Download Resume</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs opacity-70">PDF</span>
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 15V3M6 9l6 6 6-6M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div ref={rightRef} className="opacity-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-card border border-border rounded-3xl h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. I typically respond within 24 hours on business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', projectType: '', message: '' }); }}
                  className="mt-8 px-6 py-3 rounded-full border border-border text-foreground text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card border border-border rounded-3xl p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="input-field"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="input-field"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Opportunity Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="" disabled>
                      Select a type...
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.projectType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project — tech stack, team size, timeline..."
                    className="input-field resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group w-full py-4 rounded-2xl bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                  style={{ boxShadow: '0 8px 32px rgba(200,150,90,0.25)' }}
                >
                  Send Message
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Typical response time: within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Achievements, Languages & Interests */}
        <div ref={extraRef} className="mt-20 grid md:grid-cols-3 gap-8 opacity-100">
          {/* Achievements */}
          <div className="md:col-span-1 bg-card border border-border rounded-3xl p-8">
            <p className="section-label mb-4">Achievements</p>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <svg className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <p className="section-label mb-4">Languages</p>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.lang}>
                  <p className="text-foreground font-semibold text-sm">{l.lang}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <p className="section-label mb-4">Interests</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="tag-tech">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}