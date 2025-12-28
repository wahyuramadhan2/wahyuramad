import { useEffect, useState } from "react";
import { Mail, Linkedin, ArrowDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div 
        className="shape-blob w-[500px] h-[500px] bg-primary/15 -top-32 -right-32"
        style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.08}px)` }}
      />
      <div 
        className="shape-blob w-[400px] h-[400px] bg-accent/10 -bottom-40 -left-40"
        style={{ transform: `translate(${scrollY * -0.03}px, ${scrollY * -0.06}px)` }}
      />
      <div 
        className="shape-circle w-48 h-48 top-32 left-[10%]"
        style={{ transform: `translate(${scrollY * 0.06}px, ${scrollY * 0.1}px)` }}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile image */}
          <div 
            className={`mb-8 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto group">
              <div className="absolute -inset-1 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-card shadow-lg relative group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={profilePhoto} 
                  alt="Mochammad Wahyu Ramadhan - Psychology Student & Data Enthusiast"
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Psychology × Data Science
            </span>
          </div>
          
          {/* Name */}
          <h1 
            className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-foreground leading-tight transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Mochammad Wahyu Ramadhan
          </h1>

          {/* Tagline */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Memahami <span className="text-primary font-medium">Perilaku Manusia</span> melalui <span className="text-accent font-medium">Data</span>
          </p>
          
          {/* Description */}
          <p 
            className={`text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed px-2 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Mahasiswa Psikologi di Universitas Negeri Surabaya dengan fokus pada Psikologi Kognitif, 
            Machine Learning, dan Data Analytics.
          </p>

          {/* CTA buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a 
              href="mailto:wahyuramadhan9090@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </a>
            <a 
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className={`inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
            aria-label="Scroll to about section"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
