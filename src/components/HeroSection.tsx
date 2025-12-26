import { ArrowDown, Mail, Linkedin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <p className="text-primary font-medium mb-3 text-lg">
              Halo, saya
            </p>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-foreground leading-tight">
              Mochammad Wahyu Ramadhan
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Mahasiswa Psikologi dengan ketertarikan pada <span className="text-primary font-medium">Data Science</span>, 
              Teknologi, dan Perilaku Manusia. Mendalami Psikologi Kognitif dan Psikolinguistik.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="mailto:wahyuramadhan9090@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
              >
                <Mail className="w-4 h-4" />
                Hubungi Saya
              </a>
              <a 
                href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition-all font-medium"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Location */}
            <p className="text-sm text-muted-foreground">
              📍 Surabaya, Jawa Timur, Indonesia
            </p>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
                <img 
                  src={profileAvatar} 
                  alt="Mochammad Wahyu Ramadhan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a 
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
