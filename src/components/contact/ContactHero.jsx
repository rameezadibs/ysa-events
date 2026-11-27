import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { buildMailtoHref, buildWhatsAppHref } from '../../data/contactConfig';

export const ContactHero = ({ copy, imageSrc }) => {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, reducedMotion ? 0 : 40]);

  const handleScrollToChannels = () => {
    const el = document.getElementById('direct-channels');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHref = buildWhatsAppHref(copy.defaultWhatsappMessage);
  const emailHref = buildMailtoHref(copy.defaultEmailSubject);

  return (
    <section className="relative min-h-[86vh] bg-obsidian text-purewhite pt-28 sm:pt-32 pb-12 overflow-hidden flex flex-col justify-between border-b border-charcoal">
      {/* Subtle Architectural Framing Lines */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 bottom-0 left-6 sm:left-12 lg:left-24 w-[1px] bg-charcoal/35" />
        <div className="absolute top-0 bottom-0 right-6 sm:right-12 lg:right-24 w-[1px] bg-charcoal/35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Metadata Bar */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-charcoal pb-4 mb-8 sm:mb-10"
        >
          <div className="flex items-center space-x-2.5 rtl:space-x-reverse font-space text-xs uppercase tracking-[0.28em] text-ivory/85">
            <span className="w-2 h-2 rounded-full bg-signature-red inline-block" />
            <span>{copy.eyebrow}</span>
          </div>

          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ivory/45">
            {copy.frameTag}
          </div>
        </motion.div>

        {/* Asymmetric Architectural Grid: Editorial Left + Unconventional Cropped Right Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center my-auto">
          {/* Left Column: Headline, Supporting Statement & Direct-Contact Actions */}
          <div className="lg:col-span-7 relative z-20">
            <h1 className="select-none">
              <span className="block overflow-hidden">
                <motion.span
                  initial={reducedMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-space font-extrabold text-5xl sm:text-7xl lg:text-8xl xl:text-[6.25rem] uppercase tracking-tight text-purewhite leading-[0.88]"
                >
                  {copy.line1}
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  initial={reducedMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-cormorant italic font-semibold text-6xl sm:text-8xl lg:text-9xl xl:text-[8rem] tracking-tight leading-[0.88] text-signature-red pt-1"
                >
                  {copy.line2}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 sm:mt-8 font-inter text-base sm:text-lg text-ivory/80 max-w-xl leading-relaxed border-l-2 rtl:border-l-0 rtl:border-r-2 border-signature-red pl-4 rtl:pl-0 rtl:pr-4"
            >
              {copy.subtitle}
            </motion.p>

            {/* Primary Direct-Contact Actions (No Form) */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-7 py-4 bg-signature-red hover:bg-purewhite text-purewhite hover:text-obsidian font-space text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>{copy.whatsappCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={emailHref}
                className="group inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-7 py-4 border border-ivory/30 hover:border-signature-red text-purewhite hover:text-signature-red font-space text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-colors duration-300"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{copy.emailCta}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architectural Unconventional Crop of Communication Headset & Talkback Console */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, clipPath: 'inset(12% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden bg-charcoal-dark border border-charcoal shadow-2xl"
              style={{ clipPath: 'polygon(6% 0, 100% 0, 100% 93%, 92% 100%, 0 100%, 0 6%)' }}
            >
              <motion.img
                src={imageSrc}
                alt={copy.imageAlt}
                style={{ y: parallaxY }}
                className="w-full h-[112%] -mt-[6%] object-cover object-center filter contrast-[1.06] brightness-95"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-obsidian/25 pointer-events-none" />

              {/* Subtle Illuminated Red Talkback Indicator Detail */}
              <div className="absolute top-4 left-5 rtl:left-auto rtl:right-5 flex items-center space-x-2 rtl:space-x-reverse bg-obsidian/85 px-3 py-1.5 border border-charcoal backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-signature-red animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/90">
                  TALKBACK // READY
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pt-8 mt-8 flex items-center justify-between border-t border-charcoal text-xs font-mono text-ivory/55"
        >
          <button
            type="button"
            onClick={handleScrollToChannels}
            className="group inline-flex items-center space-x-2.5 rtl:space-x-reverse uppercase tracking-widest hover:text-signature-red transition-colors"
          >
            <span className="w-7 h-7 rounded-full border border-charcoal flex items-center justify-center group-hover:border-signature-red transition-colors">
              <ArrowDown className="w-3.5 h-3.5 text-signature-red" />
            </span>
            <span>{copy.scrollCue}</span>
          </button>

          <span className="hidden sm:inline uppercase tracking-[0.22em] text-[11px] text-ivory/40">
            NO FORMS // DIRECT CHANNELS
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
