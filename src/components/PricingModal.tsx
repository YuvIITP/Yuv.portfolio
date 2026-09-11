import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

export default function PricingModal({
  isOpen,
  onClose,
  onSelectPlan,
}: PricingModalProps) {
  const plans = [
    {
      name: 'Essential 3D',
      price: '$450',
      period: 'per asset / scene',
      description: 'Perfect for hero visuals, standalone 3D product renders, and landing page accents.',
      features: [
        'Single High-Resolution 3D Model',
        'Custom PBR Materials & Shaders',
        '3 Render Angles (4K Output)',
        'Transparent PNG & WebP Exports',
        '2 Iteration Rounds',
      ],
      popular: false,
    },
    {
      name: 'Full 3D & Brand Pack',
      price: '$1,200',
      period: 'complete system',
      description: 'Comprehensive 3D asset suite, motion animations, and interactive web-ready visuals.',
      features: [
        '3 Custom 3D Hero Scenes / Assets',
        '3D Motion Loop (6-10s Loopable MP4/GIF)',
        'Interactive WebGL / Spline Embed Support',
        'Full Lighting & Environment Design',
        'Brand Color Harmonization',
        'Priority 7-Day Delivery',
      ],
      popular: true,
    },
    {
      name: 'Founder / Growth Retainer',
      price: '$2,400',
      period: 'monthly partnership',
      description: 'Dedicated 3D creator + Growth execution for startups aiming to scale impressions & conversions.',
      features: [
        'Continuous 3D & Brand Content',
        'Organic Social Media Strategy (10M+ reach playbook)',
        'Weekly Motion & Product Launches',
        'Direct Founder & Chief of Staff Alignment',
        'Pan-India / US Timezone Adaptability',
      ],
      popular: false,
    },
  ];

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
            className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#D7E2EA]/15 pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                  Transparent Investment
                </span>
                <h2 className="mt-1 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  Pricing &amp; Engagements
                </h2>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                  Tailored 3D creative pipelines with measured turnaround and production quality.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-[#D7E2EA]/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close pricing modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between rounded-[28px] p-6 transition-all ${
                    plan.popular
                      ? 'border-2 border-[#B600A8] bg-[#16181d] shadow-lg shadow-[#B600A8]/20'
                      : 'border border-white/10 bg-[#121317]'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      Most Selected
                    </span>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#D7E2EA]/60">/{plan.period}</span>
                    </div>
                    <p className="mt-3 text-xs text-[#D7E2EA]/70 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/90">
                          <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectPlan(plan.name);
                    }}
                    className={`mt-8 w-full rounded-full py-3 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#B600A8] to-[#BE4C00] text-white hover:opacity-95'
                        : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>

            {/* Custom Quote Notice */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#BE4C00] shrink-0" />
                <p className="text-xs text-[#D7E2EA]/80">
                  Need custom enterprise scope, WebGL development, or 6-month full-time internship onboarding?
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectPlan('Custom Scope');
                }}
                className="text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-[#B600A8] transition-colors whitespace-nowrap cursor-pointer"
              >
                Inquire Directly &rarr;
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
