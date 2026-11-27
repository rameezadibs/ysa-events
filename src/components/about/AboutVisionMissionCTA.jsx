import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutVisionMissionCTA = ({ diptych, cta, onOpenContactModal }) => {
  const reducedMotion = useReducedMotion();

  return (
    <>
      {/* 8. EDITORIAL DIPTYCH: VISION (IVORY) & MISSION (CHARCOAL) */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-charcoal">
        
        {/* Left: OUR VISION — Warm Ivory */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-ivory text-obsidian px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-14 sm:pb-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-obsidian/15"
        >
          <div>
            <span className="inline-flex items-center space-x-2 rtl:space-x-reverse font-mono text-xs font-bold uppercase tracking-[0.28em] text-signature-red mb-5 sm:mb-6">
              <span className="w-5 h-[1.5px] bg-signature-red" />
              <span>{diptych.vision.label}</span>
            </span>

            <h2 className="uppercase tracking-tight leading-[0.9] text-obsidian">
              <span className="block font-space font-bold text-5xl sm:text-6xl lg:text-7xl">
                {diptych.vision.line1}
              </span>
              <span className="block font-cormorant italic font-semibold text-6xl sm:text-7xl lg:text-8xl pt-1 text-obsidian">
                {diptych.vision.line2}
              </span>
            </h2>
          </div>

          <p className="mt-12 pt-6 border-t border-obsidian/15 font-inter text-base sm:text-lg text-obsidian/80 max-w-md leading-relaxed">
            {diptych.vision.body}
          </p>
        </motion.div>

        {/* Right: OUR MISSION — Deep Charcoal Photographic Composition */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative bg-charcoal-dark text-purewhite px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-14 sm:pb-20 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Atmospheric Texture */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <img
              src="/about/approach-imagine.jpg"
              alt="Stage fly-tower engineering"
              className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/75 to-charcoal-dark/85" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center space-x-2 rtl:space-x-reverse font-mono text-xs font-bold uppercase tracking-[0.28em] text-ivory/75 mb-5 sm:mb-6">
              <span className="w-5 h-[1.5px] bg-signature-red" />
              <span>{diptych.mission.label}</span>
            </span>

            <h2 className="uppercase tracking-tight leading-[0.9] text-purewhite">
              <span className="block font-space font-bold text-5xl sm:text-6xl lg:text-7xl">
                {diptych.mission.line1}
              </span>
              <span className="block font-cormorant italic font-semibold text-6xl sm:text-7xl lg:text-8xl pt-1 text-signature-red">
                {diptych.mission.line2}
              </span>
            </h2>
          </div>

          <p className="relative z-10 mt-12 pt-6 border-t border-purewhite/15 font-inter text-base sm:text-lg text-ivory/80 max-w-md leading-relaxed">
            {diptych.mission.body}
          </p>
        </motion.div>

      </section>

      {/* 9. FINAL CTA — EDITORIAL GALLERY PRINT FRAMING */}
      <section className="relative w-full bg-ivory text-obsidian py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-t border-obsidian/15">
        <div className="max-w-7xl mx-auto">
          
          {/* Editorial Print Matting Frame */}
          <div className="relative bg-obsidian text-purewhite overflow-hidden shadow-2xl border border-obsidian/10">
            
            {/* Atmospheric Photograph: Empty Arena / Stage After Event */}
            <div className="relative h-[480px] sm:h-[520px] lg:h-[560px] w-full overflow-hidden">
              <img
                src={cta.image}
                alt={cta.alt}
                className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/30" />

              {/* Inner Editorial Composition */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 lg:p-16">
                
                {/* Top Label */}
                <div className="flex items-center justify-between border-b border-purewhite/20 pb-4">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-ivory/85">
                    {cta.eyebrow}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-signature-red hidden sm:inline">
                    {cta.caption}
                  </span>
                </div>

                {/* Bottom Headline & Single Clear CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                  <div className="lg:col-span-8">
                    <h2 className="uppercase tracking-tight leading-[0.9] text-purewhite">
                      <span className="block font-space font-bold text-4xl sm:text-6xl lg:text-7xl">
                        {cta.line1}
                      </span>
                      <span className="block font-space font-bold text-4xl sm:text-6xl lg:text-7xl">
                        {cta.line2}
                      </span>
                      <span className="block font-cormorant italic font-semibold text-5xl sm:text-7xl lg:text-8xl text-signature-red pt-1">
                        {cta.line3}
                      </span>
                    </h2>
                  </div>

                  <div className="lg:col-span-4 space-y-6">
                    <p className="font-inter text-sm sm:text-base text-ivory/85 leading-relaxed">
                      {cta.body}
                    </p>

                    <button
                      onClick={() => onOpenContactModal && onOpenContactModal()}
                      className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-7 py-4 bg-signature-red hover:bg-purewhite text-purewhite hover:text-obsidian font-space text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-colors duration-300"
                    >
                      <span>{cta.button}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default AboutVisionMissionCTA;
