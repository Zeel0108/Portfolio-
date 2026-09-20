import React, { useState } from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import type { Certificate } from '../data/portfolioData';
import { Award, ArrowUpRight, ShieldCheck, X } from 'lucide-react';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6] mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>CONTINUOUS UP-SKILLING</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              LEARNING & CERTIFICATIONS
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-[#A1A1AA] font-light leading-relaxed">
              Industry-recognized credentials from Google, Canva, Deloitte, TATA Group, and Amazon Web Services.
            </p>
          </div>
        </div>

        {/* Horizontal Certificate Cards */}
        <div className="space-y-4">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer p-6 md:p-8 rounded-2xl bg-[#17171C]/70 border border-[#27272A] hover:border-[#8B5CF6]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start md:items-center gap-5">
                {/* Colorful Issuer Icon Badge */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${cert.badgeBg} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                  <ShieldCheck className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#8B5CF6] transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#09090B] text-[#10B981] border border-[#10B981]/30 hidden sm:inline">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#3B82F6]">
                    {cert.issuer} • <span className="text-[#A1A1AA] font-normal">{cert.date}</span>
                  </p>
                  <p className="text-xs text-[#A1A1AA] max-w-2xl line-clamp-1">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                <span className="text-xs font-mono text-[#FAFAFA] group-hover:text-[#8B5CF6] transition-colors hidden sm:inline">
                  VIEW CERTIFICATE
                </span>
                <div className="w-10 h-10 rounded-full bg-[#09090B] border border-[#27272A] group-hover:border-[#8B5CF6] flex items-center justify-center text-white transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-[#09090B] border border-[#27272A] rounded-2xl p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#17171C] text-[#A1A1AA] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${selectedCert.badgeBg} flex items-center justify-center text-white shrink-0`}>
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#10B981] font-semibold">VERIFIED CREDENTIAL</span>
                <h3 className="font-display font-bold text-xl text-white">{selectedCert.title}</h3>
                <p className="text-sm text-[#3B82F6]">{selectedCert.issuer}</p>
              </div>
            </div>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {selectedCert.description}
            </p>

            <div className="pt-4 border-t border-[#17171C] flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-full bg-[#8B5CF6] text-white font-display text-xs font-semibold hover:opacity-90"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
