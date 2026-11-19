import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/links";

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
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:py-24">
        <img
          src="/about-dominik.webp"
          alt={t("about.imageAlt")}
          width={1000}
          height={1378}
          loading="lazy"
          className="aspect-[4/5] w-full max-w-[480px] self-center rounded-[28px] object-cover lg:flex-1"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            {t("about.title")}
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">{t("about.desc1")}</p>
          <p className="text-lg leading-relaxed text-foreground/80">{t("about.desc2")}</p>
          <ul className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground">
                {tag}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {gallery.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={720}
                height={960}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
            ))}
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 self-start font-semibold text-primary hover:text-[hsl(150_55%_21%)]"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            {t("about.instagram")} <span className="font-normal text-muted-foreground">{INSTAGRAM_HANDLE}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
