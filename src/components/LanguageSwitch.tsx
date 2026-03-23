import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[10px] sm:text-[11px] text-muted-foreground/70">🇬🇧</span>
      <button
        onClick={() => setLang("cs")}
        className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
          lang === "cs"
            ? "text-primary"
            : "text-muted-foreground/50 hover:text-foreground/70"
        }`}
      >
        CZ
      </button>
      <span className="text-muted-foreground/30 text-[10px]">/</span>
      <button
        onClick={() => setLang("en")}
        className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
          lang === "en"
            ? "text-primary"
            : "text-muted-foreground/50 hover:text-foreground/70"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
