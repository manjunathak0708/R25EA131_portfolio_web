import React from 'react';
import { ArrowRight, Code, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { InteractiveTerminal } from './InteractiveTerminal.tsx';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="pt-8 pb-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Internship Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#e2e8f0] shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#0b1c30]">
                AVAILABLE FOR INTERNSHIPS
              </span>
              <span className="font-mono text-xs text-[#64748b]">
                2026 CYCLE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0b1c30] tracking-tight leading-[1.15]">
              Building strong foundations for{' '}
              <span className="text-[#0051d5] block sm:inline font-semibold">
                intelligent software.
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-[#45464d] text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-md bg-[#000000] text-white hover:bg-[#1e293b] text-sm font-medium transition-all shadow-sm group"
              >
                {/* Tech Matrix / Pixel badge aesthetic */}
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5 opacity-80 group-hover:opacity-100">
                  <div className="bg-white/90"></div>
                  <div className="bg-white/40"></div>
                  <div className="bg-white/40"></div>
                  <div className="bg-white/90"></div>
                </div>
                <span>View My Work</span>
              </button>

              <button
                onClick={() => onNavigate('education')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#cbd5e1] bg-white text-[#0b1c30] hover:border-[#0b1c30] text-sm font-medium transition-all group"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#0b1c30] group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

            {/* Bottom Meta Line */}
            <div className="pt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748b]">
              <span className="w-2 h-2 rounded-full bg-[#0051d5]"></span>
              <span className="font-medium text-[#334155]">REVA UNIVERSITY, BENGALURU</span>
              <span>•</span>
              <span className="text-[#64748b]">{PERSONAL_INFO.devNode}</span>
            </div>
          </div>

          {/* Right Column: Telemetry Terminal Window */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractiveTerminal onTriggerAction={onNavigate} />
          </div>
        </div>
      </div>
    </section>
  );
};
