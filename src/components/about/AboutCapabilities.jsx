import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutCapabilities = ({ copy }) => {
  const reducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleExploreServices = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('services-universe');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section className="relative w-full bg-ivory text-obsidian pt-12 sm:pt-16 pb-12 sm:pb-16 overflow-hidden selection:bg-signature-red selection:text-purewhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-obsidian/20 gap-4">
          <div>
            <span className="block font-mono text-xs uppercase tracking-[0.28em] text-signature-red font-bold mb-3">
              {copy.eyebrow}
            </span>
            <h2 className="font-cormorant text-5xl sm:text-6xl font-semibold uppercase tracking-tight leading-[0.95] text-obsidian">
              {copy.headline}
            </h2>
          </div>

          <p className="font-inter text-sm sm:text-base text-obsidian/75 max-w-md leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        {/* 4 Horizontal Typographic Disciplines Layers (No Boxed Service Cards) */}
        <div className="divide-y divide-obsidian/15">
          {copy.layers.map((layer, idx) => (
            <motion.div
              key={layer.num}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.08 }}
              className="group py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Index + Large Expressive Heading */}
              <div className="lg:col-span-4 flex items-baseline space-x-4 rtl:space-x-reverse">
                <span className="font-mono text-xs font-bold text-signature-red">
                  {layer.num}
                </span>
                <h3 className="font-space text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-obsidian group-hover:text-signature-red transition-colors">
                  {layer.title}
                </h3>
              </div>

              {/* Supporting Description */}
              <div className="lg:col-span-4">
                <p className="font-inter text-sm text-obsidian/75 leading-relaxed">
                  {layer.description}
                </p>
              </div>

              {/* Two Connected Services */}
              <div className="lg:col-span-2 flex flex-col space-y-1.5 font-space text-xs uppercase tracking-wider font-semibold text-obsidian">
                {layer.services.map((service) => (
                  <span key={service} className="inline-flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-signature-red flex-shrink-0" />
                    <span>{service}</span>
                  </span>
                ))}
              </div>

              {/* Subtle Photographic Detail */}
              <div className="lg:col-span-2">
                <div className="relative h-24 sm:h-28 lg:h-20 w-full overflow-hidden bg-obsidian">
                  <img
                    src={layer.image}
                    alt={layer.alt}
                    className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Action Link */}
        <div className="pt-10 border-t border-obsidian/20 flex justify-start">
          <button
            onClick={handleExploreServices}
            className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-7 py-4 bg-obsidian hover:bg-signature-red text-purewhite font-space text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-colors duration-300"
          >
            <span>{copy.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutCapabilities;
