import { Award, Code, Languages, Brain } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type SkillLevel = "Advanced" | "Intermediate" | "Learning";

const getLevelStyles = (level: SkillLevel) => {
  switch (level) {
    case "Advanced":
      return "bg-primary/15 text-primary border-primary/20";
    case "Intermediate":
      return "bg-accent/15 text-accent border-accent/20";
    case "Learning":
      return "bg-secondary text-secondary-foreground border-border";
  }
};

const SkillsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 });

  const technicalSkills: { name: string; level: SkillLevel }[] = [
    { name: "Microsoft Office Suite", level: "Advanced" },
    { name: "SQL & Database", level: "Intermediate" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Data Analytics", level: "Intermediate" },
    { name: "Machine Learning", level: "Learning" },
    { name: "Python", level: "Learning" },
  ];

  const languages: { name: string; level: SkillLevel }[] = [
    { name: "Bahasa Indonesia", level: "Advanced" },
    { name: "English", level: "Intermediate" },
    { name: "Mandarin", level: "Learning" },
  ];

  const certifications = [
    { title: "AWS Cloud Quest", issuer: "Amazon Web Services" },
    { title: "Data Analyst Associate", issuer: "DataCamp" },
    { title: "Intermediate SQL", issuer: "DataCamp" },
    { title: "Power BI for Beginners", issuer: "Microsoft" },
    { title: "Machine Learning Pemula", issuer: "Dicoding" },
  ];

  return (
    <section id="skills" className="section-padding section-alt relative overflow-hidden" ref={sectionRef}>
      {/* Subtle decorative elements */}
      <div className="shape-circle w-52 h-52 -bottom-24 right-[10%]" />
      <div className="shape-blob w-[300px] h-[300px] bg-primary/10 top-20 -left-32" />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Keahlian
          </h2>
          <div className={`w-12 h-1 bg-primary mx-auto rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Technical Skills
              </h3>
            </div>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center justify-between gap-3 p-3.5 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: `${200 + index * 60}ms` }}
                >
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getLevelStyles(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-6">
              <Languages className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Bahasa
              </h3>
            </div>
            <div className="space-y-3 mb-8">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className={`flex items-center justify-between gap-3 p-3.5 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${350 + index * 60}ms` }}
                >
                  <span className="text-foreground text-sm font-medium">{lang.name}</span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getLevelStyles(lang.level)}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Research Interests */}
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Research Interests
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Cognitive Psychology", "Psycholinguistics", "Human Behavior", "Decision Making"].map((interest, index) => (
                <span 
                  key={interest}
                  className={`px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium transition-all duration-300 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`transition-all duration-700 delay-[450ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Sertifikasi
              </h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`p-3.5 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{ transitionDelay: `${500 + index * 60}ms` }}
                >
                  <p className="font-medium text-foreground text-sm">{cert.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
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
