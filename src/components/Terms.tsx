import type { ReactNode } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="flex flex-col gap-3 border-t border-border pt-6 first:border-t-0 first:pt-0">
    <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-foreground">{title}</h3>
    {children}
  </section>
);

const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="flex flex-col gap-2 pl-5 [list-style:disc] marker:text-primary">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const link = "font-medium text-primary underline underline-offset-2 hover:no-underline";

const Terms = () => {
  return (
    <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-foreground/80">
      <p className="text-sm text-muted-foreground">Platné od 19. 11. 2026</p>

      <div className="rounded-2xl bg-accent p-5 text-accent-foreground">
        <p className="font-semibold">Stručně</p>
        <p className="mt-1">
          Osobní údaje zpracovávám jen proto, abych vám mohl odpovědět a domluvit se na tréninku. Neprodávám je a
          nepoužívám je k reklamě. Web nepoužívá cookies ani sledovací nástroje.
        </p>
      </div>

      <Section title="1. Správce údajů">
        <p>
          Dominik Holešovský, osobní trenér, IČO 14147505
          <br />
          E-mail:{" "}
          <a href={`mailto:${EMAIL}`} className={link}>
            {EMAIL}
          </a>
          , telefon:{" "}
          <a href={PHONE_HREF} className={link}>
            {PHONE_DISPLAY}
          </a>
        </p>
      </Section>

      <Section title="2. Jaké údaje zpracovávám a proč">
        <p>
          Jen údaje, které mi sami pošlete přes kontaktní formulář: jméno, telefon, e-mail, váš tréninkový cíl a případně text zprávy.
          Pokud ve zprávě uvedete informace o svém zdraví, použiji je výhradně k bezpečnému nastavení tréninku.
        </p>
        <p>Údaje používám k tomu, abych:</p>
        <List items={["odpověděl na váš dotaz", "domluvil termín a rozsah služeb", "připravil a vedl vaše tréninky"]} />
        <p>
          Právním základem je jednání o poskytnutí služby na vaši žádost (čl. 6 odst. 1 písm. b) GDPR) a váš souhlas
          (čl. 6 odst. 1 písm. a) GDPR), který můžete kdykoli odvolat.
        </p>
      </Section>

      <Section title="3. Kdo s údaji pracuje">
        <p>K vašim údajům mám přístup jen já. Pro technický provoz webu a e-mailu využívám tyto služby:</p>
        <List
          items={[
            <>
              <strong className="font-semibold text-foreground">Formspree, Inc.</strong> (USA): doručí zprávu z
              formuláře do mého e-mailu
            </>,
            <>
              <strong className="font-semibold text-foreground">Google</strong>: e-mailová schránka Gmail
            </>,
            <>
              <strong className="font-semibold text-foreground">Vercel Inc.</strong>: hosting webu (běžné technické
              záznamy o přístupu)
            </>,
          ]}
        />
        <p>Údaje nikomu dalšímu nepředávám.</p>
      </Section>

      <Section title="4. Jak dlouho údaje uchovávám">
        <p>
          Po dobu nezbytně nutnou pro účel zpracování, nejdéle 3 roky od naší poslední komunikace. Pak je smažu.
        </p>
      </Section>

      <Section title="5. Zabezpečení">
        <p>
          Web běží výhradně přes zabezpečené připojení (HTTPS). Formulář neukládá data na webu, zpráva odchází přímo
          do mého e-mailu.
        </p>
      </Section>

      <Section title="6. Vaše práva">
        <List
          items={[
            "na přístup k údajům, které o vás zpracovávám",
            "na opravu nepřesných údajů",
            "na výmaz údajů",
            "na omezení zpracování",
            "na přenositelnost údajů",
            "vznést námitku proti zpracování",
            "kdykoli odvolat souhlas",
          ]}
        />
        <p>
          Stačí napsat na{" "}
          <a href={`mailto:${EMAIL}`} className={link}>
            {EMAIL}
          </a>
          . Pokud máte pocit, že je vaše právo porušeno, můžete podat stížnost u Úřadu pro ochranu osobních údajů (
          <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer" className={link}>
            uoou.gov.cz
          </a>
          ).
        </p>
      </Section>

      <Section title="7. Cookies">
        <p>
          Web nepoužívá cookies ani analytické či reklamní nástroje. V prohlížeči si ukládá jen zvolený jazyk webu.
        </p>
      </Section>

      <Section title="8. Podmínky služeb">
        <p className="font-semibold text-foreground">Objednávka</p>
        <List
          items={[
            "Objednávka je závazná po vzájemné dohodě o termínu.",
            "Platba probíhá v hotovosti nebo převodem před tréninkem či po něm.",
            "Balíčky tréninků mají stanovenou dobu platnosti.",
          ]}
        />
        <p className="pt-1 font-semibold text-foreground">Storno</p>
        <List
          items={[
            "Zrušení tréninku nejpozději 24 hodin předem je zdarma.",
            "Pozdější zrušení nebo nedostavení se počítá jako odtrénovaný trénink.",
            "V případě nemoci lze termín po dohodě přesunout.",
          ]}
        />
        <p className="pt-1 font-semibold text-foreground">Zdraví</p>
        <List
          items={[
            "Klient je povinen informovat trenéra o zdravotních omezeních.",
            "Trenér nenese odpovědnost za zranění vzniklé nedodržením instrukcí.",
            "Před zahájením tréninku doporučuji konzultaci s lékařem.",
          ]}
        />
      </Section>
    </div>
  );
};

export default Terms;
