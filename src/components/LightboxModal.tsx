import React, { useEffect } from 'react';
import { X, Tag } from 'lucide-react';
import type { GraphicItem } from '../data/portfolioData';

interface LightboxModalProps {
  item: GraphicItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#09090B] border border-[#27272A] rounded-2xl overflow-hidden shadow-2xl my-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#09090B]/80 text-[#FAFAFA] hover:text-[#8B5CF6] border border-[#27272A] transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Preview Container */}
        <div className="md:w-3/5 bg-[#17171C] relative flex items-center justify-center min-h-[300px] max-h-[70vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh] p-2"
          />
        </div>

        {/* Side Details */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 font-semibold">
              <Tag className="w-3.5 h-3.5" />
              {item.category}
            </span>

            <h3 className="font-display font-bold text-2xl text-white">
              {item.title}
            </h3>

            <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded bg-[#17171C] text-[#FAFAFA] border border-[#27272A]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#17171C]">
            <p className="text-xs font-mono text-[#71717A]">
              ZEEL GOLAKIYA • VISUAL DESIGN PORTFOLIO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
