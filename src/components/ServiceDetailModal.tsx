import React from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { siteConfig } from '../config/siteConfig';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onPlanForService?: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#221C1B]/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="bg-[#FAF7F2] w-full max-w-3xl rounded-2xl border border-[#C5A880]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#221C1B]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#221C1B]/90 via-[#221C1B]/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF7F2]/20 hover:bg-[#FAF7F2]/40 text-[#FAF7F2] backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
            <span className="inline-block px-3 py-1 bg-[#8E4146] text-[#FAF7F2] text-[10px] uppercase font-semibold tracking-widest rounded-full mb-2">
              {service.tag}
            </span>
            <h3 id="service-modal-title" className="font-serif text-2xl sm:text-4xl text-[#FAF7F2]">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#EFE6DC] font-light mt-1">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#2D2422]">
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8E4146] font-semibold mb-2">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-[#4A3E3B] leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          {/* Key Deliverables & Inclusions */}
          <div className="bg-[#FCFAF7] p-5 rounded-xl border border-[#EFE6DC]">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8E4146] font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              What We Deliver
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#362C2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#8E4146] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For note */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F7EDEE]/60 border border-[#C27B7F]/20 text-xs sm:text-sm text-[#5A4B48]">
            <ShieldCheck className="w-5 h-5 text-[#8E4146] shrink-0" />
            <div>
              <strong className="font-medium text-[#2D2422]">Recommended for: </strong>
              {service.idealFor}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F5EFEB] border-t border-[#EFE6DC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={getServiceWhatsAppUrl(service.title, service.subtitle)}
            target="_blank"
            rel="noopener noreferrer"
            id="modal-whatsapp-inquiry-btn"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#128C7E]/40 text-[#128C7E] hover:bg-[#128C7E]/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
            id="modal-direct-phone-inquiry-btn"
            className="w-full sm:w-auto px-7 py-3 bg-[#2D2422] hover:bg-[#8E4146] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            title={`Call directly: ${siteConfig.contact.phoneFormatted}`}
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>Inquire Directly for {service.title}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
