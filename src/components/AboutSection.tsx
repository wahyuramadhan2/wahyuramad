import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { useEffect, useState } from "react";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ultra smooth parallax with spring-like easing
  const smoothParallax = (value: number, factor: number, offset: number = 400) => {
    const adjusted = Math.max(0, value - offset);
    const dampening = 0.06;
    const maxOffset = 35;
    return Math.tanh(adjusted * dampening * factor) * maxOffset;
  };

  const getParallax = (xFactor: number, yFactor: number, rotationFactor: number = 0, offset: number = 400) => {
    const x = smoothParallax(scrollY, xFactor, offset);
    const y = smoothParallax(scrollY, yFactor, offset);
    const adjusted = Math.max(0, scrollY - offset);
    const rotation = Math.tanh(adjusted * 0.002) * rotationFactor * 6;
    return {
      transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`,
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    };
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes with smooth parallax */}
      <div 
        className="shape-blob w-[380px] h-[380px] bg-primary/30 -top-32 -left-32"
        style={getParallax(0.2, 0.25, 0.4)}
      />
      <div 
        className="shape-blob w-[420px] h-[420px] bg-accent/25 -bottom-40 -right-40"
        style={getParallax(-0.18, -0.22, -0.3)}
      />
      <div 
        className="shape-glow w-[300px] h-[300px] bg-primary/35 top-20 right-[15%]"
        style={getParallax(0.15, 0.18, 0.2)}
      />
      <div 
        className="shape-circle w-40 h-40 bottom-24 left-[10%]"
        style={getParallax(-0.22, 0.2, -0.5)}
      />
      <div 
        className="shape-dots top-1/3 right-[8%]"
        style={getParallax(0.1, 0.12, 0.15)}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header with animation */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
              Tentang Saya
            </h2>
            
            <div className={`w-12 h-1 bg-primary mx-auto mb-12 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          </div>

          {/* Content with staggered animations */}
          <div className="space-y-6 text-center">
            <p 
              className={`text-lg text-foreground leading-relaxed transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Saya adalah mahasiswa Psikologi di <span className="text-primary font-medium">Universitas Negeri Surabaya</span> dengan 
              fokus pada Psikologi Kognitif dan Psikolinguistik.
            </p>
            
            <p 
              className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Memiliki pengalaman sebagai Observer di lingkungan pendidikan anak usia dini, 
              di mana saya mengamati dinamika perkembangan anak termasuk interaksi sosial, 
              regulasi emosi, dan pertumbuhan kognitif.
            </p>
            
            <p 
              className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-[450ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Aktif mengeksplorasi perpaduan antara psikologi dan teknologi, 
              termasuk machine learning dan data analytics untuk memahami perilaku manusia secara lebih mendalam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;