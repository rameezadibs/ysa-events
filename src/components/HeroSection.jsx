import React, { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown, Play, AudioLines } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './HeroSection.css';

// Isolate the original approved white mark without redrawing its letterforms.
function ReferenceLogo() {
  const id = useId();
  return <svg viewBox="1325 380 245 140" role="img" aria-label="YSA MEDIA" className="cinema-hero__logo">
    <defs><filter id={id} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  3 3 3 0 -7.5" /></filter></defs>
    <image href="/images/ysa-approved-reference.png" width="1672" height="941" filter={`url(#${id})`} />
  </svg>;
}
export const HeroSection = ({ onOpenShowreel, onExploreServices }) => {
  const { t, isRTL } = useLanguage();
  const reducedMotion = useReducedMotion();
  const reveal = (delay = 0) => ({ initial: reducedMotion ? false : { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: .8, delay, ease: [.16, 1, .3, 1] } });
  const lines = [t.hero.headlineLine1, t.hero.headlineLine2, t.hero.headlineLine3, t.hero.headlineLine4];
  return <section className="cinema-hero" aria-labelledby="cinema-hero-title">
    <img className="cinema-hero__scene" src="/images/ysa-cinematic-background.jpg" alt="" width="1672" height="941" fetchPriority="high" decoding="async" />
    <div className="cinema-hero__shade" aria-hidden="true" />
    <div className="cinema-hero__frame" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="cinema-hero__copy" dir={isRTL ? 'rtl' : 'ltr'}>
      <motion.p className="cinema-hero__eyebrow" {...reveal()}>{t.hero.tagline}<span aria-hidden="true" /></motion.p>
      <h1 id="cinema-hero-title" className="cinema-hero__title">{lines.map((line, i) => <motion.span key={line} {...reveal(.1 + i * .08)}>{line}</motion.span>)}</h1>
      <motion.div className="cinema-hero__underline" aria-hidden="true" {...reveal(.35)} />
      <motion.p className="cinema-hero__description" {...reveal(.4)}>{t.hero.subheadline}</motion.p>
      <motion.div className="cinema-hero__actions" {...reveal(.5)}>
        <button type="button" className="cinema-hero__explore" onClick={onExploreServices}>{t.hero.ctaExplore}<ArrowRight size={20} aria-hidden="true" /></button>
      </motion.div>
    </div>
    <motion.div className="cinema-hero__brand" {...reveal(.6)}><ReferenceLogo /></motion.div>
    <div className="cinema-hero__progress" aria-hidden="true"><i /><i /><i /><i /></div>
    <button type="button" className="cinema-hero__scroll" onClick={onExploreServices} aria-label={t.hero.ctaExplore}><span>{isRTL ? t.hero.scrollHint : 'SCROLL'}</span><motion.span animate={reducedMotion ? {} : { y: [0, 5, 0] }} transition={{ duration: 2.8, repeat: Infinity }}><ArrowDown size={28} strokeWidth={1.4} aria-hidden="true" /></motion.span></button>
    <AudioLines className="cinema-hero__audio" size={28} aria-hidden="true" />
  </section>;
};
export default HeroSection;
