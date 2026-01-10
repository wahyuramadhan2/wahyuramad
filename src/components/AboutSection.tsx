import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });
  const { getParallaxStyle } = useParallax({
    offset: 300,
    dampening: 0.04,
    maxOffset: 40,
  });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes with smooth parallax */}
      <div 
        className="shape-blob w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/25 -top-24 md:-top-32 -left-24 md:-left-32"
        style={getParallaxStyle(0.22, 0.28, 0.5, 0.2)}
      />
      <div 
        className="shape-blob w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-accent/20 -bottom-32 md:-bottom-40 -right-32 md:-right-40"
        style={getParallaxStyle(-0.2, -0.25, -0.4, 0.15)}
      />
      <div 
        className="hidden md:block shape-glow w-[320px] h-[320px] bg-primary/30 top-16 right-[12%]"
        style={getParallaxStyle(0.18, 0.2, 0.25, 0.1)}
      />
      <div 
        className="shape-circle w-28 h-28 md:w-44 md:h-44 bottom-20 md:bottom-24 left-[8%] md:left-[10%]"
        style={getParallaxStyle(-0.25, 0.22, -0.6, 0.15)}
      />
      <div 
        className="hidden md:block shape-dots top-1/3 right-[6%]"
        style={getParallaxStyle(0.12, 0.15, 0.2, 0.05)}
      />
      <div 
        className="hidden lg:block shape-ring w-[250px] h-[250px] top-1/4 left-[20%]"
        style={getParallaxStyle(-0.1, 0.12, 0.15, 0)}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header with animation */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 text-center text-foreground">
              Tentang Saya
            </h2>
            
            <div className={`w-10 sm:w-12 h-1 bg-primary mx-auto mb-10 sm:mb-12 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          </div>

          {/* Content with staggered animations */}
          <div className="space-y-5 sm:space-y-6 text-center">
            <p 
              className={`text-base sm:text-lg md:text-xl text-foreground leading-relaxed transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Saya adalah mahasiswa Psikologi di <span className="text-primary font-medium">Universitas Negeri Surabaya</span> dengan 
              fokus pada Psikologi Kognitif dan Psikolinguistik.
            </p>
            
            <p 
              className={`text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Memiliki pengalaman sebagai Observer di lingkungan pendidikan anak usia dini, 
              di mana saya mengamati dinamika perkembangan anak termasuk interaksi sosial, 
              regulasi emosi, dan pertumbuhan kognitif.
            </p>
            
            <p 
              className={`text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-[450ms] ${
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
