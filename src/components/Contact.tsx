import { useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, FORMSPREE_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAP_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";
import Terms from "./Terms";

const emptyForm = { name: "", email: "", phone: "", message: "", termsAccepted: false };

const fieldClass =
  "w-full rounded-xl border bg-[#1F2E26] px-3.5 text-base text-[#F6F5F1] placeholder:text-[#8A9A90] transition-colors focus:outline-none focus:ring-2 focus:ring-lime/70";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().trim().min(2, t("contact.nameMin")).max(100, t("contact.nameTooLong")),
    email: z.string().trim().email(t("contact.invalidEmail")).max(255, t("contact.emailTooLong")),
    phone: z.string().trim().max(20, t("contact.phoneTooLong")).optional(),
    message: z.string().trim().min(10, t("contact.messageMin")).max(1000, t("contact.messageTooLong")),
    termsAccepted: z.boolean().refine((val) => val === true, { message: t("contact.mustAcceptTerms") }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        const key = error.path[0]?.toString();
        if (key && !fieldErrors[key]) fieldErrors[key] = error.message;
      });
      setErrors(fieldErrors);
      toast.error(t("contact.formError"));
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          message: result.data.message,
        }),
      });
      if (response.ok) {
        toast.success(t("contact.successMsg"));
        setFormData(emptyForm);
      } else {
        toast.error(t("contact.errorMsg"));
      }
    } catch {
      toast.error(t("contact.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const border = (field: string) => (errors[field] ? "border-[#FF9B8A]" : "border-[#3A4A41]");

  const contacts = [
    { icon: Phone, label: PHONE_DISPLAY, href: PHONE_HREF, external: false },
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}`, external: false },
    { icon: MapPin, label: t("contact.gym"), href: MAP_URL, external: true },
    { icon: Instagram, label: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, external: true },
  ];

  return (
    <section id="kontakt" className="scroll-mt-20 px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
      <div data-reveal className="mx-auto flex max-w-[1240px] flex-col gap-12 rounded-[28px] bg-forest px-6 py-10 text-[#F6F5F1] sm:rounded-[32px] sm:p-12 lg:flex-row lg:gap-14 lg:p-[72px]">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <h2 className="font-display text-[36px] font-extrabold leading-none tracking-[-0.03em] sm:text-5xl lg:text-[60px]">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-[#C9D3CC]">{t("contact.subtitle")}</p>
          <ul className="flex flex-col gap-1 pt-2">
            {contacts.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group inline-flex min-h-[44px] items-center gap-3 break-all text-[17px] font-semibold text-[#F6F5F1] transition-colors hover:text-lime"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-lime transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110" aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-[#C9D3CC]">{t("contact.name")}</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`${fieldClass} ${border("name")} min-h-[48px]`}
              />
              {errors.name && <p id="name-error" className="text-sm text-[#FFB4A8]">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm text-[#C9D3CC]">{t("contact.phone")}</label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`${fieldClass} ${border("phone")} min-h-[48px]`}
              />
              {errors.phone && <p id="phone-error" className="text-sm text-[#FFB4A8]">{errors.phone}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-[#C9D3CC]">{t("contact.email")}</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${fieldClass} ${border("email")} min-h-[48px]`}
            />
            {errors.email && <p id="email-error" className="text-sm text-[#FFB4A8]">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-[#C9D3CC]">{t("contact.message")}</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("contact.messagePlaceholder")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClass} ${border("message")} resize-y py-3`}
            />
            {errors.message && <p id="message-error" className="text-sm text-[#FFB4A8]">{errors.message}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked === true })}
                aria-invalid={!!errors.termsAccepted}
                className={`mt-0.5 h-5 w-5 border-[#7D8E84] data-[state=checked]:border-lime data-[state=checked]:bg-lime data-[state=checked]:text-forest ${
                  errors.termsAccepted ? "border-[#FF9B8A]" : ""
                }`}
              />
              <label htmlFor="terms" className="cursor-pointer text-sm leading-relaxed text-[#C9D3CC]">
                {t("contact.terms")}{" "}
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className="inline p-0 text-left font-medium text-lime underline underline-offset-2 hover:no-underline">
                      {t("contact.termsLink")}
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
                </Dialog>{" "}
                {t("contact.termsGdpr")}
              </label>
            </div>
            {errors.termsAccepted && <p className="text-sm text-[#FFB4A8]">{errors.termsAccepted}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 min-h-[52px] rounded-full bg-lime px-6 text-[17px] font-bold text-forest transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(80_80%_64%)] hover:shadow-[0_10px_24px_-10px_rgba(201,240,122,0.6)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? t("contact.submitting") : t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
