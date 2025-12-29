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

  const ease = (val: number, factor: number) => (val - 400) * factor * 0.3;

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Smooth parallax decorative elements */}
      <div 
        className="shape-circle w-64 h-64 -top-32 -left-32"
        style={{ transform: `translate(${ease(scrollY, 0.03)}px, ${ease(scrollY, 0.04)}px)` }}
      />
      <div 
        className="shape-blob w-[380px] h-[380px] bg-primary/12 -bottom-40 -right-40"
        style={{ transform: `translate(${ease(scrollY, -0.025)}px, ${ease(scrollY, -0.035)}px)` }}
      />
      <div 
        className="shape-glow w-[260px] h-[260px] bg-accent/15 top-24 right-[22%]"
        style={{ transform: `translate(${ease(scrollY, 0.02)}px, ${ease(scrollY, 0.03)}px)` }}
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