import React from 'react';
import { ArrowRight, Code2, Palette, BarChart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Introduction: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Tag */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE PHILOSOPHY</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              CREATIVITY MEETS <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                TECHNOLOGY.
              </span>
            </h2>

            <div className="pt-2">
              <a 
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#8B5CF6] hover:text-white transition-colors group"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Bio Paragraphs & Pillar Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-base md:text-lg text-[#A1A1AA] leading-relaxed font-light">
              <p className="text-white font-medium text-lg md:text-xl leading-relaxed">
                {PERSONAL_INFO.longBio}
              </p>
              <p>
                Whether crafting brand identities and promotional billboards or architecting interactive data visualizations and user interface systems, my process is rooted in clarity, aesthetics, and technical efficiency.
              </p>
            </div>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#17171C]">
              <div className="p-5 rounded-xl bg-[#17171C]/50 border border-[#27272A] hover:border-[#8B5CF6]/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1">Visual Design</h3>
                <p className="text-xs text-[#71717A]">Posters, branding, brochures & digital creatives.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#17171C]/50 border border-[#27272A] hover:border-[#3B82F6]/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1">UI & Web</h3>
                <p className="text-xs text-[#71717A]">Responsive interfaces, WordPress, & frontend code.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#17171C]/50 border border-[#27272A] hover:border-[#10B981]/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-3">
                  <BarChart className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1">Data & Analytics</h3>
                <p className="text-xs text-[#71717A]">Power BI, Python, Excel & interactive reporting.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
