import { useLanguage, type Language } from "@/contexts/LanguageContext";

const options: { value: Language; label: string }[] = [
  { value: "cs", label: "CZ" },
  { value: "en", label: "EN" },
];

/** Decentní posuvný přepínač jazyka. */
const LanguageSwitch = ({ className = "" }: { className?: string }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="radiogroup"
      aria-label={t("nav.language")}
      className={`relative inline-grid grid-cols-2 items-center rounded-full bg-black/[0.06] p-[3px] ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-[3px] bottom-[3px] left-[3px] w-[calc(50%-3px)] rounded-full bg-white shadow-[0_1px_3px_rgba(20,20,18,0.18)] transition-transform duration-300 ease-out ${
          lang === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {options.map((option) => {
        const active = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setLang(option.value)}
            className={`relative z-10 min-w-[40px] rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitch;
