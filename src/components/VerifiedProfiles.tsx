import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const VerifiedProfiles: React.FC = () => {
  const profiles = [
    {
      badge: 'ALGORITHMS',
      title: 'LeetCode',
      handle: `@${PERSONAL_INFO.leetcodeUser}`,
      url: PERSONAL_INFO.leetcodeUrl,
      metaLeft: '314+ SOLVED',
      status: 'VERIFIED',
    },
    {
      badge: 'SOURCE CODE',
      title: 'GitHub',
      handle: `@${PERSONAL_INFO.githubUser}`,
      url: PERSONAL_INFO.githubUrl,
      metaLeft: 'REPOSITORIES',
      status: 'ACTIVE',
    },
    {
      badge: 'NETWORK',
      title: 'LinkedIn',
      handle: `@${PERSONAL_INFO.linkedinUser}`,
      url: PERSONAL_INFO.linkedinUrl,
      metaLeft: 'CONNECT',
      status: 'OPEN',
    },
  ];

  return (
    <section className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-[#e2e8f0]">
          <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
            EXTERNAL FOOTPRINT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
            VERIFIED PROFILES
          </h2>
        </div>

        {/* 3 Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between group block"
            >
              <div>
                {/* Header Badge & Arrow */}
                <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] text-xs font-mono">
                  <span className="text-[#64748b] tracking-wider uppercase">
                    {profile.badge}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#0051d5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Title & Handle */}
                <h3 className="text-xl font-bold text-[#0b1c30] tracking-tight mt-4 group-hover:text-[#0051d5] transition-colors">
                  {profile.title}
                </h3>
                <p className="text-xs font-mono text-[#0051d5] mt-1 break-all">
                  {profile.handle}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-mono">
                <span className="text-[#64748b] text-[11px]">
                  {profile.metaLeft}
                </span>
                <span className="text-[#059669] font-semibold text-[11px] tracking-wider">
                  {profile.status}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
