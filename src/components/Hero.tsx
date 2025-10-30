import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";
import heroImage from "@/assets/hero-trainer.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="uvod"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 animate-glow-pulse">
              <Dumbbell className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Dominik Holešovský
            <span className="block text-primary mt-2">Certifikovaný Osobní Trenér</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Více než 4 roky zkušeností • Desítky spokojených klientů • Posilovna Monstergym, Brno - Slatina
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Pomůžu vám dosáhnout vašich fitness cílů. Diagnostika pohybového aparátu, zdravý pohyb a efektivní nárůst síly s profesionálním přístupem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="hero"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Domluvit První Trénink
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("sluzby")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6 border-primary/50 hover:border-primary"
            >
              Zjistit Více
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Let Zkušeností</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Spokojených Klientů</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Profesionalita</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
