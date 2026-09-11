import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  key?: string | number;
  project: ProjectItem;
  index: number;
  totalCards: number;
  onLiveClick: (project: ProjectItem) => void;
}

export default function ProjectCard({
  project,
  index,
  totalCards,
  onLiveClick,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down as user scrolls past
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[600px] flex items-start justify-center sticky"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-2xl transition-all"
      >
        {/* Top row: Number, category label, project name, and Live Project button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,7vw,100px)] leading-none select-none">
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#D7E2EA] tracking-wide">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="shrink-0">
            <LiveProjectButton
              id={`live-project-btn-${project.number}`}
              onClick={() => onLiveClick(project)}
            />
          </div>
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left Column (40% -> col-span-5) with 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Top image */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 bg-[#16181d]"
              style={{
                height: 'clamp(130px, 16vw, 230px)',
              }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} detail showcase 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom image */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 bg-[#16181d]"
              style={{
                height: 'clamp(160px, 22vw, 340px)',
              }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} detail showcase 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% -> col-span-7) with 1 tall image */}
          <div className="md:col-span-7 h-[300px] md:h-full min-h-[300px] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 bg-[#16181d]">
            <img
              src={project.col2Image}
              alt={`${project.title} main hero visual`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
