import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "cs" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  cs: {
    // Navigation
    "nav.process": "Jak to probíhá",
    "nav.pricing": "Ceník",
    "nav.references": "Reference",
    "nav.about": "O mně",
    "nav.cta": "Trénink zdarma",
    "nav.phone": "Zavolat",
    "nav.menu": "Otevřít menu",
    "nav.closeMenu": "Zavřít menu",
    "nav.language": "Jazyk",

    // Hero
    "hero.eyebrow": "Osobní trenér · MonsterGym Brno-Slatina",
    "hero.title1": "Silnější tělo.",
    "hero.title2": "Bez bolesti a zranění.",
    "hero.description":
      "Nejdřív se podívám, jak se hýbeš. Dáme do pořádku hybnost a zdravé tělo a na tom postavíme tvůj cíl, ať je to síla, lepší postava, nebo pohyb bez bolesti.",
    "hero.cta": "Domluvit první trénink zdarma",
    "hero.pricing": "Ceník",
    "hero.clients": "klientů",
    "hero.priceValue": "600 Kč",
    "hero.price": "za hodinový trénink",
    "hero.languages": "trénuji i v angličtině",
    "hero.badgeTitle": "První trénink zdarma",
    "hero.badgeDesc": "konzultace + seznamovací trénink",
    "hero.imageAlt": "Dominik Holešovský, osobní trenér, v posilovně MonsterGym",

    // Process
    "process.title": "Jak spolupráce probíhá",
    "process.subtitle": "Žádné šablony. Plán stavím podle toho, co tvoje tělo zvládne a kam se chceš dostat.",
    "process.s1Title": "Konzultace zdarma",
    "process.s1Desc": "Probereme tvoje cíle, zdraví a zkušenosti. Odtrénujeme spolu seznamovací trénink.",
    "process.s2Title": "Diagnostika pohybu",
    "process.s2Desc": "Projdu tvoje pohybové vzorce a najdu slabá místa, která brzdí výkon nebo bolí.",
    "process.s3Title": "Plán a tréninky",
    "process.s3Desc": "Trénujeme spolu, nebo dostaneš plán na míru a já hlídám techniku a progres.",

    // Pricing
    "pricing.title": "Ceník",
    "pricing.subtitle": "První konzultace a seznamovací trénink jsou zdarma.",
    "pricing.personalTitle": "Osobní trénink",
    "pricing.personalUnit": "60 minut",
    "pricing.personalPrice": "600 Kč",
    "pricing.personalB1": "Analýza pohybových vzorců",
    "pricing.personalB2": "Individuální tréninkový plán",
    "pricing.personalB3": "Důraz na prevenci zranění",
    "pricing.personalCta": "Objednat trénink",
    "pricing.packTitle": "Balíček 10 tréninků",
    "pricing.packUnit": "platnost 4 měsíce",
    "pricing.packPrice": "5 400 Kč",
    "pricing.packOriginal": "6 000 Kč",
    "pricing.packB1": "540 Kč za trénink",
    "pricing.packB2": "Ušetříš 600 Kč, jeden trénink navíc",
    "pricing.packB3": "Flexibilní termíny",
    "pricing.packCta": "Objednat balíček",
    "pricing.best": "Nejvýhodnější",
    "pricing.planTitle": "Tréninkový plán",
    "pricing.planUnit": "na 3 měsíce",
    "pricing.planPrice": "1 000 Kč",
    "pricing.planB1": "Plán přesně podle tvých cílů",
    "pricing.planB2": "Online konzultace",
    "pricing.planB3": "Kompletní instrukce ke cvikům",
    "pricing.planCta": "Objednat plán",
    "pricing.smallPackLabel": "Menší balíček:",
    "pricing.smallPack": "5 tréninků za 2 800 Kč",
    "pricing.smallPackDetail": "(560 Kč/trénink, platnost 2 měsíce)",
    "pricing.originalPrice": "Původní cena",

    // Testimonials
    "testimonials.title": "Co říkají klienti",
    "testimonials.subtitle": "Konkrétní lidé, konkrétní výsledky.",
    "testimonials.veraTitle": "Bez bolesti zad. Dnes běhá a vzpírá.",
    "testimonials.veraStory": "Po letech bolestí zad se jich Veronika zbavila. Dnes vesele běhá a dokonce vzpírá.",
    "testimonials.vera":
      "S Dominikem jsem konečně pochopila správnou techniku a po letech bolestí zad se cítím skvěle. Jeho přístup je velmi profesionální a motivující.",
    "testimonials.tomasTitle": "Po operaci kolene zpátky ke sportu",
    "testimonials.tomasStory": "Po operaci kolene chtěl začít sportovat a zvedat. Tenhle cíl jsme spolu splnili.",
    "testimonials.tomas":
      "Skvělý trenér, který má znalosti a umí je předat. Díky jeho diagnostice jsem zlepšil svůj výkon a zvýšil sílu bezpečným způsobem.",
    "testimonials.hanaTitle": "Splněné cíle",
    "testimonials.hanaStory": "Plán na míru a trpělivé vedení krok za krokem.",
    "testimonials.hana":
      "Dominik je velmi trpělivý a dokáže vše srozumitelně vysvětlit. Tréninkový plán na míru mi pomohl dosáhnout cílů, které jsem si stanovila.",

    // About
    "about.title": "Ahoj, jsem Dominik",
    "about.desc1":
      "Jsem trenér ve fitness s rekvalifikací akreditovanou MŠMT (Improve Academy). Dobrý trénink podle mě začíná tím, že rozumím člověku a tomu, jak se hýbe. Teprve potom přidáváme váhu.",
    "about.desc2":
      "Hledám slabá místa a dysbalance, ladím hybnost a na zdravém základu stavíme to, co chceš ty: sílu, kondici, postavu nebo návrat ke sportu. Trénuji v MonsterGymu v Brně-Slatině, česky i anglicky.",
    "about.cert": "Trenér ve fitness · MŠMT · Improve Academy",
    "about.tag2": "Diagnostika pohybu",
    "about.tag3": "Prevence zranění",
    "about.imageAlt": "Dominik Holešovský",
    "about.gallery1": "Trénink s klientem v MonsterGymu",
    "about.gallery2": "Trénink s klientkou, cviky nad hlavu",
    "about.gallery3": "Trénink s klientkou, přítahy s jednoručkou",

    // Contact
    "contact.title": "Začni prvním tréninkem zdarma",
    "contact.subtitle": "Napiš mi, co tě trápí nebo kam se chceš dostat. Ozvu se obvykle do 24 hodin.",
    "contact.gym": "MonsterGym, Brno-Slatina",
    "contact.gymMap": "Zobrazit na mapě",
    "contact.whatsapp": "Napiš mi na WhatsApp",
    "contact.name": "Jméno *",
    "contact.email": "E-mail *",
    "contact.phone": "Telefon *",
    "contact.message": "Chceš mi k tomu něco napsat? (nepovinné)",
    "contact.messagePlaceholder": "Zdraví, zkušenosti s cvičením, kdy ti to časově vyhovuje…",
    "contact.terms": "Souhlasím se",
    "contact.termsLink": "zpracováním osobních údajů a podmínkami použití",
    "contact.termsGdpr": "dle GDPR. *",
    "contact.termsDialogTitle": "Podmínky a ochrana osobních údajů",
    "contact.submit": "Odeslat zprávu",
    "contact.submitting": "Odesílám…",
    "contact.successMsg": "Zpráva odeslána. Brzy se ti ozvu.",
    "contact.errorMsg": "Něco se pokazilo. Zkus to prosím znovu.",
    "contact.networkError": "Zprávu se nepodařilo odeslat. Zkus to později, nebo mi zavolej.",
    "contact.formError": "Oprav prosím chyby ve formuláři.",
    "contact.nameMin": "Jméno musí mít alespoň 2 znaky",
    "contact.nameTooLong": "Jméno je příliš dlouhé",
    "contact.invalidEmail": "Neplatná e-mailová adresa",
    "contact.emailTooLong": "E-mail je příliš dlouhý",
    "contact.phoneTooLong": "Telefon je příliš dlouhý",
    "contact.messageMin": "Zpráva musí mít alespoň 10 znaků",
    "contact.messageTooLong": "Zpráva je příliš dlouhá",
    "contact.mustAcceptTerms": "Je potřeba souhlasit s podmínkami",
    "contact.goal": "Co je tvůj hlavní cíl? *",
    "contact.goalRequired": "Vyber prosím svůj cíl",
    "contact.goalPlaceholder": "Vyber cíl",
    "contact.goalStrength": "Nabrat sílu",
    "contact.goalWeight": "Zhubnout a shodit váhu",
    "contact.goalPain": "Hýbat se bez bolesti",
    "contact.goalInjury": "Návrat po zranění nebo operaci",
    "contact.goalFitness": "Lepší kondice a postava",
    "contact.goalOther": "Něco jiného",
    "contact.phoneRequired": "Zadej prosím telefon",
    "contact.phoneInvalid": "Telefon nevypadá správně",
    "terms.close": "Zavřít",
    "terms.ok": "Rozumím",
    "terms.description": "Informace o zpracování osobních údajů a podmínky služeb",

    // Footer
    "footer.rights": "Všechna práva vyhrazena.",
    "footer.terms": "Podmínky a GDPR",

    // Back to top
    backToTop: "Zpět nahoru",
  },
  en: {
    // Navigation
    "nav.process": "How it works",
    "nav.pricing": "Pricing",
    "nav.references": "Reviews",
    "nav.about": "About",
    "nav.cta": "Free session",
    "nav.phone": "Call",
    "nav.menu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.language": "Language",

    // Hero
    "hero.eyebrow": "Personal trainer · MonsterGym Brno-Slatina",
    "hero.title1": "A stronger body.",
    "hero.title2": "Without pain or injuries.",
    "hero.description":
      "First I look at how you move. We get your mobility and body healthy, then build toward your goal: more strength, a better physique, or simply moving without pain.",
    "hero.cta": "Book your first session free",
    "hero.pricing": "Pricing",
    "hero.clients": "clients",
    "hero.priceValue": "600 CZK",
    "hero.price": "per one-hour session",
    "hero.languages": "I train in English too",
    "hero.badgeTitle": "First session free",
    "hero.badgeDesc": "consultation + intro session",
    "hero.imageAlt": "Dominik Holešovský, personal trainer, at MonsterGym",

    // Process
    "process.title": "How we work together",
    "process.subtitle": "No templates. I build the plan around what your body can handle and where you want to get.",
    "process.s1Title": "Free consultation",
    "process.s1Desc": "We talk about your goals, health and experience, and do an intro session together.",
    "process.s2Title": "Movement assessment",
    "process.s2Desc": "I go through your movement patterns and find the weak spots that hold you back or cause pain.",
    "process.s3Title": "Plan and training",
    "process.s3Desc": "We train together, or you get a tailored plan while I keep an eye on technique and progress.",

    // Pricing
    "pricing.title": "Pricing",
    "pricing.subtitle": "The first consultation and intro session are free.",
    "pricing.personalTitle": "Personal training",
    "pricing.personalUnit": "60 minutes",
    "pricing.personalPrice": "600 CZK",
    "pricing.personalB1": "Movement pattern analysis",
    "pricing.personalB2": "Individual training plan",
    "pricing.personalB3": "Focus on injury prevention",
    "pricing.personalCta": "Book a session",
    "pricing.packTitle": "10-session package",
    "pricing.packUnit": "valid for 4 months",
    "pricing.packPrice": "5 400 CZK",
    "pricing.packOriginal": "6 000 CZK",
    "pricing.packB1": "540 CZK per session",
    "pricing.packB2": "Save 600 CZK, one session free",
    "pricing.packB3": "Flexible scheduling",
    "pricing.packCta": "Book the package",
    "pricing.best": "Best value",
    "pricing.planTitle": "Training plan",
    "pricing.planUnit": "for 3 months",
    "pricing.planPrice": "1 000 CZK",
    "pricing.planB1": "Built around your goals",
    "pricing.planB2": "Online consultation",
    "pricing.planB3": "Full exercise instructions",
    "pricing.planCta": "Order a plan",
    "pricing.smallPackLabel": "Smaller package:",
    "pricing.smallPack": "5 sessions for 2 800 CZK",
    "pricing.smallPackDetail": "(560 CZK/session, valid for 2 months)",
    "pricing.originalPrice": "Original price",

    // Testimonials
    "testimonials.title": "What clients say",
    "testimonials.subtitle": "Real people, real results.",
    "testimonials.veraTitle": "No more back pain. Now she runs and lifts.",
    "testimonials.veraStory": "After years of back pain, Veronika got rid of it. Today she happily runs and even lifts weights.",
    "testimonials.vera":
      "With Dominik, I finally understood proper technique and after years of back pain I feel great. His approach is very professional and motivating.",
    "testimonials.tomasTitle": "Back to sport after knee surgery",
    "testimonials.tomasStory": "After knee surgery he wanted to start doing sports and lifting again. We reached that goal together.",
    "testimonials.tomas":
      "A great trainer who has the knowledge and knows how to share it. Thanks to his diagnostics, I improved my performance and increased my strength safely.",
    "testimonials.hanaTitle": "Goals achieved",
    "testimonials.hanaStory": "A tailored plan and patient, step-by-step coaching.",
    "testimonials.hana":
      "Dominik is very patient and can explain everything clearly. A tailored training plan helped me achieve the goals I set for myself.",

    // About
    "about.title": "Hi, I'm Dominik",
    "about.desc1":
      "I'm a certified fitness trainer (MŠMT-accredited qualification, Improve Academy). I believe good training starts with understanding the person and how they move. Only then do we add weight.",
    "about.desc2":
      "I look for weak spots and imbalances, work on your mobility, and on that healthy base we build what you want: strength, fitness, physique or a return to sport. I train at MonsterGym in Brno-Slatina, in Czech and English.",
    "about.cert": "Fitness trainer · MŠMT · Improve Academy",
    "about.tag2": "Movement assessment",
    "about.tag3": "Injury prevention",
    "about.imageAlt": "Dominik Holešovský",
    "about.gallery1": "Training session with a client at MonsterGym",
    "about.gallery2": "Training session with a client, overhead work",
    "about.gallery3": "Training session with a client, dumbbell rows",

    // Contact
    "contact.title": "Start with a free first session",
    "contact.subtitle": "Tell me what bothers you or where you want to get. I usually reply within 24 hours.",
    "contact.gym": "MonsterGym, Brno-Slatina",
    "contact.gymMap": "Show on map",
    "contact.whatsapp": "Message me on WhatsApp",
    "contact.name": "Name *",
    "contact.email": "Email *",
    "contact.phone": "Phone *",
    "contact.message": "Anything else you want to tell me? (optional)",
    "contact.messagePlaceholder": "Health, training experience, what times suit you…",
    "contact.terms": "I agree to the",
    "contact.termsLink": "processing of personal data and terms of use",
    "contact.termsGdpr": "under GDPR. *",
    "contact.termsDialogTitle": "Terms and Privacy Policy",
    "contact.submit": "Send message",
    "contact.submitting": "Sending…",
    "contact.successMsg": "Message sent. I'll get back to you soon.",
    "contact.errorMsg": "Something went wrong. Please try again.",
    "contact.networkError": "The message could not be sent. Please try later or give me a call.",
    "contact.formError": "Please fix the errors in the form.",
    "contact.nameMin": "Name must be at least 2 characters",
    "contact.nameTooLong": "Name is too long",
    "contact.invalidEmail": "Invalid email address",
    "contact.emailTooLong": "Email is too long",
    "contact.phoneTooLong": "Phone is too long",
    "contact.messageMin": "Message must be at least 10 characters",
    "contact.messageTooLong": "Message is too long",
    "contact.mustAcceptTerms": "You need to agree to the terms",
    "contact.goal": "What is your main goal? *",
    "contact.goalRequired": "Please choose your goal",
    "contact.goalPlaceholder": "Choose a goal",
    "contact.goalStrength": "Get stronger",
    "contact.goalWeight": "Lose weight",
    "contact.goalPain": "Move without pain",
    "contact.goalInjury": "Come back after an injury or surgery",
    "contact.goalFitness": "Better fitness and physique",
    "contact.goalOther": "Something else",
    "contact.phoneRequired": "Please enter your phone number",
    "contact.phoneInvalid": "This phone number doesn't look right",
    "terms.close": "Close",
    "terms.ok": "Got it",
    "terms.description": "Information on personal data processing and terms of service",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms and GDPR",

    // Back to top
    backToTop: "Back to top",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Výchozí čeština (stejně jako předgenerované HTML), uložená volba se načte po startu.
  const [lang, setLang] = useState<Language>("cs");

  useEffect(() => {
    try {
      if (localStorage.getItem("language") === "en") setLang("en");
    } catch {
      // úložiště nedostupné – zůstává čeština
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("language", newLang);
    } catch {
      // storage unavailable (private mode) – language still switches for this visit
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
