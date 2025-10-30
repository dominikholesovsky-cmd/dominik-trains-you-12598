import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell, Instagram, Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Úvod", href: "#uvod" },
    { label: "Služby", href: "#sluzby" },
    { label: "Reference", href: "#reference" },
    { label: "O mně", href: "#o-mne" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "w-[95%] max-w-7xl"
            : "w-[90%] max-w-6xl"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border-primary/30 shadow-lg shadow-primary/20"
              : "bg-background/60 backdrop-blur-md border-border/50"
          }`}
        >
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 hover:opacity-10 transition-opacity duration-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]" />
          
          <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
            {/* Logo with Icon */}
            <button
              onClick={() => scrollToSection("#uvod")}
              className="flex items-center gap-2 font-bold text-sm sm:text-base lg:text-lg hover:text-primary transition-all group"
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-colors">
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span>Dominik Holešovský</span>
            </button>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4" />
                </button>
              ))}
            </div>

            {/* Desktop Right Side - CTA + Social */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://www.instagram.com/dominik.holesovsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:+420725961371"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="Telefon"
              >
                <Phone className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
              </a>
              <div className="w-px h-6 bg-border/50" />
              <Button
                variant="hero"
                size="sm"
                onClick={() => scrollToSection("#kontakt")}
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">Domluvit Trénink</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Mobile/Tablet Right Side */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <a
                href="tel:+420725961371"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                aria-label="Telefon"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
              </a>
              <button
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 animate-fade-in">
            <div className="w-full max-w-sm space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-6 py-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-xl font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}
              
              <div className="pt-4 space-y-3">
                <Button
                  variant="hero"
                  className="w-full text-lg py-6"
                  onClick={() => scrollToSection("#kontakt")}
                >
                  Domluvit Trénink
                </Button>
                
                <a
                  href="https://www.instagram.com/dominik.holesovsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl border border-border hover:border-primary/50 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">@dominik.holesovsky</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
