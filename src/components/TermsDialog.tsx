import type { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Terms from "./Terms";

/**
 * Okno s podmínkami a GDPR.
 * Mobil: panel vyjíždějící zespodu. Desktop: okno uprostřed.
 * Obsah se posouvá nativně (spolehlivé i na iOS).
 */
const TermsDialog = ({ trigger }: { trigger: ReactNode }) => {
  const { t } = useLanguage();

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-forest/60 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <div className="pointer-events-none fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
          <DialogPrimitive.Content className="pointer-events-auto flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[28px] bg-background shadow-[0_-12px_48px_rgba(20,20,18,0.25)] outline-none duration-300 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom-10 data-[state=open]:slide-in-from-bottom-10 sm:max-h-[85vh] sm:max-w-3xl sm:rounded-[28px] sm:shadow-[0_24px_64px_rgba(20,20,18,0.3)] sm:data-[state=closed]:slide-out-to-bottom-0 sm:data-[state=open]:slide-in-from-bottom-0 sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95">
            <div className="flex justify-center pt-2.5 sm:hidden" aria-hidden="true">
              <span className="h-1 w-10 rounded-full bg-foreground/15" />
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border px-6 pb-4 pt-3 sm:px-8 sm:pt-6">
              <DialogPrimitive.Title className="font-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                {t("contact.termsDialogTitle")}
              </DialogPrimitive.Title>
              <DialogPrimitive.Close
                className="-mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={t("terms.close")}
              >
                <X className="h-5 w-5" />
              </DialogPrimitive.Close>
            </div>
            <DialogPrimitive.Description className="sr-only">{t("terms.description")}</DialogPrimitive.Description>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8 sm:py-7">
              <Terms />
            </div>
            <div className="border-t border-border px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:flex sm:justify-end sm:px-8 sm:pb-5">
              <DialogPrimitive.Close className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-[hsl(150_55%_21%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto">
                {t("terms.ok")}
              </DialogPrimitive.Close>
            </div>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default TermsDialog;
