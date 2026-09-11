import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Send, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling & Rendering',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#D7E2EA]/15 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                  <Sparkles className="h-3.5 w-3.5" /> Let&apos;s Build Together
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  Contact Yuvraj
                </h2>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                  Available for 6-month internships, 3D creation &amp; brand growth collaborations.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-[#D7E2EA]/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close contact modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
              <a
                href="mailto:yuvraj99singh9@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#16181d] p-3.5 hover:border-white/30 transition-colors"
              >
                <div className="rounded-full bg-[#B600A8]/20 p-2.5 text-[#B600A8]">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60">Email</p>
                  <p className="text-xs sm:text-sm font-medium text-white truncate">
                    yuvraj99singh9@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+917903394739"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#16181d] p-3.5 hover:border-white/30 transition-colors"
              >
                <div className="rounded-full bg-[#7621B0]/20 p-2.5 text-[#7621B0]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60">Phone</p>
                  <p className="text-xs sm:text-sm font-medium text-white">
                    +91 7903394739
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-5">
              <a
                href="https://linkedin.com/in/yuvraj3082"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/80 hover:text-white transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#B600A8]" />
                linkedin.com/in/yuvraj3082
              </a>
              <span className="text-white/20">&bull;</span>
              <a
                href="https://github.com/yuviitp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/80 hover:text-white transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#7621B0]" />
                github.com/yuviitp
              </a>
            </div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center"
              >
                <CheckCircle className="mx-auto h-10 w-10 text-emerald-400 mb-2" />
                <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                <p className="text-xs text-emerald-200/80 mt-1">
                  Thank you! Yuvraj will respond to your inquiry shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full rounded-xl border border-white/10 bg-[#16181d] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl border border-white/10 bg-[#16181d] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5">
                    Interest / Requirement
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#16181d] px-3.5 py-2.5 text-sm text-white focus:border-[#B600A8] focus:outline-none"
                  >
                    <option value="3D Modeling & Rendering">3D Modeling &amp; Rendering</option>
                    <option value="Motion Design">Motion Design &amp; Animations</option>
                    <option value="Branding & Visual Identity">Branding &amp; Visual Identity</option>
                    <option value="Founder's Office / Growth Leadership">Founder&apos;s Office / Growth Leadership</option>
                    <option value="6-Month Internship Inquiry">6-Month Internship Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5">
                    Project Brief / Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Yuvraj about your vision or role requirements..."
                    className="w-full rounded-xl border border-white/10 bg-[#16181d] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#BE4C00] py-3 text-sm font-bold uppercase tracking-wider text-white hover:opacity-95 transition-opacity cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
