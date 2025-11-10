import { Dumbbell, Mail, MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactItems = [
    { icon: MapPin, label: "Monstergym, Brno - Slatina", link: "https://www.google.com/maps/place/MONSTER+Gym/@49.1764238,16.6855436,17z" },
    { icon: Phone, label: "+420 725 961 371", link: "tel:+420725961371" },
    { icon: Mail, label: "dominik.holesovsky@gmail.com", link: "mailto:dominik.holesovsky@gmail.com" },
    { icon: Instagram, label: "@dominik.holesovsky", link: "https://www.instagram.com/dominik.holesovsky/" },
  ];

  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

        {/* Brand */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <Dumbbell className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-xl">Dominik Holešovský</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Certifikovaný osobní trenér se zaměřením na diagnostiku, zdravý pohyb a sílu.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Dominik Holešovský | IČO: 14147505 | Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
