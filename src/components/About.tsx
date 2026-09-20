import React from 'react';
import { EDUCATIONS } from '../data/portfolioData';
import { GraduationCap, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & About Text */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6]">
              <User className="w-3.5 h-3.5" />
              <span>BACKGROUND & PERSPECTIVE</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              A DESIGNER WITH A <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                TECHNICAL MINDSET.
              </span>
            </h2>

            <div className="space-y-6 text-base md:text-lg text-[#A1A1AA] font-light leading-relaxed">
              <p className="text-white font-medium">
                My formal training in Computer Applications provides me with a dual advantage: I don't just design interfaces—I understand how they are built, rendered, and scaled.
              </p>
              <p>
                From creating marketing creatives, brochures, and billboard advertisements to structuring responsive websites with WordPress & Elementor, and analyzing business data using Python & Power BI, I bridge the gap between creative visual communication and technological execution.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#17171C] border border-[#27272A]">
                <span className="font-display font-bold text-3xl text-white">7.66</span>
                <span className="block text-xs font-mono text-[#8B5CF6] mt-1">BCA CGPA SCORE</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#17171C] border border-[#27272A]">
                <span className="font-display font-bold text-3xl text-white">4+</span>
                <span className="block text-xs font-mono text-[#3B82F6] mt-1">US CLIENT PROJECTS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Academic Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[#8B5CF6] font-display font-bold text-lg mb-4">
              <GraduationCap className="w-5 h-5" />
              <span>EDUCATION TIMELINE</span>
            </div>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#27272A]">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="relative pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-2.5 top-2.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#17171C] border-2 border-[#8B5CF6] group-hover:scale-125 group-hover:bg-[#8B5CF6] transition-all duration-300" />
                  
                  <div className="p-6 rounded-2xl bg-[#17171C]/70 border border-[#27272A] hover:border-[#8B5CF6]/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#09090B] text-[#8B5CF6] border border-[#27272A]">
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-semibold">
                          {edu.score}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#8B5CF6] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[#3B82F6] font-medium mb-3">
                      {edu.institution} • <span className="text-[#A1A1AA] font-normal">{edu.status}</span>
                    </p>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
