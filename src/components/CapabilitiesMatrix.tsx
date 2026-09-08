import React from 'react';
import { Award } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';

export const CapabilitiesMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e2e8f0]">
          <div>
            <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
              CAPABILITIES MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
              ENGINEERING STACK
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-[#64748b] max-w-md leading-relaxed">
            Strictly organized competencies categorized by mastery and active developmental status.
          </p>
        </div>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {SKILL_CATEGORIES.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header badges */}
                <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] text-xs font-mono">
                  <span className="text-[#0051d5] font-semibold tracking-wide">
                    {skill.categoryBadge}
                  </span>
                  <span
                    className={`font-semibold text-[11px] tracking-wider uppercase ${
                      skill.statusBadge === 'CURRENTLY LEARNING'
                        ? 'text-[#0051d5] bg-[#eff4ff] px-2 py-0.5 rounded border border-[#dbe7ff]'
                        : 'text-[#64748b]'
                    }`}
                  >
                    {skill.statusBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0b1c30] tracking-tight mt-4">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-2.5">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[#f1f5f9]">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#f1f5f9] text-xs font-mono text-[#334155]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Highlight Banner */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 sm:p-8 shadow-2xs">
          <div className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase mb-4">
            COMPETITIVE HIGHLIGHT
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            {/* Big 02 / PLACE */}
            <div className="flex flex-col items-baseline border-b sm:border-b-0 sm:border-r border-[#e2e8f0] pb-4 sm:pb-0 sm:pr-10">
              <div className="font-mono text-5xl sm:text-6xl font-bold text-[#0b1c30] tracking-tighter">
                02
              </div>
              <div className="font-mono text-xs font-bold text-[#64748b] tracking-widest uppercase mt-1">
                PLACE
              </div>
            </div>

            {/* Description Details */}
            <div className="space-y-2 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b1c30] tracking-tight flex items-center gap-2">
                <span>GeeksforGeeks Coding Contest</span>
                <Award className="w-5 h-5 text-[#f59e0b]" />
              </h3>

              <p className="text-sm text-[#45464d] leading-relaxed">
                Secured second place in a GeeksforGeeks coding contest, demonstrating problem-solving ability, logical thinking, and coding skills under timed competitive constraints.
              </p>

              <div className="pt-2 font-mono text-[10px] text-[#64748b] tracking-wider uppercase">
                COMPETITIVE PROGRAMMING • TIME &amp; MEMORY OPTIMIZATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
