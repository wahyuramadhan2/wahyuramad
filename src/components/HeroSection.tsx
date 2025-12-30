import { useEffect, useState } from "react";
import { Mail, Linkedin, MapPin, ChevronDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

// ========================================
// 📁 CV FILE LOCATION:
// File: public/cv/CV_Mochammad_Wahyu_Ramadhan.pdf
// 
// Untuk mengganti file CV:
// 1. Ganti file PDF di folder public/cv/
// 2. Jika nama file berbeda, ubah variabel CV_PATH di bawah ini
// ========================================
const CV_PATH = "/cv/CV_Mochammad_Wahyu_Ramadhan.pdf";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { displayText } = useTypingAnimation({
    texts: [
      "Data Science Enthusiast",
      "Psychology Student",
      "Machine Learning Explorer",
      "Cognitive Psychology",
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Smooth easing for parallax
  const ease = (value: number, factor: number) => {
    const dampened = value * factor * 0.3;
    return dampened;
  };

  // Calculate smooth parallax with mouse-like responsiveness
  const getParallaxStyle = (xFactor: number, yFactor: number, delay: number = 0) => {
    const x = ease(scrollY, xFactor);
    const y = ease(scrollY, yFactor);
    return {
      transform: `translate(${x}px, ${y}px)`,
      transitionDelay: `${delay}ms`
    };
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Elegant floating decorative shapes with continuous animation */}
      <div 
        className="shape-blob w-[500px] h-[500px] bg-primary/30 -top-28 -right-28"
        style={getParallaxStyle(0.08, 0.12)}
      />
      <div 
        className="shape-blob w-[550px] h-[550px] bg-accent/25 -bottom-48 -left-48"
        style={getParallaxStyle(-0.06, -0.1, 50)}
      />
      <div 
        className="shape-glow w-[400px] h-[400px] bg-primary/35 top-1/4 right-1/3"
        style={getParallaxStyle(0.1, 0.08, 100)}
      />
      <div 
        className="shape-circle w-56 h-56 top-24 left-[8%]"
        style={getParallaxStyle(0.12, 0.15, 75)}
      />
      <div 
        className="shape-circle w-32 h-32 bottom-40 right-[12%]"
        style={getParallaxStyle(-0.08, -0.12, 25)}
      />
      <div 
        className="shape-circle w-20 h-20 top-1/2 right-[8%]"
        style={getParallaxStyle(0.15, 0.1, 150)}
      />
      <div 
        className="shape-dots top-32 right-[18%]"
        style={getParallaxStyle(0.06, 0.08)}
      />
      <div 
        className="shape-dots bottom-24 left-[6%]"
        style={getParallaxStyle(-0.05, -0.08, 50)}
      />
      <div 
        className="shape-dots top-2/3 left-[20%]"
        style={getParallaxStyle(0.04, 0.06, 100)}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image with parallax and animations */}
          <div 
            className={`mb-8 sm:mb-10 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transform: `translateY(${ease(scrollY, 0.03)}px)` }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto group">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-3 rounded-full border border-accent/15 group-hover:border-accent/30 transition-colors duration-700" />
              
              {/* Photo container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-card shadow-xl relative group-hover:shadow-2xl group-hover:scale-105 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 z-10" />
                <img 
                  src={profilePhoto} 
                  alt="Mochammad Wahyu Ramadhan"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text content with staggered animations */}
          <p 
            className={`text-primary font-medium mb-3 sm:mb-4 text-base sm:text-lg tracking-wide transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Halo, saya
          </p>
          
          <h1 
            className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-foreground leading-tight transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Mochammad Wahyu Ramadhan
          </h1>

          {/* Typing animation */}
          <div 
            className={`h-8 sm:h-10 mb-6 sm:mb-8 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-lg sm:text-xl md:text-2xl text-accent font-medium">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          
          <p 
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Mahasiswa Psikologi dengan ketertarikan pada Data Science, Teknologi, dan Perilaku Manusia. 
            Fokus pada Psikologi Kognitif & Psikolinguistik.
          </p>

          {/* Location */}
          <p 
            className={`flex items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <MapPin className="w-4 h-4" />
            Surabaya, Jawa Timur, Indonesia
          </p>

          {/* CTA buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-700 delay-[600ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a 
              href="mailto:wahyuramadhan9090@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </a>
            <a 
              href={CV_PATH}
              download="CV_Mochammad_Wahyu_Ramadhan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a 
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-border bg-card hover:border-primary/50 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full p-2 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll ke bawah"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 scroll-indicator" />
      </button>
    </section>
  );
};

export default HeroSection;
