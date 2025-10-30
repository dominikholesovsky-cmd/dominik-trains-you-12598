import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, ClipboardList, Check, Sparkles } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Osobní Trénink",
    description: "Komplexní přístup zaměřený na diagnostiku, zdravý pohyb a efektivní zvýšení síly.",
    price: "600 Kč",
    unit: "60 minut",
    benefits: [
      "Důkladná analýza pohybových vzorců",
      "Individuální tréninkový plán",
      "Prevence zranění",
      "Maximální efektivita",
    ],
  },
  {
    icon: ClipboardList,
    title: "Tréninkový Plán",
    description: "Profesionální plán ušitý přímo pro vaše potřeby a cíle.",
    price: "1 000 Kč",
    unit: "3 měsíce",
    benefits: [
      "Přesně podle vašich cílů",
      "Platnost 3 měsíce",
      "Online konzultace",
      "Kompletní instrukce",
    ],
  },
];

const packages = [
  {
    title: "Balíček 5 Tréninků",
    price: "2 800 Kč",
    originalPrice: "3 000 Kč",
    savings: "200 Kč",
    perSession: "560 Kč/trénink",
    benefits: [
      "5 osobních tréninků",
      "Flexibilní termíny",
      "Platnost 2 měsíce",
      "Ušetříte 200 Kč",
    ],
  },
  {
    title: "Balíček 10 Tréninků",
    price: "5 400 Kč",
    originalPrice: "6 000 Kč",
    savings: "600 Kč",
    perSession: "540 Kč/trénink",
    popular: true,
    benefits: [
      "10 osobních tréninků",
      "Flexibilní termíny",
      "Platnost 4 měsíce",
      "Ušetříte 600 Kč",
    ],
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sluzby" className="py-16 sm:py-20 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Služby & Ceník</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Transparentní ceny a jasné benefity pro vaši cestu ke zdraví
          </p>
        </div>

        {/* Individual Services */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-secondary border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{service.unit}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 min-w-0">
                    <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary break-all">{service.price}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Package Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Výhodné Balíčky</h3>
          <p className="text-sm sm:text-base text-muted-foreground">Ušetřete při předplacení více tréninků</p>
        </div>

        {/* Packages */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 relative overflow-hidden transition-all duration-300 animate-fade-in-scale ${
                pkg.popular
                  ? "bg-primary/10 border-primary/50 hover:border-primary shadow-[var(--shadow-glow)]"
                  : "bg-secondary border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-lg z-10">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">NEJOBLÍBENĚJŠÍ</span>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                {/* Title & Price */}
                <div className={pkg.popular ? "pt-8 sm:pt-10" : ""}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary break-all">{pkg.price}</span>
                    <span className="text-sm xs:text-base sm:text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-primary font-semibold mt-1">{pkg.perSession}</p>
                </div>

                {/* Savings Badge */}
                <div className="inline-block bg-primary/20 border border-primary/30 rounded-lg px-3 sm:px-4 py-2">
                  <span className="text-sm sm:text-base font-bold text-primary">💰 Ušetříte {pkg.savings}</span>
                </div>

                {/* Benefits */}
                <ul className="space-y-2 sm:space-y-3">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Objednat Balíček
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="p-6 sm:p-8 bg-primary/10 border-primary/30 max-w-2xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">První konzultace ZDARMA! 🎁</h4>
            <p className="text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6">
              Domluvte si nezávaznou konzultaci a seznamovací trénink zdarma. Společně nastavíme váš plán.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact} className="w-full sm:w-auto">
              Chci Konzultaci Zdarma
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;