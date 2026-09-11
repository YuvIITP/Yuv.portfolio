import FadeIn from './FadeIn';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    id: 'service-2',
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    id: 'service-3',
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    id: 'service-4',
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    id: 'service-5',
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: "Services" in #0C0C0C */}
        <FadeIn delay={0} y={40}>
          <h2
            id="services-heading"
            className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28"
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service Items in vertical list */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              id={`service-item-${index + 1}`}
              className="group border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 transition-colors duration-300 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                {/* Number on the left */}
                <span className="font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)] select-none shrink-0 md:w-[220px] transition-transform duration-300 group-hover:translate-x-1">
                  {service.number}
                </span>

                {/* Name + description stacked vertically on the right */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] tracking-wide">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
