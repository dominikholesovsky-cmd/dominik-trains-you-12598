import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="uvod" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/gym.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/85 to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 relative pt-8 sm:pt-24">
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <div className="max-w-5xl text-center space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium">
                <Globe className="w-3.5 h-3.5" />
                {t("hero.enBadge")}
              </div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight px-2">
                {t("hero.title")}
              </h1>
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary">
                {t("hero.subtitle")}
              </p>
            </div>

            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {t("hero.experience")}
            </p>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto px-4">
              <Button size="lg" variant="hero" onClick={scrollToContact} className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                {t("hero.cta")}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById("sluzby")?.scrollIntoView({ behavior: "smooth" })} className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-primary/50 hover:border-primary">
                {t("hero.learnMore")}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-8 p-6">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{t("hero.years")}</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{t("hero.clients")}</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{t("hero.professionalism")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
