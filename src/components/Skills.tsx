import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Palette, Code, Layers, BarChart3, Briefcase } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#3B82F6]" />;
      case 'Figma': return <Layers className="w-5 h-5 text-[#EC4899]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#10B981]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#F59E0B]" />;
      default: return <Cpu className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#0D0D10] border-t border-[#17171C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6] mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>CAPABILITIES & TOOLKIT</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              SKILLS & EXPERTISE
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-[#A1A1AA] font-light leading-relaxed">
              Organized into specialized technical and creative clusters reflecting real project experience.
            </p>
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-7 rounded-2xl bg-[#17171C]/70 border border-[#27272A] hover:border-[#8B5CF6]/40 transition-all duration-300 hover:-translate-y-1 space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-[#09090B] border border-[#27272A] text-xs font-medium text-[#FAFAFA] hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#27272A]/50 flex justify-between items-center text-[11px] font-mono text-[#71717A]">
                <span>{cat.skills.length} COMPETENCIES</span>
                <span className="text-[#8B5CF6]">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
