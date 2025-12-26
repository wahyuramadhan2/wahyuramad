import { Brain, Database, Code, Languages } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Psikologi Kognitif",
      description: "Memahami perilaku manusia"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Menganalisis data"
    },
    {
      icon: Code,
      title: "Teknologi",
      description: "Integrasi dalam riset"
    },
    {
      icon: Languages,
      title: "Multilingual",
      description: "EN, 中文, NL"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Tentang Saya
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* About text */}
          <div className="card-soft p-8">
            <p className="text-foreground leading-relaxed mb-4">
              Saya adalah mahasiswa Psikologi di Universitas Negeri Surabaya dengan fokus pada 
              <span className="text-primary font-medium"> Psikologi Kognitif</span> dan 
              <span className="text-primary font-medium"> Psikolinguistik</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sebagai Observer di TK Aisyiyah Bustanul Athfal, saya mendapatkan pengalaman langsung 
              mengamati dinamika perkembangan anak usia dini, termasuk interaksi sosial dan pertumbuhan kognitif.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Saya aktif mengeksplorasi machine learning, SQL, dan data analytics 
              untuk menggabungkan teknologi dengan pemahaman psikologi.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-soft p-5 text-center hover:border-primary/30 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
