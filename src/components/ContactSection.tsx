import { Mail, Linkedin, Facebook, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });
  const { getParallaxStyle } = useParallax({
    offset: 2800,
    dampening: 0.04,
    maxOffset: 40,
  });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "wahyuramadhan9090@gmail.com",
      href: "mailto:wahyuramadhan9090@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mochammad-wahyu-ramadhan",
      href: "https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Wahyu Ramadhan",
      href: "https://www.facebook.com/profile.php?id=100081566457084"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes */}
      <div 
        className="shape-blob w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-primary/28 -top-32 md:-top-40 -right-32 md:-right-40"
        style={getParallaxStyle(-0.22, 0.25, -0.45, 0.2)}
      />
      <div 
        className="shape-blob w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-accent/22 -bottom-24 md:-bottom-32 -left-24 md:-left-32"
        style={getParallaxStyle(0.2, -0.22, 0.4, 0.18)}
      />
      <div 
        className="hidden md:block shape-glow w-[360px] h-[360px] bg-accent/28 bottom-1/4 right-[12%]"
        style={getParallaxStyle(-0.18, 0.15, 0.25, 0.12)}
      />
      <div 
        className="shape-circle w-36 h-36 md:w-56 md:h-56 bottom-12 md:bottom-16 left-[6%] md:left-[8%]"
        style={getParallaxStyle(0.28, -0.3, 0.65, 0.2)}
      />
      <div 
        className="hidden md:block shape-dots top-12 left-[10%]"
        style={getParallaxStyle(0.18, 0.22, 0.3, 0.08)}
      />
      <div 
        className="hidden lg:block shape-ring w-[280px] h-[280px] top-1/3 right-[20%]"
        style={getParallaxStyle(-0.12, 0.18, 0.2, 0)}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 sm:mb-6 text-center text-foreground">
            Hubungi Saya
          </h2>
          
          <div className={`w-10 sm:w-12 h-1 bg-primary mx-auto mb-6 sm:mb-8 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          
          <p 
            className={`text-sm sm:text-base text-muted-foreground max-w-md mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Tertarik untuk berkolaborasi atau sekadar berdiskusi? Jangan ragu untuk menghubungi!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`card-soft p-6 sm:p-8 text-center hover:border-primary/40 border border-border/50 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-2 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${250 + index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 mx-auto mb-4 sm:mb-5 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors text-sm sm:text-base">{link.label}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground break-all">{link.value}</p>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div 
            className={`text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 text-base sm:text-lg group"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Kirim Pesan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
