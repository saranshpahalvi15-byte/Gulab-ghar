import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/weddingData';
import { RoyalDivider } from './RoyalDivider';

interface ProcessSectionProps {
  onStartPlanning: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartPlanning }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden"
      aria-label="Planning and Execution Process"
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
            <Clock className="w-3.5 h-3.5" />
            <span>Our 4-Stage Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2D2422] leading-tight">
            From Sacred Vision to <br />
            <span className="italic text-[#8E4146]">Royal Reality</span>
          </h2>
          <RoyalDivider />
          <p className="text-base text-[#5A4B48] font-light leading-relaxed">
            Our structured, calm process ensures complete transparency, aesthetic harmony, and zero
            stress throughout the planning phases leading up to the grand celebration.
          </p>
        </motion.div>

        {/* 4 Steps Grid with Step Indicators and Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <motion.div
                key={step.number}
                id={`process-step-${step.number}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative border ${
                  isSelected
                    ? 'bg-[#FAF7F2] border-[#8E4146] shadow-xl ring-1 ring-[#8E4146]/30'
                    : 'bg-[#FAF7F2]/80 border-[#EFE6DC] hover:border-[#C5A880] hover:bg-[#FAF7F2] shadow-xs'
                }`}
              >
                <div>
                  {/* Step Number with Royal Serif Styling */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-royal text-3xl sm:text-4xl text-[#8E4146] font-bold">
                      {step.number}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                        isSelected
                          ? 'bg-[#8E4146] text-[#FAF7F2]'
                          : 'bg-[#EFE6DC] text-[#4A3E3B]'
                      }`}
                    >
                      Stage {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#2D2422] font-semibold mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#C5A880] font-medium mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5A4B48] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#EFE6DC]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8E4146] font-semibold block mb-2">
                    Key Outcomes:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#362C2A]">
                        <Check className="w-3.5 h-3.5 text-[#8E4146] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onStartPlanning}
            className="px-9 py-4 bg-[#2D2422] hover:bg-[#8E4146] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.22em] rounded-full transition-all shadow-md hover:shadow-2xl inline-flex items-center gap-2.5 cursor-pointer border border-[#C5A880]/30"
          >
            <span>Begin Stage 01 With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
