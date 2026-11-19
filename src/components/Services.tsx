import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Plan = {
  title: string;
  unit: string;
  price: string;
  original?: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
};

const Services = () => {
  const { t } = useLanguage();

  const plans: Plan[] = [
    {
      title: t("pricing.personalTitle"),
      unit: t("pricing.personalUnit"),
      price: t("pricing.personalPrice"),
      bullets: [t("pricing.personalB1"), t("pricing.personalB2"), t("pricing.personalB3")],
      cta: t("pricing.personalCta"),
    },
    {
      title: t("pricing.packTitle"),
      unit: t("pricing.packUnit"),
      price: t("pricing.packPrice"),
      original: t("pricing.packOriginal"),
      bullets: [t("pricing.packB1"), t("pricing.packB2"), t("pricing.packB3")],
      cta: t("pricing.packCta"),
      featured: true,
    },
    {
      title: t("pricing.planTitle"),
      unit: t("pricing.planUnit"),
      price: t("pricing.planPrice"),
      bullets: [t("pricing.planB1"), t("pricing.planB2"), t("pricing.planB3")],
      cta: t("pricing.planCta"),
    },
  ];

  return (
    <section id="cenik" className="scroll-mt-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("pricing.title")}
          </h2>
          <p className="text-[17px] text-muted-foreground">{t("pricing.subtitle")}</p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col gap-5 rounded-3xl p-8 sm:p-9 ${
                plan.featured ? "bg-forest text-[#F6F5F1]" : "border border-border bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-lime px-3 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-forest">
                  {t("pricing.best")}
                </span>
              )}
              <div>
                <h3 className="font-display text-[22px] font-bold">{plan.title}</h3>
                <p className={`mt-1 text-[15px] ${plan.featured ? "text-[#B9C4BD]" : "text-muted-foreground"}`}>
                  {plan.unit}
                </p>
              </div>
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="font-display text-5xl font-extrabold tracking-[-0.03em]">{plan.price}</p>
                {plan.original && (
                  <p className="text-[#B9C4BD] line-through">
                    <span className="sr-only">{t("pricing.originalPrice")}: </span>
                    {plan.original}
                  </p>
                )}
              </div>
              <ul className="flex flex-col gap-2.5">
                {plan.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`flex items-start gap-2.5 ${plan.featured ? "text-[#D7DED9]" : "text-foreground/75"}`}
                  >
                    <Check
                      className={`mt-[3px] h-[18px] w-[18px] shrink-0 ${plan.featured ? "text-lime" : "text-primary"}`}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-auto inline-flex min-h-[48px] items-center justify-center rounded-full px-6 font-semibold transition-colors ${
                  plan.featured
                    ? "bg-lime font-bold text-forest hover:bg-[hsl(80_80%_64%)]"
                    : "border-[1.5px] border-[#CFCDC5] text-foreground hover:border-foreground/40"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-[15px] text-muted-foreground">
          {t("pricing.smallPackLabel")} <strong className="font-semibold text-foreground">{t("pricing.smallPack")}</strong>{" "}
          {t("pricing.smallPackDetail")}
        </p>
      </div>
    </section>
  );
};

export default Services;
