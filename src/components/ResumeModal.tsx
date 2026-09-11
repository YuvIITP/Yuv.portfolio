import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Mail, Phone, Award, GraduationCap, Briefcase, Sparkles, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ResumeModal({
  isOpen,
  onClose,
  onContactClick,
}: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('yuvraj99singh9@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#D7E2EA]/15 pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                    Available for 6-Month Internship
                  </span>
                </div>
                <h2 className="mt-2 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  Yuv Raj
                </h2>
                <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-1">
                  Content Producer &amp; Brand Marketing Head | Founder&apos;s Office | IIT Patna
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-[#D7E2EA]/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="rounded-2xl border border-white/10 bg-[#16181d] p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black text-white">10M+</span>
                <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mt-1">
                  Monthly Impressions
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#16181d] p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black text-white">50,000+</span>
                <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mt-1">
                  Orders Driven
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#16181d] p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black text-white">1,790%+</span>
                <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mt-1">
                  Follower Growth
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#16181d] p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black text-white">₹20L+</span>
                <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mt-1">
                  PR Client Revenue
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* Professional History */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-white mb-4">
                  <Briefcase className="h-5 w-5 text-[#B600A8]" />
                  Professional History
                </h3>

                <div className="space-y-6 border-l-2 border-[#D7E2EA]/20 pl-4 sm:pl-6 ml-2">
                  {/* Go4Database */}
                  <div className="relative">
                    <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 h-3 w-3 rounded-full bg-[#B600A8] ring-4 ring-[#0C0C0C]" />
                    <div className="flex flex-wrap justify-between items-baseline">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Content Producer &amp; Brand Marketing Head | Founder&apos;s Office Intern
                      </h4>
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                        Aug 2026 - Present
                      </span>
                    </div>
                    <p className="text-sm text-[#D7E2EA]/80 font-medium">Go4Database</p>
                    <p className="mt-2 text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                      Lead content production and brand marketing strategy for US (EST) audience. Generated $300 in revenue in week one and drove 300% company follower growth in first month.
                    </p>
                  </div>

                  {/* Talent Yug */}
                  <div className="relative">
                    <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 h-3 w-3 rounded-full bg-[#7621B0] ring-4 ring-[#0C0C0C]" />
                    <div className="flex flex-wrap justify-between items-baseline">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Product Manager
                      </h4>
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                        Jun 2026 - Aug 2026
                      </span>
                    </div>
                    <p className="text-sm text-[#D7E2EA]/80 font-medium">Talent Yug</p>
                    <p className="mt-2 text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                      Owned Campus Ambassador program end-to-end across 80+ college reps nationwide (100% pan-India network). Aligned marketing, ops, and campus teams to scale engagement.
                    </p>
                  </div>

                  {/* IncluGlobal */}
                  <div className="relative">
                    <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 h-3 w-3 rounded-full bg-[#7621B0] ring-4 ring-[#0C0C0C]" />
                    <div className="flex flex-wrap justify-between items-baseline">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Public Relations Associate (Pre-Placement Offer)
                      </h4>
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                        Feb 2026 - Mar 2026
                      </span>
                    </div>
                    <p className="text-sm text-[#D7E2EA]/80 font-medium">IncluGlobal</p>
                    <p className="mt-2 text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                      Earned 100% intern-to-offer conversion based on execution speed and brand strategy. Generated 20+ lakh (INR 2M+) revenue within first month.
                    </p>
                  </div>

                  {/* ApkaAds */}
                  <div className="relative">
                    <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 h-3 w-3 rounded-full bg-[#BE4C00] ring-4 ring-[#0C0C0C]" />
                    <div className="flex flex-wrap justify-between items-baseline">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        COO &amp; Marketing Head
                      </h4>
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                        Mar 2025 - Jan 2026
                      </span>
                    </div>
                    <p className="text-sm text-[#D7E2EA]/80 font-medium">ApkaAds</p>
                    <p className="mt-2 text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                      Owned product, marketing, and operations. Delivered 1,790%+ organic follower growth in 1 month, 10M+ impressions with zero paid spend, producing 50,000+ orders in 3 months.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-white mb-3">
                    <GraduationCap className="h-5 w-5 text-[#B600A8]" />
                    Education
                  </h3>
                  <div className="rounded-2xl border border-white/10 bg-[#16181d] p-4">
                    <h4 className="font-bold text-white">
                      Indian Institute of Technology (IIT), Patna
                    </h4>
                    <p className="text-sm text-[#D7E2EA]/80">
                      B.S. in Computer Science (Data Analytics)
                    </p>
                    <p className="text-xs text-[#D7E2EA]/60 mt-1">2024 &ndash; 2028</p>
                  </div>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-white mb-3">
                    <Award className="h-5 w-5 text-[#BE4C00]" />
                    Recognitions
                  </h3>
                  <div className="rounded-2xl border border-white/10 bg-[#16181d] p-4 space-y-2 text-sm text-[#D7E2EA]/80">
                    <p className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                      &ldquo;Pro-Active Personnel&rdquo; Leadership Award
                    </p>
                    <p className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                      Fast Starter Certification
                    </p>
                    <p className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                      Letter of Recommendation &ndash; Younity
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Expertise & Tools */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3">
                  Technical Expertise &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    '3D Modeling',
                    'Motion Design',
                    'Blender',
                    'Cinema 4D',
                    'Graphic Design',
                    'Video Editing',
                    'Python',
                    'Pandas',
                    'Power BI',
                    'Growth Strategy',
                    'Social Media Strategy',
                    'Chief of Staff Execution',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#D7E2EA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 pt-6 border-t border-[#D7E2EA]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Mail className="h-4 w-4" />}
                  {copied ? 'Copied Email' : 'yuvraj99singh9@gmail.com'}
                </button>

                <a
                  href="https://linkedin.com/in/yuvraj3082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/yuviitp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="rounded-full bg-gradient-to-r from-[#B600A8] to-[#BE4C00] px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 transition-opacity cursor-pointer"
              >
                Hire / Contact Yuv
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
