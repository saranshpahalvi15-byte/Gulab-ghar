import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/weddingData';
import { PortfolioItem } from '../types';
import { PortfolioLightbox } from './PortfolioLightbox';
import { RoyalDivider } from './RoyalDivider';

interface PortfolioSectionProps {
  onSelectLookForInquiry: (lookTitle: string) => void;
}

const CATEGORIES = [
  'All',
  'Weddings',
  'Engagements',
  'Mehendi & Sangeet',
  'Receptions',
  'Corporate',
  'Private Celebrations',
] as const;

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectLookForInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden"
      aria-label="Portfolio and Gallery Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#8E4146] text-xs uppercase tracking-[0.22em] font-semibold mb-3 border border-[#C27B7F]/30 shadow-xs">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Anthology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
            Curated Celebrations & <br />
            <span className="italic text-[#8E4146]">Floral Scenography</span>
          </h2>
          <RoyalDivider />
          <p className="text-sm sm:text-base text-[#5A4B48] font-light max-w-2xl mx-auto leading-relaxed">
            Explore our visual portfolio of royal palace mandaps, candlelit banquets, vibrant haldi
            courtyards, and marquee pre-wedding atmospheres across Rajasthan.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              id={`portfolio-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2D2422] text-[#FAF7F2] shadow-md'
                  : 'bg-[#FAF7F2] text-[#5A4B48] border border-[#EFE6DC] hover:border-[#C5A880] hover:text-[#2D2422]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Editorial Dynamic Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const isLarge = idx % 5 === 0;
              return (
                <motion.div
                  layout
                  key={item.id}
                  id={`portfolio-item-${item.id}`}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className={`group relative bg-[#221C1B] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#EFE6DC] hover:border-[#C5A880] ${
                    isLarge
                      ? 'md:col-span-2 lg:col-span-2 min-h-[380px] sm:min-h-[460px]'
                      : 'min-h-[360px] sm:min-h-[420px]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                    loading="lazy"
                  />

                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221C1B]/95 via-[#221C1B]/35 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-95" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#8E4146] text-[10px] uppercase font-bold tracking-widest border border-[#C5A880]/30 shadow-xs">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2]/85 backdrop-blur-md text-[#2D2422] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content Info */}
                  <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#C5A880] block mb-1">
                      {item.location} • {item.venueType}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] leading-snug mb-2 font-light">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#EFE6DC] line-clamp-2 font-light opacity-90 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Palette preview */}
                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#FAF7F2]/20">
                      <span className="text-[10px] uppercase tracking-wider text-[#C5A880] mr-2">
                        Palette:
                      </span>
                      {item.palette.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs inline-block"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <span className="ml-auto text-[11px] text-[#FAF7F2] flex items-center gap-1 group-hover:text-[#C5A880] transition-colors">
                        <span>View Look</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if category has no items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#FAF7F2] rounded-2xl border border-[#EFE6DC]">
            <p className="font-serif text-xl text-[#5A4B48]">
              No celebrations found in this category.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-4 px-6 py-2.5 bg-[#8E4146] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              View All Work
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <PortfolioLightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onInquireWithLook={(lookTitle) => {
          setSelectedItem(null);
          onSelectLookForInquiry(lookTitle);
        }}
      />
    </section>
  );
};
