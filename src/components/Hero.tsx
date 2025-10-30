import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
      {/* Background with subtle overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 relative pt-20 sm:pt-24">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight px-2">
            Transformujte své tělo
            <span className="block text-primary mt-2 sm:mt-3 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              s profesionálním vedením
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Dominik Holešovský • Certifikovaný trenér s 4+ lety praxe
          </p>

          {/* Description */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Zaměřuji se na diagnostiku pohybového aparátu, prevenci zranění a efektivní růst síly. V Monstergym Brno-Slatina vám pomůžu dosáhnout trvalých výsledků.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4">
            <Button
              size="lg"
              variant="hero"
              onClick={scrollToContact}
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Domluvit První Trénink
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("sluzby")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-primary/50 hover:border-primary"
            >
              Zjistit Více
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-12 max-w-2xl mx-auto px-4">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">4+</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">Let Zkušeností</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">Spokojených Klientů</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">Profesionalita</div>
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
