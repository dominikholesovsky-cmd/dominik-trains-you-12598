import { Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ_COUNT = 9;

const Faq = () => {
  const { t } = useLanguage();

  const items = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`),
  }));

  // Strukturovaná data pro vyhledávače, generovaná ze stejných textů jako sekce.
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }).replace(/</g, "\\u003c");

  return (
    <section id="otazky" className="scroll-mt-20 border-y border-border bg-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-24">
        <div data-reveal className="flex flex-col gap-3 lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("faq.title")}
          </h2>
          <p className="max-w-[420px] text-[17px] text-muted-foreground">{t("faq.subtitle")}</p>
        </div>

        <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="flex flex-col">
          {items.map((item, i) => (
            <details key={i} className="group border-b border-border first:border-t">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] transition-colors hover:text-primary sm:text-[20px] [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground"
                >
                  <Plus className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </summary>
              <p className="max-w-[640px] pb-6 pr-12 text-[16px] leading-relaxed text-foreground/75 sm:text-[17px]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </section>
  );
};

export default Faq;
