import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "GRAPHIC DESIGN",
    "UI DESIGN",
    "WEB DESIGN",
    "FRONTEND DEVELOPMENT",
    "DATA VISUALIZATION",
    "DIGITAL CONTENT",
    "DESIGN THINKING",
    "POWER BI ANALYTICS"
  ];

  return (
    <section id="marquee" className="py-6 bg-[#111114] border-y border-[#27272A] overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-8">
            <span className="font-display text-sm md:text-base font-bold tracking-widest text-[#A1A1AA] hover:text-white transition-colors cursor-default">
              {item}
            </span>
            <span className="text-[#8B5CF6] text-xs">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};
