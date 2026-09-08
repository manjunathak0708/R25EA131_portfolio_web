import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Heading */}
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#e2e8f0] pb-6 md:pb-0 md:pr-8">
              <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
                ENGINEERING PROFILE
              </span>
              <h2 className="text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
                ABOUT ME
              </h2>
              <div className="font-mono text-xs text-[#64748b] tracking-wider uppercase mt-2">
                CURRENTLY IN PROGRESS
              </div>
            </div>

            {/* Right Column: Bio Narrative */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {PERSONAL_INFO.aboutLong1}
              </p>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {PERSONAL_INFO.aboutLong2}
              </p>

              <div className="pt-4 border-t border-[#f1f5f9] flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-[#64748b]">
                <div>
                  <span className="text-[#0b1c30] font-semibold">LOCATION:</span>{' '}
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <span>•</span>
                <div>
                  <span className="text-[#0b1c30] font-semibold">SPECIALIZATION:</span>{' '}
                  <span className="text-[#0051d5] font-semibold">{PERSONAL_INFO.specialization}</span>
                </div>
                <span>•</span>
                <div>
                  <span className="text-[#0b1c30] font-semibold">STATUS:</span>{' '}
                  <span className="text-[#059669] font-semibold">{PERSONAL_INFO.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
