import React from 'react';
import { motion } from 'framer-motion';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import yuvrajAvatar from '../assets/yuvraj_3d_face.png';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({
  onContactClick,
}: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]"
    >
      {/* 1. Navbar */}
      <motion.nav
        id="main-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          About
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('experience')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Experience
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Work
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('skills')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Skills
        </button>

        <button
          type="button"
          onClick={onContactClick}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Contact
        </button>
      </motion.nav>

      {/* Hero Heading Container - Permanently Fixed Name */}
      <div className="w-full overflow-hidden flex flex-col items-center mt-6 sm:mt-4 md:-mt-5 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full text-center select-none"
        >
          <h1
            id="hero-main-heading"
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] select-none pointer-events-none"
          >
            Hi, i&apos;m yuv
          </h1>
          {/* Subtitle indicator for Yuvraj portfolio */}
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/40">
              Yuvraj &bull; IIT Patna &bull; 3D & Brand Growth
            </span>
          </div>
        </motion.div>
      </div>

      {/* Hero Portrait with Magnet effect - Fixed Cartoon Avatar without change triggers */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto select-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex items-end justify-center"
          >
            <img
              src={yuvrajAvatar}
              alt="Yuvraj 3D Creator Portrait"
              className="w-full h-auto max-h-[75vh] object-contain select-none pointer-events-none drop-shadow-2xl"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </Magnet>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.3vw,1.35rem)] max-w-[200px] sm:max-w-[280px] md:max-w-[340px]"
        >
          Founder&apos;s office &amp; growth operator scaling ventures with 10M+ reach, 50k+ orders &amp; execution rigor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-end"
        >
          <ContactButton onClick={onContactClick} />
        </motion.div>
      </div>
    </section>
  );
}
