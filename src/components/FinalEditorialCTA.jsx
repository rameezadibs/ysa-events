import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FinalEditorialCTA = ({ onOpenContactModal }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative w-full bg-ivory text-obsidian py-10 sm:py-14 overflow-hidden selection:bg-signature-red selection:text-purewhite">
      {/* Background Typography Watermark */}
      <div className="absolute right-6 bottom-4 opacity-5 pointer-events-none select-none font-space font-black text-9xl text-obsidian uppercase">
        Create
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* 
            LEFT / CENTER HEADLINE:
            Have a Vision?
            Let's Make It Real. (Real. in red italic serif)
          */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-space font-bold uppercase tracking-[0.25em] text-signature-red block mb-3">
                04 // ENGAGEMENT
              </span>

              <h2 className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.95] text-obsidian">
                <span className="block">{t.cta.headingPart1}</span>
                <span className="block font-medium">
                  {t.cta.headingPart2}
                  <span className="font-cormorant italic text-signature-red font-bold">
                    {t.cta.headingPart3}
                  </span>
                </span>
              </h2>
            </motion.div>
          </div>

          {/* 
            DIAGONAL DIVIDER
          */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-48">
            <div className="w-[1.5px] h-36 bg-obsidian/20 transform -rotate-12" />
          </div>

          {/* 
            RIGHT: Copy & START A CONVERSATION CTA
          */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
            <p className="font-inter text-sm sm:text-base text-obsidian/80 leading-relaxed font-normal">
              {t.cta.description}
            </p>

            <div>
              <button
                onClick={onOpenContactModal}
                className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-7 py-4 bg-signature-red text-purewhite font-space font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:bg-red-700 shadow-lg hover:shadow-red-subtle"
              >
                <span>{t.cta.button}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            <div className="pt-2 text-xs font-mono text-obsidian/60 space-y-1">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-signature-red flex-shrink-0" />
                <span>{t.cta.location}</span>
              </div>
            </div>
          </div>

          {/* 
            FAR RIGHT:
            Tasteful monochrome production photograph (e.g. cinema camera / clapperboard)
            integrated through fading and diagonal cropping.
          */}
          <div className="lg:col-span-3">
            <div 
              className="relative h-64 sm:h-72 w-full overflow-hidden shadow-xl"
              style={{
                clipPath: isRTL 
                  ? 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' 
                  : 'polygon(12% 0, 100% 0, 88% 100%, 0% 100%)'
              }}
            >
              <img
                src="/home/CTA.png"
                alt="Monochrome cinema camera rig and production slate"
                className="w-full h-full object-cover filter grayscale contrast-125"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-purewhite uppercase tracking-wider">
                YSA // PRODUCTION ASSETS
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalEditorialCTA;
