import { GraduationCap, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EducationSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

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
    <section id="education" className="section-padding bg-card relative overflow-hidden" ref={sectionRef}>
      {/* Decorative shapes */}
      <div className="shape-circle w-56 h-56 -top-28 right-[15%] opacity-20" />
      <div className="shape-blob w-72 h-72 bg-accent/10 -bottom-36 -left-36" />
      <div className="shape-dots top-32 right-[8%] opacity-30" />

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
              <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                <edu.icon className="w-6 h-6" />
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