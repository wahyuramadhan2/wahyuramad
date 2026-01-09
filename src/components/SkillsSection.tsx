import { Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type SkillLevel = "Beginner" | "Intermediate" | "Expert";

const getLevelColor = (level: SkillLevel) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground";
    case "Intermediate":
      return "bg-accent text-accent-foreground";
    case "Beginner":
      return "bg-secondary text-secondary-foreground";
  }
};

import { useEffect, useState } from "react";

const SkillsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technicalSkills: { name: string; level: SkillLevel }[] = [
    { name: "Microsoft PowerPoint", level: "Expert" },
    { name: "Microsoft Word", level: "Expert" },
    { name: "Microsoft Excel", level: "Intermediate" },
    { name: "SEO", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Machine Learning", level: "Beginner" },
  ];

  const languages: { name: string; level: SkillLevel; flag: string }[] = [
    { name: "Bahasa Indonesia", level: "Expert", flag: "🇮🇩" },
    { name: "English", level: "Intermediate", flag: "🇬🇧" },
    { name: "Mandarin (中文)", level: "Beginner", flag: "🇨🇳" },
    { name: "Dutch (Nederlands)", level: "Beginner", flag: "🇳🇱" },
  ];

  const certifications = [
    { title: "AWS Cloud Quest", issuer: "Cloud Practitioner" },
    { title: "Power BI for Beginners", issuer: "Microsoft" },
    { title: "Intermediate SQL", issuer: "DataCamp" },
    { title: "Data Analyst Associate", issuer: "DataCamp" },
    { title: "Machine Learning Pemula", issuer: "Dicoding" },
  ];

  // Ultra smooth parallax with spring-like easing
  const smoothParallax = (value: number, factor: number, offset: number = 2200) => {
    const adjusted = Math.max(0, value - offset);
    const dampening = 0.06;
    const maxOffset = 35;
    return Math.tanh(adjusted * dampening * factor) * maxOffset;
  };

  const getParallax = (xFactor: number, yFactor: number, rotationFactor: number = 0, offset: number = 2200) => {
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
    <section id="skills" className="section-padding section-alt relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes */}
      <div 
        className="shape-blob w-[380px] h-[380px] bg-accent/25 top-16 -right-36"
        style={getParallax(0.18, 0.22, 0.35)}
      />
      <div 
        className="shape-blob w-[320px] h-[320px] bg-primary/20 -bottom-28 -left-28"
        style={getParallax(-0.2, -0.18, -0.3)}
      />
      <div 
        className="shape-glow w-[300px] h-[300px] bg-primary/30 bottom-1/3 left-[18%]"
        style={getParallax(-0.12, 0.15, 0.2)}
      />
      <div 
        className="shape-circle w-48 h-48 -bottom-20 right-[8%]"
        style={getParallax(-0.22, -0.25, -0.5)}
      />
      <div 
        className="shape-dots top-16 left-[5%]"
        style={getParallax(0.18, 0.2, 0.25)}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
            Keahlian
          </h2>
          
          <div className={`w-12 h-1 bg-primary mx-auto mb-16 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-heading text-xl font-semibold mb-8 text-foreground text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center justify-between gap-4 p-4 rounded-xl bg-background hover:shadow-md hover:scale-[1.02] transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-heading text-xl font-semibold mb-8 text-foreground text-center lg:text-left">
              Bahasa
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className={`flex items-center justify-between gap-4 p-4 rounded-xl bg-background hover:shadow-md hover:scale-[1.02] transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${350 + index * 80}ms` }}
                >
                  <span className="text-foreground font-medium flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    {lang.name}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(lang.level)}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`transition-all duration-700 delay-[450ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-heading text-xl font-semibold mb-8 text-foreground flex items-center gap-2 justify-center lg:justify-start">
              <Award className="w-5 h-5 text-primary" />
              Sertifikasi
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`p-4 rounded-xl bg-background hover:shadow-md hover:scale-[1.02] transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 80}ms` }}
                >
                  <p className="font-medium text-foreground">{cert.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;