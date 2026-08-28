import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ServicesSection } from './components/ServicesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyGulaabGhar } from './components/WhyGulaabGhar';
import { TrustReviewsSection } from './components/TrustReviewsSection';
import { ProcessSection } from './components/ProcessSection';
import { InquirySection } from './components/InquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VisionEstimatorModal } from './components/VisionEstimatorModal';
import { InquiryFormData } from './types';

export default function App() {
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);
  const [prefilledInquiryData, setPrefilledInquiryData] = useState<Partial<InquiryFormData>>({});

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPrefilledInquiryData({
      eventType: serviceTitle,
      requirements: `Inquiring for: ${serviceTitle} service package by Gulaab Ghar.`,
    });
    scrollToInquiry();
  };

  const handleSelectLookForInquiry = (lookTitle: string) => {
    setPrefilledInquiryData({
      requirements: `Interested in recreating the aesthetic of "${lookTitle}" showcased in the Gulaab Ghar portfolio.`,
    });
    scrollToInquiry();
  };

  const handlePlanInDestination = (destinationCity: string) => {
    setPrefilledInquiryData({
      cityVenue: `${destinationCity}, Rajasthan`,
      requirements: `Planning a destination wedding/celebration in ${destinationCity}. Looking for venue scouting, decor design, and coordination.`,
    });
    scrollToInquiry();
  };

  const handleApplyVision = (visionSummary: {
    eventType: string;
    cityVenue: string;
    guestCount: string;
    approximateBudget: string;
    requirements: string;
  }) => {
    setPrefilledInquiryData(visionSummary);
    scrollToInquiry();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2422] flex flex-col selection:bg-[#E8C8C9] selection:text-[#362C2A]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5A880] via-[#8E4146] to-[#C5A880] z-[60] origin-left shadow-xs"
        style={{ scaleX }}
      />

      {/* Top Sticky Navigation */}
      <Navbar
        onOpenInquiry={scrollToInquiry}
        onOpenVisionEstimator={() => setIsVisionModalOpen(true)}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onPlanCelebration={scrollToInquiry}
          onExploreWork={scrollToPortfolio}
          onOpenVisionEstimator={() => setIsVisionModalOpen(true)}
        />

        {/* Brand Intro & Cultural Narrative */}
        <BrandIntro onExploreServices={scrollToServices} />

        {/* Services Showcase */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Destination Rajasthan Focus */}
        <DestinationsSection onPlanInDestination={handlePlanInDestination} />

        {/* Visual Portfolio & Scenography Gallery */}
        <PortfolioSection onSelectLookForInquiry={handleSelectLookForInquiry} />

        {/* Why Gulaab Ghar Differentiators */}
        <WhyGulaabGhar />

        {/* Authentic Client Reflections */}
        <TrustReviewsSection />

        {/* 4-Step Process */}
        <ProcessSection onStartPlanning={scrollToInquiry} />

        {/* Lead Generation & Inquiry Form */}
        <InquirySection
          prefilledData={prefilledInquiryData}
          onClearPrefilled={() => setPrefilledInquiryData({})}
        />

        {/* Contact & Jaipur Studio Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onPlanCelebration={scrollToInquiry} />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Vision & Budget Estimator Modal */}
      <VisionEstimatorModal
        isOpen={isVisionModalOpen}
        onClose={() => setIsVisionModalOpen(false)}
        onApplyToInquiry={handleApplyVision}
      />
    </div>
  );
}
