import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  contactConfig,
  buildWhatsAppHref,
  buildMailtoHref,
  buildTelHref,
} from '../../data/contactConfig';

export const ContactDirectory = ({ copy }) => {
  const reducedMotion = useReducedMotion();
  const telHref = buildTelHref();

  const getRowMeta = (row) => {
    if (row.id === 'whatsapp') {
      return {
        href: buildWhatsAppHref(row.prefill),
        external: true,
        displayValue: contactConfig.whatsappDisplay || row.pendingLabel,
        ctaText: row.actionLabel,
        isAvailable: true,
      };
    }

    if (row.id === 'email') {
      return {
        href: buildMailtoHref(row.prefillSubject, row.prefillBody),
        external: false,
        displayValue: contactConfig.email,
        ctaText: row.actionLabel,
        isAvailable: true,
      };
    }

    // Phone row: only publish tel: when verified number is configured
    if (telHref && contactConfig.phoneDisplay) {
      return {
        href: telHref,
        external: false,
        displayValue: contactConfig.phoneDisplay,
        ctaText: row.actionLabel,
        isAvailable: true,
      };
    }

    return {
      href: buildMailtoHref('Callback Request — YSA Media'),
      external: false,
      displayValue: row.pendingLabel,
      ctaText: row.fallbackLabel,
      isAvailable: false,
    };
  };

  return (
    <section
      id="direct-channels"
      className="relative w-full bg-ivory text-obsidian py-16 sm:py-24 border-b border-obsidian/15 selection:bg-signature-red selection:text-purewhite"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="pb-10 sm:pb-12 border-b border-obsidian/20"
        >
          <span className="block font-mono text-xs font-bold uppercase tracking-[0.28em] text-signature-red mb-3">
            {copy.eyebrow}
          </span>
          <h2 className="uppercase tracking-tight leading-[0.92]">
            <span className="block font-space font-bold text-4xl sm:text-6xl lg:text-7xl text-obsidian">
              {copy.headingLine1}
            </span>
            <span className="block font-cormorant italic font-semibold text-5xl sm:text-7xl lg:text-[5rem] text-signature-red pt-1">
              {copy.headingLine2}
            </span>
          </h2>
        </motion.div>

        {/* Three Oversized Horizontal Editorial Rows */}
        <div className="divide-y divide-obsidian/20 border-b border-obsidian/20">
          {copy.rows.map((row, idx) => {
            const meta = getRowMeta(row);

            return (
              <motion.a
                key={row.id}
                href={meta.href}
                target={meta.external ? '_blank' : undefined}
                rel={meta.external ? 'noopener noreferrer' : undefined}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group block py-8 sm:py-11 px-2 sm:px-4 -mx-2 sm:-mx-4 hover:bg-obsidian/[0.04] transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                  {/* Index & Large Heading */}
                  <div className="lg:col-span-5 flex items-baseline space-x-4 rtl:space-x-reverse">
                    <span className="font-mono text-xs font-bold text-signature-red">
                      {row.num}
                    </span>
                    <div>
                      <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-obsidian/55 mb-1">
                        {row.label}
                      </span>
                      <h3 className="font-space text-3xl sm:text-5xl font-bold uppercase tracking-tight text-obsidian group-hover:text-signature-red transition-colors duration-300">
                        {row.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="font-inter text-sm sm:text-base text-obsidian/75 leading-relaxed">
                      {row.description}
                    </p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-obsidian font-semibold">
                      {meta.displayValue}
                    </p>
                  </div>

                  {/* Directional Action Indicator */}
                  <div className="lg:col-span-3 flex items-center lg:justify-end space-x-3 rtl:space-x-reverse">
                    <span className="font-space text-xs font-bold uppercase tracking-[0.18em] text-obsidian group-hover:text-signature-red transition-colors">
                      {meta.ctaText}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-obsidian/25 group-hover:border-signature-red group-hover:bg-signature-red group-hover:text-purewhite flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactDirectory;
