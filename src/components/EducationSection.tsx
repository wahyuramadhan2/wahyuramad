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
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Pendidikan
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="card-soft p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <edu.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                    {edu.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Saat Ini
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium mb-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
