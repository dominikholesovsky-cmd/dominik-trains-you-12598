import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <span className="hidden xl:inline text-xs text-muted-foreground whitespace-nowrap">
        {t("hero.enBadge")}
      </span>
      <div className="flex items-center gap-1">
        <Globe className="w-4 h-4 text-muted-foreground" />
        <button
          onClick={() => setLang("cs")}
          className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
            lang === "cs"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          CZ
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
            lang === "en"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitch;
