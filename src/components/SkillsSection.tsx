import { Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

type SkillLevel = "Beginner" | "Intermediate" | "Expert";

const getLevelColor = (level: SkillLevel) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground shadow-sm shadow-primary/20";
    case "Intermediate":
      return "bg-accent text-accent-foreground shadow-sm shadow-accent/20";
    case "Beginner":
      return "bg-secondary text-secondary-foreground";
  }
};

const SkillsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 });
  const { getParallaxStyle } = useParallax({
    offset: 2000,
    dampening: 0.04,
    maxOffset: 40,
  });

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

  return (
    <section id="skills" className="section-padding section-alt relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes */}
      <div 
        className="shape-blob w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-accent/20 top-12 md:top-16 -right-28 md:-right-36"
        style={getParallaxStyle(0.2, 0.25, 0.4, 0.18)}
      />
      <div 
        className="shape-blob w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-primary/18 -bottom-20 md:-bottom-28 -left-20 md:-left-28"
        style={getParallaxStyle(-0.22, -0.2, -0.35, 0.15)}
      />
      <div 
        className="hidden md:block shape-glow w-[320px] h-[320px] bg-primary/25 bottom-1/3 left-[16%]"
        style={getParallaxStyle(-0.15, 0.18, 0.25, 0.1)}
      />
      <div 
        className="shape-circle w-32 h-32 md:w-52 md:h-52 -bottom-16 md:-bottom-20 right-[6%] md:right-[8%]"
        style={getParallaxStyle(-0.25, -0.28, -0.55, 0.2)}
      />
      <div 
        className="hidden md:block shape-dots top-12 left-[4%]"
        style={getParallaxStyle(0.2, 0.22, 0.3, 0.08)}
      />
      <div 
        className="hidden lg:block shape-ring w-[220px] h-[220px] top-1/3 right-[5%]"
        style={getParallaxStyle(-0.1, 0.15, 0.18, 0)}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 text-center text-foreground">
            Keahlian
          </h2>
          
          <div className={`w-10 sm:w-12 h-1 bg-primary mx-auto mb-12 sm:mb-16 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-heading text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-foreground text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 60}ms` }}
                >
                  <span className="text-foreground font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium whitespace-nowrap ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-heading text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-foreground text-center lg:text-left">
              Bahasa
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className={`flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${350 + index * 60}ms` }}
                >
                  <span className="text-foreground font-medium flex items-center gap-2 text-sm sm:text-base">
                    <span className="text-base sm:text-lg">{lang.flag}</span>
                    {lang.name}
                  </span>
                  <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium whitespace-nowrap ${getLevelColor(lang.level)}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`transition-all duration-700 delay-[450ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-heading text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-foreground flex items-center gap-2 justify-center lg:justify-start">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Sertifikasi
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`p-3 sm:p-4 rounded-xl bg-card hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 shimmer ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 60}ms` }}
                >
                  <p className="font-medium text-foreground text-sm sm:text-base">{cert.title}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{cert.issuer}</p>
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
