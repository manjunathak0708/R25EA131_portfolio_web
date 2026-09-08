import React from 'react';
import { PERSONAL_INFO, TRAJECTORY_PHASES } from '../data/portfolioData.ts';

export const EducationTrajectory: React.FC = () => {
  return (
    <section id="education" className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e2e8f0]">
          <div>
            <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
              ACADEMIC FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
              EDUCATION &amp; TRAJECTORY
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-[#64748b] max-w-md leading-relaxed">
            Systematic roadmap starting from hardware and algorithm foundations to modern intelligence.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Card: Degree & University */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between">
            <div>
              {/* Top Meta Badges */}
              <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] text-xs font-mono">
                <span className="text-[#64748b] font-medium">
                  {PERSONAL_INFO.duration}
                </span>
                <span className="font-semibold text-[#0051d5] bg-[#eff4ff] px-2 py-0.5 rounded border border-[#dbe7ff]">
                  CGPA: {PERSONAL_INFO.cgpa}
                </span>
              </div>

              {/* Title & University */}
              <h3 className="text-xl font-bold text-[#0b1c30] tracking-tight mt-4">
                {PERSONAL_INFO.degree}
              </h3>
              <p className="text-sm font-medium text-[#0051d5] mt-1">
                {PERSONAL_INFO.university}
              </p>

              {/* Curriculum Focus */}
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <div className="font-mono text-[10px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5">
                  CURRICULUM FOCUS
                </div>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  Programming, Algorithms, Software Development, and Artificial Intelligence Fundamentals.
                </p>
              </div>
            </div>

            {/* Footer status */}
            <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center space-x-2 text-xs font-mono text-[#065f46]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
              </span>
              <span className="font-semibold tracking-wide">
                IN GOOD STANDING • ACTIVE SEMESTER
              </span>
            </div>
          </div>

          {/* Right Card: Progression Path & Learning Trajectory */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] text-xs font-mono">
                <span className="text-[#0051d5] font-semibold tracking-wider uppercase">
                  PROGRESSION PATH
                </span>
                <span className="text-[#64748b] tracking-wider uppercase">
                  SEQUENTIAL ARCHITECTURE
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-[#0b1c30] tracking-tight mt-4 mb-4">
                Learning Trajectory
              </h3>

              {/* 4 Phases side by side */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TRAJECTORY_PHASES.map((phase, idx) => {
                  const isActive = phase.active;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-lg text-center flex flex-col justify-between transition-all ${
                        isActive
                          ? 'bg-[#0051d5] text-white shadow-sm'
                          : 'bg-[#f8f9ff] border border-[#e2e8f0] text-[#0b1c30]'
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] uppercase font-semibold ${
                          isActive ? 'text-white/80' : 'text-[#64748b]'
                        }`}
                      >
                        {phase.phase}
                      </span>
                      <div className="font-bold text-sm sm:text-base my-1.5 tracking-tight">
                        {phase.title}
                      </div>
                      <span
                        className={`font-mono text-[10px] ${
                          isActive ? 'text-white font-medium' : 'text-[#64748b]'
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Architectural Philosophy Note */}
              <p className="mt-5 text-xs text-[#45464d] leading-relaxed">
                <strong className="text-[#0b1c30] font-semibold">Architectural Philosophy:</strong>{' '}
                Grounded in systems and problem solving before advancing into applied intelligence.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#f1f5f9] font-mono text-[11px] text-[#64748b]">
              ROADMAP EXECUTION: 2025 -&gt; 2029
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
