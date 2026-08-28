import React from 'react';
import { motion } from 'motion/react';

interface RoyalDividerProps {
  className?: string;
}

export const RoyalDivider: React.FC<RoyalDividerProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center justify-center gap-3 my-6 ${className}`}
      aria-hidden="true"
    >
      <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/70 to-[#C5A880]" />
      <div className="flex items-center gap-1.5 text-[#C5A880]">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#8E4146] bg-[#C5A880]/40" />
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#8E4146]">
          <path d="M12 2C12 2 9 6 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 6 12 2 12 2Z" opacity="0.8" />
          <path d="M7 13C7 11.3431 5.65685 10 4 10C4 10 4 14 7 16C7 15 7 14 7 13Z" opacity="0.9" />
          <path d="M17 13C17 14 17 15 17 16C20 14 20 10 20 10C18.3431 10 17 11.3431 17 13Z" opacity="0.9" />
          <path d="M12 14C9.5 14 8 16 8 18.5C8 20.433 9.79086 22 12 22C14.2091 22 16 20.433 16 18.5C16 16 14.5 14 12 14Z" />
        </svg>
        <span className="w-1.5 h-1.5 rotate-45 border border-[#8E4146] bg-[#C5A880]/40" />
      </div>
      <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#C5A880]/70 to-[#C5A880]" />
    </motion.div>
  );
};
