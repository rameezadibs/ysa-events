import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AboutApproach = ({ copy }) => {
  const reducedMotion = useReducedMotion();

  // Different documentary frame proportions across the contact sheet
  const frameAspects = [
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-[16/10]',
    'aspect-[4/5]',
  ];

  const colSpans = [
    'lg:col-span-3 lg:mt-10',
    'lg:col-span-3',
    'lg:col-span-3 lg:mt-16',
    'lg:col-span-3 lg:mt-4',
  ];

  return (
    <section className="relative w-full bg-charcoal-dark text-purewhite pt-12 sm:pt-16 pb-14 sm:pb-20 border-t border-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-charcoal gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono uppercase tracking-[0.28em] text-signature-red mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-signature-red" />
              <span>{copy.eyebrow}</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-purewhite leading-none">
              {copy.headline}
            </h2>
          </div>

          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ivory/45">
            {copy.sheetCode}
          </span>
        </div>

        {/* Contact-Sheet Arrangement with Varying Proportions + Delicate Progression Line */}
        <div className="relative">
          {/* Horizontal Connector Line Behind Frames (Desktop) */}
          <motion.div
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-charcoal origin-left pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-7 items-start relative z-10">
            {copy.phases.map((phase, idx) => (
              <motion.figure
                key={phase.frame}
                initial={reducedMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`group flex flex-col ${colSpans[idx]}`}
              >
                {/* Film Strip Top Header */}
                <div className="flex items-center justify-between text-[10px] font-mono text-ivory/50 pb-2 border-b border-charcoal mb-3">
                  <span className="text-signature-red font-bold">{phase.frame}</span>
                  <span>YSA-FILM // {idx + 1}</span>
                </div>

                {/* Documentary Photograph with Varied Proportion */}
                <div className={`relative w-full ${frameAspects[idx]} overflow-hidden bg-obsidian border border-charcoal`}>
                  <img
                    src={phase.image}
                    alt={phase.alt}
                    className="w-full h-full object-cover filter grayscale-[25%] contrast-105 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Editorial Caption */}
                <figcaption className="pt-4 space-y-1.5">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="w-4 h-[1px] bg-signature-red" />
                    <h3 className="font-space text-lg font-bold uppercase tracking-wider text-purewhite group-hover:text-signature-red transition-colors">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-ivory/70 leading-relaxed">
                    {phase.body}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutApproach;
