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
      description: "Mengelola layanan perjalanan dan wisata, berkomunikasi dengan klien.",
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Pengalaman
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className="card-soft p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                {exp.current && (
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    Saat Ini
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
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
