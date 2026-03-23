import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col items-end gap-2">
      {/* Floating switcher pill */}
      <div className="flex items-center gap-1 bg-card/90 backdrop-blur-md border border-border/60 rounded-full px-2 py-1.5 shadow-lg shadow-primary/10">
        <Globe className="w-3.5 h-3.5 text-primary ml-1" />
        <button
          onClick={() => setLang("cs")}
          className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
            lang === "cs"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          CZ
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
            lang === "en"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
      </div>

      {/* EN badge with arrow */}
      <div className="flex items-center gap-1 animate-fade-in">
        <span className="bg-accent/90 text-accent-foreground text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
          🇬🇧 {t("hero.enBadge")}
        </span>
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          className="text-accent rotate-[-30deg] -ml-0.5"
        >
          <path
            d="M2 14C6 12 10 8 16 4M16 4C14 6 13 8 12 10M16 4C13 5 11 6 10 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitch;
