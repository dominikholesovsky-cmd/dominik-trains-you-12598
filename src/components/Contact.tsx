import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import Terms from "./Terms";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", termsAccepted: false });
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
      result.error.errors.forEach((error) => { if (error.path[0]) fieldErrors[error.path[0].toString()] = error.message; });
      setErrors(fieldErrors);
      toast.error(t("contact.formError"));
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xpwojlgy", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, message: formData.message }),
      });
      if (response.ok) {
        toast.success(t("contact.successMsg"));
        setFormData({ name: "", email: "", phone: "", message: "", termsAccepted: false });
      } else {
        toast.error(t("contact.errorMsg"));
      }
    } catch {
      toast.error(t("contact.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: t("contact.gymLabel"), value: t("contact.gymValue"), link: "https://www.google.com/maps/place/MONSTER+Gym/@49.1764238,16.6829687,17z/data=!4m12!1m5!3m4!2zNDnCsDEwJzM1LjEiTiAxNsKwNDEnMDguMCJF!8m2!3d49.1764238!4d16.6855436!3m5!1s0x4712eb20d82b1b19:0xa108cd5891f7fd3e!8m2!3d49.1764238!4d16.6881185!16s%2Fg%2F11g6nr25xm?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
    { icon: Phone, title: t("contact.phoneLabel"), value: "+420 725 961 371", link: "tel:+420725961371" },
    { icon: Mail, title: t("contact.emailLabel"), value: "dominik.holesovsky@gmail.com", link: "mailto:dominik.holesovsky@gmail.com" },
  ];

  return (
    <section id="kontakt" className="scroll-mt-20 py-12 sm:py-16 md:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("contact.title")}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-full">
          <Card className="p-4 sm:p-6 md:p-8 bg-card border-border animate-fade-in-scale w-full max-w-full">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 w-full">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.name")}</label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t("contact.namePlaceholder")} className={`w-full ${errors.name ? "border-destructive" : ""}`} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t("contact.emailPlaceholder")} className={`w-full ${errors.email ? "border-destructive" : ""}`} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">{t("contact.phone")}</label>
                <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder={t("contact.phonePlaceholder")} className={`w-full ${errors.phone ? "border-destructive" : ""}`} />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t("contact.messagePlaceholder")} rows={5} className={`w-full ${errors.message ? "border-destructive" : ""}`} />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" checked={formData.termsAccepted} onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })} className={errors.termsAccepted ? "border-destructive" : ""} />
                  <label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed cursor-pointer">
                    {t("contact.terms")}{" "}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button type="button" className="text-primary hover:underline font-medium">{t("contact.termsLink")}</button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh]">
                        <DialogHeader><DialogTitle>{t("contact.termsDialogTitle")}</DialogTitle></DialogHeader>
                        <ScrollArea className="h-[70vh] pr-4"><Terms /></ScrollArea>
                      </DialogContent>
                    </Dialog>
                    {" "}{t("contact.termsGdpr")}
                  </label>
                </div>
                {errors.termsAccepted && <p className="text-xs text-destructive">{errors.termsAccepted}</p>}
              </div>
              <Button type="submit" size="lg" variant="hero" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("contact.submitting") : t("contact.submit")}
              </Button>
            </form>
          </Card>

          <div className="space-y-6 sm:space-y-8 animate-fade-in w-full max-w-full">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">{t("contact.contactInfo")}</h3>
              <p className="text-muted-foreground">{t("contact.contactDesc")}</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 sm:p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 w-full overflow-hidden">
                  <div className="flex items-start gap-3 sm:gap-4 w-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs sm:text-sm text-muted-foreground mb-1">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className={`text-sm sm:text-base md:text-lg font-semibold hover:text-primary transition-colors break-words ${info.title === t("contact.gymLabel") ? "underline" : ""}`}>{info.value}</a>
                      ) : (
                        <p className="text-sm sm:text-base md:text-lg font-semibold break-words">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="p-5 sm:p-6 md:p-8 bg-primary/10 border-primary/30 w-full">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg md:text-xl font-bold">{t("contact.freeTraining")}</h4>
                <p className="text-sm sm:text-base text-foreground/80">{t("contact.freeTrainingDesc")}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
