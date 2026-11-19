import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    { n: "01", title: t("process.s1Title"), desc: t("process.s1Desc") },
    { n: "02", title: t("process.s2Title"), desc: t("process.s2Desc") },
    { n: "03", title: t("process.s3Title"), desc: t("process.s3Desc") },
  ];

  return (
    <section id="jak" className="scroll-mt-20 border-y border-border bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[560px] font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("process.title")}
          </h2>
          <p className="max-w-[420px] text-[17px] text-muted-foreground">{t("process.subtitle")}</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="flex flex-col gap-3.5 rounded-[22px] bg-background p-8">
              <span className="font-display text-[15px] font-bold text-primary">{step.n}</span>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{step.title}</h3>
              <p className="text-foreground/75">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
