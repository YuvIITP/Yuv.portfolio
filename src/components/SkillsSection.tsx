import { useState } from 'react';
import FadeIn from './FadeIn';
import { 
  Code, 
  TrendingUp, 
  Briefcase, 
  Layers, 
  Target, 
  Sparkles, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  icon: typeof Code;
  description: string;
  tags: string[];
  highlight: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-analytics',
    number: '01',
    title: 'Programming & Data Analytics',
    icon: Code,
    description:
      'Rigorous quantitative analysis, scripting, and business intelligence dashboards powered by IIT Patna computer science foundations.',
    tags: ['Python', 'Pandas', 'Power BI', 'Excel / Advanced Reporting', 'Basic DAX', 'Data Analytics', 'KPI Tracking'],
    highlight: 'Data-driven decision making and growth modeling',
  },
  {
    id: 'founders-office',
    number: '02',
    title: "Founder's Office & Execution",
    icon: Briefcase,
    description:
      'High-velocity strategic execution, cross-functional leadership, and organizational scaling directly alongside startup founders.',
    tags: [
      'Chief of Staff',
      "Founder's Office Support",
      'Cross-Functional Execution',
      'Stakeholder Management',
      'Strategic Planning',
      'Product Management',
      'Operations Management',
      'Process Optimization',
    ],
    highlight: 'Owned end-to-end operations as COO for rapid early-stage scaling',
  },
  {
    id: 'growth-marketing',
    number: '03',
    title: 'Growth & Organic Reach',
    icon: TrendingUp,
    description:
      'Proven zero-spend viral acquisition systems scaling brand impressions, follower counts, and high-conversion sales funnels.',
    tags: [
      '1,790%+ Organic Growth Strategy',
      'GTM Execution',
      'Instagram / Social Media Strategy',
      'Public Relations (PR)',
      'Brand Communication',
      'Community Building',
      'Campus Marketing',
    ],
    highlight: 'Delivered 10M+ monthly impressions & 50,000+ orders organically',
  },
  {
    id: 'creative-production',
    number: '04',
    title: '3D Creation & Visual Production',
    icon: Layers,
    description:
      'Crafting striking 3D models, photorealistic renders, and motion graphics that capture immediate attention and elevate brand presence.',
    tags: [
      '3D Modeling & Rendering',
      'Motion Design',
      'Graphic Design',
      'Video Editing',
      'Social Media Management',
      'Visual Storytelling',
    ],
    highlight: 'US EST market content generating revenue and 300% follower growth',
  },
  {
    id: 'sales-bd',
    number: '05',
    title: 'Sales & Business Development',
    icon: Target,
    description:
      'High-impact client acquisition, partnership coordination, and pan-India outreach driving direct multi-lakh revenue generation.',
    tags: [
      'Sales Strategy',
      'Lead Generation',
      'Business Development',
      'Client Acquisition',
      'Campus Ambassador Leadership',
      'Pan-India Network',
    ],
    highlight: 'Converted ₹20L+ (INR 2M+) revenue within first month for PR account',
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0C0C0C]/50">
              Technical &amp; Executive Competencies
            </span>
            <h2
              id="skills-heading"
              className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mt-2 select-none"
            >
              Skills
            </h2>
          </div>
        </FadeIn>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0C0C0C] text-white shadow-md'
                : 'bg-black/5 text-[#0C0C0C]/70 hover:bg-black/10'
            }`}
          >
            All Competencies
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0C0C0C] text-white shadow-md'
                  : 'bg-black/5 text-[#0C0C0C]/70 hover:bg-black/10'
              }`}
            >
              {cat.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Skills Vertical List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <FadeIn
                key={category.id}
                delay={index * 0.1}
                y={30}
                id={`skill-item-${index + 1}`}
                className="group border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 transition-colors duration-300 hover:bg-black/[0.015]"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12">
                  {/* Left Number & Icon */}
                  <div className="flex items-center md:items-start gap-4 shrink-0 md:w-[240px]">
                    <span className="font-black text-[#0C0C0C] leading-none text-[clamp(2.5rem,8vw,110px)] select-none transition-transform duration-300 group-hover:translate-x-1">
                      {category.number}
                    </span>
                    <div className="rounded-2xl bg-black/5 p-3 text-[#0C0C0C] self-center md:self-start mt-1">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col gap-4 flex-1">
                    <div>
                      <h3 className="font-bold uppercase text-[#0C0C0C] text-[clamp(1.1rem,2vw,1.9rem)] tracking-wide">
                        {category.title}
                      </h3>
                      <p className="font-light leading-relaxed max-w-3xl text-[clamp(0.85rem,1.5vw,1.15rem)] text-[#0C0C0C] opacity-70 mt-1">
                        {category.description}
                      </p>
                    </div>

                    {/* Highlight Box */}
                    <div className="inline-flex items-center gap-2 rounded-xl bg-black/5 px-4 py-2 text-xs sm:text-sm font-medium text-[#0C0C0C]/80 border border-black/5">
                      <Sparkles className="h-4 w-4 text-[#B600A8] shrink-0" />
                      <span>{category.highlight}</span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-black/[0.03] px-3.5 py-1.5 text-xs font-medium text-[#0C0C0C] transition-colors group-hover:border-black/30"
                        >
                          <CheckCircle2 className="h-3 w-3 text-[#7621B0]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Education & Certification Footer Banner */}
        <div className="mt-16 rounded-3xl bg-[#0C0C0C] text-[#D7E2EA] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B600A8]">
              Academic Foundation
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white mt-1">
              Indian Institute of Technology (IIT), Patna
            </h4>
            <p className="text-sm text-[#D7E2EA]/80 mt-1">
              B.S. in Computer Science &bull; Specialization in Data Analytics (2024 &ndash; 2028)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs">
              <Award className="h-4 w-4 text-amber-400" />
              <span>Pro-Active Personnel Award</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs">
              <Award className="h-4 w-4 text-amber-400" />
              <span>Fast Starter Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
