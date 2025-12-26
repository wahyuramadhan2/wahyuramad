import { Mail, Linkedin, ExternalLink, Send } from "lucide-react";

const ContactSection = () => {
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
      icon: ExternalLink,
      label: "Portfolio",
      value: "wahyuramadhan2.github.io",
      href: "https://wahyuramadhan2.github.io/wahyuportfolio/"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Hubungi Saya
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-soft p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-all text-center"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{link.label}</h3>
                  <p className="text-xs text-muted-foreground break-all">{link.value}</p>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="mailto:wahyuramadhan9090@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
