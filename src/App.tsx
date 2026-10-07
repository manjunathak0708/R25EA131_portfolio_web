import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { MetricsRow } from './components/MetricsRow.tsx';
import { CorePhilosophy } from './components/CorePhilosophy.tsx';
import { AppliedWork } from './components/AppliedWork.tsx';
import { ProblemSolvingLog } from './components/ProblemSolvingLog.tsx';
import { CapabilitiesMatrix } from './components/CapabilitiesMatrix.tsx';
import { EducationTrajectory } from './components/EducationTrajectory.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { VerifiedProfiles } from './components/VerifiedProfiles.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = cursorGlowRef.current;
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        glow.style.opacity = '1';
      });
    };
    const handlePointerLeave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);


  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'dsa', 'skills', 'about', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col selection:bg-[#0051d5]/15 selection:text-[#0051d5]">
      <div ref={cursorGlowRef} className="cursor-theme-shadow" aria-hidden="true" />
      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onNavigate={scrollToSection} />
        <MetricsRow />
        <CorePhilosophy />
        <AppliedWork />
        {/* Projects section */}
        <ProblemSolvingLog />
        <CapabilitiesMatrix />
        <EducationTrajectory />
        <AboutSection />
        <VerifiedProfiles />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
