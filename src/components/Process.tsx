import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Compass, Lightbulb, Layout, CheckCircle2, Workflow } from 'lucide-react';

export const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-[#3B82F6]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#10B981]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#F59E0B]" />;
      default: return <Workflow className="w-6 h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6] mb-4">
              <Workflow className="w-3.5 h-3.5" />
              <span>DESIGN THINKING METHODOLOGY</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              HOW I WORK
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-[#A1A1AA] font-light leading-relaxed">
              A structured 4-step framework bridging user research, creative ideation, pixel-perfect execution, and final handoff.
            </p>
          </div>
        </div>

        {/* 4 Process Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="group relative p-8 rounded-2xl bg-[#17171C]/60 border border-[#27272A] hover:border-[#8B5CF6]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-4xl text-[#3F3F46] group-hover:text-[#8B5CF6] transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(step.icon)}
                  </div>
                </div>

                {/* Titles */}
                <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-[#8B5CF6] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-[#8B5CF6] uppercase font-semibold mb-4">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Step Indicator Bar */}
              <div className="mt-8 pt-4 border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>STEP 0{idx + 1} OF 04</span>
                <span className="w-2 h-2 rounded-full bg-[#27272A] group-hover:bg-[#8B5CF6] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
