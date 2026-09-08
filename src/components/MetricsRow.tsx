import React from 'react';
import { GraduationCap, Award, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import { METRICS_DATA, PERSONAL_INFO } from '../data/portfolioData.ts';

export const MetricsRow: React.FC = () => {
  return (
    <section className="py-8 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Metric 1: CGPA */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5 shadow-2xs hover:border-[#0051d5]/40 transition-all group">
            <div className="flex items-start justify-between">
              <div className="font-mono text-2xl font-bold text-[#0b1c30] tracking-tight">
                9.025
              </div>
              <div className="p-1.5 rounded-md bg-[#eff4ff] text-[#0051d5]">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="font-mono text-[11px] font-semibold tracking-wider text-[#0b1c30] uppercase">
                CURRENT CGPA
              </div>
              <p className="mt-1 text-xs text-[#64748b] leading-normal">
                Academic excellence at Reva Univ
              </p>
            </div>
          </div>

          {/* Metric 2: LeetCode */}
          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg border border-[#e2e8f0] p-5 shadow-2xs hover:border-[#0051d5]/40 transition-all group block"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-1.5 font-bold text-xl text-[#0b1c30]">
                {/* LeetCode custom logo aesthetic */}
                <span className="text-[#f59e0b] font-mono text-lg">&lt;&gt;</span>
                <span>LeetCode</span>
              </div>
              <div className="p-1.5 rounded-md bg-[#fff7ed] text-[#d97706] group-hover:text-[#0051d5] group-hover:bg-[#eff4ff] transition-colors">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="font-mono text-[11px] font-semibold tracking-wider text-[#0b1c30] uppercase flex items-center gap-1">
                <span>LEETCODE PROFILE</span>
                <ArrowUpRight className="w-3 h-3 text-[#64748b] group-hover:text-[#0051d5] transition-colors" />
              </div>
              <p className="mt-1 text-xs text-[#64748b] leading-normal">
                Daily algorithmic discipline transitioning into competitive programming contests
              </p>
            </div>
          </a>

          {/* Metric 3: GFG Contest */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5 shadow-2xs hover:border-[#0051d5]/40 transition-all group">
            <div className="flex items-start justify-between">
              <div className="font-mono text-2xl font-bold text-[#0b1c30] tracking-tight">
                2ND
              </div>
              <div className="p-1.5 rounded-md bg-[#eff4ff] text-[#0051d5]">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="font-mono text-[11px] font-semibold tracking-wider text-[#0b1c30] uppercase">
                GFG CONTEST PLACE
              </div>
              <p className="mt-1 text-xs text-[#64748b] leading-normal">
                Competitive coding podium finish
              </p>
            </div>
          </div>

          {/* Metric 4: Primary Language */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5 shadow-2xs hover:border-[#0051d5]/40 transition-all group">
            <div className="flex items-start justify-between">
              <div className="font-mono text-2xl font-bold text-[#0051d5] tracking-tight">
                C++
              </div>
              <div className="p-1.5 rounded-md bg-[#eff4ff] text-[#0051d5]">
                <Terminal className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="font-mono text-[11px] font-semibold tracking-wider text-[#0b1c30] uppercase">
                PRIMARY LANGUAGE
              </div>
              <p className="mt-1 text-xs text-[#64748b] leading-normal">
                OOP, STL & systems logic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
