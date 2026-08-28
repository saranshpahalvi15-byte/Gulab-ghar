import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, MapPin, Sparkles, Building2, Check, ArrowRight } from 'lucide-react';
import { destinationsData } from '../data/weddingData';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { RoyalDivider } from './RoyalDivider';

interface DestinationsSectionProps {
  onPlanInDestination: (destinationCity: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onPlanInDestination,
}) => {
  const [activeCityId, setActiveCityId] = useState(destinationsData[0].id);

  const activeDestination =
    destinationsData.find((d) => d.id === activeCityId) || destinationsData[0];

  return (
    <section
      id="destinations"
      className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Destination Weddings Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EDEE] text-[#8E4146] text-xs uppercase tracking-[0.22em] font-semibold mb-4 border border-[#C27B7F]/30 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Destination Weddings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
            Rajasthan, <br />
            <span className="italic text-[#8E4146]">Reimagined for Your Celebration.</span>
          </h2>
          <RoyalDivider />
          <p className="text-base text-[#5A4B48] font-light leading-relaxed">
            From the pink sandstone facades of Jaipur and shimmering island palaces of Udaipur to
            majestic desert fortresses in Jodhpur—we orchestrate seamless destination celebrations
            across Rajasthan and pan-India locations.
          </p>
        </motion.div>

        {/* City Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {destinationsData.map((dest) => (
            <motion.button
              key={dest.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              id={`destination-tab-${dest.id}`}
              onClick={() => setActiveCityId(dest.id)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer flex items-center gap-2 relative ${
                activeCityId === dest.id
                  ? 'bg-[#8E4146] text-[#FAF7F2] shadow-md'
                  : 'bg-[#FCFAF7] text-[#4A3E3B] border border-[#EFE6DC] hover:border-[#C5A880]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{dest.city}</span>
            </motion.button>
          ))}

          {/* Pan-India Badge */}
          <div className="px-5 py-3 rounded-full bg-[#F5EFEB] text-[#8E4146] border border-[#C5A880]/40 text-xs font-semibold tracking-wider uppercase">
            <span>+ Pan-India Locations</span>
          </div>
        </div>

        {/* Dynamic Destination Showcase Card with Smooth Tab Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#FCFAF7] rounded-3xl border border-[#C5A880]/40 shadow-xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDestination.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Palace / Destination Photography */}
              <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] bg-[#221C1B]">
                <img
                  src={activeDestination.image}
                  alt={`Destination wedding in ${activeDestination.city} by Gulaab Ghar`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#221C1B]/85 via-transparent to-transparent" />

                {/* City Tag on Image */}
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                  <div className="flex items-center gap-2 text-[#C5A880] text-xs uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Signature Destination</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-light">
                    {activeDestination.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EFE6DC] font-light">
                    {activeDestination.tagline}
                  </p>
                </div>
              </div>

              {/* Right Column: Destination Details, Venues & Action */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8E4146] font-semibold block mb-2">
                      Atmosphere & Aesthetic
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-[#2D2422] italic leading-snug font-light">
                      "{activeDestination.vibe}"
                    </p>
                  </div>

                  <p className="text-sm text-[#5A4B48] leading-relaxed">
                    {activeDestination.description}
                  </p>

                  {/* Signature Venue Types */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#2D2422] font-semibold flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#8E4146]" />
                      Curated Venue Formats in {activeDestination.city}
                    </span>
                    <ul className="space-y-2">
                      {activeDestination.signatureVenues.map((venue, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-[#4A3E3B]">
                          <div className="w-4 h-4 rounded-full bg-[#F7EDEE] flex items-center justify-center text-[#8E4146] shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{venue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Destination Actions */}
                <div className="pt-6 border-t border-[#EFE6DC] flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    id={`plan-destination-${activeDestination.id}`}
                    onClick={() => onPlanInDestination(activeDestination.city)}
                    className="flex-1 px-6 py-3.5 bg-[#2D2422] hover:bg-[#8E4146] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-xl"
                  >
                    <span>Plan in {activeDestination.city}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getGeneralWhatsAppUrl(`Hi Gulaab Ghar team, I am planning a wedding in ${activeDestination.city} and would love to consult.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#FCFAF7] hover:bg-[#FAF7F2] border border-[#C5A880]/50 text-[#8E4146] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center transition-all"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
