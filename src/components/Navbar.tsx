import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Visual Design', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#09090B]/85 backdrop-blur-md border-b border-[#27272A] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-3 text-white font-display tracking-tight text-lg md:text-xl font-bold"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center text-white shadow-lg shadow-[#8B5CF6]/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="leading-none group-hover:text-[#8B5CF6] transition-colors duration-200">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] tracking-wider text-[#A1A1AA] uppercase font-sans font-medium mt-1">
              Design & Tech
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-[#17171C]/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#27272A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#A1A1AA] hover:text-white font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-xs md:text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25 hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-[#17171C] border border-[#27272A] text-[#FAFAFA] hover:text-[#8B5CF6] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#09090B]/95 backdrop-blur-xl border-b border-[#27272A] p-6 flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-[#FAFAFA] hover:text-[#8B5CF6] font-display font-medium py-2 border-b border-[#17171C]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-medium text-center shadow-lg shadow-[#8B5CF6]/20 mt-2"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
