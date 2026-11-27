import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AboutPhilosophy = ({ copy }) => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-obsidian text-purewhite py-24 sm:py-32 overflow-hidden border-t border-charcoal">
      {/* Background Photographic Composition of Backstage Rigging / Patchbay */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={copy.image}
          alt={copy.alt}
          className="w-full h-full object-cover object-center opacity-30 filter grayscale-[40%] contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          
          {/* Eyebrow */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center space-x-3 rtl:space-x-reverse mb-8"
          >
            <span className="h-[1.5px] w-7 bg-signature-red" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-ivory/75">
              {copy.eyebrow}
            </span>
          </motion.div>

          {/* Large Contrast Statement: Space Grotesk + Expressive Cormorant Italic Serif */}
          <h2 className="space-y-1 sm:space-y-1.5 select-none">
            {copy.lines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden">
                <motion.span
                  initial={reducedMotion ? false : { y: '100%', opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.75, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`block uppercase leading-[0.92] tracking-tight ${
                    line.serif
                      ? 'font-cormorant italic font-semibold text-5xl sm:text-7xl md:text-8xl'
                      : 'font-space font-bold text-4xl sm:text-6xl md:text-7xl'
                  } ${line.red ? 'text-signature-red' : 'text-purewhite'}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Supporting Text */}
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="mt-10 pt-6 border-t border-charcoal/90 font-inter text-base sm:text-lg text-ivory/80 max-w-2xl leading-relaxed"
          >
            {copy.body}
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
