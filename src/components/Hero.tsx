import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { id: "clients", value: "100+", label: t("hero.clients") },
    { id: "price", value: t("hero.priceValue"), label: t("hero.price") },
    { id: "lang", value: "CZ / EN", label: t("hero.languages") },
  ];

  return (
    <section id="uvod" className="scroll-mt-20">
      <div className="mx-auto grid max-w-[1240px] gap-y-7 px-3 pb-16 pt-2 sm:px-6 sm:pt-12 lg:grid-cols-2 lg:gap-x-14 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none relative z-10 col-start-1 row-start-1 flex min-w-0 flex-col gap-3 self-end p-5 pb-6 text-white sm:gap-7 sm:p-8 lg:pointer-events-auto lg:col-start-1 lg:row-start-1 lg:p-0 lg:text-foreground">
          <p data-reveal className="text-[11px] font-semibold uppercase tracking-[0.06em] text-lime min-[380px]:text-xs sm:text-sm sm:tracking-[0.08em] lg:text-primary">
            {t("hero.eyebrow")}
          </p>
          <h1
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="font-display text-[40px] font-extrabold leading-[0.98] tracking-[-0.035em] [text-wrap:balance] sm:text-[56px] lg:text-[76px] xl:text-[84px]"
          >
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="group relative col-start-1 row-start-1 min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <div className="overflow-hidden rounded-3xl sm:rounded-[28px]">
            <img
              src="/hero-dominik.webp"
              alt={t("hero.imageAlt")}
              width={1600}
              height={1600}
              fetchPriority="high"
              className="block aspect-[4/5] w-full object-cover object-[50%_20%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] sm:aspect-[4/3] sm:object-[50%_30%] lg:aspect-square lg:object-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 via-45% to-transparent lg:hidden"
            />
          </div>
          <div className="animate-float-soft absolute bottom-5 left-5 hidden items-center gap-3 rounded-2xl bg-white px-3.5 py-3 shadow-[0_12px_32px_rgba(20,20,18,0.12)] lg:flex lg:gap-3.5 lg:rounded-[18px] lg:px-5 lg:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary sm:h-11 sm:w-11">
              <Check className="h-5 w-5 sm:h-[22px] sm:w-[22px]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold sm:text-[15px]">{t("hero.badgeTitle")}</p>
              <p className="text-xs text-muted-foreground sm:text-[13px]">{t("hero.badgeDesc")}</p>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-7 px-3 sm:px-0 lg:col-start-1 lg:row-start-2 lg:self-start">
          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="max-w-[540px] text-[17px] leading-relaxed text-foreground/75 sm:text-[19px]"
          >
            {t("hero.description")}
          </p>
          <div
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#kontakt"
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-5 text-[15px] font-semibold min-[380px]:text-base sm:px-7 text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(150_55%_21%)] hover:shadow-[0_10px_24px_-10px_rgba(31,107,69,0.7)] active:translate-y-0 sm:w-auto sm:text-[17px]"
            >
              {t("hero.cta")}
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#cenik"
              className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border-[1.5px] border-[#CFCDC5] px-6 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-white sm:w-auto sm:text-[17px]"
            >
              {t("hero.pricing")}
            </a>
          </div>
          <dl
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            className="grid grid-cols-3 gap-3 border-t border-border pt-5 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col-reverse gap-0.5">
                <dt className="text-[13px] leading-snug text-muted-foreground sm:text-sm">{stat.label}</dt>
                <dd className="whitespace-nowrap font-display text-[22px] font-bold sm:text-[28px]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
