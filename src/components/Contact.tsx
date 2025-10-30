import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Prosím vyplňte všechna povinná pole");
      return;
    }

    // Here you would typically send the form data to your backend
    toast.success("Zpráva odeslána! Brzy se vám ozvu.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Posilovna",
      value: "Monstergym, Brno - Slatina",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+420 XXX XXX XXX",
      link: "tel:+420XXXXXXXXX",
    },
    {
      icon: Mail,
      title: "Email",
      value: "dominik@example.cz",
      link: "mailto:dominik@example.cz",
    },
  ];

  return (
    <section id="kontakt" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Domluvte si trénink</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pojďme společně pracovat na vašich fitness cílech
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Kontaktní informace</h3>
              <p className="text-muted-foreground">
                Neváhejte mě kontaktovat. Rád vám pomohu s vaším fitness plánem.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick CTA */}
            <Card className="p-8 bg-primary/10 border-primary/30">
              <div className="space-y-4">
                <h4 className="text-xl font-bold">První trénink zdarma!</h4>
                <p className="text-foreground/80">
                  Nabízím konzultaci a seznamovací trénink zdarma, kde společně zjistíme vaše cíle a nastavíme plán.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-fade-in-scale">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Jméno *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Vaše jméno"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="vas@email.cz"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+420 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Zpráva *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Napište mi o vašich cílech a očekáváních..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" variant="hero" className="w-full">
                Odeslat zprávu
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
