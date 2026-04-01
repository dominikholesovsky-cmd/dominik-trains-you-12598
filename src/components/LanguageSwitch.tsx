import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative inline-flex items-center bg-muted/60 rounded-full p-0.5 border border-border/40">
      {/* Sliding indicator */}
      <div
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-primary shadow-sm transition-all duration-300 ease-out ${
          lang === "cs" ? "left-0.5" : "left-[calc(50%+2px)]"
        }`}
      />
      <button
        onClick={() => setLang("cs")}
        className={`relative z-10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${
          lang === "cs" ? "text-primary-foreground" : "text-muted-foreground/60 hover:text-foreground/80"
        }`}
      >
        CZ
      </button>
      <button
        onClick={() => setLang("en")}
        className={`relative z-10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${
          lang === "en" ? "text-primary-foreground" : "text-muted-foreground/60 hover:text-foreground/80"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
