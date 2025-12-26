import { useEffect, useState } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Decorative shapes with parallax */}
      <div 
        className="shape-blob w-72 h-72 bg-primary/20 -top-20 -right-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="shape-blob w-96 h-96 bg-accent/15 -bottom-40 -left-40"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />
      <div 
        className="shape-circle w-40 h-40 top-32 left-[10%] opacity-40"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div 
        className="shape-circle w-24 h-24 bottom-40 right-[15%] opacity-30"
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      />
      <div 
        className="shape-dots top-40 right-[20%] opacity-60"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div 
        className="shape-dots bottom-32 left-[8%] opacity-40"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image with parallax */}
          <div 
            className="mb-10"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-card shadow-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
              <img 
                src={profileAvatar} 
                alt="Mochammad Wahyu Ramadhan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <p className="text-primary font-medium mb-4 text-lg tracking-wide">
            Halo, saya
          </p>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-foreground leading-tight">
            Mochammad Wahyu Ramadhan
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Mahasiswa Psikologi dengan ketertarikan pada Data Science, Teknologi, dan Perilaku Manusia. 
            Fokus pada Psikologi Kognitif & Psikolinguistik.
          </p>

          {/* Location */}
          <p className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4" />
            Surabaya, Jawa Timur, Indonesia
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:wahyuramadhan9090@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 transition-all"
            >
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </a>
            <a 
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-border bg-card hover:border-primary/50 hover:scale-105 transition-all font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
