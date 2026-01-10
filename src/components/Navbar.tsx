import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Tentang" },
    { href: "#skills", label: "Keahlian" },
    { href: "#experience", label: "Pengalaman" },
    { href: "#education", label: "Pendidikan" },
    { href: "#contact", label: "Kontak" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled 
          ? "bg-card/90 backdrop-blur-md shadow-sm border-b border-border/50" 
          : ""
      }`}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="font-heading font-semibold text-lg sm:text-xl text-foreground">
            Wahyu<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-[15px] link-underline focus-visible:outline-none focus-visible:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <ThemeToggle />
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            >
              Hubungi
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="container px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:wahyuramadhan9090@gmail.com"
                className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-primary text-primary-foreground font-medium mt-2 text-sm sm:text-base"
              >
                Hubungi
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
