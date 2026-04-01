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

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), []);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getCardStyle = (index: number) => {
    const total = images.length;
    let diff = index - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
        filter: "brightness(1)",
      };
    }
    if (absDiff === 1) {
      const dir = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${dir * 60}px) scale(0.9)`,
        opacity: 0.6,
        zIndex: 20,
        filter: "brightness(0.7)",
      };
    }
    return {
      transform: `translateX(${diff > 0 ? 90 : -90}px) scale(0.8)`,
      opacity: 0.3,
      zIndex: 10,
      filter: "brightness(0.5)",
    };
  };

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
            {/* Stacked carousel */}
            <div className="relative w-full aspect-[4/5] mx-auto max-w-md">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  style={{
                    ...getCardStyle(i),
                    transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onClick={() => setCurrent(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {/* Name overlay on active */}
              <div className="absolute bottom-6 left-6 right-6 z-40 pointer-events-none">
                <p className="text-2xl font-bold">{t("about.name")}</p>
                <p className="text-muted-foreground">{t("about.role")}</p>
              </div>
              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-40 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-1.5"}`}
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
