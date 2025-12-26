import { useEffect, useState, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <section id="experience" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Decorative shapes with parallax */}
      <div 
        className="shape-blob w-72 h-72 bg-primary/10 -top-20 -left-36"
        style={{ transform: `translateY(${(scrollY - 1500) * 0.05}px)` }}
      />
      <div className="shape-circle w-32 h-32 bottom-20 right-[10%] opacity-25" />
      <div className="shape-dots bottom-40 left-[5%] opacity-30" />

      <div className="container relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
            Pengalaman
          </h2>
          
          <div className="w-12 h-1 bg-primary mx-auto mb-16 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={`card-soft p-8 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
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
