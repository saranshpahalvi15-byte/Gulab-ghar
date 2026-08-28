import React from 'react';
import { motion } from 'motion/react';
import { Crown, HeartHandshake, Flower2 } from 'lucide-react';
import { RoyalDivider } from './RoyalDivider';

interface BrandIntroProps {
  onExploreServices: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onExploreServices }) => {
  return (
    <section
      id="brand-intro"
      className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Brand Introduction"
    >
      {/* Decorative Jali / Arch Background motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(#C27B7F_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EDEE] text-[#8E4146] text-xs uppercase tracking-[0.22em] font-semibold mb-4 border border-[#C27B7F]/30 shadow-xs">
            <Crown className="w-3.5 h-3.5" />
            <span>The Gulaab Ghar Ethos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight tracking-tight">
            Designed Around <span className="italic text-[#8E4146]">Your Story.</span>
          </h2>
          <RoyalDivider />
          <p className="text-base sm:text-lg text-[#5A4B48] font-light leading-relaxed">
            At Gulaab Ghar, we believe no two love stories are identical. We create bespoke
            celebrations combining thoughtful planning, elegant décor, and the cultural character of
            Rajasthan. Every element is orchestrated so your celebration feels intimate, regal, and
            effortless.
          </p>
        </motion.div>

        {/* Editorial Layout: Dual Image Spread with Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Architectural Photo with arched top */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-t-[140px] border border-[#C5A880]/35 shadow-lg bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"
                alt="Gulaab Ghar luxury floral mandap setup in Jaipur"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221C1B]/70 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  Heritage Scenography
                </span>
                <p className="font-serif text-lg sm:text-xl text-[#FAF7F2] font-medium mt-0.5">
                  Fresh Desi Gulab & Traditional Brass Mandaps
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#C5A880]/50 shadow-xl max-w-[240px] backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-[#8E4146] mb-1.5">
                <Flower2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Bespoke Décor</span>
              </div>
              <p className="text-[11px] text-[#5A4B48] leading-tight">
                Authentic Jaipur rose accents, royal palace mandaps, and ambient illumination.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Pillars & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 lg:pl-4"
          >
            <div className="bg-[#FCFAF7] p-8 sm:p-10 rounded-2xl border border-[#EFE6DC] shadow-xs hover:border-[#C5A880]/40 transition-colors">
              <blockquote className="font-serif text-xl sm:text-2xl italic text-[#2D2422] leading-snug mb-6 font-light">
                “True luxury in a wedding isn’t about excess—it is the harmony of fragrant flowers,
                poetic lighting, heartfelt hospitality, and stress-free moments with the people you
                love.”
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1.5px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#8E4146] font-semibold">
                  The Gulaab Ghar Philosophy
                </span>
              </div>
            </div>

            {/* Three Value Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white/80 border border-[#EFE6DC] hover:border-[#C5A880]/60 transition-all shadow-xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F7EDEE] flex items-center justify-center text-[#8E4146] mb-3">
                  <Crown className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2D2422] mb-1">
                  Royal Heritage
                </h3>
                <p className="text-xs text-[#5A4B48] leading-relaxed">
                  Deep reverence for Rajasthani architecture, craftsmanship, and hospitality.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white/80 border border-[#EFE6DC] hover:border-[#C5A880]/60 transition-all shadow-xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F7EDEE] flex items-center justify-center text-[#8E4146] mb-3">
                  <Flower2 className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2D2422] mb-1">
                  Artisanal Botanicals
                </h3>
                <p className="text-xs text-[#5A4B48] leading-relaxed">
                  Carefully sourced fresh local Jaipur roses, mogra, and imported floral blooms.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white/80 border border-[#EFE6DC] hover:border-[#C5A880]/60 transition-all shadow-xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F7EDEE] flex items-center justify-center text-[#8E4146] mb-3">
                  <HeartHandshake className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2D2422] mb-1">
                  Seamless Harmony
                </h3>
                <p className="text-xs text-[#5A4B48] leading-relaxed">
                  Rituals, guest movement, and production flowing in effortless sync.
                </p>
              </motion.div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8E4146] hover:text-[#2D2422] transition-colors group cursor-pointer"
              >
                <span>Discover Our Complete Services</span>
                <span className="w-6 h-[1.5px] bg-[#8E4146] group-hover:w-12 transition-all duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

