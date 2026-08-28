import React from 'react';
import { X, MapPin, Sparkles, MessageCircle, ArrowRight, Palette } from 'lucide-react';
import { PortfolioItem } from '../types';
import { getPortfolioWhatsAppUrl } from '../utils/whatsapp';

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquireWithLook: (lookTitle: string) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  item,
  onClose,
  onInquireWithLook,
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#221C1B]/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-lightbox-title"
    >
      <div
        className="bg-[#FAF7F2] w-full max-w-5xl rounded-3xl border border-[#C5A880]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left / Top: High-Res Image Area */}
        <div className="lg:w-3/5 relative bg-[#1A1514] min-h-[300px] lg:min-h-[540px] flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center max-h-[50vh] lg:max-h-[85vh]"
          />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 lg:hidden p-2 rounded-full bg-[#221C1B]/60 text-[#FAF7F2] hover:bg-[#221C1B] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Right / Bottom: Editorial Details */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-[85vh] bg-[#FAF7F2]">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#F7EDEE] text-[#8E4146] text-[10px] uppercase font-bold tracking-widest rounded-full border border-[#C27B7F]/30">
                {item.category}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="hidden lg:block p-1.5 rounded-full text-[#4A3E3B] hover:text-[#8E4146] hover:bg-[#EFE6DC] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 id="portfolio-lightbox-title" className="font-serif text-2xl sm:text-3xl text-[#2D2422] leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-[#8E4146] mt-2 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location} • {item.venueType}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5A4B48] leading-relaxed">
              {item.description}
            </p>

            {/* Decor Highlights */}
            <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EFE6DC]">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#8E4146] font-semibold block mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                Scenography Highlights
              </span>
              <ul className="space-y-1.5">
                {item.decorHighlights.map((hl, i) => (
                  <li key={i} className="text-xs text-[#362C2A] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#8E4146]" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Palette breakdown */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#4A3E3B] font-semibold block mb-2 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#C5A880]" />
                Event Color Story
              </span>
              <div className="flex items-center gap-2">
                {item.palette.map((colorHex, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <div
                      className="w-6 h-6 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: colorHex }}
                      title={colorHex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="pt-6 mt-4 border-t border-[#EFE6DC] space-y-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquireWithLook(item.title);
              }}
              className="w-full py-3 bg-[#2D2422] hover:bg-[#8E4146] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Recreate This Aesthetic</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getPortfolioWhatsAppUrl(item.title, item.category)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-[#128C7E]/40 text-[#128C7E] hover:bg-[#128C7E]/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp This Look</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
