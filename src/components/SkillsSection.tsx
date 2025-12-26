import { useEffect, useState, useRef } from "react";
import { Award } from "lucide-react";

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

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills: { name: string; level: SkillLevel }[] = [
    { name: "Microsoft PowerPoint", level: "Expert" },
    { name: "Microsoft Word", level: "Expert" },
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
    <section id="skills" className="section-padding bg-card relative overflow-hidden" ref={sectionRef}>
      {/* Decorative shapes */}
      <div className="shape-dots top-20 left-[5%] opacity-40" />
      <div className="shape-circle w-48 h-48 -bottom-24 right-[10%] opacity-25" />
      <div className="shape-blob w-64 h-64 bg-accent/10 top-20 -right-32" />

      <div className="container relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
            Keahlian
          </h2>
          
          <div className="w-12 h-1 bg-primary mx-auto mb-16 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-heading text-xl font-semibold mb-8 text-foreground text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-4 p-4 rounded-xl bg-background hover:shadow-md transition-all"
                  style={{ transitionDelay: `${index * 50}ms` }}
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
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-heading text-xl font-semibold mb-8 text-foreground text-center lg:text-left">
              Bahasa
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between gap-4 p-4 rounded-xl bg-background hover:shadow-md transition-all"
                  style={{ transitionDelay: `${index * 50}ms` }}
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
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-heading text-xl font-semibold mb-8 text-foreground flex items-center gap-2 justify-center lg:justify-start">
              <Award className="w-5 h-5 text-primary" />
              Sertifikasi
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-xl bg-background hover:shadow-md transition-all"
                  style={{ transitionDelay: `${index * 50}ms` }}
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
