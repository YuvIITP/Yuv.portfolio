import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  Building, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  MapPin, 
  Calendar 
} from 'lucide-react';

interface MetricItem {
  targetNumber: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  growthTag: string;
  icon: typeof TrendingUp;
}

const METRICS: MetricItem[] = [
  {
    targetNumber: 10,
    prefix: '',
    suffix: 'M+',
    label: 'Monthly Impressions',
    description: 'Organic reach achieved with zero paid ad spend',
    growthTag: '+100% Organic',
    icon: TrendingUp,
  },
  {
    targetNumber: 50,
    prefix: '',
    suffix: 'K+',
    label: 'Orders Driven',
    description: 'Converted directly from organic social channels in 3 months',
    growthTag: 'Zero Ad Budget',
    icon: ShoppingBag,
  },
  {
    targetNumber: 1790,
    prefix: '',
    suffix: '%+',
    label: 'Follower Growth',
    description: 'Instagram channel expansion in single 30-day sprint',
    growthTag: '1-Month Scale',
    icon: Users,
  },
  {
    targetNumber: 20,
    prefix: '₹',
    suffix: 'L+',
    label: 'PR Client Revenue',
    description: 'Revenue generated within first month of campaign ownership',
    growthTag: '100% Conversion',
    icon: ArrowUpRight,
  },
];

function AnimatedCounter({ metric }: { metric: MetricItem; key?: string | number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = metric.targetNumber;
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, metric.targetNumber]);

  const Icon = metric.icon;

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#16181d] p-6 sm:p-8 transition-all duration-300 hover:border-[#B600A8]/50 hover:bg-[#1a1c24]"
    >
      {/* Glow background accent */}
      <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#B600A8]/10 blur-2xl transition-all group-hover:bg-[#B600A8]/20" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="rounded-2xl bg-white/5 p-3 text-[#D7E2EA] border border-white/10">
            <Icon className="h-6 w-6 text-[#B600A8]" />
          </div>
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
            {metric.growthTag}
          </span>
        </div>

        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              {metric.prefix}
              {count}
              {metric.suffix}
            </span>
          </div>

          <h3 className="mt-2 text-base sm:text-lg font-bold text-[#D7E2EA] uppercase tracking-wide">
            {metric.label}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#D7E2EA]/60 leading-relaxed">
            {metric.description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ExperienceSectionProps {
  onContactClick: () => void;
}

export default function ExperienceSection({ onContactClick }: ExperienceSectionProps) {
  const experiences = [
    {
      number: '01',
      role: "Content Producer & Brand Marketing Head | Founder's Office Intern",
      company: 'Go4Database',
      period: 'Aug 2026 - Present',
      location: 'United States (EST Focus)',
      tag: 'Current Role',
      bulletPoints: [
        'Lead content production and brand marketing strategy for US audience as a Founder’s Office intern.',
        'Designed and executed a growth marketing engine that generated $300 in revenue within the first week of joining.',
        'Drove 300% company follower growth within the first month through targeted visual assets and brand positioning.',
      ],
      skillsUsed: ['Brand Marketing', 'US EST Audience', 'Content Production', 'Founder Support', 'Revenue Generation'],
    },
    {
      number: '02',
      role: 'Product Manager',
      company: 'Talent Yug',
      period: 'Jun 2026 - Aug 2026',
      location: 'Pan-India',
      tag: 'Leadership',
      bulletPoints: [
        'Owned the Campus Ambassador program end-to-end as product lead across 80+ college representatives nationwide (100% pan-India network).',
        'Drove cross-functional alignment between marketing, operations, and campus teams, improving program engagement and reach across all onboarded institutions.',
      ],
      skillsUsed: ['Product Management', 'Stakeholder Management', '80+ Campus Network', 'Cross-Functional Ops'],
    },
    {
      number: '03',
      role: 'Public Relations Associate (Pre-Placement Offer)',
      company: 'IncluGlobal',
      period: 'Feb 2026 - Mar 2026',
      location: 'India',
      tag: '100% PPO Conversion',
      bulletPoints: [
        'Converted a 1-month internship into a Pre-Placement Offer (100% intern-to-offer conversion) based on brand communication and execution speed.',
        'Managed brand communications and PR strategy for a client account, generating ₹20+ lakh (INR 2M+) revenue in the first month as a 100% first-month revenue contribution.',
      ],
      skillsUsed: ['Public Relations', 'Brand Communication', '₹20L+ Revenue', 'Client Acquisition'],
    },
    {
      number: '04',
      role: 'COO & Marketing Head',
      company: 'ApkaAds',
      period: 'Mar 2025 - Jan 2026',
      location: 'Founder’s Office',
      tag: '10M+ Impressions',
      bulletPoints: [
        'Operated directly in the founder’s office as COO, owning end-to-end operations across product, marketing, growth, and business strategy.',
        'Delivered a 1,790%+ increase in Instagram followers within 1 month, driving 10M+ monthly organic impressions with zero paid spend.',
        'Translated reach into a 100% organic-to-revenue channel, generating 50,000+ orders within 3 months.',
        'Built and managed operational processes and cross-functional workflows, supporting rapid early-stage scaling.',
      ],
      skillsUsed: ['Chief of Staff Ops', '10M+ Organic Reach', '50,000+ Orders', 'Operational Scaling', 'GTM'],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 px-4 sm:px-6 md:px-10 z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D7E2EA]/50">
              Founder&apos;s Office &bull; Growth &bull; Execution Rigor
            </span>
            <h2
              id="experience-heading"
              className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mt-2"
            >
              Experience
            </h2>
          </div>
        </FadeIn>

        {/* Animated Growth Metric Numbers Grid */}
        <div className="mb-20 sm:mb-28">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-4 w-4 text-[#B600A8]" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D7E2EA]/80">
              Verified Growth Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {METRICS.map((metric, index) => (
              <AnimatedCounter key={index} metric={metric} />
            ))}
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center gap-2 mb-6">
            <Building className="h-4 w-4 text-[#7621B0]" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D7E2EA]/80">
              Professional Career History
            </h3>
          </div>

          {experiences.map((exp, index) => (
            <FadeIn
              key={exp.number}
              delay={index * 0.1}
              y={30}
              id={`experience-card-${exp.number}`}
              className="group relative rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/20 bg-[#121317] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-[#D7E2EA]/50 hover:bg-[#15171d]"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,6vw,80px)] leading-none select-none transition-transform duration-300 group-hover:scale-105">
                    {exp.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                        {exp.company}
                      </span>
                      <span className="rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 px-2.5 py-0.5 text-[10px] font-bold text-[#D7E2EA] uppercase tracking-wider">
                        {exp.tag}
                      </span>
                    </div>

                    <h4 className="mt-1 text-base sm:text-xl md:text-2xl font-black uppercase text-[#D7E2EA]">
                      {exp.role}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#D7E2EA]/60">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-[#B600A8]" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#7621B0]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 space-y-3">
                {exp.bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                    <p className="text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA]/85">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {exp.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#D7E2EA]/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Immediate Call to Action Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-[#18011F] via-[#2A0835] to-[#18011F] p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B600A8]">
              Immediate Availability
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase text-white">
              Available for a 6-Month Internship &bull; Starting Immediately
            </h3>
            <p className="mt-2 text-sm text-[#D7E2EA]/70">
              Seeking to bring ownership, speed, and execution rigor to an early-stage founder&apos;s office, growth leadership, or Chief of Staff role.
            </p>
          </div>

          <ContactButton onClick={onContactClick} label="Hire / Contact Yuvraj" id="experience-contact-btn" />
        </div>
      </div>
    </section>
  );
}
