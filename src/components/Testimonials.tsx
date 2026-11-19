import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const items = [
    { name: "Věra", title: t("testimonials.veraTitle"), story: t("testimonials.veraStory"), quote: t("testimonials.vera") },
    { name: "Tomáš", title: t("testimonials.tomasTitle"), story: t("testimonials.tomasStory"), quote: t("testimonials.tomas") },
    { name: "Hana", title: t("testimonials.hanaTitle"), story: t("testimonials.hanaStory"), quote: t("testimonials.hana") },
  ];

  return (
    <section id="reference" className="scroll-mt-20 border-y border-border bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("testimonials.title")}
          </h2>
          <p className="text-[17px] text-muted-foreground">{t("testimonials.subtitle")}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <figure key={item.name} className="flex flex-col gap-4 rounded-[22px] bg-background p-8">
              <p className="font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-primary">
                {item.title}
              </p>
              <p className="font-medium text-foreground">{item.story}</p>
              <blockquote className="text-foreground/70">„{item.quote}“</blockquote>
              <figcaption className="mt-auto pt-2 font-semibold">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
