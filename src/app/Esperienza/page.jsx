import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Factory, Truck, ShoppingBag, Hotel, Briefcase, HeartPulse, GraduationCap, HardHat, Award, Users, TrendingUp } from 'lucide-react';
import Hero from '@/components/Hero';
import FadeIn from '@/components/FadeIn';
import { STATS, SECTORS, SUCCESS_CASES } from '@/lib/data';

const sectorIcons = { Factory, Truck, ShoppingBag, Hotel, Briefcase, HeartPulse, GraduationCap, HardHat };

export const metadata = {
  title: 'Esperienza',
  description:
    "Oltre tre decenni di attività al servizio delle imprese, con numeri che testimoniano la nostra solidità e affidabilità. 30+ anni di esperienza, 40+ aziende clienti, 100.000 rapporti di lavoro gestiti annualmente.",
};

export default function EsperienzaPage() {
  return (
    <>
      <Hero
        eyebrow="Esperienza e Numeri"
        title="Risultati che parlano da soli"
        subtitle="Oltre tre decenni di attività al servizio delle imprese, con numeri che testimoniano la nostra solidità e affidabilità"
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-navy/5 to-gold/10 rounded-2xl p-8 text-center h-full">
                  <div className="text-5xl md:text-6xl font-bold text-navy mb-3">{s.value}</div>
                  <div className="text-lg font-semibold text-navy mb-1">{s.label}</div>
                  <div className="text-sm text-gray-600">{s.description}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-gold mb-3">Settori di Competenza</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Esperienza trasversale in molteplici settori
            </h2>
            <p className="text-gray-500 text-lg">
              La nostra esperienza spazia in numerosi settori economici, permettendoci di comprendere le specificità di ogni realtà aziendale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((s, i) => {
              const Icon = sectorIcons[s.icon] || Briefcase;
              return (
                <FadeIn key={s.title} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={26} className="text-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500">{s.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <p className="eyebrow text-gold mb-3">Risultati Significativi</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Casi di successo che ci distinguono
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Nel corso degli anni abbiamo affrontato e risolto situazioni complesse, dimostrando la nostra capacità di gestire anche le sfide più impegnative.
              </p>
              <ol className="space-y-5">
                {SUCCESS_CASES.map((c, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gold/15 text-gold font-bold flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed pt-1">{c}</span>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn direction="right" className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                alt="Team di professionisti"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <Users size={22} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-navy">100k+</p>
                    <p className="text-xs text-gray-500">Rapporti gestiti</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                    <Award size={22} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-navy">30+</p>
                    <p className="text-xs text-gray-500">Anni di attività</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="container-x text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Affidati alla nostra esperienza
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Scopri come possiamo supportare la tua azienda con la nostra competenza maturata in oltre 30 anni di attività
            </p>
            <Link href="/Contatti" className="btn-primary btn-gold text-lg">
              <span>Contattaci ora</span>
              <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
