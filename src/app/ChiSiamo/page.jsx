import Image from 'next/image';
import { ShieldCheck, FileCheck, TrendingUp } from 'lucide-react';
import Hero from '@/components/Hero';
import FadeIn from '@/components/FadeIn';
import { TIMELINE, VALUES } from '@/lib/data';

const valueIcons = { Handshake: ShieldCheck, Target: TrendingUp, Lock: FileCheck, Eye: FileCheck };

export const metadata = {
  title: 'Chi Siamo',
  description:
    "Paer Consulting nasce dall'esperienza pluridecennale nel settore della consulenza del lavoro. Scopri la nostra storia, i nostri valori e il metodo di lavoro.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <Hero
        eyebrow="Chi Siamo"
        title="La nostra storia, i nostri valori"
        subtitle="Da oltre 30 anni al fianco delle imprese per la gestione del personale e la consulenza del lavoro"
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
      />

      {/* Story */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <p className="eyebrow text-gold mb-3">La Nostra Storia</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Un percorso di crescita e competenza
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Paer Consulting nasce a Roma all&apos;inizio degli anni &apos;90, fondata con la missione di offrire alle imprese un supporto qualificato e personalizzato per tutte le esigenze legate alla gestione delle risorse umane.
                </p>
                <p>
                  Nel corso degli anni, abbiamo costruito un solido patrimonio di competenze e relazioni professionali, diventando un punto di riferimento per aziende di medie e grandi dimensioni che cercano un partner affidabile per la consulenza del lavoro.
                </p>
                <p>
                  Oggi Paer Consulting può contare su un team di professionisti costantemente aggiornati sulle evoluzioni normative, in grado di offrire un servizio completo e integrato per ogni aspetto della gestione del personale.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gold/30 rounded-2xl -z-0" />
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Team professionale"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-gold mb-3">Il Nostro Percorso</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Tappe fondamentali</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:text-right md:pr-12 pl-16 md:pl-0">
                      {i % 2 === 0 ? (
                        <div>
                          <div className="text-2xl font-bold text-gold mb-1">{item.year}</div>
                          <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-gold border-4 border-white shadow-md" />
                    <div className="md:w-1/2 md:pl-12 pl-16 md:hidden md:md-block">
                      {i % 2 === 1 ? (
                        <div>
                          <div className="text-2xl font-bold text-gold mb-1">{item.year}</div>
                          <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12">
                      {i % 2 === 1 ? (
                        <div>
                          <div className="text-2xl font-bold text-gold mb-1">{item.year}</div>
                          <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-gold mb-3">Il Metodo di Lavoro</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Un approccio consulenziale, non burocratico
            </h2>
            <p className="text-gray-500 text-lg">
              Il nostro metodo si basa sulla prevenzione e sull&apos;ottimizzazione, per garantire ai nostri clienti serenità e risultati concreti
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Prevenzione del rischio', description: 'Analisi preventiva per identificare e mitigare potenziali criticità prima che si verifichino', icon: ShieldCheck },
              { title: 'Conformità normativa', description: 'Monitoraggio costante delle evoluzioni legislative per garantire il pieno rispetto della normativa', icon: FileCheck },
              { title: 'Ottimizzazione dei costi', description: 'Strategie mirate per ottimizzare il costo del lavoro nel rispetto delle regole', icon: TrendingUp },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-5">
                      <Icon size={26} className="text-navy" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 md:py-24 bg-navy text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-gold mb-3">I Nostri Valori</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I principi che guidano il nostro lavoro</h2>
            <p className="text-white/70 text-lg">Valori fondamentali che rappresentano la base di ogni nostra attività</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[v.icon] || ShieldCheck;
              return (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all h-full">
                    <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-5">
                      <Icon size={26} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
