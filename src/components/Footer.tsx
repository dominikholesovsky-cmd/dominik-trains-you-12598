import { Dumbbell } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-card py-4 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/20">
            <Dumbbell className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl">Dominik Holešovský</span>
        </div>
        <div className="text-sm text-white text-center sm:text-left">
          © {currentYear} Dominik Holešovský | IČO: 14147505 | {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
