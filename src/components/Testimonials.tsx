import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { name: "Věra", text: t("testimonials.vera"), result: t("testimonials.veraResult") },
    { name: "Tomáš", text: t("testimonials.tomas"), result: t("testimonials.tomasResult") },
    { name: "Hana", text: t("testimonials.hana"), result: t("testimonials.hanaResult") },
  ];

  return (
    <section id="reference" className="scroll-mt-20 py-12 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in-scale relative" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-foreground/90 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                  <span className="text-sm font-medium text-primary">✓ {testimonial.result}</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{t("testimonials.satisfiedClient")}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
