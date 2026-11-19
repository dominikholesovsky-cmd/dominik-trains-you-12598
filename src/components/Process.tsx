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
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 sm:gap-12 py-16 sm:py-20 lg:py-24">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[560px] font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("process.title")}
          </h2>
          <p className="max-w-[420px] text-[17px] text-muted-foreground">{t("process.subtitle")}</p>
        </div>
        <ol className="grid gap-3 sm:gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.n}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="group grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 rounded-[22px] bg-background p-5 transition-colors duration-300 hover:bg-accent/60 sm:p-8 md:flex md:flex-col md:gap-3.5"
            >
              <span className="row-span-2 flex h-11 w-11 items-center justify-center rounded-full bg-white font-display text-[15px] font-bold text-primary transition-transform duration-300 group-hover:translate-x-1 md:h-auto md:w-auto md:justify-start md:rounded-none md:bg-transparent">{step.n}</span>
              <h3 className="self-center font-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">{step.title}</h3>
              <p className="text-foreground/75">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
