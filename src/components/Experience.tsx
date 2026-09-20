import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Globe } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-[#0D0D10] border-t border-[#17171C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6] mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>PRACTICAL INDUSTRY PROOF</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              WORK EXPERIENCE
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-[#A1A1AA] font-light leading-relaxed">
              Hands-on commercial experience delivering creative visual design and frontend solutions.
            </p>
          </div>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-2xl bg-[#17171C]/60 border border-[#27272A] hover:border-[#8B5CF6]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Period & Company */}
              <div className="lg:col-span-4 space-y-2">
                <span className="inline-block text-xs font-mono px-3 py-1 rounded bg-[#09090B] text-[#8B5CF6] border border-[#27272A]">
                  {exp.period}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#3B82F6] font-medium">
                  <Globe className="w-4 h-4" />
                  <span>{exp.company}</span>
                  <span className="text-[#71717A]">• {exp.type}</span>
                </div>
              </div>

              {/* Right Column: Details & Highlights */}
              <div className="lg:col-span-8 space-y-4">
                <p className="text-[#FAFAFA] text-base leading-relaxed font-light">
                  {exp.description}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((sk) => (
                    <span key={sk} className="text-xs font-mono px-2.5 py-1 rounded bg-[#09090B] text-[#A1A1AA] border border-[#27272A]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
