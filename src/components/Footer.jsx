import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowUp, Youtube, Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import YsaLogo from './YsaLogo';

export const Footer = () => {
  const { t, lang, toggleLanguage, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.videos, path: '/videos' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@KAY2TELEVISION' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'X / Twitter', icon: Twitter, url: 'https://x.com' },
  ];

  return (
    <footer className="relative w-full bg-obsidian text-purewhite pt-20 pb-12 border-t border-charcoal overflow-hidden selection:bg-signature-red selection:text-purewhite">
      {/* 
        Subtle Oversized YSA Decorative Lettering in Background
      */}
      <div className="absolute -bottom-10 right-4 lg:right-16 opacity-[0.03] select-none pointer-events-none font-space font-black text-[160px] sm:text-[220px] lg:text-[280px] leading-none text-purewhite tracking-tighter">
        YSA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Logo, Mission, Quick Navigation, Language */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-charcoal/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <YsaLogo size="lg" isDark={true} />
            <p className="font-inter text-xs text-ivory/60 leading-relaxed max-w-sm pt-2">
              End-to-end media and event solutions that bring ideas, people and audiences together across live broadcasting, television production, and experiential stagecraft.
            </p>
            <div className="text-[11px] font-mono text-ivory/40">
              {t.footer.registered}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-space font-bold uppercase tracking-[0.25em] text-signature-red block">
              {t.footer.navTitle}
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs font-space uppercase">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory/70 hover:text-purewhite hover:underline decoration-signature-red underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Language Switcher */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-space font-bold uppercase tracking-[0.25em] text-signature-red block">
              {t.footer.socialTitle}
            </span>
            
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-charcoal bg-charcoal-dark flex items-center justify-center text-ivory/70 hover:text-purewhite hover:border-signature-red hover:bg-signature-red/10 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-space uppercase tracking-wider text-ivory/80 hover:text-purewhite border border-charcoal px-3 py-1.5 rounded"
              >
                <Globe className="w-3.5 h-3.5 text-signature-red" />
                <span>{t.nav.languageToggle}</span>
              </button>
            </div>
          </div>

        </div>

        {/* 
          Middle Tier: Final Statement
          IDEAS INTO EXPERIENCES.
        */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between border-b border-charcoal/80">
          <div className="font-space font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-purewhite">
            <span>{t.footer.statement}</span>
          </div>

          {/* Scroll to Top Action */}
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center space-x-2 text-xs font-space uppercase tracking-widest text-ivory/60 hover:text-signature-red transition-colors"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full border border-charcoal flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* 
          Bottom Tier: Thin red editorial accent + Legal & Copyright
        */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-ivory/50 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-[2px] bg-signature-red" />
            <span>© {new Date().getFullYear()} YSA MEDIA. {t.footer.rights}</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <Link to="/about" className="hover:text-ivory">{t.footer.privacy}</Link>
            <Link to="/about" className="hover:text-ivory">{t.footer.terms}</Link>
            <span className="text-signature-red font-semibold">{t.footer.domain}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
