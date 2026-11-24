import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Hammer, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProductionTimeline = () => {
  const { t, isRTL } = useLanguage();

  const iconMap = {
    Lightbulb,
    Hammer,
    Zap,
    TrendingUp,
  };

  const steps = t.approach.steps;

  return (
    <section className="relative w-full bg-charcoal-dark text-purewhite py-16 sm:py-20 border-y border-charcoal/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="flex items-center justify-between border-b border-charcoal/80 pb-4 mb-10">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="w-2 h-2 rounded-full bg-signature-red" />
            <h3 className="font-space text-xs font-bold uppercase tracking-[0.28em] text-ivory/80">
              {t.approach.sectionLabel}
            </h3>
          </div>
          <span className="text-[11px] font-mono text-ivory/40 uppercase hidden sm:inline">
            {t.approach.tagline}
          </span>
        </div>

        {/* 
          FOUR STAGES IN A SINGLE FLOWING HORIZONTAL COMPOSITION:
          THE IDEA → THE BUILD → THE MOMENT → THE IMPACT
          Delicate white line icons, thin separators, and elegant arrow indicators.
          Compact, minimal, highly refined.
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 relative">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Lightbulb;
            const isLast = index === steps.length - 1;

            return (
              <div 
                key={step.num}
                className="group relative flex flex-col justify-between p-4 md:px-6 md:py-2 border-l border-charcoal/70 first:border-l-0 rtl:border-l-0 rtl:border-r rtl:first:border-r-0 transition-colors duration-300 hover:bg-obsidian/40"
              >
                {/* Stage Header with Number, Icon and Flow Arrow */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="font-mono text-xs font-bold text-signature-red">
                        {step.num}
                      </span>
                      <Icon className="w-4 h-4 text-ivory/70 group-hover:text-signature-red transition-colors" />
                    </div>

                    {!isLast && (
                      <ArrowRight className="hidden md:block w-3.5 h-3.5 text-charcoal-light group-hover:text-signature-red transition-colors" />
                    )}
                  </div>

                  {/* Stage Title */}
                  <h4 className="font-space text-lg font-bold uppercase tracking-tight text-purewhite group-hover:text-signature-red transition-colors mb-2">
                    {step.title}
                  </h4>

                  {/* Tagline */}
                  <p className="font-cormorant italic text-sm text-signature-red font-medium mb-2">
                    {step.tagline}
                  </p>

                  {/* Compact Description */}
                  <p className="font-inter text-xs text-ivory/70 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 h-[2px] w-8 bg-charcoal group-hover:bg-signature-red transition-colors" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductionTimeline;
