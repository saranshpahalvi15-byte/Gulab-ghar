import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Crown,
  Eye,
  CalendarCheck,
  Compass,
  Palette,
  CheckCircle,
} from 'lucide-react';
import { differentiators } from '../data/weddingData';
import { RoyalDivider } from './RoyalDivider';

export const WhyGulaabGhar: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'bespoke-concepts': <Palette className="w-5 h-5" />,
    'attention-to-detail': <Eye className="w-5 h-5" />,
    'end-to-end-planning': <CalendarCheck className="w-5 h-5" />,
    'premium-decor-execution': <Sparkles className="w-5 h-5" />,
    'rajasthan-expertise': <Crown className="w-5 h-5" />,
    'destination-experience': <Compass className="w-5 h-5" />,
  };

  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Why Choose Gulaab Ghar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>The Gulaab Ghar Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
            Every Detail, <br />
            <span className="italic text-[#8E4146]">Thoughtfully Orchestrated.</span>
          </h2>
          <RoyalDivider />
          <p className="text-base text-[#5A4B48] font-light leading-relaxed">
            We merge the sacred soul of Rajasthani hospitality with contemporary design sensibilities,
            ensuring your wedding is an effortless celebration of love and legacy.
          </p>
        </motion.div>

        {/* 6 Differentiators Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.id}
              id={`diff-card-${diff.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DC] hover:border-[#C5A880] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7EDEE] group-hover:bg-[#8E4146] group-hover:text-[#FAF7F2] text-[#8E4146] flex items-center justify-center transition-colors duration-300 shadow-xs">
                    {iconMap[diff.id] || <Sparkles className="w-5 h-5" />}
                  </div>
                  <span className="font-serif text-2xl text-[#C5A880] font-light">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#2D2422] font-semibold mb-3 group-hover:text-[#8E4146] transition-colors">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A4B48] leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFE6DC] flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#8E4146] font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Gulaab Ghar Signature Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heritage Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#F5EFEB] border border-[#C5A880]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="font-serif text-2xl text-[#2D2422] font-light mb-2">
              Based in Jaipur, Rajasthan • Serving Destinations Across India
            </h4>
            <p className="text-xs sm:text-sm text-[#5A4B48] leading-relaxed">
              Our local presence allows us direct access to Rajasthan’s finest floral mandis,
              heritage artisans, folk musicians, and premier palace venues without intermediaries.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="px-7 py-3.5 bg-[#2D2422] hover:bg-[#8E4146] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.2em] rounded-full transition-all shadow-md hover:shadow-xl inline-block"
            >
              Connect with Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
