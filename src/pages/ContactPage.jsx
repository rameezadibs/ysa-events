import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalEditorialCTA from '../components/FinalEditorialCTA';
import AiChatbot from '../components/AiChatbot';
import LiveStreamModal from '../components/LiveStreamModal';
import ContactModal from '../components/ContactModal';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactPage = () => {
  const { t, isRTL } = useLanguage();
  const [liveStreamOpen, setLiveStreamOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Event Management',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-obsidian text-purewhite selection:bg-signature-red selection:text-purewhite">
      <Navbar
        onOpenLiveModal={() => setLiveStreamOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      <main className="pt-32 pb-24">
        {/* Page Title */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-signature-red block mb-3">
            05 // DIRECT CONTACT & INQUIRIES
          </span>
          <h1 className="font-cormorant text-5xl sm:text-7xl font-bold uppercase tracking-tight text-purewhite leading-[0.95]">
            Let's Make It <span className="font-cormorant italic text-signature-red">Real.</span>
          </h1>
          <p className="mt-4 font-inter text-base text-ivory/80 max-w-2xl leading-relaxed">
            Connect with our executive production directors to discuss your upcoming event, television series, or broadcast infrastructure requirements.
          </p>
        </section>

        {/* Contact Form & Office Information */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-7 bg-charcoal-dark border border-charcoal p-8 rounded-lg shadow-2xl">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-signature-red mx-auto" />
                  <h3 className="font-space text-2xl font-bold uppercase text-purewhite">
                    Thank You for Reaching Out
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-ivory/80 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been routed to our production desk. We will connect within 24 hours to review your scope.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-inter text-xs">
                  <h3 className="font-space text-xl font-bold uppercase text-purewhite border-b border-charcoal pb-3">
                    Project Consultation Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-ivory/70 font-space uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sheikh / Mr / Ms..."
                        className="w-full bg-obsidian border border-charcoal rounded px-3.5 py-3 text-purewhite focus:outline-none focus:border-signature-red"
                      />
                    </div>
                    <div>
                      <label className="block text-ivory/70 font-space uppercase mb-1">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.ae"
                        className="w-full bg-obsidian border border-charcoal rounded px-3.5 py-3 text-purewhite focus:outline-none focus:border-signature-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-ivory/70 font-space uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-obsidian border border-charcoal rounded px-3.5 py-3 text-purewhite focus:outline-none focus:border-signature-red"
                      />
                    </div>
                    <div>
                      <label className="block text-ivory/70 font-space uppercase mb-1">Required Discipline</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-obsidian border border-charcoal rounded px-3.5 py-3 text-purewhite focus:outline-none focus:border-signature-red"
                      >
                        <option value="Event Management">01 — Event Management</option>
                        <option value="Entertainment">02 — Entertainment</option>
                        <option value="TV Production">03 — TV Production</option>
                        <option value="Live Coverage">04 — Live Coverage</option>
                        <option value="Social Media">05 — Social Media</option>
                        <option value="Logistics & Support">06 — Logistics & Support</option>
                        <option value="Hospitality Services">07 — Hospitality Services</option>
                        <option value="Media Partnerships">08 — Media Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-ivory/70 font-space uppercase mb-1">Project Details</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe target dates, location, audience size, and television requirements..."
                      className="w-full bg-obsidian border border-charcoal rounded px-3.5 py-3 text-purewhite focus:outline-none focus:border-signature-red"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-signature-red hover:bg-red-700 text-purewhite font-space font-bold uppercase tracking-widest text-xs rounded transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Submit Project Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 border border-charcoal bg-charcoal-dark/50 rounded space-y-6">
                <h3 className="font-space text-lg font-bold uppercase text-purewhite border-b border-charcoal pb-3">
                  Direct Coordination
                </h3>
                
                <div className="space-y-4 text-xs font-inter text-ivory/80">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-signature-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-space font-semibold text-purewhite uppercase">Production Headquarters</div>
                      <div className="text-ivory/60 mt-0.5">Dubai Media City, Dubai, United Arab Emirates</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-signature-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-space font-semibold text-purewhite uppercase">Inquiries & Proposals</div>
                      <div className="text-ivory/60 mt-0.5">info@ysamedia.ae</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-signature-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-space font-semibold text-purewhite uppercase">Operational Hours</div>
                      <div className="text-ivory/60 mt-0.5">Sunday — Thursday: 09:00 - 18:00 (GST)</div>
                      <div className="text-signature-red text-[11px] font-mono mt-0.5">24/7 Live Broadcast & OB Dispatch</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Broadcast Hub Map visual */}
              <div className="relative h-56 rounded overflow-hidden border border-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                  alt="Dubai skyline at dusk"
                  className="w-full h-full object-cover filter contrast-110 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-space font-bold uppercase tracking-wider text-purewhite">
                  DUBAI • UAE
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <AiChatbot onOpenContactModal={() => setContactModalOpen(true)} />
      <LiveStreamModal isOpen={liveStreamOpen} onClose={() => setLiveStreamOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default ContactPage;
