import React from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Compass,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { RoyalDivider } from './RoyalDivider';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden"
      aria-label="Contact and Studio Location"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#8E4146] text-xs uppercase tracking-[0.22em] font-semibold mb-4 border border-[#C27B7F]/30 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Jaipur Studio & Consultations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
            Connect With Our <br />
            <span className="italic text-[#8E4146]">Creative Studio</span>
          </h2>
          <RoyalDivider />
          <p className="text-base text-[#5A4B48] font-light leading-relaxed">
            Whether you are hosting an intimate celebration in Jaipur or a multi-day destination wedding
            across Rajasthan, we look forward to hearing your vision.
          </p>
        </motion.div>

        {/* Contact Layout: Info Cards + Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Info Cards with Staggered Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            {/* Phone & WhatsApp Card */}
            <div className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-[#EFE6DC] shadow-xs space-y-4 hover:border-[#C5A880]/50 transition-colors">
              <div className="flex items-center gap-3 text-[#8E4146]">
                <div className="w-10 h-10 rounded-full bg-[#F7EDEE] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                    Direct Line & WhatsApp
                  </span>
                  <h3 className="font-serif text-xl text-[#2D2422] font-semibold">
                    {siteConfig.contact.phoneFormatted}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="px-5 py-2.5 bg-[#2D2422] text-[#FAF7F2] text-xs font-semibold rounded-full hover:bg-[#8E4146] transition-all shadow-xs"
                >
                  Call Direct
                </a>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#128C7E] text-[#FAF7F2] text-xs font-semibold rounded-full hover:bg-[#0e7266] transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-[#EFE6DC] shadow-xs hover:border-[#C5A880]/50 transition-colors">
              <div className="flex items-center gap-3 text-[#8E4146] mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F7EDEE] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                    Electronic Inquiries
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#2D2422] font-semibold">
                    {siteConfig.contact.email}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#5A4B48] leading-relaxed">
                For detailed bridal briefs, artist portfolios, or vendor collaborations.
              </p>
            </div>

            {/* Studio Address Card */}
            <div className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-[#EFE6DC] shadow-xs hover:border-[#C5A880]/50 transition-colors">
              <div className="flex items-start gap-3 text-[#8E4146] mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F7EDEE] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                    Jaipur Creative Studio
                  </span>
                  <p className="text-sm font-medium text-[#2D2422] mt-0.5">
                    {siteConfig.contact.address}
                  </p>
                  <span className="text-xs text-[#6B5A57] flex items-center gap-1.5 mt-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    {siteConfig.contact.officeHours}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions-btn"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E4146] hover:text-[#2D2422] transition-colors group"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Instagram / Social Card */}
            <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DC] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#EFE6DC] flex items-center justify-center text-[#8E4146]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#2D2422] block">
                    Follow Our Daily Stories
                  </span>
                  <span className="text-[11px] text-[#6B5A57]">
                    {siteConfig.contact.instagramHandle}
                  </span>
                </div>
              </div>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-[#FAF7F2] hover:bg-[#F7EDEE] text-[#8E4146] text-xs font-semibold rounded-full border border-[#C27B7F]/30 transition-colors"
              >
                View Feed
              </a>
            </div>
          </motion.div>

          {/* Right: Interactive Studio Map Card & Rajasthan Service Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl border border-[#C5A880]/40 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Map Frame */}
            <div className="relative h-72 sm:h-96 w-full bg-[#EFE6DC] overflow-hidden">
              <iframe
                title="Gulaab Ghar Studio Location Jaipur"
                src={siteConfig.contact.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Pin Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#2D2422]/90 backdrop-blur-md text-[#FAF7F2] px-4 py-2 rounded-xl shadow-md border border-[#C5A880]/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8E4146] animate-ping" />
                <span className="text-xs font-semibold">Gulaab Ghar • Adarsh Nagar, Jaipur</span>
              </div>
            </div>

            {/* Service Coverage Details */}
            <div className="p-6 sm:p-8 bg-[#FCFAF7] border-t border-[#EFE6DC]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8E4146] font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>Primary Operational Destinations</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A3E3B]">
                {siteConfig.serviceRegions.map((region, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
