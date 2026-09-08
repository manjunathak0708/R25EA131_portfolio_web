import React, { useState } from 'react';
import { ArrowUpRight, Code2, ChevronDown, ChevronUp, Check, Copy } from 'lucide-react';
import { DSA_TOPICS, PERSONAL_INFO } from '../data/portfolioData.ts';
import { DsaTopic } from '../types.ts';

export const ProblemSolvingLog: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<DsaTopic | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="dsa" className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e2e8f0]">
          <div>
            <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
              CONTINUOUS ALGORITHMIC PRACTICE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
              THE PROBLEM-SOLVING LOG
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b] mt-1 font-mono">
              Learning by solving. Improving by understanding.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 md:mt-0 font-mono text-xs font-semibold text-[#0051d5] hover:text-[#003ea8] flex items-center gap-1.5 transition-colors group"
          >
            <span className="w-2 h-2 bg-[#0051d5]"></span>
            <span>LeetCode Profile: {PERSONAL_INFO.leetcodeUser}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* DSA Progression Pipeline Container */}
        <div className="bg-[#eff4ff]/60 border border-[#dbe7ff] rounded-lg p-6 mb-6">
          <div className="font-mono text-[11px] font-semibold text-[#64748b] tracking-wider uppercase mb-6 flex items-center justify-between">
            <span>DSA PROGRESSION PIPELINE // LINEAR -&gt; NON-LINEAR STRUCTURES</span>
            <span className="text-[10px] text-[#0051d5] font-normal">Click node to inspect C++ patterns</span>
          </div>

          {/* Stepper Track */}
          <div className="relative">
            {/* Connecting horizontal line */}
            <div className="hidden sm:block absolute top-4 left-6 right-6 h-[2px] bg-[#cbd5e1] z-0"></div>

            {/* Stepper items */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 relative z-10">
              {DSA_TOPICS.map((topic) => {
                const isSelected = selectedTopic?.id === topic.id;
                let circleStyle = 'bg-[#000000] text-white';
                let statusStyle = 'text-[#64748b]';

                if (topic.status === 'Active Focus') {
                  circleStyle = 'bg-[#0051d5] text-white shadow-md shadow-[#0051d5]/20 ring-4 ring-[#0051d5]/20';
                  statusStyle = 'text-[#0051d5] font-semibold';
                } else if (topic.status === 'Advancing') {
                  circleStyle = 'bg-white text-[#45464d] border-2 border-[#cbd5e1]';
                  statusStyle = 'text-[#64748b]';
                }

                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(isSelected ? null : topic)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-110 ${circleStyle}`}
                    >
                      {topic.step}
                    </div>

                    {/* Topic Name */}
                    <span className="font-mono text-xs font-bold text-[#0b1c30] mt-3 group-hover:text-[#0051d5] transition-colors">
                      {topic.name}
                    </span>

                    {/* Status label */}
                    <span className={`font-mono text-[11px] mt-0.5 ${statusStyle}`}>
                      {topic.status}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Topic Inspector Drawer */}
          {selectedTopic && (
            <div className="mt-6 pt-5 border-t border-[#cbd5e1] animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#cbd5e1]/70 gap-2">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#0b1c30] text-white font-semibold">
                    {selectedTopic.step}
                  </span>
                  <span className="font-bold text-sm text-[#0b1c30]">
                    {selectedTopic.name} Implementation Details
                  </span>
                  <span className="font-mono text-xs text-[#0051d5] bg-white px-2 py-0.5 rounded border border-[#cbd5e1]">
                    {selectedTopic.problemsCount} Solved
                  </span>
                </div>

                <div className="flex items-center space-x-3 text-xs font-mono text-[#64748b]">
                  <span>Complexity: {selectedTopic.complexity}</span>
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="text-[#dc2626] hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3">
                <div className="md:col-span-5 space-y-2 text-xs">
                  <div className="font-mono font-semibold text-[#0051d5] uppercase text-[11px]">
                    Mastered Paradigms:
                  </div>
                  <ul className="space-y-1">
                    {selectedTopic.keyAlgorithms.map((alg, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
                        <span>{alg}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedTopic.sampleCode && (
                  <div className="md:col-span-7 bg-[#0b1c30] text-[#f8fafc] rounded-md p-3 text-[11px] font-mono relative">
                    <div className="flex items-center justify-between text-[#94a3b8] pb-1 border-b border-[#334155] mb-2 text-[10px]">
                      <span>C++ STL SNIPPET</span>
                      <button
                        onClick={() => handleCopyCode(selectedTopic.sampleCode || '')}
                        className="text-white hover:text-[#38bdf8] flex items-center gap-1"
                      >
                        {copiedCode ? <Check className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="overflow-x-auto leading-relaxed">
                      {selectedTopic.sampleCode}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 2 Sub-panels below pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Panel: LeetCode Practice Log */}
          <div className="md:col-span-7 bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
                <div className="flex items-center space-x-2 font-bold text-sm text-[#0b1c30]">
                  <span className="font-mono text-[#0051d5]">&lt;&gt;</span>
                  <span>LeetCode Practice Log</span>
                </div>
                <span className="font-mono text-[11px] text-[#059669] font-medium tracking-wide">
                  Consistent Coding Practice
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#45464d] leading-relaxed mt-4">
                Over <strong className="text-[#0b1c30] font-semibold">314+ verified algorithmic problems</strong> solved covering two-pointer methods, sliding windows, recursion trees, dynamic array expansions, and stack abstractions.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[11px] text-[#64748b]">
                TARGET: Daily discipline • Algorithmic rigor
              </span>

              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded bg-[#000000] text-white hover:bg-[#1e293b] text-xs font-medium transition-colors"
              >
                <span>View LeetCode Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Panel: Current Focus */}
          <div className="md:col-span-5 bg-[#eff4ff]/60 border border-[#dbe7ff] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] font-semibold text-[#0051d5] uppercase tracking-wider">
                ACTIVE SPRINT LOG
              </span>
              <h3 className="text-lg font-bold text-[#0b1c30] tracking-tight mt-1">
                CURRENT FOCUS
              </h3>

              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-3">
                Deepening recursive intuition and non-linear data structures while solidifying OOP architecture in modern C++.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-6 pt-3 border-t border-[#cbd5e1]/60">
              {['C++', 'Data Structures', 'Algorithms', 'Problem Solving'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-white border border-[#cbd5e1] text-[11px] font-mono text-[#334155]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
