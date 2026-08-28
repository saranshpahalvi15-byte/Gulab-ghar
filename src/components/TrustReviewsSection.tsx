import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart, ShieldCheck, MapPin } from 'lucide-react';
import { testimonialsData } from '../data/weddingData';
import { RoyalDivider } from './RoyalDivider';

export const TrustReviewsSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden border-t border-[#EFE6DC]"
      aria-label="Client Appreciation and Experience"
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
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Words of Appreciation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
            Memories Cherished by <br />
            <span className="italic text-[#8E4146]">Our Families & Couples</span>
          </h2>
          <RoyalDivider />
          <p className="text-base text-[#5A4B48] font-light leading-relaxed">
            The trust our families place in us to shape their most important life milestones is our
            greatest honor. Here are real reflections from celebrations we’ve curated.
          </p>
        </motion.div>

        {/* Testimonials 3-Card Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="bg-[#FCFAF7] p-8 sm:p-10 rounded-2xl border border-[#EFE6DC] shadow-xs hover:border-[#C5A880] transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-[#C5A880]/45 mb-4" />

              <div className="space-y-4 flex-1">
                {/* 5-star rating visual */}
                <div className="flex items-center gap-1 text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif text-base sm:text-lg text-[#2D2422] italic leading-relaxed font-light">
                  "{testi.quote}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFE6DC]">
                <div className="font-serif text-lg font-semibold text-[#2D2422]">
                  {testi.names}
                </div>
                <div className="text-xs text-[#8E4146] font-medium mt-0.5">
                  {testi.event}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#6B5A57] mt-1">
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  <span>{testi.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authentic Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#F5EFEB]/60 border border-[#EFE6DC]"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8E4146] mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Honest & Verified Representation</span>
          </div>
          <p className="text-xs text-[#5A4B48] leading-relaxed">
            We value genuine relationships over inflated numbers. All visual decor showcases and
            testimonials presented reflect authentic work designed and coordinated for our patrons in
            Jaipur and Rajasthan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
