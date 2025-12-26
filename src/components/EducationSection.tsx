import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
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
    <section id="education" className="section-padding bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
          Pendidikan
        </h2>
        
        <div className="w-12 h-1 bg-primary mx-auto mb-16 rounded-full" />

        <div className="max-w-2xl mx-auto space-y-8">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex items-start gap-6 p-8 rounded-2xl bg-background border border-border/50"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0">
                <edu.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  {edu.current && (
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
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
