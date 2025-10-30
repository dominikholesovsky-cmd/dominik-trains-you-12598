import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, ClipboardList, Check, Sparkles } from "lucide-react";
import { useState } from "react";

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
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  
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
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 bg-secondary border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Icon & Title */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                      <p className="text-xs text-muted-foreground">{service.unit}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 min-w-0">
                    <div className="text-lg xs:text-xl sm:text-2xl font-bold text-primary break-all">{service.price}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="hero"
                  className="w-full mt-2"
                  onClick={scrollToContact}
                >
                  Objednat Trénink
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Package Heading */}
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Výhodné Balíčky</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Ušetřete při předplacení více tréninků</p>
        </div>

        {/* Packages */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              onClick={() => setSelectedPackage(selectedPackage === index ? null : index)}
              className={`p-5 sm:p-6 relative overflow-hidden transition-all duration-300 animate-fade-in-scale cursor-pointer ${
                selectedPackage === index
                  ? "shadow-[var(--shadow-glow)] bg-primary/10 border-primary"
                  : "bg-secondary border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10">
                  <Sparkles className="w-3 h-3" />
                  <span className="whitespace-nowrap">NEJOBLÍBENĚJŠÍ</span>
                </div>
              )}

              <div className="space-y-3 sm:space-y-4">
                {/* Title & Price */}
                <div className="pt-7 sm:pt-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-1.5">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary break-all">{pkg.price}</span>
                    <span className="text-xs xs:text-sm sm:text-base text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-xs text-primary font-semibold mt-1">{pkg.perSession}</p>
                </div>

                {/* Savings Badge */}
                <div className="inline-block bg-primary/20 border border-primary/30 rounded-lg px-2.5 sm:px-3 py-1.5">
                  <span className="text-xs sm:text-sm font-bold text-primary">💰 Ušetříte {pkg.savings}</span>
                </div>

                {/* Benefits */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground/80">{benefit}</span>
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
        <div className="mt-10 sm:mt-12 text-center">
          <Card className="p-5 sm:p-6 bg-primary/10 border-primary/30 max-w-2xl mx-auto">
            <h4 className="text-lg sm:text-xl font-bold mb-2">První konzultace ZDARMA! 🎁</h4>
            <p className="text-xs sm:text-sm text-foreground/80 mb-3 sm:mb-4">
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