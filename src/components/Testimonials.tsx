import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Petra K.",
    text: "S Dominikem jsem konečně pochopila správnou techniku a po letech bolestí zad se cítím skvěle. Jeho přístup je velmi profesionální a motivující.",
    result: "Zbavila se bolestí zad",
  },
  {
    name: "Martin S.",
    text: "Skvělý trenér, který má znalosti a umí je předat. Díky jeho diagnostice jsem zlepšil svůj výkon a zvýšil sílu bezpečným způsobem.",
    result: "Zvýšení síly o 30%",
  },
  {
    name: "Jana M.",
    text: "Dominik je velmi trpělivý a dokáže vše srozumitelně vysvětlit. Tréninkový plán na míru mi pomohl dosáhnout cílů, které jsem si stanovila.",
    result: "Dosažení fitness cílů",
  },
];

const Testimonials = () => {
  return (
    <section id="reference" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Co říkají klienti</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Přečtěte si zkušenosti těch, kteří již dosáhli svých cílů
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in-scale relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Testimonial Text */}
                <p className="text-foreground/90 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Result Badge */}
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                  <span className="text-sm font-medium text-primary">
                    ✓ {testimonial.result}
                  </span>
                </div>

                {/* Name */}
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Spokojený klient</p>
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
