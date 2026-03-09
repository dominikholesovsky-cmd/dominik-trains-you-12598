import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "cs" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  cs: {
    // Navigation
    "nav.intro": "Úvod",
    "nav.services": "Služby",
    "nav.references": "Reference",
    "nav.about": "O mně",
    "nav.gym": "Posilovna",
    "nav.bookTraining": "Domluvit Trénink",
    "nav.phone": "Telefon",

    // Hero
    "hero.title": "Dominik Holešovský",
    "hero.subtitle": "Certifikovaný trenér",
    "hero.experience": "10+ let praxe • Specialista na diagnostiku pohybového aparátu",
    "hero.description": "Transformujte své tělo s profesionálním vedením. Zaměřuji se na prevenci zranění, efektivní růst síly a trvalé výsledky.",
    "hero.cta": "Domluvit První Trénink",
    "hero.learnMore": "Zjistit Více",
    "hero.years": "Let Zkušeností",
    "hero.clients": "Spokojených Klientů",
    "hero.professionalism": "Profesionalita",
    "hero.enBadge": "🇬🇧 Trénuji i anglicky mluvící klienty",

    // Services
    "services.title": "Služby & Ceník",
    "services.subtitle": "Transparentní ceny a jasné benefity pro vaši cestu ke zdraví",
    "services.personalTraining": "Osobní Trénink",
    "services.personalDesc": "Komplexní přístup zaměřený na diagnostiku, zdravý pohyb a efektivní zvýšení síly.",
    "services.personalUnit": "60 minut",
    "services.personalPrice": "600 Kč",
    "services.personalB1": "Důkladná analýza pohybových vzorců",
    "services.personalB2": "Individuální tréninkový plán",
    "services.personalB3": "Prevence zranění",
    "services.personalB4": "Maximální efektivita",
    "services.trainingPlan": "Tréninkový Plán",
    "services.planDesc": "Profesionální plán ušitý přímo pro vaše potřeby a cíle.\n",
    "services.planUnit": "3 měsíce",
    "services.planPrice": "1 000 Kč",
    "services.planB1": "Přesně podle vašich cílů",
    "services.planB2": "Platnost 3 měsíce",
    "services.planB3": "Online konzultace",
    "services.planB4": "Kompletní instrukce",
    "services.orderTraining": "Objednat Trénink",
    "services.packagesTitle": "Výhodné Balíčky",
    "services.packagesSubtitle": "Ušetřete při předplacení více tréninků",
    "services.pack5title": "Balíček 5 Tréninků",
    "services.pack5price": "2 800 Kč",
    "services.pack5original": "3 000 Kč",
    "services.pack5savings": "200 Kč",
    "services.pack5per": "560 Kč/trénink",
    "services.pack5b1": "5 osobních tréninků",
    "services.pack5b2": "Flexibilní termíny",
    "services.pack5b3": "Platnost 2 měsíce",
    "services.pack5b4": "Ušetříte 200 Kč",
    "services.pack10title": "Balíček 10 Tréninků",
    "services.pack10price": "5 400 Kč",
    "services.pack10original": "6 000 Kč",
    "services.pack10savings": "600 Kč - 1 trénink",
    "services.pack10per": "540 Kč/trénink",
    "services.pack10b1": "10 osobních tréninků",
    "services.pack10b2": "Flexibilní termíny",
    "services.pack10b3": "Platnost 4 měsíce",
    "services.pack10b4": "Ušetříte 600 Kč",
    "services.mostPopular": "NEJOBLÍBENĚJŠÍ",
    "services.save": "Ušetříte",
    "services.orderPackage": "Objednat Balíček",
    "services.freeConsultation": "První konzultace ZDARMA! 🎁",
    "services.freeConsultationDesc": "Domluvte si nezávaznou konzultaci a seznamovací trénink zdarma. Společně nastavíme váš plán.",
    "services.wantFree": "Chci Konzultaci Zdarma",

    // Testimonials
    "testimonials.title": "Co říkají klienti",
    "testimonials.subtitle": "Přečtěte si zkušenosti těch, kteří již dosáhli svých cílů",
    "testimonials.satisfiedClient": "Spokojený klient",
    "testimonials.vera": "S Dominikem jsem konečně pochopila správnou techniku a po letech bolestí zad se cítím skvěle. Jeho přístup je velmi profesionální a motivující.",
    "testimonials.veraResult": "Zbavila se bolestí zad",
    "testimonials.tomas": "Skvělý trenér, který má znalosti a umí je předat. Díky jeho diagnostice jsem zlepšil svůj výkon a zvýšil sílu bezpečným způsobem.",
    "testimonials.tomasResult": "Zvednout na Benchpress 100kg",
    "testimonials.hana": "Dominik je velmi trpělivý a dokáže vše srozumitelně vysvětlit. Tréninkový plán na míru mi pomohl dosáhnout cílů, které jsem si stanovila.",
    "testimonials.hanaResult": "Dosažení fitness cílů",

    // About
    "about.title": "O mně",
    "about.subtitle": "Váš partner na cestě ke zdravějšímu a silnějšímu tělu",
    "about.name": "Dominik Holešovský",
    "about.role": "Fitness Trenér",
    "about.desc1": "Jsem certifikovaný osobní trenér s více než 10 lety zkušeností. Specializuji se na diagnostiku pohybového aparátu, zdravý pohyb a efektivní nárůst síly.",
    "about.desc2": "Můj přístup kombinuje vědecké poznatky s praktickými zkušenostmi, abych pomohl každému klientovi dosáhnout jeho cílů bezpečně a efektivně.",
    "about.certTitle": "Certifikace",
    "about.certDesc": "Profesionální certifikace v oblasti osobního tréninku a pohybové diagnostiky",
    "about.healthTitle": "Zdravý Přístup",
    "about.healthDesc": "Zaměření na prevenci zranění a dlouhodobé zdraví pohybového aparátu",
    "about.planTitle": "Individuální Plány",
    "about.planDesc": "Každý trénink je přizpůsoben vašim specifickým potřebám a cílům",
    "about.resultsTitle": "Prokazatelné Výsledky",
    "about.resultsDesc": "Systematický přístup vedoucí k měřitelnému pokroku a úspěchu",

    // Contact
    "contact.title": "Domluvte si trénink",
    "contact.subtitle": "Pojďme společně pracovat na vašich fitness cílech",
    "contact.name": "Jméno *",
    "contact.namePlaceholder": "Vaše jméno",
    "contact.email": "Email *",
    "contact.emailPlaceholder": "vas@email.cz",
    "contact.phone": "Telefon",
    "contact.phonePlaceholder": "+420 XXX XXX XXX",
    "contact.message": "Zpráva *",
    "contact.messagePlaceholder": "Napište mi o vašich cílech a očekáváních...",
    "contact.terms": "Souhlasím se",
    "contact.termsLink": "zpracováním osobních údajů a podmínkami použití",
    "contact.termsGdpr": "dle GDPR *",
    "contact.termsDialogTitle": "Podmínky a ochrana osobních údajů",
    "contact.submit": "Odeslat zprávu",
    "contact.submitting": "Odesílám...",
    "contact.contactInfo": "Kontaktní informace",
    "contact.contactDesc": "Neváhejte mě kontaktovat. Rád vám pomohu s vaším fitness plánem.",
    "contact.gymLabel": "Posilovna",
    "contact.gymValue": "MonsterGym, Brno - Slatina",
    "contact.phoneLabel": "Telefon",
    "contact.emailLabel": "Email",
    "contact.freeTraining": "První trénink zdarma!",
    "contact.freeTrainingDesc": "Nabízím konzultaci a seznamovací trénink zdarma, kde společně zjistíme vaše cíle a nastavíme plán.",
    "contact.successMsg": "Zpráva byla úspěšně odeslána! Brzy se vám ozvu.",
    "contact.errorMsg": "Něco se pokazilo. Zkuste to prosím znovu.",
    "contact.networkError": "Nepodařilo se odeslat zprávu. Zkuste to později.",
    "contact.formError": "Prosím opravte chyby ve formuláři",
    "contact.nameMin": "Jméno musí mít alespoň 2 znaky",
    "contact.nameTooLong": "Jméno je příliš dlouhé",
    "contact.invalidEmail": "Neplatná emailová adresa",
    "contact.emailTooLong": "Email je příliš dlouhý",
    "contact.phoneTooLong": "Telefon je příliš dlouhý",
    "contact.messageMin": "Zpráva musí mít alespoň 10 znaků",
    "contact.messageTooLong": "Zpráva je příliš dlouhá",
    "contact.mustAcceptTerms": "Musíte souhlasit s podmínkami",

    // Cookie Banner
    "cookie.title": "Cookies",
    "cookie.text": "Tento web používá cookies pro zlepšení uživatelské zkušenosti a analytics. Používáním tohoto webu souhlasíte s našimi",
    "cookie.termsLink": "podmínkami použití",
    "cookie.decline": "Odmítnout",
    "cookie.accept": "Přijmout",

    // Footer
    "footer.rights": "Všechna práva vyhrazena.",

    // Back to top
    "backToTop": "Zpět nahoru",
  },
  en: {
    // Navigation
    "nav.intro": "Home",
    "nav.services": "Services",
    "nav.references": "References",
    "nav.about": "About",
    "nav.gym": "Gym",
    "nav.bookTraining": "Book Training",
    "nav.phone": "Phone",

    // Hero
    "hero.title": "Dominik Holešovský",
    "hero.subtitle": "Certified Trainer",
    "hero.experience": "10+ years of experience • Movement diagnostics specialist",
    "hero.description": "Transform your body with professional guidance. I focus on injury prevention, effective strength gains and lasting results.",
    "hero.cta": "Book Your First Session",
    "hero.learnMore": "Learn More",
    "hero.years": "Years of Experience",
    "hero.clients": "Satisfied Clients",
    "hero.professionalism": "Professionalism",

    // Services
    "services.title": "Services & Pricing",
    "services.subtitle": "Transparent prices and clear benefits for your health journey",
    "services.personalTraining": "Personal Training",
    "services.personalDesc": "A comprehensive approach focused on diagnostics, healthy movement and effective strength building.",
    "services.personalUnit": "60 minutes",
    "services.personalPrice": "600 CZK",
    "services.personalB1": "Thorough movement pattern analysis",
    "services.personalB2": "Individual training plan",
    "services.personalB3": "Injury prevention",
    "services.personalB4": "Maximum efficiency",
    "services.trainingPlan": "Training Plan",
    "services.planDesc": "A professional plan tailored to your needs and goals.\n",
    "services.planUnit": "3 months",
    "services.planPrice": "1 000 CZK",
    "services.planB1": "Tailored to your goals",
    "services.planB2": "Valid for 3 months",
    "services.planB3": "Online consultation",
    "services.planB4": "Complete instructions",
    "services.orderTraining": "Book Training",
    "services.packagesTitle": "Value Packages",
    "services.packagesSubtitle": "Save by pre-paying for more sessions",
    "services.pack5title": "5 Sessions Package",
    "services.pack5price": "2 800 CZK",
    "services.pack5original": "3 000 CZK",
    "services.pack5savings": "200 CZK",
    "services.pack5per": "560 CZK/session",
    "services.pack5b1": "5 personal training sessions",
    "services.pack5b2": "Flexible scheduling",
    "services.pack5b3": "Valid for 2 months",
    "services.pack5b4": "Save 200 CZK",
    "services.pack10title": "10 Sessions Package",
    "services.pack10price": "5 400 CZK",
    "services.pack10original": "6 000 CZK",
    "services.pack10savings": "600 CZK - 1 session",
    "services.pack10per": "540 CZK/session",
    "services.pack10b1": "10 personal training sessions",
    "services.pack10b2": "Flexible scheduling",
    "services.pack10b3": "Valid for 4 months",
    "services.pack10b4": "Save 600 CZK",
    "services.mostPopular": "MOST POPULAR",
    "services.save": "You save",
    "services.orderPackage": "Book Package",
    "services.freeConsultation": "First Consultation FREE! 🎁",
    "services.freeConsultationDesc": "Schedule a free no-obligation consultation and introductory session. We'll create your plan together.",
    "services.wantFree": "Get Free Consultation",

    // Testimonials
    "testimonials.title": "What Clients Say",
    "testimonials.subtitle": "Read the experiences of those who have already achieved their goals",
    "testimonials.satisfiedClient": "Satisfied client",
    "testimonials.vera": "With Dominik, I finally understood proper technique and after years of back pain I feel great. His approach is very professional and motivating.",
    "testimonials.veraResult": "Got rid of back pain",
    "testimonials.tomas": "A great trainer who has the knowledge and knows how to share it. Thanks to his diagnostics, I improved my performance and increased strength safely.",
    "testimonials.tomasResult": "Bench Press 100kg achieved",
    "testimonials.hana": "Dominik is very patient and can explain everything clearly. A tailored training plan helped me achieve the goals I set for myself.",
    "testimonials.hanaResult": "Fitness goals achieved",

    // About
    "about.title": "About Me",
    "about.subtitle": "Your partner on the journey to a healthier and stronger body",
    "about.name": "Dominik Holešovský",
    "about.role": "Fitness Trainer",
    "about.desc1": "I am a certified personal trainer with over 10 years of experience. I specialize in movement diagnostics, healthy movement and effective strength building.",
    "about.desc2": "My approach combines scientific knowledge with practical experience to help every client achieve their goals safely and effectively.",
    "about.certTitle": "Certification",
    "about.certDesc": "Professional certification in personal training and movement diagnostics",
    "about.healthTitle": "Healthy Approach",
    "about.healthDesc": "Focus on injury prevention and long-term musculoskeletal health",
    "about.planTitle": "Individual Plans",
    "about.planDesc": "Each session is adapted to your specific needs and goals",
    "about.resultsTitle": "Proven Results",
    "about.resultsDesc": "A systematic approach leading to measurable progress and success",

    // Contact
    "contact.title": "Book a Training Session",
    "contact.subtitle": "Let's work together on your fitness goals",
    "contact.name": "Name *",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email *",
    "contact.emailPlaceholder": "your@email.com",
    "contact.phone": "Phone",
    "contact.phonePlaceholder": "+420 XXX XXX XXX",
    "contact.message": "Message *",
    "contact.messagePlaceholder": "Tell me about your goals and expectations...",
    "contact.terms": "I agree to the",
    "contact.termsLink": "processing of personal data and terms of use",
    "contact.termsGdpr": "per GDPR *",
    "contact.termsDialogTitle": "Terms and Privacy Policy",
    "contact.submit": "Send Message",
    "contact.submitting": "Sending...",
    "contact.contactInfo": "Contact Information",
    "contact.contactDesc": "Don't hesitate to contact me. I'll be happy to help with your fitness plan.",
    "contact.gymLabel": "Gym",
    "contact.gymValue": "MonsterGym, Brno - Slatina",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.freeTraining": "First session free!",
    "contact.freeTrainingDesc": "I offer a free consultation and introductory session where we'll identify your goals and create a plan together.",
    "contact.successMsg": "Message sent successfully! I'll get back to you soon.",
    "contact.errorMsg": "Something went wrong. Please try again.",
    "contact.networkError": "Failed to send the message. Please try later.",
    "contact.formError": "Please fix the form errors",
    "contact.nameMin": "Name must be at least 2 characters",
    "contact.nameTooLong": "Name is too long",
    "contact.invalidEmail": "Invalid email address",
    "contact.emailTooLong": "Email is too long",
    "contact.phoneTooLong": "Phone is too long",
    "contact.messageMin": "Message must be at least 10 characters",
    "contact.messageTooLong": "Message is too long",
    "contact.mustAcceptTerms": "You must agree to the terms",

    // Cookie Banner
    "cookie.title": "Cookies",
    "cookie.text": "This website uses cookies to improve user experience and analytics. By using this website you agree to our",
    "cookie.termsLink": "terms of use",
    "cookie.decline": "Decline",
    "cookie.accept": "Accept",

    // Footer
    "footer.rights": "All rights reserved.",

    // Back to top
    "backToTop": "Back to top",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "en" ? "en" : "cs") as Language;
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
