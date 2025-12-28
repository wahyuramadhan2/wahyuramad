import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap, Briefcase, BookOpen } from "lucide-react";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Universitas Negeri Surabaya",
      subtitle: "Psikologi Kognitif & Psikolinguistik",
      period: "2022 - 2026"
    },
    {
      icon: Briefcase,
      title: "Observer Psikologi",
      subtitle: "TPA KB TK Aisyiyah Bustanul Athfal",
      period: "2025"
    },
    {
      icon: BookOpen,
      title: "Google Developer Group",
      subtitle: "Member - UIN Syarif Hidayatullah",
      period: "2024 - 2025"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Subtle decorative elements */}
      <div className="shape-circle w-64 h-64 -top-32 -left-32" />
      <div className="shape-blob w-[350px] h-[350px] bg-accent/10 -bottom-40 -right-40" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              Tentang Saya
            </h2>
            <div className={`w-12 h-1 bg-primary mx-auto rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Text content */}
            <div className="space-y-5">
              <p 
                className={`text-lg text-foreground leading-relaxed transition-all duration-700 delay-150 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Saya adalah mahasiswa Psikologi dengan ketertarikan kuat pada <span className="text-primary font-medium">Data Science</span> dan <span className="text-accent font-medium">Teknologi</span>.
              </p>
              
              <p 
                className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Fokus riset saya pada Psikologi Kognitif dan Psikolinguistik, mengeksplorasi bagaimana 
                manusia memproses bahasa dan mengambil keputusan. Pengalaman observasi di lingkungan 
                pendidikan anak usia dini memberikan perspektif unik tentang perkembangan kognitif.
              </p>
              
              <p 
                className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-[450ms] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Saat ini aktif mengembangkan kemampuan di Machine Learning, SQL, dan Data Analytics 
                untuk memahami perilaku manusia secara kuantitatif dan berbasis bukti.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground text-sm sm:text-base">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
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

export default AboutSection;
