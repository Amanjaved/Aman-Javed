'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  color: string;
  result: string;
  role?: string;
  duration?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#101010] border border-primary/30 rounded-3xl shadow-2xl overflow-y-auto z-10 glass-card-gold text-foreground my-auto p-6 sm:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all z-20"
        >
          ✕
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
            {project.category}
          </span>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            {project.year}
          </span>
          {project.role && (
            <span className="text-xs font-medium px-3 py-0.5 rounded-full border border-border bg-card">
              Role: {project.role}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-6">
          {project.title}
        </h2>

        {/* Hero Image Mockup Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-8 bg-card shadow-2xl">
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-60" />
        </div>

        {/* 2-Column Grid: Left (Problem/Solution) & Right (Metrics/Architecture) */}
        <div className="grid md:grid-cols-12 gap-8 mb-8">
          {/* Left Column */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Overview & Impact
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.problem && (
              <div className="p-5 rounded-2xl bg-card border border-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                  ⚠️ The Challenge / Problem
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-5 rounded-2xl bg-card border border-primary/20">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                  💡 Engineering Solution
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 space-y-6">
            {/* Key Performance Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="p-5 rounded-2xl bg-card border border-primary/20">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  📊 Performance & Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-background/60 border border-border">
                      <div className="font-display text-xl font-bold text-gradient-gold">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-muted-foreground mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="p-5 rounded-2xl bg-card border border-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  ⚙️ System Architecture Highlights
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-primary font-semibold">
            <span>Client / Result:</span>
            <span className="text-foreground">{project.result}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-border text-xs font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all"
              >
                GitHub Code ⬡
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
