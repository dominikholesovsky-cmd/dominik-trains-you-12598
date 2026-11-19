import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEW_URL, INSTAGRAM_URL } from "@/lib/links";
import TermsDialog from "./TermsDialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 pb-10 text-sm text-muted-foreground">
      <div className="flex items-center gap-4 border-b border-border pb-6">
        <img
          src="/recenze-qr.png"
          alt={t("footer.qrAlt")}
          width={240}
          height={240}
          loading="lazy"
          className="hidden h-14 w-14 rounded-md bg-white p-1 opacity-80 md:block"
        />
        <p>
          {t("footer.clients")}{" "}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            {t("footer.review")}
          </a>
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
