import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactModal = ({ isOpen, onClose, preselectedService = '' }) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Event Management',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate completed submission
    }, 500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-xl bg-obsidian border border-charcoal rounded-xl overflow-hidden shadow-2xl text-purewhite p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-charcoal pb-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-signature-red block">
                YSA MEDIA // INQUIRY DIRECT
              </span>
              <h3 className="font-space text-2xl font-bold uppercase text-purewhite mt-1">
                Start a Conversation
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-ivory/60 hover:text-purewhite hover:bg-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-signature-red mx-auto" />
              <h4 className="font-space text-xl font-bold uppercase text-purewhite">
                Inquiry Received
              </h4>
              <p className="font-inter text-xs text-ivory/70 max-w-md mx-auto leading-relaxed">
                Thank you for contacting YSA Media. A production director will review your project requirements and connect within one business day.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-signature-red text-purewhite font-space text-xs font-bold uppercase tracking-wider rounded"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-inter text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-ivory/70 font-space uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al Mansoori"
                    className="w-full bg-charcoal-dark border border-charcoal rounded px-3 py-2.5 text-purewhite placeholder:text-ivory/30 focus:outline-none focus:border-signature-red"
                  />
                </div>
                <div>
                  <label className="block text-ivory/70 font-space uppercase mb-1">Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-charcoal-dark border border-charcoal rounded px-3 py-2.5 text-purewhite placeholder:text-ivory/30 focus:outline-none focus:border-signature-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-ivory/70 font-space uppercase mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-charcoal-dark border border-charcoal rounded px-3 py-2.5 text-purewhite placeholder:text-ivory/30 focus:outline-none focus:border-signature-red"
                  />
                </div>
                <div>
                  <label className="block text-ivory/70 font-space uppercase mb-1">Primary Discipline</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-charcoal-dark border border-charcoal rounded px-3 py-2.5 text-purewhite focus:outline-none focus:border-signature-red"
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
                <label className="block text-ivory/70 font-space uppercase mb-1">Project Brief / Scope</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline event dates, studio requirements, estimated audience size, or broadcast objectives..."
                  className="w-full bg-charcoal-dark border border-charcoal rounded px-3 py-2.5 text-purewhite placeholder:text-ivory/30 focus:outline-none focus:border-signature-red"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-ivory/40">
                  Protected under UAE Media privacy standards.
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-signature-red hover:bg-red-700 text-purewhite font-space font-bold uppercase tracking-wider text-xs rounded transition-colors flex items-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
