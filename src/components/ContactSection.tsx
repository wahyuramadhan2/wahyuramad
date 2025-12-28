import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "wahyuramadhan9090@gmail.com",
      href: "mailto:wahyuramadhan9090@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/mochammad-wahyu-ramadhan",
      href: "https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Surabaya, Jawa Timur",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding section-alt relative overflow-hidden" ref={sectionRef}>
      {/* Subtle decorative elements */}
      <div className="shape-circle w-48 h-48 bottom-16 left-[8%]" />
      <div className="shape-blob w-[300px] h-[300px] bg-primary/10 -top-32 -right-32" />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Hubungi Saya
          </h2>
          <div className={`w-12 h-1 bg-primary mx-auto mb-4 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <p className={`text-muted-foreground max-w-md mx-auto transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Tertarik untuk berdiskusi tentang riset, kolaborasi, atau peluang karier? Saya terbuka untuk kesempatan baru.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contactInfo.map((info, index) => {
              const Content = (
                <div className="flex flex-col items-center text-center p-5 rounded-xl bg-background border border-border/50">
                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">{info.label}</h3>
                  <p className="text-xs text-muted-foreground break-all">{info.value}</p>
                </div>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.label !== "Email" ? "_blank" : undefined}
                  rel={info.label !== "Email" ? "noopener noreferrer" : undefined}
                  className={`hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  {Content}
                </a>
              ) : (
                <div
                  key={info.label}
                  className={`rounded-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  {Content}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div 
            className={`text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Send className="w-4 h-4" />
              Kirim Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
