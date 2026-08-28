import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  MessageCircle,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  Users,
  IndianRupee,
  FileText,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { InquiryFormData, SavedInquiry } from '../types';
import { siteConfig } from '../config/siteConfig';
import { getInquiryWhatsAppUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { RoyalDivider } from './RoyalDivider';

interface InquirySectionProps {
  prefilledData?: Partial<InquiryFormData>;
  onClearPrefilled?: () => void;
}

const STORAGE_KEY = 'gulaab_ghar_inquiries_v1';

export const InquirySection: React.FC<InquirySectionProps> = ({
  prefilledData,
  onClearPrefilled,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    eventType: 'Complete Multi-Day Wedding',
    eventDate: '',
    cityVenue: 'Jaipur, Rajasthan',
    guestCount: '100 - 300 guests',
    approximateBudget: '₹15 Lakhs – ₹35 Lakhs',
    requirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<SavedInquiry | null>(null);

  // Sync prefilled data from Vision Curator or Service click
  useEffect(() => {
    if (prefilledData && Object.keys(prefilledData).length > 0) {
      setFormData((prev) => ({
        ...prev,
        ...prefilledData,
      }));
    }
  }, [prefilledData]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().length < 8) {
      errs.phoneNumber = 'Please enter a valid contact number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.cityVenue.trim()) {
      errs.cityVenue = 'Please indicate your preferred city or venue';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry: SavedInquiry = {
        ...formData,
        id: 'GG-' + Math.floor(100000 + Math.random() * 900000),
        submittedAt: new Date().toISOString(),
        status: 'Received',
      };

      // Save to localStorage securely
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        localStorage.setItem(STORAGE_KEY, JSON.stringify([newInquiry, ...existing]));
      } catch (err) {
        console.error('Error saving to storage', err);
      }

      setSubmittedInquiry(newInquiry);
      setIsSubmitting(false);
      if (onClearPrefilled) onClearPrefilled();
    }, 600);
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      eventType: 'Complete Multi-Day Wedding',
      eventDate: '',
      cityVenue: 'Jaipur, Rajasthan',
      guestCount: '100 - 300 guests',
      approximateBudget: '₹15 Lakhs – ₹35 Lakhs',
      requirements: '',
    });
    setErrors({});
  };

  return (
    <section
      id="inquiry-section"
      className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Event Inquiry and Planning Form"
    >
      {/* Background Subtle Motifs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EDEE] text-[#8E4146] text-xs uppercase tracking-[0.22em] font-semibold mb-3 border border-[#C27B7F]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
            Begin Planning Your <br />
            <span className="italic text-[#8E4146]">Celebration</span>
          </h2>
          <RoyalDivider />
          <p className="text-sm sm:text-base text-[#5A4B48] font-light leading-relaxed">
            Share your celebration dreams with our Jaipur team. We will review your vision and
            connect with you for a personalized concept consultation.
          </p>
        </motion.div>

        {/* Form Card or Success State */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#FCFAF7] rounded-3xl border border-[#C5A880]/40 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12"
        >
          {submittedInquiry ? (
            /* Success State */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-[#F7EDEE] text-[#8E4146] rounded-full flex items-center justify-center mx-auto border border-[#C27B7F]/40 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="max-w-xl mx-auto">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
                  Inquiry Reference: {submittedInquiry.id}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#2D2422] mb-3">
                  Thank You, {submittedInquiry.fullName}
                </h3>
                <p className="text-sm sm:text-base text-[#5A4B48] leading-relaxed">
                  Your celebration vision has been received with warmth. A senior planner from our
                  Jaipur studio will reach out via phone & WhatsApp within 24 hours.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-lg mx-auto bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE6DC] text-left text-xs sm:text-sm text-[#362C2A] space-y-2">
                <div className="flex justify-between py-1 border-b border-[#EFE6DC]">
                  <span className="text-[#6B5A57]">Event Type:</span>
                  <span className="font-medium">{submittedInquiry.eventType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFE6DC]">
                  <span className="text-[#6B5A57]">Location:</span>
                  <span className="font-medium">{submittedInquiry.cityVenue}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFE6DC]">
                  <span className="text-[#6B5A57]">Anticipated Date:</span>
                  <span className="font-medium">{submittedInquiry.eventDate || 'To be decided'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFE6DC]">
                  <span className="text-[#6B5A57]">Guest Count:</span>
                  <span className="font-medium">{submittedInquiry.guestCount}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6B5A57]">Budget Tier:</span>
                  <span className="font-medium">{submittedInquiry.approximateBudget}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={getInquiryWhatsAppUrl(submittedInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#128C7E] hover:bg-[#0e7266] text-white rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details Instantly on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-[#EFE6DC] text-[#4A3E3B] rounded-full text-xs font-semibold uppercase tracking-wider border border-[#D8C3A5] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} id="wedding-inquiry-form" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="inquiry-fullName"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-[#8E4146]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="inquiry-fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ananya Rathore"
                    className={`w-full p-3.5 rounded-xl bg-white border text-sm text-[#2D2422] placeholder:text-[#9C8E8B] focus:outline-none focus:ring-1 focus:ring-[#8E4146] transition-colors ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#EFE6DC]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="inquiry-phoneNumber"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8E4146]" />
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="inquiry-phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full p-3.5 rounded-xl bg-white border text-sm text-[#2D2422] placeholder:text-[#9C8E8B] focus:outline-none focus:ring-1 focus:ring-[#8E4146] transition-colors ${
                      errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-[#EFE6DC]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#8E4146]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@example.com"
                    className={`w-full p-3.5 rounded-xl bg-white border text-sm text-[#2D2422] placeholder:text-[#9C8E8B] focus:outline-none focus:ring-1 focus:ring-[#8E4146] transition-colors ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#EFE6DC]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Event Type */}
                <div>
                  <label
                    htmlFor="inquiry-eventType"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8E4146]" />
                    Event Type
                  </label>
                  <select
                    id="inquiry-eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-white border border-[#EFE6DC] text-sm text-[#2D2422] focus:outline-none focus:ring-1 focus:ring-[#8E4146]"
                  >
                    <option value="Complete Multi-Day Wedding">Complete Multi-Day Wedding</option>
                    <option value="Destination Wedding in Rajasthan">Destination Wedding in Rajasthan</option>
                    <option value="Wedding Décor & Styling">Wedding Décor & Styling</option>
                    <option value="Engagements & Pre-Wedding Events">Engagements & Pre-Wedding Events</option>
                    <option value="Floral & Lighting Design">Floral & Lighting Design</option>
                    <option value="Birthday & Private Celebrations">Birthday & Private Celebrations</option>
                    <option value="Corporate Events">Corporate Events</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label
                    htmlFor="inquiry-eventDate"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#8E4146]" />
                    Anticipated Event Date
                  </label>
                  <input
                    type="date"
                    id="inquiry-eventDate"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-white border border-[#EFE6DC] text-sm text-[#2D2422] focus:outline-none focus:ring-1 focus:ring-[#8E4146]"
                  />
                </div>

                {/* City / Venue */}
                <div>
                  <label
                    htmlFor="inquiry-cityVenue"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#8E4146]" />
                    City / Preferred Venue *
                  </label>
                  <input
                    type="text"
                    id="inquiry-cityVenue"
                    value={formData.cityVenue}
                    onChange={(e) => setFormData({ ...formData, cityVenue: e.target.value })}
                    placeholder="e.g. Jaipur Palace / Udaipur Resort"
                    className={`w-full p-3.5 rounded-xl bg-white border text-sm text-[#2D2422] placeholder:text-[#9C8E8B] focus:outline-none focus:ring-1 focus:ring-[#8E4146] transition-colors ${
                      errors.cityVenue ? 'border-red-400 bg-red-50/20' : 'border-[#EFE6DC]'
                    }`}
                  />
                  {errors.cityVenue && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.cityVenue}
                    </span>
                  )}
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="inquiry-guestCount"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <Users className="w-3.5 h-3.5 text-[#8E4146]" />
                    Estimated Guest Count
                  </label>
                  <select
                    id="inquiry-guestCount"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-white border border-[#EFE6DC] text-sm text-[#2D2422] focus:outline-none focus:ring-1 focus:ring-[#8E4146]"
                  >
                    <option value="Intimate (< 100 guests)">Intimate (&lt; 100 guests)</option>
                    <option value="100 - 300 guests">100 – 300 guests</option>
                    <option value="300 - 600 guests">300 – 600 guests</option>
                    <option value="600+ guests">600+ guests (Royal Scale)</option>
                  </select>
                </div>

                {/* Approximate Budget */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="inquiry-budget"
                    className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                  >
                    <IndianRupee className="w-3.5 h-3.5 text-[#8E4146]" />
                    Approximate Budget Range
                  </label>
                  <select
                    id="inquiry-budget"
                    value={formData.approximateBudget}
                    onChange={(e) =>
                      setFormData({ ...formData, approximateBudget: e.target.value })
                    }
                    className="w-full p-3.5 rounded-xl bg-white border border-[#EFE6DC] text-sm text-[#2D2422] focus:outline-none focus:ring-1 focus:ring-[#8E4146]"
                  >
                    <option value="₹5 Lakhs – ₹15 Lakhs (Décor / Select Functions)">
                      ₹5 Lakhs – ₹15 Lakhs (Décor / Select Functions)
                    </option>
                    <option value="₹15 Lakhs – ₹35 Lakhs (Multi-Function Décor & Styling)">
                      ₹15 Lakhs – ₹35 Lakhs (Multi-Function Décor & Styling)
                    </option>
                    <option value="₹35 Lakhs – ₹75 Lakhs (Complete Luxury Wedding Planning & Décor)">
                      ₹35 Lakhs – ₹75 Lakhs (Complete Luxury Wedding Planning & Décor)
                    </option>
                    <option value="₹75 Lakhs+ (Ultra-Luxury Royal Scale Celebration)">
                      ₹75 Lakhs+ (Ultra-Luxury Royal Scale Celebration)
                    </option>
                    <option value="Custom / Open for Discussion">Custom / Open for Discussion</option>
                  </select>
                </div>
              </div>

              {/* Message / Requirements */}
              <div>
                <label
                  htmlFor="inquiry-requirements"
                  className="block text-xs uppercase tracking-[0.14em] text-[#4A3E3B] font-semibold mb-2 flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#8E4146]" />
                  Message / Vision / Specific Requirements
                </label>
                <textarea
                  id="inquiry-requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Share details about your desired color tones, ritual sequences, heritage preferences, or specific services required..."
                  className="w-full p-3.5 rounded-xl bg-white border border-[#EFE6DC] text-sm text-[#2D2422] placeholder:text-[#9C8E8B] focus:outline-none focus:ring-1 focus:ring-[#8E4146]"
                />
              </div>

              {/* Form Action Submit */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EFE6DC]">
                <div className="text-xs text-[#6B5A57] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#8E4146]" />
                  <span>Responses typically shared within 12–24 hours</span>
                </div>

                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-[#8E4146] hover:bg-[#A3585D] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-[0.2em] shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Processing Vision...</span>
                  ) : (
                    <>
                      <span>Begin Planning</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
