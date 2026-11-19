import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEW_URL } from "@/lib/links";

const Testimonials = () => {
  const { t } = useLanguage();

  const items = [
    { name: "Veronika (54)", title: t("testimonials.veraTitle"), story: t("testimonials.veraStory"), quote: t("testimonials.vera") },
    { name: "Michal (29)", title: t("testimonials.tomasTitle"), story: t("testimonials.tomasStory"), quote: t("testimonials.tomas") },
    { name: "Iveta (36)", title: t("testimonials.hanaTitle"), story: t("testimonials.hanaStory"), quote: t("testimonials.hana") },
  ];

  return (
    <section id="reference" className="scroll-mt-20 border-y border-border bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 sm:gap-12 py-16 sm:py-20 lg:py-24">
        <div data-reveal className="flex flex-col gap-3">
          <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("testimonials.title")}
          </h2>
          <p className="text-[17px] text-muted-foreground">{t("testimonials.subtitle")}</p>
        </div>
        <div
          data-reveal
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <figure
              key={item.name}
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="flex w-[84%] shrink-0 snap-start flex-col gap-4 rounded-[22px] bg-background p-6 sm:w-[60%] sm:p-8 lg:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(20,20,18,0.35)]"
            >
              <p className="font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-primary">
                {item.title}
              </p>
              <p className="font-medium text-foreground">{item.story}</p>
              <blockquote className="text-foreground/70">„{item.quote}“</blockquote>
              <figcaption className="mt-auto pt-2 font-semibold">{item.name}</figcaption>
            </figure>
          ))}
        </div>
        <div
          data-reveal
          className="flex flex-col items-start gap-4 rounded-[22px] border border-border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <p className="text-[17px] text-foreground/80">{t("testimonials.reviewAsk")}</p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-full border-[1.5px] border-[#CFCDC5] px-5 font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-background"
          >
            <Star className="h-[18px] w-[18px] text-[#E8A317] transition-transform duration-200 group-hover:rotate-12" aria-hidden="true" fill="currentColor" />
            {t("testimonials.reviewCta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
