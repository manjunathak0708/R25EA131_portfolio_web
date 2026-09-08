import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'dsa', label: 'DSA' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f8f9ff]/90 backdrop-blur-md border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand / Name */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-left group focus:outline-none"
          >
            <span className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded bg-[#0b1c30] text-white tracking-wider">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="font-mono text-sm font-semibold tracking-tight text-[#0b1c30] group-hover:text-[#0051d5] transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* Active status indicator */}
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-[#e8fbf3] border border-[#a7f3d0]/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-wider text-[#065f46]">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center p-1 bg-[#eff4ff]/70 border border-[#e2e8f0] rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white text-[#0051d5] shadow-sm font-semibold'
                    : 'text-[#45464d] hover:text-[#0b1c30] hover:bg-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: External links and Connect CTA */}
        <div className="hidden lg:flex items-center space-x-5">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-semibold text-[#45464d] hover:text-[#0b1c30] tracking-wider transition-colors flex items-center gap-1"
          >
            GITHUB
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-semibold text-[#45464d] hover:text-[#0b1c30] tracking-wider transition-colors flex items-center gap-1"
          >
            LINKEDIN
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#0b1c30] bg-white text-[#0b1c30] hover:bg-[#0b1c30] hover:text-white transition-all text-xs font-medium shadow-sm group"
          >
            <span>Let's Connect</span>
            <div className="w-5 h-5 rounded-full bg-[#0b1c30] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0b1c30] transition-colors">
              <User className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-2.5 py-1 text-xs font-medium rounded border border-[#0b1c30] text-[#0b1c30]"
          >
            Connect
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-[#45464d] hover:text-[#0b1c30] hover:bg-[#eff4ff]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e2e8f0] bg-[#f8f9ff] px-4 py-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 pb-2 border-b border-[#e2e8f0]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded text-xs font-medium ${
                  activeSection === item.id
                    ? 'bg-[#e5eeff] text-[#0051d5] font-semibold'
                    : 'text-[#45464d] hover:bg-[#eff4ff]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2 text-xs font-mono">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#45464d] hover:text-[#0b1c30] flex items-center gap-1"
            >
              GITHUB <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#45464d] hover:text-[#0b1c30] flex items-center gap-1"
            >
              LINKEDIN <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#45464d] hover:text-[#0b1c30] flex items-center gap-1"
            >
              LEETCODE <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
