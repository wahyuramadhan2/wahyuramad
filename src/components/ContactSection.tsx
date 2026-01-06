import { useEffect, useState } from "react";
import { Mail, Linkedin, Facebook, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Ultra smooth parallax with organic feel
  const smoothParallax = (value: number, factor: number, offset: number = 3000) => {
    const adjusted = value - offset;
    const progress = adjusted * factor * 0.12;
    return progress * Math.cos(adjusted * 0.001);
  };

  const getParallax = (xFactor: number, yFactor: number, rotationFactor: number = 0, offset: number = 3000) => {
    const x = smoothParallax(scrollY, xFactor, offset);
    const y = smoothParallax(scrollY, yFactor, offset);
    const rotation = (scrollY - offset) * rotationFactor * 0.015;
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
      transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
    };
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Organic morphing shapes */}
      <div 
        className="shape-blob w-[420px] h-[420px] bg-primary/35 -top-40 -right-40"
        style={getParallax(-0.2, 0.22, -0.4)}
      />
      <div 
        className="shape-blob w-[380px] h-[380px] bg-accent/25 -bottom-32 -left-32"
        style={getParallax(0.18, -0.2, 0.35)}
      />
      <div 
        className="shape-glow w-[340px] h-[340px] bg-accent/35 bottom-1/4 right-[15%]"
        style={getParallax(-0.15, 0.12, 0.2)}
      />
      <div 
        className="shape-circle w-52 h-52 bottom-16 left-[8%]"
        style={getParallax(0.25, -0.28, 0.6)}
      />
      <div 
        className="shape-dots top-16 left-[12%]"
        style={getParallax(0.15, 0.2, 0.25)}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
            Hubungi Saya
          </h2>
          
          <div className={`w-12 h-1 bg-primary mx-auto mb-8 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          
          <p 
            className={`text-muted-foreground max-w-md mx-auto text-center mb-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Tertarik untuk berkolaborasi atau sekadar berdiskusi? Jangan ragu untuk menghubungi!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`card-soft p-8 text-center hover:border-primary/30 border border-border/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${250 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto mb-5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{link.label}</h3>
                <p className="text-sm text-muted-foreground break-all">{link.value}</p>
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
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Kirim Pesan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;