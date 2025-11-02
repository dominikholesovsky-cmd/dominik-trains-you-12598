import { Dumbbell, Mail, MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-4 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/20">
                <Dumbbell className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl">Dominik Holešovský</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Certifikovaný osobní trenér se zaměřením na diagnostiku, zdravý pohyb a sílu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h3 className="font-bold text-lg">Rychlé odkazy</h3>
            <ul className="space-y-2">
              {[
                { label: "Služby", href: "#sluzby" },
                { label: "Reference", href: "#reference" },
                { label: "O mně", href: "#o-mne" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Monstergym, Brno - Slatina</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+420725961371" className="text-muted-foreground hover:text-primary transition-colors">
                  +420 725 961 371
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:dominik.holesovsky@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  dominik.holesovsky@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://www.instagram.com/dominik.holesovsky/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  @dominik.holesovsky
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dominik Holešovský. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
