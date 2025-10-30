import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* SKRYTÝ SEO BLOK – pro crawlery a screen-readery */}
      <div className="sr-only">
          <h1>Dominik Holešovský – Certifikovaný osobní trenér Brno</h1>
          <p>
            Nabízím osobní tréninky, online programy a výživové poradenství pro zvýšení síly,
            zdravý pohyb a efektivní tréninkové plány. Více než 4 roky zkušeností a desítky spokojených klientů.
          </p>
          <ul>
            <li><a href="#hero">Úvodní Hero</a></li>
            <li><a href="#services">Moje služby</a></li>
            <li><a href="#testimonials">Reference klientů</a></li>
            <li><a href="#about">O mně</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>

      {/* EXISTUJÍCÍ VIZUÁLNÍ LAYOUT */}
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </div>
  );
};

export default Index;
