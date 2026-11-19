import { useEffect, useState } from "react";
import { Instagram, Menu, Phone, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { INSTAGRAM_URL, PHONE_HREF } from "@/lib/links";
import LanguageSwitch from "./LanguageSwitch";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const navItems = [
    { label: t("nav.process"), href: "#jak" },
    { label: t("nav.pricing"), href: "#cenik" },
    { label: t("nav.references"), href: "#reference" },
    { label: t("nav.about"), href: "#o-mne" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3">
        <a
          href="#uvod"
          onClick={() => setIsOpen(false)}
          className="font-display text-[17px] font-bold tracking-tight text-foreground sm:text-lg"
        >
          Dominik Holešovský
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[15px] text-foreground/75 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch className="hidden sm:inline-grid" />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group hidden h-11 w-11 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground lg:inline-flex"
          >
            <Instagram className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          </a>
          <a
            href="#kontakt"
            className="hidden min-h-[44px] items-center rounded-full bg-primary px-5 text-[15px] font-semibold text-primary-foreground hover:bg-[hsl(150_55%_21%)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(31,107,69,0.7)] active:translate-y-0 md:inline-flex"
          >
            {t("nav.cta")}
          </a>
          <a
            href={PHONE_HREF}
            aria-label={t("nav.phone")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 hover:bg-black/5 lg:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.menu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-black/5 lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1 px-6 pb-6 pt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 font-display text-xl font-semibold text-foreground hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-3">
              <LanguageSwitch />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-foreground/80"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground"
            >
              {t("hero.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
