import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cookie } from "lucide-react";
import Terms from "./Terms";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setTimeout(() => setIsVisible(true), 1000);
  }, []);

  const acceptCookies = () => { localStorage.setItem("cookieConsent", "accepted"); setIsVisible(false); };
  const declineCookies = () => { localStorage.setItem("cookieConsent", "declined"); setIsVisible(false); };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Card className="max-w-4xl mx-auto p-6 bg-card/98 backdrop-blur-lg border-border shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-bold text-lg">{t("cookie.title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("cookie.text")}{" "}
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="text-primary hover:underline font-medium">{t("cookie.termsLink")}</button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[85vh] sm:max-h-[90vh] p-4 sm:p-6">
                  <DialogHeader className="space-y-2 pb-3 sm:pb-4">
                    <DialogTitle className="text-sm sm:text-base md:text-lg leading-tight">{t("contact.termsDialogTitle")}</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[65vh] sm:h-[70vh] pr-2 sm:pr-4">
                    <div className="text-sm sm:text-base"><Terms /></div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button variant="outline" size="sm" onClick={declineCookies} className="flex-1 sm:flex-none">{t("cookie.decline")}</Button>
            <Button variant="hero" size="sm" onClick={acceptCookies} className="flex-1 sm:flex-none">{t("cookie.accept")}</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
