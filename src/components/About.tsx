import { Card } from "@/components/ui/card";
import { Award, Heart, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certifikace",
    description: "Profesionální certifikace v oblasti osobního tréninku a pohybové diagnostiky",
  },
  {
    icon: Heart,
    title: "Zdravý Přístup",
    description: "Zaměření na prevenci zranění a dlouhodobé zdraví pohybového aparátu",
  },
  {
    icon: Target,
    title: "Individuální Plány",
    description: "Každý trénink je přizpůsoben vašim specifickým potřebám a cílům",
  },
  {
    icon: TrendingUp,
    title: "Prokazatelné Výsledky",
    description: "Systematický přístup vedoucí k měřitelnému pokroku a úspěchu",
  },
];

const About = () => {
  return (
    <section id="o-mne" className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">O mně</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Váš partner na cestě ke zdravějšímu a silnějšímu tělu
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src="/A1_05712.webp"
                alt="Dominik-trenér"
                className="w-full h-[700px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div> */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold">Dominik Holešovský</p>
                <p className="text-muted-foreground">Fitness Trenér</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Dominik Holešovský
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Jsem certifikovaný osobní trenér s více než 4 lety zkušeností. Specializuji se na diagnostiku pohybového aparátu, zdravý pohyb a efektivní nárůst síly.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Můj přístup kombinuje vědecké poznatky s praktickými zkušenostmi, abych pomohl každému klientovi dosáhnout jeho cílů bezpečně a efektivně.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-secondary border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
