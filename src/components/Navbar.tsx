import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

const navLinks = [
  { label: "Shërbimet", href: "#services" },
  { label: "Para/Pas", href: "#before-after" },
  { label: "Çmimet", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakti", href: "#contact" },
];

const Navbar = ({ onBookClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                   ${isScrolled 
                     ? 'bg-background/95 backdrop-blur-lg shadow-soft py-3' 
                     : 'bg-transparent py-6'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className={`flex items-center gap-3 transition-colors duration-300
                       ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-display text-accent-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-display text-2xl hidden sm:block">Aesthetica</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent
                           ${isScrolled ? 'text-foreground' : 'text-primary-foreground/90'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+35569123456"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-accent
                         ${isScrolled ? 'text-foreground' : 'text-primary-foreground/90'}`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+355 69 123 4567</span>
            </a>
            <button
              onClick={onBookClick}
              className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold
                        transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors
                       ${isScrolled ? 'text-foreground hover:bg-secondary' : 'text-primary-foreground hover:bg-primary-foreground/10'}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
                   ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-primary/90 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col items-center justify-center gap-8 p-6
                        transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary-foreground text-2xl font-display hover:text-accent transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex flex-col items-center gap-4 mt-8">
            <a
              href="tel:+35569123456"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              +355 69 123 4567
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold
                        transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
