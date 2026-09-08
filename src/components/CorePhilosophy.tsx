import React from 'react';
import { GitFork, Cpu, Box } from 'lucide-react';
import { PHILOSOPHY_DATA } from '../data/portfolioData.ts';

export const CorePhilosophy: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Split':
        return <GitFork className="w-4 h-4 text-[#64748b]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#64748b]" />;
      case 'Box':
        return <Box className="w-4 h-4 text-[#64748b]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#64748b]" />;
    }
  };

  return (
    <section className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e2e8f0]">
          <div>
            <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
              CORE PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
              HOW I THINK
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-[#64748b] max-w-md leading-relaxed">
            A disciplined algorithmic approach to tackling unknown problem spaces and transforming concepts into code.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PHILOSOPHY_DATA.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header row: Number and step */}
                <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
                  <span className="font-mono text-xs font-semibold text-[#0051d5] tracking-wider">
                    {card.number} // {card.step}
                  </span>
                  {getIcon(card.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0b1c30] tracking-tight mt-4">
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-[#45464d] leading-relaxed mt-2.5">
                  {card.description}
                </p>
              </div>

              {/* Footer Phase Label */}
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <span className="font-mono text-[10px] font-semibold text-[#64748b] tracking-wider uppercase">
                  {card.phase}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
