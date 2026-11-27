import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiChatbot from '../components/AiChatbot';
import LiveStreamModal from '../components/LiveStreamModal';
import ContactHero from '../components/contact/ContactHero';
import ContactDirectory from '../components/contact/ContactDirectory';
import ContactEnquiryCategories from '../components/contact/ContactEnquiryCategories';
import ContactLocation from '../components/contact/ContactLocation';
import ContactSocialsCTA from '../components/contact/ContactSocialsCTA';
import { useLanguage } from '../context/LanguageContext';
import { contactTranslations } from '../data/contactContent';
import { contactConfig } from '../data/contactConfig';

export const ContactPage = () => {
  const { lang, isRTL } = useLanguage();
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);

  const c = contactTranslations[lang] || contactTranslations.en;

  const scrollToChannels = () => {
    const el = document.getElementById('direct-channels');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = c.seo.title;

    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      const created = !el;
      const prevValue = el ? el.getAttribute('content') : null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
      return () => {
        if (created) {
          el.remove();
        } else if (prevValue !== null) {
          el.setAttribute('content', prevValue);
        }
      };
    };

    const cleanupDesc = setMeta('name', 'description', c.seo.description);
    const cleanupOgTitle = setMeta('property', 'og:title', c.seo.title);
    const cleanupOgDesc = setMeta('property', 'og:description', c.seo.description);
    const cleanupOgUrl = setMeta('property', 'og:url', `${contactConfig.domain}/contact`);

    let canonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    const prevCanonical = canonical ? canonical.getAttribute('href') : null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${contactConfig.domain}/contact`);

    return () => {
      document.title = prevTitle;
      cleanupDesc();
      cleanupOgTitle();
      cleanupOgDesc();
      cleanupOgUrl();
      if (createdCanonical) {
        canonical.remove();
      } else if (prevCanonical !== null) {
        canonical.setAttribute('href', prevCanonical);
      }
    };
  }, [c.seo]);

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-obsidian text-purewhite selection:bg-signature-red selection:text-purewhite overflow-x-clip ${
        isRTL ? 'font-arabic' : ''
      }`}
    >
      {/* 1. SHARED MINIMALIST NAVIGATION BAR */}
      <Navbar
        onOpenLiveModal={() => setLiveStreamOpen(true)}
        onOpenContactModal={scrollToChannels}
      />

      {/* 2. CONTACT EDITORIAL EXPERIENCE (DIRECT CHANNELS ONLY, NO FORMS) */}
      <main>
        {/* Section 3: Hero — "LET'S MAKE CONTACT." */}
        <ContactHero copy={c.hero} imageSrc="/contact/hero-intercom.jpg" />

        {/* Section 4: Direct Contact Directory — "CHOOSE YOUR CHANNEL." */}
        <ContactDirectory copy={c.directory} />

        {/* Section 5: What Can We Create Together? */}
        <ContactEnquiryCategories copy={c.categories} />

        {/* Section 6: Location — "WHERE IDEAS CONNECT." */}
        <ContactLocation copy={c.location} />

        {/* Sections 7 & 8: Social Connections & Final CTA */}
        <ContactSocialsCTA
          socialsCopy={c.socials}
          finalCtaCopy={c.finalCta}
          stripImageSrc="/about/define-execution.jpg"
        />
      </main>

      {/* 3. SHARED FOOTER & OVERLAYS */}
      <Footer />
      <AiChatbot onOpenContactModal={scrollToChannels} />
      <LiveStreamModal isOpen={liveStreamOpen} onClose={() => setLiveStreamOpen(false)} />
    </div>
  );
};

export default ContactPage;
