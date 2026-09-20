import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-[#09090B] overflow-hidden">
      {/* Background Radial Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[750px] h-[500px] md:h-[750px] bg-gradient-to-tr from-[#8B5CF6]/20 to-[#3B82F6]/15 rounded-full blur-[140px] pointer-events-none animate-glow-1" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none animate-glow-2" />

      {/* 3D floating motion elements */}
      <div className="scene-3d pointer-events-none absolute inset-0 z-0">
        <div className="floating-orb orb-one" />
        <div className="floating-orb orb-two" />
        <div className="floating-orb orb-three" />
      </div>
      
      {/* Subtle Grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10 lg:gap-14">
        <div className="max-w-2xl flex flex-col justify-center">
          {/* Intro Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17171C] border border-[#27272A] w-fit mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-[#A1A1AA] uppercase tracking-wider">
              HEY, I'M
            </span>
          </div>

          {/* Giant Kinetic Typography */}
          <div className="flex flex-col mb-8">
            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.88] select-none">
              ZEEL <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-[#FAFAFA] to-[#A1A1AA] bg-clip-text text-transparent">
                GOLAKIYA
              </span>
            </h1>

            {/* Role Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-8">
              {PERSONAL_INFO.roles.map((role, idx) => (
                <React.Fragment key={role}>
                  <span className="text-xs md:text-sm lg:text-base font-display font-semibold tracking-widest uppercase text-[#8B5CF6] bg-[#8B5CF6]/10 px-3.5 py-1.5 rounded-md border border-[#8B5CF6]/20">
                    {role}
                  </span>
                  {idx < PERSONAL_INFO.roles.length - 1 && (
                    <span className="text-[#3F3F46] font-bold text-xs hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Value Proposition Subtitle */}
          <div className="max-w-2xl mb-10">
            <p className="text-lg md:text-xl lg:text-2xl text-[#A1A1AA] font-light leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-[#09090B] font-display font-semibold text-sm md:text-base hover:bg-[#FAFAFA] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5"
            >
              <Layers className="w-5 h-5 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
              <span>Explore My Work</span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#17171C] border border-[#27272A] text-white font-display font-medium text-sm md:text-base hover:bg-[#27272A] hover:border-[#3F3F46] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-5 h-5 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-[520px] mx-auto md:mx-0">
          <div className="hero-visual" aria-label="3D UI design illustration on a study desk">
            <div className="desk-surface" />
            <div className="desk-shadow" />

            <div className="mini-card mini-card-top">
              <div className="mini-card-header" />
              <div className="mini-card-body">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="mini-card mini-card-side">
              <div className="mini-card-header" />
              <div className="mini-card-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="laptop-scene">
              <div className="laptop-screen">
                <div className="screen-toolbar">
                  <span className="dot dot-purple" />
                  <span className="dot dot-white" />
                  <span className="dot dot-blue" />
                </div>
                <div className="screen-layout">
                  <aside className="screen-sidebar" />
                  <div className="screen-content">
                    <div className="screen-line line-lg" />
                    <div className="screen-line line-md" />
                    <div className="screen-line line-sm" />
                    <div className="screen-chart">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="laptop-base" />
            </div>

            <div className="mouse-surface" />
            <div className="coffee-cup" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-[#17171C]">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#71717A] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Creativity × Technology</span>
        </div>

        <a 
          href="#marquee" 
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#A1A1AA] hover:text-white transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-[#8B5CF6] group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
