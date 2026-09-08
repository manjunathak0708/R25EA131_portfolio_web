import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#e2e8f0]">
          {/* Left info */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-sm font-bold tracking-tight text-[#0b1c30]">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#e5eeff] text-[#0051d5] border border-[#cbd5e1]">
                PORTFOLIO // 2025
              </span>
            </div>
            <p className="font-mono text-xs text-[#64748b]">
              B.Tech AIML • Reva University • High Performance Systems &amp; Machine Learning
            </p>
          </div>

          {/* Right links and copyright */}
          <div className="flex flex-col md:items-end space-y-1.5 font-mono text-xs text-[#64748b]">
            <div className="flex items-center space-x-3 text-xs">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0051d5] transition-colors"
              >
                github
              </a>
              <span>/</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0051d5] transition-colors"
              >
                linkedin
              </a>
              <span>/</span>
              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0051d5] transition-colors"
              >
                leetcode
              </a>
            </div>

            <div className="text-[11px] text-[#94a3b8]">
              © 2025 {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
