import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, BarChart2 } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#09090B] border border-[#27272A] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-8 py-5 bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B5CF6] font-bold px-2.5 py-1 rounded bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
              CASE STUDY {project.number}
            </span>
            <span className="text-sm font-display font-semibold text-white hidden sm:inline">
              {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#17171C] text-[#A1A1AA] hover:text-white hover:bg-[#27272A] transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 md:p-10 space-y-12 overflow-y-auto custom-scrollbar">
          
          {/* Header Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-[#17171C] text-[#A1A1AA] border border-[#27272A]">
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xl text-[#8B5CF6] font-display font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Main Cover Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-[#27272A] aspect-video bg-[#17171C] shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />
          </div>

          {/* 2 Column Layout: Overview & Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-[#17171C]/50 border border-[#27272A] space-y-3">
              <div className="flex items-center gap-2 text-[#8B5CF6] font-display font-bold text-sm">
                <Layers className="w-4 h-4" />
                <span>OVERVIEW</span>
              </div>
              <p className="text-[#FAFAFA] text-base leading-relaxed font-light">
                {caseStudy.overview}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#17171C]/50 border border-[#27272A] space-y-3">
              <div className="flex items-center gap-2 text-[#3B82F6] font-display font-bold text-sm">
                <Cpu className="w-4 h-4" />
                <span>THE CHALLENGE</span>
              </div>
              <p className="text-[#A1A1AA] text-base leading-relaxed font-light">
                {caseStudy.challenge}
              </p>
            </div>
          </div>

          {/* Design Approach */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-white">
              Design Approach & Execution
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.designApproach.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-[#17171C]/30 border border-[#27272A]/70">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#A1A1AA] leading-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Tech Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-[#17171C]/40 border border-[#27272A] space-y-4">
              <h4 className="font-display font-bold text-lg text-white">Core System Features</h4>
              <ul className="space-y-2.5">
                {caseStudy.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#FAFAFA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#17171C]/40 border border-[#27272A] space-y-4">
              <h4 className="font-display font-bold text-lg text-white">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#27272A] text-white border border-[#3F3F46]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Breakdown / Interface Screenshots */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Interface & Visual Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {caseStudy.screenshots.map((screen, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#17171C] border border-[#27272A] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8B5CF6]">
                    <span>SCREEN 0{idx + 1}</span>
                    <BarChart2 className="w-4 h-4 opacity-50" />
                  </div>
                  <h5 className="font-display font-bold text-white text-base">{screen.title}</h5>
                  <p className="text-xs text-[#A1A1AA]">{screen.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Outcome */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#8B5CF6]/15 to-[#3B82F6]/15 border border-[#8B5CF6]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#8B5CF6] uppercase font-bold tracking-wider">PROJECT IMPACT</span>
              <p className="text-lg text-white font-display font-medium mt-1">
                {caseStudy.results}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#F5F3FF] font-display font-semibold text-sm hover:bg-[#8B5CF6]/20 transition-colors"
                >
                  <span>Open Live Site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#09090B] font-display font-semibold text-sm hover:bg-[#FAFAFA] transition-colors"
              >
                <span>Close Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
