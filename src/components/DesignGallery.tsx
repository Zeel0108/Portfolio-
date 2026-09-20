import React, { useState } from 'react';
import { GRAPHIC_DESIGNS } from '../data/portfolioData';
import type { GraphicItem } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import { Palette, ArrowUpRight, Eye } from 'lucide-react';

export const DesignGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GraphicItem | null>(null);

  const categories = ['All', 'Posters', 'Branding', 'Digital Marketing', 'Billboards'];

  const filteredDesigns = activeCategory === 'All'
    ? GRAPHIC_DESIGNS
    : GRAPHIC_DESIGNS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-[#0D0D10] border-t border-[#17171C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C] border border-[#27272A] text-xs font-mono text-[#8B5CF6] mb-4">
              <Palette className="w-3.5 h-3.5" />
              <span>FULL-WIDTH SHOWCASE</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              VISUAL DESIGN
            </h2>
            <p className="text-base text-[#A1A1AA] font-light mt-2 max-w-xl">
              Posters, marketing creatives, digital content, billboard mockups, and visual experiments.
            </p>
          </div>

          {/* Filter Pill Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#17171C]/70 p-1.5 rounded-full border border-[#27272A] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-md'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-[#27272A]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDesigns.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#17171C] border border-[#27272A] hover:border-[#8B5CF6]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8B5CF6]/10 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] bg-[#09090B] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent opacity-40 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="w-10 h-10 rounded-full bg-[#09090B]/80 backdrop-blur-md border border-[#27272A] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5 text-[#8B5CF6]" />
                    </span>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#8B5CF6] mb-1">
                      <Eye className="w-3.5 h-3.5" /> VIEW PROJECT ↗
                    </span>
                    <h4 className="font-display font-bold text-xl text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 flex items-center justify-between border-t border-[#27272A]">
                <div>
                  <h4 className="font-display font-bold text-white text-base group-hover:text-[#8B5CF6] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                    {item.category}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#8B5CF6] group-hover:underline">
                  Inspect →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
