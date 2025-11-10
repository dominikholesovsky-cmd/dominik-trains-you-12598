import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="uvod"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay and subtle effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/gym.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/85 to-background"></div>
        
        {/* Subtle floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Content Container with Scroll Indicator on Side */}
      <div className="container mx-auto px-4 sm:px-6 z-10 relative pt-8 sm:pt-24">
        <div className="flex items-center justify-center gap-8 lg:gap-16">
          
          {/* Scroll Indicator - Left Side (hidden on mobile) */}
          <div className="hidden lg:flex flex-col items-center gap-4 animate-fade-in">
            <div className="text-sm text-muted-foreground uppercase tracking-widest writing-mode-vertical">
              Posuň
            </div>
            <div className="animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 bg-background/60 backdrop-blur-sm">
                <div className="w-1 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl text-center space-y-6 sm:space-y-8 animate-fade-in">
            {/* Main heading - Name */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight px-2">
                Dominik Holešovský
              </h1>
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary">
                Certifikovaný trenér
              </p>
            </div>

            {/* Subheading */}
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              4+ let praxe • Specialista na diagnostiku pohybového aparátu
            </p>

            {/* Description */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Transformujte své tělo s profesionálním vedením. Zaměřuji se na prevenci zranění, efektivní růst síly a trvalé výsledky.
            </p>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="hero"
                onClick={scrollToContact}
                className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                Domluvit První Trénink
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("sluzby")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-primary/50 hover:border-primary"
              >
                Zjistit Více
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-8 p-6">
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
                <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight"> Profesionalita
                </div>
              </div>
            </div>
          </div> {/* End Main Content */}

          {/* Decorative Right Element */}
          <div className="hidden lg:block w-16" />
        </div> {/* End Flex */}
      </div> {/* End Container */}
    </section>
  );
};

export default Hero;
