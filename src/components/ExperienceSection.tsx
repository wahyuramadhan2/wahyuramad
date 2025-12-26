import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Member",
      company: "Google Developer Group on Campus",
      location: "UIN Syarif Hidayatullah Jakarta",
      period: "Nov 2024 - Nov 2025",
      description: "Aktif dalam komunitas developer Google, mengikuti workshop dan event teknologi.",
      current: true
    },
    {
      title: "Observer",
      company: "TPA KB TK Aisyiyah Bustanul Athfal",
      location: "Surabaya",
      period: "Feb 2025 - Jun 2025",
      description: "Mengamati dinamika perkembangan anak usia dini, termasuk interaksi sosial dan pertumbuhan kognitif.",
      current: true
    },
    {
      title: "Agent",
      company: "MMBC Travel & Tours Sdn.Bhd.",
      location: "Malaysia",
      period: "Jun 2020 - Jun 2022",
      description: "Mengelola layanan perjalanan dan wisata, berkomunikasi dengan klien internasional.",
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
          Pengalaman
        </h2>
        
        <div className="w-12 h-1 bg-primary mx-auto mb-16 rounded-full" />

        <div className="max-w-2xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="card-soft p-8 border border-border/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mt-1">{exp.company}</p>
                </div>
                {exp.current && (
                  <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    Saat Ini
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-5">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
