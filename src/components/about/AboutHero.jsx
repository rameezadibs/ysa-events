import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './AboutHero.css';

export const AboutHero = () => {
  const { isRTL } = useLanguage();
  const reducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 35]);
  const copy = isRTL ? {
    eyebrow: 'عن YSA MEDIA', lines: ['اللحظة', 'التي تسبق'], accent: 'اللحظة.',
    subtitle: 'كل تجربة لا تُنسى تبدأ قبل أن تُضاء الأضواء بوقت طويل.',
    cta: 'اكتشف قصتنا', label: 'وراء كل تجربة',
    strip: ['تفكير إبداعي', 'دقة تقنية', 'تنفيذ متكامل'],
    alt: 'فريق إنتاج يعبر كواليس المسرح نحو قاعة ضخمة مكتظة بالجمهور تحت الأضواء'
  } : {
    eyebrow: 'ABOUT YSA MEDIA', lines: ['THE MOMENT', 'BEFORE THE'], accent: 'MOMENT.',
    subtitle: 'Every unforgettable experience begins long before the spotlight turns on.',
    cta: 'DISCOVER OUR STORY', label: 'BEHIND EVERY EXPERIENCE',
    strip: ['CREATIVE THINKING', 'TECHNICAL PRECISION', 'CONNECTED EXECUTION'],
    alt: 'Production crew carrying equipment through dark backstage curtains toward a packed arena illuminated by white spotlights'
  };
  const reveal = (delay, y = 16) => ({
    initial: reducedMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }
  });
  const discover = (event) => {
    const target = document.getElementById('about-intro');
    if (!target) return;
    event.preventDefault();
    const header = document.querySelector('header');
    const top = target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 80);
    window.scrollTo({ top, behavior: reducedMotion ? 'instant' : 'smooth' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    window.history.replaceState(null, '', '#about-intro');
  };

  return (
    <section ref={heroRef} className="about-cinema" aria-labelledby="about-cinema-title">
      <motion.div className="about-cinema__photo" initial={reducedMotion ? false : { clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 18% 100%)', opacity: 0 }} animate={{ clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1 }} transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}>
        <motion.img style={{ y: parallaxY }} src="/about/hero-arena.webp" width="1536" height="1024" alt={copy.alt} fetchPriority="high" loading="eager" />
      </motion.div>
      <div className="about-cinema__content">
        <motion.div {...reveal(0.1, 0)} className="about-cinema__eyebrow"><i aria-hidden="true" /><span>{copy.eyebrow}</span><b aria-hidden="true" /></motion.div>
        <h1 id="about-cinema-title" className="about-cinema__headline">
          {copy.lines.map((line, index) => <span className="about-cinema__line" key={line}><motion.span {...reveal(0.2 + index * 0.1, 45)}>{line}</motion.span></span>)}
          <span className="about-cinema__line about-cinema__accent"><motion.em {...reveal(0.4, 55)}>{copy.accent}</motion.em></span>
        </h1>
        <motion.p {...reveal(0.5)} className="about-cinema__description">{copy.subtitle}</motion.p>
        <motion.a {...reveal(0.6)} className="about-cinema__cta" href="#about-intro" onClick={discover}>{copy.cta}</motion.a>
      </div>
      <motion.p {...reveal(0.65, 0)} className="about-cinema__label">{copy.label}</motion.p>
      <motion.p {...reveal(0.7, 0)} className="about-cinema__strip">{copy.strip.map((item, index) => <React.Fragment key={item}>{index > 0 && <span aria-hidden="true">/</span>}<span>{item}</span></React.Fragment>)}</motion.p>
    </section>
  );
};
export default AboutHero;
