import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { INSTAGRAM_URL } from "@/lib/links";
import TermsDialog from "./TermsDialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 pb-10 text-sm text-muted-foreground">
      <p suppressHydrationWarning>
        © {currentYear} Dominik Holešovský · IČO 14147505 · {t("footer.rights")}
      </p>
      <div className="flex items-center gap-5">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 hover:text-foreground"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          Instagram
        </a>
        <TermsDialog
          trigger={
            <button type="button" className="min-h-[44px] underline-offset-2 hover:text-foreground hover:underline">
              {t("footer.terms")}
            </button>
          }
        />
      </div>
    </footer>
  );
};

export default Footer;
