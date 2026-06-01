import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Check, FileText, Calculator, Users, ShieldAlert } from 'lucide-react';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import FadeIn from '@/components/FadeIn';
import { SERVICES, WHY_US } from '@/lib/data';

const iconMap = { FileText, Calculator, Users, ShieldAlert, FileCheck: FileText, Heart: Users };

export const metadata = {
  title: 'Studio Palomba Consulenza Lavoro',
  description:
    'Il tuo partner strategico per la gestione del personale e la consulenza del lavoro. Offriamo soluzioni su misura per imprese di medie e grandi dimensioni, basate su oltre 30 anni di esperienza.',
};

export default function HomePage() {
  const homeServices = SERVICES.slice(0, 4);
  return (
    <>
      <Hero
        centered
        eyebrow="Studio Palomba"
        title="Consulenza del Lavoro e"
        highlight="Gestione del Personale"
        highlightSuffix="per le Imprese"
        subtitle="Oltre 30 anni di esperienza al fianco delle aziende"
        bgImage="/images/hero-bg.jpg"
      >

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
          <Link href="/Contatti" className="btn-primary btn-gold text-base sm:text-lg shadow-xl shadow-gold/20 w-full sm:w-auto">
            <span>Richiedi una consulenza</span>
            <ArrowRight size={20} />
          </Link>
          <a href="tel:+393483112241" className="btn-primary btn-outline-white text-base sm:text-lg w-full sm:w-auto">
            <Phone size={20} />
            <span>Contattaci</span>
          </a>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl w-full">
          <div className="text-center sm:border-r sm:border-white/15 sm:last:border-r-0">
            <p className="text-5xl sm:text-5xl md:text-6xl font-bold text-gold leading-none">30+</p>
            <p className="text-xs sm:text-sm text-white/70 mt-2 sm:mt-3">Anni di esperienza</p>
          </div>
          <div className="text-center sm:border-r sm:border-white/15">
            <p className="text-5xl sm:text-5xl md:text-6xl font-bold text-gold leading-none">40+</p>
            <p className="text-xs sm:text-sm text-white/70 mt-2 sm:mt-3">Aziende clienti</p>
          </div>
          <div className="text-center">
            <p className="text-5xl sm:text-5xl md:text-6xl font-bold text-gold leading-none">100k</p>
            <p className="text-xs sm:text-sm text-white/70 mt-2 sm:mt-3">Rapporti di lavoro/anno</p>
          </div>
        </div>
      </Hero>

      <ClientLogos />

      {/* Chi Siamo teaser */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left" className="relative">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Team di consulenti al lavoro"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 max-w-[220px] sm:max-w-[240px]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-navy">30+</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Anni di</p>
                      <p className="text-base font-semibold text-navy">Esperienza</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <p className="eyebrow text-gold mb-3">Chi Siamo</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Il vostro partner per la gestione del personale
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Lo Studio Palomba nasce dall&apos;esperienza pluridecennale nel settore della consulenza del lavoro, con l&apos;obiettivo di offrire alle imprese un supporto qualificato e personalizzato per tutte le esigenze legate alla gestione delle risorse umane e agli adempimenti normativi.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Il nostro approccio è consulenziale, non meramente burocratico: lavoriamo al fianco dei nostri clienti per prevenire rischi e ottimizzare la gestione del personale.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {['Supporto strategico alle imprese', 'Gestione completa del personale', 'Consulenza normativa specializzata', 'Approccio consulenziale personalizzato'].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/ChiSiamo" className="btn-primary btn-navy">
                <span>Scopri di più sullo Studio</span>
                <ArrowRight size={18} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="eyebrow text-gold mb-3">Perché Sceglierci</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">I nostri punti di forza</h2>
            <p className="text-gray-500 text-base sm:text-lg">Competenza, affidabilità e dedizione al servizio dei nostri clienti</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => {
              const Icon = iconMap[item.icon] || FileText;
              return (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gold/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors">
                      <Icon size={28} className="text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="eyebrow text-gold mb-3">I Nostri Servizi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Soluzioni complete per la tua azienda</h2>
            <p className="text-gray-500 text-base sm:text-lg">Un&apos;offerta integrata di servizi per supportare ogni aspetto della gestione del personale</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {homeServices.map((service, i) => {
              const Icon = iconMap[service.icon] || FileText;
              return (
                <FadeIn key={service.title} delay={i * 0.1}>
                  <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 h-full flex gap-5">
                    <div className="w-14 h-14 rounded-xl bg-navy group-hover:bg-gold flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/Servizi" className="btn-primary btn-outline-navy">
              <span>Tutti i servizi</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section
        className="relative py-16 sm:py-20 md:py-24 bg-navy text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-navy/90" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl hidden sm:block" />

        <div className="relative container-x text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Hai bisogno di un supporto qualificato per la <span className="text-gold">gestione del personale</span>?
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Contattaci per una consulenza personalizzata. Siamo a disposizione per analizzare le tue esigenze e proporti le soluzioni più adatte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/Contatti" className="btn-primary btn-gold text-base sm:text-lg w-full sm:w-auto">
                <span>Richiedi una consulenza</span>
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+393483112241" className="btn-primary btn-outline-white text-base sm:text-lg w-full sm:w-auto">
                <Phone size={20} />
                <span>Chiama ora</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
