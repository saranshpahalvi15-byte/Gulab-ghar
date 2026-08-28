import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, MessageCircle, Crown, Heart } from 'lucide-react';
import { visionOptions } from '../data/weddingData';
import { siteConfig } from '../config/siteConfig';

interface VisionEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToInquiry: (visionSummary: {
    eventType: string;
    cityVenue: string;
    guestCount: string;
    approximateBudget: string;
    requirements: string;
  }) => void;
}

export const VisionEstimatorModal: React.FC<VisionEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToInquiry,
}) => {
  const [eventType, setEventType] = useState(visionOptions.eventTypes[0]);
  const [location, setLocation] = useState(visionOptions.locations[0]);
  const [guestCount, setGuestCount] = useState(visionOptions.guestRanges[1]);
  const [decorVibe, setDecorVibe] = useState(visionOptions.decorVibes[0]);
  const [budgetRange, setBudgetRange] = useState(visionOptions.budgetRanges[1]);

  if (!isOpen) return null;

  const handleApply = () => {
    const requirements = `Curated Vision Concept:
- Aesthetic & Vibe: ${decorVibe}
- Location Preference: ${location}
- Scale: ${guestCount}
- Selected Range: ${budgetRange}`;

    onApplyToInquiry({
      eventType,
      cityVenue: location,
      guestCount,
      approximateBudget: budgetRange,
      requirements,
    });
    onClose();
  };

  const getWhatsAppCuratedMessage = () => {
    const text = `Hi Gulaab Ghar, I just curated my celebration vision on your website! 🌸
- *Event:* ${eventType}
- *Location:* ${location}
- *Guests:* ${guestCount}
- *Decor Vibe:* ${decorVibe}
- *Budget Range:* ${budgetRange}
I'd love to discuss how Gulaab Ghar can bring this royal vision to life in Rajasthan.`;

    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#221C1B]/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vision-modal-title"
    >
      <div
        className="bg-[#FAF7F2] w-full max-w-3xl rounded-3xl border border-[#C5A880]/50 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#2D2422] text-[#FAF7F2] relative flex items-center justify-between border-b border-[#C5A880]/30">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/15 text-[#C5A880] text-[10px] uppercase font-bold tracking-widest mb-2 border border-[#C5A880]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Vision Curator</span>
            </div>
            <h3 id="vision-modal-title" className="font-serif text-2xl sm:text-3xl text-[#FAF7F2]">
              Design Your Royal Celebration
            </h3>
            <p className="text-xs text-[#EFE6DC] font-light mt-1">
              Select your celebration preferences to generate a tailored brief.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/25 text-[#FAF7F2] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#2D2422]">
          {/* Step 1: Event Type */}
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-[#8E4146] font-semibold mb-2.5">
              1. Type of Celebration
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {visionOptions.eventTypes.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setEventType(item)}
                  className={`p-3 text-left rounded-xl text-xs font-medium transition-all flex items-center justify-between border cursor-pointer ${
                    eventType === item
                      ? 'bg-[#8E4146] text-[#FAF7F2] border-[#8E4146] shadow-xs'
                      : 'bg-white/80 text-[#362C2A] border-[#EFE6DC] hover:border-[#C5A880]'
                  }`}
                >
                  <span>{item}</span>
                  {eventType === item && <Check className="w-4 h-4 text-[#FAF7F2]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Location / Venue */}
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-[#8E4146] font-semibold mb-2.5">
              2. Dream Location in Rajasthan / India
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {visionOptions.locations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocation(loc)}
                  className={`p-3 text-left rounded-xl text-xs font-medium transition-all flex items-center justify-between border cursor-pointer ${
                    location === loc
                      ? 'bg-[#8E4146] text-[#FAF7F2] border-[#8E4146] shadow-xs'
                      : 'bg-white/80 text-[#362C2A] border-[#EFE6DC] hover:border-[#C5A880]'
                  }`}
                >
                  <span>{loc}</span>
                  {location === loc && <Check className="w-4 h-4 text-[#FAF7F2]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Decor Aesthetic & Color Story */}
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-[#8E4146] font-semibold mb-2.5">
              3. Desired Scenography & Floral Mood
            </label>
            <div className="space-y-2">
              {visionOptions.decorVibes.map((vibe) => (
                <button
                  key={vibe}
                  type="button"
                  onClick={() => setDecorVibe(vibe)}
                  className={`w-full p-3 text-left rounded-xl text-xs font-medium transition-all flex items-center justify-between border cursor-pointer ${
                    decorVibe === vibe
                      ? 'bg-[#2D2422] text-[#FAF7F2] border-[#2D2422] shadow-xs'
                      : 'bg-white/80 text-[#362C2A] border-[#EFE6DC] hover:border-[#C5A880]'
                  }`}
                >
                  <span>{vibe}</span>
                  {decorVibe === vibe && <Check className="w-4 h-4 text-[#C5A880]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Scale & Budget Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-[#8E4146] font-semibold mb-2">
                4. Anticipated Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-[#EFE6DC] text-xs text-[#2D2422] focus:outline-none focus:ring-1 focus:ring-[#8E4146]"
              >
                {visionOptions.guestRanges.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-[#8E4146] font-semibold mb-2">
                5. Approximate Budget Tier
              </label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-[#EFE6DC] text-xs text-[#2D2422] focus:outline-none focus:ring-1 focus:ring-[#8E4146]"
              >
                {visionOptions.budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F5EFEB] border-t border-[#EFE6DC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={getWhatsAppCuratedMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#128C7E]/40 text-[#128C7E] hover:bg-[#128C7E]/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Vision via WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleApply}
            className="w-full sm:w-auto px-6 py-3 bg-[#8E4146] hover:bg-[#A3585D] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <span>Transfer to Inquiry Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
