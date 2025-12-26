import { Linkedin, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="p-3 rounded-full bg-background text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081566457084"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mochammad Wahyu Ramadhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
