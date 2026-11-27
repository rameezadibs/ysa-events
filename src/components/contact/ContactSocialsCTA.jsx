import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { contactConfig, buildWhatsAppHref } from '../../data/contactConfig';

export const ContactSocialsCTA = ({ socialsCopy, finalCtaCopy, stripImageSrc }) => {
  const reducedMotion = useReducedMotion();
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const confirmedSocials = contactConfig.socials.filter((s) => Boolean(s.url));

  return (
    <>
      {/* 7. SOCIAL CONNECTIONS — "STAY IN THE FRAME." */}
      {confirmedSocials.length > 0 && (
        <section className="relative w-full bg-obsidian text-purewhite py-16 sm:py-24 border-b border-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 border-b border-charcoal">
              <div className="lg:col-span-7">
                <span className="block font-mono text-xs uppercase tracking-[0.28em] text-signature-red font-semibold mb-3">
                  {socialsCopy.eyebrow}
                </span>
                <h2 className="uppercase tracking-tight leading-[0.9]">
                  <span className="block font-space font-bold text-4xl sm:text-6xl lg:text-7xl text-purewhite">
                    {socialsCopy.headingLine1}
                  </span>
                  <span className="block font-cormorant italic font-semibold text-5xl sm:text-7xl lg:text-[5rem] text-signature-red pt-1">
                    {socialsCopy.headingLine2}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="font-inter text-sm sm:text-base text-ivory/75 leading-relaxed">
                  {socialsCopy.subtitle}
                </p>
              </div>
            </div>

            {/* Oversized Editorial Social Text Links */}
            <div className="divide-y divide-charcoal">
              {confirmedSocials.map((social, idx) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className="group py-8 sm:py-10 flex items-center justify-between gap-4 hover:px-2 transition-all duration-300"
                >
                  <div className="flex items-baseline space-x-5 rtl:space-x-reverse">
                    <span className="font-mono text-xs text-signature-red font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-space text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-purewhite group-hover:text-signature-red transition-colors">
                      {isArabic ? social.nameAr : social.nameEn}
                    </span>
                    <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-ivory/45">
                      {social.handle}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 rtl:space-x-reverse font-space text-xs uppercase tracking-[0.2em] text-ivory/70 group-hover:text-signature-red transition-colors">
                    <span className="hidden sm:inline">{socialsCopy.visitLabel}</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FINAL CTA — "THE NEXT STORY STARTS HERE." */}
      <section className="relative w-full bg-ivory text-obsidian py-16 sm:py-24 selection:bg-signature-red selection:text-purewhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pb-12 border-b border-obsidian/20">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <span className="block font-mono text-xs font-bold uppercase tracking-[0.28em] text-signature-red mb-4">
                {finalCtaCopy.eyebrow}
              </span>

              <h2 className="uppercase tracking-tight leading-[0.88]">
                <span className="block font-space font-bold text-4xl sm:text-6xl lg:text-7xl text-obsidian">
                  {finalCtaCopy.line1}
                </span>
                <span className="block font-space font-bold text-4xl sm:text-6xl lg:text-7xl text-obsidian">
                  {finalCtaCopy.line2}
                </span>
                <span className="block font-space font-bold text-4xl sm:text-6xl lg:text-7xl text-obsidian">
                  {finalCtaCopy.line3}
                </span>
                <span className="block font-cormorant italic font-semibold text-5xl sm:text-7xl lg:text-[5.25rem] text-signature-red pt-1">
                  {finalCtaCopy.line4}
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="lg:col-span-4 space-y-6"
            >
              <p className="font-inter text-sm sm:text-base text-obsidian/80 leading-relaxed">
                {finalCtaCopy.body}
              </p>

              <a
                href={buildWhatsAppHref(finalCtaCopy.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-7 py-4 bg-obsidian hover:bg-signature-red text-purewhite font-space text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{finalCtaCopy.button}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Narrow Cinematic Production Photograph Strip */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-8"
          >
            <div className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden bg-obsidian">
              <img
                src={stripImageSrc}
                alt={finalCtaCopy.imageAlt}
                className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/55 via-transparent to-obsidian/35 pointer-events-none" />
              <div className="absolute bottom-3 left-4 rtl:left-auto rtl:right-4 flex items-center space-x-2 rtl:space-x-reverse text-[10px] font-mono uppercase tracking-[0.24em] text-purewhite bg-obsidian/75 px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-signature-red" />
                <span>{finalCtaCopy.imageCaption}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSocialsCTA;
