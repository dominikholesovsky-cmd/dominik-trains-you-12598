import { Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";
import { INSTAGRAM_URL } from "@/lib/links";
import Terms from "./Terms";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 pb-10 text-sm text-muted-foreground sm:px-6">
      <p>
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
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="min-h-[44px] underline-offset-2 hover:text-foreground hover:underline">
              {t("footer.terms")}
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-[95vw] sm:max-w-2xl lg:max-w-4xl">
            <DialogHeader>
              <DialogTitle>{t("contact.termsDialogTitle")}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[70vh] pr-4">
              <Terms />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
};

export default Footer;
