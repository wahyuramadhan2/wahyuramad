import { Mail, Linkedin, Facebook, Send } from "lucide-react";

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
      icon: Facebook,
      label: "Facebook",
      value: "Wahyu Ramadhan",
      href: "https://www.facebook.com/profile.php?id=100081566457084"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
          Hubungi Saya
        </h2>
        
        <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full" />
        
        <p className="text-muted-foreground max-w-md mx-auto text-center mb-16">
          Tertarik untuk berkolaborasi atau sekadar berdiskusi? Jangan ragu untuk menghubungi!
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="card-soft p-8 text-center hover:border-primary/30 border border-border/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto mb-5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{link.label}</h3>
                <p className="text-sm text-muted-foreground break-all">{link.value}</p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all text-lg"
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
