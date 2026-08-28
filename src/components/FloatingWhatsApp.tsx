import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Proactively present the concierge pop-up once after 6s on first visit
  useEffect(() => {
    const hasPrompted = sessionStorage.getItem('gulaab_ghar_whatsapp_prompted');
    if (!hasPrompted) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('gulaab_ghar_whatsapp_prompted', 'true');
        setIsOpen(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const quickMessages = [
    'Wedding Planning Inquiry for Jaipur',
    'Destination Wedding in Udaipur/Jodhpur',
    'Mandap & Floral Décor Pricing',
    'Pre-Wedding / Mehendi Event Inquiry',
  ];

  return (
    <aside
      id="floating-whatsapp-widget"
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
    >
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#FAF7F2] rounded-2xl border border-[#C5A880]/50 shadow-2xl overflow-hidden animate-fadeIn text-[#2D2422]">
          {/* Header */}
          <div className="p-4 bg-[#2D2422] text-[#FAF7F2] flex items-center justify-between border-b border-[#C5A880]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wide">
                  {siteConfig.brand.name} Concierge
                </h4>
                <span className="text-[10px] text-[#C5A880] block">
                  Jaipur, Rajasthan • Active
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#FAF7F2]/70 hover:text-white transition-colors"
              aria-label="Close WhatsApp chat prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#FAF7F2]">
            <p className="text-xs text-[#5A4B48] leading-relaxed">
              Namaste! How may we assist you with your wedding or celebration in Rajasthan today?
            </p>

            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8E4146] block">
                Quick Topics:
              </span>
              {quickMessages.map((msg, i) => (
                <a
                  key={i}
                  href={getGeneralWhatsAppUrl(`Hi Gulaab Ghar, I have an inquiry regarding: "${msg}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-xl bg-white/90 border border-[#EFE6DC] hover:border-[#128C7E] text-[11px] text-[#2D2422] hover:text-[#128C7E] transition-all"
                >
                  {msg}
                </a>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-3 bg-[#F5EFEB] border-t border-[#EFE6DC]">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-[#128C7E] hover:bg-[#0e7266] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>Open WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Bubble Button */}
      <button
        type="button"
        id="floating-whatsapp-btn"
        onClick={handleToggleOpen}
        className="w-14 h-14 rounded-full bg-[#128C7E] hover:bg-[#0e7266] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative group border-2 border-white/80"
        aria-label="Open WhatsApp live inquiry"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8E4146] border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
          1
        </span>
      </button>
    </aside>
  );
};
