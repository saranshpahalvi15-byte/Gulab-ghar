import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/weddingData';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onPlanCelebration: () => void;
  onExploreWork: () => void;
  onOpenVisionEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlanCelebration,
  onExploreWork,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-[#221C1B]"
      aria-label="Hero Section"
    >
      {/* Background Image Carousel with Smooth AnimatePresence and Ken Burns effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.subtitle}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Layered Luxury Gradient Overlays - Warm Champagne & Espresso Veil */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#221C1B]/95 via-[#221C1B]/60 to-[#221C1B]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(194,123,127,0.18)_0%,_transparent_70%)] pointer-events-none" />

      {/* Subtle Royal Arch Pattern Inset Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-4 sm:inset-8 md:inset-12 border border-[#C5A880]/35 rounded-3xl pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 bg-[#221C1B]/90 text-[10px] uppercase tracking-[0.35em] text-[#C5A880] border border-[#C5A880]/40 rounded-full py-1 backdrop-blur-md shadow-lg">
          Jaipur • Royal Rajasthan
        </div>
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#FAF7F2] flex flex-col items-center">
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A880]/40 mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#EFE6DC]">
            {siteConfig.brand.subtitle}
          </span>
        </motion.div>

        {/* Primary Cinematic Headline */}
        <motion.h1
          id="hero-main-headline"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.06] text-[#FAF7F2] max-w-4xl drop-shadow-md mb-6"
        >
          Where Your Celebration <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#F7EDEE] underline decoration-[#C5A880]/60 decoration-1 underline-offset-8">
            Becomes a Memory.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl font-light text-[#EFE6DC] max-w-2xl mx-auto leading-relaxed mb-10 text-balance opacity-95"
        >
          Luxury wedding planning and bespoke event décor from the heart of Jaipur. We craft royal
          celebrations steeped in Rajasthan’s timeless grandeur and contemporary finesse.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            id="hero-primary-plan-btn"
            onClick={onPlanCelebration}
            className="w-full sm:w-auto px-9 py-4 bg-[#8E4146] hover:bg-[#A3585D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.22em] rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2.5 group border border-[#C27B7F]/40"
          >
            <span>Plan Your Celebration</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            id="hero-secondary-explore-btn"
            onClick={onExploreWork}
            className="w-full sm:w-auto px-9 py-4 bg-[#FAF7F2]/15 hover:bg-[#FAF7F2]/25 text-[#FAF7F2] backdrop-blur-md border border-[#FAF7F2]/40 text-xs font-semibold uppercase tracking-[0.22em] rounded-full transition-all duration-300 cursor-pointer shadow-md"
          >
            Explore Our Work
          </motion.button>
        </motion.div>

        {/* Interactive slide tracker & mood badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 text-xs text-[#C5A880]"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="tracking-wider font-medium">{currentSlide.location}</span>
          </div>
          <span className="hidden sm:inline text-[#C5A880]/50">•</span>
          <div className="flex items-center gap-1.5 text-[#EFE6DC]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="tracking-wide">{currentSlide.mood}</span>
          </div>
        </motion.div>

        {/* Slide selectors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-2.5 mt-6"
        >
          {heroSlides.map((slide, i) => (
            <button
              key={slide.subtitle}
              type="button"
              onClick={() => setCurrentSlideIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentSlideIndex
                  ? 'w-9 bg-[#C5A880] shadow-sm'
                  : 'w-2.5 bg-[#FAF7F2]/30 hover:bg-[#FAF7F2]/60'
              }`}
              aria-label={`Slide ${i + 1}: ${slide.subtitle}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#EFE6DC]/70 pointer-events-auto"
      >
        <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-[#C5A880]/90">
          Scroll to Discover
        </span>
        <a
          href="#brand-intro"
          className="p-1.5 rounded-full text-[#C5A880] hover:text-[#FAF7F2] transition-colors animate-bounce"
          aria-label="Scroll to introduction"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
