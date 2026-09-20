import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Layers } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#17171C] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO CENTERPIECE</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
              SELECTED <br />
              <span className="bg-gradient-to-r from-white to-[#A1A1AA] bg-clip-text text-transparent">
                WORK
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base md:text-lg text-[#A1A1AA] font-light leading-relaxed">
              A curated selection of projects combining visual design, user experience architecture, and problem-solving technology.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal Drawer */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
