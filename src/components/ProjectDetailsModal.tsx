import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectDetailsModal({
  project,
  onClose,
  onContactClick,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#D7E2EA]/15 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                  {project.category} Project &bull; {project.number}
                </span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {project.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-[#D7E2EA]/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Large Visual Gallery */}
          <div className="my-6 space-y-4">
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#16181d]">
              <img
                src={project.col2Image}
                alt={`${project.title} full visual render`}
                className="w-full h-auto max-h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#16181d]">
                <img
                  src={project.col1Image1}
                  alt={`${project.title} detail angle 1`}
                  className="w-full h-auto max-h-[260px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#16181d]">
                <img
                  src={project.col1Image2}
                  alt={`${project.title} detail angle 2`}
                  className="w-full h-auto max-h-[260px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="space-y-4 border-t border-[#D7E2EA]/15 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Design Architecture &amp; 3D Production
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 max-w-xl">
                  Art direction, high-fidelity 3D modeling, lighting setup, physics simulation,
                  and interactive spatial textures crafted to elevate the product experience.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="rounded-full bg-gradient-to-r from-[#B600A8] to-[#BE4C00] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:opacity-95 transition-opacity cursor-pointer"
                >
                  Request Similar Project
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Cinema 4D', 'Blender', 'Octane / Redshift', 'Three.js', 'Figma', 'After Effects'].map(
                (tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#D7E2EA]/80"
                  >
                    <Sparkles className="h-3 w-3 text-[#B600A8]" />
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
