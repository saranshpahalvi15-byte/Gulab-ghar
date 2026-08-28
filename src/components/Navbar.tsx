import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenVisionEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenVisionEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Weddings', href: '#services' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Gulaab Ghar', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-gold-nav shadow-sm py-3'
          : 'bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Royal Title */}
          <a
            href="#"
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Custom Floral / Royal Crest Icon */}
            <div className="w-10 h-10 rounded-full border border-[#C5A880]/60 bg-[#F5EFEB] flex items-center justify-center text-[#A3585D] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                <path d="M12 2C12 2 9 6 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 6 12 2 12 2Z" opacity="0.8" />
                <path d="M7 13C7 11.3431 5.65685 10 4 10C4 10 4 14 7 16C7 15 7 14 7 13Z" opacity="0.9" />
                <path d="M17 13C17 14 17 15 17 16C20 14 20 10 20 10C18.3431 10 17 11.3431 17 13Z" opacity="0.9" />
                <path d="M12 14C9.5 14 8 16 8 18.5C8 20.433 9.79086 22 12 22C14.2091 22 16 20.433 16 18.5C16 16 14.5 14 12 14Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-royal text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#2D2422] leading-none">
                GULAAB GHAR
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#8E4146] font-medium mt-1">
                Jaipur • Wedding Planners
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.16em] text-[#4A3E3B] hover:text-[#A3585D] transition-colors font-medium relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Vision Estimator Trigger */}
            <button
              type="button"
              id="nav-vision-estimator-btn"
              onClick={onOpenVisionEstimator}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#8E4146] bg-[#F7EDEE] hover:bg-[#E8C8C9]/70 rounded-full border border-[#C27B7F]/30 transition-all shadow-xs cursor-pointer"
              title="Curate celebration vision and budget"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8E4146]" />
              <span className="tracking-wide">Vision Curate</span>
            </button>

            {/* Quick WhatsApp Direct */}
            <a
              href={getGeneralWhatsAppUrl()}
              id="nav-quick-whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#4A3E3B] hover:text-[#128C7E] transition-colors rounded-full border border-[#D8C3A5]/40 hover:border-[#128C7E]/40 bg-white/70"
              title="Chat with Gulaab Ghar on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Primary Plan Your Celebration CTA */}
            <button
              type="button"
              id="nav-plan-celebration-cta"
              onClick={onOpenInquiry}
              className="px-5 py-2.5 bg-[#2D2422] hover:bg-[#8E4146] text-[#FAF7F2] text-xs font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
            >
              Plan Your Celebration
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              id="nav-mobile-inquiry-btn"
              onClick={onOpenInquiry}
              className="px-3 py-1.5 bg-[#8E4146] text-[#FAF7F2] text-[11px] font-medium tracking-wider uppercase rounded-full"
            >
              Inquire
            </button>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2D2422] hover:text-[#8E4146] rounded-md focus:outline-none"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF7F2] border-b border-[#C5A880]/30 shadow-xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#EFE6DC]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E4146] font-semibold">
                Explore Gulaab Ghar
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between text-base font-serif text-[#2D2422] hover:text-[#8E4146] py-1 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880]" />
              </a>
            ))}

            <div className="pt-4 border-t border-[#EFE6DC] space-y-3">
              <button
                type="button"
                id="mobile-nav-vision-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisionEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F7EDEE] text-[#8E4146] rounded-full border border-[#C27B7F]/40 font-medium text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Curate Your Vision & Budget</span>
              </button>

              <button
                type="button"
                id="mobile-nav-inquiry-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 bg-[#2D2422] text-[#FAF7F2] rounded-full uppercase tracking-widest text-xs font-semibold shadow-sm"
              >
                Plan Your Celebration
              </button>

              <div className="flex items-center justify-end pt-2 text-xs text-[#6B5A57]">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#128C7E] font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
