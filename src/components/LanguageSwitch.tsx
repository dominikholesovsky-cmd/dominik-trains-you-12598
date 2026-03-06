import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "cs" ? "en" : "cs")}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/50 hover:border-primary/50 bg-secondary/50 hover:bg-secondary transition-all duration-200 text-xs font-semibold uppercase tracking-wide"
      aria-label={lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}
    >
      <span className={lang === "cs" ? "text-primary" : "text-muted-foreground"}>CZ</span>
      <span className="text-border">/</span>
      <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
    </button>
  );
};

export default LanguageSwitch;
