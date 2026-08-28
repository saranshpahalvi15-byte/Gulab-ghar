import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flower2, ArrowUpRight, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/weddingData';
import { ServiceItem } from '../types';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden"
      aria-label="Services Section"
    >
      {/* Background Ambience */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-[#E8C8C9]/40 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#C5A880]/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#C5A880]/30"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#8E4146] text-xs uppercase tracking-[0.22em] font-semibold mb-3 border border-[#C27B7F]/30 shadow-xs">
              <Flower2 className="w-3.5 h-3.5" />
              <span>Bespoke Offerings</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
              Curated Event Décor & <br />
              <span className="italic text-[#8E4146]">Wedding Services</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#5A4B48] max-w-md font-light leading-relaxed">
            Every service is tailored with bespoke craftsmanship, respecting the sacred authenticity of
            your ceremonies and the architectural character of Rajasthan.
          </p>
        </motion.div>

        {/* Services Grid - Editorial Cards with staggered scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#FAF7F2] rounded-2xl border border-[#EFE6DC] hover:border-[#C5A880] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl flex flex-col"
            >
              {/* Image Container with Smooth Zoom */}
              <div
                onClick={() => setSelectedService(service)}
                className="relative h-64 sm:h-72 overflow-hidden bg-[#221C1B] cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={`${service.title} by Gulaab Ghar Jaipur`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#221C1B]/85 via-[#221C1B]/25 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#FAF7F2]/90 backdrop-blur-md text-[#8E4146] text-[10px] uppercase font-bold tracking-widest rounded-full shadow-xs border border-[#C5A880]/40">
                    {service.tag}
                  </span>
                </div>

                {/* Arrow Icon in Top Right */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#2D2422] flex items-center justify-center transition-transform duration-300 group-hover:bg-[#8E4146] group-hover:text-[#FAF7F2] group-hover:rotate-45 shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Subtitle on image base */}
                <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-medium block mb-0.5">
                    0{index + 1} • {service.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-normal leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[#5A4B48] leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Inclusions preview */}
                <div className="pt-3 border-t border-[#EFE6DC]">
                  <ul className="space-y-1.5 mb-4">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#362C2A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8E4146] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      id={`explore-service-btn-${service.id}`}
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold uppercase tracking-widest text-[#8E4146] hover:text-[#2D2422] transition-colors inline-flex items-center gap-1.5 group/btn cursor-pointer"
                    >
                      <span>Explore Service</span>
                      <span className="w-4 h-[1.5px] bg-[#8E4146] group-hover/btn:w-7 transition-all duration-300" />
                    </button>

                    <a
                      href={getServiceWhatsAppUrl(service.title, service.subtitle)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`inquire-whatsapp-${service.id}`}
                      className="text-xs font-semibold text-[#128C7E] hover:text-[#0e7266] flex items-center gap-1.5 transition-colors cursor-pointer bg-[#F5EFEB] hover:bg-[#EFE6DC] px-3 py-1.5 rounded-full border border-[#128C7E]/30 shadow-xs"
                      title={`Inquire directly on WhatsApp for ${service.title}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current/10" />
                      <span>Inquire Directly</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Deep Interactive Service Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
