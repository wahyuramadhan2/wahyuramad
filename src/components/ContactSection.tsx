import { useEffect, useState, useRef } from "react";
import { Mail, Linkedin, Facebook, Send } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Decorative shapes with parallax */}
      <div 
        className="shape-blob w-80 h-80 bg-primary/15 -top-40 -right-40"
        style={{ transform: `translateY(${(scrollY - 3000) * 0.05}px)` }}
      />
      <div className="shape-circle w-40 h-40 bottom-20 left-[10%] opacity-20" />
      <div className="shape-dots top-20 left-[15%] opacity-40" />

      <div className="container relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
            Hubungi Saya
          </h2>
          
          <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full" />
          
          <p className="text-muted-foreground max-w-md mx-auto text-center mb-16">
            Tertarik untuk berkolaborasi atau sekadar berdiskusi? Jangan ragu untuk menghubungi!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="card-soft p-8 text-center hover:border-primary/30 border border-border/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto mb-5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{link.label}</h3>
                <p className="text-sm text-muted-foreground break-all">{link.value}</p>
              </a>
            ))}
          </div>

          <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 transition-all text-lg"
            >
              <Send className="w-5 h-5" />
              Kirim Pesan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
