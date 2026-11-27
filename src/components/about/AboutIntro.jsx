import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AboutIntro = ({ copy }) => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about-intro"
      className="relative w-full bg-ivory text-obsidian pt-12 sm:pt-16 pb-8 sm:pb-10 overflow-hidden selection:bg-signature-red selection:text-purewhite"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Enormous Left Headline + Two Editorial Text Columns on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 border-b border-obsidian/15">
          
          {/* Left Headline */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="block font-space text-xs font-bold uppercase tracking-[0.28em] text-obsidian/55 mb-3">
              {copy.eyebrow}
            </span>

            <h2 className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-semibold uppercase tracking-tight leading-[0.9] text-obsidian">
              <span className="block">{copy.headline1}</span>
              <span className="block">{copy.headline2}</span>
              <span className="block italic text-signature-red font-bold pt-1">
                {copy.headline3}
              </span>
            </h2>
          </motion.div>

          {/* Right: Two Magazine Text Columns */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="lg:col-span-7 lg:pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
          >
            <p className="font-inter text-base sm:text-[17px] text-obsidian/85 leading-relaxed font-normal border-t border-obsidian/15 pt-4">
              {copy.col1}
            </p>
            <p className="font-inter text-base sm:text-[17px] text-obsidian/75 leading-relaxed font-normal border-t border-obsidian/15 pt-4">
              {copy.col2}
            </p>
          </motion.div>
        </div>

        {/* Middle: Narrow Backstage Photographic Strip */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85 }}
          className="py-6 sm:py-8"
        >
          <div className="relative w-full h-36 sm:h-48 md:h-56 overflow-hidden bg-charcoal-dark">
            <img
              src="/about/intro-strip.jpg"
              alt={copy.stripAlt}
              className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/55 via-transparent to-obsidian/35 pointer-events-none" />
            <div className="absolute bottom-3 left-4 rtl:left-auto rtl:right-4 flex items-center space-x-2 rtl:space-x-reverse text-[10px] font-mono uppercase tracking-[0.25em] text-purewhite bg-obsidian/75 px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-signature-red" />
              <span>{copy.stripCaption}</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Typographic Statement */}
        <div className="pt-3 border-t border-obsidian/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-space text-xs sm:text-sm font-bold uppercase tracking-[0.34em] text-obsidian">
            {copy.mantra}
          </p>
          <span className="h-[1px] w-16 bg-signature-red hidden sm:inline-block" />
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;

