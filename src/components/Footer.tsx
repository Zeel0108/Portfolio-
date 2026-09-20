import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-[#09090B] border-t border-[#17171C] text-sm text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2 font-display font-bold text-white text-lg">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <p className="text-xs font-mono text-[#71717A]">
            Graphic Designer · UI Designer · Web Designer
          </p>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-xs font-mono text-[#FAFAFA]">
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#8B5CF6] transition-colors">
              LinkedIn
            </a>
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-[#8B5CF6] transition-colors">
              GitHub
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#8B5CF6] transition-colors">
              Email
            </a>
          </div>
          
          <p className="text-xs text-[#71717A]">
            © {new Date().getFullYear()} Zeel Golakiya. All rights reserved.
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group p-3 rounded-full bg-[#17171C] border border-[#27272A] text-white hover:border-[#8B5CF6] transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-[#8B5CF6]" />
        </button>

      </div>
    </footer>
  );
};
