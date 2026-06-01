import Image from 'next/image';
import { Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import FadeIn from '@/components/FadeIn';
import { TEAM } from '@/lib/data';

export const metadata = {
  title: 'Team',
  description:
    'Un team di esperti con oltre 30 anni di esperienza nella consulenza del lavoro e nell\'amministrazione del personale. 12 professionisti dedicati ogni giorno a supportare le imprese italiane.',
};

export default function TeamPage() {
  return (
    <>
      <Hero
        eyebrow="Il Nostro Team"
        title="Professionisti al vostro servizio"
        subtitle="Un team di esperti con oltre 30 anni di esperienza nella consulenza del lavoro e nell'amministrazione del personale - 12 professionisti dedicati ogni giorno a supportare le imprese italiane."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      <section className="py-24 bg-gray-50">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow">
                  <div className="relative h-96 overflow-hidden bg-navy/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-[center_20%] hover:scale-105 transition-transform duration-500"
                    />
                    {member.isFounder && (
                      <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                        Fondatore
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                    <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm flex-1">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Vuoi conoscerci meglio?</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Contattaci per una consulenza personalizzata o per saperne di più sui nostri servizi
          </p>
          <a href="tel:+393483112241" className="btn-primary btn-navy text-lg">
            <Phone size={20} />
            <span>Contattaci</span>
          </a>
        </div>
      </section>
    </>
  );
}
