import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ResumeHighlightsSection from './components/ResumeHighlightsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactModal from './components/ContactModal';
import ResumeModal from './components/ResumeModal';
import { Mail, Phone, ExternalLink, FileText } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div
      id="main-portfolio-wrapper"
      className="relative w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#B600A8]/30 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={handleOpenContact} />

      {/* 2. RESUME HIGHLIGHTS SECTION (Tailored to Yuvraj's credentials & impact) */}
      <ResumeHighlightsSection
        onResumeClick={handleOpenResume}
        onContactClick={handleOpenContact}
      />

      {/* 3. ABOUT SECTION (Authentic Resume Bio) */}
      <AboutSection
        onContactClick={handleOpenContact}
        onResumeClick={handleOpenResume}
      />

      {/* 4. SKILLS SECTION (From Resume) */}
      <SkillsSection />

      {/* 5. EXPERIENCE SECTION (With Animated Growth Numbers & Career Milestones) */}
      <ExperienceSection onContactClick={handleOpenContact} />

      {/* Minimal Craft Footer */}
      <footer className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-12 text-[#D7E2EA]/70 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-black text-white text-xl tracking-wider uppercase">
              YUVRAJ &bull; YUV
            </span>
            <p className="text-xs text-[#D7E2EA]/60 mt-1">
              3D Creator &amp; Founder&apos;s Office Lead &bull; IIT Patna (B.S. CS &amp; Data Analytics)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button
              type="button"
              onClick={handleOpenResume}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5 text-[#B600A8]" />
              Full Resume &amp; Awards
            </button>

            <a
              href="mailto:yuvraj99singh9@gmail.com"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>

            <a
              href="tel:+917903394739"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 7903394739
            </a>

            <a
              href="https://linkedin.com/in/yuvraj3082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              LinkedIn
            </a>

            <a
              href="https://github.com/yuviitp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onContactClick={() => {
          setIsResumeOpen(false);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
}
