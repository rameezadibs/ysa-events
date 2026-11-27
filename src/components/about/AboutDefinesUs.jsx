import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion, AnimatePresence } from 'framer-motion';

export const AboutDefinesUs = ({ copy }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.34) {
      setActiveIndex(0);
    } else if (latest < 0.68) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-obsidian text-purewhite pt-10 sm:pt-14 pb-12 sm:pb-16 border-t border-charcoal overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 lg:mb-12 max-w-3xl">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono uppercase tracking-[0.28em] text-signature-red mb-3 font-semibold">
            <span className="w-2 h-2 rounded-full bg-signature-red" />
            <span>{copy.eyebrow}</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl font-semibold uppercase tracking-tight leading-[0.95] text-purewhite">
            {copy.headline}
          </h2>
        </div>

        {/* Asymmetric Split Composition: Sticky Documentary Photo Sequence + Stacked Editorial Statements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Large Vertical Documentary Photograph (Sticky on Desktop) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal-dark border border-charcoal">
              <AnimatePresence mode="sync">
                {copy.items.map((item, idx) =>
                  idx === activeIndex ? (
                    <motion.img
                      key={item.image}
                      src={item.image}
                      alt={item.alt}
                      initial={reducedMotion ? false : { opacity: 0.25, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full object-cover filter contrast-[1.06]"
                    />
                  ) : null
                )}
              </AnimatePresence>

              {/* Editorial Sequence Bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-obsidian/30 pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ivory/80 border-t border-ivory/20 pt-3">
                <span>
                  {copy.items[activeIndex].caption}
                </span>
                <span className="text-signature-red font-bold">
                  0{activeIndex + 1} / 03
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Stacked Editorial Statements (No Cards) */}
          <div className="lg:col-span-7 divide-y divide-charcoal">
            {copy.items.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`py-10 sm:py-12 cursor-pointer transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-45 hover:opacity-80'
                    }`}
                >
                  {/* Mobile Documentary Photo Inline */}
                  <div className="lg:hidden mb-6 aspect-[16/10] w-full overflow-hidden bg-charcoal-dark border border-charcoal">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-start space-x-5 sm:space-x-7 rtl:space-x-reverse">
                    <span
                      className={`font-mono text-xs pt-2 transition-colors ${isActive ? 'text-signature-red font-bold' : 'text-ivory/40'
                        }`}
                    >
                      {item.num}
                    </span>

                    <div className="space-y-4">
                      <h3 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-purewhite leading-none">
                        {item.title}
                      </h3>
                      <p className="font-inter text-base sm:text-lg text-ivory/75 leading-relaxed max-w-xl">
                        {item.body}
                      </p>

                      <div
                        className={`h-[1.5px] transition-all duration-500 ${isActive ? 'w-20 bg-signature-red' : 'w-8 bg-charcoal'
                          }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDefinesUs;
