import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, ClipboardList, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Activity,
      title: t("services.personalTraining"),
      description: t("services.personalDesc"),
      price: t("services.personalPrice"),
      unit: t("services.personalUnit"),
      benefits: [t("services.personalB1"), t("services.personalB2"), t("services.personalB3"), t("services.personalB4")],
    },
    {
      icon: ClipboardList,
      title: t("services.trainingPlan"),
      description: t("services.planDesc"),
      price: t("services.planPrice"),
      unit: t("services.planUnit"),
      benefits: [t("services.planB1"), t("services.planB2"), t("services.planB3"), t("services.planB4")],
    },
  ];

  const packages = [
    {
      title: t("services.pack5title"),
      price: t("services.pack5price"),
      originalPrice: t("services.pack5original"),
      savings: t("services.pack5savings"),
      perSession: t("services.pack5per"),
      benefits: [t("services.pack5b1"), t("services.pack5b2"), t("services.pack5b3"), t("services.pack5b4")],
    },
    {
      title: t("services.pack10title"),
      price: t("services.pack10price"),
      originalPrice: t("services.pack10original"),
      savings: t("services.pack10savings"),
      perSession: t("services.pack10per"),
      popular: true,
      benefits: [t("services.pack10b1"), t("services.pack10b2"), t("services.pack10b3"), t("services.pack10b4")],
    },
  ];

  return (
    <section id="sluzby" className="scroll-mt-20 py-10 sm:py-10 md:py-10 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-10 space-y-3 sm:space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("services.title")}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t("services.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-5 sm:p-6 bg-secondary border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-scale flex flex-col h-full" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col justify-between h-full space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
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
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{service.description}</p>
                  <ul className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="hero" className="w-full mt-4 font-semibold" onClick={scrollToContact}>{t("services.orderTraining")}</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{t("services.packagesTitle")}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{t("services.packagesSubtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              onClick={() => setSelectedPackage(selectedPackage === index ? null : index)}
              className={`p-5 sm:p-6 relative overflow-hidden transition-all duration-300 animate-fade-in-scale cursor-pointer ${
                selectedPackage === index ? "shadow-[var(--shadow-glow)] bg-primary/10 border-primary" : "bg-secondary border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10">
                  <Sparkles className="w-3 h-3" />
                  <span className="whitespace-nowrap">{t("services.mostPopular")}</span>
                </div>
              )}
              <div className="space-y-3 sm:space-y-4">
                <div className="pt-7 sm:pt-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-1.5">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary break-all">{pkg.price}</span>
                    <span className="text-xs xs:text-sm sm:text-base text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-xs text-primary font-semibold mt-1">{pkg.perSession}</p>
                </div>
                <div className="inline-block bg-primary/20 border border-primary/30 rounded-lg px-2.5 sm:px-3 py-1.5">
                  <span className="text-xs sm:text-sm font-bold text-primary">💰 {t("services.save")} {pkg.savings}</span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "hero" : "outline"} className="w-full font-semibold" onClick={scrollToContact}>{t("services.orderPackage")}</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Card className="p-5 sm:p-6 bg-primary/10 border-primary/30 max-w-2xl mx-auto">
            <h4 className="text-lg sm:text-xl font-bold mb-2">{t("services.freeConsultation")}</h4>
            <p className="text-xs sm:text-sm text-foreground/80 mb-3 sm:mb-4">{t("services.freeConsultationDesc")}</p>
            <Button variant="hero" size="lg" onClick={scrollToContact} className="w-full sm:w-auto">{t("services.wantFree")}</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
