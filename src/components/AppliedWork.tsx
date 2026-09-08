import React, { useState } from 'react';
import { Compass, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';

export const AppliedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleAction = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <section id="work" className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2e8f0]">
          <div>
            <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
              APPLIED WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
              THINGS I'M BUILDING
            </h2>
          </div>

          <div className="mt-2 sm:mt-0 flex items-center space-x-2 text-xs font-mono text-[#0051d5]">
            <span className="inline-block w-2 h-2 bg-[#0051d5]"></span>
            <span className="font-semibold tracking-wider uppercase">
              ACTIVE DEVELOPMENT & EXPLORATION
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 2D Graphic Editor */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#f1f5f9]">
                <span className="font-semibold text-[#0b1c30]">
                  PROJECT // BUILT
                </span>
                <span className="text-[#64748b] text-[11px] tracking-wider uppercase">
                  PERSONAL PROJECT
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#0b1c30] tracking-tight mt-4">
                2D Graphic Editor
              </h3>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-2.5">
                An AI-integrated 2D graphic editing project focused on combining creative editing workflows with intelligent features. Implements native canvas logic and graphics manipulation algorithms.
              </p>

              {/* Architecture Blueprint Visual Box */}
              <div className="my-5 p-3 rounded-md bg-[#eff4ff]/60 border border-[#dbe7ff] text-[11px] font-mono">
                <div className="flex justify-between items-center text-[#0051d5] font-semibold border-b border-[#dbe7ff]/80 pb-1.5 mb-1.5">
                  <span>GRAPHICS ENGINE</span>
                  <span>C++ Core</span>
                </div>
                <div className="flex justify-between items-center text-[#45464d]">
                  <span>Vector Transforms</span>
                  <span className="text-[#059669] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> AI Hook Ready
                  </span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['C++', 'Graphics Logic', 'AI Integration', 'GUI'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#f1f5f9] text-[11px] font-mono text-[#334155]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[#64748b] tracking-wider uppercase">
                LOCAL REPOSITORY BUILD
              </span>
              <button
                onClick={() => handleAction(PROJECTS_DATA[0])}
                className="text-[#0051d5] hover:text-[#003ea8] font-semibold flex items-center gap-1 transition-colors group"
              >
                <span>View Project Details</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Card 2: AI / Web Development */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#f1f5f9]">
                <span className="font-semibold text-[#0051d5] px-1.5 py-0.5 rounded bg-[#eff4ff] border border-[#dbe7ff]">
                  CURRENTLY LEARNING
                </span>
                <span className="text-[#0051d5] text-[11px] font-semibold tracking-wider uppercase">
                  ACTIVE SPRINT
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#0b1c30] tracking-tight mt-4">
                AI / Web Development
              </h3>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-2.5">
                Currently exploring modern web development and working toward building complete applications using the MERN stack. Transitioning algorithmic intuition into responsive full-stack services.
              </p>

              {/* MERN Pipeline Visual Box */}
              <div className="my-5 p-3 rounded-md bg-[#eff4ff]/60 border border-[#dbe7ff] text-[11px] font-mono">
                <div className="flex justify-between items-center text-[#64748b] mb-2">
                  <span className="font-semibold text-[#0b1c30]">MERN PIPELINE</span>
                  <span className="text-[#0051d5]">Learning & Building</span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-center font-semibold text-[10px]">
                  <span className="py-1 rounded bg-white text-[#334155] border border-[#e2e8f0]">Mongo</span>
                  <span className="py-1 rounded bg-white text-[#334155] border border-[#e2e8f0]">Express</span>
                  <span className="py-1 rounded bg-[#0051d5] text-white shadow-2xs">React</span>
                  <span className="py-1 rounded bg-white text-[#334155] border border-[#e2e8f0]">Node</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#f1f5f9] text-[11px] font-mono text-[#334155]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[#64748b] tracking-wider uppercase">
                MERN APPRENTICESHIP
              </span>
              <button
                onClick={() => handleAction(PROJECTS_DATA[1])}
                className="text-[#0051d5] hover:text-[#003ea8] font-semibold flex items-center gap-1 transition-colors group"
              >
                <span>Track Progress</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Card 3: Future Project */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-2xs hover:border-[#0051d5]/40 transition-all flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#f1f5f9]">
                <span className="font-semibold text-[#64748b]">
                  RESERVED SPACE
                </span>
                <span className="text-[#64748b] text-[11px] tracking-wider uppercase">
                  COMING SOON
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#0b1c30] tracking-tight mt-4">
                Future Project
              </h3>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-2.5">
                A space reserved for the next project built around software development, AI, or problem solving. Will incorporate performance benchmarks, systems architecture, and intelligent heuristics.
              </p>

              {/* Architecture Blueprint Visual Box */}
              <div className="my-5 p-4 rounded-md bg-[#eff4ff]/60 border border-[#dbe7ff] text-center flex flex-col items-center justify-center">
                <Compass className="w-5 h-5 text-[#64748b] mb-1 stroke-1" />
                <span className="font-mono text-[10px] tracking-wider text-[#64748b] uppercase font-medium">
                  ARCHITECTURE SPEC IN PROGRESS
                </span>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Systems', 'Algorithms', 'Intelligence'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#f1f5f9] text-[11px] font-mono text-[#334155]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[#64748b] tracking-wider uppercase">
                TARGET // 2025-2026
              </span>
              <button
                onClick={() => handleAction(PROJECTS_DATA[2])}
                className="text-[#64748b] hover:text-[#0b1c30] text-[11px] transition-colors"
              >
                Pipeline Stage • In Conception
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
