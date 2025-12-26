import { useEffect, useState } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

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

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image with parallax and animations */}
          <div 
            className={`mb-8 sm:mb-10 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto group">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
              <div className="absolute -inset-2 rounded-full border border-accent/20 group-hover:border-accent/40 transition-colors duration-500" />
              
              {/* Photo container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-card shadow-xl relative group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20 z-10" />
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
    </section>
  );
};

export default HeroSection;
