import { Linkedin, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 bg-card border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mochammad-wahyu-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081566457084"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mochammad Wahyu Ramadhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
