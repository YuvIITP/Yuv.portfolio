import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Zap,
  BarChart3,
  Globe,
  Award,
  Layers
} from 'lucide-react';

interface ResumeHighlightsSectionProps {
  onResumeClick?: () => void;
  onContactClick?: () => void;
}

export default function ResumeHighlightsSection({
  onResumeClick,
  onContactClick,
}: ResumeHighlightsSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ops' | 'growth' | 'tech'>('all');

  const tickerItems = [
    { label: 'IIT Patna', sub: 'B.S. CS & Data Analytics', icon: GraduationCap },
    { label: 'ApkaAds COO', sub: '10M+ Monthly Reach', icon: TrendingUp },
    { label: "Founder's Office", sub: 'Chief of Staff Ops', icon: Briefcase },
    { label: '1,790%+ Scale', sub: 'Organic Follower Surge', icon: Zap },
    { label: '50,000+ Orders', sub: 'Zero Paid Ad Budget', icon: BarChart3 },
    { label: 'Talent Yug', sub: '80+ Campus Network', icon: Users },
    { label: 'IncluGlobal', sub: '100% PPO & ₹20L+ Rev', icon: Award },
    { label: 'Go4Database', sub: 'US EST Content Lead', icon: Globe },
    { label: 'Python & Power BI', sub: 'Quantitative Edge', icon: Layers },
  ];

  const pillars = [
    {
      id: 'ops',
      category: 'Leadership & Ops',
      number: '01',
      title: "Chief of Staff & Founder's Office",
      tagline: 'Translating Founder Vision into High-Velocity Operational Execution',
      stats: 'COO @ ApkaAds & Lead @ Go4Database',
      highlight: 'Owned complete 0-to-1 operational pipeline',
      accentColor: 'from-[#B600A8] to-[#7621B0]',
      badgeBorder: 'border-[#B600A8]/40 bg-[#B600A8]/10 text-[#FF85F5]',
      features: [
        'End-to-end operational ownership across marketing, product, and cross-functional teams',
        'Direct strategic partner to startup founders, driving swift prioritization and weekly sprints',
        'Built scalable standard operating procedures (SOPs) enabling rapid organizational scaling',
        'US EST market alignment, driving $300 revenue in week 1 and 300% brand expansion',
      ],
      interactivePills: ['Chief of Staff', "Founder's Office", 'Operations Management', 'Cross-Functional Execution'],
    },
    {
      id: 'growth',
      category: 'Organic Growth Engine',
      number: '02',
      title: '10M+ Impressions with Zero Paid Spend',
      tagline: 'Data-Driven Viral Acquisition & High-Conversion Funnel Architecture',
      stats: '1,790%+ Surge & 50K+ Orders',
      highlight: '100% Organic-to-Revenue Playbook',
      accentColor: 'from-[#BE4C00] to-[#E55B13]',
      badgeBorder: 'border-[#BE4C00]/40 bg-[#BE4C00]/10 text-[#FFA970]',
      features: [
        'Engineered viral content hooks and distribution mechanisms delivering 10M+ monthly impressions',
        'Transformed social engagement directly into commerce, capturing 50,000+ customer orders in 90 days',
        'Scaled Instagram account by +1,790% followers in a single month without any paid ad spend',
        'Designed client PR communications at IncluGlobal generating ₹20L+ (INR 2M+) in month one',
      ],
      interactivePills: ['10M+ Organic Reach', '50K+ Conversions', '1,790% Surge', 'GTM Playbook'],
    },
    {
      id: 'tech',
      category: 'Analytics & Product',
      number: '03',
      title: 'IIT Patna Quantitative Rigor & 3D Art',
      tagline: 'Bridging Computer Science Analytical Depth with Spatial 3D Aesthetics',
      stats: 'CS + Data Analytics (2024-2028)',
      highlight: 'Quantitative dashboards + High-end 3D visuals',
      accentColor: 'from-[#2B59C3] to-[#00A8FF]',
      badgeBorder: 'border-[#2B59C3]/40 bg-[#2B59C3]/10 text-[#85C1FF]',
      features: [
        'Rigorous quantitative foundations in Python, Pandas, Power BI, and advanced KPI modeling',
        'Product Lead for Pan-India Campus Ambassador program managing 80+ university representatives',
        'High-fidelity 3D modeling, lighting setup, and motion design that elevate brand presence',
        'Pro-Active Personnel Award & Fast Starter Certification recipient for standout performance',
      ],
      interactivePills: ['Python & Pandas', 'Power BI & DAX', '80+ Campus Network', '3D Modeling & Motion'],
    },
  ];

  const filteredPillars =
    activeTab === 'all' ? pillars : pillars.filter((p) => p.id === activeTab);

  return (
    <section
      id="highlights"
      className="relative w-full bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-28 pb-24 sm:pb-32 px-4 sm:px-6 md:px-10 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-[#BE4C00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Infinite Sleek Credentials Ticker */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/50 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#B600A8]" />
              Verified Career Credentials &bull; IIT Patna &bull; Founder&apos;s Office
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Immediate 6-Month Availability
            </span>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121317]/80 backdrop-blur-md py-3.5">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                  >
                    <div className="rounded-lg bg-white/10 p-1.5 text-white">
                      <Icon className="h-3.5 w-3.5 text-[#B600A8]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white tracking-wide whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-[#D7E2EA]/60 whitespace-nowrap">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <FadeIn delay={0.1} y={30}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B600A8]/40 bg-[#B600A8]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#D7E2EA] mb-4">
              <Zap className="h-3.5 w-3.5 text-[#B600A8]" />
              Core Competencies &amp; Impact
            </span>
            <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
              Execution Rigor &bull; Growth &bull; 3D Art
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#D7E2EA]/70 leading-relaxed font-light">
              Bridging strategic founder-level execution from IIT Patna with viral organic growth
              playbooks that generate verified enterprise outcomes.
            </p>
          </div>
        </FadeIn>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {[
            { id: 'all', label: 'All Superpowers' },
            { id: 'ops', label: "Founder's Office & Ops" },
            { id: 'growth', label: '10M+ Organic Growth' },
            { id: 'tech', label: 'Analytics & 3D Craft' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-[#B600A8]/20 border border-white/20'
                  : 'border border-white/10 bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Dynamic Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPillars.map((pillar, index) => (
            <FadeIn
              key={pillar.id}
              delay={index * 0.15}
              y={40}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] sm:rounded-[36px] border-2 border-white/10 bg-[#14151b] p-6 sm:p-8 transition-all duration-300 hover:border-[#D7E2EA]/40 hover:bg-[#181a22] hover:shadow-2xl"
            >
              {/* Subtle top gradient accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.accentColor}`}
              />

              {/* Top Row: Number & Category Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-black text-white text-3xl sm:text-4xl tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
                    {pillar.number}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border ${pillar.badgeBorder}`}
                  >
                    {pillar.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#D7E2EA]/65 leading-relaxed font-light">
                  {pillar.tagline}
                </p>

                {/* Highlight banner */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white tracking-wide">
                    {pillar.stats}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#D7E2EA]/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Feature Bullet Points */}
                <div className="mt-6 space-y-3">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Tags */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {pillar.interactivePills.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-[#D7E2EA]/75 font-medium transition-colors hover:border-white/30 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Live Milestone Showcase Banner */}
        <FadeIn delay={0.3} y={30} className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-r from-[#170B1F] via-[#210D2C] to-[#170B1F] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B600A8] flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Direct Founder Partnership
              </span>
              <h4 className="mt-1 text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                Seeking a 6-Month Internship in Founder&apos;s Office or Growth
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-[#D7E2EA]/75 max-w-2xl font-light">
                Available for full-time immersion starting immediately. Bring speed, quantitative clarity,
                and high-conversion organic marketing to your early-stage venture.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {onResumeClick && (
                <button
                  type="button"
                  onClick={onResumeClick}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  View Full Resume
                </button>
              )}
              {onContactClick && (
                <button
                  type="button"
                  onClick={onContactClick}
                  className="rounded-full bg-gradient-to-r from-[#B600A8] to-[#BE4C00] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:opacity-95 shadow-lg shadow-[#B600A8]/20 transition-opacity cursor-pointer"
                >
                  Get In Touch
                </button>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
