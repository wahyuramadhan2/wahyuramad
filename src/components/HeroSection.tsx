import { Mail, Linkedin, MapPin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image */}
          <div className="mb-10">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-card shadow-lg mx-auto">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
            >
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </a>
            <a 
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-border bg-card hover:border-primary/50 transition-all font-medium"
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
