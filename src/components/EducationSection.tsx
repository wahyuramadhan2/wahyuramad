import { GraduationCap, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const EducationSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });
  const { getParallaxStyle } = useParallax({
    offset: 900,
    dampening: 0.04,
    maxOffset: 40,
  });

  const education = [
    {
      institution: "Universitas Negeri Surabaya",
      degree: "Psikologi Kognitif dan Psikolinguistik",
      period: "2022 - 2026",
      icon: GraduationCap,
      current: true
    },
    {
      institution: "Universitas Terbuka",
      degree: "Statistics",
      period: "Februari 2025",
      icon: BookOpen,
      current: false
    }
  ];

  return (
    <section id="education" className="section-padding section-alt relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes */}
      <div 
        className="shape-blob w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-accent/20 -top-20 md:-top-28 right-[5%] md:right-[8%]"
        style={getParallaxStyle(-0.2, 0.25, -0.4, 0.15)}
      />
      <div 
        className="shape-blob w-[300px] h-[300px] md:w-[420px] md:h-[420px] bg-primary/18 -bottom-28 md:-bottom-36 -left-28 md:-left-36"
        style={getParallaxStyle(0.22, -0.2, 0.35, 0.2)}
      />
      <div 
        className="hidden md:block shape-glow w-[300px] h-[300px] bg-primary/28 bottom-16 right-[18%]"
        style={getParallaxStyle(0.18, -0.15, 0.25, 0.1)}
      />
      <div 
        className="shape-circle w-24 h-24 md:w-40 md:h-40 top-1/3 left-[4%] md:left-[5%]"
        style={getParallaxStyle(-0.22, 0.28, -0.7, 0.15)}
      />
      <div 
        className="hidden md:block shape-dots top-16 right-[5%]"
        style={getParallaxStyle(-0.12, 0.18, 0.25, 0.05)}
      />
      <div 
        className="hidden lg:block shape-ring w-[200px] h-[200px] bottom-1/4 right-[10%]"
        style={getParallaxStyle(0.1, -0.12, 0.15, 0)}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 text-center text-foreground">
            Pendidikan
          </h2>
          
          <div className={`w-10 sm:w-12 h-1 bg-primary mx-auto mb-12 sm:mb-16 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>

        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className={`flex items-start gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="p-3 sm:p-4 rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <edu.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {edu.institution}
                  </h3>
                  {edu.current && (
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-accent/15 text-accent rounded-full animate-pulse">
                      Saat Ini
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">{edu.degree}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
