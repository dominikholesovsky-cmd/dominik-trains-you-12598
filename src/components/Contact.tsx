import { useState } from "react";
import { ChevronDown, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, FORMSPREE_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAP_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";
import TermsDialog from "./TermsDialog";

const emptyForm = { name: "", email: "", phone: "", goal: "", message: "", termsAccepted: false };

// Popisky cílů posílám vždy česky, ať jsou zprávy v e-mailu jednotné.
const goalOptions = [
  { value: "strength", key: "contact.goalStrength", cs: "Nabrat sílu" },
  { value: "weight", key: "contact.goalWeight", cs: "Zhubnout a shodit váhu" },
  { value: "pain", key: "contact.goalPain", cs: "Hýbat se bez bolesti" },
  { value: "injury", key: "contact.goalInjury", cs: "Návrat po zranění nebo operaci" },
  { value: "fitness", key: "contact.goalFitness", cs: "Lepší kondice a postava" },
  { value: "other", key: "contact.goalOther", cs: "Něco jiného" },
];

const fieldClass =
  "w-full rounded-xl border bg-[#1F2E26] px-3.5 text-base text-[#F6F5F1] placeholder:text-[#8A9A90] transition-colors focus:outline-none focus:ring-2 focus:ring-lime/70";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const contactSchema = z.object({
    name: z.string().trim().min(2, t("contact.nameMin")).max(100, t("contact.nameTooLong")),
    email: z.string().trim().email(t("contact.invalidEmail")).max(255, t("contact.emailTooLong")),
    phone: z
      .string()
      .trim()
      .min(1, t("contact.phoneRequired"))
      .max(20, t("contact.phoneTooLong"))
      .refine((val) => /^\+?[\d\s()-]{9,}$/.test(val) && val.replace(/\D/g, "").length >= 9, t("contact.phoneInvalid")),
    goal: z.string().min(1, t("contact.goalRequired")),
    message: z.string().trim().max(1000, t("contact.messageTooLong")),
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
    // Skryté pole proti spamovým robotům: člověk ho nevidí ani nevyplní.
    if (honeypot) {
      toast.success(t("contact.successMsg"));
      setFormData(emptyForm);
      return;
    }
    setIsSubmitting(true);
    const goalLabel = goalOptions.find((option) => option.value === result.data.goal)?.cs ?? result.data.goal;
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          cil: goalLabel,
          message: result.data.message || "(bez zprávy)",
          _subject: `Nová poptávka z webu: ${result.data.name}`,
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

        <form onSubmit={handleSubmit} noValidate className="relative flex min-w-0 flex-1 flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-[#C9D3CC]">{t("contact.name")}</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
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
                inputMode="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+420 …"
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
              inputMode="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${fieldClass} ${border("email")} min-h-[48px]`}
            />
            {errors.email && <p id="email-error" className="text-sm text-[#FFB4A8]">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="goal" className="text-sm text-[#C9D3CC]">{t("contact.goal")}</label>
            <div className="relative">
              <select
                id="goal"
                required
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                aria-invalid={!!errors.goal}
                aria-describedby={errors.goal ? "goal-error" : undefined}
                className={`${fieldClass} ${border("goal")} min-h-[48px] cursor-pointer appearance-none pr-11 ${
                  formData.goal ? "" : "text-[#8A9A90]"
                }`}
              >
                <option value="" disabled>
                  {t("contact.goalPlaceholder")}
                </option>
                {goalOptions.map((option) => (
                  <option key={option.value} value={option.value} className="text-foreground">
                    {t(option.key)}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-lime"
                aria-hidden="true"
              />
            </div>
            {errors.goal && <p id="goal-error" className="text-sm text-[#FFB4A8]">{errors.goal}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-[#C9D3CC]">{t("contact.message")}</label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("contact.messagePlaceholder")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClass} ${border("message")} resize-y py-3`}
            />
            {errors.message && <p id="message-error" className="text-sm text-[#FFB4A8]">{errors.message}</p>}
          </div>
          {/* Past na roboty: skryté pole, které člověk nevyplní */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
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
              <p className="text-sm leading-relaxed text-[#C9D3CC]">
                <label htmlFor="terms" className="cursor-pointer">
                  {t("contact.terms")}
                </label>{" "}
                <TermsDialog
                  trigger={
                    <button
                      type="button"
                      className="inline p-0 text-left font-medium text-lime underline underline-offset-2 hover:no-underline"
                    >
                      {t("contact.termsLink")}
                    </button>
                  }
                />{" "}
                <label htmlFor="terms" className="cursor-pointer">
                  {t("contact.termsGdpr")}
                </label>
              </p>
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
