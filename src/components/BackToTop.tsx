import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
      variant="hero"
      className="fixed bottom-8 right-8 z-40 rounded-full shadow-2xl animate-fade-in-scale"
      aria-label={t("backToTop")}
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default BackToTop;
