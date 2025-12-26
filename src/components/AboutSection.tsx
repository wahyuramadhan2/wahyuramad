import { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="shape-circle w-64 h-64 -top-32 -left-32 opacity-20" />
      <div className="shape-blob w-80 h-80 bg-primary/10 -bottom-40 -right-40" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
              Tentang Saya
            </h2>
            
            <div className="w-12 h-1 bg-primary mx-auto mb-12 rounded-full" />
          </div>

          <div className={`space-y-6 text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-foreground leading-relaxed">
              Saya adalah mahasiswa Psikologi di <span className="text-primary font-medium">Universitas Negeri Surabaya</span> dengan 
              fokus pada Psikologi Kognitif dan Psikolinguistik.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Memiliki pengalaman sebagai Observer di lingkungan pendidikan anak usia dini, 
              di mana saya mengamati dinamika perkembangan anak termasuk interaksi sosial, 
              regulasi emosi, dan pertumbuhan kognitif.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Aktif mengeksplorasi perpaduan antara psikologi dan teknologi, 
              termasuk machine learning dan data analytics untuk memahami perilaku manusia secara lebih mendalam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
