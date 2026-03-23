import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-card/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
        {/* EN speaking badge */}
        <span className="text-[11px] sm:text-xs text-muted-foreground">
          🇬🇧 {t("hero.enBadge")}
        </span>

        {/* Switcher */}
        <div className="flex items-center gap-1">
          <Globe className="w-3.5 h-3.5 text-muted-foreground" />
          <button
            onClick={() => setLang("cs")}
            className={`px-2 py-0.5 rounded text-[11px] sm:text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
              lang === "cs"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            CZ
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-0.5 rounded text-[11px] sm:text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
              lang === "en"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
