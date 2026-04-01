import { Card } from "@/components/ui/card";
import { Award, Heart, Target, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/A1_05712.webp", alt: "Dominik-trenér" },
  { src: "/gallery-1.webp", alt: "Trénink klienta 1" },
  { src: "/gallery-2.webp", alt: "Trénink klienta 2" },
  { src: "/gallery-3.webp", alt: "Trénink klienta 3" },
];

const About = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((next: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(next);
      setFade(true);
    }, 200);
  }, []);

  const prev = () => goTo(current === 0 ? images.length - 1 : current - 1);
  const next = () => goTo(current === images.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

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
          <div className="relative animate-fade-in-scale group">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={images[current].src}
                alt={images[current].alt}
                className={`w-full aspect-[4/5] object-cover transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold">{t("about.name")}</p>
                <p className="text-muted-foreground">{t("about.role")}</p>
              </div>
            </div>
            {/* Minimal nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-primary w-4" : "bg-muted-foreground/30"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
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
