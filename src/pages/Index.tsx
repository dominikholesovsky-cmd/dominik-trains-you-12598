import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const { lang } = useLanguage();
  useReveal(lang);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Process />
        <Services />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
