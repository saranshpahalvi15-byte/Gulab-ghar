import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  ArrowUp,
  Heart,
  Crown,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onPlanCelebration: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPlanCelebration }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#221C1B] text-[#FAF7F2] relative overflow-hidden pt-20 pb-12 border-t border-[#C5A880]/30"
      aria-label="Footer"
    >
      {/* Decorative Jali watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tier: Brand Essence & Main Quick Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#FAF7F2]/15">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A880]/60 bg-[#FAF7F2]/10 flex items-center justify-center text-[#E8C8C9]">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-royal text-2xl font-bold tracking-[0.16em] text-[#FAF7F2]">
                  {siteConfig.brand.name}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] block">
                  {siteConfig.brand.subtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EFE6DC]/80 font-light leading-relaxed max-w-sm">
              {siteConfig.brand.shortBio}
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-medium block mb-1">
                Studio Location:
              </span>
              <p className="text-xs text-[#FAF7F2]/90 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{siteConfig.contact.address}</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#EFE6DC]/80 font-light">
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">
                  Weddings & Services
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#C5A880] transition-colors">
                  Destination Rajasthan
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#C5A880] transition-colors">
                  Visual Portfolio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#C5A880] transition-colors">
                  Why Gulaab Ghar
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C5A880] transition-colors">
                  Our 4-Stage Process
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C5A880] transition-colors">
                  Client Reflections
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A880] transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Index */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#EFE6DC]/80 font-light">
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">
                  Wedding Planning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">
                  Destination Weddings
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">
                  Mandap Décor & Styling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">
                  Mehendi & Sangeet
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">
                  Floral & Lighting Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">
                  Private Celebrations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Consultation Action */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Connect Directly
            </h4>

            <div className="space-y-2 text-xs text-[#EFE6DC]">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-[#C5A880] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" />
                <span>WhatsApp Concierge</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#C5A880] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C5A880] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{siteConfig.contact.instagramHandle}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                id="footer-plan-cta"
                onClick={onPlanCelebration}
                className="w-full py-3 bg-[#8E4146] hover:bg-[#A3585D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.16em] rounded-full transition-colors cursor-pointer shadow-md"
              >
                Plan Your Celebration
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE6DC]/60 font-light">
          <div>
            <p>
              © {new Date().getFullYear()} {siteConfig.brand.legalName}. All rights reserved.
            </p>
            <p className="text-[11px] text-[#FAF7F2]/40 mt-0.5">
              Event Decorators & Wedding Planners • C-Scheme, Jaipur, Rajasthan
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#FAF7F2]/20 hover:border-[#C5A880] text-xs text-[#EFE6DC] hover:text-[#C5A880] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
