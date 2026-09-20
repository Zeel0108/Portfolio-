import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <article 
      onClick={() => onOpenCaseStudy(project)}
      className="group relative cursor-pointer bg-[#17171C] border border-[#27272A] hover:border-[#8B5CF6]/50 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#8B5CF6]/10 flex flex-col"
    >
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
        <div className="flex items-start justify-between gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#09090B]/80 backdrop-blur-md text-xs font-mono font-medium text-[#FAFAFA] border border-[#27272A] shadow-md">
            {project.category}
          </span>

          <span className="font-display font-extrabold text-3xl md:text-4xl text-white/20 group-hover:text-[#8B5CF6]/80 transition-colors duration-300">
            {project.number}
          </span>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-mono tracking-wider text-[#A1A1AA] uppercase">
                • {tag}
              </span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-[#8B5CF6] transition-colors duration-300 mb-1">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-[#8B5CF6] font-display font-medium mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-[#A1A1AA] font-light leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Card Footer CTA Bar */}
        <div className="pt-4 border-t border-[#27272A] flex items-center justify-between gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FAFAFA] hover:text-[#8B5CF6] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              Visit Live
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FAFAFA] group-hover:text-[#8B5CF6] transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              View Case Study
            </span>
          )}

          <a
            href={project.liveUrl || project.href}
            target={project.liveUrl ? '_blank' : undefined}
            rel={project.liveUrl ? 'noreferrer' : undefined}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full bg-[#27272A] group-hover:bg-gradient-to-tr group-hover:from-[#8B5CF6] group-hover:to-[#3B82F6] flex items-center justify-center text-white transition-all duration-300"
            aria-label={project.liveUrl ? 'Open live project' : 'Open project case study'}
          >
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
