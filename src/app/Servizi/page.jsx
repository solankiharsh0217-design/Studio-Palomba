import Link from 'next/link';
import { ArrowRight, Check, FileText, Calculator, Users, FileCheck, ShieldAlert, Heart } from 'lucide-react';
import Hero from '@/components/Hero';
import FadeIn from '@/components/FadeIn';
import { SERVICES } from '@/lib/data';

const iconMap = { FileText, Calculator, Users, FileCheck, ShieldAlert, Heart };

export const metadata = {
  title: 'Servizi',
  description:
    "Un'offerta integrata di servizi professionali per supportare ogni aspetto della gestione delle risorse umane nella tua azienda. Consulenza del lavoro, paghe, gestione del personale e molto altro.",
};

export default function ServiziPage() {
  return (
    <>
      <Hero
        eyebrow="I Nostri Servizi"
        title="Soluzioni complete per la gestione del personale"
        subtitle="Un'offerta integrata di servizi professionali per supportare ogni aspetto della gestione delle risorse umane nella tua azienda"
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container-x space-y-20">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText;
            const isReversed = i % 2 === 1;
            return (
              <FadeIn key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                        <Icon size={26} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-navy">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="relative aspect-square max-w-[400px] mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-dark rounded-2xl" />
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/30 rounded-2xl" />
                      <div className="relative h-full flex items-center justify-center">
                        <Icon size={120} className="text-gold" strokeWidth={1.2} />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Hai bisogno di uno di questi servizi?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Contattaci per una consulenza personalizzata. Analizzeremo insieme le tue esigenze per proporti la soluzione più adatta alla tua azienda.
          </p>
          <Link href="/Contatti" className="btn-primary btn-navy text-lg">
            <span>Richiedi informazioni</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
