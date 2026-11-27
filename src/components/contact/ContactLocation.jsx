import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { contactConfig } from '../../data/contactConfig';

export const ContactLocation = ({ copy }) => {
  const reducedMotion = useReducedMotion();
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const cityCountry = isArabic
    ? contactConfig.location.cityCountryAr
    : contactConfig.location.cityCountryEn;
  const regionNote = isArabic
    ? contactConfig.location.regionNoteAr
    : contactConfig.location.regionNoteEn;

  return (
    <section className="relative w-full bg-ivory text-obsidian py-16 sm:py-24 border-b border-obsidian/15 selection:bg-signature-red selection:text-purewhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Heading, Compact Location Details & Directions CTA */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="block font-mono text-xs font-bold uppercase tracking-[0.28em] text-signature-red">
              {copy.eyebrow}
            </span>

            <h2 className="uppercase tracking-tight leading-[0.92]">
              <span className="block font-space font-bold text-4xl sm:text-6xl text-obsidian">
                {copy.headingLine1}
              </span>
              <span className="block font-cormorant italic font-semibold text-5xl sm:text-7xl text-signature-red pt-1">
                {copy.headingLine2}
              </span>
            </h2>

            <div className="pt-6 border-t border-obsidian/20 space-y-3">
              <div className="flex items-center space-x-2 rtl:space-x-reverse font-mono text-[11px] uppercase tracking-[0.22em] text-obsidian/55">
                <MapPin className="w-3.5 h-3.5 text-signature-red" />
                <span>{copy.regionLabel}</span>
              </div>
              <p className="font-space text-xl sm:text-2xl font-bold uppercase tracking-tight text-obsidian">
                {cityCountry}
              </p>
              <p className="font-inter text-sm text-obsidian/70 leading-relaxed">
                {regionNote}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={contactConfig.location.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-7 py-4 bg-obsidian hover:bg-signature-red text-purewhite font-space text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-colors duration-300"
              >
                <span>{copy.directionsCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Monochromatic Architectural Map Frame with Signature-Red Pin */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-obsidian p-2 sm:p-3 border border-obsidian/20 shadow-xl">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-charcoal-dark">
                <iframe
                  title={cityCountry}
                  src={contactConfig.location.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 filter grayscale contrast-[1.15] invert-[0.92] opacity-85"
                />
                {/* Subtle Signature-Red Marker Overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signature-red opacity-60" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-signature-red border-2 border-purewhite shadow-lg" />
                  </span>
                </div>
              </div>

              <div className="pt-3 px-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/65">
                <span>{copy.mapCaption}</span>
                <span className="text-signature-red">UAE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
