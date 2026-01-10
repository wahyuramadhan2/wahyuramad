import { Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const ExperienceSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 });
  const { getParallaxStyle } = useParallax({
    offset: 1400,
    dampening: 0.04,
    maxOffset: 40,
  });

  const experiences = [
    {
      title: "Member",
      company: "Google Developer Group on Campus",
      location: "UIN Syarif Hidayatullah Jakarta",
      period: "Nov 2024 - Nov 2025",
      description: "Aktif dalam komunitas developer Google, mengikuti workshop dan event teknologi.",
      current: true
    },
    {
      title: "Observer",
      company: "TPA KB TK Aisyiyah Bustanul Athfal",
      location: "Surabaya",
      period: "Feb 2025 - Jun 2025",
      description: "Mengamati dinamika perkembangan anak usia dini, termasuk interaksi sosial dan pertumbuhan kognitif.",
      current: true
    },
    {
      title: "Agent",
      company: "MMBC Travel & Tours Sdn.Bhd.",
      location: "Malaysia",
      period: "Jun 2020 - Jun 2022",
      description: "Mengelola layanan perjalanan dan wisata, berkomunikasi dengan klien internasional.",
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes */}
      <div 
        className="shape-blob w-[300px] h-[300px] md:w-[420px] md:h-[420px] bg-primary/25 -top-20 md:-top-28 -left-32 md:-left-40"
        style={getParallaxStyle(0.25, 0.22, 0.45, 0.2)}
      />
      <div 
        className="shape-blob w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-accent/20 -bottom-24 md:-bottom-32 -right-24 md:-right-32"
        style={getParallaxStyle(-0.2, -0.28, -0.4, 0.15)}
      />
      <div 
        className="hidden md:block shape-glow w-[340px] h-[340px] bg-accent/25 top-1/3 right-[10%]"
        style={getParallaxStyle(-0.15, 0.2, 0.3, 0.1)}
      />
      <div 
        className="shape-circle w-28 h-28 md:w-48 md:h-48 bottom-12 md:bottom-16 right-[6%] md:right-[8%]"
        style={getParallaxStyle(-0.22, -0.3, -0.6, 0.18)}
      />
      <div 
        className="hidden md:block shape-dots bottom-1/4 left-[4%]"
        style={getParallaxStyle(0.18, 0.22, 0.35, 0.08)}
      />
      <div 
        className="hidden lg:block shape-ring w-[180px] h-[180px] top-1/4 left-[15%]"
        style={getParallaxStyle(0.12, -0.15, 0.2, 0)}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 text-center text-foreground">
            Pengalaman
          </h2>
          
          <div className={`w-10 sm:w-12 h-1 bg-primary mx-auto mb-12 sm:mb-16 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div 
              className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border/50 md:-translate-x-1/2 transition-all duration-1000 origin-top ${
                isVisible ? 'scale-y-100' : 'scale-y-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            />
            
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title + exp.company}
                  className={`relative pl-6 sm:pl-8 md:pl-0 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${250 + index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 md:left-1/2 top-6 sm:top-8 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary md:-translate-x-1/2 shadow-lg shadow-primary/30 transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  />
                  
                  <div className="card-soft p-5 sm:p-6 md:p-8 border border-border/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mt-0.5 sm:mt-1 text-sm sm:text-base">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-medium bg-accent/15 text-accent rounded-full animate-pulse">
                          Saat Ini
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
