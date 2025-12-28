import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-heading font-medium text-foreground">
              Wahyu<span className="text-primary">.</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Psychology × Data Science
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="p-2.5 rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            © {currentYear} Mochammad Wahyu Ramadhan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
