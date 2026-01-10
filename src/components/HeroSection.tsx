import { useEffect, useState } from "react";
import { Mail, Linkedin, MapPin, ChevronDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { useParallax } from "@/hooks/use-parallax";

const CV_FILENAME = "CV_Mochammad_Wahyu_Ramadhan.pdf";
const CV_PATH = `${import.meta.env.BASE_URL}${CV_FILENAME}`;

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { getParallaxStyle, getContentParallax, scrollY } = useParallax({
    offset: 0,
    dampening: 0.05,
    maxOffset: 45,
  });

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
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const a = document.createElement("a");
    a.href = CV_PATH;
    a.setAttribute("download", CV_FILENAME);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const heroOpacity = Math.max(0, 1 - scrollY * 0.002);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />

      {/* Organic morphing shapes with smooth parallax */}
      <div
        className="shape-blob w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary/30 -top-20 -right-20 md:-top-24 md:-right-24"
        style={getParallaxStyle(0.18, 0.22, 0.5, 0.3)}
      />
      <div
        className="shape-blob w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-accent/25 -bottom-32 -left-32 md:-bottom-40 md:-left-40"
        style={getParallaxStyle(-0.15, -0.2, -0.4, 0.2)}
      />
      <div
        className="shape-glow w-[250px] h-[250px] md:w-[380px] md:h-[380px] bg-primary/35 top-1/3 right-1/4"
        style={getParallaxStyle(0.22, 0.18, 0.25, 0.15)}
      />
      <div
        className="shape-glow w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-accent/30 bottom-1/4 left-1/4"
        style={getParallaxStyle(-0.18, -0.12, -0.2, 0.1)}
      />
      <div
        className="shape-circle w-32 h-32 md:w-52 md:h-52 top-16 md:top-20 left-[8%] md:left-[10%]"
        style={getParallaxStyle(0.28, 0.32, 0.9, 0.2)}
      />
      <div
        className="shape-circle w-24 h-24 md:w-40 md:h-40 bottom-24 md:bottom-32 right-[12%] md:right-[15%]"
        style={getParallaxStyle(-0.2, -0.25, -0.7, 0.15)}
      />
      <div
        className="hidden md:block shape-circle w-28 h-28 top-1/2 right-[8%]"
        style={getParallaxStyle(0.32, 0.22, 1.1, 0.25)}
      />
      <div
        className="hidden lg:block shape-circle w-20 h-20 top-1/3 left-[22%]"
        style={getParallaxStyle(-0.22, 0.28, -0.5, 0.1)}
      />
      <div
        className="shape-ring w-[300px] h-[300px] md:w-[450px] md:h-[450px] top-1/4 left-1/2 -translate-x-1/2"
        style={getParallaxStyle(0.08, 0.1, 0.15, 0)}
      />
      <div
        className="hidden md:block shape-dots top-24 right-[18%]"
        style={getParallaxStyle(0.15, 0.18, 0.35, 0.1)}
      />
      <div
        className="hidden md:block shape-dots bottom-16 left-[6%]"
        style={getParallaxStyle(-0.12, -0.15, -0.25, 0.05)}
      />

      <div 
        className="container relative z-10 px-4 sm:px-6"
        style={{ opacity: heroOpacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image with parallax and animations */}
          <div
            className={`mb-8 sm:mb-10 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={getContentParallax(0.03)}
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 mx-auto group">
              <div className="absolute inset-0 rounded-full border-2 border-primary/25 animate-pulse" />
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-accent/15 group-hover:border-accent/35 transition-colors duration-700" />
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-primary/10 group-hover:border-primary/25 transition-colors duration-700" />

              <div className="w-full h-full rounded-full overflow-hidden border-3 sm:border-4 border-card shadow-xl relative group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:scale-105 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/15 z-10" />
                <img
                  src={profilePhoto}
                  alt="Mochammad Wahyu Ramadhan"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <p
            className={`text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base md:text-lg tracking-wide transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Halo, saya
          </p>

          <h1
            className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 text-foreground leading-tight transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Mochammad Wahyu Ramadhan
          </h1>

          <div
            className={`h-7 sm:h-8 md:h-10 mb-5 sm:mb-6 md:mb-8 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent font-medium">
              {displayText}
              <span className="animate-pulse text-primary ml-0.5">|</span>
            </span>
          </div>

          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Mahasiswa Psikologi dengan ketertarikan pada Data Science, Teknologi,
            dan Perilaku Manusia. Fokus pada Psikologi Kognitif & Psikolinguistik.
          </p>

          <p
            className={`flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base text-muted-foreground mb-6 sm:mb-8 md:mb-10 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Surabaya, Jawa Timur, Indonesia</span>
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-700 delay-[600ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </a>

            <button
              type="button"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] text-sm sm:text-base"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>

            <a
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full border-2 border-border bg-card hover:border-primary/50 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] text-sm sm:text-base"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full p-2 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll ke bawah"
      >
        <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 scroll-indicator" />
      </button>
    </section>
  );
};

export default HeroSection;
