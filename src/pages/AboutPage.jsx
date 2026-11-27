import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiChatbot from '../components/AiChatbot';
import LiveStreamModal from '../components/LiveStreamModal';
import ContactModal from '../components/ContactModal';
import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
import AboutDefinesUs from '../components/about/AboutDefinesUs';
import AboutCapabilities from '../components/about/AboutCapabilities';
import AboutApproach from '../components/about/AboutApproach';
import AboutVisionMissionCTA from '../components/about/AboutVisionMissionCTA';
import { useLanguage } from '../context/LanguageContext';
import { aboutTranslations } from '../data/aboutContent';

export const AboutPage = () => {
  const { lang, isRTL } = useLanguage();
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const a = aboutTranslations[lang] || aboutTranslations.en;

  useEffect(() => {
    if (a?.pageTitle) {
      document.title = a.pageTitle;
    }
  }, [a]);

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
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* 2. ABOUT US EDITORIAL DOCUMENTARY CONTENT */}
      <main>
        {/* Section 1: About Hero — "THE WORK BEHIND THE WONDER" */}
        <AboutHero copy={a.hero} />

        {/* Section 2: Introduction — "MORE THAN WHAT YOU SEE" */}
        <AboutIntro copy={a.intro} />

        {/* Section 3: What Defines Us — "ONE CONNECTED CREATIVE FORCE" */}
        <AboutDefinesUs copy={a.defines} />

        {/* Section 4: Capabilities — "THE FULL PICTURE" */}
        <AboutCapabilities copy={a.capabilities} />

        {/* Section 5: Our Approach — "A PRODUCTION STORY" (Philosophy section removed) */}
        <AboutApproach copy={a.approach} />

        {/* Sections 6 & 7: Vision & Mission (Diptych) + Final CTA */}
        <AboutVisionMissionCTA
          diptych={a.diptych}
          cta={a.cta}
          onOpenContactModal={() => setContactModalOpen(true)}
        />
      </main>

      {/* 3. SHARED FOOTER & OVERLAYS */}
      <Footer />
      <AiChatbot onOpenContactModal={() => setContactModalOpen(true)} />
      <LiveStreamModal isOpen={liveStreamOpen} onClose={() => setLiveStreamOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default AboutPage;
