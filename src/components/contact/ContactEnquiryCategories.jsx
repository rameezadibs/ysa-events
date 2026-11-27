import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { buildMailtoHref, buildWhatsAppHref } from '../../data/contactConfig';

export const ContactEnquiryCategories = ({ copy }) => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-obsidian text-purewhite py-16 sm:py-24 border-b border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-charcoal gap-6">
          <div>
            <span className="block font-mono text-xs uppercase tracking-[0.28em] text-signature-red font-semibold mb-3">
              {copy.eyebrow}
            </span>
            <h2 className="uppercase tracking-tight leading-[0.92]">
              <span className="block font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-purewhite">
                {copy.headingLine1}
              </span>
              <span className="block font-cormorant italic font-semibold text-5xl sm:text-6xl lg:text-7xl text-signature-red pt-1">
                {copy.headingLine2}
              </span>
            </h2>
          </div>

          <p className="font-inter text-sm text-ivory/65 max-w-sm leading-relaxed">
            {copy.helper}
          </p>
        </div>

        {/* Four Editorial Enquiry Categories (Thin Separators & Red Accents) */}
        <div className="divide-y divide-charcoal">
          {copy.items.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
              className="group py-7 sm:py-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-baseline space-x-4 sm:space-x-6 rtl:space-x-reverse">
                <span className="font-mono text-xs font-bold text-signature-red">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-space text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-purewhite group-hover:text-signature-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/50">
                    {item.scope}
                  </p>
                </div>
              </div>

              {/* Direct Service-Specific Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppHref(item.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse px-5 py-3 bg-charcoal-dark hover:bg-signature-red border border-charcoal hover:border-signature-red text-purewhite font-space text-xs font-bold uppercase tracking-[0.16em] rounded-sm transition-colors duration-300"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{copy.whatsappAction}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={buildMailtoHref(item.emailSubject, item.whatsappText)}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse px-5 py-3 border border-charcoal hover:border-ivory/50 text-ivory/85 hover:text-purewhite font-space text-xs font-bold uppercase tracking-[0.16em] rounded-sm transition-colors duration-300"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{copy.emailAction}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactEnquiryCategories;
