import { useEffect, useState } from "react";
import { Mail, Linkedin, MapPin, ChevronDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

// ========================================
// 📁 CV FILE LOCATION (Vite + GitHub Pages safe):
// File: public/CV_Mochammad_Wahyu_Ramadhan.pdf
//
// Untuk mengganti file CV:
// 1. Ganti file PDF di folder public/
// 2. Jika nama file berbeda, ubah CV_FILENAME di bawah ini
// ========================================
const CV_FILENAME = "CV_Mochammad_Wahyu_Ramadhan.pdf";
const CV_PATH = `${import.meta.env.BASE_URL}${CV_FILENAME}`;

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

  // ✅ Force-download via programmatic anchor (prevents .htm / double downloads)
  const handleDownloadCV = () => {
    const a = document.createElement("a");
    a.href = CV_PATH;
    a.setAttribute("download", CV_FILENAME);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Ultra smooth easing with dampening
  const smoothParallax = (value: number, factor: number) => {
    // Sine-based easing for organic feel
    const progress = value * factor * 0.15;
    return progress * Math.cos(value * 0.0008);
  };

  // Calculate smooth parallax with depth perception
  const getParallaxStyle = (
    xFactor: number,
    yFactor: number,
    rotationFactor: number = 0
  ) => {
    const x = smoothParallax(scrollY, xFactor);
    const y = smoothParallax(scrollY, yFactor);
    const rotation = scrollY * rotationFactor * 0.02;
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
      transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
    };
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Organic morphing shapes with smooth parallax */}
      <div
        className="shape-blob w-[450px] h-[450px] bg-primary/35 -top-24 -right-24"
        style={getParallaxStyle(0.15, 0.2, 0.5)}
      />
      <div
        className="shape-blob w-[500px] h-[500px] bg-accent/30 -bottom-40 -left-40"
        style={getParallaxStyle(-0.12, -0.18, -0.3)}
      />
      <div
        className="shape-glow w-[350px] h-[350px] bg-primary/40 top-1/3 right-1/4"
        style={getParallaxStyle(0.2, 0.15, 0.2)}
      />
      <div
        className="shape-glow w-[280px] h-[280px] bg-accent/35 bottom-1/4 left-1/4"
        style={getParallaxStyle(-0.15, -0.1, -0.15)}
      />
      <div
        className="shape-circle w-48 h-48 top-20 left-[10%]"
        style={getParallaxStyle(0.25, 0.3, 0.8)}
      />
      <div
        className="shape-circle w-36 h-36 bottom-32 right-[15%]"
        style={getParallaxStyle(-0.18, -0.22, -0.6)}
      />
      <div
        className="shape-circle w-24 h-24 top-1/2 right-[10%]"
        style={getParallaxStyle(0.3, 0.2, 1)}
      />
      <div
        className="shape-circle w-16 h-16 top-1/3 left-[25%]"
        style={getParallaxStyle(-0.2, 0.25, -0.4)}
      />
      <div
        className="shape-dots top-28 right-[20%]"
        style={getParallaxStyle(0.12, 0.15, 0.3)}
      />
      <div
        className="shape-dots bottom-20 left-[8%]"
        style={getParallaxStyle(-0.1, -0.12, -0.2)}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image with parallax and animations */}
          <div
            className={`mb-8 sm:mb-10 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transform: `translateY(${smoothParallax(scrollY, 0.05)}px)` }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto group">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-3 rounded-full border border-accent/15 group-hover:border-accent/30 transition-colors duration-700" />

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
            Mahasiswa Psikologi dengan ketertarikan pada Data Science, Teknologi,
            dan Perilaku Manusia. Fokus pada Psikologi Kognitif & Psikolinguistik.
          </p>

          <p
            className={`flex items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <MapPin className="w-4 h-4" />
            Surabaya, Jawa Timur, Indonesia
          </p>

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

            {/* ✅ Download CV */}
            <button
              type="button"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>

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

      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full p-2 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll ke bawah"
      >
        <span className="text-xs font-medium tracking-wider uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 scroll-indicator" />
      </button>
    </section>
  );
};

export default HeroSection;
