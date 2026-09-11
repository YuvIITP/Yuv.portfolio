import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

interface AboutSectionProps {
  onContactClick: () => void;
  onResumeClick?: () => void;
}

export default function AboutSection({
  onContactClick,
  onResumeClick,
}: AboutSectionProps) {
  const paragraphText =
    "Computer Science undergraduate at IIT Patna (Data Analytics specialization) with hands-on Founder's Office and Chief of Staff experience. Served as COO & Marketing Head of an early-stage startup, owning end-to-end operations, cross-functional execution, and strategic decision-making — delivering 1,790%+ organic follower growth that scaled reach to 10M+ monthly impressions and drove 50,000+ orders in three months with zero paid promotion. Skilled in data-driven growth strategy, operational scaling, and bringing speed and execution rigor to an early-stage founder's office.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Decorative 3D Images positioned absolutely */}
      {/* 1. Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D moon icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none drop-shadow-xl"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D geometric element"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none drop-shadow-xl"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* 3. Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D lego brick"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none drop-shadow-xl"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D composition group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none drop-shadow-xl"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Central Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl text-center w-full">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph */}
        <div className="max-w-[560px] px-2 sm:px-4">
          <AnimatedText
            id="about-text"
            text={paragraphText}
            className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Resume quick badges highlighting Yuvraj's authentic achievements */}
        {onResumeClick && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onResumeClick}
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#16181d]/80 px-4 py-1.5 text-xs text-[#D7E2EA]/80 hover:border-[#D7E2EA]/50 hover:text-white transition-colors cursor-pointer"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>IIT Patna &bull; CS & Data Analytics</span>
            </button>
            <button
              type="button"
              onClick={onResumeClick}
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#16181d]/80 px-4 py-1.5 text-xs text-[#D7E2EA]/80 hover:border-[#D7E2EA]/50 hover:text-white transition-colors cursor-pointer"
            >
              <span>10M+ Monthly Impressions &bull; 50k+ Orders</span>
            </button>
          </div>
        )}

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button below the text block */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton onClick={onContactClick} id="about-contact-btn" />
        </FadeIn>
      </div>
    </section>
  );
}
