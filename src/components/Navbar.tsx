import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-sm" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="font-heading font-semibold text-xl text-foreground">
            Wahyu<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-[15px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:wahyuramadhan9090@gmail.com"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all"
          >
            Hubungi
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:wahyuramadhan9090@gmail.com"
                className="inline-block px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium mt-2"
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
