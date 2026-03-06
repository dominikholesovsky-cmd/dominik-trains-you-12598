import { Card } from "@/components/ui/card";
import { Award, Heart, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Award, title: t("about.certTitle"), description: t("about.certDesc") },
    { icon: Heart, title: t("about.healthTitle"), description: t("about.healthDesc") },
    { icon: Target, title: t("about.planTitle"), description: t("about.planDesc") },
    { icon: TrendingUp, title: t("about.resultsTitle"), description: t("about.resultsDesc") },
  ];

  return (
    <section id="o-mne" className="scroll-mt-20 py-12 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">{t("about.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative animate-fade-in-scale">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img src="/A1_05712.webp" alt="Dominik-trenér" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold">{t("about.name")}</p>
                <p className="text-muted-foreground">{t("about.role")}</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">{t("about.name")}</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">{t("about.desc1")}</p>
              <p className="text-lg text-foreground/80 leading-relaxed">{t("about.desc2")}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 bg-secondary border-border hover:border-primary/50 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
