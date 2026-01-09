import { GraduationCap, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { useEffect, useState } from "react";

const EducationSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Ultra smooth parallax with spring-like easing
  const smoothParallax = (value: number, factor: number, offset: number = 1000) => {
    const adjusted = Math.max(0, value - offset);
    const dampening = 0.06;
    const maxOffset = 35;
    return Math.tanh(adjusted * dampening * factor) * maxOffset;
  };

  const getParallax = (xFactor: number, yFactor: number, rotationFactor: number = 0, offset: number = 1000) => {
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
    <section id="education" className="section-padding section-alt relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes */}
      <div 
        className="shape-blob w-[350px] h-[350px] bg-accent/25 -top-28 right-[8%]"
        style={getParallax(-0.18, 0.22, -0.35)}
      />
      <div 
        className="shape-blob w-[400px] h-[400px] bg-primary/20 -bottom-36 -left-36"
        style={getParallax(0.2, -0.18, 0.3)}
      />
      <div 
        className="shape-glow w-[280px] h-[280px] bg-primary/35 bottom-20 right-[20%]"
        style={getParallax(0.15, -0.12, 0.2)}
      />
      <div 
        className="shape-circle w-36 h-36 top-1/3 left-[5%]"
        style={getParallax(-0.2, 0.25, -0.6)}
      />
      <div 
        className="shape-dots top-20 right-[6%]"
        style={getParallax(-0.1, 0.15, 0.2)}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
            Pendidikan
          </h2>
          
          <div className={`w-12 h-1 bg-primary mx-auto mb-16 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className={`flex items-start gap-6 p-8 rounded-2xl bg-background border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="p-4 rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <edu.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {edu.institution}
                  </h3>
                  {edu.current && (
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full animate-pulse">
                      Saat Ini
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium mb-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;