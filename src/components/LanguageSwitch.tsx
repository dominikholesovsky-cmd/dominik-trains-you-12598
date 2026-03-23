import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex items-center gap-2 relative">
      {/* Cartoon arrow + badge */}
      <div className="hidden xl:flex items-center gap-1 absolute right-full mr-2 whitespace-nowrap">
        <span className="bg-accent text-accent-foreground text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg animate-pulse">
          {t("hero.enBadge")}
        </span>
        {/* SVG cartoon arrow */}
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent -ml-1"
        >
          <path
            d="M2 18C8 18 14 14 20 8M20 8C18 12 17 14 16 16M20 8C16 8 14 9 12 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

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
