'use client';

import React, { useState } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import CommandPalette from '@/components/ui/CommandPalette';
import Preloader from '@/components/ui/Preloader';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import SectionDivider from '@/components/ui/SectionDivider';
import HeroSection from '@/app/components/HeroSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import JourneySection from '@/app/components/JourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);

  return (
    <main className="relative bg-[#0A0A0A] text-[#F4F1EA] selection:bg-primary/30 selection:text-primary min-h-screen">
      {/* Top Sticky Reading Progress Bar */}
      <ScrollProgress />

      {/* Floating Back-to-Top Button */}
      <BackToTop />

      {/* Initial Smooth Entrance Preloader */}
      <Preloader />

      {/* Ambient Noise Grain Overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      
      {/* Custom Desktop Mouse Glow Follower */}
      <CustomCursor />

      {/* Raycast-style Command Palette */}
      <CommandPalette
        isOpen={isCmdPaletteOpen}
        onClose={() => setIsCmdPaletteOpen(false)}
      />

      {/* Navigation Header */}
      <Header onOpenCmdPalette={() => setIsCmdPaletteOpen(true)} />

      {/* Main Sections with Gradient Transition Dividers */}
      <HeroSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <JourneySection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <ContactSection />
      
      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}