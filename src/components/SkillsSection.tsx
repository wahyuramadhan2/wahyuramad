import { Award, Cloud, BarChart, Database, Brain, CheckCircle } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "Microsoft PowerPoint", level: 90 },
    { name: "Microsoft Word", level: 85 },
    { name: "SEO", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Power BI", level: 70 },
    { name: "Machine Learning", level: 65 },
  ];

  const certifications = [
    {
      icon: Cloud,
      title: "AWS Cloud Quest",
      issuer: "Cloud Practitioner"
    },
    {
      icon: BarChart,
      title: "Power BI for Beginners",
      issuer: "Microsoft"
    },
    {
      icon: Database,
      title: "Intermediate SQL",
      issuer: "DataCamp"
    },
    {
      icon: CheckCircle,
      title: "Data Analyst Associate",
      issuer: "DataCamp"
    },
    {
      icon: Brain,
      title: "Machine Learning Pemula",
      issuer: "Dicoding"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Keahlian & Sertifikasi
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Skills bars */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Keahlian Utama
            </h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium text-sm">{skill.name}</span>
                    <span className="text-primary text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              Sertifikasi
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="card-soft p-4 flex items-center gap-4 hover:border-primary/30 transition-all"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
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

export default SkillsSection;
