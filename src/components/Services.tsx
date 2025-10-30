import { Card } from "@/components/ui/card";
import { Activity, Calendar, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Osobní Tréninky",
    description: "Komplexní přístup zaměřený na diagnostiku pohybového aparátu, zdravý pohyb a efektivní zvýšení síly.",
    benefits: [
      "Důkladná analýza pohybových vzorců",
      "Individuální tréninkový plán",
      "Prevence zranění",
      "Maximální bezpečnost a efektivita",
    ],
  },
  {
    icon: Calendar,
    title: "Balíčky Tréninků",
    description: "Flexibilní balíčky přizpůsobené vašim časovým možnostem a fitness cílům s výhodným ceníkem.",
    benefits: [
      "Pravidelný progres a kontrola",
      "Výhodné ceny při předplacení",
      "Přizpůsobitelný časový harmonogram",
      "Dlouhodobá podpora a motivace",
    ],
  },
  {
    icon: ClipboardList,
    title: "Tréninkové Plány na Míru",
    description: "Profesionálně vypracované plány ušité přímo pro vaše potřeby, cíle a možnosti tréninku.",
    benefits: [
      "Přesně podle vašich cílů",
      "Flexibilita v provádění",
      "Online konzultace a úpravy",
      "Komplexní instrukce k cvikům",
    ],
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Moje Služby</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionální tréninkové služby pro každého, kdo chce dosáhnout svých fitness cílů
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-secondary border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
