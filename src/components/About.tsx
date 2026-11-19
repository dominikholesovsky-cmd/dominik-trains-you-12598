import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const tags = [t("about.cert"), t("about.tag2"), t("about.tag3")];
  const gallery = [
    { src: "/gallery-1-sm.webp", alt: t("about.gallery1") },
    { src: "/gallery-2-sm.webp", alt: t("about.gallery2") },
    { src: "/gallery-3-sm.webp", alt: t("about.gallery3") },
  ];

  return (
    <section id="o-mne" className="scroll-mt-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-16 sm:gap-12 sm:py-20 lg:flex-row lg:items-center lg:gap-14 lg:py-24">
        <img
          data-reveal
          src="/about-dominik.webp"
          alt={t("about.imageAlt")}
          width={1000}
          height={1378}
          loading="lazy"
          className="aspect-[4/3] w-full max-w-[480px] self-center rounded-3xl object-cover object-[50%_25%] sm:aspect-[4/5] sm:rounded-[28px] sm:object-center lg:flex-1"
        />
        <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="flex min-w-0 flex-1 flex-col gap-5">
          <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("about.title")}
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">{t("about.desc1")}</p>
          <p className="text-lg leading-relaxed text-foreground/80">{t("about.desc2")}</p>
          <ul className="flex flex-wrap gap-2.5">
            {tags.map((tag, i) => (
              <li key={i} className="rounded-full bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground">
                {tag}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-2 pt-2 sm:gap-3">
            {gallery.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={720}
                  height={960}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.05]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
