import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "100+", label: t("hero.clients") },
    { value: t("hero.priceValue"), label: t("hero.price") },
    { value: "CZ / EN", label: t("hero.languages") },
  ];

  return (
    <section id="uvod" className="scroll-mt-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 pb-20 pt-10 sm:px-6 sm:pt-14 lg:flex-row lg:items-center lg:gap-14 lg:pb-24 lg:pt-16">
        <div className="flex min-w-0 flex-1 flex-col gap-7">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary sm:text-sm">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-[44px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[76px] xl:text-[84px]">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>
          <p className="max-w-[540px] text-lg leading-relaxed text-foreground/75 sm:text-[19px]">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-colors hover:bg-[hsl(150_55%_21%)] sm:text-[17px]"
            >
              {t("hero.cta")}
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href="#cenik"
              className="inline-flex min-h-[52px] items-center rounded-full border-[1.5px] border-[#CFCDC5] px-6 text-base font-semibold text-foreground transition-colors hover:border-foreground/40 sm:text-[17px]"
            >
              {t("hero.pricing")}
            </a>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-5 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-[13px] leading-snug text-muted-foreground sm:text-sm">{stat.label}</dt>
                <dd className="whitespace-nowrap font-display text-[22px] font-bold sm:text-[28px]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-w-0 flex-1">
          <img
            src="/hero-dominik.webp"
            alt={t("hero.imageAlt")}
            width={1600}
            height={1600}
            fetchPriority="high"
            className="block aspect-[5/6] w-full rounded-[28px] object-cover object-center lg:aspect-square"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-3.5 rounded-[18px] bg-white px-4 py-3.5 shadow-[0_12px_32px_rgba(20,20,18,0.12)] sm:bottom-5 sm:left-5 sm:px-5 sm:py-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <Check className="h-[22px] w-[22px]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[15px] font-semibold">{t("hero.badgeTitle")}</p>
              <p className="text-[13px] text-muted-foreground">{t("hero.badgeDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
