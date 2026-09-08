import React, { useState } from 'react';
import { Mail, Copy, Check, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-14 border-b border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Collaboration Note & Details */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[11px] font-semibold text-[#0051d5] tracking-widest uppercase">
                COLLABORATION INVITATION
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight">
                LET'S BUILD SOMETHING
              </h2>

              <p className="text-sm sm:text-base text-[#45464d] leading-relaxed max-w-xl">
                Open to internships, software development opportunities, and meaningful technical collaborations. Looking forward to discussing systems, algorithms, or product ideas.
              </p>

              <div className="pt-2 space-y-1 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-[#64748b]">EMAIL:</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-[#0b1c30] hover:text-[#0051d5] font-semibold transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#64748b]">PHONE:</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-[#0b1c30] hover:text-[#0051d5] font-semibold transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Action Buttons */}
            <div className="lg:col-span-5 flex flex-col space-y-2.5">
              {/* Send Email Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry%20-%20Software%20Engineering`}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#000000] text-white hover:bg-[#1e293b] text-xs sm:text-sm font-medium transition-all shadow-sm group"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#eff4ff] hover:bg-[#dbe7ff] text-[#0051d5] border border-[#cbd5e1] text-xs sm:text-sm font-medium transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#059669]" />
                    <span className="text-[#059669]">Copied Email Address</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              {/* Copy Phone Button */}
              <button
                onClick={handleCopyPhone}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#eff4ff] hover:bg-[#dbe7ff] text-[#0051d5] border border-[#cbd5e1] text-xs sm:text-sm font-medium transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-[#059669]" />
                    <span className="text-[#059669]">Copied Phone Number</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
