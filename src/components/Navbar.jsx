import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Radio, Menu, X, ArrowRight, Play, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import YsaLogo from './YsaLogo';

export const Navbar = ({ onOpenLiveModal, onOpenContactModal }) => {
  const { lang, toggleLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.videos, path: '/videos' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-charcoal py-3 shadow-2xl'
            : 'bg-gradient-to-b from-obsidian/90 via-obsidian/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Original YSA MEDIA Logo */}
          <div className="flex-shrink-0 flex items-center">
            <YsaLogo size="md" isDark={true} />
          </div>

          {/* Center: Desktop Navigation with Thin Red Underline */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-8 rtl:space-x-reverse font-space text-sm tracking-wide">
            {navLinks.map((link) => {
              const isHome = link.path === '/';
              return isHome ? (
                <NavLink
                  key={link.path}
                  to="/"
                  className={({ isActive }) =>
                    `relative py-1.5 px-2 transition-colors duration-200 uppercase font-medium ${
                      isActive ? 'text-purewhite' : 'text-ivory/70 hover:text-purewhite'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-signature-red shadow-red-subtle"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ) : (
                <span
                  key={link.path}
                  className="relative py-1.5 px-2 text-ivory/40 uppercase font-medium cursor-default select-none transition-colors"
                >
                  {link.name}
                </span>
              );
            })}
          </nav>

          {/* Right: Language Selector & Outlined WATCH LIVE Button */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 rtl:space-x-reverse">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 rtl:space-x-reverse text-xs uppercase tracking-wider text-ivory/80 hover:text-purewhite px-2.5 py-1.5 rounded border border-charcoal hover:border-ivory/30 transition-all font-space"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-signature-red" />
              <span>{t.nav.languageToggle}</span>
            </button>

            {/* Outlined WATCH LIVE Button with Animated Broadcast Indicator */}
            <button
              onClick={onOpenLiveModal}
              className="group relative inline-flex items-center space-x-2.5 rtl:space-x-reverse px-4 py-2 border border-signature-red text-purewhite rounded-sm text-xs font-space font-bold tracking-widest uppercase transition-all duration-300 hover:bg-signature-red/10 hover:shadow-red-subtle focus:outline-none focus:ring-1 focus:ring-signature-red"
            >
              {/* Pulsing Red Broadcast Indicator */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signature-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signature-red" />
              </span>

              <span className="text-purewhite font-semibold">{t.nav.watchLive}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={onOpenLiveModal}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 border border-signature-red text-purewhite rounded text-xs font-space font-semibold uppercase"
            >
              <span className="h-2 w-2 rounded-full bg-signature-red animate-pulse" />
              <span>{t.nav.liveIndicator}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ivory hover:text-purewhite focus:outline-none border border-charcoal rounded"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-signature-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Editorial Navigation Experience */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Decorative Studio Background Watermark */}
            <div className="absolute top-1/3 right-4 opacity-5 pointer-events-none select-none text-9xl font-space font-black text-purewhite">
              YSA
            </div>

            <div className="relative z-10 space-y-6">
              <div className="border-b border-charcoal pb-4 mb-4 flex items-center justify-between">
                <span className="text-xs font-space uppercase tracking-widest text-signature-red">
                  YSA / Live In Motion
                </span>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1.5 text-xs text-ivory/80 uppercase font-space border border-charcoal px-3 py-1 rounded"
                >
                  <Globe className="w-3.5 h-3.5 text-signature-red" />
                  <span>{t.nav.languageToggle}</span>
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => {
                  const isHome = link.path === '/';
                  return isHome ? (
                    <NavLink
                      key={link.path}
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-2.5 text-2xl font-space uppercase tracking-tight transition-colors ${
                          isActive
                            ? 'text-signature-red font-bold'
                            : 'text-ivory hover:text-purewhite font-medium'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-mono text-ivory/40">0{idx + 1}</span>
                    </NavLink>
                  ) : (
                    <div
                      key={link.path}
                      className="flex items-center justify-between py-2.5 text-2xl font-space uppercase tracking-tight text-ivory/30 cursor-default select-none"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-mono text-ivory/20">0{idx + 1}</span>
                    </div>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-charcoal">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLiveModal();
                  }}
                  className="w-full flex items-center justify-center space-x-3 py-3.5 bg-signature-red text-purewhite font-space font-bold uppercase tracking-wider rounded-sm shadow-red-subtle"
                >
                  <Radio className="w-4 h-4 animate-pulse" />
                  <span>{t.nav.watchLive}</span>
                </button>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-charcoal/80 flex flex-col space-y-3 text-xs text-ivory/60 font-inter">
              <div className="flex items-center justify-between">
                <span>Dubai, United Arab Emirates</span>
                <span className="text-signature-red">ysamedia.ae</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="mailto:info@ysamedia.ae" className="flex items-center space-x-1 hover:text-purewhite">
                  <Mail className="w-3 h-3 text-signature-red" />
                  <span>info@ysamedia.ae</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
